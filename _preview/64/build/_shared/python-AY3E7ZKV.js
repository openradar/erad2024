import{b as N}from"/erad2024/_preview/64/build/_shared/chunk-2NH4LW52.js";function s(o){return new RegExp("^(("+o.join(")|(")+"))\\b")}function c(o){return o.scopes[o.scopes.length-1]}function A(o){for(var p="error",O=o.delimiters||o.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,h=[o.singleOperators,o.doubleOperators,o.doubleDelimiters,o.tripleDelimiters,o.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],g=0;g<h.length;g++)h[g]||h.splice(g--,1);var k=o.hangingIndent,d=E,a=F;o.extra_keywords!=null&&(d=d.concat(o.extra_keywords)),o.extra_builtins!=null&&(a=a.concat(o.extra_builtins));var x=!(o.version&&Number(o.version)<3);if(x){var y=o.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;d=d.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),a=a.concat(["ascii","bytes","exec","print"]);var w=new RegExp(`^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,"i")}else{var y=o.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;d=d.concat(["exec","print"]),a=a.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var w=new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`,"i")}var I=s(d),L=s(a);function z(n,e){var r=n.sol()&&e.lastToken!="\\";if(r&&(e.indent=n.indentation()),r&&c(e).type=="py"){var i=c(e).offset;if(n.eatSpace()){var l=n.indentation();return l>i?S(n,e):l<i&&_(n,e)&&n.peek()!="#"&&(e.errorToken=!0),null}else{var t=v(n,e);return i>0&&_(n,e)&&(t+=" "+p),t}}return v(n,e)}function v(n,e,r){if(n.eatSpace())return null;if(!r&&n.match(/^#.*/))return"comment";if(n.match(/^[0-9\.]/,!1)){var i=!1;if(n.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(i=!0),n.match(/^[\d_]+\.\d*/)&&(i=!0),n.match(/^\.\d+/)&&(i=!0),i)return n.eat(/J/i),"number";var l=!1;if(n.match(/^0x[0-9a-f_]+/i)&&(l=!0),n.match(/^0b[01_]+/i)&&(l=!0),n.match(/^0o[0-7_]+/i)&&(l=!0),n.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(n.eat(/J/i),l=!0),n.match(/^0(?![\dx])/i)&&(l=!0),l)return n.eat(/L/i),"number"}if(n.match(w)){var t=n.current().toLowerCase().indexOf("f")!==-1;return t?(e.tokenize=R(n.current(),e.tokenize),e.tokenize(n,e)):(e.tokenize=B(n.current(),e.tokenize),e.tokenize(n,e))}for(var u=0;u<h.length;u++)if(n.match(h[u]))return"operator";return n.match(O)?"punctuation":e.lastToken=="."&&n.match(y)?"property":n.match(I)||n.match(U)?"keyword":n.match(L)?"builtin":n.match(/^(self|cls)\b/)?"self":n.match(y)?e.lastToken=="def"||e.lastToken=="class"?"def":"variable":(n.next(),r?null:p)}function R(n,e){for(;"rubf".indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var r=n.length==1,i="string";function l(u){return function(f,b){var T=v(f,b,!0);return T=="punctuation"&&(f.current()=="{"?b.tokenize=l(u+1):f.current()=="}"&&(u>1?b.tokenize=l(u-1):b.tokenize=t)),T}}function t(u,f){for(;!u.eol();)if(u.eatWhile(/[^'"\{\}\\]/),u.eat("\\")){if(u.next(),r&&u.eol())return i}else{if(u.match(n))return f.tokenize=e,i;if(u.match("{{"))return i;if(u.match("{",!1))return f.tokenize=l(0),u.current()?i:f.tokenize(u,f);if(u.match("}}"))return i;if(u.match("}"))return p;u.eat(/['"]/)}if(r){if(o.singleLineStringErrors)return p;f.tokenize=e}return i}return t.isString=!0,t}function B(n,e){for(;"rubf".indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var r=n.length==1,i="string";function l(t,u){for(;!t.eol();)if(t.eatWhile(/[^'"\\]/),t.eat("\\")){if(t.next(),r&&t.eol())return i}else{if(t.match(n))return u.tokenize=e,i;t.eat(/['"]/)}if(r){if(o.singleLineStringErrors)return p;u.tokenize=e}return i}return l.isString=!0,l}function S(n,e){for(;c(e).type!="py";)e.scopes.pop();e.scopes.push({offset:c(e).offset+n.indentUnit,type:"py",align:null})}function m(n,e,r){var i=n.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:n.column()+1;e.scopes.push({offset:e.indent+(k||n.indentUnit),type:r,align:i})}function _(n,e){for(var r=n.indentation();e.scopes.length>1&&c(e).offset>r;){if(c(e).type!="py")return!0;e.scopes.pop()}return c(e).offset!=r}function D(n,e){n.sol()&&(e.beginningOfLine=!0,e.dedent=!1);var r=e.tokenize(n,e),i=n.current();if(e.beginningOfLine&&i=="@")return n.match(y,!1)?"meta":x?"operator":p;if(/\S/.test(i)&&(e.beginningOfLine=!1),(r=="variable"||r=="builtin")&&e.lastToken=="meta"&&(r="meta"),(i=="pass"||i=="return")&&(e.dedent=!0),i=="lambda"&&(e.lambda=!0),i==":"&&!e.lambda&&c(e).type=="py"&&n.match(/^\s*(?:#|$)/,!1)&&S(n,e),i.length==1&&!/string|comment/.test(r)){var l="[({".indexOf(i);if(l!=-1&&m(n,e,"])}".slice(l,l+1)),l="])}".indexOf(i),l!=-1)if(c(e).type==i)e.indent=e.scopes.pop().offset-(k||n.indentUnit);else return p}return e.dedent&&n.eol()&&c(e).type=="py"&&e.scopes.length>1&&e.scopes.pop(),r}return{name:"python",startState:function(){return{tokenize:z,scopes:[{offset:0,type:"py",align:null}],indent:0,lastToken:null,lambda:!1,dedent:0}},token:function(n,e){var r=e.errorToken;r&&(e.errorToken=!1);var i=D(n,e);return i&&i!="comment"&&(e.lastToken=i=="keyword"||i=="punctuation"?n.current():i),i=="punctuation"&&(i=null),n.eol()&&e.lambda&&(e.lambda=!1),r?p:i},indent:function(n,e,r){if(n.tokenize!=z)return n.tokenize.isString?null:0;var i=c(n),l=i.type==e.charAt(0)||i.type=="py"&&!n.dedent&&/^(else:|elif |except |finally:)/.test(e);return i.align!=null?i.align-(l?1:0):i.offset-(l?k||r.unit:0)},languageData:{autocomplete:E.concat(F).concat(["exec","print"]),indentOnInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,commentTokens:{line:"#"},closeBrackets:{brackets:["(","[","{","'",'"',"'''",'"""']}}}}var U,E,F,Z,$,j,P=N(()=>{U=s(["and","or","not","is"]),E=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],F=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];Z=function(o){return o.split(" ")},$=A({}),j=A({extra_keywords:Z("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})});P();export{j as cython,A as mkPython,$ as python};
