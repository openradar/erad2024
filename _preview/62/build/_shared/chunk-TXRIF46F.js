import{c as B}from"/erad2024/_preview/62/build/_shared/chunk-2NH4LW52.js";var I=B((N,q)=>{q.exports=A;A.displayName="jsTemplates";A.aliases=[];function A(O){(function(a){var d=a.languages.javascript["template-string"],C=d.pattern.source,h=d.inside.interpolation,E=h.inside["interpolation-punctuation"],S=h.pattern.source;function c(t,n){if(a.languages[t])return{pattern:RegExp("((?:"+n+")\\s*)"+C),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:t}}}}a.languages.javascript["template-string"]=[c("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),c("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),c("svg",/\bsvg/.source),c("markdown",/\b(?:markdown|md)/.source),c("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),c("sql",/\bsql/.source),d].filter(Boolean);function L(t,n){return"___"+n.toUpperCase()+"_"+t+"___"}function T(t,n,r){var e={code:t,grammar:n,language:r};return a.hooks.run("before-tokenize",e),e.tokens=a.tokenize(e.code,e.grammar),a.hooks.run("after-tokenize",e),e.tokens}function G(t){var n={};n["interpolation-punctuation"]=E;var r=a.tokenize(t,n);if(r.length===3){var e=[1,1];e.push.apply(e,T(r[1],a.languages.javascript,"javascript")),r.splice.apply(r,e)}return new a.Token("interpolation",r,h.alias,t)}function H(t,n,r){var e=a.tokenize(t,{interpolation:{pattern:RegExp(S),lookbehind:!0}}),l=0,f={},p=e.map(function(s){if(typeof s=="string")return s;for(var o=s.content,i;t.indexOf(i=L(l++,r))!==-1;);return f[i]=o,i}).join(""),g=T(p,n,r),y=Object.keys(f);l=0;function u(s){for(var o=0;o<s.length;o++){if(l>=y.length)return;var i=s[o];if(typeof i=="string"||typeof i.content=="string"){var j=y[l],k=typeof i=="string"?i:i.content,m=k.indexOf(j);if(m!==-1){++l;var _=k.substring(0,m),R=G(f[j]),w=k.substring(m+j.length),v=[];if(_&&v.push(_),v.push(R),w){var x=[w];u(x),v.push.apply(v,x)}typeof i=="string"?(s.splice.apply(s,[o,1].concat(v)),o+=v.length-1):i.content=v}}else{var z=i.content;Array.isArray(z)?u(z):u([z])}}}return u(g),new a.Token(r,g,"language-"+r,t)}var M={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};a.hooks.add("after-tokenize",function(t){if(!(t.language in M))return;function n(r){for(var e=0,l=r.length;e<l;e++){var f=r[e];if(typeof f!="string"){var p=f.content;if(!Array.isArray(p)){typeof p!="string"&&n([p]);continue}if(f.type==="template-string"){var g=p[1];if(p.length===3&&typeof g!="string"&&g.type==="embedded-code"){var y=b(g),u=g.alias,s=Array.isArray(u)?u[0]:u,o=a.languages[s];if(!o)continue;p[1]=H(y,o,s)}}else n(p)}}}n(t.tokens)});function b(t){return typeof t=="string"?t:Array.isArray(t)?t.map(b).join(""):b(t.content)}})(O)}});export{I as a};
