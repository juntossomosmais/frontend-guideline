# Vue

## 8.1 Keys in lists

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

## 8.2 Use Computed for real time updates

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

## 8.3 Multi-word component names

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

## 8.4 Prop definitions

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

## 8.5 Vue property decorator

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
