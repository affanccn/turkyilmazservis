import { MetadataRoute } from 'next'
import { LANDING_PAGES } from '@/lib/landingPages'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://turkyilmazservis.vercel.app'
  const currentDate = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/islerimiz`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/yedek-parca`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/periyodik-bakim`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Otomatik üretilen tüm İlçe + Marka + Cihaz sayfalarını haritaya ekliyoruz
  const dynamicLandingPages: MetadataRoute.Sitemap = LANDING_PAGES.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  return [...staticPages, ...dynamicLandingPages]
}
