// app/components/MetaPixelWrapper.tsx
import { Suspense } from 'react'
import MetaPixel from './MetaPixel'

export default function MetaPixelWrapper() {
  return (
    <Suspense fallback={null}>
      <MetaPixel />
    </Suspense>
  )
}