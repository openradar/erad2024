import{b as l}from"/erad2024/_preview/49/build/_shared/chunk-2NH4LW52.js";function u(e){for(var r={},n=0,t=e.length;n<t;++n)r[e[n]]=!0;return r}function s(e,r,n){return n.tokenize.push(e),e(r,n)}function p(e,r){if(e.eatSpace())return null;var n=e.next();return n=='"'||n=="'"?s(d(n,"string"),e,r):n=="-"&&e.eat("-")?(e.skipToEnd(),"comment"):n==":"&&e.eat("=")?"operator":/[0-9]/.test(n)?(e.eatWhile(/[xXbBCc0-9\.]/),e.eat(/[\?\!]/),"variable"):/[a-zA-Z_0-9]/.test(n)?(e.eatWhile(/[a-zA-Z_0-9]/),e.eat(/[\?\!]/),"variable"):/[=+\-\/*^%<>~]/.test(n)?(e.eatWhile(/[=+\-\/*^%<>~]/),"operator"):null}function d(e,r,n){return function(t,o){for(var a=!1,i;(i=t.next())!=null;){if(i==e&&(n||!a)){o.tokenize.pop();break}a=!a&&i=="%"}return r}}var c,f,h,b=l(()=>{c=u(["note","across","when","variant","until","unique","undefine","then","strip","select","retry","rescue","require","rename","reference","redefine","prefix","once","old","obsolete","loop","local","like","is","inspect","infix","include","if","frozen","from","external","export","ensure","end","elseif","else","do","creation","create","check","alias","agent","separate","invariant","inherit","indexing","feature","expanded","deferred","class","Void","True","Result","Precursor","False","Current","create","attached","detachable","as","and","implies","not","or"]),f=u([":=","and then","and","or","<<",">>"]);h={name:"eiffel",startState:function(){return{tokenize:[p]}},token:function(e,r){var n=r.tokenize[r.tokenize.length-1](e,r);if(n=="variable"){var t=e.current();n=c.propertyIsEnumerable(e.current())?"keyword":f.propertyIsEnumerable(e.current())?"operator":/^[A-Z][A-Z_0-9]*$/g.test(t)?"tag":/^0[bB][0-1]+$/g.test(t)||/^0[cC][0-7]+$/g.test(t)||/^0[xX][a-fA-F0-9]+$/g.test(t)||/^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(t)||/^[0-9]+$/g.test(t)?"number":"variable"}return n},languageData:{commentTokens:{line:"--"}}}});b();export{h as eiffel};