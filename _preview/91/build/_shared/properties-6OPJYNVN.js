import{c as g}from"/erad2024/_preview/91/build/_shared/chunk-2NH4LW52.js";var u=g((b,c)=>{function E(v){var e="[ \\t\\f]*",l="[ \\t\\f]+",r=e+"[:=]"+e,t=l,s="("+r+"|"+t+")",n="([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",a="([^\\\\:= \\t\\f\\n]|\\\\.)+",i={end:s,relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\\\"},{begin:"\\\\\\n"}]}};return{name:".properties",case_insensitive:!0,illegal:/\S/,contains:[v.COMMENT("^\\s*[!#]","$"),{returnBegin:!0,variants:[{begin:n+r,relevance:1},{begin:n+t,relevance:0}],contains:[{className:"attr",begin:n,endsParent:!0,relevance:0}],starts:i},{begin:a+s,returnBegin:!0,relevance:0,contains:[{className:"meta",begin:a,endsParent:!0,relevance:0}],starts:i},{className:"attr",relevance:0,begin:a+e+"$"}]}}c.exports=E});export default u();
