![juntos-somos-devs](https://user-images.githubusercontent.com/3603793/131751022-fda4146c-9ada-4ad0-82fc-d8f0a73acd3f.png)

# Front-end - Guideline

<a href="https://juntossomosmais.github.io/frontend-guideline/" target="_blank">Guideline Webpage</a>

[![GitHub contributors](https://img.shields.io/badge/ghpages-online-brightgreen.svg)](https://juntossomosmais.github.io/frontend-guideline/)
[![GitHub contributors](https://img.shields.io/github/contributors/juntossomosmais/frontend-guideline.svg)](https://github.com/juntossomosmais/frontend-guideline/graphs/contributors)

> "Every line of code should appear to be written by a single person, no matter the number of contributors." - Chinese Proverb.

The following document describes generic rules of writing in development languages that we use on our Front-end projects, that HTML, CSS, JavaScript, React, and Vue

The idea of this repository is not to be a complete guideline, the target is just to help developers who participate in our projects to be able to inform the coding standards used.

As this is a live document, some rules may not have been applied in old projects and changes can occur at any time.

## We are hiring! 🔥

If you are looking opportunities as Front-end Developer we are hiring!

You can [check all our job opportunities](https://www.linkedin.com/company/juntos-somos-mais/jobs/) and apply if you like it 😁

This is our [Front-end Challenge](https://github.com/juntossomosmais/frontend-challenge)

## 📖 Summary

1. [General Code Patterns](#1-general-code-patterns)
2. [Architecture](#2-architecture)
3. [Git](#3-git)
4. [HTML](#4-html)
5. [CSS](#5-css)
6. [JavaScript](#6-javascript)
7. [React](#7-react)
8. [Vue](#8-vue)
9. [Storybook](#9-storybook)
10. [Testing](#10-testing)
11. [Typescript](#11-typescript)

---

## 1. General Code Patterns

- 1.1 [Code Syntax](#11-code-syntax)
- 1.2 [Refactoring](#12-refactoring)
- 1.3 [Imports](#13-imports)

### 1.1 Code Syntax

Use soft tabs with two spaces. You need to configure your editor for this.

**✅ Good:**

```js
const obj = {
  prop: 'value',
  prop2: 'value2',
  prop3: 'value3',
}
```

```css
.foo {
  color: red;
}
```

```html
<div>
  <p>Hello World</p>
</div>
```

**❌ Bad:**

```js
const obj = {
    prop: 'value',
    prop2: 'value2',
    prop3: 'value3',
}
```

```css
.foo {
    color: red;
}
```

```html
<div>
    <p>Hello World</p>
</div>
```

### 1.2 Refactoring

Refactoring makes part of JSMLover's way of being, doing it every day and task by task. We have good practices and conditions to do that, though.

```js
if(!isWholeCodeCoveraged) return
```
- We can only refactor codes that have tests (and that tests!), which means 100% coverage! This way, we can improve or code safely. 

- Keep the current tests and make them pass! 
Once the current code is tested and can be refactored. We must make sure that the new changes will not break the current tests. 

### 1.3 Imports

If the data to be imported belongs to the **same module/scope**, use **relative path**.

#### Relative Path Example

`HeaderButton.js importing style from `header/styles.css`

```sh
┣ 📂 src/components \
┣ ┣ 📂 header \
┣ ┃ ┣ 📂 components
┣ ┃ ┣ ┣ 📂 Buttons
┣ ┃ ┣ ┣ ┣ 📜 HeaderButton.js
┣ ┃ ┣ ┣ ┣ 📜 RedirectButton.js
┣ ┃ ┣ ┣ ┣ 📜 EspecificButton.js
┣ ┃ ┣ ┣ 📂 Card 
┣ ┃ ┣ ┣ 📂 Modal 
┣ ┃ ┣ 📂 __tests__
┣ ┃ 📜 index.js
┣ ┃ 📜 styles.css
┣ ┃ 📜 index.stories.mdx
┣ ┃ 📜 index.spec.js

```

use this:

```js
import { HeaderButtonClass } from '../../../styles'
```

If the data to be imported belongs to **another module/scope**, use an **absolute path**.

#### Absolute Path Example

`HeaderPopup.js` importing an enum from `src/enum/errors.js`

```sh
┣ 📂 src \
┣ ┣ 📂 components \
┣ ┃ ┣ 📂 header \
┣ ┃ ┃ ┣ 📂 components
┣ ┃ ┃ ┃ ┣ 📂 Card 
┣ ┃ ┃ ┃ ┣ 📂 Popup
┣ ┃ ┃ ┃ ┃ ┣ 📜 HeaderPopup.js
┣ ┃ ┃ ┃ ┃ ┣ 📜 RedirectPopup.js
┣ ┃ ┃ ┃ ┃ ┣ 📜 EspecificPopup.js
┣ ┃ ┃ ┣ 📂 __tests__
┣ ┃ ┣ 📜 index.js
┣ ┃ ┣ 📜 styles.scss
┣ ┃ ┣ 📜 index.stories.mdx
┣ ┃ ┣ 📜 index.spec.js
┣ ┃ 📂 enums \
┣ ┃ ┣ 📜 errors.js
┣ ┃ ┣ 📜 pages.js
┣ ┃ ┣ 📜 routes.js
┣ ┃ ┣ 📜 environments.js
┣ ┃ ┣ 📜 index.js

```

use this:

```js
import { UploadError } from '~/enums'
```

**Note:**

Is also a good practice to create an `index.js` file for exporting data belonging to the same folder, as we can see example above.

```js
export * from './errors'
export * from './pages'
export * from './routes'
export * from './environments'
```

## 2. Architecture

The proper architecture for projects, and how to create and name files and folders.

- 2.1 [File Name](#21-file-name)
- 2.2 [Folder Architecture](#22-folder-architecture)

### 2.1 File Name

**✅ Good:**

- `UserProfile/UserProfile.vue`
- `UserProfile/index.js`
- `UserProfile/index.ts`
- `UserProfile/styles.js`
- `UserProfile/UserProfile.scss`
- `UserProfile/UserProfile.stories.mdx`

**❌ Bad:**

- `UserProfile/component.vue`
- `src/UserProfile.js`
- `UserProfile/component.ts`
- `UserProfile/style.scss`
- `UserProfileStyles.js`
- `UserProfile/UserProfile.mdx`

<a name="architecture-folder"></a>

### 2.2 Folder Architecture

#### Global Components/Helpers

Global Components should only be components used in more than one place.

For example:

```sh
┣ 📂 src/components \
┣ ┣ 📂 component \
┣ ┃ ┣ 📜 index.js
┣ ┃ ┣ 📜 styles.js
┣ ┃ ┣ 📜 index.spec.js
┣ ┃ ┣ 📜 index.stories.mdx

```

#### Scoped Components

We need to add inside `pages/**/components`, for example, all components that is need used just a context or scope, like a components that be used just a some place or specific page.

If we need to used the component again in another context or page it need to be moved to `src/components`.

For example:

```sh
┣ 📂 pages \
┣ ┣ 📂 Home \
┣ ┃ ┣ 📜 Home.js \
┣ ┃ ┣ 📜 Home.style.js \
┣ ┃ ┣ 📜 Home.spec.js \
┣ ┃ ┣ 📂 components \
┣ ┃ ┃ ┣ 📂 UserProfile \
┣ ┣ ┃ ┃ ┣ 📜 UserProfile.style.js \
┣ ┣ ┃ ┃ ┣ 📜 UserProfile.spec.js \
┣ ┣ ┃ ┃ ┣ 📜 UserProfile.stories.mdx \
```

#### Scoped Files 

We need to add inside `pages/**/{utils, helpers, context, hooks, etc...}` and use `camelCase` as **Naming Convention**.

For example:

```sh
┣ 📂 pages \
┣ ┣ 📂 Home \
┣ ┃ ┣ 📂 utils \
┣ ┃ ┣ ┣ 📜 someUtils.js
┣ ┃ ┣ 📂 helpers \
┣ ┣ ┣ ┣ 📜 someHelper.js
┣ ┃ ┣ 📂 hooks \
┣ ┣ ┣ ┣ 📜 useSomeHook.js
```

If we need use these files again in another context or page it need to be moved to `src/{utils, helpers, context, hooks}`.

```sh
┣ 📂 src
┣ ┣ 📂 utils \
┣ ┃ ┣ 📜 someUtils.js
┣ ┣ 📂 helpers \
┣ ┃ ┣ 📜 someHelper.js
┣ ┣ 📂 hooks \
┣ ┃ ┣ 📜 useSomeHook.js
```

**[⬆ back to summary](#-summary)**

---

<a name="git"></a>

## 3. Git

- 3.1 [Commit Messages](#31-commit-messages)

### 3.1 Commit Messages

In order to facilitate the contribution of anyone in a project, all commit messages must be in **English**.

We also use [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/), that is, the commit message must be in the form of a sentence, with the first word being an action, and the rest of the sentence a describing text.

**✅ Good:**

```powershell
git commit -m "feat: allow provided config object to extend configs"
git commit -m "docs: correct spelling of CHANGELOG"
git commit -m "feat(lang): add the Portuguese language"
```

**❌ Bad:**

```powershell
git commit -m "Add placeholder on input"
```

**[⬆ back to summary](#-summary)**

---

## 4. HTML

We main reference for HTML good patterns is [W3C](https://www.w3.org/TR/html/) and [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element), behind these docs we could learn a lot with semantic and another good practices.

- 4.1 [HTML Component Scope](#41-html-component-scope)

### 4.1 HTML Component Scope

We don't guest the scope of HTML components inside page, so when we start a new component, we should use a semantic tag, like `section` or `article` for example, to be able to starting to use the heading tags by context.

**✅ Good:**

```html
<section class="component">
  <h1 class="title">Title</h1>
  <p>Paragraph</p>
</section>
```

**❌ Bad:**

```html
<div class="component">
  <h4 class="title">Title</h4>
  <p>Paragraph</p>
</div>
```

## 5. CSS

The tips above could be used in any CSS framework or preprocessor, like SCSS, Styled Components and etc

- 5.1 [CSS Code Syntax](#51-css-syntax)
- 5.2 [CSS Declaration Order](#52-css-declaration-order)
- 5.3 [CSS Class Names](#53-css-class-names)
- 5.4 [CSS Good Practices](#54-css-good-practices)
- 5.5 [CSS Media Queries](#55-css-media-queries)

### 5.1 CSS Syntax

Keep one declaration per line.

**✅ Good:**

```scss
.selector-1,
.selector-2,
.selector-3 {
  ...
}
```

**❌ Bad:**

```scss
.selector-1, .selector-2, .selector-3 {
  ...
}
```

Separate each ruleset by a blank line.

**✅ Good:**

```scss
.selector-1 {
  ...
}

.selector-2 {
  ...
}
```

**❌ Bad:**

```scss
.selector-1 {
  ...
}
.selector-2 {
  ...
}
```

Use lowercase and avoid specifying units is zero-values.

**✅ Good:**

```scss
.selector-1 {
  color: #aaa;
  margin: 0;
}
```

**❌ Bad:**

```scss
.selector-1 {
  color: #aaaaaa;
  margin: 0px;
}
```

### 5.2 CSS Declaration Order

The declarations should be added in alphabetical order.

**✅ Good:**

```scss
.selector {
  background: #fff;
  border: #333 solid 1px;
  color: #333;
  display: flex;
  height: 200px;
  margin: 5px;
  padding: 5px;
  width: 200px;
}
```

**❌ Bad:**

```scss
.selector {
  padding: 5px;
  height: 200px;
  background: #fff;
  margin: 5px;
  width: 200px;
  color: #333;
  border: #333 solid 1px;
  display: flex;
}
```

### 5.3 CSS Class Names

Keep class lowercase and use dashes to separate the classname.

**✅ Good:**

```scss
.page-header { ... }
```

**❌ Bad:**

```scss
.pageHeader { ... }
.page_header { ... }
```

Is a good idea follows a [BEM naming convention](http://getbem.com/introduction/) to avoid conflicts with other components. If you are using CSS-in-JS like a Styled-Component, you can use BEM if you need to nesting elements inside parent.

The main pattern is use single dash to element name, double underline to element block and double dash to style modification.

**✅ Good:**

```scss
/* Good */
.page-header__title { ... }
.page-header--active { ... }

.button--active { ... }
```

**❌ Bad:**

```scss
.page-header-title { ... }
.page-header-active { ... }

.active { ... }
.primary { ... }
```

Dashes and underline serve as natural breaks in related class. Prefix class based on the closest parent or base class.

**✅ Good:**

```scss
.nav { ... }
.nav__item { ... }
.nav__link { ... }
```

**❌ Bad:**

```scss
.item-nav { ... }
.link-nav { ... }
```

Avoid giving too short names for class and always choose meaningful names that provide the class function.

**✅ Good:**

```scss
/* Good */
.button { ... }
.page-header { ... }
.progress-bar { ... }
```

**❌ Bad:**

```scss
.s { ... }
.btn { ... }
.ph { ... }
.block { ... }
```

### 5.4 CSS Good Practices

Avoid use values like colors, spacing and etc directly in the elements, use variables instead, and it can be CSS variables or some preprocessor variables, always check the context.

**✅ Good:**

```scss
.button {
  color: var(--color-primary);
  padding: var(--space-sm);
}
```

**❌ Bad:**

```scss
.button {
  color: #333;
  padding: 16px;
}
```

Never use IDs to style elements, always use classes instead.

**✅ Good:**

```scss
.header { ... }
.section { ... }
```

**❌ Bad:**

```scss
#header { ... }
#section { ... }
```

Do not style directly the elements, it will create a lot of conflicts, always use classes instead.

**✅ Good:**

```scss
.form-control { ... }
.header { ... }
.section { ... }
```

**❌ Bad:**

```scss
input[type="text"] { ... }
header
section
```

Avoid nesting elements, because it decrease performance and increase the specificity of the CSS, always use classes instead.

**✅ Good:**

```scss
.navbar { ... }
.nav { ... }
.nav__item { ... }
.nav__link { ... }
```

**❌ Bad:**

```scss
.navbar ul { ... }
.navbar ul li { ... }
.navbar ul li a { ... }
```

### 5.5 CSS Media Queries

Start the development with generic rules and add media queries inside scope using mobile first. Also is important
keep the media queries as close to their relevant rule sets whenever possible.

**✅ Good:**

```scss
.navbar {
  margin-bottom: var(--space);

  @media (min-width: 480px) {
    padding: 10px;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (min-width: 992px) {
    position: fixed;
  }
}
```

**❌ Bad:**

```scss
.navbar {
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 767px) {
    position: static;
    padding: var(--space-sm);
  }
}
```

### 5.6 Spacing and size of image and components

Is a commom problem to use width and height or all dynamic or all hardcoded, but each one has it own purpose. We should avoid using magic numbers at all times.

> _"Magic numbers are those numbers that appear in code without explanation, but that 'magically' make things work."_  Are numbers that dont have a why, but works.


### 5.6.1 Dynamic values
If you are using padding, margin, gap should use our [Venices's spacing variables](https://juntossomosmais.github.io/venice/vue/?path=/docs/getting-started-styles-spacings--page). Any space that override it values must be validated once our Design System is well defined around these alues and our UX Teams guide must follow it.
Icons, width and height that are relative to our Design System or that have sizes based on calc upon our spacing variable must also use [Venices's spacing variables](https://juntossomosmais.github.io/venice/vue/?path=/docs/getting-started-styles-spacings--page) instead of magic numbers.

**✅ Good:**

```scss
.logout__icon {
    height: var(--spacing-xxlarge);
    width: var(--spacing-xxlarge);
  }

.icon__button {
    min-width: var(--spacing-giant);
  }
}
```

**❌ Bad:**

```scss

.logout__icon {
    height: 25px;
    width: 25px;
  }

.icon__button {
    min-width: 34px;
  }
}
```


### 5.6.2 Images and well defined components
If you are using a image, or a component that has a design size and it sizes at maximum vary from desktop/mobile, use the value of it:

**✅ Good:**

```scss
.shopfrom__banner {
    height: 900px;
    width: 480px;
  }

  @media (min-width: 991px) {
     height: 740px;
     width: 240px;
  }
}
```

**❌ Bad:**

```scss
.shopfrom__banner {
    height: calc(4 * var(--spaceing-xxxlarge);
    width: calc(2 * var(--spacing-giant);
  }
}
```

**[⬆ back to summary](#-summary)**

## 6. JavaScript

- 6.1 [Javascript Code Syntax](#61-javascript-code-syntax)
- 6.2 [Variables](#62-variables)
- 6.3 [Descriptive validations (if)](#63-descriptive-validations-if)
- 6.4 [Avoid multiple if's](#64-avoid-multiple-ifs)
- 6.5 [Code Comments](#65-code-comments)
- 6.6 [Avoid errors while destructuring](#66-avoid-errors-while-destructuring)
- 6.7 [Prefer early return](#67-prefer-early-return)

<a name="javascript-syntax"></a>

### 6.1 JavaScript Code Syntax

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

<a name="variables"></a>

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

### 6.2 Variables

Use meaningful, pronounceable, and in **English** variable names.

**✅ Good:**

```js
const currentDate = new Date().toLocaleDateString('pt-BR')
```

**❌ Bad:**

```js
const xpto = new Date().toLocaleDateString('pt-BR')
```

<a name="descriptive-validations"></a>

### 6.3 Descriptive validations (if)

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

<a name="avoid-multiple-ifs"></a>

### 6.4 Avoid multiple if's

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

### 6.5 Code Comments

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

<a name="errors-destructuring"></a>
### 6.6 Avoid errors while destructuring

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

<a name="early-return"></a>
### 6.7 Prefer early return

Prefer early return over conditional wrapping to enhance code readability and reduce nesting.

**✅ Good:**

```js
function foo() {
  if (!someValidation) return // or throw error

  // do something here

  if (!anotherValidation) return

  return 'bar'
}
```

**❌ Bad:**

```js
function foo() {
  if (someValidation) {
    // do something here

    if (anotherValidation) {
      return 'bar'
    }
  }
}
```

**[⬆ back to summary](#-summary)**

---

## 7. React

- 7.1 [Keys in lists](#71-keys-in-lists)
- 7.2 [useState functional updates](#72-usestate-functional-updates)
- 7.3 [useEffect dependencies array](#73-useeffect-dependencies-array)
- 7.4 [Readable components](#74-readable-components)
- 7.5 [Styled Component Naming Convention](#75-styled-component-naming-convention)
- 7.6 [Using Styled Component in React Components](#76-using-styled-component-in-react-components)
- 7.7 [Enums](#77-avoid-compare-directly-strings)
- 7.8 [Using spread operator](#78-using-spread-operator)
- 7.9 [Conditional Rendering](#79-conditional-rendering)
  - 7.9.1 [Using short circuit](#791-using-short-circuit)
  - 7.9.2 [Using ternary operator](#792-using-ternary-operator)

### 7.1 Keys in lists

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

### 7.2 useState functional updates

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

### 7.3 useEffect dependencies array

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

### 7.4 Readable components

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

### 7.5 Styled Component Naming Convention

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

### 7.6 Using Styled Component in React Components

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

### 7.7 Avoid compare directly strings

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

### 7.8 Using spread operator

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

### 7.9 Conditional Rendering

#### 7.9.1 Using short circuit

when we only need to validate a logical case and return a component, we can directly use the short circuit

**✅ Good:**

```tsx
import { useState } from 'react'
import Welcome from '../components/Welcome'

const HomePage = () => {
  const [showWelcome, setShowWelcome] = useState(true)
  return showWelcome && <Welcome />
};
```

**❌ Bad:**

```tsx
import { useState } from 'react'
import Welcome from '../components/Welcome'

const HomePage = () => {
  const [showWelcome, setShowWelcome] = useState(true)
  return showWelcome ? <Welcome /> : <></>
};
```

#### 7.9.2 Using ternary operator

when we need to validate two logical cases and return a component in both cases, we can use the ternary instead of the if...else

**✅ Good:**

```tsx
import { useState } from 'react'
import Welcome from '../components/Welcome'
import Dashboard from '../components/Dashboard'

const HomePage = () => {
  const [showWelcome, setShowWelcome] = useState(false)
  return showWelcome ? <Welcome /> : <Dashboard />
};
```

**❌ Bad:**

```tsx
import { useState } from "react"
import Welcome from "../components/Welcome"
import Dashboard from "../components/Dashboard"

const HomePage = () => {
  const [showWelcome, setShowWelcome] = useState(false)

  if (!showWelcome) {
    return <Dashboard />
  }

  return <Welcome />
};
```

**[⬆ back to summary](#-summary)**

---

## 8. Vue

- 8.1 [Keys in lists](#81-keys-in-lists)
- 8.2 [Use Computed for real time updates](#82-use-computed-for-real-time-updates)
- 8.3 [Multi-word component names](#83-multi-word-component-names)
- 8.4 [Prop definitions](#84-prop-definitions)
- 8.5 [Vue property decorator](#85-vue-property-decorator)

### 8.1 Keys in lists

The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.

It is not recommended to use indexes for keys if the order of items can change. This can negatively affect performance and can cause problems with the component's state.

**✅ Good:**

```html
<template v-for="item in items">
   <Component :key="item.id" v-bind="{...item}">
</template>
```

**❌ Bad:**

```html
<template v-for="(item, index) in items">
   <Component :key="index" v-bind="{...item}">
</template>
```

### 8.2 Use Computed for real time updates

If you need listen changes at data use computeds instead of methods

**✅ Good:**

```js
computed: {
  fullName(){
    return `${this.name} ${this.lastName}`
  }
}
```

**❌ Bad:**

```js
methods: {
  fullName() {
    this.fullName = `${this.name} ${this.lastName}`
  }
}
```

### 8.3 Multi-word component names

Component names should always be multi-word, except for root App components, and built-in components provided by Vue.

This prevents conflicts with existing and future HTML elements, since all HTML elements are a single word.

**✅ Good:**

```js
export default {
  name: 'TodoItem',
  // ...
}
```

**❌ Bad:**

```js
export default {
  name: 'Todo',
  // ...
}
```

### 8.4 Prop definitions

In committed code, prop definitions should always be as detailed as possible, specifying at least type(s).

**✅ Good:**

```js
export default {
  status: {
    type: String,
    required: true
  }
  // ...
}
```

**❌ Bad:**

```js
export default {
  props: ['status']
  // ...
}
```

### 8.5 Vue property decorator

Vue prop decorator should not be used, use Vue.extend instead

**✅ Good:**

```js
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MyComponent',
})
</script>
```

**❌ Bad:**

```js
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class MyComponent extends Vue {
  name: 'MyComponent'
}
</script>
```

**[⬆ back to summary](#-summary)**

---

## 9. Storybook

- 9.1 [Story file](#91-story-file)

### 9.1 Story file

Create a file with the same name of your component, or index, and with the suffix `.stories.mdx`.

**✅ Good:**

- Button.stories.mdx
- Dialog/index.stories.mdx

**❌ Bad:**

- Input.mdx
- Dialog/index.mdx

**[⬆ back to summary](#-summary)**

---

## 10. Testing

- 10.1 [Write tests with "it"](#101-write-tests-with-it)
- 10.2 [Using test-id](#102-using-test-id)
- 10.3 [Selecing component](#103-selecting-component)

### 10.1 Write tests with "it"

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

### 10.2 Using test-id

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

### 10.3 Selecting component

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

**[⬆ back to summary](#-summary)**

---

## 11. Typescript

- 11.1 [Do not use any type](#111-do-not-use-any-type)
- 11.2 [Naming convention](#112-naming-convention)
- 11.3 [Exporting types](#113-exporting-types)
- 11.4 [Types within a file](#114-types-within-a-file)
- 11.5 [Increase legible](#115-increase-legible)

### 11.1 Do not use any type

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

### 11.2 Naming convention

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

The same to Enum keys.

**✅ Good:**

```ts
enum UserResponse {
  NotSuccess = 0,
  Success = 1,
}
```

**❌ Bad:**

```ts
enum UserResponse {
  NOT_SUCCESS = 0,
  success = 1,
}
```

### 11.3 Exporting types

Do not export types/functions unless you need to use it across multiple components.

### 11.4 Types within a file

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

### 11.5 Increase legible

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
