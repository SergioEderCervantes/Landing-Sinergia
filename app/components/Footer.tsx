import Link from 'next/link'
import { LEGAL_PAGES } from '../content/legal'
import CookiePreferencesButton from './CookiePreferencesButton'

interface FooterProps {
  /** Vertical actual, para que los enlaces legales regresen a la sección correcta. */
  vertical: string
}

export default function Footer({ vertical }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-transparent px-6 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 text-center text-sm text-lavender-web/50 md:flex-row md:justify-between md:text-left">
        <p>&copy; {new Date().getFullYear()} Sinergia Studio. Todos los derechos reservados.</p>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {LEGAL_PAGES.map((page) => (
            <Link
              key={page.slug}
              href={`/${vertical}/${page.slug}`}
              className="transition-colors hover:text-shock-pink"
            >
              {page.shortTitle}
            </Link>
          ))}
          <CookiePreferencesButton className="cursor-pointer transition-colors hover:text-shock-pink" />
        </nav>
      </div>
    </footer>
  )
}
