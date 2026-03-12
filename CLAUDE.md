# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (Next.js)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint (flat config, `eslint.config.mjs`)

## Tech Stack

- **Next.js 16** with App Router (React 19, TypeScript 5)
- **Tailwind CSS 4** via `@tailwindcss/postcss` plugin
- **ESLint 9** flat config with `core-web-vitals` and `typescript` presets

## Project Structure

- `app/` — Next.js App Router directory (pages, layouts, styles)
- `public/` — Static assets
- Path alias: `@/*` maps to project root (configured in `tsconfig.json`)

## Conventions

- Fonts: Geist Sans and Geist Mono loaded via `next/font/google`, exposed as CSS variables `--font-geist-sans` and `--font-geist-mono`
- Styling: Tailwind utility classes directly in JSX; global styles in `app/globals.css`
- TypeScript strict mode enabled
