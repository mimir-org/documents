"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[269],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>y});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(o),m=n,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return o?r.createElement(y,s(s({ref:t},l),{},{components:o})):r.createElement(y,s({ref:t},l))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4460:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const a={},s="useAppSelector",i={unversionedId:"Mimir/Hooks/useAppSelector",id:"Mimir/Hooks/useAppSelector",title:"useAppSelector",description:"The useAppSelector hook is a custom hook that is often used in Redux Toolkit-based applications to replace the standard useSelector hook from the react-redux library. The purpose of this custom hook is to provide type safety for the Redux store's state when using TypeScript.",source:"@site/docs/Mimir/Hooks/useAppSelector.md",sourceDirName:"Mimir/Hooks",slug:"/Mimir/Hooks/useAppSelector",permalink:"/docs/Mimir/Hooks/useAppSelector",draft:!1,editUrl:"https://github.com/mimir-org/documents/tree/main/docusaurus-docs/docs/Mimir/Hooks/useAppSelector.md",tags:[],version:"current",frontMatter:{},sidebar:"mimirDocs",previous:{title:"Custom hooks",permalink:"/docs/Mimir/Hooks/customHooks"},next:{title:"Resterende arbeid",permalink:"/docs/category/resterende-arbeid"}},p={},u=[{value:"How it Works:",id:"how-it-works",level:3},{value:"Usage:",id:"usage",level:3}],l={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"useappselector"},"useAppSelector"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"useAppSelector")," hook is a custom hook that is often used in Redux Toolkit-based applications to replace the standard ",(0,n.kt)("inlineCode",{parentName:"p"},"useSelector")," hook from the ",(0,n.kt)("inlineCode",{parentName:"p"},"react-redux")," library. The purpose of this custom hook is to provide type safety for the Redux store's state when using TypeScript."),(0,n.kt)("p",null,"Here's a typical definition of ",(0,n.kt)("inlineCode",{parentName:"p"},"useAppSelector"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { TypedUseSelectorHook, useSelector } from 'react-redux';\nimport { RootState } from '../store';  // Import your RootState type\n\nexport const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;\n")),(0,n.kt)("h3",{id:"how-it-works"},"How it Works:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"TypedUseSelectorHook"),": This is a generic type that takes the type of the root state of your Redux store. It helps in providing type safety when you use the ",(0,n.kt)("inlineCode",{parentName:"p"},"useSelector")," hook.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"useSelector"),": This is the standard hook from ",(0,n.kt)("inlineCode",{parentName:"p"},"react-redux")," that allows you to extract data from the Redux store state, using a selector function.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"RootState"),": This is the type of the root state of your Redux store. It's usually defined when you combine your reducers."))),(0,n.kt)("p",null,"By using ",(0,n.kt)("inlineCode",{parentName:"p"},"useAppSelector"),", you can ensure that the selector functions you write are type-safe and will provide autocompletion and error checking based on the types defined in your Redux store's state."),(0,n.kt)("h3",{id:"usage"},"Usage:"),(0,n.kt)("p",null,"You would use ",(0,n.kt)("inlineCode",{parentName:"p"},"useAppSelector")," in the same way you use ",(0,n.kt)("inlineCode",{parentName:"p"},"useSelector"),". For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const someData = useAppSelector((state) => state.someReducer.someData);\n")),(0,n.kt)("p",null,"This ensures that ",(0,n.kt)("inlineCode",{parentName:"p"},"state.someReducer.someData")," is type-safe and will give you TypeScript errors if you try to access properties that do not exist on ",(0,n.kt)("inlineCode",{parentName:"p"},"someData"),"."))}d.isMDXComponent=!0}}]);