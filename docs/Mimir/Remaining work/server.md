---
title: Server
---

# Connecting client to server

Connecting to server is possible in the current state but will cast a few exceptions. In order to get it up and running
again is to first of all remove the query for company(as this is removed from Tyle) and ensure that data models in
client are updated. And that all logic tied to company is removed.

There is also a known issue with mapping connectors on blocks coming from client. This has to do with connector class
being abstract. This issue may be a more fundamental issue that require a lot of changes in the models both in front and
server.

Note that there are several methods in server that will respond with no or limited data as the whole Mimir project is
in a transitional state.

:::caution Note
Given our limited knowledge there will probably be more issues tied to connecting client, server and DB together.
:::

## Endpoints

All endpoints provided by Mimir server is documented in swagger. Which will launch when running the application
locally in a development environment.

## Summary of known work
- Fix exception thrown when client is querying company endpoints. (This one breaks the client.)
- Fix mapping issue when trying to map an abstract connector class.