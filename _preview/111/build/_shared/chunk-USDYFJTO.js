import{C as y,D as q,Ea as se,N as ne,a as $,c as m,d as j,e as O,f as E,fa as x,i as h,j as W,ja as H,k as L,l as F,n as N,o as g,p as T,s as U,t as R,v as ie,y as V,z as b}from"/erad2024/_preview/111/build/_shared/chunk-HXYMBR26.js";import{b as te}from"/erad2024/_preview/111/build/_shared/chunk-2NH4LW52.js";function z(i){let e=Object.keys(i).join(""),t=/\w/.test(e);return t&&(e=e.replace(/\w/g,"")),`[${t?"\\w":""}${e.replace(/[^\w\s]/g,"\\$&")}]`}function oe(i){let e=Object.create(null),t=Object.create(null);for(let{label:s}of i){e[s[0]]=!0;for(let o=1;o<s.length;o++)t[s[o]]=!0}let n=z(e)+z(t)+"*$";return[new RegExp("^"+n),new RegExp(n)]}function We(i){let e=i.map(s=>typeof s=="string"?{label:s}:s),[t,n]=e.every(s=>/^\w+$/.test(s.label))?[/\w*$/,/\w+$/]:oe(e);return s=>{let o=s.matchBefore(n);return o||s.explicit?{from:o?o.from:s.pos,options:e,validFor:t}:null}}function Fe(i,e){return t=>{for(let n=x(t.state).resolveInner(t.pos,-1);n;n=n.parent){if(i.indexOf(n.name)>-1)return null;if(n.type.isTop)break}return e(t)}}function le(i,e){var t;let{source:n}=i,s=e&&n[0]!="^",o=n[n.length-1]!="$";return!s&&!o?i:new RegExp(`${s?"^":""}(?:${n})${o?"$":""}`,(t=i.flags)!==null&&t!==void 0?t:i.ignoreCase?"i":"")}function B(i,e){return h.create(i.filter(t=>t.field==e).map(t=>h.range(t.from,t.to)))}function ue(i){let e=w.parse(i);return(t,n,s,o)=>{let{text:r,ranges:a}=e.instantiate(t.state,s),l={changes:{from:s,to:o,insert:$.of(r)},scrollIntoView:!0,annotations:n?re.of(n):void 0};if(a.length&&(l.selection=B(a,0)),a.length>1){let f=new u(a,0),c=l.effects=[S.of(f)];t.state.field(C,!1)===void 0&&c.push(g.appendConfig.of([C,be,ye,ae]))}t.dispatch(t.state.update(l))}}function G(i){return({state:e,dispatch:t})=>{let n=e.field(C,!1);if(!n||i<0&&n.active==0)return!1;let s=n.active+i,o=i>0&&!n.ranges.some(r=>r.field==s+i);return t(e.update({selection:B(n.ranges,s),effects:S.of(o?null:new u(n.ranges,s)),scrollIntoView:!0})),!0}}function Ne(i,e){return Object.assign(Object.assign({},e),{apply:ue(i)})}function Ue(){return[ve,J]}function Z(i){for(let e=0;e<D.length;e+=2)if(D.charCodeAt(e)==i)return D.charAt(e+1);return j(i<128?i:i+1)}function _(i,e){return i.languageDataAt("closeBrackets",e)[0]||I}function Ce(i,e){let t=_(i,i.selection.main.head),n=t.brackets||I.brackets;for(let s of n){let o=Z(m(s,0));if(e==s)return o==s?Ee(i,s,n.indexOf(s+s+s)>-1,t):Se(i,s,o,t.before||I.before);if(e==o&&ee(i,i.selection.main.from))return Oe(i,s,o)}return null}function ee(i,e){let t=!1;return i.field(J).between(0,i.doc.length,n=>{n==e&&(t=!0)}),t}function P(i,e){let t=i.sliceString(e,e+2);return t.slice(0,O(m(t,0)))}function Ie(i,e){let t=i.sliceString(e-2,e);return O(m(t,0))==t.length?t:t.slice(1)}function Se(i,e,t,n){let s=null,o=i.changeByRange(r=>{if(!r.empty)return{changes:[{insert:e,from:r.from},{insert:t,from:r.to}],effects:p.of(r.to+e.length),range:h.range(r.anchor+e.length,r.head+e.length)};let a=P(i.doc,r.head);return!a||/\s/.test(a)||n.indexOf(a)>-1?{changes:{insert:e+t,from:r.head},effects:p.of(r.head+e.length),range:h.cursor(r.head+e.length)}:{range:s=r}});return s?null:i.update(o,{scrollIntoView:!0,userEvent:"input.type"})}function Oe(i,e,t){let n=null,s=i.changeByRange(o=>o.empty&&P(i.doc,o.head)==t?{changes:{from:o.head,to:o.head+t.length,insert:t},range:h.cursor(o.head+t.length)}:n={range:o});return n?null:i.update(s,{scrollIntoView:!0,userEvent:"input.type"})}function Ee(i,e,t,n){let s=n.stringPrefixes||I.stringPrefixes,o=null,r=i.changeByRange(a=>{if(!a.empty)return{changes:[{insert:e,from:a.from},{insert:e,from:a.to}],effects:p.of(a.to+e.length),range:h.range(a.anchor+e.length,a.head+e.length)};let l=a.head,f=P(i.doc,l),c;if(f==e){if(X(i,l))return{changes:{insert:e+e,from:l},effects:p.of(l+e.length),range:h.cursor(l+e.length)};if(ee(i,l)){let A=t&&i.sliceDoc(l,l+e.length*3)==e+e+e?e+e+e:e;return{changes:{from:l,to:l+A.length,insert:A},range:h.cursor(l+A.length)}}}else{if(t&&i.sliceDoc(l-2*e.length,l)==e+e&&(c=Y(i,l-2*e.length,s))>-1&&X(i,c))return{changes:{insert:e+e+e+e,from:l},effects:p.of(l+e.length),range:h.cursor(l+e.length)};if(i.charCategorizer(l)(f)!=T.Word&&Y(i,l,s)>-1&&!Te(i,l,e,s))return{changes:{insert:e+e,from:l},effects:p.of(l+e.length),range:h.cursor(l+e.length)}}return{range:o=a}});return o?null:i.update(r,{scrollIntoView:!0,userEvent:"input.type"})}function X(i,e){let t=x(i).resolveInner(e+1);return t.parent&&t.from==e}function Te(i,e,t,n){let s=x(i).resolveInner(e,-1),o=n.reduce((r,a)=>Math.max(r,a.length),0);for(let r=0;r<5;r++){let a=i.sliceDoc(s.from,Math.min(s.to,s.from+t.length+o)),l=a.indexOf(t);if(!l||l>-1&&n.indexOf(a.slice(0,l))>-1){let c=s.firstChild;for(;c&&c.from==s.from&&c.to-c.from>t.length+l;){if(i.sliceDoc(c.to-t.length,c.to)==t)return!1;c=c.firstChild}return!0}let f=s.to==e&&s.parent;if(!f)break;s=f}return!1}function Y(i,e,t){let n=i.charCategorizer(e);if(n(i.sliceDoc(e-1,e))!=T.Word)return e;for(let s of t){let o=e-s.length;if(i.sliceDoc(o,e)==s&&n(i.sliceDoc(o-1,o))!=T.Word)return o}return-1}var K,re,ae,M,v,w,ce,fe,u,S,he,C,pe,de,me,ge,Q,be,ye,I,p,k,J,D,xe,ve,we,Ve,Pe=te(()=>{ie();ne();se();K=class{constructor(e,t,n){this.state=e,this.pos=t,this.explicit=n,this.abortListeners=[]}tokenBefore(e){let t=x(this.state).resolveInner(this.pos,-1);for(;t&&e.indexOf(t.name)<0;)t=t.parent;return t?{from:t.from,to:this.pos,text:this.state.sliceDoc(t.from,this.pos),type:t.type}:null}matchBefore(e){let t=this.state.doc.lineAt(this.pos),n=Math.max(t.from,this.pos-250),s=t.text.slice(n-t.from,this.pos-t.from),o=s.search(le(e,!1));return o<0?null:{from:n+o,to:this.pos,text:s.slice(o)}}get aborted(){return this.abortListeners==null}addEventListener(e,t){e=="abort"&&this.abortListeners&&this.abortListeners.push(t)}};re=N.define(),ae=y.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:"monospace",whiteSpace:"nowrap",overflow:"hidden auto",maxWidth_fallback:"700px",maxWidth:"min(700px, 95vw)",minWidth:"250px",maxHeight:"10em",height:"100%",listStyle:"none",margin:0,padding:0,"& > li, & > completion-section":{padding:"1px 3px",lineHeight:1.2},"& > li":{overflowX:"hidden",textOverflow:"ellipsis",cursor:"pointer"},"& > completion-section":{display:"list-item",borderBottom:"1px solid silver",paddingLeft:"0.5em",opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#17c",color:"white"},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#777"},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:"#347",color:"white"},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:"#444"},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:'"\xB7\xB7\xB7"',opacity:.5,display:"block",textAlign:"center"},".cm-tooltip.cm-completionInfo":{position:"absolute",padding:"3px 9px",width:"max-content",maxWidth:"400px",boxSizing:"border-box"},".cm-completionInfo.cm-completionInfo-left":{right:"100%"},".cm-completionInfo.cm-completionInfo-right":{left:"100%"},".cm-completionInfo.cm-completionInfo-left-narrow":{right:"30px"},".cm-completionInfo.cm-completionInfo-right-narrow":{left:"30px"},"&light .cm-snippetField":{backgroundColor:"#00000022"},"&dark .cm-snippetField":{backgroundColor:"#ffffff22"},".cm-snippetFieldPosition":{verticalAlign:"text-top",width:0,height:"1.15em",display:"inline-block",margin:"0 -0.7px -.7em",borderLeft:"1.4px dotted #888"},".cm-completionMatchedText":{textDecoration:"underline"},".cm-completionDetail":{marginLeft:"0.5em",fontStyle:"italic"},".cm-completionIcon":{fontSize:"90%",width:".8em",display:"inline-block",textAlign:"center",paddingRight:".6em",opacity:"0.6",boxSizing:"content-box"},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:"'\u0192'"}},".cm-completionIcon-class":{"&:after":{content:"'\u25CB'"}},".cm-completionIcon-interface":{"&:after":{content:"'\u25CC'"}},".cm-completionIcon-variable":{"&:after":{content:"'\u{1D465}'"}},".cm-completionIcon-constant":{"&:after":{content:"'\u{1D436}'"}},".cm-completionIcon-type":{"&:after":{content:"'\u{1D461}'"}},".cm-completionIcon-enum":{"&:after":{content:"'\u222A'"}},".cm-completionIcon-property":{"&:after":{content:"'\u25A1'"}},".cm-completionIcon-keyword":{"&:after":{content:"'\u{1F511}\uFE0E'"}},".cm-completionIcon-namespace":{"&:after":{content:"'\u25A2'"}},".cm-completionIcon-text":{"&:after":{content:"'abc'",fontSize:"50%",verticalAlign:"middle"}}}),M=class{constructor(e,t,n,s){this.field=e,this.line=t,this.from=n,this.to=s}},v=class{constructor(e,t,n){this.field=e,this.from=t,this.to=n}map(e){let t=e.mapPos(this.from,-1,E.TrackDel),n=e.mapPos(this.to,1,E.TrackDel);return t==null||n==null?null:new v(this.field,t,n)}},w=class{constructor(e,t){this.lines=e,this.fieldPositions=t}instantiate(e,t){let n=[],s=[t],o=e.doc.lineAt(t),r=/^\s*/.exec(o.text)[0];for(let l of this.lines){if(n.length){let f=r,c=/^\t*/.exec(l)[0].length;for(let d=0;d<c;d++)f+=e.facet(H);s.push(t+f.length-c),l=f+l.slice(c)}n.push(l),t+=l.length+1}let a=this.fieldPositions.map(l=>new v(l.field,s[l.line]+l.from,s[l.line]+l.to));return{text:n,ranges:a}}static parse(e){let t=[],n=[],s=[],o;for(let r of e.split(/\r\n?|\n/)){for(;o=/[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(r);){let a=o[1]?+o[1]:null,l=o[2]||o[3]||"",f=-1;for(let c=0;c<t.length;c++)(a!=null?t[c].seq==a:l&&t[c].name==l)&&(f=c);if(f<0){let c=0;for(;c<t.length&&(a==null||t[c].seq!=null&&t[c].seq<a);)c++;t.splice(c,0,{seq:a,name:l}),f=c;for(let d of s)d.field>=f&&d.field++}s.push(new M(f,n.length,o.index,o.index+l.length)),r=r.slice(0,o.index)+l+r.slice(o.index+o[0].length)}for(let a;a=/\\([{}])/.exec(r);){r=r.slice(0,a.index)+a[1]+r.slice(a.index+a[0].length);for(let l of s)l.line==n.length&&l.from>a.index&&(l.from--,l.to--)}n.push(r)}return new w(n,s)}},ce=b.widget({widget:new class extends V{toDOM(){let i=document.createElement("span");return i.className="cm-snippetFieldPosition",i}ignoreEvent(){return!1}}}),fe=b.mark({class:"cm-snippetField"}),u=class{constructor(e,t){this.ranges=e,this.active=t,this.deco=b.set(e.map(n=>(n.from==n.to?ce:fe).range(n.from,n.to)))}map(e){let t=[];for(let n of this.ranges){let s=n.map(e);if(!s)return null;t.push(s)}return new u(t,this.active)}selectionInsideField(e){return e.ranges.every(t=>this.ranges.some(n=>n.field==this.active&&n.from<=t.from&&n.to>=t.to))}},S=g.define({map(i,e){return i&&i.map(e)}}),he=g.define(),C=L.define({create(){return null},update(i,e){for(let t of e.effects){if(t.is(S))return t.value;if(t.is(he)&&i)return new u(i.ranges,t.value)}return i&&e.docChanged&&(i=i.map(e.changes)),i&&e.selection&&!i.selectionInsideField(e.selection)&&(i=null),i},provide:i=>y.decorations.from(i,e=>e?e.deco:b.none)});pe=({state:i,dispatch:e})=>i.field(C,!1)?(e(i.update({effects:S.of(null)})),!0):!1,de=G(1),me=G(-1),ge=[{key:"Tab",run:de,shift:me},{key:"Escape",run:pe}],Q=W.define({combine(i){return i.length?i[0]:ge}}),be=F.highest(q.compute([Q],i=>i.facet(Q)));ye=y.domEventHandlers({mousedown(i,e){let t=e.state.field(C,!1),n;if(!t||(n=e.posAtCoords({x:i.clientX,y:i.clientY}))==null)return!1;let s=t.ranges.find(o=>o.from<=n&&o.to>=n);return!s||s.field==t.active?!1:(e.dispatch({selection:B(t.ranges,s.field),effects:S.of(t.ranges.some(o=>o.field>s.field)?new u(t.ranges,s.field):null),scrollIntoView:!0}),!0)}}),I={brackets:["(","[","{","'",'"'],before:")]}:;>",stringPrefixes:[]},p=g.define({map(i,e){let t=e.mapPos(i,-1,E.TrackAfter);return t??void 0}}),k=new class extends U{};k.startSide=1;k.endSide=-1;J=L.define({create(){return R.empty},update(i,e){if(e.selection){let t=e.state.doc.lineAt(e.selection.main.head).from,n=e.startState.doc.lineAt(e.startState.selection.main.head).from;t!=e.changes.mapPos(n,-1)&&(i=R.empty)}i=i.map(e.changes);for(let t of e.effects)t.is(p)&&(i=i.update({add:[k.range(t.value,t.value+1)]}));return i}});D="()[]{}<>";xe=typeof navigator=="object"&&/Android\b/.test(navigator.userAgent),ve=y.inputHandler.of((i,e,t,n)=>{if((xe?i.composing:i.compositionStarted)||i.state.readOnly)return!1;let s=i.state.selection.main;if(n.length>2||n.length==2&&O(m(n,0))==1||e!=s.from||t!=s.to)return!1;let o=Ce(i.state,n);return o?(i.dispatch(o),!0):!1}),we=({state:i,dispatch:e})=>{if(i.readOnly)return!1;let n=_(i,i.selection.main.head).brackets||I.brackets,s=null,o=i.changeByRange(r=>{if(r.empty){let a=Ie(i.doc,r.head);for(let l of n)if(l==a&&P(i.doc,r.head)==Z(m(l,0)))return{changes:{from:r.head-l.length,to:r.head+l.length},range:h.cursor(r.head-l.length)}}return{range:s=r}});return s||e(i.update(o,{scrollIntoView:!0,userEvent:"delete.backward"})),!s},Ve=[{key:"Backspace",run:we}]});export{K as a,We as b,Fe as c,Ne as d,Ue as e,Ve as f,Pe as g};
