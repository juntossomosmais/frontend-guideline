# CSS

The tips above could be used in any CSS framework or preprocessor, like SCSS, Styled Components and etc

- 5.1 [CSS Code Syntax](#51-css-syntax)
- 5.2 [CSS Declaration Order](#52-css-declaration-order)
- 5.3 [CSS Class Names](#53-css-class-names)
- 5.4 [CSS Good Practices](#54-css-good-practices)
- 5.5 [CSS Media Queries](#55-css-media-queries)

## 5.1 CSS Syntax

Keep one declaration per line.

**✅ Good:**

```scss
.selector-1,
.selector-2,
.selector-3 {
  /*...*/
}
```

**❌ Bad:**

```scss
.selector-1, .selector-2, .selector-3 {
  /*...*/
}
```

Separate each ruleset by a blank line.

**✅ Good:**

```scss
.selector-1 {
  /*...*/
}

.selector-2 {
  /*...*/
}
```

**❌ Bad:**

```scss
.selector-1 {
  /*...*/
}
.selector-2 {
  /*...*/
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

## 5.2 CSS Declaration Order

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

## 5.3 CSS Class Names

Keep class lowercase and use dashes to separate the classname.

**✅ Good:**

```scss
.page-header { /*...*/ }
```

**❌ Bad:**

```scss
.pageHeader { /*...*/ }
.page_header { /*...*/ }
```

Is a good idea follows a [BEM naming convention](http://getbem.com/introduction/) to avoid conflicts with other components. If you are using CSS-in-JS like a Styled-Component, you can use BEM if you need to nesting elements inside parent.

The main pattern is use single dash to element name, double underline to element block and double dash to style modification.

**✅ Good:**

```scss
/* Good */
.page-header__title { /*...*/ }
.page-header--active { /*...*/ }

.button--active { /*...*/ }
```

**❌ Bad:**

```scss
.page-header-title { /*...*/ }
.page-header-active { /*...*/ }

.active { /*...*/ }
.primary { /*...*/ }
```

Dashes and underline serve as natural breaks in related class. Prefix class based on the closest parent or base class.

**✅ Good:**

```scss
.nav { /*...*/ }
.nav__item { /*...*/ }
.nav__link { /*...*/ }
```

**❌ Bad:**

```scss
.item-nav { /*...*/ }
.link-nav { /*...*/ }
```

Avoid giving too short names for class and always choose meaningful names that provide the class function.

**✅ Good:**

```scss
/* Good */
.button { /*...*/ }
.page-header { /*...*/ }
.progress-bar { /*...*/ }
```

**❌ Bad:**

```scss
.s { /*...*/ }
.btn { /*...*/ }
.ph { /*...*/ }
.block { /*...*/ }
```

## 5.4 CSS Good Practices

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
.header { /*...*/ }
.section { /*...*/ }
```

**❌ Bad:**

```scss
#header { /*...*/ }
#section { /*...*/ }
```

Do not style directly the elements, it will create a lot of conflicts, always use classes instead.

**✅ Good:**

```scss
.form-control { /*...*/ }
.header { /*...*/ }
.section { /*...*/ }
```

**❌ Bad:**

```scss
input[type="text"] { /*...*/ }
header{}
section{}
```

Avoid nesting elements, because it decrease performance and increase the specificity of the CSS, always use classes instead.

**✅ Good:**

```scss
.navbar { /*...*/ }
.nav { /*...*/ }
.nav__item { /*...*/ }
.nav__link { /*...*/ }
```

**❌ Bad:**

```scss
.navbar ul { /*...*/ }
.navbar ul li { /*...*/ }
.navbar ul li a { /*...*/ }
```

## 5.5 CSS Media Queries

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
