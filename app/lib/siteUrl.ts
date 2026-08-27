/**
 * Base URL pública del sitio. Se usa para metadata (canonical, OpenGraph),
 * sitemap y robots. Configurable por entorno para poder cambiar de dominio
 * sin tocar código.
 *
 * NEXT_PUBLIC_* se hornea en build time, así que el valor debe estar
 * presente cuando corre `next build`.
 *
 * Se normaliza de forma defensiva: si viene sin esquema (`www.dominio.com`)
 * se le antepone `https://`; si viene basura, cae al default. Así un valor
 * mal escrito en las env vars no tumba el build (`new URL()` en layout.tsx).
 */
const FALLBACK = 'https://sinergiastudiomkt.com'

function normalizeSiteUrl(raw: string | undefined): string {
  const trimmed = raw?.trim().replace(/\/+$/, '')
  if (!trimmed) return FALLBACK

  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`

  try {
    return new URL(withScheme).origin
  } catch {
    return FALLBACK
  }
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
