import{c as s}from"/erad2024/_preview/96/build/_shared/chunk-2NH4LW52.js";var i=s((g,r)=>{r.exports=n;n.displayName="groovy";n.aliases=[];function n(e){e.languages.groovy=e.languages.extend("clike",{string:[{pattern:/("""|''')(?:[^\\]|\\[\s\S])*?\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,greedy:!0},{pattern:/(["'/])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0}],keyword:/\b(?:abstract|as|assert|boolean|break|byte|case|catch|char|class|const|continue|def|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,number:/\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,operator:{pattern:/(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,lookbehind:!0},punctuation:/\.+|[{}[\];(),:$]/}),e.languages.insertBefore("groovy","string",{shebang:{pattern:/#!.+/,alias:"comment"}}),e.languages.insertBefore("groovy","punctuation",{"spock-block":/\b(?:and|cleanup|expect|given|setup|then|when|where):/}),e.languages.insertBefore("groovy","function",{annotation:{pattern:/(^|[^.])@\w+/,lookbehind:!0,alias:"punctuation"}}),e.hooks.add("wrap",function(t){if(t.language==="groovy"&&t.type==="string"){var a=t.content.value[0];if(a!="'"){var o=/([^\\])(?:\$(?:\{.*?\}|[\w.]+))/;a==="$"&&(o=/([^\$])(?:\$(?:\{.*?\}|[\w.]+))/),t.content.value=t.content.value.replace(/&lt;/g,"<").replace(/&amp;/g,"&"),t.content=e.highlight(t.content.value,{expression:{pattern:o,lookbehind:!0,inside:e.languages.groovy}}),t.classes.push(a==="/"?"regex":"gstring")}}})}});export{i as a};
