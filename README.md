- [Manuell installasjon](#manuell-installasjon)
- [Automatisk installasjon](#automatisk-installasjon)
- [Compose fil for tyle](#compose-fil-for-tyle)
- [Compose fil for mimir](#compose-fil-for-mimir)
- [Lag en bruker](#lag-en-bruker)
- [Jeg har hvit skjerm, hva gjør jeg?](#jeg-har-hvit-skjerm-hva-gj%C3%B8r-jeg)
- [Jeg får ikke registrert meg, hva skjer?](#jeg-f%C3%A5r-ikke-registrert-meg-hva-skjer)

Tyle og mimir har et veldig stort og innviklet domene, det er ikke alltid så lett å forstå seg på så det er ingen skam å spørre etter hjelp. Dette er en minimalistisk nesten "installasjonsguide" til koden, den vil ikke gå så veldig i dybden da dette er noe man må ta ansikt til ansikt, men er ment som en slags, "Slig kjører du koden forhåpentligvis".

# Vokabular
- CLI - Command Line Interface
- repo - Github Repository (der koden ligger)
- env - Environment variable

# Verktøy
Teamet bruker de verktøyene de er mest komfortable med men her er eksempel på verktøy:
Frontend kode:
- VSCode
- WebStorm
Backend kode:
- Visual Studio + Resharper
- Rider (Resharper er innebygd)
Andre verktøy:
- Git
- Docker
- Datagrip (databasehåndtering)
- SQL Server Management studio

Av disse så **Må** du installere docker eller tilsvarende for å kunne kjøre mssql databasen.

Videre så må du logge deg inn i Equinor systemet for å anskaffe deg en docker lisens, dette kan du gjøre på https://connectit.equinor.com/, så går du inn i en nettleser gjennom connectit og går til https://accessit.equinor.com. Du må også be om access til outlook og din egen epost for å få til dette + utviklerkurset som du må ta en gang i året.

# Hvor finner jeg koden?
Koden til mimir kan man finne her https://github.com/mimir-org under mimir repoet. Prosjektet kan klones til din maskin med `git@github.com:mimir-org/mimir.git` via ssh eller `gh repo clone mimir-org/mimir` med [github CLI](https://cli.github.com/). 

# Hvordan installerer jeg koden på min maskin?
For at mimir skal fungere, så er du nødt til å ha all koden på din maskin, dette kan gjøres på flere forskjellige måter.

## Manuell installasjon
1. Start en mssql database som kjører på port 1433 lokalt på din maskin ved hjelp av Docker (eller tilsvarende).
2. Klon alle repoene under mimir-org (typelibrary, mimir og component-library) og kjør de ved hjelp av instruksene i ReadMe filene i de forskjellige repoene. Her kan det vere lurt å kjøre de forskjellige prosjektene i denne rekkefølgen, i alle fall første gang.
	1. Tyle backend
	2. Tyle frontend
	3. Mimir backend
	4. Mimir frontend
3. Etter installasjon må du legge til den følgende env filen:
	1. `./mimir/src/service/ModelBuilder.Api/appsettings.local.json`
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
4. Der er andre .env filer i frontendkoden, men for det meste slipper du å bry deg om dette. Det mest interessante her er nok **silent** mode. Denne bør nok være *true* når du driver med utvikling lokalt, da denne modusen ignorerer en del autentisering. Løsningen vil nok mest sannsynlig kræsje uten, noe som fører til hvit skjerm på frontendsiden.

## Automatisk installasjon
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
   `docker-compose up -d` fra mappen der filen ligger.
6. Når alt er oppe å kjører så skal du få opp de forskjellige sidene på:
   http://localhost:3000
   http://localhost:3001
   http://localhost:5000
   http://localhost:5001
7. For å kjøre desse lokalt så er du nødt til å stoppe containeren som du har lyst til å kjøre lokalt i eksempelvis Visual Studio.

## Mimir frontend og Yalc
https://github.com/wclr/yalc

Yalc er en måte å koble npm pakkeutvikling sammen med dev miljø. Det gjør det mulig for oss å utvikle komponenter i component-library og dynamisk oppdatere disse lokalt slik at man slipper å lansere en ny pakke på npm for hver endring av kode.

installer yalc med
`npm i yalc -g`

Deretter er du klar til å bruke det.
-  Naviger til `component-library/app mappen`
-  Kjør kommandoen `yalc publish`
- Naviger til `/mimirorg/mimir/src/client`
- Kjør kommandoen `yalc add @mimirorg/component-library`
- Nå kan du kjøre mimir som normalt ved å først installere pakkene `npm i` for så å kjøre det lokalt med `npm run start` eller `npm run`. 


# Docker compose filer
Av og til er det nyttig å kjøre tyle eller mimir separat for å slippe å ha flere Visual Studio instanser kjørende samtidig. Da kan disse filene vere nyttige å ha.

## Compose fil for hele løsningen
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

## Compose fil for tyle
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

## Compose fil for mimir
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


# Etter installasjon
## Lag en bruker
Det første du må gjøre etter installasjon er å starte tyle backend, databasen og frontend. Deretter registrerer du en ny bruker gjennom frontenden. Etter registrering får du beskjed om å vente på en epost, denne kommer aldri, for den ligger her: `/mimirorg/typelibrary/src/server/TypeLibrary.Api/bin/Debug/net7.0/Data/Mail`. Her kan det vere lurt å sortere etter sist endret slik at den siste eposten du mottok kommer på toppen.

Deretter logger du inn. Siden der har skjedd noen endringer i tyle backenden i det siste så er der noen steg du må gå gjennom før du får en fullverdig bruker, disse er avhengig av hvor vi er i prosessen, så her er det foreløpig dårlig med dokumentasjon, forhåpentligvis så funker det uten noen problem. Problemet du kanskje støter på er at det ikke eksisterer noe selskap i backend koden din fra før, så her må man koble seg på databasen til løsningen og legge til denne informasjonen, da det ikke blir gjort automatisk lenger.

Skriv gjerne inn stegene du må gjennom for å løse dette problemet når/hvis det skjer.
# FAQ

## Jeg har hvit skjerm, hva gjør jeg?
Dette er som oftest (les alltid), et resultat av feil env variabler ett eller annet sted. Sjekkliste:
- Er frontend satt til `REACT_APP_SILENT = true`
- Har brukeren din et company i databasen, er secret'en til dette company'et satt til secret i mimir sin `appsettings.json` eks: `"TypelibrarySecret": "secretHash"`.

## Jeg får ikke registrert meg, hva skjer?
Om du ikke får eposten så er det fordi den ikke kommer når du kjører i dev, det samme gjelder account recovery koden.
Eposten som du skulle ha fått ligger i:
- `/mimirorg/typelibrary/src/server/TypeLibrary.Api/bin/Debug/net7.0/Data/Mail/`

Om det er andre problemer så kommer det som oftest av:
- env variabler som ikke stemmer.
- Man glemmer å kjøre backenden til tyle.
