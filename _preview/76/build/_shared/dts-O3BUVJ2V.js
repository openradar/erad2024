import{c as r}from"/erad2024/_preview/76/build/_shared/chunk-2NH4LW52.js";var O=r((g,t)=>{function N(e){let n={className:"string",variants:[e.inherit(e.QUOTE_STRING_MODE,{begin:'((u8?|U)|L)?"'}),{begin:'(u8?|U)?R"',end:'"',contains:[e.BACKSLASH_ESCAPE]},{begin:"'\\\\?.",end:"'",illegal:"."}]},a={className:"number",variants:[{begin:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},{begin:e.C_NUMBER_RE}],relevance:0},d={className:"meta",begin:"#",end:"$",keywords:{"meta-keyword":"if else elif endif define undef ifdef ifndef"},contains:[{begin:/\\\n/,relevance:0},{beginKeywords:"include",end:"$",keywords:{"meta-keyword":"include"},contains:[e.inherit(n,{className:"meta-string"}),{className:"meta-string",begin:"<",end:">",illegal:"\\n"}]},n,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},s={className:"variable",begin:/&[a-z\d_]*\b/},i={className:"meta-keyword",begin:"/[a-z][a-z\\d-]*/"},_={className:"symbol",begin:"^\\s*[a-zA-Z_][a-zA-Z\\d_]*:"},E={className:"params",begin:"<",end:">",contains:[a,s]},c={className:"class",begin:/[a-zA-Z_][a-zA-Z\d_@]*\s\{/,end:/[{;=]/,returnBegin:!0,excludeEnd:!0};return{name:"Device Tree",keywords:"",contains:[{className:"class",begin:"/\\s*\\{",end:/\};/,relevance:10,contains:[s,i,_,c,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,n]},s,i,_,c,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,n,d,{begin:e.IDENT_RE+"::",keywords:""}]}}t.exports=N});export default O();
