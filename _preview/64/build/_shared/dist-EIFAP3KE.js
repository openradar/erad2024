import"/erad2024/_preview/64/build/_shared/chunk-2NH4LW52.js";var n={name:"tab-set",alias:["tabSet"],options:{class:{type:String}},body:{type:"myst"},run(t){var e;return[{type:"tabSet",class:(e=t.options)===null||e===void 0?void 0:e.class,children:t.body||[]}]}},s={name:"tab-item",alias:["tabItem","tab"],arg:{type:String},options:{sync:{type:String},selected:{type:Boolean}},body:{type:"myst"},run(t){var e,o,i;return[{type:"tabItem",title:(e=t.arg)!==null&&e!==void 0?e:"Tab Title",sync:(o=t.options)===null||o===void 0?void 0:o.sync,selected:(i=t.options)===null||i===void 0?void 0:i.selected,children:t.body||[]}]}},l=[n,s];export{l as tabDirectives,s as tabItemDirective,n as tabSetDirective};
