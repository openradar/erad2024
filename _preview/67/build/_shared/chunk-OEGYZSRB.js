import{a as u}from"/erad2024/_preview/67/build/_shared/chunk-3MZURCDM.js";import{c as l}from"/erad2024/_preview/67/build/_shared/chunk-2NH4LW52.js";var i=l((r,s)=>{var o=u();s.exports=t;t.displayName="ejs";t.aliases=["eta"];function t(n){n.register(o),function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",function(a){var g=/<%(?!%)[\s\S]+?%>/g;e.languages["markup-templating"].buildPlaceholders(a,"ejs",g)}),e.hooks.add("after-tokenize",function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"ejs")}),e.languages.eta=e.languages.ejs}(n)}});export{i as a};
