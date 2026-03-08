# Instructions for Landing Refactoring

## Context

This is a Next.js 15 App Router landing page with **static export** (`output: "export"`). We need to refactor it to support multiple verticals (general, medico, arquitecto, restaurante) while maintaining the exact same visual design and functionality.

Currently all content is hardcoded in components. The goal is to extract all copy to TypeScript interfaces and use **dynamic routes with `generateStaticParams`** to generate static pages for each vertical.

## Project Structure

The landing has these sections (in order):
1. Hero
2. Problematica (3 cards with react-icons)
3. SistemaSinergia (3 phases of our process)
4. CasosSistema (3 success stories in bento grid, uses `Exito` model from `app/model/EXITO.ts`)
5. LoQueCambia (before/after comparison)
6. ParaQuien (target audience card)
7. QueIncluye (what's included in the service)
8. EvaluacionGratuita (final CTA)

Each section lives in `app/sections/` and is rendered in `app/page.tsx`.

## Current Tech Stack

- Next.js 15 App Router with `output: "export"` (SSG)
- Tailwind CSS v4
- GSAP for animations
- EmailJS for contact forms
- TypeScript (strict mode)

## Final Architecture Goal

```
/app
  /page.tsx                           # Redirect or general info
  /[vertical]
    /page.tsx                         # Dynamic landing (uses generateStaticParams)
    /contacto
      /page.tsx                       # Dynamic contact form
  /sections/                          # All sections accept content as props
  /components/                        # Reusable UI (Button, Card, etc.)
  /content
    /types.ts                         # TypeScript interfaces for all content
    /verticals
      /general.ts                     # Content for "general" vertical
      /medico.ts                      # Future: content for "medico"
      /arquitecto.ts                  # Future: content for "arquitecto"
    /index.ts                         # Helper: getVerticalContent(vertical)
```

## Phase 1: Extract Content from Current Implementation

### Step 1: Create Content Type Definitions

Create `app/content/types.ts` with interfaces that describe ALL the content structure:

```typescript
import { IconType } from 'react-icons'
import { Exito } from '@/app/model/EXITO'

export interface HeroContent {
  title: string
  subtitle: string
  ctaText: string
  ctaSubtext: string
}

export interface ProblemCard {
  icon: IconType
  title: string
  description: string
}

export interface ProblematicaContent {
  mainTitle: string
  subtitle?: string
  cards: ProblemCard[]
}

export interface SistemaPhase {
  number: number
  title: string
  description: string
}

export interface SistemaSinergiaContent {
  title: string
  subtitle?: string
  phases: SistemaPhase[]
}

export interface CasosSistemaContent {
  title: string
  subtitle?: string
  cases: Exito[]
}

export interface ComparisonItem {
  label: string
  before: string
  after: string
}

export interface LoQueCambiaContent {
  title: string
  subtitle?: string
  comparisons: ComparisonItem[]
}

export interface ParaQuienContent {
  title: string
  description: string
  qualifications: string[]
  disqualifications: string[]
  ctaText: string
}

export interface InclusionItem {
  title: string
  description: string
  items: string[]
}

export interface QueIncluyeContent {
  title: string
  subtitle?: string
  inclusions: InclusionItem[]
}

export interface EvaluacionGratuitaContent {
  title: string
  subtitle: string
  ctaText: string
}

export interface ContactFormContent {
  title: string
  subtitle?: string
  submitButtonText: string
  successMessage: string
  errorMessage: string
}

// Main vertical content interface
export interface VerticalContent {
  hero: HeroContent
  problematica: ProblematicaContent
  sistemaSinergia: SistemaSinergiaContent
  casosSistema: CasosSistemaContent
  loQueCambia: LoQueCambiaContent
  paraQuien: ParaQuienContent
  queIncluye: QueIncluyeContent
  evaluacionGratuita: EvaluacionGratuitaContent
  contactForm: ContactFormContent
}
```

### Step 2: Extract Current Content

Create `app/content/verticals/general.ts`:

```typescript
import { VerticalContent } from '../types'
// Import necessary icons from react-icons
// Import Exito data if not already in a separate file

export const generalContent: VerticalContent = {
  hero: {
    title: "...", // Extract from current Hero component
    subtitle: "...",
    ctaText: "...",
    ctaSubtext: "..."
  },
  problematica: {
    mainTitle: "...",
    cards: [
      {
        icon: IconFromReactIcons,
        title: "...",
        description: "..."
      },
      // ... 3 cards total
    ]
  },
  // ... extract all sections
}
```

**Important**: Go through each section component in `app/sections/` and extract EVERY hardcoded string, including:
- Titles and subtitles
- Descriptions
- Button texts
- CTA texts
- Placeholder texts
- Success/error messages
- Any other UI copy

### Step 3: Create Content Helper

Create `app/content/index.ts`:

```typescript
import { generalContent } from './verticals/general'
import { VerticalContent } from './types'

const VERTICALS: Record<string, VerticalContent> = {
  general: generalContent,
  // Future verticals will be added here:
  // medico: medicoContent,
  // arquitecto: arquitectoContent,
  // restaurante: restauranteContent,
}

export function getVerticalContent(vertical: string): VerticalContent {
  const content = VERTICALS[vertical]
  
  if (!content) {
    console.warn(`Vertical "${vertical}" not found, falling back to general`)
    return VERTICALS.general
  }
  
  return content
}

// Export list of available verticals for generateStaticParams
export const AVAILABLE_VERTICALS = Object.keys(VERTICALS)
```

### Step 4: Refactor Section Components

Modify each component in `app/sections/` to:
1. Accept content as props (typed with interfaces from `types.ts`)
2. Remove ALL hardcoded strings
3. Maintain exact same visual structure and styling
4. Keep all GSAP animations unchanged

Example for Hero:

```typescript
// app/sections/Hero.tsx
'use client'

import { HeroContent } from '@/app/content/types'
// ... other imports

interface HeroProps {
  content: HeroContent
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="...">
      <h1>{content.title}</h1>
      <p>{content.subtitle}</p>
      <Button>{content.ctaText}</Button>
      <p>{content.ctaSubtext}</p>
    </section>
  )
}
```

Do this for ALL sections:
- `Hero.tsx`
- `Problematica.tsx`
- `SistemaSinergia.tsx`
- `CasosSistema.tsx`
- `LoQueCambia.tsx`
- `ParaQuien.tsx`
- `QueIncluye.tsx`
- `EvaluacionGratuita.tsx`

### Step 5: Create Dynamic Route Structure

**5a. Create dynamic landing page:**

Create `app/[vertical]/page.tsx`:

```typescript
import { getVerticalContent, AVAILABLE_VERTICALS } from '@/app/content'
import { Hero } from '@/app/sections/Hero'
import { Problematica } from '@/app/sections/Problematica'
// ... import all sections

export async function generateStaticParams() {
  return AVAILABLE_VERTICALS.map(vertical => ({
    vertical
  }))
}

export default function VerticalPage({ params }: { params: { vertical: string } }) {
  const content = getVerticalContent(params.vertical)
  
  return (
    <main className="bg-linear-to-b from-white dark:from-black from-40% to-background text-foreground">
      <Hero content={content.hero} />
      <Problematica content={content.problematica} />
      <SistemaSinergia content={content.sistemaSinergia} />
      <CasosSistema content={content.casosSistema} />
      <LoQueCambia content={content.loQueCambia} />
      <ParaQuien content={content.paraQuien} />
      <QueIncluye content={content.queIncluye} />
      <EvaluacionGratuita content={content.evaluacionGratuita} />
    </main>
  )
}
```

**5b. Create dynamic contact page:**

Create `app/[vertical]/contacto/page.tsx`:

```typescript
import { getVerticalContent, AVAILABLE_VERTICALS } from '@/app/content'
import { ContactForm } from '@/app/components/ContactForm'

export async function generateStaticParams() {
  return AVAILABLE_VERTICALS.map(vertical => ({
    vertical
  }))
}

export default function ContactoPage({ params }: { params: { vertical: string } }) {
  const content = getVerticalContent(params.vertical)
  
  return (
    <section className="w-full py-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden lg:block" />
        
        <div className="col-span-12 lg:col-span-10 px-6 lg:px-0">
          <ContactForm 
            vertical={params.vertical}
            content={content.contactForm}
          />
        </div>
        
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
```

**5c. Update ContactForm component:**

Modify `app/components/ContactForm.tsx` to accept content props:

```typescript
interface ContactFormProps {
  vertical: string
  content: ContactFormContent
}

export function ContactForm({ vertical, content }: ContactFormProps) {
  // ... use content.title, content.subtitle, content.submitButtonText, etc.
}
```

**5d. Update old pages:**

- Move current `app/page.tsx` to `app/[vertical]/page.tsx` (done above)
- Move current `app/contacto/page.tsx` to `app/[vertical]/contacto/page.tsx` (done above)
- Create new `app/page.tsx` as a simple redirect or info page:

```typescript
// app/page.tsx
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/general')
}
```

## Critical Requirements

### DO NOT change:
- Visual design or layout of any component
- Tailwind classes or styling
- GSAP animations
- EmailJS integration logic
- TypeScript strict mode
- The `output: "export"` configuration

### DO change:
- Extract ALL hardcoded strings to content files
- Make all section components accept content props
- Use `generateStaticParams` for static generation
- Ensure proper TypeScript typing everywhere

### Validation Checklist

After completing the refactoring:

- [ ] Build succeeds: `npm run build`
- [ ] No TypeScript errors
- [ ] No hardcoded strings in section components
- [ ] `/general` route works and looks identical to original
- [ ] `/general/contacto` route works
- [ ] All content is in `app/content/verticals/general.ts`
- [ ] All types are properly defined in `app/content/types.ts`
- [ ] Static export generates pages for all verticals
- [ ] GSAP animations still work
- [ ] Contact form still submits via EmailJS

## Build Output Validation

After `npm run build`, verify that `out/` directory contains:

```
out/
  general/
    index.html
    contacto/
      index.html
```

When you add more verticals later, you should see:

```
out/
  general/
    index.html
    contacto/index.html
  medico/
    index.html
    contacto/index.html
  arquitecto/
    index.html
    contacto/index.html
```

## Next Steps (Future Phases)

After completing this refactoring:

1. **Phase 2**: Create `medico.ts` with medical vertical copy
2. **Phase 3**: Create `arquitecto.ts` with architect vertical copy  
3. **Phase 4**: Create `restaurante.ts` with restaurant vertical copy

Each new vertical only requires:
- Creating a new file in `app/content/verticals/`
- Adding it to the `VERTICALS` object in `app/content/index.ts`
- Running `npm run build` to generate the static pages

No component changes needed! 🎉

## Execution Plan

Please execute this refactoring in the following order:

1. Create `app/content/types.ts` with all interfaces
2. Create `app/content/verticals/general.ts` by extracting current content
3. Create `app/content/index.ts` with helper function
4. Refactor each section component to accept props (one by one)
5. Create `app/[vertical]/page.tsx` with generateStaticParams
6. Create `app/[vertical]/contacto/page.tsx` with generateStaticParams
7. Update `app/components/ContactForm.tsx` to accept content props
8. Create new `app/page.tsx` as redirect
9. Delete old `app/contacto/page.tsx`
10. Run `npm run build` and validate output
11. Test `/general` and `/general/contacto` routes

Show me the changes as you go and confirm everything compiles before moving to the next step.