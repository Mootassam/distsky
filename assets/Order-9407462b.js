import{f as N,u as l,m as r,n as b,k as d}from"./index-553f7bd0.js";import{L as w}from"./LoadingModal-2ac774d9.js";import{D as F}from"./Dates-b345628f.js";import{N as L}from"./Nodata-cd257057.js";import{u as S}from"./useDispatch-526d79f8.js";class f{}f.calcule__total=(c,a)=>c===""||a===""?"":(parseFloat(a)/100*parseFloat(c)).toFixed(3);function A(){const[c,a]=N.useState("completed"),o=S(),e=l(r.selectRows),n=l(r.selectLoading);l(r.selectTotal);const g=l(r.selectHasRows);N.useEffect(()=>{const s={status:c};o(b.doFetch(s,s))},[o,c]);const C=()=>d.jsx(d.Fragment,{children:e.map((s,D)=>{var i,t,x,u,h,j,_,p,v;return d.jsxs("div",{className:"single__product",children:[d.jsxs("div",{className:"order__time",children:[d.jsxs("div",{children:["Order Time: ",F.currentDate(s==null?void 0:s.date)]}),d.jsxs("div",{children:["Order Number: ",s.number]})]}),d.jsx("div",{className:`badge__ ${s==null?void 0:s.status}`,children:d.jsx("label",{children:s==null?void 0:s.status})}),d.jsxs("div",{className:"product__image",children:[d.jsx("div",{className:"image__",children:(s==null?void 0:s.product)&&((i=s==null?void 0:s.product.photo[0])==null?void 0:i.downloadUrl)&&d.jsx("img",{src:(x=(t=s==null?void 0:s.product)==null?void 0:t.photo[0])==null?void 0:x.downloadUrl,alt:""})}),d.jsxs("div",{className:"product__detail",children:[d.jsx("div",{className:"detail__name",children:(u=s==null?void 0:s.product)==null?void 0:u.title}),d.jsxs("div",{className:"detail__price",children:[d.jsx("div",{children:(h=s==null?void 0:s.product)==null?void 0:h.amount}),d.jsx("div",{children:"X 1"})]})]})]}),d.jsxs("div",{className:"bottom__cadre",children:[d.jsxs("div",{className:"cadre__detail",children:[d.jsx("div",{children:"Total order amount"}),d.jsxs("div",{children:[(j=s==null?void 0:s.product)==null?void 0:j.amount," USD"]})]}),d.jsxs("div",{className:"cadre__detail",children:[d.jsx("div",{children:"Commission"}),d.jsxs("div",{children:[(_=s==null?void 0:s.product)==null?void 0:_.commission,"% "]})]}),d.jsxs("div",{className:"cadre__detail",children:[d.jsx("div",{children:"Estimated return"}),d.jsxs("div",{children:[f.calcule__total((p=s==null?void 0:s.product)==null?void 0:p.amount,(v=s==null?void 0:s.product)==null?void 0:v.commission)," ","USD"]})]})]})]},`${s.id}-${D}`)})});return d.jsx("div",{children:d.jsxs("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",maxWidth:500,margin:"auto"},children:[d.jsx("div",{className:"order__list",children:d.jsxs("div",{className:"list__actions",children:[d.jsx("div",{onClick:()=>a("completed"),className:c==="completed"?"active__order":"",children:d.jsx("span",{children:"Completed"})}),d.jsx("div",{onClick:()=>a("pending"),className:c==="pending"?"active__order":"",children:d.jsx("span",{children:"Pending"})}),d.jsx("div",{onClick:()=>a("canceled"),className:c==="canceled"?"active__order":"",children:d.jsx("span",{children:"Canceled"})})]})}),d.jsxs("div",{className:"list__product",children:[n&&d.jsx(w,{}),!n&&e&&d.jsx(C,{})]}),!g&&d.jsx(L,{})]})})}export{A as default};