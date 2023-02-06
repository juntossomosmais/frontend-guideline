# React

## 7.1 Keys in lists

The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.

It is not recommended to use indexes for keys if the order of items can change. This can negatively affect performance and can cause problems with the component's state.

**✅ Good:**

```js
array.map((item, index) => <Component key={item.id} {...item}>)
```

**❌ Bad:**

```js
array.map((item, index) => <Component key={index} {...item}>)
```

## 7.2 useState functional updates

If the new state is calculated using the previous state, you can pass a function to setState. Thus avoiding competition between states and preventing possible bugs.

**✅ Good:**

```js
const [number, setNumber] = useState(1)

return (
  <div>
    <h1>{number}</h1>
    <button onClick={() => setNumber((prevNumber) => prevNumber + 1)}>
      Increase
    </button>
    <button onClick={() => setNumber((prevNumber) => prevNumber - 1)}>
      Decrease
    </button>
  </div>
)
```

**❌ Bad:**

```js
const [number, setNumber] = useState(1)

return (
  <div>
    <h1>{number}</h1>
    <button onClick={() => setNumber(number + 1)}>Increase</button>
    <button onClick={() => setNumber(number - 1}>Decrease</button>
  </div>
)
```

## 7.3 useEffect dependencies array

Use the useEffect dependency array to trigger side effects, and make your code cleaner.

**✅ Good:**

```js
const [page, setPage] = useState(1)

useEffect(() => {
  requestListUser()
  // calls useEffect when page state changes
}, [page])

return (
  <div>
    <button onClick={() => setPage((prevState) => prevState + 1)}>
      Next Page
    </button>
  </div>
)
```

**❌ Bad:**

```js
const [page, setPage] = useState(1)

useEffect(() => {
  requestListUser()
}, [])

const requestListUser = () => {
  setPage((prevState) => prevState + 1)
  // ...
  // any code to return user list
}

return (
  <div>
    <button onClick={() => requestListUser()}>Next Page</button>
  </div>
)
```

## 7.4 Readable components

Avoid creating very large components.
If possible divided into sub-components, improving the understanding and reading of the code.

**✅ Good:**

```js
const Screen = () => (
  <Container>
    <Header>
      <Title />
      <Button background="black">Filter</Button>
    </Header>

    <Main>
      <List>
        {data.map((item) => (
          <Card key={item.id} name={item.name} />
        ))}
      </List>
    </Main>
  </Container>
)
```

**❌ Bad:**

```js
const Screen = () => (
  <Box padding={1}>
    <Box alignItems="center">
      <Text>Titulo</Text>
      <Button background="black">Filter</Button>
    </Box>
    <Box marginTop={5}>
      <Box>
        {data.map((item) => (
          <Box key={item.id}>
            <Text color="red">{item.name}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
)
```

## 7.5 Styled Component Naming Convention

Use PascalCase as a convention in styled-components

**✅ Good:**

```js
export const CustomText = styled.p`
  color: 'red'
`
```

**❌ Bad:**

```js
export const customText = styled.p`
  color: 'red'
`
```

## 7.6 Using Styled Component in React Components

Import Styled Component as `S`

**✅ Good:**

```tsx
import * as S from './styles'

const MyComponent = () => (
  <S.CustomText>
    text example
  </S.CustomText>
)
```

**❌ Bad:**

```tsx
import * as Style from './styles'

const MyComponent = () => (
  <Style.CustomText>
    text example
  </Style.CustomText>
)


import { CustomText } from './styles'

const MyComponent = () => (
  <CustomText>
    text example
  </CustomText>
)
```

## 7.7 Avoid compare directly strings

When know all possible values we can use enum to achieve better readability and control.

**✅ Good:**

```tsx
const FEEDBACK = {
  CORRECT: 'correct',
  INCORRECT: 'incorrect',
}

const MyComponent = (type) => {
  const text = type === FEEDBACK.CORRECT ? '😎' : '😢'
  
  return (
    <Emoji>
      {text}
    </Emoji>
  )
}
```

**❌ Bad:**

```tsx
const MyComponent = (type) => {
  const text = type === 'correct' ? '😎' : '😢'

  return (
    <Emoji>
      {text}
    </Emoji>
  )
}
```

## 7.8 Using spread operator

When creating a component wrapper we can spread the types from our original component. That way the wrapper extends all the props from the original component automatically. This is useful to avoid creating a custom interface for our wrapper with missing props from the original component.

**✅ Good:**

```tsx
import { MenuItem, TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material';

export type SelectOption = { value: string; label: string };

export type SelectProps = TextFieldProps & {
  options: SelectOption[];
};

const Select = ({ options, ...props }: SelectProps) => {
  return (
    <TextField {...props}>
      {options.map((option) => (
        <MenuItem key={uuidv4()} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
```

**❌ Bad:**

```tsx
import { MenuItem, TextField } from '@mui/material';

export type SelectOption = { value: string; label: string };

export type SelectProps = {
  options: SelectOption[];
  disabled: boolean;
  onChange: () => void;
  value: string;
  onBlur: () => void;
};

const Select = ({
  options,
  disabled,
  onChange,
  value,
  onBlur,
} : SelectProps) => {
  return (
    <TextField
      disabled={disabled}
      onChange={handleOnChange}
      value={value}
      onBlur={handleOnBlur}
    >
      {options.map((option) => (
        <MenuItem key={uuidv4()} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
```
