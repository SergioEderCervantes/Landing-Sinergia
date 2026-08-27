'use client'

// SONDA TEMPORAL — dispara una invocación de /api/ping en cada carga de página
// para probar cómo se ven las serverless functions en Vercel.
// Borrar junto con app/api/ping/route.ts cuando ya no se necesite.

import { useEffect } from 'react'

export default function VisitPing() {
  useEffect(() => {
    const path = window.location.pathname
    const ref = document.referrer
    const qs = new URLSearchParams({ path, ...(ref ? { ref } : {}) })
    fetch(`/api/ping?${qs.toString()}`, { cache: 'no-store' }).catch(() => {})
  }, [])

  return null
}
