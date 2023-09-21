---
sidebar_position: 3
---

# New Redux component
Below is a demo component that can serve as a new tab in the `InspectorModule`. This component, named `DemoTab`, demonstrates how to properly handle state changes in Redux without direct state mutations.

## DemoTab.tsx

```tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProject } from '../../../store/reducers/projectReducer'; // Import your projectReducer
import { RootState } from '../../../store'; // Import your RootState

const DemoTab: React.FC = () => {
  const dispatch = useDispatch();
  const projectState = useSelector((state: RootState) => state.project); // Replace with your project state selector
  const [newLabel, setNewLabel] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLabel(e.target.value);
  };

  const updateLabel = () => {
    // Create a copy of the projectState and update the label
    const updatedProjectState = {
      ...projectState,
      label: newLabel,
    };

    // Dispatch the updated project state
    dispatch(updateProject(updatedProjectState));
  };

  return (
    <div>
      <h2>Demo Tab</h2>
      <input
        type="text"
        placeholder="New Label"
        value={newLabel}
        onChange={handleInputChange}
      />
      <button onClick={updateLabel}>Update Label</button>
    </div>
  );
};

export default DemoTab;
```

### Adding DemoTab to InspectorModule.tsx

To add this new `DemoTab` to the `InspectorModule`, you can update the `InspectorModule.tsx` file as follows:

1. Import `DemoTab` at the top of your `InspectorModule.tsx`:

```ts
import DemoTab from './tabs/DemoTab';
```

2. Add a new case for `DemoTab` in the `switch` statement that renders the tabs:

```tsx
switch (selectedTab) {
  case 'admin':
    return <AdminTab />;
  case 'attribute':
    return <AttributeTab />;
  case 'terminal':
    return <TerminalTab />;
  case 'demo': // New case
    return <DemoTab />;
  default:
    return null;
}
```

3. Update the `useState` and `onTabChange` to include the new 'demo' tab:

```ts
const [selectedTab, setSelectedTab] = useState<"admin" | "attribute" | "terminal" | "demo">("admin");

const onTabChange = (value: "admin" | "attribute" | "terminal" | "demo") => {
  setSelectedTab(value);
};
```

4. Add a new button or tab UI element to switch to the `DemoTab`.