# Hero Mobile Image Design

**Date:** 2026-03-12

**Goal:** Make the physiotherapist image visible on mobile by rendering it below the hero text while preserving the current desktop layout.

## Approved Direction

- Keep the existing desktop hero media block unchanged.
- Add a mobile-only version of the hero image below the text content.
- Keep the same visual language: framed image card, soft overlay, and supporting badge.

## Component Changes

- `components/home/hero.tsx`
  - Add a `lg:hidden` image block below the CTA area and before the stats.
  - Preserve the existing `hidden lg:flex` media block for desktop.

## Constraints

- Do not move the image into the background on mobile.
- Do not change the desktop hero composition.
- Keep the mobile block compact enough that the hero still feels intentional.

## Validation

- The hero image is visible on mobile and tablet below the text.
- The desktop hero remains visually unchanged.
- `npm run lint` passes.
