# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server with HMR
pnpm build        # Type-check and build for production (tsc -b && vite build)
pnpm lint         # Run ESLint
pnpm preview      # Preview production build locally
```

## Stack

- **React 19** with TypeScript, bundled by **Vite 7**
- **React Router v7** for client-side routing (`BrowserRouter`)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin
- Package manager: **pnpm** (v10.30.0)
- Entry: `index.html` → `src/main.tsx` → `src/App.tsx`

## TypeScript

`tsconfig.app.json` is strict with `noUnusedLocals`, `noUnusedParameters`, and `erasableSyntaxOnly`. The build runs `tsc -b` (project references) before Vite — type errors will fail the build.

## ESLint

`eslint.config.js` uses the flat config format with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`. Only `.ts`/`.tsx` files are linted; `dist/` is ignored.

Context files that export both a component and a hook (e.g. `LanguageContext.tsx`) use `// eslint-disable-next-line react-refresh/only-export-components` above the hook export.

## Project structure

```
src/
  components/
    Navbar.tsx          # Fixed top nav with language toggle; uses <Link>
    Footer.tsx          # Site footer; uses <Link>
  contexts/
    LanguageContext.tsx  # EN/TH language context — useLanguage() hook + LanguageProvider
  data/
    posts.ts            # 9 posts across 3 categories; each post has title/summary/body (bilingual)
  i18n/
    types.ts            # Translations interface + Language type
    en.ts               # English strings
    th.ts               # Thai strings
  pages/
    PostPage.tsx        # Article detail page — reads :category/:slug from URL params
  App.tsx               # BrowserRouter + Routes; HomePage assembly; PostCard + Section components
  main.tsx              # React root render
  index.css             # @import "tailwindcss" + global scroll-behavior
```

## Routing

| Path | Component | Notes |
|------|-----------|-------|
| `/` | `HomePage` (in App.tsx) | Hero + 3 content sections |
| `/:category/:slug` | `PostPage` | Article detail; 404 fallback if post not found |

Category values: `history` \| `culture` \| `thai-society`

## Data

`src/data/posts.ts` exports:
- `Post` interface — `id`, `slug`, `category`, `date`, `readMin`, `title`, `summary`, `body` (all bilingual `{ en, th }`)
- `posts` array — 9 posts (3 per category)
- `getPostsByCategory(category)` helper
- `BODY_EN` / `BODY_TH` — shared Lorem Ipsum placeholder arrays; **replace per post with real content**

## i18n

`useLanguage()` returns `{ language, t, toggleLanguage }`.
`t` is typed as `Translations` (see `src/i18n/types.ts`). Adding new UI strings requires updating `types.ts`, `en.ts`, and `th.ts`.

## Image sockets

Cards and PostPage use styled placeholder `<div>` elements for images. When adding real photos, replace the placeholder `<div>` with an `<img>` (or keep as background) — the container already has `aspect-video`, `rounded-xl/2xl`, and `overflow-hidden`.
