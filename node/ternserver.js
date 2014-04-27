var fs = require('fs'),
    path = require('path'),
    tern = require('tern'),
    os = require('os'),
    module_dir = path.join(__dirname, '../node_modules/tern'),
    plugin_dir = path.join(module_dir, 'plugin'),
    defs_dir = path.join(module_dir, 'defs'),
    maxIdleTime = 6e4 * 5, // Shut down after five minutes of inactivity
    shutdown = setTimeout(doShutdown, maxIdleTime),
    isWin = os.platform() === 'win32',
    DEBUG = false,
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR";

function doShutdown() {
  console.log("Was idle for " + Math.floor(maxIdleTime / 6e4) + " minutes. Shutting down.");
  process.exit();
}

function send(err, data, msg) {
  msg = msg || {};
  var result = { data: {} };
  if (msg) {
    result.cb = msg.cb;
    result.command = msg.command;
    result.data = msg.data || {};
  }
  if (err) {
    result.err = err;
    result.stack = err.stack;
    result.command  = 'error';
  }
  result.data.payload = data || null;
  process.send(result);
}

function _log(level, str, obj) {
  if (DEBUG) {
    send(null, '[' + level + '] '+ str + (obj ? " : " + JSON.stringify(obj) : ""), { command: "log" });
  }
}

function loadLibs(paths) {
  return paths.map(function(x) { return JSON.parse(fs.readFileSync(x)); });
}


function loadPlugins(paths) {
  if (!paths) { _log(INFO, 'No plugins loaded'); }
  var plugins = {};
  (paths || []).forEach(function(x) {
    require(x.path);
    plugins[x.name] = x.opts;
  });
  return plugins;
}


var server;
function getServer(msg) {
  if (server) { return server; }
  _log(INFO, "getServer(msg) : ", msg.command);
  if (msg.command !== 'init') {
    throw new Error("Server not started and on init message received");
  }
  _log(INFO, 'Creating new tern server', msg);
  server = new tern.Server({
    async: true,
    defs: loadLibs(msg.data.payload.config.libs),
    plugins: loadPlugins(msg.data.payload.config.plugins),
    getFile: function(x, cb) {
      var path = x;
      if (!isWin && path && path[0] !== '/') {
        path = '/' + x;
      }
      _log(INFO, "Attempting to load file", path);
      fs.readFile(path, {encoding: 'utf8'}, cb);
    }
  });
  return server;
}

var asyncImportFiles = (function() {
  var cachedFiles = [],
      count = 0,
      nextFile;
  function next(server) {
    nextFile = cachedFiles.pop();
    if (nextFile) {
      try {
        server.addFile(nextFile);
      } catch(e) {
        _log(ERROR, "An error occured while loading file: ", {file: nextFile});
        send(e);
      }
      count++;
      setTimeout(function() { next(server);}, 0);
      return;
    }
    _log(INFO, "Finished loading files", {time: new Date(), count: count });
  }
  return function(server, files) {
    _log(INFO, "Start loading files: ", {startTime: new Date(), fileCount: files.length});
    cachedFiles = cachedFiles.concat(files);
    next(server);
  };
}());


var currentmsg;
process.on('message', function(msg) {
  clearTimeout(shutdown);
  shutdown = setTimeout(doShutdown, maxIdleTime);
  currentmsg = msg;
  try {
    var srv = getServer(msg),
        data = msg.data || {};
    switch(data.type) {
      case 'request':
        _log(INFO, "Received message", data.payload);
        srv.request(data.payload, function(e, out) {
          _log(INFO, "Sending message", out);
          send(e, out, msg);
        });
        _log(INFO, "Server files", srv.files.map(function(x) { return x.name; }));
        break;
      case 'addfiles':
        asyncImportFiles(srv, data.payload);
        send(null, {}, msg);
        break;
      case 'deletefiles':
        data.payload.forEach(function(x) {
          srv.delFile(x);
        });
        send(null, {}, msg);
        break;
      case 'init':
        _log(INFO, 'Init server');
        if (!data.payload.paths) { _log(WARNING, 'No files found for loading'); }
        asyncImportFiles(srv, data.payload.paths || []);
        send(null, {}, msg);
        break;
    }
  } catch (e) {
    // Tern throws Syntax errors for unterminated block comments
    if (e instanceof SyntaxError) return;
    send(e, {}, currentmsg);
    doShutdown();
  }
});

process.on("SIGINT", function() { process.exit(); });
process.on("SIGTERM", function() { process.exit(); });
process.on('uncaughtException', function (err) {
  send(err, {}, currentmsg);
});
