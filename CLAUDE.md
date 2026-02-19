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
    posts.ts            # 9 posts across 3 categories; single source of truth for all content
  i18n/
    types.ts            # Translations interface + Language type
    en.ts               # English strings
    th.ts               # Thai strings
  pages/
    PostPage.tsx        # Article detail page — reads :category/:slug from URL params
  App.tsx               # BrowserRouter + Routes; HomePage assembly; Hero + PostCard + Section + ImageSocket
  main.tsx              # React root render
  index.css             # @import "tailwindcss" + global scroll-behavior
public/
  images/
    hero.jpg            # Hero section background (optional; falls back to gradient)
    *.jpg / *.png       # Post images — referenced via post.image in posts.ts
```

## Routing

| Path | Component | Notes |
|------|-----------|-------|
| `/` | `HomePage` (in App.tsx) | Hero + 3 content sections |
| `/:category/:slug` | `PostPage` | Article detail; "Content coming soon" if body is empty |

Category values: `history` \| `culture` \| `thai-society`

Nav links on the homepage use `href="#section-id"` (plain anchors). Nav links from other pages use `<Link to="/#section-id">` and `HomePage` has a `useEffect` that watches `location.hash` to scroll to the right section after navigation.

## Data — src/data/posts.ts

`Post` interface fields:

| Field | Type | Notes |
|-------|------|-------|
| `id` | `number` | Unique |
| `slug` | `string` | Used in URL `/:category/:slug` |
| `category` | `Category` | `'history'` \| `'culture'` \| `'thai-society'` |
| `date` | `string` | Display date (YYYY-MM-DD) |
| `readMin` | `number` | Estimated read time |
| `image` | `string?` | Optional — path from `public/`, e.g. `'/images/mythical-origins.jpg'` |
| `title` | `{ en, th }` | Bilingual |
| `summary` | `{ en, th }` | Shown on PostCard; bilingual |
| `body` | `{ en: string[], th: string[] }` | Each string = one paragraph; shown on PostPage |

**To add content for a post:** fill in its `body.en` and `body.th` arrays in `posts.ts`, and set `image` to the filename in `public/images/`.

## Images

All images go in `public/images/` and are referenced by path string (e.g. `'/images/hero.jpg'`).

| Image | Where to set | Notes |
|-------|-------------|-------|
| Hero background | `HERO_IMAGE` constant in `App.tsx` | Full-bleed, `opacity-30` over gradient; fades in on load |
| Post cover (card + page) | `image` field on each post in `posts.ts` | Optional; shows gradient placeholder when unset |

`ImageSocket` (in `App.tsx`) renders a real `<img>` when `src` is provided, or a category-tinted gradient placeholder (amber = history, violet = culture, sky = thai-society) when not.

## Animations

`Hero` has two fade-ins:
- **Background image** — `opacity-0 → opacity-30` driven by the `<img onLoad>` event (1000ms transition)
- **Text content** — `opacity-0 translate-y-4 → opacity-100 translate-y-0` triggered 80ms after mount (700ms ease-out)

The hero section has `id="hero"` for potential anchor-link use.

## i18n

`useLanguage()` returns `{ language, t, toggleLanguage }`.
`t` is typed as `Translations` (see `src/i18n/types.ts`). Adding new UI strings requires updating `types.ts`, `en.ts`, and `th.ts`.
