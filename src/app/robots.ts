
import type { MetadataRoute } from 'next'

import about from "@/dam/data/about.json"
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    host: about.websiteUrl,
    sitemap: `${about.websiteUrl}/sitemap.xml`,
  }
}