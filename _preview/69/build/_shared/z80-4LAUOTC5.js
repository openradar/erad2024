import{b as a}from"/erad2024/_preview/69/build/_shared/chunk-2NH4LW52.js";function o(t){var n,l;t?(n=/^(exx?|(ld|cp)([di]r?)?|[lp]ea|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|[de]i|halt|im|in([di]mr?|ir?|irx|2r?)|ot(dmr?|[id]rx|imr?)|out(0?|[di]r?|[di]2r?)|tst(io)?|slp)(\.([sl]?i)?[sl])?\b/i,l=/^(((call|j[pr]|rst|ret[in]?)(\.([sl]?i)?[sl])?)|(rs|st)mix)\b/i):(n=/^(exx?|(ld|cp|in)([di]r?)?|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|rst|[de]i|halt|im|ot[di]r|out[di]?)\b/i,l=/^(call|j[pr]|ret[in]?|b_?(call|jump))\b/i);var u=/^(af?|bc?|c|de?|e|hl?|l|i[xy]?|r|sp)\b/i,d=/^(n?[zc]|p[oe]?|m)\b/i,f=/^([hl][xy]|i[xy][hl]|slia|sll)\b/i,c=/^([\da-f]+h|[0-7]+o|[01]+b|\d+d?)\b/i;return{name:"z80",startState:function(){return{context:0}},token:function(e,r){if(e.column()||(r.context=0),e.eatSpace())return null;var i;if(e.eatWhile(/\w/))if(t&&e.eat(".")&&e.eatWhile(/\w/),i=e.current(),e.indentation()){if((r.context==1||r.context==4)&&u.test(i))return r.context=4,"variable";if(r.context==2&&d.test(i))return r.context=4,"variableName.special";if(n.test(i))return r.context=1,"keyword";if(l.test(i))return r.context=2,"keyword";if(r.context==4&&c.test(i))return"number";if(f.test(i))return"error"}else return e.match(c)?"number":null;else{if(e.eat(";"))return e.skipToEnd(),"comment";if(e.eat('"')){for(;(i=e.next())&&i!='"';)i=="\\"&&e.next();return"string"}else if(e.eat("'")){if(e.match(/\\?.'/))return"number"}else if(e.eat(".")||e.sol()&&e.eat("#")){if(r.context=5,e.eatWhile(/\w/))return"def"}else if(e.eat("$")){if(e.eatWhile(/[\da-f]/i))return"number"}else if(e.eat("%")){if(e.eatWhile(/[01]/))return"number"}else e.next()}return null}}}var b,x,s=a(()=>{b=o(!1),x=o(!0)});s();export{x as ez80,b as z80};
