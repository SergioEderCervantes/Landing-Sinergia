// app/lib/externalId.ts
// ID anónimo y estable por navegador. Se genera en la primera visita, se guarda en
// localStorage y se manda en TODOS los eventos (Pixel + CAPI) con el MISMO valor.
// Sirve para que Meta pueda cruzar eventos aunque todavía no haya email/teléfono
// (ViewContent, InitiateCheckout, form_step), no solo el Lead final.
const KEY = 'ssm_xid'

export function getExternalId(): string | undefined {
  if (typeof window === 'undefined') return undefined
  try {
    let id = window.localStorage.getItem(KEY)
    if (!id) {
      id =
        typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
      window.localStorage.setItem(KEY, id)
    }
    return id
  } catch {
    // modo incógnito / storage bloqueado: sin external_id, no pasa nada grave
    return undefined
  }
}
