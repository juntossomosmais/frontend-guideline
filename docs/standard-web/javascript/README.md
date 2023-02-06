# JavaScript

Never use semicolons.

**✅ Good:**

```js
const foo = 'bar'
const baz = 'qux'
const func = () => {}
```

**❌ Bad:**

```js
const foo = 'bar';
const baz = 'qux';
const func = () => {};
```

Always use single quotes or template literals

**✅ Good:**

```js
const string = 'foo'
const template = `foo`
```

**❌ Bad:**

```js
const string = "foo"
const template = "foo"
```

For strict equality checks `===` should be used in favor of `==`.

**✅ Good:**

```js
if (foo === 'foo') {
  statement
}
```

**❌ Bad:**

```js
if (foo == 'foo') {
  statement
}
```

## 6.2 Variables

Use meaningful, pronounceable, and in **English** variable names.

**✅ Good:**

```js
const currentDate = new Date().toLocaleDateString('pt-BR')
```

**❌ Bad:**

```js
const xpto = new Date().toLocaleDateString('pt-BR')
```

## 6.3 Descriptive validations (if)

Creating const to describe validations.

**✅ Good:**

```js
const hasFullUserName = user.firstName && user.lastname

if (hasFullUserName) {
  //do awesome something
}
```

**❌ Bad:**

```js
if (user.firstName && user.lastname) {
  //do something
}
```

## 6.4 Avoid multiple if's

Use an execution map instead a multiple if validations.

**✅ Good:**

```js
const messagingChannels = {
  whatsapp: (message) => {
    // send message to whatsapp
  },
  email: (message) => {
    // send message to email
  }
}

const sendMessage = (message, channel) => {
  const send = messagingChannels[channel];
  return send && send(message);
}
```

**❌ Bad:**

```js
const sendWhatsapp = (message) => {
  // send message to whatsapp
}

const sendEmail = (message) => {
  // send message to email
}

const sendMessage = (message, channel) => {
  if (channel === 'whatsapp') {
    sendWhatsapp(message)
  } else if (channel === 'email') {
    sendEmail(message)
  }
}
```

## 6.5 Code Comments

Avoid writing comments to explain the code. Use comments to answer “Why?” instead “How?”. Some cases you could write a code comment: warnings, complex expressions, or unusual decision clarification.

**✅ Good:**

```js
  const TIME_IN_SECONDS = 60 * 40 // 40 minutes

  // xxxx@xxxx.xxx
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i

  const calculateProductsPrice = () => {
    // do something
  }
```

**❌ Bad:**

```js
  // This coolFunction calculates the prices of the products
  const coolFunction = () => {
    // do something
  }
```

## 6.6 Avoid errors while destructuring

Its a common mistake destructuring while the object is null or undefined, the destructuring will throw an error.

**✅ Good:**

```js
  const { age } = { ...null } // undefined
  const { age } = null || {} // undefined

  // other values won't throw an error
  const { emptyString } = '';
  const { nan } = NaN;
  const { emptyObject } = {};

  function foo(bar = {}) {
    const { age } = bar;
  }
  
  foo() // undefined
  
```

**❌ Bad:**

```js
  const { age } = null // will throw an typeError
  const { age } = undefined // will throw an typeError
```
