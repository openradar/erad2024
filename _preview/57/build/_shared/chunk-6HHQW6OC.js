import{a as i}from"/erad2024/_preview/57/build/_shared/chunk-RRGKVQYH.js";import{c as r}from"/erad2024/_preview/57/build/_shared/chunk-2NH4LW52.js";var s=r((l,e)=>{var n=i();e.exports=t;t.displayName="tap";t.aliases=[];function t(a){a.register(n),a.languages.tap={fail:/not ok[^#{\n\r]*/,pass:/ok[^#{\n\r]*/,pragma:/pragma [+-][a-z]+/,bailout:/bail out!.*/i,version:/TAP version \d+/i,plan:/\b\d+\.\.\d+(?: +#.*)?/,subtest:{pattern:/# Subtest(?:: .*)?/,greedy:!0},punctuation:/[{}]/,directive:/#.*/,yamlish:{pattern:/(^[ \t]*)---[\s\S]*?[\r\n][ \t]*\.\.\.$/m,lookbehind:!0,inside:a.languages.yaml,alias:"language-yaml"}}}});export{s as a};
