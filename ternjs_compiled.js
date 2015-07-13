if(!lt.util.load.provided_QMARK_('lt.plugins.tern')) {
goog.provide('lt.plugins.tern');
goog.require('cljs.core');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.objs.platform');
goog.require('lt.plugins.auto_complete');
goog.require('lt.objs.workspace');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.workspace');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.clients.ws');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.thread');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.auto_complete');
goog.require('lt.objs.clients');
goog.require('lt.util.load');
goog.require('clojure.string');
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
{return lt.objs.files.join.call(null,lt.objs.plugins.user_plugins_dir,"TernJS");
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
lt.plugins.tern.svndir_QMARK_ = (function svndir_QMARK_(p){return cljs.core._EQ_.call(null,".svn",lt.objs.files.basename.call(null,p));
});
lt.plugins.tern.nodemoduledir_QMARK_ = (function nodemoduledir_QMARK_(p){return cljs.core._EQ_.call(null,"node_modules",lt.objs.files.basename.call(null,p));
});
lt.plugins.tern.jsfile_QMARK_ = (function jsfile_QMARK_(p){return cljs.core.boolean$.call(null,cljs.core.re_find.call(null,lt.plugins.tern.js_ext,p));
});
lt.plugins.tern.plugin_jsfile_QMARK_ = (function plugin_jsfile_QMARK_(p){return cljs.core.boolean$.call(null,(function (){var and__6359__auto__ = lt.plugins.tern.jsfile_QMARK_.call(null,p);if(and__6359__auto__)
{return cljs.core.re_find.call(null,/_compiled/,p);
} else
{return and__6359__auto__;
}
})());
});
lt.plugins.tern.async_filter_walk = (function (){var method_table__7229__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7230__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7231__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7232__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7233__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("async-filter-walk",((function (method_table__7229__auto__,prefer_table__7230__auto__,method_cache__7231__auto__,cached_hierarchy__7232__auto__,hierarchy__7233__auto__){
return (function (arg,ignore_QMARK_,done){return typeof arg === 'string';
});})(method_table__7229__auto__,prefer_table__7230__auto__,method_cache__7231__auto__,cached_hierarchy__7232__auto__,hierarchy__7233__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7233__auto__,method_table__7229__auto__,prefer_table__7230__auto__,method_cache__7231__auto__,cached_hierarchy__7232__auto__));
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
;return lt.plugins.tern.readdir.call(null,dir,((function (results,error,handle_error,recur_cb,stat_cb){
return (function (e,paths){if(cljs.core.truth_(e))
{return handle_error.call(null,e);
} else
{if(cljs.core._EQ_.call(null,0,paths.length))
{return done.call(null,null,cljs.core.deref.call(null,results));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var pending = cljs.core.atom.call(null,paths.length);var seq__9613 = cljs.core.seq.call(null,paths);var chunk__9615 = null;var count__9616 = 0;var i__9617 = 0;while(true){
if((i__9617 < count__9616))
{var x = cljs.core._nth.call(null,chunk__9615,i__9617);var p_9651 = lt.objs.files.join.call(null,dir,x);lt.plugins.tern.stat.call(null,p_9651,stat_cb.call(null,pending,done,p_9651));
{
var G__9652 = seq__9613;
var G__9653 = chunk__9615;
var G__9654 = count__9616;
var G__9655 = (i__9617 + 1);
seq__9613 = G__9652;
chunk__9615 = G__9653;
count__9616 = G__9654;
i__9617 = G__9655;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9613);if(temp__4092__auto__)
{var seq__9613__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9613__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__9613__$1);{
var G__9656 = cljs.core.chunk_rest.call(null,seq__9613__$1);
var G__9657 = c__7119__auto__;
var G__9658 = cljs.core.count.call(null,c__7119__auto__);
var G__9659 = 0;
seq__9613 = G__9656;
chunk__9615 = G__9657;
count__9616 = G__9658;
i__9617 = G__9659;
continue;
}
} else
{var x = cljs.core.first.call(null,seq__9613__$1);var p_9660 = lt.objs.files.join.call(null,dir,x);lt.plugins.tern.stat.call(null,p_9660,stat_cb.call(null,pending,done,p_9660));
{
var G__9661 = cljs.core.next.call(null,seq__9613__$1);
var G__9662 = null;
var G__9663 = 0;
var G__9664 = 0;
seq__9613 = G__9661;
chunk__9615 = G__9662;
count__9616 = G__9663;
i__9617 = G__9664;
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
});})(results,error,handle_error,recur_cb,stat_cb))
);
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
;var seq__9619 = cljs.core.seq.call(null,dirs);var chunk__9620 = null;var count__9621 = 0;var i__9622 = 0;while(true){
if((i__9622 < count__9621))
{var p = cljs.core._nth.call(null,chunk__9620,i__9622);lt.plugins.tern.async_filter_walk.call(null,p,ignore_QMARK_,cb);
{
var G__9665 = seq__9619;
var G__9666 = chunk__9620;
var G__9667 = count__9621;
var G__9668 = (i__9622 + 1);
seq__9619 = G__9665;
chunk__9620 = G__9666;
count__9621 = G__9667;
i__9622 = G__9668;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9619);if(temp__4092__auto__)
{var seq__9619__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9619__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__9619__$1);{
var G__9669 = cljs.core.chunk_rest.call(null,seq__9619__$1);
var G__9670 = c__7119__auto__;
var G__9671 = cljs.core.count.call(null,c__7119__auto__);
var G__9672 = 0;
seq__9619 = G__9669;
chunk__9620 = G__9670;
count__9621 = G__9671;
i__9622 = G__9672;
continue;
}
} else
{var p = cljs.core.first.call(null,seq__9619__$1);lt.plugins.tern.async_filter_walk.call(null,p,ignore_QMARK_,cb);
{
var G__9673 = cljs.core.next.call(null,seq__9619__$1);
var G__9674 = null;
var G__9675 = 0;
var G__9676 = 0;
seq__9619 = G__9673;
chunk__9620 = G__9674;
count__9621 = G__9675;
i__9622 = G__9676;
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
{return (lt.plugins.tern.gitdir_QMARK_.call(null,p)) || (lt.plugins.tern.svndir_QMARK_.call(null,p)) || (lt.plugins.tern.nodemoduledir_QMARK_.call(null,p));
} else
{return (lt.plugins.tern.plugin_jsfile_QMARK_.call(null,p)) || (!(lt.plugins.tern.jsfile_QMARK_.call(null,p)));
}
});
lt.plugins.tern.current_ws_jsfiles = (function current_ws_jsfiles(done){var ws = cljs.core.deref.call(null,lt.objs.workspace.current_ws);var ds = new cljs.core.Keyword(null,"folders","folders",4625622327).cljs$core$IFn$_invoke$arity$1(ws);var fs = cljs.core.filter.call(null,lt.plugins.tern.jsfile_QMARK_,new cljs.core.Keyword(null,"files","files",1111338473).cljs$core$IFn$_invoke$arity$1(ws));if(cljs.core.empty_QMARK_.call(null,cljs.core.concat.call(null,fs,ds)))
{return done.call(null,null,cljs.core.PersistentVector.EMPTY);
} else
{return lt.plugins.tern.async_filter_walk.call(null,ds,lt.plugins.tern.tern_ignore,((function (ws,ds,fs){
return (function (e,r){return done.call(null,e,cljs.core.concat.call(null,fs,r));
});})(ws,ds,fs))
);
}
});
lt.plugins.tern.dir__GT_jsfiles = (function dir__GT_jsfiles(dir,done){return lt.plugins.tern.async_filter_walk.call(null,dir,lt.plugins.tern.tern_ignore,done);
});
lt.plugins.tern.tern_msg = (function tern_msg(t,d){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),cljs.core.name.call(null,t),new cljs.core.Keyword(null,"payload","payload",4522169600),d], null);
});
lt.plugins.tern.ed__GT_path = (function ed__GT_path(editor){var or__6371__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,editor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"path","path",1017337751)], null));if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return "untitled";
}
});
lt.plugins.tern.ed__GT_query = (function() {
var ed__GT_query = null;
var ed__GT_query__2 = (function (editor,type){return ed__GT_query.call(null,editor,type,cljs.core.PersistentArrayMap.EMPTY);
});
var ed__GT_query__3 = (function (editor,type,query_ops){return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),cljs.core.name.call(null,type),new cljs.core.Keyword(null,"file","file",1017047278),lt.plugins.tern.ed__GT_path.call(null,editor),new cljs.core.Keyword(null,"end","end",1014004813),lt.objs.editor.__GT_cursor.call(null,editor)], null),query_ops);
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
lt.plugins.tern.ed__GT_fullfile = (function ed__GT_fullfile(editor){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.tern.ed__GT_path.call(null,editor),new cljs.core.Keyword(null,"text","text",1017460895),lt.objs.editor.__GT_val.call(null,editor),new cljs.core.Keyword(null,"type","type",1017479852),"full"], null);
});
lt.plugins.tern.indent = (function indent(s){return cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.comp.call(null,cljs.core.true_QMARK_,cljs.core.boolean$),cljs.core.map.call(null,(function (p1__9623_SHARP_){return cljs.core.re_find.call(null,/[ \t]/,p1__9623_SHARP_);
}),s)));
});
lt.plugins.tern.jsfn_QMARK_ = (function jsfn_QMARK_(s){return cljs.core.boolean$.call(null,cljs.core.re_find.call(null,/function/,s));
});
lt.plugins.tern.back_search = (function back_search(strs,max_indent){var line_info = (function line_info(i,v){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",1114250308),i,new cljs.core.Keyword(null,"indent","indent",4124632094),lt.plugins.tern.indent.call(null,v),new cljs.core.Keyword(null,"jsfn?","jsfn?",1115324928),lt.plugins.tern.jsfn_QMARK_.call(null,v)], null);
});
var match_QMARK_ = (function match_QMARK_(p__9633){var map__9635 = p__9633;var map__9635__$1 = ((cljs.core.seq_QMARK_.call(null,map__9635))?cljs.core.apply.call(null,cljs.core.hash_map,map__9635):map__9635);var indent = cljs.core.get.call(null,map__9635__$1,new cljs.core.Keyword(null,"indent","indent",4124632094));var jsfn_QMARK_ = cljs.core.get.call(null,map__9635__$1,new cljs.core.Keyword(null,"jsfn?","jsfn?",1115324928));var and__6359__auto__ = jsfn_QMARK_;if(cljs.core.truth_(and__6359__auto__))
{return (max_indent >= indent);
} else
{return and__6359__auto__;
}
});
return cljs.core.first.call(null,cljs.core.filter.call(null,match_QMARK_,cljs.core.map_indexed.call(null,line_info,strs)));
});
lt.plugins.tern.forward_search = (function forward_search(strs,max_indent){var line_info = (function line_info(i,v){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",1114250308),i,new cljs.core.Keyword(null,"blockend?","blockend?",1886862403),(max_indent >= lt.plugins.tern.indent.call(null,v))], null);
});
return cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"blockend?","blockend?",1886862403),cljs.core.drop.call(null,1,cljs.core.map_indexed.call(null,line_info,strs))));
});
lt.plugins.tern.partial_range = (function partial_range(editor){var map__9638 = lt.objs.editor.__GT_cursor.call(null,editor);var map__9638__$1 = ((cljs.core.seq_QMARK_.call(null,map__9638))?cljs.core.apply.call(null,cljs.core.hash_map,map__9638):map__9638);var ch = cljs.core.get.call(null,map__9638__$1,new cljs.core.Keyword(null,"ch","ch",1013907415));var line = cljs.core.get.call(null,map__9638__$1,new cljs.core.Keyword(null,"line","line",1017226086));var min_line = (function (){var x__6678__auto__ = 0;var y__6679__auto__ = (line - 50);return ((x__6678__auto__ > y__6679__auto__) ? x__6678__auto__ : y__6679__auto__);
})();var max_line = (function (){var x__6685__auto__ = lt.objs.editor.__GT_cm_ed.call(null,editor).lastLine();var y__6686__auto__ = (line + 20);return ((x__6685__auto__ < y__6686__auto__) ? x__6685__auto__ : y__6686__auto__);
})();var text = lt.objs.editor.range.call(null,editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),min_line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),max_line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));var vec__9639 = cljs.core.partition_all.call(null,(line - min_line),text.split("\n"));var b = cljs.core.nth.call(null,vec__9639,0,null);var f = cljs.core.nth.call(null,vec__9639,1,null);var max_indent = lt.plugins.tern.indent.call(null,cljs.core.first.call(null,f));var back_result = lt.plugins.tern.back_search.call(null,cljs.core.reverse.call(null,b),max_indent);var back_index = (function (){var or__6371__auto__ = new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(back_result);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return 49;
}
})();var forward_index = (function (){var or__6371__auto__ = new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(lt.plugins.tern.forward_search.call(null,f,new cljs.core.Keyword(null,"indent","indent",4124632094).cljs$core$IFn$_invoke$arity$1(back_result)));if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return 20;
}
})();var to_line = (function (){var x__6685__auto__ = (line + forward_index);var y__6686__auto__ = max_line;return ((x__6685__auto__ < y__6686__auto__) ? x__6685__auto__ : y__6686__auto__);
})();return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(function (){var x__6678__auto__ = 0;var y__6679__auto__ = ((line - back_index) - 1);return ((x__6678__auto__ > y__6679__auto__) ? x__6678__auto__ : y__6679__auto__);
})(),new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.Keyword(null,"to","to",1013907949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),to_line,new cljs.core.Keyword(null,"ch","ch",1013907415),((cljs.core._EQ_.call(null,to_line,max_line))?ch:0)], null)], null);
});
lt.plugins.tern.ed__GT_partfile = (function ed__GT_partfile(editor){var map__9641 = lt.plugins.tern.partial_range.call(null,editor);var map__9641__$1 = ((cljs.core.seq_QMARK_.call(null,map__9641))?cljs.core.apply.call(null,cljs.core.hash_map,map__9641):map__9641);var to = cljs.core.get.call(null,map__9641__$1,new cljs.core.Keyword(null,"to","to",1013907949));var from = cljs.core.get.call(null,map__9641__$1,new cljs.core.Keyword(null,"from","from",1017056028));var offset_line = (function (){var x__6678__auto__ = 0;var y__6679__auto__ = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(from);return ((x__6678__auto__ > y__6679__auto__) ? x__6678__auto__ : y__6679__auto__);
})();return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.tern.ed__GT_path.call(null,editor),new cljs.core.Keyword(null,"offsetLines","offsetLines",2272186782),offset_line,new cljs.core.Keyword(null,"text","text",1017460895),lt.objs.editor.range.call(null,editor,from,to),new cljs.core.Keyword(null,"type","type",1017479852),"part"], null);
});
lt.plugins.tern.ed__GT_mime = (function ed__GT_mime(editor){return cljs.core.get_in.call(null,cljs.core.deref.call(null,editor),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"mime","mime",1017255846)], null));
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
lt.plugins.tern.payload = (function payload(msg){var and__6359__auto__ = msg.data;if(cljs.core.truth_(and__6359__auto__))
{return msg.data.payload;
} else
{return and__6359__auto__;
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
lt.plugins.tern.check_server_path = (function check_server_path(){var exists = lt.objs.files.exists_QMARK_.call(null,lt.plugins.tern.ternserver_path);if(cljs.core.truth_(exists))
{} else
{lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Could not find Tern server executable"),cljs.core.str(lt.plugins.tern.file)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
return exists;
});
lt.plugins.tern.node_exe = (function node_exe(){if(cljs.core.truth_(lt.objs.platform.win_QMARK_.call(null)))
{return "/plugins/node/node.exe";
} else
{return "/plugins/node/node";
}
});
lt.plugins.tern.__BEH__send = (function __BEH__send(this$,msg){return new cljs.core.Keyword("lt.plugins.tern","worker","lt.plugins.tern/worker",3141178359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).send(cljs.core.clj__GT_js.call(null,msg));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","send","lt.plugins.tern/send",4301526977),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__send,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send!","send!",1123226891),null], null), null));
lt.plugins.tern.__BEH__start_server = (function __BEH__start_server(this$){if(cljs.core.truth_((function (){var and__6359__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"connecting","connecting",4533219882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));if(and__6359__auto__)
{return lt.plugins.tern.check_server_path.call(null);
} else
{return and__6359__auto__;
}
})()))
{lt.objs.notifos.working.call(null,[cljs.core.str("Connecting to: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))].join(''));
var cp = require("child_process");var config = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.tern","tern.config","lt.plugins.tern/tern.config",3662268766));var worker = cp.fork(lt.plugins.tern.ternserver_path,["--harmony"],{"cwd": lt.objs.files.pwd, "env": {"NODE_PATH": lt.objs.files.join.call(null,lt.plugins.tern.plugin_dir,"node_modules")}, "silent": true, "execPath": lt.objs.files.lt_home.call(null,lt.plugins.tern.node_exe.call(null))});var init_cb = ((function (cp,config,worker){
return (function (e,paths){if(cljs.core.truth_(e))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"kill","kill",1017196240));
} else
{return worker.send({"command": "init", "data": cljs.core.clj__GT_js.call(null,lt.plugins.tern.tern_msg.call(null,new cljs.core.Keyword(null,"init","init",1017141378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",3954079412),new cljs.core.Keyword(null,"options","options",4059396624).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,config)),new cljs.core.Keyword(null,"paths","paths",1120343136),paths], null)))});
}
});})(cp,config,worker))
;var dis = ((function (cp,config,worker,init_cb){
return (function (code,signal){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"kill","kill",1017196240));
});})(cp,config,worker,init_cb))
;var msg = ((function (cp,config,worker,init_cb,dis){
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
});})(cp,config,worker,init_cb,dis))
;lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"connecting","connecting",4533219882),true,new cljs.core.Keyword(null,"config","config",3954079412),config], null));
worker.on("message",msg);
worker.on("disconnect",dis);
worker.on("exit",dis);
if(cljs.core.truth_(lt.object.raise_reduce.call(null,config,new cljs.core.Keyword(null,"lazy-loading+","lazy-loading+",2949368858),false)))
{init_cb.call(null,null,cljs.core.PersistentVector.EMPTY);
} else
{lt.plugins.tern.current_ws_jsfiles.call(null,init_cb);
}
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.tern","worker","lt.plugins.tern/worker",3141178359),worker], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","start-server","lt.plugins.tern/start-server",3579757639),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__start_server,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-server","start-server",3886904960),null], null), null));
lt.plugins.tern.__BEH__error = (function __BEH__error(this$,msg){if(cljs.core.truth_(msg))
{return console.error((function (){var or__6371__auto__ = lt.plugins.tern.stack.call(null,msg);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return msg.err;
}
})());
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","error","lt.plugins.tern/error",4428469057),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),null], null), null));
lt.plugins.tern.__BEH__kill = (function __BEH__kill(this$){lt.object.destroy_BANG_.call(null,new cljs.core.Keyword(null,"config","config",3954079412).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"connecting","connecting",4533219882),false,new cljs.core.Keyword(null,"config","config",3954079412),null], null));
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"disconnect","disconnect",1544309774));
var temp__4092__auto__ = new cljs.core.Keyword("lt.plugins.tern","worker","lt.plugins.tern/worker",3141178359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto__))
{var worker = temp__4092__auto__;worker.kill();
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.tern","worker","lt.plugins.tern/worker",3141178359),null], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","kill","lt.plugins.tern/kill",4329208983),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__kill,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kill","kill",1017196240),null], null), null));
lt.plugins.tern.__BEH__disconnect = (function __BEH__disconnect(this$){var temp__4092__auto___9677 = new cljs.core.Keyword("lt.plugins.tern","worker","lt.plugins.tern/worker",3141178359).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___9677))
{var worker_9678 = temp__4092__auto___9677;if(cljs.core.truth_(worker_9678.connected))
{worker_9678.disconnect();
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
lt.plugins.tern.__BEH__on_app_shutdown = (function __BEH__on_app_shutdown(_){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tern.reset","tern.reset",3202251776));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","on-app-shutdown","lt.plugins.tern/on-app-shutdown",2899772969),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__on_app_shutdown,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close!","close!",3951350939),null], null), null));
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
var __BEH__libs__delegate = function (this$,libs){var seq__9646 = cljs.core.seq.call(null,libs);var chunk__9647 = null;var count__9648 = 0;var i__9649 = 0;while(true){
if((i__9649 < count__9648))
{var lib = cljs.core._nth.call(null,chunk__9647,i__9649);var path_9679 = (cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,cljs.core.name.call(null,lib)))?lib:lt.objs.files.join.call(null,lt.plugins.tern.tern_lib_dir,[cljs.core.str(lt.objs.files.basename.call(null,cljs.core.name.call(null,lib))),cljs.core.str(".json")].join('')));if(cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,path_9679)))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"libs","libs",1017225728)], null),cljs.core.conj,path_9679);
} else
{}
{
var G__9680 = seq__9646;
var G__9681 = chunk__9647;
var G__9682 = count__9648;
var G__9683 = (i__9649 + 1);
seq__9646 = G__9680;
chunk__9647 = G__9681;
count__9648 = G__9682;
i__9649 = G__9683;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9646);if(temp__4092__auto__)
{var seq__9646__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9646__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__9646__$1);{
var G__9684 = cljs.core.chunk_rest.call(null,seq__9646__$1);
var G__9685 = c__7119__auto__;
var G__9686 = cljs.core.count.call(null,c__7119__auto__);
var G__9687 = 0;
seq__9646 = G__9684;
chunk__9647 = G__9685;
count__9648 = G__9686;
i__9649 = G__9687;
continue;
}
} else
{var lib = cljs.core.first.call(null,seq__9646__$1);var path_9688 = (cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,cljs.core.name.call(null,lib)))?lib:lt.objs.files.join.call(null,lt.plugins.tern.tern_lib_dir,[cljs.core.str(lt.objs.files.basename.call(null,cljs.core.name.call(null,lib))),cljs.core.str(".json")].join('')));if(cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,path_9688)))
{lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"libs","libs",1017225728)], null),cljs.core.conj,path_9688);
} else
{}
{
var G__9689 = cljs.core.next.call(null,seq__9646__$1);
var G__9690 = null;
var G__9691 = 0;
var G__9692 = 0;
seq__9646 = G__9689;
chunk__9647 = G__9690;
count__9648 = G__9691;
i__9649 = G__9692;
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
__BEH__libs.cljs$lang$applyTo = (function (arglist__9693){
var this$ = cljs.core.first(arglist__9693);
var libs = cljs.core.rest(arglist__9693);
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
var __BEH__plugin__delegate = function (this$,plugin,opts){var path = (cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,cljs.core.name.call(null,plugin)))?plugin:lt.objs.files.join.call(null,lt.plugins.tern.tern_plugin_dir,[cljs.core.str(lt.objs.files.basename.call(null,cljs.core.name.call(null,plugin))),cljs.core.str(".js")].join('')));var value = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),cljs.core.first.call(null,lt.objs.files.basename.call(null,cljs.core.name.call(null,plugin)).split(/\./)),new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"opts","opts",1017322386),(function (){var or__6371__auto__ = cljs.core.first.call(null,opts);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
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
__BEH__plugin.cljs$lang$applyTo = (function (arglist__9694){
var this$ = cljs.core.first(arglist__9694);
arglist__9694 = cljs.core.next(arglist__9694);
var plugin = cljs.core.first(arglist__9694);
var opts = cljs.core.rest(arglist__9694);
return __BEH__plugin__delegate(this$,plugin,opts);
});
__BEH__plugin.cljs$core$IFn$_invoke$arity$variadic = __BEH__plugin__delegate;
return __BEH__plugin;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","plugin","lt.plugins.tern/plugin",3346397358),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__plugin,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null));
lt.plugins.tern.__BEH__lazy_loading = (function __BEH__lazy_loading(this$,_,___$1){return true;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","lazy-loading","lt.plugins.tern/lazy-loading",2173052254),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__lazy_loading,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lazy-loading+","lazy-loading+",2949368858),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","tern.config","lt.plugins.tern/tern.config",3662268766),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tern.config","tern.config",4007818069),null], null), null),new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"libs","libs",1017225728),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"plugins","plugins",538274578),cljs.core.PersistentHashSet.EMPTY], null));
lt.plugins.tern.update_server = (function update_server(this$,action,path){if(cljs.core.truth_(new cljs.core.Keyword(null,"connected","connected",4729661051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{if(cljs.core.truth_(lt.objs.files.dir_QMARK_.call(null,path)))
{return lt.plugins.tern.dir__GT_jsfiles.call(null,path,(function (e,paths){if(cljs.core.truth_(e))
{return null;
} else
{return lt.objs.clients.send.call(null,this$,new cljs.core.Keyword(null,"ignore","ignore",4118475076),lt.plugins.tern.tern_msg.call(null,action,paths));
}
}));
} else
{if(cljs.core.truth_((function (){var and__6359__auto__ = lt.objs.files.file_QMARK_.call(null,path);if(cljs.core.truth_(and__6359__auto__))
{return lt.plugins.tern.jsfile_QMARK_.call(null,path);
} else
{return and__6359__auto__;
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
lt.plugins.tern.extract_hints = (function extract_hints(editor){var hints = new cljs.core.Keyword("lt.plugins.tern","hints","lt.plugins.tern/hints",4426265349).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));if(cljs.core.truth_((function (){var and__6359__auto__ = hints;if(cljs.core.truth_(and__6359__auto__))
{return !(cljs.core.empty_QMARK_.call(null,hints));
} else
{return and__6359__auto__;
}
})()))
{return hints;
} else
{return null;
}
});
lt.plugins.tern.__BEH__trigger_update_hints = (function __BEH__trigger_update_hints(editor){var req = lt.plugins.tern.ed__GT_req.call(null,editor,new cljs.core.Keyword(null,"completions","completions",1416465289));var cb = ((function (req){
return (function (_,data){return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.javascript.hints.result","editor.javascript.hints.result",1109152337),data);
});})(req))
;return lt.objs.clients.send.call(null,lt.plugins.tern.tern_client,new cljs.core.Keyword(null,"request","request",2109597185),req,new cljs.core.Keyword(null,"only","only",1017320222),cb);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","trigger-update-hints","lt.plugins.tern/trigger-update-hints",2763925304),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__trigger_update_hints,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.javascript.hints.update!","editor.javascript.hints.update!",2634618216),null], null), null));
lt.plugins.tern.__BEH__finish_update_hints = (function __BEH__finish_update_hints(editor,res){if(cljs.core.truth_(res))
{lt.object.merge_BANG_.call(null,editor,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword("lt.plugins.tern","hints","lt.plugins.tern/hints",4426265349)],[cljs.core.map.call(null,(function (p1__9650_SHARP_){return {"completion": p1__9650_SHARP_};
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
if(cljs.core._EQ_.call(null,".",token))
{var or__6371__auto__ = lt.plugins.tern.extract_hints.call(null,editor);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return cljs.core.apply.call(null,cljs.core.conj,hints,new cljs.core.Keyword("lt.plugins.auto-complete","hints","lt.plugins.auto-complete/hints",3881612567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));
}
} else
{return cljs.core.apply.call(null,cljs.core.conj,hints,(function (){var or__6371__auto__ = lt.plugins.tern.extract_hints.call(null,editor);if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return new cljs.core.Keyword("lt.plugins.auto-complete","hints","lt.plugins.auto-complete/hints",3881612567).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));
}
})());
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
lt.plugins.tern.format_doc = (function format_doc(s){if(cljs.core.truth_(s))
{return clojure.string.triml.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.replace.call(null,s,"@","\n@"),"*")))));
} else
{return "?";
}
});
lt.plugins.tern.__BEH__javascript_format_doc = (function __BEH__javascript_format_doc(editor,m){return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1014003882)], null),lt.plugins.tern.format_doc);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","javascript-format-doc","lt.plugins.tern/javascript-format-doc",2583476987),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__javascript_format_doc,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format+","format+",4631427718),null], null), null),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.plugins.tern.__BEH__javascript_doc = (function __BEH__javascript_doc(editor){var req = lt.plugins.tern.ed__GT_req.call(null,editor,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docs","docs",1016993197),true,new cljs.core.Keyword(null,"types","types",1124748267),true], null));var loc = lt.objs.editor.__GT_cursor.call(null,editor);var cb = ((function (req,loc){
return (function (_,result){var doc = cljs.core.merge.call(null,lt.object.raise_reduce.call(null,editor,new cljs.core.Keyword(null,"format+","format+",4631427718),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1014003882),result.doc,new cljs.core.Keyword(null,"args","args",1016906831),((cljs.core.not_EQ_.call(null,result.name,result.type))?result.type:null),new cljs.core.Keyword(null,"name","name",1017277949),result.name], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc","loc",1014011570),loc,new cljs.core.Keyword(null,"file","file",1017047278),result.origin], null));return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.javascript.doc","editor.javascript.doc",1489701706),doc);
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
lt.plugins.tern.platform = require("os").platform();
lt.plugins.tern.requirejs_fix = (function requirejs_fix(f){if((cljs.core.not.call(null,lt.objs.files.exists_QMARK_.call(null,f))) && (cljs.core.not_EQ_.call(null,"win32",lt.plugins.tern.platform)))
{return lt.objs.files.join.call(null,"/",f);
} else
{return f;
}
});
lt.plugins.tern.__BEH__jump_to_definition = (function __BEH__jump_to_definition(editor){var req = lt.plugins.tern.ed__GT_req.call(null,editor,new cljs.core.Keyword(null,"definition","definition",4294453445),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lineCharPositions","lineCharPositions",515471762),true], null));var cb = ((function (req){
return (function (_,data){return lt.object.raise.call(null,lt.objs.jump_stack.jump_stack,new cljs.core.Keyword(null,"jump-stack.push!","jump-stack.push!",4063822260),editor,lt.plugins.tern.requirejs_fix.call(null,data.file),data.start);
});})(req))
;return lt.objs.clients.send.call(null,lt.plugins.tern.tern_client,new cljs.core.Keyword(null,"request","request",2109597185),req,new cljs.core.Keyword(null,"only","only",1017320222),cb);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.tern","jump-to-definition","lt.plugins.tern/jump-to-definition",3529180351),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.tern.__BEH__jump_to_definition,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.jump-to-definition-at-cursor!","editor.jump-to-definition-at-cursor!",4501637705),null], null), null));
}

//# sourceMappingURL=ternjs_compiled.js.map