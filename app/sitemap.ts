import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.fixpixelatedvideo.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.fixpixelatedvideo.com/fix',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.fixpixelatedvideo.com/depixelate-video',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.fixpixelatedvideo.com/help',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.fixpixelatedvideo.com/blog',
      lastModified: new Date('2026-07-16T18:52:00+08:00'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.fixpixelatedvideo.com/blog/fix-pixelated-video-iphone',
      lastModified: new Date('2026-07-27T19:55:00+08:00'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.fixpixelatedvideo.com/blog/fix-pixelated-video-youtube',
      lastModified: new Date('2026-07-27T19:55:00+08:00'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.fixpixelatedvideo.com/blog/depixelate-video',
      lastModified: new Date('2026-07-27T19:55:00+08:00'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
