import{u as c,i,f as l,k as s,C as d}from"./index-15f0e993.js";import{S as p}from"./SubHeader-6b9a2807.js";import{L as m}from"./LoadingModal-235eee83.js";import{u}from"./useDispatch-495faa8e.js";function j(){var a,r;const t=u(),e=c(i.selectRows),o=c(i.selectLoading),n=()=>{t(d.doFetch())};return l.useEffect(()=>{n()},[t]),s.jsxs("div",{children:[s.jsx(p,{title:"Frequently asked questions",path:"/"}),s.jsxs("div",{className:"detaill__company",style:{whiteSpace:"pre-line"},children:[o&&s.jsx(m,{}),!o&&e&&((a=e[0])==null?void 0:a.faqs)&&s.jsx("p",{dangerouslySetInnerHTML:{__html:(r=e[0])==null?void 0:r.faqs},style:{color:"black"}})]})]})}export{j as default};