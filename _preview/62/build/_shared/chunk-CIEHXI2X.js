import{c as a}from"/erad2024/_preview/62/build/_shared/chunk-2NH4LW52.js";var i=a((s,r)=>{r.exports=t;t.displayName="maxscript";t.aliases=[];function t(n){(function(o){var e=/\b(?:about|and|animate|as|at|attributes|by|case|catch|collect|continue|coordsys|do|else|exit|fn|for|from|function|global|if|in|local|macroscript|mapped|max|not|of|off|on|or|parameters|persistent|plugin|rcmenu|return|rollout|set|struct|then|throw|to|tool|try|undo|utility|when|where|while|with)\b/i;o.languages.maxscript={comment:{pattern:/\/\*[\s\S]*?(?:\*\/|$)|--.*/,greedy:!0},string:{pattern:/(^|[^"\\@])(?:"(?:[^"\\]|\\[\s\S])*"|@"[^"]*")/,lookbehind:!0,greedy:!0},path:{pattern:/\$(?:[\w/\\.*?]|'[^']*')*/,greedy:!0,alias:"string"},"function-call":{pattern:RegExp("((?:"+(/^/.source+"|"+/[;=<>+\-*/^({\[]/.source+"|"+/\b(?:and|by|case|catch|collect|do|else|if|in|not|or|return|then|to|try|where|while|with)\b/.source)+")[ 	]*)(?!"+e.source+")"+/[a-z_]\w*\b/.source+"(?=[ 	]*(?:"+("(?!"+e.source+")"+/[a-z_]/.source+"|"+/\d|-\.?\d/.source+"|"+/[({'"$@#?]/.source)+"))","im"),lookbehind:!0,greedy:!0,alias:"function"},"function-definition":{pattern:/(\b(?:fn|function)\s+)\w+\b/i,lookbehind:!0,alias:"function"},argument:{pattern:/\b[a-z_]\w*(?=:)/i,alias:"attr-name"},keyword:e,boolean:/\b(?:false|true)\b/,time:{pattern:/(^|[^\w.])(?:(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[eEdD][+-]\d+|[LP])?[msft])+|\d+:\d+(?:\.\d*)?)(?![\w.:])/,lookbehind:!0,alias:"number"},number:[{pattern:/(^|[^\w.])(?:(?:\d+(?:\.\d*)?|\.\d+)(?:[eEdD][+-]\d+|[LP])?|0x[a-fA-F0-9]+)(?![\w.:])/,lookbehind:!0},/\b(?:e|pi)\b/],constant:/\b(?:dontcollect|ok|silentValue|undefined|unsupplied)\b/,color:{pattern:/\b(?:black|blue|brown|gray|green|orange|red|white|yellow)\b/i,alias:"constant"},operator:/[-+*/<>=!]=?|[&^?]|#(?!\()/,punctuation:/[()\[\]{}.:,;]|#(?=\()|\\$/m}})(n)}});export{i as a};
