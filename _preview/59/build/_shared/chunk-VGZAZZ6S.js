import{c as l}from"/erad2024/_preview/59/build/_shared/chunk-2NH4LW52.js";var u=l((b,s)=>{s.exports=a;a.displayName="webIdl";a.aliases=[];function a(o){(function(t){var e=/(?:\B-|\b_|\b)[A-Za-z][\w-]*(?![\w-])/.source,n="(?:"+/\b(?:unsigned\s+)?long\s+long(?![\w-])/.source+"|"+/\b(?:unrestricted|unsigned)\s+[a-z]+(?![\w-])/.source+"|"+/(?!(?:unrestricted|unsigned)\b)/.source+e+/(?:\s*<(?:[^<>]|<[^<>]*>)*>)?/.source+")"+/(?:\s*\?)?/.source,r={};t.languages["web-idl"]={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},string:{pattern:/"[^"]*"/,greedy:!0},namespace:{pattern:RegExp(/(\bnamespace\s+)/.source+e),lookbehind:!0},"class-name":[{pattern:/(^|[^\w-])(?:iterable|maplike|setlike)\s*<(?:[^<>]|<[^<>]*>)*>/,lookbehind:!0,inside:r},{pattern:RegExp(/(\b(?:attribute|const|deleter|getter|optional|setter)\s+)/.source+n),lookbehind:!0,inside:r},{pattern:RegExp("("+/\bcallback\s+/.source+e+/\s*=\s*/.source+")"+n),lookbehind:!0,inside:r},{pattern:RegExp(/(\btypedef\b\s*)/.source+n),lookbehind:!0,inside:r},{pattern:RegExp(/(\b(?:callback|dictionary|enum|interface(?:\s+mixin)?)\s+)(?!(?:interface|mixin)\b)/.source+e),lookbehind:!0},{pattern:RegExp(/(:\s*)/.source+e),lookbehind:!0},RegExp(e+/(?=\s+(?:implements|includes)\b)/.source),{pattern:RegExp(/(\b(?:implements|includes)\s+)/.source+e),lookbehind:!0},{pattern:RegExp(n+"(?="+/\s*(?:\.{3}\s*)?/.source+e+/\s*[(),;=]/.source+")"),inside:r}],builtin:/\b(?:ArrayBuffer|BigInt64Array|BigUint64Array|ByteString|DOMString|DataView|Float32Array|Float64Array|FrozenArray|Int16Array|Int32Array|Int8Array|ObservableArray|Promise|USVString|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray)\b/,keyword:[/\b(?:async|attribute|callback|const|constructor|deleter|dictionary|enum|getter|implements|includes|inherit|interface|mixin|namespace|null|optional|or|partial|readonly|required|setter|static|stringifier|typedef|unrestricted)\b/,/\b(?:any|bigint|boolean|byte|double|float|iterable|long|maplike|object|octet|record|sequence|setlike|short|symbol|undefined|unsigned|void)\b/],boolean:/\b(?:false|true)\b/,number:{pattern:/(^|[^\w-])-?(?:0x[0-9a-f]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|NaN|Infinity)(?![\w-])/i,lookbehind:!0},operator:/\.{3}|[=:?<>-]/,punctuation:/[(){}[\].,;]/};for(var i in t.languages["web-idl"])i!=="class-name"&&(r[i]=t.languages["web-idl"][i]);t.languages.webidl=t.languages["web-idl"]})(o)}});export{u as a};
