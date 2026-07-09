'use client';

import { useEffect, useRef, useState } from 'react';

const SCENES = {
  football: {
    src: '/hero-football.svg',
    name: 'Football Broadcast',
    caption: 'Pixelated match footage vs. AI-repaired clarity',
  },
  family: {
    src: '/hero-family.svg',
    name: 'Old Home Recording',
    caption: '1990s family VHS vs. restored, deblocked video',
  },
} as const;

type SceneKey = keyof typeof SCENES;

export default function BeforeAfterDemo() {
  const [scene, setScene] = useState<SceneKey>('football');
  const [pos, setPos] = useState(50);
  const afterRef = useRef<HTMLCanvasElement>(null);
  const beforeRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  // Draw both layers whenever the scene changes.
  useEffect(() => {
    const after = afterRef.current;
    const before = beforeRef.current;
    if (!after || !before) return;

    const img = new Image();
    img.onload = () => {
      const w = after.width;
      const h = after.height;

      // Clean "repaired" layer
      const aCtx = after.getContext('2d');
      if (aCtx) {
        aCtx.clearRect(0, 0, w, h);
        aCtx.drawImage(img, 0, 0, w, h);
      }

      // Pixelated "before" layer (downscale then upscale with smoothing off)
      const bCtx = before.getContext('2d');
      if (bCtx) {
        bCtx.clearRect(0, 0, w, h);
        const sw = Math.max(1, Math.round(w / 13));
        const sh = Math.max(1, Math.round(h / 13));
        const small = document.createElement('canvas');
        small.width = sw;
        small.height = sh;
        const sCtx = small.getContext('2d');
        if (sCtx) {
          sCtx.drawImage(img, 0, 0, sw, sh);
          bCtx.imageSmoothingEnabled = false;
          bCtx.drawImage(small, 0, 0, sw, sh, 0, 0, w, h);
        }
      }
    };
    img.src = SCENES[scene].src;
  }, [scene]);

  // Drag handling
  const updateFromClientX = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let p = ((clientX - rect.left) / rect.width) * 100;
    p = Math.max(0, Math.min(100, p));
    setPos(p);
  };

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (draggingRef.current) updateFromClientX(e.clientX);
    };
    const up = () => {
      draggingRef.current = false;
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 3));
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 3));
  };

  return (
    <div className="hero-visual">
      <div
        className="ba-slider"
        ref={containerRef}
        role="img"
        aria-label={`Before and after comparison of ${SCENES[scene].name}. Drag the handle to compare the pixelated original with the AI-repaired version.`}
        onPointerDown={(e) => {
          draggingRef.current = true;
          updateFromClientX(e.clientX);
        }}
      >
        <canvas ref={afterRef} width={600} height={375} className="ba-layer" />
        <div className="ba-before-wrap" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <canvas ref={beforeRef} width={600} height={375} className="ba-layer" />
        </div>

        <span className="ba-tag ba-tag-before">Pixelated</span>
        <span className="ba-tag ba-tag-after">Repaired</span>

        <div
          className="ba-handle"
          style={{ left: `${pos}%` }}
          tabIndex={0}
          role="slider"
          aria-label="Comparison slider"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={onKeyDown}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6C47FF" strokeWidth="2.5" aria-hidden="true">
            <path d="M9 6l-4 6 4 6" />
            <path d="M15 6l4 6-4 6" />
          </svg>
        </div>
      </div>

      <div className="ba-scenes" role="group" aria-label="Choose a sample video">
        {(Object.keys(SCENES) as SceneKey[]).map((key) => (
          <button
            key={key}
            type="button"
            className={`ba-scene-btn ${scene === key ? 'active' : ''}`}
            aria-pressed={scene === key}
            onClick={() => setScene(key)}
          >
            {SCENES[key].name}
          </button>
        ))}
      </div>

      <p className="ba-caption">{SCENES[scene].caption}</p>
    </div>
  );
}
