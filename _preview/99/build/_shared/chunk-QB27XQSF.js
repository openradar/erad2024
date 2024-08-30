import{b as Q}from"/erad2024/_preview/99/build/_shared/chunk-2NH4LW52.js";function D(e){var n;return typeof e.iter=="function"?n=e.iter():n=new ve(e),n}function Z(e,n){for(var u=0,l=D(e),v;(v=l.next())!==void 0;)if(n(v,u++)===!1)return}function re(e,n){for(var u=0,l=D(e),v;(v=l.next())!==void 0;)if(!n(v,u++))return!1;return!0}function ie(e,n){for(var u=0,l=D(e),v;(v=l.next())!==void 0;)if(n(v,u++))return!0;return!1}function Me(e){for(var n=0,u=[],l=D(e),v;(v=l.next())!==void 0;)u[n++]=v;return u}function Fe(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return new de(D(e.map(D)))}function Y(){return new pe}function Re(e,n){return new me(D(e),n)}function ke(e,n){for(var u=0,l=D(e),v;(v=l.next())!==void 0;)if(n(v,u++))return v}function Ee(e,n){var u=D(e),l=u.next();if(l!==void 0){for(var v=l;(l=u.next())!==void 0;)n(l,v)>0&&(v=l);return v}}function Ce(e,n){return new _e(D(e),n)}function Te(e,n,u){var l=0,v=D(e),x=v.next();if(x===void 0&&u===void 0)throw new TypeError("Reduce of empty iterable with no initial value.");if(x===void 0)return u;var p=v.next();if(p===void 0&&u===void 0)return x;if(p===void 0)return n(u,x,l++);var d;u===void 0?d=n(x,p,l++):d=n(n(u,x,l++),p,l++);for(var g;(g=v.next())!==void 0;)d=n(d,g,l++);return d}function He(e){return new ge(e,1)}function ue(e){var n;return typeof e.retro=="function"?n=e.retro():n=new ye(e),n}var R,ve,ze,Oe,Le,Se,de,pe,Ne,me,_e,Ae,X,ge,ye,We,ne,De,Ve,ee=Q(()=>{(function(e){function n(s,a,i,r){i===void 0&&(i=0),r===void 0&&(r=-1);var o=s.length;if(o===0)return-1;i<0?i=Math.max(0,i+o):i=Math.min(i,o-1),r<0?r=Math.max(0,r+o):r=Math.min(r,o-1);var h;r<i?h=r+1+(o-i):h=r-i+1;for(var t=0;t<h;++t){var f=(i+t)%o;if(s[f]===a)return f}return-1}e.firstIndexOf=n;function u(s,a,i,r){i===void 0&&(i=-1),r===void 0&&(r=0);var o=s.length;if(o===0)return-1;i<0?i=Math.max(0,i+o):i=Math.min(i,o-1),r<0?r=Math.max(0,r+o):r=Math.min(r,o-1);var h;i<r?h=i+1+(o-r):h=i-r+1;for(var t=0;t<h;++t){var f=(i-t+o)%o;if(s[f]===a)return f}return-1}e.lastIndexOf=u;function l(s,a,i,r){i===void 0&&(i=0),r===void 0&&(r=-1);var o=s.length;if(o===0)return-1;i<0?i=Math.max(0,i+o):i=Math.min(i,o-1),r<0?r=Math.max(0,r+o):r=Math.min(r,o-1);var h;r<i?h=r+1+(o-i):h=r-i+1;for(var t=0;t<h;++t){var f=(i+t)%o;if(a(s[f],f))return f}return-1}e.findFirstIndex=l;function v(s,a,i,r){i===void 0&&(i=-1),r===void 0&&(r=0);var o=s.length;if(o===0)return-1;i<0?i=Math.max(0,i+o):i=Math.min(i,o-1),r<0?r=Math.max(0,r+o):r=Math.min(r,o-1);var h;i<r?h=i+1+(o-r):h=i-r+1;for(var t=0;t<h;++t){var f=(i-t+o)%o;if(a(s[f],f))return f}return-1}e.findLastIndex=v;function x(s,a,i,r){i===void 0&&(i=0),r===void 0&&(r=-1);var o=l(s,a,i,r);return o!==-1?s[o]:void 0}e.findFirstValue=x;function p(s,a,i,r){i===void 0&&(i=-1),r===void 0&&(r=0);var o=v(s,a,i,r);return o!==-1?s[o]:void 0}e.findLastValue=p;function d(s,a,i,r,o){r===void 0&&(r=0),o===void 0&&(o=-1);var h=s.length;if(h===0)return 0;r<0?r=Math.max(0,r+h):r=Math.min(r,h-1),o<0?o=Math.max(0,o+h):o=Math.min(o,h-1);for(var t=r,f=o-r+1;f>0;){var c=f>>1,_=t+c;i(s[_],a)<0?(t=_+1,f-=c+1):f=c}return t}e.lowerBound=d;function g(s,a,i,r,o){r===void 0&&(r=0),o===void 0&&(o=-1);var h=s.length;if(h===0)return 0;r<0?r=Math.max(0,r+h):r=Math.min(r,h-1),o<0?o=Math.max(0,o+h):o=Math.min(o,h-1);for(var t=r,f=o-r+1;f>0;){var c=f>>1,_=t+c;i(s[_],a)>0?f=c:(t=_+1,f-=c+1)}return t}e.upperBound=g;function w(s,a,i){if(s===a)return!0;if(s.length!==a.length)return!1;for(var r=0,o=s.length;r<o;++r)if(i?!i(s[r],a[r]):s[r]!==a[r])return!1;return!0}e.shallowEqual=w;function y(s,a){a===void 0&&(a={});var i=a.start,r=a.stop,o=a.step;if(o===void 0&&(o=1),o===0)throw new Error("Slice `step` cannot be zero.");var h=s.length;i===void 0?i=o<0?h-1:0:i<0?i=Math.max(i+h,o<0?-1:0):i>=h&&(i=o<0?h-1:h),r===void 0?r=o<0?-1:h:r<0?r=Math.max(r+h,o<0?-1:0):r>=h&&(r=o<0?h-1:h);var t;o<0&&r>=i||o>0&&i>=r?t=0:o<0?t=Math.floor((r-i+1)/o+1):t=Math.floor((r-i-1)/o+1);for(var f=[],c=0;c<t;++c)f[c]=s[i+c*o];return f}e.slice=y;function b(s,a,i){var r=s.length;if(!(r<=1)&&(a<0?a=Math.max(0,a+r):a=Math.min(a,r-1),i<0?i=Math.max(0,i+r):i=Math.min(i,r-1),a!==i)){for(var o=s[a],h=a<i?1:-1,t=a;t!==i;t+=h)s[t]=s[t+h];s[i]=o}}e.move=b;function I(s,a,i){a===void 0&&(a=0),i===void 0&&(i=-1);var r=s.length;if(!(r<=1))for(a<0?a=Math.max(0,a+r):a=Math.min(a,r-1),i<0?i=Math.max(0,i+r):i=Math.min(i,r-1);a<i;){var o=s[a],h=s[i];s[a++]=h,s[i--]=o}}e.reverse=I;function z(s,a,i,r){i===void 0&&(i=0),r===void 0&&(r=-1);var o=s.length;if(!(o<=1)&&(i<0?i=Math.max(0,i+o):i=Math.min(i,o-1),r<0?r=Math.max(0,r+o):r=Math.min(r,o-1),!(i>=r))){var h=r-i+1;if(a>0?a=a%h:a<0&&(a=(a%h+h)%h),a!==0){var t=i+a;I(s,i,t-1),I(s,t,r),I(s,i,r)}}}e.rotate=z;function S(s,a,i,r){i===void 0&&(i=0),r===void 0&&(r=-1);var o=s.length;if(o!==0){i<0?i=Math.max(0,i+o):i=Math.min(i,o-1),r<0?r=Math.max(0,r+o):r=Math.min(r,o-1);var h;r<i?h=r+1+(o-i):h=r-i+1;for(var t=0;t<h;++t)s[(i+t)%o]=a}}e.fill=S;function H(s,a,i){var r=s.length;a<0?a=Math.max(0,a+r):a=Math.min(a,r);for(var o=r;o>a;--o)s[o]=s[o-1];s[a]=i}e.insert=H;function N(s,a){var i=s.length;if(a<0&&(a+=i),!(a<0||a>=i)){for(var r=s[a],o=a+1;o<i;++o)s[o-1]=s[o];return s.length=i-1,r}}e.removeAt=N;function $(s,a,i,r){i===void 0&&(i=0),r===void 0&&(r=-1);var o=n(s,a,i,r);return o!==-1&&N(s,o),o}e.removeFirstOf=$;function G(s,a,i,r){i===void 0&&(i=-1),r===void 0&&(r=0);var o=u(s,a,i,r);return o!==-1&&N(s,o),o}e.removeLastOf=G;function j(s,a,i,r){i===void 0&&(i=0),r===void 0&&(r=-1);var o=s.length;if(o===0)return 0;i<0?i=Math.max(0,i+o):i=Math.min(i,o-1),r<0?r=Math.max(0,r+o):r=Math.min(r,o-1);for(var h=0,t=0;t<o;++t)i<=r&&t>=i&&t<=r&&s[t]===a||r<i&&(t<=r||t>=i)&&s[t]===a?h++:h>0&&(s[t-h]=s[t]);return h>0&&(s.length=o-h),h}e.removeAllOf=j;function C(s,a,i,r){i===void 0&&(i=0),r===void 0&&(r=-1);var o,h=l(s,a,i,r);return h!==-1&&(o=N(s,h)),{index:h,value:o}}e.removeFirstWhere=C;function P(s,a,i,r){i===void 0&&(i=-1),r===void 0&&(r=0);var o,h=v(s,a,i,r);return h!==-1&&(o=N(s,h)),{index:h,value:o}}e.removeLastWhere=P;function U(s,a,i,r){i===void 0&&(i=0),r===void 0&&(r=-1);var o=s.length;if(o===0)return 0;i<0?i=Math.max(0,i+o):i=Math.min(i,o-1),r<0?r=Math.max(0,r+o):r=Math.min(r,o-1);for(var h=0,t=0;t<o;++t)i<=r&&t>=i&&t<=r&&a(s[t],t)||r<i&&(t<=r||t>=i)&&a(s[t],t)?h++:h>0&&(s[t-h]=s[t]);return h>0&&(s.length=o-h),h}e.removeAllWhere=U})(R||(R={}));ve=function(){function e(n){this._index=0,this._source=n}return e.prototype.iter=function(){return this},e.prototype.clone=function(){var n=new e(this._source);return n._index=this._index,n},e.prototype.next=function(){if(!(this._index>=this._source.length))return this._source[this._index++]},e}(),ze=function(){function e(n,u){u===void 0&&(u=Object.keys(n)),this._index=0,this._source=n,this._keys=u}return e.prototype.iter=function(){return this},e.prototype.clone=function(){var n=new e(this._source,this._keys);return n._index=this._index,n},e.prototype.next=function(){if(!(this._index>=this._keys.length)){var n=this._keys[this._index++];return n in this._source?n:this.next()}},e}(),Oe=function(){function e(n,u){u===void 0&&(u=Object.keys(n)),this._index=0,this._source=n,this._keys=u}return e.prototype.iter=function(){return this},e.prototype.clone=function(){var n=new e(this._source,this._keys);return n._index=this._index,n},e.prototype.next=function(){if(!(this._index>=this._keys.length)){var n=this._keys[this._index++];return n in this._source?this._source[n]:this.next()}},e}(),Le=function(){function e(n,u){u===void 0&&(u=Object.keys(n)),this._index=0,this._source=n,this._keys=u}return e.prototype.iter=function(){return this},e.prototype.clone=function(){var n=new e(this._source,this._keys);return n._index=this._index,n},e.prototype.next=function(){if(!(this._index>=this._keys.length)){var n=this._keys[this._index++];return n in this._source?[n,this._source[n]]:this.next()}},e}(),Se=function(){function e(n){this._fn=n}return e.prototype.iter=function(){return this},e.prototype.clone=function(){throw new Error("An `FnIterator` cannot be cloned.")},e.prototype.next=function(){return this._fn.call(void 0)},e}();de=function(){function e(n){this._cloned=!1,this._source=n,this._active=void 0}return e.prototype.iter=function(){return this},e.prototype.clone=function(){var n=new e(this._source.clone());return n._active=this._active&&this._active.clone(),n._cloned=!0,this._cloned=!0,n},e.prototype.next=function(){if(this._active===void 0){var n=this._source.next();if(n===void 0)return;this._active=this._cloned?n.clone():n}var u=this._active.next();return u!==void 0?u:(this._active=void 0,this.next())},e}();pe=function(){function e(){}return e.prototype.iter=function(){return this},e.prototype.clone=function(){return new e},e.prototype.next=function(){},e}(),Ne=function(){function e(n,u){this._source=n,this._index=u}return e.prototype.iter=function(){return this},e.prototype.clone=function(){return new e(this._source.clone(),this._index)},e.prototype.next=function(){var n=this._source.next();if(n!==void 0)return[this._index++,n]},e}();me=function(){function e(n,u){this._index=0,this._source=n,this._fn=u}return e.prototype.iter=function(){return this},e.prototype.clone=function(){var n=new e(this._source.clone(),this._fn);return n._index=this._index,n},e.prototype.next=function(){for(var n=this._fn,u=this._source,l;(l=u.next())!==void 0;)if(n(l,this._index++))return l},e}();_e=function(){function e(n,u){this._index=0,this._source=n,this._fn=u}return e.prototype.iter=function(){return this},e.prototype.clone=function(){var n=new e(this._source.clone(),this._fn);return n._index=this._index,n},e.prototype.next=function(){var n=this._source.next();if(n!==void 0)return this._fn.call(void 0,n,this._index++)},e}(),Ae=function(){function e(n,u,l){this._index=0,this._start=n,this._stop=u,this._step=l,this._length=X.rangeLength(n,u,l)}return e.prototype.iter=function(){return this},e.prototype.clone=function(){var n=new e(this._start,this._stop,this._step);return n._index=this._index,n},e.prototype.next=function(){if(!(this._index>=this._length))return this._start+this._step*this._index++},e}();(function(e){function n(u,l,v){return v===0?1/0:u>l&&v>0||u<l&&v<0?0:Math.ceil((l-u)/v)}e.rangeLength=n})(X||(X={}));ge=function(){function e(n,u){this._value=n,this._count=u}return e.prototype.iter=function(){return this},e.prototype.clone=function(){return new e(this._value,this._count)},e.prototype.next=function(){if(!(this._count<=0))return this._count--,this._value},e}();ye=function(){function e(n){this._source=n,this._index=n.length-1}return e.prototype.iter=function(){return this},e.prototype.clone=function(){var n=new e(this._source);return n._index=this._index,n},e.prototype.next=function(){if(!(this._index<0||this._index>=this._source.length))return this._source[this._index--]},e}(),We=function(){function e(n,u){this._source=n,this._step=u}return e.prototype.iter=function(){return this},e.prototype.clone=function(){return new e(this._source.clone(),this._step)},e.prototype.next=function(){for(var n=this._source.next(),u=this._step-1;u>0;--u)this._source.next();return n},e}();(function(e){function n(p,d,g){g===void 0&&(g=0);for(var w=new Array(d.length),y=0,b=g,I=d.length;y<I;++y,++b){if(b=p.indexOf(d[y],b),b===-1)return null;w[y]=b}return w}e.findIndices=n;function u(p,d,g){g===void 0&&(g=0);var w=n(p,d,g);if(!w)return null;for(var y=0,b=0,I=w.length;b<I;++b){var z=w[b]-g;y+=z*z}return{score:y,indices:w}}e.matchSumOfSquares=u;function l(p,d,g){g===void 0&&(g=0);var w=n(p,d,g);if(!w)return null;for(var y=0,b=g-1,I=0,z=w.length;I<z;++I){var S=w[I];y+=S-b-1,b=S}return{score:y,indices:w}}e.matchSumOfDeltas=l;function v(p,d,g){for(var w=[],y=0,b=0,I=d.length;y<I;){for(var z=d[y],S=d[y];++y<I&&d[y]===S+1;)S++;b<z&&w.push(p.slice(b,z)),z<S+1&&w.push(g(p.slice(z,S+1))),b=S+1}return b<p.length&&w.push(p.slice(b)),w}e.highlight=v;function x(p,d){return p<d?-1:p>d?1:0}e.cmp=x})(ne||(ne={}));De=function(){function e(n,u){this._source=n,this._count=u}return e.prototype.iter=function(){return this},e.prototype.clone=function(){return new e(this._source.clone(),this._count)},e.prototype.next=function(){if(!(this._count<=0)){var n=this._source.next();if(n!==void 0)return this._count--,n}},e}(),Ve=function(){function e(n){this._source=n}return e.prototype.iter=function(){return this},e.prototype.clone=function(){return new e(this._source.map(function(n){return n.clone()}))},e.prototype.next=function(){for(var n=new Array(this._source.length),u=0,l=this._source.length;u<l;++u){var v=this._source[u].next();if(v===void 0)return;n[u]=v}return n},e}()});var oe,F,J,B,fe=Q(()=>{ee();oe=function(){function e(n){this._root=new F.LeafNode,this.cmp=n}return Object.defineProperty(e.prototype,"isEmpty",{get:function(){return this._root.size===0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._root.size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"first",{get:function(){var n=F.firstLeaf(this._root);return n.size>0?n.items[0]:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"last",{get:function(){var n=F.lastLeaf(this._root);return n.size>0?n.items[n.size-1]:void 0},enumerable:!0,configurable:!0}),e.prototype.iter=function(){return F.iterItems(this._root)},e.prototype.retro=function(){return F.retroItems(this._root)},e.prototype.slice=function(n,u){return F.sliceItems(this._root,n,u)},e.prototype.retroSlice=function(n,u){return F.retroSliceItems(this._root,n,u)},e.prototype.at=function(n){return F.itemAt(this._root,n)},e.prototype.has=function(n,u){return F.hasItem(this._root,n,u)},e.prototype.indexOf=function(n,u){return F.indexOf(this._root,n,u)},e.prototype.get=function(n,u){return F.getItem(this._root,n,u)},e.prototype.assign=function(n){this.clear(),this.update(n)},e.prototype.insert=function(n){var u=F.insertItem(this._root,n,this.cmp);return this._root=F.maybeSplitRoot(this._root),u},e.prototype.update=function(n){var u=this;Z(n,function(l){u.insert(l)})},e.prototype.delete=function(n,u){var l=F.deleteItem(this._root,n,u);return this._root=F.maybeExtractRoot(this._root),l},e.prototype.remove=function(n){var u=F.removeItem(this._root,n);return this._root=F.maybeExtractRoot(this._root),u},e.prototype.clear=function(){F.clear(this._root),this._root=new F.LeafNode},e}();(function(e){function n(u,l){var v=new e(l);return v.assign(u),v}e.from=n})(oe||(oe={}));(function(e){var n=function(){function t(){this.items=[],this.sizes=[],this.children=[]}return Object.defineProperty(t.prototype,"type",{get:function(){return 0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this.sizes[this.sizes.length-1]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this.children.length},enumerable:!0,configurable:!0}),t}();e.BranchNode=n;var u=function(){function t(){this.next=null,this.prev=null,this.items=[]}return Object.defineProperty(t.prototype,"type",{get:function(){return 1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this.items.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this.items.length},enumerable:!0,configurable:!0}),t}();e.LeafNode=u;function l(t){for(;t.type===0;)t=t.children[0];return t}e.firstLeaf=l;function v(t){for(;t.type===0;)t=t.children[t.children.length-1];return t}e.lastLeaf=v;function x(t){var f=l(t);return new P(f,0,-1)}e.iterItems=x;function p(t){var f=v(t);return new U(f,f.size-1,-1)}e.retroItems=p;function d(t,f,c){f===void 0?f=0:f<0?f=Math.max(0,f+t.size):f=Math.min(f,t.size),c===void 0?c=t.size:c<0?c=Math.max(0,c+t.size):c=Math.min(c,t.size);var _=Math.max(0,c-f);if(_===0)return Y();for(;t.type===0;){var m=s(t.sizes,f);m>0&&(f-=t.sizes[m-1]),t=t.children[m]}return new P(t,f,_)}e.sliceItems=d;function g(t,f,c){f===void 0?f=t.size-1:f<0?f=Math.max(-1,f+t.size):f=Math.min(f,t.size-1),c===void 0?c=-1:c<0?c=Math.max(-1,c+t.size):c=Math.min(c,t.size-1);var _=Math.max(0,f-c);if(_===0)return Y();for(;t.type===0;){var m=s(t.sizes,f);m>0&&(f-=t.sizes[m-1]),t=t.children[m]}return new U(t,f,_)}e.retroSliceItems=g;function w(t,f){if(f<0&&(f+=t.size),!(f<0||f>=t.size)){for(;t.type===0;){var c=s(t.sizes,f);c>0&&(f-=t.sizes[c-1]),t=t.children[c]}return t.items[f]}}e.itemAt=w;function y(t,f,c){for(;t.type===0;){var _=a(t.items,f,c);t=t.children[_]}var m=i(t.items,f,c);return m>=0}e.hasItem=y;function b(t,f,c){for(var _=0;t.type===0;){var m=a(t.items,f,c);m>0&&(_+=t.sizes[m-1]),t=t.children[m]}var L=i(t.items,f,c);return L>=0?_+L:-_+L}e.indexOf=b;function I(t,f,c){for(;t.type===0;){var _=a(t.items,f,c);t=t.children[_]}var m=i(t.items,f,c);return m>=0?t.items[m]:void 0}e.getItem=I;function z(t,f,c){if(t.type===1){var _=i(t.items,f,c),m;return _>=0?(m=t.items[_],t.items[_]=f):(m=void 0,R.insert(t.items,-_-1,f)),m}var L=a(t.items,f,c),k=t.children[L],W=k.size,E=z(k,f,c),A=k.size;if(t.items[L]=k.items[0],W===A)return E;if(k.width>j){var T=o(k);R.insert(t.children,L+1,T),R.insert(t.items,L+1,T.items[0])}return r(t,L),E}e.insertItem=z;function S(t,f,c){if(t.type===1){var _=i(t.items,f,c);return _<0?void 0:R.removeAt(t.items,_)}var m=a(t.items,f,c),L=t.children[m],k=L.size,W=S(L,f,c),E=L.size;return k===E||(t.items[m]=L.items[0],L.width<C&&(m=h(t,m)),r(t,m)),W}e.deleteItem=S;function H(t,f){if(f<0&&(f+=t.size),!(f<0||f>=t.size)){if(t.type===1)return R.removeAt(t.items,f);var c=s(t.sizes,f);c>0&&(f-=t.sizes[c]);var _=t.children[c],m=H(_,f);return t.items[c]=_.items[0],_.width<C&&(c=h(t,c)),r(t,c),m}}e.removeItem=H;function N(t){t.type===0?(Z(t.children,N),t.children.length=0,t.sizes.length=0,t.items.length=0):(t.items.length=0,t.next=null,t.prev=null)}e.clear=N;function $(t){if(t.width<=j)return t;var f=new n,c=o(t);return f.sizes[0]=t.size,f.sizes[1]=t.size+c.size,f.children[0]=t,f.children[1]=c,f.items[0]=t.items[0],f.items[1]=c.items[0],f}e.maybeSplitRoot=$;function G(t){if(t.type===1||t.children.length>1)return t;var f=t.children.pop();return N(t),f}e.maybeExtractRoot=G;var j=32,C=j>>1,P=function(){function t(f,c,_){this._node=f,this._index=c,this._count=_}return t.prototype.iter=function(){return this},t.prototype.clone=function(){return new t(this._node,this._index,this._count)},t.prototype.next=function(){if(!(this._node===null||this._count===0))return this._index>=this._node.size?(this._node=this._node.next,this._index=0,this.next()):(this._count>0&&this._count--,this._node.items[this._index++])},t}(),U=function(){function t(f,c,_){this._node=f,this._index=c,this._count=_}return t.prototype.iter=function(){return this},t.prototype.clone=function(){return new t(this._node,this._index,this._count)},t.prototype.next=function(){if(!(this._node===null||this._count===0))return this._index>=this._node.size&&(this._index=this._node.size-1),this._index<0?(this._node=this._node.prev,this._index=this._node?this._node.size-1:-1,this.next()):(this._count>0&&this._count--,this._node.items[this._index--])},t}();function s(t,f){for(var c=t.length,_=0;_<c;++_)if(t[_]>f)return _;return c-1}function a(t,f,c){for(var _=t.length,m=1;m<_;++m)if(c(t[m],f)>0)return m-1;return _-1}function i(t,f,c){for(var _=t.length,m=0;m<_;++m){var L=c(t[m],f);if(L===0)return m;if(L>0)return-m-1}return-_-1}function r(t,f){for(var c=t.sizes,_=t.children,m=f>0?c[f-1]:0,L=_.length;f<L;++f)m=c[f]=m+_[f].size;c.length=_.length}function o(t){if(t.type===1){for(var f=new u,c=t.items,_=f.items,m=C,L=c.length;m<L;++m)_.push(c[m]);return c.length=C,t.next&&(t.next.prev=f),f.next=t.next,f.prev=t,t.next=f,f}for(var k=new n,W=t.children,E=k.children,m=C,L=W.length;m<L;++m)E.push(W[m]);W.length=C;for(var A=t.items,T=k.items,m=C,L=A.length;m<L;++m)T.push(A[m]);return A.length=C,r(t,C),r(k,0),k}function h(t,f){var c,_,m,L,k,W,E=t.children[f],A=f===0?t.children[f+1]:t.children[f-1],T=f===0,K=E.type===1,q=A.width>C;if(K&&q&&T){var M=E,O=A;return M.items.push(O.items.shift()),t.items[f+1]=O.items[0],f}if(K&&q&&!T){var M=E,O=A;return M.items.unshift(O.items.pop()),t.items[f]=M.items[0],f-1}if(K&&!q&&T){var M=E,O=A;return(c=O.items).unshift.apply(c,M.items),R.removeAt(t.children,f),R.removeAt(t.items,f+1),M.prev&&(M.prev.next=O),O.prev=M.prev,N(M),f}if(K&&!q&&!T){var M=E,O=A;return(_=O.items).push.apply(_,M.items),R.removeAt(t.children,f),R.removeAt(t.items,f),M.next&&(M.next.prev=O),O.next=M.next,N(M),f-1}if(!K&&q&&T){var M=E,O=A;return M.children.push(O.children.shift()),M.items.push(O.items.shift()),t.items[f+1]=O.items[0],r(M,M.width-1),r(O,0),f}if(!K&&q&&!T){var M=E,O=A;return M.children.unshift(O.children.pop()),M.items.unshift(O.items.pop()),t.items[f]=M.items[0],r(M,0),r(O,O.width-1),f-1}if(!K&&!q&&T){var M=E,O=A;return(m=O.children).unshift.apply(m,M.children),(L=O.items).unshift.apply(L,M.items),R.removeAt(t.children,f),R.removeAt(t.items,f+1),r(O,0),M.children.length=0,N(M),f}if(!K&&!q&&!T){var M=E,O=A;return(k=O.children).push.apply(k,M.children),(W=O.items).push.apply(W,M.items),R.removeAt(t.children,f),R.removeAt(t.items,f),r(O,0),M.children.length=0,N(M),f-1}throw"unreachable"}})(F||(F={}));J=function(){function e(){this._first=null,this._last=null,this._size=0}return Object.defineProperty(e.prototype,"isEmpty",{get:function(){return this._size===0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"length",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"first",{get:function(){return this._first?this._first.value:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"last",{get:function(){return this._last?this._last.value:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"firstNode",{get:function(){return this._first},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lastNode",{get:function(){return this._last},enumerable:!0,configurable:!0}),e.prototype.iter=function(){return new e.ForwardValueIterator(this._first)},e.prototype.retro=function(){return new e.RetroValueIterator(this._last)},e.prototype.nodes=function(){return new e.ForwardNodeIterator(this._first)},e.prototype.retroNodes=function(){return new e.RetroNodeIterator(this._last)},e.prototype.assign=function(n){var u=this;this.clear(),Z(n,function(l){u.addLast(l)})},e.prototype.push=function(n){this.addLast(n)},e.prototype.pop=function(){return this.removeLast()},e.prototype.shift=function(n){this.addFirst(n)},e.prototype.unshift=function(){return this.removeFirst()},e.prototype.addFirst=function(n){var u=new B.LinkedListNode(this,n);return this._first?(u.next=this._first,this._first.prev=u,this._first=u):(this._first=u,this._last=u),this._size++,u},e.prototype.addLast=function(n){var u=new B.LinkedListNode(this,n);return this._last?(u.prev=this._last,this._last.next=u,this._last=u):(this._first=u,this._last=u),this._size++,u},e.prototype.insertBefore=function(n,u){if(!u||u===this._first)return this.addFirst(n);if(!(u instanceof B.LinkedListNode)||u.list!==this)throw new Error("Reference node is not owned by the list.");var l=new B.LinkedListNode(this,n),v=u,x=v.prev;return l.next=v,l.prev=x,v.prev=l,x.next=l,this._size++,l},e.prototype.insertAfter=function(n,u){if(!u||u===this._last)return this.addLast(n);if(!(u instanceof B.LinkedListNode)||u.list!==this)throw new Error("Reference node is not owned by the list.");var l=new B.LinkedListNode(this,n),v=u,x=v.next;return l.next=x,l.prev=v,v.next=l,x.prev=l,this._size++,l},e.prototype.removeFirst=function(){var n=this._first;if(n)return n===this._last?(this._first=null,this._last=null):(this._first=n.next,this._first.prev=null),n.list=null,n.next=null,n.prev=null,this._size--,n.value},e.prototype.removeLast=function(){var n=this._last;if(n)return n===this._first?(this._first=null,this._last=null):(this._last=n.prev,this._last.next=null),n.list=null,n.next=null,n.prev=null,this._size--,n.value},e.prototype.removeNode=function(n){if(!(n instanceof B.LinkedListNode)||n.list!==this)throw new Error("Node is not owned by the list.");var u=n;u===this._first&&u===this._last?(this._first=null,this._last=null):u===this._first?(this._first=u.next,this._first.prev=null):u===this._last?(this._last=u.prev,this._last.next=null):(u.next.prev=u.prev,u.prev.next=u.next),u.list=null,u.next=null,u.prev=null,this._size--},e.prototype.clear=function(){for(var n=this._first;n;){var u=n.next;n.list=null,n.prev=null,n.next=null,n=u}this._first=null,this._last=null,this._size=0},e}();(function(e){function n(p){var d=new e;return d.assign(p),d}e.from=n;var u=function(){function p(d){this._node=d}return p.prototype.iter=function(){return this},p.prototype.clone=function(){return new p(this._node)},p.prototype.next=function(){if(this._node){var d=this._node;return this._node=d.next,d.value}},p}();e.ForwardValueIterator=u;var l=function(){function p(d){this._node=d}return p.prototype.iter=function(){return this},p.prototype.clone=function(){return new p(this._node)},p.prototype.next=function(){if(this._node){var d=this._node;return this._node=d.prev,d.value}},p}();e.RetroValueIterator=l;var v=function(){function p(d){this._node=d}return p.prototype.iter=function(){return this},p.prototype.clone=function(){return new p(this._node)},p.prototype.next=function(){if(this._node){var d=this._node;return this._node=d.next,d}},p}();e.ForwardNodeIterator=v;var x=function(){function p(d){this._node=d}return p.prototype.iter=function(){return this},p.prototype.clone=function(){return new p(this._node)},p.prototype.next=function(){if(this._node){var d=this._node;return this._node=d.prev,d}},p}();e.RetroNodeIterator=x})(J||(J={}));(function(e){var n=function(){function u(l,v){this.list=null,this.next=null,this.prev=null,this.list=l,this.value=v}return u}();e.LinkedListNode=n})(B||(B={}))});function xe(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");te(e,n);function u(){this.constructor=e}e.prototype=n===null?Object.create(n):(u.prototype=n.prototype,new u)}var te,we,Ge,se,be=Q(()=>{ee();fe();te=function(e,n){return te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,l){u.__proto__=l}||function(u,l){for(var v in l)Object.prototype.hasOwnProperty.call(l,v)&&(u[v]=l[v])},te(e,n)};we=function(){function e(n){this.type=n}return Object.defineProperty(e.prototype,"isConflatable",{get:function(){return!1},enumerable:!0,configurable:!0}),e.prototype.conflate=function(n){return!1},e}(),Ge=function(e){xe(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}return Object.defineProperty(n.prototype,"isConflatable",{get:function(){return!0},enumerable:!0,configurable:!0}),n.prototype.conflate=function(u){return!0},n}(we);(function(e){function n(i,r){var o=y.get(i);if(!o||o.length===0){G(i,r);return}var h=re(ue(o),function(t){return t?$(t,i,r):!0});h&&G(i,r)}e.sendMessage=n;function u(i,r){if(!r.isConflatable){j(i,r);return}var o=ie(w,function(h){return h.handler!==i||!h.msg||h.msg.type!==r.type||!h.msg.isConflatable?!1:h.msg.conflate(r)});o||j(i,r)}e.postMessage=u;function l(i,r){var o=y.get(i);o&&o.indexOf(r)!==-1||(o?o.push(r):y.set(i,[r]))}e.installMessageHook=l;function v(i,r){var o=y.get(i);if(o){var h=o.indexOf(r);h!==-1&&(o[h]=null,P(o))}}e.removeMessageHook=v;function x(i){var r=y.get(i);r&&r.length>0&&(R.fill(r,null),P(r)),Z(w,function(o){o.handler===i&&(o.handler=null,o.msg=null)})}e.clearData=x;function p(){S||z===0||(N(z),S=!0,C(),S=!1)}e.flush=p;function d(){return I}e.getExceptionHandler=d;function g(i){var r=I;return I=i,r}e.setExceptionHandler=g;var w=new J,y=new WeakMap,b=new Set,I=function(i){console.error(i)},z=0,S=!1,H=function(){var i=typeof requestAnimationFrame=="function";return i?requestAnimationFrame:setImmediate}(),N=function(){var i=typeof cancelAnimationFrame=="function";return i?cancelAnimationFrame:clearImmediate}();function $(i,r,o){var h=!0;try{typeof i=="function"?h=i(r,o):h=i.messageHook(r,o)}catch(t){I(t)}return h}function G(i,r){try{i.processMessage(r)}catch(o){I(o)}}function j(i,r){w.addLast({handler:i,msg:r}),z===0&&(z=H(C))}function C(){if(z=0,!w.isEmpty){var i={handler:null,msg:null};for(w.addLast(i);;){var r=w.removeFirst();if(r===i)return;r.handler&&r.msg&&n(r.handler,r.msg)}}}function P(i){b.size===0&&H(U),b.add(i)}function U(){b.forEach(s),b.clear()}function s(i){R.removeAllWhere(i,a)}function a(i){return i===null}})(se||(se={}))});var ae,he,ce,le,V,Ie=Q(()=>{(function(e){function n(u){var l=document.body,v=function(x){x.preventDefault(),x.stopPropagation(),x.clipboardData.setData("text",u),l.removeEventListener("copy",v,!0)};l.addEventListener("copy",v,!0),document.execCommand("copy")}e.copyText=n})(ae||(ae={}));(function(e){function n(x){var p=window.getComputedStyle(x),d=parseFloat(p.borderTopWidth)||0,g=parseFloat(p.borderLeftWidth)||0,w=parseFloat(p.borderRightWidth)||0,y=parseFloat(p.borderBottomWidth)||0,b=parseFloat(p.paddingTop)||0,I=parseFloat(p.paddingLeft)||0,z=parseFloat(p.paddingRight)||0,S=parseFloat(p.paddingBottom)||0,H=g+I+z+w,N=d+b+S+y;return{borderTop:d,borderLeft:g,borderRight:w,borderBottom:y,paddingTop:b,paddingLeft:I,paddingRight:z,paddingBottom:S,horizontalSum:H,verticalSum:N}}e.boxSizing=n;function u(x){var p=window.getComputedStyle(x),d=parseFloat(p.minWidth)||0,g=parseFloat(p.minHeight)||0,w=parseFloat(p.maxWidth)||1/0,y=parseFloat(p.maxHeight)||1/0;return w=Math.max(d,w),y=Math.max(g,y),{minWidth:d,minHeight:g,maxWidth:w,maxHeight:y}}e.sizeLimits=u;function l(x,p,d){var g=x.getBoundingClientRect();return p>=g.left&&p<g.right&&d>=g.top&&d<g.bottom}e.hitTest=l;function v(x,p){var d=x.getBoundingClientRect(),g=p.getBoundingClientRect();if(!(g.top<=d.top&&g.bottom>=d.bottom)){if(g.top<d.top&&g.height<=d.height){x.scrollTop-=d.top-g.top;return}if(g.bottom>d.bottom&&g.height>=d.height){x.scrollTop-=d.top-g.top;return}if(g.top<d.top&&g.height>d.height){x.scrollTop-=d.bottom-g.bottom;return}if(g.bottom>d.bottom&&g.height<d.height){x.scrollTop-=d.bottom-g.bottom;return}}}e.scrollIntoViewIfNeeded=v})(he||(he={}));(function(e){e.IS_MAC=!!navigator.platform.match(/Mac/i),e.IS_WIN=!!navigator.platform.match(/Win/i),e.IS_IE=/Trident/.test(navigator.userAgent),e.IS_EDGE=/Edge/.test(navigator.userAgent);function n(u){return e.IS_MAC?u.metaKey:u.ctrlKey}e.accelKey=n})(ce||(ce={}));(function(e){function n(v){if(v in V.specificityCache)return V.specificityCache[v];var x=V.calculateSingle(v);return V.specificityCache[v]=x}e.calculateSpecificity=n;function u(v){if(v in V.validityCache)return V.validityCache[v];var x=!0;try{V.testElem.querySelector(v)}catch{x=!1}return V.validityCache[v]=x}e.isValid=u;function l(v,x){return V.protoMatchFunc.call(v,x)}e.matches=l})(le||(le={}));(function(e){e.specificityCache=Object.create(null),e.validityCache=Object.create(null),e.testElem=document.createElement("div"),e.protoMatchFunc=function(){var y=Element.prototype;return y.matches||y.matchesSelector||y.mozMatchesSelector||y.msMatchesSelector||y.oMatchesSelector||y.webkitMatchesSelector||function(b){var I=this,z=I.ownerDocument?I.ownerDocument.querySelectorAll(b):[];return Array.prototype.indexOf.call(z,I)!==-1}}();function n(y){y=y.split(",",1)[0];var b=0,I=0,z=0;function S(H){var N=y.match(H);return N===null?!1:(y=y.slice(N[0].length),!0)}for(y=y.replace(w," $1 ");y.length>0;){if(S(u)){b++;continue}if(S(l)){I++;continue}if(S(v)){I++;continue}if(S(p)){z++;continue}if(S(d)){I++;continue}if(S(x)){z++;continue}if(!S(g))return 0}return b=Math.min(b,255),I=Math.min(I,255),z=Math.min(z,255),b<<16|I<<8|z}e.calculateSingle=n;var u=/^#[^\s\+>~#\.\[:]+/,l=/^\.[^\s\+>~#\.\[:]+/,v=/^\[[^\]]+\]/,x=/^[^\s\+>~#\.\[:]+/,p=/^(::[^\s\+>~#\.\[:]+|:first-line|:first-letter|:before|:after)/,d=/^:[^\s\+>~#\.\[:]+/,g=/^[\s\+>~\*]+/,w=/:not\(([^\)]+)\)/g})(V||(V={}))});export{R as a,D as b,Z as c,Me as d,Fe as e,de as f,Y as g,Re as h,ke as i,Ee as j,Ce as k,Te as l,He as m,ne as n,ee as o,we as p,Ge as q,se as r,be as s,he as t,ce as u,le as v,Ie as w};
/*! Bundled license information:

@lumino/messaging/dist/index.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
