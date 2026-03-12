# Home Reorganization Design

**Date:** 2026-03-12

**Goal:** Reorganize the current landing page into focused React components, extract static content into a shared data module, and keep the current visual design intact.

## Current State

- The full homepage lives in `app/page.tsx`.
- Section markup, repeated arrays, and display content are mixed in one file.
- There are clear section boundaries already present: navbar, hero, services, process, about, CTA, contact, and footer.

## Approved Direction

Use a simple, page-scoped structure:

- `components/home/*` for section components and small reusable subcomponents
- `data/*` for static homepage content
- `app/page.tsx` as a thin page composer

## File Structure

### Page composition

- `app/page.tsx`
  - Imports homepage sections and renders them in order.

### Homepage sections

- `components/home/navbar.tsx`
- `components/home/hero.tsx`
- `components/home/services.tsx`
- `components/home/process.tsx`
- `components/home/about.tsx`
- `components/home/cta-banner.tsx`
- `components/home/contact.tsx`
- `components/home/footer.tsx`

### Reusable homepage subcomponents

- `components/home/section-heading.tsx`
  - Shared heading block for sections that use accent line, title, and description.
- `components/home/service-card.tsx`
  - Card renderer for service items.
- `components/home/contact-form.tsx`
  - Contact form markup.
- `components/home/contact-info.tsx`
  - Sidebar contact details and opening hours.

### Static content

- `data/home.ts`
  - Navigation links
  - Hero stats
  - Services
  - Process steps
  - Credentials
  - Contact details
  - Schedule

## Responsibilities

- Section components own layout and composition for one page region.
- Subcomponents own repeated internal UI blocks.
- `data/home.ts` owns static display content previously declared inline inside JSX.
- `app/page.tsx` does not contain business content arrays or section markup details.

## Constraints

- Preserve the current visual output and Tailwind class usage as much as practical.
- Do not introduce generic abstraction layers beyond what is already repeated.
- Keep the structure simple and easy to maintain for a single marketing page.

## Validation

- The app should render the same sections in the same order.
- `npm run lint` should pass after the split.
