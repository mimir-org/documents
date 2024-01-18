---
sidebar_position: 7
---

# FAQ

## Known problems

<details>
<summary>I have a white screen, what do I do?</summary>

This is most often (read always) a result of incorrect environment variables somewhere. Checklist:

- Is the frontend set to `REACT_APP_SILENT = true`?
- Does the domain in Mimir match the domain set in the company table (MimirorgAuthentication database).

</details>

<details>
<summary>I can't register, what's happening?</summary>
If you're not receiving the email, it's because it doesn't get sent when you're running in development mode; the same applies to the account recovery code. The email you should have received can be found in:

`/mimirorg/typelibrary/src/server/TypeLibrary.Api/bin/Debug/net7.0/Data/Mail/`

</details>

If there are other issues, they most often arise from:

- Incorrect environment variables.
- Forgetting to run Tyle's backend.
