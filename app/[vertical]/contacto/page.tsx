import { getVerticalContent, AVAILABLE_VERTICALS } from '@/app/content'
import type { Metadata } from 'next'
import Header from '@/app/layout/Header'
import ContactForm from '@/app/components/ContactForm'

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
    title: `Contacto — ${content.seo.title}`,
    description: content.seo.description,
    alternates: {
      canonical: `https://sinergiastudiomkt.com/${vertical}/contacto`,
    },
  }
}

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ vertical: string }>
}) {
  const { vertical } = await params
  const content = getVerticalContent(vertical)

  return (
    <main className="min-h-screen font-[inter] bg-gunmetal text-lavender-web flex flex-col">
      <Header ctaText={content.hero.headerCtaText} ctaHref={`/${vertical}/contacto`} />
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-2xl">
          <ContactForm vertical={vertical} content={content.contactForm} />
        </div>
      </div>
    </main>
  )
}
