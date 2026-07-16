import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://pixelfix.ai',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://pixelfix.ai/fix',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://pixelfix.ai/help',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://pixelfix.ai/blog',
      lastModified: new Date('2026-07-16T17:14:00+08:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
