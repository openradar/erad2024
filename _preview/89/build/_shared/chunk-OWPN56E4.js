import{a as p}from"/erad2024/_preview/89/build/_shared/chunk-5JQ5LNKE.js";import{c as g}from"/erad2024/_preview/89/build/_shared/chunk-2NH4LW52.js";var b=g((c,u)=>{var d=p();u.exports=a;a.displayName="haml";a.aliases=[];function a(r){r.register(d),function(e){e.languages.haml={"multiline-comment":{pattern:/((?:^|\r?\n|\r)([\t ]*))(?:\/|-#).*(?:(?:\r?\n|\r)\2[\t ].+)*/,lookbehind:!0,alias:"comment"},"multiline-code":[{pattern:/((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*,[\t ]*(?:(?:\r?\n|\r)\2[\t ].*,[\t ]*)*(?:(?:\r?\n|\r)\2[\t ].+)/,lookbehind:!0,inside:e.languages.ruby},{pattern:/((?:^|\r?\n|\r)([\t ]*)(?:[~-]|[&!]?=)).*\|[\t ]*(?:(?:\r?\n|\r)\2[\t ].*\|[\t ]*)*/,lookbehind:!0,inside:e.languages.ruby}],filter:{pattern:/((?:^|\r?\n|\r)([\t ]*)):[\w-]+(?:(?:\r?\n|\r)(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/,lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"symbol"}}},markup:{pattern:/((?:^|\r?\n|\r)[\t ]*)<.+/,lookbehind:!0,inside:e.languages.markup},doctype:{pattern:/((?:^|\r?\n|\r)[\t ]*)!!!(?: .+)?/,lookbehind:!0},tag:{pattern:/((?:^|\r?\n|\r)[\t ]*)[%.#][\w\-#.]*[\w\-](?:\([^)]+\)|\{(?:\{[^}]+\}|[^{}])+\}|\[[^\]]+\])*[\/<>]*/,lookbehind:!0,inside:{attributes:[{pattern:/(^|[^#])\{(?:\{[^}]+\}|[^{}])+\}/,lookbehind:!0,inside:e.languages.ruby},{pattern:/\([^)]+\)/,inside:{"attr-value":{pattern:/(=\s*)(?:"(?:\\.|[^\\"\r\n])*"|[^)\s]+)/,lookbehind:!0},"attr-name":/[\w:-]+(?=\s*!?=|\s*[,)])/,punctuation:/[=(),]/}},{pattern:/\[[^\]]+\]/,inside:e.languages.ruby}],punctuation:/[<>]/}},code:{pattern:/((?:^|\r?\n|\r)[\t ]*(?:[~-]|[&!]?=)).+/,lookbehind:!0,inside:e.languages.ruby},interpolation:{pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"punctuation"},ruby:{pattern:/[\s\S]+/,inside:e.languages.ruby}}},punctuation:{pattern:/((?:^|\r?\n|\r)[\t ]*)[~=\-&!]+/,lookbehind:!0}};for(var s="((?:^|\\r?\\n|\\r)([\\t ]*)):{{filter_name}}(?:(?:\\r?\\n|\\r)(?:\\2[\\t ].+|\\s*?(?=\\r?\\n|\\r)))+",i=["css",{filter:"coffee",language:"coffeescript"},"erb","javascript","less","markdown","ruby","scss","textile"],l={},n=0,o=i.length;n<o;n++){var t=i[n];t=typeof t=="string"?{filter:t,language:t}:t,e.languages[t.language]&&(l["filter-"+t.filter]={pattern:RegExp(s.replace("{{filter_name}}",function(){return t.filter})),lookbehind:!0,inside:{"filter-name":{pattern:/^:[\w-]+/,alias:"symbol"},text:{pattern:/[\s\S]+/,alias:[t.language,"language-"+t.language],inside:e.languages[t.language]}}})}e.languages.insertBefore("haml","filter",l)}(r)}});export{b as a};
