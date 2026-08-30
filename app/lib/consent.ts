// app/lib/consent.ts
// Estado de consentimiento de cookies / tecnologías de seguimiento (Meta Pixel,
// Google Tag). Módulo puro, sin React: lo consumen tanto el ConsentProvider como
// módulos planos (`metaEvents.ts`).
//
// Regla: mientras el estado no sea 'accepted' NO se carga ni ejecuta nada de
// terceros. Cualquier fallo de acceso a storage (incógnito, cookies bloqueadas)
// se trata como "sin consentimiento" — nunca rompemos por esto.

export const CONSENT_STORAGE_KEY = 'ssm_consent'
/** Subir este número invalida los consentimientos guardados y vuelve a preguntar. */
export const CONSENT_VERSION = 1
export const CONSENT_CHANGE_EVENT = 'ssm:consent-change'

export type ConsentStatus = 'unknown' | 'accepted' | 'rejected'
export type ConsentChoice = 'accepted' | 'rejected'

interface StoredConsent {
  v: number
  status: ConsentChoice
  ts: number
}

function isChoice(value: unknown): value is ConsentChoice {
  return value === 'accepted' || value === 'rejected'
}

/** Lee el estado persistido. `'unknown'` en SSR, si falta, si es de otra versión o si el acceso falla. */
export function readConsent(): ConsentStatus {
  if (typeof window === 'undefined') return 'unknown'
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return 'unknown'
    const parsed = JSON.parse(raw) as Partial<StoredConsent>
    if (parsed?.v !== CONSENT_VERSION || !isChoice(parsed?.status)) return 'unknown'
    return parsed.status
  } catch {
    return 'unknown'
  }
}

/** Único gate para disparar tracking. Lo llama `metaEvents.ts` en cada evento. */
export function hasMarketingConsent(): boolean {
  return readConsent() === 'accepted'
}

/** Guarda la elección y notifica al resto de la app (context + otras pestañas). */
export function writeConsent(status: ConsentChoice): void {
  try {
    const payload: StoredConsent = { v: CONSENT_VERSION, status, ts: Date.now() }
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload))
  } catch {
    // incógnito / storage bloqueado: no persiste, pero el estado en memoria sí cambia
  }
  notifyConsentChange(status)
}

/** Borra la elección (tests / reset de versión). */
export function clearConsent(): void {
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY)
  } catch {
    /* noop */
  }
  notifyConsentChange('unknown')
}

export function notifyConsentChange(status: ConsentStatus): void {
  if (typeof window === 'undefined') return
  try {
    window.dispatchEvent(new CustomEvent<ConsentStatus>(CONSENT_CHANGE_EVENT, { detail: status }))
  } catch {
    /* noop */
  }
}

/**
 * Suscribe a cambios de consentimiento: en esta pestaña (CustomEvent) y en otras
 * (evento `storage`). Devuelve la función para desuscribir. No-op en SSR.
 */
export function subscribeConsentChange(cb: (status: ConsentStatus) => void): () => void {
  if (typeof window === 'undefined') return () => {}

  const onCustom = (e: Event) => {
    const detail = (e as CustomEvent<ConsentStatus>).detail
    cb(detail ?? readConsent())
  }
  const onStorage = (e: StorageEvent) => {
    if (e.key === CONSENT_STORAGE_KEY) cb(readConsent())
  }

  window.addEventListener(CONSENT_CHANGE_EVENT, onCustom)
  window.addEventListener('storage', onStorage)

  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, onCustom)
    window.removeEventListener('storage', onStorage)
  }
}

/**
 * Best-effort al bajar de 'accepted' a 'rejected': expira las cookies de Meta y
 * borra el id anónimo. No garantiza limpieza total (por eso `reject()` además
 * recarga la página), pero deja el terreno lo más limpio posible.
 */
export function clearMetaCookies(): void {
  if (typeof window === 'undefined') return
  try {
    const host = window.location.hostname
    const domains = ['', `; domain=${host}`, `; domain=.${host}`]
    for (const name of ['_fbp', '_fbc']) {
      for (const domain of domains) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`
      }
    }
  } catch {
    /* noop */
  }
  try {
    window.localStorage.removeItem('ssm_xid')
  } catch {
    /* noop */
  }
}
