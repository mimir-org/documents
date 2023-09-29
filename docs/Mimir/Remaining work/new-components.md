# New Components and Functionality

:::caution Note
When it comes to displaying elements, it's important that elements are only visually removed, not actually
removed from the tree, as this will cause the project state to change via React Flow.
:::

## Main Menu

On the start screen today, there are several buttons that do nothing:
![](img/projectMenu.png)

The most important of these is to save a project; this must be implemented before Mimir reaches an MVP. So this is
probably the most important for the next sprint if it's urgent to get Mimir live.

I don't see import and export as a "must-have" at the moment, but it will likely become very relevant for the future.
The same applies to sub-projects. I believe the open project works as it should, but without being able to save a
project, it's also not possible to open a new project.

## Visual Filter

![](img/visualFilter.png)

The visual filter is currently not working; this menu should open a modal that allows you to turn on and off edges in
the graph in the drawing window. You should choose whether to display parent-child edges or edges between different
nodes (think left/right edges). It should (or at least used to) be possible to turn animations on and off for edges
between nodes.

![](img/visualFilter2.png)

## Library Module

![](img/explorerMenu.png)

![](img/explorerMenu2.png)

You can't filter in this module (on the right in Mimir) today. This should be a simple task to implement.

## Block View

![](img/electroMode.png)

In block view, it should be possible to rotate the viewport 90 degrees so that those who are used to drawing from top to
bottom can use this view (this view is called electromode).

Sorting of terminals would also be nice here, as an AspectObject can have many terminals, and to avoid edges between
nodes getting tangled.

### Inspector Module

![](img/terminalAttributes.png)

This needs a refresh, as I'm not 100% sure what should be in this tab; Jørgen probably knows. It's also possible that
this tab should be removed, but that depends on what the new style will be like.

### Explorer Panel

![](img/explorerPanel.png)

This is the panel on the left in Mimir's menu; this needs to be re-implemented. It should only display the entire
drawing area as a tree structure, think of the tree structure in VSCode for example. It should also be possible to turn
off the display of nodes and the entire "tree" in this menu.

### Lock and Delete

![](img/lockDelete.png)

Delete should remove the node from the drawing area; a reset button would probably be nice here too.

Lock doesn't need to be considered right now, as this functionality is to lock it so that others can't edit the node
while you're working on it. Since Mimir hasn't implemented web-sockets today, this button is also not in use. As it
doesn't push any state changes to the backend.

## Connection to Backend - Saving Projects

This is probably the biggest task, but hard to prioritize as we don't know if the backend and frontend are still
communicating. Here it's just trial and error that's needed, as I haven't looked at this task myself.
