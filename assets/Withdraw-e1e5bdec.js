import{z as p,A as a,u as x,j,f as l,l as f,k as s,B as b}from"./index-553f7bd0.js";import{S as _}from"./SubHeader-d960307f.js";import{y as n,u as v,a as y,F as N,I as d}from"./InputFormItem-b2563725.js";import{u as S}from"./useDispatch-526d79f8.js";const F=p().shape({amount:n.integer(a("entities.transaction.fields.amount"),{required:!0,min:100}),withdrawPassword:n.string(a("user.fields.withdrawPassword"),{required:!0})});function A(){var r;const e=x(j.selectCurrentUser),t=S(),o=l.useCallback(async()=>{await t(f.doRefreshCurrentUser())},[t]),c=async({amount:m,withdrawPassword:u})=>{const w={status:"pending",date:new Date,user:e?e.id:null,type:"withdraw",amount:m,vip:e,withdrawPassword:u};await t(b.doCreate(w)),await o()},[h]=l.useState({amount:""}),i=v({resolver:y.yupResolver(F),mode:"onSubmit",defaultValues:h});return s.jsxs("div",{children:[s.jsx(_,{title:"WithDraw",path:"/profile"}),s.jsxs("div",{className:"withdraw__page",children:[s.jsxs("div",{className:"withdraw__content",children:[s.jsxs("div",{className:"withdraw__header",children:[s.jsx("h3",{className:"hall",style:{paddingTop:0},children:"Withdraw Amount:"}),s.jsxs("span",{style:{color:"black",fontSize:"14px"},children:["Availabe balance : ",((r=e==null?void 0:e.balance)==null?void 0:r.toFixed(2))||0," USD"]})]}),s.jsx(N,{...i,children:s.jsx("form",{onSubmit:i.handleSubmit(c),children:s.jsxs("div",{children:[s.jsx(d,{type:"text",name:"amount",placeholder:a("entities.transaction.fields.amount"),className:"input__withdraw"}),s.jsxs("div",{className:"number__click",children:[s.jsx("h3",{className:"hall",style:{paddingTop:0},children:"Withdraw Password:"}),s.jsx(d,{type:"text",name:"withdrawPassword",placeholder:a("user.fields.withdrawPassword"),className:"input__withdraw"})]}),e.withdraw?s.jsx("button",{className:"confirm",type:"submit",children:"Confirm"}):s.jsx("button",{className:"confirm",disabled:!0,children:"Confirm"})]})})})]}),s.jsxs("div",{className:"withdraw__rules",children:[s.jsx("div",{className:"rules__title",children:"Rules Description"}),s.jsxs("ul",{className:"rules__list",children:[s.jsx("li",{children:"(1) minimum withdraw is 100 USD"}),s.jsx("li",{children:"(2) The payment will be made within the next 1 hour, after withdrawal application has been approved."}),s.jsx("li",{children:"(3) incomplete daily order submission is subjected to no withdrawal, all products must be submitted for withdrawal"})]})]})]})]})}export{A as default};