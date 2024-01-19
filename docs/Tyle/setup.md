---
title: Setup
sidebar_position: 2
---

## Where Can I Find the Code?

The source code for Tyle can be found on Github: https://github.com/mimir-org/tyle

## Setup

### Database

Tyle needs a SQL database to work. For setting this up in your dev environment you can follow these steps.

1. Download and install [Docker](https://www.docker.com/).
2. Create a new .yaml file and paste the following code.

<details>
<summary>docker-compose.yaml</summary>

```yaml
version: "3.8"

services:
  mssql:
    image: "mcr.microsoft.com/mssql/server:2017-CU8-ubuntu"
    hostname: "mssql"
    container_name: mssql
    ports:
      - "127.0.0.1:1433:1433"
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

3. Then run the docker-compose file from the command line. Use docker-compose up -d from the folder where the file is
   located.
4. Once it is up and running, you should be able to access the database using our database management
   application of choice:

```
- DataSource=mssql
- Host=localhost
- Port=1433
- User=sa
- Password=P4ssw0rd1
```

:::tip
If you are unfamiliar with using the docker command line tool. An option is to use
the [Docker Desktop application](https://www.docker.com/products/docker-desktop/) to manage docker containers.
:::

### Application

Once the database is set up, you can run the application locally.

#### App settings

Before you can run the Tyle server you need to create a local app settings file. This file needs to be
named **appsettings.Development.json** and placed in the `src/server/Tyle.Api/` folder. Use the existing
appsettings.json file as a template.

<details>
<summary>Environment variables for the server</summary>

To set environment variables for server in development, edit the appsettings.Development.json file. For production build, you have
to set the environment variables into the application container itself. \* denotes a required environment variable.

##### General

\* `ASPNETCORE_ENVIRONMENT` - Set .NET core environment

\* `BaseIri` - The base IRI used when generating IRIs for IMF types. Should not include a trailing slash (/). E.g. http://tyle.imftools.com

\* `CorsConfiguration__ValidOrigins` - Comma separated string of valid origins for CORS.
E.g. http://localhost:3000,https://mimirorg.com

##### Authentication settings

\* `MimirorgAuthSettings___ApplicationName` - The name of the auth application. Used for auth apps title.

\* `MimirorgAuthSettings__JwtKey` - The secret used for generating jwt keys, 64 characters.

\* `MimirorgAuthSettings__JwtIssuer` - The url for Jwt issuer.

\* `MimirorgAuthSettings__JwtAudience` - The url for Jwt audience.

`MimirorgAuthSettings__RequireConfirmedAccount` - Is it required to confirm accout. Default true.

`MimirorgAuthSettings__JwtExpireMinutes` - The length of valid access token in minutes. Default 15.

`MimirorgAuthSettings__JwtRefreshExpireMinutes` - The length of valid refresh token in minutes. Default 1440.

`MimirorgAuthSettings__MaxFailedAccessAttempts` - The number of failed access attempts before locking account. Default 5.

`MimirorgAuthSettings__DefaultLockoutMinutes` - The length of lockout. Default 1440.

`MimirorgAuthSettings__RequireDigit` - Require digits in password. Default true.

`MimirorgAuthSettings__RequireUppercase` - Require uppercase in password. Default true.

`MimirorgAuthSettings__RequireNonAlphanumeric` - Require none alphanumeric in password. Default false.

`MimirorgAuthSettings__RequiredLength` - Require length of password. Default 10.

`MimirorgAuthSettings__EmailKey` - The sendgrid email key. Required if MimirorgAuthSettings\_\_RequireConfirmedAccount.

`MimirorgAuthSettings__EmailSecret` - The sendgrid email secret. Required if
MimirorgAuthSettings\_\_RequireConfirmedAccount.

`MimirorgAuthSettings__QrWidth` - The width of the Qr Code. Default 300.

`MimirorgAuthSettings__QrHeight` - The height of the Qr Code. Default 300.

\* `MimirorgAuthSettings__DatabaseConfiguration__DataSource` - Identifier for auth database server.

\* `MimirorgAuthSettings__DatabaseConfiguration__Port` - Port of auth database server. E.g. 1443.

\* `MimirorgAuthSettings__DatabaseConfiguration__InitialCatalog` - Auth database name.

\* `MimirorgAuthSettings__DatabaseConfiguration__DbUser` - Server application auth database username, must be db owner
on given catalog.

\* `MimirorgAuthSettings__DatabaseConfiguration__Password` - Server application auth database password.

##### Database settings

\* `DatabaseConfiguration__DataSource` - Identifier for database server

\* `DatabaseConfiguration__Port` - Port of database server. E.g. 1443

\* `DatabaseConfiguration__InitialCatalog` - Database name

\* `DatabaseConfiguration__DbUser` - Server application database username, must be db owner on given catalog

\* `DatabaseConfiguration__Password` - Server application database password

##### Reference Data Library settings

The following settings must be provided for the Azure App instance running the Tyle server for properly authenticating
with the downstream API used to fetch reference data. The current API used for this in Tyle is either PCA or Common Library. See
[Configure a web API that calls web APIs](https://learn.microsoft.com/en-us/entra/identity-platform/scenario-web-api-call-api-app-configuration?tabs=aspnetcore)
for more information.

These variables are only needed if `UseCommonLib` is set to true. Otherwise, Tyle will fetch reference data from PCA.

\* `AzureAd__Instance`

\* `AzureAd__ClientId`

\* `AzureAd__ClientSecret` - Should be stored in a key vault

\* `AzureAd__Domain`

\* `AzureAd__TenantId`

\* `CommonLibApi__BaseUrl` - The base url for the Common Library API.

\* `CommonLibApi__Scopes`

`UseCommonLib` - Set to true if Common Library should be used (in an Equinor setting).

</details>

<details>
<summary>Environment variables for the client</summary>

To set environment variables for client in development, edit the .env file. For production build, you have to set the
environment variables into the container itself. You can override the .env with a .env.local file. This file is not
included in git repo. \* is required.

\* `VITE_API_BASE_URL` - Url to backend server

\* `VITE_TYLE_VERSION` - The version number of Tyle

</details>

#### Create a user

The first thing you need to do after installation is to start the tyle backend, the database, and the frontend. Then
register a new user through the frontend. After registration, you will be told to wait for an email, which will never
come, because it is located here:

1. Make sure to have the database, client and server running.
2. Register a new user through the client logon screen.
3. At the end of registration you will need to validate your email. Since this is in a local environment the mail will
   be stored in this path:

```
/mimirorg/typelibrary/src/server/Tyle.Api/bin/Debug/net7.0/Data/Mail
```

4. Copy the code from the txt-file generated in the mail folder. And you should be able to log in.

:::tip
It may be useful to sort by last modified so that the last email you received is at the top.
:::

The first user that is created in the development environment is given administrator rights. In production, the first
user registered must be given administrator access manually in the authentication database by following these steps.

1. Query the AspNetUsers table. Save your ID.
2. Query the AspNetRoles table. Save the Administrator ID.
3. Insert both IDs into the AspNetUserRoles table. You have now granted the administrator role to your user. You will need
   to log out and back in again for this change to take effect.

## Database kill scripts

It is sometimes useful to reset the database to an empty state during development. The following SQL scripts can be
used to do this.

<details>
<summary>
Tyle db kill script
</summary>

```sql
----------------------------------------------------------------------
--Script som kobler fra alt og alle som er tilkoblet
--Deretter slettes databasen
USE [master];
DECLARE @kill varchar(8000) = '';
SELECT @kill = @kill + 'kill ' + CONVERT(varchar(5), session_id) + ';'
FROM sys.dm_exec_sessions
WHERE database_id = db_id('Tyle')
EXEC(@kill);
DROP DATABASE Tyle
CREATE Database Tyle
---------------------------------------------------------------------
----------------------------------------------------------------------
```

</details>

<details>
<summary>
MimirorgAuthentication db kill script
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

## Deploying Tyle

The current deployment method for Tyle is building Docker images of the backend and frontend and running these with app
services in Azure. There are Github actions in the repository for building these Docker images. The triggers for these
actions are either pushing to the stage branch or creating a new release.

The environment variables can be set in the Azure portal, on the App service running the containers.
