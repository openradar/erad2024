import{f as v,g as le,h as re,i as ne,j as se,m as Ge}from"/erad2024/_preview/91/build/_shared/chunk-4HIDEUJT.js";import{c as q,d as ae,e as Ne}from"/erad2024/_preview/91/build/_shared/chunk-7FOZL6PJ.js";import{$ as We,Ba as J,C as I,Ea as ze,Ga as w,Ha as ee,Ia as te,Ja as De,N as Ze,V as j,W as Be,Y as U,_ as S,ea as L,fa as _,ha as F,i as G,oa as H,ua as K,v as Ee}from"/erad2024/_preview/91/build/_shared/chunk-HXYMBR26.js";import{b as N}from"/erad2024/_preview/91/build/_shared/chunk-2NH4LW52.js";function mt(e){return e==45||e==46||e==58||e>=65&&e<=90||e==95||e>=97&&e<=122||e>=161}function Te(e){return e==9||e==10||e==13||e==32}function Y(e,a){let r=e.pos+a;if(de==r&&ce==e)return Oe;let l=e.peek(a);for(;Te(l);)l=e.peek(++a);let t="";for(;mt(l);)t+=String.fromCharCode(l),l=e.peek(++a);return ce=e,de=r,Oe=t?t.toLowerCase():l==ft||l==St?void 0:null}function pe(e,a){this.name=e,this.parent=a,this.hash=a?a.hash:0;for(let r=0;r<e.length;r++)this.hash+=(this.hash<<4)+e.charCodeAt(r)+(e.charCodeAt(r)<<8)}function Tt(e){for(;e;e=e.parent)if(e.name=="svg"||e.name=="math")return!0;return!1}function R(e,a,r){let l=2+e.length;return new w(t=>{for(let s=0,o=0,u=0;;u++){if(t.next<0){u&&t.acceptToken(a);break}if(s==0&&t.next==Ve||s==1&&t.next==M||s>=2&&s<l&&t.next==e.charCodeAt(s-2))s++,o++;else if((s==2||s==l)&&Te(t.next))o++;else if(s==l&&t.next==k){u>o?t.acceptToken(a,-o):t.acceptToken(r,-(o-2));break}else if((t.next==10||t.next==13)&&u){t.acceptToken(a,1);break}else s=o=0;t.advance()}})}function ye(e,a){let r=Object.create(null);for(let l of e.getChildren(Pe)){let t=l.getChild(rt),s=l.getChild(Q)||l.getChild(xe);t&&(r[a.read(t.from,t.to)]=s?s.type.id==Q?a.read(s.from+1,s.to-1):a.read(s.from,s.to):"")}return r}function me(e,a){let r=e.getChild(lt);return r?a.read(r.from,r.to):" "}function A(e,a,r){let l;for(let t of r)if(!t.attrs||t.attrs(l||(l=ye(e.node.parent.firstChild,a))))return{parser:t.parser};return null}function E(e=[],a=[]){let r=[],l=[],t=[],s=[];for(let u of e)(u.tag=="script"?r:u.tag=="style"?l:u.tag=="textarea"?t:s).push(u);let o=a.length?Object.create(null):null;for(let u of a)(o[u.name]||(o[u.name]=[])).push(u);return j((u,i)=>{let f=u.type.id;if(f==nt)return A(u,i,r);if(f==st)return A(u,i,l);if(f==ot)return A(u,i,t);if(f==be&&s.length){let p=u.node,d=p.firstChild,m=d&&me(d,i),c;if(m){for(let O of s)if(O.tag==m&&(!O.attrs||O.attrs(c||(c=ye(p,i))))){let h=p.lastChild;return{parser:O.parser,overlay:[{from:d.to,to:h.type.id==it?h.from:p.to}]}}}}if(o&&f==Pe){let p=u.node,d;if(d=p.firstChild){let m=o[i.read(d.from,d.to)];if(m)for(let c of m){if(c.tagName&&c.tagName!=me(p.parent,i))continue;let O=p.lastChild;if(O.type.id==Q){let h=O.from+1,b=O.lastChild,x=O.to-(b&&b.isError?0:1);if(x>h)return{parser:c.parser,overlay:[{from:h,to:x}]}}else if(O.type.id==xe)return{parser:c.parser,overlay:[{from:O.from,to:O.to}]}}}}return null})}var Ie,je,Ue,Le,Fe,He,oe,Ke,X,fe,Se,ge,he,Je,et,tt,C,at,ue,be,lt,Pe,rt,Q,xe,nt,st,ot,ut,it,Ot,ct,dt,pt,ie,Oe,ce,de,Ve,k,M,ft,St,gt,ht,bt,Pt,xt,Vt,wt,yt,vt,Xt,we,ve=N(()=>{De();We();Be();Ie=54,je=1,Ue=55,Le=2,Fe=56,He=3,oe=4,Ke=5,X=6,fe=7,Se=8,ge=9,he=10,Je=11,et=12,tt=13,C=57,at=14,ue=58,be=20,lt=22,Pe=23,rt=24,Q=26,xe=27,nt=28,st=31,ot=34,ut=36,it=37,Ot=0,ct=1,dt={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},pt={dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},ie={dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}};Oe=null,ce=null,de=0;Ve=60,k=62,M=47,ft=63,St=33,gt=45;ht=[X,he,fe,Se,ge],bt=new ee({start:null,shift(e,a,r,l){return ht.indexOf(a)>-1?new pe(Y(l,1)||"",e):e},reduce(e,a){return a==be&&e?e.parent:e},reuse(e,a,r,l){let t=a.type.id;return t==X||t==ut?new pe(Y(l,1)||"",e):e},hash(e){return e?e.hash:0},strict:!1}),Pt=new w((e,a)=>{if(e.next!=Ve){e.next<0&&a.context&&e.acceptToken(C);return}e.advance();let r=e.next==M;r&&e.advance();let l=Y(e,0);if(l===void 0)return;if(!l)return e.acceptToken(r?at:X);let t=a.context?a.context.name:null;if(r){if(l==t)return e.acceptToken(Je);if(t&&pt[t])return e.acceptToken(C,-2);if(a.dialectEnabled(Ot))return e.acceptToken(et);for(let s=a.context;s;s=s.parent)if(s.name==l)return;e.acceptToken(tt)}else{if(l=="script")return e.acceptToken(fe);if(l=="style")return e.acceptToken(Se);if(l=="textarea")return e.acceptToken(ge);if(dt.hasOwnProperty(l))return e.acceptToken(he);t&&ie[t]&&ie[t][l]?e.acceptToken(C,-1):e.acceptToken(X)}},{contextual:!0}),xt=new w(e=>{for(let a=0,r=0;;r++){if(e.next<0){r&&e.acceptToken(ue);break}if(e.next==gt)a++;else if(e.next==k&&a>=2){r>3&&e.acceptToken(ue,-2);break}else a=0;e.advance()}});Vt=new w((e,a)=>{if(e.next==M&&e.peek(1)==k){let r=a.dialectEnabled(ct)||Tt(a.context);e.acceptToken(r?Ke:oe,2)}else e.next==k&&e.acceptToken(oe,1)});wt=R("script",Ie,je),yt=R("style",Ue,Le),vt=R("textarea",Fe,He),Xt=U({"Text RawText":S.content,"StartTag StartCloseTag SelfClosingEndTag EndTag":S.angleBracket,TagName:S.tagName,"MismatchedCloseTag/TagName":[S.tagName,S.invalid],AttributeName:S.attributeName,"AttributeValue UnquotedAttributeValue":S.attributeValue,Is:S.definitionOperator,"EntityReference CharacterReference":S.character,Comment:S.blockComment,ProcessingInst:S.processingInstruction,DoctypeDecl:S.documentMeta}),we=te.deserialize({version:14,states:",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%WQ&rO,59fO%`Q&rO,59iO%hQ&rO,59lO%sQ&rO,59nOOOa'#D^'#D^O%{OaO'#CxO&WOaO,59[OOOb'#D_'#D_O&`ObO'#C{O&kObO,59[OOOd'#D`'#D`O&sOdO'#DOO'OOdO,59[OOO`'#Da'#DaO'WO!rO,59[O'_Q#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'dO$fO,59oOOO`,59o,59oO'lQ#|O,59qO'qQ#|O,59rOOO`-E7W-E7WO'vQ&rO'#CsOOQW'#DZ'#DZO(UQ&rO1G.wOOOa1G.w1G.wO(^Q&rO1G/QOOOb1G/Q1G/QO(fQ&rO1G/TOOOd1G/T1G/TO(nQ&rO1G/WOOO`1G/W1G/WOOO`1G/Y1G/YO(yQ&rO1G/YOOOa-E7[-E7[O)RQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)WQ#tO'#C|OOOd-E7^-E7^O)]Q#tO'#DPOOO`-E7_-E7_O)bQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O)gQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rOOO`7+$t7+$tO)rQ#|O,59eO)wQ#|O,59hO)|Q#|O,59kOOO`1G/X1G/XO*RO7[O'#CvO*dOMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O*uO7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+WOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",stateData:"+s~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OhyO~OS!OOhyO~OS!QOhyO~OS!SOT!TOhyO~OS!TOhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXhgXTgX~OS!fOhyO~OS!gOhyO~OS!hOhyO~OS!iOT!jOhyO~OS!jOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~",goto:"%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{}!P!R!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ}bQ!PcQ!RdQ!UeZ!e{}!P!R!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",nodeNames:"\u26A0 StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",maxTerm:67,context:bt,nodeProps:[["closedBy",-10,1,2,3,7,8,9,10,11,12,13,"EndTag",6,"EndTag SelfClosingEndTag",-4,21,30,33,36,"CloseTag"],["openedBy",4,"StartTag StartCloseTag",5,"StartTag",-4,29,32,35,37,"OpenTag"],["group",-9,14,17,18,19,20,39,40,41,42,"Entity",16,"Entity TextContent",-3,28,31,34,"TextContent Entity"]],propSources:[Xt],skippedNodes:[0],repeatNodeCount:9,tokenData:"!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebhSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXhSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vchS`P!a`!cpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WihSkWc!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zbkWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOa!R!R7tP;=`<%l7S!Z8OYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{ihSkWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbhSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QchSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXhSa!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TakWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOb!R!RAwP;=`<%lAY!ZBRYkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbhSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbhSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXhSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYlhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_khS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_X`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!a`!cpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!a`!cp!dPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!a`!cpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!a`!cpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!a`!cpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!a`!cpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!a`!cpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!a`!cpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!a`!cpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!cpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO{PP!-nP;=`<%l!-Sq!-xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!a`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!a`!cpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!a`!cpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!a`!cpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!a`!cpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!a`!cpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!a`!cpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!cpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOxPP!7TP;=`<%l!6Vq!7]V!cpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!a`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!a`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",tokenizers:[wt,yt,vt,Vt,Pt,xt,0,1,2,3,4,5],topRules:{Document:[0,15]},dialects:{noMatch:0,selfClosing:485},tokenPrec:487})});function T(e,a,r=e.length){if(!a)return"";let l=a.firstChild,t=l&&l.getChild("TagName");return t?e.sliceString(t.from,Math.min(t.to,r)):""}function V(e,a=!1){for(;e;e=e.parent)if(e.name=="Element")if(a)a=!1;else return e;return null}function Ce(e,a,r){let l=r.tags[T(e,V(a))];return l?.children||r.allTags}function z(e,a){let r=[];for(let l=V(a);l&&!l.type.isTop;l=V(l.parent)){let t=T(e,l);if(t&&l.lastChild.name=="CloseTag")break;t&&r.indexOf(t)<0&&(a.name=="EndTag"||a.from>=l.firstChild.to)&&r.push(t)}return r}function Xe(e,a,r,l,t){let s=/\s*>/.test(e.sliceDoc(t,t+5))?"":">",o=V(r,!0);return{from:l,to:t,options:Ce(e.doc,o,a).map(u=>({label:u,type:"type"})).concat(z(e.doc,r).map((u,i)=>({label:"/"+u,apply:"/"+u+s,type:"type",boost:99-i}))),validFor:/^\/?[:\-\.\w\u00b7-\uffff]*$/}}function ke(e,a,r,l){let t=/\s*>/.test(e.sliceDoc(l,l+5))?"":">";return{from:r,to:l,options:z(e.doc,a).map((s,o)=>({label:s,apply:s+t,type:"type",boost:99-o})),validFor:Ae}}function $t(e,a,r,l){let t=[],s=0;for(let o of Ce(e.doc,r,a))t.push({label:"<"+o,type:"type"});for(let o of z(e.doc,r))t.push({label:"</"+o+">",type:"type",boost:99-s++});return{from:l,to:l,options:t,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}function _t(e,a,r,l,t){let s=V(r),o=s?a.tags[T(e.doc,s)]:null,u=o&&o.attrs?Object.keys(o.attrs):[],i=o&&o.globalAttrs===!1?u:u.length?u.concat(a.globalAttrNames):a.globalAttrNames;return{from:l,to:t,options:i.map(f=>({label:f,type:"property"})),validFor:Ae}}function qt(e,a,r,l,t){var s;let o=(s=r.parent)===null||s===void 0?void 0:s.getChild("AttributeName"),u=[],i;if(o){let f=e.sliceDoc(o.from,o.to),p=a.globalAttrs[f];if(!p){let d=V(r),m=d?a.tags[T(e.doc,d)]:null;p=m?.attrs&&m.attrs[f]}if(p){let d=e.sliceDoc(l,t).toLowerCase(),m='"',c='"';/^['"]/.test(d)?(i=d[0]=='"'?/^[^"]*$/:/^[^']*$/,m="",c=e.sliceDoc(t,t+1)==d[0]?"":d[0],d=d.slice(1),l++):i=/^[^\s<>='"]*$/;for(let O of p)u.push({label:O,apply:m+O+c,type:"constant"})}}return{from:l,to:t,options:u,validFor:i}}function Qe(e,a){let{state:r,pos:l}=a,t=_(r).resolveInner(l,-1),s=t.resolve(l);for(let o=l,u;s==t&&(u=t.childBefore(o));){let i=u.lastChild;if(!i||!i.type.isError||i.from<i.to)break;s=t=u,o=i.from}return t.name=="TagName"?t.parent&&/CloseTag$/.test(t.parent.name)?ke(r,t,t.from,l):Xe(r,e,t,t.from,l):t.name=="StartTag"?Xe(r,e,t,l,l):t.name=="StartCloseTag"||t.name=="IncompleteCloseTag"?ke(r,t,l,l):a.explicit&&(t.name=="OpenTag"||t.name=="SelfClosingTag")||t.name=="AttributeName"?_t(r,e,t,t.name=="AttributeName"?t.from:l,l):t.name=="Is"||t.name=="AttributeValue"||t.name=="UnquotedAttributeValue"?qt(r,e,t,t.name=="Is"?l:t.from,l):a.explicit&&(s.name=="Element"||s.name=="Text"||s.name=="Document")?$t(r,e,t,l):null}function It(e){return Qe(P.default,e)}function Ct(e){let{extraTags:a,extraGlobalAttributes:r}=e,l=r||a?new P(a,r):P.default;return t=>Qe(l,t)}function jt(e={}){let a="",r;e.matchClosingTags===!1&&(a="noMatch"),e.selfClosingTags===!0&&(a=(a?a+" ":"")+"selfClosing"),(e.nestedLanguages&&e.nestedLanguages.length||e.nestedAttributes&&e.nestedAttributes.length)&&(r=E((e.nestedLanguages||[]).concat(Ye),(e.nestedAttributes||[]).concat(Me)));let l=r?Re.configure({wrap:r,dialect:a}):a?$.configure({dialect:a}):$;return new F(l,[$.data.of({autocomplete:Ct(e)}),e.autoCloseTags!==!1?Qt:[],se().support,ae().support])}var y,Z,B,W,g,n,kt,_e,qe,P,Ae,At,Ye,Me,Re,$,$e,Qt,Yt=N(()=>{ve();Ne();Ge();Ze();Ee();ze();y=["_blank","_self","_top","_parent"],Z=["ascii","utf-8","utf-16","latin1","latin1"],B=["get","post","put","delete"],W=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],g=["true","false"],n={},kt={a:{attrs:{href:null,ping:null,type:null,media:null,target:y,hreflang:null}},abbr:n,address:n,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:null,hreflang:null,type:null,shape:["default","rect","circle","poly"]}},article:n,aside:n,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["autoplay"],loop:["loop"],controls:["controls"]}},b:n,base:{attrs:{href:null,target:y}},bdi:n,bdo:n,blockquote:{attrs:{cite:null}},body:n,br:n,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["autofocus"],disabled:["autofocus"],formenctype:W,formmethod:B,formnovalidate:["novalidate"],formtarget:y,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:n,center:n,cite:n,code:n,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["disabled"],checked:["checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["disabled"],multiple:["multiple"]}},datalist:{attrs:{data:null}},dd:n,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["open"]}},dfn:n,div:n,dl:n,dt:n,em:n,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["disabled"],form:null,name:null}},figcaption:n,figure:n,footer:n,form:{attrs:{action:null,name:null,"accept-charset":Z,autocomplete:["on","off"],enctype:W,method:B,novalidate:["novalidate"],target:y}},h1:n,h2:n,h3:n,h4:n,h5:n,h6:n,head:{children:["title","base","link","style","meta","script","noscript","command"]},header:n,hgroup:n,hr:n,html:{attrs:{manifest:null}},i:n,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["autofocus"],checked:["checked"],disabled:["disabled"],formenctype:W,formmethod:B,formnovalidate:["novalidate"],formtarget:y,multiple:["multiple"],readonly:["readonly"],required:["required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:n,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["autofocus"],disabled:["disabled"],keytype:["RSA"]}},label:{attrs:{for:null,form:null}},legend:n,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:null,media:null,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:n,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:Z,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:n,noscript:n,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["typemustmatch"]}},ol:{attrs:{reversed:["reversed"],start:null,type:["1","a","A","i","I"]},children:["li","script","template","ul","ol"]},optgroup:{attrs:{disabled:["disabled"],label:null}},option:{attrs:{disabled:["disabled"],label:null,selected:["selected"],value:null}},output:{attrs:{for:null,form:null,name:null}},p:n,param:{attrs:{name:null,value:null}},pre:n,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:n,rt:n,ruby:n,samp:n,script:{attrs:{type:["text/javascript"],src:null,async:["async"],defer:["defer"],charset:Z}},section:n,select:{attrs:{form:null,name:null,size:null,autofocus:["autofocus"],disabled:["disabled"],multiple:["multiple"]}},slot:{attrs:{name:null}},small:n,source:{attrs:{src:null,type:null,media:null}},span:n,strong:n,style:{attrs:{type:["text/css"],media:null,scoped:null}},sub:n,summary:n,sup:n,table:n,tbody:n,td:{attrs:{colspan:null,rowspan:null,headers:null}},template:n,textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["autofocus"],disabled:["disabled"],readonly:["readonly"],required:["required"],wrap:["soft","hard"]}},tfoot:n,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:n,time:{attrs:{datetime:null}},title:n,tr:n,track:{attrs:{src:null,label:null,default:null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:null}},ul:{children:["li","script","template","ul","ol"]},var:n,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["autoplay"],mediagroup:["movie"],muted:["muted"],controls:["controls"]}},wbr:n},_e={accesskey:null,class:null,contenteditable:g,contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["ar","bn","de","en-GB","en-US","es","fr","hi","id","ja","pa","pt","ru","tr","zh"],spellcheck:g,autocorrect:g,autocapitalize:g,style:null,tabindex:null,title:null,translate:["yes","no"],rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"],role:"alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),"aria-activedescendant":null,"aria-atomic":g,"aria-autocomplete":["inline","list","both","none"],"aria-busy":g,"aria-checked":["true","false","mixed","undefined"],"aria-controls":null,"aria-describedby":null,"aria-disabled":g,"aria-dropeffect":null,"aria-expanded":["true","false","undefined"],"aria-flowto":null,"aria-grabbed":["true","false","undefined"],"aria-haspopup":g,"aria-hidden":g,"aria-invalid":["true","false","grammar","spelling"],"aria-label":null,"aria-labelledby":null,"aria-level":null,"aria-live":["off","polite","assertive"],"aria-multiline":g,"aria-multiselectable":g,"aria-owns":null,"aria-posinset":null,"aria-pressed":["true","false","mixed","undefined"],"aria-readonly":g,"aria-relevant":null,"aria-required":g,"aria-selected":["true","false","undefined"],"aria-setsize":null,"aria-sort":["ascending","descending","none","other"],"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null},qe="beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map(e=>"on"+e);for(let e of qe)_e[e]=null;P=class{constructor(a,r){this.tags=Object.assign(Object.assign({},kt),a),this.globalAttrs=Object.assign(Object.assign({},_e),r),this.allTags=Object.keys(this.tags),this.globalAttrNames=Object.keys(this.globalAttrs)}};P.default=new P;Ae=/^[:\-\.\w\u00b7-\uffff]*$/;At=v.parser.configure({top:"SingleExpression"}),Ye=[{tag:"script",attrs:e=>e.type=="text/typescript"||e.lang=="ts",parser:le.parser},{tag:"script",attrs:e=>e.type=="text/babel"||e.type=="text/jsx",parser:re.parser},{tag:"script",attrs:e=>e.type=="text/typescript-jsx",parser:ne.parser},{tag:"script",attrs:e=>e.type=="importmap"||e.type=="speculationrules",parser:At},{tag:"script",attrs(e){return!e.type||/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type)},parser:v.parser},{tag:"style",attrs(e){return(!e.lang||e.lang=="css")&&(!e.type||/^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type))},parser:q.parser}],Me=[{name:"style",parser:q.parser.configure({top:"Styles"})}].concat(qe.map(e=>({name:e,parser:v.parser}))),Re=L.define({name:"html",parser:we.configure({props:[H.add({Element(e){let a=/^(\s*)(<\/)?/.exec(e.textAfter);return e.node.to<=e.pos+a[0].length?e.continue():e.lineIndent(e.node.from)+(a[2]?0:e.unit)},"OpenTag CloseTag SelfClosingTag"(e){return e.column(e.node.from)+e.unit},Document(e){if(e.pos+/\s*/.exec(e.textAfter)[0].length<e.node.to)return e.continue();let a=null,r;for(let l=e.node;;){let t=l.lastChild;if(!t||t.name!="Element"||t.to!=l.to)break;a=l=t}return a&&!((r=a.lastChild)&&(r.name=="CloseTag"||r.name=="SelfClosingTag"))?e.lineIndent(a.from)+e.unit:null}}),K.add({Element(e){let a=e.firstChild,r=e.lastChild;return!a||a.name!="OpenTag"?null:{from:a.to,to:r.name=="CloseTag"?r.from:e.to}}}),J.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"<!--",close:"-->"}},indentOnInput:/^\s*<\/\w+\W$/,wordChars:"-._"}}),$=Re.configure({wrap:E(Ye,Me)});$e=new Set("area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" ")),Qt=I.inputHandler.of((e,a,r,l,t)=>{if(e.composing||e.state.readOnly||a!=r||l!=">"&&l!="/"||!$.isActiveAt(e.state,a,-1))return!1;let s=t(),{state:o}=s,u=o.changeByRange(i=>{var f,p,d;let m=o.doc.sliceString(i.from-1,i.to)==l,{head:c}=i,O=_(o).resolveInner(c-1,-1),h;if((O.name=="TagName"||O.name=="StartTag")&&(O=O.parent),m&&l==">"&&O.name=="OpenTag"){if(((p=(f=O.parent)===null||f===void 0?void 0:f.lastChild)===null||p===void 0?void 0:p.name)!="CloseTag"&&(h=T(o.doc,O.parent,c))&&!$e.has(h)){let b=c+(o.doc.sliceString(c,c+1)===">"?1:0),x=`</${h}>`;return{range:i,changes:{from:c,to:b,insert:x}}}}else if(m&&l=="/"&&O.name=="IncompleteCloseTag"){let b=O.parent;if(O.from==c-2&&((d=b.lastChild)===null||d===void 0?void 0:d.name)!="CloseTag"&&(h=T(o.doc,b,c))&&!$e.has(h)){let x=c+(o.doc.sliceString(c,c+1)===">"?1:0),D=`${h}>`;return{range:G.cursor(c+D.length,-1),changes:{from:c,to:x,insert:D}}}}return{range:i}});return u.changes.empty?!1:(e.dispatch([s,o.update(u,{userEvent:"input.complete",scrollIntoView:!0})]),!0)})});export{It as a,Ct as b,Re as c,$ as d,jt as e,Qt as f,Yt as g};
