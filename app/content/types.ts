import { IconType } from 'react-icons'

export interface Impact {
  results: Record<string, string>[]
}

export interface Exito {
  number: number
  name: string
  shortDesc: string
  before: string
  services: string[]
  impact: Impact
  hImage: string
  vImage: string
}

export interface HeroContent {
  headerCtaText: string
  title: string
  titleHighlight: string
  subtitle: string
  ctaText: string
  ctaSubtext: string
  ctaHref: string
}

export interface ProblemCard {
  icon: IconType
  title: string
  description: string
}

export interface ProblematicaContent {
  mainTitle: string
  mainTitleHighlight: string
  cards: ProblemCard[]
}

export interface SistemaPhase {
  number: string
  title: string
  body: string
}

export interface SistemaSinergiaContent {
  title: string
  subtitle: string
  phases: SistemaPhase[]
}

export interface CasosSistemaContent {
  title: string
  subtitle: string
  cases: Exito[]
}

export interface LoQueCambiaContent {
  title: string
  subtitle: string
  antesLabel: string
  despuesLabel: string
  antesItems: string[]
  despuesItems: string[]
}

export interface ParaQuienContent {
  label: string
  title: string
  items: string[]
  ctaText: string
  ctaHref: string
  ctaNote: string
}

export interface QueIncluyeContent {
  title: string
  subtitle: string
  items: string[]
}

export interface EvaluacionGratuitaContent {
  title: string
  subtitle: string
  subtitleHighlight: string
  ctaText: string
  ctaHref: string
  note: string
}

export interface FormStep {
  id: string
  label: string
  placeholder: string
  type: string
}

export interface ContactFormContent {
  submitButtonText: string
  nextButtonText: string
  backButtonText: string
  returnButtonText: string
  returnHref: string
  successTitle: string
  successMessage: string
  successReturnText: string
  successReturnHref: string
  steps: FormStep[]
}

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
