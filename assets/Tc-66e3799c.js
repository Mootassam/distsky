import{u as r,i,f as l,k as s,C as d}from"./index-b8509db6.js";import{S as p}from"./SubHeader-52430d82.js";import{L as m}from"./LoadingModal-61b8c14d.js";import{u}from"./useDispatch-a711b7d6.js";function y(){var a,c;const e=u(),t=r(i.selectRows),o=r(i.selectLoading),n=()=>{e(d.doFetch())};return l.useEffect(()=>{n()},[e]),s.jsxs("div",{children:[s.jsx(p,{title:"Terms & Conditions",path:"/"}),s.jsxs("div",{className:"detaill__company",style:{whiteSpace:"pre-line"},children:[o&&s.jsx(m,{}),!o&&t&&((a=t[0])==null?void 0:a.tc)&&s.jsx("p",{dangerouslySetInnerHTML:{__html:(c=t[0])==null?void 0:c.tc},style:{color:"black"}})]})]})}export{y as default};