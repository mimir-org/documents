---
sidebar_position: 5
---

# State mutation currently in mimir

Delete this file when proplems are fixed.

## Examples of state mutation in Mimir currently
I took the liberty of merging in state mutations to the dev branch, this way you can fix them as a trial. I have also included a working solution below, but I would like you to try and find the errors before you look a the solution.
1. [AdminTab.tsx](https://github.com/mimir-org/mimir/blob/dev/src/client/src/components/modules/inspector/tabs/AdminTab.tsx)
2. [AttributeTab.tsx](https://github.com/mimir-org/mimir/blob/dev/src/client/src/components/modules/inspector/tabs/AttributeTab.tsx)
3. [TerminalTab.tsx](https://github.com/mimir-org/mimir/blob/dev/src/client/src/components/modules/inspector/tabs/TerminalTab.tsx)
4. [AttributeItem.tsx](https://github.com/mimir-org/mimir/blob/dev/src/client/src/components/modules/inspector/tabComponents/AttributeItem.tsx)

### Identified State Mutations and Fixes

#### AdminTab.tsx

##### Direct mutation of `aspectObject`:

```typescript
const onSubmit = () => {
  aspectObject.label = labelValue;  // Direct mutation
  aspectObject.description = descriptionValue;  // Direct mutation
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
  dispatch(updateProject({ ...projectState, aspectObject: updatedAspectObject }));
};
```

</details>

#### AttributeTab.tsx & AttributeItem.tsx

##### Direct mutation of `attributeToUpdate`:

```typescript
const handleInputChange = (id: string, value: string) => {
  const attributeToUpdate = attributes.find((attr) => attr.id === id);
  if (attributeToUpdate) {
    attributeToUpdate.value = value;  // Direct mutation
    dispatch(updateProject({ ...projectState }));
  }
};
```

<details>
<summary>View fix</summary>

```typescript
const handleInputChange = (id: string, value: string) => {
  const updatedAttributes = attributes.map((attr) =>
    attr.id === id ? { ...attr, value } : attr
  );
  dispatch(updateProject({ ...projectState, attributes: updatedAttributes }));
};
```

</details>

These fixes ensure that the state is not directly mutated, adhering to the principles of immutability in Redux.

Would you like to know more about any specific part?
