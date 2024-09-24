import{j as g}from"./jsx-runtime-DEdD30eg.js";import{r as V}from"./index-RYns6xqu.js";function j(e,s){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&s.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)s.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n}const f=({block:e,element:s,modifier:n})=>{let a=e,r=s,t=n;const o="-";return Array.isArray(a)&&(a=a.join(o)),Array.isArray(r)&&(r=r.join(o)),Array.isArray(t)&&(t=t.join(o)),!r&&!t?a:r&&!t?`${a}__${r}`:!r&&t?`${a}--${t}`:`${a}__${r}--${t}`},K=e=>{var{variant:s="default",size:n="medium",danger:a,children:r,className:t}=e,o=j(e,["variant","size","danger","children","className"]);const c="button",d=f({block:c}),u=f({block:c,modifier:["variant",s]}),m=f({block:c,modifier:["size",n]});let i;a&&!o.disabled&&(i=f({block:c,modifier:"danger"}));const l=[d,u,m,i,t];return g.jsx("button",Object.assign({className:l.filter(Boolean).join(" ")},o,{children:r}))},y="typograph",L="color",w="style",N=(e,s,...n)=>{var{variant:a="default"}=s,r=j(s,["variant"]);const t=f({block:[y],element:e}),o=()=>f({block:y,modifier:[L,a]}),c=()=>{let d=[];for(const[u,m]of Object.entries(r))m&&d.push(f({block:y,modifier:[w,u]}));return d.join(" ")};return[t,o(),c(),...n].filter(Boolean).join(" ")},W=e=>{var{level:s=1,italic:n,underline:a,del:r,mark:t,strong:o,variant:c="default",className:d,children:u}=e,m=j(e,["level","italic","underline","del","mark","strong","variant","className","children"]);const i=N(`heading${s}`,{italic:n,underline:a,del:r,mark:t,strong:o,variant:c},d);switch(s){case 2:return g.jsx("h2",Object.assign({className:i},m,{children:u}));case 3:return g.jsx("h3",Object.assign({className:i},m,{children:u}));default:return g.jsx("h1",Object.assign({className:i},m,{children:u}))}},Z=e=>{var{strong:s,italic:n,underline:a,del:r,mark:t,variant:o="default",children:c,className:d}=e,u=j(e,["strong","italic","underline","del","mark","variant","children","className"]);const m=N("paragraph",{italic:n,underline:a,del:r,mark:t,strong:s,variant:o},d);return g.jsx("p",Object.assign({className:m},u,{children:c}))},q=e=>{var{strong:s,italic:n,underline:a,del:r,mark:t,variant:o="default",children:c,className:d}=e,u=j(e,["strong","italic","underline","del","mark","variant","children","className"]);const m=N("text",{italic:n,underline:a,del:r,mark:t,strong:s,variant:o},d);return g.jsx("span",Object.assign({className:m},u,{children:c}))},J=e=>{var{italic:s,underline:n,strong:a,del:r,mark:t,variant:o="default",className:c,children:d}=e,u=j(e,["italic","underline","strong","del","mark","variant","className","children"]);const m=N("link",{italic:s,underline:n,del:r,mark:t,strong:a,variant:o},c);return g.jsx("a",Object.assign({className:m},u,{children:d}))},B=e=>s=>{var{column:n,className:a}=s,r=j(s,["column","className"]);const t=Array.isArray(n)?n.join(" "):n;return g.jsx(e,Object.assign({},r,{className:[t,a].join(" ")}))},I=e=>{var{justify:s="flex-start",align:n="flex-start",vertical:a,reverse:r,gap:t,wrap:o,children:c,className:d,as:u}=e,m=j(e,["justify","align","vertical","reverse","gap","wrap","children","className","as"]);const i=u||"div",l="flex",b=f({block:l}),v=f({block:l,modifier:["justify",s]}),O=f({block:l,modifier:["align",n]});let p,h,_,C,x;r&&(h=f({block:l,modifier:["reverse"]})),t&&(_=f({block:l,modifier:["gap"]})),o&&(C=f({block:l,modifier:["wrap"]})),a&&(x=f({block:l,modifier:["vertical"]}));const P=[b,v,O,p,h,_,C,x,d];return g.jsx(i,Object.assign({className:P.filter(Boolean).join(" ")},m,{children:c}))};var Q=B(I);const R="form",$=e=>e.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`),k=(e,s,...n)=>[f({block:R,element:e}),(()=>{let t=[];for(const[o,c]of Object.entries(s))c&&t.push(f({block:R,modifier:[$(o),c].filter(d=>typeof d=="string")}));return t.join(" ")})(),...n].filter(Boolean).join(" "),X=e=>{var{fontSize:s,invalid:n,className:a}=e,r=j(e,["fontSize","invalid","className"]);const t=k("label",{fontSize:s,invalid:n},a);return g.jsx("label",Object.assign({},r,{className:t,children:r.children}))},ee=e=>{var{className:s,fontSize:n="medium",invalid:a}=e,r=j(e,["className","fontSize","invalid"]);const t=k("input",{fontSize:n,invalid:a},s);return g.jsx("input",Object.assign({},r,{className:t}))},ae=e=>{var{children:s}=e,n=j(e,["children"]);return g.jsx("form",Object.assign({},n,{children:s}))},A=e=>s=>({type:e,payload:s}),S="@FORM_STATE/CHANGE_VALUE",E=A(S),T="@FORM_STATE/CHANGE_ERROR",z=A(T),F="@FORM_STATE/RESET_VALUE",G=A(F),M=(e,s)=>typeof e=="string"?s??"":s??!1,H=e=>s=>{var n;for(const a in e.form){const r=e.form[a];s.form=Object.assign(Object.assign({},(n=s.form)!==null&&n!==void 0?n:{}),{[a]:{element:{name:a,id:r.id,value:r.defaultValue},error:{valid:!0},validationEvent:r.validationEvent}})}return s},Y=(e,s)=>{switch(s.type){case S:{const{name:n,value:a,error:r}=s.payload;return Object.assign(Object.assign({},e),{form:Object.assign(Object.assign({},e.form),{[n]:Object.assign(Object.assign({},e.form[n]),{element:Object.assign(Object.assign({},e.form[n].element),{value:a}),error:r})})})}case F:{const{name:n,defaultValue:a}=s.payload;return Object.assign(Object.assign({},e),{form:Object.assign(Object.assign({},e.form),{[n]:Object.assign(Object.assign({},e.form[n]),{element:Object.assign(Object.assign({},e.form[n].element),{value:M(e.form[n].element.value,a)}),error:void 0})})})}case T:{const{name:n,error:a}=s.payload;return Object.assign(Object.assign({},e),{form:Object.assign(Object.assign({},e.form),{[n]:Object.assign(Object.assign({},e.form[n]),{error:a})})})}default:return e}},se=(e,s={})=>{const[n,a]=V.useReducer(Y,s,H(e)),r=()=>{var i,l,b;let v=!0;for(const O in n.form){const p=n.form[O],h=(b=(l=(i=e.form[O]).validate)===null||l===void 0?void 0:l.call(i,p.element.value))!==null&&b!==void 0?b:{valid:!0};h.valid||(a(E({name:O,value:p.element.value,error:h})),v=!1)}return v},t=i=>l=>{var b,v;const{value:O,name:p}=l.target;let h;i.useValidate&&(h=(v=(b=e.form[p]).validate)===null||v===void 0?void 0:v.call(b,O)),a(E({name:p,value:O,error:h}))},o=i=>l=>{var b,v;if(!i.useValidate)return;const{value:O,name:p}=l.target;a(z({name:p,error:(v=(b=e.form[p]).validate)===null||v===void 0?void 0:v.call(b,O)}))},c=i=>{var l;i.preventDefault(),!(e.submitWithValidation&&!r())&&((l=e.submit)===null||l===void 0||l.call(e,n.form))},d=i=>l=>{a(G({name:i,defaultValue:l}))},u=i=>l=>{a(E({name:i,value:l}))},m=Object.assign({},n);for(const i in m.form){const l=m.form[i];l.element.onBlur=o({useValidate:l.validationEvent==="blur"}),l.element.onChange=t({useValidate:l.validationEvent==="change"}),l.reset=d(i),l.change=u(i)}return m.onSubmit=c,m};export{K as B,Q as F,ee as I,X as L,Z as P,W as T,ae as a,J as b,q as c,se as u};