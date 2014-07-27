(ns lt.plugins.tern
  (:require [clojure.string :as string]
            [lt.object :as object]
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
            [lt.objs.workspace :as workspace]
            [lt.util.load :as load])
  (:require-macros [lt.macros :refer [behavior defui]]))

(def plugin-dir (if-let [dir plugins/*plugin-dir*]
                  dir
                  (files/join plugins/user-plugins-dir "TernJS")))
(def tern-dir (files/join plugin-dir "node_modules" "tern"))
(def tern-lib-dir (files/join tern-dir "defs"))
(def tern-plugin-dir (files/join tern-dir "plugin"))
(def ternserver-path (files/join plugin-dir "node" "ternserver.js"))
(def js-mime (delay (-> @files/files-obj :types (get "Javascript") :mime)))
(def js-ext #"\.js$")

;;****************************************************
;; File System
;;****************************************************

(def fs (js/require "fs"))

(defn readdir  [dir cb]
  "Accepts a string 'dir' and a callback function 'cb' of the form
  (fn [err result]). Returns nil."
  (fs.readdir dir cb))

(defn stat [path cb]
  "Accepts a string 'path' and a callback function 'cb' of the form
  (fn [err result]). Returns nil."
  (fs.stat path cb))

(defn gitdir? [p]
  "Accepts a string 'p'. Returns true if 'p' appears to be a git
  repository."
  (= ".git" (files/basename p)))

(defn svndir? [p]
  "Accepts a string 'p'. Returns true if 'p' appears to be a
  subversion directory."
  (= ".svn" (files/basename p)))

(defn nodemoduledir? [p]
  "Accepts a string 'p'. Returns true if 'p' appears to be a node
  submodule directory."
  (= "node_modules" (files/basename p)))

(defn jsfile? [p]
  "Accepts a string 'p'. Retruns true if 'p' appears to be a javascript file."
  (boolean
   (re-find js-ext p)))

(defn plugin-jsfile? [p]
  "Accepts a string 'p'. Returns true if 'p' appears to be a Light Table plugin
  file."
  (boolean
   (and (jsfile? p)
        (re-find #"_compiled" p))))

(defmulti async-filter-walk
  "Accepts any type 'arg', a function 'ignore?' of the form (fn [p stats]) and
  a function 'done' of the form (fn [err result]). Return nil.

  ignore? - Accepts a string 'p' and a file system stats object 'stats'. Returns
  true if the 'p' should be ignored when walking the filesystem."
  (fn [arg ignore? done] (string? arg)))

(defmethod async-filter-walk true
  [dir ignore? done]
  "Accepts a string 'dir', a function 'ignore?' of the form (fn [p stats]) and
  a function 'done' of the form (fn [err result]). Returns nil.

  ignore? - Accepts a string 'p' and a file system stats object 'stats'. Returns
  true if the 'p' should be ignored when walking the filesystem."
  (let [results (atom [])
        error (atom nil)
        handle-error (fn [e]
                       (when-not @error
                         (reset! error e)
                         (done e nil)))
        recur-cb (fn [pending done]
                   (fn [e r]
                     (if e
                       (handle-error e)
                       (do
                         (swap! results concat r)
                         (swap! pending dec)
                         (when (= 0 @pending)
                           (done nil @results))))))
        stat-cb (fn [pending done p]
                  (fn [e stats]
                    (cond
                     e (handle-error e)
                     (ignore? p stats) (do
                                         (swap! pending dec)
                                         (when (= 0 @pending)
                                           (done nil @results)))
                     (.isDirectory stats) (async-filter-walk p ignore? (recur-cb pending done))
                     :else (do
                             (swap! results conj p)
                             (swap! pending dec)
                             (when (= 0 @pending)
                               (done nil @results))))))]
    (readdir dir (fn [e paths]
                   (cond
                    e (handle-error e)
                    (= 0 (.-length paths)) (done nil @results)
                    :else (let [pending (atom (.-length paths))]
                            (doseq [x paths
                                    :let [p (files/join dir x)]]
                              (stat p (stat-cb pending done p)))))))))

(defmethod async-filter-walk false
  [dirs ignore? done]
  "Accepts a collection strings 'dirs', a function 'ignore?' of the form
  (fn [p stats]) and a function 'done' of the form (fn [err result]). Returns nil.

  ignore?: Accepts a string 'p' and a file system stats object 'stats'. Returns
  true if the 'p' should be ignored when walking the filesystem."
  (let [pending (atom (count dirs))
        results (atom [])
        error (atom nil)
        cb (fn [e r]
             (swap! pending dec)
             (if e
               (do
                 (when-not @error
                   (done e nil)
                   (reset! error e)))
               (do
                 (swap! results concat r)
                 (when (= 0 @pending)
                   (done nil @results)))))]
    (doseq [p dirs]
      (async-filter-walk p ignore? cb))))

(defn tern-ignore [p stats]
  "Accepts a string 'p' and a file system stats object 'stats'. Returns true
  if the path should be ignored when walking the file system for javascript files.

  Ignores most version control and node modules directories. Attempts not to load
  files that aren't javascript files or appear to be compiled Light Table plugins."
  (if (.isDirectory stats)
    (or (gitdir? p)
        (svndir? p)
        (nodemoduledir? p))
    (or (plugin-jsfile? p)
        (not (jsfile? p)))))

(defn current-ws-jsfiles [done]
  "Accepts a callback 'done' of the form (fn [err result]). Returns nil.

  Finds all the javascript files in the current workspace."
  (let [ws @workspace/current-ws
        ds (:folders ws)
        fs (filter jsfile? (:files ws))]
    (if (empty? (concat fs ds))
      (done nil [])
      (async-filter-walk ds tern-ignore (fn [e r]
                                          (done e (concat fs r)))))))

(defn dir->jsfiles [dir done]
  "Accepts a 'string' dir and a callback function of the form
  (fn [err result]). Returns nil.

  Finds all the javascript files for a given directory. Ignores
  version control and node module directories."
  (async-filter-walk dir tern-ignore done))

;;****************************************************
;; Query and Request Helpers
;;****************************************************

(defn tern-msg [t d]
  "Accepts a keyword/string 't' and any type 'd'. Returns a tern message of the form
  {:type 't' :payload 'd'}."
  {:type (name t)
   :payload d})

(defn ed->path [editor]
  "Accepts an editor object 'editor'. Returns a string, the path to
  the given editor's file."
  (or (get-in @editor [:info :path]) "untitled"))

(defn ed->query
  ([editor type]
   "Accepts an editor object 'editor' and a keyword/string 'type'. Returns
   a map representing the query field of a tern request see [1] for more
   information.

   [1] http://ternjs.net/doc/manual.html#protocol."
   (ed->query editor type {}))
  ([editor type query-ops]
   "Accepts an editor object 'editor', a keyword/string 'type' and a map
   of extra query options 'query-ops'. Returns a map representing the
   query field of a tern request see [1] for more information.

   query-ops: A map of extra query fields that will be merged
   with the final result.

   [1] http://ternjs.net/doc/manual.html#protocol."
   (merge {:type (name type)
           :file (ed->path editor)
           :end (ed/->cursor editor)}
          query-ops)))

(defn indent [s]
  "Accepts a string 's'. Returns a count of whitespace characters at the
  begining of the string.

  Spaces and tabs are counted together."
  (->> (map #(re-find #"[ \t]" %) s)
       (take-while identity)
       count))

(defn jsfn? [s]
  "Accepts a string 's'. Returns true of the string appears to contain
  the start of a javascript function."
  (boolean
   (re-find #"function" s)))

(defn back-search [strs max-indent]
  "Accepts a collection of strings 'strs' and an integer 'max-indent'. Returns
  a map with information about the next string with an indent one less than
  'max-indent' if one exists, otherwise returns nil.

  Used for the backwards search in partial-range. Searchs forward in the
  collection for first instance of a line that is a javascript function and
  has an indent level one less than 'max-indent'."
  (letfn [(line-info [i v]
                {:index i
                 :indent (indent v)
                 :jsfn? (jsfn? v)})
          (match? [{:keys [jsfn? indent]}]
                  (and jsfn? (>= max-indent indent)))]
    (->> (map-indexed line-info strs)
         (filter match?)
         first)))

(defn forward-search [strs max-indent]
  "Accepts a collection of strings 'strs' and an integer 'max-indent'. Returns
  a map with the index of a line with an indent one less that 'max-indent' if
  one exists, otherwise returns nil."
  (letfn [(line-info [i v]
                     {:index i
                      :blockend? (>= max-indent (indent v))})]
    (->> (map-indexed line-info strs)
         (drop 1)
         (filter :blockend?)
         first)))

(defn partial-range [editor]
  "Accepts and editor object 'editor'. Returns a map containing the line and
  character information used to send a part of a file for a tern request."
  (let [;; Find current cursor position
        {:keys [line ch]} (ed/->cursor editor)

        ;; Determine how far back we can search
        min-line (max 0 (- line 50))

        ;; Determine how far forward we can search
        max-line (min (.lastLine (ed/->cm-ed editor)) (+ line 20))

        ;; Grab the text for the search range.
        text (ed/range editor
                       {:line min-line :ch 0}
                       {:line max-line :ch 0})

        ;; Split the text by new lines and partion into
        ;; backward/forward search ranges.
        [b f] (partition-all (- line min-line) (.split text "\n"))

        ;; Find the indent of the current line.
        current-indent (indent (first f))

        ;; Find the furthest function declaration line back with
        ;; one less than the current indent.
        back-result (back-search (reverse b) current-indent)

        ;; Get the index from our back search or use the maximum index from
        ;; the current position.
        back-index (or (:index back-result) 49)

        ;; Use the indent of the back result and attempt to find closing
        ;; block.
        forward-index (or (:index (forward-search f (:indent back-result))) 20)

        ;; Find last line of forward search or use end of file.
        to-line (min (+ line forward-index) max-line)]
    {:from {:line (max 0 (- line back-index 1))
            :ch 0}
     :to   {:line to-line

            ;; If our to-line is the end of the file, use the character
            ;; position from current cursor position
            :ch (if (= to-line max-line) ch 0)}}))

(defn ed->partfile [editor]
  "Accepts an editor object 'editor'. Returns a map respresenting a partial tern
  file used for tern requests."
  (let [{:keys [from to]} (partial-range editor)
        offset-line (max 0 (:line from))]
    {:name (ed->path editor)
     :offsetLines offset-line
     :text (ed/range editor from to)
     :type "part"}))

(defn ed->fullfile [editor]
  "Accepts an editor object 'editor'. Returns a entry map representing
  a file for a tern request.

  Captures the file in its entirety. Should only be used on smaller files
  under 250 lines for performance reasons."
  {:name (ed->path editor)
   :text (ed/->val editor)
   :type "full"})

(defn ed->mime [editor]
  "Accepts an editor object 'editor'. Returns the current mime type of 'editor'."
  (get-in @editor [:info :mime]))

(defn ed->line-count [editor]
  "Accepts an editor object 'editor'. Returns the line count of the current editor."
  (ed/line-count (ed/->cm-ed editor)))

(defn ed->req
  ([editor type]
   "Accepts and editor object 'editor' and a keyword/string 'type'. Returns a
   fully constructed map representation of a tern request for a single file."
   (ed->req editor type {}))
  ([editor type query-ops]
   "Accepts and editor object 'editor', a keyword/string 'type' and a map
   'query-ops'. Returns a fulling constructed map representation of a tern
   request for a single file."
   (let [req {:query (ed->query editor type query-ops)
              :files [(if (> (ed->line-count editor) 250)
                        (ed->partfile editor)
                        (ed->fullfile editor))]}]
     (if-let [offset (-> req :files first :offsetLines)]
       (tern-msg :request (-> req
                              (update-in [:query :end :line] - offset)
                              (assoc-in [:query :file] "#0")))
       (tern-msg :request req)))))

;;****************************************************
;; Message Helpers
;;****************************************************

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

(defn log? [msg]
  (= (command msg) "log"))

;;****************************************************
;; Client
;;****************************************************

(defn check-server-path []
  (let [exists (files/exists? ternserver-path)]
    (when-not exists
      (notifos/set-msg! (str "Could not find Tern server executable" file) {:class "error"}))
    exists))

(behavior ::send
          :triggers #{:send!}
          :reaction (fn [this msg]
                      (.send (::worker @this)
                             (clj->js msg))))


(behavior ::start-server
          :triggers #{:start-server}
          :reaction (fn [this]
                      (when (and (not (:connecting @this))
                                 (check-server-path))
                        (notifos/working (str "Connecting to: " (:name @this)))
                        (let [cp (js/require "child_process")
                              config (object/create ::tern.config)
                              worker (.fork cp ternserver-path #js ["--harmony"] #js {:execPath (files/lt-home (thread/node-exe)) :silent true})
                              init-cb (fn [e paths]
                                        (if e
                                          (object/raise this :kill)
                                          (.send worker #js {:data (clj->js (tern-msg :init
                                                                                      {:config (:options @config)
                                                                                       :paths paths}))
                                                             :command "init"})))
                              dis (fn [code signal]
                                    (object/raise this :kill))
                              msg (fn [m]
                                    (cond
                                     (log? m) (.log js/console (payload m))
                                     (ignore? m) nil
                                     (err? m) (object/raise this :error m)
                                     (id? m) (object/raise this  :message  [(id m) (command m) (payload m)])
                                     (init? m) (do
                                                 (object/merge! this {:connecting false})
                                                 (notifos/done-working (str "Connected to: " (:name @this)))
                                                 (object/raise this :connect this))))]
                          (object/merge! this {:connecting true
                                               :config config})
                          (.on worker "message" msg)
                          (.on worker "disconnect" dis)
                          (.on worker "exit" dis)
                          (if (object/raise-reduce config :lazy-loading+ false)
                            (init-cb nil [])
                            (current-ws-jsfiles init-cb))
                          (object/merge! this {::worker worker})))))

(behavior ::error
          :triggers #{:error}
          :reaction (fn [this msg]
                      (when msg
                        (.error js/console (or (stack msg)
                                               (.-err msg))))))


(behavior ::kill
          :triggers #{:kill}
          :reaction (fn [this]
                      (object/destroy! (:config @this))
                      (object/merge! this {:connecting false
                                           :config nil})
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
                      (notifos/set-msg! (str "Disconnected from: " (:name @this)))))


(behavior ::try-send
          :triggers #{:try-send!}
          :order -7
          :reaction (fn [this _]
                      (when-not (:connected @this)
                        (object/raise this :start-server))))

(behavior ::refresh
          :triggers #{:object.refresh}
          :reaction (fn [this]
                      (when (:connected @this)
                        (object/raise this :kill))))

(behavior ::on-app-shutdown
          :triggers #{:close!}
          :reaction (fn [_]
                      (cmd/exec! :tern.reset)))


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
;; Configuration
;;****************************************************


(behavior ::libs
          :triggers #{:object.instant}
          :reaction (fn [this & libs]
                      (doseq [lib libs]
                        (let [path (if (files/file? (name lib))
                                     lib
                                     (files/join tern-lib-dir
                                                 (-> lib name files/basename (str ".json"))))]
                          (when (files/file? path)
                            (object/update! this [:options :libs] conj path))))))

(behavior ::plugin
          :triggers #{:object.instant}
          :reaction (fn [this plugin & opts]
                      (let [path (if (files/file? (name plugin))
                                   plugin
                                   (files/join tern-plugin-dir
                                               (-> plugin name files/basename (str ".js"))))
                            value {:name (-> plugin name files/basename (.split #"\.") first)
                                   :path path
                                   :opts (or (first opts) true)}]
                        (when (files/file? path)
                          (object/update! this [:options :plugins] conj value)))))


(behavior ::lazy-loading
          :triggers #{:lazy-loading+}
          :reaction (fn [this _ _]
                      true))

(object/object* ::tern.config
                :tags #{:tern.config}
                :options {:libs #{}
                          :plugins #{}})


;;****************************************************
;; Workspace Sync
;;****************************************************

(defn update-server [this action path]
  (when (:connected @this)
    (cond
     (files/dir? path) (dir->jsfiles path (fn [e paths]
                                            (when-not e
                                              (clients/send this :ignore (tern-msg action paths)))))
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

(defn extract-hints [editor]
  (let [hints (::hints @editor)]
    (when (and hints (not (empty? hints)))
      hints)))

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
                      (if (= "." token)
                        (or (extract-hints editor)
                            (apply conj hints (:lt.plugins.auto-complete/hints @editor)))
                        (apply conj hints (or (extract-hints editor)
                                              (:lt.plugins.auto-complete/hints @editor))))))


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

(defn format-doc [s]
  (if s
    (->> (string/split  (string/replace s "@" "\n@") "*")
         (map string/trim)
         (interpose "\n")
         (apply str)
         (string/triml))
    "?"))


(behavior ::javascript-format-doc
          :triggers #{:format+}
          :exclusive true
          :reaction (fn [editor m]
                      (update-in m [:doc] format-doc)))

(behavior ::javascript-doc
          :triggers #{:editor.doc}
          :reaction (fn [editor]
                      (let [req (ed->req editor :type {:docs true :types true})
                            loc (ed/->cursor editor)
                            cb (fn [_ result]
                                 (let [doc (merge (object/raise-reduce editor :format+
                                                                       {:doc (.-doc result)
                                                                        :args (when (not= (.-name result) (.-type result))
                                                                                (.-type result))
                                                                        :name (.-name result)})
                                                  {:loc loc
                                                   :file (.-origin result)})]
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

(def platform (.platform (js/require "os")))

(defn requirejs-fix [f]
  (if (and (not (files/exists? f)) (not= "win32" platform))
    (files/join "/" f)
    f))

(behavior ::jump-to-definition
          :triggers #{:editor.jump-to-definition-at-cursor!}
          :reaction (fn [editor]
                      (let [req (ed->req editor :definition {:lineCharPositions true})
                            cb (fn [_ data]
                                 (object/raise lt.objs.jump-stack/jump-stack
                                               :jump-stack.push!
                                               editor
                                               (requirejs-fix (.-file data))
                                               (.-start data)))]
                        (clients/send tern-client :request req :only cb))))


