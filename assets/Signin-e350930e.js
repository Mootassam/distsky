import{z as j,A as s,u as n,j as o,f as l,l as u,k as e,L as f}from"./index-b7f15ddd.js";import{y as r,u as g,a as N,F as b,I as m}from"./InputFormItem-e44d6394.js";import{B as v}from"./ButtonIcon-ce9e00c5.js";import{u as S}from"./useDispatch-f90e63a0.js";const y=j().shape({email:r.string(s("user.fields.username"),{required:!0}),password:r.string(s("user.fields.password"),{required:!0}),rememberMe:r.boolean(s("user.fields.rememberMe"))});function F(){const a=S(),t=n(o.selectLoading),[c]=l.useState({email:"",password:"",rememberMe:!0});l.useEffect(()=>{a(u.doClearErrorMessage())},[a]);const i=g({resolver:N.yupResolver(y),mode:"onSubmit",defaultValues:c}),d=n(o.selectErrorMessage),h=({email:p,password:_,rememberMe:x})=>{a(u.doSigninWithEmailAndPassword(p,_,x))};return e.jsxs("div",{className:"auth__page",children:[e.jsx("div",{className:"auth__header"}),"    ",e.jsxs("div",{className:"auth__header header__signup ",children:[e.jsx("h1",{className:"auth__title",children:" Welcome"}),e.jsx("span",{className:"auth__description __v2",children:"Sign in to your marketing account"})]}),e.jsx(b,{...i,children:e.jsxs("form",{onSubmit:i.handleSubmit(h),children:[e.jsxs("div",{className:"auth__form",children:[e.jsx("div",{className:"form__authgroup",children:e.jsx(m,{type:"text",name:"email",placeholder:s("user.fields.username"),className:"auth__input",externalErrorMessage:d})}),e.jsx("div",{className:"form__authgroup",children:e.jsx(m,{type:"text",name:"password",placeholder:s("user.fields.password"),className:"auth__input"})})]}),e.jsxs("div",{className:"auth__bottom",children:[e.jsxs("button",{className:"auth__button",disabled:t,type:"submit",children:[e.jsx(v,{loading:t}),e.jsx("span",{children:"Sign in"})]}),e.jsx(f,{to:"/auth/signup",className:"remove__ligne",children:e.jsxs("span",{className:"auth__link",children:["Don't have an account? ",e.jsx("span",{className:"signup__link",children:"Sign up here."})," "]})})]})]})})]})}export{F as default};