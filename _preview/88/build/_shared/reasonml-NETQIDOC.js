import{c as p}from"/erad2024/_preview/88/build/_shared/chunk-2NH4LW52.js";var C=p((S,m)=>{function D(s){function N(T){return T.map(function(A){return A.split("").map(function(f){return"\\"+f}).join("")}).join("|")}let n="~?[a-z$_][0-9a-zA-Z$_]*",e="`?[A-Z$_][0-9a-zA-Z$_]*",c="'?[a-z$_][0-9a-z$_]*",d="\\s*:\\s*[a-z$_][0-9a-z$_]*(\\(\\s*("+c+"\\s*(,"+c+"\\s*)*)?\\))?",O=n+"("+d+"){0,2}",l="("+N(["||","++","**","+.","*","/","*.","/.","..."])+"|\\|>|&&|==|===)",R="\\s+"+l+"\\s+",a={keyword:"and as asr assert begin class constraint do done downto else end exception external for fun function functor if in include inherit initializer land lazy let lor lsl lsr lxor match method mod module mutable new nonrec object of open or private rec sig struct then to try type val virtual when while with",built_in:"array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ",literal:"true false"},o="\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",_={className:"number",relevance:0,variants:[{begin:o},{begin:"\\(-"+o+"\\)"}]},t={className:"operator",relevance:0,begin:l},u=[{className:"identifier",relevance:0,begin:n},t,_],r=[s.QUOTE_STRING_MODE,t,{className:"module",begin:"\\b"+e,returnBegin:!0,end:".",contains:[{className:"identifier",begin:e,relevance:0}]}],g=[{className:"module",begin:"\\b"+e,returnBegin:!0,end:".",relevance:0,contains:[{className:"identifier",begin:e,relevance:0}]}],v={begin:n,end:"(,|\\n|\\))",relevance:0,contains:[t,{className:"typing",begin:":",end:"(,|\\n)",returnBegin:!0,relevance:0,contains:g}]},i={className:"function",relevance:0,keywords:a,variants:[{begin:"\\s(\\(\\.?.*?\\)|"+n+")\\s*=>",end:"\\s*=>",returnBegin:!0,relevance:0,contains:[{className:"params",variants:[{begin:n},{begin:O},{begin:/\(\s*\)/}]}]},{begin:"\\s\\(\\.?[^;\\|]*\\)\\s*=>",end:"\\s=>",returnBegin:!0,relevance:0,contains:[{className:"params",relevance:0,variants:[v]}]},{begin:"\\(\\.\\s"+n+"\\)\\s*=>"}]};r.push(i);let b={className:"constructor",begin:e+"\\(",end:"\\)",illegal:"\\n",keywords:a,contains:[s.QUOTE_STRING_MODE,t,{className:"params",begin:"\\b"+n}]},M={className:"pattern-match",begin:"\\|",returnBegin:!0,keywords:a,end:"=>",relevance:0,contains:[b,t,{relevance:0,className:"constructor",begin:e}]},E={className:"module-access",keywords:a,returnBegin:!0,variants:[{begin:"\\b("+e+"\\.)+"+n},{begin:"\\b("+e+"\\.)+\\(",end:"\\)",returnBegin:!0,contains:[i,{begin:"\\(",end:"\\)",skip:!0}].concat(r)},{begin:"\\b("+e+"\\.)+\\{",end:/\}/}],contains:r};return g.push(E),{name:"ReasonML",aliases:["re"],keywords:a,illegal:"(:-|:=|\\$\\{|\\+=)",contains:[s.COMMENT("/\\*","\\*/",{illegal:"^(#,\\/\\/)"}),{className:"character",begin:"'(\\\\[^']+|[^'])'",illegal:"\\n",relevance:0},s.QUOTE_STRING_MODE,{className:"literal",begin:"\\(\\)",relevance:0},{className:"literal",begin:"\\[\\|",end:"\\|\\]",relevance:0,contains:u},{className:"literal",begin:"\\[",end:"\\]",relevance:0,contains:u},b,{className:"operator",begin:R,illegal:"-->",relevance:0},_,s.C_LINE_COMMENT_MODE,M,i,{className:"module-def",begin:"\\bmodule\\s+"+n+"\\s+"+e+"\\s+=\\s+\\{",end:/\}/,returnBegin:!0,keywords:a,relevance:0,contains:[{className:"module",relevance:0,begin:e},{begin:/\{/,end:/\}/,skip:!0}].concat(r)},E]}}m.exports=D});export default C();
