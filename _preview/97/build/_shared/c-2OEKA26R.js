import{c as N}from"/erad2024/_preview/97/build/_shared/chunk-2NH4LW52.js";var T=N((O,_)=>{function C(e){return e?typeof e=="string"?e:e.source:null}function o(e){return y("(",e,")?")}function y(...e){return e.map(a=>C(a)).join("")}function w(e){let n=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),a="decltype\\(auto\\)",c="[a-zA-Z_]\\w*::",m="<[^<>]+>",p="("+a+"|"+o(c)+"[a-zA-Z_]\\w*"+o(m)+")",r={className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},g="\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",i={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+g+"|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},l={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},s={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{"meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(i,{className:"meta-string"}),{className:"meta-string",begin:/<.*?>/},n,e.C_BLOCK_COMMENT_MODE]},E={className:"title",begin:o(c)+e.IDENT_RE,relevance:0},u=o(c)+e.IDENT_RE+"\\s*\\(",t={keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",literal:"true false nullptr NULL"},d=[s,r,n,e.C_BLOCK_COMMENT_MODE,l,i],f={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:t,contains:d.concat([{begin:/\(/,end:/\)/,keywords:t,contains:d.concat(["self"]),relevance:0}]),relevance:0},b={className:"function",begin:"("+p+"[\\*&\\s]+)+"+u,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:t,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:a,keywords:t,relevance:0},{begin:u,returnBegin:!0,contains:[E],relevance:0},{className:"params",begin:/\(/,end:/\)/,keywords:t,relevance:0,contains:[n,e.C_BLOCK_COMMENT_MODE,i,l,r,{begin:/\(/,end:/\)/,keywords:t,relevance:0,contains:["self",n,e.C_BLOCK_COMMENT_MODE,i,l,r]}]},r,n,e.C_BLOCK_COMMENT_MODE,s]};return{name:"C",aliases:["h"],keywords:t,disableAutodetect:!0,illegal:"</",contains:[].concat(f,b,d,[s,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",end:">",keywords:t,contains:["self",r]},{begin:e.IDENT_RE+"::",keywords:t},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:s,strings:i,keywords:t}}}_.exports=w});export default T();
