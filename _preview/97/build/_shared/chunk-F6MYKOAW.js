import{c as n}from"/erad2024/_preview/97/build/_shared/chunk-2NH4LW52.js";var i=n((a,t)=>{t.exports=e;e.displayName="nim";e.aliases=[];function e(r){r.languages.nim={comment:{pattern:/#.*/,greedy:!0},string:{pattern:/(?:\b(?!\d)(?:\w|\\x[89a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")/,greedy:!0},char:{pattern:/'(?:\\(?:\d+|x[\da-fA-F]{0,2}|.)|[^'])'/,greedy:!0},function:{pattern:/(?:(?!\d)(?:\w|\\x[89a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,greedy:!0,inside:{operator:/\*$/}},identifier:{pattern:/`[^`\r\n]+`/,greedy:!0,inside:{punctuation:/`/}},number:/\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,keyword:/\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,operator:{pattern:/(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|in|is|isnot|mod|not|notin|of|or|shl|shr|xor)\b)/m,lookbehind:!0},punctuation:/[({\[]\.|\.[)}\]]|[`(){}\[\],:]/}}});export{i as a};
