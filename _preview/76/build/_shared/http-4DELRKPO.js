import{b as i}from"/erad2024/_preview/76/build/_shared/chunk-2NH4LW52.js";function u(r,n){return r.skipToEnd(),n.cur=t,"error"}function f(r,n){return r.match(/^HTTP\/\d\.\d/)?(n.cur=l,"keyword"):r.match(/^[A-Z]+/)&&/[ \t]/.test(r.peek())?(n.cur=s,"keyword"):u(r,n)}function l(r,n){var e=r.match(/^\d+/);if(!e)return u(r,n);n.cur=d;var o=Number(e[0]);return o>=100&&o<400?"atom":"error"}function d(r,n){return r.skipToEnd(),n.cur=t,null}function s(r,n){return r.eatWhile(/\S/),n.cur=p,"string.special"}function p(r,n){return r.match(/^HTTP\/\d\.\d$/)?(n.cur=t,"keyword"):u(r,n)}function t(r){return r.sol()&&!r.eat(/[ \t]/)?r.match(/^.*?:/)?"atom":(r.skipToEnd(),"error"):(r.skipToEnd(),"string")}function c(r){return r.skipToEnd(),null}var k,a=i(()=>{k={name:"http",token:function(r,n){var e=n.cur;return e!=t&&e!=c&&r.eatSpace()?null:e(r,n)},blankLine:function(r){r.cur=c},startState:function(){return{cur:f}}}});a();export{k as http};
