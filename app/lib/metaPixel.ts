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

export function fbTrack(event: string, params?: Record<string, any>) {
  if (typeof window.fbq === 'function') {
    window.fbq('track', event, params)
  }
}

export function fbTrackCustom(event: string, params?: Record<string, any>) {
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', event, params)
  }
}