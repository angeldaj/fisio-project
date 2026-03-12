# Brand Logo Usage Design

**Date:** 2026-03-12

**Goal:** Replace the placeholder navbar mark and browser tab icon with the uploaded brand asset in `public/logo.png`.

## Approved Direction

- Use `public/logo.png` as the complete brand image in the navbar.
- Use the same `public/logo.png` as the browser tab icon.
- Keep the existing navbar structure and text label.

## Component Changes

- `components/home/navbar.tsx`
  - Replace the square initials mark with `next/image` rendering `logo.png`.
- `app/layout.tsx`
  - Add icon metadata so the app uses `logo.png` in the browser tab.

## Constraints

- Do not crop the logo into an icon-only shape.
- Keep the navbar balanced and readable on desktop/mobile.
- Avoid changing unrelated copy or layout.

## Validation

- The navbar shows the uploaded logo image.
- The browser tab icon points to the same logo asset.
- `npm run lint` passes.
