import{R as d}from"./index-RYns6xqu.js";import"./index-sbqOYYIm.js";const u=({block:r,element:n,modifier:o})=>{let t=r,e=n,a=o;const l="-";return Array.isArray(t)&&(t=t.join(l)),Array.isArray(e)&&(e=e.join(l)),Array.isArray(a)&&(a=a.join(l)),!e&&!a?t:e&&!a?`${t}__${e}`:!e&&a?`${t}--${a}`:`${t}__${e}--${a}`},b=({variant:r="default",size:n="medium",danger:o,children:t,className:e,...a})=>{const l="button",c=u({block:l}),i=u({block:l,modifier:["variant",r]}),s=u({block:l,modifier:["size",n]});let f;o&&!a.disabled&&(f=u({block:l,modifier:"danger"}));const p=[c,i,s,f,e];return d.createElement("button",{className:p.filter(Boolean).join(" "),...a},t)},E=({justify:r="flex-start",align:n="flex-start",vertical:o,reverse:t,gap:e,wrap:a,children:l,className:c,...i})=>{const s="flex",f=u({block:s}),p=u({block:s,modifier:["justify",r]}),h=u({block:s,modifier:["align",n]});let _,v,y,g;t&&(_=u({block:s,modifier:["reverse"]})),e&&(v=u({block:s,modifier:["gap",e]})),a&&(y=u({block:s,modifier:["wrap"]})),o&&(g=u({block:s,modifier:["vertical"]}));const C=[f,p,h,_,v,y,g,c];return d.createElement("div",{className:C.filter(Boolean).join(" "),...i},l)},N="typograph",A="color",j="style",m=(r,{variant:n="default",...o},...t)=>{const e=u({block:[N],element:r}),a=()=>u({block:N,modifier:[A,n]}),l=()=>{let c=[];for(const[i,s]of Object.entries(o))s&&c.push(u({block:N,modifier:[j,i]}));return c.join(" ")};return[e,a(),l(),...t].filter(Boolean).join(" ")},k=({level:r=1,italic:n,underline:o,del:t,mark:e,strong:a,variant:l="default",className:c,children:i,...s})=>{const f=m(`heading${r}`,{italic:n,underline:o,del:t,mark:e,strong:a,variant:l},c);switch(r){case 2:return d.createElement("h2",{className:f,...s},i);case 3:return d.createElement("h3",{className:f,...s},i);default:return d.createElement("h1",{className:f,...s},i)}},x=({strong:r,italic:n,underline:o,del:t,mark:e,variant:a="default",children:l,className:c,...i})=>{const s=m("paragraph",{italic:n,underline:o,del:t,mark:e,strong:r,variant:a},c);return d.createElement("p",{className:s,...i},l)},I=({strong:r,italic:n,underline:o,del:t,mark:e,variant:a="default",children:l,className:c,...i})=>{const s=m("text",{italic:n,underline:o,del:t,mark:e,strong:r,variant:a},c);return d.createElement("span",{className:s,...i},l)},T=({italic:r,underline:n,strong:o,del:t,mark:e,variant:a="default",className:l,children:c,...i})=>{const s=m("link",{italic:r,underline:n,del:t,mark:e,strong:o,variant:a},l);return d.createElement("a",{className:s,...i},c)};b.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},required:!1}}};E.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{justify:{defaultValue:{value:'"flex-start"',computed:!1},required:!1},align:{defaultValue:{value:'"flex-start"',computed:!1},required:!1}}};T.__docgenInfo={description:"",methods:[],displayName:"Link",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};x.__docgenInfo={description:"",methods:[],displayName:"Paragraph",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};I.__docgenInfo={description:"",methods:[],displayName:"Text",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};k.__docgenInfo={description:"",methods:[],displayName:"Title",props:{level:{defaultValue:{value:"1",computed:!1},required:!1},variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};export{b as B,E as F,T as L,x as P,I as T,k as a};
