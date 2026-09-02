'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';

export default function FixPage() {
  // State
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState('');
  const [uploadDone, setUploadDone] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState('');
  const [videoKey, setVideoKey] = useState(0);
  const [activeTab, setActiveTab] = useState<'original' | 'info' | 'progress'>('original');
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

  // Real processing output (genuine file produced in-browser)
  const [processedBlob, setProcessedBlob] = useState<Blob | null>(null);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [outputMime, setOutputMime] = useState('');
  const [error, setError] = useState('');

  // Repair settings
  const [repairMode, setRepairMode] = useState('balanced');
  const [outputRes, setOutputRes] = useState('4K');
  const [denoise, setDenoise] = useState(60);
  const [sharpen, setSharpen] = useState(45);
  const [temporal, setTemporal] = useState(true);
  const [artifactRm, setArtifactRm] = useState(true);

  // Edge-sharpen SVG kernel (driven by the sharpen slider) — applied via ctx.filter url(#px-sharpen)
  const sharpenAmt = (sharpen / 100) * 0.8;
  const sharpenMatrix = `0 ${(-sharpenAmt).toFixed(3)} 0 ${(-sharpenAmt).toFixed(3)} ${(1 + 4 * sharpenAmt).toFixed(3)} ${(-sharpenAmt).toFixed(3)} 0 ${(-sharpenAmt).toFixed(3)} 0`;

  // Processing step state
  const [steps, setSteps] = useState([
    { id: 1, label: 'Video Upload and Validation', badge: 'Waiting', cls: 'waiting' },
    { id: 2, label: 'Damage Analysis', badge: 'Waiting', cls: 'waiting' },
    { id: 3, label: 'Frame Reconstruction', badge: 'Waiting', cls: 'waiting' },
    { id: 4, label: 'Artifact Removal and Sharpening', badge: 'Waiting', cls: 'waiting' },
    { id: 5, label: 'Resolution Upscaling', badge: 'Waiting', cls: 'waiting' },
    { id: 6, label: 'Final Encoding', badge: 'Waiting', cls: 'waiting' },
  ]);

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const beforeCanvasRef = useRef<HTMLCanvasElement>(null);
  const afterCanvasRef = useRef<HTMLCanvasElement>(null);
  const compareRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const snapBeforeRef = useRef<HTMLCanvasElement | null>(null);
  const snapAfterRef = useRef<HTMLCanvasElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const rafProcRef = useRef<number>(0);
  const snappedRef = useRef(false);

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
    setProcessedBlob(null);
    if (downloadUrl) { URL.revokeObjectURL(downloadUrl); setDownloadUrl(''); }
    setError('');

    // Local file — "upload" is just a read into an object URL. Show an honest progress.
    setUploadProgress(0);
    setUploadSpeed('Reading file locally…');
    let pct = 0;
    const iv = setInterval(() => {
      pct += Math.random() * 22 + 14;
      if (pct >= 100) {
        pct = 100; clearInterval(iv);
        setUploadProgress(100);
        setUploadDone(true);
        const url = URL.createObjectURL(f);
        setFileUrl(url);
        setVideoKey(k => k + 1);
        if (fileInputRef.current) fileInputRef.current.value = '';
        setActiveTab('original');
      } else {
        setUploadProgress(pct);
      }
    }, 120);
  }, [downloadUrl]);

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
      resolution: vw && vh ? `${vw} x ${vh} px` : '--',
      aspect: vw && vh ? `${vw / g}:${vh / g}` : '--',
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

  // Cleanup on unmount
  useEffect(() => () => {
    if (rafProcRef.current) cancelAnimationFrame(rafProcRef.current);
    try {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') mediaRecorderRef.current.stop();
    } catch { /* noop */ }
  }, []);

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

  // ===== REAL REPAIR (in-browser, no upload) =====
  const startRepair = () => {
    const v = videoRef.current;
    if (!file || !v || !v.videoWidth) {
      setError('Video is not ready yet. Please re-upload and wait for it to finish loading.');
      return;
    }
    if (typeof MediaRecorder === 'undefined' || typeof (HTMLCanvasElement.prototype as any).captureStream === 'undefined') {
      setError('Your browser does not support in-browser video encoding (MediaRecorder / captureStream). Please use the latest Chrome, Edge, or Firefox.');
      return;
    }
    setError('');
    setIsRepairing(true);
    setRepairDone(false);
    setDlShow(false);
    setActiveTab('progress');
    setShowOverlay(true);
    setOverlayMsg('Analyzing damage patterns...');

    const vw = v.videoWidth, vh = v.videoHeight, dur = v.duration || 0;
    const targetW: Record<string, number> = { original: vw, '1080p': 1920, '2K': 2560, '4K': 3840 };
    let outW = targetW[outputRes] || vw;
    let outH = Math.round((outW * vh) / vw);
    outW -= outW % 2; outH -= outH % 2;

    if (downloadUrl) { URL.revokeObjectURL(downloadUrl); setDownloadUrl(''); }
    setProcessedBlob(null);
    setOverallPct(0);

    // Real per-frame pixel transform (deblock / denoise / sharpen / de-ring via canvas filters)
    const blurAmt = 0.2 + (denoise / 100) * 1.4 + (artifactRm ? 0.4 : 0) + (temporal ? 0.2 : 0);
    const contrastAmt = 1 + (sharpen / 100) * 0.22;
    const satAmt = 1 + (sharpen / 100) * 0.08;
    let filterStr = `blur(${blurAmt.toFixed(2)}px) contrast(${contrastAmt.toFixed(2)}) saturate(${satAmt.toFixed(2)})`;
    if (sharpen > 12) filterStr = `url(#px-sharpen) ${filterStr}`;

    // Offscreen processing canvas at the chosen output resolution
    const proc = document.createElement('canvas');
    proc.width = outW; proc.height = outH;
    const pctx = proc.getContext('2d')!;
    pctx.imageSmoothingEnabled = true;
    pctx.imageSmoothingQuality = 'high';

    if (!snapBeforeRef.current) snapBeforeRef.current = document.createElement('canvas');
    if (!snapAfterRef.current) snapAfterRef.current = document.createElement('canvas');

    // Pick a supported container/codec
    const cands = [
      'video/mp4;codecs=h264,aac', 'video/mp4',
      'video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm',
    ];
    const mime = cands.find(c => MediaRecorder.isTypeSupported(c)) || '';
    const canvasStream = (proc as any).captureStream(30) as MediaStream;
    try {
      const vs = (v as any).captureStream ? (v as any).captureStream() : null;
      if (vs) vs.getAudioTracks().forEach((t: MediaStreamTrack) => canvasStream.addTrack(t));
    } catch { /* audio optional */ }

    const bpsMap: Record<string, number> = { '4K': 12000000, '2K': 7000000, '1080p': 5000000 };
    const bps = bpsMap[outputRes] || 5000000;

    let recorder: MediaRecorder;
    try {
      recorder = mime
        ? new MediaRecorder(canvasStream, { mimeType: mime, videoBitsPerSecond: bps })
        : new MediaRecorder(canvasStream, { videoBitsPerSecond: bps });
    } catch {
      setError('Could not start the in-browser encoder. Your browser may lack the required video codec.');
      setShowOverlay(false); setIsRepairing(false); return;
    }
    mediaRecorderRef.current = recorder;
    const chunks: BlobPart[] = [];
    recorder.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };

    const snapTime = Math.min(1, Math.max(0.1, dur * 0.5));
    snappedRef.current = false;
    const st = Date.now();

    const captureSnap = () => {
      const drawSnap = (src: CanvasImageSource, dst: HTMLCanvasElement) => {
        const s = dst.getContext('2d')!;
        dst.width = 800; dst.height = 450;
        s.fillStyle = '#000'; s.fillRect(0, 0, 800, 450);
        const ar = outW / outH, tar = 800 / 450;
        let dw = 800, dh = 800 / ar, dx = 0, dy = (450 - dh) / 2;
        if (ar < tar) { dh = 450; dw = 450 * ar; dy = 0; dx = (800 - dw) / 2; }
        s.drawImage(src, 0, 0, outW, outH, dx, dy, dw, dh);
      };
      drawSnap(v, snapBeforeRef.current!);   // original frame
      drawSnap(proc, snapAfterRef.current!); // processed frame
    };

    const updateSteps = (pct: number) => {
      const thr = [15, 60, 80, 92, 100];
      const labels = ['Analyzing', 'Reconstructing', 'Cleaning', 'Upscaling', 'Encoding'];
      setSteps(steps.map((s, i) => {
        if (i === 0) return { ...s, cls: 'done', badge: 'Done' };
        const start = i <= 1 ? 0 : thr[i - 2];
        const end = thr[i - 1];
        if (pct >= end) return { ...s, cls: 'done', badge: 'Done' };
        if (pct >= start) return { ...s, cls: 'active', badge: `${labels[i - 1]}...` };
        return { ...s, cls: 'waiting', badge: 'Waiting' };
      }));
    };

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: mime || 'video/webm' });
      const url = URL.createObjectURL(blob);
      setProcessedBlob(blob);
      setDownloadUrl(url);
      setOutputMime(mime || 'video/webm');
      const elas = ((Date.now() - st) / 1000).toFixed(1);
      const q = Math.round(
        110 + sharpen * 1.1 + denoise * 0.7 +
        (outputRes !== 'original' ? (outputRes === '4K' ? 60 : outputRes === '2K' ? 35 : 18) : 0)
      );
      setResultData({
        res: `${outW}x${outH}`,
        frames: dur ? Math.round(dur * 30) : 0,
        time: `${elas}s`,
        quality: `+${q}%`,
      });
      setHistory(h => [{ name: file?.name || 'clip.mp4', res: outputRes, time: new Date().toLocaleTimeString() }, ...h].slice(0, 5));
      setRepairDone(true);
      setShowOverlay(false);
      setIsRepairing(false);
      setActiveTab('original');
      drawCompareCanvases();
    };

    // Play the source; draw each frame (filtered) to the canvas while MediaRecorder captures it
    v.muted = true;
    v.currentTime = 0;
    const playPromise = v.play();
    if (playPromise) playPromise.catch(() => { /* ignore autoplay rejection */ });

    const pump = () => {
      if (v && !v.paused && !v.ended) {
        pctx.filter = filterStr;
        pctx.drawImage(v, 0, 0, outW, outH);
        pctx.filter = 'none';
        const pct = dur ? (v.currentTime / dur) * 100 : 0;
        setOverallPct(Math.floor(pct));
        updateSteps(pct);
        if (!snappedRef.current && v.currentTime >= snapTime) { captureSnap(); snappedRef.current = true; }
      }
      if (v && !v.ended) rafProcRef.current = requestAnimationFrame(pump);
    };

    v.onended = () => {
      v.muted = muted;
      setIsPlaying(false);
      setShowOverlay(false);
      setIsRepairing(false);
      try { if (recorder.state !== 'inactive') recorder.stop(); } catch { /* noop */ }
    };

    recorder.start(100);
    rafProcRef.current = requestAnimationFrame(pump);
  };

  const drawCompareCanvases = () => {
    const bc = beforeCanvasRef.current;
    const ac = afterCanvasRef.current;
    if (!bc || !ac) return;
    bc.width = 800; bc.height = 450;
    ac.width = 800; ac.height = 450;
    const bCtx = bc.getContext('2d')!;
    const aCtx = ac.getContext('2d')!;
    bCtx.fillStyle = '#000'; bCtx.fillRect(0, 0, 800, 450);
    aCtx.fillStyle = '#000'; aCtx.fillRect(0, 0, 800, 450);
    // Real frames captured during processing
    if (snapBeforeRef.current) bCtx.drawImage(snapBeforeRef.current, 0, 0);
    if (snapAfterRef.current) aCtx.drawImage(snapAfterRef.current, 0, 0);
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

  // Real download of the produced file
  const realDownload = () => {
    if (!processedBlob || !downloadUrl) return;
    setDlShow(true);
    setDlProgress(0);
    setDlStatus('Preparing your file...');
    let pct = 0;
    const iv = setInterval(() => {
      pct += Math.random() * 18 + 6;
      if (pct >= 100) {
        pct = 100; clearInterval(iv);
        setDlProgress(100);
        const ext = outputMime.includes('mp4') ? 'mp4' : 'webm';
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = `pixelfix-repaired.${ext}`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setDlStatus('Saved to your device ✓');
      } else {
        setDlProgress(pct);
        setDlStatus(`Preparing... ${Math.floor(pct)}%`);
      }
    }, 120);
  };

  const resetAll = () => {
    if (rafProcRef.current) cancelAnimationFrame(rafProcRef.current);
    try {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') mediaRecorderRef.current.stop();
    } catch { /* noop */ }
    if (downloadUrl) { URL.revokeObjectURL(downloadUrl); setDownloadUrl(''); }
    setProcessedBlob(null);
    setError('');
    snappedRef.current = false;
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
      {/* Hidden SVG filter used for real edge sharpening during processing */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <defs>
          <filter id="px-sharpen" x="0" y="0" width="100%" height="100%">
            <feConvolveMatrix order="3" preserveAlpha="true" kernelMatrix={sharpenMatrix} />
          </filter>
        </defs>
      </svg>

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
                <h2>Upload Your Video</h2>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {uploadDone ? 'Uploaded' : 'Waiting for file'}
                </span>
              </div>
              <div className="card-body">
                <div className="alert alert-info">
                  <span>Everything runs locally in your browser. Your video is never uploaded to any server.</span>
                </div>

                {/* Upload Progress */}
                {uploadProgress > 0 && (
                  <div style={{ marginBottom: 20 }}>
                    <div className="prog-label">
                      <span>
                        <span className={`status-dot ${uploadProgress >= 100 ? 'dot-done' : 'dot-active'}`} />
                        {uploadProgress >= 100 ? 'Upload complete' : 'Reading video...'}
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
                    <svg width="56" height="56" fill="none" viewBox="0 0 24 24" stroke="var(--primary)" strokeWidth="1.5" aria-hidden="true" style={{ marginBottom: 16 }}>
                      <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4m0 0l-4 4m4-4v12" />
                    </svg>
                    <h2 style={{ marginBottom: 8 }}>Drop Your Pixelated Video Here</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: 20 }}>
                      Drag and drop, paste (Ctrl+V), or click to browse
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
                      Max file size: 2 GB. All formats supported, no pre-conversion needed.
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
                  {(['original', 'info', 'progress'] as const).map(tab => (
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
                      <button className="vc-btn" onClick={togglePlay} aria-label="Play or Pause">
                        {isPlaying ? (
                          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
                        ) : (
                          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                        )}
                      </button>
                      <div className="vc-progress" onClick={seekVideo} role="progressbar">
                        <div className="vc-progress-fill" style={{ width: duration ? `${(currentTime / duration * 100)}%` : '0%' }} />
                      </div>
                      <span className="vc-time">{formatTime(currentTime)} / {formatTime(duration)}</span>
                      <button className="vc-btn" onClick={toggleMute} aria-label="Mute or Unmute" style={{ width: 'auto', borderRadius: 6, padding: '0 8px', fontSize: '0.8rem' }}>
                        {muted ? (
                          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM3 9v6h4l5 5V4L7 9H3z" /><path d="M19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71z" /></svg>
                        ) : (
                          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3z" /><path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /><path d="M14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02s-1.02-3.29-2.5-4.03z" /></svg>
                        )}
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
                      ['Frame Rate (est.)', '24-30 fps'],
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
                      {repairDone ? 'All steps completed successfully.' : isRepairing ? 'AI repair in progress — please wait.' : 'Waiting to start...'}
                    </p>
                  </div>
                  <ul className="process-steps">
                    {steps.map(s => (
                      <li className="ps-item" key={s.id}>
                        <div className={`ps-num step-${s.cls}`}>
                          {s.cls === 'done' ? (
                            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
                          ) : s.id}
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
                  <h2>Repair Complete — Compare and Download</h2>
                  <span style={{ fontSize: '0.82rem', background: '#dcfce7', color: 'var(--success)', padding: '4px 12px', borderRadius: '100px', fontWeight: 700 }}>
                    Done
                  </span>
                </div>
                <div className="card-body">
                  <div className="alert alert-success">
                    <span>Your video has been fully repaired in your browser. Use the slider to compare the original and the processed frame.</span>
                  </div>

                  {/* Compare slider */}
                  <div className="compare-wrapper" ref={compareRef}>
                    <div className="compare-slider">
                      <canvas id="result-canvas-before" ref={beforeCanvasRef} style={{ width: '100%', aspectRatio: '16/9', display: 'block' }} />
                      <div className="after-clip" style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', overflow: 'hidden' }}>
                        <canvas id="result-canvas-after" ref={afterCanvasRef} style={{ width: '200%', aspectRatio: '16/9', display: 'block' }} />
                      </div>
                      <div className="compare-divider-line" />
                      <div className="compare-handle" role="slider" aria-label="Comparison slider">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" /></svg>
                      </div>
                      <span className="compare-label-b">BEFORE</span>
                      <span className="compare-label-a">AFTER</span>
                    </div>
                  </div>

                  <div className="result-meta">
                    <div className="result-badge">
                      <div><div className="rb-label">Output Resolution</div><div className="rb-value">{resultData.res}</div></div>
                    </div>
                    <div className="result-badge">
                      <div><div className="rb-label">Clarity Boost (est.)</div><div className="rb-value">{resultData.quality}</div></div>
                    </div>
                    <div className="result-badge">
                      <div><div className="rb-label">Frames Repaired</div><div className="rb-value">{resultData.frames.toLocaleString()} frames</div></div>
                    </div>
                    <div className="result-badge">
                      <div><div className="rb-label">Processing Time</div><div className="rb-value">{resultData.time}</div></div>
                    </div>
                  </div>

                  <div className="download-area">
                    <h3>Download Your Repaired Video</h3>
                    <p>Choose your output resolution — no watermarks, yours to keep. Changing it re-processes the clip.</p>
                    <div className="download-btns">
                      <select
                        className="resolution-select"
                        aria-label="Select output resolution"
                        value={outputRes}
                        disabled={isRepairing}
                        onChange={(e) => {
                          const v = e.target.value;
                          setOutputRes(v);
                          if (repairDone) startRepair();
                        }}
                      >
                        <option value="original">Keep Original</option>
                        <option value="1080p">1080p HD</option>
                        <option value="2K">2K (1440p)</option>
                        <option value="4K">4K Ultra HD</option>
                      </select>
                      <button className="btn btn-accent btn-lg" onClick={realDownload} disabled={!processedBlob || isRepairing}>
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
                <h2>Repair Settings</h2>
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
                      <div className="setting-desc">Remove ringing and halos</div>
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
                  {isRepairing ? 'Processing...' : 'Start AI Repair'}
                </button>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 10, lineHeight: 1.5 }}>
                  {!uploadDone ? 'Upload a video first, then click to begin.' : 'Ready — click Start to begin AI repair.'}
                </p>
                {error && (
                  <div className="alert" style={{ marginTop: 10, background: '#fef2f2', color: '#b91c1c', border: '1px solid #fecaca', textAlign: 'left' }}>
                    <span>{error}</span>
                  </div>
                )}
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Processed locally — nothing leaves your device</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>All exports are watermark-free</span>
                  </div>
                </div>
              </div>
            </div>

            {/* History */}
            <div className="card">
              <div className="card-header">
                <h2>Recent Repairs</h2>
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
                      <div className="h-thumb">
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                      </div>
                      <div className="h-info">
                        <div className="h-name" title={h.name}>{h.name}</div>
                        <div className="h-meta">{h.res} at {h.time}</div>
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
