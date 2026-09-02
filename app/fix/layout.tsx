import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fix Pixelated Video — Upload & Repair',
  description:
    'Upload pixelated video and let AI repair blocky artifacts, then upscale to 4K. Free, browser-based, no watermark.',
  alternates: { canonical: 'https://www.fixpixelatedvideo.com/fix' },
  openGraph: {
    title: 'Fix Pixelated Video — Upload & Repair',
    description:
      'Upload pixelated video and let AI repair blocky artifacts, then upscale to 4K for free—no watermark.',
    url: 'https://www.fixpixelatedvideo.com/fix',
  },
};

export default function FixLayout({ children }: { children: React.ReactNode }) {
  return children;
}
