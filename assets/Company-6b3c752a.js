import{u as c,i as r,f as l,k as s,C as p}from"./index-b8509db6.js";import{S as d}from"./SubHeader-52430d82.js";import{L as m}from"./LoadingModal-61b8c14d.js";import{u}from"./useDispatch-a711b7d6.js";function j(){var o,a;const e=u(),t=c(r.selectRows),i=c(r.selectLoading),n=()=>{e(p.doFetch())};return l.useEffect(()=>{n()},[e]),s.jsxs("div",{children:[s.jsx(d,{title:"Company",path:"/"}),s.jsxs("div",{className:"detaill__company",style:{whiteSpace:"pre-line"},children:[i&&s.jsx(m,{}),t&&((o=t[0])==null?void 0:o.companydetails)&&s.jsx("p",{dangerouslySetInnerHTML:{__html:(a=t[0])==null?void 0:a.companydetails},style:{color:"black"}})]})]})}export{j as default};