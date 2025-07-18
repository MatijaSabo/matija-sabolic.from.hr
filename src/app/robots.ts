
import type { MetadataRoute } from 'next'
import { headers } from 'next/headers';
 
const robots = async(): Promise<MetadataRoute.Robots> => {
  const headersList = await headers();
  const host = headersList.get('host') ?? 'matija-sabolic.from.hr';
  const protocol = headersList.get('x-forwarded-proto') ?? 'https';
  const fullUrl = `${protocol}://${host}`;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    host: fullUrl,
    sitemap: `${fullUrl}/sitemap.xml`,
  }
}

export default robots;