import{a as s}from"/erad2024/_preview/69/build/_shared/chunk-5JQ5LNKE.js";import{c as r}from"/erad2024/_preview/69/build/_shared/chunk-2NH4LW52.js";var u=r((o,n)=>{var i=s();n.exports=t;t.displayName="crystal";t.aliases=[];function t(a){a.register(i),function(e){e.languages.crystal=e.languages.extend("ruby",{keyword:[/\b(?:__DIR__|__END_LINE__|__FILE__|__LINE__|abstract|alias|annotation|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|ifdef|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|ptr|require|rescue|return|select|self|sizeof|struct|super|then|type|typeof|undef|uninitialized|union|unless|until|when|while|with|yield)\b/,{pattern:/(\.\s*)(?:is_a|responds_to)\?/,lookbehind:!0}],number:/\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/,operator:[/->/,e.languages.ruby.operator],punctuation:/[(){}[\].,;\\]/}),e.languages.insertBefore("crystal","string-literal",{attribute:{pattern:/@\[.*?\]/,inside:{delimiter:{pattern:/^@\[|\]$/,alias:"punctuation"},attribute:{pattern:/^(\s*)\w+/,lookbehind:!0,alias:"class-name"},args:{pattern:/\S(?:[\s\S]*\S)?/,inside:e.languages.crystal}}},expansion:{pattern:/\{(?:\{.*?\}|%.*?%)\}/,inside:{content:{pattern:/^(\{.)[\s\S]+(?=.\}$)/,lookbehind:!0,inside:e.languages.crystal},delimiter:{pattern:/^\{[\{%]|[\}%]\}$/,alias:"operator"}}},char:{pattern:/'(?:[^\\\r\n]{1,2}|\\(?:.|u(?:[A-Fa-f0-9]{1,4}|\{[A-Fa-f0-9]{1,6}\})))'/,greedy:!0}})}(a)}});export{u as a};
