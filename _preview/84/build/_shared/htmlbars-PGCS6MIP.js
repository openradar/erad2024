import{c as C}from"/erad2024/_preview/84/build/_shared/chunk-2NH4LW52.js";var D=C((U,S)=>{function d(e){return e?typeof e=="string"?e:e.source:null}function H(e){return s("(",e,")*")}function P(e){return s("(",e,")?")}function s(...e){return e.map(t=>d(t)).join("")}function M(...e){return"("+e.map(t=>d(t)).join("|")+")"}function L(e){let n={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},t={literal:["true","false","undefined","null"]},m=/""|"[^"]+"/,T=/''|'[^']+'/,o=/\[\]|\[[^\]]+\]/,r=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,A=/(\.|\/)/,c=M(m,T,o,r),R=s(P(/\.|\.\/|\//),c,H(s(A,c))),b=s("(",o,"|",r,")(?==)"),a={begin:R,lexemes:/[\w.\/]+/},_=e.inherit(a,{keywords:t}),i={begin:/\(/,end:/\)/},g={className:"attr",begin:b,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,_,i]}}},I={begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},E={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,I,g,_,i],returnEnd:!0},O=e.inherit(a,{className:"name",keywords:n,starts:e.inherit(E,{end:/\)/})});i.contains=[O];let N=e.inherit(a,{keywords:n,className:"name",starts:e.inherit(E,{end:/\}\}/})}),u=e.inherit(a,{keywords:n,className:"name"}),l=e.inherit(a,{className:"name",keywords:n,starts:e.inherit(E,{end:/\}\}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[N],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[u]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[N]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[u]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[l]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[l]}]}}function p(e){let n=L(e);return n.name="HTMLbars",e.getLanguage("handlebars")&&(n.disableAutodetect=!0),n}S.exports=p});export default D();
