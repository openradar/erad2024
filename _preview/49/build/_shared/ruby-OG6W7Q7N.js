import{c as m}from"/erad2024/_preview/49/build/_shared/chunk-2NH4LW52.js";var S=m((f,_)=>{function R(n){return n?typeof n=="string"?n:n.source:null}function T(n){return g("(?=",n,")")}function g(...n){return n.map(e=>R(e)).join("")}function M(n){let s="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",e={keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",built_in:"proc lambda",literal:"true false nil"},r={className:"doctag",begin:"@[A-Za-z]+"},t={begin:"#<",end:">"},i=[n.COMMENT("#","$",{contains:[r]}),n.COMMENT("^=begin","^=end",{contains:[r],relevance:10}),n.COMMENT("^__END__","\\n$")],c={className:"subst",begin:/#\{/,end:/\}/,keywords:e},b={className:"string",contains:[n.BACKSLASH_ESCAPE,c],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:/<<[-~]?'?(\w+)\n(?:[^\n]*\n)*?\s*\1\b/,returnBegin:!0,contains:[{begin:/<<[-~]?'?/},n.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[n.BACKSLASH_ESCAPE,c]})]}]},E="[1-9](_?[0-9])*|0",o="[0-9](_?[0-9])*",l={className:"number",relevance:0,variants:[{begin:`\\b(${E})(\\.(${o}))?([eE][+-]?(${o})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},d={className:"params",begin:"\\(",end:"\\)",endsParent:!0,keywords:e},a=[b,{className:"class",beginKeywords:"class module",end:"$|;",illegal:/=/,contains:[n.inherit(n.TITLE_MODE,{begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"}),{begin:"<\\s*",contains:[{begin:"("+n.IDENT_RE+"::)?"+n.IDENT_RE,relevance:0}]}].concat(i)},{className:"function",begin:g(/def\s+/,T(s+"\\s*(\\(|;|$)")),relevance:0,keywords:"def",end:"$|;",contains:[n.inherit(n.TITLE_MODE,{begin:s}),d].concat(i)},{begin:n.IDENT_RE+"::"},{className:"symbol",begin:n.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[b,{begin:s}],relevance:0},l,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|/,end:/\|/,relevance:0,keywords:e},{begin:"("+n.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[n.BACKSLASH_ESCAPE,c],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(t,i),relevance:0}].concat(t,i);c.contains=a,d.contains=a;let u="[>?]>",N="[\\w#]+\\(\\w+\\):\\d+:\\d+>",w="(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>",A=[{begin:/^\s*=>/,starts:{end:"$",contains:a}},{className:"meta",begin:"^("+u+"|"+N+"|"+w+")(?=[ ])",starts:{end:"$",contains:a}}];return i.unshift(t),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:e,illegal:/\/\*/,contains:[n.SHEBANG({binary:"ruby"})].concat(A).concat(i).concat(a)}}_.exports=M});export default S();
