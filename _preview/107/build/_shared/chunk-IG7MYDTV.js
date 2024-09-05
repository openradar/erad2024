import{c as Z}from"/erad2024/_preview/107/build/_shared/chunk-2NH4LW52.js";var q=Z((G,K)=>{K.exports=k;k.displayName="csharp";k.aliases=["dotnet","cs"];function k(T){(function(t){function r(s,u){return s.replace(/<<(\d+)>>/g,function(d,W){return"(?:"+u[+W]+")"})}function e(s,u,d){return RegExp(r(s,u),d||"")}function l(s,u){for(var d=0;d<u;d++)s=s.replace(/<<self>>/g,function(){return"(?:"+s+")"});return s.replace(/<<self>>/g,"[^\\s\\S]")}var n={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function p(s){return"\\b(?:"+s.trim().replace(/ /g,"|")+")\\b"}var m=p(n.typeDeclaration),g=RegExp(p(n.type+" "+n.typeDeclaration+" "+n.contextual+" "+n.other)),z=p(n.typeDeclaration+" "+n.contextual+" "+n.other),j=p(n.type+" "+n.typeDeclaration+" "+n.other),h=l(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),b=l(/\((?:[^()]|<<self>>)*\)/.source,2),o=/@?\b[A-Za-z_]\w*\b/.source,f=r(/<<0>>(?:\s*<<1>>)?/.source,[o,h]),i=r(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[z,f]),y=/\[\s*(?:,\s*)*\]/.source,A=r(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[i,y]),N=r(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[h,b,y]),O=r(/\(<<0>>+(?:,<<0>>+)+\)/.source,[N]),c=r(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[O,i,y]),a={keyword:g,punctuation:/[<>()?,.:[\]]/},w=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,x=/"(?:\\.|[^\\"\r\n])*"/.source,F=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;t.languages.csharp=t.languages.extend("clike",{string:[{pattern:e(/(^|[^$\\])<<0>>/.source,[F]),lookbehind:!0,greedy:!0},{pattern:e(/(^|[^@$\\])<<0>>/.source,[x]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[i]),lookbehind:!0,inside:a},{pattern:e(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[o,c]),lookbehind:!0,inside:a},{pattern:e(/(\busing\s+)<<0>>(?=\s*=)/.source,[o]),lookbehind:!0},{pattern:e(/(\b<<0>>\s+)<<1>>/.source,[m,f]),lookbehind:!0,inside:a},{pattern:e(/(\bcatch\s*\(\s*)<<0>>/.source,[i]),lookbehind:!0,inside:a},{pattern:e(/(\bwhere\s+)<<0>>/.source,[o]),lookbehind:!0},{pattern:e(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[A]),lookbehind:!0,inside:a},{pattern:e(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[c,j,o]),inside:a}],keyword:g,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),t.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),t.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:e(/([(,]\s*)<<0>>(?=\s*:)/.source,[o]),lookbehind:!0,alias:"punctuation"}}),t.languages.insertBefore("csharp","class-name",{namespace:{pattern:e(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[o]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:e(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[b]),lookbehind:!0,alias:"class-name",inside:a},"return-type":{pattern:e(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[c,i]),inside:a,alias:"class-name"},"constructor-invocation":{pattern:e(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[c]),lookbehind:!0,inside:a,alias:"class-name"},"generic-method":{pattern:e(/<<0>>\s*<<1>>(?=\s*\()/.source,[o,h]),inside:{function:e(/^<<0>>/.source,[o]),generic:{pattern:RegExp(h),alias:"class-name",inside:a}}},"type-list":{pattern:e(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[m,f,o,c,g.source,b,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:e(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[f,b]),lookbehind:!0,greedy:!0,inside:t.languages.csharp},keyword:g,"class-name":{pattern:RegExp(c),greedy:!0,inside:a},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var E=x+"|"+w,S=r(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[E]),R=l(r(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[S]),2),$=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,U=r(/<<0>>(?:\s*\(<<1>>*\))?/.source,[i,R]);t.languages.insertBefore("csharp","class-name",{attribute:{pattern:e(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[$,U]),lookbehind:!0,greedy:!0,inside:{target:{pattern:e(/^<<0>>(?=\s*:)/.source,[$]),alias:"keyword"},"attribute-arguments":{pattern:e(/\(<<0>>*\)/.source,[R]),inside:t.languages.csharp},"class-name":{pattern:RegExp(i),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var v=/:[^}\r\n]+/.source,I=l(r(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[S]),2),_=r(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[I,v]),B=l(r(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[E]),2),D=r(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[B,v]);function C(s,u){return{interpolation:{pattern:e(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[s]),lookbehind:!0,inside:{"format-string":{pattern:e(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[u,v]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:t.languages.csharp}}},string:/[\s\S]+/}}t.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:e(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[_]),lookbehind:!0,greedy:!0,inside:C(_,I)},{pattern:e(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[D]),lookbehind:!0,greedy:!0,inside:C(D,B)}],char:{pattern:RegExp(w),greedy:!0}}),t.languages.dotnet=t.languages.cs=t.languages.csharp})(T)}});export{q as a};
