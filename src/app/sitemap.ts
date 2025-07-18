import type { MetadataRoute } from 'next'
import { headers } from 'next/headers';
 
const sitemap = async(): Promise<MetadataRoute.Sitemap> => {
  const headersList = await headers();
  const host = headersList.get('host') ?? 'matija-sabolic.from.hr';
  const protocol = headersList.get('x-forwarded-proto') ?? 'https';
  const fullUrl = `${protocol}://${host}`;

  return [
    {
      url: fullUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${fullUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    }
  ]
}

export default sitemap;