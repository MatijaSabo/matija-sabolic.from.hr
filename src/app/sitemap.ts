import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://matija-sabolic.from.hr',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    }
  ]
}