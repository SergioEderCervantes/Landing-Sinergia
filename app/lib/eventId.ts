// app/lib/eventId.ts
// ID único que se comparte entre el evento del Pixel (navegador) y el de CAPI (servidor).
// Meta deduplica los eventos cuando `event_name` + `event_id` coinciden en ambos canales,
// así que este valor DEBE ser el mismo en la llamada a `fbq` y en el POST a /api/track.
export function newEventId(): string {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID()
    }
  } catch {
    /* entornos sin webcrypto — usamos el fallback de abajo */
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
}
