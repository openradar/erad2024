import{b as p}from"/erad2024/_preview/77/build/_shared/chunk-2NH4LW52.js";var o,x,l,r,c,h,u,s,f,d,w,v=p(()=>{o=/[+\-\/\\*~<>=@%|&?!.,:;^]/,x=/true|false|nil|self|super|thisContext/,l=function(e,n){this.next=e,this.parent=n},r=function(e,n,t){this.name=e,this.context=n,this.eos=t},c=function(){this.context=new l(h,null),this.expectVariable=!0,this.indentation=0,this.userIndentationDelta=0};c.prototype.userIndent=function(e,n){this.userIndentationDelta=e>0?e/n-this.indentation:0};h=function(e,n,t){var i=new r(null,n,!1),a=e.next();return a==='"'?i=u(e,new l(u,n)):a==="'"?i=s(e,new l(s,n)):a==="#"?e.peek()==="'"?(e.next(),i=f(e,new l(f,n))):e.eatWhile(/[^\s.{}\[\]()]/)?i.name="string.special":i.name="meta":a==="$"?(e.next()==="<"&&(e.eatWhile(/[^\s>]/),e.next()),i.name="string.special"):a==="|"&&t.expectVariable?i.context=new l(d,n):/[\[\]{}()]/.test(a)?(i.name="bracket",i.eos=/[\[{(]/.test(a),a==="["?t.indentation++:a==="]"&&(t.indentation=Math.max(0,t.indentation-1))):o.test(a)?(e.eatWhile(o),i.name="operator",i.eos=a!==";"):/\d/.test(a)?(e.eatWhile(/[\w\d]/),i.name="number"):/[\w_]/.test(a)?(e.eatWhile(/[\w\d_]/),i.name=t.expectVariable?x.test(e.current())?"keyword":"variable":null):i.eos=t.expectVariable,i},u=function(e,n){return e.eatWhile(/[^"]/),new r("comment",e.eat('"')?n.parent:n,!0)},s=function(e,n){return e.eatWhile(/[^']/),new r("string",e.eat("'")?n.parent:n,!1)},f=function(e,n){return e.eatWhile(/[^']/),new r("string.special",e.eat("'")?n.parent:n,!1)},d=function(e,n){var t=new r(null,n,!1),i=e.next();return i==="|"?(t.context=n.parent,t.eos=!0):(e.eatWhile(/[^|]/),t.name="variable"),t},w={name:"smalltalk",startState:function(){return new c},token:function(e,n){if(n.userIndent(e.indentation(),e.indentUnit),e.eatSpace())return null;var t=n.context.next(e,n.context,n);return n.context=t.context,n.expectVariable=t.eos,t.name},blankLine:function(e,n){e.userIndent(0,n)},indent:function(e,n,t){var i=e.context.next===h&&n&&n.charAt(0)==="]"?-1:e.userIndentationDelta;return(e.indentation+i)*t.unit},languageData:{indentOnInput:/^\s*\]$/}}});v();export{w as smalltalk};
