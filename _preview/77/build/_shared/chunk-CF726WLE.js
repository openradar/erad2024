import{c as f}from"/erad2024/_preview/77/build/_shared/chunk-2NH4LW52.js";var x=f((v,l)=>{l.exports=p;p.displayName="http";p.aliases=[];function p(u){(function(e){function r(n){return RegExp("(^(?:"+n+"):[ 	]*(?![ 	]))[^]+","i")}e.languages.http={"request-line":{pattern:/^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,inside:{method:{pattern:/^[A-Z]+\b/,alias:"property"},"request-target":{pattern:/^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,lookbehind:!0,alias:"url",inside:e.languages.uri},"http-version":{pattern:/^(\s)HTTP\/[\d.]+/,lookbehind:!0,alias:"property"}}},"response-status":{pattern:/^HTTP\/[\d.]+ \d+ .+/m,inside:{"http-version":{pattern:/^HTTP\/[\d.]+/,alias:"property"},"status-code":{pattern:/^(\s)\d+(?=\s)/,lookbehind:!0,alias:"number"},"reason-phrase":{pattern:/^(\s).+/,lookbehind:!0,alias:"string"}}},header:{pattern:/^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,inside:{"header-value":[{pattern:r(/Content-Security-Policy/.source),lookbehind:!0,alias:["csp","languages-csp"],inside:e.languages.csp},{pattern:r(/Public-Key-Pins(?:-Report-Only)?/.source),lookbehind:!0,alias:["hpkp","languages-hpkp"],inside:e.languages.hpkp},{pattern:r(/Strict-Transport-Security/.source),lookbehind:!0,alias:["hsts","languages-hsts"],inside:e.languages.hsts},{pattern:r(/[^:]+/.source),lookbehind:!0}],"header-name":{pattern:/^[^:]+/,alias:"keyword"},punctuation:/^:/}}};var t=e.languages,i={"application/javascript":t.javascript,"application/json":t.json||t.javascript,"application/xml":t.xml,"text/xml":t.xml,"text/html":t.html,"text/css":t.css,"text/plain":t.plain},o={"application/json":!0,"application/xml":!0};function h(n){var c=n.replace(/^[a-z]+\//,""),g="\\w+/(?:[\\w.-]+\\+)+"+c+"(?![+\\w.-])";return"(?:"+n+"|"+g+")"}var s;for(var a in i)if(i[a]){s=s||{};var d=o[a]?h(a):a;s[a.replace(/\//g,"-")]={pattern:RegExp("("+/content-type:\s*/.source+d+/(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source+")"+/[^ \t\w-][\s\S]*/.source,"i"),lookbehind:!0,inside:i[a]}}s&&e.languages.insertBefore("http","header",s)})(u)}});export{x as a};
