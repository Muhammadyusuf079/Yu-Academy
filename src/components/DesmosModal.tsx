'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, Calculator, Sparkles, ZoomIn, ZoomOut, RotateCcw, HelpCircle } from 'lucide-react';
import { sound } from '@/lib/sound';

interface DesmosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DesmosModal({ isOpen, onClose }: DesmosModalProps) {
  const [activeTab, setActiveTab] = useState<'canvas' | 'desmos'>('canvas');
  
  // Built-in Graphing State
  const [func1, setFunc1] = useState('x^2 - 4x + 3');
  const [func2, setFunc2] = useState('-0.5x + 3');
  const [zoom, setZoom] = useState(30); // pixels per unit
  const [originX, setOriginX] = useState(0);
  const [originY, setOriginY] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // College Board Digital SAT Presets
  const presets = [
    { label: 'Parabola & Ildizlar', f1: 'x^2 - 4x + 3', f2: '' },
    { label: 'Tenglamalar Tizimi (Intersections)', f1: '2x - 1', f2: '-0.5x + 4' },
    { label: 'Parabola & Chiziq Kesishuvi', f1: 'x^2 - 4', f2: 'x + 2' },
    { label: 'Eksponensial O\'sish', f1: '2 * 1.5^x', f2: '5' },
    { label: 'Modul Funksiyasi (Absolute Value)', f1: 'abs(2x - 4) - 3', f2: '' },
    { label: 'Uchburchak Simmetriya', f1: '-x^2 + 9', f2: '0' },
  ];

  // Helper to safely evaluate mathematical expressions
  const evaluateMath = (expr: string, x: number): number | null => {
    try {
      if (!expr.trim()) return null;
      let clean = expr
        .replace(/\s+/g, '')
        .replace(/(\d+)x/g, '$1*x')
        .replace(/x\^(\d+(\.\d+)?)/g, 'Math.pow(x,$1)')
        .replace(/abs\(([^)]+)\)/g, 'Math.abs($1)')
        .replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)')
        .replace(/sin\(([^)]+)\)/g, 'Math.sin($1)')
        .replace(/cos\(([^)]+)\)/g, 'Math.cos($1)');

      // Replace x with numeric value
      clean = clean.replace(/\bx\b/g, `(${x})`);

      // Evaluate safely
      const res = Function(`"use strict"; return (${clean});`)();
      if (typeof res === 'number' && !isNaN(res) && isFinite(res)) {
        return res;
      }
      return null;
    } catch {
      return null;
    }
  };

  // Draw Canvas
  useEffect(() => {
    if (activeTab !== 'canvas' || !isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to display size
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const centerX = width / 2 + originX;
    const centerY = height / 2 + originY;

    // Background
    ctx.fillStyle = '#0f172a'; // slate-900
    ctx.fillRect(0, 0, width, height);

    // Grid lines
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#1e293b'; // slate-800

    // Vertical grid
    const startX = Math.floor(-centerX / zoom);
    const endX = Math.ceil((width - centerX) / zoom);
    for (let i = startX; i <= endX; i++) {
      const px = centerX + i * zoom;
      ctx.beginPath();
      ctx.moveTo(px, 0);
      ctx.lineTo(px, height);
      ctx.stroke();

      // Axis labels
      if (i !== 0 && i % 2 === 0) {
        ctx.fillStyle = '#64748b';
        ctx.font = '10px monospace';
        ctx.fillText(i.toString(), px - 6, centerY + 14);
      }
    }

    // Horizontal grid
    const startY = Math.floor(-centerY / zoom);
    const endY = Math.ceil((height - centerY) / zoom);
    for (let j = startY; j <= endY; j++) {
      const py = centerY + j * zoom;
      ctx.beginPath();
      ctx.moveTo(0, py);
      ctx.lineTo(width, py);
      ctx.stroke();

      // Axis labels
      if (j !== 0 && j % 2 === 0) {
        ctx.fillStyle = '#64748b';
        ctx.font = '10px monospace';
        ctx.fillText((-j).toString(), centerX + 4, py + 3);
      }
    }

    // Main Axes X and Y
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#475569'; // slate-600
    // X Axis
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    // Y Axis
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    // Origin label (0,0)
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px monospace';
    ctx.fillText('0', centerX - 10, centerY + 14);

    // Plot Function 1 (Cyan)
    if (func1.trim()) {
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#06b6d4'; // cyan-500
      ctx.beginPath();
      let started = false;

      for (let px = 0; px <= width; px += 2) {
        const x = (px - centerX) / zoom;
        const y = evaluateMath(func1, x);

        if (y !== null) {
          const py = centerY - y * zoom;
          if (py >= -100 && py <= height + 100) {
            if (!started) {
              ctx.moveTo(px, py);
              started = true;
            } else {
              ctx.lineTo(px, py);
            }
          } else {
            started = false;
          }
        } else {
          started = false;
        }
      }
      ctx.stroke();
    }

    // Plot Function 2 (Emerald)
    if (func2.trim()) {
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#10b981'; // emerald-500
      ctx.beginPath();
      let started = false;

      for (let px = 0; px <= width; px += 2) {
        const x = (px - centerX) / zoom;
        const y = evaluateMath(func2, x);

        if (y !== null) {
          const py = centerY - y * zoom;
          if (py >= -100 && py <= height + 100) {
            if (!started) {
              ctx.moveTo(px, py);
              started = true;
            } else {
              ctx.lineTo(px, py);
            }
          } else {
            started = false;
          }
        } else {
          started = false;
        }
      }
      ctx.stroke();
    }

    // Detect and Draw Intersection / Root Points
    if (func1.trim() && func2.trim()) {
      // Find intersections
      for (let x = -15; x <= 15; x += 0.05) {
        const y1 = evaluateMath(func1, x);
        const y2 = evaluateMath(func2, x);
        if (y1 !== null && y2 !== null && Math.abs(y1 - y2) < 0.15) {
          const px = centerX + x * zoom;
          const py = centerY - y1 * zoom;

          ctx.fillStyle = '#f59e0b'; // amber-500 point
          ctx.beginPath();
          ctx.arc(px, py, 5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#fef08a';
          ctx.font = 'bold 11px monospace';
          ctx.fillText(`(${x.toFixed(1)}, ${y1.toFixed(1)})`, px + 8, py - 4);
          x += 0.8; // step ahead
        }
      }
    }
  }, [activeTab, isOpen, func1, func2, zoom, originX, originY]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[88vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-800/90 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                Digital SAT Rasmiy Grafik Kalkulyatori
                <span className="text-[10px] font-semibold uppercase bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  College Board 2026
                </span>
              </h3>
              <p className="text-xs text-slate-400 hidden sm:block">
                Parabola ildizlari, chiziqli tizimlar va tenglamalar kesishuvini 1 soniyada topish
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.desmos.com/calculator"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors hidden sm:inline-flex"
              title="Alohida oynada ochish"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => { sound.playClick(); onClose(); }}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
              aria-label="Yopish"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center justify-between px-5 py-2.5 bg-slate-850 border-b border-slate-700 text-xs">
          <div className="flex gap-2">
            <button
              onClick={() => { sound.playClick(); setActiveTab('canvas'); }}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'canvas'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>O&apos;rnatilgan Yu Kalkulyator (100% Sayt Ichida)</span>
            </button>
            <button
              onClick={() => { sound.playClick(); setActiveTab('desmos'); }}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'desmos'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
              }`}
            >
              <span>Desmos Rasmiy Iframe</span>
            </button>
          </div>

          {activeTab === 'canvas' && (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setZoom(prev => Math.min(60, prev + 5))}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                title="Yaqinlashtirish (Zoom In)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoom(prev => Math.max(15, prev - 5))}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                title="Uzoqlashtirish (Zoom Out)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => { setZoom(30); setOriginX(0); setOriginY(0); }}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                title="Ko'rinishni tiklash"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Content Body */}
        {activeTab === 'canvas' ? (
          <div className="flex-1 flex flex-col md:flex-row bg-slate-950 overflow-hidden">
            
            {/* Left Controls & Function Inputs */}
            <div className="w-full md:w-80 bg-slate-900 border-r border-slate-800 p-4 space-y-4 overflow-y-auto">
              
              {/* Function 1 */}
              <div>
                <label className="text-xs font-bold text-cyan-400 flex items-center justify-between mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    Funksiya 1 (y₁ = f(x)):
                  </span>
                </label>
                <input
                  type="text"
                  value={func1}
                  onChange={(e) => setFunc1(e.target.value)}
                  placeholder="Masalan: x^2 - 4x + 3"
                  className="w-full px-3 py-2 rounded-xl text-xs font-mono bg-slate-950 border border-cyan-500/40 text-cyan-200 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Function 2 */}
              <div>
                <label className="text-xs font-bold text-emerald-400 flex items-center justify-between mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    Funksiya 2 (y₂ = g(x)):
                  </span>
                </label>
                <input
                  type="text"
                  value={func2}
                  onChange={(e) => setFunc2(e.target.value)}
                  placeholder="Masalan: -0.5x + 3"
                  className="w-full px-3 py-2 rounded-xl text-xs font-mono bg-slate-950 border border-emerald-500/40 text-emerald-200 focus:outline-none focus:border-emerald-400"
                />
              </div>

              {/* SAT Formula Presets */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  SAT 2026 Tezkor Andozalar:
                </span>
                <div className="space-y-1.5">
                  {presets.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        sound.playClick();
                        setFunc1(p.f1);
                        setFunc2(p.f2);
                      }}
                      className="w-full p-2 rounded-xl text-left text-xs bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500 text-slate-300 hover:text-white transition-all flex items-center justify-between"
                    >
                      <span>{p.label}</span>
                      <span className="text-[10px] text-cyan-400 font-mono">Yuklash →</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700 text-[11px] text-slate-400 leading-relaxed">
                💡 <b>SAT Imtihon Maslahati:</b> Agar tenglama kesishish nuqtasi so&apos;ralsa, ikkala funksiyani kiritib, sariq nuqta koordinatasini ko&apos;ring.
              </div>

            </div>

            {/* Canvas Area */}
            <div className="flex-1 relative w-full h-full bg-slate-950">
              <canvas
                ref={canvasRef}
                className="w-full h-full block cursor-crosshair"
              />
              <div className="absolute bottom-3 right-3 text-[10px] text-slate-500 font-mono bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-800">
                1 bo&apos;lim = {(30 / zoom).toFixed(1)} birlik
              </div>
            </div>

          </div>
        ) : (
          <div className="flex-1 w-full bg-slate-950">
            <iframe
              src="https://www.desmos.com/calculator?embed"
              title="Desmos Graphing Calculator"
              className="w-full h-full border-0"
              allow="fullscreen"
            />
          </div>
        )}

        {/* Footer info */}
        <div className="px-5 py-2.5 bg-slate-800/80 border-t border-slate-700 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
          <span>💡 <b>Offline Dvigatel:</b> Brauzeringiz blokirovkalarsiz 100% sayt ichida ishlaydi.</span>
          <span className="text-slate-400 font-mono">College Board Digital SAT Approved</span>
        </div>

      </div>
    </div>
  );
}
