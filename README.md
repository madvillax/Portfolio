# MyPortfolio

A personal portfolio website showcasing projects, skills, and contact information. Built with Next.js, Tailwind CSS and Framer Motion.

## Features

- Minimal landing page with profile, capabilities, and selected projects
- Dedicated project index at `/projects`
- Responsive document-style layout with system light and dark themes

## Tech stack

- Next.js (React)
- Tailwind CSS and custom CSS
- TypeScript

## Local development

Prerequisites: Node.js (18+ recommended) and npm or yarn.

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm start
```

## Project structure (important files)

- `app/page.tsx` — main landing page
- `components/ProjectsSection.tsx` — shared project index
- `app/projects/page.tsx` — projects listing

## Project structure (full)

```
next-env.d.ts
next.config.ts
package.json
postcss.config.mjs
README.md
tailwind.config.ts
tsconfig.json
app/
	globals.css
	layout.tsx
	page.tsx
	projects/
		page.tsx
components/
	Footer.tsx
	Navbar.tsx
	ProjectsSection.tsx
data/
	projects.ts
public/
	profile.jpg
```

## Notes

- The portrait is sourced from the repository owner's public GitHub profile.
- Shared design tokens and responsive styling live in `app/globals.css`.

If you want the README expanded (development tips, deployment steps, or contributor guidelines), tell me what to include and I will update it.
