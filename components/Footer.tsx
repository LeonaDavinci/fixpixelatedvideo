import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <Link className="logo" href="/">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="28" height="28" rx="8" fill="#6C47FF" />
                <rect x="4" y="4" width="8" height="8" rx="1" fill="#fff" opacity="0.5" />
                <rect x="16" y="4" width="8" height="8" rx="1" fill="#fff" />
                <rect x="4" y="16" width="8" height="8" rx="1" fill="#fff" />
                <rect x="16" y="16" width="8" height="8" rx="1" fill="#00D4A1" />
              </svg>
              PixelFix
            </Link>
            <p>
              The fastest way to fix pixelated video online. AI-powered frame-by-frame
              reconstruction &mdash; free to start, no software required.
            </p>
          </div>
          <div className="footer-col">
            <h2>Product</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/fix">Fix My Video</Link></li>
              <li><Link href="/help">Help Center</Link></li>
              <li><a href="/#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h2>Use Cases</h2>
            <ul>
              <li><a href="/#use-cases">Fix MP4 Pixelation</a></li>
              <li><a href="/#use-cases">Repair VHS Footage</a></li>
              <li><a href="/#problems">Remove Compression Artifacts</a></li>
              <li><a href="/fix">Upscale to 4K</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h2>Company</h2>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PixelFix. All rights reserved.</p>
          <div className="trust-badges">
            <span className="trust-badge">4.8 star rated</span>
            <span className="trust-badge">Zero-retention privacy</span>
            <span className="trust-badge">No watermarks</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
