import{c as u}from"/erad2024/_preview/74/build/_shared/chunk-2NH4LW52.js";var d=u((g,s)=>{s.exports=e;e.displayName="regex";e.aliases=[];function e(i){(function(p){var t={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},a=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,c={pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},o={pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},r="(?:[^\\\\-]|"+a.source+")",l=RegExp(r+"-"+r),n={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};p.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:l,inside:{escape:a,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":t,"char-set":o,escape:a}},"special-escape":t,"char-set":c,backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":n}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:a,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":n}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}})(i)}});export{d as a};
