import{c as n}from"/erad2024/_preview/111/build/_shared/chunk-2NH4LW52.js";var r=n((l,t)=>{t.exports=a;a.displayName="excelFormula";a.aliases=[];function a(e){e.languages["excel-formula"]={comment:{pattern:/(\bN\(\s*)"(?:[^"]|"")*"(?=\s*\))/i,lookbehind:!0,greedy:!0},string:{pattern:/"(?:[^"]|"")*"(?!")/,greedy:!0},reference:{pattern:/(?:'[^']*'|(?:[^\s()[\]{}<>*?"';,$&]*\[[^^\s()[\]{}<>*?"']+\])?\w+)!/,greedy:!0,alias:"string",inside:{operator:/!$/,punctuation:/'/,sheet:{pattern:/[^[\]]+$/,alias:"function"},file:{pattern:/\[[^[\]]+\]$/,inside:{punctuation:/[[\]]/}},path:/[\s\S]+/}},"function-name":{pattern:/\b[A-Z]\w*(?=\()/i,alias:"keyword"},range:{pattern:/\$?\b(?:[A-Z]+\$?\d+:\$?[A-Z]+\$?\d+|[A-Z]+:\$?[A-Z]+|\d+:\$?\d+)\b/i,alias:"property",inside:{operator:/:/,cell:/\$?[A-Z]+\$?\d+/i,column:/\$?[A-Z]+/i,row:/\$?\d+/}},cell:{pattern:/\b[A-Z]+\d+\b|\$[A-Za-z]+\$?\d+\b|\b[A-Za-z]+\$\d+\b/,alias:"property"},number:/(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[+-]?\d+)?\b/i,boolean:/\b(?:FALSE|TRUE)\b/i,operator:/[-+*/^%=&,]|<[=>]?|>=?/,punctuation:/[[\]();{}|]/},e.languages.xlsx=e.languages.xls=e.languages["excel-formula"]}});export{r as a};
