# Custom hooks

There are many custom hooks in mimir, this serves only as an overview.

## Custom Hooks Documentation

Below is the documentation for the custom hooks available in the `src/client/src/hooks` directory of the [Mimir repository](https://github.com/mimir-org/mimir/).

### [useCompanySelector](https://github.com/mimir-org/mimir/blob/dev/src/client/src/hooks/useCompanySelector.ts)

- **Purpose**: To get a company based on its domain.
- **Usage**:

  ```typescript
  import { useCompanySelector } from 'hooks/useCompanySelector';

  const MyComponent = () => {
    const company = useCompanySelector('example.com', 'id_123');
    return <div>{company ? company.name : 'No company found'}</div>;
  };
  ```

### [useDebounce](https://github.com/mimir-org/mimir/blob/dev/src/client/src/hooks/useDebounce.ts)

- **Purpose**: To debounce the update of a state variable.
- **Usage**:

  ```typescript
  import { useDebounce } from 'hooks/useDebounce';

  const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    // Perform API call with debouncedQuery
  }, [debouncedQuery]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
  };

  ```

### [useDebounceState](https://github.com/mimir-org/mimir/blob/dev/src/client/src/hooks/useDebounceState.ts)

- **Purpose**: Combines `useState` and `useDebounce`.
- **Usage**:

  ```typescript
  import { useDebounceState } from 'hooks/useDebounceState';

  const SearchComponent = () => {
  const [searchInput, setSearchInput, debouncedSearchInput] = useDebounceState('', 300);

  useEffect(() => {
    // Perform API call with debouncedSearchInput
  }, [debouncedSearchInput]);

  return <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />;
  };

  ```

### [useEffectOnce](https://github.com/mimir-org/mimir/blob/dev/src/client/src/hooks/useEffectOnce.ts)

- **Purpose**: To run an effect only once. This can probably be deleted as useEffect with an empty dependency array will do the same thing.
- **Usage**:

  ```typescript
  import { useEffectOnce } from 'hooks/useEffectOnce';

  const MyComponent = () => {
  useEffectOnce(() => {
    // Code to run only once
  });

  return <div>Content</div>;
  };

  ```

### [useGetSelectedFlowNodes](https://github.com/mimir-org/mimir/blob/dev/src/client/src/hooks/useGetSelectedFlowNodes.ts)

- **Purpose**: To get selected nodes in a flow.
- **Usage**:

  ```typescript
  import { useGetSelectedFlowNodes } from 'hooks/useGetSelectedFlowNodes';

  const FlowComponent = () => {
  const selectedNodes = useGetSelectedFlowNodes();

  return <div>{`Selected Nodes: ${selectedNodes.length}`}</div>;
  };
  ```

### [useIsOverflowing](https://github.com/mimir-org/mimir/blob/dev/src/client/src/hooks/useIsOverflowing.ts)

- **Purpose**: To check if an element is overflowing its boundary.
- **Usage**:

  ```typescript
  import { useIsOverflowing } from 'hooks/useIsOverflowing';

  const TextComponent = () => {
    const { overflowRef, isOverflowing } = useIsOverflowing();

    return (
        <div ref={overflowRef}>
            {isOverflowing ? 'Text is overflowing' : 'Text fits'}
        </div>
    );
  };
  ```

### [useLocalStorage](https://github.com/mimir-org/mimir/blob/dev/src/client/src/hooks/useLocalStorage.ts)

- **Purpose**: To read and write data to local storage.
- **Usage**:

  ```typescript
  import { useLocalStorage } from 'hooks/useLocalStorage';

  const StorageComponent = () => {
    const [storedValue, setValue] = useLocalStorage('myKey', 'initialValue');

    return (
        <button onClick={() => setValue('newValue')}>
            Update Local Storage
        </button>
    );
  };
  ```

### [useOutsideClick](https://github.com/mimir-org/mimir/blob/dev/src/client/src/hooks/useOutsideClick.ts)

- **Purpose**: To detect clicks outside a given element.
- **Usage**:

  ```typescript
  import { useOutsideClick } from 'hooks/useOutsideClick';

  const DropdownComponent = () => {
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useOutsideClick(ref, () => setIsOpen(false));

    return (
        <div ref={ref}>
            <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
                {isOpen && <div>Dropdown Content</div>}
        </div>
    );
  };
  ```
