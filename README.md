# ChrisStudio — Software Studio Website

A premium business website project for **ChrisStudio**, built as a modern, production-ready landing experience. The codebase demonstrates how to combine clean Next.js architecture with polished motion design, responsive layouts, and a maintainable front-end structure suitable for client work.

## Preview

![Homepage Preview](./assets/preview-home.png)

> Add your latest screenshot at `assets/preview-home.png` to keep this section up to date.

## Tech Stack

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Vercel** for deployment

## Features

- Premium marketing/landing page structure
- Animated UI system powered by Framer Motion
- SVG intro animation support
- Responsive layout across desktop and mobile
- Modular, component-first architecture
- Smooth, intentional motion design

## Project Structure

```text
.
├── app/           # Next.js App Router pages and layout entry points
├── components/    # Reusable UI components
├── sections/      # Page-level content sections (hero, services, contact, etc.)
├── hooks/         # Custom React hooks
├── lib/           # Shared utilities and helper functions
├── data/          # Static content/configuration data used by sections/components
├── public/        # Public static assets served by Next.js
├── styles/        # Global styles and design tokens
├── docs/          # Developer-facing architecture, motion, and deployment docs
├── assets/        # Repository assets (README previews, diagrams)
└── scripts/       # Optional developer scripts and automation utilities
```

## Getting Started

```bash
npm install
npm run dev
```

The local development server typically runs on `http://localhost:3000`.

## Production Build

```bash
npm run build
npm start
```

## Deployment

This project is designed for **Vercel** deployment.

Typical workflow:
1. Push to your GitHub repository.
2. Import the repository in Vercel.
3. Configure environment variables (if required).
4. Deploy using the default Next.js build settings.

See [`docs/deployment.md`](./docs/deployment.md) for a detailed walkthrough.

## Environment Variables

Environment variables should be defined locally in `.env.local` and mirrored in your deployment provider.

A starter template is included in [`.env.example`](./.env.example). Keep secrets out of version control.

## Credits

Design and development by **ChrisStudio**.
