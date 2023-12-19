"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[173],{9680:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var r=i(5893),s=i(1151);const t={},l="FAQ",a={id:"Mimir/faq",title:"FAQ",description:"Known problems",source:"@site/docs/Mimir/faq.md",sourceDirName:"Mimir",slug:"/Mimir/faq",permalink:"/documents/docs/Mimir/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/mimir-org/documents/tree/main/docs/Mimir/faq.md",tags:[],version:"current",frontMatter:{},sidebar:"mimirDocs",previous:{title:"How to contribute",permalink:"/documents/docs/Mimir/contribute"},next:{title:"license",permalink:"/documents/docs/Mimir/license"}},o={},d=[{value:"Known problems",id:"known-problems",level:2},{value:"I have a white screen, what do I do?",id:"i-have-a-white-screen-what-do-i-do",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.h2,{id:"known-problems",children:"Known problems"}),"\n",(0,r.jsx)(n.h3,{id:"i-have-a-white-screen-what-do-i-do",children:"I have a white screen, what do I do?"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Solution"}),(0,r.jsx)(n.p,{children:"This is most often (read always) a result of incorrect environment variables somewhere. Checklist:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Is the frontend set to ",(0,r.jsx)(n.code,{children:"REACT_APP_SILENT = true"}),"?"]}),"\n",(0,r.jsxs)(n.li,{children:["Does your user have a company in the database, and is the secret for this company set in Mimir's ",(0,r.jsx)(n.code,{children:"appsettings.json"}),",\ne.g., ",(0,r.jsx)(n.code,{children:'"TypelibrarySecret": "secretHash"'}),"?"]}),"\n",(0,r.jsx)(n.li,{children:"Does the domain in Mimir match the domain set in the company table (MimirorgAuthentication database)."}),"\n"]})]}),"\n",(0,r.jsx)(n.h1,{id:"i-need-to-clean-up-my-database-how-can-i-do-this",children:"I need to clean up my database, how can I do this?"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.p,{children:"TypeLibrary kill script"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('TypeLibrary')\nEXEC(@kill);\nDROP DATABASE TypeLibrary\nCREATE Database TypeLibrary\n---------------------------------------------------------------------\n----------------------------------------------------------------------\n"})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.p,{children:"MimirorgAuthentication kill script"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"---------------------------------------------------------------------\n----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('MimirorgAuthentication')\nEXEC(@kill);\nDROP DATABASE MimirorgAuthentication\nCREATE Database MimirorgAuthentication\n---------------------------------------------------------------------\n----------------------------------------------------------------------\n"})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.p,{children:"ModelBuilder kill script"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"---------------------------------------------------------------------\n----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('ModelBuilder')\nEXEC(@kill);\nDROP DATABASE ModelBuilder\nCREATE Database ModelBuilder\nINSERT INTO [ModelBuilder].[dbo].[CollaborationPartner] VALUES ('Aibel', 'aibel.com', 0, 'rdf.aibel.com');\n---------------------------------------------------------------------\n--USE master\n--GO\n--xp_readerrorlog 0, 1, N'Server is listening on'\n--GO\n"})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.p,{children:"Nuclear option (kill all)"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('TypeLibrary')\nEXEC(@kill);\nDROP DATABASE TypeLibrary\nCREATE Database TypeLibrary\n---------------------------------------------------------------------\n----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('MimirorgAuthentication')\nEXEC(@kill);\nDROP DATABASE MimirorgAuthentication\nCREATE Database MimirorgAuthentication\n---------------------------------------------------------------------\n----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('ModelBuilder')\nEXEC(@kill);\nDROP DATABASE ModelBuilder\nCREATE Database ModelBuilder\n---------------------------------------------------------------------\n--USE master\n--GO\n--xp_readerrorlog 0, 1, N'Server is listening on'\n--GO\n"})})]}),"\n",(0,r.jsx)(n.p,{children:"If there are other issues, they most often arise from:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Incorrect environment variables."}),"\n",(0,r.jsx)(n.li,{children:"Forgetting to run Tyle's backend."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var r=i(7294);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);