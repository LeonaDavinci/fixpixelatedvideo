import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'How to Fix Pixelated Video | Free AI Video Repair Tool',
    template: '%s | PixelFix',
  },
  description: 'Learn how to fix pixelated video with our free AI-powered online tool. Repair blocky footage, remove compression artifacts, and restore clarity up to 4K - no software needed.',
  keywords: ['how to fix pixelated video', 'fix pixelated video', 'repair pixelated video', 'video repair tool', 'unpixelate video', 'fix blocky video', 'AI video repair', 'video enhancement'],
  metadataBase: new URL('https://pixelfix.ai'),
  alternates: { canonical: 'https://pixelfix.ai' },
  openGraph: {
    title: 'How to Fix Pixelated Video - Free AI Video Repair Tool',
    description: 'Repair pixelated, blocky, and damaged videos online for free. AI reconstructs every frame and restores clarity up to 4K.',
    type: 'website',
    url: 'https://pixelfix.ai',
    siteName: 'PixelFix',
  },
  robots: { index: true, follow: true },
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
              name: 'PixelFix - AI Video Repair Tool',
              applicationCategory: 'MultimediaApplication',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              description: 'Free AI-powered tool to fix pixelated video, repair compression artifacts, and restore clarity up to 4K resolution.',
              aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '2340' },
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
