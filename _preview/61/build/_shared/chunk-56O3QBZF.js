import{c as s}from"/erad2024/_preview/61/build/_shared/chunk-2NH4LW52.js";var u=s((p,i)=>{i.exports=t;t.displayName="jq";t.aliases=[];function t(a){(function(o){var n=/\\\((?:[^()]|\([^()]*\))*\)/.source,r=RegExp(/(^|[^\\])"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g,function(){return n})),e={interpolation:{pattern:RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+n),lookbehind:!0,inside:{content:{pattern:/^(\\\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:null},punctuation:/^\\\(|\)$/}}},l=o.languages.jq={comment:/#.*/,property:{pattern:RegExp(r.source+/(?=\s*:(?!:))/.source),lookbehind:!0,greedy:!0,inside:e},string:{pattern:r,lookbehind:!0,greedy:!0,inside:e},function:{pattern:/(\bdef\s+)[a-z_]\w+/i,lookbehind:!0},variable:/\B\$\w+/,"property-literal":{pattern:/\b[a-z_]\w*(?=\s*:(?!:))/i,alias:"property"},keyword:/\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,boolean:/\b(?:false|true)\b/,number:/(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,operator:[{pattern:/\|=?/,alias:"pipe"},/\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|not|or)\b/],"c-style-function":{pattern:/\b[a-z_]\w*(?=\s*\()/i,alias:"function"},punctuation:/::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,dot:{pattern:/\./,alias:"important"}};e.interpolation.inside.content.inside=l})(a)}});export{u as a};
