import{a as r}from"/erad2024/_preview/64/build/_shared/chunk-M7DUWZ4C.js";import{c as a}from"/erad2024/_preview/64/build/_shared/chunk-2NH4LW52.js";var s=a((o,t)=>{var n=r();t.exports=i;i.displayName="idris";i.aliases=["idr"];function i(e){e.register(n),e.languages.idris=e.languages.extend("haskell",{comment:{pattern:/(?:(?:--|\|\|\|).*$|\{-[\s\S]*?-\})/m},keyword:/\b(?:Type|case|class|codata|constructor|corecord|data|do|dsl|else|export|if|implementation|implicit|import|impossible|in|infix|infixl|infixr|instance|interface|let|module|mutual|namespace|of|parameters|partial|postulate|private|proof|public|quoteGoal|record|rewrite|syntax|then|total|using|where|with)\b/,builtin:void 0}),e.languages.insertBefore("idris","keyword",{"import-statement":{pattern:/(^\s*import\s+)(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*/m,lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.idr=e.languages.idris}});export{s as a};
