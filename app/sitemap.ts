import { MetadataRoute } from 'next'
import { AVAILABLE_VERTICALS } from '@/app/content'
import { LEGAL_PAGES } from '@/app/content/legal'
import { SITE_URL } from '@/app/lib/siteUrl'

export const dynamic = 'force-static'

const BASE_URL = SITE_URL

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
    ...LEGAL_PAGES.map((page) => ({
      url: `${BASE_URL}/${vertical}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
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
