# FAQ

## Known problems

<details>
<summary>I have a white screen, what do I do?</summary>

This is most often (read always) a result of incorrect environment variables somewhere. Checklist:

- Is the frontend set to `REACT_APP_SILENT = true`?
- Does your user have a company in the database, and is the secret for this company set in Mimir's `appsettings.json`,
  e.g., `"TypelibrarySecret": "secretHash"`?
- Does the domain in Mimir match the domain set in the company table (MimirorgAuthentication database).

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
