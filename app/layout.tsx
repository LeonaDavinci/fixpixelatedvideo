import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'How to Fix Pixelated Video — Free AI Video Repair Tool | PixelFix',
    template: '%s | PixelFix',
  },
  description:
    'Fix pixelated video online with AI. Remove compression artifacts, repair blocky footage, and upscale to 4K — free to start, no software install, no watermark.',
  keywords: [
    'how to fix pixelated video',
    'fix pixelated video',
    'repair pixelated video',
    'unpixelate video',
    'fix blocky video',
    'video repair tool',
    'AI video repair',
    'video enhancement online',
  ],
  metadataBase: new URL('https://pixelfix.ai'),
  alternates: { canonical: 'https://pixelfix.ai' },
  openGraph: {
    title: 'How to Fix Pixelated Video — Free AI Video Repair Tool',
    description:
      'Repair pixelated, blocky, and damaged videos online. AI reconstructs every frame and restores clarity up to 4K. Free to start, no watermark.',
    type: 'website',
    url: 'https://pixelfix.ai',
    siteName: 'PixelFix',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Fix Pixelated Video — Free AI Video Repair Tool',
    description:
      'Repair pixelated, blocky, and damaged videos online. AI reconstructs every frame and restores clarity up to 4K.',
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
              url: 'https://pixelfix.ai',
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
              url: 'https://pixelfix.ai',
              logo: 'https://pixelfix.ai/favicon.svg',
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
