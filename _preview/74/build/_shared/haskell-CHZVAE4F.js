import{c}from"/erad2024/_preview/74/build/_shared/chunk-2NH4LW52.js";var r=c((b,l)=>{function d(e){let n={variants:[e.COMMENT("--","$"),e.COMMENT(/\{-/,/-\}/,{contains:["self"]})]},s={className:"meta",begin:/\{-#/,end:/#-\}/},t={className:"meta",begin:"^#",end:"$"},a={className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},i={begin:"\\(",end:"\\)",illegal:'"',contains:[s,t,{className:"type",begin:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},e.inherit(e.TITLE_MODE,{begin:"[_a-z][\\w']*"}),n]},o={begin:/\{/,end:/\}/,contains:i.contains};return{name:"Haskell",aliases:["hs"],keywords:"let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",contains:[{beginKeywords:"module",end:"where",keywords:"module where",contains:[i,n],illegal:"\\W\\.|;"},{begin:"\\bimport\\b",end:"$",keywords:"import qualified as hiding",contains:[i,n],illegal:"\\W\\.|;"},{className:"class",begin:"^(\\s*)?(class|instance)\\b",end:"where",keywords:"class family instance where",contains:[a,i,n]},{className:"class",begin:"\\b(data|(new)?type)\\b",end:"$",keywords:"data family type newtype deriving",contains:[s,a,i,o,n]},{beginKeywords:"default",end:"$",contains:[a,i,n]},{beginKeywords:"infix infixl infixr",end:"$",contains:[e.C_NUMBER_MODE,n]},{begin:"\\bforeign\\b",end:"$",keywords:"foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",contains:[a,e.QUOTE_STRING_MODE,n]},{className:"meta",begin:"#!\\/usr\\/bin\\/env runhaskell",end:"$"},s,t,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,a,e.inherit(e.TITLE_MODE,{begin:"^[_a-z][\\w']*"}),n,{begin:"->|<-"}]}}l.exports=d});export default r();
