import{c as u}from"/erad2024/_preview/83/build/_shared/chunk-2NH4LW52.js";var b=u((l,a)=>{a.exports=t;t.displayName="promql";t.aliases=[];function t(n){(function(r){var o=["sum","min","max","avg","group","stddev","stdvar","count","count_values","bottomk","topk","quantile"],e=["on","ignoring","group_right","group_left","by","without"],i=["offset"],s=o.concat(e,i);r.languages.promql={comment:{pattern:/(^[ \t]*)#.*/m,lookbehind:!0},"vector-match":{pattern:new RegExp("((?:"+e.join("|")+")\\s*)\\([^)]*\\)"),lookbehind:!0,inside:{"label-key":{pattern:/\b[^,]+\b/,alias:"attr-name"},punctuation:/[(),]/}},"context-labels":{pattern:/\{[^{}]*\}/,inside:{"label-key":{pattern:/\b[a-z_]\w*(?=\s*(?:=|![=~]))/,alias:"attr-name"},"label-value":{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0,alias:"attr-value"},punctuation:/\{|\}|=~?|![=~]|,/}},"context-range":[{pattern:/\[[\w\s:]+\]/,inside:{punctuation:/\[|\]|:/,"range-duration":{pattern:/\b(?:\d+(?:[smhdwy]|ms))+\b/i,alias:"number"}}},{pattern:/(\boffset\s+)\w+/,lookbehind:!0,inside:{"range-duration":{pattern:/\b(?:\d+(?:[smhdwy]|ms))+\b/i,alias:"number"}}}],keyword:new RegExp("\\b(?:"+s.join("|")+")\\b","i"),function:/\b[a-z_]\w*(?=\s*\()/i,number:/[-+]?(?:(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[-+]?\d+)?\b|\b(?:0x[0-9a-f]+|nan|inf)\b)/i,operator:/[\^*/%+-]|==|!=|<=|<|>=|>|\b(?:and|or|unless)\b/i,punctuation:/[{};()`,.[\]]/}})(n)}});export{b as a};
