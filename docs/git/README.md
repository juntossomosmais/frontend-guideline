# Git

## 3.1 Commit Messages

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
