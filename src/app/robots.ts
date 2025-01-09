import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://frequences.larhantec.fr/';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/qr-code-list'
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
