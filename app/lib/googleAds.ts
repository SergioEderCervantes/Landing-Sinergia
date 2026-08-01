// app/lib/googleAds.ts
export function gtagReportConversion(conversionLabel: string, params?: Record<string, any>) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${conversionLabel}`,
      ...params,
    })
  }
}