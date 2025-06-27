![juntos-somos-devs](https://user-images.githubusercontent.com/3603793/131751022-fda4146c-9ada-4ad0-82fc-d8f0a73acd3f.png)

# Front-end - Guideline

<a href="https://juntossomosmais.github.io/frontend-guideline/" target="_blank">Guideline Webpage</a>

[![GitHub contributors](https://img.shields.io/badge/ghpages-online-brightgreen.svg)](https://juntossomosmais.github.io/frontend-guideline/)
[![GitHub contributors](https://img.shields.io/github/contributors/juntossomosmais/frontend-guideline.svg)](https://github.com/juntossomosmais/frontend-guideline/graphs/contributors)

> "Every line of code should appear to be written by a single person, no matter the number of contributors." - Chinese Proverb.

The following document describes generic rules for writing in the development languages that we use in our Front-end projects: HTML, CSS, JavaScript, TypeScript, React, and Vue.

The idea of this repository is not to be a complete guideline, but rather to help developers who participate in our projects understand the coding standards used.

As this is a living document, some rules may not have been applied in older projects and changes can occur at any time.

## We are hiring! 🔥

If you are looking for opportunities as a Front-end Developer, we are hiring!

You can [check all our job opportunities](https://www.linkedin.com/company/juntos-somos-mais/jobs/) and apply if you like them 😁

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

- 1.0 [Prettier](#10-prettier)
- 1.1 [Code Syntax](#11-code-syntax)
- 1.2 [Refactoring](#12-refactoring)
- 1.3 [Imports](#13-imports)

### 1.0 Prettier

We use [Prettier](https://prettier.io/) to format our code, and we have a [shared rule to validate this](https://github.com/juntossomosmais/time-out-market/tree/main/packages/linters#prettier)

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

Refactoring is part of JSM's way of working, doing it every day and task by task. We have good practices and conditions to do that, though.

```js
if(!isWholeCodeCovered) return
```
- We can only refactor code that has tests (and those tests pass!), which means 100% coverage! This way, we can improve our code safely. 

- Keep the current tests and make them pass! 
Once the current code is tested and can be refactored, we must make sure that the new changes will not break the current tests. 

### 1.3 Imports

If the data to be imported belongs to the **same module/scope**, use **relative path**.

#### Relative Path Example

`HeaderButton.js importing style from header/styles.css`

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
import { UploadError } from '~/enums/errors.js'
```

#### Avoid Barrel Files

**Avoid using barrel files** (`index.ts` exports) for better tree-shaking and clearer dependencies. Use direct imports instead.

**✅ Good (Direct imports):**

```js
import { ButtonComponent } from '~/components/Button/Button'
import { HeaderService } from '~/services/Header/HeaderService'
import { EUserStatus } from '~/enums/userStatus'
```

**❌ Bad (Barrel files):**

```js
// services/index.ts
export { HeaderService } from './Header/HeaderService'
export { FooterService } from './Footer/FooterService'

// component file
import { HeaderService } from '~/services' // unclear which service
```

**Benefits of direct imports:**
- Better tree-shaking for smaller bundle sizes
- Clearer dependencies and relationships
- Easier to track where code is being used
- Improved TypeScript performance

## 2. Architecture

The proper architecture for projects, and how to create and name files and folders.

- 2.1 [File Name](#21-file-name)
- 2.2 [Folder Architecture](#22-folder-architecture)

### 2.1 File Name

Use explicit component names instead of generic `index` files for better clarity and maintainability.

**✅ Good:**

- `UserProfile/UserProfile.vue`
- `UserProfile/UserProfile.tsx`
- `UserProfile/UserProfile.scss`
- `UserProfile/UserProfile.module.scss`
- `UserProfile/UserProfile.stories.mdx`
- `UserProfile/UserProfile.spec.ts`

**❌ Bad:**

- `UserProfile/index.vue` (use explicit component name)
- `UserProfile/index.tsx` (use explicit component name)
- `UserProfile/component.vue`
- `src/UserProfile.js`
- `UserProfile/component.ts`
- `UserProfile/style.scss`
- `UserProfileStyles.js`
- `UserProfile/UserProfile.mdx`

**Benefits of explicit naming:**
- Easier to locate files in search results
- Clearer when multiple files are open in tabs
- Better IDE navigation and autocomplete
- Consistent with component-based architecture

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

We need to add components inside `pages/**/components` - for example, all components that need to be used in just one context or scope, like components that are used in only one specific place or page.

If we need to use the component again in another context or page, it needs to be moved to `src/components`.

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

We need to add files inside `pages/**/{utils, helpers, context, hooks, etc...}` and use `camelCase` as **Naming Convention**.

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

If we need to use these files again in another context or page, they need to be moved to `src/{utils, helpers, context, hooks}`.

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

- 3.0 [Commitlint](#30-git-commitlint)
- 3.1 [Commit Messages](#31-commit-messages)

### 3.0 Git Commitlint

We use [Commitlint](https://commitlint.js.org/#/) to validate our commit messages, and we have a [shared rule to validate this](https://github.com/juntossomosmais/time-out-market/tree/main/packages/linters#commitlint)

### 3.1 Commit Messages

In order to facilitate the contribution of anyone in a project, all commit messages must be in **English**.

We also use [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/), that is, the commit message must be in the form of a sentence, with the first word being an action, and the rest of the sentence a describing text.

We must always commit in lowercase. We are using a [shared rule to validate this](https://github.com/juntossomosmais/time-out-market/blob/main/packages/linters/src/commitlint.config.js).   

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

Our main reference for HTML good patterns is [W3C](https://www.w3.org/TR/html/) and [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). These docs teach us a lot about semantic HTML and other good practices.

- 4.1 [HTML Component Scope](#41-html-component-scope)

### 4.1 HTML Component Scope

We don't know the scope of HTML components inside a page, so when we start a new component, we should use a semantic tag like `section` or `article` to establish proper heading hierarchy by context.

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

- 5.0 [CSS Stylelint](#50-css-stylelint)
- 5.1 [CSS Code Syntax](#51-css-syntax)
- 5.2 [CSS Declaration Order](#52-css-declaration-order)
- 5.3 [CSS Class Names](#53-css-class-names)
- 5.4 [CSS Good Practices](#54-css-good-practices)
- 5.5 [CSS Media Queries](#55-css-media-queries)
- 5.6 [Spacing and size of images and components](#56-spacing-and-size-of-images-and-components)
  - 5.6.1 [Dynamic values](#561-dynamic-values)
  - 5.6.2 [Images and well-defined components](#562-images-and-well-defined-components)
- 5.7 [Shorthand Properties Guidelines](#57-shorthand-properties-guidelines)
- 5.8 [CSS Modules](#58-css-modules)
  - 5.8.1 [File Naming Convention](#581-file-naming-convention)
  - 5.8.2 [Import Convention](#582-import-convention)
  - 5.8.3 [Class Naming in CSS Modules](#583-class-naming-in-css-modules)
- 5.9 [Design Tokens](#59-design-tokens)
  - 5.9.1 [Use Design Tokens Instead of Hardcoded Values](#591-use-design-tokens-instead-of-hardcoded-values)
  - 5.9.2 [Available Design Token Categories](#592-available-design-token-categories)
  - 5.9.3 [Acceptable Exceptions](#593-acceptable-exceptions)
- 5.10 [Modern CSS Properties](#510-modern-css-properties)
  - 5.10.1 [Logical Properties](#5101-logical-properties)
  - 5.10.2 [Layout Properties](#5102-layout-properties)
  - 5.10.3 [Typography Properties](#5103-typography-properties)
  - 5.10.4 [Modern Selectors](#5104-modern-selectors)
  - 5.10.5 [CSS Layers](#5105-css-layers)
  - 5.10.6 [Container Queries](#5106-container-queries)
  - 5.10.7 [Modern Units](#5107-modern-units)


### 5.0 CSS Stylelint

We use [Stylelint](https://stylelint.io/) to validate our code, and we have a [shared rule to validate this](https://github.com/juntossomosmais/time-out-market/tree/main/packages/linters#stylelint)

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

Use lowercase and avoid specifying units for zero-values.

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

It's a good idea to follow a [BEM naming convention](http://getbem.com/introduction/) to avoid conflicts with other components. If you are using CSS-in-JS like Styled-Components, you can use BEM if you need to nest elements inside a parent.

The main pattern is to use a single dash for element name, double underscores for element block, and double dashes for style modification.

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

Dashes and underscores serve as natural breaks in related classes. Prefix classes based on the closest parent or base class.

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

Avoid using values like colors, spacing, etc. directly in the elements. Use variables instead, whether CSS variables or preprocessor variables - always check the context.

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

Do not style elements directly, as it will create many conflicts. Always use classes instead.

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

Avoid nesting elements, as it decreases performance and increases the specificity of the CSS. Always use classes instead.

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

Start the development with generic rules and add media queries within scope using mobile-first. It's also important to keep the media queries as close to their relevant rule sets as possible.

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

### 5.6 Spacing and size of images and components

It's a common problem to use width and height either all dynamic or all hardcoded, but each one has its own purpose. We should avoid using magic numbers at all times.

> _"Magic numbers are those numbers that appear in code without explanation, but that 'magically' make things work."_ These are numbers that don't have a clear reason but work.


### 5.6.1 Dynamic values
If you are using padding, margin, or gap, you should use our [Atomium tokens](https://juntossomosmais.github.io/atomium/?path=/docs/getting-started-tokens--docs). Any spacing that overrides these values must be validated since our Design System is well-defined around these values and our UX team's guidelines must follow them.

Icons, width, and height that are relative to our Design System or that have sizes based on calculations using our spacing variables must also use [Atomium tokens](https://juntossomosmais.github.io/atomium/?path=/docs/getting-started-tokens--docs) instead of magic numbers.

**✅ Good:**

```scss
.logout__icon {
  height: var(--spacing-xxlarge);
  width: var(--spacing-xxlarge);
}

.icon__button {
  min-width: var(--spacing-giant);
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
```

### 5.6.2 Images and well-defined components
If you are using an image or a component that has a specific design size and its dimensions vary at most between desktop/mobile, use the exact value for it:

**✅ Good:**

```scss
.shopfrom__banner {
  height: 900px;
  width: 480px;
  
  @media (min-width: 991px) {
    height: 740px;
    width: 240px;
  }
}
```

**❌ Bad:**

```scss
.shopfrom__banner {
  height: calc(4 * var(--spacing-xxxlarge));
  width: calc(2 * var(--spacing-giant));
}
}

.shopfrom__banner {
  height: 480px;
  width: 170px;
  
  @media (max-width: 746px) {
    height: 740px;
    width: 240px;
  }
  
  @media (max-width: 991px) {
    height: 900px;
    width: 320px;
  }
  
  @media (max-width: 1024px) {
    height: 980px;
    width: 300px;
  }
}
```

## 5.7 Shorthand Properties Guidelines

**Avoid partial shorthands** that set different values for different sides. Use **complete shorthands** when all sides get the same value.

**✅ Good (Complete shorthand - all sides same value):**

```scss
.element {
  margin: var(--spacing-base);
  padding: var(--spacing-large);
}
```

**✅ Good (Individual properties when needed):**

```scss
.element {
  margin-left: auto;
  margin-right: auto;
}
```

**❌ Bad (Partial shorthand - different values):**

```scss
.element {
  margin: 0 auto;
  padding: var(--spacing-base) 0;
}
```

## 5.8 CSS Modules

CSS Modules provide locally scoped CSS by automatically generating unique class names. This prevents style conflicts and improves maintainability.

### 5.8.1 File Naming Convention

Use `.module.scss` extension for CSS Module files:

**✅ Good:**

```
ComponentName/
├── ComponentName.tsx
└── ComponentName.module.scss
```

**❌ Bad:**

```
ComponentName/
├── ComponentName.tsx
└── ComponentName.scss
```

### 5.8.2 Import Convention

Import SCSS modules using the alias `S` for consistency:

**✅ Good:**

```tsx
import S from './HomePage.module.scss'

const HomePage = () => (
  <div className={S.Container}>
    <h1 className={S.Title}>Welcome</h1>
  </div>
)
```

**❌ Bad:**

```tsx
import styles from './HomePage.module.scss'
import * as css from './HomePage.module.scss'
```

### 5.8.3 Class Naming in CSS Modules

Use PascalCase for CSS Module class names to match React component conventions:

**✅ Good:**

```scss
.PageHeader {
  display: flex;
}

.Title {
  font-weight: bold;
}

.Active {
  background-color: var(--color-primary-500);
}
```

**❌ Bad:**

```scss
.page-header {
  display: flex;
}

.pageHeader {
  font-weight: bold;
}

.page_header {
  display: flex;
}

.PageHeader__Title {
  font-weight: bold;
}

.PageHeader--active {
  background-color: var(--color-primary-500);
}
```

## 5.9 Design Tokens

Design tokens are centralized design variables that ensure consistency across your application. Always use design tokens instead of hardcoded values.

### 5.9.1 Use Design Tokens Instead of Hardcoded Values

**ALWAYS use design tokens instead of hardcoded CSS units** (`rem`, `em`, `px`) for spacing, colors, typography, and other design properties.

**✅ Good:**

```scss
.Container {
  padding: var(--spacing-xxlarge);
  margin-bottom: var(--spacing-base);
  font-size: var(--font-size-body-medium);
  border-radius: var(--border-radius-small);
  background-color: var(--color-neutral-white);
}

.Button {
  padding: var(--spacing-xsmall) var(--spacing-large);
  gap: var(--spacing-base);
  box-shadow: 0 0 0 var(--spacing-xxsmall) var(--color-primary-200);
  z-index: var(--zindex-100);
}
```

**❌ Bad:**

```scss
.Container {
  padding: 2rem;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
}

.Button {
  padding: 0.75rem 1.5rem;
  gap: 1rem;
  box-shadow: 0 0 0 2px #e3f2fd;
  z-index: 100;
}
```

### 5.9.2 Available Design Token Categories

**Spacing**: `--spacing-xxsmall`, `--spacing-xsmall`, `--spacing-small`, `--spacing-base`, `--spacing-medium`, `--spacing-large`, `--spacing-xlarge`, `--spacing-xxlarge`, `--spacing-xxxlarge`, `--spacing-giant`, `--spacing-xgiant`

**Colors**: `--color-neutral-*`, `--color-brand-primary-*`, `--color-brand-secondary-*`, `--color-contextual-*`

**Typography**: `--font-size-*`, `--font-weight-*`, `--font-family-*`

**Border Radius**: `--border-radius`, `--border-radius-small`, `--border-radius-medium`, `--border-radius-large`, `--border-radius-full`

**Shadows**: `--shadow-*`

**Z-index**: `--zindex-1`, `--zindex-5`, `--zindex-10`, `--zindex-100`, `--zindex-1000`, `--zindex-overlay`

### 5.9.3 Acceptable Exceptions

The following hardcoded values are acceptable:

- Content width constraints (e.g., `max-width: 400px`)
- Standard breakpoint values (e.g., `768px` in media queries)
- Minimal border widths (e.g., `1px` borders)
- Z-index calculations using design tokens (e.g., `calc(var(--zindex-100) + 1)`)

## 5.10 Modern CSS Properties

Embrace modern CSS features that improve maintainability, performance, and user experience. These properties provide better internationalization support, cleaner code, and enhanced responsive design capabilities.

### 5.10.1 Logical Properties

Use logical properties instead of physical properties for better internationalization and writing-mode support.

**✅ Good (Logical Properties):**

```scss
.element {
  margin-inline: var(--spacing-base);
  margin-block: var(--spacing-large);
  padding-inline-start: var(--spacing-small);
  padding-inline-end: var(--spacing-medium);
  border-inline-start: 1px solid var(--color-neutral-300);
  inset-inline-start: 0;
}

.container {
  width: min(100%, 75ch);
  margin-inline: auto;
}
```

**❌ Bad (Physical Properties):**

```scss
.element {
  margin-left: var(--spacing-base);
  margin-right: var(--spacing-base);
  margin-top: var(--spacing-large);
  margin-bottom: var(--spacing-large);
  padding-left: var(--spacing-small);
  padding-right: var(--spacing-medium);
  border-left: 1px solid var(--color-neutral-300);
  left: 0;
}

.container {
  width: 100%;
  max-width: 75ch;
  margin-left: auto;
  margin-right: auto;
}
```

**Available Logical Properties:**
- `margin-inline`, `margin-block`, `margin-inline-start`, `margin-inline-end`
- `padding-inline`, `padding-block`, `padding-inline-start`, `padding-inline-end`
- `border-inline`, `border-block`, `border-inline-start`, `border-inline-end`
- `inset-inline`, `inset-block`, `inset-inline-start`, `inset-inline-end`

### 5.10.2 Layout Properties

Use modern layout properties for better responsive design and cleaner code.

**✅ Good:**

```scss
.card {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-large);
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-base);
}

.centered {
  display: grid;
  place-items: center;
}
```

**❌ Bad:**

```scss
.card {
  width: 100%;
  height: 56.25%; /* 16:9 ratio calculation */
}

.grid {
  display: flex;
  flex-wrap: wrap;
  margin: calc(var(--spacing-large) * -0.5);
}

.grid-item {
  flex: 1 1 250px;
  margin: calc(var(--spacing-large) * 0.5);
}

.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 5.10.3 Typography Properties

Use modern typography properties for better readability and performance.

**✅ Good:**

```scss
.heading {
  text-wrap: balance;
  font-size: clamp(1.5rem, 4vw, 3rem);
}

.body-text {
  text-wrap: pretty;
  line-height: 1.6;
}

.code {
  font-family: var(--font-family-mono);
  font-variant-numeric: tabular-nums;
}

.price {
  font-variant-numeric: oldstyle-nums;
}
```

**❌ Bad:**

```scss
.heading {
  /* No text balancing */
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
}

.body-text {
  /* No text wrapping control */
  line-height: 1.6;
}
```

### 5.10.4 Modern Selectors

Use modern CSS selectors for cleaner and more maintainable code.

**✅ Good:**

```scss
/* :is() for grouping selectors */
:is(h1, h2, h3, h4, h5, h6) {
  font-weight: var(--font-weight-bold);
  text-wrap: balance;
}

/* :where() for zero-specificity grouping */
:where(ul, ol) :where(ul, ol) {
  margin-block: 0;
}

/* :has() for parent selection */
.card:has(.card__image) {
  display: grid;
  grid-template-rows: auto 1fr;
}

.form:has(:invalid) .submit-button {
  opacity: 0.5;
  pointer-events: none;
}

/* :not() with complex selectors */
.button:not(:is(.button--disabled, .button--loading)):hover {
  background-color: var(--color-primary-600);
}
```

**❌ Bad:**

```scss
/* Repetitive selectors */
h1, h2, h3, h4, h5, h6 {
  font-weight: var(--font-weight-bold);
}

ul ul, ul ol, ol ul, ol ol {
  margin-top: 0;
  margin-bottom: 0;
}

/* No parent-based styling without JavaScript */
.card.has-image {
  display: grid;
  grid-template-rows: auto 1fr;
}
```

### 5.10.5 CSS Layers

Use CSS `@layer` for better style organization and cascade control.

**✅ Good:**

```scss
@layer reset, base, components, utilities;

@layer reset {
  *, *::before, *::after {
    box-sizing: border-box;
  }
}

@layer base {
  body {
    font-family: var(--font-family-base);
    line-height: 1.6;
  }
}

@layer components {
  .button {
    padding: var(--spacing-small) var(--spacing-large);
    border-radius: var(--border-radius-small);
  }
}

@layer utilities {
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
}
```

**❌ Bad:**

```scss
/* No layer organization - specificity battles */
.button {
  padding: var(--spacing-small) var(--spacing-large);
}

.form .button {
  padding: var(--spacing-xsmall) var(--spacing-medium); /* Override with specificity */
}

.button.button--small {
  padding: var(--spacing-xsmall) var(--spacing-medium) !important; /* Using !important */
}
```

### 5.10.6 Container Queries

Use container queries for component-based responsive design.

**✅ Good:**

```scss
.card-container {
  container-type: inline-size;
  container-name: card;
}

.card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-base);
}

@container card (min-width: 300px) {
  .card {
    flex-direction: row;
    align-items: center;
  }
}

@container card (min-width: 500px) {
  .card {
    gap: var(--spacing-large);
  }
  
  .card__content {
    font-size: var(--font-size-body-large);
  }
}
```

**❌ Bad:**

```scss
.card {
  display: flex;
  flex-direction: column;
}

/* Using viewport-based media queries for component behavior */
@media (min-width: 768px) {
  .card {
    flex-direction: row;
  }
}
```

### 5.10.7 Modern Units

Use modern CSS units for better responsive design and accessibility.

**✅ Good:**

```scss
.container {
  width: min(100%, 75ch); /* Content-based width */
  margin-inline: auto;
}

.responsive-text {
  font-size: clamp(1rem, 2.5vw, 1.5rem); /* Fluid typography */
}

.dynamic-spacing {
  gap: clamp(var(--spacing-small), 3vw, var(--spacing-large));
}

.sidebar {
  width: max(250px, 25%); /* Minimum width with percentage */
}

.responsive-grid {
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
}

.icon-size {
  width: 1cap; /* Based on capital letter height */
  height: 1cap;
}
```

**❌ Bad:**

```scss
.container {
  max-width: 1200px; /* Fixed pixel values */
  margin: 0 auto;
}

.responsive-text {
  font-size: 16px;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
  
  @media (min-width: 1024px) {
    font-size: 24px;
  }
}

.dynamic-spacing {
  gap: 16px;
  
  @media (min-width: 768px) {
    gap: 24px;
  }
}
```

**Modern Units Reference:**
- **`ch`**: Character width (width of "0" in current font)
- **`cap`**: Capital letter height  
- **`ic`**: Ideographic character width
- **`lh`**: Line height
- **`vi/vb`**: Viewport inline/block dimensions
- **`dvh/svh/lvh`**: Dynamic/Small/Large viewport height
- **`clamp()`**: Fluid values with min/max constraints
- **`min()`**: Minimum of multiple values
- **`max()`**: Maximum of multiple values

### 5.10.8 Best Practices for Modern CSS

**Do:**
- Use logical properties for better internationalization
- Prefer `aspect-ratio` over padding-based aspect ratios
- Use `text-wrap: balance` for headings and `text-wrap: pretty` for body text
- Implement container queries for truly responsive components
- Use `:is()` and `:where()` to reduce selector repetition
- Organize styles with `@layer` for predictable cascade
- Use modern units like `ch`, `cap`, and viewport units
- Leverage `clamp()` for fluid typography and spacing

**Don't:**
- Mix physical and logical properties in the same codebase
- Rely on viewport media queries when container queries are more appropriate
- Use `!important` when proper layering could solve specificity issues
- Ignore browser support for critical features (use progressive enhancement)
- Overuse `:has()` as it can impact performance if misused


**[⬆ back to summary](#-summary)**

## 6. JavaScript

- 6.0 [JavaScript Eslint](#60-javascript-eslint)
- 6.1 [Javascript Code Syntax](#61-javascript-code-syntax)
- 6.2 [Variables](#62-variables)
- 6.3 [Descriptive validations (if)](#63-descriptive-validations-if)
- 6.4 [Avoid multiple if's](#64-avoid-multiple-ifs)
- 6.5 [Code Comments](#65-code-comments)
- 6.6 [Avoid errors while destructuring](#66-avoid-errors-while-destructuring)
- 6.7 [Prefer early return](#67-prefer-early-return)

### 6.0 JavaScript Eslint

We use [ESLint](https://eslint.org/) to validate our code, and we have a [shared rule to validate this](https://github.com/juntossomosmais/time-out-market/tree/main/packages/linters#eslint)

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

Always use single quotes or template literals.

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

Add empty lines between blocks of code.

**✅ Good:**

```js
const foo = () => {
  // do something
}

const bar = () => {
  // do something
}
```

Add empty lines between blocks of `if` statements.

**✅ Good:**

```js
if (foo) {
  // do something
}

if (bar) {
  // do something
}
```

**❌ Bad:**

```js
if (foo) {
  // do something
}
if (bar) {
  // do something
}
```

Add empty lines before return statements.

**✅ Good:**

```js
const foo = () => {
  const bar = 'bar'

  return bar
}
```

**❌ Bad:**

```js
const foo = () => {
  const bar = 'bar'
  return bar
}
```

**❌ Bad:**

```js
const foo = () => {
  // do something
}
const bar = () => {
  // do something
}
```

Remove empty lines between groups of `const`, `let` and `var` declarations, but use empty lines between the groups.

**✅ Good:**

```js
const foo = 'foo'
const bar = 'bar'

let qux = 'qux'
let quux = 'quux'
```

**❌ Bad:**

```js
const foo = 'foo'

const bar = 'bar'

let qux = 'qux'

let quux = 'quux'
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

Create constants to describe validations.

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

Use an execution map instead of multiple if validations.

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

It's a common mistake to destructure while the object is null or undefined, as the destructuring will throw an error.

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
- 7.10 [Enforce Boolean Attribute Notation in JSX](#710-enforce-boolean-attribute-notation-in-jsx)

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
If possible, divide them into sub-components to improve understanding and code readability.

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

Use PascalCase as a convention for styled-components.

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

Import Styled Components as `S`.

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

When we know all possible values, we can use enums to achieve better readability and control.

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

export type SelectOption = { value: string; label: string, id: string, };

export type SelectProps = TextFieldProps & {
  options: SelectOption[];
};

const Select = ({ options, ...props }: SelectProps) => {
  return (
    <TextField {...props}>
      {options.map((option) => (
        <MenuItem key={option.id} value={option.value}>
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

export type SelectOption = { value: string; label: string, id: string, };

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
        <MenuItem key={option.id} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
```

### 7.9 Conditional Rendering

#### 7.9.1 Using short circuit

When we only need to validate a logical case and return a component, we can directly use the short circuit.

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

When we need to validate two logical cases and return a component in both cases, we can use the ternary operator instead of if...else.

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

### 7.10 Enforce Boolean Attribute Notation in JSX

Consistently pass the value for boolean attributes in JSX to ensure clarity and readability.

**✅ Good:**

```tsx
<Input type="text" disabled={true} />
```

**❌ Bad:**

```tsx
<Input type="text" disabled />
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

### 8.2 Use Computed for real-time updates

If you need to listen to data changes, use computed properties instead of methods.

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

Write tests with the alias "it" instead of the "test" method.

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

To get components during tests, we use `test-id` custom HTML attributes with unique IDs and our own convention deeply inspired by CSS's BEM.
To define the `test-id` for a component, use the following structure: `[page-name||component-name]__[element-type]--[type]`

**✅ Good:**

- forgot-password__input--email
- header__select--cnpjList
- login__button--forgot-password

**❌ Bad:**

- forgot-email-input
- header__cnpjList
- button--forgot-password

### 10.3 Selecting component

To select a component in order to test a behavior or trigger any event, we must use our `test-id` attribute to select it.

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
  - 11.2.1 [PascalCase](#1121-pascalcase)
  - 11.2.2 [Prefix for Type, Interface, and Enum](#1122-prefix-for-type-interface-and-enum)
- 11.3 [Exporting types](#113-exporting-types)
- 11.4 [Types within a file](#114-types-within-a-file)
- 11.5 [Increase legible](#115-increase-legible)
- 11.6 [Type or Interface](#116-type-or-interface)

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

#### 11.2.1 PascalCase

For convention, use PascalCase for type names.

**✅ Good:**

```ts
type TMyBeautifulType = {
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

The same applies to Enum keys.

**✅ Good:**

```ts
enum EUserResponse {
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

#### 11.2.2 Prefix for Type, Interface, and Enum

All Type, Interface, and Enum names must include a prefix to improve readability and consistency:
- **Type**: Prefix with `T`
- **Interface**: Prefix with `I`
- **Enum**: Prefix with `E`

**✅ Good:**

```ts
type TMyBeautifulType = {
  name: string
  age: number
}

interface IOrderList {
  orderNumber: number
  seller: string
}

enum EUserResponse {
  NotSuccess = 0,
  Success = 1,
}
```

**❌ Bad:**

```ts
type MyBeautifulType = {
  name: string
  age: number
}

interface OrderList {
  orderNumber: number
  seller: string
}

enum UserResponse {
  NotSuccess = 0,
  Success = 1,
}
```

### 11.3 Exporting types

Do not export types/functions unless you need to use it across multiple components.

### 11.4 Types within a file

Within a file, type definitions should come first.

**✅ Good:**

```ts
// imports...

type TMyBeautifulType = {
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

### 11.5 Increase legibility

Create a type to increase legibility.

**✅ Good:**

```ts
type TPersonType = {
  name: string
  age: number
  birthDate: string
};

const Person = ({ name, age, birthDate }: TPersonType) => {
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


### 11.6 Type or Interface
We use `type` when its usage is inside the same file and `interface` when it is exported.

**✅ Good:**

```ts
type TProductType = {
  name: string
  code: number
  value: string
};

export interface IOrderList {
 orderNumber: number
 seller: string
 products: TProductType[]
}
```

**❌ Bad:**

```ts
interface ProductType {
  name: string
  code: number
  value: string
};

export type OrderList = {
 orderNumber: number
 seller: string
 products: ProductType[]
}
```

We follow the principle the official [TypeScript doc](https://www.typescriptlang.org/play#example/types-vs-interfaces):
> _For publicly exposed types, it's a better call to make them an interface._



