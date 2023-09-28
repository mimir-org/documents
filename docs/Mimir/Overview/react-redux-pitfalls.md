---
sidebar_position: 4
---

# React redux pitfalls

## State mutation

When updating the state in a reducer, it's important to remember that the state should be treated as immutable. Modifying the state directly can lead to unexpected behaviour and make it difficult to track changes and understand the state flow.
Here's an example of an incorrect state mutation within a reducer:

```js
// Incorrect Approach
const myReducer = (state, action) => {
  state.someProperty = action.payload; // Directly mutating the state object
  return state;
};
```

Instead, you should create a new state object or clone the existing state and make modifications on the new object. This ensures that the original state remains unchanged.
Here's the recommended approach:

```js
// Correct Approach
const myReducer = (state, action) => {
  return {
    ...state, // Cloning the existing state
    someProperty: action.payload, // Modifying the cloned state
  };
};
```

By correctly handling state mutations, you maintain the immutability principle, which is crucial for the predictability and maintainability of your Redux state.

## Examples of state mutation in Mimir

Delete this file when proplems are fixed.

I took the liberty of merging in state mutations to the dev branch, this way you can fix them as a trial. I have also included a working solution below, but I would like you to try and find the errors before you look a the solution.

1. [AdminTab.tsx](https://github.com/mimir-org/mimir/blob/dev/src/client/src/components/modules/inspector/tabs/AdminTab.tsx)
2. [AttributeTab.tsx](https://github.com/mimir-org/mimir/blob/dev/src/client/src/components/modules/inspector/tabs/AttributeTab.tsx)
3. [TerminalTab.tsx](https://github.com/mimir-org/mimir/blob/dev/src/client/src/components/modules/inspector/tabs/TerminalTab.tsx)
4. [AttributeItem.tsx](https://github.com/mimir-org/mimir/blob/dev/src/client/src/components/modules/inspector/tabComponents/AttributeItem.tsx)

### Fixes

#### AdminTab.tsx

##### Direct mutation of `aspectObject`:

```typescript
const onSubmit = () => {
  aspectObject.label = labelValue; // Direct mutation
  aspectObject.description = descriptionValue; // Direct mutation
  dispatch(updateProject({ ...projectState }));
};
```

<details>
<summary>View fix</summary>

```ts
const onSubmit = () => {
  const updatedAspectObject = {
    ...aspectObject,
    label: labelValue,
    description: descriptionValue,
  };
  dispatch(
    updateProject({ ...projectState, aspectObject: updatedAspectObject }),
  );
};
```

</details>

#### AttributeTab.tsx & AttributeItem.tsx

##### Direct mutation of `attributeToUpdate`:

```typescript
const handleInputChange = (id: string, value: string) => {
  const attributeToUpdate = attributes.find((attr) => attr.id === id);
  if (attributeToUpdate) {
    attributeToUpdate.value = value; // Direct mutation
    dispatch(updateProject({ ...projectState }));
  }
};
```

<details>
<summary>View fix</summary>

```typescript
const handleInputChange = (id: string, value: string) => {
  const updatedAttributes = attributes.map((attr) =>
    attr.id === id ? { ...attr, value } : attr,
  );
  dispatch(updateProject({ ...projectState, attributes: updatedAttributes }));
};
```

</details>

These fixes ensure that the state is not directly mutated, adhering to the principles of immutability in Redux.

Would you like to know more about any specific part?
