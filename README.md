# Front-end - Guidelines

[![GitHub contributors](https://img.shields.io/github/contributors/juntossomosmais/frontend-guideline.svg)](https://github.com/juntossomosmais/frontend-guideline/graphs/contributors)

> "Every line of code should appear to be written by a single person, no matter the number of contributors." - Chinese Proverb.

The following document describes generic rules of writing in development languages that we use on our Front-end projects, that HTML, CSS, JavaScript, React and Vue

The idea of this repository is not to be a complete guideline, the target is just help developers who participate in our projects to be able to inform the coding standards used.

As this is a live document, some rules may not have been applied in old projects and changes can occur at any time.

## Summary

1. [General Code Patterns](#general-patterns)
2. [Commits](#commits)

<a name="general-patterns"></a>

## 1. General Code Patterns

### 1.1. Code Syntax

Use soft tabs with two spaces. You need to configure your editor for this.

```js
/* Positive example */
const obj = {
  prop: "value",
  prop2: "value2",
  prop3: "value3",
}

/* Counter example */
const obj = {
    prop: "value",
    prop2: "value2",
    prop3: "value3",
}
```

<a name="commits"></a>

## 2. Commits

In order to facilitate the contribution by anyone in a project, all commit messages must be in **english**.

We also use [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0/), that is, the commit message must be in the form of a sentence, with the first word being an actions, and the rest of the sentence an describe text.

```bash
// Positive example
git commit -m "feat: allow provided config object to extend other configs
"
git commit -m "docs: correct spelling of CHANGELOG"

git commit -m "feat(lang): add portuguese language"


// Counter example
git commit -m "Add placeholder on input"
```
