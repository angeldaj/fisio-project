# About Gallery Carousel Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `shadcn/ui` style carousel to the About section using images from `public/gallery`, with autoplay, swipe, and visible arrows.

**Architecture:** Add a reusable carousel primitive under `components/ui`, create a page-scoped `AboutCarousel` wrapper for gallery images and autoplay, and replace the fixed About image with that wrapper while keeping the existing layout intact.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Embla Carousel

---

## Chunk 1: Carousel Foundation

### Task 1: Add carousel dependencies and primitive

**Files:**
- Create: `components/ui/carousel.tsx`
- Create: `lib/utils.ts`
- Modify: `package.json`

- [ ] **Step 1: Install Embla and utility dependencies**
- [ ] **Step 2: Add the base carousel primitive**
- [ ] **Step 3: Add minimal shared `cn` utility**
- [ ] **Step 4: Confirm imports resolve**

## Chunk 2: About Integration

### Task 2: Build the About gallery wrapper

**Files:**
- Create: `components/home/about-carousel.tsx`
- Modify: `data/home.ts`
- Modify: `components/home/about.tsx`

- [ ] **Step 1: Add typed gallery image data**
- [ ] **Step 2: Render slides with `next/image`**
- [ ] **Step 3: Configure autoplay and visible arrows**
- [ ] **Step 4: Swap the static image for the carousel in About**

## Chunk 3: Validation

### Task 3: Verify behavior and lint

**Files:**
- Modify: `components/home/about-carousel.tsx`

- [ ] **Step 1: Check autoplay loop behavior**
- [ ] **Step 2: Verify swipe and arrow controls**
- [ ] **Step 3: Run `npm run lint`**
