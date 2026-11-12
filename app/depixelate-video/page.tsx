import type { Metadata } from 'next';
import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Depixelate Video Online — Fix Blocky Footage',
  description:
    'Depixelate video online free with AI. Remove blocky, pixelated artifacts and upscale footage to 4K—no watermark.',
  keywords: [
    'depixelate video',
    'depixelate video online',
    'depixelate a video',
    'unpixelate video',
    'pixel fixer',
    'pixel fixer video',
    'fix pixelated video online free',
    'video pixelation',
    'remove pixelation from video',
    'fix pixelated video',
    'deblur video',
    'AI depixelate video',
    'free depixelate video tool',
  ],
  alternates: { canonical: 'https://www.fixpixelatedvideo.com/depixelate-video' },
  openGraph: {
    title: 'Depixelate Video Online — Fix Blocky Footage',
    description:
      'Depixelate video online with AI. Remove blocky, pixelated artifacts and upscale footage to 4K for free.',
    url: 'https://www.fixpixelatedvideo.com/depixelate-video',
    type: 'website',
    siteName: 'PixelFix',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Depixelate Video Online — Fix Blocky Footage',
    description:
      'Depixelate video online with AI. Remove blocky, pixelated artifacts and upscale footage to 4K for free.',
  },
};

const faqItems = [
  {
    question: 'What does it mean to depixelate a video?',
    answer:
      'To depixelate a video means to remove the blocky, mosaic-like squares caused by compression and restore the smooth detail underneath. AI estimates the original pixels, rebuilds edges and texture, and produces a clean frame instead of a compressed one.',
  },
  {
    question: 'Can I depixelate video online for free?',
    answer:
      'Yes. PixelFix runs entirely in your browser — upload a clip, let the AI remove pixelation, then preview the before/after result for free. You only spend credits when you export the final file, and every export is watermark-free.',
  },
  {
    question: 'Is depixelating the same as upscaling?',
    answer:
      'No. Upscaling only enlarges the frame, which can make blocks more obvious. Depixelation targets the blocks themselves, removes compression artifacts, and then upscales the cleaned frame — so the output is both bigger and clearer.',
  },
  {
    question: 'Will the depixelated video look natural?',
    answer:
      'With balanced settings, yes. Moderate deblocking plus a sensible upscale gives the most natural result. Over-aggressive sharpening can look artificial, so preview before exporting and keep the settings moderate for real-world footage.',
  },
  {
    question: 'What formats can I depixelate?',
    answer:
      'PixelFix supports MP4, MOV, AVI, MKV, WebM, and WMV with no pre-conversion required. Output is delivered as MP4 (H.264) up to 4K resolution.',
  },
  {
    question: 'Can I depixelate video on a Chromebook?',
    answer:
      'Yes. PixelFix is fully browser-based, so you can depixelate video on Chromebook or any ChromeOS device without installing software or extensions. Open Chrome, upload your clip, and let the AI remove pixelation online — no app required.',
  },
  {
    question: 'What is the difference between depixelate and unpixelate?',
    answer:
      'They mean the same thing. To unpixelate a video is simply another way to say depixelate a video — both refer to removing blocky compression artifacts and restoring clean, sharp frames.',
  },
];

export default function DepixelateVideoPage() {
  return (
    <>
      {/* SEO Structured Data: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Depixelate video hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-kicker">Free AI Video Repair Tool</p>
              <h1>Depixelate Video Online — Turn Blocky Footage Into Clean Clips</h1>
              <p className="hero-desc">
                Stop fighting with mosaic, blocky, and blurry video. Our AI depixelates
                every frame — removing pixelation and compression artifacts — and restores
                sharp, natural clarity up to 4K. No software install, no watermark.
              </p>
              <div className="hero-cta">
                <Link href="/fix" className="btn btn-primary btn-large">
                  Depixelate Your Video Free
                </Link>
                <Link href="/blog/depixelate-video" className="btn btn-outline">
                  Read the Step-by-Step Guide
                </Link>
              </div>
              <div className="hero-trust">
                <div className="trust-item">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#00D4A1" strokeWidth="2.5" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  No software install
                </div>
                <div className="trust-item">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#00D4A1" strokeWidth="2.5" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Free to start
                </div>
                <div className="trust-item">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#00D4A1" strokeWidth="2.5" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  No watermark
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS DEPIXELATION ===== */}
      <section className="section" aria-labelledby="what-heading">
        <div className="container">
          <div className="text-center">
            <span className="badge">What It Does</span>
            <h2 id="what-heading">What Does It Mean to Depixelate a Video?</h2>
            <p style={{ maxWidth: 640, margin: '12px auto 0' }}>
              Pixelation is lost information. When an encoder runs out of bits, it
              approximates whole blocks of the image and the fine detail disappears. To
              depixelate a video is to reverse that loss — the AI estimates the original
              pixels and rebuilds smooth edges, texture, and gradients so the frame looks
              like a clean capture rather than a compressed file.
            </p>
          </div>
        </div>
      </section>

      {/* ===== HOW TO DEPIXELATE ===== */}
      <section id="how" className="section section-alt" aria-labelledby="how-heading">
        <div className="container text-center">
          <span className="badge">Step-by-Step</span>
          <h2 id="how-heading">How to Depixelate a Video in 3 Steps</h2>
          <p style={{ maxWidth: 600, margin: '12px auto 0' }}>
            No technical knowledge required. PixelFix handles frame-by-frame
            reconstruction automatically, in your browser.
          </p>
          <div className="steps-grid" role="list">
            <article className="step-card" role="listitem">
              <span className="step-number" aria-hidden="true">01</span>
              <h3>Upload Your Blocked Clip</h3>
              <p>
                Drag and drop or click to upload your pixelated or blocky video. MP4, MOV,
                AVI, MKV and more are supported — no conversion needed beforehand.
              </p>
            </article>
            <article className="step-card" role="listitem">
              <span className="step-number" aria-hidden="true">02</span>
              <h3>AI Depixelates Every Frame</h3>
              <p>
                The model detects the block type, removes compression artifacts, and
                rebuilds missing detail while sharpening edges. Raise deblocking strength
                for heavy blocking or add noise reduction for soft old footage.
              </p>
            </article>
            <article className="step-card" role="listitem">
              <span className="step-number" aria-hidden="true">03</span>
              <h3>Preview and Download</h3>
              <p>
                Check the before/after comparison, then export in 1080p, 2K, or 4K —
                completely watermark-free. Previewing is free, and you only use credits on
                the final download.
              </p>
            </article>
          </div>
          <div style={{ marginTop: 32 }}>
            <Link href="/fix" className="btn btn-primary btn-large">
              Depixelate Video Free &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section" aria-labelledby="features-heading">
        <div className="container text-center">
          <span className="badge">Why PixelFix</span>
          <h2 id="features-heading">The Easiest Way to Unpixelate Video</h2>
          <p style={{ maxWidth: 600, margin: '12px auto 0' }}>
            A focused toolkit built to remove pixelation from any clip — from phone
            recordings to old camcorder tapes.
          </p>
          <div className="features-grid" role="list">
            <article className="feature-card" role="listitem">
              <h3>Purpose-Built Deblocking</h3>
              <p>
                Repair parameters are tuned specifically for blocky and compressed clips,
                so depixelation is sharper than a generic enhancer.
              </p>
            </article>
            <article className="feature-card" role="listitem">
              <h3>Depixelate + Upscale Together</h3>
              <p>
                PixelFix removes pixelation and enlarges the cleaned frame in a single
                pass, avoiding the artificial look of upscaling alone.
              </p>
            </article>
            <article className="feature-card" role="listitem">
              <h3>Works on Any Device</h3>
              <p>
                Fully browser-based and responsive — depixelate video online from desktop,
                phone, or tablet with no install.
              </p>
            </article>
            <article className="feature-card" role="listitem">
              <h3>No Watermark, Ever</h3>
              <p>
                Every export, including free ones, is completely watermark-free so your
                repaired footage stays yours.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== CHROMEBOOK ===== */}
      <section className="section" aria-labelledby="chromebook-heading">
        <div className="container text-center">
          <span className="badge">ChromeOS Ready</span>
          <h2 id="chromebook-heading">Depixelate Video on Chromebook &amp; Any Browser</h2>
          <p style={{ maxWidth: 640, margin: '12px auto 0' }}>
            PixelFix runs entirely in your browser, so you can fix pixelated video on Chromebook without installing any software. Open Chrome on your ChromeOS device, upload a clip, and let the AI unpixelate video online free — no app and no extension required. It also works on Windows, Mac, Linux, Android, and iOS.
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="section section-alt" aria-labelledby="faq-heading">
        <div className="container text-center">
          <span className="badge">FAQ</span>
          <h2 id="faq-heading">Frequently Asked Questions About Depixelating Video</h2>
          <p style={{ maxWidth: 600, margin: '12px auto 0' }}>
            Everything you need to know before you start removing pixelation from your
            footage.
          </p>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section" aria-label="Call to action">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to Depixelate Your Video?</h2>
            <p>
              Upload your blocky or pixelated clip and let the AI reconstruct every frame.
              Free to start — no account required. No watermarks on any export.
            </p>
            <Link href="/fix" className="btn btn-white btn-xl">
              Depixelate Video for Free
            </Link>
            <p className="cta-sub">
              Want the full walkthrough?{' '}
              <Link href="/blog/depixelate-video">Read how to depixelate a video step by step &rarr;</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
