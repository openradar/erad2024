import{c}from"/erad2024/_preview/74/build/_shared/chunk-2NH4LW52.js";var l=c((g,t)=>{function r(e){let n={variants:[e.COMMENT("--","$"),e.COMMENT(/\{-/,/-\}/,{contains:["self"]})]},o={className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},i={begin:"\\(",end:"\\)",illegal:'"',contains:[{className:"type",begin:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},n]},s={begin:/\{/,end:/\}/,contains:i.contains},a={className:"string",begin:"'\\\\?.",end:"'",illegal:"."};return{name:"Elm",keywords:"let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription",contains:[{beginKeywords:"port effect module",end:"exposing",keywords:"port effect module where command subscription exposing",contains:[i,n],illegal:"\\W\\.|;"},{begin:"import",end:"$",keywords:"import as exposing",contains:[i,n],illegal:"\\W\\.|;"},{begin:"type",end:"$",keywords:"type alias",contains:[o,i,s,n]},{beginKeywords:"infix infixl infixr",end:"$",contains:[e.C_NUMBER_MODE,n]},{begin:"port",end:"$",keywords:"port",contains:[n]},a,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,o,e.inherit(e.TITLE_MODE,{begin:"^[_a-z][\\w']*"}),n,{begin:"->|<-"}],illegal:/;/}}t.exports=r});export default l();
