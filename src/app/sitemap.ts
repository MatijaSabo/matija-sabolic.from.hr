import type { MetadataRoute } from 'next'

import about from "@/dam/data/about.json"
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: about.websiteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    }
  ]
}