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
    someProperty: action.payload // Modifying the cloned state
  };
};
```
By correctly handling state mutations, you maintain the immutability principle, which is crucial for the predictability and maintainability of your Redux state.
