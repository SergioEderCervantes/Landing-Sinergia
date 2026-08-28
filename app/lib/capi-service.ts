// app/lib/capi-service.ts
//
// Complementa al Pixel del navegador enviando los mismos eventos server-side.
// La deduplicación Pixel <-> CAPI la hace Meta por (event_name + event_id); el event_id
// lo genera el cliente (app/lib/eventId.ts) y viaja hasta aquí vía /api/track.
import { createHash } from 'node:crypto'

const API_VERSION = process.env.META_CAPI_API_VERSION || 'v21.0'
const PIXEL_ID =
  process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID || ''
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN || ''
const TEST_EVENT_CODE = process.env.META_CAPI_TEST_EVENT_CODE || ''

export interface CapiUserData {
  email?: string
  phone?: string
  firstName?: string
  lastName?: string
  /** Cookie _fbp del navegador. */
  fbp?: string
  /** Cookie _fbc (o sintetizada desde fbclid). */
  fbc?: string
  clientIpAddress?: string
  clientUserAgent?: string
}

export type CapiActionSource =
  | 'website'
  | 'email'
  | 'app'
  | 'phone_call'
  | 'chat'
  | 'physical_store'
  | 'system_generated'
  | 'other'

export interface CapiEvent {
  eventName: string
  eventId: string
  /** Epoch en segundos. Si se omite, se usa la hora del servidor. */
  eventTime?: number
  eventSourceUrl?: string
  actionSource?: CapiActionSource
  userData?: CapiUserData
  customData?: Record<string, unknown>
}

export interface ConversionsApiService {
  /** true si hay PIXEL_ID y ACCESS_TOKEN configurados. */
  isConfigured(): boolean
  sendEvent(event: CapiEvent): Promise<void>
  sendEvents(events: CapiEvent[]): Promise<void>
}

/** SHA-256 hex de un valor normalizado (trim + lowercase). Meta exige la PII hasheada. */
function sha256(value: string | undefined | null): string | undefined {
  if (!value) return undefined
  const normalized = value.trim().toLowerCase()
  if (!normalized) return undefined
  return createHash('sha256').update(normalized).digest('hex')
}

function normalizePhone(value: string | undefined): string | undefined {
  if (!value) return undefined
  const digits = value.replace(/[^0-9]/g, '')
  return digits || undefined
}

function buildUserData(u: CapiUserData = {}): Record<string, unknown> {
  const payload: Record<string, unknown> = {}

  const em = sha256(u.email)
  if (em) payload.em = [em]

  const ph = sha256(normalizePhone(u.phone))
  if (ph) payload.ph = [ph]

  const fn = sha256(u.firstName)
  if (fn) payload.fn = [fn]

  const ln = sha256(u.lastName)
  if (ln) payload.ln = [ln]

  // fbp/fbc/IP/UA van en claro (no son PII hasheable para Meta).
  if (u.fbp) payload.fbp = u.fbp
  if (u.fbc) payload.fbc = u.fbc
  if (u.clientIpAddress) payload.client_ip_address = u.clientIpAddress
  if (u.clientUserAgent) payload.client_user_agent = u.clientUserAgent

  return payload
}

class MetaConversionsApiService implements ConversionsApiService {
  isConfigured(): boolean {
    return Boolean(PIXEL_ID && ACCESS_TOKEN)
  }

  async sendEvent(event: CapiEvent): Promise<void> {
    return this.sendEvents([event])
  }

  async sendEvents(events: CapiEvent[]): Promise<void> {
    if (!events.length) return

    if (!this.isConfigured()) {
      console.warn(
        '[capi] META_PIXEL_ID / META_CAPI_ACCESS_TOKEN sin configurar — evento(s) omitido(s)',
      )
      return
    }

    const data = events.map((e) => ({
      event_name: e.eventName,
      event_id: e.eventId,
      /** Epoch en segundos. Si se omite, se usa la hora del servidor. */
      event_time: e.eventTime ?? Math.floor(Date.now() / 1000),
      action_source: e.actionSource ?? 'website',
      ...(e.eventSourceUrl ? { event_source_url: e.eventSourceUrl } : {}),
      user_data: buildUserData(e.userData),
      ...(e.customData ? { custom_data: e.customData } : {}),
    }))

    const body: Record<string, unknown> = { data }
    if (TEST_EVENT_CODE) body.test_event_code = TEST_EVENT_CODE

    const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(
      ACCESS_TOKEN,
    )}`

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const json = await res.json().catch(() => null)

      if (!res.ok) {
        console.error('[capi] Meta respondió con error', res.status, json)
        return
      }

      console.log('[capi] eventos enviados', {
        count: data.length,
        events: data.map((d) => d.event_name),
        events_received: json?.events_received,
        fbtrace_id: json?.fbtrace_id,
      })
    } catch (err) {
      console.error('[capi] fallo de red al enviar eventos', err)
    }
  }
}

export const conversionsApi: ConversionsApiService = new MetaConversionsApiService()
