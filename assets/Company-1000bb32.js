import{u as c,i as r,f as l,k as s,C as p}from"./index-553f7bd0.js";import{S as d}from"./SubHeader-d960307f.js";import{L as m}from"./LoadingModal-2ac774d9.js";import{u}from"./useDispatch-526d79f8.js";function j(){var o,a;const e=u(),t=c(r.selectRows),i=c(r.selectLoading),n=()=>{e(p.doFetch())};return l.useEffect(()=>{n()},[e]),s.jsxs("div",{children:[s.jsx(d,{title:"Company",path:"/"}),s.jsxs("div",{className:"detaill__company",style:{whiteSpace:"pre-line"},children:[i&&s.jsx(m,{}),t&&((o=t[0])==null?void 0:o.companydetails)&&s.jsx("p",{dangerouslySetInnerHTML:{__html:(a=t[0])==null?void 0:a.companydetails},style:{color:"black"}})]})]})}export{j as default};