import type { Metadata } from 'next';
import Link from 'next/link';
import BeforeAfterDemo from '@/components/BeforeAfterDemo';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'How to Fix Pixelated Video — Free AI Video Repair Tool',
  description:
    'Learn how to fix pixelated video with AI. Remove blocky compression artifacts, repair blurry footage, and upscale to 4K. Free to start, no software install, no watermark.',
  alternates: { canonical: 'https://pixelfix.ai' },
  openGraph: {
    title: 'How to Fix Pixelated Video — Free AI Video Repair Tool',
    description:
      'Repair pixelated, blocky, and damaged videos online. AI reconstructs every frame and restores clarity up to 4K.',
    url: 'https://pixelfix.ai',
  },
};

/* ===== DATA ===== */
const problems = [
  {
    title: 'Pixelated and Blocky Footage',
    desc: 'Heavy compression breaks smooth video into visible blocks. Our AI reconstructs clean edges and gradients so footage looks natural again.',
  },
  {
    title: 'Old or Degraded VHS and Archival Footage',
    desc: 'VHS digitizations and archival clips degrade over decades. We rebuild lost detail and bring old footage up to modern viewing standards.',
  },
  {
    title: 'Transcoding and Re-encoding Damage',
    desc: 'Every format conversion loses quality. If a clip has been re-encoded multiple times, we recover the detail lost through repeated transcoding.',
  },
  {
    title: 'Compression Artifacts and Ringing',
    desc: 'Ringing halos, banding, and color bleed caused by aggressive codec compression are identified and removed frame by frame.',
  },
  {
    title: 'Low Bitrate and Streaming Damage',
    desc: 'Videos downloaded from social platforms at low bitrates often suffer from severe compression. Our tool restores the original look of these clips.',
  },
  {
    title: 'Low-Resolution Upscale Blur',
    desc: 'Simply upscaling a low-resolution video leaves it soft and muddy. We combine repair and AI upscaling in one pass for sharper detail.',
  },
];

const features = [
  {
    title: 'Frame-by-Frame AI Reconstruction',
    desc: 'Unlike simple filters, our AI analyzes and repairs each individual frame based on its unique damage pattern.',
  },
  {
    title: 'Repair and Upscale to 4K in One Pass',
    desc: 'Fix pixelation and increase resolution simultaneously. Export in 1080p, 2K, or 4K without processing the video twice.',
  },
  {
    title: 'Fully Browser-Based, No Software Needed',
    desc: 'Works on desktop, tablet, and mobile. Open your browser and start fixing — no downloads, installations, or plugins.',
  },
  {
    title: 'Zero-Retention Privacy',
    desc: 'Your videos are encrypted during upload and automatically deleted after processing. We never use them for AI training.',
  },
  {
    title: 'Watermark-Free Downloads',
    desc: 'Every export is completely free of watermarks. Your repaired video is yours — clean, professional, ready to publish.',
  },
  {
    title: 'Fast Cloud Processing',
    desc: 'GPU-accelerated cloud infrastructure processes your video quickly, even without a powerful local machine.',
  },
];

const products = [
  {
    type: 'Desktop Software',
    title: 'PixelFix Desktop for Windows and Mac',
    desc: 'Run repairs on your own machine for unlimited batch jobs and maximum privacy. Ideal for archives, editors, and studios processing large volumes of degraded footage.',
    tags: ['Windows 11', 'macOS 12+', 'Batch 50+ videos', 'GPU acceleration'],
    cta: 'Download for Desktop',
  },
  {
    type: 'Shopify Plugin',
    title: 'PixelFix for Shopify Stores',
    desc: 'Automatically enhance every product video the moment it is uploaded. Sharper listings lead to higher trust and better conversion — no manual editing required.',
    tags: ['1-click install', 'Auto-enhance on upload', 'Boosts conversion', 'No code needed'],
    cta: 'Add the Shopify Plugin',
  },
];

const compareTools = [
  {
    name: 'Topaz Video AI',
    strengths: 'Highest-quality AI upscaling and professional-grade restoration models.',
    bestFor: 'Filmmakers and studios doing heavy, frame-by-frame restoration.',
    pricing: '$299 one-time (or annual license)',
  },
  {
    name: 'Adobe Premiere Pro',
    strengths: 'Full professional editing suite with basic noise and blur filters.',
    bestFor: 'Editors who need a complete timeline and are not fixing pixelation alone.',
    pricing: '$22.99 / month subscription',
  },
  {
    name: 'Vmake.ai',
    strengths: 'Online AI video enhancer with quick quality boosts.',
    bestFor: 'Creators wanting fast, browser-based touch-ups.',
    pricing: 'From $9.99 / month subscription',
  },
  {
    name: 'Remini',
    strengths: 'Mobile-first photo and short-video enhancer.',
    bestFor: 'Casual users improving clips on a phone.',
    pricing: 'Freemium, ~$6 / month subscription',
  },
  {
    name: 'CapCut',
    strengths: 'Free editor with basic enhancement and upscale tools.',
    bestFor: 'Social creators making short-form content.',
    pricing: 'Free, Pro at $7.99 / month',
  },
  {
    name: 'PixelFix',
    strengths: 'Built specifically to unpixelate video — most repair parameters and methods, best result on blocky footage.',
    bestFor: 'Anyone who needs pixelated or blocky video repaired and upscaled.',
    pricing: 'Free to start, low-cost one-time plans',
    highlight: true,
  },
];

const whyUs = [
  {
    title: 'Built Only to Fix Pixelated Video',
    desc: 'General editors treat pixelation as one filter among many. PixelFix is purpose-built for it, so every model and control targets blocky, compressed footage.',
  },
  {
    title: 'More Unpixelate Parameters and Methods',
    desc: 'Fine-tune deblocking strength, pixelation-type detection, denoise, sharpening, and upscale factor — far more control than a single one-click slider.',
  },
  {
    title: 'Better Results on Severe Artifacts',
    desc: 'Our models are trained specifically on pixelation and compression damage, recovering edges and detail that generic enhancers smooth away.',
  },
  {
    title: 'Lower Price, No Heavy Subscription',
    desc: 'Start free and only pay when you export. No $20+ per month commitment just to repair an occasional clip.',
  },
  {
    title: 'One-Time Payment Option',
    desc: 'Own the desktop software outright. Pay once, use forever — no recurring fees, no surprise renewals.',
  },
  {
    title: 'Works Everywhere You Do',
    desc: 'Browser, desktop app, and Shopify plugin — repair a single clip online or automate enhancement across an entire store.',
  },
];

const whyItems = [
  {
    title: 'Per-Frame Damage Analysis',
    desc: 'The AI diagnoses each frame individually — identifying pixelation type, compression level, and detail loss — then applies a targeted fix.',
  },
  {
    title: 'Trained on Millions of Video Pairs',
    desc: 'Our model learned by comparing damaged and pristine versions of millions of real video clips. It knows what clean footage should look like.',
  },
  {
    title: 'Temporal Consistency Across Frames',
    desc: 'Unlike image upscalers applied to video, our model understands motion — ensuring repaired frames stay consistent across time.',
  },
  {
    title: 'Handles Multiple Damage Types at Once',
    desc: 'A single video can have pixelation, blurriness, and noise simultaneously. Our AI repairs each damage type in one unified pass.',
  },
];

const useCases = [
  {
    tag: 'Filmmakers and Editors',
    title: 'Salvage Unusable Client Footage',
    desc: 'Client footage arrives in all conditions. Fix heavily pixelated clips from transcoding errors and deliver something usable in the final cut.',
    coverClass: 'uc-1',
  },
  {
    tag: 'Content Creators and YouTubers',
    title: 'Repurpose Old Tutorial Recordings',
    desc: 'Have old recordings that look embarrassingly low quality? Repair and upscale to 2K or 4K so they match your newer content.',
    coverClass: 'uc-2',
  },
  {
    tag: 'Family Archivists',
    title: 'Restore VHS and Old Home Videos',
    desc: 'Bring VHS digitizations and 1980s home recordings to a standard your family can enjoy on a modern TV. Preserve those memories.',
    coverClass: 'uc-3',
  },
];

const testimonials = [
  {
    stars: 5,
    text: 'Client footage arrived in rough shape from a transcoding error. PixelFix handled the pixelation and produced something the client could actually use.',
    initials: 'IT',
    name: 'Isabella T.',
    role: 'Video Editor',
  },
  {
    stars: 5,
    text: 'I had old tutorial recordings that looked embarrassingly pixelated. PixelFix repaired and upscaled them to 2K. They match my newer content now.',
    initials: 'LC',
    name: 'Lucas C.',
    role: 'Content Creator',
  },
  {
    stars: 4,
    text: 'VHS digitizations from the 1980s. PixelFix brought them to a standard the family can watch on a modern TV. That is what mattered most.',
    initials: 'AM',
    name: 'Amara M.',
    role: 'Family Archivist',
  },
  {
    stars: 5,
    text: 'Brand videos from years ago looked terrible by today\'s standards. PixelFix repaired and upscaled them — they are back in active rotation.',
    initials: 'CM',
    name: 'Connor M.',
    role: 'Marketing Manager',
  },
  {
    stars: 5,
    text: 'Archival footage for a documentary was significantly damaged from repeated transcoding. PixelFix recovered enough detail to make it usable.',
    initials: 'SF',
    name: 'Sophia F.',
    role: 'Filmmaker',
  },
  {
    stars: 5,
    text: 'Repurposing old content from a hard drive. Most of it was in rough shape. PixelFix handled repair and upscaling in one pass — saved me from two separate tools.',
    initials: 'DY',
    name: 'Dylan Y.',
    role: 'YouTuber',
  },
];

const faqItems = [
  {
    question: 'What does a video repair tool actually do?',
    answer:
      'A video repair tool analyzes damaged, pixelated, or degraded video and reconstructs missing or corrupted detail frame by frame. Our AI processes pixelation, compression artifacts, blur, and quality degradation from old or repeatedly transcoded footage — producing a cleaner, clearer output.',
  },
  {
    question: 'Can PixelFix repair pixelated MP4 videos?',
    answer:
      'Yes. MP4 is our most commonly repaired format. We handle pixelation, blocky compression artifacts, and softening caused by aggressive MP4 encoding.',
  },
  {
    question: 'Is it free to fix pixelated video online?',
    answer:
      'Uploading and previewing your repaired video is completely free with no account required. Full-resolution exports without watermarks use credits. You never pay until you are satisfied with the result.',
  },
  {
    question: 'Can I upscale and repair my video at the same time?',
    answer:
      'Yes. PixelFix handles repair and upscaling in one unified pass. Choose your output resolution (1080p, 2K, or 4K) before processing — the AI fixes damage and increases resolution simultaneously.',
  },
  {
    question: 'What video formats are supported?',
    answer:
      'We support MP4, MOV, AVI, MKV, WebM, WMV, and other common video formats. No pre-conversion is required — just upload your file directly and the tool handles the rest.',
  },
  {
    question: 'Is my video kept private and secure?',
    answer:
      'Yes. Your video is encrypted during upload and automatically deleted after processing. We maintain a strict zero-retention policy and never use uploaded videos for AI training.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* SEO Structured Data: HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Fix Pixelated Video',
            description:
              'Step-by-step guide to fix pixelated, blocky, and degraded video using AI technology.',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Upload Your Pixelated Video',
                text: 'Drag and drop or click to upload your pixelated or damaged video file.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'AI Repairs Every Frame',
                text: 'Our AI analyzes and reconstructs each frame, removing pixelation, compression artifacts, and blur.',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Preview and Download',
                text: 'Preview the repaired video with a before/after comparison, then download in up to 4K resolution — no watermark.',
              },
            ],
          }),
        }}
      />

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
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-kicker">Free AI Video Repair Tool</p>
              <h1>How to Fix Pixelated Video in Seconds</h1>
              <p className="hero-desc">
                Stop struggling with blocky, blurry, or damaged footage. Our AI
                reconstructs every frame — removing pixelation, compression artifacts,
                and blur — restoring your video to clean, sharp clarity up to 4K.
              </p>
              <div className="hero-cta">
                <Link href="/fix" className="btn btn-primary btn-large">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" />
                  </svg>
                  Fix Pixelated Video Free
                </Link>
                <a href="#how-it-works" className="btn btn-outline">See How It Works</a>
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
            <BeforeAfterDemo />
          </div>
        </div>
      </section>

      {/* ===== UPLOAD CTA ===== */}
      <section className="upload-cta-section" aria-label="Upload your video">
        <div className="container">
          <Link href="/fix" className="upload-box">
            <span className="upload-icon" aria-hidden="true">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" /></svg>
            </span>
            <h2>Upload Your Pixelated Video</h2>
            <p>
              Drag and drop, paste, or click to select your file — MP4, MOV, AVI and
              more supported
            </p>
            <span className="btn btn-primary btn-large">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" /></svg>
              Start Fixing — It&apos;s Free
            </span>
            <p className="upload-formats">
              Supported: MP4 &middot; MOV &middot; AVI &middot; MKV &middot; WebM &middot; WMV — No conversion needed
            </p>
          </Link>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="section section-alt" aria-labelledby="how-heading">
        <div className="container text-center">
          <span className="badge">Step-by-Step Guide</span>
          <h2 id="how-heading">How to Fix Pixelated Video in 3 Easy Steps</h2>
          <p style={{ maxWidth: 600, margin: '12px auto 0' }}>
            No technical knowledge required. Our AI handles the complex frame-by-frame
            reconstruction automatically.
          </p>
          <div className="steps-grid" role="list">
            <article className="step-card" role="listitem">
              <span className="step-number" aria-hidden="true">01</span>
              <h3>Upload Your Pixelated Video</h3>
              <p>
                Drag and drop or click to upload your damaged, blurry, or blocky video.
                Supports MP4, MOV, AVI, MKV and all major formats — no conversion
                needed beforehand.
              </p>
            </article>
            <article className="step-card" role="listitem">
              <span className="step-number" aria-hidden="true">02</span>
              <h3>AI Repairs Every Frame Automatically</h3>
              <p>
                Our deep-learning AI analyzes each frame individually — identifying
                damage type and severity — then reconstructs missing pixel data and
                removes compression artifacts.
              </p>
            </article>
            <article className="step-card" role="listitem">
              <span className="step-number" aria-hidden="true">03</span>
              <h3>Preview, Compare and Download</h3>
              <p>
                Review your repaired video with a side-by-side comparison before
                exporting. Download up to 4K — completely watermark-free. Free to
                preview.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== PROBLEMS ===== */}
      <section id="problems" className="section" aria-labelledby="problems-heading">
        <div className="container">
          <div className="text-center">
            <span className="badge">Video Problems Solved</span>
            <h2 id="problems-heading">What Types of Pixelated Video Can We Fix?</h2>
            <p style={{ maxWidth: 600, margin: '12px auto 0' }}>
              From minor blurriness to severe block artifacts, our AI handles a wide
              range of video degradation problems.
            </p>
          </div>
          <div className="problems-grid" role="list">
            {problems.map((p, i) => (
              <article className="problem-card" key={i} role="listitem">
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="section section-alt" aria-labelledby="features-heading">
        <div className="container text-center">
          <span className="badge">Product Features</span>
          <h2 id="features-heading">Everything You Need to Unpixelate and Restore Video</h2>
          <p style={{ maxWidth: 600, margin: '12px auto 0' }}>
            A complete toolkit powered by advanced deep learning, built for everyone
            from creators to archivists.
          </p>
          <div className="features-grid" role="list">
            {features.map((f, i) => (
              <article className="feature-card" key={i} role="listitem">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section id="products" className="section" aria-labelledby="products-heading">
        <div className="container">
          <div className="text-center">
            <span className="badge">Our Products</span>
            <h2 id="products-heading">PixelFix, Wherever You Work</h2>
            <p style={{ maxWidth: 600, margin: '12px auto 0' }}>
              One repair engine, delivered three ways. Use the free browser tool, the
              self-hosted desktop app, or the automated Shopify plugin.
            </p>
          </div>
          <div className="products-grid" role="list">
            {products.map((p, i) => (
              <article className="product-card" key={i} role="listitem">
                <span className="product-icon" aria-hidden="true">
                  {i === 0 ? (
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="12" rx="2" />
                      <path d="M8 20h8M12 16v4" />
                    </svg>
                  ) : (
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M4 7l8-4 8 4v6c0 4-3 7-8 9-5-2-8-5-8-9V7z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  )}
                </span>
                <div className="product-body">
                  <span className="usecase-tag">{p.type}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="product-tags">
                    {p.tags.map((t, j) => (
                      <span className="product-tag" key={j}>{t}</span>
                    ))}
                  </div>
                  <Link href="/fix" className="btn btn-outline btn-sm" style={{ marginTop: 4 }}>
                    {p.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARE TOOLS ===== */}
      <section id="compare" className="section section-alt" aria-labelledby="compare-heading">
        <div className="container">
          <div className="text-center">
            <span className="badge">Buyer Guide</span>
            <h2 id="compare-heading">How to Choose Among Various Video Tools</h2>
            <p style={{ maxWidth: 640, margin: '12px auto 0' }}>
              Not every video tool fixes pixelation well. Here is how PixelFix compares
              with the most common options, and why it is the right pick for blocky footage.
            </p>
          </div>

          <div className="compare-scroll">
            <table className="compare-table">
              <thead>
                <tr>
                  <th scope="col">Tool</th>
                  <th scope="col">Strengths</th>
                  <th scope="col">Best For</th>
                  <th scope="col">Pricing</th>
                </tr>
              </thead>
              <tbody>
                {compareTools.map((t, i) => (
                  <tr key={i} className={t.highlight ? 'compare-row-us' : ''}>
                    <td className={t.highlight ? 'tool-us' : 'tool-name'}>{t.name}</td>
                    <td>{t.strengths}</td>
                    <td>{t.bestFor}</td>
                    <td>{t.pricing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="compare-reasons-title">Why Choose PixelFix for Pixelated Video</h3>
          <div className="reasons-grid" role="list">
            {whyUs.map((r, i) => (
              <article className="reason-card" key={i} role="listitem">
                <span className="reason-icon" aria-hidden="true">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY AI ===== */}
      <section id="why" className="section" aria-labelledby="why-heading">
        <div className="container">
          <div className="text-center">
            <span className="badge">The Technology</span>
            <h2 id="why-heading">Why AI Is the Best Way to Fix Pixelated Video</h2>
          </div>
          <div className="why-grid">
            <ul className="why-list" role="list">
              {whyItems.map((item, i) => (
                <li className="why-item" key={i} role="listitem">
                  <span className="why-check" aria-hidden="true">&#x2713;</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="why-visual" aria-label="Statistics">
              <h3>Trusted by Thousands of Creators</h3>
              <p>Professional-grade video restoration, now accessible to everyone.</p>
              <div className="stats-grid">
                <div className="stat-box"><span className="stat-num">4K</span><span className="stat-label">Max Output Resolution</span></div>
                <div className="stat-box"><span className="stat-num">4.8</span><span className="stat-label">Average User Rating</span></div>
                <div className="stat-box"><span className="stat-num">100%</span><span className="stat-label">Browser-based, No Install</span></div>
                <div className="stat-box"><span className="stat-num">0</span><span className="stat-label">Watermarks on Export</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== USE CASES ===== */}
      <section id="use-cases" className="section section-alt" aria-labelledby="usecases-heading">
        <div className="container text-center">
          <span className="badge">Who Uses PixelFix</span>
          <h2 id="usecases-heading">Video Repair for Every Creator and Archivist</h2>
          <p style={{ maxWidth: 600, margin: '12px auto 0' }}>
            Whether you are a professional filmmaker, content creator, or preserving
            family memories — PixelFix has you covered.
          </p>
          <div className="usecases-grid" role="list">
            {useCases.map((uc, i) => (
              <article className="usecase-card" key={i} role="listitem">
                <div className={`usecase-cover ${uc.coverClass}`} aria-hidden="true" />
                <div className="usecase-body">
                  <span className="usecase-tag">{uc.tag}</span>
                  <h3>{uc.title}</h3>
                  <p>{uc.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" className="section" aria-labelledby="testimonials-heading">
        <div className="container text-center">
          <span className="badge">User Reviews</span>
          <h2 id="testimonials-heading">What Our Users Say About Fixing Pixelated Videos</h2>
          <div className="testimonials-grid" role="list">
            {testimonials.map((t, i) => (
              <article className="testimonial-card" key={i} role="listitem">
                <div className="stars" aria-label={`${t.stars} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, j) => (j < t.stars ? '\u2605' : '\u2606')).join('')}
                </div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="author-avatar" aria-hidden="true">{t.initials}</div>
                  <div>
                    <span className="author-name">{t.name}</span>
                    <span className="author-role">{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="section section-alt" aria-labelledby="faq-heading">
        <div className="container text-center">
          <span className="badge">FAQ</span>
          <h2 id="faq-heading">Frequently Asked Questions About Fixing Pixelated Video</h2>
          <p style={{ maxWidth: 600, margin: '12px auto 0' }}>
            Everything you need to know before you start repairing your footage.
          </p>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="section" aria-label="Call to action">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to Fix Your Pixelated Video?</h2>
            <p>
              Upload your damaged or pixelated video and let the AI reconstruct every
              frame. Free to start — no account required. No watermarks on any export.
            </p>
            <Link href="/fix" className="btn btn-white btn-xl">
              Repair Your Video for Free
            </Link>
            <p className="cta-sub">
              Prefer a written walkthrough?{' '}
              <Link href="/blog">Read our complete guide to fixing pixelated video &rarr;</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
