import{a as n}from"/erad2024/_preview/110/build/_shared/chunk-N5W7TVN3.js";import{a as l}from"/erad2024/_preview/110/build/_shared/chunk-ZOXRFJWB.js";import{c as p}from"/erad2024/_preview/110/build/_shared/chunk-2NH4LW52.js";var d=p((u,t)=>{var s=n(),c=l();t.exports=r;r.displayName="phpdoc";r.aliases=[];function r(a){a.register(s),a.register(c),function(e){var o=/(?:\b[a-zA-Z]\w*|[|\\[\]])+/.source;e.languages.phpdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp("(@(?:global|param|property(?:-read|-write)?|var)\\s+(?:"+o+"\\s+)?)\\$\\w+"),lookbehind:!0}}),e.languages.insertBefore("phpdoc","keyword",{"class-name":[{pattern:RegExp("(@(?:global|package|param|property(?:-read|-write)?|return|subpackage|throws|var)\\s+)"+o),lookbehind:!0,inside:{keyword:/\b(?:array|bool|boolean|callback|double|false|float|int|integer|mixed|null|object|resource|self|string|true|void)\b/,punctuation:/[|\\[\]()]/}}]}),e.languages.javadoclike.addSupport("php",e.languages.phpdoc)}(a)}});export{d as a};
