"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[251],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3604:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},a="Extend Functionality",c={unversionedId:"Mimir/Overview/react-redux",id:"Mimir/Overview/react-redux",title:"Extend Functionality",description:"1. Setting up the Store",source:"@site/docs/Mimir/Overview/react-redux.md",sourceDirName:"Mimir/Overview",slug:"/Mimir/Overview/react-redux",permalink:"/documents/docs/Mimir/Overview/react-redux",draft:!1,editUrl:"https://github.com/mimir-org/documents/tree/main/docusaurus-docs/docs/Mimir/Overview/react-redux.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mimirDocs",previous:{title:"Redux - overview",permalink:"/documents/docs/category/redux---overview"},next:{title:"Extend functionality - Detailed",permalink:"/documents/docs/Mimir/Overview/react-redux-detailed"}},s={},l=[{value:"1. Setting up the Store",id:"1-setting-up-the-store",level:2},{value:"2. Reducers",id:"2-reducers",level:2},{value:"3. Actions",id:"3-actions",level:2},{value:"4. Hooks",id:"4-hooks",level:2},{value:"5. Selectors",id:"5-selectors",level:2},{value:"6. API Calls",id:"6-api-calls",level:2},{value:"7. Saga",id:"7-saga",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extend-functionality"},"Extend Functionality"),(0,o.kt)("h2",{id:"1-setting-up-the-store"},"1. Setting up the Store"),(0,o.kt)("p",null,"The store is set up in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/client/src/store/index.ts"),". It uses Redux Toolkit's ",(0,o.kt)("inlineCode",{parentName:"p"},"configureStore")," method to create the store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { configureStore } from '@reduxjs/toolkit';\nimport rootReducer from './commonReducer';\n\nconst store = configureStore({\n  reducer: rootReducer,\n});\n")),(0,o.kt)("h2",{id:"2-reducers"},"2. Reducers"),(0,o.kt)("p",null,"Reducers are defined in separate files like ",(0,o.kt)("inlineCode",{parentName:"p"},"commonReducer.ts"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"libraryReducer.ts"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"projectReducer.ts"),". They handle state changes based on actions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// commonReducer.ts\nimport { createSlice } from '@reduxjs/toolkit';\n\nconst commonSlice = createSlice({\n  name: 'common',\n  initialState: {},\n  reducers: {\n    // Your reducers here\n  },\n});\n")),(0,o.kt)("h2",{id:"3-actions"},"3. Actions"),(0,o.kt)("p",null,"Actions are automatically generated by Redux Toolkit's ",(0,o.kt)("inlineCode",{parentName:"p"},"createSlice")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export const { someAction } = commonSlice.actions;\n")),(0,o.kt)("h2",{id:"4-hooks"},"4. Hooks"),(0,o.kt)("p",null,"Custom hooks are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks.ts")," for easier interaction with the store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// hooks.ts\nexport const useAppDispatch = () => useDispatch<AppDispatch>();\n")),(0,o.kt)("h2",{id:"5-selectors"},"5. Selectors"),(0,o.kt)("p",null,"Selectors are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"selectors.ts")," to read specific pieces of state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// selectors.ts\nexport const selectCommon = (state: RootState) => state.common;\n")),(0,o.kt)("h2",{id:"6-api-calls"},"6. API Calls"),(0,o.kt)("p",null,"API calls are made using Axios and are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},".api.ts")," files like ",(0,o.kt)("inlineCode",{parentName:"p"},"common.api.ts"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// common.api.ts\nexport const fetchSomething = () => axios.get('/some/endpoint');\n")),(0,o.kt)("h2",{id:"7-saga"},"7. Saga"),(0,o.kt)("p",null,"Saga is used for side effects and is defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"saga.ts"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// saga.ts\nfunction* watchFetchSomething() {\n  yield takeLatest(fetchSomething.type, fetchSomethingSaga);\n}\n")))}d.isMDXComponent=!0}}]);