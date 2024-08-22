import{c as x}from"/erad2024/_preview/84/build/_shared/chunk-2NH4LW52.js";var v=x((y,g)=>{g.exports=u;u.displayName="lisp";u.aliases=[];function u(b){(function(t){function p(l){return RegExp(/(\()/.source+"(?:"+l+")"+/(?=[\s\)])/.source)}function d(l){return RegExp(/([\s([])/.source+"(?:"+l+")"+/(?=[\s)])/.source)}var e=/(?!\d)[-+*/~!@$%^=<>{}\w]+/.source,m="&"+e,a="(\\()",k="(?=\\))",c="(?=\\s)",n=/(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source,r={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+e+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+e),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+e),alias:"property"},splice:{pattern:RegExp(",@?"+e),alias:["symbol","variable"]},keyword:[{pattern:RegExp(a+"(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)"+c),lookbehind:!0},{pattern:RegExp(a+"(?:append|by|collect|concat|do|finally|for|in|return)"+c),lookbehind:!0}],declare:{pattern:p(/declare/.source),lookbehind:!0,alias:"keyword"},interactive:{pattern:p(/interactive/.source),lookbehind:!0,alias:"keyword"},boolean:{pattern:d(/nil|t/.source),lookbehind:!0},number:{pattern:d(/[-+]?\d+(?:\.\d*)?/.source),lookbehind:!0},defvar:{pattern:RegExp(a+"def(?:const|custom|group|var)\\s+"+e),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(e)}},defun:{pattern:RegExp(a+/(?:cl-)?(?:defmacro|defun\*?)\s+/.source+e+/\s+\(/.source+n+/\)/.source),lookbehind:!0,greedy:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+e),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp(a+"lambda\\s+\\(\\s*(?:&?"+e+"(?:\\s+&?"+e+")*\\s*)?\\)"),lookbehind:!0,greedy:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(a+e),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},s={"lisp-marker":RegExp(m),varform:{pattern:RegExp(/\(/.source+e+/\s+(?=\S)/.source+n+/\)/.source),inside:r},argument:{pattern:RegExp(/(^|[\s(])/.source+e),lookbehind:!0,alias:"variable"},rest:r},o="\\S+(?:\\s+\\S+)*",i={pattern:RegExp(a+n+k),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:body|rest)\\s+"+o),inside:s},"other-marker-vars":{pattern:RegExp("&(?:aux|optional)\\s+"+o),inside:s},keys:{pattern:RegExp("&key\\s+"+o+"(?:\\s+&allow-other-keys)?"),inside:s},argument:{pattern:RegExp(e),alias:"variable"},punctuation:/[()]/}};r.lambda.inside.arguments=i,r.defun.inside.arguments=t.util.clone(i),r.defun.inside.arguments.inside.sublist=i,t.languages.lisp=r,t.languages.elisp=r,t.languages.emacs=r,t.languages["emacs-lisp"]=r})(b)}});export{v as a};
