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
- Package manager: **pnpm** (v10.30.0)
- Entry: `index.html` → `src/main.tsx` → `src/App.tsx`

## TypeScript

`tsconfig.app.json` is strict with `noUnusedLocals`, `noUnusedParameters`, and `erasableSyntaxOnly`. The build runs `tsc -b` (project references) before Vite — type errors will fail the build.

## ESLint

`eslint.config.js` uses the flat config format with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`. Only `.ts`/`.tsx` files are linted; `dist/` is ignored.
