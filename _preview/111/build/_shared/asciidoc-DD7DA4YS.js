import{c as r}from"/erad2024/_preview/111/build/_shared/chunk-2NH4LW52.js";var o=r((N,c)=>{function b(e){return e?typeof e=="string"?e:e.source:null}function s(...e){return e.map(n=>b(n)).join("")}function m(e){let a={begin:"^'{3,}[ \\t]*$",relevance:10},n=[{begin:/\\[*_`]/},{begin:/\\\\\*{2}[^\n]*?\*{2}/},{begin:/\\\\_{2}[^\n]*_{2}/},{begin:/\\\\`{2}[^\n]*`{2}/},{begin:/[:;}][*_`](?![*_`])/}],i=[{className:"strong",begin:/\*{2}([^\n]+?)\*{2}/},{className:"strong",begin:s(/\*\*/,/((\*(?!\*)|\\[^\n]|[^*\n\\])+\n)+/,/(\*(?!\*)|\\[^\n]|[^*\n\\])*/,/\*\*/),relevance:0},{className:"strong",begin:/\B\*(\S|\S[^\n]*?\S)\*(?!\w)/},{className:"strong",begin:/\*[^\s]([^\n]+\n)+([^\n]+)\*/}],l=[{className:"emphasis",begin:/_{2}([^\n]+?)_{2}/},{className:"emphasis",begin:s(/__/,/((_(?!_)|\\[^\n]|[^_\n\\])+\n)+/,/(_(?!_)|\\[^\n]|[^_\n\\])*/,/__/),relevance:0},{className:"emphasis",begin:/\b_(\S|\S[^\n]*?\S)_(?!\w)/},{className:"emphasis",begin:/_[^\s]([^\n]+\n)+([^\n]+)_/},{className:"emphasis",begin:"\\B'(?!['\\s])",end:"(\\n{2}|')",contains:[{begin:"\\\\'\\w",relevance:0}],relevance:0}],t={className:"symbol",begin:"^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",relevance:10},g={className:"bullet",begin:"^(\\*+|-+|\\.+|[^\\n]+?::)\\s+"};return{name:"AsciiDoc",aliases:["adoc"],contains:[e.COMMENT("^/{4,}\\n","\\n/{4,}$",{relevance:10}),e.COMMENT("^//","$",{relevance:0}),{className:"title",begin:"^\\.\\w.*$"},{begin:"^[=\\*]{4,}\\n",end:"\\n^[=\\*]{4,}$",relevance:10},{className:"section",relevance:10,variants:[{begin:"^(={1,6})[ 	].+?([ 	]\\1)?$"},{begin:"^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$"}]},{className:"meta",begin:"^:.+?:",end:"\\s",excludeEnd:!0,relevance:10},{className:"meta",begin:"^\\[.+?\\]$",relevance:0},{className:"quote",begin:"^_{4,}\\n",end:"\\n_{4,}$",relevance:10},{className:"code",begin:"^[\\-\\.]{4,}\\n",end:"\\n[\\-\\.]{4,}$",relevance:10},{begin:"^\\+{4,}\\n",end:"\\n\\+{4,}$",contains:[{begin:"<",end:">",subLanguage:"xml",relevance:0}],relevance:10},g,t,...n,...i,...l,{className:"string",variants:[{begin:"``.+?''"},{begin:"`.+?'"}]},{className:"code",begin:/`{2}/,end:/(\n{2}|`{2})/},{className:"code",begin:"(`.+?`|\\+.+?\\+)",relevance:0},{className:"code",begin:"^[ \\t]",end:"$",relevance:0},a,{begin:"(link:)?(http|https|ftp|file|irc|image:?):\\S+?\\[[^[]*?\\]",returnBegin:!0,contains:[{begin:"(link|image:?):",relevance:0},{className:"link",begin:"\\w",end:"[^\\[]+",relevance:0},{className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0,relevance:0}],relevance:10}]}}c.exports=m});export default o();
