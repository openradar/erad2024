import{c as r}from"/erad2024/build/_shared/chunk-2NH4LW52.js";var b=r((d,n)=>{function o(e){return e?typeof e=="string"?e:e.source:null}function i(...e){return e.map(a=>o(a)).join("")}function t(e){return{name:"Erlang REPL",keywords:{built_in:"spawn spawn_link self",keyword:"after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"},contains:[{className:"meta",begin:"^[0-9]+> ",relevance:10},e.COMMENT("%","$"),{className:"number",begin:"\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",relevance:0},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:i(/\?(::)?/,/([A-Z]\w*)/,/((::)[A-Z]\w*)*/)},{begin:"->"},{begin:"ok"},{begin:"!"},{begin:"(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",relevance:0},{begin:"[A-Z][a-zA-Z0-9_']*",relevance:0}]}}n.exports=t});export default b();
