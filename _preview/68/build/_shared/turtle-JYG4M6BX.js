import{b as a}from"/erad2024/_preview/68/build/_shared/chunk-2NH4LW52.js";function x(e){return new RegExp("^(?:"+e.join("|")+")$","i")}function v(e,n){var t=e.next();if(o=null,t=="<"&&!e.match(/^[\s\u00a0=]/,!1))return e.match(/^[^\s\u00a0>]*>?/),"atom";if(t=='"'||t=="'")return n.tokenize=g(t),n.tokenize(e,n);if(/[{}\(\),\.;\[\]]/.test(t))return o=t,null;if(t=="#")return e.skipToEnd(),"comment";if(p.test(t))return e.eatWhile(p),null;if(t==":")return"operator";if(e.eatWhile(/[_\w\d]/),e.peek()==":")return"variableName.special";var r=e.current();return f.test(r)?"meta":t>="A"&&t<="Z"?"comment":"keyword";var r=e.current();return d.test(r)?null:f.test(r)?"meta":"variable"}function g(e){return function(n,t){for(var r=!1,i;(i=n.next())!=null;){if(i==e&&!r){t.tokenize=v;break}r=!r&&i=="\\"}return"string"}}function l(e,n,t){e.context={prev:e.context,indent:e.indent,col:t,type:n}}function c(e){e.indent=e.context.indent,e.context=e.context.prev}var o,d,f,p,h,k=a(()=>{d=x([]),f=x(["@prefix","@base","a"]),p=/[*+\-<>=&|]/;h={name:"turtle",startState:function(){return{tokenize:v,context:null,indent:0,col:0}},token:function(e,n){if(e.sol()&&(n.context&&n.context.align==null&&(n.context.align=!1),n.indent=e.indentation()),e.eatSpace())return null;var t=n.tokenize(e,n);if(t!="comment"&&n.context&&n.context.align==null&&n.context.type!="pattern"&&(n.context.align=!0),o=="(")l(n,")",e.column());else if(o=="[")l(n,"]",e.column());else if(o=="{")l(n,"}",e.column());else if(/[\]\}\)]/.test(o)){for(;n.context&&n.context.type=="pattern";)c(n);n.context&&o==n.context.type&&c(n)}else o=="."&&n.context&&n.context.type=="pattern"?c(n):/atom|string|variable/.test(t)&&n.context&&(/[\}\]]/.test(n.context.type)?l(n,"pattern",e.column()):n.context.type=="pattern"&&!n.context.align&&(n.context.align=!0,n.context.col=e.column()));return t},indent:function(e,n,t){var r=n&&n.charAt(0),i=e.context;if(/[\]\}]/.test(r))for(;i&&i.type=="pattern";)i=i.prev;var u=i&&r==i.type;return i?i.type=="pattern"?i.col:i.align?i.col+(u?0:1):i.indent+(u?0:t.unit):0},languageData:{commentTokens:{line:"#"}}}});k();export{h as turtle};
