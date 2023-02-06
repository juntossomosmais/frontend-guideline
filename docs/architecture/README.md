# Architecture

The proper architecture for projects, and how to create and name files and folders.

- 2.1 [File Name](#21-file-name)
- 2.2 [Folder Architecture](#22-folder-architecture)

## 2.1 File Name

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

## 2.2 Folder Architecture

### Global Components/Helpers

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

### Scoped Components

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

### Scoped Files

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
