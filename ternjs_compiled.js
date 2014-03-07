if(!lt.util.load.provided_QMARK_('lt.plugins.tern')) {
goog.provide('lt.plugins.tern');
goog.require('cljs.core');
goog.require('lt.util.cljs');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.auto_complete');
goog.require('lt.objs.workspace');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.workspace');
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
lt.plugins.tern.tern_dir = lt.objs.files.join.call(null,lt.plugins.tern.plugin_dir,"node_modules","tern");
lt.plugins.tern.tern_lib_dir = lt.objs.files.join.call(null,lt.plugins.tern.tern_dir,"defs");
lt.plugins.tern.tern_plugin_dir = lt.objs.files.join.call(null,lt.plugins.tern.tern_dir,"plugin");
lt.plugins.tern.ternserver_path = lt.objs.files.join.call(null,lt.plugins.tern.plugin_dir,"node","ternserver.js");
lt.plugins.tern.js_mime = (new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),(function (){return new cljs.core.Keyword(null,"mime","mime",1017255846).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"types","types",1124748267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.files.files_obj)),"Javascript"));
})));
lt.plugins.tern.js_ext = /\.js$/;
lt.plugins.tern.fs = require("fs");
lt.plugins.tern.readdir = (function readdir(dir,cb){return lt.plugins.tern.fs.readdir.call(null,dir,cb);
});
lt.plugins.tern.stat = (function stat(path,cb){return lt.plugins.tern.fs.stat.call(null,path,cb);
});
lt.plugins.tern.gitdir_QMARK_ = (function gitdir_QMARK_(p){return cljs.core._EQ_.call(null,".git",lt.objs.files.basename.call(null,p));
});
lt.plugins.tern.nodemoduledir_QMARK_ = (function nodemoduledir_QMARK_(p){return cljs.core._EQ_.call(null,"node_modules",lt.objs.files.basename.call(null,p));
});
lt.plugins.tern.jsfile_QMARK_ = (function jsfile_QMARK_(p){return cljs.core.boolean$.call(null,cljs.core.re_find.call(null,lt.plugins.tern.js_ext,p));
});
lt.plugins.tern.plugin_jsfile_QMARK_ = (function plugin_jsfile_QMARK_(p){return cljs.core.boolean$.call(null,(function (){var and__6746__auto__ = lt.plugins.tern.jsfile_QMARK_.call(null,p);if(and__6746__auto__)
{return cljs.core.re_find.call(null,/_compiled/,p);
} else
{return and__6746__auto__;
}
})());
});
lt.plugins.tern.async_filter_walk = (function (){var method_table__7610__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7611__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7612__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7614__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("async-filter-walk",(function (arg,ignore_QMARK_,done){return typeof arg === 'string';
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7614__auto__,method_table__7610__auto__,prefer_table__7611__auto__,method_cache__7612__auto__,cached_hierarchy__7613__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.tern.async_filter_walk,true,(function (dir,ignore_QMARK_,done){var results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var error = cljs.core.atom.call(null,null);var handle_error = ((function (results,error){
return (function (e){if(cljs.core.truth_(cljs.core.deref.call(null,error)))
{return null;
} else
{cljs.core.reset_BANG_.call(null,error,e);
return done.call(null,e,null);
}
});})(results,error))
;var recur_cb = ((function (results,error,handle_error){
return (function (pending,done__$1){return ((function (results,error,handle_error){
return (function (e,r){if(cljs.core.truth_(e))
{return handle_error.call(null,e);
} else
{cljs.core.swap_BANG_.call(null,results,cljs.core.concat,r);
cljs.core.swap_BANG_.call(null,pending,cljs.core.dec);
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,pending)))
{return done__$1.call(null,null,cljs.core.deref.call(null,results));
} else
{return null;
}
}
});
;})(results,error,handle_error))
});})(results,error,handle_error))
;var stat_cb = ((function (results,error,handle_error,recur_cb){
return (function (pending,done__$1,p){return ((function (results,error,handle_error,recur_cb){
return (function (e,stats){if(cljs.core.truth_(e))
{return handle_error.call(null,e);
} else
{if(cljs.core.truth_(ignore_QMARK_.call(null,p,stats)))
{cljs.core.swap_BANG_.call(null,pending,cljs.core.dec);
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,pending)))
{return done__$1.call(null,null,cljs.core.deref.call(null,results));
} else
{return null;
}
} else
{if(cljs.core.truth_(stats.isDirectory()))
{return lt.plugins.tern.async_filter_walk.call(null,p,ignore_QMARK_,recur_cb.call(null,pending,done__$1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{cljs.core.swap_BANG_.call(null,results,cljs.core.conj,p);
cljs.core.swap_BANG_.call(null,pending,cljs.core.dec);
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,pending)))
{return done__$1.call(null,null,cljs.core.deref.call(null,results));
} else
{return null;
}
} else
{return null;
}
}
}
}
});
;})(results,error,handle_error,recur_cb))
});})(results,error,handle_error,recur_cb))
;return lt.plugins.tern.readdir.call(null,dir,(function (e,paths){if(cljs.core.truth_(e))
{return handle_error.call(null,e);
} else
{if(cljs.core._EQ_.call(null,0,paths.length))
{return done.call(null,null,cljs.core.deref.call(null,results));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var pending = cljs.core.atom.call(null,paths.length);var seq__13299 = cljs.core.seq.call(null,paths);var chunk__13301 = null;var count__13302 = 0;var i__13303 = 0;while(true){
if((i__13303 < count__13302))
{var x = cljs.core._nth.call(null,chunk__13301,i__13303);var p_13337 = lt.objs.files.join.call(null,dir,x);lt.plugins.tern.stat.call(null,p_13337,stat_cb.call(null,pending,done,p_13337));
{
var G__13338 = seq__13299;
var G__13339 = chunk__13301;
var G__13340 = count__13302;
var G__13341 = (i__13303 + 1);
seq__13299 = G__13338;
chunk__13301 = G__13339;
count__13302 = G__13340;
i__13303 = G__13341;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13299);if(temp__4092__auto__)
{var seq__13299__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13299__$1))
{var c__7500__auto__ = cljs.core.chunk_first.call(null,seq__13299__$1);{
var G__13342 = cljs.core.chunk_rest.call(null,seq__13299__$1);
var G__13343 = c__7500__auto__;
var G__13344 = cljs.core.count.call(null,c__7500__auto__);
var G__13345 = 0;
seq__13299 = G__13342;
chunk__13301 = G__13343;
count__13302 = G__13344;
i__13303 = G__13345;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__13299__$1);var p_13346 = lt.objs.files.join.call(null,dir,x);lt.plugins.tern.stat.call(null,p_13346,stat_cb.call(null,pending,done,p_13346));
{
var G__13347 = cljs.core.next.call(null,seq__13299__$1);
var G__13348 = null;
var G__13349 = 0;
var G__13350 = 0;
seq__13299 = G__13347;
chunk__13301 = G__13348;
count__13302 = G__13349;
i__13303 = G__13350;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
}
}
}));
}));
cljs.core._add_method.call(null,lt.plugins.tern.async_filter_walk,false,(function (dirs,ignore_QMARK_,done){var pending = cljs.core.atom.call(null,cljs.core.count.call(null,dirs));var results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);var error = cljs.core.atom.call(null,null);var cb = ((function (pending,results,error){
return (function (e,r){cljs.core.swap_BANG_.call(null,pending,cljs.core.dec);
if(cljs.core.truth_(e))
{if(cljs.core.truth_(cljs.core.deref.call(null,error)))
{return null;
} else
{done.call(null,e,null);
return cljs.core.reset_BANG_.call(null,error,e);
}
} else
{cljs.core.swap_BANG_.call(null,results,cljs.core.concat,r);
if(cljs.core._EQ_.call(null,0,cljs.core.deref.call(null,pending)))
{return done.call(null,null,cljs.core.deref.call(null,results));
} else
{return null;
}
}
});})(pending,results,error))
;var seq__13305 = cljs.core.seq.call(null,dirs);var chunk__13306 = null;var count__13307 = 0;var i__13308 = 0;while(true){
if((i__13308 < count__13307))
{var p = cljs.core._nth.call(null,chunk__13306,i__13308);lt.plugins.tern.async_filter_walk.call(null,p,ignore_QMARK_,cb);
{
var G__13351 = seq__13305;
var G__13352 = chunk__13306;
var G__13353 = count__13307;
var G__13354 = (i__13308 + 1);
seq__13305 = G__13351;
chunk__13306 = G__13352;
count__13307 = G__13353;
i__13308 = G__13354;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13305);if(temp__4092__auto__)
{var seq__13305__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13305__$1))
{var c__7500__auto__ = cljs.core.chunk_first.call(null,seq__13305__$1);{
var G__13355 = cljs.core.chunk_rest.call(null,seq__13305__$1);
var G__13356 = c__7500__auto__;
var G__13357 = cljs.core.count.call(null,c__7500__auto__);
var G__13358 = 0;
seq__13305 = G__13355;
chunk__13306 = G__13356;
count__13307 = G__13357;
i__13308 = G__13358;
continue;
}
} else
{var p = cljs.core.first.call(null,seq__13305__$1);lt.plugins.tern.async_filter_walk.call(null,p,ignore_QMARK_,cb);
{
var G__13359 = cljs.core.next.call(null,seq__13305__$1);
var G__13360 = null;
var G__13361 = 0;
var G__13362 = 0;
seq__13305 = G__13359;
chunk__13306 = G__13360;
count__13307 = G__13361;
i__13308 = G__13362;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
lt.plugins.tern.tern_ignore = (function tern_ignore(p,stats){if(cljs.core.truth_(stats.isDirectory()))
{return (lt.plugins.tern.gitdir_QMARK_.call(null,p)) || (lt.plugins.tern.nodemoduledir_QMARK_.call(null,p));
} else
{return (lt.plugins.tern.plugin_jsfile_QMARK_.call(null,p)) || (!(lt.plugins.tern.jsfile_QMARK_.call(null,p)));
}
});
lt.plugins.tern.current_ws_jsfiles = (function current_ws_jsfiles(done){var ws = cljs.core.deref.call(null,lt.objs.workspace.current_ws);var ds = new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(ws);var fs = cljs.core.filter.call(null,lt.plugins.tern.jsfile_QMARK_,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(ws));return lt.plugins.tern.async_filter_walk.call(null,ds,lt.plugins.tern.tern_ignore,(function (e,r){return done.call(null,e,cljs.core.concat.call(null,fs,r));
}));
});
lt.plugins.tern.dir__GT_jsfiles = (function dir__GT_jsfiles(dir,done){return lt.plugins.tern.async_filter_walk.call(null,dir,lt.plugins.tern.tern_ignore,done);
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
lt.plugins.tern.indent = (function indent(s){return cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.comp.call(null,cljs.core.true_QMARK_,cljs.core.boolean$),cljs.core.map.call(null,(function (p1__13309_SHARP_){return cljs.core.re_find.call(null,/[ \t]/,p1__13309_SHARP_);
}),s)));
});
lt.plugins.tern.jsfn_QMARK_ = (function jsfn_QMARK_(s){return cljs.core.boolean$.call(null,cljs.core.re_find.call(null,/function/,s));
});
lt.plugins.tern.back_search = (function back_search(strs,max_indent){var line_info = (function line_info(i,v){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",1114250308),i,new cljs.core.Keyword(null,"indent","indent",4124632094),lt.plugins.tern.indent.call(null,v),new cljs.core.Keyword(null,"jsfn?","jsfn?",1115324928),lt.plugins.tern.jsfn_QMARK_.call(null,v)], null);
});
var match_QMARK_ = (function match_QMARK_(p__13319){var map__13321 = p__13319;var map__13321__$1 = ((cljs.core.seq_QMARK_.call(null,map__13321))?cljs.core.apply.call(null,cljs.core.hash_map,map__13321):map__13321);var indent = cljs.core.get.call(null,map__13321__$1,new cljs.core.Keyword(null,"indent","indent",4124632094));var jsfn_QMARK_ = cljs.core.get.call(null,map__13321__$1,new cljs.core.Keyword(null,"jsfn?","jsfn?",1115324928));var and__6746__auto__ = jsfn_QMARK_;if(cljs.core.truth_(and__6746__auto__))
{return (max_indent >= indent);
} else
{return and__6746__auto__;
}
});
return cljs.core.first.call(null,cljs.core.filter.call(null,match_QMARK_,cljs.core.map_indexed.call(null,line_info,strs)));
});
lt.plugins.tern.forward_search = (function forward_search(strs,max_indent){var line_info = (function line_info(i,v){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",1114250308),i,new cljs.core.Keyword(null,"blockend?","blockend?",1886862403),(max_indent >= lt.plugins.tern.indent.call(null,v))], null);
});
return cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"blockend?","blockend?",1886862403),cljs.core.drop.call(null,1,cljs.core.map_indexed.call(null,line_info,strs))));
});
lt.plugins.tern.partial_range = (function partial_range(editor){var map__13324 = lt.objs.editor.__GT_cursor.call(null,editor);var map__13324__$1 = ((cljs.core.seq_QMARK_.call(null,map__13324))?cljs.core.apply.call(null,cljs.core.hash_map,map__13324):map__13324);var ch = cljs.core.get.call(null,map__13324__$1,new cljs.core.Keyword(null,"ch","ch",1013907415));var line = cljs.core.get.call(null,map__13324__$1,new cljs.core.Keyword(null,"line","line",1017226086));var min_line = (function (){var x__7065__auto__ = 0;var y__7066__auto__ = (line - 50);return ((x__7065__auto__ > y__7066__auto__) ? x__7065__auto__ : y__7066__auto__);
})();var max_line = (function (){var x__7072__auto__ = lt.objs.editor.__GT_cm_ed.call(null,editor).lastLine();var y__7073__auto__ = (line + 20);return ((x__7072__auto__ < y__7073__auto__) ? x__7072__auto__ : y__7073__auto__);
})();var text = lt.objs.editor.range.call(null,editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),min_line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),max_line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));var vec__13325 = cljs.core.partition_all.call(null,(line - min_line),text.split("\n"));var b = cljs.core.nth.call(null,vec__13325,0,null);var f = cljs.core.nth.call(null,vec__13325,1,null);var max_indent = lt.plugins.tern.indent.call(null,cljs.core.first.call(null,f));var back_result = lt.plugins.tern.back_search.call(null,cljs.core.reverse.call(null,b),max_indent);var back_index = (function (){var or__6758__auto__ = new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(back_result);if(cljs.core.truth_(or__6758__auto__))
{return or__6758__auto__;
} else
{return 49;
}
})();var forward_index = (function (){var or__6758__auto__ = new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(lt.plugins.tern.forward_search.call(null,f,new cljs.core.Keyword(null,"indent","indent",4124632094).cljs$core$IFn$_invoke$arity$1(back_result)));if(cljs.core.truth_(or__6758__auto__))
{return or__6758__auto__;
} else
{return 20;
}
})();var to_line = (function (){var x__7072__auto__ = (line + forward_index);var y__7073__auto__ = max_line;return ((x__7072__auto__ < y__7073__auto__) ? x__7072__auto__ : y__7073__auto__);
})();return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(function (){var x__7065__auto__ = 0;var y__7066__auto__ = ((line - back_index) - 1);return ((x__7065__auto__ > y__7066__auto__) ? x__7065__auto__ : y__7066__auto__);
})(),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),to_line,new cljs.core.Keyword(null,"ch","ch",1013907415),((cljs.core._EQ_.call(null,to_line,max_line))?ch:0)], null)], null);
});
lt.plugins.tern.ed__GT_partfile = (function ed__GT_partfile(editor){var map__13327 = lt.plugins.tern.partial_range.call(null,editor);var map__13327__$1 = ((cljs.core.seq_QMARK_.call(null,map__13327))?cljs.core.apply.call(null,cljs.core.hash_map,map__13327):map__13327);var to = cljs.core.get.call(null,map__13327__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__13327__$1,new cljs.core.Keyword(null,"from","from",1017056028));var offset_line = (function (){var x__7065__auto__ = 0;var y__7066__auto__ = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from);return ((x__7065__auto__ > y__7066__auto__) ? x__7065__auto__ : y__7066__auto__);
})();return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.get_in.call(null,cljs.core.deref.call(null,editor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"path","path",1017337751)], null)),new cljs.core.Keyword(null,"offsetLines","offsetLines",2272186782),offset_line,new cljs.core.Keyword(null,"text","text",1017460895),lt.objs.editor.range.call(null,editor,from,to),new cljs.core.Keyword(null,"type","type",1017479852),"part"], null);
});
lt.plugins.tern.ed__GT_mime = (function ed__GT_mime(editor){return new cljs.core.Keyword(null,"mime","mime",1017255846).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));
});
lt.plugins.tern.ed__GT_line_count = (function ed__GT_line_count(editor){return lt.objs.editor.line_count.call(null,lt.objs.editor.__GT_cm_ed.call(null,editor));
});
lt.plugins.tern.ed__GT_req = (function() {
var ed__GT_req = null;
var ed__GT_req__2 = (function (editor,type){return ed__GT_req.call(null,editor,type,cljs.core.PersistentArrayMap.EMPTY);
});
var ed__GT_req__3 = (function (editor,type,query_ops){var req = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",1121848378),lt.plugins.tern.ed__GT_query.call(null,editor,type,query_ops),new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((lt.plugins.tern.ed__GT_line_count.call(null,editor) > 250))?lt.plugins.tern.ed__GT_partfile.call(null,editor):lt.plugins.tern.ed__GT_fullfile.call(null,editor))], null)], null);var temp__4090__auto__ = new cljs.core.Keyword(null,"offsetLines","offsetLines",2272186782).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(req)));if(cljs.core.truth_(temp__4090__auto__))
{var offset = temp__4090__auto__;return lt.plugins.tern.tern_msg.call(null,new cljs.core.Keyword(null,"request","request",2109597185),cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,req,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",1121848378),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086)], null),cljs.core._,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",1121848378),new cljs.core.Keyword(null,"file","file",1017047278)], null),"#0"));
} else
{return lt.plugins.tern.tern_msg.call(null,new cljs.core.Keyword(null,"request","request",2109597185),req);
}
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
lt.plugins.tern.log_QMARK_ = (function log_QMARK_(msg){return cljs.core._EQ_.call(null,lt.plugins.tern.command.call(null,msg),"log");
});
lt.plugins.tern.__BEH__send = (function __BEH__send(this$,msg){return new cljs.core.Keyword("lt.plugins.tern","worker","lt.plugins.tern/worker",3141178359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).send(cljs.core.clj__GT_js.call(null,msg));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","send","lt.plugins.tern/send",4301526977),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__send,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send!","send!",1123226891),null], null), null));
lt.plugins.tern.__BEH__start_server = (function __BEH__start_server(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"connecting","connecting",4533219882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{lt.objs.notifos.working.call(null,[cljs.core.str("Connecting to: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))].join(''));
var cp = require("child_process");var worker = cp.fork(lt.plugins.tern.ternserver_path,["--harmony"],{"silent": true, "execPath": lt.objs.files.lt_home.call(null,lt.objs.thread.node_exe.call(null))});var init_cb = ((function (cp,worker){
return (function (e,paths){if(cljs.core.truth_(e))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"kill","kill",1017196240));
} else
{return worker.send({"command": "init", "data": cljs.core.clj__GT_js.call(null,lt.plugins.tern.tern_msg.call(null,new cljs.core.Keyword(null,"init","init",1017141378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",3954079412),new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.tern.tern_config)),new cljs.core.Keyword(null,"paths","paths",1120343136),paths], null)))});
}
});})(cp,worker))
;var dis = ((function (cp,worker,init_cb){
return (function (code,signal){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"kill","kill",1017196240));
});})(cp,worker,init_cb))
;var msg = ((function (cp,worker,init_cb,dis){
return (function (m){if(lt.plugins.tern.log_QMARK_.call(null,m))
{return console.log(lt.plugins.tern.payload.call(null,m));
} else
{if(lt.plugins.tern.ignore_QMARK_.call(null,m))
{return null;
} else
{if(lt.plugins.tern.err_QMARK_.call(null,m))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"error","error",1110689146),m);
} else
{if(lt.plugins.tern.id_QMARK_.call(null,m))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.tern.id.call(null,m),lt.plugins.tern.command.call(null,m),lt.plugins.tern.payload.call(null,m)], null));
} else
{if(lt.plugins.tern.init_QMARK_.call(null,m))
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connecting","connecting",4533219882),false], null));
lt.objs.notifos.done_working.call(null,[cljs.core.str("Connected to: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))].join(''));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"connect","connect",1965255772),this$);
} else
{return null;
}
}
}
}
}
});})(cp,worker,init_cb,dis))
;lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connecting","connecting",4533219882),true], null));
worker.on("message",msg);
worker.on("disconnect",dis);
worker.on("exit",dis);
lt.plugins.tern.current_ws_jsfiles.call(null,init_cb);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.tern","worker","lt.plugins.tern/worker",3141178359),worker], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","start-server","lt.plugins.tern/start-server",3579757639),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__start_server,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-server","start-server",3886904960),null], null), null));
lt.plugins.tern.__BEH__error = (function __BEH__error(this$,msg){return console.error(lt.plugins.tern.stack.call(null,msg));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","error","lt.plugins.tern/error",4428469057),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),null], null), null));
lt.plugins.tern.__BEH__kill = (function __BEH__kill(this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connecting","connecting",4533219882),false], null));
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"disconnect","disconnect",1544309774));
var temp__4092__auto__ = new cljs.core.Keyword("lt.plugins.tern","worker","lt.plugins.tern/worker",3141178359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto__))
{var worker = temp__4092__auto__;worker.kill();
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.tern","worker","lt.plugins.tern/worker",3141178359),null], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","kill","lt.plugins.tern/kill",4329208983),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__kill,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kill","kill",1017196240),null], null), null));
lt.plugins.tern.__BEH__disconnect = (function __BEH__disconnect(this$){var temp__4092__auto___13363 = new cljs.core.Keyword("lt.plugins.tern","worker","lt.plugins.tern/worker",3141178359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___13363))
{var worker_13364 = temp__4092__auto___13363;if(cljs.core.truth_(worker_13364.connected))
{worker_13364.disconnect();
} else
{}
} else
{}
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connected","connected",4729661051),false], null));
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Disconnected from: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","disconnect","lt.plugins.tern/disconnect",3782992085),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__disconnect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disconnect","disconnect",1544309774),null], null), null));
lt.plugins.tern.__BEH__try_send = (function __BEH__try_send(this$,_){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return null;
} else
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"start-server","start-server",3886904960));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","try-send","lt.plugins.tern/try-send",2615233939),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__try_send,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"try-send!","try-send!",4325864057),null], null), null),new cljs.core.Keyword(null,"order","order",1119910592),-7);
lt.plugins.tern.__BEH__refresh = (function __BEH__refresh(this$){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"kill","kill",1017196240));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","refresh","lt.plugins.tern/refresh",1082839830),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__refresh,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.refresh","object.refresh",4196174494),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","tern.client","lt.plugins.tern/tern.client",3665262821),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tern.client","tern.client",4004897758),null,new cljs.core.Keyword(null,"client","client",3951159101),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Tern Javascript Server",new cljs.core.Keyword(null,"queue","queue",1121848451),cljs.core.PersistentVector.EMPTY);
lt.plugins.tern.tern_client = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.tern","tern.client","lt.plugins.tern/tern.client",3665262821));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tern.send-current-document","tern.send-current-document",4050773829),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tern: Send current document to server",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var editor = lt.objs.editor.pool.last_active.call(null);if((cljs.core._EQ_.call(null,lt.plugins.tern.ed__GT_mime.call(null,editor),cljs.core.deref.call(null,lt.plugins.tern.js_mime))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.auto_complete.hinter)))))
{return lt.objs.clients.send.call(null,lt.plugins.tern.tern_client,new cljs.core.Keyword(null,"ignore","ignore",4118475076),lt.plugins.tern.tern_msg.call(null,new cljs.core.Keyword(null,"request","request",2109597185),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"files","files",1111338473),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.tern.ed__GT_fullfile.call(null,editor)], null)], null)));
} else
{return null;
}
})], null));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"tern.reset","tern.reset",3202251776),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tern: Reset the Tern javascript server",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.object.raise.call(null,lt.plugins.tern.tern_client,new cljs.core.Keyword(null,"kill","kill",1017196240));
})], null));
/**
* @param {...*} var_args
*/
lt.plugins.tern.__BEH__libs = (function() { 
var __BEH__libs__delegate = function (this$,libs){var seq__13332 = cljs.core.seq.call(null,libs);var chunk__13333 = null;var count__13334 = 0;var i__13335 = 0;while(true){
if((i__13335 < count__13334))
{var lib = cljs.core._nth.call(null,chunk__13333,i__13335);var path_13365 = (cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,cljs.core.name.call(null,lib)))?lib:lt.objs.files.join.call(null,lt.plugins.tern.tern_lib_dir,[cljs.core.str(lt.objs.files.basename.call(null,cljs.core.name.call(null,lib))),cljs.core.str(".json")].join('')));if(cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,path_13365)))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"libs","libs",1017225728)], null),cljs.core.conj,path_13365);
} else
{}
{
var G__13366 = seq__13332;
var G__13367 = chunk__13333;
var G__13368 = count__13334;
var G__13369 = (i__13335 + 1);
seq__13332 = G__13366;
chunk__13333 = G__13367;
count__13334 = G__13368;
i__13335 = G__13369;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13332);if(temp__4092__auto__)
{var seq__13332__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13332__$1))
{var c__7500__auto__ = cljs.core.chunk_first.call(null,seq__13332__$1);{
var G__13370 = cljs.core.chunk_rest.call(null,seq__13332__$1);
var G__13371 = c__7500__auto__;
var G__13372 = cljs.core.count.call(null,c__7500__auto__);
var G__13373 = 0;
seq__13332 = G__13370;
chunk__13333 = G__13371;
count__13334 = G__13372;
i__13335 = G__13373;
continue;
}
} else
{var lib = cljs.core.first.call(null,seq__13332__$1);var path_13374 = (cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,cljs.core.name.call(null,lib)))?lib:lt.objs.files.join.call(null,lt.plugins.tern.tern_lib_dir,[cljs.core.str(lt.objs.files.basename.call(null,cljs.core.name.call(null,lib))),cljs.core.str(".json")].join('')));if(cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,path_13374)))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"libs","libs",1017225728)], null),cljs.core.conj,path_13374);
} else
{}
{
var G__13375 = cljs.core.next.call(null,seq__13332__$1);
var G__13376 = null;
var G__13377 = 0;
var G__13378 = 0;
seq__13332 = G__13375;
chunk__13333 = G__13376;
count__13334 = G__13377;
i__13335 = G__13378;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var __BEH__libs = function (this$,var_args){
var libs = null;if (arguments.length > 1) {
  libs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__libs__delegate.call(this,this$,libs);};
__BEH__libs.cljs$lang$maxFixedArity = 1;
__BEH__libs.cljs$lang$applyTo = (function (arglist__13379){
var this$ = cljs.core.first(arglist__13379);
var libs = cljs.core.rest(arglist__13379);
return __BEH__libs__delegate(this$,libs);
});
__BEH__libs.cljs$core$IFn$_invoke$arity$variadic = __BEH__libs__delegate;
return __BEH__libs;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","libs","lt.plugins.tern/libs",4329256647),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__libs,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
/**
* @param {...*} var_args
*/
lt.plugins.tern.__BEH__plugin = (function() { 
var __BEH__plugin__delegate = function (this$,plugin,opts){var path = (cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,cljs.core.name.call(null,plugin)))?plugin:lt.objs.files.join.call(null,lt.plugins.tern.tern_plugin_dir,[cljs.core.str(lt.objs.files.basename.call(null,cljs.core.name.call(null,plugin))),cljs.core.str(".js")].join('')));var value = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.first.call(null,lt.objs.files.basename.call(null,cljs.core.name.call(null,plugin)).split(/\./)),new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"opts","opts",1017322386),(function (){var or__6758__auto__ = cljs.core.first.call(null,opts);if(cljs.core.truth_(or__6758__auto__))
{return or__6758__auto__;
} else
{return true;
}
})()], null);if(cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,path)))
{return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"plugins","plugins",538274578)], null),cljs.core.conj,value);
} else
{return null;
}
};
var __BEH__plugin = function (this$,plugin,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return __BEH__plugin__delegate.call(this,this$,plugin,opts);};
__BEH__plugin.cljs$lang$maxFixedArity = 2;
__BEH__plugin.cljs$lang$applyTo = (function (arglist__13380){
var this$ = cljs.core.first(arglist__13380);
arglist__13380 = cljs.core.next(arglist__13380);
var plugin = cljs.core.first(arglist__13380);
var opts = cljs.core.rest(arglist__13380);
return __BEH__plugin__delegate(this$,plugin,opts);
});
__BEH__plugin.cljs$core$IFn$_invoke$arity$variadic = __BEH__plugin__delegate;
return __BEH__plugin;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","plugin","lt.plugins.tern/plugin",3346397358),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__plugin,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","tern.config","lt.plugins.tern/tern.config",3662268766),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tern.config","tern.config",4007818069),null], null), null),new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"libs","libs",1017225728),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"plugins","plugins",538274578),cljs.core.PersistentHashSet.EMPTY], null));
lt.plugins.tern.tern_config = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.tern","tern.config","lt.plugins.tern/tern.config",3662268766));
lt.plugins.tern.update_server = (function update_server(this$,action,path){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{if(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,path)))
{return lt.plugins.tern.dir__GT_jsfiles.call(null,path,(function (e,paths){if(cljs.core.truth_(e))
{return null;
} else
{return lt.objs.clients.send.call(null,this$,new cljs.core.Keyword(null,"ignore","ignore",4118475076),lt.plugins.tern.tern_msg.call(null,action,paths));
}
}));
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
lt.plugins.tern.__BEH__reset_on_update = (function __BEH__reset_on_update(_){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.tern.tern_client))))
{return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tern.reset","tern.reset",3202251776));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","reset-on-update","lt.plugins.tern/reset-on-update",3213245940),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__reset_on_update,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"refresh","refresh",2099349069),null,new cljs.core.Keyword(null,"updated","updated",779473965),null], null), null));
lt.plugins.tern.__BEH__trigger_update_hints = (function __BEH__trigger_update_hints(editor){var req = lt.plugins.tern.ed__GT_req.call(null,editor,new cljs.core.Keyword(null,"completions","completions",1416465289));var cb = ((function (req){
return (function (_,data){return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.javascript.hints.result","editor.javascript.hints.result",1109152337),data);
});})(req))
;return lt.objs.clients.send.call(null,lt.plugins.tern.tern_client,new cljs.core.Keyword(null,"request","request",2109597185),req,new cljs.core.Keyword(null,"only","only",1017320222),cb);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","trigger-update-hints","lt.plugins.tern/trigger-update-hints",2763925304),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__trigger_update_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.javascript.hints.update!","editor.javascript.hints.update!",2634618216),null], null), null));
lt.plugins.tern.__BEH__finish_update_hints = (function __BEH__finish_update_hints(editor,res){if(cljs.core.truth_(res))
{lt.object.merge_BANG_.call(null,editor,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword("lt.plugins.tern","hints","lt.plugins.tern/hints",4426265349)],[cljs.core.map.call(null,(function (p1__13336_SHARP_){return {"completion": p1__13336_SHARP_};
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
{return new cljs.core.Keyword("lt.plugins.auto-complete","hints","lt.plugins.auto-complete/hints",3881612567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));
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