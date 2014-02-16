(ns lt.plugins.tern
  (:require [lt.object :as object]
            [lt.objs.plugins :as plugins]
            [lt.objs.editor :as ed]
            [lt.objs.thread :as thread]
            [lt.plugins.auto-complete :as auto-complete]
            [lt.objs.clients.ws :as ws]
            [lt.objs.files :as files]
            [lt.objs.clients :as clients]
            [lt.objs.editor.pool :as pool]
            [lt.objs.notifos :as notifos]
            [lt.objs.sidebar.command :as cmd]
            [lt.util.load :as load]
            [lt.util.cljs :refer [js->clj]])
  (:require-macros [lt.macros :refer [behavior defui]]))

(def plugin-dir (if-let [dir plugins/*plugin-dir*]
                  dir
                  (files/join plugins/user-plugins-dir "ternjs")))
(def ternserver-path (files/join plugin-dir "node" "ternserver.js"))
(def js-mime (delay (-> @files/files-obj :types (get "Javascript") :mime)))
(def js-ext #"\.js$")

(defn jsfile? [p]
  (re-find js-ext p))

(defn all-js-files [ws]
  (let [ds (:folders @ws)
        fs (filter jsfile? (:files @ws))]
    (concat fs (mapcat #(files/filter-walk jsfile? %) ds))))

(defn dir->jsfiles [dir]
  (files/filter-walk jsfile? dir))

(defn tern-msg [t d]
  {:type (name t)
   :payload d})

(defn ed->query
  ([editor type]
   (ed->query editor type {}))
  ([editor type query-ops]
   (merge {:type (name type)
           :file (get-in @editor [:info :path])
           :end (ed/->cursor editor)}
          query-ops)))

(defn ed->fullfile [editor]
  {:name (get-in @editor [:info :path])
   :text (ed/->val editor)
   :type "full"})

(defn ed->mime [editor]
  (-> @editor :doc deref :mime))

(defn ed->req
  ([editor type]
   (ed->req editor type {}))
  ([editor type query-ops]
   (tern-msg :request
             {:query (ed->query editor type query-ops)
              :files [(ed->fullfile editor)]})))

(defn id [msg]
  (let [v (.-cb msg)]
    (cond
     (string? v) (symbol v)
     (number? v) v
     :else nil)))

(defn id? [msg]
  (boolean (id msg)))

(defn err [msg]
  (.-err msg))

(defn err? [msg]
  (boolean (err msg)))

(defn command [msg]
  (.-command msg))

(defn payload [msg]
  (and (.-data msg) (.-payload (.-data msg))))

(defn stack [msg]
  (.-stack msg))

(defn init? [msg]
  (and (not (id? msg))
       (= (command msg) "init")))

(defn ignore? [msg]
  (= (command msg) "ignore"))

;;****************************************************
;; Client
;;****************************************************

(behavior ::send
          :triggers #{:send!}
          :reaction (fn [this msg]
                      (.send (::worker @this)
                             (clj->js msg))))


(behavior ::start-server
          :triggers #{:start-server}
          :reaction (fn [this]
                      (let [cp (js/require "child_process")
                            worker (.fork cp ternserver-path #js ["--harmony"] #js {:execPath (files/lt-home (thread/node-exe)) :silent true})
                            data (clj->js (tern-msg :addfiles (all-js-files lt.objs.workspace/current-ws)))
                            dis (fn [code signal]
                                  (object/raise this :kill))
                            msg (fn [m]
                                  (cond
                                   (ignore? m) nil
                                   (id? m) (object/raise this  :message  [(id m) (command m) (payload m)])
                                   (init? m) (do
                                               (notifos/done-working (str "Connected to: " (:name @this)))
                                               (object/raise this :connect this))
                                   (err? m) (object/raise this :error m)))]
                        (.on worker "message" msg)
                        (.on worker "disconnect" dis)
                        (.on worker "exit" dis)
                        (.send worker #js {:data data
                                           :command "init"})
                        (object/merge! this {::worker worker}))))

(behavior ::error
          :triggers #{:error}
          :reaction (fn [this msg]
                      (.error js/console (stack msg))))


(behavior ::kill
          :triggers #{:kill}
          :reaction (fn [this]
                      (object/raise this :disconnect)
                      (when-let [worker (::worker @this)]
                        (.kill worker)
                        (object/merge! this {::worker nil}))))


(behavior ::disconnect
          :triggers #{:disconnect}
          :reaction (fn [this]
                      (when-let [worker (::worker @this)]
                        (when (.-connected worker)
                          (.disconnect worker)))
                      (object/merge! this {:connected false})
                      (notifos/set-msg! (str "Disconnected from Javascript auto-complete server"))))


(behavior ::try-send
          :triggers #{:try-send!}
          :order -7
          :reaction (fn [this _]
                      (when-not (:connected @this)
                        (notifos/working (str "Connecting to: " (:name @this)))
                        (object/raise this :start-server))))


(object/object* ::tern.client
                :tags #{:client :tern.client}
                :name "Tern Javascript Server"
                :queue [])


(def tern-client (object/create ::tern.client))


(cmd/command {:command :tern.send-current-document
              :desc "Tern: Send current document to server"
              :hidden true
              :exec (fn []
                      (let [editor (pool/last-active)]
                        (when (and (= (ed->mime editor) @js-mime)
                                   (not (:active @auto-complete/hinter)))
                          (clients/send tern-client
                                        :ignore
                                        (tern-msg :request {:files [(ed->fullfile editor)]})))))})

(cmd/command {:command :tern.reset
              :desc "Tern: Reset the Tern javascript server"
              :exec (fn []
                      (object/raise tern-client :kill))})

;;****************************************************
;; Workspace Sync
;;****************************************************

(defn update-server [this action path]
  (when (:connected @this)
    (cond
     (files/dir? path)  (clients/send this :ignore (tern-msg action (dir->jsfiles path)))
     (and (files/file? path) (jsfile? path)) (clients/send this :ignore (tern-msg action [path])))))

(behavior ::watched.create
          :triggers #{:watched.create}
          :reaction (fn [_ path]
                      (update-server tern-client :addfiles path)))


(behavior ::watched.delete
          :triggers #{:watched.delete}
          :reaction (fn [_ path]
                      (update-server tern-client :deletefiles path)))

(behavior ::reset-on-update
          :triggers #{:updated :refresh}
          :reaction (fn [_]
                      (when (:connected @tern-client)
                        (cmd/exec! :tern.reset))))

;;****************************************************
;; Autocomplete
;;****************************************************

(behavior ::trigger-update-hints
          :triggers #{:editor.javascript.hints.update!}
          :reaction (fn [editor]
                      (let [req (ed->req editor :completions)
                            cb (fn [_ data]
                                 (object/raise editor :editor.javascript.hints.result data))]
                        (clients/send tern-client :request req :only cb))))


(behavior ::finish-update-hints
          :triggers #{:editor.javascript.hints.result}
          :reaction (fn [editor res]
                      (when res
                        (->> res
                             (.-completions)
                             (map #(do #js {:completion %}))
                             (hash-map ::hints)
                             (object/merge! editor))
                        (object/raise auto-complete/hinter :refresh!))))


(behavior ::use-tern-hints
          :triggers #{:hints+}
          :reaction (fn [editor hints token]
                      (when (not= token (::token @editor))
                        (object/merge! editor {::token token})
                        (object/raise editor :editor.javascript.hints.update!))
                      (if-let [js-hints (::hints @editor)]
                        js-hints
                        ;; If tern hasn't responded with hints, we still need to return something or else
                        ;; the autocomplete box will be inactive when a response comes from the server.
                        (:lt.plugins.auto-complete/hints @editor))))


(behavior ::line-change
          :triggers #{:line-change}
          :reaction (fn [editor line change]
                      (when (-> (.-text line) last (= "."))
                        (cmd/exec! ::clear-token))))

(behavior ::clear-token
          :triggers #{:select :select-unknown :escape!}
          :reaction (fn [_]
                      (cmd/exec! ::clear-token)))


(cmd/command {:command ::clear-token
              :desc "Editor: Clear last Tern token"
              :hidden true
              :exec (fn []
                      (object/merge! (pool/last-active) {::token :none
                                                         ::hints nil}))})


;;****************************************************
;; Docs
;;****************************************************

(behavior ::javascript-doc
          :triggers #{:editor.doc}
          :reaction (fn [editor]
                      (let [req (ed->req editor :type {:docs true :types true})
                            loc (ed/->cursor editor)
                            cb (fn [_ result]
                                 (let [doc {:doc (.-doc result)
                                            :args (.-type result)
                                            :loc loc
                                            :file (.-origin result)
                                            :name (.-name result)}]
                                   (object/raise editor :editor.javascript.doc doc)))]
                        (clients/send tern-client :request req :only cb))))

(behavior ::print-javascript-doc
          :triggers #{:editor.javascript.doc}
          :reaction (fn [editor result]
                      (when result
                        (object/raise editor :editor.doc.show! result))))

;;****************************************************
;; Jump to definition
;;****************************************************

(behavior ::jump-to-definition
          :triggers #{:editor.jump-to-definition-at-cursor!}
          :reaction (fn [editor]
                      (let [req (ed->req editor :definition {:lineCharPositions true})
                            cb (fn [_ data]
                                 (object/raise lt.objs.jump-stack/jump-stack
                                               :jump-stack.push!
                                               editor
                                               (.-file data)
                                               (.-start data)))]
                        (clients/send tern-client :request req :only cb))))


