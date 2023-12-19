"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[375],{3535:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var o=t(5893),s=t(1151);const i={},r="Moving components to the component library.",c={id:"Mimir/Remaining work/moving-of-components",title:"Moving components to the component library.",description:"There are some simple tasks that need to be done to clean things up a bit. These are not urgent, but I'm including a",source:"@site/docs/Mimir/Remaining work/moving-of-components.md",sourceDirName:"Mimir/Remaining work",slug:"/Mimir/Remaining work/moving-of-components",permalink:"/documents/docs/Mimir/Remaining work/moving-of-components",draft:!1,unlisted:!1,editUrl:"https://github.com/mimir-org/documents/tree/main/docs/Mimir/Remaining work/moving-of-components.md",tags:[],version:"current",frontMatter:{},sidebar:"mimirDocs",previous:{title:"Remaining work",permalink:"/documents/docs/category/remaining-work"},next:{title:"New Components and Functionality",permalink:"/documents/docs/Mimir/Remaining work/new-components"}},a={},m=[{value:"Assets",id:"assets",level:2},{value:"src/client/src/compLibrary",id:"srcclientsrccomplibrary",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"moving-components-to-the-component-library",children:"Moving components to the component library."}),"\n",(0,o.jsx)(n.p,{children:"There are some simple tasks that need to be done to clean things up a bit. These are not urgent, but I'm including a\nlist of things we know need to be moved; it's quite possible there are more."}),"\n",(0,o.jsx)(n.h2,{id:"assets",children:"Assets"}),"\n",(0,o.jsxs)(n.p,{children:["One of the simplest things to move right now are the icons used in Mimir; these belong in the component library. There\nis also an issue that has arisen somewhere with the ",(0,o.jsx)(n.code,{children:"alt"})," prop for these icons that needs to be fixed at some point.\nCheck A11y best practices to find out whether SVG icons need an alt prop or not."]}),"\n",(0,o.jsxs)(n.p,{children:["The icons to be moved are currently located here (",(0,o.jsx)(n.code,{children:"/src/assets/icons/"}),"):"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(8155).Z+"",width:"822",height:"1106"})}),"\n",(0,o.jsxs)(n.p,{children:["There are also several things that have no business being in the Assets folder, such as ",(0,o.jsx)(n.code,{children:"Size.ts"}),", as this would be\nbetter suited in, for example, a ",(0,o.jsx)(n.code,{children:"lib"})," folder or similar."]}),"\n",(0,o.jsx)(n.h2,{id:"srcclientsrccomplibrary",children:"src/client/src/compLibrary"}),"\n",(0,o.jsx)(n.p,{children:"In this folder, you will find several components that can be moved, but it needs to be checked whether it is necessary\nor advantageous to move these components. It's quite possible that some of them are too tailored to Mimir to make it\nworthwhile to move them, but most of the components here can probably be moved or replaced with already existing\ncomponents in the component library."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8155:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/assets-d6d09ef7b85d28dd44c2b2cff55af253.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var o=t(7294);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);