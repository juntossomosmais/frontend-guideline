![juntos-somos-devs](https://user-images.githubusercontent.com/3603793/131751022-fda4146c-9ada-4ad0-82fc-d8f0a73acd3f.png)

# Front-end - Guidelines

<a href="https://juntossomosmais.github.io/frontend-guideline/" target="_blank">Guideline Webpage</a>

[![GitHub contributors](https://img.shields.io/github/contributors/juntossomosmais/frontend-guideline.svg)](https://github.com/juntossomosmais/frontend-guideline/graphs/contributors)

> "Every line of code should appear to be written by a single person, no matter the number of contributors." - Chinese Proverb.

The following document describes generic rules of writing in development languages that we use on our Front-end projects, that HTML, CSS, JavaScript, React, and Vue

The idea of this repository is not to be a complete guideline, the target is just to help developers who participate in our projects to be able to inform the coding standards used.

As this is a live document, some rules may not have been applied in old projects and changes can occur at any time.

<a name="summary"></a>

## 📖 Summary

1. [General Code Patterns](#general-patterns)
2. [Git](#git)
3. [CSS](#css)
4. [JavaScript](#javascript)
5. [Storybook](#storybook)

___
   
<a name="general-patterns"></a>

## 1. General Code Patterns

- 1.1. [Code Syntax](#code-syntax) <br>
- 1.2. [Architecture](#architecture) <br>
  - 1.2.1 [Folder Structure](#architecture-folder) <br>
  - 1.2.2 [File Name](#architecture-files) <br>
  
<a name="code-syntax"></a>

### 1.1. Code Syntax

Use soft tabs with two spaces. You need to configure your editor for this.

**✅ Good:**
```js
const obj = {
  prop: "value",
  prop2: "value2",
  prop3: "value3",
}
```

**❌ Bad:**
```js 
const obj = {
    prop: "value",
    prop2: "value2",
    prop3: "value3",
}
```

<a name="architecture"></a>

### 1.2. Architecture

The proper architecture for projects, and how to create and name files and folders.



<a name="architecture-folder"></a>

#### 1.2.1 Folder Structure

**✅ Good:**

┃ ┣ 📂 component \
┃ ┃ ┣ 📂 UserProfile \
┃ ┃ ┣ 📜  UserProfile.scss \
┃ ┃ ┣ 📜  UserProfile.stories.mdx \
┃ ┃ ┣ 📂 components \
┃ ┃ ┣ ┣ 📂 PersonalInfo \
┃ ┃ ┣ ┣ 📂 UserPicture 


**❌ Bad:**

┃ ┣ 📂 component \
┃ ┃ ┣ 📂 UserProfile \
┃ ┃ ┣ 📂 PersonalInfo \
┃ ┃ ┣ 📂 UserPicture 


<a name="architecture-files"></a>

#### 1.2.2 File Name

**✅ Good:**
- UserProfile/UserProfile.vue
- UserProfile/index.js
- UserProfile/index.ts
- UserProfile/styles.js
- UserProfile/UserProfile.scss
- UserProfile/UserProfile.stories.mdx


**❌ Bad:**
- UserProfile/component.vue
- src/UserProfile.js
- UserProfile/component.ts
- UserProfile/style.scss
- UserProfileStyles.js
- UserProfile/UserProfile.mdx

 
**[⬆ back to summary](#summary)**

---

<a name="git"></a>

## 2. Git

- 2.1. [Commit Messages](#commit-messages) <br>

<a name="commit-messages"></a>

### 2.1. Commit Messages

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

**[⬆ back to summary](#summary)**

---

<a name="css"></a>
 
## 3. CSS

The tips above could be used in any CSS framework or preprocessor, like SCSS, Styled Components and etc

- 3.1. [CSS Code Syntax](#css-syntax) 
- 3.2. [CSS Declaration Order](#css-order) 
- 3.3. [CSS Class Names](#css-class-name)
- 3.4. [CSS Good Practices](#css-good-practices)
- 3.5. [CSS Media Queries](#css-media-queries) 
  
<a name="css-syntax"></a>

### 3.1. CSS Syntax

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
  color: #aaaaaa;
  margin: 0;
}
```

**❌ Bad:**
```scss
.selector-1 {
  color: #AAAAAA;
  margin: 0px;
}
```

<a name="css-order"></a>

### 3.2. CSS Declaration Order

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

<a name="css-class-name"></a>

### 3.3. CSS Class Names

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

<a name="css-good-practices"></a>

### 3.4. CSS Good Practices

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

<a name="css-media-queries"></a>

### 3.5 CSS Media Queries

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
 
**[⬆ back to summary](#summary)**

<a name="javascript"></a>

## 4. JavaScript

- 4.1. [Javascript Code Syntax](#javascript-syntax)
- 4.2. [Variables](#variables) <br>
- 4.3. [Descriptive validations (if)](#descriptive-validations) <br>

<a name="javascript-syntax"></a>

### 4.1. JavaScript Code Syntax

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

#### 4.2. Variables

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

#### 4.3. Descriptive validations (if)

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

**[⬆ back to summary](#summary)**


---

<a name="storybook"></a>

## 5. Storybook

- 5.1. [Story file](#storybook-file-name)

<a name="storybook-file-name"></a>

#### 5.1 Story file

Create a file with the same name of your component, or index, and with the suffix `.stories.mdx`.

**✅ Good:**
- Button.stories.mdx
- Dialog/index.stories.mdx

**❌ Bad:**
- Input.mdx
- Dialog/index.mdx

**[⬆ back to summary](#summary)**

---
