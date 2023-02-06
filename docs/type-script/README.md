# Typescript

## 11.1 Do not use any type

Avoid using `any` type. It's best to use the type that is more specific whenever possible. Prefer to use `unknown` when necessary.

**✅ Good:**

```ts
function foo(x: unknown) {}

function foo(): unknown {}
```

**❌ Bad:**

```ts
function foo(x: any) {}

function foo(): any {}
```

## 11.2 Naming convention

For convention, use PascalCase for type names.

**✅ Good:**

```ts
type MyBeautifulType = {
  name: string
  age: number
}
```

**❌ Bad:**

```ts
type myBeautifulType = {
  name: string
  age: number
}
```

## 11.3 Exporting types

Do not export types/functions unless you need to use it across multiple components.

## 11.4 Types within a file

Within a file, type definitions should come first.

**✅ Good:**

```ts
// imports...

type MyBeautifulType = {
  name: string
  age: number
}

// rest of the file...
```

**❌ Bad:**

```ts
// imports...

// part of the file...

type MyBeautifulType = {
  name: string
  age: number
}

// rest of the file...
```

## 11.5 Increase legible

Create a type for increase legible

**✅ Good:**

```ts
type PersonType = {
  name: string
  age: number
  birthDate: string
};

const Person = ({ name, age, birthDate }: PersonType) => {
  // ...
};
```

**❌ Bad:**

```ts
const Person = ({
  name,
  age,
  birthDate,
}: {
  name: string,
  age: number,
  birthDate: string,
}) => {
  // ...
};
```
