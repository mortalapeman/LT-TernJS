if(!lt.util.load.provided_QMARK_('lt.plugins.tern')) {
goog.provide('lt.plugins.tern');
goog.require('cljs.core');
goog.require('lt.util.cljs');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.auto_complete');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.clients.ws');
goog.require('lt.util.cljs');
goog.require('lt.objs.files');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.auto_complete');
goog.require('lt.objs.clients');
goog.require('lt.util.load');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.clients.ws');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.editor');
lt.plugins.tern.plugin_dir = (function (){var temp__4090__auto__ = lt.objs.plugins._STAR_plugin_dir_STAR_;if(cljs.core.truth_(temp__4090__auto__))
{var dir = temp__4090__auto__;return dir;
} else
{return lt.objs.files.join.call(null,lt.objs.plugins.user_plugins_dir,"ternjs");
}
})();
lt.plugins.tern.ternserver_path = lt.objs.files.join.call(null,lt.plugins.tern.plugin_dir,"node","ternserver.js");
lt.plugins.tern.js_mime = (new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),(function (){return new cljs.core.Keyword(null,"mime","mime",1017255846).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"types","types",1124748267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.files.files_obj)),"Javascript"));
})));
lt.plugins.tern.js_ext = /\.js$/;
lt.plugins.tern.jsfile_QMARK_ = (function jsfile_QMARK_(p){return cljs.core.re_find.call(null,lt.plugins.tern.js_ext,p);
});
lt.plugins.tern.all_js_files = (function all_js_files(ws){var ds = new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ws));var fs = cljs.core.filter.call(null,lt.plugins.tern.jsfile_QMARK_,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ws)));return cljs.core.concat.call(null,fs,cljs.core.mapcat.call(null,(function (p1__8240_SHARP_){return lt.objs.files.filter_walk.call(null,lt.plugins.tern.jsfile_QMARK_,p1__8240_SHARP_);
}),ds));
});
lt.plugins.tern.dir__GT_jsfiles = (function dir__GT_jsfiles(dir){return lt.objs.files.filter_walk.call(null,lt.plugins.tern.jsfile_QMARK_,dir);
});
lt.plugins.tern.tern_msg = (function tern_msg(t,d){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),cljs.core.name.call(null,t),new cljs.core.Keyword(null,"payload","payload",4522169600),d], null);
});
lt.plugins.tern.ed__GT_query = (function() {
var ed__GT_query = null;
var ed__GT_query__2 = (function (editor,type){return ed__GT_query.call(null,editor,type,cljs.core.PersistentArrayMap.EMPTY);
});
var ed__GT_query__3 = (function (editor,type,query_ops){return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),cljs.core.name.call(null,type),new cljs.core.Keyword(null,"file","file",1017047278),cljs.core.get_in.call(null,cljs.core.deref.call(null,editor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"path","path",1017337751)], null)),new cljs.core.Keyword(null,"end","end",1014004813),lt.objs.editor.__GT_cursor.call(null,editor)], null),query_ops);
});
ed__GT_query = function(editor,type,query_ops){
switch(arguments.length){
case 2:
return ed__GT_query__2.call(this,editor,type);
case 3:
return ed__GT_query__3.call(this,editor,type,query_ops);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ed__GT_query.cljs$core$IFn$_invoke$arity$2 = ed__GT_query__2;
ed__GT_query.cljs$core$IFn$_invoke$arity$3 = ed__GT_query__3;
return ed__GT_query;
})()
;
lt.plugins.tern.ed__GT_fullfile = (function ed__GT_fullfile(editor){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.get_in.call(null,cljs.core.deref.call(null,editor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"path","path",1017337751)], null)),new cljs.core.Keyword(null,"text","text",1017460895),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"type","type",1017479852),"full"], null);
});
lt.plugins.tern.ed__GT_mime = (function ed__GT_mime(editor){return new cljs.core.Keyword(null,"mime","mime",1017255846).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));
});
lt.plugins.tern.ed__GT_req = (function() {
var ed__GT_req = null;
var ed__GT_req__2 = (function (editor,type){return ed__GT_req.call(null,editor,type,cljs.core.PersistentArrayMap.EMPTY);
});
var ed__GT_req__3 = (function (editor,type,query_ops){return lt.plugins.tern.tern_msg.call(null,new cljs.core.Keyword(null,"request","request",2109597185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",1121848378),lt.plugins.tern.ed__GT_query.call(null,editor,type,query_ops),new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.tern.ed__GT_fullfile.call(null,editor)], null)], null));
});
ed__GT_req = function(editor,type,query_ops){
switch(arguments.length){
case 2:
return ed__GT_req__2.call(this,editor,type);
case 3:
return ed__GT_req__3.call(this,editor,type,query_ops);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ed__GT_req.cljs$core$IFn$_invoke$arity$2 = ed__GT_req__2;
ed__GT_req.cljs$core$IFn$_invoke$arity$3 = ed__GT_req__3;
return ed__GT_req;
})()
;
lt.plugins.tern.id = (function id(msg){var v = msg.cb;if(typeof v === 'string')
{return cljs.core.symbol.call(null,v);
} else
{if(typeof v === 'number')
{return v;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
lt.plugins.tern.id_QMARK_ = (function id_QMARK_(msg){return cljs.core.boolean$.call(null,lt.plugins.tern.id.call(null,msg));
});
lt.plugins.tern.err = (function err(msg){return msg.err;
});
lt.plugins.tern.err_QMARK_ = (function err_QMARK_(msg){return cljs.core.boolean$.call(null,lt.plugins.tern.err.call(null,msg));
});
lt.plugins.tern.command = (function command(msg){return msg.command;
});
lt.plugins.tern.payload = (function payload(msg){var and__6746__auto__ = msg.data;if(cljs.core.truth_(and__6746__auto__))
{return msg.data.payload;
} else
{return and__6746__auto__;
}
});
lt.plugins.tern.stack = (function stack(msg){return msg.stack;
});
lt.plugins.tern.init_QMARK_ = (function init_QMARK_(msg){return (!(lt.plugins.tern.id_QMARK_.call(null,msg))) && (cljs.core._EQ_.call(null,lt.plugins.tern.command.call(null,msg),"init"));
});
lt.plugins.tern.ignore_QMARK_ = (function ignore_QMARK_(msg){return cljs.core._EQ_.call(null,lt.plugins.tern.command.call(null,msg),"ignore");
});
lt.plugins.tern.__BEH__send = (function __BEH__send(this$,msg){return new cljs.core.Keyword("lt.plugins.tern","worker","lt.plugins.tern/worker",3141178359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).send(cljs.core.clj__GT_js.call(null,msg));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","send","lt.plugins.tern/send",4301526977),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__send,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send!","send!",1123226891),null], null), null));
lt.plugins.tern.__BEH__start_server = (function __BEH__start_server(this$){var cp = require("child_process");var worker = cp.fork(lt.plugins.tern.ternserver_path,["--harmony"],{"silent": true, "execPath": lt.objs.files.lt_home.call(null,lt.objs.thread.node_exe.call(null))});var data = cljs.core.clj__GT_js.call(null,lt.plugins.tern.tern_msg.call(null,new cljs.core.Keyword(null,"addfiles","addfiles",4079186408),lt.plugins.tern.all_js_files.call(null,lt.objs.workspace.current_ws)));var dis = ((function (cp,worker,data){
return (function (code,signal){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"kill","kill",1017196240));
});})(cp,worker,data))
;var msg = ((function (cp,worker,data,dis){
return (function (m){if(lt.plugins.tern.ignore_QMARK_.call(null,m))
{return null;
} else
{if(lt.plugins.tern.id_QMARK_.call(null,m))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.tern.id.call(null,m),lt.plugins.tern.command.call(null,m),lt.plugins.tern.payload.call(null,m)], null));
} else
{if(lt.plugins.tern.init_QMARK_.call(null,m))
{lt.objs.notifos.done_working.call(null,[cljs.core.str("Connected to: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))].join(''));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"connect","connect",1965255772),this$);
} else
{if(lt.plugins.tern.err_QMARK_.call(null,m))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"error","error",1110689146),m);
} else
{return null;
}
}
}
}
});})(cp,worker,data,dis))
;worker.on("message",msg);
worker.on("disconnect",dis);
worker.on("exit",dis);
worker.send({"command": "init", "data": data});
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.tern","worker","lt.plugins.tern/worker",3141178359),worker], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","start-server","lt.plugins.tern/start-server",3579757639),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__start_server,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-server","start-server",3886904960),null], null), null));
lt.plugins.tern.__BEH__error = (function __BEH__error(this$,msg){return console.error(lt.plugins.tern.stack.call(null,msg));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","error","lt.plugins.tern/error",4428469057),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),null], null), null));
lt.plugins.tern.__BEH__kill = (function __BEH__kill(this$){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"disconnect","disconnect",1544309774));
var temp__4092__auto__ = new cljs.core.Keyword("lt.plugins.tern","worker","lt.plugins.tern/worker",3141178359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto__))
{var worker = temp__4092__auto__;worker.kill();
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.tern","worker","lt.plugins.tern/worker",3141178359),null], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","kill","lt.plugins.tern/kill",4329208983),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__kill,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kill","kill",1017196240),null], null), null));
lt.plugins.tern.__BEH__disconnect = (function __BEH__disconnect(this$){var temp__4092__auto___8242 = new cljs.core.Keyword("lt.plugins.tern","worker","lt.plugins.tern/worker",3141178359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8242))
{var worker_8243 = temp__4092__auto___8242;if(cljs.core.truth_(worker_8243.connected))
{worker_8243.disconnect();
} else
{}
} else
{}
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),false], null));
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Disconnected from Javascript auto-complete server")].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","disconnect","lt.plugins.tern/disconnect",3782992085),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__disconnect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disconnect","disconnect",1544309774),null], null), null));
lt.plugins.tern.__BEH__try_send = (function __BEH__try_send(this$,_){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{lt.objs.notifos.working.call(null,[cljs.core.str("Connecting to: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))].join(''));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"start-server","start-server",3886904960));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","try-send","lt.plugins.tern/try-send",2615233939),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__try_send,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"try-send!","try-send!",4325864057),null], null), null),new cljs.core.Keyword(null,"order","order",1119910592),-7);
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","tern.client","lt.plugins.tern/tern.client",3665262821),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tern.client","tern.client",4004897758),null,new cljs.core.Keyword(null,"client","client",3951159101),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Tern Javascript Server",new cljs.core.Keyword(null,"queue","queue",1121848451),cljs.core.PersistentVector.EMPTY);
lt.plugins.tern.tern_client = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.tern","tern.client","lt.plugins.tern/tern.client",3665262821));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tern.send-current-document","tern.send-current-document",4050773829),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tern: Send current document to server",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var editor = lt.objs.editor.pool.last_active.call(null);if((cljs.core._EQ_.call(null,lt.plugins.tern.ed__GT_mime.call(null,editor),cljs.core.deref.call(null,lt.plugins.tern.js_mime))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.auto_complete.hinter)))))
{return lt.objs.clients.send.call(null,lt.plugins.tern.tern_client,new cljs.core.Keyword(null,"ignore","ignore",4118475076),lt.plugins.tern.tern_msg.call(null,new cljs.core.Keyword(null,"request","request",2109597185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.tern.ed__GT_fullfile.call(null,editor)], null)], null)));
} else
{return null;
}
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tern.reset","tern.reset",3202251776),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tern: Reset the Tern javascript server",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.object.raise.call(null,lt.plugins.tern.tern_client,new cljs.core.Keyword(null,"kill","kill",1017196240));
return lt.object.raise.call(null,lt.plugins.tern.tern_client,new cljs.core.Keyword(null,"start-server","start-server",3886904960));
})], null));
lt.plugins.tern.update_server = (function update_server(this$,action,path){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{if(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,path)))
{return lt.objs.clients.send.call(null,this$,new cljs.core.Keyword(null,"ignore","ignore",4118475076),lt.plugins.tern.tern_msg.call(null,action,lt.plugins.tern.dir__GT_jsfiles.call(null,path)));
} else
{if(cljs.core.truth_((function (){var and__6746__auto__ = lt.objs.files.file_QMARK_.call(null,path);if(cljs.core.truth_(and__6746__auto__))
{return lt.plugins.tern.jsfile_QMARK_.call(null,path);
} else
{return and__6746__auto__;
}
})()))
{return lt.objs.clients.send.call(null,this$,new cljs.core.Keyword(null,"ignore","ignore",4118475076),lt.plugins.tern.tern_msg.call(null,action,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null)));
} else
{return null;
}
}
} else
{return null;
}
});
lt.plugins.tern.__BEH__watched__DOT__create = (function __BEH__watched__DOT__create(_,path){return lt.plugins.tern.update_server.call(null,lt.plugins.tern.tern_client,new cljs.core.Keyword(null,"addfiles","addfiles",4079186408),path);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","watched.create","lt.plugins.tern/watched.create",4569437877),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__watched__DOT__create,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watched.create","watched.create",749519022),null], null), null));
lt.plugins.tern.__BEH__watched__DOT__delete = (function __BEH__watched__DOT__delete(_,path){return lt.plugins.tern.update_server.call(null,lt.plugins.tern.tern_client,new cljs.core.Keyword(null,"deletefiles","deletefiles",4193188638),path);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","watched.delete","lt.plugins.tern/watched.delete",4754191206),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__watched__DOT__delete,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watched.delete","watched.delete",766354781),null], null), null));
lt.plugins.tern.__BEH__reset_on_update = (function __BEH__reset_on_update(_){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tern.reset","tern.reset",3202251776));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","reset-on-update","lt.plugins.tern/reset-on-update",3213245940),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__reset_on_update,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null,new cljs.core.Keyword(null,"updated","updated",779473965),null], null), null));
lt.plugins.tern.__BEH__trigger_update_hints = (function __BEH__trigger_update_hints(editor){var req = lt.plugins.tern.ed__GT_req.call(null,editor,new cljs.core.Keyword(null,"completions","completions",1416465289));var cb = ((function (req){
return (function (_,data){return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.javascript.hints.result","editor.javascript.hints.result",1109152337),data);
});})(req))
;return lt.objs.clients.send.call(null,lt.plugins.tern.tern_client,new cljs.core.Keyword(null,"request","request",2109597185),req,new cljs.core.Keyword(null,"only","only",1017320222),cb);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","trigger-update-hints","lt.plugins.tern/trigger-update-hints",2763925304),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__trigger_update_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.javascript.hints.update!","editor.javascript.hints.update!",2634618216),null], null), null));
lt.plugins.tern.__BEH__finish_update_hints = (function __BEH__finish_update_hints(editor,res){if(cljs.core.truth_(res))
{lt.object.merge_BANG_.call(null,editor,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword("lt.plugins.tern","hints","lt.plugins.tern/hints",4426265349)],[cljs.core.map.call(null,(function (p1__8241_SHARP_){return {"completion": p1__8241_SHARP_};
}),res.completions)]));
return lt.object.raise.call(null,lt.plugins.auto_complete.hinter,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","finish-update-hints","lt.plugins.tern/finish-update-hints",982328315),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__finish_update_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.javascript.hints.result","editor.javascript.hints.result",1109152337),null], null), null));
lt.plugins.tern.__BEH__use_tern_hints = (function __BEH__use_tern_hints(editor,hints,token){if(cljs.core.not_EQ_.call(null,token,new cljs.core.Keyword("lt.plugins.tern","token","lt.plugins.tern/token",4404476788).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))))
{lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.tern","token","lt.plugins.tern/token",4404476788),token], null));
lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.javascript.hints.update!","editor.javascript.hints.update!",2634618216));
} else
{}
var temp__4090__auto__ = new cljs.core.Keyword("lt.plugins.tern","hints","lt.plugins.tern/hints",4426265349).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));if(cljs.core.truth_(temp__4090__auto__))
{var js_hints = temp__4090__auto__;return js_hints;
} else
{return hints;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","use-tern-hints","lt.plugins.tern/use-tern-hints",4236935659),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__use_tern_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hints+","hints+",4091697745),null], null), null));
lt.plugins.tern.__BEH__line_change = (function __BEH__line_change(editor,line,change){if(cljs.core._EQ_.call(null,cljs.core.last.call(null,line.text),"."))
{return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword("lt.plugins.tern","clear-token","lt.plugins.tern/clear-token",546594548));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","line-change","lt.plugins.tern/line-change",3474011172),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__line_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-change","line-change",3952584475),null], null), null));
lt.plugins.tern.__BEH__clear_token = (function __BEH__clear_token(_){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword("lt.plugins.tern","clear-token","lt.plugins.tern/clear-token",546594548));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","clear-token","lt.plugins.tern/clear-token",546594548),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__clear_token,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"escape!","escape!",3844244274),null,new cljs.core.Keyword(null,"select-unknown","select-unknown",2733767659),null,new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword("lt.plugins.tern","clear-token","lt.plugins.tern/clear-token",546594548),new cljs.core.Keyword(null,"desc","desc",1016984067),"Editor: Clear last Tern token",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.merge_BANG_.call(null,lt.objs.editor.pool.last_active.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lt.plugins.tern","token","lt.plugins.tern/token",4404476788),new cljs.core.Keyword(null,"none","none",1017291434),new cljs.core.Keyword("lt.plugins.tern","hints","lt.plugins.tern/hints",4426265349),null], null));
})], null));
lt.plugins.tern.__BEH__javascript_doc = (function __BEH__javascript_doc(editor){var req = lt.plugins.tern.ed__GT_req.call(null,editor,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docs","docs",1016993197),true,new cljs.core.Keyword(null,"types","types",1124748267),true], null));var loc = lt.objs.editor.__GT_cursor.call(null,editor);var cb = ((function (req,loc){
return (function (_,result){var doc = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"doc","doc",1014003882),result.doc,new cljs.core.Keyword(null,"args","args",1016906831),result.type,new cljs.core.Keyword(null,"loc","loc",1014011570),loc,new cljs.core.Keyword(null,"file","file",1017047278),result.origin,new cljs.core.Keyword(null,"name","name",1017277949),result.name], null);return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.javascript.doc","editor.javascript.doc",1489701706),doc);
});})(req,loc))
;return lt.objs.clients.send.call(null,lt.plugins.tern.tern_client,new cljs.core.Keyword(null,"request","request",2109597185),req,new cljs.core.Keyword(null,"only","only",1017320222),cb);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","javascript-doc","lt.plugins.tern/javascript-doc",3555955985),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__javascript_doc,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.doc","editor.doc",3751347369),null], null), null));
lt.plugins.tern.__BEH__print_javascript_doc = (function __BEH__print_javascript_doc(editor,result){if(cljs.core.truth_(result))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.doc.show!","editor.doc.show!",1417900223),result);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","print-javascript-doc","lt.plugins.tern/print-javascript-doc",2697873777),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__print_javascript_doc,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.javascript.doc","editor.javascript.doc",1489701706),null], null), null));
lt.plugins.tern.__BEH__jump_to_definition = (function __BEH__jump_to_definition(editor){var req = lt.plugins.tern.ed__GT_req.call(null,editor,new cljs.core.Keyword(null,"definition","definition",4294453445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lineCharPositions","lineCharPositions",515471762),true], null));var cb = ((function (req){
return (function (_,data){return lt.object.raise.call(null,lt.objs.jump_stack.jump_stack,new cljs.core.Keyword(null,"jump-stack.push!","jump-stack.push!",4063822260),editor,data.file,data.start);
});})(req))
;return lt.objs.clients.send.call(null,lt.plugins.tern.tern_client,new cljs.core.Keyword(null,"request","request",2109597185),req,new cljs.core.Keyword(null,"only","only",1017320222),cb);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","jump-to-definition","lt.plugins.tern/jump-to-definition",3529180351),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__jump_to_definition,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.jump-to-definition-at-cursor!","editor.jump-to-definition-at-cursor!",4501637705),null], null), null));
}

//# sourceMappingURL=ternjs_compiled.js.map