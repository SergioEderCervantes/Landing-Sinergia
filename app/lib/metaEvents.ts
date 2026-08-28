// app/lib/metaEvents.ts
// Punto único para disparar un evento de conversión por los DOS canales de Meta:
//   1. Pixel del navegador (fbq) con un eventID
//   2. Conversions API server-side (POST /api/track) con el MISMO eventID
// Meta deduplica por (event_name + event_id), así que un evento disparado con
// `trackConversion` cuenta una sola vez aunque lleguen las dos señales.
//
// Uso desde componentes/hooks cliente:
//   trackConversion('Lead', { content_name: vertical }, { email, firstName })
import { fbTrack } from './metaPixel'
import { newEventId } from './eventId'
import { getFbp, getFbc } from './fbCookies'

export interface EventUserData {
  email?: string
  phone?: string
  firstName?: string
  lastName?: string
}

/**
 * Dispara `eventName` en Pixel + CAPI con un event_id compartido.
 * El envío a CAPI es fire-and-forget: nunca lanza ni bloquea el flujo del usuario.
 * Devuelve el event_id generado (por si el llamador quiere loguearlo).
 */
export function trackConversion(
  eventName: string,
  customData?: Record<string, unknown>,
  userData?: EventUserData,
): string {
  const eventId = newEventId()
  const eventTime = Math.floor(Date.now() / 1000)

  // 1) Pixel del navegador con el eventID compartido.
  fbTrack(eventName, customData, eventId)

  // 2) CAPI server-side. keepalive para que sobreviva a una navegación inmediata.
  if (typeof window !== 'undefined') {
    try {
      const payload = JSON.stringify({
        eventName,
        eventId,
        eventTime,
        eventSourceUrl: window.location.href,
        customData,
        userData: {
          ...userData,
          fbp: getFbp(),
          fbc: getFbc(),
        },
      })

      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true,
      }).catch(() => {
        /* best-effort */
      })
    } catch {
      /* nunca rompemos por tracking */
    }
  }

  return eventId
}
