import{a as i}from"/erad2024/_preview/104/build/_shared/chunk-H6WH3AJF.js";import{a as o}from"/erad2024/_preview/104/build/_shared/chunk-3MZURCDM.js";import{c as r}from"/erad2024/_preview/104/build/_shared/chunk-2NH4LW52.js";var p=r((c,n)=>{var g=i(),s=o();n.exports=u;u.displayName="etlua";u.aliases=[];function u(a){a.register(g),a.register(s),function(e){e.languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:e.languages.lua}},e.hooks.add("before-tokenize",function(t){var l=/<%[\s\S]+?%>/g;e.languages["markup-templating"].buildPlaceholders(t,"etlua",l)}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"etlua")})}(a)}});export{p as a};
