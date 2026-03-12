# Hero Mobile Image Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show the hero image on small screens by adding a mobile-only image card below the hero text.

**Architecture:** Reuse the same visual structure already used for the desktop hero media, but render a compact `lg:hidden` variant in the text column so mobile gets the image without affecting the desktop layout.

**Tech Stack:** Next.js 16, React 19, TypeScript

---

## Chunk 1: Hero Layout

### Task 1: Add mobile-only hero media

**Files:**
- Modify: `components/home/hero.tsx`

- [ ] **Step 1: Add a mobile-only media block below the CTA**
- [ ] **Step 2: Keep desktop media block as-is**
- [ ] **Step 3: Preserve badge and framing in a compact layout**

## Chunk 2: Validation

### Task 2: Verify responsive behavior

**Files:**
- Modify: `components/home/hero.tsx`

- [ ] **Step 1: Check mobile visibility logic**
- [ ] **Step 2: Run `npm run lint`**
