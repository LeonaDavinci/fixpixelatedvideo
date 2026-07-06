'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export default function FixPage() {
  // State
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState('');
  const [uploadDone, setUploadDone] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState('');
  const [videoKey, setVideoKey] = useState(0);
  const [activeTab, setActiveTab] = useState<'original'|'info'|'progress'>('original');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [isRepairing, setIsRepairing] = useState(false);
  const [overallPct, setOverallPct] = useState(0);
  const [overlayMsg, setOverlayMsg] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
  const [repairDone, setRepairDone] = useState(false);
  const [resultData, setResultData] = useState({ res: '', frames: 0, time: '', quality: '' });
  const [dlProgress, setDlProgress] = useState(0);
  const [dlStatus, setDlStatus] = useState('');
  const [dlShow, setDlShow] = useState(false);
  const [history, setHistory] = useState<Array<{ name: string; res: string; time: string }>>([]);

  // Repair settings
  const [repairMode, setRepairMode] = useState('balanced');
  const [outputRes, setOutputRes] = useState('4K');
  const [denoise, setDenoise] = useState(60);
  const [sharpen, setSharpen] = useState(45);
  const [temporal, setTemporal] = useState(true);
  const [artifactRm, setArtifactRm] = useState(true);

  // Processing step state
  const [steps, setSteps] = useState([
    { id: 1, label: 'Video Upload & Validation', badge: 'Waiting', cls: 'waiting' },
    { id: 2, label: 'Damage Analysis', badge: 'Waiting', cls: 'waiting' },
    { id: 3, label: 'Frame Reconstruction', badge: 'Waiting', cls: 'waiting' },
    { id: 4, label: 'Artifact Removal & Sharpening', badge: 'Waiting', cls: 'waiting' },
    { id: 5, label: 'Resolution Upscaling', badge: 'Waiting', cls: 'waiting' },
    { id: 6, label: 'Final Encoding', badge: 'Waiting', cls: 'waiting' },
  ]);

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const beforeCanvasRef = useRef<HTMLCanvasElement>(null);
  const afterCanvasRef = useRef<HTMLCanvasElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // File info
  const [fileInfo, setFileInfo] = useState({
    name: '', size: '', format: '', duration: '', resolution: '', aspect: '', modified: '',
  });

  // ===== FILE HANDLING =====
  const processFile = useCallback((f: File) => {
    if (!f.type.startsWith('video/')) { alert('Please select a valid video file.'); return; }
    setFile(f);
    setUploadDone(false);
    setRepairDone(false);
    setDlShow(false);

    // Simulate upload
    let pct = 0;
    const sizeMB = (f.size / 1024 / 1024).toFixed(1);
    const speed = (Math.random() * 8 + 4).toFixed(1);
    setUploadSpeed(`${sizeMB} MB · ${speed} MB/s`);
    const iv = setInterval(() => {
      pct += Math.random() * 12 + 3;
      if (pct >= 100) {
        pct = 100; clearInterval(iv);
        setUploadProgress(100);
        setUploadDone(true);
        const url = URL.createObjectURL(f);
        setFileUrl(url);
        setVideoKey(k => k + 1);
        // Reset file input
        if (fileInputRef.current) fileInputRef.current.value = '';
        setActiveTab('original');
      } else {
        setUploadProgress(pct);
        const rem = ((100 - pct) / 100 * parseFloat(sizeMB) / parseFloat(speed) * 10).toFixed(0);
        setUploadSpeed(`${sizeMB} MB · ${speed} MB/s · ~${rem}s remaining`);
      }
    }, 180);
  }, []);

  const onLoadedMetadata = useCallback(() => {
    const v = videoRef.current;
    if (!v || !file) return;
    setDuration(v.duration);
    const vw = v.videoWidth;
    const vh = v.videoHeight;
    const dur = v.duration;
    const formatTime = (s: number) => {
      const m = Math.floor(s / 60), sec = Math.floor(s % 60);
      return `${m}:${String(sec).padStart(2, '0')}`;
    };
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
    const g = vw && vh ? gcd(vw, vh) : 1;
    setFileInfo({
      name: file.name,
      size: formatBytes(file.size),
      format: file.type || file.name.split('.').pop()?.toUpperCase() || 'MP4',
      duration: dur ? formatTime(dur) : '--',
      resolution: vw && vh ? `${vw} × ${vh} px` : '--',
      aspect: vw && vh ? `${vw/g}:${vh/g}` : '--',
      modified: new Date(file.lastModified).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    });
  }, [file]);

  // ===== VIDEO CONTROLS =====
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tick = () => { setCurrentTime(v.currentTime); requestAnimationFrame(tick); };
    const raf = requestAnimationFrame(tick);
    v.onended = () => setIsPlaying(false);
    return () => cancelAnimationFrame(raf);
  }, [videoKey, fileUrl]);

  const togglePlay = () => {
    const v = videoRef.current; if (!v) return;
    if (v.paused) { v.play(); setIsPlaying(true); }
    else { v.pause(); setIsPlaying(false); }
  };

  const toggleMute = () => {
    const v = videoRef.current; if (!v) return;
    v.muted = !v.muted; setMuted(v.muted);
  };

  const seekVideo = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current; if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    v.currentTime = ratio * v.duration;
  };

  // ===== REPAIR =====
  const startRepair = () => {
    if (!file) return;
    setIsRepairing(true);
    setRepairDone(false);
    setDlShow(false);
    setActiveTab('progress');
    setShowOverlay(true);
    setOverlayMsg('Analyzing damage patterns...');

    const overlayMsgs = ['Reconstructing pixel data...', 'Sharpening edges frame by frame...', 'Almost done — polishing final output...'];
    let oi = 0;
    const oiv = setInterval(() => { oi = (oi + 1) % overlayMsgs.length; setOverlayMsg(overlayMsgs[oi]); }, 2200);

    const stepTimes = [800, 1500, 4000, 1800, 2000, 1500];
    const totalTime = stepTimes.reduce((a, b) => a + b, 0);
    const st = Date.now();
    let tot = 0;

    const upd = () => {
      const elapsed = Date.now() - st;
      const pct = Math.min(elapsed / totalTime * 100, 100);
      setOverallPct(Math.floor(pct));

      // Determine which steps are active/done
      let acc = 0;
      const newSteps = steps.map((s, i) => {
        const stepEnd = acc + stepTimes[i] / totalTime * 100;
        if (pct >= stepEnd) {
          acc = stepEnd;
          return { ...s, cls: 'done', badge: 'Done' };
        } else if (pct >= acc) {
          return { ...s, cls: 'active', badge: i === 2 ? 'Repairing...' : i === 3 ? 'Cleaning...' : i === 4 ? 'Upscaling...' : 'Processing...' };
        } else {
          acc = stepEnd;
          return { ...s, cls: 'waiting', badge: 'Waiting' };
        }
      });
      setSteps(newSteps);

      if (pct >= 100) {
        clearInterval(oiv);
        setShowOverlay(false);
        setIsRepairing(false);
        setRepairDone(true);
        // Calculate result
        const v = videoRef.current;
        const vw = v?.videoWidth || 1920;
        const vh = v?.videoHeight || 1080;
        const resMap: Record<string, string> = { original: `${vw}×${vh}`, '1080p': '1920×1080', '2K': '2560×1440', '4K': '3840×2160' };
        const frames = v?.duration ? Math.round(v.duration * 25) : 1800;
        const elas = ((Date.now() - st) / 1000).toFixed(1);
        setResultData({ res: resMap[outputRes] || '3840×2160', frames, time: `${elas}s`, quality: '+284%' });
        setHistory(h => [{ name: file?.name || 'clip.mp4', res: resMap[outputRes] || '4K', time: new Date().toLocaleTimeString() }, ...h].slice(0, 5));
        drawCompareCanvases();
        return;
      }
      requestAnimationFrame(upd);
    };
    requestAnimationFrame(upd);
  };

  const drawCompareCanvases = () => {
    const bc = beforeCanvasRef.current;
    const ac = afterCanvasRef.current;
    if (!bc || !ac) return;
    const W = 800, H = 450;
    bc.width = W; bc.height = H;
    ac.width = W; ac.height = H;
    const bCtx = bc.getContext('2d')!;
    const aCtx = ac.getContext('2d')!;

    const BLOCK = 18;
    const colors = ['#3b2f8a','#2d3f7c','#4a5568','#6b46c1','#553c9a','#2b4282','#5a4799','#7c5cbf'];
    for (let y = 0; y < H; y += BLOCK) {
      for (let x = 0; x < W; x += BLOCK) {
        bCtx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        bCtx.fillRect(x, y, BLOCK, BLOCK);
      }
    }
    bCtx.fillStyle = 'rgba(0,0,0,0.25)';
    for (let y = 0; y < H; y += BLOCK) bCtx.fillRect(0, y, W, 1.5);
    for (let x = 0; x < W; x += BLOCK) bCtx.fillRect(x, 0, 1.5, H);

    const grad = aCtx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, '#1e1248'); grad.addColorStop(0.5, '#6b46c1'); grad.addColorStop(1, '#00a882');
    aCtx.fillStyle = grad; aCtx.fillRect(0, 0, W, H);
    aCtx.strokeStyle = 'rgba(255,255,255,0.12)'; aCtx.lineWidth = 1.5;
    for (let i = 1; i < 8; i++) { aCtx.beginPath(); aCtx.arc(W/2, H/2, i*50, 0, Math.PI*2); aCtx.stroke(); }
    aCtx.fillStyle = 'rgba(255,255,255,0.4)'; aCtx.beginPath(); aCtx.arc(W*0.3, H*0.35, 55, 0, Math.PI*2); aCtx.fill();
    aCtx.fillStyle = 'rgba(0,212,161,0.7)'; aCtx.beginPath(); aCtx.arc(W*0.65, H*0.6, 40, 0, Math.PI*2); aCtx.fill();
    aCtx.fillStyle = 'rgba(255,255,255,0.95)'; aCtx.font = 'bold 22px Segoe UI, sans-serif'; aCtx.textAlign = 'center';
    aCtx.fillText('✨ AI Repaired — Crystal Clear', W/2, H-24);
  };

  // Compare slider
  useEffect(() => {
    if (!repairDone) return;
    const container = compareRef.current;
    if (!container) return;
    const handle = container.querySelector('.compare-handle') as HTMLElement;
    const divider = container.querySelector('.compare-divider-line') as HTMLElement;
    const afterClip = container.querySelector('.after-clip') as HTMLElement;
    if (!handle || !divider || !afterClip) return;

    let dragging = false;
    const setPos = (pct: number) => {
      pct = Math.max(5, Math.min(95, pct));
      divider.style.left = pct + '%';
      handle.style.left = pct + '%';
      afterClip.style.width = pct + '%';
      const ac = container.querySelector('#result-canvas-after') as HTMLCanvasElement;
      if (ac) ac.style.width = (10000 / pct) + '%';
    };

    const onDown = () => { dragging = true; };
    const onUp = () => { dragging = false; };
    const onMove = (clientX: number) => {
      if (!dragging) return;
      const rect = container.getBoundingClientRect();
      setPos((clientX - rect.left) / rect.width * 100);
    };

    handle.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mousemove', (e) => onMove(e.clientX));
    handle.addEventListener('touchstart', (e) => { dragging = true; e.preventDefault(); });
    document.addEventListener('touchend', onUp);
    document.addEventListener('touchmove', (e) => onMove(e.touches[0].clientX));

    setPos(50);
    return () => {
      handle.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchend', onUp);
    };
  }, [repairDone]);

  const simulateDownload = () => {
    setDlShow(true);
    let pct = 0;
    const iv = setInterval(() => {
      pct += Math.random() * 15 + 5;
      if (pct >= 100) {
        pct = 100; clearInterval(iv);
        setDlProgress(100);
        setDlStatus('✅ Download ready! Your video has been prepared. (Demo mode)');
      } else {
        setDlProgress(pct);
        setDlStatus(`Exporting... ${Math.floor(pct)}%`);
      }
    }, 200);
  };

  const resetAll = () => {
    setFile(null); setFileUrl(''); setUploadProgress(0); setUploadDone(false);
    setRepairDone(false); setIsRepairing(false); setDlShow(false); setActiveTab('original');
    setSteps(steps.map(s => ({ ...s, cls: 'waiting', badge: 'Waiting' })));
    setOverallPct(0);
  };

  // ===== UTILS =====
  const formatBytes = (b: number) => {
    if (b < 1024) return b + ' B';
    if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
    if (b < 1073741824) return (b / 1048576).toFixed(1) + ' MB';
    return (b / 1073741824).toFixed(2) + ' GB';
  };
  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60), sec = Math.floor(s % 60);
    return `${m}:${String(sec).padStart(2, '0')}`;
  };

  // ===== RENDER =====
  return (
    <div style={{ background: 'var(--bg-alt)', minHeight: 'calc(100vh - 64px - 56px)' }}>
      <div className="fix-main">
        <div className="fix-page-header">
          <h1>Fix Pixelated Video</h1>
          <p>Upload your video — AI will repair every frame and restore clarity up to 4K.</p>
        </div>

        <div className="fix-layout">
          {/* LEFT PANEL */}
          <div>
            {/* Upload Card */}
            <div className="card">
              <div className="card-header">
                <h2>📤 Upload Your Video</h2>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {uploadDone ? '✓ Uploaded' : 'Waiting for file'}
                </span>
              </div>
              <div className="card-body">
                <div className="alert alert-info">
                  <span aria-hidden="true" style={{ fontSize: '1.1rem', flexShrink: 0 }}>ℹ️</span>
                  <span>Upload and preview are <strong>completely free</strong>. No account required. Exporting uses credits.</span>
                </div>

                {/* Upload Progress */}
                {uploadProgress > 0 && (
                  <div style={{ marginBottom: 20 }}>
                    <div className="prog-label">
                      <span>
                        <span className={`status-dot ${uploadProgress >= 100 ? 'dot-done' : 'dot-active'}`} />
                        {uploadProgress >= 100 ? 'Upload complete' : 'Uploading video…'}
                      </span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="prog-bar prog-upload">
                      <div className="prog-fill" style={{ width: `${uploadProgress}%` }} />
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 6 }}>{uploadSpeed}</p>
                  </div>
                )}

                {/* Drop zone */}
                {!uploadDone && (
                  <div
                    className="fix-upload-zone"
                    role="button"
                    tabIndex={0}
                    aria-label="Upload video file"
                    onClick={() => fileInputRef.current?.click()}
                    onKeyDown={(e) => { if (e.key === 'Enter') fileInputRef.current?.click(); }}
                  >
                    <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: 16 }} aria-hidden="true">🎬</span>
                    <h2 style={{ marginBottom: 8 }}>Drop Your Pixelated Video Here</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: 20 }}>
                      Drag & drop, paste (Ctrl+V), or click to browse
                    </p>
                    <button className="btn btn-primary" type="button" onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}>
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" /></svg>
                      Select Video File
                    </button>
                    <div className="format-chips" role="list">
                      <span className="chip">MP4</span><span className="chip">MOV</span><span className="chip">AVI</span>
                      <span className="chip">MKV</span><span className="chip">WebM</span><span className="chip">WMV</span>
                    </div>
                    <p style={{ fontSize: '0.78rem', marginTop: 12, color: 'var(--text-muted)' }}>
                      Max file size: 2 GB · All formats, no pre-conversion needed
                    </p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  style={{ display: 'none' }}
                  aria-hidden="true"
                  onChange={(e) => { if (e.target.files?.[0]) processFile(e.target.files[0]); }}
                />
              </div>
            </div>

            {/* Video section */}
            {uploadDone && fileUrl && (
              <div className="card" style={{ marginTop: 24 }}>
                <div className="vtabs" role="tablist">
                  {(['original','info','progress'] as const).map(tab => (
                    <button
                      key={tab}
                      className={`vtab${activeTab === tab ? ' active' : ''}`}
                      role="tab"
                      aria-selected={activeTab === tab}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab === 'original' ? 'Original Video' : tab === 'info' ? 'File Info' : 'Repair Progress'}
                    </button>
                  ))}
                </div>

                {/* Tab: Original */}
                <div className={`tab-pane${activeTab === 'original' ? ' active' : ''}`} role="tabpanel">
                  <div className="video-wrapper">
                    <video
                      key={videoKey}
                      ref={videoRef}
                      preload="metadata"
                      onLoadedMetadata={onLoadedMetadata}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    >
                      <source src={fileUrl} />
                    </video>
                    <div className="video-controls">
                      <button className="vc-btn" onClick={togglePlay} aria-label="Play/Pause">
                        {isPlaying ? '⏸' : '▶'}
                      </button>
                      <div className="vc-progress" onClick={seekVideo} role="progressbar">
                        <div className="vc-progress-fill" style={{ width: duration ? `${(currentTime/duration*100)}%` : '0%' }} />
                      </div>
                      <span className="vc-time">{formatTime(currentTime)} / {formatTime(duration)}</span>
                      <button className="vc-btn" onClick={toggleMute} aria-label="Mute" style={{ width: 'auto', borderRadius: 6, padding: '0 8px', fontSize: '0.8rem' }}>
                        {muted ? '🔇' : '🔊'}
                      </button>
                    </div>
                  </div>
                  <div style={{ padding: '12px 0 4px', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{fileInfo.name}</span>
                    <span className="chip">{fileInfo.size}</span>
                    <span className="chip">{fileInfo.resolution}</span>
                  </div>
                </div>

                {/* Tab: Info */}
                <div className={`tab-pane${activeTab === 'info' ? ' active' : ''}`} role="tabpanel">
                  <h3 style={{ marginBottom: 14 }}>Video File Details</h3>
                  <div className="info-grid">
                    {[
                      ['File Name', fileInfo.name],
                      ['File Size', fileInfo.size],
                      ['Format / Type', fileInfo.format],
                      ['Duration', fileInfo.duration],
                      ['Resolution', fileInfo.resolution],
                      ['Aspect Ratio', fileInfo.aspect],
                      ['Frame Rate (est.)', '24–30 fps'],
                      ['Last Modified', fileInfo.modified],
                    ].map(([label, value]) => (
                      <div className="info-item" key={label}>
                        <div className="info-label">{label}</div>
                        <div className="info-value">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tab: Progress */}
                <div className={`tab-pane${activeTab === 'progress' ? ' active' : ''}`} role="tabpanel">
                  <h3 style={{ marginBottom: 4 }}>AI Unpixelation Progress</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 18 }}>
                    Each step is processed in order. Frame reconstruction is the most time-intensive stage.
                  </p>
                  <div style={{ marginBottom: 22 }}>
                    <div className="prog-label">
                      <span style={{ fontWeight: 600 }}>Overall Progress</span>
                      <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{overallPct}%</span>
                    </div>
                    <div className="prog-bar" style={{ height: 10 }}>
                      <div className="prog-fill prog-process" style={{ width: `${overallPct}%`, height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--accent))' }} />
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 6 }}>
                      {repairDone ? '✅ All steps completed successfully!' : isRepairing ? 'AI repair in progress — please wait…' : 'Waiting to start…'}
                    </p>
                  </div>
                  <ul className="process-steps">
                    {steps.map(s => (
                      <li className="ps-item" key={s.id}>
                        <div className={`ps-num step-${s.cls}`}>
                          {s.cls === 'done' ? '✓' : s.id}
                        </div>
                        <div className="step-content">
                          <h3>{s.label}</h3>
                          <span className={`step-badge badge-${s.cls === 'active' ? 'processing' : s.cls === 'done' ? 'done' : 'wait'}`}>
                            {s.badge}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Result section */}
            {repairDone && (
              <div className="card" style={{ marginTop: 24 }}>
                <div className="card-header">
                  <h2>✨ Repair Complete — Compare & Download</h2>
                  <span style={{ fontSize: '0.82rem', background: '#dcfce7', color: 'var(--success)', padding: '4px 12px', borderRadius: '100px', fontWeight: 700 }}>
                    ✓ Done
                  </span>
                </div>
                <div className="card-body">
                  <div className="alert alert-success">
                    <span aria-hidden="true" style={{ fontSize: '1.1rem', flexShrink: 0 }}>✅</span>
                    <span>Your video has been fully repaired. Use the slider to compare before/after.</span>
                  </div>

                  {/* Compare slider */}
                  <div className="compare-wrapper" ref={compareRef}>
                    <div className="compare-slider">
                      <canvas id="result-canvas-before" ref={beforeCanvasRef} style={{ width: '100%', aspectRatio: '16/9', display: 'block' }} />
                      <div className="after-clip" style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', overflow: 'hidden' }}>
                        <canvas id="result-canvas-after" ref={afterCanvasRef} style={{ width: '200%', aspectRatio: '16/9', display: 'block' }} />
                      </div>
                      <div className="compare-divider-line" />
                      <div className="compare-handle" role="slider" aria-label="Comparison slider">⟺</div>
                      <span className="compare-label-b">BEFORE</span>
                      <span className="compare-label-a">AFTER</span>
                    </div>
                  </div>

                  <div className="result-meta">
                    <div className="result-badge">
                      <span className="rb-icon">📐</span>
                      <div><div className="rb-label">Output Resolution</div><div className="rb-value">{resultData.res}</div></div>
                    </div>
                    <div className="result-badge">
                      <span className="rb-icon">🚀</span>
                      <div><div className="rb-label">Quality Improvement</div><div className="rb-value">{resultData.quality}</div></div>
                    </div>
                    <div className="result-badge">
                      <span className="rb-icon">🎞️</span>
                      <div><div className="rb-label">Frames Repaired</div><div className="rb-value">{resultData.frames.toLocaleString()} frames</div></div>
                    </div>
                    <div className="result-badge">
                      <span className="rb-icon">⏱️</span>
                      <div><div className="rb-label">Processing Time</div><div className="rb-value">{resultData.time}</div></div>
                    </div>
                  </div>

                  <div className="download-area">
                    <h3>Download Your Repaired Video</h3>
                    <p>Choose your output resolution — no watermarks, yours to keep.</p>
                    <div className="download-btns">
                      <select className="resolution-select" aria-label="Select output resolution">
                        <option>1080p HD</option>
                        <option>2K (1440p)</option>
                        <option selected>4K Ultra HD</option>
                      </select>
                      <button className="btn btn-accent btn-lg" onClick={simulateDownload}>
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
                        Download Repaired Video
                      </button>
                      <button className="btn btn-outline" onClick={resetAll}>
                        Fix Another Video
                      </button>
                    </div>
                    {dlShow && (
                      <div style={{ marginTop: 14 }}>
                        <div className="prog-bar prog-download" style={{ height: 6 }}>
                          <div className="prog-fill" style={{ width: `${dlProgress}%`, background: 'var(--accent)' }} />
                        </div>
                        <p style={{ fontSize: '0.82rem', color: dlProgress >= 100 ? 'var(--success)' : 'var(--text-muted)', marginTop: 6 }}>
                          {dlStatus}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Settings */}
            <div className="card">
              <div className="card-header">
                <h2>⚙️ Repair Settings</h2>
              </div>
              <div className="card-body">
                <div className="settings-grid">
                  <div>
                    <div className="setting-label" style={{ marginBottom: 4 }}>AI Repair Mode</div>
                    <div className="setting-desc">Algorithm aggressiveness</div>
                    <select className="select-input" style={{ marginTop: 8 }} value={repairMode} onChange={e => setRepairMode(e.target.value)} aria-label="Repair mode">
                      <option value="balanced">Balanced (Recommended)</option>
                      <option value="aggressive">Aggressive Repair</option>
                      <option value="gentle">Gentle Restoration</option>
                      <option value="archival">Archival / VHS Mode</option>
                    </select>
                  </div>

                  <div>
                    <div className="setting-label" style={{ marginBottom: 4 }}>Output Resolution</div>
                    <div className="setting-desc">Target export quality</div>
                    <select className="select-input" style={{ marginTop: 8 }} value={outputRes} onChange={e => setOutputRes(e.target.value)} aria-label="Output resolution">
                      <option value="original">Keep Original</option>
                      <option value="1080p">1080p HD</option>
                      <option value="2K">2K (1440p)</option>
                      <option value="4K">4K Ultra HD</option>
                    </select>
                  </div>

                  <div>
                    <div className="setting-label">Denoising Strength</div>
                    <div className="setting-desc">Reduce video noise</div>
                    <div className="range-wrap" style={{ marginTop: 8 }}>
                      <input type="range" className="range-input" min="0" max="100" value={denoise} onChange={e => setDenoise(Number(e.target.value))} aria-label="Denoising strength" />
                      <div className="range-labels"><span>Off</span><span>Max</span></div>
                    </div>
                  </div>

                  <div>
                    <div className="setting-label">Edge Sharpening</div>
                    <div className="setting-desc">Post-repair sharpness</div>
                    <div className="range-wrap" style={{ marginTop: 8 }}>
                      <input type="range" className="range-input" min="0" max="100" value={sharpen} onChange={e => setSharpen(Number(e.target.value))} aria-label="Edge sharpening" />
                      <div className="range-labels"><span>Soft</span><span>Sharp</span></div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div>
                      <div className="setting-label">Temporal Consistency</div>
                      <div className="setting-desc">Prevents frame flicker</div>
                    </div>
                    <label className="toggle" aria-label="Temporal consistency">
                      <input type="checkbox" checked={temporal} onChange={e => setTemporal(e.target.checked)} />
                      <span className="toggle-slider" />
                    </label>
                  </div>

                  <div className="setting-row">
                    <div>
                      <div className="setting-label">Artifact Removal</div>
                      <div className="setting-desc">Remove ringing & halos</div>
                    </div>
                    <label className="toggle" aria-label="Artifact removal">
                      <input type="checkbox" checked={artifactRm} onChange={e => setArtifactRm(e.target.checked)} />
                      <span className="toggle-slider" />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Repair button */}
            <div className="card">
              <div className="card-body" style={{ textAlign: 'center' }}>
                <button
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', fontSize: '1.05rem' }}
                  disabled={!uploadDone || isRepairing}
                  onClick={startRepair}
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  {isRepairing ? '⏳ Processing…' : 'Start AI Repair'}
                </button>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 10, lineHeight: 1.5 }}>
                  {!uploadDone ? 'Upload a video first, then click to begin.' : 'Ready — click Start to begin AI repair.'}
                </p>
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>🔒 Encrypted & auto-deleted after processing</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>💧 All exports are watermark-free</span>
                  </div>
                </div>
              </div>
            </div>

            {/* History */}
            <div className="card">
              <div className="card-header">
                <h2>📂 Recent Repairs</h2>
                <button className="btn btn-ghost btn-sm" onClick={() => setHistory([])}>Clear</button>
              </div>
              <div className="card-body" style={{ paddingTop: 8, paddingBottom: 8 }}>
                {history.length === 0 ? (
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center', padding: '16px 0' }}>
                    No recent repairs yet.
                  </p>
                ) : (
                  history.map((h, i) => (
                    <div className="history-item" key={i}>
                      <div className="h-thumb">🎞️</div>
                      <div className="h-info">
                        <div className="h-name" title={h.name}>{h.name}</div>
                        <div className="h-meta">{h.res} · {h.time}</div>
                      </div>
                      <span className="h-status hs-done">Done</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Processing overlay */}
      <div id="processing-overlay" className={showOverlay ? 'show' : ''} role="status" aria-live="polite">
        <div className="spinner" />
        <div className="overlay-text">{overlayMsg}</div>
        <div className="overlay-sub">This may take a moment. Do not close the tab.</div>
      </div>
    </div>
  );
}
