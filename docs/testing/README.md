# Testing

- 10.1 [Write tests with "it"](#101-write-tests-with-it)
- 10.2 [Using test-id](#102-using-test-id)
- 10.3 [Selecing component](#103-selecting-component)

## 10.1 Write tests with "it"

Write tests with the alias "it" instead "test" method.

**✅ Good:**

```js
describe('yourModule', () => {
  it('should do this thing', () => {});
});
```

**❌ Bad:**

```js
describe('yourModule', () => {
  test('if it does this thing', () => {});
});
```

## 10.2 Using test-id

To get components during tests we use `test-id` custom html attributes with unique id and our own convention deeply inpired by the css's BEM.
To define the `test-id` to a component use the follow structure: `[page-name||component-name]__[element-type]--[type]`

**✅ Good:**

- forgot-password__input--email
- header__select--cnpjList
- login__button--forgot-password

**❌ Bad:**

- forgot-email-input
- header__cnpjList
- button--forgot-password

## 10.3 Selecting component

To select a component in order to test a behavior of to trigger any event we must use ou `test-id` attribute to select it.

**✅ Good:**

```js
describe('yourModule', () => {
  it('should do trigger click event', () => {
    const button = wrapper.find('[data-testid="login__button--forgot-password"]')
  });
});
```

**❌ Bad:**

```js
describe('yourModule', () => {
  it('should do trigger click event', () => {
    const button = wrapper.find('button.btn-primary')
  });
});
```

**:bulb: Tip:**

If you have more than one testid in the same component, you can create and object to use the `find` method to select the component.

```ts
const TESTIDS = {
  BUTTON: '[data-testid="login__button--forgot-password"]',
  INPUT: '[data-testid="login__input--email"]',
}

describe('yourModule', () => {
  it('should do trigger click event', () => {
    const button = wrapper.find(TESTIDS.BUTTON)
    const input = wrapper.find(TESTIDS.INPUT)
  });
});
```
