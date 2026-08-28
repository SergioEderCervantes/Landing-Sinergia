// app/components/TrackVerticalView.tsx
'use client'

import { useEffect } from 'react'
import { trackConversion } from '@/app/lib/metaEvents'

export default function TrackVerticalView({ vertical }: { vertical: string }) {
  useEffect(() => {
    // Pixel + CAPI con event_id compartido (deduplicado por Meta).
    trackConversion('ViewContent', { content_name: vertical, content_category: 'landing' })
  }, [vertical])

  return null
}
