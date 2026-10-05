import { MetadataRoute } from 'next'
import { LANDING_PAGES } from '@/lib/landingPages'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.turkyilmazservis.com'
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
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // Otomatik üretilen tüm İlçe + Marka + Cihaz sayfalarını haritaya ekliyoruz
  const dynamicLandingPages: MetadataRoute.Sitemap = LANDING_PAGES.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }))

  // Blog yazılarını haritaya ekliyoruz
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const posts = await client.fetch(`*[_type == "post"] { "slug": slug.current, _updatedAt }`)
    blogPages = (posts || []).map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post._updatedAt ? new Date(post._updatedAt) : currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    }))
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error)
  }

  return [...staticPages, ...dynamicLandingPages, ...blogPages]
}
