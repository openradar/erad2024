import{c as T}from"/erad2024/_preview/41/build/_shared/chunk-2NH4LW52.js";var M=T((g,o)=>{function l(e){let n="div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var",r="false true",c=[e.C_LINE_COMMENT_MODE,e.COMMENT(/\{/,/\}/,{relevance:0}),e.COMMENT(/\(\*/,/\*\)/,{relevance:10})],t={className:"string",begin:/'/,end:/'/,contains:[{begin:/''/}]},s={className:"string",begin:/(#\d+)+/},i={className:"number",begin:"\\b\\d+(\\.\\d+)?(DT|D|T)",relevance:0},d={className:"string",begin:'"',end:'"'},a={className:"function",beginKeywords:"procedure",end:/[:;]/,keywords:"procedure|10",contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:n,contains:[t,s]}].concat(c)},E={className:"class",begin:"OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",returnBegin:!0,contains:[e.TITLE_MODE,a]};return{name:"C/AL",case_insensitive:!0,keywords:{keyword:n,literal:r},illegal:/\/\*/,contains:[t,s,i,d,e.NUMBER_MODE,E,a]}}o.exports=l});export default M();
