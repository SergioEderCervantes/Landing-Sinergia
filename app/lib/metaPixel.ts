// app/lib/metaPixel.ts
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

declare global {
  interface Window {
    fbq: any
  }
}

export function fbPageview() {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView')
  }
}

// `eventID` opcional: pásalo cuando el mismo evento también se envía por CAPI
// para que Meta deduplique por (event_name + event_id). Ver app/lib/metaEvents.ts.
export function fbTrack(event: string, params?: Record<string, any>, eventID?: string) {
  if (typeof window.fbq === 'function') {
    if (eventID) {
      window.fbq('track', event, params, { eventID })
    } else {
      window.fbq('track', event, params)
    }
  }
}

export function fbTrackCustom(event: string, params?: Record<string, any>, eventID?: string) {
  if (typeof window.fbq === 'function') {
    if (eventID) {
      window.fbq('trackCustom', event, params, { eventID })
    } else {
      window.fbq('trackCustom', event, params)
    }
  }
}

// Alimenta el external_id a las Coincidencias Avanzadas del Pixel (canal navegador).
// Re-invocar `init` con el mismo ID solo actualiza los datos de matching; no dispara
// otro PageView. El Pixel hashea el valor en el cliente, igual que hace CAPI, así que
// ambos canales mandan el MISMO external_id hasheado.
export function fbSetExternalId(externalId?: string) {
  if (!externalId || !META_PIXEL_ID) return
  if (typeof window.fbq === 'function') {
    window.fbq('init', META_PIXEL_ID, { external_id: externalId })
  }
}
