# AGENTS.md

This repository contains the Darpan marketing site, a one-page TanStack Start application deployed on Netlify.

## Architecture

- `src/routes/__root.tsx` defines the root document, metadata, and shared stylesheet import.
- `src/routes/index.tsx` contains the full one-page marketing surface.
- `src/styles.css` defines the Darpan-aligned theme tokens, typography, layout primitives, and responsive behavior.
- `public/darpan-wordmark.svg` is the primary local brand asset.

## Key Technologies

- TanStack Start with file-based routes
- React 19 and TypeScript
- Tailwind CSS 4
- Lucide React icons
- Netlify hosting

## Coding Conventions

- Keep the site one page unless the product direction explicitly changes.
- Preserve the Darpan app visual language: IBM Plex Mono, grayscale dark/light themes, low-radius panels, compact controls, and quiet operational surfaces.
- Use existing local assets from `public/` instead of remote image URLs.
- Keep marketing copy technically grounded in Darpan behavior: source setup, schemas, primary IDs, RuleSets, saved runs, generated output, Ask Darpan, and automation.
- Avoid fake testimonials, broad AI claims, and generic SaaS filler.
- Prefer anchored sections over adding new routes for near-term content.

## Non-Obvious Decisions

The first site version intentionally avoids a CMS, blog, newsletter form, and multi-page structure. The current job is to make `drpn.ai` feel like the public front door for the app while keeping the content tight enough to maintain from code.
