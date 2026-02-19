# The Emerald Buddha

A bilingual (English / Thai) editorial website about Phra Kaew Morakot — the Emerald Buddha — covering its history, cultural significance, and place in Thai society.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 7** — build tool and dev server
- **React Router v7** — client-side routing
- **Tailwind CSS v4** — styling
- **pnpm** — package manager

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

## Commands

```bash
pnpm dev        # Start dev server with HMR
pnpm build      # Type-check then build to dist/
pnpm preview    # Preview the production build locally
pnpm lint       # Run ESLint
```

## Project structure

```
src/
  components/       # Navbar, Footer
  contexts/         # LanguageContext (EN/TH toggle)
  data/
    posts.ts        # All article content — edit this to add/update posts
  i18n/             # UI strings (types.ts, en.ts, th.ts)
  pages/
    PostPage.tsx    # Individual article page
  App.tsx           # Routes, HomePage, PostCard, Hero
public/
  images/           # Static images served at /images/*
    hero.jpg        # Hero section background
```

## Adding a new article

Open `src/data/posts.ts` and append to the `posts` array:

```ts
{
  id: 10,                          // unique, increment from last
  slug: 'your-url-slug',           // URL-safe, hyphens only → /history/your-url-slug
  category: 'history',             // 'history' | 'culture' | 'thai-society'
  image: '/images/your-photo.jpg', // optional — drop file in public/images/
  title: {
    en: 'English Title',
    th: 'หัวข้อภาษาไทย',
  },
  summary: {
    en: 'Short preview shown on the card.',
    th: 'สรุปสั้น ๆ ที่แสดงบนการ์ด',
  },
  body: {
    en: [
      'First paragraph.',
      'Second paragraph.',
    ],
    th: [
      'ย่อหน้าแรก',
      'ย่อหน้าที่สอง',
    ],
  },
},
```

- `body` can be left as `{ en: [], th: [] }` — the article page will show "Content coming soon."
- The post appears automatically in the correct section; display order follows the array order.

## Adding images

Place files in `public/images/`. They are served at `/images/filename.jpg`.

| Image | How to set |
|-------|-----------|
| Hero background | Change `HERO_IMAGE` constant in `src/App.tsx` |
| Post image (card + article page) | Set `image: '/images/filename.jpg'` on the post in `posts.ts` |

Images without a file set show a category-coloured placeholder automatically.

## Bilingual content

The language toggle (EN ↔ TH) is global. UI strings live in `src/i18n/en.ts` and `src/i18n/th.ts`; both must satisfy the `Translations` interface in `src/i18n/types.ts`. Article content (`title`, `summary`, `body`) is bilingual inline in `posts.ts`.

## Contributors

This project was built with assistance from **Claude Code** (Anthropic).

## Deployment

The site is a fully static SPA — no backend required.

```bash
pnpm build        # outputs to dist/
```

Upload `dist/` to any static host (Vercel, Netlify, GitHub Pages). Make sure the host is configured to redirect all routes to `index.html` for client-side routing to work.
