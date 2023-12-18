# Current status of Mimir

### Refactor process

In 2023, Mimir began a major refactoring of which we can see the effect today, and Mimir is not in a running condition
as before. The motivation behind the refactor was that Mimir was in an unreliable and unstable state. So the customer
wanted us to clean up the code and make i robust.

Major changes have been made to the project, and you can see the outline of being well on the way to a new
MVP. One of the things that was decided was to move a lot of functionality in the frontend to a common component
library in order to get an overview of the project and reuse components. It was a good idea at the time, but we now see
that if we were to continue with the products (Tyle and Mimir) we would bring in the components in the code again. This
is mainly because the products are so different in design that it no longer makes sense to have a common library.

Something that characterizes the condition of Mimir is its dependence on Tyle, which in early autumn 2023 was rewritten
to IMF 0.2.0. This led to major changes in Tyle, which naturally affects Mimir as a consumer of data. Another reason is
the time the team has had to develop the project and most of the time there has been only one developer at Mimir.

The team's main focus is project storage. In order to save, the data model first had to be updated. We have managed to
save projects, but not update existing projects.

The backend is ready to receive this data from the frontend. Mimir has an advanced state management in the web
application which is based on Redux and Saga for doing api-calls based on redux dispatch. In the Mimir backend, much of
the previous functionality has been commented
out as these break with the new IMF model and are intended to be reimplemented when the project is mature.

Shortly after this was carried out, it was decided that the team should have all resources at Tyle for various reasons (
team size, focus on one product instead of two semifinished products).

## Summary

- Mimir frontend is in a transitional state. Where a lot of vital app components have not been re-implemented,
  re-connected or
  are partially working:
    - Admin module
    - Explorer module
    - Library module
    - Filter functions in both the library module and the drawing surface
    - Block view
    - Terminal connections
    - Navbar menu
    - Project creation (constructor is hardcoded)
- Mimir backend is also in a transitional state. Where a lot of code is commented out as it breaks with the new IMF
  model.
- Mimir frontend and backend also bears the mark of not having been tested against each other when refactored. And the
  communication between front and backend is lackluster. And is a potential break point in future development.

In order to continue the development of Mimir as of now, the team suggest the new contributor to run backend, do some Swagger api calls
and continue connecting frontend to backend. Saving of project has been started on but not finished.