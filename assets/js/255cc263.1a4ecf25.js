"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[378],{7065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(5893),s=n(1151);const o={title:"Client"},r="New Components and Functionality",l={id:"Mimir/Remaining work/client",title:"Client",description:"When it comes to displaying elements, it's important that elements are only visually removed, not actually",source:"@site/docs/Mimir/Remaining work/client.md",sourceDirName:"Mimir/Remaining work",slug:"/Mimir/Remaining work/client",permalink:"/documents/docs/Mimir/Remaining work/client",draft:!1,unlisted:!1,editUrl:"https://github.com/mimir-org/documents/tree/main/docs/Mimir/Remaining work/client.md",tags:[],version:"current",frontMatter:{title:"Client"},sidebar:"mimirDocs",previous:{title:"Remaining work",permalink:"/documents/docs/category/remaining-work"},next:{title:"Server",permalink:"/documents/docs/Mimir/Remaining work/server"}},a={},d=[{value:"Main Menu",id:"main-menu",level:2},{value:"Visual Filter",id:"visual-filter",level:2},{value:"Library Module",id:"library-module",level:2},{value:"Block View",id:"block-view",level:2},{value:"Inspector Module",id:"inspector-module",level:2},{value:"Explorer Panel",id:"explorer-panel",level:2},{value:"Lock and Delete",id:"lock-and-delete",level:2}];function c(e){const t={admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"new-components-and-functionality",children:"New Components and Functionality"}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"caution",children:(0,i.jsx)(t.p,{children:"When it comes to displaying elements, it's important that elements are only visually removed, not actually\nremoved from the tree, as this will cause the project state to change via React Flow."})}),"\n",(0,i.jsx)(t.h2,{id:"main-menu",children:"Main Menu"}),"\n",(0,i.jsxs)(t.p,{children:["On the start screen today, there are several buttons that do nothing:\n",(0,i.jsx)(t.img,{src:n(2817).Z+"",width:"612",height:"822"})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Open project: is not implemented."}),"\n",(0,i.jsx)(t.li,{children:"Create project: is partially implemented but instantiation project constructor is hardcoded."}),"\n",(0,i.jsx)(t.li,{children:"Save project: is partially implemented. We can save projects, but not updated existing projects."}),"\n",(0,i.jsx)(t.li,{children:"Close project: not implemented."}),"\n",(0,i.jsx)(t.li,{children:"Import project: not implemented."}),"\n",(0,i.jsx)(t.li,{children:"Export project: not implemented."}),"\n",(0,i.jsx)(t.li,{children:"Subproject functionality: no implemented."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"visual-filter",children:"Visual Filter"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(5933).Z+"",width:"560",height:"364"})}),"\n",(0,i.jsx)(t.p,{children:"The visual filter is currently not working; this menu should open a modal that allows you to turn on and off edges in\nthe graph in the drawing window. You should choose whether to display parent-child edges or edges between different\nnodes (think left/right edges). It should (or at least used to) be possible to turn animations on and off for edges\nbetween nodes."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(7993).Z+"",width:"1406",height:"474"})}),"\n",(0,i.jsx)(t.h2,{id:"library-module",children:"Library Module"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(3413).Z+"",width:"804",height:"852"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(8538).Z+"",width:"776",height:"688"})}),"\n",(0,i.jsx)(t.p,{children:"You can't filter in this module (on the right in Mimir) today. This should be a simple task to implement."}),"\n",(0,i.jsx)(t.h2,{id:"block-view",children:"Block View"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(9733).Z+"",width:"1894",height:"1048"})}),"\n",(0,i.jsx)(t.p,{children:"In block view, it should be possible to rotate the viewport 90 degrees so that those who are used to drawing from top to\nbottom can use this view (this view is called electromode)."}),"\n",(0,i.jsx)(t.p,{children:"Sorting of terminals would also be nice here, as a Block can have many terminals, and to avoid edges between\nnodes getting tangled."}),"\n",(0,i.jsx)(t.h2,{id:"inspector-module",children:"Inspector Module"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:n(1065).Z+"",width:"1436",height:"264"}),"\nIn the inspector module, it should be possible to edit block data. Name, description, attributes etc.\nThis is in progress. And has been remade based on the components and structure used in the Library module. But a lot of\nwork still remains. None of the forms for input has been implemented."]}),"\n",(0,i.jsx)(t.h2,{id:"explorer-panel",children:"Explorer Panel"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(9486).Z+"",width:"982",height:"748"})}),"\n",(0,i.jsx)(t.p,{children:'This is the panel on the left in Mimir\'s menu; this needs to be re-implemented. It should only display the entire\ndrawing area as a tree structure, think of the document tree structure in your IDE for example. It should also be\npossible to turn off the display of nodes and the entire "tree" in this menu.'}),"\n",(0,i.jsx)(t.h2,{id:"lock-and-delete",children:"Lock and Delete"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(63).Z+"",width:"872",height:"86"})}),"\n",(0,i.jsx)(t.p,{children:"Delete should remove the node from the drawing area; a reset button would probably be nice here too."}),"\n",(0,i.jsx)(t.p,{children:"Lock doesn't need to be considered right now, as this functionality is to lock it so that others can't edit the node\nwhile you're working on it. Since Mimir hasn't implemented web-sockets today, this button is also not in use. As it\ndoesn't push any state changes to the server."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},9733:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/electroMode-6b49b7dce1bbb6a20db7828673910caf.png"},3413:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/explorerMenu-9786ebc992a7100c7f121fd097a7559e.png"},8538:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/explorerMenu2-e4ae624caa6b0c50f347d1eedc36ac26.png"},9486:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/explorerPanel-f3cc9e36c5c5415e2ac3c6d3874c3a06.png"},63:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/lockDelete-1cb2d1815de6c188eb88a06fa4157cff.png"},2817:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/projectMenu-74745fe484054181f5b3d13126f19a06.png"},1065:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/terminalAttributes-42073977a48c8b9cff8d0fe7b2fd4f48.png"},5933:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/visualFilter-deedc7cb2e011dca19ce5b9bed5576d1.png"},7993:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/visualFilter2-d421747076c0ca477d3f2fb735c9a765.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var i=n(7294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);