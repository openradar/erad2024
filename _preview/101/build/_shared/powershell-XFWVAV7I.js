import{b as P}from"/erad2024/_preview/101/build/_shared/chunk-2NH4LW52.js";function a(e,n){n=n||{};for(var r=n.prefix!==void 0?n.prefix:"^",t=n.suffix!==void 0?n.suffix:"\\b",i=0;i<e.length;i++)e[i]instanceof RegExp?e[i]=e[i].source:e[i]=e[i].replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");return new RegExp(r+"("+e.join("|")+")"+t,"i")}function o(e,n){var r=n.returnStack[n.returnStack.length-1];if(r&&r.shouldReturnFrom(n))return n.tokenize=r.tokenize,n.returnStack.pop(),n.tokenize(e,n);if(e.eatSpace())return null;if(e.eat("("))return n.bracketNesting+=1,"punctuation";if(e.eat(")"))return n.bracketNesting-=1,"punctuation";for(var t in p)if(e.match(p[t]))return t;var i=e.next();if(i==="'")return I(e,n);if(i==="$")return s(e,n);if(i==='"')return v(e,n);if(i==="<"&&e.eat("#"))return n.tokenize=S,S(e,n);if(i==="#")return e.skipToEnd(),"comment";if(i==="@"){var l=e.eat(/["']/);if(l&&e.eol())return n.tokenize=u,n.startQuote=l[0],u(e,n);if(e.eol())return"error";if(e.peek().match(/[({]/))return"punctuation";if(e.peek().match(c))return s(e,n)}return"error"}function I(e,n){for(var r;(r=e.peek())!=null;)if(e.next(),r==="'"&&!e.eat("'"))return n.tokenize=o,"string";return"error"}function v(e,n){for(var r;(r=e.peek())!=null;){if(r==="$")return n.tokenize=z,"string";if(e.next(),r==="`"){e.next();continue}if(r==='"'&&!e.eat('"'))return n.tokenize=o,"string"}return"error"}function z(e,n){return g(e,n,v)}function T(e,n){return n.tokenize=u,n.startQuote='"',u(e,n)}function D(e,n){return g(e,n,T)}function g(e,n,r){if(e.match("$(")){var t=n.bracketNesting;return n.returnStack.push({shouldReturnFrom:function(i){return i.bracketNesting===t},tokenize:r}),n.tokenize=o,n.bracketNesting+=1,"punctuation"}else return e.next(),n.returnStack.push({shouldReturnFrom:function(){return!0},tokenize:r}),n.tokenize=s,n.tokenize(e,n)}function S(e,n){for(var r=!1,t;(t=e.next())!=null;){if(r&&t==">"){n.tokenize=o;break}r=t==="#"}return"comment"}function s(e,n){var r=e.peek();return e.eat("{")?(n.tokenize=m,m(e,n)):r!=null&&r.match(c)?(e.eatWhile(c),n.tokenize=o,"variable"):(n.tokenize=o,"error")}function m(e,n){for(var r;(r=e.next())!=null;)if(r==="}"){n.tokenize=o;break}return"variable"}function u(e,n){var r=n.startQuote;if(e.sol()&&e.match(new RegExp(r+"@")))n.tokenize=o;else if(r==='"')for(;!e.eol();){var t=e.peek();if(t==="$")return n.tokenize=D,"string";e.next(),t==="`"&&e.next()}else e.skipToEnd();return"string"}var f,c,d,b,C,k,h,x,E,w,y,M,R,p,O,j=P(()=>{f="(?=[^A-Za-z\\d\\-_]|$)",c=/[\w\-:]/,d=a([/begin|break|catch|continue|data|default|do|dynamicparam/,/else|elseif|end|exit|filter|finally|for|foreach|from|function|if|in/,/param|process|return|switch|throw|trap|try|until|where|while/],{suffix:f}),b=/[\[\]{},;`\\\.]|@[({]/,C=a(["f",/b?not/,/[ic]?split/,"join",/is(not)?/,"as",/[ic]?(eq|ne|[gl][te])/,/[ic]?(not)?(like|match|contains)/,/[ic]?replace/,/b?(and|or|xor)/],{prefix:"-"}),k=/[+\-*\/%]=|\+\+|--|\.\.|[+\-*&^%:=!|\/]|<(?!#)|(?!#)>/,h=a([C,k],{suffix:""}),x=/^((0x[\da-f]+)|((\d+\.\d+|\d\.|\.\d+|\d+)(e[\+\-]?\d+)?))[ld]?([kmgtp]b)?/i,E=/^[A-Za-z\_][A-Za-z\-\_\d]*\b/,w=/[A-Z]:|%|\?/i,y=a([/Add-(Computer|Content|History|Member|PSSnapin|Type)/,/Checkpoint-Computer/,/Clear-(Content|EventLog|History|Host|Item(Property)?|Variable)/,/Compare-Object/,/Complete-Transaction/,/Connect-PSSession/,/ConvertFrom-(Csv|Json|SecureString|StringData)/,/Convert-Path/,/ConvertTo-(Csv|Html|Json|SecureString|Xml)/,/Copy-Item(Property)?/,/Debug-Process/,/Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,/Disconnect-PSSession/,/Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)/,/(Enter|Exit)-PSSession/,/Export-(Alias|Clixml|Console|Counter|Csv|FormatData|ModuleMember|PSSession)/,/ForEach-Object/,/Format-(Custom|List|Table|Wide)/,new RegExp("Get-(Acl|Alias|AuthenticodeSignature|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Counter|Credential|Culture|Date|Event|EventLog|EventSubscriber|ExecutionPolicy|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|PfxCertificate|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|Verb|WinEvent|WmiObject)"),/Group-Object/,/Import-(Alias|Clixml|Counter|Csv|LocalizedData|Module|PSSession)/,/ImportSystemModules/,/Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)/,/Join-Path/,/Limit-EventLog/,/Measure-(Command|Object)/,/Move-Item(Property)?/,new RegExp("New-(Alias|Event|EventLog|Item(Property)?|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy|WinEvent)"),/Out-(Default|File|GridView|Host|Null|Printer|String)/,/Pause/,/(Pop|Push)-Location/,/Read-Host/,/Receive-(Job|PSSession)/,/Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)/,/Remove-(Computer|Event|EventLog|Item(Property)?|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)/,/Rename-(Computer|Item(Property)?)/,/Reset-ComputerMachinePassword/,/Resolve-Path/,/Restart-(Computer|Service)/,/Restore-Computer/,/Resume-(Job|Service)/,/Save-Help/,/Select-(Object|String|Xml)/,/Send-MailMessage/,new RegExp("Set-(Acl|Alias|AuthenticodeSignature|Content|Date|ExecutionPolicy|Item(Property)?|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)"),/Show-(Command|ControlPanelItem|EventLog)/,/Sort-Object/,/Split-Path/,/Start-(Job|Process|Service|Sleep|Transaction|Transcript)/,/Stop-(Computer|Job|Process|Service|Transcript)/,/Suspend-(Job|Service)/,/TabExpansion2/,/Tee-Object/,/Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)/,/Trace-Command/,/Unblock-File/,/Undo-Transaction/,/Unregister-(Event|PSSessionConfiguration)/,/Update-(FormatData|Help|List|TypeData)/,/Use-Transaction/,/Wait-(Event|Job|Process)/,/Where-Object/,/Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning)/,/cd|help|mkdir|more|oss|prompt/,/ac|asnp|cat|cd|chdir|clc|clear|clhy|cli|clp|cls|clv|cnsn|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|dnsn|ebp/,/echo|epal|epcsv|epsn|erase|etsn|exsn|fc|fl|foreach|ft|fw|gal|gbp|gc|gci|gcm|gcs|gdr|ghy|gi|gjb|gl|gm|gmo|gp|gps/,/group|gsn|gsnp|gsv|gu|gv|gwmi|h|history|icm|iex|ihy|ii|ipal|ipcsv|ipmo|ipsn|irm|ise|iwmi|iwr|kill|lp|ls|man|md/,/measure|mi|mount|move|mp|mv|nal|ndr|ni|nmo|npssc|nsn|nv|ogv|oh|popd|ps|pushd|pwd|r|rbp|rcjb|rcsn|rd|rdr|ren|ri/,/rjb|rm|rmdir|rmo|rni|rnp|rp|rsn|rsnp|rujb|rv|rvpa|rwmi|sajb|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls/,/sort|sp|spjb|spps|spsv|start|sujb|sv|swmi|tee|trcm|type|where|wjb|write/],{prefix:"",suffix:""}),M=a([/[$?^_]|Args|ConfirmPreference|ConsoleFileName|DebugPreference|Error|ErrorActionPreference|ErrorView|ExecutionContext/,/FormatEnumerationLimit|Home|Host|Input|MaximumAliasCount|MaximumDriveCount|MaximumErrorCount|MaximumFunctionCount/,/MaximumHistoryCount|MaximumVariableCount|MyInvocation|NestedPromptLevel|OutputEncoding|Pid|Profile|ProgressPreference/,/PSBoundParameters|PSCommandPath|PSCulture|PSDefaultParameterValues|PSEmailServer|PSHome|PSScriptRoot|PSSessionApplicationName/,/PSSessionConfigurationName|PSSessionOption|PSUICulture|PSVersionTable|Pwd|ShellId|StackTrace|VerbosePreference/,/WarningPreference|WhatIfPreference/,/Event|EventArgs|EventSubscriber|Sender/,/Matches|Ofs|ForEach|LastExitCode|PSCmdlet|PSItem|PSSenderInfo|This/,/true|false|null/],{prefix:"\\$",suffix:""}),R=a([w,y,M],{suffix:f}),p={keyword:d,number:x,operator:h,builtin:R,punctuation:b,variable:E};O={name:"powershell",startState:function(){return{returnStack:[],bracketNesting:0,tokenize:o}},token:function(e,n){return n.tokenize(e,n)},languageData:{commentTokens:{line:"#",block:{open:"<#",close:"#>"}}}}});j();export{O as powerShell};
