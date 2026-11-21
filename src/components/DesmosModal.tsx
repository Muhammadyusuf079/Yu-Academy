'use client';

import React from 'react';
import { X, ExternalLink, Calculator } from 'lucide-react';
import { sound } from '@/lib/sound';

interface DesmosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DesmosModal({ isOpen, onClose }: DesmosModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[85vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-800/90 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                College Board Official Desmos Graphing Calculator
                <span className="text-[10px] font-semibold uppercase bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  SAT 2026 Edition
                </span>
              </h3>
              <p className="text-xs text-slate-400 hidden sm:block">
                Tenglamalar tizimi, parabolalar, regressiya va ildizlarni topish
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

        {/* Embedded Desmos Calculator */}
        <div className="flex-1 w-full bg-slate-950">
          <iframe
            src="https://www.desmos.com/calculator?embed"
            title="Desmos Graphing Calculator"
            className="w-full h-full border-0"
            allow="fullscreen"
          />
        </div>

        {/* Footer info */}
        <div className="px-5 py-2.5 bg-slate-800/80 border-t border-slate-700 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
          <span>💡 <b>SAT Maslahati:</b> $y_1 = f(x)$ va $y_2 = g(x)$ kiritib, kesishish nuqtalarini (ildizlarni) 1 soniyada toping.</span>
          <span className="text-slate-400 font-mono">College Board Digital SAT Approved</span>
        </div>
      </div>
    </div>
  );
}
