# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build (static export)
npm run lint     # Run ESLint
```

No test suite is configured in this project.

## Architecture

**Next.js 15 App Router** with **static export** (`output: "export"` in `next.config.ts`). The entire site is a single-page landing composed of sequential sections rendered in `app/page.tsx`.

### Key conventions

- `app/sections/` — one file per landing page section (Hero, Problematica, SistemaSinergia, etc.), rendered in order in `page.tsx`
- `app/components/` — reusable UI primitives (Button, Card, ContactForm, etc.)
- `app/layout/` — layout-level components (Header)
- `app/lib/` — utilities: `gsapClient.ts` for GSAP setup, `email-service.ts` for EmailJS, `utils.ts` for clsx/twMerge helpers
- `app/hooks/` — custom React hooks (`useContactForm.ts`)
- `app/model/` — data/type definitions

### Styling

Tailwind CSS v4 via PostCSS. Global styles in `app/globals.css`. Use `cn()` from `app/lib/utils.ts` (clsx + tailwind-merge) for conditional class merging.

### Animations

GSAP is used for animations. Import via `app/lib/gsapClient.ts` (client-safe wrapper). Mark animated components with `"use client"`.

### Contact form

EmailJS handles form submissions. Credentials are stored in `.env.local` (`NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`). Logic lives in `app/lib/email-service.ts` and `app/hooks/useContactForm.ts`.

### Path alias

`@/*` maps to the project root (configured in `tsconfig.json`).
