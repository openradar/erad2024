import{b as y}from"/erad2024/_preview/49/build/_shared/chunk-2NH4LW52.js";function k(b){function h(t,n){t.cmdState.push(n)}function g(t){return t.cmdState.length>0?t.cmdState[t.cmdState.length-1]:null}function p(t){var n=t.cmdState.pop();n&&n.closeBracket()}function s(t){for(var n=t.cmdState,e=n.length-1;e>=0;e--){var a=n[e];if(a.name!="DEFAULT")return a}return{styleIdentifier:function(){return null}}}function i(t,n,e){return function(){this.name=t,this.bracketNo=0,this.style=n,this.styles=e,this.argument=null,this.styleIdentifier=function(){return this.styles[this.bracketNo-1]||null},this.openBracket=function(){return this.bracketNo++,"bracket"},this.closeBracket=function(){}}}var r={};r.importmodule=i("importmodule","tag",["string","builtin"]),r.documentclass=i("documentclass","tag",["","atom"]),r.usepackage=i("usepackage","tag",["atom"]),r.begin=i("begin","tag",["atom"]),r.end=i("end","tag",["atom"]),r.label=i("label","tag",["atom"]),r.ref=i("ref","tag",["atom"]),r.eqref=i("eqref","tag",["atom"]),r.cite=i("cite","tag",["atom"]),r.bibitem=i("bibitem","tag",["atom"]),r.Bibitem=i("Bibitem","tag",["atom"]),r.RBibitem=i("RBibitem","tag",["atom"]),r.DEFAULT=function(){this.name="DEFAULT",this.style="tag",this.styleIdentifier=this.openBracket=this.closeBracket=function(){}};function f(t,n){t.f=n}function l(t,n){var e;if(t.match(/^\\[a-zA-Z@\xc0-\u1fff\u2060-\uffff]+/)){var a=t.current().slice(1);return e=r.hasOwnProperty(a)?r[a]:r.DEFAULT,e=new e,h(n,e),f(n,d),e.style}if(t.match(/^\\[$&%#{}_]/)||t.match(/^\\[,;!\/\\]/))return"tag";if(t.match("\\["))return f(n,function(m,c){return o(m,c,"\\]")}),"keyword";if(t.match("\\("))return f(n,function(m,c){return o(m,c,"\\)")}),"keyword";if(t.match("$$"))return f(n,function(m,c){return o(m,c,"$$")}),"keyword";if(t.match("$"))return f(n,function(m,c){return o(m,c,"$")}),"keyword";var u=t.next();if(u=="%")return t.skipToEnd(),"comment";if(u=="}"||u=="]"){if(e=g(n),e)e.closeBracket(u),f(n,d);else return"error";return"bracket"}else return u=="{"||u=="["?(e=r.DEFAULT,e=new e,h(n,e),"bracket"):/\d/.test(u)?(t.eatWhile(/[\w.%]/),"atom"):(t.eatWhile(/[\w\-_]/),e=s(n),e.name=="begin"&&(e.argument=t.current()),e.styleIdentifier())}function o(t,n,e){if(t.eatSpace())return null;if(e&&t.match(e))return f(n,l),"keyword";if(t.match(/^\\[a-zA-Z@]+/))return"tag";if(t.match(/^[a-zA-Z]+/))return"variableName.special";if(t.match(/^\\[$&%#{}_]/)||t.match(/^\\[,;!\/]/)||t.match(/^[\^_&]/))return"tag";if(t.match(/^[+\-<>|=,\/@!*:;'"`~#?]/))return null;if(t.match(/^(\d+\.\d*|\d*\.\d+|\d+)/))return"number";var a=t.next();return a=="{"||a=="}"||a=="["||a=="]"||a=="("||a==")"?"bracket":a=="%"?(t.skipToEnd(),"comment"):"error"}function d(t,n){var e=t.peek(),a;return e=="{"||e=="["?(a=g(n),a.openBracket(e),t.eat(e),f(n,l),"bracket"):/[ \t\r]/.test(e)?(t.eat(e),null):(f(n,l),p(n),l(t,n))}return{name:"stex",startState:function(){var t=b?function(n,e){return o(n,e)}:l;return{cmdState:[],f:t}},copyState:function(t){return{cmdState:t.cmdState.slice(),f:t.f}},token:function(t,n){return n.f(t,n)},blankLine:function(t){t.f=l,t.cmdState.length=0},languageData:{commentTokens:{line:"%"}}}}var v,w,S=y(()=>{v=k(!1),w=k(!0)});S();export{v as stex,w as stexMath};
