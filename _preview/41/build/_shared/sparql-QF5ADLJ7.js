import{b as d}from"/erad2024/_preview/41/build/_shared/chunk-2NH4LW52.js";function s(n){return new RegExp("^(?:"+n.join("|")+")$","i")}function p(n,e){var t=n.next();if(u=null,t=="$"||t=="?")return t=="?"&&n.match(/\s/,!1)?"operator":(n.match(/^[A-Za-z0-9_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][A-Za-z0-9_\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]*/),"variableName.local");if(t=="<"&&!n.match(/^[\s\u00a0=]/,!1))return n.match(/^[^\s\u00a0>]*>?/),"atom";if(t=='"'||t=="'")return e.tokenize=m(t),e.tokenize(n,e);if(/[{}\(\),\.;\[\]]/.test(t))return u=t,"bracket";if(t=="#")return n.skipToEnd(),"comment";if(h.test(t))return"operator";if(t==":")return f(n),"atom";if(t=="@")return n.eatWhile(/[a-z\d\-]/i),"meta";if(g.test(t)&&n.match(v))return f(n),"atom";n.eatWhile(/[_\w\d]/);var i=n.current();return F.test(i)?"builtin":x.test(i)?"keyword":"variable"}function f(n){n.match(/(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/i)}function m(n){return function(e,t){for(var i=!1,r;(r=e.next())!=null;){if(r==n&&!i){t.tokenize=p;break}i=!i&&r=="\\"}return"string"}}function o(n,e,t){n.context={prev:n.context,indent:n.indent,col:t,type:e}}function c(n){n.indent=n.context.indent,n.context=n.context.prev}var u,F,x,h,a,g,v,D,y=d(()=>{F=s(["str","lang","langmatches","datatype","bound","sameterm","isiri","isuri","iri","uri","bnode","count","sum","min","max","avg","sample","group_concat","rand","abs","ceil","floor","round","concat","substr","strlen","replace","ucase","lcase","encode_for_uri","contains","strstarts","strends","strbefore","strafter","year","month","day","hours","minutes","seconds","timezone","tz","now","uuid","struuid","md5","sha1","sha256","sha384","sha512","coalesce","if","strlang","strdt","isnumeric","regex","exists","isblank","isliteral","a","bind"]),x=s(["base","prefix","select","distinct","reduced","construct","describe","ask","from","named","where","order","limit","offset","filter","optional","graph","by","asc","desc","as","having","undef","values","group","minus","in","not","service","silent","using","insert","delete","union","true","false","with","data","copy","to","move","add","create","drop","clear","load","into"]),h=/[*+\-<>=&|\^\/!\?]/,a="[A-Za-z_\\-0-9]",g=new RegExp("[A-Za-z]"),v=new RegExp("(("+a+"|\\.)*("+a+"))?:");D={name:"sparql",startState:function(){return{tokenize:p,context:null,indent:0,col:0}},token:function(n,e){if(n.sol()&&(e.context&&e.context.align==null&&(e.context.align=!1),e.indent=n.indentation()),n.eatSpace())return null;var t=e.tokenize(n,e);if(t!="comment"&&e.context&&e.context.align==null&&e.context.type!="pattern"&&(e.context.align=!0),u=="(")o(e,")",n.column());else if(u=="[")o(e,"]",n.column());else if(u=="{")o(e,"}",n.column());else if(/[\]\}\)]/.test(u)){for(;e.context&&e.context.type=="pattern";)c(e);e.context&&u==e.context.type&&(c(e),u=="}"&&e.context&&e.context.type=="pattern"&&c(e))}else u=="."&&e.context&&e.context.type=="pattern"?c(e):/atom|string|variable/.test(t)&&e.context&&(/[\}\]]/.test(e.context.type)?o(e,"pattern",n.column()):e.context.type=="pattern"&&!e.context.align&&(e.context.align=!0,e.context.col=n.column()));return t},indent:function(n,e,t){var i=e&&e.charAt(0),r=n.context;if(/[\]\}]/.test(i))for(;r&&r.type=="pattern";)r=r.prev;var l=r&&i==r.type;return r?r.type=="pattern"?r.col:r.align?r.col+(l?0:1):r.indent+(l?0:t.unit):0},languageData:{commentTokens:{line:"#"}}}});y();export{D as sparql};
