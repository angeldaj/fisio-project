# Brand Logo Usage Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Use the uploaded logo asset in the navbar and browser tab icon.

**Architecture:** Keep the current navbar composition, swap the placeholder mark for a `next/image` logo, and configure app metadata icons to point to the same asset in `public`.

**Tech Stack:** Next.js 16, React 19, TypeScript

---

## Chunk 1: Navbar Branding

### Task 1: Replace navbar placeholder mark

**Files:**
- Modify: `components/home/navbar.tsx`

- [ ] **Step 1: Import `next/image`**
- [ ] **Step 2: Render `public/logo.png` in place of the initials block**
- [ ] **Step 3: Keep spacing and text alignment stable**

## Chunk 2: Browser Icon

### Task 2: Wire metadata icon

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Add icon metadata**
- [ ] **Step 2: Point icon to `/logo.png`**

## Chunk 3: Validation

### Task 3: Verify project health

**Files:**
- Modify: `components/home/navbar.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Run `npm run lint`**
- [ ] **Step 2: Confirm navbar and favicon references are valid**
