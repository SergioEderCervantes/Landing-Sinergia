import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getVerticalContent, AVAILABLE_VERTICALS } from '@/app/content'
import { LEGAL_PAGES, getLegalPage } from '@/app/content/legal'
import { SITE_URL } from '@/app/lib/siteUrl'
import Header from '@/app/layout/Header'
import Footer from '@/app/components/Footer'
import LegalDocument from '@/app/components/LegalDocument'

export const dynamicParams = false

export async function generateStaticParams() {
  return AVAILABLE_VERTICALS.flatMap((vertical) =>
    LEGAL_PAGES.map((page) => ({ vertical, legal: page.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string; legal: string }>
}): Promise<Metadata> {
  const { vertical, legal } = await params
  const page = getLegalPage(legal)
  if (!page) return {}

  return {
    title: `${page.doc.title} | Sinergia Studio`,
    description: page.doc.subtitle ?? page.doc.title,
    alternates: {
      canonical: `${SITE_URL}/${vertical}/${legal}`,
    },
  }
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ vertical: string; legal: string }>
}) {
  const { vertical, legal } = await params
  const page = getLegalPage(legal)
  if (!page) notFound()

  const content = getVerticalContent(vertical)

  return (
    <main className="flex min-h-screen flex-col bg-gunmetal font-[inter] text-lavender-web">
      <Header ctaText={content.hero.headerCtaText} ctaHref={`/${vertical}/contacto`} />
      <div className="flex-1">
        <LegalDocument doc={page.doc} backHref={`/${vertical}`} backLabel="Volver al inicio" />
      </div>
      <Footer vertical={vertical} />
    </main>
  )
}
