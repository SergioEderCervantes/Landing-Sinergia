// app/api/track/route.ts
// Recibe eventos de conversión desde el cliente (app/lib/metaEvents.ts) y los reenvía
// a la Conversions API de Meta server-side. El cliente ya disparó el Pixel con el mismo
// `eventId` → Meta deduplica por (event_name + event_id).
//
import { conversionsApi, type CapiEvent } from '@/app/lib/capi-service'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface TrackRequestBody {
  eventName?: string
  eventId?: string
  eventTime?: number
  eventSourceUrl?: string
  customData?: Record<string, unknown>
  userData?: {
    email?: string
    phone?: string
    firstName?: string
    lastName?: string
    fbp?: string
    fbc?: string
  }
}

export async function POST(request: Request) {
  let body: TrackRequestBody
  try {
    body = (await request.json()) as TrackRequestBody
  } catch {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  if (!body.eventName || !body.eventId) {
    return Response.json({ ok: false, error: 'missing_event' }, { status: 400 })
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    undefined
  const userAgent = request.headers.get('user-agent') || undefined

  const event: CapiEvent = {
    eventName: body.eventName,
    eventId: body.eventId,
    eventTime: body.eventTime,
    eventSourceUrl: body.eventSourceUrl,
    actionSource: 'website',
    customData: body.customData,
    userData: {
      ...body.userData,
      clientIpAddress: ip,
      clientUserAgent: userAgent,
    },
  }

  await conversionsApi.sendEvent(event).catch((err) => {
    console.error('[track] fallo inesperado enviando a CAPI', err)
  })

  return Response.json({ ok: true })
}
