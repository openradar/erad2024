import{c as I}from"/erad2024/_preview/67/build/_shared/chunk-2NH4LW52.js";var D=I((h,b)=>{function z(n){return n?typeof n=="string"?n:n.source:null}function B(...n){return"("+n.map(d=>z(d)).join("|")+")"}function Z(n){let u=B(...["(?:NeedsTeXFormat|RequirePackage|GetIdInfo)","Provides(?:Expl)?(?:Package|Class|File)","(?:DeclareOption|ProcessOptions)","(?:documentclass|usepackage|input|include)","makeat(?:letter|other)","ExplSyntax(?:On|Off)","(?:new|renew|provide)?command","(?:re)newenvironment","(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand","(?:New|Renew|Provide|Declare)DocumentEnvironment","(?:(?:e|g|x)?def|let)","(?:begin|end)","(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)","caption","(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)","(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)","(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)","(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)","(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)","(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)"].map(e=>e+"(?![a-zA-Z@:_])")),d=new RegExp(["(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*","[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}","[qs]__?[a-zA-Z](?:_?[a-zA-Z])+","use(?:_i)?:[a-zA-Z]*","(?:else|fi|or):","(?:if|cs|exp):w","(?:hbox|vbox):n","::[a-zA-Z]_unbraced","::[a-zA-Z:]"].map(e=>e+"(?![a-zA-Z:_])").join("|")),p=[{begin:/[a-zA-Z@]+/},{begin:/[^a-zA-Z@]?/}],g=[{begin:/\^{6}[0-9a-f]{6}/},{begin:/\^{5}[0-9a-f]{5}/},{begin:/\^{4}[0-9a-f]{4}/},{begin:/\^{3}[0-9a-f]{3}/},{begin:/\^{2}[0-9a-f]{2}/},{begin:/\^{2}[\u0000-\u007f]/}],v={className:"keyword",begin:/\\/,relevance:0,contains:[{endsParent:!0,begin:u},{endsParent:!0,begin:d},{endsParent:!0,variants:g},{endsParent:!0,relevance:0,variants:p}]},N={className:"params",relevance:0,begin:/#+\d?/},R={variants:g},T={className:"built_in",relevance:0,begin:/[$&^_]/},M={className:"meta",begin:"% !TeX",end:"$",relevance:10},f=n.COMMENT("%","$",{relevance:0}),c=[v,N,R,T,M,f],E={begin:/\{/,end:/\}/,relevance:0,contains:["self",...c]},C=n.inherit(E,{relevance:0,endsParent:!0,contains:[E,...c]}),O={begin:/\[/,end:/\]/,endsParent:!0,relevance:0,contains:[E,...c]},m={begin:/\s+/,relevance:0},i=[C],A=[O],a=function(e,t){return{contains:[m],starts:{relevance:0,contains:e,starts:t}}},r=function(e,t){return{begin:"\\\\"+e+"(?![a-zA-Z@:_])",keywords:{$pattern:/\\[a-zA-Z]+/,keyword:"\\"+e},relevance:0,contains:[m],starts:t}},o=function(e,t){return n.inherit({begin:"\\\\begin(?=[ 	]*(\\r?\\n[ 	]*)?\\{"+e+"\\})",keywords:{$pattern:/\\[a-zA-Z]+/,keyword:"\\begin"},relevance:0},a(i,t))},_=(e="string")=>n.END_SAME_AS_BEGIN({className:e,begin:/(.|\r?\n)/,end:/(.|\r?\n)/,excludeBegin:!0,excludeEnd:!0,endsParent:!0}),l=function(e){return{className:"string",end:"(?=\\\\end\\{"+e+"\\})"}},s=(e="string")=>({relevance:0,begin:/\{/,starts:{endsParent:!0,contains:[{className:e,end:/(?=\})/,endsParent:!0,contains:[{begin:/\{/,end:/\}/,relevance:0,contains:["self"]}]}]}}),P=[...["verb","lstinline"].map(e=>r(e,{contains:[_()]})),r("mint",a(i,{contains:[_()]})),r("mintinline",a(i,{contains:[s(),_()]})),r("url",{contains:[s("link"),s("link")]}),r("hyperref",{contains:[s("link")]}),r("href",a(A,{contains:[s("link")]})),...[].concat(...["","\\*"].map(e=>[o("verbatim"+e,l("verbatim"+e)),o("filecontents"+e,a(i,l("filecontents"+e))),...["","B","L"].map(t=>o(t+"Verbatim"+e,a(A,l(t+"Verbatim"+e))))])),o("minted",a(A,a(i,l("minted"))))];return{name:"LaTeX",aliases:["tex"],contains:[...P,...c]}}b.exports=Z});export default D();
