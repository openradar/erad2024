import{b as L}from"/erad2024/_preview/111/build/_shared/chunk-2NH4LW52.js";function u(i){for(var s={},c=i.split(" "),T=0;T<c.length;++T)s[c[T]]=!0;return s}function U(i){var s=i.keywords||o.keywords,c=i.cmipVerbs||o.cmipVerbs,T=i.compareTypes||o.compareTypes,N=i.status||o.status,d=i.tags||o.tags,f=i.storage||o.storage,m=i.modifier||o.modifier,C=i.accessTypes||o.accessTypes,R=i.multiLineStrings||o.multiLineStrings,y=i.indentStatements!==!1,A=/[\|\^]/,E;function D(e,n){var t=e.next();if(t=='"'||t=="'")return n.tokenize=g(t),n.tokenize(e,n);if(/[\[\]\(\){}:=,;]/.test(t))return E=t,"punctuation";if(t=="-"&&e.eat("-"))return e.skipToEnd(),"comment";if(/\d/.test(t))return e.eatWhile(/[\w\.]/),"number";if(A.test(t))return e.eatWhile(A),"operator";e.eatWhile(/[\w\-]/);var r=e.current();return s.propertyIsEnumerable(r)?"keyword":c.propertyIsEnumerable(r)?"variableName":T.propertyIsEnumerable(r)?"atom":N.propertyIsEnumerable(r)?"comment":d.propertyIsEnumerable(r)?"typeName":f.propertyIsEnumerable(r)||m.propertyIsEnumerable(r)||C.propertyIsEnumerable(r)?"modifier":"variableName"}function g(e){return function(n,t){for(var r=!1,l,O=!1;(l=n.next())!=null;){if(l==e&&!r){var I=n.peek();I&&(I=I.toLowerCase(),(I=="b"||I=="h"||I=="o")&&n.next()),O=!0;break}r=!r&&l=="\\"}return(O||!(r||R))&&(t.tokenize=null),"string"}}function p(e,n,t,r,l){this.indented=e,this.column=n,this.type=t,this.align=r,this.prev=l}function a(e,n,t){var r=e.indented;return e.context&&e.context.type=="statement"&&(r=e.context.indented),e.context=new p(r,n,t,null,e.context)}function S(e){var n=e.context.type;return(n==")"||n=="]"||n=="}")&&(e.indented=e.context.indented),e.context=e.context.prev}return{name:"asn1",startState:function(){return{tokenize:null,context:new p(-2,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,n){var t=n.context;if(e.sol()&&(t.align==null&&(t.align=!1),n.indented=e.indentation(),n.startOfLine=!0),e.eatSpace())return null;E=null;var r=(n.tokenize||D)(e,n);if(r=="comment")return r;if(t.align==null&&(t.align=!0),(E==";"||E==":"||E==",")&&t.type=="statement")S(n);else if(E=="{")a(n,e.column(),"}");else if(E=="[")a(n,e.column(),"]");else if(E=="(")a(n,e.column(),")");else if(E=="}"){for(;t.type=="statement";)t=S(n);for(t.type=="}"&&(t=S(n));t.type=="statement";)t=S(n)}else E==t.type?S(n):y&&((t.type=="}"||t.type=="top")&&E!=";"||t.type=="statement"&&E=="newstatement")&&a(n,e.column(),"statement");return n.startOfLine=!1,r},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"--"}}}}var o,P=L(()=>{o={keywords:u("DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS MINACCESS MAXACCESS REVISION STATUS DESCRIPTION SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY IMPLIED EXPORTS"),cmipVerbs:u("ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE"),compareTypes:u("OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL TEXTUAL-CONVENTION"),status:u("current deprecated mandatory obsolete"),tags:u("APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS UNIVERSAL"),storage:u("BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING UTCTime InterfaceIndex IANAifType CMIP-Attribute REAL PACKAGE PACKAGES IpAddress PhysAddress NetworkAddress BITS BMPString TimeStamp TimeTicks TruthValue RowStatus DisplayString GeneralString GraphicString IA5String NumericString PrintableString SnmpAdminString TeletexString UTF8String VideotexString VisibleString StringStore ISO646String T61String UniversalString Unsigned32 Integer32 Gauge Gauge32 Counter Counter32 Counter64"),modifier:u("ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS DEFINED"),accessTypes:u("not-accessible accessible-for-notify read-only read-create read-write"),multiLineStrings:!0}});P();export{U as asn1};
