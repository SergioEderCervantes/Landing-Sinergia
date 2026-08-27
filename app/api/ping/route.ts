// SONDA TEMPORAL — sirve para ver invocaciones de serverless function en Vercel.
// Cada carga de página dispara un fetch a este endpoint (ver app/components/VisitPing.tsx),
// y aquí se loguea. Revisar en Vercel → Logs / Observability, filtrando "[ping]".
// Borrar este archivo + VisitPing + su <VisitPing/> en layout.tsx cuando ya no se necesite.

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  console.log('[ping] page visit', {
    path: searchParams.get('path') ?? '(desconocido)',
    ref: searchParams.get('ref') || null,
    at: new Date().toISOString(),
    ip: request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip'),
    ua: request.headers.get('user-agent'),
  })

  return Response.json({ ok: true })
}
