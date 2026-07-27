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
      lastModified: new Date('2026-07-16T18:52:00+08:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://pixelfix.ai/blog/fix-pixelated-video-iphone',
      lastModified: new Date('2026-07-27T19:55:00+08:00'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://pixelfix.ai/blog/fix-pixelated-video-youtube',
      lastModified: new Date('2026-07-27T19:55:00+08:00'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://pixelfix.ai/blog/depixelate-video',
      lastModified: new Date('2026-07-27T19:55:00+08:00'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
