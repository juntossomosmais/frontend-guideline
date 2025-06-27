# Frontend Development Guidelines for GitHub Copilot

> Instructions for GitHub Copilot on following JSM frontend coding standards across all repositories.

## Code Generation Rules

When generating code, GitHub Copilot must:

- Use 2 spaces for indentation (never tabs or 4 spaces)
- Never add semicolons in JavaScript/TypeScript
- Use single quotes for strings, template literals for interpolation
- Use strict equality (`===`) instead of loose equality (`==`)
- Suggest conventional commit messages in lowercase format
- Always prioritize readability and maintainability

## File Naming & Architecture

### File Names

- Use explicit component names: `UserProfile/UserProfile.tsx` (not `index.tsx`)
- CSS Modules: `ComponentName.module.scss`
- Stories: `ComponentName.stories.mdx`
- Tests: `ComponentName.spec.ts`

### Imports

- Same module/scope: Use relative paths (`../../../styles`)
- Different modules: Use absolute paths (`~/components/Button/Button` or `@/components/Button/Button`)
- Avoid barrel files - use direct imports for better tree-shaking
- Import CSS modules as `S`: `import S from './Component.module.scss'`
- Import styled-components as `S`: `import * as S from './styles'`

### Folder Structure

- Global components: `src/components/`
- Page-specific components: `pages/PageName/components/`
- Page-specific utilities: `pages/PageName/{utils,helpers,hooks}/` (camelCase)
- Move to global if used in multiple contexts

## HTML Guidelines

- Use semantic tags (`section`, `article`) for component wrappers, not `div`
- Start with `h1` in components (proper heading hierarchy)
- Use `data-testid` attributes: `[component-name]__[element-type]--[modifier]`

## CSS Guidelines

### Syntax & Structure

- One declaration per line, alphabetical order
- Lowercase class names with dashes: `.page-header`
- Follow BEM when needed: `.block__element--modifier`
- No IDs for styling, only classes
- Avoid element selectors and deep nesting
- Use mobile-first media queries within component scope

### Design Tokens (MANDATORY)

When writing CSS, GitHub Copilot must:

- **NEVER** suggest hardcoded values like `16px`, `#ffffff`, `1rem`
- **ALWAYS** use design tokens: `var(--spacing-base)`, `var(--color-primary-500)`
- Suggest these token categories:
  - Spacing: `var(--spacing-xxsmall)` to `var(--spacing-xgiant)`
  - Colors: `var(--color-neutral-*)`, `var(--color-primary-*)`
  - Typography: `var(--font-size-*)`, `var(--font-weight-*)`
  - Border radius: `var(--border-radius-small)`
  - Z-index: `var(--zindex-100)`

### CSS Modules

- File naming: `.module.scss`
- Import as `S`: `import S from './Component.module.scss'`
- Use PascalCase class names: `.Container`, `.Title`, `.Active`

### Modern CSS (Use When Appropriate)

- Logical properties: `margin-inline`, `padding-block`
- Modern layout: `aspect-ratio`, `gap`, `place-items: center`
- Modern units: `clamp()`, `min()`, `max()`, `ch`, `cap`
- Modern selectors: `:is()`, `:where()`, `:has()`
- Typography: `text-wrap: balance` (headings), `text-wrap: pretty` (body)

### Shorthand Rules

- Use complete shorthands only when all sides have same value
- Use individual properties when values differ
- Never use partial shorthands like `margin: 0 auto`

## JavaScript Guidelines

### Code Style

- No semicolons
- Single quotes or template literals
- Empty lines: between functions, before returns, between declaration groups
- Meaningful English variable names
- Use `const` by default, `let` when reassignment needed

### Best Practices

- Create descriptive constants for validations: `const hasFullUserName = user.firstName && user.lastName`
- Use execution maps instead of multiple ifs
- Prefer early returns over nested conditions
- Safe destructuring: `const { age } = user || {}`
- Comments should explain "why", not "how"

## React Guidelines

When generating React components, GitHub Copilot must:

### Component Structure

- Always use `item.id` for keys in lists (never suggest array index)
- Generate functional state updates: `setCount(prev => prev + 1)`
- Include all dependencies in useEffect arrays
- Suggest breaking large components into smaller sub-components
- Use `data-testid` attributes: `[component-name]__[element-type]--[modifier]`

### Styling Integration

- Import styled-components as `S`: `import * as S from './styles'`
- Use PascalCase for styled-component names: `S.CustomText`
- Import CSS modules as `S`: `import S from './Component.module.scss'`

### Patterns

- Use enums/constants instead of string comparisons
- Spread component props: `<TextField {...props}>`
- Short circuit for single conditions: `showWelcome && <Welcome />`
- Ternary for two conditions: `showWelcome ? <Welcome /> : <Dashboard />`
- Always specify boolean attributes explicitly: `disabled={true}`

## TypeScript Guidelines

When generating TypeScript code, GitHub Copilot must:

### Naming Conventions

- Always prefix types with `T`: `TUserData`, `TApiResponse`
- Always prefix interfaces with `I`: `IUserData`, `IApiResponse`
- Always prefix enums with `E`: `EUserStatus`, `EApiState`
- Use PascalCase for all type names
- Never suggest `any` type - use `unknown` instead

### Type Organization

- Define types at the top of files
- Use `type` for internal file usage
- Use `interface` for exported types
- Avoid `any` - use `unknown` when necessary
- Create explicit types for better readability

### Structure

```typescript
// imports...

type TInternalType = {
  name: string;
  age: number;
};

export interface IExportedInterface {
  data: TInternalType[];
}

// component code...
```

## Vue Guidelines (When Applicable)

- Use `item.id` for keys in v-for loops
- Use computed properties for reactive data
- Multi-word component names: `TodoItem` (not `Todo`)
- Detailed prop definitions with types
- Use `Vue.extend()` instead of property decorators

## Testing Guidelines

- Use `it()` instead of `test()`
- Select elements by `data-testid` attributes
- Test ID format: `[component]__[element]--[modifier]`
- Example: `login__button--forgot-password`

## Git Commit Guidelines

- Use conventional commits in lowercase
- Format: `type: description`
- Examples: `feat: add user authentication`, `fix: resolve login issue`
- All commits and code in English

## Error Prevention

- Always validate props and data before use
- Use optional chaining: `user?.profile?.name`
- Provide fallbacks: `const name = user?.name || 'Anonymous'`
- Handle loading and error states in components
- Use TypeScript strict mode

## Performance Considerations

- Use direct imports instead of barrel files
- Implement proper React keys for lists
- Use CSS-in-JS or CSS Modules for scoped styles
- Prefer CSS Grid/Flexbox over complex layouts
- Use modern CSS features when browser support allows

## Code Review Guidelines

When reviewing code, GitHub Copilot should flag:

### Critical Issues

- Use of hardcoded values instead of design tokens
- Missing `data-testid` attributes in components
- Array index used as React keys
- Missing TypeScript prefixes (T, I, E)
- Semicolons in JavaScript/TypeScript
- Use of `any` type instead of `unknown`

### Suggestions

- Recommend breaking large components into smaller ones
- Suggest using enums instead of string literals
- Propose functional state updates for React
- Recommend proper error handling and fallbacks

---

_Follow these guidelines consistently across all JSM frontend projects. When in doubt, prioritize readability, maintainability, and consistency with existing patterns._
