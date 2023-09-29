"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={},a="New Components and Functionality",s={unversionedId:"Mimir/Remaining work/new-components",id:"Mimir/Remaining work/new-components",title:"New Components and Functionality",description:"When it comes to displaying elements, it's important that elements are only visually removed, not actually",source:"@site/docs/Mimir/Remaining work/new-components.md",sourceDirName:"Mimir/Remaining work",slug:"/Mimir/Remaining work/new-components",permalink:"/documents/docs/Mimir/Remaining work/new-components",draft:!1,editUrl:"https://github.com/mimir-org/documents/tree/main/docs/Mimir/Remaining work/new-components.md",tags:[],version:"current",frontMatter:{},sidebar:"mimirDocs",previous:{title:"Moving components to the component library.",permalink:"/documents/docs/Mimir/Remaining work/moving-of-components"},next:{title:"How to contribute",permalink:"/documents/docs/Mimir/contribute"}},l={},c=[{value:"Main Menu",id:"main-menu",level:2},{value:"Visual Filter",id:"visual-filter",level:2},{value:"Library Module",id:"library-module",level:2},{value:"Block View",id:"block-view",level:2},{value:"Inspector Module",id:"inspector-module",level:3},{value:"Explorer Panel",id:"explorer-panel",level:3},{value:"Lock and Delete",id:"lock-and-delete",level:3},{value:"Connection to Backend - Saving Projects",id:"connection-to-backend---saving-projects",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"new-components-and-functionality"},"New Components and Functionality"),(0,i.kt)("admonition",{title:"Note",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"When it comes to displaying elements, it's important that elements are only visually removed, not actually\nremoved from the tree, as this will cause the project state to change via React Flow.")),(0,i.kt)("h2",{id:"main-menu"},"Main Menu"),(0,i.kt)("p",null,"On the start screen today, there are several buttons that do nothing:\n",(0,i.kt)("img",{src:n(2817).Z,width:"612",height:"822"})),(0,i.kt)("p",null,"The most important of these is to save a project; this must be implemented before Mimir reaches an MVP. So this is\nprobably the most important for the next sprint if it's urgent to get Mimir live."),(0,i.kt)("p",null,"I don't see import and export as a \"must-have\" at the moment, but it will likely become very relevant for the future.\nThe same applies to sub-projects. I believe the open project works as it should, but without being able to save a\nproject, it's also not possible to open a new project."),(0,i.kt)("h2",{id:"visual-filter"},"Visual Filter"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5933).Z,width:"560",height:"364"})),(0,i.kt)("p",null,"The visual filter is currently not working; this menu should open a modal that allows you to turn on and off edges in\nthe graph in the drawing window. You should choose whether to display parent-child edges or edges between different\nnodes (think left/right edges). It should (or at least used to) be possible to turn animations on and off for edges\nbetween nodes."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7993).Z,width:"1406",height:"474"})),(0,i.kt)("h2",{id:"library-module"},"Library Module"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3413).Z,width:"804",height:"852"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8538).Z,width:"776",height:"688"})),(0,i.kt)("p",null,"You can't filter in this module (on the right in Mimir) today. This should be a simple task to implement."),(0,i.kt)("h2",{id:"block-view"},"Block View"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9733).Z,width:"1894",height:"1048"})),(0,i.kt)("p",null,"In block view, it should be possible to rotate the viewport 90 degrees so that those who are used to drawing from top to\nbottom can use this view (this view is called electromode)."),(0,i.kt)("p",null,"Sorting of terminals would also be nice here, as an AspectObject can have many terminals, and to avoid edges between\nnodes getting tangled."),(0,i.kt)("h3",{id:"inspector-module"},"Inspector Module"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1065).Z,width:"1436",height:"264"})),(0,i.kt)("p",null,"This needs a refresh, as I'm not 100% sure what should be in this tab; J\xf8rgen probably knows. It's also possible that\nthis tab should be removed, but that depends on what the new style will be like."),(0,i.kt)("h3",{id:"explorer-panel"},"Explorer Panel"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9486).Z,width:"982",height:"748"})),(0,i.kt)("p",null,'This is the panel on the left in Mimir\'s menu; this needs to be re-implemented. It should only display the entire\ndrawing area as a tree structure, think of the tree structure in VSCode for example. It should also be possible to turn\noff the display of nodes and the entire "tree" in this menu.'),(0,i.kt)("h3",{id:"lock-and-delete"},"Lock and Delete"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9823).Z,width:"872",height:"86"})),(0,i.kt)("p",null,"Delete should remove the node from the drawing area; a reset button would probably be nice here too."),(0,i.kt)("p",null,"Lock doesn't need to be considered right now, as this functionality is to lock it so that others can't edit the node\nwhile you're working on it. Since Mimir hasn't implemented web-sockets today, this button is also not in use. As it\ndoesn't push any state changes to the backend."),(0,i.kt)("h2",{id:"connection-to-backend---saving-projects"},"Connection to Backend - Saving Projects"),(0,i.kt)("p",null,"This is probably the biggest task, but hard to prioritize as we don't know if the backend and frontend are still\ncommunicating. Here it's just trial and error that's needed, as I haven't looked at this task myself."))}p.isMDXComponent=!0},9733:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/electroMode-6b49b7dce1bbb6a20db7828673910caf.png"},3413:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/explorerMenu-9786ebc992a7100c7f121fd097a7559e.png"},8538:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/explorerMenu2-e4ae624caa6b0c50f347d1eedc36ac26.png"},9486:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/explorerPanel-f3cc9e36c5c5415e2ac3c6d3874c3a06.png"},9823:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/lockDelete-1cb2d1815de6c188eb88a06fa4157cff.png"},2817:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/projectMenu-74745fe484054181f5b3d13126f19a06.png"},1065:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/terminalAttributes-42073977a48c8b9cff8d0fe7b2fd4f48.png"},5933:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/visualFilter-deedc7cb2e011dca19ce5b9bed5576d1.png"},7993:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/visualFilter2-d421747076c0ca477d3f2fb735c9a765.png"}}]);