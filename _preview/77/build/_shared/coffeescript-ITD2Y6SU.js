import{c as I}from"/erad2024/_preview/77/build/_shared/chunk-2NH4LW52.js";var p=I((O,c)=>{var _=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],y=["true","false","null","undefined","NaN","Infinity"],b=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],f=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],R=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],B=["arguments","this","super","console","window","document","localStorage","module","global"],N=[].concat(R,B,b,f);function m(e){let l=["npm","print"],E=["yes","no","on","off"],d=["then","unless","until","loop","by","when","and","or","is","isnt","not"],u=["var","const","let","function","static"],g=S=>A=>!S.includes(A),r={keyword:_.concat(d).filter(g(u)),literal:y.concat(E),built_in:N.concat(l)},n="[A-Za-z$_][0-9A-Za-z$_]*",t={className:"subst",begin:/#\{/,end:/\}/,keywords:r},a=[e.BINARY_NUMBER_MODE,e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,t]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t]}]},{className:"regexp",variants:[{begin:"///",end:"///",contains:[t,e.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+n},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{begin:"```",end:"```"},{begin:"`",end:"`"}]}];t.contains=a;let i=e.inherit(e.TITLE_MODE,{begin:n}),o="(\\(.*\\)\\s*)?\\B[-=]>",s={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(a)}]};return{name:"CoffeeScript",aliases:["coffee","cson","iced"],keywords:r,illegal:/\/\*/,contains:a.concat([e.COMMENT("###","###"),e.HASH_COMMENT_MODE,{className:"function",begin:"^\\s*"+n+"\\s*=\\s*"+o,end:"[-=]>",returnBegin:!0,contains:[i,s]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",begin:o,end:"[-=]>",returnBegin:!0,contains:[s]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[i]},i]},{begin:n+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}c.exports=m});export default p();
