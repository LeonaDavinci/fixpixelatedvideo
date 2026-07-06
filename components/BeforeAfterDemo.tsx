'use client';

import { useEffect, useRef } from 'react';

export default function BeforeAfterDemo() {
  const beforeRef = useRef<HTMLCanvasElement>(null);
  const afterRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const bc = beforeRef.current;
    const ac = afterRef.current;
    if (!bc || !ac) return;

    const bCtx = bc.getContext('2d')!;
    const aCtx = ac.getContext('2d')!;
    const w = bc.width;
    const h = bc.height;

    // Draw pixelated "before"
    const BLOCK = 14;
    const colors = ['#3b2f8a','#2d3f7c','#4a5568','#6b46c1','#553c9a','#2b4282','#5a4799','#7c5cbf','#4c3b8a','#3d5a9e'];
    for (let y = 0; y < h; y += BLOCK) {
      for (let x = 0; x < w; x += BLOCK) {
        bCtx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        bCtx.fillRect(x, y, BLOCK, BLOCK);
      }
    }
    bCtx.fillStyle = 'rgba(0,0,0,0.2)';
    for (let y = 0; y < h; y += BLOCK) bCtx.fillRect(0, y, w, 1);
    for (let x = 0; x < w; x += BLOCK) bCtx.fillRect(x, 0, 1, h);

    // Draw smooth "after"
    const grad = aCtx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#3b2f8a');
    grad.addColorStop(0.4, '#6b46c1');
    grad.addColorStop(1, '#00D4A1');
    aCtx.fillStyle = grad;
    aCtx.fillRect(0, 0, w, h);
    aCtx.strokeStyle = 'rgba(255,255,255,0.15)';
    aCtx.lineWidth = 1;
    for (let i = 0; i < 6; i++) {
      aCtx.beginPath();
      aCtx.arc(w * 0.5, h * 0.5, 40 + i * 20, 0, Math.PI * 2);
      aCtx.stroke();
    }
    aCtx.fillStyle = 'rgba(255,255,255,0.35)';
    aCtx.beginPath(); aCtx.arc(w * 0.3, h * 0.4, 36, 0, Math.PI * 2); aCtx.fill();
    aCtx.fillStyle = 'rgba(0,212,161,0.7)';
    aCtx.beginPath(); aCtx.arc(w * 0.65, h * 0.55, 24, 0, Math.PI * 2); aCtx.fill();
    aCtx.fillStyle = 'rgba(255,255,255,0.9)';
    aCtx.font = 'bold 15px Segoe UI, sans-serif';
    aCtx.textAlign = 'center';
    aCtx.fillText('Crystal Clear', w / 2, h - 20);
  }, []);

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="before-after">
        <div className="ba-panel">
          <canvas ref={beforeRef} width={420} height={260} style={{ width: '100%', height: '100%' }} />
          <span className="ba-label">BEFORE</span>
        </div>
        <div className="ba-panel">
          <canvas ref={afterRef} width={420} height={260} style={{ width: '100%', height: '100%' }} />
          <span className="ba-label">AFTER</span>
        </div>
        <div className="ba-divider" />
        <div className="ba-arrow">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#6C47FF" strokeWidth="2.5" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
      <p style={{ textAlign: 'center', marginTop: 12, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        AI before/after comparison &middot; Frame-by-frame reconstruction
      </p>
    </div>
  );
}
