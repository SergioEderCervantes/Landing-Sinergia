// app/lib/phone.ts
// Normaliza un teléfono a solo dígitos con lada de país (formato que pide Meta CAPI
// para `ph`: E.164 sin el "+"). Si el número es demasiado corto, devuelve undefined
// para no mandar basura a Meta.
export function normalizePhoneMx(raw: string): string | undefined {
  const digits = (raw || '').replace(/\D/g, '').replace(/^0+/, '')
  // 10 dígitos = número mexicano sin lada de país → anteponemos 52.
  const withCountry = digits.length === 10 ? `52${digits}` : digits
  return withCountry.length >= 11 && withCountry.length <= 15 ? withCountry : undefined
}
