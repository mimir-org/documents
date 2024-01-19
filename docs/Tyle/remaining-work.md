---
title: Remaining work
sidebar_position: 4
---

# Remaining work and ideas

For developers that will work on Tyle in the feature, these are features that we didn't have time to implement,
and ideas that we had but didn't have time to act on during development.

This page does not include things that were already mentioned on the page describing the current state of the code base.

## Replacing the authentication solution

Tyle currently uses authentication/authorization based on Microsoft Identity. The code for this is found in the
Mimirorg.Authentication project in the backend.

When Tyle was adapted to the IMF type definitions in IMF 0.2.0, most of the backend was restructured and a lot of
the code was rewritten. This is not true for the auth code. The reason was that the development team had a long
term plan to replace this auth solution with using Azure AD or something similar for logging on.

If future development teams want to continue using the current auth solution, we would recommend doing some refactoring
of the code, as it is currently in a messy state. It also still uses some conventions that has been phased out in other parts
of the code, for instance custom exceptions. Also, we would explore the possibility of merging the auth database
with the Tyle database, so that for instance creators and contributors to types can be defined by foreign keys in
the database.

## Improving search

The current search of the types database leaves a lot to be desired. The most obvious problem is that the client retrieves
all the types from the backend, and performs pagination/searching/filtering on the frontend. This should be changed so
that these operations are done on the server side, to improve performance and reduce network traffic and database calls.

The search results are also listed chronologically from latest to oldest, instead of being sorted by relevance. This makes
the results from the search very unintuitive, and is something that sorely needs to be fixed.

## Improving UX/UI

The development team working on Tyle in 2023 did not have access to design/UX resources. This was a frustration to the team,
and also lead to a user interface that is unfinished, and in need of a redesign.

Specifically, one would have to take a look at the type creation forms. There probably needs to be a lot more information
available to the user in these forms, both explaining what the different form fields are, and also containing more
information about the choices in dropdowns etc. For instance, when selecting the purpose of a block, the only information
available is the label/name of the purpose, with no way to find more information. The forms in their current state are
mostly useful to SMEs who are already familiar with the IMF type definitions, and able to look up external references
to Common Library or PCA.

Some of the components of these forms are also unfinished. For instance, when adding attributes to blocks or terminals,
there are boxes that you can use to set the minimum and maximum cardinality of these attributes, but there is no
indication in the user interface that this is what these boxes are for.

## Adding user and access control functionality

The current Tyle client has the possibility to change roles given to users, but no way to strip a user of all roles,
deleting users or rejecting newly registered users. Also, the user does not currently have a way to delete their own
account. This is functionality that should be added.

## The importance of user feedback

So far in the Tyle development cycle, usage of the application has been purely for testing. When actual users
start using the application, problems and needs will inevitably start popping up, making this list grow. It is
important that a future development team pushes for users to start using the application as soon as possible, to get
this invaluable feedback.
