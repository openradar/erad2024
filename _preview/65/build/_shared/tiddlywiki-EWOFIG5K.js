import{b as c}from"/erad2024/_preview/65/build/_shared/chunk-2NH4LW52.js";function o(e,t,r){return t.tokenize=r,r(e,t)}function i(e,t){var r=e.sol(),n=e.peek();if(t.block=!1,r&&/[<\/\*{}\-]/.test(n)){if(e.match(y))return t.block=!0,o(e,t,u);if(e.match(p))return"quote";if(e.match(d)||e.match(a)||e.match(w)||e.match(b)||e.match(v)||e.match(S))return"comment";if(e.match(h))return"contentSeparator"}if(e.next(),r&&/[\/\*!#;:>|]/.test(n)){if(n=="!")return e.skipToEnd(),"header";if(n=="*")return e.eatWhile("*"),"comment";if(n=="#")return e.eatWhile("#"),"comment";if(n==";")return e.eatWhile(";"),"comment";if(n==":")return e.eatWhile(":"),"comment";if(n==">")return e.eatWhile(">"),"quote";if(n=="|")return"header"}if(n=="{"&&e.match("{{"))return o(e,t,u);if(/[hf]/i.test(n)&&/[ti]/i.test(e.peek())&&e.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return"link";if(n=='"')return"string";if(n=="~"||/[\[\]]/.test(n)&&e.match(n))return"brace";if(n=="@")return e.eatWhile(k),"link";if(/\d/.test(n))return e.eatWhile(/\d/),"number";if(n=="/"){if(e.eat("%"))return o(e,t,C);if(e.eat("/"))return o(e,t,x)}if(n=="_"&&e.eat("_"))return o(e,t,g);if(n=="-"&&e.eat("-")){if(e.peek()!=" ")return o(e,t,T);if(e.peek()==" ")return"brace"}return n=="'"&&e.eat("'")?o(e,t,W):n=="<"&&e.eat("<")?o(e,t,m):(e.eatWhile(/[\w\$_]/),l.propertyIsEnumerable(e.current())?"keyword":null)}function C(e,t){for(var r=!1,n;n=e.next();){if(n=="/"&&r){t.tokenize=i;break}r=n=="%"}return"comment"}function W(e,t){for(var r=!1,n;n=e.next();){if(n=="'"&&r){t.tokenize=i;break}r=n=="'"}return"strong"}function u(e,t){var r=t.block;return r&&e.current()?"comment":!r&&e.match(z)||r&&e.sol()&&e.match($)?(t.tokenize=i,"comment"):(e.next(),"comment")}function x(e,t){for(var r=!1,n;n=e.next();){if(n=="/"&&r){t.tokenize=i;break}r=n=="/"}return"emphasis"}function g(e,t){for(var r=!1,n;n=e.next();){if(n=="_"&&r){t.tokenize=i;break}r=n=="_"}return"link"}function T(e,t){for(var r=!1,n;n=e.next();){if(n=="-"&&r){t.tokenize=i;break}r=n=="-"}return"deleted"}function m(e,t){if(e.current()=="<<")return"meta";var r=e.next();return r?r==">"&&e.peek()==">"?(e.next(),t.tokenize=i,"meta"):(e.eatWhile(/[\w\$_]/),f.propertyIsEnumerable(e.current())?"keyword":null):(t.tokenize=i,null)}var l,f,k,h,d,a,p,w,b,v,S,y,$,z,_,E=c(()=>{l={},f={allTags:!0,closeAll:!0,list:!0,newJournal:!0,newTiddler:!0,permaview:!0,saveChanges:!0,search:!0,slider:!0,tabs:!0,tag:!0,tagging:!0,tags:!0,tiddler:!0,timeline:!0,today:!0,version:!0,option:!0,with:!0,filter:!0},k=/[\w_\-]/i,h=/^\-\-\-\-+$/,d=/^\/\*\*\*$/,a=/^\*\*\*\/$/,p=/^<<<$/,w=/^\/\/\{\{\{$/,b=/^\/\/\}\}\}$/,v=/^<!--\{\{\{-->$/,S=/^<!--\}\}\}-->$/,y=/^\{\{\{$/,$=/^\}\}\}$/,z=/.*?\}\}\}/;_={name:"tiddlywiki",startState:function(){return{tokenize:i}},token:function(e,t){if(e.eatSpace())return null;var r=t.tokenize(e,t);return r}}});E();export{_ as tiddlyWiki};
