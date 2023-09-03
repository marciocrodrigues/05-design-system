import{R as m,r as h,a as Ne}from"./index-902e4630.js";import{$ as he,a as q,_ as H,b as Te,c as ne,d as be,e as _e,f as se,g as Oe,h as Fe}from"./index-883097aa.js";import{j as R}from"./jsx-runtime-0741ab7f.js";var x="colors",I="sizes",u="space",$e={gap:u,gridGap:u,columnGap:u,gridColumnGap:u,rowGap:u,gridRowGap:u,inset:u,insetBlock:u,insetBlockEnd:u,insetBlockStart:u,insetInline:u,insetInlineEnd:u,insetInlineStart:u,margin:u,marginTop:u,marginRight:u,marginBottom:u,marginLeft:u,marginBlock:u,marginBlockEnd:u,marginBlockStart:u,marginInline:u,marginInlineEnd:u,marginInlineStart:u,padding:u,paddingTop:u,paddingRight:u,paddingBottom:u,paddingLeft:u,paddingBlock:u,paddingBlockEnd:u,paddingBlockStart:u,paddingInline:u,paddingInlineEnd:u,paddingInlineStart:u,top:u,right:u,bottom:u,left:u,scrollMargin:u,scrollMarginTop:u,scrollMarginRight:u,scrollMarginBottom:u,scrollMarginLeft:u,scrollMarginX:u,scrollMarginY:u,scrollMarginBlock:u,scrollMarginBlockEnd:u,scrollMarginBlockStart:u,scrollMarginInline:u,scrollMarginInlineEnd:u,scrollMarginInlineStart:u,scrollPadding:u,scrollPaddingTop:u,scrollPaddingRight:u,scrollPaddingBottom:u,scrollPaddingLeft:u,scrollPaddingX:u,scrollPaddingY:u,scrollPaddingBlock:u,scrollPaddingBlockEnd:u,scrollPaddingBlockStart:u,scrollPaddingInline:u,scrollPaddingInlineEnd:u,scrollPaddingInlineStart:u,fontSize:"fontSizes",background:x,backgroundColor:x,backgroundImage:x,borderImage:x,border:x,borderBlock:x,borderBlockEnd:x,borderBlockStart:x,borderBottom:x,borderBottomColor:x,borderColor:x,borderInline:x,borderInlineEnd:x,borderInlineStart:x,borderLeft:x,borderLeftColor:x,borderRight:x,borderRightColor:x,borderTop:x,borderTopColor:x,caretColor:x,color:x,columnRuleColor:x,fill:x,outline:x,outlineColor:x,stroke:x,textDecorationColor:x,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:I,minBlockSize:I,maxBlockSize:I,inlineSize:I,minInlineSize:I,maxInlineSize:I,width:I,minWidth:I,maxWidth:I,height:I,minHeight:I,maxHeight:I,flexBasis:I,gridTemplateColumns:I,gridTemplateRows:I,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},De=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,U=()=>{const e=Object.create(null);return(t,n,...r)=>{const o=(i=>JSON.stringify(i,De))(t);return o in e?e[o]:e[o]=n(t,...r)}},W=Symbol.for("sxs.internal"),ie=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),le=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:He}=Object.prototype,oe=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),Ue=/\s+(?![^()]*\))/,F=e=>t=>e(...typeof t=="string"?String(t).split(Ue):[t]),ce={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:F((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:F((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:F((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:F((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:F((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:F((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},re=/([\d.]+)([^]*)/,Ve=(e,t)=>e.length?e.reduce((n,r)=>(n.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(o)?`:is(${r})`:r):r+" "+o)),n),[]):t,Ge=(e,t)=>e in Ye&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(n,r,o,i)=>r+(o==="stretch"?`-moz-available${i};${oe(e)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${oe(e)}:${r}fit-content`)+i):String(t),Ye={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},A=e=>e?e+"-":"",xe=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(r,o,i,c,s)=>c=="$"==!!i?r:(o||c=="--"?"calc(":"")+"var(--"+(c==="$"?A(t)+(s.includes("$")?"":A(n))+s.replace(/\$/g,"-"):s)+")"+(o||c=="--"?"*"+(o||"")+(i||"1")+")":"")),qe=/\s*,\s*(?![^()]*\))/,Ke=Object.prototype.toString,D=(e,t,n,r,o)=>{let i,c,s;const a=(d,p,f)=>{let l,g;const b=y=>{for(l in y){const S=l.charCodeAt(0)===64,C=S&&Array.isArray(y[l])?y[l]:[y[l]];for(g of C){const E=/[A-Z]/.test($=l)?$:$.replace(/-[^]/g,w=>w[1].toUpperCase()),V=typeof g=="object"&&g&&g.toString===Ke&&(!r.utils[E]||!p.length);if(E in r.utils&&!V){const w=r.utils[E];if(w!==c){c=w,b(w(g)),c=null;continue}}else if(E in ce){const w=ce[E];if(w!==s){s=w,b(w(g)),s=null;continue}}if(S&&(k=l.slice(1)in r.media?"@media "+r.media[l.slice(1)]:l,l=k.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(w,B,j,M,z,P)=>{const O=re.test(B),K=.0625*(O?-1:1),[Z,ae]=O?[M,B]:[B,M];return"("+(j[0]==="="?"":j[0]===">"===O?"max-":"min-")+Z+":"+(j[0]!=="="&&j.length===1?ae.replace(re,(Le,ee,te)=>Number(ee)+K*(j===">"?1:-1)+te):ae)+(z?") and ("+(z[0]===">"?"min-":"max-")+Z+":"+(z.length===1?P.replace(re,(Le,ee,te)=>Number(ee)+K*(z===">"?-1:1)+te):P):"")+")"})),V){const w=S?f.concat(l):[...f],B=S?[...p]:Ve(p,l.split(qe));i!==void 0&&o(de(...i)),i=void 0,a(g,B,w)}else i===void 0&&(i=[[],p,f]),l=S||l.charCodeAt(0)!==36?l:`--${A(r.prefix)}${l.slice(1).replace(/\$/g,"-")}`,g=V?g:typeof g=="number"?g&&E in Ze?String(g)+"px":String(g):xe(Ge(E,g??""),r.prefix,r.themeMap[E]),i[0].push(`${S?`${l} `:`${oe(l)}:`}${g}`)}}var k,$};b(d),i!==void 0&&o(de(...i)),i=void 0};a(e,t,n)},de=(e,t,n)=>`${n.map(r=>`${r}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,Ze={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},ue=e=>String.fromCharCode(e+(e>25?39:97)),L=e=>(t=>{let n,r="";for(n=Math.abs(t);n>52;n=n/52|0)r=ue(n%52)+r;return ue(n%52)+r})(((t,n)=>{let r=n.length;for(;r;)t=33*t^n.charCodeAt(--r);return t})(5381,JSON.stringify(e))>>>0),Y=["themed","global","styled","onevar","resonevar","allvar","inline"],Je=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},Xe=e=>{let t;const n=()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,c)=>{const{cssText:s}=i;let a="";if(s.startsWith("--sxs"))return"";if(o[c-1]&&(a=o[c-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const d in t.rules)if(t.rules[d].group===i)return`--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${s}`;return i.cssRules.length?`${a}${s}`:""}return s}).join("")},r=()=>{if(t){const{rules:s,sheet:a}=t;if(!a.deleteRule){for(;Object(Object(a.cssRules)[0]).type===3;)a.cssRules.splice(0,1);a.cssRules=[]}for(const d in s)delete s[d]}const o=Object(e).styleSheets||[];for(const s of o)if(Je(s)){for(let a=0,d=s.cssRules;d[a];++a){const p=Object(d[a]);if(p.type!==1)continue;const f=Object(d[a+1]);if(f.type!==4)continue;++a;const{cssText:l}=p;if(!l.startsWith("--sxs"))continue;const g=l.slice(14,-3).trim().split(/\s+/),b=Y[g[0]];b&&(t||(t={sheet:s,reset:r,rules:{},toString:n}),t.rules[b]={group:f,index:a,cache:new Set(g)})}if(t)break}if(!t){const s=(a,d)=>({type:d,cssRules:[],insertRule(p,f){this.cssRules.splice(f,0,s(p,{import:3,undefined:1}[(p.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return a==="@media{}"?`@media{${[].map.call(this.cssRules,p=>p.cssText).join("")}}`:a}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:s("","text/css"),rules:{},reset:r,toString:n}}const{sheet:i,rules:c}=t;for(let s=Y.length-1;s>=0;--s){const a=Y[s];if(!c[a]){const d=Y[s+1],p=c[d]?c[d].index:i.cssRules.length;i.insertRule("@media{}",p),i.insertRule(`--sxs{--sxs:${s}}`,p),c[a]={group:i.cssRules[p+1],index:p,cache:new Set([s])}}Qe(c[a])}};return r(),t},Qe=e=>{const t=e.group;let n=t.cssRules.length;e.apply=r=>{try{t.insertRule(r,n),++n}catch{}}},G=Symbol(),et=U(),fe=(e,t)=>et(e,()=>(...n)=>{let r={type:null,composers:new Set};for(const o of n)if(o!=null)if(o[W]){r.type==null&&(r.type=o[W].type);for(const i of o[W].composers)r.composers.add(i)}else o.constructor!==Object||o.$$typeof?r.type==null&&(r.type=o):r.composers.add(tt(o,e));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),rt(e,r,t)}),tt=({variants:e,compoundVariants:t,defaultVariants:n,...r},o)=>{const i=`${A(o.prefix)}c-${L(r)}`,c=[],s=[],a=Object.create(null),d=[];for(const l in n)a[l]=String(n[l]);if(typeof e=="object"&&e)for(const l in e){p=a,f=l,He.call(p,f)||(a[l]="undefined");const g=e[l];for(const b in g){const y={[l]:String(b)};String(b)==="undefined"&&d.push(l);const k=g[b],$=[y,k,!le(k)];c.push($)}}var p,f;if(typeof t=="object"&&t)for(const l of t){let{css:g,...b}=l;g=typeof g=="object"&&g||{};for(const k in b)b[k]=String(b[k]);const y=[b,g,!le(g)];s.push(y)}return[i,r,c,s,a,d]},rt=(e,t,n)=>{const[r,o,i,c]=nt(t.composers),s=typeof t.type=="function"||t.type.$$typeof?(f=>{function l(){for(let g=0;g<l[G].length;g++){const[b,y]=l[G][g];f.rules[b].apply(y)}return l[G]=[],null}return l[G]=[],l.rules={},Y.forEach(g=>l.rules[g]={apply:b=>l[G].push([g,b])}),l})(n):null,a=(s||n).rules,d=`.${r}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,p=f=>{f=typeof f=="object"&&f||ot;const{css:l,...g}=f,b={};for(const $ in i)if(delete g[$],$ in f){let S=f[$];typeof S=="object"&&S?b[$]={"@initial":i[$],...S}:(S=String(S),b[$]=S!=="undefined"||c.has($)?S:i[$])}else b[$]=i[$];const y=new Set([...o]);for(const[$,S,C,E]of t.composers){n.rules.styled.cache.has($)||(n.rules.styled.cache.add($),D(S,[`.${$}`],[],e,B=>{a.styled.apply(B)}));const V=ge(C,b,e.media),w=ge(E,b,e.media,!0);for(const B of V)if(B!==void 0)for(const[j,M,z]of B){const P=`${$}-${L(M)}-${j}`;y.add(P);const O=(z?n.rules.resonevar:n.rules.onevar).cache,K=z?a.resonevar:a.onevar;O.has(P)||(O.add(P),D(M,[`.${P}`],[],e,Z=>{K.apply(Z)}))}for(const B of w)if(B!==void 0)for(const[j,M]of B){const z=`${$}-${L(M)}-${j}`;y.add(z),n.rules.allvar.cache.has(z)||(n.rules.allvar.cache.add(z),D(M,[`.${z}`],[],e,P=>{a.allvar.apply(P)}))}}if(typeof l=="object"&&l){const $=`${r}-i${L(l)}-css`;y.add($),n.rules.inline.cache.has($)||(n.rules.inline.cache.add($),D(l,[`.${$}`],[],e,S=>{a.inline.apply(S)}))}for(const $ of String(f.className||"").trim().split(/\s+/))$&&y.add($);const k=g.className=[...y].join(" ");return{type:t.type,className:k,selector:d,props:g,toString:()=>k,deferredInjector:s}};return ie(p,{className:r,selector:d,[W]:t,toString:()=>(n.rules.styled.cache.has(r)||p(),r)})},nt=e=>{let t="";const n=[],r={},o=[];for(const[i,,,,c,s]of e){t===""&&(t=i),n.push(i),o.push(...s);for(const a in c){const d=c[a];(r[a]===void 0||d!=="undefined"||s.includes(d))&&(r[a]=d)}}return[t,n,r,new Set(o)]},ge=(e,t,n,r)=>{const o=[];e:for(let[i,c,s]of e){if(s)continue;let a,d=0,p=!1;for(a in i){const f=i[a];let l=t[a];if(l!==f){if(typeof l!="object"||!l)continue e;{let g,b,y=0;for(const k in l){if(f===String(l[k])){if(k!=="@initial"){const $=k.slice(1);(b=b||[]).push($ in n?n[$]:k.replace(/^@media ?/,"")),p=!0}d+=y,g=!0}++y}if(b&&b.length&&(c={["@media "+b.join(", ")]:c}),!g)continue e}}}(o[d]=o[d]||[]).push([r?"cv":`${a}-${i[a]}`,c,p])}return o},ot={},it=U(),at=(e,t)=>it(e,()=>(...n)=>{const r=()=>{for(let o of n){o=typeof o=="object"&&o||{};let i=L(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let c=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let s of[].concat(o["@import"]))s=s.includes('"')||s.includes("'")?s:`"${s}"`,t.sheet.insertRule(`@import ${s};`,c++);delete o["@import"]}D(o,[],[],e,c=>{t.rules.global.apply(c)})}}return""};return ie(r,{toString:r})}),st=U(),lt=(e,t)=>st(e,()=>n=>{const r=`${A(e.prefix)}k-${L(n)}`,o=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const i=[];D(n,[],[],e,s=>i.push(s));const c=`@keyframes ${r}{${i.join("")}}`;t.rules.global.apply(c)}return r};return ie(o,{get name(){return o()},toString:o})}),ct=class{constructor(e,t,n,r){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=n==null?"":String(n),this.prefix=r==null?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+A(this.prefix)+A(this.scale)+this.token}toString(){return this.computedValue}},dt=U(),ut=(e,t)=>dt(e,()=>(n,r)=>{r=typeof n=="object"&&n||Object(r);const o=`.${n=(n=typeof n=="string"?n:"")||`${A(e.prefix)}t-${L(r)}`}`,i={},c=[];for(const a in r){i[a]={};for(const d in r[a]){const p=`--${A(e.prefix)}${a}-${d}`,f=xe(String(r[a][d]),e.prefix,a);i[a][d]=new ct(d,f,a,e.prefix),c.push(`${p}:${f}`)}}const s=()=>{if(c.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const a=`${r===e.theme?":root,":""}.${n}{${c.join(";")}}`;t.rules.themed.apply(a)}return n};return{...i,get className(){return s()},selector:o,toString:s}}),ft=U(),gt=U(),mt=e=>{const t=(n=>{let r=!1;const o=ft(n,i=>{r=!0;const c="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",s=typeof i.media=="object"&&i.media||{},a=typeof i.root=="object"?i.root||null:globalThis.document||null,d=typeof i.theme=="object"&&i.theme||{},p={prefix:c,media:s,theme:d,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...$e},utils:typeof i.utils=="object"&&i.utils||{}},f=Xe(a),l={css:fe(p,f),globalCss:at(p,f),keyframes:lt(p,f),createTheme:ut(p,f),reset(){f.reset(),l.theme.toString()},theme:{},sheet:f,config:p,prefix:c,getCssText:f.toString,toString:f.toString};return String(l.theme=l.createTheme(d)),l});return r||o.reset(),o})(e);return t.styled=(({config:n,sheet:r})=>gt(n,()=>{const o=fe(n,r);return(...i)=>{const c=o(...i),s=c[W].type,a=m.forwardRef((d,p)=>{const f=d&&d.as||s,{props:l,deferredInjector:g}=c(d);return delete l.as,l.ref=p,g?m.createElement(m.Fragment,null,m.createElement(f,l),m.createElement(g,null)):m.createElement(f,l)});return a.className=c.className,a.displayName=`Styled.${s.displayName||s.name||s}`,a.selector=c.selector,a.toString=()=>c.selector,a[W]=c[W],a}}))(t),t};const ke="Avatar",[pt,vr]=he(ke),[ht,ye]=pt(ke),bt=h.forwardRef((e,t)=>{const{__scopeAvatar:n,...r}=e,[o,i]=h.useState("idle");return h.createElement(ht,{scope:n,imageLoadingStatus:o,onImageLoadingStatusChange:i},h.createElement(q.span,H({},r,{ref:t})))}),$t="AvatarImage",xt=h.forwardRef((e,t)=>{const{__scopeAvatar:n,src:r,onLoadingStatusChange:o=()=>{},...i}=e,c=ye($t,n),s=St(r),a=Te(d=>{o(d),c.onImageLoadingStatusChange(d)});return ne(()=>{s!=="idle"&&a(s)},[s,a]),s==="loaded"?h.createElement(q.img,H({},i,{ref:t,src:r})):null}),kt="AvatarFallback",yt=h.forwardRef((e,t)=>{const{__scopeAvatar:n,delayMs:r,...o}=e,i=ye(kt,n),[c,s]=h.useState(r===void 0);return h.useEffect(()=>{if(r!==void 0){const a=window.setTimeout(()=>s(!0),r);return()=>window.clearTimeout(a)}},[r]),c&&i.imageLoadingStatus!=="loaded"?h.createElement(q.span,H({},o,{ref:t})):null});function St(e){const[t,n]=h.useState("idle");return h.useEffect(()=>{if(!e){n("error");return}let r=!0;const o=new window.Image,i=c=>()=>{r&&n(c)};return n("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{r=!1}},[e]),t}const vt=bt,Et=xt,Ct=yt;var It=h.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Se=function(t,n,r){var o=r.get(t);return o?o(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function me(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var ve=h.forwardRef(function(e,t){var n=e.alt,r=e.color,o=e.size,i=e.weight,c=e.mirrored,s=e.children,a=e.renderPath,d=me(e,["alt","color","size","weight","mirrored","children","renderPath"]),p=h.useContext(It),f=p.color,l=f===void 0?"currentColor":f,g=p.size,b=p.weight,y=b===void 0?"regular":b,k=p.mirrored,$=k===void 0?!1:k,S=me(p,["color","size","weight","mirrored"]);return m.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??g,height:o??g,fill:r??l,viewBox:"0 0 256 256",transform:c||$?"scale(-1, 1)":void 0},S,d),!!n&&m.createElement("title",null,n),s,m.createElement("rect",{width:"256",height:"256",fill:"none"}),a(i??y,r??l))});ve.displayName="IconBase";const Ee=ve;var T=new Map;T.set("bold",function(e){return m.createElement(m.Fragment,null,m.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});T.set("duotone",function(e){return m.createElement(m.Fragment,null,m.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});T.set("fill",function(){return m.createElement(m.Fragment,null,m.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});T.set("light",function(e){return m.createElement(m.Fragment,null,m.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});T.set("thin",function(e){return m.createElement(m.Fragment,null,m.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});T.set("regular",function(e){return m.createElement(m.Fragment,null,m.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var wt=function(t,n){return Se(t,n,T)},Ce=h.forwardRef(function(e,t){return m.createElement(Ee,Object.assign({ref:t},e,{renderPath:wt}))});Ce.displayName="Check";const Rt=Ce;var _=new Map;_.set("bold",function(e){return m.createElement(m.Fragment,null,m.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),m.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});_.set("duotone",function(e){return m.createElement(m.Fragment,null,m.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),m.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),m.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});_.set("fill",function(){return m.createElement(m.Fragment,null,m.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});_.set("light",function(e){return m.createElement(m.Fragment,null,m.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),m.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});_.set("thin",function(e){return m.createElement(m.Fragment,null,m.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),m.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});_.set("regular",function(e){return m.createElement(m.Fragment,null,m.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),m.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Bt=function(t,n){return Se(t,n,_)},Ie=h.forwardRef(function(e,t){return m.createElement(Ee,Object.assign({ref:t},e,{renderPath:Bt}))});Ie.displayName="User";const zt=Ie;function jt(e,t){return h.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}const we=e=>{const{present:t,children:n}=e,r=Pt(t),o=typeof n=="function"?n({present:r.isPresent}):h.Children.only(n),i=be(r.ref,o.ref);return typeof n=="function"||r.isPresent?h.cloneElement(o,{ref:i}):null};we.displayName="Presence";function Pt(e){const[t,n]=h.useState(),r=h.useRef({}),o=h.useRef(e),i=h.useRef("none"),c=e?"mounted":"unmounted",[s,a]=jt(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return h.useEffect(()=>{const d=J(r.current);i.current=s==="mounted"?d:"none"},[s]),ne(()=>{const d=r.current,p=o.current;if(p!==e){const l=i.current,g=J(d);e?a("MOUNT"):g==="none"||(d==null?void 0:d.display)==="none"?a("UNMOUNT"):a(p&&l!==g?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,a]),ne(()=>{if(t){const d=f=>{const g=J(r.current).includes(f.animationName);f.target===t&&g&&Ne.flushSync(()=>a("ANIMATION_END"))},p=f=>{f.target===t&&(i.current=J(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:h.useCallback(d=>{d&&(r.current=getComputedStyle(d)),n(d)},[])}}function J(e){return(e==null?void 0:e.animationName)||"none"}const Re="Checkbox",[At,Er]=he(Re),[Mt,Wt]=At(Re),Lt=h.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:o,defaultChecked:i,required:c,disabled:s,value:a="on",onCheckedChange:d,...p}=e,[f,l]=h.useState(null),g=be(t,C=>l(C)),b=h.useRef(!1),y=f?!!f.closest("form"):!0,[k=!1,$]=_e({prop:o,defaultProp:i,onChange:d}),S=h.useRef(k);return h.useEffect(()=>{const C=f==null?void 0:f.form;if(C){const E=()=>$(S.current);return C.addEventListener("reset",E),()=>C.removeEventListener("reset",E)}},[f,$]),h.createElement(Mt,{scope:n,state:k,disabled:s},h.createElement(q.button,H({type:"button",role:"checkbox","aria-checked":N(k)?"mixed":k,"aria-required":c,"data-state":Be(k),"data-disabled":s?"":void 0,disabled:s,value:a},p,{ref:g,onKeyDown:se(e.onKeyDown,C=>{C.key==="Enter"&&C.preventDefault()}),onClick:se(e.onClick,C=>{$(E=>N(E)?!0:!E),y&&(b.current=C.isPropagationStopped(),b.current||C.stopPropagation())})})),y&&h.createElement(_t,{control:f,bubbles:!b.current,name:r,value:a,checked:k,required:c,disabled:s,style:{transform:"translateX(-100%)"}}))}),Nt="CheckboxIndicator",Tt=h.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...o}=e,i=Wt(Nt,n);return h.createElement(we,{present:r||N(i.state)||i.state===!0},h.createElement(q.span,H({"data-state":Be(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),_t=e=>{const{control:t,checked:n,bubbles:r=!0,...o}=e,i=h.useRef(null),c=Oe(n),s=Fe(t);return h.useEffect(()=>{const a=i.current,d=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(d,"checked").set;if(c!==n&&f){const l=new Event("click",{bubbles:r});a.indeterminate=N(n),f.call(a,N(n)?!1:n),a.dispatchEvent(l)}},[c,n,r]),h.createElement("input",H({type:"checkbox","aria-hidden":!0,defaultChecked:N(n)?!1:n},o,{tabIndex:-1,ref:i,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function N(e){return e==="indeterminate"}function Be(e){return N(e)?"indeterminate":e?"checked":"unchecked"}const Ot=Lt,Ft=Tt;var Dt=Object.defineProperty,Ht=Object.defineProperties,Ut=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,pe=(e,t,n)=>t in e?Dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Q=(e,t)=>{for(var n in t||(t={}))ze.call(t,n)&&pe(e,n,t[n]);if(X)for(var n of X(t))je.call(t,n)&&pe(e,n,t[n]);return e},Pe=(e,t)=>Ht(e,Ut(t)),Vt=(e,t)=>{var n={};for(var r in e)ze.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&X)for(var r of X(e))t.indexOf(r)<0&&je.call(e,r)&&(n[r]=e[r]);return n},Gt={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D",teste:"#FFF"},Yt={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},qt={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},Kt={default:"Roboto, sans-serif",code:"monospace"},Zt={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},Jt={regular:"400",medium:"500",bold:"700"},Xt={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{styled:v,css:Cr,globalCss:Ir,keyframes:Ae,getCssText:wr,theme:Rr,createTheme:Br,config:zr}=mt({themeMap:Pe(Q({},$e),{height:"space",width:"space"}),theme:{colors:Gt,fontSizes:Zt,fontWeights:Jt,fonts:Kt,lineHeights:Xt,radii:qt,space:Yt}}),Qt=v("div",{padding:"$6",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});Qt.displayName="Box";var Me=v("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"$md"}});Me.displayName="Text";var er=v("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"$md"}});er.displayName="Heading";var tr=v(vt,{borderRadius:"$full",display:"inline-block",width:"$16",height:"$16",overflow:"hidden"}),rr=v(Et,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),nr=v(Ct,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function or(e){return R.jsxs(tr,{children:[R.jsx(rr,Q({},e)),R.jsx(nr,{delayMs:600,children:R.jsx(zt,{})})]})}or.displyName="Avatar";var ir=v("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",padding:"0 $4",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},"&:focus":{boxShadow:"0 0 0 2px $colors$gray100"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{borderColor:"$gray200",color:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});ir.displayName="Button";var ar=v("div",{background:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"center",variants:{size:{sm:{padding:"$2 $3"},md:{padding:"$3 $4"}}},"&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"},defaultVariants:{size:"md"}}),sr=v("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"$regular"}),lr=v("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}}),We=h.forwardRef((e,t)=>{var n=e,{prefix:r}=n,o=Vt(n,["prefix"]);return R.jsxs(ar,{children:[!!r&&R.jsx(sr,{children:r}),R.jsx(lr,Q({ref:t},o))]})});We.displayName="TextInput";var cr=v("textarea",{background:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});cr.displayName="TextArea";var dr=v(Ot,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},'&:focus, &[data-state="checked"]':{border:"2px solid $ignite300"}}),ur=Ae({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),fr=Ae({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),gr=v(Ft,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${ur} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${fr} 200ms ease-out`}});function mr(e){return R.jsx(dr,Pe(Q({},e),{children:R.jsx(gr,{asChild:!0,children:R.jsx(Rt,{weight:"bold"})})}))}mr.displyName="Checkbox";var pr=v("div",{}),hr=v(Me,{color:"$gray200",defaultVariants:{size:"xs"}}),br=v("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),$r=v("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function xr({size:e,currentStep:t=1}){return R.jsxs(pr,{children:[R.jsxs(hr,{children:["Passo ",t," de ",e]}),R.jsx(br,{css:{"--steps-size":e},children:Array.from({length:e},(n,r)=>r+1).map(n=>R.jsx($r,{active:t>=n},n))})]})}xr.displyName="MultiStep";We.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{or as A,Qt as B,mr as C,er as H,Ee as I,xr as M,We as T,Me as a,cr as b,ir as c,Se as r};
//# sourceMappingURL=index-d0b7b7f7.js.map
