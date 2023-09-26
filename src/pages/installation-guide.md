---
title: Installation guide
---

## Installation guide

Tyle and Mimir have a very large and complex domain, which is not always easy to understand. Therefore, there's no shame
in asking for help. This is a minimalist, almost "installation guide" for the code. It won't go into great depth, as
that's something best discussed face-to-face, but it's intended as a sort of "Here's how you hopefully run the code."

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

Of these, you **must** install Docker or equivalent to run the MSSQL database.

Furthermore, you need to log into the Equinor system to acquire a Docker license. This can be done
at https://connectit.equinor.com/. Then, go to https://accessit.equinor.com through a browser via ConnectIT. You must
also request access to Outlook and your own email to achieve this, plus the developer course that you must take once a
year.

## Where Can I Find the Code?

The code for Mimir can be found here https://github.com/mimir-org under the Mimir repository. The project can be cloned
to your machine with `git@github.com:mimir-org/mimir.git` via SSH or `gh repo clone mimir-org/mimir`
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

For Mimir to function, you need to have all the code on your machine. This can be done in several different ways.

### Manual Installation

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

4. Der er andre .env filer i frontendkoden, men for det meste slipper du å bry deg om dette. Det mest interessante her
   er nok **silent** mode. Denne bør nok være *true* når du driver med utvikling lokalt, da denne modusen ignorerer en
   del autentisering. Løsningen vil nok mest sannsynlig kræsje uten, noe som fører til hvit skjerm på frontendsiden.

### Automatisk installasjon

Spinn opp all koden med en docker-compose fil.

1. Installer [docker](https://www.docker.com/)
2. Finn et sted å laste ned koden til slik at du får denne mappestrukturen:
    - 📁 mimirorg (denne kan renames til det du vil)
        - 📁 component-library
            - 📁 etc
        - 📁 mimir
            - 📁 etc
        - 📁 typelibrary
            - 📁 etc
3. Lag en ny .yaml fil og lim inn følgende kode.

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

4. Plasser denne yaml filen som vist under:
    - 📁 mimirorg (denne kan renames til det du vil)
        - 🐋 docker-compose.yaml
        - 📁 component-library
            - 📁 etc
        - 📁 mimir
            - 📁 etc
        - 📁 typelibrary
            - 📁 etc
6. Deretter kjører du docker compose filen fra kommandolinjen.
   `docker compose up -d` fra mappen der filen ligger.
6. Når alt er oppe å kjører så skal du få opp de forskjellige sidene på:
   http://localhost:3000
   http://localhost:3001
   http://localhost:5000
   http://localhost:5001
7. For å kjøre desse lokalt så er du nødt til å stoppe containeren som du har lyst til å kjøre lokalt i eksempelvis
   Visual Studio.

## Mimir frontend og Yalc

https://github.com/wclr/yalc

Yalc er en måte å koble npm pakkeutvikling sammen med dev miljø. Det gjør det mulig for oss å utvikle komponenter i
component-library og dynamisk oppdatere disse lokalt slik at man slipper å lansere en ny pakke på npm for hver endring
av kode.

installer yalc med
`npm i yalc -g`

Deretter er du klar til å bruke det.

- Naviger til `component-library/app mappen`
- Kjør kommandoen `yalc publish`
- Naviger til `/mimirorg/mimir/src/client`
- Kjør kommandoen `yalc add @mimirorg/component-library`
- Nå kan du kjøre mimir som normalt ved å først installere pakkene `npm i` for så å kjøre det lokalt med `npm run start`
  eller `npm run`.

## Docker compose filer

Av og til er det nyttig å kjøre tyle eller mimir separat for å slippe å ha flere Visual Studio instanser kjørende
samtidig. Da kan disse filene vere nyttige å ha.

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

## Etter installasjon

### Lag en bruker

Det første du må gjøre etter installasjon er å starte tyle backend, databasen og frontend. Deretter registrerer du en ny
bruker gjennom frontenden. Etter registrering får du beskjed om å vente på en epost, denne kommer aldri, for den ligger
her: `/mimirorg/typelibrary/src/server/TypeLibrary.Api/bin/Debug/net7.0/Data/Mail`. Her kan det vere lurt å sortere
etter sist endret slik at den siste eposten du mottok kommer på toppen.

Deretter logger du inn. Siden der har skjedd noen endringer i tyle backenden i det siste så er der noen steg du må gå
gjennom før du får en fullverdig bruker, disse er avhengig av hvor vi er i prosessen, så her er det foreløpig dårlig med
dokumentasjon, forhåpentligvis så funker det uten noen problem. Problemet du kanskje støter på er at det ikke eksisterer
noe selskap i backend koden din fra før, så her må man koble seg på databasen til løsningen og legge til denne
informasjonen, da det ikke blir gjort automatisk lenger.

Skriv gjerne inn stegene du må gjennom for å løse dette problemet når/hvis det skjer.

## FAQ

<details>
<summary>I have a white screen, what do I do?</summary>

This is most often (read always) a result of incorrect environment variables somewhere. Checklist:

- Is the frontend set to `REACT_APP_SILENT = true`?
- Does your user have a company in the database, and is the secret for this company set in Mimir's `appsettings.json`,
  e.g., `"TypelibrarySecret": "secretHash"`?

</details>

<details><summary>I can't register, what's happening?</summary>
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
