// app/components/GoogleTag.tsx
'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useConsent } from './ConsentProvider'

declare global {
  interface Window {
    gtag: any
    dataLayer: any[]
  }
}

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID // AW-18363013011

export default function GoogleTag() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { status } = useConsent()
  const consented = status === 'accepted'

  useEffect(() => {
    if (!consented) return
    if (typeof window.gtag === 'function') {
      const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '')
      window.gtag('config', GOOGLE_ADS_ID, { page_path: url })
    }
  }, [pathname, searchParams, consented])

  if (!GOOGLE_ADS_ID || !consented) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-tag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `,
        }}
      />
    </>
  )
}