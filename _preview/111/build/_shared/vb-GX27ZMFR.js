import{b}from"/erad2024/_preview/111/build/_shared/chunk-2NH4LW52.js";function o(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}function l(e,n){n.currentIndent++}function c(e,n){n.currentIndent--}function d(e,n){if(e.eatSpace())return null;var i=e.peek();if(i==="'")return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.a-f]/i,!1)){var r=!1;if((e.match(/^\d*\.\d+F?/i)||e.match(/^\d+\.\d*F?/)||e.match(/^\.\d+F?/))&&(r=!0),r)return e.eat(/J/i),"number";var t=!1;if(e.match(/^&H[0-9a-f]+/i)||e.match(/^&O[0-7]+/i)?t=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),t=!0):e.match(/^0(?![\dx])/i)&&(t=!0),t)return e.eat(/L/i),"number"}return e.match(S)?(n.tokenize=L(e.current()),n.tokenize(e,n)):e.match(R)||e.match(I)?null:e.match(m)||e.match(k)||e.match(z)?"operator":e.match(x)?null:e.match(F)?(l(e,n),n.doInCurrentLine=!0,"keyword"):e.match(T)?(n.doInCurrentLine?n.doInCurrentLine=!1:l(e,n),"keyword"):e.match(g)?"keyword":e.match(w)?(c(e,n),c(e,n),"keyword"):e.match(y)?(c(e,n),"keyword"):e.match(C)||e.match(E)?"keyword":e.match(O)?"variable":(e.next(),u)}function L(e){var n=e.length==1,i="string";return function(r,t){for(;!r.eol();){if(r.eatWhile(/[^'"]/),r.match(e))return t.tokenize=d,i;r.eat(/['"]/)}return n&&(t.tokenize=d),i}}function _(e,n){var i=n.tokenize(e,n),r=e.current();if(r===".")return i=n.tokenize(e,n),i==="variable"?"variable":u;var t="[({".indexOf(r);return t!==-1&&l(e,n),K==="dedent"&&c(e,n)||(t="])}".indexOf(r),t!==-1&&c(e,n))?u:i}var u,k,x,m,I,R,O,a,f,h,v,z,p,s,E,C,S,T,g,y,w,F,K,D,A=b(()=>{u="error";k=new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]"),x=new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),m=new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),I=new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),R=new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"),O=new RegExp("^[_A-Za-z][_A-Za-z0-9]*"),a=["class","module","sub","enum","select","while","if","function","get","set","property","try","structure","synclock","using","with"],f=["else","elseif","case","catch","finally"],h=["next","loop"],v=["and","andalso","or","orelse","xor","in","not","is","isnot","like"],z=o(v),p=["#const","#else","#elseif","#end","#if","#region","addhandler","addressof","alias","as","byref","byval","cbool","cbyte","cchar","cdate","cdbl","cdec","cint","clng","cobj","compare","const","continue","csbyte","cshort","csng","cstr","cuint","culng","cushort","declare","default","delegate","dim","directcast","each","erase","error","event","exit","explicit","false","for","friend","gettype","goto","handles","implements","imports","infer","inherits","interface","isfalse","istrue","lib","me","mod","mustinherit","mustoverride","my","mybase","myclass","namespace","narrowing","new","nothing","notinheritable","notoverridable","of","off","on","operator","option","optional","out","overloads","overridable","overrides","paramarray","partial","private","protected","public","raiseevent","readonly","redim","removehandler","resume","return","shadows","shared","static","step","stop","strict","then","throw","to","true","trycast","typeof","until","until","when","widening","withevents","writeonly"],s=["object","boolean","char","string","byte","sbyte","short","ushort","int16","uint16","integer","uinteger","int32","uint32","long","ulong","int64","uint64","decimal","single","double","float","date","datetime","intptr","uintptr"],E=o(p),C=o(s),S='"',T=o(a),g=o(f),y=o(h),w=o(["end"]),F=o(["do"]),K=null;D={name:"vb",startState:function(){return{tokenize:d,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1}},token:function(e,n){e.sol()&&(n.currentIndent+=n.nextLineIndent,n.nextLineIndent=0,n.doInCurrentLine=0);var i=_(e,n);return n.lastToken={style:i,content:e.current()},i},indent:function(e,n,i){var r=n.replace(/^\s+|\s+$/g,"");return r.match(y)||r.match(w)||r.match(g)?i.unit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*i.unit},languageData:{closeBrackets:{brackets:["(","[","{",'"']},commentTokens:{line:"'"},autocomplete:a.concat(f).concat(h).concat(v).concat(p).concat(s)}}});A();export{D as vb};
