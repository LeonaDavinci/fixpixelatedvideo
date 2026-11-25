import type { Metadata } from 'next';
import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';
import { FieldNotes, Scenarios, Tutorials, Caveats } from '@/components/DeepDive';

export const metadata: Metadata = {
  title: 'Depixelate Video Online — Fix Blocky Footage',
  description:
    'Depixelate video online free — remove pixelation from video and fix blocky artifacts with AI, then upscale to 4K. No install, no watermark.',
  keywords: [
    'depixelate video',
    'depixelate video online',
    'depixelate a video',
    'unpixelate video',
    'unpixel video',
    'remove pixelation from video',
    'remove pixelation from video online free',
    'how to remove pixelation from video',
    'pixel fixer',
    'pixel fixer video',
    'fix pixelated video online free',
    'video pixelation',
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
  {
    question: 'How do I remove pixelation from a video online free?',
    answer:
      'Open the tool in your browser, upload the clip, keep the Pixelated / Compressed damage type, and run the repair. You can remove pixelation from a video online free — no account, no install, and no watermark on the export.',
  },
  {
    question: 'Can I unpixel video that has already been re-uploaded?',
    answer:
      'Yes, but go back to the earliest copy you can find first. Each re-upload adds another compression pass, so if you unpixel video from the newest copy you are repairing two generations of damage at once and the result will look softer.',
  },
  {
    question: 'Does depixelating take long?',
    answer:
      'A 30 to 60 second clip usually finishes in about a minute on a normal laptop, roughly at playback speed. Longer or 4K files scale with length and resolution, and a Chromebook or phone will be slower than a desktop.',
  },
];

/* ===== DEPIXELATE-SPECIFIC CONTENT ===== */
const depixelateNotes = [
  {
    initials: 'RK',
    name: 'Rob K.',
    role: 'Freelance camera operator',
    device: 'Windows desktop · Chrome',
    footage: 'Client clip at 1.2 Mbps',
    settings: 'Pixelated / Compressed · Denoise 70 · Sharpen 40 · 1080p',
    quote:
      'A client sent over a "high quality" export that turned out to be 1.2 Mbps. Depixelating it gave me something I could intercut with the good cameras. It reads as soft footage now instead of broken footage.',
    outcome: 'Accepted in the final cut without a re-shoot.',
  },
  {
    initials: 'HM',
    name: 'Hannah M.',
    role: 'Church media volunteer',
    device: 'Chromebook · Chrome',
    footage: 'Sunday livestream VOD',
    settings: 'Pixelated / Compressed · output = source size',
    quote:
      'We only had the stream recording, and the praise band shots were full of blocks. I needed a way to remove pixelation from video without buying software, and a browser tab was all I had on the church Chromebook.',
    outcome: 'Recap clip posted the same evening.',
  },
  {
    initials: 'JV',
    name: 'Jonas V.',
    role: 'eBay reseller',
    device: 'Android phone · Chrome',
    footage: 'Indoor phone clips of used tools',
    settings: 'Grain / Noise · Denoise 75 · 1080p',
    quote:
      'Buyers zoom in on photos and videos before they bid, and my workshop is dark. Depixelating the clips made the edges of the tools readable, which is really all a listing needs.',
    outcome: 'Two listings sold within the week.',
  },
];

const depixelateScenarios = [
  {
    icon: '🧩',
    title: 'Mosaic blocks across flat areas',
    problem:
      'When a codec runs out of bits it approximates entire 8x8 or 16x16 blocks. Flat walls, skies and skin turn into visible tiles.',
    fix: 'raise denoise until the tile edges soften, then stop. Sharpening a flat area only re-draws the grid.',
    setup: 'Denoise high · Sharpen low',
  },
  {
    icon: '🌀',
    title: 'Ringing halos around hard edges',
    problem:
      'Aggressive compression leaves a faint bright outline around text, wires, railings and window frames.',
    fix: 'turn artifact removal on and keep sharpening moderate — halos grow back the moment you over-sharpen.',
    setup: 'Artifact removal on · Sharpen 40–50',
  },
  {
    icon: '🌈',
    title: 'Colour banding in gradients',
    problem:
      'Skies, sunsets and studio backdrops break into visible steps of colour instead of blending smoothly.',
    fix: 'depixelate first, then check the gradient at 100%. Light denoise smooths the steps without flattening the frame.',
    setup: 'Denoise 40–50 · Temporal on',
  },
  {
    icon: '🔍',
    title: 'Digital zoom from a phone',
    problem:
      'The camera cropped and upscaled internally, so the pixels never existed. Edges are soft and blocks sit around contrast.',
    fix: 'sharpen in small steps and judge on a still frame — this is the case where over-processing shows up fastest.',
    setup: 'Sharpen 45–55 · check at 100%',
  },
  {
    icon: '📤',
    title: 'Second-generation re-uploads',
    problem:
      'A file downloaded from one platform and uploaded to another carries two layers of block damage from two different encoders.',
    fix: 'work from the earliest copy you still have. Depixelating the newest copy means fighting both passes at once.',
    setup: 'Start from the original upload',
  },
  {
    icon: '🎞️',
    title: 'Old digitised tapes',
    problem:
      'Captured from VHS or Hi8 with a cheap capture card, these files combine tape noise with capture-card blocking.',
    fix: 'run temporal cleanup so flicker is handled across frames, then depixelate — the reverse order amplifies noise.',
    setup: 'Temporal cleanup on · 1080p',
  },
];

const depixelateTutorials = [
  {
    level: 'Beginner',
    time: '3 min',
    title: 'How to Remove Pixelation From a Video Online Free',
    intro:
      'The default workflow for blocky footage: no cost to preview, no account, and a watermark-free file at the end.',
    steps: [
      'Open the depixelate tool in any modern browser and drop your file on the upload box — MP4, MOV, AVI, MKV and WebM are accepted as-is.',
      'Leave the damage type on Pixelated / Compressed. It matches block artifacts from chat apps, streams and repeated re-encoding.',
      'Set denoise to about 65 and sharpen to about 45. If the frame still shows tiles, raise denoise. If it looks soft instead, raise sharpen.',
      'Choose 1080p unless the source was already sharp. Depixelating a 480p clip straight to 4K mostly enlarges the frame.',
      'Repair, inspect one frame at 100%, then download. Keep that export as your master copy.',
    ],
    href: '/fix',
    cta: 'Remove pixelation now',
  },
  {
    level: 'Intermediate',
    time: '4 min',
    title: 'How to Depixelate Without Washing Out the Detail',
    intro:
      'A depixelated frame should look clean, not flat. These are the two mistakes that cause the washed-out look.',
    steps: [
      'Do not stack maximum denoise with maximum sharpen. The first smears the texture and the second draws edges back on top of it.',
      'Treat denoise and sharpen as a trade: for blocks, denoise is your main control; for softness, sharpen is.',
      'Keep temporal cleanup on for footage with per-frame flicker, and off for a clean source that only needs deblocking.',
      'Judge on a still frame at 100% zoom, not the small preview — washing out is invisible at half size.',
      'If the result looks flat after export, go back one step and drop denoise by 15 rather than adding more sharpen.',
    ],
    href: '/fix',
    cta: 'Open the settings panel',
  },
];

const depixelateCaveats = [
  {
    title: 'Depixelating is not the same as recovering',
    body:
      'The encoder discarded the detail; depixelation estimates what plausibly belongs there and removes the block structure. Clean, natural frames — yes. The exact pixels from a better master — no.',
  },
  {
    title: 'Do not re-encode the export again',
    body:
      'Every save of the exported file adds compression. Upload or send the file you downloaded, not a copy that has been through another editor first.',
  },
  {
    title: 'Depixelate before you upscale',
    body:
      'Upscaling a still-blocky frame enlarges the blocks along with everything else, and they become harder to remove later. Clean the frame first, then enlarge.',
  },
  {
    title: 'Severe mosaic is only partly reversible',
    body:
      'If the blocks are larger than the subject — a face that is four tiles wide — there is not enough information left for any tool to rebuild it. Expect a tidier frame, not a recognisable one.',
  },
];

const depixelateChecklist = {
  title: 'A 30-second check before you export',
  items: [
    'Zoom to 100% on a flat area — sky, a wall, a cheek. If tiles are gone there, the rest of the frame is clean.',
    'Look at the sharpest edge you can find. A thin bright outline means you over-sharpened.',
    'Play the last few seconds and confirm the audio still lines up with the picture.',
  ],
};

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

      {/* ===== FIELD NOTES ===== */}
      <FieldNotes
        id="depixelate-field-notes"
        alt
        kicker="Reader Reports"
        heading="How People Actually Depixelate Their Footage"
        intro="Three write-ups from users who depixelate video for work — the source file, the device they used, and the settings that finally worked."
        items={depixelateNotes}
      />

      {/* ===== SCENARIOS ===== */}
      <Scenarios
        id="depixelate-scenarios"
        kicker="What Blocks Look Like"
        heading="Six Kinds of Pixelation — and What Each One Needs"
        intro="Not every blocky frame is the same problem. Identifying which artifact you are looking at is the difference between a clean result and a smeared one."
        items={depixelateScenarios}
      />

      {/* ===== TUTORIALS ===== */}
      <Tutorials
        id="depixelate-tutorials"
        alt
        kicker="Tutorials"
        heading="How to Remove Pixelation From a Video — Two Walkthroughs"
        intro="One workflow for getting it done in three minutes, and one for keeping the result from looking flat and over-processed."
        items={depixelateTutorials}
      />

      {/* ===== CAVEATS ===== */}
      <Caveats
        id="depixelate-notes"
        kicker="Before You Depixelate"
        heading="Limits Worth Knowing Before You Start"
        intro="Depixelation removes damage; it does not restore what was never recorded. These four points set the right expectations."
        items={depixelateCaveats}
        checklist={depixelateChecklist}
      />

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
