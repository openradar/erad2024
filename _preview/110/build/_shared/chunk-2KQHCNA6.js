import{c as t}from"/erad2024/_preview/110/build/_shared/chunk-2NH4LW52.js";var s=t((b,r)=>{r.exports=a;a.displayName="birb";a.aliases=[];function a(e){e.languages.birb=e.languages.extend("clike",{string:{pattern:/r?("|')(?:\\.|(?!\1)[^\\])*\1/,greedy:!0},"class-name":[/\b[A-Z](?:[\d_]*[a-zA-Z]\w*)?\b/,/\b(?:[A-Z]\w*|(?!(?:var|void)\b)[a-z]\w*)(?=\s+\w+\s*[;,=()])/],keyword:/\b(?:assert|break|case|class|const|default|else|enum|final|follows|for|grab|if|nest|new|next|noSeeb|return|static|switch|throw|var|void|while)\b/,operator:/\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?|:/,variable:/\b[a-z_]\w*\b/}),e.languages.insertBefore("birb","function",{metadata:{pattern:/<\w+>/,greedy:!0,alias:"symbol"}})}});export{s as a};
