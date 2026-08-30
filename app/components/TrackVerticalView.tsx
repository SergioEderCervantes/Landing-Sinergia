// app/components/TrackVerticalView.tsx
'use client'

import { useEffect } from 'react'
import { trackConversion } from '@/app/lib/metaEvents'
import { useConsent } from './ConsentProvider'

export default function TrackVerticalView({ vertical }: { vertical: string }) {
  const { status } = useConsent()

  useEffect(() => {
    if (status !== 'accepted') return
    // Pixel + CAPI con event_id compartido (deduplicado por Meta).
    // Si el usuario acepta después de cargar, el efecto re-corre y no se pierde el ViewContent.
    trackConversion('ViewContent', { content_name: vertical, content_category: 'landing' })
  }, [vertical, status])

  return null
}
