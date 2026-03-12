# WhatsApp Contact Form Design

**Date:** 2026-03-12

**Goal:** Convert the contact form into a lightweight WhatsApp lead form that opens a prefilled conversation to the business number.

## Approved Direction

- Keep only three fields:
  - Name
  - Service
  - Message
- Remove email and phone from the form.
- On submit, open WhatsApp using `wa.me` with a prefilled message.
- Use the contact number `584148866547`.

## Message Format

The WhatsApp message should be generated as:

`Hola, soy [Nombre]. Me interesa [Servicio]. Mensaje: [Mensaje]`

## Architecture

- `components/home/contact-form.tsx`
  - Becomes a client component with controlled state and submit handler.
- `data/home.ts`
  - Exposes service options and the WhatsApp number in one place.

## Validation

- Require all three fields before opening WhatsApp.
- Use browser-native validation or equivalent lightweight client-side validation.
- Keep the current visual style of the form.

## Validation Checklist

- Form only shows the three approved fields.
- Submitting opens the correct WhatsApp URL.
- Service labels render consistently with homepage content.
- `npm run lint` passes.
