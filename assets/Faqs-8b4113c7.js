import{u as c,i,f as l,k as s,C as d}from"./index-553f7bd0.js";import{S as p}from"./SubHeader-d960307f.js";import{L as m}from"./LoadingModal-2ac774d9.js";import{u}from"./useDispatch-526d79f8.js";function j(){var a,r;const t=u(),e=c(i.selectRows),o=c(i.selectLoading),n=()=>{t(d.doFetch())};return l.useEffect(()=>{n()},[t]),s.jsxs("div",{children:[s.jsx(p,{title:"Frequently asked questions",path:"/"}),s.jsxs("div",{className:"detaill__company",style:{whiteSpace:"pre-line"},children:[o&&s.jsx(m,{}),!o&&e&&((a=e[0])==null?void 0:a.faqs)&&s.jsx("p",{dangerouslySetInnerHTML:{__html:(r=e[0])==null?void 0:r.faqs},style:{color:"black"}})]})]})}export{j as default};