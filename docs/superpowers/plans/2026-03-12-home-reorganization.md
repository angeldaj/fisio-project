# Home Reorganization Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split the homepage into focused section components and move static content into a dedicated data module without changing the current design.

**Architecture:** `app/page.tsx` becomes a thin composer that renders homepage sections from `components/home`. Static arrays and text move to `data/home.ts`, and repeated UI blocks are isolated into a few page-scoped subcomponents.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS 4

---

## Chunk 1: Content Extraction

### Task 1: Create homepage data module

**Files:**
- Create: `data/home.ts`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create typed content exports**

Add exported arrays/objects for navigation, stats, services, process steps, credentials, contact items, and schedule.

- [ ] **Step 2: Move inline content into the new module**

Copy static homepage content out of `app/page.tsx` and normalize labels/ids.

- [ ] **Step 3: Verify import surface**

Ensure content can be imported cleanly by section components without circular dependencies.

- [ ] **Step 4: Commit**

```bash
git add data/home.ts app/page.tsx
git commit -m "refactor: extract home page content"
```

## Chunk 2: Section Components

### Task 2: Create page-scoped section components

**Files:**
- Create: `components/home/navbar.tsx`
- Create: `components/home/hero.tsx`
- Create: `components/home/services.tsx`
- Create: `components/home/process.tsx`
- Create: `components/home/about.tsx`
- Create: `components/home/cta-banner.tsx`
- Create: `components/home/contact.tsx`
- Create: `components/home/footer.tsx`

- [ ] **Step 1: Split markup by section**

Move each major section from `app/page.tsx` into its own component file.

- [ ] **Step 2: Wire data imports**

Use `data/home.ts` for repeated content instead of inline arrays.

- [ ] **Step 3: Keep JSX output stable**

Preserve ids, classes, anchor targets, and section order.

- [ ] **Step 4: Commit**

```bash
git add components/home app/page.tsx
git commit -m "refactor: split homepage into sections"
```

## Chunk 3: Reusable Subcomponents

### Task 3: Extract repeated internal UI

**Files:**
- Create: `components/home/section-heading.tsx`
- Create: `components/home/service-card.tsx`
- Create: `components/home/contact-form.tsx`
- Create: `components/home/contact-info.tsx`
- Modify: `components/home/services.tsx`
- Modify: `components/home/contact.tsx`
- Modify: `components/home/about.tsx`

- [ ] **Step 1: Extract section heading**

Replace repeated title/description blocks where the shared structure already matches.

- [ ] **Step 2: Extract service and contact subpieces**

Move repeated card/form/sidebar markup into focused components.

- [ ] **Step 3: Re-check component boundaries**

Keep logic shallow and page-scoped; avoid introducing generic UI abstractions.

- [ ] **Step 4: Commit**

```bash
git add components/home
git commit -m "refactor: extract reusable home subcomponents"
```

## Chunk 4: Page Composition And Validation

### Task 4: Simplify page entrypoint and verify

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Reduce `app/page.tsx` to composition only**

Render the section components in order inside the root container.

- [ ] **Step 2: Run lint**

Run: `npm run lint`

Expected: command succeeds without ESLint errors.

- [ ] **Step 3: Review for behavior regressions**

Confirm section ids, links, and form fields still render as before.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx components/home data/home.ts
git commit -m "refactor: reorganize homepage structure"
```
