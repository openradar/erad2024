import{c as A}from"/erad2024/_preview/49/build/_shared/chunk-2NH4LW52.js";var r=A((N,a)=>{function O(n){let o={begin:/[a-z][A-Za-z0-9_]*/,relevance:0},t={className:"symbol",variants:[{begin:/[A-Z][a-zA-Z0-9_]*/},{begin:/_[A-Za-z0-9_]*/}],relevance:0},c={begin:/\(/,end:/\)/,relevance:0},s={begin:/\[/,end:/\]/},i={className:"comment",begin:/%/,end:/$/,contains:[n.PHRASAL_WORDS_MODE]},_={className:"string",begin:/`/,end:/`/,contains:[n.BACKSLASH_ESCAPE]},E={className:"string",begin:/0'(\\'|.)/},g={className:"string",begin:/0'\\s/},e=[o,t,c,{begin:/:-/},s,i,n.C_BLOCK_COMMENT_MODE,n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,_,E,g,n.C_NUMBER_MODE];return c.contains=e,s.contains=e,{name:"Prolog",contains:e.concat([{begin:/\.$/}])}}a.exports=O});export default r();
