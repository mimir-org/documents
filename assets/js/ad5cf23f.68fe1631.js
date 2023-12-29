"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[722],{2739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(5893),s=n(1151);const i={sidebar_position:2},a="Current state of the code base",r={id:"Tyle/current-state",title:"Current state of the code base",description:"Backend",source:"@site/docs/Tyle/current-state.md",sourceDirName:"Tyle",slug:"/Tyle/current-state",permalink:"/documents/docs/Tyle/current-state",draft:!1,unlisted:!1,editUrl:"https://github.com/mimir-org/documents/tree/main/docs/Tyle/current-state.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tyleDocs",previous:{title:"Introduction",permalink:"/documents/docs/Tyle/intro"},next:{title:"FAQ",permalink:"/documents/docs/Tyle/faq"}},l={},c=[{value:"Backend",id:"backend",level:2},{value:"Tyle.Core",id:"tylecore",level:3},{value:"Tyle.Application",id:"tyleapplication",level:3},{value:"Tyle.Converters",id:"tyleconverters",level:3},{value:"Tyle.Persistence",id:"tylepersistence",level:3},{value:"Tyle.External",id:"tyleexternal",level:3},{value:"Mimirorg.Authentication",id:"mimirorgauthentication",level:3},{value:"Tyle.Api",id:"tyleapi",level:3},{value:"Frontend",id:"frontend",level:2},{value:"Code structure",id:"code-structure",level:3},{value:"Unfinished parts of the application",id:"unfinished-parts-of-the-application",level:3},{value:"Database calls",id:"database-calls",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"current-state-of-the-code-base",children:"Current state of the code base"}),"\n",(0,o.jsx)(t.h2,{id:"backend",children:"Backend"}),"\n",(0,o.jsx)(t.p,{children:"The primary job for the Tyle backend is to serve as a CRUD-application for creating IMF types, as well as forwarding\napproved types to an external type library. Tyle currently uses Common Library as its type library."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"backend diagram",src:n(2624).Z+"",width:"1500",height:"1135"})}),"\n",(0,o.jsx)(t.p,{children:"The diagram above shows the dependencies between the different projects in the backend. We will go through these\nprojects, outlining their role in the application as a whole, and commenting on work that remains to be done."}),"\n",(0,o.jsx)(t.h3,{id:"tylecore",children:"Tyle.Core"}),"\n",(0,o.jsx)(t.p,{children:"Contains the core models and enums used to define the IMF types (attributes, terminals and blocks) and external\nreferences (classifiers, media, predicates, purposes and units)."}),"\n",(0,o.jsx)(t.h3,{id:"tyleapplication",children:"Tyle.Application"}),"\n",(0,o.jsx)(t.p,{children:"Contains the request DTOs for creating and updating types and external references, as well as interfaces for the\nrepositories for types and external references. Also contains a service for the approval process of types, as well as\nan interface for user information."}),"\n",(0,o.jsx)(t.h3,{id:"tyleconverters",children:"Tyle.Converters"}),"\n",(0,o.jsx)(t.p,{children:"Contains the code used for exporting types from the domain models to the export format, JSON-LD. This project uses the\ndotNetRdf package, which means adding new RDF export formats can be done very easily."}),"\n",(0,o.jsx)(t.p,{children:"This project also contains all the IRIs used by the software. Some of these (for instance the symbol ontology IRIs) are\ntemporary, and when these change the application will fail."}),"\n",(0,o.jsx)(t.h3,{id:"tylepersistence",children:"Tyle.Persistence"}),"\n",(0,o.jsx)(t.p,{children:"Contains the implementations of the repository interfaces. The data export to the type library is currently done by the\nrepositories, this should probably be moved to a separate project or service."}),"\n",(0,o.jsx)(t.h3,{id:"tyleexternal",children:"Tyle.External"}),"\n",(0,o.jsx)(t.p,{children:"Contains the code used for fetching data from the external reference data library. The code as is is directly geared\ntowards using Common Library for this, and should probably be rewritten to be more general, so switching reference data\nlibraries can be more easily done."}),"\n",(0,o.jsx)(t.h3,{id:"mimirorgauthentication",children:"Mimirorg.Authentication"}),"\n",(0,o.jsx)(t.p,{children:"Contains the code used for authentication and authorization. Also contains code for sending e-mails. This code is\n(mostly) disabled at the moment. E-mails notifying users of new users, request for types approval and so on should be\nimplemented. It should probably also be extracted to a separate project."}),"\n",(0,o.jsx)(t.h3,{id:"tyleapi",children:"Tyle.Api"}),"\n",(0,o.jsx)(t.p,{children:"Contains the startup code, controllers and views."}),"\n",(0,o.jsx)(t.h2,{id:"frontend",children:"Frontend"}),"\n",(0,o.jsx)(t.h3,{id:"code-structure",children:"Code structure"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"src"})," folder contains the following folders:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"api"})," - contains code for communicating with the backend"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"components"})," - contains the React components of the app"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"helpers"})," - contains helper code that is used by more than one component"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"hooks"})," - contains custom hooks that are used by more than one component"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"types"})," - contains TypeScript type definitions"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"unfinished-parts-of-the-application",children:"Unfinished parts of the application"}),"\n",(0,o.jsx)(t.p,{children:"Some tasks that have been started in the frontend code has not been finished. This is mainly due to a big revamp of the\nIMF types following the release of v2.1 of the IMF manual in July 2023, which lead to a need to update many of the\nfrontend components."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Attribute groups are not functional in this version of the client. The idea of attribute groups is to make it easier\nto add attributes that are commonly applied together by bundling them in a group. A previous version of Tyle (v0.24)\nhas a working (although minimal) application of this concept."}),"\n",(0,o.jsx)(t.li,{children:"Type previews, used in the About component on the right side of the home page, are either non-functional or not\nchanged according to the new data model."}),"\n",(0,o.jsx)(t.li,{children:"The access page in the Settings menu is currently not functional. This page is intended as a way of notifying\nadministrators of new users that have not yet received a role granting them access to the application."}),"\n",(0,o.jsx)(t.li,{children:"The approval page has the limitation that you will get an error message when trying to approve types referencing\nnon-approved types. The error message will not explain that this is the reason for the error. The approve button\nshould be disabled for these types, with a popup explaining the reason."}),"\n",(0,o.jsx)(t.li,{children:"Phasing out the use of React Hook Form. Some forms in the solution still use this package, we recommend updating\nthese so that this package can be phased out."}),"\n",(0,o.jsx)(t.li,{children:"There is some unused code as well as some code that is commented out in the frontend code base that should be\nremoved."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"database-calls",children:"Database calls"}),"\n",(0,o.jsx)(t.p,{children:"As for many application in development, the databasecalls could be more efficient. This goes also for Tyle.\nSome calls to DB seems excessive and should be revieved."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},2624:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/tyle-backend-diagram-5b11dd8bb225d9790ac740c281446c68.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(7294);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);