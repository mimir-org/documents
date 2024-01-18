---
title: Setup
sidebar_position: 2
---

## Where Can I Find the Code?

The code for Tyle can be found here https://github.com/mimir-org under the mimir-org repository. The project can be
cloned
to your machine with `git@github.com:mimir-org/<repository>.git` via SSH or `gh repo clone mimir-org/<repository>`
with [GitHub CLI](https://cli.github.com/).

```bash
git clone git@github.com:mimir-org/tyle.git
```

## Setup

### Database

1. Download and install [Docker](https://www.docker.com/).
2. Create a new .yaml file and paste the following code.

<details>
<summary>docker-compose.yaml</summary>

```yaml
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

3. Place this yaml file as shown below:

```
📁 mimirorg (this can be renamed to whatever you want)
├── 📁 tyle
│   └── 📁 etc
└── 🐋 docker-compose.yaml
```

4. Then run the docker-compose file from the command line. Use docker-compose up -d from the folder where the file is
   located.
5. Once it is up and running, you should be able to access the database using our database management
   application of choice:

```
- DataSource=mssql
- Host=localhost
- Port=1433
- User=sa
- Password=P4ssw0rd1
```

<details>
<summary>Docker container list</summary>
```bash
CONTAINER ID   IMAGE                                            COMMAND                   CREATED         STATUS         PORTS                           NAMES
d914b6d4d538   mcr.microsoft.com/mssql/server:2017-CU8-ubuntu   "/opt/mssql/bin/sqls…"    9 seconds ago   Up 7 seconds   127.0.0.1:1433->1433/tcp        mssql
```
</details>

:::tip
If you are unfamiliar using docker command line tool. An option is to use
the [docker desktop application](https://www.docker.com/products/docker-desktop/) to manage docker containers.
:::

### Application

Tyle depends on the database to run.

#### App settings

Before we can run tyle server you need to create a local app settings file. Because of gitignore this file need to be
named **appsettings.Development.json**. Use the existing appsettings.json file combined with the environment variables
section
in the [introduction page](intro).

Path to where the file should be created:

- `src/server/Tyle.Api/appsettings.Development.json`

#### Run locally

1. Tyle server is an [.NET](https://dotnet.microsoft.com/en-us/) application, so you need to build it
   before you run it. This can be done via the IDE or using the command line as shown below. The `dotnet run` command
   builds and runs the application.

```bash
dotnet run <project name>
```

2. Tyle client is a [React](https://react.dev/) application using NPM. So navigate to the client folder and run this
   command to install all node modules required:

```bash
npm i
```

3. Then you run the build command followed by the start command to launch the application. These steps can also be setup
   using your IDE.

```bash
npm run build
npm run start
```

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

### Enable all features in Tyle

I order to enable all features you need to assign the administrator role to your newly created user. This is done
through the **MimirorgAuthentication** database. You will have to create a new connection between the users-table and
the roles-table.

1. Query the AspNetUsers table. Save your ID.
2. Query the AspNetRoles table. Save the Administrator ID.
3. Insert both IDs into the AspNetUserRoles table. Now you have enabled administrator role to your user.

# I need to clean up my local database, how can I do this?

<details>
<summary>
Tyle kill script
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
WHERE database_id = db_id('Tyle')
EXEC(@kill);
DROP DATABASE Tyle
CREATE Database Tyle
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