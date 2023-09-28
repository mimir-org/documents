"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[267],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>_});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(t),d=r,_=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return t?a.createElement(_,o(o({ref:n},c),{},{components:t})):a.createElement(_,o({ref:n},c))}));function _(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},408:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={title:"Installation guide"},o=void 0,l={type:"mdx",permalink:"/documents/installation-guide",source:"@site/src/pages/installation-guide.md",title:"Installation guide",description:"Installation guide",frontMatter:{title:"Installation guide"}},s=[{value:"Installation guide",id:"installation-guide",level:2},{value:"Tools",id:"tools",level:2},{value:"Where Can I Find the Code?",id:"where-can-i-find-the-code",level:2},{value:"Tyle",id:"tyle",level:3},{value:"Mimir",id:"mimir",level:3},{value:"Component-library",id:"component-library",level:3},{value:"How Do I Install the Code on My Machine?",id:"how-do-i-install-the-code-on-my-machine",level:2},{value:"Manual Installation",id:"manual-installation",level:3},{value:"Automatic Installation",id:"automatic-installation",level:3},{value:"Mimir frontend og Yalc",id:"mimir-frontend-og-yalc",level:2},{value:"Docker-compose files",id:"docker-compose-files",level:2},{value:"Compose file for the whole solution",id:"compose-file-for-the-whole-solution",level:3},{value:"Compose file for tyle",id:"compose-file-for-tyle",level:3},{value:"Compose file for mimir",id:"compose-file-for-mimir",level:3},{value:"Compose file for the database",id:"compose-file-for-the-database",level:3},{value:"After installation",id:"after-installation",level:2},{value:"Create a user",id:"create-a-user",level:3},{value:"FAQ",id:"faq",level:2}],m={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation-guide"},"Installation guide"),(0,r.kt)("p",null,"Tyle and Mimir have a very large and complex domain, which is not always easy to understand. Therefore, there's no shame\nin asking for help. This is a minimalist, almost \"installation guide\" for the code. It won't go into great depth, as\nthat's something best discussed face-to-face, but it's intended as a sort of \"Here's how you hopefully run the code.\""),(0,r.kt)("h2",{id:"tools"},"Tools"),(0,r.kt)("p",null,"The team uses the tools they are most comfortable with, but here are some examples:\nFrontend code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VSCode"),(0,r.kt)("li",{parentName:"ul"},"WebStorm")),(0,r.kt)("p",null,"Backend code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visual Studio + Resharper"),(0,r.kt)("li",{parentName:"ul"},"Rider (Resharper is built-in)")),(0,r.kt)("p",null,"Other tools:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Git"),(0,r.kt)("li",{parentName:"ul"},"Docker"),(0,r.kt)("li",{parentName:"ul"},"Datagrip (database management)"),(0,r.kt)("li",{parentName:"ul"},"SQL Server Management Studio")),(0,r.kt)("p",null,"Of these, you ",(0,r.kt)("strong",{parentName:"p"},"must")," install Docker or equivalent to run the MSSQL database (you can also connect it to any mssql\ndatabase, but this is not covered in this documentation."),(0,r.kt)("h2",{id:"where-can-i-find-the-code"},"Where Can I Find the Code?"),(0,r.kt)("p",null,"The code for Mimir can be found here ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mimir-org"},"https://github.com/mimir-org")," under the Mimir repository. The project can be cloned\nto your machine with ",(0,r.kt)("inlineCode",{parentName:"p"},"git@github.com:mimir-org/mimir.git")," via SSH or ",(0,r.kt)("inlineCode",{parentName:"p"},"gh repo clone mimir-org/mimir"),"\nwith ",(0,r.kt)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub CLI"),"."),(0,r.kt)("h3",{id:"tyle"},"Tyle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:mimir-org/typelibrary.git\n")),(0,r.kt)("h3",{id:"mimir"},"Mimir"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:mimir-org/mimir.git\n")),(0,r.kt)("h3",{id:"component-library"},"Component-library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:mimir-org/component-library.git\n")),(0,r.kt)("h2",{id:"how-do-i-install-the-code-on-my-machine"},"How Do I Install the Code on My Machine?"),(0,r.kt)("p",null,"For Mimir to function, you need to have all the code on your machine. This can be done in several different ways."),(0,r.kt)("h3",{id:"manual-installation"},"Manual Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Start an MSSQL database running on port 1433 locally on your machine using Docker (or equivalent)."),(0,r.kt)("li",{parentName:"ol"},"Clone all the repositories under mimir-org (typelibrary, mimir, and component-library) and run them following the\ninstructions in the ReadMe files of the different repositories. It might be wise to run the different projects in\nthis order, at least the first time:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tyle backend"),(0,r.kt)("li",{parentName:"ul"},"Tyle frontend"),(0,r.kt)("li",{parentName:"ul"},"Mimir backend"),(0,r.kt)("li",{parentName:"ul"},"Mimir frontend"))),(0,r.kt)("li",{parentName:"ol"},"After installation, you must add the following env file:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/mimir/src/service/ModelBuilder.Api/appsettings.local.json"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"appsettings.local.json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ApplicationSetting": {\n    "TypeLibraryRootUri": "http://localhost:5001/",\n    "TypeLibraryVersion": "v1",\n    "TypeLibrarySecret": "cedf6a1af9917f6ac2fd8f7a0f4610b418a72c4ac9557cf2256e4ec2226b2060",\n    "TypeLibraryDomain": "runir.net"\n  },\n  "Logging": {\n    "LogLevel": {\n      "Default": "Error",\n      "Microsoft": "Warning",\n      "Microsoft.Hosting.Lifetime": "Warning",\n      "Microsoft.EntityFrameworkCore.Database.Command": "Warning",\n      "Mb.Services": "Information",\n      "EventHubModule": "Error"\n    },\n    "Console": {\n      "IncludeScopes": true,\n      "LogLevel": {\n        "Default": "Error",\n        "Microsoft": "Warning",\n        "Microsoft.Hosting.Lifetime": "Warning",\n        "Microsoft.EntityFrameworkCore.Database.Command": "Warning",\n        "Mb.Services": "Information",\n        "EventHubModule": "Error"\n      }\n    }\n  },\n  "AllowedHosts": "*",\n  "AzureActiveDirectoryConfiguration": {\n    "Instance": "https://login.microsoftonline.com/",\n    "TenantId": "3aa4a235-b6e2-48d5-9195-7fcf05b459b0",\n    "ClientId": "2967244a-662f-4462-82bd-7f9bca0a3683",\n    "ClientSecret": null,\n    "CallbackPath": "/signin-oidc",\n    "SignedOutCallbackPath": "/signout-oidc",\n    "Silent": true\n  },\n  "CorsConfiguration": {\n    "ValidOrigins": "http://localhost:3000"\n  },\n  "DatabaseConfiguration": {\n    "DataSource": "127.0.0.1",\n    "Port": 1433,\n    "InitialCatalog": "ModelBuilder",\n    "DbUser": "sa",\n    "Password": "P4ssw0rd1",\n    "Timeout": 150,\n    "ConnectRetryCount": 15,\n    "ConnectRetryInterval": 10\n  }\n}\n'))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"There are other .env files in the frontend code, but for the most part, you don't have to worry about this. The most\ninteresting thing here is probably silent mode. This should probably be true when you are developing locally, as this\nmode ignores some authentication. The solution will most likely crash without it, leading to a white screen on the\nfrontend.")),(0,r.kt)("h3",{id:"automatic-installation"},"Automatic Installation"),(0,r.kt)("p",null,"Spin up all the code with a docker-compose file."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install docker"),(0,r.kt)("li",{parentName:"ol"},"Find a place to download the code so that you get this folder structure:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ud83d\udcc1 mimirorg (this can be renamed to whatever you want)\n\u251c\u2500\u2500 \ud83d\udcc1 component-library\n\u2502   \u2514\u2500\u2500 \ud83d\udcc1 etc\n\u251c\u2500\u2500 \ud83d\udcc1 mimir\n\u2502   \u2514\u2500\u2500 \ud83d\udcc1 etc\n\u2514\u2500\u2500 \ud83d\udcc1 typelibrary\n    \u2514\u2500\u2500 \ud83d\udcc1 etc\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create a new .yaml file and paste the following code.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"docker-compose.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: \"3.8\"\n\nservices:\n\n  tyle-client:\n    build: ./typelibrary/src/client\n    hostname: 'tyleclient'\n    container_name: tyleclient\n    ports:\n      - \"3001:80\"\n    environment:\n      - TYPELIBRARY_ENV_API_BASE_URL=http://localhost:5001/v1.0/\n    networks:\n      - type_library_network\n\n  mimir-client:\n    build:\n      context: ./mimir/src/client\n      args:\n        - MIMIR_VERSION=4.0.0\n    hostname: 'mimirclient'\n    container_name: mimirclient\n    ports:\n      - \"3000:80\"\n    environment:\n      - MIMIR_ENV_API_BASE_URL=http://localhost:5000/v1.0/\n      - MIMIR_ENV_SOCKET_BASE_URL=http://localhost:5000/\n      - MIMIR_ENV_SILENT=true\n      - MIMIR_ENV_APP_ID=2967244a-662f-4462-82bd-7f9bca0a3683\n      - MIMIR_ENV_CLIENT_ID=0c174c7e-e018-41a2-ba84-3d4b4544a16f\n      - MIMIR_ENV_TENANT_ID=3aa4a235-b6e2-48d5-9195-7fcf05b459b0\n    networks:\n      - type_library_network\n\n  tyle-server:\n    build: ./typelibrary/src/server\n    hostname: 'tyleserver'\n    container_name: tyleserver\n    ports:\n      - \"5001:80\"\n    volumes:\n      - tyle:/app/Data\n    environment:\n      - ASPNETCORE_ENVIRONMENT=Development\n      - DatabaseConfiguration__DataSource=mssql\n      - DatabaseConfiguration__Port=1433\n      - DatabaseConfiguration__InitialCatalog=TypeLibrary\n      - DatabaseConfiguration__DbUser=sa\n      - DatabaseConfiguration__Password=P4ssw0rd1\n      - MimirorgAuthSettings__ApplicationName=Tyle\n      - MimirorgAuthSettings__ApplicationUrl=http://localhost:5001\n      - MimirorgAuthSettings__RequireConfirmedAccount=true\n      - MimirorgAuthSettings__Email=noreply@runir.net\n      - MimirorgAuthSettings__DatabaseConfiguration__DataSource=mssql\n      - MimirorgAuthSettings__DatabaseConfiguration__Port=1433\n      - MimirorgAuthSettings__DatabaseConfiguration__InitialCatalog=MimirorgAuthentication\n      - MimirorgAuthSettings__DatabaseConfiguration__DbUser=sa\n      - MimirorgAuthSettings__DatabaseConfiguration__Password=P4ssw0rd1\n      - ApplicationSettings__ApplicationSemanticUrl=http://localhost:5001/v1/ont\n      - ApplicationSettings__ApplicationUrl=http://localhost:5001\n      - CorsConfiguration__ValidOrigins=http://localhost:3001\n    networks:\n      - type_library_network\n    depends_on:\n      - mssql\n\n  mimir-server:\n    build: ./mimir/src/service\n    hostname: 'mimirserver'\n    container_name: mimirserver\n    ports:\n      - \"5000:80\"\n    environment:\n      - ASPNETCORE_ENVIRONMENT=Development\n      - DatabaseConfiguration__DataSource=mssql\n      - DatabaseConfiguration__Port=1433\n      - DatabaseConfiguration__InitialCatalog=ModelBuilder\n      - DatabaseConfiguration__DbUser=sa\n      - DatabaseConfiguration__Password=P4ssw0rd1\n      - DatabaseConfiguration__Timeout=150\n      - DatabaseConfiguration__ConnectRetryCount=15\n      - DatabaseConfiguration__ConnectRetryInterval=10\n      - AzureActiveDirectoryConfiguration__TenantId=3aa4a235-b6e2-48d5-9195-7fcf05b459b0\n      - AzureActiveDirectoryConfiguration__ClientId=2967244a-662f-4462-82bd-7f9bca0a3683\n      - AzureActiveDirectoryConfiguration__Silent=true\n      - CorsConfiguration__ValidOrigins=http://localhost:3000\n      - ApplicationSetting__TypeLibraryRootUri=http://tyleserver/\n      - ApplicationSetting__TypeLibraryVersion=v1\n      - ApplicationSetting__TypeLibrarySecret=cedf6a1af9917f6ac2fd8f7a0f4610b418a72c4ac9557cf2256e4ec2226b2060\n      - ApplicationSetting__TypeLibraryDomain=runir.net\n    networks:\n      - type_library_network\n    depends_on:\n      - mssql\n\n  mssql:\n    image: \"mcr.microsoft.com/mssql/server:2017-CU8-ubuntu\"\n    hostname: 'mssql'\n    container_name: mssql\n    ports:\n      - '127.0.0.1:1433:1433'\n    volumes:\n      - mssql:/var/opt/mssql\n    environment:\n      - ACCEPT_EULA=Y\n      - MSSQL_SA_PASSWORD=P4ssw0rd1\n      - MSSQL_PID=Standard\n    networks:\n      - type_library_network\n    restart: unless-stopped\n\nvolumes:\n  mssql:\n    driver: local\n  tyle:\n    driver: local\n\nnetworks:\n  type_library_network:\n    driver: bridge\n"))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Place this yaml file as shown below:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\ud83d\udcc1 mimirorg (this can be renamed to whatever you want)\n\u251c\u2500\u2500 \ud83d\udcc1 component-library\n\u2502   \u2514\u2500\u2500 \ud83d\udcc1 etc\n\u251c\u2500\u2500 \ud83d\udcc1 mimir\n\u2502   \u2514\u2500\u2500 \ud83d\udcc1 etc\n\u251c\u2500\u2500 \ud83d\udcc1 typelibrary\n\u2502   \u2514\u2500\u2500 \ud83d\udcc1 etc\n\u2514\u2500\u2500 \ud83d\udc0b docker-compose.yaml\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Then run the docker-compose file from the command line. Use docker-compose up -d from the folder where the file is\nlocated."),(0,r.kt)("li",{parentName:"ol"},"Once everything is up and running, you should be able to access the different pages\nat: http://localhost:3000, http://localhost:3001, http://localhost:5000, http://localhost:5001.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"See more details"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE                                            COMMAND                   CREATED         STATUS         PORTS                           NAMES\nb89d794be253   mimirorg_mimir-server                            "dotnet ModelBuilder\u2026"    9 seconds ago   Up 7 seconds   443/tcp, 0.0.0.0:5000->80/tcp   mimirserver\n84e7600fdcf9   mimirorg_tyle-server                             "dotnet TypeLibrary.\u2026"    9 seconds ago   Up 7 seconds   443/tcp, 0.0.0.0:5001->80/tcp   tyleserver\ned558855c314   mimirorg_mimir-client                            "/bin/sh -c \'\\"./star\u2026"   9 seconds ago   Up 7 seconds   0.0.0.0:3000->80/tcp            mimirclient\n42d843407f0d   mimirorg_tyle-client                             "/bin/sh -c \'\\"./star\u2026"   9 seconds ago   Up 7 seconds   0.0.0.0:3001->80/tcp            tyleclient\nd914b6d4d538   mcr.microsoft.com/mssql/server:2017-CU8-ubuntu   "/opt/mssql/bin/sqls\u2026"    9 seconds ago   Up 7 seconds   127.0.0.1:1433->1433/tcp        mssql\n'))),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"To run these locally, you will need to stop the container you want to run locally in, for example, Visual Studio.")),(0,r.kt)("h2",{id:"mimir-frontend-og-yalc"},"Mimir frontend og Yalc"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/wclr/yalc"},"https://github.com/wclr/yalc")),(0,r.kt)("p",null,"Yalc is a way to connect npm package development with the dev environment. It allows us to develop components in the\ncomponent-library and dynamically update them locally so that you don't have to release a new package on npm for every\ncode change."),(0,r.kt)("p",null,"Install yalc with npm i yalc -g"),(0,r.kt)("p",null,"Then you are ready to use it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the component-library/app folder"),(0,r.kt)("li",{parentName:"ul"},"Run the command yalc publish"),(0,r.kt)("li",{parentName:"ul"},"Navigate to /mimirorg/mimir/src/client"),(0,r.kt)("li",{parentName:"ul"},"Run the command yalc add @mimirorg/component-library"),(0,r.kt)("li",{parentName:"ul"},"Now you can run mimir as usual by first installing the packages with npm i and then running it locally with npm run\nstart or npm run.")),(0,r.kt)("h2",{id:"docker-compose-files"},"Docker-compose files"),(0,r.kt)("p",null,"Sometimes it's useful to run tyle or mimir separately to avoid having multiple Visual Studio instances running\nsimultaneously. These files can be useful to have."),(0,r.kt)("h3",{id:"compose-file-for-the-whole-solution"},"Compose file for the whole solution"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"docker-compose.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: \"3.8\"\n\nservices:\n\n  tyle-client:\n    build: ./typelibrary/src/client\n    hostname: 'tyleclient'\n    container_name: tyleclient\n    ports:\n      - \"3001:80\"\n    environment:\n      - TYPELIBRARY_ENV_API_BASE_URL=http://localhost:5001/v1.0/\n    networks:\n      - type_library_network\n\n  mimir-client:\n    build:\n      context: ./mimir/src/client\n      args:\n        - MIMIR_VERSION=4.0.0\n    hostname: 'mimirclient'\n    container_name: mimirclient\n    ports:\n      - \"3000:80\"\n    environment:\n      - MIMIR_ENV_API_BASE_URL=http://localhost:5000/v1.0/\n      - MIMIR_ENV_SOCKET_BASE_URL=http://localhost:5000/\n      - MIMIR_ENV_SILENT=true\n      - MIMIR_ENV_APP_ID=2967244a-662f-4462-82bd-7f9bca0a3683\n      - MIMIR_ENV_CLIENT_ID=0c174c7e-e018-41a2-ba84-3d4b4544a16f\n      - MIMIR_ENV_TENANT_ID=3aa4a235-b6e2-48d5-9195-7fcf05b459b0\n    networks:\n      - type_library_network\n\n  tyle-server:\n    build: ./typelibrary/src/server\n    hostname: 'tyleserver'\n    container_name: tyleserver\n    ports:\n      - \"5001:80\"\n    volumes:\n      - tyle:/app/Data\n    environment:\n      - ASPNETCORE_ENVIRONMENT=Development\n      - DatabaseConfiguration__DataSource=mssql\n      - DatabaseConfiguration__Port=1433\n      - DatabaseConfiguration__InitialCatalog=TypeLibrary\n      - DatabaseConfiguration__DbUser=sa\n      - DatabaseConfiguration__Password=P4ssw0rd1\n      - MimirorgAuthSettings__ApplicationName=Tyle\n      - MimirorgAuthSettings__ApplicationUrl=http://localhost:5001\n      - MimirorgAuthSettings__RequireConfirmedAccount=true\n      - MimirorgAuthSettings__Email=noreply@runir.net\n      - MimirorgAuthSettings__DatabaseConfiguration__DataSource=mssql\n      - MimirorgAuthSettings__DatabaseConfiguration__Port=1433\n      - MimirorgAuthSettings__DatabaseConfiguration__InitialCatalog=MimirorgAuthentication\n      - MimirorgAuthSettings__DatabaseConfiguration__DbUser=sa\n      - MimirorgAuthSettings__DatabaseConfiguration__Password=P4ssw0rd1\n      - ApplicationSettings__ApplicationSemanticUrl=http://localhost:5001/v1/ont\n      - ApplicationSettings__ApplicationUrl=http://localhost:5001\n      - CorsConfiguration__ValidOrigins=http://localhost:3001\n    networks:\n      - type_library_network\n    depends_on:\n      - mssql\n\n  mimir-server:\n    build: ./mimir/src/service\n    hostname: 'mimirserver'\n    container_name: mimirserver\n    ports:\n      - \"5000:80\"\n    environment:\n      - ASPNETCORE_ENVIRONMENT=Development\n      - DatabaseConfiguration__DataSource=mssql\n      - DatabaseConfiguration__Port=1433\n      - DatabaseConfiguration__InitialCatalog=ModelBuilder\n      - DatabaseConfiguration__DbUser=sa\n      - DatabaseConfiguration__Password=P4ssw0rd1\n      - DatabaseConfiguration__Timeout=150\n      - DatabaseConfiguration__ConnectRetryCount=15\n      - DatabaseConfiguration__ConnectRetryInterval=10\n      - AzureActiveDirectoryConfiguration__TenantId=3aa4a235-b6e2-48d5-9195-7fcf05b459b0\n      - AzureActiveDirectoryConfiguration__ClientId=2967244a-662f-4462-82bd-7f9bca0a3683\n      - AzureActiveDirectoryConfiguration__Silent=true\n      - CorsConfiguration__ValidOrigins=http://localhost:3000\n      - ApplicationSetting__TypeLibraryRootUri=http://tyleserver/\n      - ApplicationSetting__TypeLibraryVersion=v1\n      - ApplicationSetting__TypeLibrarySecret=cedf6a1af9917f6ac2fd8f7a0f4610b418a72c4ac9557cf2256e4ec2226b2060\n      - ApplicationSetting__TypeLibraryDomain=runir.net\n    networks:\n      - type_library_network\n    depends_on:\n      - mssql\n\n  mssql:\n    image: \"mcr.microsoft.com/mssql/server:2017-CU8-ubuntu\"\n    hostname: 'mssql'\n    container_name: mssql\n    ports:\n      - '127.0.0.1:1433:1433'\n    volumes:\n      - mssql:/var/opt/mssql\n    environment:\n      - ACCEPT_EULA=Y\n      - MSSQL_SA_PASSWORD=P4ssw0rd1\n      - MSSQL_PID=Standard\n    networks:\n      - type_library_network\n    restart: unless-stopped\n\nvolumes:\n  mssql:\n    driver: local\n  tyle:\n    driver: local\n\nnetworks:\n  type_library_network:\n    driver: bridge\n\n"))),(0,r.kt)("h3",{id:"compose-file-for-tyle"},"Compose file for tyle"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"docker-compose.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: \"3.8\"\n\nservices:\n\n  tyle-client:\n    build: ./typelibrary/src/client\n    hostname: 'tyleclient'\n    container_name: tyleclient\n    ports:\n      - \"3001:80\"\n    environment:\n      - TYPELIBRARY_ENV_API_BASE_URL=http://localhost:5001/v1.0/\n    networks:\n      - type_library_network\n\n  tyle-server:\n    build: ./typelibrary/src/server\n    hostname: 'tyleserver'\n    container_name: tyleserver\n    ports:\n      - \"5001:80\"\n    volumes:\n      - tyle:/app/Data\n    environment:\n      - ASPNETCORE_ENVIRONMENT=Development\n      - DatabaseConfiguration__DataSource=mssql\n      - DatabaseConfiguration__Port=1433\n      - DatabaseConfiguration__InitialCatalog=TypeLibrary\n      - DatabaseConfiguration__DbUser=sa\n      - DatabaseConfiguration__Password=P4ssw0rd1\n      - MimirorgAuthSettings__ApplicationName=Tyle\n      - MimirorgAuthSettings__ApplicationUrl=http://localhost:5001\n      - MimirorgAuthSettings__RequireConfirmedAccount=true\n      - MimirorgAuthSettings__Email=noreply@runir.net\n      - MimirorgAuthSettings__DatabaseConfiguration__DataSource=mssql\n      - MimirorgAuthSettings__DatabaseConfiguration__Port=1433\n      - MimirorgAuthSettings__DatabaseConfiguration__InitialCatalog=MimirorgAuthentication\n      - MimirorgAuthSettings__DatabaseConfiguration__DbUser=sa\n      - MimirorgAuthSettings__DatabaseConfiguration__Password=P4ssw0rd1\n      - ApplicationSettings__ApplicationSemanticUrl=http://localhost:5001/v1/ont\n      - ApplicationSettings__ApplicationUrl=http://localhost:5001\n      - CorsConfiguration__ValidOrigins=http://localhost:3001\n    networks:\n      - type_library_network\n    depends_on:\n      - mssql\n\n  mssql:\n    image: \"mcr.microsoft.com/mssql/server:2017-CU8-ubuntu\"\n    hostname: 'mssql'\n    container_name: mssql\n    ports:\n      - '127.0.0.1:1433:1433'\n    volumes:\n      - mssql:/var/opt/mssql\n    environment:\n      - ACCEPT_EULA=Y\n      - MSSQL_SA_PASSWORD=P4ssw0rd1\n      - MSSQL_PID=Standard\n    networks:\n      - type_library_network\n    restart: unless-stopped\n\nvolumes:\n  mssql:\n    driver: local\n  tyle:\n    driver: local\n\nnetworks:\n  type_library_network:\n    driver: bridge\n"))),(0,r.kt)("h3",{id:"compose-file-for-mimir"},"Compose file for mimir"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"docker-compose.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: \"3.8\"\n\nservices:\n\n  mimir-client:\n    build:\n      context: ./mimir/src/client\n      args:\n        - MIMIR_VERSION=4.0.0\n    hostname: 'mimirclient'\n    container_name: mimirclient\n    ports:\n      - \"3000:80\"\n    environment:\n      - MIMIR_ENV_API_BASE_URL=http://localhost:5000/v1.0/\n      - MIMIR_ENV_SOCKET_BASE_URL=http://localhost:5000/\n      - MIMIR_ENV_SILENT=true\n      - MIMIR_ENV_APP_ID=2967244a-662f-4462-82bd-7f9bca0a3683\n      - MIMIR_ENV_CLIENT_ID=0c174c7e-e018-41a2-ba84-3d4b4544a16f\n      - MIMIR_ENV_TENANT_ID=3aa4a235-b6e2-48d5-9195-7fcf05b459b0\n    networks:\n      - type_library_network\n\n  mimir-server:\n    build: ./mimir/src/service\n    hostname: 'mimirserver'\n    container_name: mimirserver\n    ports:\n      - \"5000:80\"\n    environment:\n      - ASPNETCORE_ENVIRONMENT=Development\n      - DatabaseConfiguration__DataSource=mssql\n      - DatabaseConfiguration__Port=1433\n      - DatabaseConfiguration__InitialCatalog=ModelBuilder\n      - DatabaseConfiguration__DbUser=sa\n      - DatabaseConfiguration__Password=P4ssw0rd1\n      - DatabaseConfiguration__Timeout=150\n      - DatabaseConfiguration__ConnectRetryCount=15\n      - DatabaseConfiguration__ConnectRetryInterval=10\n      - AzureActiveDirectoryConfiguration__TenantId=3aa4a235-b6e2-48d5-9195-7fcf05b459b0\n      - AzureActiveDirectoryConfiguration__ClientId=2967244a-662f-4462-82bd-7f9bca0a3683\n      - AzureActiveDirectoryConfiguration__Silent=true\n      - CorsConfiguration__ValidOrigins=http://localhost:3000\n      - ApplicationSetting__TypeLibraryRootUri=http://tyleserver/\n      - ApplicationSetting__TypeLibraryVersion=v1\n      - ApplicationSetting__TypeLibrarySecret=cedf6a1af9917f6ac2fd8f7a0f4610b418a72c4ac9557cf2256e4ec2226b2060\n      - ApplicationSetting__TypeLibraryDomain=runir.net\n    networks:\n      - type_library_network\n    depends_on:\n      - mssql\n\n  mssql:\n    image: \"mcr.microsoft.com/mssql/server:2017-CU8-ubuntu\"\n    hostname: 'mssql'\n    container_name: mssql\n    ports:\n      - '127.0.0.1:1433:1433'\n    volumes:\n      - mssql:/var/opt/mssql\n    environment:\n      - ACCEPT_EULA=Y\n      - MSSQL_SA_PASSWORD=P4ssw0rd1\n      - MSSQL_PID=Standard\n    networks:\n      - type_library_network\n    restart: unless-stopped\n\nvolumes:\n  mssql:\n    driver: local\n\nnetworks:\n  type_library_network:\n    driver: bridge\n"))),(0,r.kt)("h3",{id:"compose-file-for-the-database"},"Compose file for the database"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"docker-compose.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"version: \"3.8\"\n\nservices:\n  mssql:\n    image: \"mcr.microsoft.com/mssql/server:2017-CU8-ubuntu\"\n    hostname: 'mssql'\n    container_name: mssql\n    ports:\n      - '127.0.0.1:1433:1433'\n    volumes:\n      - mssql:/var/opt/mssql\n    environment:\n      - ACCEPT_EULA=Y\n      - MSSQL_SA_PASSWORD=P4ssw0rd1\n      - MSSQL_PID=Standard\n    networks:\n      - type_library_network\n    restart: unless-stopped\n\nvolumes:\n  mssql:\n    driver: local\n\nnetworks:\n  type_library_network:\n    driver: bridge\n\n"))),(0,r.kt)("h2",{id:"after-installation"},"After installation"),(0,r.kt)("h3",{id:"create-a-user"},"Create a user"),(0,r.kt)("p",null,"The first thing you need to do after installation is to start the tyle backend, the database, and the frontend. Then\nregister a new user through the frontend. After registration, you will be told to wait for an email, which will never\ncome, because it is located here: /mimirorg/typelibrary/src/server/TypeLibrary.Api/bin/Debug/net7.0/Data/Mail. It may be\nuseful to sort by last modified so that the last email you received is at the top."),(0,r.kt)("p",null,"Then log in. Since there have been some changes in the tyle backend recently, there are some steps you need to go\nthrough before you get a fully functional user. These depend on where we are in the process, so the documentation is\ncurrently lacking. Hopefully, it works without any problems. The problem you may encounter is that there is no existing\ncompany in your backend code, so you will need to connect to the database of the solution and add this information, as\nit is no longer done automatically."),(0,r.kt)("p",null,"Feel free to write down the steps you need to go through to solve this problem when/if it occurs."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"I have a white screen, what do I do?"),(0,r.kt)("p",null,"This is most often (read always) a result of incorrect environment variables somewhere. Checklist:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Is the frontend set to ",(0,r.kt)("inlineCode",{parentName:"li"},"REACT_APP_SILENT = true"),"?"),(0,r.kt)("li",{parentName:"ul"},"Does your user have a company in the database, and is the secret for this company set in Mimir's ",(0,r.kt)("inlineCode",{parentName:"li"},"appsettings.json"),",\ne.g., ",(0,r.kt)("inlineCode",{parentName:"li"},'"TypelibrarySecret": "secretHash"'),"?"),(0,r.kt)("li",{parentName:"ul"},"Does the domain in Mimir match the domain set in the company table (MimirorgAuthentication database)."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"I can't register, what's happening?"),"If you're not receiving the email, it's because it doesn't get sent when you're running in development mode; the same applies to the account recovery code. The email you should have received can be found in:",(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/mimirorg/typelibrary/src/server/TypeLibrary.Api/bin/Debug/net7.0/Data/Mail/"))),(0,r.kt)("h1",{id:"i-need-to-clean-up-my-database-how-can-i-do-this"},"I need to clean up my database, how can I do this?"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"TypeLibrary kill script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('TypeLibrary')\nEXEC(@kill);\nDROP DATABASE TypeLibrary\nCREATE Database TypeLibrary\n---------------------------------------------------------------------\n----------------------------------------------------------------------\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"MimirorgAuthentication kill script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"---------------------------------------------------------------------\n----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('MimirorgAuthentication')\nEXEC(@kill);\nDROP DATABASE MimirorgAuthentication\nCREATE Database MimirorgAuthentication\n---------------------------------------------------------------------\n----------------------------------------------------------------------\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ModelBuilder kill script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"---------------------------------------------------------------------\n----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('ModelBuilder')\nEXEC(@kill);\nDROP DATABASE ModelBuilder\nCREATE Database ModelBuilder\nINSERT INTO [ModelBuilder].[dbo].[CollaborationPartner] VALUES ('Aibel', 'aibel.com', 0, 'rdf.aibel.com');\n---------------------------------------------------------------------\n--USE master\n--GO\n--xp_readerrorlog 0, 1, N'Server is listening on' \n--GO\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Nuclear option (kill all)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('TypeLibrary')\nEXEC(@kill);\nDROP DATABASE TypeLibrary\nCREATE Database TypeLibrary\n---------------------------------------------------------------------\n----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('MimirorgAuthentication')\nEXEC(@kill);\nDROP DATABASE MimirorgAuthentication\nCREATE Database MimirorgAuthentication\n---------------------------------------------------------------------\n----------------------------------------------------------------------\n--Script som kobler fra alt og alle som er tilkoblet\n--Deretter slettes databasen\nUSE [master];\nDECLARE @kill varchar(8000) = '';\nSELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'\nFROM sys.dm_exec_sessions\nWHERE database_id = db_id('ModelBuilder')\nEXEC(@kill);\nDROP DATABASE ModelBuilder\nCREATE Database ModelBuilder\n---------------------------------------------------------------------\n--USE master\n--GO\n--xp_readerrorlog 0, 1, N'Server is listening on' \n--GO\n"))),(0,r.kt)("p",null,"If there are other issues, they most often arise from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Incorrect environment variables."),(0,r.kt)("li",{parentName:"ul"},"Forgetting to run Tyle's backend.")))}u.isMDXComponent=!0}}]);