import{b as J}from"/erad2024/_preview/110/build/_shared/chunk-2NH4LW52.js";function W(i){var o=i.statementIndentUnit,c=i.dontAlignCalls,f=i.noIndentKeywords||[],s=i.multiLineStrings,a=i.hooks||{};function h(e){for(var n={},t=e.split(" "),r=0;r<t.length;++r)n[t[r]]=!0;return n}var g=h("accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor"),b=/[\+\-\*\/!~&|^%=?:]/,m=/[\[\]{}()]/,k=/\d[0-9_]*/,_=/\d*\s*'s?d\s*\d[0-9_]*/i,S=/\d*\s*'s?b\s*[xz01][xz01_]*/i,M=/\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i,U=/\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i,j=/(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i,K=/^((\w+)|[)}\]])/,V=/[)}\]]/,d,v,R=h("case checker class clocking config function generate interface module package primitive program property specify sequence table task"),u={};for(var y in R)u[y]="end"+y;u.begin="end",u.casex="endcase",u.casez="endcase",u.do="while",u.fork="join;join_any;join_none",u.covergroup="endgroup";for(var D in f){var y=f[D];u[y]&&(u[y]=void 0)}var P=h("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while");function x(e,n){var t=e.peek(),r;if(a[t]&&(r=a[t](e,n))!=!1||a.tokenBase&&(r=a.tokenBase(e,n))!=!1)return r;if(/[,;:\.]/.test(t))return d=e.next(),null;if(m.test(t))return d=e.next(),"bracket";if(t=="`")return e.next(),e.eatWhile(/[\w\$_]/)?"def":null;if(t=="$")return e.next(),e.eatWhile(/[\w\$_]/)?"meta":null;if(t=="#")return e.next(),e.eatWhile(/[\d_.]/),"def";if(t=='"')return e.next(),n.tokenize=F(t),n.tokenize(e,n);if(t=="/"){if(e.next(),e.eat("*"))return n.tokenize=N,N(e,n);if(e.eat("/"))return e.skipToEnd(),"comment";e.backUp(1)}if(e.match(j)||e.match(_)||e.match(S)||e.match(M)||e.match(U)||e.match(k)||e.match(j))return"number";if(e.eatWhile(b))return"meta";if(e.eatWhile(/[\w\$_]/)){var l=e.current();return g[l]?(u[l]&&(d="newblock"),P[l]&&(d="newstatement"),v=l,"keyword"):"variable"}return e.next(),null}function F(e){return function(n,t){for(var r=!1,l,w=!1;(l=n.next())!=null;){if(l==e&&!r){w=!0;break}r=!r&&l=="\\"}return(w||!(r||s))&&(t.tokenize=x),"string"}}function N(e,n){for(var t=!1,r;r=e.next();){if(r=="/"&&t){n.tokenize=x;break}t=r=="*"}return"comment"}function $(e,n,t,r,l){this.indented=e,this.column=n,this.type=t,this.align=r,this.prev=l}function p(e,n,t){var r=e.indented,l=new $(r,n,t,null,e.context);return e.context=l}function B(e){var n=e.context.type;return(n==")"||n=="]"||n=="}")&&(e.indented=e.context.indented),e.context=e.context.prev}function E(e,n){if(e==n)return!0;var t=n.split(";");for(var r in t)if(e==t[r])return!0;return!1}function G(){var e=[];for(var n in u)if(u[n]){var t=u[n].split(";");for(var r in t)e.push(t[r])}var l=new RegExp("[{}()\\[\\]]|("+e.join("|")+")$");return l}return{name:"verilog",startState:function(e){var n={tokenize:null,context:new $(-e,0,"top",!1),indented:0,startOfLine:!0};return a.startState&&a.startState(n),n},token:function(e,n){var t=n.context;if(e.sol()&&(t.align==null&&(t.align=!1),n.indented=e.indentation(),n.startOfLine=!0),a.token){var r=a.token(e,n);if(r!==void 0)return r}if(e.eatSpace())return null;d=null,v=null;var r=(n.tokenize||x)(e,n);if(r=="comment"||r=="meta"||r=="variable")return r;if(t.align==null&&(t.align=!0),d==t.type)B(n);else if(d==";"&&t.type=="statement"||t.type&&E(v,t.type))for(t=B(n);t&&t.type=="statement";)t=B(n);else if(d=="{")p(n,e.column(),"}");else if(d=="[")p(n,e.column(),"]");else if(d=="(")p(n,e.column(),")");else if(t&&t.type=="endcase"&&d==":")p(n,e.column(),"statement");else if(d=="newstatement")p(n,e.column(),"statement");else if(d=="newblock"&&!(v=="function"&&t&&(t.type=="statement"||t.type=="endgroup"))){if(!(v=="task"&&t&&t.type=="statement")){var l=u[v];p(n,e.column(),l)}}return n.startOfLine=!1,r},indent:function(e,n,t){if(e.tokenize!=x&&e.tokenize!=null)return null;if(a.indent){var r=a.indent(e);if(r>=0)return r}var l=e.context,w=n&&n.charAt(0);l.type=="statement"&&w=="}"&&(l=l.prev);var C=!1,q=n.match(K);return q&&(C=E(q[0],l.type)),l.type=="statement"?l.indented+(w=="{"?0:o||t.unit):V.test(l.type)&&l.align&&!c?l.column+(C?0:1):l.type==")"&&!C?l.indented+(o||t.unit):l.indented+(C?0:t.unit)},languageData:{indentOnInput:G(),commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}}var Y,L,A,I,z,O,Q,T,Z,X=J(()=>{Y=W({}),L={"|":"link",">":"property",$:"variable",$$:"variable","?$":"qualifier","?*":"qualifier","-":"contentSeparator","/":"property","/-":"property","@":"variableName.special","@-":"variableName.special","@++":"variableName.special","@+=":"variableName.special","@+=-":"variableName.special","@--":"variableName.special","@-=":"variableName.special","%+":"tag","%-":"tag","%":"tag",">>":"tag","<<":"tag","<>":"tag","#":"tag","^":"attribute","^^":"attribute","^!":"attribute","*":"variable","**":"variable","\\":"keyword",'"':"comment"},A={"/":"beh-hier",">":"beh-hier","-":"phys-hier","|":"pipe","?":"when","@":"stage","\\":"keyword"},I=3,z=!1,O=/^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/,Q=/^[! ] */,T=/^\/[\/\*]/,Z=W({hooks:{electricInput:!1,token:function(i,o){var c=void 0,f;if(i.sol()&&!o.tlvInBlockComment){i.peek()=="\\"&&(c="def",i.skipToEnd(),i.string.match(/\\SV/)?o.tlvCodeActive=!1:i.string.match(/\\TLV/)&&(o.tlvCodeActive=!0)),o.tlvCodeActive&&i.pos==0&&o.indented==0&&(f=i.match(Q,!1))&&(o.indented=f[0].length);var s=o.indented,a=s/I;if(a<=o.tlvIndentationStyle.length){var h=i.string.length==s,g=a*I;if(g<i.string.length){var b=i.string.slice(g),m=b[0];A[m]&&(f=b.match(O))&&L[f[1]]&&(s+=I,m=="\\"&&g>0||(o.tlvIndentationStyle[a]=A[m],z&&(o.statementComment=!1),a++))}if(!h)for(;o.tlvIndentationStyle.length>a;)o.tlvIndentationStyle.pop()}o.tlvNextIndent=s}if(o.tlvCodeActive){var k=!1;z&&(k=i.peek()!=" "&&c===void 0&&!o.tlvInBlockComment&&i.column()==o.tlvIndentationStyle.length*I,k&&(o.statementComment&&(k=!1),o.statementComment=i.match(T,!1)));var f;if(c===void 0)if(o.tlvInBlockComment)i.match(/^.*?\*\//)?(o.tlvInBlockComment=!1,z&&!i.eol()&&(o.statementComment=!1)):i.skipToEnd(),c="comment";else if((f=i.match(T))&&!o.tlvInBlockComment)f[0]=="//"?i.skipToEnd():o.tlvInBlockComment=!0,c="comment";else if(f=i.match(O)){var _=f[1],S=f[2];L.hasOwnProperty(_)&&(S.length>0||i.eol())?c=L[_]:i.backUp(i.current().length-1)}else i.match(/^\t+/)?c="invalid":i.match(/^[\[\]{}\(\);\:]+/)?c="meta":(f=i.match(/^[mM]4([\+_])?[\w\d_]*/))?c=f[1]=="+"?"keyword.special":"keyword":i.match(/^ +/)?i.eol()&&(c="error"):i.match(/^[\w\d_]+/)?c="number":i.next()}else i.match(/^[mM]4([\w\d_]*)/)&&(c="keyword");return c},indent:function(i){return i.tlvCodeActive==!0?i.tlvNextIndent:-1},startState:function(i){i.tlvIndentationStyle=[],i.tlvCodeActive=!0,i.tlvNextIndent=-1,i.tlvInBlockComment=!1,z&&(i.statementComment=!1)}}})});X();export{Z as tlv,Y as verilog};
