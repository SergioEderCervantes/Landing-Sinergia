import { MetadataRoute } from 'next'
import { AVAILABLE_VERTICALS } from '@/app/content'

export const dynamic = 'force-static'

const BASE_URL = 'https://sinergiastudiomkt.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const verticalRoutes = AVAILABLE_VERTICALS.flatMap((vertical) => [
    {
      url: `${BASE_URL}/${vertical}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/${vertical}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ])

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...verticalRoutes,
  ]
}
