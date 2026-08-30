import { getVerticalContent, AVAILABLE_VERTICALS } from '@/app/content'
import { SITE_URL } from '@/app/lib/siteUrl'
import type { Metadata } from 'next'
import Hero from '@/app/sections/Hero'
import Problematica from '@/app/sections/Problematica'
import ProcessSteps from '@/app/sections/SistemaSinergia'
import CasosSistema from '@/app/sections/CasosSistema'
import LoQueCambia from '@/app/sections/LoQueCambia'
import ParaQuien from '@/app/sections/ParaQuien'
import QueIncluye from '@/app/sections/QueIncluye'
import EvaluacionGratuita from '@/app/sections/EvaluacionGratuita'
import TrackVerticalView from '@/app/components/TrackVerticalView'
import Footer from '@/app/components/Footer'

export const dynamicParams = false

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
      url: `${SITE_URL}/${vertical}`,
    },
    alternates: {
      canonical: `${SITE_URL}/${vertical}`,
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
    <main className="font-[inter] bg-linear-to-b from-black from-10% to-background text-foreground">
      <TrackVerticalView vertical={vertical} />
      <Hero content={content.hero} />
      <Problematica content={content.problematica} />
      <ProcessSteps content={content.sistemaSinergia} />
      <CasosSistema content={content.casosSistema} />
      <LoQueCambia content={content.loQueCambia} />
      <ParaQuien content={content.paraQuien} />
      <QueIncluye content={content.queIncluye} />
      <EvaluacionGratuita content={content.evaluacionGratuita} />
      <Footer vertical={vertical} />
    </main>
  )
}
