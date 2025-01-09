import { MetadataRoute } from 'next';
import { artworks } from '@/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://frequences.larhantec.fr';

  const staticRoutes = [''].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
    images: ['jml-about.webp'],
  }));

  const dynamicRoutes = artworks.map((artwork) => ({
    url: `${baseUrl}/works/${artwork.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    images: [`${baseUrl}${artwork.image}`],
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
