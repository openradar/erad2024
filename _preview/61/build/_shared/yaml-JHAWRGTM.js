import{c as u}from"/erad2024/_preview/61/build/_shared/chunk-2NH4LW52.js";var T=u((S,l)=>{function _(e){var n="true false yes no null",a="[\\w#;/?:@&=+$,.~*'()[\\]]+",E={className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ 	]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ 	]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ 	]|$)"}]},b={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},s={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,b]},g=e.inherit(s,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),c="[0-9]{4}(-[0-9][0-9]){0,2}",v="([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",N="(\\.[0-9]*)?",R="([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",m={className:"number",begin:"\\b"+c+v+N+R+"\\b"},i={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},A={begin:/\{/,end:/\}/,contains:[i],illegal:"\\n",relevance:0},d={begin:"\\[",end:"\\]",contains:[i],illegal:"\\n",relevance:0},t=[E,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+a},{className:"type",begin:"!<"+a+">"},{className:"type",begin:"!"+a},{className:"type",begin:"!!"+a},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},m,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},A,d,s],r=[...t];return r.pop(),r.push(g),i.contains=r,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:t}}l.exports=_});export default T();
