import{b as f}from"/erad2024/_preview/68/build/_shared/chunk-2NH4LW52.js";var r,u=f(()=>{r={name:"properties",token:function(e,i){var o=e.sol()||i.afterSection,l=e.eol();if(i.afterSection=!1,o&&(i.nextMultiline?(i.inMultiline=!0,i.nextMultiline=!1):i.position="def"),l&&!i.nextMultiline&&(i.inMultiline=!1,i.position="def"),o)for(;e.eatSpace(););var n=e.next();return o&&(n==="#"||n==="!"||n===";")?(i.position="comment",e.skipToEnd(),"comment"):o&&n==="["?(i.afterSection=!0,e.skipTo("]"),e.eat("]"),"header"):n==="="||n===":"?(i.position="quote",null):(n==="\\"&&i.position==="quote"&&e.eol()&&(i.nextMultiline=!0),i.position)},startState:function(){return{position:"def",nextMultiline:!1,inMultiline:!1,afterSection:!1}}}});u();export{r as properties};
