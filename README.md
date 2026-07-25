# Himanshu Chhatrala — Portfolio

A responsive, accessible developer portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router, React Hook Form, and Zod.

## Features

- Light and dark themes with persisted preference
- Responsive single-page portfolio and mobile navigation
- Data-driven skills, projects, experience, and testimonials
- Filterable projects with dynamic case-study routes
- Accessible, validated contact form with backend-ready service
- SEO metadata, structured Person data, legal pages, and 404 route
- Reduced-motion support and keyboard-visible controls

## Setup

```bash
npm install
npm run dev
```

Create `.env` from `.env.example`. Set `VITE_CONTACT_API_URL` to a JSON-compatible contact endpoint. Without it, the form runs in safe preview mode.

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Customize

- Personal details: `src/config/personal.ts`
- Projects and experience: `src/data/portfolio.ts`
- Theme and design tokens: `src/index.css`
- Contact transport: `src/services/contact.ts`

Add the real resume at `public/resume/himanshu-chhatrala-resume.pdf`, then replace placeholder contact and social values before publishing.

## Deploy

Import the repository into Vercel and use the default Vite settings. `vercel.json` provides SPA route refresh handling.
