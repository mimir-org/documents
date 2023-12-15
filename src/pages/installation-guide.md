---
title: Installation guide
---

## Installation guide

:::note
Tyle and Mimir have a very large and complex domain, which is not always easy to understand. Therefore, there's no shame
in asking for help. This is a minimalist, almost "installation guide" for the code. It won't go into great depth, as
that's something best discussed face-to-face, but it's intended as a sort of "Here's how you hopefully run the code."
:::

## Tools

The team uses the tools they are most comfortable with, but here are some examples:

Frontend code:

- VSCode
- WebStorm

Backend code:

- Visual Studio + Resharper
- Rider (Resharper is built-in)

Other tools:

- Git
- Docker
- Datagrip (database management)
- SQL Server Management Studio

:::info
Of these, you **must** install Docker or equivalent to run the MSSQL database (you can also connect it to any mssql
database, but this is not covered in this documentation.
:::

## Where Can I Find the Code?

The code for Tyle and Mimir can be found here https://github.com/mimir-org under the Mimir repository. The project can be cloned
to your machine with `git@github.com:mimir-org/<repository>.git` via SSH or `gh repo clone mimir-org/<repository>`
with [GitHub CLI](https://cli.github.com/).

### Tyle

```bash
git clone git@github.com:mimir-org/typelibrary.git
```

### Mimir

```bash
git clone git@github.com:mimir-org/mimir.git
```

### Component-library

```bash
git clone git@github.com:mimir-org/component-library.git
```

## How Do I Install the Code on My Machine?

:::info
We recommend cloning all the repos before trying to start them, as they are dependent on each other. Especially Mimir,
which needs all of the repos to be able to run.
:::

### Automatic Installation

Spin up all the code with a docker-compose file.

1. Install docker
2. Find a place to download the code so that you get this folder structure:

```
📁 mimirorg (this can be renamed to whatever you want)
├── 📁 component-library
│   └── 📁 etc
├── 📁 mimir
│   └── 📁 etc
└── 📁 typelibrary
    └── 📁 etc
```

3. Create a new .yaml file and paste the following code.

<details>
<summary>docker-compose.yaml</summary>

```yaml
version: "3.8"

services:

  tyle-client:
    build: ./typelibrary/src/client
    hostname: 'tyleclient'
    container_name: tyleclient
    ports:
      - "3001:80"
    environment:
      - TYPELIBRARY_ENV_API_BASE_URL=http://localhost:5001/v1.0/
    networks:
      - type_library_network

  mimir-client:
    build:
      context: ./mimir/src/client
      args:
        - MIMIR_VERSION=4.0.0
    hostname: 'mimirclient'
    container_name: mimirclient
    ports:
      - "3000:80"
    environment:
      - MIMIR_ENV_API_BASE_URL=http://localhost:5000/v1.0/
      - MIMIR_ENV_SOCKET_BASE_URL=http://localhost:5000/
      - MIMIR_ENV_SILENT=true
      - MIMIR_ENV_APP_ID=2967244a-662f-4462-82bd-7f9bca0a3683
      - MIMIR_ENV_CLIENT_ID=0c174c7e-e018-41a2-ba84-3d4b4544a16f
      - MIMIR_ENV_TENANT_ID=3aa4a235-b6e2-48d5-9195-7fcf05b459b0
    networks:
      - type_library_network

  tyle-server:
    build: ./typelibrary/src/server
    hostname: 'tyleserver'
    container_name: tyleserver
    ports:
      - "5001:80"
    volumes:
      - tyle:/app/Data
    environment:
      - ASPNETCORE_ENVIRONMENT=Development
      - DatabaseConfiguration__DataSource=mssql
      - DatabaseConfiguration__Port=1433
      - DatabaseConfiguration__InitialCatalog=TypeLibrary
      - DatabaseConfiguration__DbUser=sa
      - DatabaseConfiguration__Password=P4ssw0rd1
      - MimirorgAuthSettings__ApplicationName=Tyle
      - MimirorgAuthSettings__ApplicationUrl=http://localhost:5001
      - MimirorgAuthSettings__RequireConfirmedAccount=true
      - MimirorgAuthSettings__Email=noreply@runir.net
      - MimirorgAuthSettings__DatabaseConfiguration__DataSource=mssql
      - MimirorgAuthSettings__DatabaseConfiguration__Port=1433
      - MimirorgAuthSettings__DatabaseConfiguration__InitialCatalog=MimirorgAuthentication
      - MimirorgAuthSettings__DatabaseConfiguration__DbUser=sa
      - MimirorgAuthSettings__DatabaseConfiguration__Password=P4ssw0rd1
      - ApplicationSettings__ApplicationSemanticUrl=http://localhost:5001/v1/ont
      - ApplicationSettings__ApplicationUrl=http://localhost:5001
      - CorsConfiguration__ValidOrigins=http://localhost:3001
    networks:
      - type_library_network
    depends_on:
      - mssql

  mimir-server:
    build: ./mimir/src/service
    hostname: 'mimirserver'
    container_name: mimirserver
    ports:
      - "5000:80"
    environment:
      - ASPNETCORE_ENVIRONMENT=Development
      - DatabaseConfiguration__DataSource=mssql
      - DatabaseConfiguration__Port=1433
      - DatabaseConfiguration__InitialCatalog=ModelBuilder
      - DatabaseConfiguration__DbUser=sa
      - DatabaseConfiguration__Password=P4ssw0rd1
      - DatabaseConfiguration__Timeout=150
      - DatabaseConfiguration__ConnectRetryCount=15
      - DatabaseConfiguration__ConnectRetryInterval=10
      - AzureActiveDirectoryConfiguration__TenantId=3aa4a235-b6e2-48d5-9195-7fcf05b459b0
      - AzureActiveDirectoryConfiguration__ClientId=2967244a-662f-4462-82bd-7f9bca0a3683
      - AzureActiveDirectoryConfiguration__Silent=true
      - CorsConfiguration__ValidOrigins=http://localhost:3000
      - ApplicationSetting__TypeLibraryRootUri=http://tyleserver/
      - ApplicationSetting__TypeLibraryVersion=v1
      - ApplicationSetting__TypeLibrarySecret=cedf6a1af9917f6ac2fd8f7a0f4610b418a72c4ac9557cf2256e4ec2226b2060
      - ApplicationSetting__TypeLibraryDomain=runir.net
    networks:
      - type_library_network
    depends_on:
      - mssql

  mssql:
    image: "mcr.microsoft.com/mssql/server:2017-CU8-ubuntu"
    hostname: 'mssql'
    container_name: mssql
    ports:
      - '127.0.0.1:1433:1433'
    volumes:
      - mssql:/var/opt/mssql
    environment:
      - ACCEPT_EULA=Y
      - MSSQL_SA_PASSWORD=P4ssw0rd1
      - MSSQL_PID=Standard
    networks:
      - type_library_network
    restart: unless-stopped

volumes:
  mssql:
    driver: local
  tyle:
    driver: local

networks:
  type_library_network:
    driver: bridge
```

</details>

4. Place this yaml file as shown below:

```
📁 mimirorg (this can be renamed to whatever you want)
├── 📁 component-library
│   └── 📁 etc
├── 📁 mimir
│   └── 📁 etc
├── 📁 typelibrary
│   └── 📁 etc
└── 🐋 docker-compose.yaml
```

5. Then run the docker-compose file from the command line. Use docker-compose up -d from the folder where the file is
   located.
6. Once everything is up and running, you should be able to access the different pages
   at: http://localhost:3000, http://localhost:3001, http://localhost:5000, http://localhost:5001.

<details>
<summary>See more details</summary>

```bash
CONTAINER ID   IMAGE                                            COMMAND                   CREATED         STATUS         PORTS                           NAMES
b89d794be253   mimirorg_mimir-server                            "dotnet ModelBuilder…"    9 seconds ago   Up 7 seconds   443/tcp, 0.0.0.0:5000->80/tcp   mimirserver
84e7600fdcf9   mimirorg_tyle-server                             "dotnet TypeLibrary.…"    9 seconds ago   Up 7 seconds   443/tcp, 0.0.0.0:5001->80/tcp   tyleserver
ed558855c314   mimirorg_mimir-client                            "/bin/sh -c '\"./star…"   9 seconds ago   Up 7 seconds   0.0.0.0:3000->80/tcp            mimirclient
42d843407f0d   mimirorg_tyle-client                             "/bin/sh -c '\"./star…"   9 seconds ago   Up 7 seconds   0.0.0.0:3001->80/tcp            tyleclient
d914b6d4d538   mcr.microsoft.com/mssql/server:2017-CU8-ubuntu   "/opt/mssql/bin/sqls…"    9 seconds ago   Up 7 seconds   127.0.0.1:1433->1433/tcp        mssql
```

</details>

7. To run these locally, you will need to stop the container you want to run locally in, for example, Visual Studio.

### Manual Installation (not recommended)

<details>
<summary>
Manual installation details
</summary>

:::caution
This is just the general idea of how to do this and is not tested by the developer team, we strongly suggest you stick
to using our `docker-compose.yml` files below!
:::

1. Start an MSSQL database running on port 1433 locally on your machine using Docker (or equivalent).
2. Clone all the repositories under mimir-org (typelibrary, mimir, and component-library) and run them following the
   instructions in the ReadMe files of the different repositories. It might be wise to run the different projects in
   this order, at least the first time:
    - Tyle backend
    - Tyle frontend
    - Mimir backend
    - Mimir frontend
3. After installation, you must add the following env file:
    - `/mimir/src/service/ModelBuilder.Api/appsettings.local.json`

<details>
<summary>appsettings.local.json</summary>

```json
{
  "ApplicationSetting": {
    "TypeLibraryRootUri": "http://localhost:5001/",
    "TypeLibraryVersion": "v1",
    "TypeLibrarySecret": "cedf6a1af9917f6ac2fd8f7a0f4610b418a72c4ac9557cf2256e4ec2226b2060",
    "TypeLibraryDomain": "runir.net"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Error",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Warning",
      "Microsoft.EntityFrameworkCore.Database.Command": "Warning",
      "Mb.Services": "Information",
      "EventHubModule": "Error"
    },
    "Console": {
      "IncludeScopes": true,
      "LogLevel": {
        "Default": "Error",
        "Microsoft": "Warning",
        "Microsoft.Hosting.Lifetime": "Warning",
        "Microsoft.EntityFrameworkCore.Database.Command": "Warning",
        "Mb.Services": "Information",
        "EventHubModule": "Error"
      }
    }
  },
  "AllowedHosts": "*",
  "AzureActiveDirectoryConfiguration": {
    "Instance": "https://login.microsoftonline.com/",
    "TenantId": "3aa4a235-b6e2-48d5-9195-7fcf05b459b0",
    "ClientId": "2967244a-662f-4462-82bd-7f9bca0a3683",
    "ClientSecret": null,
    "CallbackPath": "/signin-oidc",
    "SignedOutCallbackPath": "/signout-oidc",
    "Silent": true
  },
  "CorsConfiguration": {
    "ValidOrigins": "http://localhost:3000"
  },
  "DatabaseConfiguration": {
    "DataSource": "127.0.0.1",
    "Port": 1433,
    "InitialCatalog": "ModelBuilder",
    "DbUser": "sa",
    "Password": "P4ssw0rd1",
    "Timeout": 150,
    "ConnectRetryCount": 15,
    "ConnectRetryInterval": 10
  }
}
```

</details>

4. There are other .env files in the frontend code, but for the most part, you don't have to worry about this. The most
   interesting thing here is probably silent mode in Mimir. This needs to be set to `true` when you are developing locally, as this
   mode ignores some authentication. The solution will most likely crash without it, leading to a white screen on the
   frontend.

</details>

## Mimir frontend and Yalc

https://github.com/wclr/yalc

Yalc is a way to connect npm package development with the dev environment. It allows us to develop components in the
component-library and dynamically update them locally so that you don't have to release a new package on npm for every
code change.

Install yalc with:

```bash
npm i yalc -g
```

- Navigate to the `component-library/app` folder
- Run the command yalc publish
- Navigate to `/mimirorg/mimir/src/client`
- Run the command yalc add `@mimirorg/component-library`
- Now you can run mimir as usual by first installing the packages with npm i and then running it locally with npm run
  start or npm run.

## Docker-compose files

Sometimes it's useful to run tyle or mimir separately to avoid having multiple Visual Studio instances running
simultaneously. These files can be useful to have.

### Compose file for the whole solution

<details>
<summary>docker-compose.yaml</summary>

```yaml
version: "3.8"

services:

  tyle-client:
    build: ./typelibrary/src/client
    hostname: 'tyleclient'
    container_name: tyleclient
    ports:
      - "3001:80"
    environment:
      - TYPELIBRARY_ENV_API_BASE_URL=http://localhost:5001/v1.0/
    networks:
      - type_library_network

  mimir-client:
    build:
      context: ./mimir/src/client
      args:
        - MIMIR_VERSION=4.0.0
    hostname: 'mimirclient'
    container_name: mimirclient
    ports:
      - "3000:80"
    environment:
      - MIMIR_ENV_API_BASE_URL=http://localhost:5000/v1.0/
      - MIMIR_ENV_SOCKET_BASE_URL=http://localhost:5000/
      - MIMIR_ENV_SILENT=true
      - MIMIR_ENV_APP_ID=2967244a-662f-4462-82bd-7f9bca0a3683
      - MIMIR_ENV_CLIENT_ID=0c174c7e-e018-41a2-ba84-3d4b4544a16f
      - MIMIR_ENV_TENANT_ID=3aa4a235-b6e2-48d5-9195-7fcf05b459b0
    networks:
      - type_library_network

  tyle-server:
    build: ./typelibrary/src/server
    hostname: 'tyleserver'
    container_name: tyleserver
    ports:
      - "5001:80"
    volumes:
      - tyle:/app/Data
    environment:
      - ASPNETCORE_ENVIRONMENT=Development
      - DatabaseConfiguration__DataSource=mssql
      - DatabaseConfiguration__Port=1433
      - DatabaseConfiguration__InitialCatalog=TypeLibrary
      - DatabaseConfiguration__DbUser=sa
      - DatabaseConfiguration__Password=P4ssw0rd1
      - MimirorgAuthSettings__ApplicationName=Tyle
      - MimirorgAuthSettings__ApplicationUrl=http://localhost:5001
      - MimirorgAuthSettings__RequireConfirmedAccount=true
      - MimirorgAuthSettings__Email=noreply@runir.net
      - MimirorgAuthSettings__DatabaseConfiguration__DataSource=mssql
      - MimirorgAuthSettings__DatabaseConfiguration__Port=1433
      - MimirorgAuthSettings__DatabaseConfiguration__InitialCatalog=MimirorgAuthentication
      - MimirorgAuthSettings__DatabaseConfiguration__DbUser=sa
      - MimirorgAuthSettings__DatabaseConfiguration__Password=P4ssw0rd1
      - ApplicationSettings__ApplicationSemanticUrl=http://localhost:5001/v1/ont
      - ApplicationSettings__ApplicationUrl=http://localhost:5001
      - CorsConfiguration__ValidOrigins=http://localhost:3001
    networks:
      - type_library_network
    depends_on:
      - mssql

  mimir-server:
    build: ./mimir/src/service
    hostname: 'mimirserver'
    container_name: mimirserver
    ports:
      - "5000:80"
    environment:
      - ASPNETCORE_ENVIRONMENT=Development
      - DatabaseConfiguration__DataSource=mssql
      - DatabaseConfiguration__Port=1433
      - DatabaseConfiguration__InitialCatalog=ModelBuilder
      - DatabaseConfiguration__DbUser=sa
      - DatabaseConfiguration__Password=P4ssw0rd1
      - DatabaseConfiguration__Timeout=150
      - DatabaseConfiguration__ConnectRetryCount=15
      - DatabaseConfiguration__ConnectRetryInterval=10
      - AzureActiveDirectoryConfiguration__TenantId=3aa4a235-b6e2-48d5-9195-7fcf05b459b0
      - AzureActiveDirectoryConfiguration__ClientId=2967244a-662f-4462-82bd-7f9bca0a3683
      - AzureActiveDirectoryConfiguration__Silent=true
      - CorsConfiguration__ValidOrigins=http://localhost:3000
      - ApplicationSetting__TypeLibraryRootUri=http://tyleserver/
      - ApplicationSetting__TypeLibraryVersion=v1
      - ApplicationSetting__TypeLibrarySecret=cedf6a1af9917f6ac2fd8f7a0f4610b418a72c4ac9557cf2256e4ec2226b2060
      - ApplicationSetting__TypeLibraryDomain=runir.net
    networks:
      - type_library_network
    depends_on:
      - mssql

  mssql:
    image: "mcr.microsoft.com/mssql/server:2017-CU8-ubuntu"
    hostname: 'mssql'
    container_name: mssql
    ports:
      - '127.0.0.1:1433:1433'
    volumes:
      - mssql:/var/opt/mssql
    environment:
      - ACCEPT_EULA=Y
      - MSSQL_SA_PASSWORD=P4ssw0rd1
      - MSSQL_PID=Standard
    networks:
      - type_library_network
    restart: unless-stopped

volumes:
  mssql:
    driver: local
  tyle:
    driver: local

networks:
  type_library_network:
    driver: bridge

```

</details>

### Compose file for tyle

<details>
<summary>docker-compose.yaml</summary>

```yaml
version: "3.8"

services:

  tyle-client:
    build: ./typelibrary/src/client
    hostname: 'tyleclient'
    container_name: tyleclient
    ports:
      - "3001:80"
    environment:
      - TYPELIBRARY_ENV_API_BASE_URL=http://localhost:5001/v1.0/
    networks:
      - type_library_network

  tyle-server:
    build: ./typelibrary/src/server
    hostname: 'tyleserver'
    container_name: tyleserver
    ports:
      - "5001:80"
    volumes:
      - tyle:/app/Data
    environment:
      - ASPNETCORE_ENVIRONMENT=Development
      - DatabaseConfiguration__DataSource=mssql
      - DatabaseConfiguration__Port=1433
      - DatabaseConfiguration__InitialCatalog=TypeLibrary
      - DatabaseConfiguration__DbUser=sa
      - DatabaseConfiguration__Password=P4ssw0rd1
      - MimirorgAuthSettings__ApplicationName=Tyle
      - MimirorgAuthSettings__ApplicationUrl=http://localhost:5001
      - MimirorgAuthSettings__RequireConfirmedAccount=true
      - MimirorgAuthSettings__Email=noreply@runir.net
      - MimirorgAuthSettings__DatabaseConfiguration__DataSource=mssql
      - MimirorgAuthSettings__DatabaseConfiguration__Port=1433
      - MimirorgAuthSettings__DatabaseConfiguration__InitialCatalog=MimirorgAuthentication
      - MimirorgAuthSettings__DatabaseConfiguration__DbUser=sa
      - MimirorgAuthSettings__DatabaseConfiguration__Password=P4ssw0rd1
      - ApplicationSettings__ApplicationSemanticUrl=http://localhost:5001/v1/ont
      - ApplicationSettings__ApplicationUrl=http://localhost:5001
      - CorsConfiguration__ValidOrigins=http://localhost:3001
    networks:
      - type_library_network
    depends_on:
      - mssql

  mssql:
    image: "mcr.microsoft.com/mssql/server:2017-CU8-ubuntu"
    hostname: 'mssql'
    container_name: mssql
    ports:
      - '127.0.0.1:1433:1433'
    volumes:
      - mssql:/var/opt/mssql
    environment:
      - ACCEPT_EULA=Y
      - MSSQL_SA_PASSWORD=P4ssw0rd1
      - MSSQL_PID=Standard
    networks:
      - type_library_network
    restart: unless-stopped

volumes:
  mssql:
    driver: local
  tyle:
    driver: local

networks:
  type_library_network:
    driver: bridge
```

</details>

### Compose file for mimir

<details>
<summary>docker-compose.yaml</summary>

```yaml
version: "3.8"

services:

  mimir-client:
    build:
      context: ./mimir/src/client
      args:
        - MIMIR_VERSION=4.0.0
    hostname: 'mimirclient'
    container_name: mimirclient
    ports:
      - "3000:80"
    environment:
      - MIMIR_ENV_API_BASE_URL=http://localhost:5000/v1.0/
      - MIMIR_ENV_SOCKET_BASE_URL=http://localhost:5000/
      - MIMIR_ENV_SILENT=true
      - MIMIR_ENV_APP_ID=2967244a-662f-4462-82bd-7f9bca0a3683
      - MIMIR_ENV_CLIENT_ID=0c174c7e-e018-41a2-ba84-3d4b4544a16f
      - MIMIR_ENV_TENANT_ID=3aa4a235-b6e2-48d5-9195-7fcf05b459b0
    networks:
      - type_library_network

  mimir-server:
    build: ./mimir/src/service
    hostname: 'mimirserver'
    container_name: mimirserver
    ports:
      - "5000:80"
    environment:
      - ASPNETCORE_ENVIRONMENT=Development
      - DatabaseConfiguration__DataSource=mssql
      - DatabaseConfiguration__Port=1433
      - DatabaseConfiguration__InitialCatalog=ModelBuilder
      - DatabaseConfiguration__DbUser=sa
      - DatabaseConfiguration__Password=P4ssw0rd1
      - DatabaseConfiguration__Timeout=150
      - DatabaseConfiguration__ConnectRetryCount=15
      - DatabaseConfiguration__ConnectRetryInterval=10
      - AzureActiveDirectoryConfiguration__TenantId=3aa4a235-b6e2-48d5-9195-7fcf05b459b0
      - AzureActiveDirectoryConfiguration__ClientId=2967244a-662f-4462-82bd-7f9bca0a3683
      - AzureActiveDirectoryConfiguration__Silent=true
      - CorsConfiguration__ValidOrigins=http://localhost:3000
      - ApplicationSetting__TypeLibraryRootUri=http://tyleserver/
      - ApplicationSetting__TypeLibraryVersion=v1
      - ApplicationSetting__TypeLibrarySecret=cedf6a1af9917f6ac2fd8f7a0f4610b418a72c4ac9557cf2256e4ec2226b2060
      - ApplicationSetting__TypeLibraryDomain=runir.net
    networks:
      - type_library_network
    depends_on:
      - mssql

  mssql:
    image: "mcr.microsoft.com/mssql/server:2017-CU8-ubuntu"
    hostname: 'mssql'
    container_name: mssql
    ports:
      - '127.0.0.1:1433:1433'
    volumes:
      - mssql:/var/opt/mssql
    environment:
      - ACCEPT_EULA=Y
      - MSSQL_SA_PASSWORD=P4ssw0rd1
      - MSSQL_PID=Standard
    networks:
      - type_library_network
    restart: unless-stopped

volumes:
  mssql:
    driver: local

networks:
  type_library_network:
    driver: bridge
```

</details>

### Compose file for the database

<details>
<summary>
docker-compose.yaml
</summary>

```yml
version: "3.8"

services:
  mssql:
    image: "mcr.microsoft.com/mssql/server:2017-CU8-ubuntu"
    hostname: 'mssql'
    container_name: mssql
    ports:
      - '127.0.0.1:1433:1433'
    volumes:
      - mssql:/var/opt/mssql
    environment:
      - ACCEPT_EULA=Y
      - MSSQL_SA_PASSWORD=P4ssw0rd1
      - MSSQL_PID=Standard
    networks:
      - type_library_network
    restart: unless-stopped

volumes:
  mssql:
    driver: local

networks:
  type_library_network:
    driver: bridge

```

</details>

## After installation

### Create a user

The first thing you need to do after installation is to start the tyle backend, the database, and the frontend. Then
register a new user through the frontend. After registration, you will be told to wait for an email, which will never
come, because it is located here:

```
/mimirorg/typelibrary/src/server/TypeLibrary.Api/bin/Debug/net7.0/Data/Mail
```

:::tip
It may be useful to sort by last modified so that the last email you received is at the top.
:::

Then log in. Since there have been some changes in the tyle backend recently, there are some steps you need to go
through before you get a fully functional user. These depend on where we are in the process, so the documentation is
currently lacking. Hopefully, it works without any problems. The problem you may encounter is that there is no existing
company in your backend code, so you will need to connect to the database of the solution and add this information, as
it is no longer done automatically.

Feel free to write down the steps you need to go through to solve this problem when/if it occurs.

## FAQ

<details>
<summary>I have a white screen, what do I do?</summary>

This is most often (read always) a result of incorrect environment variables somewhere. Checklist:

- Is the frontend set to `REACT_APP_SILENT = true`?
- Does your user have a company in the database, and is the secret for this company set in Mimir's `appsettings.json`,
  e.g., `"TypelibrarySecret": "secretHash"`?
- Does the domain in Mimir match the domain set in the company table (MimirorgAuthentication database).

</details>

<details>
<summary>I can't register, what's happening?</summary>
If you're not receiving the email, it's because it doesn't get sent when you're running in development mode; the same applies to the account recovery code. The email you should have received can be found in:

`/mimirorg/typelibrary/src/server/TypeLibrary.Api/bin/Debug/net7.0/Data/Mail/`

</details>

# I need to clean up my database, how can I do this?

<details>
<summary>
TypeLibrary kill script
</summary>

```sql
----------------------------------------------------------------------
--Script som kobler fra alt og alle som er tilkoblet
--Deretter slettes databasen
USE [master];
DECLARE @kill varchar(8000) = '';
SELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'
FROM sys.dm_exec_sessions
WHERE database_id = db_id('TypeLibrary')
EXEC(@kill);
DROP DATABASE TypeLibrary
CREATE Database TypeLibrary
---------------------------------------------------------------------
----------------------------------------------------------------------
```

</details>

<details>
<summary>
MimirorgAuthentication kill script
</summary>

```sql
---------------------------------------------------------------------
----------------------------------------------------------------------
--Script som kobler fra alt og alle som er tilkoblet
--Deretter slettes databasen
USE [master];
DECLARE @kill varchar(8000) = '';
SELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'
FROM sys.dm_exec_sessions
WHERE database_id = db_id('MimirorgAuthentication')
EXEC(@kill);
DROP DATABASE MimirorgAuthentication
CREATE Database MimirorgAuthentication
---------------------------------------------------------------------
----------------------------------------------------------------------
```

</details>


<details>
<summary>
ModelBuilder kill script
</summary>

```sql
---------------------------------------------------------------------
----------------------------------------------------------------------
--Script som kobler fra alt og alle som er tilkoblet
--Deretter slettes databasen
USE [master];
DECLARE @kill varchar(8000) = '';
SELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'
FROM sys.dm_exec_sessions
WHERE database_id = db_id('ModelBuilder')
EXEC(@kill);
DROP DATABASE ModelBuilder
CREATE Database ModelBuilder
INSERT INTO [ModelBuilder].[dbo].[CollaborationPartner] VALUES ('Aibel', 'aibel.com', 0, 'rdf.aibel.com');
---------------------------------------------------------------------
--USE master
--GO
--xp_readerrorlog 0, 1, N'Server is listening on' 
--GO
```

</details>

<details>
<summary>
Nuclear option (kill all)
</summary>

```sql
----------------------------------------------------------------------
--Script som kobler fra alt og alle som er tilkoblet
--Deretter slettes databasen
USE [master];
DECLARE @kill varchar(8000) = '';
SELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'
FROM sys.dm_exec_sessions
WHERE database_id = db_id('TypeLibrary')
EXEC(@kill);
DROP DATABASE TypeLibrary
CREATE Database TypeLibrary
---------------------------------------------------------------------
----------------------------------------------------------------------
--Script som kobler fra alt og alle som er tilkoblet
--Deretter slettes databasen
USE [master];
DECLARE @kill varchar(8000) = '';
SELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'
FROM sys.dm_exec_sessions
WHERE database_id = db_id('MimirorgAuthentication')
EXEC(@kill);
DROP DATABASE MimirorgAuthentication
CREATE Database MimirorgAuthentication
---------------------------------------------------------------------
----------------------------------------------------------------------
--Script som kobler fra alt og alle som er tilkoblet
--Deretter slettes databasen
USE [master];
DECLARE @kill varchar(8000) = '';
SELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'
FROM sys.dm_exec_sessions
WHERE database_id = db_id('ModelBuilder')
EXEC(@kill);
DROP DATABASE ModelBuilder
CREATE Database ModelBuilder
---------------------------------------------------------------------
--USE master
--GO
--xp_readerrorlog 0, 1, N'Server is listening on' 
--GO
```

</details>

If there are other issues, they most often arise from:

- Incorrect environment variables.
- Forgetting to run Tyle's backend.
