'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useConsent } from './ConsentProvider'

export default function CookieBanner() {
  const { isBannerOpen, status, accept, reject, close } = useConsent()
  const cardRef = useRef<HTMLDivElement>(null)

  const isInitialChoice = status === 'unknown'

  useEffect(() => {
    // Solo robamos el foco cuando se reabre a propósito (rol dialog). El banner
    // inicial es una región pasiva: el usuario llega a él con Tab.
    if (isBannerOpen && !isInitialChoice) cardRef.current?.focus()
  }, [isBannerOpen, isInitialChoice])

  if (!isBannerOpen) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6 pointer-events-none">
      <div
        ref={cardRef}
        tabIndex={-1}
        role={isInitialChoice ? 'region' : 'dialog'}
        aria-modal={isInitialChoice ? undefined : false}
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-desc"
        onKeyDown={(e) => {
          if (e.key === 'Escape' && !isInitialChoice) close()
        }}
        className="pointer-events-auto mx-auto flex max-w-3xl flex-col gap-3 rounded-xl border border-white/10 bg-gunmetal/95 px-5 py-4 text-lavender-web shadow-2xl backdrop-blur-sm outline-none sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5"
      >
        <div className="flex-1 text-sm leading-relaxed">
          <p id="cookie-banner-title" className="mb-1 text-base font-bold text-white">
            Cookies y tecnologías de seguimiento
          </p>
          <p id="cookie-banner-desc" className="text-lavender-web/75">
            Usamos cookies y tecnologías de seguimiento de terceros para medir y optimizar
            nuestro contenido. Solo se activan si las aceptas. Consulta el{' '}
            <Link
              href="/general/aviso-de-privacidad"
              className="underline underline-offset-2 hover:text-white"
            >
              Aviso de Privacidad
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={reject}
            className="rounded-lg border border-lavender-web/30 px-5 py-2.5 text-sm font-semibold text-lavender-web transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-lg bg-shock-pink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-shock-pink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
