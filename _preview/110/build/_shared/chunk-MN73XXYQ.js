import{c as p}from"/erad2024/_preview/110/build/_shared/chunk-2NH4LW52.js";var u=p((o,i)=>{i.exports=r;r.displayName="t4Templating";r.aliases=[];function r(l){(function(s){function n(e,t,a){return{pattern:RegExp("<#"+e+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+e+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:t,alias:a}}}}function c(e){var t=s.languages[e],a="language-"+e;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:n("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:n("=",t,a),"class-feature":n("\\+",t,a),standard:n("",t,a)}}}}s.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:c})})(l)}});export{u as a};
