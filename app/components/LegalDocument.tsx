import Link from 'next/link'
import type { LegalBlock, LegalDocument as LegalDoc } from '../content/legal'

interface LegalDocumentProps {
  doc: LegalDoc
  /** Ruta a la que vuelve el enlace superior (normalmente la vertical). */
  backHref: string
  backLabel: string
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'subheading':
      return (
        <h3 className="mt-8 mb-3 text-lg font-semibold text-white">{block.text}</h3>
      )
    case 'p':
      return (
        <p className="mb-4 leading-relaxed text-lavender-web/75 [overflow-wrap:anywhere]">
          {block.text}
        </p>
      )
    case 'list':
      return (
        <ul className="mb-4 space-y-2 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-lavender-web/75">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-shock-pink" />
              <span className="[overflow-wrap:anywhere]">{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'keyvalue':
      return (
        <dl className="mb-4 grid gap-x-6 gap-y-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-y-3">
          {block.pairs.map((pair, i) => (
            <div key={i} className="sm:contents">
              <dt className="text-sm font-semibold text-white">{pair.label}</dt>
              <dd className="mt-0.5 text-sm text-lavender-web/75 [overflow-wrap:anywhere] sm:mt-0">
                {pair.value}
              </dd>
            </div>
          ))}
        </dl>
      )
    case 'definitions':
      return (
        <dl className="mb-4 space-y-3">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <dt className="mb-1 font-semibold text-shock-pink">{item.term}</dt>
              <dd className="text-sm leading-relaxed text-lavender-web/75">{item.desc}</dd>
            </div>
          ))}
        </dl>
      )
    default:
      return null
  }
}

export default function LegalDocument({ doc, backHref, backLabel }: LegalDocumentProps) {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-14 md:py-20">
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-sm text-lavender-web/60 transition-colors hover:text-shock-pink"
      >
        <span aria-hidden>&larr;</span> {backLabel}
      </Link>

      <header className="mt-8 border-b border-white/10 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          {doc.title}
        </h1>
        {doc.subtitle && (
          <p className="mt-3 text-lavender-web/70">{doc.subtitle}</p>
        )}
        {doc.note && (
          <p className="mt-3 text-sm italic text-lavender-web/50">{doc.note}</p>
        )}
      </header>

      <nav
        aria-label="Contenido"
        className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-5"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-lavender-web/50">
          Contenido
        </p>
        <ol className="space-y-2">
          {doc.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-sm text-lavender-web/75 transition-colors hover:text-shock-pink"
              >
                {section.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 space-y-12">
        {doc.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="mb-4 text-xl font-bold tracking-tight text-white md:text-2xl">
              {section.heading}
            </h2>
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </section>
        ))}
      </div>
    </article>
  )
}
