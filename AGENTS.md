# AGENTS.md

This repository contains the Darpan marketing site, a TanStack Start application deployed on Netlify.

## Architecture

- `src/routes/__root.tsx` defines the root document, global metadata, and shared stylesheet import.
- `src/routes/index.tsx` contains the primary landing page, including hero, feature highlights, workflow, testimonials, CTA, and newsletter signup.
- `src/routes/faq.tsx` contains a lightweight FAQ route aligned with the Darpan reconciliation product story.
- `src/styles.css` imports Tailwind CSS 4 and defines the global typography and base page styling.
- `public/darpan-wordmark.svg` and `public/darpan-hero-light.png` are product assets sourced from the Darpan documentation repository.
- `public/__forms.html` is a static Netlify Forms registration file for React-rendered newsletter submissions.

## Key Technologies

- TanStack Start with file-based routes
- React 19 and TypeScript
- Tailwind CSS 4 utility classes
- Lucide React icons
- Netlify Forms for newsletter signup handling

## Coding Conventions

- Keep route components in `src/routes/` and use `createFileRoute`.
- Use TypeScript imports with `type` for React event types and other type-only values.
- Prefer Tailwind utilities for layout and local styling. Use `src/styles.css` only for global tokens, resets, and typography.
- Use existing assets from `public/` rather than remote image URLs in rendered UI.
- Keep form field names in React synchronized with `public/__forms.html`; Netlify validates submitted field names against the static registration form.
- Do not run production build commands during agent tasks. Build validation is handled by the surrounding Netlify workflow.

## Non-Obvious Decisions

The newsletter form posts to `/__forms.html` with `application/x-www-form-urlencoded` data because TanStack Start renders the visible form in React. Netlify must see a static HTML form at build time before it can register and process submissions.

The visual direction intentionally uses a restrained editorial system: parchment background, dark ink, a rust CTA color, yellow operational accents, serif display type, and monospaced labels. This was chosen to make Darpan feel like an operations-grade reconciliation product rather than a generic SaaS template.
