import { getVerticalContent, AVAILABLE_VERTICALS } from '@/app/content'
import type { Metadata } from 'next'
import Hero from '@/app/sections/Hero'
import Problematica from '@/app/sections/Problematica'
import ProcessSteps from '@/app/sections/SistemaSinergia'
import CasosSistema from '@/app/sections/CasosSistema'
import LoQueCambia from '@/app/sections/LoQueCambia'
import ParaQuien from '@/app/sections/ParaQuien'
import QueIncluye from '@/app/sections/QueIncluye'
import EvaluacionGratuita from '@/app/sections/EvaluacionGratuita'

export async function generateStaticParams() {
  return AVAILABLE_VERTICALS.map((vertical) => ({ vertical }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string }>
}): Promise<Metadata> {
  const { vertical } = await params
  const content = getVerticalContent(vertical)
  return {
    title: content.seo.title,
    description: content.seo.description,
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: `https://sinergiastudiomkt.com/${vertical}`,
    },
    alternates: {
      canonical: `https://sinergiastudiomkt.com/${vertical}`,
    },
  }
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<{ vertical: string }>
}) {
  const { vertical } = await params
  const content = getVerticalContent(vertical)

  return (
    <main className="font-[inter] bg-linear-to-b from-white dark:from-black from-10% to-background text-foreground">
      <Hero content={content.hero} />
      <Problematica content={content.problematica} />
      <ProcessSteps content={content.sistemaSinergia} />
      <CasosSistema content={content.casosSistema} />
      <LoQueCambia content={content.loQueCambia} />
      <ParaQuien content={content.paraQuien} />
      <QueIncluye content={content.queIncluye} />
      <EvaluacionGratuita content={content.evaluacionGratuita} />
    </main>
  )
}
