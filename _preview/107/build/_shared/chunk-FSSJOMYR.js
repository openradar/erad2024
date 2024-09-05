import{a as ce,c as $,d as Z,f as J}from"/erad2024/_preview/107/build/_shared/chunk-GUCIBHGO.js";import{c as P,e as ue}from"/erad2024/_preview/107/build/_shared/chunk-2NH4LW52.js";var _e=P((nr,Ce)=>{Ce.exports={trueFunc:function(){return!0},falseFunc:function(){return!1}}});var K=P(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});function Ot(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="-"||e==="_"}v.isIdentStart=Ot;function Lt(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="-"||e==="_"}v.isIdent=Lt;function Pt(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"}v.isHex=Pt;function Ft(e){for(var t=e.length,r="",i=0;i<t;){var n=e.charAt(i);if(v.identSpecialChars[n])r+="\\"+n;else if(n==="_"||n==="-"||n>="A"&&n<="Z"||n>="a"&&n<="z"||i!==0&&n>="0"&&n<="9")r+=n;else{var a=n.charCodeAt(0);if((a&63488)===55296){var s=e.charCodeAt(i++);if((a&64512)!==55296||(s&64512)!==56320)throw Error("UCS-2(decode): illegal sequence");a=((a&1023)<<10)+(s&1023)+65536}r+="\\"+a.toString(16)+" "}i++}return r}v.escapeIdentifier=Ft;function jt(e){for(var t=e.length,r="",i=0,n;i<t;){var a=e.charAt(i);a==='"'?a='\\"':a==="\\"?a="\\\\":(n=v.strReplacementsRev[a])!==void 0&&(a=n),r+=a,i++}return'"'+r+'"'}v.escapeStr=jt;v.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0};v.strReplacementsRev={"\n":"\\n","\r":"\\r","	":"\\t","\f":"\\f","\v":"\\v"};v.singleQuoteEscapeChars={n:`
`,r:"\r",t:"	",f:"\f","\\":"\\","'":"'"};v.doubleQuotesEscapeChars={n:`
`,r:"\r",t:"	",f:"\f","\\":"\\",'"':'"'}});var Le=P(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});var x=K();function Mt(e,t,r,i,n,a){var s=e.length,o="";function f(c,p){var m="";for(t++,o=e.charAt(t);t<s;){if(o===c)return t++,m;if(o==="\\"){t++,o=e.charAt(t);var g=void 0;if(o===c)m+=c;else if((g=p[o])!==void 0)m+=g;else if(x.isHex(o)){var k=o;for(t++,o=e.charAt(t);x.isHex(o);)k+=o,t++,o=e.charAt(t);o===" "&&(t++,o=e.charAt(t)),m+=String.fromCharCode(parseInt(k,16));continue}else m+=o}else m+=o;t++,o=e.charAt(t)}return m}function l(){var c="";for(o=e.charAt(t);t<s;){if(x.isIdent(o))c+=o;else if(o==="\\"){if(t++,t>=s)throw Error("Expected symbol but end of file reached.");if(o=e.charAt(t),x.identSpecialChars[o])c+=o;else if(x.isHex(o)){var p=o;for(t++,o=e.charAt(t);x.isHex(o);)p+=o,t++,o=e.charAt(t);o===" "&&(t++,o=e.charAt(t)),c+=String.fromCharCode(parseInt(p,16));continue}else c+=o}else return c;t++,o=e.charAt(t)}return c}function u(){o=e.charAt(t);for(var c=!1;o===" "||o==="	"||o===`
`||o==="\r"||o==="\f";)c=!0,t++,o=e.charAt(t);return c}function d(){var c=h();if(t<s)throw Error('Rule expected but "'+e.charAt(t)+'" found.');return c}function h(){var c=E();if(!c)return null;var p=c;for(o=e.charAt(t);o===",";){if(t++,u(),p.type!=="selectors"&&(p={type:"selectors",selectors:[c]}),c=E(),!c)throw Error('Rule expected after ",".');p.selectors.push(c)}return p}function E(){u();var c={type:"ruleSet"},p=O();if(!p)return null;for(var m=c;p&&(p.type="rule",m.rule=p,m=p,u(),o=e.charAt(t),!(t>=s||o===","||o===")"));)if(n[o]){var g=o;if(t++,u(),p=O(),!p)throw Error('Rule expected after "'+g+'".');p.nestingOperator=g}else p=O(),p&&(p.nestingOperator=null);return c}function O(){for(var c=null;t<s;)if(o=e.charAt(t),o==="*")t++,(c=c||{}).tagName="*";else if(x.isIdentStart(o)||o==="\\")(c=c||{}).tagName=l();else if(o===".")t++,c=c||{},(c.classNames=c.classNames||[]).push(l());else if(o==="#")t++,(c=c||{}).id=l();else if(o==="["){t++,u();var p={name:l()};if(u(),o==="]")t++;else{var m="";if(i[o]&&(m=o,t++,o=e.charAt(t)),t>=s)throw Error('Expected "=" but end of file reached.');if(o!=="=")throw Error('Expected "=" but "'+o+'" found.');p.operator=m+"=",t++,u();var g="";if(p.valueType="string",o==='"')g=f('"',x.doubleQuotesEscapeChars);else if(o==="'")g=f("'",x.singleQuoteEscapeChars);else if(a&&o==="$")t++,g=l(),p.valueType="substitute";else{for(;t<s&&o!=="]";)g+=o,t++,o=e.charAt(t);g=g.trim()}if(u(),t>=s)throw Error('Expected "]" but end of file reached.');if(o!=="]")throw Error('Expected "]" but "'+o+'" found.');t++,p.value=g}c=c||{},(c.attrs=c.attrs||[]).push(p)}else if(o===":"){t++;var k=l(),L={name:k};if(o==="("){t++;var _="";if(u(),r[k]==="selector")L.valueType="selector",_=h();else{if(L.valueType=r[k]||"string",o==='"')_=f('"',x.doubleQuotesEscapeChars);else if(o==="'")_=f("'",x.singleQuoteEscapeChars);else if(a&&o==="$")t++,_=l(),L.valueType="substitute";else{for(;t<s&&o!==")";)_+=o,t++,o=e.charAt(t);_=_.trim()}u()}if(t>=s)throw Error('Expected ")" but end of file reached.');if(o!==")")throw Error('Expected ")" but "'+o+'" found.');t++,L.value=_}c=c||{},(c.pseudos=c.pseudos||[]).push(L)}else break;return c}return d()}R.parseCssSelector=Mt});var Pe=P(ee=>{"use strict";Object.defineProperty(ee,"__esModule",{value:!0});var y=K();function H(e){var t="";switch(e.type){case"ruleSet":for(var r=e.rule,i=[];r;)r.nestingOperator&&i.push(r.nestingOperator),i.push(H(r)),r=r.rule;t=i.join(" ");break;case"selectors":t=e.selectors.map(H).join(", ");break;case"rule":e.tagName&&(e.tagName==="*"?t="*":t=y.escapeIdentifier(e.tagName)),e.id&&(t+="#"+y.escapeIdentifier(e.id)),e.classNames&&(t+=e.classNames.map(function(n){return"."+y.escapeIdentifier(n)}).join("")),e.attrs&&(t+=e.attrs.map(function(n){return"operator"in n?n.valueType==="substitute"?"["+y.escapeIdentifier(n.name)+n.operator+"$"+n.value+"]":"["+y.escapeIdentifier(n.name)+n.operator+y.escapeStr(n.value)+"]":"["+y.escapeIdentifier(n.name)+"]"}).join("")),e.pseudos&&(t+=e.pseudos.map(function(n){return n.valueType?n.valueType==="selector"?":"+y.escapeIdentifier(n.name)+"("+H(n.value)+")":n.valueType==="substitute"?":"+y.escapeIdentifier(n.name)+"($"+n.value+")":n.valueType==="numeric"?":"+y.escapeIdentifier(n.name)+"("+n.value+")":":"+y.escapeIdentifier(n.name)+"("+y.escapeIdentifier(n.value)+")":":"+y.escapeIdentifier(n.name)}).join(""));break;default:throw Error('Unknown entity type: "'+e.type+'".')}return t}ee.renderEntity=H});var Fe=P(te=>{"use strict";Object.defineProperty(te,"__esModule",{value:!0});var $t=Le(),Nt=Pe(),Ut=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];this.pseudos[a]="selector"}return this},e.prototype.unregisterSelectorPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];delete this.pseudos[a]}return this},e.prototype.registerNumericPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];this.pseudos[a]="numeric"}return this},e.prototype.unregisterNumericPseudos=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];delete this.pseudos[a]}return this},e.prototype.registerNestingOperators=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];this.ruleNestingOperators[a]=!0}return this},e.prototype.unregisterNestingOperators=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];delete this.ruleNestingOperators[a]}return this},e.prototype.registerAttrEqualityMods=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];this.attrEqualityMods[a]=!0}return this},e.prototype.unregisterAttrEqualityMods=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var i=0,n=t;i<n.length;i++){var a=n[i];delete this.attrEqualityMods[a]}return this},e.prototype.enableSubstitutes=function(){return this.substitutesEnabled=!0,this},e.prototype.disableSubstitutes=function(){return this.substitutesEnabled=!1,this},e.prototype.parse=function(t){return $t.parseCssSelector(t,0,this.pseudos,this.attrEqualityMods,this.ruleNestingOperators,this.substitutesEnabled)},e.prototype.render=function(t){return Nt.renderEntity(t).trim()},e}();te.CssSelectorParser=Ut});var Be=e=>crypto.getRandomValues(new Uint8Array(e)),He=(e,t,r)=>{let i=(2<<Math.log(e.length-1)/Math.LN2)-1,n=-~(1.6*i*t/e.length);return(a=t)=>{let s="";for(;;){let o=r(n),f=n;for(;f--;)if(s+=e[o[f]&i]||"",s.length===a)return s}}},Y=(e,t=21)=>He(e,t,Be),Xt=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,r)=>(r&=63,r<36?t+=r.toString(36):r<62?t+=(r-26).toString(36).toUpperCase():r>62?t+="-":t+="_",t),"");function de(e,t){return t?.note&&(e.note=t.note),t?.url&&(e.url=t.url),t?.ruleId&&(e.ruleId=t.ruleId),t?.fatal&&(e.fatal=!0),e}function C(e,t,r){return de(e.message(t,r?.node,r?.source),{...r,fatal:!0})}function pe(e,t,r){return de(e.message(t,r?.node,r?.source),r)}var fe="abcdefghijklmnopqrstuvwxyz",he=fe+fe.toUpperCase(),Ve="0123456789",Qe=Y(he,1),We=Y(he+Ve,9);function Ze(){return Qe()+We()}function Je(e){if(!e)return;let t=e.replace(/[\t\n\r ]+/g," ").replace(/['‘’"“”]+/g,"").trim().toLowerCase(),r=me(t);return{identifier:t,label:e,html_id:r}}function me(e){if(e)return e.toLowerCase().replace(/[^a-z0-9-]/g,"-").replace(/^([0-9-])/,"id-$1").replace(/-[-]+/g,"-").replace(/(?:^[-]+)|(?:[-]+$)/g,"")}function Ye(e,t,r){e.label&&(t.label&&r&&pe(r,`label "${t.label}" replaced with "${e.label}"`,{node:t}),t.label=e.label,delete e.label),e.identifier&&(t.identifier=e.identifier,delete e.identifier),e.html_id&&(t.html_id=e.html_id,delete e.html_id),e.indexEntries&&(t.indexEntries||(t.indexEntries=[]),t.indexEntries.push(...e.indexEntries),delete e.indexEntries)}function ge(e,t){if(!e.children)return[e];let r=e.children.map(i=>ge(i,t)).flat();return e.type===t?(e&&e.children==null&&delete e.children,r):(e.children=r,[e])}function Xe(e,t){e.children&&(e.children=e.children.map(r=>ge(r,t)).flat())}function Ge(e,t){e.children=[{type:"text",value:t}]}function F(e){return e?Array.isArray(e)?e.map(t=>!t||typeof t=="string"?t||"":"value"in t?t.value:"children"in t&&t.children?F(t.children):"").join(""):F([e]):""}function N(e){return structuredClone(e)}function qe(e){return{attention:"Attention",caution:"Caution",danger:"Danger",error:"Error",important:"Important",hint:"Hint",note:"Note",seealso:"See Also",tip:"Tip",warning:"Warning"}[e]||`Unknown Admonition "${e}"`}function Ie(e,t,r){if(!t||t?.length===0)return"";let i=(r-e.length-4)/2,n="".padEnd(Math.ceil(i),"%"),a="".padEnd(Math.floor(i),"%");return`${`${n}  ${e}  ${a}
`}${t.join(`
`)}
`}function Ke(e){var t;if(!e.data)return[];let r=(t=e.data.tags)!==null&&t!==void 0?t:[];return Object.entries(e.data).forEach(([i,n])=>{(n===!0||typeof n=="string"&&n.toLowerCase()==="true")&&r.push(i)}),r.map(i=>i.toLowerCase())}var ve={}.hasOwnProperty;function U(e,t){let r=t||{};function i(n,...a){let s=i.invalid,o=i.handlers;if(n&&ve.call(n,e)){let f=String(n[e]);s=ve.call(o,f)?o[f]:i.unknown}if(s)return s.call(this,n,...a)}return i.handlers=r.handlers||{},i.invalid=r.invalid,i.unknown=r.unknown,i}var Re=U("operator",{unknown:ot,invalid:xe,handlers:{"=":et,"^=":rt,"$=":nt,"*=":it,"~=":tt}});function ye(e,t){let r=-1;for(;++r<e.attrs.length;)if(!Re(e.attrs[r],t))return!1;return!0}function xe(e,t){return t[e.name]!==null&&t[e.name]!==void 0}function et(e,t){return xe(e,t)&&String(t[e.name])===e.value}function tt(e,t){let r=t[e.name];return r==null?!1:Array.isArray(r)&&r.includes(e.value)?!0:String(r)===e.value}function rt(e,t){let r=t[e.name];return Boolean(e.value&&typeof r=="string"&&r.slice(0,e.value.length)===e.value)}function nt(e,t){let r=t[e.name];return Boolean(e.value&&typeof r=="string"&&r.slice(-e.value.length)===e.value)}function it(e,t){let r=t[e.name];return Boolean(e.value&&typeof r=="string"&&r.includes(e.value))}function ot(e){throw new Error("Unknown operator `"+e.operator+"`")}function be(e,t){return e.tagName==="*"||e.tagName===t.type}var at=new Set([9,10,12,13,32]),we="0".charCodeAt(0),st="9".charCodeAt(0);function Ee(e){if(e=e.trim().toLowerCase(),e==="even")return[2,0];if(e==="odd")return[2,1];let t=0,r=0,i=a(),n=s();if(t<e.length&&e.charAt(t)==="n"&&(t++,r=i*(n??1),o(),t<e.length?(i=a(),o(),n=s()):i=n=0),n===null||t<e.length)throw new Error(`n-th rule couldn't be parsed ('${e}')`);return[r,i*n];function a(){return e.charAt(t)==="-"?(t++,-1):(e.charAt(t)==="+"&&t++,1)}function s(){let f=t,l=0;for(;t<e.length&&e.charCodeAt(t)>=we&&e.charCodeAt(t)<=st;)l=l*10+(e.charCodeAt(t)-we),t++;return t===f?null:l}function o(){for(;t<e.length&&at.has(e.charCodeAt(t));)t++}}var X=ue(_e(),1);function Ae(e){let t=e[0],r=e[1]-1;if(r<0&&t<=0)return X.default.falseFunc;if(t===-1)return a=>a<=r;if(t===0)return a=>a===r;if(t===1)return r<0?X.default.trueFunc:a=>a>=r;let i=Math.abs(t),n=(r%i+i)%i;return t>1?a=>a>=r&&a%i===n:a=>a<=r&&a%i===n}function z(e){return Ae(Ee(e))}function A(e){return Array.isArray(e.children)}var lt=z.default||z,ut=U("name",{unknown:At,invalid:_t,handlers:{any:G,blank:Se,empty:Se,"first-child":ct,"first-of-type":ft,has:dt,"last-child":pt,"last-of-type":ht,matches:G,not:mt,"nth-child":gt,"nth-last-child":vt,"nth-of-type":xt,"nth-last-of-type":yt,"only-child":bt,"only-of-type":wt,root:Et,scope:Ct}});q.needsIndex=["any","first-child","first-of-type","last-child","last-of-type","matches","not","nth-child","nth-last-child","nth-of-type","nth-last-of-type","only-child","only-of-type"];function q(e,t,r,i,n){let a=e.pseudos,s=-1;for(;++s<a.length;)if(!ut(a[s],t,r,i,n))return!1;return!0}function Se(e,t){return A(t)?t.children.length===0:!("value"in t)}function ct(e,t,r,i,n){return b(n,e),n.nodeIndex===0}function ft(e,t,r,i,n){return b(n,e),n.typeIndex===0}function dt(e,t,r,i,n){let a={type:"root",children:A(t)?t.children:[]},s={...n,found:!1,shallow:!1,one:!0,scopeNodes:[t],results:[],rootQuery:j(e.value)};return S(s,a),s.results.length>0}function pt(e,t,r,i,n){return b(n,e),typeof n.nodeCount=="number"&&n.nodeIndex===n.nodeCount-1}function ht(e,t,r,i,n){return b(n,e),typeof n.typeCount=="number"&&n.typeIndex===n.typeCount-1}function G(e,t,r,i,n){let a={...n,found:!1,shallow:!1,one:!0,scopeNodes:[t],results:[],rootQuery:j(e.value)};return S(a,t),a.results[0]===t}function mt(e,t,r,i,n){return!G(e,t,r,i,n)}function gt(e,t,r,i,n){let a=D(e);return b(n,e),typeof n.nodeIndex=="number"&&a(n.nodeIndex)}function vt(e,t,r,i,n){let a=D(e);return b(n,e),typeof n.nodeCount=="number"&&typeof n.nodeIndex=="number"&&a(n.nodeCount-n.nodeIndex-1)}function yt(e,t,r,i,n){let a=D(e);return b(n,e),typeof n.typeIndex=="number"&&typeof n.typeCount=="number"&&a(n.typeCount-1-n.typeIndex)}function xt(e,t,r,i,n){let a=D(e);return b(n,e),typeof n.typeIndex=="number"&&a(n.typeIndex)}function bt(e,t,r,i,n){return b(n,e),n.nodeCount===1}function wt(e,t,r,i,n){return b(n,e),n.typeCount===1}function Et(e,t,r,i){return t&&!i}function Ct(e,t,r,i,n){return t&&n.scopeNodes.includes(t)}function _t(){throw new Error("Invalid pseudo-selector")}function At(e){throw e.name?new Error("Unknown pseudo-selector `"+e.name+"`"):new Error("Unexpected pseudo-element or empty pseudo-class")}function b(e,t){if(e.shallow)throw new Error("Cannot use `:"+t.name+"` without parent")}function D(e){let t=e._cachedFn;return t||(t=lt(e.value),e._cachedFn=t),t}function ke(e,t,r,i,n){if(e.id)throw new Error("Invalid selector: id");if(e.classNames)throw new Error("Invalid selector: class");return Boolean(t&&(!e.tagName||be(e,t))&&(!e.attrs||ye(e,t))&&(!e.pseudos||q(e,t,r,i,n)))}var St=[];function j(e){return e===null?{type:"selectors",selectors:[]}:e.type==="ruleSet"?{type:"selectors",selectors:[e]}:e}function S(e,t){t&&Oe(e,[],t,void 0,void 0)}function Oe(e,t,r,i,n){let a={directChild:void 0,descendant:void 0,adjacentSibling:void 0,generalSibling:void 0};return a=Tt(e,B(t,e.rootQuery.selectors),r,i,n),A(r)&&!e.shallow&&!(e.one&&e.found)&&kt(e,a,r),a}function kt(e,t,r){let i=B(t.descendant,t.directChild),n,a=-1,s={count:0,types:new Map},o={count:0,types:new Map};for(;++a<r.children.length;)Te(s,r.children[a]);for(a=-1;++a<r.children.length;){let l=r.children[a].type.toUpperCase();e.nodeIndex=o.count,e.typeIndex=o.types.get(l)||0,e.nodeCount=s.count,e.typeCount=s.types.get(l);let u=B(i,n),d=Oe(e,u,r.children[a],a,r);if(n=B(d.generalSibling,d.adjacentSibling),e.one&&e.found)break;Te(o,r.children[a])}}function Tt(e,t,r,i,n){let a={directChild:void 0,descendant:void 0,adjacentSibling:void 0,generalSibling:void 0},s=-1;for(;++s<t.length;){let o=t[s];if(e.one&&e.found)break;if(e.shallow&&o.rule.rule)throw new Error("Expected selector without nesting");if(ke(o.rule,r,i,n,e)){let f=o.rule.rule;if(f){let l={type:"ruleSet",rule:f},u=f.nestingOperator==="+"?"adjacentSibling":f.nestingOperator==="~"?"generalSibling":f.nestingOperator===">"?"directChild":"descendant";I(a,u,l)}else e.found=!0,e.results.includes(r)||e.results.push(r)}o.rule.nestingOperator===null?I(a,"descendant",o):o.rule.nestingOperator==="~"&&I(a,"generalSibling",o)}return a}function B(e,t){return e&&t&&e.length>0&&t.length>0?[...e,...t]:e&&e.length>0?e:t&&t.length>0?t:St}function I(e,t,r){let i=e[t];i?i.push(r):e[t]=[r]}function Te(e,t){let r=t.type.toUpperCase(),i=(e.types.get(r)||0)+1;e.count++,e.types.set(r,i)}var je=ue(Fe(),1),V=new je.CssSelectorParser;V.registerAttrEqualityMods("~","^","$","*");V.registerSelectorPseudos("any","matches","not","has");V.registerNestingOperators(">","+","~");function Me(e){if(typeof e!="string")throw new TypeError("Expected `string` as selector, not `"+e+"`");return V.parse(e)}function Lr(e,t){let r=re(e,t);return r.one=!0,r.shallow=!0,S(r,t||void 0),r.results.length>0}function Pr(e,t){let r=re(e,t);return r.one=!0,S(r,t||void 0),r.results[0]||null}function T(e,t){let r=re(e,t);return S(r,t||void 0),r.results}function re(e,t){return{rootQuery:j(Me(e)),results:[],scopeNodes:t?A(t)&&(t.type==="RootNode"||t.type==="root")?t.children:[t]:[],one:!1,shallow:!1,found:!1,typeIndex:void 0,nodeIndex:void 0,typeCount:void 0,nodeCount:void 0}}var zt=[],Q=function(e,t,r){let i=ce(r||t),n=!t||t.cascade===void 0||t.cascade===null?!0:t.cascade;return a(e);function a(s,o,f){let l=s.children||zt,u=-1,d=0;if(i(s,o,f))return null;if(l.length>0){for(;++u<l.length;)a(l[u],u,s)&&(l[d++]=l[u]);if(n&&!d)return null;l.length=d}return s}};var Ur=["title","subtitle","short_title","description","thumbnail","thumbnailOptimized","banner","bannerOptimized","tags","authors","reviewers","editors","contributors","venue","github","keywords","affiliations","funding","copyright","options"],$e={author:"authors",reviewer:"reviewers",editor:"editors",contributor:"contributors",affiliation:"affiliations",export:"exports",download:"downloads",jupyter:"thebe",part:"parts",ack:"acknowledgments",acknowledgements:"acknowledgments",acknowledgment:"acknowledgments",acknowledgement:"acknowledgments",availability:"data_availability",dataAvailability:"data_availability","data-availability":"data_availability",quote:"epigraph",plain_language_summary:"summary","plain-language-summary":"summary",plainLanguageSummary:"summary",lay_summary:"summary","lay-summary":"summary",keyPoints:"keypoints",key_points:"keypoints","key-points":"keypoints",image:"thumbnail"};function W(e){if(!e)return[];if(typeof e=="string")return W([e]);let t=[];return e.map(r=>r.toLowerCase()).forEach(r=>{t.push(r),Object.entries($e).forEach(([i,n])=>{(r===i||r===n)&&(t.includes(n)||t.unshift(n),t.includes(i)||t.push(i))})}),t}function Ne(e,t){let r=W(t);return r.length===0?[]:T("block",e).filter(n=>{var a,s,o;let f=(!((a=n.data)===null||a===void 0)&&a.tags&&Array.isArray(n.data.tags)?n.data.tags:[]).map(u=>u?.toLowerCase()),l=(o=(s=n.data)===null||s===void 0?void 0:s.part)===null||o===void 0?void 0:o.toLowerCase();return r.map(u=>l===u||f.includes(u)).reduce((u,d)=>u||d,!1)})}function Dt(e,t,r){var i;let n={type:"block",children:e};return r?.removePartData||((i=n.data)!==null&&i!==void 0||(n.data={}),n.data.part=t),n}function Ue(e,t){let r=Q(e,t);return r||(r=Q(e,{cascade:!1},t)),r}function ze(e,t,r){var i;let n=W(t);if(n.length===0)return;let a=!1,s=[],o=[];if((i=e.children)===null||i===void 0||i.forEach((l,u)=>{var d;if(a&&l.type==="paragraph"&&(o.push(N(l)),l.type="__part_delete__"),(l.type!=="__part_delete__"||u===e.children.length-1)&&(a=!1,o.length>0&&(s.push(Dt(o,n[0],r)),o=[],T("__part_heading__",e).forEach(h=>{h.type="__part_delete__"}))),l.type==="block"){if(!((d=l.data)===null||d===void 0)&&d.part||e.type!=="root")return;let h=ze(l,n);h&&s.push(...h.children)}else l.type==="heading"&&n.includes(F(l).toLowerCase())&&(a=!0,l.type="__part_heading__")}),T("__part_heading__",e).forEach(l=>{l.type="heading"}),s.length===0)return;let f={type:"root",children:s};return Ue(e,"__part_delete__"),f}function Bt(e,t,r){let i=W(t);if(i.length===0)return;let n=Ne(e,t);if(n.length===0)return r?.requireExplicitPart?void 0:ze(e,i);let s={type:"root",children:N(n).map(o=>{var f;return(f=o.data)!==null&&f!==void 0||(o.data={}),o.data.part=i[0],o.data.tags&&Array.isArray(o.data.tags)&&o.data.tags.reduce((l,u)=>l||i.includes(u.toLowerCase()),!1)&&(o.data.tags=o.data.tags.filter(l=>!i.includes(l.toLowerCase())),o.data.tags.length===0&&delete o.data.tags),r?.removePartData&&delete o.data.part,r?.keepVisibility||delete o.visibility,o})};return n.forEach(o=>{o.type="__delete__"}),Ue(e,"__delete__"),s}var ne;(function(e){e.validConfigStructure="valid-config-structure",e.siteConfigExists="site-config-exists",e.projectConfigExists="project-config-exists",e.validSiteConfig="valid-site-config",e.validProjectConfig="valid-project-config",e.configHasNoDeprecatedFields="config-has-no-deprecated-fields",e.frontmatterIsYaml="frontmatter-is-yaml",e.validPageFrontmatter="valid-page-frontmatter",e.validFrontmatterExportList="valid-frontmatter-export-list",e.docxRenders="docx-renders",e.jatsRenders="jats-renders",e.mdRenders="md-renders",e.mecaIncludesJats="meca-includes-jats",e.mecaExportsBuilt="meca-exports-built",e.mecaFilesCopied="meca-files-copied",e.pdfBuildCommandsAvailable="pdf-build-commands-available",e.pdfBuildsWithoutErrors="pdf-builds-without-errors",e.pdfBuilds="pdf-builds",e.texRenders="tex-renders",e.exportExtensionCorrect="export-extension-correct",e.exportArticleExists="export-article-exists",e.texParses="tex-parses",e.jatsParses="jats-parses",e.mystFileLoads="myst-file-loads",e.selectedFileIsProcessed="selected-file-is-processed",e.directiveRegistered="directive-registered",e.directiveKnown="directive-known",e.directiveArgumentCorrect="directive-argument-correct",e.directiveOptionsCorrect="directive-options-correct",e.directiveBodyCorrect="directive-body-correct",e.roleRegistered="role-registered",e.roleKnown="role-known",e.roleBodyCorrect="role-body-correct",e.tocContentsExist="toc-contents-exist",e.encounteredLegacyTOC="encountered-legacy-toc",e.validTOCStructure="valid-toc-structure",e.validTOC="valid-toc",e.tocWritten="toc-written",e.imageDownloads="image-downloads",e.imageExists="image-exists",e.imageFormatConverts="image-format-converts",e.imageCopied="image-copied",e.imageFormatOptimizes="image-format-optimizes",e.mathLabelLifted="math-label-lifted",e.mathEquationEnvRemoved="math-equation-env-removed",e.mathEqnarrayReplaced="math-eqnarray-replaced",e.mathAlignmentAdjusted="math-alignment-adjusted",e.mathRenders="math-renders",e.referenceTemplateFills="reference-template-fills",e.identifierIsUnique="identifier-is-unique",e.referenceTargetResolves="reference-target-resolves",e.referenceSyntaxValid="reference-syntax-valid",e.referenceTargetExplicit="reference-target-explicit",e.footnoteReferencesDefinition="footnote-references-definition",e.intersphinxReferencesResolve="intersphinx-references-resolve",e.mystLinkValid="myst-link-valid",e.sphinxLinkValid="sphinx-link-valid",e.rridLinkValid="rrid-link-valid",e.rorLinkValid="ror-link-valid",e.wikipediaLinkValid="wikipedia-link-valid",e.doiLinkValid="doi-link-valid",e.linkResolves="link-resolves",e.linkTextExists="link-text-exists",e.notebookAttachmentsResolve="notebook-attachments-resolve",e.notebookOutputCopied="notebook-output-copied",e.mdastSnippetImports="mdast-snippet-imports",e.includeContentFilters="include-content-filters",e.includeContentLoads="include-content-loads",e.gatedNodesJoin="gated-nodes-join",e.glossaryUsesDefinitionList="glossary-uses-definition-list",e.blockMetadataLoads="block-metadata-loads",e.indexEntriesResolve="index-entries-resolve",e.citationIsUnique="citation-is-unique",e.bibFileExists="bib-file-exists",e.citationRenders="citation-renders",e.codeMetadataLifted="code-metadata-lifted",e.codeMetatagsValid="code-metatags-valid",e.codeLangDefined="code-lang-defined",e.codeMetadataLoads="code-metadata-loads",e.inlineCodeMalformed="inline-code-malformed",e.inlineExpressionRenders="inline-expression-renders",e.staticFileCopied="static-file-copied",e.exportFileCopied="export-file-copied",e.sourceFileCopied="source-file-copied",e.templateFileCopied="template-file-copied",e.staticActionFileCopied="static-action-file-copied",e.pluginLoads="plugin-loads",e.pluginExecutionFailed="plugin-execution-failed",e.containerChildrenValid="container-children-valid",e.mystJsonValid="myst-json-valid"})(ne||(ne={}));function Ht(e,t){var r;let i=(r=typeof t=="number"?t:Array.isArray(t)?t?.length:Object.keys(t??{}).length)!==null&&r!==void 0?r:0;return e.replace("%s",String(i)).replace(/\((?:([a-z0-9A-Z-]*)\|)?([a-z0-9A-Z-]*)\)/g,i===1?"$1":"$2")}function Vt(e,{single:t,pair:r,triple:i,see:n,seealso:a},s,o){if(e.trim().length===0)return;let f=e.split(/(?<!\\):/).map(l=>l.trim().replace("\\:",":"));if(f.length>2)C(s,`Too many colons encountered in index line "${e}"`,{node:o,note:'Index entry must follow pattern "type: entry; sub entry"'});else if(f.length===2){let[l,u]=f;l==="single"?t.push(u):l==="pair"?r.push(u):l==="triple"?i.push(u):l==="see"?n.push(u):l==="seealso"?a.push(u):C(s,`Unknown index entry type "${l}"`,{node:o,note:"Allowed types include: single, pair, triple, see, and seealso"})}else t.push(...f[0].split(/(?<!\\),/).map(l=>l.trim().replace("\\,",",")))}function M(e){let t=e.startsWith("!"),r=e.replace(/^!/,"").replace(/^\\!/,"!").split(/(?<!\\);/).map(i=>i.trim().replace("\\;",";")).filter(i=>i!=="");return{emphasis:t,splitEntry:r}}function w(e,t,r,i){return{entry:e,subEntry:t?{value:t,kind:i??"entry"}:void 0,emphasis:r}}function Qt({single:e,pair:t,triple:r,see:i,seealso:n},a,s){let o=[];e.forEach(l=>{let{emphasis:u,splitEntry:d}=M(l);if(d.length!==1&&d.length!==2)C(a,`Unable to parse index "single" entry "${l}"`,{node:s,note:'Single index entry must follow pattern "entry" or "entry; sub entry"'});else{let[h,E]=d;o.push(w(h,E,u))}}),t.forEach(l=>{let{emphasis:u,splitEntry:d}=M(l);if(d.length!==2)C(a,`Unable to parse index "pair" entry "${l}"`,{node:s,note:'Pair index entry must follow pattern "entry; sub entry"'});else{let[h,E]=d;o.push(w(h,E,u)),o.push(w(E,h,u))}}),r.forEach(l=>{let{emphasis:u,splitEntry:d}=M(l);d.length!==3?C(a,`Unable to parse index "triple" entry "${l}"`,{node:s,note:'Triple index entry must follow pattern "entry one; entry two; entry three"'}):(o.push(w(d[0],d[1],u)),o.push(w(d[1],d[0],u)),o.push(w(d[1],d[2],u)),o.push(w(d[2],d[1],u)),o.push(w(d[0],d[2],u)),o.push(w(d[2],d[0],u)))});let f=(l,u)=>{let{emphasis:d,splitEntry:h}=M(l);if(h.length!==2)C(a,`Unable to parse index "${u}" entry "${l}"`,{node:s,note:'See index entry must follow pattern "entry; sub entry"'});else{let[E,O]=h;o.push(w(E,O,d,u))}};return i.forEach(l=>{f(l,"see")}),n.forEach(l=>{f(l,"seealso")}),o.length===0&&C(a,"No entries parsed from index directive",{node:s}),o}function De(e){return!["crossReference","cite","footnoteDefinition","footnoteReference"].includes(e.type)}var Wt=new Set(["comment","mystComment"]);function Zt(e,t,r){let i=!1,n,a=[];return J(e,s=>{if(i&&s.type==="heading"||r&&a.length>=r)return $;if(s.identifier===t&&s.type==="heading"&&(i=!0,n=s.html_id||s.identifier),i)return Wt.has(s.type)||a.push(s),Z}),{htmlId:n,nodes:a}}function Jt(e,t,r){var i,n;let a=!1,s=[];return J(e,o=>{if(a&&o.type==="definitionTerm"){if(s.length>1)return $}else if(a&&o.type!=="definitionDescription")return $;if(o.identifier===t&&o.type==="definitionTerm"&&(s.push(o),a=!0),a)return o.type==="definitionDescription"&&s.push(o),Z}),{htmlId:((i=s?.[0])===null||i===void 0?void 0:i.html_id)||((n=s?.[0])===null||n===void 0?void 0:n.identifier),nodes:[{type:"definitionList",key:"dl",children:s.slice(0,r)}]}}function Yt(e,t,r){if(r===0)return{nodes:[]};let i=T(`[identifier=${t}],[key=${t}]`,e).find(n=>De(n));if(!i)return{nodes:[]};switch(i.type){case"heading":return Zt(e,t,r);case"definitionTerm":return Jt(e,t,r);default:return{htmlId:i.html_id||i.identifier,nodes:[i]}}}var ie;(function(e){e.content="notebook-content",e.code="notebook-code"})(ie||(ie={}));var oe;(function(e){e.removeStderr="remove-stderr",e.removeStdout="remove-stdout",e.hideCell="hide-cell",e.hideInput="hide-input",e.hideOutput="hide-output",e.removeCell="remove-cell",e.removeInput="remove-input",e.removeOutput="remove-output"})(oe||(oe={}));var ae;(function(e){e.string="string",e.number="number",e.boolean="boolean",e.parsed="parsed"})(ae||(ae={}));var se;(function(e){e.heading="heading",e.equation="equation",e.subequation="subequation",e.figure="figure",e.table="table",e.code="code"})(se||(se={}));var le;(function(e){e.admonition="admonition",e.attention="attention",e.caution="caution",e.danger="danger",e.error="error",e.important="important",e.hint="hint",e.note="note",e.seealso="seealso",e.tip="tip",e.warning="warning"})(le||(le={}));export{Xt as a,C as b,pe as c,Ze as d,Je as e,me as f,Ye as g,Xe as h,Ge as i,F as j,N as k,qe as l,Ie as m,Ke as n,Ht as o,Q as p,U as q,Lr as r,Pr as s,T as t,Ur as u,$e as v,Ne as w,Bt as x,Vt as y,Qt as z,ne as A,De as B,Yt as C,ie as D,ae as E,se as F,le as G};
