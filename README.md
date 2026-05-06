# Darpan Landing Page

Darpan is a reconciliation workspace landing page built with TanStack Start. The site presents Darpan's core product flow: source connections, schemas, saved reconciliation runs, RuleSets, generated outputs, testimonials, a call-to-action, and a Netlify-powered newsletter signup.

## Key Technologies

- TanStack Start and TanStack Router for the React application and file-based routing
- React 19 for UI components and form state
- Vite 7 for local development
- Tailwind CSS 4 for styling
- Lucide React for interface icons
- Netlify Forms for the newsletter signup workflow

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The Vite development server runs on port 3000 by default. For Netlify feature emulation, use Netlify Dev:

```bash
netlify dev
```

Netlify Forms are registered from `public/__forms.html` during deploy. Local form submissions should be verified on a Netlify deploy preview.
