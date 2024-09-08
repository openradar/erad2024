import{c as S,e as _}from"/erad2024/_preview/111/build/_shared/chunk-2NH4LW52.js";var b=S((B,x)=>{x.exports=function(e){return e!=null&&e.constructor!=null&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}});var L=_(b(),1);function m(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?A(t.position):"start"in t||"end"in t?A(t):"line"in t||"column"in t?d(t):""}function d(t){return E(t&&t.line)+":"+E(t&&t.column)}function A(t){return d(t&&t.start)+"-"+d(t&&t.end)}function E(t){return t&&typeof t=="number"?t:1}var f=class extends Error{constructor(e,n,r){let i=[null,null],s={start:{line:null,column:null},end:{line:null,column:null}};if(super(),typeof n=="string"&&(r=n,n=void 0),typeof r=="string"){let o=r.indexOf(":");o===-1?i[1]=r:(i[0]=r.slice(0,o),i[1]=r.slice(o+1))}n&&("type"in n||"position"in n?n.position&&(s=n.position):"start"in n||"end"in n?s=n:("line"in n||"column"in n)&&(s.start=n)),this.name=m(n)||"1:1",this.message=typeof e=="object"?e.message:e,this.stack="",typeof e=="object"&&e.stack&&(this.stack=e.stack),this.reason=this.message,this.fatal,this.line=s.start.line,this.column=s.start.column,this.position=s,this.source=i[0],this.ruleId=i[1],this.file,this.actual,this.expected,this.url,this.note}};f.prototype.file="";f.prototype.name="";f.prototype.reason="";f.prototype.message="";f.prototype.stack="";f.prototype.fatal=null;f.prototype.column=null;f.prototype.line=null;f.prototype.source=null;f.prototype.ruleId=null;f.prototype.position=null;var h={basename:T,dirname:k,extname:P,join:U,sep:"/"};function T(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');c(t);let n=0,r=-1,i=t.length,s;if(e===void 0||e.length===0||e.length>t.length){for(;i--;)if(t.charCodeAt(i)===47){if(s){n=i+1;break}}else r<0&&(s=!0,r=i+1);return r<0?"":t.slice(n,r)}if(e===t)return"";let o=-1,l=e.length-1;for(;i--;)if(t.charCodeAt(i)===47){if(s){n=i+1;break}}else o<0&&(s=!0,o=i+1),l>-1&&(t.charCodeAt(i)===e.charCodeAt(l--)?l<0&&(r=i):(l=-1,r=o));return n===r?r=o:r<0&&(r=t.length),t.slice(n,r)}function k(t){if(c(t),t.length===0)return".";let e=-1,n=t.length,r;for(;--n;)if(t.charCodeAt(n)===47){if(r){e=n;break}}else r||(r=!0);return e<0?t.charCodeAt(0)===47?"/":".":e===1&&t.charCodeAt(0)===47?"//":t.slice(0,e)}function P(t){c(t);let e=t.length,n=-1,r=0,i=-1,s=0,o;for(;e--;){let l=t.charCodeAt(e);if(l===47){if(o){r=e+1;break}continue}n<0&&(o=!0,n=e+1),l===46?i<0?i=e:s!==1&&(s=1):i>-1&&(s=-1)}return i<0||n<0||s===0||s===1&&i===n-1&&i===r+1?"":t.slice(i,n)}function U(...t){let e=-1,n;for(;++e<t.length;)c(t[e]),t[e]&&(n=n===void 0?t[e]:n+"/"+t[e]);return n===void 0?".":N(n)}function N(t){c(t);let e=t.charCodeAt(0)===47,n=j(t,!e);return n.length===0&&!e&&(n="."),n.length>0&&t.charCodeAt(t.length-1)===47&&(n+="/"),e?"/"+n:n}function j(t,e){let n="",r=0,i=-1,s=0,o=-1,l,a;for(;++o<=t.length;){if(o<t.length)l=t.charCodeAt(o);else{if(l===47)break;l=47}if(l===47){if(!(i===o-1||s===1))if(i!==o-1&&s===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){if(a=n.lastIndexOf("/"),a!==n.length-1){a<0?(n="",r=0):(n=n.slice(0,a),r=n.length-1-n.lastIndexOf("/")),i=o,s=0;continue}}else if(n.length>0){n="",r=0,i=o,s=0;continue}}e&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+t.slice(i+1,o):n=t.slice(i+1,o),r=o-i-1;i=o,s=0}else l===46&&s>-1?s++:s=-1}return n}function c(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}var R={cwd:D};function D(){return"/"}function u(t){return t!==null&&typeof t=="object"&&t.href&&t.origin}function C(t){if(typeof t=="string")t=new URL(t);else if(!u(t)){let e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(t.protocol!=="file:"){let e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return F(t)}function F(t){if(t.hostname!==""){let r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}let e=t.pathname,n=-1;for(;++n<e.length;)if(e.charCodeAt(n)===37&&e.charCodeAt(n+1)===50){let r=e.charCodeAt(n+2);if(r===70||r===102){let i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(e)}var p=["history","path","basename","stem","extname","dirname"],w=class{constructor(e){let n;e?typeof e=="string"||V(e)?n={value:e}:u(e)?n={path:e}:n=e:n={},this.data={},this.messages=[],this.history=[],this.cwd=R.cwd(),this.value,this.stored,this.result,this.map;let r=-1;for(;++r<p.length;){let s=p[r];s in n&&n[s]!==void 0&&n[s]!==null&&(this[s]=s==="history"?[...n[s]]:n[s])}let i;for(i in n)p.includes(i)||(this[i]=n[i])}get path(){return this.history[this.history.length-1]}set path(e){u(e)&&(e=C(e)),y(e,"path"),this.path!==e&&this.history.push(e)}get dirname(){return typeof this.path=="string"?h.dirname(this.path):void 0}set dirname(e){I(this.basename,"dirname"),this.path=h.join(e||"",this.basename)}get basename(){return typeof this.path=="string"?h.basename(this.path):void 0}set basename(e){y(e,"basename"),g(e,"basename"),this.path=h.join(this.dirname||"",e)}get extname(){return typeof this.path=="string"?h.extname(this.path):void 0}set extname(e){if(g(e,"extname"),I(this.dirname,"extname"),e){if(e.charCodeAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=h.join(this.dirname,this.stem+(e||""))}get stem(){return typeof this.path=="string"?h.basename(this.path,this.extname):void 0}set stem(e){y(e,"stem"),g(e,"stem"),this.path=h.join(this.dirname||"",e+(this.extname||""))}toString(e){return(this.value||"").toString(e||void 0)}message(e,n,r){let i=new f(e,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}info(e,n,r){let i=this.message(e,n,r);return i.fatal=null,i}fail(e,n,r){let i=this.message(e,n,r);throw i.fatal=!0,i}};function g(t,e){if(t&&t.includes(h.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+h.sep+"`")}function y(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function I(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}function V(t){return(0,L.default)(t)}export{b as a,w as b};
/*! Bundled license information:

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
