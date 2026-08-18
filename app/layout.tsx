import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Fix Pixelated Video — Free AI Repair Tool',
    template: '%s | PixelFix',
  },
  description:
    'Fix pixelated video free with AI. Remove blocky compression artifacts and upscale footage to 4K—no install, no watermark.',
  keywords: [
    'how to fix pixelated video',
    'fix pixelated video',
    'repair pixelated video',
    'unpixelate video',
    'fix blocky video',
    'video repair tool',
    'AI video repair',
    'video enhancement online',
    'video repair software',
    'Shopify video enhancer',
  ],
  metadataBase: new URL('https://www.fixpixelatedvideo.com'),
  alternates: { canonical: 'https://www.fixpixelatedvideo.com' },
  openGraph: {
    title: 'Fix Pixelated Video — Free AI Repair Tool',
    description:
      'Repair pixelated, blocky video with AI. Remove compression artifacts and upscale footage to 4K for free—no watermark.',
    type: 'website',
    url: 'https://www.fixpixelatedvideo.com',
    siteName: 'PixelFix',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fix Pixelated Video — Free AI Repair Tool',
    description:
      'Repair pixelated, blocky video with AI. Remove compression artifacts and upscale footage to 4K for free.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  authors: [{ name: 'PixelFix' }],
  creator: 'PixelFix',
  publisher: 'PixelFix',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6C47FF',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'PixelFix — AI Video Repair Tool',
              applicationCategory: 'MultimediaApplication',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              description:
                'Free AI-powered tool to fix pixelated video, repair compression artifacts, and restore clarity up to 4K resolution.',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '2340',
              },
              url: 'https://www.fixpixelatedvideo.com',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'PixelFix',
              url: 'https://www.fixpixelatedvideo.com',
              logo: 'https://www.fixpixelatedvideo.com/favicon.svg',
              description:
                'AI-powered online tool for fixing pixelated, blocky, and degraded video.',
            }),
          }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
