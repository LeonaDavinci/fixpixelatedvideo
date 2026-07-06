import type { Metadata } from 'next';
import Link from 'next/link';
import BeforeAfterDemo from '@/components/BeforeAfterDemo';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'How to Fix Pixelated Video | Free AI Video Repair Tool',
  description: 'Learn how to fix pixelated video with our free AI-powered online tool. Repair blocky footage, remove compression artifacts, and restore clarity up to 4K.',
  openGraph: {
    title: 'How to Fix Pixelated Video - Free AI Video Repair Tool',
    description: 'Repair pixelated, blocky, and damaged videos online for free. AI reconstructs every frame.',
  },
};

/* ===== DATA ===== */
const problems = [
  { icon: '\uD83D\uDFEB', title: 'Pixelated & Blocky Footage', desc: 'Heavy compression turns smooth video into blocky output. Our AI reconstructs smooth edges and gradients, making video watchable again.' },
  { icon: '\uD83D\uDCFC', title: 'Old & Degraded VHS / Archival Footage', desc: 'VHS digitizations and archival video degrade over time. We rebuild lost detail and bring old footage up to modern viewing standards.' },
  { icon: '\uD83D\uDD04', title: 'Transcoding & Re-encoding Damage', desc: 'Every format conversion loses quality. If your video has been converted multiple times, we recover the detail lost through repeated transcoding.' },
  { icon: '\uD83C\uDF2B\uFE0F', title: 'Compression Artifacts & Ringing', desc: 'JPEG-like ringing, halos, banding, and color bleed caused by aggressive codec compression are identified and removed per-frame.' },
  { icon: '\uD83D\uDCE1', title: 'Low Bitrate & Streaming Damage', desc: 'Videos downloaded from social media at low quality often have severe compression. Our tool helps restore the original look of these clips.' },
  { icon: '\uD83D\uDD0D', title: 'Low-Resolution Upscale Blur', desc: 'Simply upscaling a low-res video leaves it soft and blurry. We combine repair and AI upscaling in one pass for sharper details.' },
];

const features = [
  { icon: '\uD83C\uDF9E\uFE0F', title: 'Frame-by-Frame AI Reconstruction', desc: 'Unlike simple filters, our AI analyzes and repairs each individual frame based on its unique damage pattern.' },
  { icon: '\u2B06\uFE0F', title: 'Repair & Upscale to 4K in One Pass', desc: 'Fix pixelation and increase resolution simultaneously. Export in 1080p, 2K, or 4K without processing the video twice.' },
  { icon: '\uD83C\uDF10', title: '100% Browser-Based — No Software', desc: 'Works on desktop, tablet, and mobile. Open your browser and start fixing — no downloads, no installations, no plugins.' },
  { icon: '\uD83D\uDD12', title: 'Zero-Retention Privacy', desc: 'Your videos are encrypted during upload and automatically deleted after processing. Never used for AI training.' },
  { icon: '\uD83D\uDCA7', title: 'Watermark-Free Downloads', desc: 'Every export is completely free of watermarks. Your repaired video is yours — clean, professional, ready to publish.' },
  { icon: '\uD83D\uDE80', title: 'Fast Cloud Processing', desc: 'GPU-accelerated cloud infrastructure processes your video quickly even without a powerful local machine.' },
];

const whyItems = [
  { title: 'Per-Frame Damage Analysis', desc: 'The AI diagnoses each frame individually — identifying pixelation type, compression level, and detail loss — then applies a targeted fix.' },
  { title: 'Trained on Millions of Video Pairs', desc: 'Our model learned by comparing damaged and pristine versions of millions of real video clips. It knows what "good" looks like.' },
  { title: 'Temporal Consistency Across Frames', desc: 'Unlike image upscalers applied to video, our model understands motion — ensuring repaired frames are temporally consistent.' },
  { title: 'Handles Multiple Damage Types Simultaneously', desc: 'A single video can have pixelation, blurriness, and noise all at once. Our AI repairs each damage type in one unified pass.' },
];

const useCases = [
  { tag: 'Filmmakers & Editors', title: 'Salvage Unusable Client Footage', desc: 'Client footage arrives in all conditions. Fix heavily pixelated clips from transcoding errors and deliver something usable in the final cut.', coverClass: 'uc-1', coverIcon: '\uD83C\uDFAC' },
  { tag: 'Content Creators & YouTubers', title: 'Repurpose Old Tutorial Recordings', desc: 'Have old recordings that look embarrassingly low quality? Repair and upscale to 2K or 4K so they match your newer content.', coverClass: 'uc-2', coverIcon: '\uD83D\uDCF9' },
  { tag: 'Family Archivists', title: 'Restore VHS & Old Home Videos', desc: 'Bring VHS digitizations and 1980s home video recordings to a standard your family can enjoy on a modern TV. Preserve those memories.', coverClass: 'uc-3', coverIcon: '\uD83C\uDFE1' },
];

const testimonials = [
  { stars: 5, text: 'Client footage arrives in all conditions. The repair tool handled a heavily pixelated clip from a transcoding error and produced something the client could actually use.', initials: 'IS', name: 'Isabella T.', role: 'Video Editor' },
  { stars: 5, text: 'I had old tutorial recordings that looked embarrassingly pixelated. PixelFix repaired and upscaled them to 2K. They\'re now consistent with my newer content.', initials: 'LC', name: 'Lucas C.', role: 'Content Creator' },
  { stars: 4, text: 'VHS digitizations from the 1980s. PixelFix brought them to a standard the family can watch on a modern TV. That\'s what mattered most.', initials: 'AM', name: 'Amara M.', role: 'Family Archivist' },
  { stars: 5, text: 'Brand videos from years ago looked terrible by today\'s standards. PixelFix repaired and upscaled them — they\'re back in our active content rotation.', initials: 'CM', name: 'Connor M.', role: 'Marketing Manager' },
  { stars: 5, text: 'Archival footage for a documentary project — some significantly damaged from repeated transcoding. PixelFix recovered enough detail to make it usable.', initials: 'SF', name: 'Sophia F.', role: 'Filmmaker' },
  { stars: 5, text: 'Repurposing old content from a hard drive. Most of it was in rough shape. PixelFix handled repair and upscaling in one pass — saved me from two different tools.', initials: 'DY', name: 'Dylan Y.', role: 'YouTuber' },
];

const faqItems = [
  { question: 'What does a video repair tool actually do?', answer: 'A video repair tool analyzes damaged, pixelated, or degraded video and reconstructs missing or corrupted detail frame by frame. Our AI processes pixelation, compression artifacts, blur, and quality degradation from old or repeatedly transcoded footage — producing a cleaner, clearer output.' },
  { question: 'Can PixelFix repair pixelated MP4 videos?', answer: 'Yes. MP4 is our most commonly repaired format. We handle pixelation, blocky compression artifacts, and softening caused by aggressive MP4 encoding.' },
  { question: 'Is it free to fix pixelated video online?', answer: 'Uploading and previewing your repaired video is completely free with no account required. Full-resolution exports without watermarks use credits. Never pay until you\'re satisfied with the result.' },
  { question: 'Can I upscale and repair my video at the same time?', answer: 'Yes. PixelFix handles repair and upscaling in one unified pass. Choose your output resolution (1080p, 2K, or 4K) before processing — the AI fixes damage and increases resolution simultaneously.' },
  { question: 'What video formats are supported?', answer: 'We support MP4, MOV, AVI, MKV, WebM, WMV and other common video formats. No pre-conversion is required — just upload your file directly and the tool handles the rest.' },
  { question: 'Is my video kept private and secure?', answer: 'Absolutely. Your video is encrypted during upload and automatically deleted after processing. We maintain a strict zero-retention policy and never use uploaded videos for AI training.' },
];

export default function HomePage() {
  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Fix Pixelated Video',
            description: 'Step-by-step guide to fix pixelated, blocky, and degraded video using AI technology.',
            step: [
              { '@type': 'HowToStep', position: 1, name: 'Upload Your Pixelated Video', text: 'Drag and drop or click to upload your pixelated or damaged video file.' },
              { '@type': 'HowToStep', position: 2, name: 'AI Repairs Every Frame', text: 'Our AI analyzes and reconstructs each frame, removing pixelation, compression artifacts, and blur.' },
              { '@type': 'HowToStep', position: 3, name: 'Preview and Download', text: 'Preview the repaired video and download in up to 4K resolution — no watermark.' },
            ],
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-kicker">Free AI Video Repair Tool</p>
              <h1 className="hero-title">How to <em>Fix Pixelated Video</em> in Seconds</h1>
              <p className="hero-desc">
                Stop struggling with blocky, blurry, or damaged footage. Our AI reconstructs every frame — removing pixelation, compression artifacts, and blur — restoring your video to stunning clarity up to 4K.
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
            <span className="upload-icon" aria-hidden="true">\uD83C\uDFAC</span>
            <h2>Upload Your Pixelated Video</h2>
            <p>Drag &amp; drop, paste, or click to select your file &mdash; MP4, MOV, AVI and more supported</p>
            <span className="btn btn-primary btn-large">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" /></svg>
              Start Fixing &mdash; It&apos;s Free
            </span>
            <p className="upload-formats">Supported: MP4 &middot; MOV &middot; AVI &middot; MKV &middot; WebM &middot; WMV &mdash; No conversion needed</p>
          </Link>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="how-it-works" className="section section-alt" aria-labelledby="how-heading">
        <div className="container text-center">
          <span className="badge">Step-by-Step Guide</span>
          <h2 id="how-heading">How to Fix Pixelated Video in 3 Easy Steps</h2>
          <p style={{ maxWidth: 600, margin: '12px auto 0' }}>No technical knowledge required. Our AI handles the complex frame-by-frame reconstruction automatically.</p>
          <div className="steps-grid" role="list">
            <article className="step-card" role="listitem">
              <span className="step-number" aria-hidden="true">01</span>
              <span className="step-icon" aria-hidden="true">\uD83D\uDCE4</span>
              <h3>Upload Your Pixelated Video</h3>
              <p>Drag and drop or click to upload your damaged, blurry, or blocky video. Supports MP4, MOV, AVI, MKV and all major formats — no conversion needed beforehand.</p>
            </article>
            <article className="step-card" role="listitem">
              <span className="step-number" aria-hidden="true">02</span>
              <span className="step-icon" aria-hidden="true">\uD83E\uDD16</span>
              <h3>AI Repairs Every Frame Automatically</h3>
              <p>Our deep-learning AI analyzes each frame individually — identifying damage type and severity — then reconstructs missing pixel data and removes compression artifacts.</p>
            </article>
            <article className="step-card" role="listitem">
              <span className="step-number" aria-hidden="true">03</span>
              <span className="step-icon" aria-hidden="true">\u2B07\uFE0F</span>
              <h3>Preview, Compare &amp; Download</h3>
              <p>Review your repaired video with a side-by-side comparison before exporting. Download up to 4K — completely watermark-free. Free to preview.</p>
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
            <p style={{ maxWidth: 600, margin: '12px auto 0' }}>From minor blurriness to severe block artifacts, our AI handles a wide range of video degradation problems.</p>
          </div>
          <div className="problems-grid" role="list">
            {problems.map((p, i) => (
              <article className="problem-card" key={i} role="listitem">
                <span className="problem-icon" aria-hidden="true">{p.icon}</span>
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
          <h2 id="features-heading">Everything You Need to Unpixelate &amp; Restore Video</h2>
          <p style={{ maxWidth: 600, margin: '12px auto 0' }}>A complete toolkit powered by advanced deep learning, built for everyone from creators to archivists.</p>
          <div className="features-grid" role="list">
            {features.map((f, i) => (
              <article className="feature-card" key={i} role="listitem">
                <span className="feature-icon" aria-hidden="true">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
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
                <div className="stat-box"><span className="stat-num">4.8&#9733;</span><span className="stat-label">Average User Rating</span></div>
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
          <h2 id="usecases-heading">Video Repair for Every Creator &amp; Archivist</h2>
          <p style={{ maxWidth: 600, margin: '12px auto 0' }}>Whether you&apos;re a professional filmmaker, content creator, or preserving family memories — PixelFix has you covered.</p>
          <div className="usecases-grid" role="list">
            {useCases.map((uc, i) => (
              <article className="usecase-card" key={i} role="listitem">
                <div className={`usecase-cover ${uc.coverClass}`} aria-hidden="true">{uc.coverIcon}</div>
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
                <div className="stars" aria-label={`${t.stars} stars`}>
                  {Array.from({ length: 5 }, (_, j) => j < t.stars ? '\u2605' : '\u2606').join('')}
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
          <h2 id="faq-heading">Frequently Asked Questions &mdash; How to Fix Pixelated Video</h2>
          <p style={{ maxWidth: 600, margin: '12px auto 0' }}>Everything you need to know before you start repairing your footage.</p>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="section" aria-label="Call to action">
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to Fix Your Pixelated Video?</h2>
            <p>Upload your damaged or pixelated video and let the AI reconstruct every frame. Free to start — no account required. No watermarks on any export.</p>
            <Link href="/fix" className="btn btn-white btn-xl">
              \uD83C\uDFAC Repair Your Video for Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
