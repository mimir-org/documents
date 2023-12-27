---
sidebar_position: 1
title: Introduction
---

![tyle logo](img/tyleLogo.svg)

# Introduction

Tyle is currently not in active development. This documentation is primarily meant as a guide for potential new
developers to start active development again, and to inform about the current state of the code base, as well as future
plans for development that the previous team had.

## Installing and running Tyle

The source code is available at [Github](https://github.com/mimir-org/tyle). The project has a C# backend and a React
frontend. It also needs a SQL server to run, for instance [MSSQL](https://www.microsoft.com/en-us/sql-server/).

Note that Tyles current state do calls to external API (commonlib) on startup and periodically. This should be dissabled in a development enviroment to prevent redundant fetching unessential data and in possibly cast exceptions if not succeeded.

### Environment Variables

<details>
<summary>Client</summary>

To set environment variables for client in development, edit the .env file. For production build, you have to set the
environment variables into the container itself. You can override the .env with a .env.local file. This file is not
included in git repo. \* is required.

\* `VITE_API_BASE_URL` - Url to backend server

\* `VITE_TYLE_VERSION` - The version number of Tyle

</details>

<details>
<summary>Server</summary>

To set environment variables for server in development, edit the appsettings.json file. For production build, you have
to set the environment variables into the application container itself. You can override the appsettings.json with a
appsettings.Development.json file. This file is not included in git repo. \* is required.

#### General

\* `ASPNETCORE_ENVIRONMENT` - Set .NET core environment

\* `CorsConfiguration__ValidOrigins` - Comma separated string of valid origins for CORS. E.g. http://localhost:3000,https://mimirorg.com

#### Authentication settings

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

`MimirorgAuthSettings__EmailSecret` - The sendgrid email secret. Required if MimirorgAuthSettings\_\_RequireConfirmedAccount.

`MimirorgAuthSettings__QrWidth` - The width of the Qr Code. Default 300.

`MimirorgAuthSettings__QrHeight` - The height of the Qr Code. Default 300.

\* `MimirorgAuthSettings__DatabaseConfiguration__DataSource` - Identifier for auth database server.

\* `MimirorgAuthSettings__DatabaseConfiguration__Port` - Port of auth database server. E.g. 1443.

\* `MimirorgAuthSettings__DatabaseConfiguration__InitialCatalog` - Auth database name.

\* `MimirorgAuthSettings__DatabaseConfiguration__DbUser` - Server application auth database username, must be db owner on given catalog.

\* `MimirorgAuthSettings__DatabaseConfiguration__Password` - Server application auth database password.

#### Database settings

\* `DatabaseConfiguration__DataSource` - Identifier for database server

\* `DatabaseConfiguration__Port` - Port of database server. E.g. 1443

\* `DatabaseConfiguration__InitialCatalog` - Database name

\* `DatabaseConfiguration__DbUser` - Server application database username, must be db owner on given catalog

\* `DatabaseConfiguration__Password` - Server application database password

#### Reference Data Library settings

The following settings must be provided for the Azure App instance running the Tyle server for properly authenticating
with the downstream API used to fetch reference data. The current API used for this in Tyle is Common Library. See
[Configure a web API that calls web APIs](https://learn.microsoft.com/en-us/entra/identity-platform/scenario-web-api-call-api-app-configuration?tabs=aspnetcore)
for more information.

\* `AzureAd__Instance`

\* `AzureAd__ClientId`

\* `AzureAd__ClientSecret` - Should be stored in a key vault

\* `AzureAd__Domain`

\* `AzureAd__TenantId`

\* `CommonLibApi__BaseUrl` - The base url for the external API

\* `CommonLibApi__Scopes`

</details>

## Deploying Tyle

The current deployment method for Tyle is building Docker images of the backend and frontend and running these with app
services in Azure. There are Github actions in the repository for building these Docker images. The triggers for these
actions are either pushing to the stage branch or creating a new release.

## License

MIT License

Copyright (c) 2022 mimir-org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
