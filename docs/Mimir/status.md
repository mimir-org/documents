---
sidebar_position: 3
---

# Current state of the code base

In 2023, Mimir began a major refactoring that is still in progress.

Major changes have been made to the project, and you can see the outline of being well on the way to a new
MVP. One of the things that was decided was to move a lot of functionality in the client to a common component
library in order to get an overview of the project and reuse components. It was a good idea at the time, but we now see
that if we were to continue with the products (Tyle and Mimir) we would bring in the components in the code again. This
is mainly because the products are so different in design that it no longer makes sense to have a common library.

Something that characterizes the state of Mimir is its dependence on Tyle, which in early autumn 2023 was rewritten
to IMF 0.2.0. This led to major changes in Tyle, which naturally affects Mimir as a consumer of data.

The team's main focus has been project storage. In order to save, the data model first had to be updated. We have
managed to
save projects, but not update existing projects.

The server is ready to receive this data from the client. Mimir client has an advanced state management in the
which is based on Redux and Saga for doing api-calls based on redux dispatch. In Mimir server, much of
the previous functionality has been commented
out as these break with the new IMF model and are intended to be reimplemented when the project is mature.

Mimir bears the mark of not having been tested against each other when refactored. And the
communication between front and server is not complete nor fully fleshed out. And is a potential break point in future
development.

# Component library

Mimir and Tyle depends on generic components from the component library. This library has not been maintained properly
and there is also a lot of app specific components that should be moved out. One should consider whether it should be
discontinued or not.

## Summary

- Mimir client is in a transitional state. Where a lot of vital app components have not been re-implemented,
  re-connected or
  are partially working:
    - Admin module.
    - Explorer module.
    - Library module.
    - Inspector module.
    - Filter functions in both the library module and the drawing surface (visual filter).
    - Block view.
    - Terminal connections.
    - Navbar menu.
    - Project creation (instantiation of the constructor is hardcoded).
- Mimir server is also in a transitional state. Where a lot of code is commented out as it breaks with the new IMF
  model.

In order to continue the development of Mimir as of now, the team suggest the new contributor to start with connecting
client to server properly before moving on to implementation of functionality. Saving of project has been started on
but not finished.