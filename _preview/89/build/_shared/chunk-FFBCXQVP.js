import{c as l}from"/erad2024/_preview/89/build/_shared/chunk-2NH4LW52.js";var p=l((b,o)=>{o.exports=t;t.displayName="pascaligo";t.aliases=[];function t(a){(function(s){var u=/\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/.source,n=/(?:\b\w+(?:<braces>)?|<braces>)/.source.replace(/<braces>/g,function(){return u}),r=s.languages.pascaligo={comment:/\(\*[\s\S]+?\*\)|\/\/.*/,string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,greedy:!0},"class-name":[{pattern:RegExp(/(\btype\s+\w+\s+is\s+)<type>/.source.replace(/<type>/g,function(){return n}),"i"),lookbehind:!0,inside:null},{pattern:RegExp(/<type>(?=\s+is\b)/.source.replace(/<type>/g,function(){return n}),"i"),inside:null},{pattern:RegExp(/(:\s*)<type>/.source.replace(/<type>/g,function(){return n})),lookbehind:!0,inside:null}],keyword:{pattern:/(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,lookbehind:!0},boolean:{pattern:/(^|[^&])\b(?:False|True)\b/i,lookbehind:!0},builtin:{pattern:/(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,lookbehind:!0},function:/\b\w+(?=\s*\()/,number:[/%[01]+|&[0-7]+|\$[a-f\d]+/i,/\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i],operator:/->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,punctuation:/\(\.|\.\)|[()\[\]:;,.{}]/},c=["comment","keyword","builtin","operator","punctuation"].reduce(function(e,i){return e[i]=r[i],e},{});r["class-name"].forEach(function(e){e.inside=c})})(a)}});export{p as a};
