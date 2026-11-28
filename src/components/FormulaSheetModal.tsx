'use client';

import React from 'react';
import { X, BookOpen } from 'lucide-react';
import { sound } from '@/lib/sound';

interface FormulaSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormulaSheetModal({ isOpen, onClose }: FormulaSheetModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-800/90 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                College Board Official SAT Math Reference Sheet
              </h3>
              <p className="text-xs text-slate-400">
                Imtihon paytida taqdim etiladigan rasmiy formulalar
              </p>
            </div>
          </div>

          <button
            onClick={() => { sound.playClick(); onClose(); }}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-200 text-sm">
          
          {/* Section 1: 2D Geometry */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
              1. 2D Geometriya Formulalari
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-xs font-bold text-slate-400 block mb-1">Doira Yuzi</span>
                <span className="text-lg font-mono font-bold text-white">A = π r²</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-xs font-bold text-slate-400 block mb-1">Aylana Uzunligi</span>
                <span className="text-lg font-mono font-bold text-white">C = 2 π r</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-xs font-bold text-slate-400 block mb-1">To&apos;g&apos;ri to&apos;rtburchak</span>
                <span className="text-lg font-mono font-bold text-white">A = l · w</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-xs font-bold text-slate-400 block mb-1">Uchburchak Yuzi</span>
                <span className="text-lg font-mono font-bold text-white">A = ½ b · h</span>
              </div>
            </div>
          </div>

          {/* Section 2: Special Right Triangles & Pythagorean */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
              2. Pifagor Teoremasi & Maxsus Uchburchaklar
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-xs font-bold text-slate-400 block mb-1">Pifagor Teoremasi</span>
                <span className="text-lg font-mono font-bold text-white">a² + b² = c²</span>
                <p className="text-[11px] text-slate-400 mt-1">Gipotenuza c uchun</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-xs font-bold text-slate-400 block mb-1">45° - 45° - 90°</span>
                <span className="text-lg font-mono font-bold text-cyan-300">x : x : x√2</span>
                <p className="text-[11px] text-slate-400 mt-1">Teng yonli to&apos;g&apos;ri burchakli</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-xs font-bold text-slate-400 block mb-1">30° - 60° - 90°</span>
                <span className="text-lg font-mono font-bold text-cyan-300">x : x√3 : 2x</span>
                <p className="text-[11px] text-slate-400 mt-1">Gipotenuza 2x, 60° qarshisi x√3</p>
              </div>
            </div>
          </div>

          {/* Section 3: 3D Geometry (Hajmlar) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
              3. 3D Fazoviy Shakllar Hajmi (Volume)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-xs font-bold text-slate-400 block mb-1">To&apos;g&apos;ri burchakli quti</span>
                <span className="text-base font-mono font-bold text-white">V = l · w · h</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-xs font-bold text-slate-400 block mb-1">Silindr</span>
                <span className="text-base font-mono font-bold text-white">V = π r² h</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-xs font-bold text-slate-400 block mb-1">Shar (Sfera)</span>
                <span className="text-base font-mono font-bold text-white">V = ⁴⁄₃ π r³</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                <span className="text-xs font-bold text-slate-400 block mb-1">Konus</span>
                <span className="text-base font-mono font-bold text-white">V = ⅓ π r² h</span>
              </div>
            </div>
          </div>

          {/* Section 4: Key Angular Facts */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-800/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2">
              Muhim Qoidalar:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
              <li>Aylananing to&apos;liq burchak o&apos;lchovi <b>360°</b> (yoki <b>2π radian</b>).</li>
              <li>Istalgan uchburchakning ichki burchaklari yig&apos;indisi <b>180°</b> ga teng.</li>
              <li>To&apos;g&apos;ri chiziqdagi yoyiq burchak <b>180°</b> ga teng.</li>
            </ul>
          </div>
        </div>

        <div className="px-6 py-3 bg-slate-800/80 border-t border-slate-700 text-xs text-slate-400 flex items-center justify-between">
          <span>YU Academy 2026 Reference Sheet</span>
          <button
            onClick={() => { sound.playClick(); onClose(); }}
            className="px-4 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
}
