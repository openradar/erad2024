import{c as O}from"/erad2024/_preview/48/build/_shared/chunk-2NH4LW52.js";var T=O((j,_)=>{_.exports=l;l.displayName="markupTemplating";l.aliases=[];function l(b){(function(e){function g(a,r){return"___"+a.toUpperCase()+r+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,r,f,c){if(a.language===r){var u=a.tokenStack=[];a.code=a.code.replace(f,function(n){if(typeof c=="function"&&!c(n))return n;for(var i=u.length,t;a.code.indexOf(t=g(r,i))!==-1;)++i;return u[i]=n,t}),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,r){if(a.language!==r||!a.tokenStack)return;a.grammar=e.languages[r];var f=0,c=Object.keys(a.tokenStack);function u(n){for(var i=0;i<n.length&&!(f>=c.length);i++){var t=n[i];if(typeof t=="string"||t.content&&typeof t.content=="string"){var y=c[f],d=a.tokenStack[y],p=typeof t=="string"?t:t.content,h=g(r,y),s=p.indexOf(h);if(s>-1){++f;var k=p.substring(0,s),S=new e.Token(r,e.tokenize(d,a.grammar),"language-"+r,d),v=p.substring(s+h.length),o=[];k&&o.push.apply(o,u([k])),o.push(S),v&&o.push.apply(o,u([v])),typeof t=="string"?n.splice.apply(n,[i,1].concat(o)):t.content=o}}else t.content&&u(t.content)}return n}u(a.tokens)}}})})(b)}});export{T as a};
