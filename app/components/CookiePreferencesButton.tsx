'use client'

import { useConsent } from './ConsentProvider'

/**
 * Reabre el banner de cookies para cambiar la elección. Se usa dentro del
 * `Footer` (server component) como frontera cliente mínima.
 */
export default function CookiePreferencesButton({ className }: { className?: string }) {
  const { reopen } = useConsent()
  return (
    <button type="button" onClick={reopen} className={className}>
      Preferencias de cookies
    </button>
  )
}
