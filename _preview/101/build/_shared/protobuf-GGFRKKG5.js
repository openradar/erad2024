import{b as t}from"/erad2024/_preview/101/build/_shared/chunk-2NH4LW52.js";function r(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}function u(e){return e.eatSpace()?null:e.match("//")?(e.skipToEnd(),"comment"):e.match(/^[0-9\.+-]/,!1)&&(e.match(/^[+-]?0x[0-9a-fA-F]+/)||e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/)||e.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))?"number":e.match(/^"([^"]|(""))*"/)||e.match(/^'([^']|(''))*'/)?"string":e.match(i)?"keyword":e.match(f)?"variable":(e.next(),null)}var n,i,f,a,o=t(()=>{n=["package","message","import","syntax","required","optional","repeated","reserved","default","extensions","packed","bool","bytes","double","enum","float","string","int32","int64","uint32","uint64","sint32","sint64","fixed32","fixed64","sfixed32","sfixed64","option","service","rpc","returns"],i=r(n),f=new RegExp("^[_A-Za-z\xA1-\uFFFF][_A-Za-z0-9\xA1-\uFFFF]*");a={name:"protobuf",token:u,languageData:{autocomplete:n}}});o();export{a as protobuf};
