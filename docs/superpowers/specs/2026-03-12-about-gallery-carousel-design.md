# About Gallery Carousel Design

**Date:** 2026-03-12

**Goal:** Replace the static About image with a `shadcn/ui` carousel powered by gallery images in `public/gallery`, preserving the current section layout and styling.

## Approved Direction

- Use `shadcn/ui` carousel patterns on top of Embla.
- Source images from `public/gallery`.
- Enable autoplay continuously.
- Keep swipe interaction enabled.
- Show visible navigation arrows.
- Do not add dots or thumbnails for this version.

## Component Structure

- `components/ui/carousel.tsx`
  - Base carousel primitive adapted from `shadcn/ui`.
- `components/home/about-carousel.tsx`
  - Home-specific wrapper that renders gallery slides, autoplay, and arrows.
- `components/home/about.tsx`
  - Replaces the current single image with the new carousel component.
- `data/home.ts`
  - Exposes the gallery image paths and alt text.

## Visual Constraints

- Preserve the current `aspect-[3/4]` image container.
- Keep the decorative frame and experience badge already present in About.
- Make arrows visible but unobtrusive so the image area still feels editorial and clean.

## Behavior

- Autoplay loops continuously.
- Autoplay does not stop on hover or interaction.
- Users can still swipe manually on touch devices and click arrows on desktop.

## Validation

- The About section renders all gallery images.
- Carousel loops and advances automatically.
- Arrows are visible and clickable.
- `npm run lint` passes.
