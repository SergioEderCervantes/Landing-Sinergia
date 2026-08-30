'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import {
  clearMetaCookies,
  readConsent,
  subscribeConsentChange,
  writeConsent,
  type ConsentStatus,
} from '@/app/lib/consent'

interface ConsentContextValue {
  /** `'unknown'` en SSR y hasta que el store se lee en el cliente. */
  status: ConsentStatus
  /** El banner se muestra: sin elección tomada, o reabierto desde el footer. */
  isBannerOpen: boolean
  accept: () => void
  reject: () => void
  reopen: () => void
  close: () => void
}

const ConsentContext = createContext<ConsentContextValue | null>(null)

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext)
  if (!ctx) throw new Error('useConsent debe usarse dentro de <ConsentProvider>')
  return ctx
}

const getServerSnapshot = (): ConsentStatus => 'unknown'

export default function ConsentProvider({ children }: { children: ReactNode }) {
  // El consentimiento vive en localStorage (store externo). useSyncExternalStore
  // lo lee de forma SSR-safe: 'unknown' en server + hidratación, luego el valor
  // real antes del primer paint. Sin setState en efectos, sin hydration mismatch.
  const storedStatus = useSyncExternalStore(subscribeConsentChange, readConsent, getServerSnapshot)

  // Sombra en memoria: si escribir en storage falla (incógnito / cookies
  // bloqueadas) la elección igual aplica durante esta carga de página.
  const [memoryStatus, setMemoryStatus] = useState<ConsentStatus | null>(null)
  const [manuallyOpen, setManuallyOpen] = useState(false)

  const status = memoryStatus ?? storedStatus

  const accept = useCallback(() => {
    writeConsent('accepted')
    setMemoryStatus('accepted')
    setManuallyOpen(false)
  }, [])

  const reject = useCallback(() => {
    const wasAccepted = readConsent() === 'accepted'
    writeConsent('rejected')
    if (wasAccepted) {
      // Los <Script> ya se ejecutaron esta sesión y next/script no los descarga:
      // recargar es la única forma fiable de dejar fbq/gtag fuera.
      clearMetaCookies()
      window.location.reload()
      return
    }
    setMemoryStatus('rejected')
    setManuallyOpen(false)
  }, [])

  const reopen = useCallback(() => setManuallyOpen(true), [])
  const close = useCallback(() => {
    if (readConsent() !== 'unknown') setManuallyOpen(false)
  }, [])

  const value = useMemo<ConsentContextValue>(
    () => ({
      status,
      isBannerOpen: status === 'unknown' || manuallyOpen,
      accept,
      reject,
      reopen,
      close,
    }),
    [status, manuallyOpen, accept, reject, reopen, close],
  )

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}
