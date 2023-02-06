# General Code Patterns

- 1.1 [Code Syntax](#11-code-syntax)
- 1.2 [Refactoring](#12-refactoring)
- 1.3 [Imports](#13-imports)

## 1.1 Code Syntax

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

## 1.2 Refactoring

Refactoring makes part of JSMLover's way of being, doing it every day and task by task. We have good practices and conditions to do that, though.

```js
if(!isWholeCodeCoveraged) return
```

- We can only refactor codes that have tests (and that tests!), which means 100% coverage! This way, we can improve or code safely.

- Keep the current tests and make them pass!
Once the current code is tested and can be refactored. We must make sure that the new changes will not break the current tests.

## 1.3 Imports

If the data to be imported belongs to the **same module/scope**, use **relative path**.

## Relative Path Example

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

## Absolute Path Example

**`HeaderPopup.js`** importing an enum from **`src/enum/errors.js`**

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

**:information_source: Note:**

Is also a good practice to create an `index.js` file for exporting data belonging to the same folder, as we can see example above.

```js
export * from './errors'
export * from './pages'
export * from './routes'
export * from './environments'
```
