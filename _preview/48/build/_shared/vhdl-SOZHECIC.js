import{b as k}from"/erad2024/_preview/48/build/_shared/chunk-2NH4LW52.js";function f(e){for(var t={},n=e.split(","),r=0;r<n.length;++r){var i=n[r].toUpperCase(),l=n[r].charAt(0).toUpperCase()+n[r].slice(1);t[n[r]]=!0,t[i]=!0,t[l]=!0}return t}function p(e){return e.eatWhile(/[\w\$_]/),"meta"}function c(e,t){var n=e.next();if(s[n]){var r=s[n](e,t);if(r!==!1)return r}if(n=='"')return t.tokenize=w(n),t.tokenize(e,t);if(n=="'")return t.tokenize=m(n),t.tokenize(e,t);if(/[\[\]{}\(\),;\:\.]/.test(n))return o=n,null;if(/[\d']/.test(n))return e.eatWhile(/[\w\.']/),"number";if(n=="-"&&e.eat("-"))return e.skipToEnd(),"comment";if(d.test(n))return e.eatWhile(d),"operator";e.eatWhile(/[\w\$_]/);var i=e.current();return v.propertyIsEnumerable(i.toLowerCase())?(b.propertyIsEnumerable(i)&&(o="newstatement"),"keyword"):y.propertyIsEnumerable(i)?"atom":"variable"}function m(e){return function(t,n){for(var r=!1,i,l=!1;(i=t.next())!=null;){if(i==e&&!r){l=!0;break}r=!r&&i=="--"}return(l||!(r||g))&&(n.tokenize=c),"string"}}function w(e){return function(t,n){for(var r=!1,i,l=!1;(i=t.next())!=null;){if(i==e&&!r){l=!0;break}r=!r&&i=="--"}return(l||!(r||g))&&(n.tokenize=c),"string.special"}}function h(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function a(e,t,n){return e.context=new h(e.indented,t,n,null,e.context)}function u(e){var t=e.context.type;return(t==")"||t=="]"||t=="}")&&(e.indented=e.context.indented),e.context=e.context.prev}var y,s,g,v,b,d,o,z,x=k(()=>{y=f("null"),s={"`":p,$:p},g=!1,v=f("abs,access,after,alias,all,and,architecture,array,assert,attribute,begin,block,body,buffer,bus,case,component,configuration,constant,disconnect,downto,else,elsif,end,end block,end case,end component,end for,end generate,end if,end loop,end process,end record,end units,entity,exit,file,for,function,generate,generic,generic map,group,guarded,if,impure,in,inertial,inout,is,label,library,linkage,literal,loop,map,mod,nand,new,next,nor,null,of,on,open,or,others,out,package,package body,port,port map,postponed,procedure,process,pure,range,record,register,reject,rem,report,return,rol,ror,select,severity,signal,sla,sll,sra,srl,subtype,then,to,transport,type,unaffected,units,until,use,variable,wait,when,while,with,xnor,xor"),b=f("architecture,entity,begin,case,port,else,elsif,end,for,function,if"),d=/[&|~><!\)\(*#%@+\/=?\:;}{,\.\^\-\[\]]/;z={name:"vhdl",startState:function(e){return{tokenize:null,context:new h(-e,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(n.align==null&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;o=null;var r=(t.tokenize||c)(e,t);if(r=="comment"||r=="meta")return r;if(n.align==null&&(n.align=!0),(o==";"||o==":")&&n.type=="statement")u(t);else if(o=="{")a(t,e.column(),"}");else if(o=="[")a(t,e.column(),"]");else if(o=="(")a(t,e.column(),")");else if(o=="}"){for(;n.type=="statement";)n=u(t);for(n.type=="}"&&(n=u(t));n.type=="statement";)n=u(t)}else o==n.type?u(t):(n.type=="}"||n.type=="top"||n.type=="statement"&&o=="newstatement")&&a(t,e.column(),"statement");return t.startOfLine=!1,r},indent:function(e,t,n){if(e.tokenize!=c&&e.tokenize!=null)return 0;var r=t&&t.charAt(0),i=e.context,l=r==i.type;return i.type=="statement"?i.indented+(r=="{"?0:n.unit):i.align?i.column+(l?0:1):i.indented+(l?0:n.unit)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"--"}}}});x();export{z as vhdl};
