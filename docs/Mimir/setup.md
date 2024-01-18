---
title: Setup
sidebar_position: 2
---

:::caution note
Mimir is currently not running/compatible with latest version of Tyle backend (Mimirorg.Authentication). Due to Mimirs
transitional
state and old IMF model.
Therefore, parts of this installation guide will be deprecated.
:::

## Where Can I Find the Code?

The code for Mimir, Tyle and the component-library can be found here https://github.com/mimir-org under the mimir-org
repository. The project can be
cloned
to your machine with `git@github.com:mimir-org/<repository>.git` via SSH or `gh repo clone mimir-org/<repository>`
with [GitHub CLI](https://cli.github.com/).

```bash
git clone git@github.com:mimir-org/mimir.git
```

The file structure after cloning the repos could look something like this:

```
📁 mimirorg (this can be renamed to whatever you want)
├── 📁 component-library
│   └── 📁 etc
├── 📁 mimir
│   └── 📁 etc
└── 📁 tyle
    └── 📁 etc
```

## Setup

### Database

**Mimir database is named ModelBuilder**

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
├── 📁 component-library
│   └── 📁 etc
├── 📁 mimir
│   └── 📁 etc
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

### Applications

Mimir depends on Tyle`s Mimirorg.Authentication so Tyle server needs to run in order to run both Mimir server and
client.

#### App settings

Before we can run mimir server you need to create a local app settings file. Because of gitignore this file need to be
named **appsettings.local.json**. Use the existing appsettings.json file combined with the environment variables section
in the [introduction page](intro.md). This step must also be done for tyle server, for more information see
the [tyle setup guide](../Tyle/setup).

Path to where the file should be created:

- `src/service/ModelBuilder.Api/appsettings.local.json`

#### Run locally

1. Mimir server and Tyle server are [.NET](https://dotnet.microsoft.com/en-us/) applications, so you need to build them
   before you can run them. This can be done via the IDE or using the command line as shown below. The `dotnet run`
   command builds and runs the applications.

```bash
dotnet run <project name>
```

2. Mimir client is a [React](https://react.dev/) application using NPM. So navigate to the client folder and run this
   command to install all node moduels required:

```bash
npm i
```

3. Then you run the build command followed by the start command to launch the application.

```bash
npm run build
npm run start
```

## After setup is complete

### Disable SSO logon

To disable SSO for local development navigate to the .env file path: `src/client/.env`. And set `REACT_APP_SILENT=true`.

### Mimir frontend and Yalc

https://github.com/wclr/yalc

If you don't want to reference your local copy of the component library directly in your package.json you can use Yalc.
Yalc is a way to connect npm package development with the dev environment. It allows us to develop components in the
component-library and dynamically update them locally so that you don't have to release a new package on npm for every
code change.

#### 1. Install Yalc

First, you need to install Yalc globally on your machine:

```bash
npm install -g yalc
```

#### 2. Publish the Component Library to Yalc

Navigate to the "component-library" directory and publish the package to Yalc's local store:

```bash
cd path/to/component-library
yalc publish
```

#### 3. Add the Component Library to the Mimir Project

Now, navigate to the "mimir" project directory and add the "component-library" package using Yalc:

```bash
cd path/to/mimir
yalc add component-library
```

#### 4. Link the Component Library (Optional)

If you want to reflect the changes in the "component-library" instantly in the "mimir" project, you can use
the `yalc link` command:

```bash
cd path/to/component-library
yalc link mimir
```

#### 5. Push Updates (Optional)

Whenever you make changes to the "component-library," you can push the updates to the "mimir" project using:

```bash
yalc push
```

#### 6. Remove the Component Library (Optional)

If you want to remove the "component-library" from the "mimir" project and revert to the NPM version, you can use:

```bash
cd path/to/mimir
yalc remove component-library
```

#### 7. Update the Component Library (Optional)

To update the "component-library" in the "mimir" project with the latest version from Yalc's local store, you can use:

```bash
cd path/to/mimir
yalc update component-library
```

# I need to clean up my local database, how can I do this?

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