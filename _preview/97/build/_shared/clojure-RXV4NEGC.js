import{c as w}from"/erad2024/_preview/97/build/_shared/chunk-2NH4LW52.js";var x=w((E,h)=>{function N(t){let c="a-zA-Z_\\-!.?+*=<>&#'",e="["+c+"]["+c+"0-9/;:]*",i="def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",y={$pattern:e,"builtin-name":i+" cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"},g="[-+]?\\d+(\\.\\d+)?",b={begin:e,relevance:0},d={className:"number",begin:g,relevance:0},l=t.inherit(t.QUOTE_STRING_MODE,{illegal:null}),m=t.COMMENT(";","$",{relevance:0}),p={className:"literal",begin:/\b(true|false|nil)\b/},n={begin:"[\\[\\{]",end:"[\\]\\}]"},u={className:"comment",begin:"\\^"+e},r=t.COMMENT("\\^\\{","\\}"),f={className:"symbol",begin:"[:]{1,2}"+e},s={begin:"\\(",end:"\\)"},a={endsWithParent:!0,relevance:0},k={keywords:y,className:"name",begin:e,relevance:0,starts:a},o=[s,l,u,r,m,f,n,d,p,b],v={beginKeywords:i,lexemes:e,end:'(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',contains:[{className:"title",begin:e,relevance:0,excludeEnd:!0,endsParent:!0}].concat(o)};return s.contains=[t.COMMENT("comment",""),v,k,a],a.contains=o,n.contains=o,r.contains=[n],{name:"Clojure",aliases:["clj"],illegal:/\S/,contains:[s,l,u,r,m,f,n,d,p]}}h.exports=N});export default x();
