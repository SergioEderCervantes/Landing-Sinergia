// app/components/GoogleTagWrapper.tsx
import { Suspense } from 'react'
import GoogleTag from './GoogleTag'

export default function GoogleTagWrapper() {
  return (
    <Suspense fallback={null}>
      <GoogleTag />
    </Suspense>
  )
}