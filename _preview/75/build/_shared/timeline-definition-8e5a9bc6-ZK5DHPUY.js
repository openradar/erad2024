import{a as Mt,b as $t,c as G,d as Y,g as Lt,h as st,i as rt,j as at,l as At,m as Pt,n as Ht,o as E,u as D,v as ot,w as ct,x as lt,y as ht}from"/erad2024/_preview/75/build/_shared/chunk-ZGDKL6ZB.js";import"/erad2024/_preview/75/build/_shared/chunk-YAIQ7LUU.js";import{e as F}from"/erad2024/_preview/75/build/_shared/chunk-2NH4LW52.js";var oe=F(Mt()),ce=F($t()),le=F(Lt());var xe=F(At()),_e=F(Pt()),be=F(Ht());var tt=function(){var i=function(k,r,a,h){for(a=a||{},h=k.length;h--;a[k[h]]=r);return a},t=[1,2],e=[1,5],s=[6,9,11,17,18,20,22,23,26,27,28],n=[1,15],c=[1,16],l=[1,17],p=[1,18],g=[1,19],d=[1,23],f=[1,24],v=[1,27],_=[4,6,9,11,17,18,20,22,23,26,27,28],b={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,period_statement:24,event_statement:25,period:26,event:27,open_directive:28,type_directive:29,arg_directive:30,close_directive:31,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",26:"period",27:"event",28:"open_directive",29:"type_directive",30:"arg_directive",31:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[24,1],[25,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(r,a,h,u,y,o,$){var x=o.length-1;switch(y){case 1:return o[x-1];case 3:this.$=[];break;case 4:o[x-1].push(o[x]),this.$=o[x-1];break;case 5:case 6:this.$=o[x];break;case 7:case 8:this.$=[];break;case 11:u.getCommonDb().setDiagramTitle(o[x].substr(6)),this.$=o[x].substr(6);break;case 12:this.$=o[x].trim(),u.getCommonDb().setAccTitle(this.$);break;case 13:case 14:this.$=o[x].trim(),u.getCommonDb().setAccDescription(this.$);break;case 15:u.addSection(o[x].substr(8)),this.$=o[x].substr(8);break;case 19:u.addTask(o[x],0,""),this.$=o[x];break;case 20:u.addEvent(o[x].substr(2)),this.$=o[x];break;case 21:u.parseDirective("%%{","open_directive");break;case 22:u.parseDirective(o[x],"type_directive");break;case 23:o[x]=o[x].trim().replace(/'/g,'"'),u.parseDirective(o[x],"arg_directive");break;case 24:u.parseDirective("}%%","close_directive","timeline");break}},table:[{3:1,4:t,7:3,12:4,28:e},{1:[3]},i(s,[2,3],{5:6}),{3:7,4:t,7:3,12:4,28:e},{13:8,29:[1,9]},{29:[2,21]},{6:[1,10],7:22,8:11,9:[1,12],10:13,11:[1,14],12:4,17:n,18:c,20:l,22:p,23:g,24:20,25:21,26:d,27:f,28:e},{1:[2,2]},{14:25,15:[1,26],31:v},i([15,31],[2,22]),i(s,[2,8],{1:[2,1]}),i(s,[2,4]),{7:22,10:28,12:4,17:n,18:c,20:l,22:p,23:g,24:20,25:21,26:d,27:f,28:e},i(s,[2,6]),i(s,[2,7]),i(s,[2,11]),{19:[1,29]},{21:[1,30]},i(s,[2,14]),i(s,[2,15]),i(s,[2,16]),i(s,[2,17]),i(s,[2,18]),i(s,[2,19]),i(s,[2,20]),{11:[1,31]},{16:32,30:[1,33]},{11:[2,24]},i(s,[2,5]),i(s,[2,12]),i(s,[2,13]),i(_,[2,9]),{14:34,31:v},{31:[2,23]},{11:[1,35]},i(_,[2,10])],defaultActions:{5:[2,21],7:[2,2],27:[2,24],33:[2,23]},parseError:function(r,a){if(a.recoverable)this.trace(r);else{var h=new Error(r);throw h.hash=a,h}},parse:function(r){var a=this,h=[0],u=[],y=[null],o=[],$=this.table,x="",M=0,S=0,L=2,V=1,H=o.slice.call(arguments,1),m=Object.create(this.lexer),C={yy:{}};for(var j in this.yy)Object.prototype.hasOwnProperty.call(this.yy,j)&&(C.yy[j]=this.yy[j]);m.setInput(r,C.yy),C.yy.lexer=m,C.yy.parser=this,typeof m.yylloc>"u"&&(m.yylloc={});var K=m.yylloc;o.push(K);var It=m.options&&m.options.ranges;typeof C.yy.parseError=="function"?this.parseError=C.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Nt(){var P;return P=u.pop()||m.lex()||V,typeof P!="number"&&(P instanceof Array&&(u=P,P=u.pop()),P=a.symbols_[P]||P),P}for(var I,z,N,Q,W={},q,A,nt,U;;){if(z=h[h.length-1],this.defaultActions[z]?N=this.defaultActions[z]:((I===null||typeof I>"u")&&(I=Nt()),N=$[z]&&$[z][I]),typeof N>"u"||!N.length||!N[0]){var X="";U=[];for(q in $[z])this.terminals_[q]&&q>L&&U.push("'"+this.terminals_[q]+"'");m.showPosition?X="Parse error on line "+(M+1)+`:
`+m.showPosition()+`
Expecting `+U.join(", ")+", got '"+(this.terminals_[I]||I)+"'":X="Parse error on line "+(M+1)+": Unexpected "+(I==V?"end of input":"'"+(this.terminals_[I]||I)+"'"),this.parseError(X,{text:m.match,token:this.terminals_[I]||I,line:m.yylineno,loc:K,expected:U})}if(N[0]instanceof Array&&N.length>1)throw new Error("Parse Error: multiple actions possible at state: "+z+", token: "+I);switch(N[0]){case 1:h.push(I),y.push(m.yytext),o.push(m.yylloc),h.push(N[1]),I=null,S=m.yyleng,x=m.yytext,M=m.yylineno,K=m.yylloc;break;case 2:if(A=this.productions_[N[1]][1],W.$=y[y.length-A],W._$={first_line:o[o.length-(A||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(A||1)].first_column,last_column:o[o.length-1].last_column},It&&(W._$.range=[o[o.length-(A||1)].range[0],o[o.length-1].range[1]]),Q=this.performAction.apply(W,[x,S,M,C.yy,N[1],y,o].concat(H)),typeof Q<"u")return Q;A&&(h=h.slice(0,-1*A*2),y=y.slice(0,-1*A),o=o.slice(0,-1*A)),h.push(this.productions_[N[1]][0]),y.push(W.$),o.push(W._$),nt=$[h[h.length-2]][h[h.length-1]],h.push(nt);break;case 3:return!0}}return!0}},w=function(){var k={EOF:1,parseError:function(a,h){if(this.yy.parser)this.yy.parser.parseError(a,h);else throw new Error(a)},setInput:function(r,a){return this.yy=a||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var a=r.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},unput:function(r){var a=r.length,h=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var y=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===u.length?this.yylloc.first_column:0)+u[u.length-h.length].length-h[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[y[0],y[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(r){this.unput(this.match.slice(r))},pastInput:function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var r=this.pastInput(),a=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+a+"^"},test_match:function(r,a){var h,u,y;if(this.options.backtrack_lexer&&(y={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(y.yylloc.range=this.yylloc.range.slice(0))),u=r[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],h=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var o in y)this[o]=y[o];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,a,h,u;this._more||(this.yytext="",this.match="");for(var y=this._currentRules(),o=0;o<y.length;o++)if(h=this._input.match(this.rules[y[o]]),h&&(!a||h[0].length>a[0].length)){if(a=h,u=o,this.options.backtrack_lexer){if(r=this.test_match(h,y[o]),r!==!1)return r;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(r=this.test_match(a,y[u]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return a||this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(a,h,u,y){switch(u){case 0:return this.begin("open_directive"),28;case 1:return this.begin("type_directive"),29;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),31;case 4:return 30;case 5:break;case 6:break;case 7:return 11;case 8:break;case 9:break;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 27;case 21:return 26;case 22:return 6;case 23:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23],inclusive:!0}}};return k}();b.lexer=w;function T(){this.yy={}}return T.prototype=b,b.Parser=T,new T}();tt.parser=tt;var Ct=tt,B="",yt=0,et=[],Z=[],O=[],gt=()=>lt,ft=(i,t,e)=>{ht(globalThis,i,t,e)},mt=function(){et.length=0,Z.length=0,B="",O.length=0,ct()},xt=function(i){B=i,et.push(i)},_t=function(){return et},bt=function(){let i=dt(),t=100,e=0;for(;!i&&e<t;)i=dt(),e++;return Z.push(...O),Z},kt=function(i,t,e){let s={id:yt++,section:B,type:B,task:i,score:t||0,events:e?[e]:[]};O.push(s)},vt=function(i){O.find(e=>e.id===yt-1).events.push(i)},wt=function(i){let t={section:B,type:B,description:i,task:i,classes:[]};Z.push(t)},dt=function(){let i=function(e){return O[e].processed},t=!0;for(let[e,s]of O.entries())i(e),t=t&&s.processed;return t},Vt={clear:mt,getCommonDb:gt,addSection:xt,getSections:_t,getTasks:bt,addTask:kt,addTaskOrg:wt,addEvent:vt,parseDirective:ft},zt=Object.freeze(Object.defineProperty({__proto__:null,addEvent:vt,addSection:xt,addTask:kt,addTaskOrg:wt,clear:mt,default:Vt,getCommonDb:gt,getSections:_t,getTasks:bt,parseDirective:ft},Symbol.toStringTag,{value:"Module"})),Rt=12,J=function(i,t){let e=i.append("rect");return e.attr("x",t.x),e.attr("y",t.y),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("width",t.width),e.attr("height",t.height),e.attr("rx",t.rx),e.attr("ry",t.ry),t.class!==void 0&&e.attr("class",t.class),e},Wt=function(i,t){let s=i.append("circle").attr("cx",t.cx).attr("cy",t.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),n=i.append("g");n.append("circle").attr("cx",t.cx-15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),n.append("circle").attr("cx",t.cx+15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function c(g){let d=Y().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);g.append("path").attr("class","mouth").attr("d",d).attr("transform","translate("+t.cx+","+(t.cy+2)+")")}function l(g){let d=Y().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);g.append("path").attr("class","mouth").attr("d",d).attr("transform","translate("+t.cx+","+(t.cy+7)+")")}function p(g){g.append("line").attr("class","mouth").attr("stroke",2).attr("x1",t.cx-5).attr("y1",t.cy+7).attr("x2",t.cx+5).attr("y2",t.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return t.score>3?c(n):t.score<3?l(n):p(n),s},Ft=function(i,t){let e=i.append("circle");return e.attr("cx",t.cx),e.attr("cy",t.cy),e.attr("class","actor-"+t.pos),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("r",t.r),e.class!==void 0&&e.attr("class",e.class),t.title!==void 0&&e.append("title").text(t.title),e},St=function(i,t){let e=t.text.replace(/<br\s*\/?>/gi," "),s=i.append("text");s.attr("x",t.x),s.attr("y",t.y),s.attr("class","legend"),s.style("text-anchor",t.anchor),t.class!==void 0&&s.attr("class",t.class);let n=s.append("tspan");return n.attr("x",t.x+t.textMargin*2),n.text(e),s},Bt=function(i,t){function e(n,c,l,p,g){return n+","+c+" "+(n+l)+","+c+" "+(n+l)+","+(c+p-g)+" "+(n+l-g*1.2)+","+(c+p)+" "+n+","+(c+p)}let s=i.append("polygon");s.attr("points",e(t.x,t.y,50,20,7)),s.attr("class","labelBox"),t.y=t.y+t.labelMargin,t.x=t.x+.5*t.labelMargin,St(i,t)},Ot=function(i,t,e){let s=i.append("g"),n=it();n.x=t.x,n.y=t.y,n.fill=t.fill,n.width=e.width,n.height=e.height,n.class="journey-section section-type-"+t.num,n.rx=3,n.ry=3,J(s,n),Et(e)(t.text,s,n.x,n.y,n.width,n.height,{class:"journey-section section-type-"+t.num},e,t.colour)},ut=-1,jt=function(i,t,e){let s=t.x+e.width/2,n=i.append("g");ut++;let c=300+5*30;n.append("line").attr("id","task"+ut).attr("x1",s).attr("y1",t.y).attr("x2",s).attr("y2",c).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),Wt(n,{cx:s,cy:300+(5-t.score)*30,score:t.score});let l=it();l.x=t.x,l.y=t.y,l.fill=t.fill,l.width=e.width,l.height=e.height,l.class="task task-type-"+t.num,l.rx=3,l.ry=3,J(n,l),t.x+14,Et(e)(t.task,n,l.x,l.y,l.width,l.height,{class:"task"},e,t.colour)},Gt=function(i,t){J(i,{x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,class:"rect"}).lower()},qt=function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},it=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},Et=function(){function i(n,c,l,p,g,d,f,v){let _=c.append("text").attr("x",l+g/2).attr("y",p+d/2+5).style("font-color",v).style("text-anchor","middle").text(n);s(_,f)}function t(n,c,l,p,g,d,f,v,_){let{taskFontSize:b,taskFontFamily:w}=v,T=n.split(/<br\s*\/?>/gi);for(let k=0;k<T.length;k++){let r=k*b-b*(T.length-1)/2,a=c.append("text").attr("x",l+g/2).attr("y",p).attr("fill",_).style("text-anchor","middle").style("font-size",b).style("font-family",w);a.append("tspan").attr("x",l+g/2).attr("dy",r).text(T[k]),a.attr("y",p+d/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),s(a,f)}}function e(n,c,l,p,g,d,f,v){let _=c.append("switch"),w=_.append("foreignObject").attr("x",l).attr("y",p).attr("width",g).attr("height",d).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");w.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(n),t(n,_,l,p,g,d,f,v),s(w,f)}function s(n,c){for(let l in c)l in c&&n.attr(l,c[l])}return function(n){return n.textPlacement==="fo"?e:n.textPlacement==="old"?i:t}}(),Ut=function(i){i.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")};function Tt(i,t){i.each(function(){var e=G(this),s=e.text().split(/(\s+|<br>)/).reverse(),n,c=[],l=1.1,p=e.attr("y"),g=parseFloat(e.attr("dy")),d=e.text(null).append("tspan").attr("x",0).attr("y",p).attr("dy",g+"em");for(let f=0;f<s.length;f++)n=s[s.length-1-f],c.push(n),d.text(c.join(" ").trim()),(d.node().getComputedTextLength()>t||n==="<br>")&&(c.pop(),d.text(c.join(" ").trim()),n==="<br>"?c=[""]:c=[n],d=e.append("tspan").attr("x",0).attr("y",p).attr("dy",l+"em").text(n))})}var Zt=function(i,t,e,s){let n=e%Rt-1,c=i.append("g");t.section=n,c.attr("class",(t.class?t.class+" ":"")+"timeline-node "+("section-"+n));let l=c.append("g"),p=c.append("g"),d=p.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(Tt,t.width).node().getBBox(),f=s.fontSize&&s.fontSize.replace?s.fontSize.replace("px",""):s.fontSize;return t.height=d.height+f*1.1*.5+t.padding,t.height=Math.max(t.height,t.maxHeight),t.width=t.width+2*t.padding,p.attr("transform","translate("+t.width/2+", "+t.padding/2+")"),Kt(l,t,n),t},Jt=function(i,t,e){let s=i.append("g"),c=s.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(Tt,t.width).node().getBBox(),l=e.fontSize&&e.fontSize.replace?e.fontSize.replace("px",""):e.fontSize;return s.remove(),c.height+l*1.1*.5+t.padding},Kt=function(i,t,e){i.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+t.type).attr("d",`M0 ${t.height-5} v${-t.height+2*5} q0,-5 5,-5 h${t.width-2*5} q5,0 5,5 v${t.height-5} H0 Z`),i.append("line").attr("class","node-line-"+e).attr("x1",0).attr("y1",t.height).attr("x2",t.width).attr("y2",t.height)},R={drawRect:J,drawCircle:Ft,drawSection:Ot,drawText:St,drawLabel:Bt,drawTask:jt,drawBackgroundRect:Gt,getTextObj:qt,getNoteRect:it,initGraphics:Ut,drawNode:Zt,getVirtualNodeHeight:Jt},Qt=function(i){Object.keys(i).forEach(function(e){conf[e]=i[e]})},Xt=function(i,t,e,s){let n=D(),c=n.leftMargin?n.leftMargin:50;s.db.clear(),s.parser.parse(i+`
`),E.debug("timeline",s.db);let l=n.securityLevel,p;l==="sandbox"&&(p=G("#i"+t));let d=(l==="sandbox"?G(p.nodes()[0].contentDocument.body):G("body")).select("#"+t);d.append("g");let f=s.db.getTasks(),v=s.db.getCommonDb().getDiagramTitle();E.debug("task",f),R.initGraphics(d);let _=s.db.getSections();E.debug("sections",_);let b=0,w=0,T=0,k=0,r=50+c,a=50;k=50;let h=0,u=!0;_.forEach(function(M){let S={number:h,descr:M,section:h,width:150,padding:20,maxHeight:b},L=R.getVirtualNodeHeight(d,S,n);E.debug("sectionHeight before draw",L),b=Math.max(b,L+20)});let y=0,o=0;E.debug("tasks.length",f.length);for(let[M,S]of f.entries()){let L={number:M,descr:S,section:S.section,width:150,padding:20,maxHeight:w},V=R.getVirtualNodeHeight(d,L,n);E.debug("taskHeight before draw",V),w=Math.max(w,V+20),y=Math.max(y,S.events.length);let H=0;for(let m=0;m<S.events.length;m++){let j={descr:S.events[m],section:S.section,number:S.section,width:150,padding:20,maxHeight:50};H+=R.getVirtualNodeHeight(d,j,n)}o=Math.max(o,H)}E.debug("maxSectionHeight before draw",b),E.debug("maxTaskHeight before draw",w),_&&_.length>0?_.forEach(M=>{let S={number:h,descr:M,section:h,width:150,padding:20,maxHeight:b};E.debug("sectionNode",S);let L=d.append("g"),V=R.drawNode(L,S,h,n);E.debug("sectionNode output",V),L.attr("transform",`translate(${r}, ${k})`),a+=b+50;let H=f.filter(m=>m.section===M);H.length>0&&pt(d,H,h,r,a,w,n,y,o,b,!1),r+=200*Math.max(H.length,1),a=k,h++}):(u=!1,pt(d,f,h,r,a,w,n,y,o,b,!0));let $=d.node().getBBox();E.debug("bounds",$),v&&d.append("text").text(v).attr("x",$.width/2-c).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),T=u?b+w+150:w+100,d.append("g").attr("class","lineWrapper").append("line").attr("x1",c).attr("y1",T).attr("x2",$.width+3*c).attr("y2",T).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),ot(void 0,d,n.timeline.padding?n.timeline.padding:50,n.timeline.useMaxWidth?n.timeline.useMaxWidth:!1)},pt=function(i,t,e,s,n,c,l,p,g,d,f){for(let v of t){let _={descr:v.task,section:e,number:e,width:150,padding:20,maxHeight:c};E.debug("taskNode",_);let b=i.append("g").attr("class","taskWrapper"),T=R.drawNode(b,_,e,l).height;if(E.debug("taskHeight after draw",T),b.attr("transform",`translate(${s}, ${n})`),c=Math.max(c,T),v.events){let k=i.append("g").attr("class","lineWrapper"),r=c;n+=100,r=r+Yt(i,v.events,e,s,n,l),n-=100,k.append("line").attr("x1",s+190/2).attr("y1",n+c).attr("x2",s+190/2).attr("y2",n+c+(f?c:d)+g+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}s=s+200,f&&!D().timeline.disableMulticolor&&e++}n=n-10},Yt=function(i,t,e,s,n,c){let l=0,p=n;n=n+100;for(let g of t){let d={descr:g,section:e,number:e,width:150,padding:20,maxHeight:50};E.debug("eventNode",d);let f=i.append("g").attr("class","eventWrapper"),_=R.drawNode(f,d,e,c).height;l=l+_,f.attr("transform",`translate(${s}, ${n})`),n=n+10+_}return n=p,l},Dt={setConf:Qt,draw:Xt},te=i=>{let t="";for(let e=0;e<i.THEME_COLOR_LIMIT;e++)i["lineColor"+e]=i["lineColor"+e]||i["cScaleInv"+e],st(i["lineColor"+e])?i["lineColor"+e]=rt(i["lineColor"+e],20):i["lineColor"+e]=at(i["lineColor"+e],20);for(let e=0;e<i.THEME_COLOR_LIMIT;e++){let s=""+(17-3*e);t+=`
    .section-${e-1} rect, .section-${e-1} path, .section-${e-1} circle, .section-${e-1} path  {
      fill: ${i["cScale"+e]};
    }
    .section-${e-1} text {
     fill: ${i["cScaleLabel"+e]};
    }
    .node-icon-${e-1} {
      font-size: 40px;
      color: ${i["cScaleLabel"+e]};
    }
    .section-edge-${e-1}{
      stroke: ${i["cScale"+e]};
    }
    .edge-depth-${e-1}{
      stroke-width: ${s};
    }
    .section-${e-1} line {
      stroke: ${i["cScaleInv"+e]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${i["cScaleLabel"+e]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return t},ee=i=>`
  .edge {
    stroke-width: 3;
  }
  ${te(i)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${i.git0};
  }
  .section-root text {
    fill: ${i.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`,ie=ee,ke={db:zt,renderer:Dt,parser:Ct,styles:ie};export{ke as diagram};
