import"/erad2024/_preview/69/build/_shared/chunk-2NH4LW52.js";var f=/((?<before>[\s\S]*?)\s+){0,1}\^\^\^(\s+(?<after>[\s\S]*)){0,1}/,g={name:"card",alias:["grid-item-card"],arg:{type:"myst"},options:{link:{type:String},header:{type:"myst"},footer:{type:"myst"}},body:{type:"myst",required:!0},run(s){let{link:o,header:t,footer:r}=s.options||{},e,l,n;if(t||r)e=t?[{type:"paragraph",children:t}]:[],l=s.body,n=r?[{type:"paragraph",children:r}]:[];else{let[a,i]=d(s.body);e=i.length?a:[];let u=i.length?i:a;[l,n]=y(u)}let p=[];return e.length&&p.push({type:"header",children:e}),s.arg&&p.push({type:"cardTitle",children:s.arg}),p.push(...l),n.length&&p.push({type:"footer",children:n}),[{type:"card",url:o,children:p}]}};function c(s){var o;let t=[],r=[],e=!1;return(o=s.children)===null||o===void 0||o.forEach(n=>{var p;if(e){r.push(n);return}if(n.type!=="text"||!n.value){t.push(n);return}let a=n.value,i=f.exec(a);if(!i){t.push(n);return}e=!0;let{before:u,after:h}=(p=i.groups)!==null&&p!==void 0?p:{};u&&t.push({type:"text",value:u}),h&&r.push({type:"text",value:h})}),{before:t.length?{...s,children:t}:null,after:r.length?{...s,children:r}:null,post:e}}function d(s){let o=[],t=[],r=!1;return s.forEach(e=>{if(r)t.push(e);else if(e.type!=="paragraph")o.push(e);else{let l=c(e),{before:n,after:p}=l;r=l.post,n&&o.push(n),p&&t.push(p)}}),[o,t]}function y(s){let o=[],t=[],r=!1;return s.forEach(e=>{r?t.push(e):e.type!=="blockBreak"?o.push(e):r=!0}),[o,t]}export{g as cardDirective,c as splitParagraphNode};
