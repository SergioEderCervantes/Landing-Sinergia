/**
 * Base URL pública del sitio. Se usa para metadata (canonical, OpenGraph),
 * sitemap y robots. Configurable por entorno para poder cambiar de dominio
 * sin tocar código.
 *
 * NEXT_PUBLIC_* se inyecta en build time, así que el valor debe estar
 * presente cuando corre `next build`.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sinergiastudiomkt.com'
