# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start development server (localhost:3000)
pnpm build    # Production build
pnpm start    # Run the production build locally (next start)
pnpm lint     # Run ESLint
```

This project uses **pnpm** (see `pnpm-workspace.yaml` / `pnpm-lock.yaml`), not npm. No test suite is configured. Node 22 (see `.nvmrc` / `engines`).

## Architecture

**Next.js 16 App Router**, default build output. The site is a multi-vertical landing page: the same section components are reused across different audience "verticals" (e.g. general vs. arquitectos), each with its own copy. Pages are fully static (SSG); the only server-side code is under `app/api/` (route handlers → serverless functions).

### Deployment

Deployed on **Vercel** (zero-config, framework auto-detected). `NEXT_PUBLIC_*` vars are set in the Vercel project's Environment Variables and injected into the build automatically. Server-only secrets (future Meta CAPI / Resend) are runtime env vars **without** the `NEXT_PUBLIC_` prefix, so they never reach the client.

`app/api/ping/` + `app/components/VisitPing.tsx` are a **temporary probe** to observe serverless function invocations — safe to delete.

### Vertical content system

- Routes live under `app/[vertical]/` — `app/[vertical]/page.tsx` (main landing) and `app/[vertical]/contacto/page.tsx` (contact form page). Both call `generateStaticParams()` to pre-render one page per entry in `AVAILABLE_VERTICALS`, and `generateMetadata()` to set per-vertical SEO/OpenGraph tags. Both also set `export const dynamicParams = false`, so any slug not in `AVAILABLE_VERTICALS` 404s instead of being server-rendered on demand.
- The public base URL (canonical/OpenGraph/sitemap/robots) comes from `SITE_URL` in `app/lib/siteUrl.ts` (`NEXT_PUBLIC_SITE_URL`, falling back to `https://sinergiastudiomkt.com`).
- `app/page.tsx` (the root `/`) just `redirect()`s to `/general`.
- `app/content/types.ts` defines `VerticalContent`, the single interface every vertical's copy must satisfy (hero, problematica, sistemaSinergia, casosSistema, loQueCambia, paraQuien, queIncluye, evaluacionGratuita, contactForm, seo).
- `app/content/verticals/*.ts` (e.g. `general.ts`, `arquitectos.ts`) each export a `VerticalContent` object with that vertical's copy.
- `app/content/cases.ts` holds shared "caso de éxito" (case study) data objects, reused across verticals' `casosSistema.cases`.
- `app/content/index.ts` exports `getVerticalContent(vertical)` (falls back to `general` with a console warning if the slug is unknown) and `AVAILABLE_VERTICALS`.
- **Adding a new vertical**: create `app/content/verticals/<name>.ts` implementing `VerticalContent`, then register it in the `VERTICALS` map in `app/content/index.ts` — routing, sitemap, and metadata all derive from that map automatically.
- `app/sitemap.ts` and `app/robots.ts` also read `AVAILABLE_VERTICALS` to generate per-vertical sitemap entries — no manual route list to maintain.

### Key conventions

- `app/sections/` — one presentational component per landing-page section (Hero, Problematica, SistemaSinergia, CasosSistema, LoQueCambia, ParaQuien, QueIncluye, EvaluacionGratuita). Each takes a typed `content` prop from `VerticalContent` and is composed in order inside `app/[vertical]/page.tsx`.
- `app/components/` — reusable UI primitives (Button, Card, CaseStudyCard, ComparisonColumn, ContactForm, HeroLogo, InclusionItem, QualificationColumn)
- `app/layout/` — layout-level components (Header)
- `app/lib/` — utilities: `gsapClient.ts` for GSAP setup, `email-service.ts` for EmailJS, `utils.ts` for the `cn()` clsx/twMerge helper
- `app/hooks/` — custom React hooks (`useContactForm.ts`)

### Styling

Tailwind CSS v4 via PostCSS. Custom color tokens (`gunmetal`, `shock-pink`, `teal`, `lavender-web`, `background`, `foreground`) are defined via CSS variables in the `@theme` block in `app/globals.css`. Use `cn()` from `app/lib/utils.ts` for conditional class merging.

### Animations

GSAP is used for animations. Import via `app/lib/gsapClient.ts` (client-safe wrapper); call `ensureGsap()` before using GSAP/ScrollTrigger to register plugins exactly once. Mark animated components with `"use client"`.

### Contact form

EmailJS handles form submissions (client-side). Credentials are `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` — see `.env.example` for the full env var list. Logic lives in `app/lib/email-service.ts` (behind an `EmailService` interface, so a server-backed implementation can drop in later) and `app/hooks/useContactForm.ts`. The form's steps/labels/copy come from a vertical's `contactForm` content (`ContactFormContent` in `app/content/types.ts`), while `ContactForm` also receives the current `vertical` slug directly (used for routing/return links, e.g. in `app/[vertical]/contacto/page.tsx`).

### Path alias

`@/*` maps to the project root (configured in `tsconfig.json`).
