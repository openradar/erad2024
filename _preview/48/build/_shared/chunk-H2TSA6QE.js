import{a as o}from"/erad2024/_preview/48/build/_shared/chunk-3MZURCDM.js";import{c as l}from"/erad2024/_preview/48/build/_shared/chunk-2NH4LW52.js";var u=l((b,s)=>{var d=o();s.exports=n;n.displayName="handlebars";n.aliases=["hbs"];function n(t){t.register(d),function(a){a.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},a.hooks.add("before-tokenize",function(e){var r=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;a.languages["markup-templating"].buildPlaceholders(e,"handlebars",r)}),a.hooks.add("after-tokenize",function(e){a.languages["markup-templating"].tokenizePlaceholders(e,"handlebars")}),a.languages.hbs=a.languages.handlebars}(t)}});export{u as a};
