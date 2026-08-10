# Repository Guidelines

## Current Scope: Frontend Revamp Only

This repository is undergoing a frontend-only redesign. Change presentation, layout, interactions, accessibility, responsiveness, and client-side animations only. Preserve all existing content and data behavior unless the maintainer explicitly requests otherwise.

Do **not** add, remove, migrate, or edit data sources, data models, API contracts, database code, environment variables, authentication, or server-side behavior. In particular, treat `data/projects.ts` as read-only during this revamp. Render its existing exports without altering their structure or values.

## Project Layout

- `app/` contains App Router pages, the root layout, and global styles.
- `components/` contains reusable React UI components.
- `data/` contains the portfolio and feed content; do not modify it.
- `public/fonts/` holds self-hosted font assets; reuse these rather than adding external fonts.
- `tailwind.config.ts` and `app/globals.css` define shared styling tokens and base styles.

## Development and Validation

- `npm install` installs dependencies.
- `npm run dev` starts the local Next.js development server.
- `npm run lint` runs the configured Next.js ESLint checks.
- `npm run build` verifies the production build before handoff.

For visual work, check the landing page and `/projects` at desktop and mobile widths. These are the only supported routes during the revamp; do not reintroduce `/about` or `/feed` without explicit approval.

## Frontend Conventions

Use TypeScript and React functional components. Match the existing four-space indentation and PascalCase component filenames (for example, `HeroSection.tsx`). Keep styling consistent with the existing Tailwind/CSS approach; place reusable visual primitives in `components/` and route composition in `app/`.

## Change Hygiene

Keep changes narrow and UI-focused. Do not introduce mock data, replace real content, or alter props merely to fit a new design. Explain the user-visible design changes in each pull request and include screenshots for meaningful visual updates.
