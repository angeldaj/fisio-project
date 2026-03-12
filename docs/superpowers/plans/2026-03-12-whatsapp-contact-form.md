# WhatsApp Contact Form Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing contact form with a WhatsApp lead form that opens a prefilled chat using the visitor's name, selected service, and message.

**Architecture:** Centralize service options and WhatsApp number in `data/home.ts`, then convert the contact form into a client component that validates fields and redirects to `wa.me` with encoded text.

**Tech Stack:** Next.js 16, React 19, TypeScript

---

## Chunk 1: Shared Data

### Task 1: Add WhatsApp form config data

**Files:**
- Modify: `data/home.ts`

- [ ] **Step 1: Add exported service option list**
- [ ] **Step 2: Add exported WhatsApp contact number**
- [ ] **Step 3: Keep values aligned with current landing content**

## Chunk 2: Form Behavior

### Task 2: Implement WhatsApp submit flow

**Files:**
- Modify: `components/home/contact-form.tsx`

- [ ] **Step 1: Convert form to client component**
- [ ] **Step 2: Remove email and phone fields**
- [ ] **Step 3: Add controlled state for name, service, and message**
- [ ] **Step 4: Build encoded WhatsApp URL on submit**
- [ ] **Step 5: Open WhatsApp in a new tab**

## Chunk 3: Validation

### Task 3: Verify and clean up

**Files:**
- Modify: `components/home/contact-form.tsx`

- [ ] **Step 1: Add required validation**
- [ ] **Step 2: Run `npm run lint`**
- [ ] **Step 3: Confirm message format matches approved copy**
