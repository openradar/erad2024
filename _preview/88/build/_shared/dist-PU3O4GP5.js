import{d as y,e as d}from"/erad2024/_preview/88/build/_shared/chunk-EEG6LHX7.js";import"/erad2024/_preview/88/build/_shared/chunk-GUCIBHGO.js";import"/erad2024/_preview/88/build/_shared/chunk-2NH4LW52.js";var v={name:"exercise",alias:["exercise-start"],arg:{type:"myst"},options:{label:{type:String},class:{type:String},nonumber:{type:Boolean},hidden:{type:Boolean}},body:{type:"myst"},run(e){var i,n,o,t,s;let r=[];e.arg&&r.push({type:"admonitionTitle",children:e.arg}),e.body&&r.push(...e.body);let l=(n=(i=e.options)===null||i===void 0?void 0:i.nonumber)!==null&&n!==void 0?n:!1,c=l?void 0:`exercise-${y()}`,p=((o=e.options)===null||o===void 0?void 0:o.label)||c,{label:u,identifier:m}=d(p)||{},a={type:"exercise",label:u,identifier:m,class:(t=e.options)===null||t===void 0?void 0:t.class,hidden:(s=e.options)===null||s===void 0?void 0:s.hidden,enumerated:!l,children:r};return e.name.endsWith("-start")&&(a.gate="start"),[a]}},b={name:"solution",alias:["solution-start"],arg:{type:String,required:!0},options:{label:{type:String},class:{type:String},hidden:{type:Boolean}},body:{type:"myst"},run(e){var i,n,o;let t=[];if(e.arg){let{label:p,identifier:u}=d(e.arg)||{};t.push({type:"admonitionTitle",children:[{type:"text",value:"Solution to "},{type:"crossReference",label:p,identifier:u}]})}e.body&&t.push(...e.body);let s=(i=e.options)===null||i===void 0?void 0:i.label,{label:r,identifier:l}=d(s)||{},c={type:"solution",label:r,identifier:l,class:(n=e.options)===null||n===void 0?void 0:n.class,hidden:(o=e.options)===null||o===void 0?void 0:o.hidden,children:t};return e.name.endsWith("-start")&&(c.gate="start"),[c]}},x={name:"solution-end",run:()=>[{type:"solution",gate:"end"}]},h={name:"exercise-end",run:()=>[{type:"exercise",gate:"end"}]},g=[v,h,b,x];export{v as exerciseDirective,g as exerciseDirectives,b as solutionDirective};
