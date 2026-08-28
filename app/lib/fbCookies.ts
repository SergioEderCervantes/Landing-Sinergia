// app/lib/fbCookies.ts
// Lee los identificadores de navegador de Meta (_fbp / _fbc) para mejorar el "match"
// de la Conversions API. Solo cliente: depende de document.cookie / window.location.

function readCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'))
  return match ? decodeURIComponent(match[1]) : undefined
}

/** Cookie _fbp que planta el Pixel al inicializarse. */
export function getFbp(): string | undefined {
  return readCookie('_fbp')
}

/**
 * Cookie _fbc, derivada del click en un anuncio (parámetro `fbclid`).
 * Si el Pixel todavía no escribió la cookie, la sintetizamos desde el `fbclid`
 * de la URL con el formato que espera Meta: `fb.1.<timestamp>.<fbclid>`.
 */
export function getFbc(): string | undefined {
  const cookie = readCookie('_fbc')
  if (cookie) return cookie
  if (typeof window === 'undefined') return undefined
  const fbclid = new URLSearchParams(window.location.search).get('fbclid')
  if (!fbclid) return undefined
  return `fb.1.${Date.now()}.${fbclid}`
}
