import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Pixelated Video — Upload and Repair Online | PixelFix',
  description:
    'Upload your pixelated or damaged video and let AI repair every frame. Preview the before/after comparison, choose output resolution up to 4K, and download — no watermark.',
  alternates: { canonical: 'https://pixelfix.ai/fix' },
  openGraph: {
    title: 'Fix Pixelated Video — Upload and Repair Online',
    description:
      'AI-powered video repair tool. Upload, preview, repair, and download in up to 4K. Free to start, no watermark.',
    url: 'https://pixelfix.ai/fix',
  },
};

export default function FixLayout({ children }: { children: React.ReactNode }) {
  return children;
}
