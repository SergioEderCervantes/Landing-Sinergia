// app/components/TrackVerticalView.tsx
'use client'

import { useEffect } from 'react'
import { fbTrack } from '@/app/lib/metaPixel'

export default function TrackVerticalView({ vertical }: { vertical: string }) {
  useEffect(() => {
    fbTrack('ViewContent', { content_name: vertical, content_category: 'landing' })
  }, [vertical])

  return null
}