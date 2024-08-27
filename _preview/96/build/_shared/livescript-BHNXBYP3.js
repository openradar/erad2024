import{b as u}from"/erad2024/_preview/96/build/_shared/chunk-2NH4LW52.js";var p,l,y,o,x,g,a,k,i,f,s,v,m=u(()=>{p=function(e,n){var r=n.next||"start";if(r){n.next=n.next;var d=g[r];if(d.splice){for(var c=0;c<d.length;++c){var t=d[c];if(t.regex&&e.match(t.regex))return n.next=t.next||n.next,t.token}return e.next(),"error"}if(e.match(t=g[r]))return t.regex&&e.match(t.regex)?(n.next=t.next,t.token):(e.next(),"error")}return e.next(),"error"},l="(?![\\d\\s])[$\\w\\xAA-\\uFFDC](?:(?!\\s)[$\\w\\xAA-\\uFFDC]|-[A-Za-z])*",y=RegExp("(?:[({[=:]|[-~]>|\\b(?:e(?:lse|xport)|d(?:o|efault)|t(?:ry|hen)|finally|import(?:\\s*all)?|const|var|let|new|catch(?:\\s*"+l+")?))\\s*$"),o="(?![$\\w]|-[A-Za-z]|\\s*:(?![:=]))",x={token:"string",regex:".+"},g={start:[{token:"docComment",regex:"/\\*",next:"comment"},{token:"comment",regex:"#.*"},{token:"keyword",regex:"(?:t(?:h(?:is|row|en)|ry|ypeof!?)|c(?:on(?:tinue|st)|a(?:se|tch)|lass)|i(?:n(?:stanceof)?|mp(?:ort(?:\\s+all)?|lements)|[fs])|d(?:e(?:fault|lete|bugger)|o)|f(?:or(?:\\s+own)?|inally|unction)|s(?:uper|witch)|e(?:lse|x(?:tends|port)|val)|a(?:nd|rguments)|n(?:ew|ot)|un(?:less|til)|w(?:hile|ith)|o[fr]|return|break|let|var|loop)"+o},{token:"atom",regex:"(?:true|false|yes|no|on|off|null|void|undefined)"+o},{token:"invalid",regex:"(?:p(?:ackage|r(?:ivate|otected)|ublic)|i(?:mplements|nterface)|enum|static|yield)"+o},{token:"className.standard",regex:"(?:R(?:e(?:gExp|ferenceError)|angeError)|S(?:tring|yntaxError)|E(?:rror|valError)|Array|Boolean|Date|Function|Number|Object|TypeError|URIError)"+o},{token:"variableName.function.standard",regex:"(?:is(?:NaN|Finite)|parse(?:Int|Float)|Math|JSON|(?:en|de)codeURI(?:Component)?)"+o},{token:"variableName.standard",regex:"(?:t(?:hat|il|o)|f(?:rom|allthrough)|it|by|e)"+o},{token:"variableName",regex:l+"\\s*:(?![:=])"},{token:"variableName",regex:l},{token:"operatorKeyword",regex:"(?:\\.{3}|\\s+\\?)"},{token:"keyword",regex:"(?:@+|::|\\.\\.)",next:"key"},{token:"operatorKeyword",regex:"\\.\\s*",next:"key"},{token:"string",regex:"\\\\\\S[^\\s,;)}\\]]*"},{token:"docString",regex:"'''",next:"qdoc"},{token:"docString",regex:'"""',next:"qqdoc"},{token:"string",regex:"'",next:"qstring"},{token:"string",regex:'"',next:"qqstring"},{token:"string",regex:"`",next:"js"},{token:"string",regex:"<\\[",next:"words"},{token:"regexp",regex:"//",next:"heregex"},{token:"regexp",regex:"\\/(?:[^[\\/\\n\\\\]*(?:(?:\\\\.|\\[[^\\]\\n\\\\]*(?:\\\\.[^\\]\\n\\\\]*)*\\])[^[\\/\\n\\\\]*)*)\\/[gimy$]{0,4}",next:"key"},{token:"number",regex:"(?:0x[\\da-fA-F][\\da-fA-F_]*|(?:[2-9]|[12]\\d|3[0-6])r[\\da-zA-Z][\\da-zA-Z_]*|(?:\\d[\\d_]*(?:\\.\\d[\\d_]*)?|\\.\\d[\\d_]*)(?:e[+-]?\\d[\\d_]*)?[\\w$]*)"},{token:"paren",regex:"[({[]"},{token:"paren",regex:"[)}\\]]",next:"key"},{token:"operatorKeyword",regex:"\\S+"},{token:"content",regex:"\\s+"}],heregex:[{token:"regexp",regex:".*?//[gimy$?]{0,4}",next:"start"},{token:"regexp",regex:"\\s*#{"},{token:"comment",regex:"\\s+(?:#.*)?"},{token:"regexp",regex:"\\S+"}],key:[{token:"operatorKeyword",regex:"[.?@!]+"},{token:"variableName",regex:l,next:"start"},{token:"content",regex:"",next:"start"}],comment:[{token:"docComment",regex:".*?\\*/",next:"start"},{token:"docComment",regex:".+"}],qdoc:[{token:"string",regex:".*?'''",next:"key"},x],qqdoc:[{token:"string",regex:'.*?"""',next:"key"},x],qstring:[{token:"string",regex:"[^\\\\']*(?:\\\\.[^\\\\']*)*'",next:"key"},x],qqstring:[{token:"string",regex:'[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',next:"key"},x],js:[{token:"string",regex:"[^\\\\`]*(?:\\\\.[^\\\\`]*)*`",next:"key"},x],words:[{token:"string",regex:".*?\\]>",next:"key"},x]};for(s in g)if(a=g[s],a.splice)for(i=0,f=a.length;i<f;++i)k=a[i],typeof k.regex=="string"&&(g[s][i].regex=new RegExp("^"+k.regex));else typeof k.regex=="string"&&(g[s].regex=new RegExp("^"+a.regex));v={name:"livescript",startState:function(){return{next:"start",lastToken:{style:null,indent:0,content:""}}},token:function(e,n){for(;e.pos==e.start;)var r=p(e,n);return n.lastToken={style:r,indent:e.indentation(),content:e.current()},r.replace(/\./g," ")},indent:function(e){var n=e.lastToken.indent;return e.lastToken.content.match(y)&&(n+=2),n}}});m();export{v as liveScript};
