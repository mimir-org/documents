# FAQ

## I have a white screen, what do I do?
This is most often (read always) a result of incorrect environment variables somewhere. Checklist:
- Is the frontend set to `REACT_APP_SILENT = true`?
- Does your user have a company in the database, and is the secret for this company set in Mimir's `appsettings.json`, e.g., `"TypelibrarySecret": "secretHash"`?
