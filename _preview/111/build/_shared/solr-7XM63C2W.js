import{b as f}from"/erad2024/_preview/111/build/_shared/chunk-2NH4LW52.js";function a(n){return parseFloat(n).toString()===n}function c(n){return function(e,r){for(var t=!1,o;(o=e.next())!=null&&!(o==n&&!t);)t=!t&&o=="\\";return t||(r.tokenize=i),"string"}}function s(n){return function(e,r){return n=="|"?e.eat(/\|/):n=="&"&&e.eat(/\&/),r.tokenize=i,"operator"}}function p(n){return function(e,r){for(var t=n;(n=e.peek())&&n.match(u)!=null;)t+=e.next();return r.tokenize=i,k.test(t)?"operator":a(t)?"number":e.peek()==":"?"propertyName":"string"}}function i(n,e){var r=n.next();return r=='"'?e.tokenize=c(r):l.test(r)?e.tokenize=s(r):u.test(r)&&(e.tokenize=p(r)),e.tokenize!=i?e.tokenize(n,e):null}var u,l,k,g,z=f(()=>{u=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\"\\]/,l=/[\|\!\+\-\*\?\~\^\&]/,k=/^(OR|AND|NOT|TO)$/i;g={name:"solr",startState:function(){return{tokenize:i}},token:function(n,e){return n.eatSpace()?null:e.tokenize(n,e)}}});z();export{g as solr};
