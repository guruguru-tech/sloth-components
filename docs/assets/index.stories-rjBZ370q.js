import{x as s}from"./lit-element-wfGqe637.js";import{B as r}from"./index-rbEvlGqs.js";const u=({user:a,onLogin:g,onLogout:m,onCreateAccount:p})=>s`
  <header>
    <div class="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        ${a?r({size:"small",onClick:m,label:"Log out"}):s`${r({size:"small",onClick:g,label:"Log in"})}
            ${r({primary:!0,size:"small",onClick:p,label:"Sign up"})}`}
      </div>
    </div>
  </header>
`,v={title:"Example/Header",tags:["autodocs"],render:a=>u(a)},e={args:{user:{name:"Jane Doe"}}},o={};var t,l,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var n,d,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const h=["LoggedIn","LoggedOut"],x=Object.freeze(Object.defineProperty({__proto__:null,LoggedIn:e,LoggedOut:o,__namedExportsOrder:h,default:v},Symbol.toStringTag,{value:"Module"}));export{u as H,e as L,o as a,x as i};
