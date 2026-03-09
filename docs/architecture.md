# Architecture

This repository follows a modular Next.js structure aimed at long-term maintainability and team collaboration.

## Folder Responsibilities

- `app/` contains route-level files (layouts, pages, metadata) using the Next.js App Router.
- `sections/` holds page section composition (hero, services, CTA, footer blocks).
- `components/` contains reusable UI primitives and shared visual building blocks.
- `hooks/` stores custom React hooks used by sections/components.
- `lib/` contains utility functions, constants, and integration helpers.
- `data/` stores static content and structured configuration used to render UI.
- `styles/` centralizes global styles and design-layer concerns.

## Composition Strategy

1. Routes in `app/` assemble sections.
2. Sections use reusable components.
3. Components consume `data/` and helpers from `lib/`.
4. Motion logic is abstracted and documented in `docs/motion-system.md`.

This separation keeps business content, design patterns, and UI logic decoupled.
