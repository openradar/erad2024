import{a as T}from"/erad2024/_preview/110/build/_shared/chunk-HBYGZG3X.js";import{c as R}from"/erad2024/_preview/110/build/_shared/chunk-2NH4LW52.js";var I=R((O,A)=>{var N=T();A.exports=S;S.displayName="sparql";S.aliases=["rq"];function S(E){E.register(N),E.languages.sparql=E.languages.extend("turtle",{boolean:/\b(?:false|true)\b/i,variable:{pattern:/[?$]\w+/,greedy:!0}}),E.languages.insertBefore("sparql","punctuation",{keyword:[/\b(?:A|ADD|ALL|AS|ASC|ASK|BNODE|BY|CLEAR|CONSTRUCT|COPY|CREATE|DATA|DEFAULT|DELETE|DESC|DESCRIBE|DISTINCT|DROP|EXISTS|FILTER|FROM|GROUP|HAVING|INSERT|INTO|LIMIT|LOAD|MINUS|MOVE|NAMED|NOT|NOW|OFFSET|OPTIONAL|ORDER|RAND|REDUCED|SELECT|SEPARATOR|SERVICE|SILENT|STRUUID|UNION|USING|UUID|VALUES|WHERE)\b/i,/\b(?:ABS|AVG|BIND|BOUND|CEIL|COALESCE|CONCAT|CONTAINS|COUNT|DATATYPE|DAY|ENCODE_FOR_URI|FLOOR|GROUP_CONCAT|HOURS|IF|IRI|isBLANK|isIRI|isLITERAL|isNUMERIC|isURI|LANG|LANGMATCHES|LCASE|MAX|MD5|MIN|MINUTES|MONTH|REGEX|REPLACE|ROUND|sameTerm|SAMPLE|SECONDS|SHA1|SHA256|SHA384|SHA512|STR|STRAFTER|STRBEFORE|STRDT|STRENDS|STRLANG|STRLEN|STRSTARTS|SUBSTR|SUM|TIMEZONE|TZ|UCASE|URI|YEAR)\b(?=\s*\()/i,/\b(?:BASE|GRAPH|PREFIX)\b/i]}),E.languages.rq=E.languages.sparql}});export{I as a};
