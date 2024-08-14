import{b as y}from"/erad2024/_preview/69/build/_shared/chunk-2NH4LW52.js";function o(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}function p(e){if(e)for(var t in e)e.hasOwnProperty(t)&&h.push(t)}function P(e,t){var n=e.next();if(n=='"'||n=="'")return t.tokenize=$(n),t.tokenize(e,t);if(/[\[\]{}\(\),;\\:\?\.]/.test(n))return l=n,"punctuation";if(n=="#")return e.skipToEnd(),"atom";if(n=="%")return e.eatWhile(/\b/),"atom";if(/\d/.test(n))return e.eatWhile(/[\w\.]/),"number";if(n=="/"){if(e.eat("*"))return t.tokenize=m,m(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(d.test(n))return n=="@"&&(e.match("try")||e.match("catch")||e.match("lazy"))?"keyword":(e.eatWhile(d),"operator");e.eatWhile(/[\w\$_\xa1-\uffff]/);var r=e.current();return v.propertyIsEnumerable(r)?"keyword":g.propertyIsEnumerable(r)?"builtin":x.propertyIsEnumerable(r)||O.propertyIsEnumerable(r)||w.propertyIsEnumerable(r)||k.propertyIsEnumerable(r)||E.propertyIsEnumerable(r)||C.propertyIsEnumerable(r)?"def":I.propertyIsEnumerable(r)||L.propertyIsEnumerable(r)||z.propertyIsEnumerable(r)?"string":S.propertyIsEnumerable(r)?"typeName.standard":M.propertyIsEnumerable(r)?"modifier":W.propertyIsEnumerable(r)?"atom":"variable"}function $(e){return function(t,n){for(var r=!1,u,f=!1;(u=t.next())!=null;){if(u==e&&!r){var s=t.peek();s&&(s=s.toLowerCase(),(s=="b"||s=="h"||s=="o")&&t.next()),f=!0;break}r=!r&&u=="\\"}return(f||!(r||T))&&(n.tokenize=null),"string"}}function m(e,t){for(var n=!1,r;r=e.next();){if(r=="/"&&n){t.tokenize=null;break}n=r=="*"}return"comment"}function b(e,t,n,r,u){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=u}function a(e,t,n){var r=e.indented;return e.context&&e.context.type=="statement"&&(r=e.context.indented),e.context=new b(r,t,n,null,e.context)}function c(e){var t=e.context.type;return(t==")"||t=="]"||t=="}")&&(e.indented=e.context.indented),e.context=e.context.prev}var i,h,v,g,x,k,O,w,E,C,I,L,z,S,M,W,T,N,d,l,D,B=y(()=>{i={name:"ttcn",keywords:o("activate address alive all alt altstep and and4b any break case component const continue control deactivate display do else encode enumerated except exception execute extends extension external for from function goto group if import in infinity inout interleave label language length log match message mixed mod modifies module modulepar mtc noblock not not4b nowait of on optional or or4b out override param pattern port procedure record recursive rem repeat return runs select self sender set signature system template testcase to type union value valueof var variant while with xor xor4b"),builtin:o("bit2hex bit2int bit2oct bit2str char2int char2oct encvalue decomp decvalue float2int float2str hex2bit hex2int hex2oct hex2str int2bit int2char int2float int2hex int2oct int2str int2unichar isbound ischosen ispresent isvalue lengthof log2str oct2bit oct2char oct2hex oct2int oct2str regexp replace rnd sizeof str2bit str2float str2hex str2int str2oct substr unichar2int unichar2char enum2int"),types:o("anytype bitstring boolean char charstring default float hexstring integer objid octetstring universal verdicttype timer"),timerOps:o("read running start stop timeout"),portOps:o("call catch check clear getcall getreply halt raise receive reply send trigger"),configOps:o("create connect disconnect done kill killed map unmap"),verdictOps:o("getverdict setverdict"),sutOps:o("action"),functionOps:o("apply derefers refers"),verdictConsts:o("error fail inconc none pass"),booleanConsts:o("true false"),otherConsts:o("null NULL omit"),visibilityModifiers:o("private public friend"),templateMatch:o("complement ifpresent subset superset permutation"),multiLineStrings:!0},h=[];p(i.keywords);p(i.builtin);p(i.timerOps);p(i.portOps);v=i.keywords||{},g=i.builtin||{},x=i.timerOps||{},k=i.portOps||{},O=i.configOps||{},w=i.verdictOps||{},E=i.sutOps||{},C=i.functionOps||{},I=i.verdictConsts||{},L=i.booleanConsts||{},z=i.otherConsts||{},S=i.types||{},M=i.visibilityModifiers||{},W=i.templateMatch||{},T=i.multiLineStrings,N=i.indentStatements!==!1,d=/[+\-*&@=<>!\/]/;D={name:"ttcn",startState:function(){return{tokenize:null,context:new b(0,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(n.align==null&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null;l=null;var r=(t.tokenize||P)(e,t);if(r=="comment")return r;if(n.align==null&&(n.align=!0),(l==";"||l==":"||l==",")&&n.type=="statement")c(t);else if(l=="{")a(t,e.column(),"}");else if(l=="[")a(t,e.column(),"]");else if(l=="(")a(t,e.column(),")");else if(l=="}"){for(;n.type=="statement";)n=c(t);for(n.type=="}"&&(n=c(t));n.type=="statement";)n=c(t)}else l==n.type?c(t):N&&((n.type=="}"||n.type=="top")&&l!=";"||n.type=="statement"&&l=="newstatement")&&a(t,e.column(),"statement");return t.startOfLine=!1,r},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}},autocomplete:h}}});B();export{D as ttcn};
