import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help Center - How to Fix Pixelated Video',
  description: 'Comprehensive guide on fixing pixelated videos with PixelFix. Learn about supported formats, troubleshooting, and best practices for video repair.',
};

export default function HelpPage() {
  return (
    <>
      {/* ===== HELP HERO ===== */}
      <section className="help-hero" aria-label="Help hero">
        <div className="container">
          <span className="badge">Documentation</span>
          <h1>PixelFix Help Center</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Everything you need to know about fixing pixelated video — from getting started to advanced configuration.
          </p>
        </div>
      </section>

      {/* ===== HELP CONTENT ===== */}
      <section className="help-content">
        <div className="container">
          <div className="help-grid">
            {/* Sidebar */}
            <nav className="help-sidebar" aria-label="Help sidebar">
              <ul>
                <li><a href="#getting-started">Getting Started</a></li>
                <li><a href="#supported-formats">Supported Formats</a></li>
                <li><a href="#repair-modes">Repair Modes</a></li>
                <li><a href="#quality-settings">Quality Settings</a></li>
                <li><a href="#troubleshooting">Troubleshooting</a></li>
                <li><a href="#privacy-security">Privacy & Security</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </nav>

            {/* Main Content */}
            <div className="help-main">

              <article className="help-section" id="getting-started">
                <h2>Getting Started</h2>
                <p>
                  PixelFix is an AI-powered video repair tool designed to fix pixelated, blocky, and degraded footage.
                  Whether you are restoring old family videos or salvaging damaged client footage, our deep-learning engine
                  reconstructs every frame to produce clean, sharp output up to 4K resolution.
                </p>
                <div className="help-note">
                  <p><strong>Pro tip:</strong> For best results, upload the highest-quality source file you have available.
                  Even heavily compressed videos can be repaired, but starting from the best available source always yields superior output.</p>
                </div>
                <h3>Quick Start (3 Steps)</h3>
                <ol>
                  <li><strong>Go to the <a href="/fix">Fix page</a></strong> and upload your pixelated video (drag & drop, paste, or click to browse).</li>
                  <li><strong>Configure repair settings</strong> in the sidebar — choose your repair mode, output resolution, and optional denoising/sharpening strength.</li>
                  <li><strong>Click &quot;Start AI Repair&quot;</strong> and wait for the AI to process your video. Once complete, preview the result with the before/after comparison slider, then download in your chosen resolution.</li>
                </ol>
              </article>

              <article className="help-section" id="supported-formats">
                <h2>Supported Formats & Limitations</h2>
                <p>PixelFix supports a broad range of video formats with no pre-conversion required. Below are the full specifications:</p>
                <table className="help-table" aria-label="Supported video formats">
                  <thead>
                    <tr>
                      <th scope="col">Property</th>
                      <th scope="col">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Input Formats</td><td>MP4, MOV, AVI, MKV, WebM, WMV, FLV, M4V</td></tr>
                    <tr><td>Max File Size</td><td>2 GB per upload</td></tr>
                    <tr><td>Max Duration</td><td>60 minutes (upgrade for longer)</td></tr>
                    <tr><td>Input Resolution</td><td>Any resolution supported (SD, HD, Full HD, 4K)</td></tr>
                    <tr><td>Output Resolution</td><td>Original, 1080p, 2K (1440p), 4K (2160p)</td></tr>
                    <tr><td>Output Format</td><td>MP4 (H.264)</td></tr>
                    <tr><td>Browser Support</td><td>Chrome, Firefox, Edge, Safari (latest 2 versions)</td></tr>
                  </tbody>
                </table>
              </article>

              <article className="help-section" id="repair-modes">
                <h2>Repair Modes Explained</h2>
                <p>PixelFix offers four AI repair modes, each optimized for different types of video damage:</p>

                <h3>Balanced (Recommended)</h3>
                <p>
                  The default mode that works well on most videos with moderate pixelation, compression artifacts,
                  or general quality loss. It strikes a balance between aggressive repair and preserving natural detail.
                </p>

                <h3>Aggressive Repair</h3>
                <p>
                  Best for severely damaged footage with heavy pixelation or block artifacts. This mode pushes the AI
                  to be more aggressive in reconstructing missing detail. May occasionally over-sharpen, so preview before exporting.
                </p>

                <h3>Gentle Restoration</h3>
                <p>
                  Ideal for videos with minor quality issues. It cleans up light compression artifacts and soft blur
                  without altering the look of the original footage. Great for polished content that just needs a touch-up.
                </p>

                <h3>Archival / VHS Mode</h3>
                <p>
                  Specifically tuned for digitized VHS tapes, old camcorder footage, and archival material.
                  This mode addresses age-specific degradation: tape noise, color shifting, and temporal instability.
                </p>
              </article>

              <article className="help-section" id="quality-settings">
                <h2>Quality Settings Guide</h2>
                <h3>Denoising Strength</h3>
                <p>
                  Controls how much noise is removed from the video. Higher values remove more noise but can slightly
                  soften fine texture. For noisy footage (e.g., low-light recordings), set between 60–80%.
                  For clean digital video, keep at 20–40%.
                </p>
                <h3>Edge Sharpening</h3>
                <p>
                  Applies post-repair sharpening to edges. Higher values make the video appear crisper. Keep at 30–50%
                  for natural results. Push to 70–90% if the source is very soft or blurry.
                </p>
                <h3>Temporal Consistency</h3>
                <p>
                  When enabled (recommended), the AI ensures repaired frames are consistent with neighboring frames,
                  preventing flickering. Disable only for single-frame extraction scenarios.
                </p>
                <h3>Artifact Removal</h3>
                <p>
                  When enabled, the AI actively removes compression artifacts like ringing (halos around edges)
                  and banding (visible color steps in gradients). Keep enabled unless you&apos;re experiencing false positives.
                </p>
              </article>

              <article className="help-section" id="troubleshooting">
                <h2>Troubleshooting</h2>
                <h3>Upload Fails or Times Out</h3>
                <ul>
                  <li>Ensure your file is under 2 GB.</li>
                  <li>Check your internet connection — a stable connection is recommended.</li>
                  <li>Try a different browser (Chrome or Edge preferred).</li>
                  <li>Clear browser cache and cookies, then refresh.</li>
                </ul>
                <h3>Repair Results Look Worse Than Original</h3>
                <ul>
                  <li>Try switching from Aggressive to Balanced mode — over-repair can sometimes introduce artifacts.</li>
                  <li>Lower the denoising and sharpening sliders to 30% or less.</li>
                  <li>If the source has extreme damage, set expectations accordingly — AI can improve most footage, not work miracles.</li>
                </ul>
                <h3>Processing Is Slow</h3>
                <ul>
                  <li>Video duration and resolution directly affect processing time.</li>
                  <li>Ensure you close other browser tabs or apps that may compete for bandwidth.</li>
                  <li>Processing time estimate: ~1 minute per minute of FHD video, ~3 minutes per minute of 4K video.</li>
                </ul>
              </article>

              <article className="help-section" id="privacy-security">
                <h2>Privacy & Security</h2>
                <p>
                  PixelFix takes your privacy seriously. All uploads are encrypted in transit (TLS 1.3) and
                  at rest. Videos are automatically <strong>deleted from our servers within 24 hours</strong> of processing
                  completion. We maintain a strict zero-retention policy and never use uploaded content for AI training
                  or share it with third parties.
                </p>
                <div className="help-note">
                  <p><strong>Key privacy facts:</strong> End-to-end encrypted uploads, automatic file deletion, no AI training on user data, no third-party sharing, and no account required.</p>
                </div>
              </article>

              <article className="help-section" id="faq">
                <h2>FAQ</h2>
                <h3>Do I need to create an account?</h3>
                <p>No. You can upload and preview repairs without an account. An optional free account unlocks higher export limits and history across sessions.</p>

                <h3>Will the output have a watermark?</h3>
                <p>No. All exports from PixelFix are completely watermark-free, including free exports.</p>

                <h3>Can I repair a video multiple times?</h3>
                <p>Yes. However, for best results, we recommend starting from the original source rather than re-processing an already-repaired output.</p>

                <h3>What happens if I close the browser during processing?</h3>
                <p>Once started, processing continues on our servers even if you close the tab. You can reload the page and check the status.</p>

                <h3>Does PixelFix work on mobile?</h3>
                <p>Yes! The entire tool is responsive and works on modern mobile browsers. Upload, repair, and download directly from your phone or tablet.</p>
              </article>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
