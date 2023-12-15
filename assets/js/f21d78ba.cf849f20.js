"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[267],{9779:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=i(5893),r=i(1151);const o={title:"Installation guide"},a=void 0,s={type:"mdx",permalink:"/documents/installation-guide",source:"@site/src/pages/installation-guide.md",title:"Installation guide",description:"Installation guide",frontMatter:{title:"Installation guide"},unlisted:!1},l={},c=[{value:"Installation guide",id:"installation-guide",level:2},{value:"Tools",id:"tools",level:2},{value:"Where Can I Find the Code?",id:"where-can-i-find-the-code",level:2},{value:"Tyle",id:"tyle",level:3},{value:"Mimir",id:"mimir",level:3},{value:"Component-library",id:"component-library",level:3},{value:"How Do I Install the Code on My Machine?",id:"how-do-i-install-the-code-on-my-machine",level:2},{value:"Automatic Installation",id:"automatic-installation",level:3},{value:"Manual Installation (not recommended)",id:"manual-installation-not-recommended",level:3},{value:"Mimir frontend and Yalc",id:"mimir-frontend-and-yalc",level:2},{value:"Docker-compose files",id:"docker-compose-files",level:2},{value:"Compose file for the whole solution",id:"compose-file-for-the-whole-solution",level:3},{value:"Compose file for tyle",id:"compose-file-for-tyle",level:3},{value:"Compose file for mimir",id:"compose-file-for-mimir",level:3},{value:"Compose file for the database",id:"compose-file-for-the-database",level:3},{value:"After installation",id:"after-installation",level:2},{value:"Create a user",id:"create-a-user",level:3},{value:"FAQ",id:"faq",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components},{Details:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"installation-guide",children:"Installation guide"}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"Tyle and Mimir have a very large and complex domain, which is not always easy to understand. Therefore, there's no shame\nin asking for help. This is a minimalist, almost \"installation guide\" for the code. It won't go into great depth, as\nthat's something best discussed face-to-face, but it's intended as a sort of \"Here's how you hopefully run the code.\""})}),"\n",(0,t.jsx)(e.h2,{id:"tools",children:"Tools"}),"\n",(0,t.jsx)(e.p,{children:"The team uses the tools they are most comfortable with, but here are some examples:"}),"\n",(0,t.jsx)(e.p,{children:"Frontend code:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"VSCode"}),"\n",(0,t.jsx)(e.li,{children:"WebStorm"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Backend code:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Visual Studio + Resharper"}),"\n",(0,t.jsx)(e.li,{children:"Rider (Resharper is built-in)"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Other tools:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Git"}),"\n",(0,t.jsx)(e.li,{children:"Docker"}),"\n",(0,t.jsx)(e.li,{children:"Datagrip (database management)"}),"\n",(0,t.jsx)(e.li,{children:"SQL Server Management Studio"}),"\n"]}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsxs)(e.p,{children:["Of these, you ",(0,t.jsx)(e.strong,{children:"must"})," install Docker or equivalent to run the MSSQL database (you can also connect it to any mssql\ndatabase, but this is not covered in this documentation."]})}),"\n",(0,t.jsx)(e.h2,{id:"where-can-i-find-the-code",children:"Where Can I Find the Code?"}),"\n",(0,t.jsxs)(e.p,{children:["The code for Tyle and Mimir can be found here ",(0,t.jsx)(e.a,{href:"https://github.com/mimir-org",children:"https://github.com/mimir-org"})," under the Mimir repository. The project can be cloned\nto your machine with ",(0,t.jsx)(e.code,{children:"git@github.com:mimir-org/<repository>.git"})," via SSH or ",(0,t.jsx)(e.code,{children:"gh repo clone mimir-org/<repository>"}),"\nwith ",(0,t.jsx)(e.a,{href:"https://cli.github.com/",children:"GitHub CLI"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"tyle",children:"Tyle"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"git clone git@github.com:mimir-org/typelibrary.git\n"})}),"\n",(0,t.jsx)(e.h3,{id:"mimir",children:"Mimir"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"git clone git@github.com:mimir-org/mimir.git\n"})}),"\n",(0,t.jsx)(e.h3,{id:"component-library",children:"Component-library"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"git clone git@github.com:mimir-org/component-library.git\n"})}),"\n",(0,t.jsx)(e.h2,{id:"how-do-i-install-the-code-on-my-machine",children:"How Do I Install the Code on My Machine?"}),"\n",(0,t.jsx)(e.admonition,{type:"info",children:(0,t.jsx)(e.p,{children:"We recommend cloning all the repos before trying to start them, as they are dependent on each other. Especially Mimir,\nwhich needs all of the repos to be able to run."})}),"\n",(0,t.jsx)(e.h3,{id:"automatic-installation",children:"Automatic Installation"}),"\n",(0,t.jsx)(e.p,{children:"Spin up all the code with a docker-compose file."}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Install docker"}),"\n",(0,t.jsx)(e.li,{children:"Find a place to download the code so that you get this folder structure:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"\ud83d\udcc1 mimirorg (this can be renamed to whatever you want)\n\u251c\u2500\u2500 \ud83d\udcc1 component-library\n\u2502   \u2514\u2500\u2500 \ud83d\udcc1 etc\n\u251c\u2500\u2500 \ud83d\udcc1 mimir\n\u2502   \u2514\u2500\u2500 \ud83d\udcc1 etc\n\u2514\u2500\u2500 \ud83d\udcc1 typelibrary\n    \u2514\u2500\u2500 \ud83d\udcc1 etc\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsx)(e.li,{children:"Create a new .yaml file and paste the following code."}),"\n"]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"docker-compose.yaml"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:"version: \"3.8\"\n\nservices:\n\n  tyle-client:\n    build: ./typelibrary/src/client\n    hostname: 'tyleclient'\n    container_name: tyleclient\n    ports:\n      - \"3001:80\"\n    environment:\n      - TYPELIBRARY_ENV_API_BASE_URL=http://localhost:5001/v1.0/\n    networks:\n      - type_library_network\n\n  mimir-client:\n    build:\n      context: ./mimir/src/client\n      args:\n        - MIMIR_VERSION=4.0.0\n    hostname: 'mimirclient'\n    container_name: mimirclient\n    ports:\n      - \"3000:80\"\n    environment:\n      - MIMIR_ENV_API_BASE_URL=http://localhost:5000/v1.0/\n      - MIMIR_ENV_SOCKET_BASE_URL=http://localhost:5000/\n      - MIMIR_ENV_SILENT=true\n      - MIMIR_ENV_APP_ID=2967244a-662f-4462-82bd-7f9bca0a3683\n      - MIMIR_ENV_CLIENT_ID=0c174c7e-e018-41a2-ba84-3d4b4544a16f\n      - MIMIR_ENV_TENANT_ID=3aa4a235-b6e2-48d5-9195-7fcf05b459b0\n    networks:\n      - type_library_network\n\n  tyle-server:\n    build: ./typelibrary/src/server\n    hostname: 'tyleserver'\n    container_name: tyleserver\n    ports:\n      - \"5001:80\"\n    volumes:\n      - tyle:/app/Data\n    environment:\n      - ASPNETCORE_ENVIRONMENT=Development\n      - DatabaseConfiguration__DataSource=mssql\n      - DatabaseConfiguration__Port=1433\n      - DatabaseConfiguration__InitialCatalog=TypeLibrary\n      - DatabaseConfiguration__DbUser=sa\n      - DatabaseConfiguration__Password=P4ssw0rd1\n      - MimirorgAuthSettings__ApplicationName=Tyle\n      - MimirorgAuthSettings__ApplicationUrl=http://localhost:5001\n      - MimirorgAuthSettings__RequireConfirmedAccount=true\n      - MimirorgAuthSettings__Email=noreply@runir.net\n      - MimirorgAuthSettings__DatabaseConfiguration__DataSource=mssql\n      - MimirorgAuthSettings__DatabaseConfiguration__Port=1433\n      - MimirorgAuthSettings__DatabaseConfiguration__InitialCatalog=MimirorgAuthentication\n      - MimirorgAuthSettings__DatabaseConfiguration__DbUser=sa\n      - MimirorgAuthSettings__DatabaseConfiguration__Password=P4ssw0rd1\n      - ApplicationSettings__ApplicationSemanticUrl=http://localhost:5001/v1/ont\n      - ApplicationSettings__ApplicationUrl=http://localhost:5001\n      - CorsConfiguration__ValidOrigins=http://localhost:3001\n    networks:\n      - type_library_network\n    depends_on:\n      - mssql\n\n  mimir-server:\n    build: ./mimir/src/service\n    hostname: 'mimirserver'\n    container_name: mimirserver\n    ports:\n      - \"5000:80\"\n    environment:\n      - ASPNETCORE_ENVIRONMENT=Development\n      - DatabaseConfiguration__DataSource=mssql\n      - DatabaseConfiguration__Port=1433\n      - DatabaseConfiguration__InitialCatalog=ModelBuilder\n      - DatabaseConfiguration__DbUser=sa\n      - DatabaseConfiguration__Password=P4ssw0rd1\n      - DatabaseConfiguration__Timeout=150\n      - DatabaseConfiguration__ConnectRetryCount=15\n      - DatabaseConfiguration__ConnectRetryInterval=10\n      - AzureActiveDirectoryConfiguration__TenantId=3aa4a235-b6e2-48d5-9195-7fcf05b459b0\n      - AzureActiveDirectoryConfiguration__ClientId=2967244a-662f-4462-82bd-7f9bca0a3683\n      - AzureActiveDirectoryConfiguration__Silent=true\n      - CorsConfiguration__ValidOrigins=http://localhost:3000\n      - ApplicationSetting__TypeLibraryRootUri=http://tyleserver/\n      - ApplicationSetting__TypeLibraryVersion=v1\n      - ApplicationSetting__TypeLibrarySecret=cedf6a1af9917f6ac2fd8f7a0f4610b418a72c4ac9557cf2256e4ec2226b2060\n      - ApplicationSetting__TypeLibraryDomain=runir.net\n    networks:\n      - type_library_network\n    depends_on:\n      - mssql\n\n  mssql:\n    image: \"mcr.microsoft.com/mssql/server:2017-CU8-ubuntu\"\n    hostname: 'mssql'\n    container_name: mssql\n    ports:\n      - '127.0.0.1:1433:1433'\n    volumes:\n      - mssql:/var/opt/mssql\n    environment:\n      - ACCEPT_EULA=Y\n      - MSSQL_SA_PASSWORD=P4ssw0rd1\n      - MSSQL_PID=Standard\n    networks:\n      - type_library_network\n    restart: unless-stopped\n\nvolumes:\n  mssql:\n    driver: local\n  tyle:\n    driver: local\n\nnetworks:\n  type_library_network:\n    driver: bridge\n"})})]}),"\n",(0,t.jsxs)(e.ol,{start:"4",children:["\n",(0,t.jsx)(e.li,{children:"Place this yaml file as shown below:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"\ud83d\udcc1 mimirorg (this can be renamed to whatever you want)\n\u251c\u2500\u2500 \ud83d\udcc1 component-library\n\u2502   \u2514\u2500\u2500 \ud83d\udcc1 etc\n\u251c\u2500\u2500 \ud83d\udcc1 mimir\n\u2502   \u2514\u2500\u2500 \ud83d\udcc1 etc\n\u251c\u2500\u2500 \ud83d\udcc1 typelibrary\n\u2502   \u2514\u2500\u2500 \ud83d\udcc1 etc\n\u2514\u2500\u2500 \ud83d\udc0b docker-compose.yaml\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"5",children:["\n",(0,t.jsx)(e.li,{children:"Then run the docker-compose file from the command line. Use docker-compose up -d from the folder where the file is\nlocated."}),"\n",(0,t.jsxs)(e.li,{children:["Once everything is up and running, you should be able to access the different pages\nat: ",(0,t.jsx)(e.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),", ",(0,t.jsx)(e.a,{href:"http://localhost:3001",children:"http://localhost:3001"}),", ",(0,t.jsx)(e.a,{href:"http://localhost:5000",children:"http://localhost:5000"}),", ",(0,t.jsx)(e.a,{href:"http://localhost:5001",children:"http://localhost:5001"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"See more details"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'CONTAINER ID   IMAGE                                            COMMAND                   CREATED         STATUS         PORTS                           NAMES\nb89d794be253   mimirorg_mimir-server                            "dotnet ModelBuilder\u2026"    9 seconds ago   Up 7 seconds   443/tcp, 0.0.0.0:5000->80/tcp   mimirserver\n84e7600fdcf9   mimirorg_tyle-server                             "dotnet TypeLibrary.\u2026"    9 seconds ago   Up 7 seconds   443/tcp, 0.0.0.0:5001->80/tcp   tyleserver\ned558855c314   mimirorg_mimir-client                            "/bin/sh -c \'\\"./star\u2026"   9 seconds ago   Up 7 seconds   0.0.0.0:3000->80/tcp            mimirclient\n42d843407f0d   mimirorg_tyle-client                             "/bin/sh -c \'\\"./star\u2026"   9 seconds ago   Up 7 seconds   0.0.0.0:3001->80/tcp            tyleclient\nd914b6d4d538   mcr.microsoft.com/mssql/server:2017-CU8-ubuntu   "/opt/mssql/bin/sqls\u2026"    9 seconds ago   Up 7 seconds   127.0.0.1:1433->1433/tcp        mssql\n'})})]}),"\n",(0,t.jsxs)(e.ol,{start:"7",children:["\n",(0,t.jsx)(e.li,{children:"To run these locally, you will need to stop the container you want to run locally in, for example, Visual Studio."}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"manual-installation-not-recommended",children:"Manual Installation (not recommended)"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(e.p,{children:"Manual installation details"})}),(0,t.jsx)(e.admonition,{type:"caution",children:(0,t.jsxs)(e.p,{children:["This is just the general idea of how to do this and is not tested by the developer team, we strongly suggest you stick\nto using our ",(0,t.jsx)(e.code,{children:"docker-compose.yml"})," files below!"]})}),(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Start an MSSQL database running on port 1433 locally on your machine using Docker (or equivalent)."}),"\n",(0,t.jsxs)(e.li,{children:["Clone all the repositories under mimir-org (typelibrary, mimir, and component-library) and run them following the\ninstructions in the ReadMe files of the different repositories. It might be wise to run the different projects in\nthis order, at least the first time:","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Tyle backend"}),"\n",(0,t.jsx)(e.li,{children:"Tyle frontend"}),"\n",(0,t.jsx)(e.li,{children:"Mimir backend"}),"\n",(0,t.jsx)(e.li,{children:"Mimir frontend"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["After installation, you must add the following env file:","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.code,{children:"/mimir/src/service/ModelBuilder.Api/appsettings.local.json"})}),"\n"]}),"\n"]}),"\n"]}),(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"appsettings.local.json"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "ApplicationSetting": {\n    "TypeLibraryRootUri": "http://localhost:5001/",\n    "TypeLibraryVersion": "v1",\n    "TypeLibrarySecret": "cedf6a1af9917f6ac2fd8f7a0f4610b418a72c4ac9557cf2256e4ec2226b2060",\n    "TypeLibraryDomain": "runir.net"\n  },\n  "Logging": {\n    "LogLevel": {\n      "Default": "Error",\n      "Microsoft": "Warning",\n      "Microsoft.Hosting.Lifetime": "Warning",\n      "Microsoft.EntityFrameworkCore.Database.Command": "Warning",\n      "Mb.Services": "Information",\n      "EventHubModule": "Error"\n    },\n    "Console": {\n      "IncludeScopes": true,\n      "LogLevel": {\n        "Default": "Error",\n        "Microsoft": "Warning",\n        "Microsoft.Hosting.Lifetime": "Warning",\n        "Microsoft.EntityFrameworkCore.Database.Command": "Warning",\n        "Mb.Services": "Information",\n        "EventHubModule": "Error"\n      }\n    }\n  },\n  "AllowedHosts": "*",\n  "AzureActiveDirectoryConfiguration": {\n    "Instance": "https://login.microsoftonline.com/",\n    "TenantId": "3aa4a235-b6e2-48d5-9195-7fcf05b459b0",\n    "ClientId": "2967244a-662f-4462-82bd-7f9bca0a3683",\n    "ClientSecret": null,\n    "CallbackPath": "/signin-oidc",\n    "SignedOutCallbackPath": "/signout-oidc",\n    "Silent": true\n  },\n  "CorsConfiguration": {\n    "ValidOrigins": "http://localhost:3000"\n  },\n  "DatabaseConfiguration": {\n    "DataSource": "127.0.0.1",\n    "Port": 1433,\n    "InitialCatalog": "ModelBuilder",\n    "DbUser": "sa",\n    "Password": "P4ssw0rd1",\n    "Timeout": 150,\n    "ConnectRetryCount": 15,\n    "ConnectRetryInterval": 10\n  }\n}\n'})})]}),(0,t.jsxs)(e.ol,{start:"4",children:["\n",(0,t.jsxs)(e.li,{children:["There are other .env files in the frontend code, but for the most part, you don't have to worry about this. The most\ninteresting thing here is probably silent mode in Mimir. This needs to be set to ",(0,t.jsx)(e.code,{children:"true"})," when you are developing locally, as this\nmode ignores some authentication. The solution will most likely crash without it, leading to a white screen on the\nfrontend."]}),"\n"]})]}),"\n",(0,t.jsx)(e.h2,{id:"mimir-frontend-and-yalc",children:"Mimir frontend and Yalc"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/wclr/yalc",children:"https://github.com/wclr/yalc"})}),"\n",(0,t.jsx)(e.p,{children:"Yalc is a way to connect npm package development with the dev environment. It allows us to develop components in the\ncomponent-library and dynamically update them locally so that you don't have to release a new package on npm for every\ncode change."}),"\n",(0,t.jsx)(e.p,{children:"Install yalc with:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"npm i yalc -g\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Navigate to the ",(0,t.jsx)(e.code,{children:"component-library/app"})," folder"]}),"\n",(0,t.jsx)(e.li,{children:"Run the command yalc publish"}),"\n",(0,t.jsxs)(e.li,{children:["Navigate to ",(0,t.jsx)(e.code,{children:"/mimirorg/mimir/src/client"})]}),"\n",(0,t.jsxs)(e.li,{children:["Run the command yalc add ",(0,t.jsx)(e.code,{children:"@mimirorg/component-library"})]}),"\n",(0,t.jsx)(e.li,{children:"Now you can run mimir as usual by first installing the packages with npm i and then running it locally with npm run\nstart or npm run."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"docker-compose-files",children:"Docker-compose files"}),"\n",(0,t.jsx)(e.p,{children:"Sometimes it's useful to run tyle or mimir separately to avoid having multiple Visual Studio instances running\nsimultaneously. These files can be useful to have."}),"\n",(0,t.jsx)(e.h3,{id:"compose-file-for-the-whole-solution",children:"Compose file for the whole solution"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"docker-compose.yaml"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:"version: \"3.8\"\n\nservices:\n\n  tyle-client:\n    build: ./typelibrary/src/client\n    hostname: 'tyleclient'\n    container_name: tyleclient\n    ports:\n      - \"3001:80\"\n    environment:\n      - TYPELIBRARY_ENV_API_BASE_URL=http://localhost:5001/v1.0/\n    networks:\n      - type_library_network\n\n  mimir-client:\n    build:\n      context: ./mimir/src/client\n      args:\n        - MIMIR_VERSION=4.0.0\n    hostname: 'mimirclient'\n    container_name: mimirclient\n    ports:\n      - \"3000:80\"\n    environment:\n      - MIMIR_ENV_API_BASE_URL=http://localhost:5000/v1.0/\n      - MIMIR_ENV_SOCKET_BASE_URL=http://localhost:5000/\n      - MIMIR_ENV_SILENT=true\n      - MIMIR_ENV_APP_ID=2967244a-662f-4462-82bd-7f9bca0a3683\n      - MIMIR_ENV_CLIENT_ID=0c174c7e-e018-41a2-ba84-3d4b4544a16f\n      - MIMIR_ENV_TENANT_ID=3aa4a235-b6e2-48d5-9195-7fcf05b459b0\n    networks:\n      - type_library_network\n\n  tyle-server:\n    build: ./typelibrary/src/server\n    hostname: 'tyleserver'\n    container_name: tyleserver\n    ports:\n      - \"5001:80\"\n    volumes:\n      - tyle:/app/Data\n    environment:\n      - ASPNETCORE_ENVIRONMENT=Development\n      - DatabaseConfiguration__DataSource=mssql\n      - DatabaseConfiguration__Port=1433\n      - DatabaseConfiguration__InitialCatalog=TypeLibrary\n      - DatabaseConfiguration__DbUser=sa\n      - DatabaseConfiguration__Password=P4ssw0rd1\n      - MimirorgAuthSettings__ApplicationName=Tyle\n      - MimirorgAuthSettings__ApplicationUrl=http://localhost:5001\n      - MimirorgAuthSettings__RequireConfirmedAccount=true\n      - MimirorgAuthSettings__Email=noreply@runir.net\n      - MimirorgAuthSettings__DatabaseConfiguration__DataSource=mssql\n      - MimirorgAuthSettings__DatabaseConfiguration__Port=1433\n      - MimirorgAuthSettings__DatabaseConfiguration__InitialCatalog=MimirorgAuthentication\n      - MimirorgAuthSettings__DatabaseConfiguration__DbUser=sa\n      - MimirorgAuthSettings__DatabaseConfiguration__Password=P4ssw0rd1\n      - ApplicationSettings__ApplicationSemanticUrl=http://localhost:5001/v1/ont\n      - ApplicationSettings__ApplicationUrl=http://localhost:5001\n      - CorsConfiguration__ValidOrigins=http://localhost:3001\n    networks:\n      - type_library_network\n    depends_on:\n      - mssql\n\n  mimir-server:\n    build: ./mimir/src/service\n    hostname: 'mimirserver'\n    container_name: mimirserver\n    ports:\n      - \"5000:80\"\n    environment:\n      - ASPNETCORE_ENVIRONMENT=Development\n      - DatabaseConfiguration__DataSource=mssql\n      - DatabaseConfiguration__Port=1433\n      - DatabaseConfiguration__InitialCatalog=ModelBuilder\n      - DatabaseConfiguration__DbUser=sa\n      - DatabaseConfiguration__Password=P4ssw0rd1\n      - DatabaseConfiguration__Timeout=150\n      - DatabaseConfiguration__ConnectRetryCount=15\n      - DatabaseConfiguration__ConnectRetryInterval=10\n      - AzureActiveDirectoryConfiguration__TenantId=3aa4a235-b6e2-48d5-9195-7fcf05b459b0\n      - AzureActiveDirectoryConfiguration__ClientId=2967244a-662f-4462-82bd-7f9bca0a3683\n      - AzureActiveDirectoryConfiguration__Silent=true\n      - CorsConfiguration__ValidOrigins=http://localhost:3000\n      - ApplicationSetting__TypeLibraryRootUri=http://tyleserver/\n      - ApplicationSetting__TypeLibraryVersion=v1\n      - ApplicationSetting__TypeLibrarySecret=cedf6a1af9917f6ac2fd8f7a0f4610b418a72c4ac9557cf2256e4ec2226b2060\n      - ApplicationSetting__TypeLibraryDomain=runir.net\n    networks:\n      - type_library_network\n    depends_on:\n      - mssql\n\n  mssql:\n    image: \"mcr.microsoft.com/mssql/server:2017-CU8-ubuntu\"\n    hostname: 'mssql'\n    container_name: mssql\n    ports:\n      - '127.0.0.1:1433:1433'\n    volumes:\n      - mssql:/var/opt/mssql\n    environment:\n      - ACCEPT_EULA=Y\n      - MSSQL_SA_PASSWORD=P4ssw0rd1\n      - MSSQL_PID=Standard\n    networks:\n      - type_library_network\n    restart: unless-stopped\n\nvolumes:\n  mssql:\n    driver: local\n  tyle:\n    driver: local\n\nnetworks:\n  type_library_network:\n    driver: bridge\n\n"})})]}),"\n",(0,t.jsx)(e.h3,{id:"compose-file-for-tyle",children:"Compose file for tyle"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"docker-compose.yaml"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:"version: \"3.8\"\n\nservices:\n\n  tyle-client:\n    build: ./typelibrary/src/client\n    hostname: 'tyleclient'\n    container_name: tyleclient\n    ports:\n      - \"3001:80\"\n    environment:\n      - TYPELIBRARY_ENV_API_BASE_URL=http://localhost:5001/v1.0/\n    networks:\n      - type_library_network\n\n  tyle-server:\n    build: ./typelibrary/src/server\n    hostname: 'tyleserver'\n    container_name: tyleserver\n    ports:\n      - \"5001:80\"\n    volumes:\n      - tyle:/app/Data\n    environment:\n      - ASPNETCORE_ENVIRONMENT=Development\n      - DatabaseConfiguration__DataSource=mssql\n      - DatabaseConfiguration__Port=1433\n      - DatabaseConfiguration__InitialCatalog=TypeLibrary\n      - DatabaseConfiguration__DbUser=sa\n      - DatabaseConfiguration__Password=P4ssw0rd1\n      - MimirorgAuthSettings__ApplicationName=Tyle\n      - MimirorgAuthSettings__ApplicationUrl=http://localhost:5001\n      - MimirorgAuthSettings__RequireConfirmedAccount=true\n      - MimirorgAuthSettings__Email=noreply@runir.net\n      - MimirorgAuthSettings__DatabaseConfiguration__DataSource=mssql\n      - MimirorgAuthSettings__DatabaseConfiguration__Port=1433\n      - MimirorgAuthSettings__DatabaseConfiguration__InitialCatalog=MimirorgAuthentication\n      - MimirorgAuthSettings__DatabaseConfiguration__DbUser=sa\n      - MimirorgAuthSettings__DatabaseConfiguration__Password=P4ssw0rd1\n      - ApplicationSettings__ApplicationSemanticUrl=http://localhost:5001/v1/ont\n      - ApplicationSettings__ApplicationUrl=http://localhost:5001\n      - CorsConfiguration__ValidOrigins=http://localhost:3001\n    networks:\n      - type_library_network\n    depends_on:\n      - mssql\n\n  mssql:\n    image: \"mcr.microsoft.com/mssql/server:2017-CU8-ubuntu\"\n    hostname: 'mssql'\n    container_name: mssql\n    ports:\n      - '127.0.0.1:1433:1433'\n    volumes:\n      - mssql:/var/opt/mssql\n    environment:\n      - ACCEPT_EULA=Y\n      - MSSQL_SA_PASSWORD=P4ssw0rd1\n      - MSSQL_PID=Standard\n    networks:\n      - type_library_network\n    restart: unless-stopped\n\nvolumes:\n  mssql:\n    driver: local\n  tyle:\n    driver: local\n\nnetworks:\n  type_library_network:\n    driver: bridge\n"})})]}),"\n",(0,t.jsx)(e.h3,{id:"compose-file-for-mimir",children:"Compose file for mimir"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"docker-compose.yaml"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yaml",children:"version: \"3.8\"\n\nservices:\n\n  mimir-client:\n    build:\n      context: ./mimir/src/client\n      args:\n        - MIMIR_VERSION=4.0.0\n    hostname: 'mimirclient'\n    container_name: mimirclient\n    ports:\n      - \"3000:80\"\n    environment:\n      - MIMIR_ENV_API_BASE_URL=http://localhost:5000/v1.0/\n      - MIMIR_ENV_SOCKET_BASE_URL=http://localhost:5000/\n      - MIMIR_ENV_SILENT=true\n      - MIMIR_ENV_APP_ID=2967244a-662f-4462-82bd-7f9bca0a3683\n      - MIMIR_ENV_CLIENT_ID=0c174c7e-e018-41a2-ba84-3d4b4544a16f\n      - MIMIR_ENV_TENANT_ID=3aa4a235-b6e2-48d5-9195-7fcf05b459b0\n    networks:\n      - type_library_network\n\n  mimir-server:\n    build: ./mimir/src/service\n    hostname: 'mimirserver'\n    container_name: mimirserver\n    ports:\n      - \"5000:80\"\n    environment:\n      - ASPNETCORE_ENVIRONMENT=Development\n      - DatabaseConfiguration__DataSource=mssql\n      - DatabaseConfiguration__Port=1433\n      - DatabaseConfiguration__InitialCatalog=ModelBuilder\n      - DatabaseConfiguration__DbUser=sa\n      - DatabaseConfiguration__Password=P4ssw0rd1\n      - DatabaseConfiguration__Timeout=150\n      - DatabaseConfiguration__ConnectRetryCount=15\n      - DatabaseConfiguration__ConnectRetryInterval=10\n      - AzureActiveDirectoryConfiguration__TenantId=3aa4a235-b6e2-48d5-9195-7fcf05b459b0\n      - AzureActiveDirectoryConfiguration__ClientId=2967244a-662f-4462-82bd-7f9bca0a3683\n      - AzureActiveDirectoryConfiguration__Silent=true\n      - CorsConfiguration__ValidOrigins=http://localhost:3000\n      - ApplicationSetting__TypeLibraryRootUri=http://tyleserver/\n      - ApplicationSetting__TypeLibraryVersion=v1\n      - ApplicationSetting__TypeLibrarySecret=cedf6a1af9917f6ac2fd8f7a0f4610b418a72c4ac9557cf2256e4ec2226b2060\n      - ApplicationSetting__TypeLibraryDomain=runir.net\n    networks:\n      - type_library_network\n    depends_on:\n      - mssql\n\n  mssql:\n    image: \"mcr.microsoft.com/mssql/server:2017-CU8-ubuntu\"\n    hostname: 'mssql'\n    container_name: mssql\n    ports:\n      - '127.0.0.1:1433:1433'\n    volumes:\n      - mssql:/var/opt/mssql\n    environment:\n      - ACCEPT_EULA=Y\n      - MSSQL_SA_PASSWORD=P4ssw0rd1\n      - MSSQL_PID=Standard\n    networks:\n      - type_library_network\n    restart: unless-stopped\n\nvolumes:\n  mssql:\n    driver: local\n\nnetworks:\n  type_library_network:\n    driver: bridge\n"})})]}),"\n",(0,t.jsx)(e.h3,{id:"compose-file-for-the-database",children:"Compose file for the database"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(e.p,{children:"docker-compose.yaml"})}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-yml",children:"version: \"3.8\"\n\nservices:\n  mssql:\n    image: \"mcr.microsoft.com/mssql/server:2017-CU8-ubuntu\"\n    hostname: 'mssql'\n    container_name: mssql\n    ports:\n      - '127.0.0.1:1433:1433'\n    volumes:\n      - mssql:/var/opt/mssql\n    environment:\n      - ACCEPT_EULA=Y\n      - MSSQL_SA_PASSWORD=P4ssw0rd1\n      - MSSQL_PID=Standard\n    networks:\n      - type_library_network\n    restart: unless-stopped\n\nvolumes:\n  mssql:\n    driver: local\n\nnetworks:\n  type_library_network:\n    driver: bridge\n\n"})})]}),"\n",(0,t.jsx)(e.h2,{id:"after-installation",children:"After installation"}),"\n",(0,t.jsx)(e.h3,{id:"create-a-user",children:"Create a user"}),"\n",(0,t.jsx)(e.p,{children:"The first thing you need to do after installation is to start the tyle backend, the database, and the frontend. Then\nregister a new user through the frontend. After registration, you will be told to wait for an email, which will never\ncome, because it is located here:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"/mimirorg/typelibrary/src/server/TypeLibrary.Api/bin/Debug/net7.0/Data/Mail\n"})}),"\n",(0,t.jsx)(e.admonition,{type:"tip",children:(0,t.jsx)(e.p,{children:"It may be useful to sort by last modified so that the last email you received is at the top."})}),"\n",(0,t.jsx)(e.p,{children:"Then log in. Since there have been some changes in the tyle backend recently, there are some steps you need to go\nthrough before you get a fully functional user. These depend on where we are in the process, so the documentation is\ncurrently lacking. Hopefully, it works without any problems. The problem you may encounter is that there is no existing\ncompany in your backend code, so you will need to connect to the database of the solution and add this information, as\nit is no longer done automatically."}),"\n",(0,t.jsx)(e.p,{children:"Feel free to write down the steps you need to go through to solve this problem when/if it occurs."}),"\n",(0,t.jsx)(e.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"I have a white screen, what do I do?"}),(0,t.jsx)(e.p,{children:"This is most often (read always) a result of incorrect environment variables somewhere. Checklist:"}),(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Is the frontend set to ",(0,t.jsx)(e.code,{children:"REACT_APP_SILENT = true"}),"?"]}),"\n",(0,t.jsxs)(e.li,{children:["Does your user have a company in the database, and is the secret for this company set in Mimir's ",(0,t.jsx)(e.code,{children:"appsettings.json"}),",\ne.g., ",(0,t.jsx)(e.code,{children:'"TypelibrarySecret": "secretHash"'}),"?"]}),"\n",(0,t.jsx)(e.li,{children:"Does the domain in Mimir match the domain set in the company table (MimirorgAuthentication database)."}),"\n"]})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)("summary",{children:"I can't register, what's happening?"}),"\nIf you're not receiving the email, it's because it doesn't get sent when you're running in development mode; the same applies to the account recovery code. The email you should have received can be found in:"]}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"/mimirorg/typelibrary/src/server/TypeLibrary.Api/bin/Debug/net7.0/Data/Mail/"})})]}),"\n",(0,t.jsx)(e.h1,{id:"i-need-to-clean-up-my-database-how-can-i-do-this",children:"I need to clean up my database, how can I do this?"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(e.p,{children:"TypeLibrary kill script"})}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('TypeLibrary')\nEXEC(@kill);\nDROP DATABASE TypeLibrary\nCREATE Database TypeLibrary\n---------------------------------------------------------------------\n----------------------------------------------------------------------\n"})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(e.p,{children:"MimirorgAuthentication kill script"})}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"---------------------------------------------------------------------\n----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('MimirorgAuthentication')\nEXEC(@kill);\nDROP DATABASE MimirorgAuthentication\nCREATE Database MimirorgAuthentication\n---------------------------------------------------------------------\n----------------------------------------------------------------------\n"})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(e.p,{children:"ModelBuilder kill script"})}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"---------------------------------------------------------------------\n----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('ModelBuilder')\nEXEC(@kill);\nDROP DATABASE ModelBuilder\nCREATE Database ModelBuilder\nINSERT INTO [ModelBuilder].[dbo].[CollaborationPartner] VALUES ('Aibel', 'aibel.com', 0, 'rdf.aibel.com');\n---------------------------------------------------------------------\n--USE master\n--GO\n--xp_readerrorlog 0, 1, N'Server is listening on' \n--GO\n"})})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:(0,t.jsx)(e.p,{children:"Nuclear option (kill all)"})}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('TypeLibrary')\nEXEC(@kill);\nDROP DATABASE TypeLibrary\nCREATE Database TypeLibrary\n---------------------------------------------------------------------\n----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('MimirorgAuthentication')\nEXEC(@kill);\nDROP DATABASE MimirorgAuthentication\nCREATE Database MimirorgAuthentication\n---------------------------------------------------------------------\n----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('ModelBuilder')\nEXEC(@kill);\nDROP DATABASE ModelBuilder\nCREATE Database ModelBuilder\n---------------------------------------------------------------------\n--USE master\n--GO\n--xp_readerrorlog 0, 1, N'Server is listening on' \n--GO\n"})})]}),"\n",(0,t.jsx)(e.p,{children:"If there are other issues, they most often arise from:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Incorrect environment variables."}),"\n",(0,t.jsx)(e.li,{children:"Forgetting to run Tyle's backend."}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>s,a:()=>a});var t=i(7294);const r={},o=t.createContext(r);function a(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);