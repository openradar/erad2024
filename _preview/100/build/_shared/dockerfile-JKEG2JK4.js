import{a as e,b as l}from"/erad2024/_preview/100/build/_shared/chunk-QI5JMMK2.js";import{b as s}from"/erad2024/_preview/100/build/_shared/chunk-2NH4LW52.js";var n,x,t,g,r,u,a,k,o,i,m,c,p=s(()=>{l();n="from",x=new RegExp("^(\\s*)\\b("+n+")\\b","i"),t=["run","cmd","entrypoint","shell"],g=new RegExp("^(\\s*)("+t.join("|")+")(\\s+\\[)","i"),r="expose",u=new RegExp("^(\\s*)("+r+")(\\s+)","i"),a=["arg","from","maintainer","label","env","add","copy","volume","user","workdir","onbuild","stopsignal","healthcheck","shell"],k=[n,r].concat(t).concat(a),o="("+k.join("|")+")",i=new RegExp("^(\\s*)"+o+"(\\s*)(#.*)?$","i"),m=new RegExp("^(\\s*)"+o+"(\\s+)","i"),c=e({start:[{regex:/^\s*#.*$/,sol:!0,token:"comment"},{regex:x,token:[null,"keyword"],sol:!0,next:"from"},{regex:i,token:[null,"keyword",null,"error"],sol:!0},{regex:g,token:[null,"keyword",null],sol:!0,next:"array"},{regex:u,token:[null,"keyword",null],sol:!0,next:"expose"},{regex:m,token:[null,"keyword",null],sol:!0,next:"arguments"},{regex:/./,token:null}],from:[{regex:/\s*$/,token:null,next:"start"},{regex:/(\s*)(#.*)$/,token:[null,"error"],next:"start"},{regex:/(\s*\S+\s+)(as)/i,token:[null,"keyword"],next:"start"},{token:null,next:"start"}],single:[{regex:/(?:[^\\']|\\.)/,token:"string"},{regex:/'/,token:"string",pop:!0}],double:[{regex:/(?:[^\\"]|\\.)/,token:"string"},{regex:/"/,token:"string",pop:!0}],array:[{regex:/\]/,token:null,next:"start"},{regex:/"(?:[^\\"]|\\.)*"?/,token:"string"}],expose:[{regex:/\d+$/,token:"number",next:"start"},{regex:/[^\d]+$/,token:null,next:"start"},{regex:/\d+/,token:"number"},{regex:/[^\d]+/,token:null},{token:null,next:"start"}],arguments:[{regex:/^\s*#.*$/,sol:!0,token:"comment"},{regex:/"(?:[^\\"]|\\.)*"?$/,token:"string",next:"start"},{regex:/"/,token:"string",push:"double"},{regex:/'(?:[^\\']|\\.)*'?$/,token:"string",next:"start"},{regex:/'/,token:"string",push:"single"},{regex:/[^#"']+[\\`]$/,token:null},{regex:/[^#"']+$/,token:null,next:"start"},{regex:/[^#"']+/,token:null},{token:null,next:"start"}],languageData:{commentTokens:{line:"#"}}})});p();export{c as dockerFile};
