'use client';

import React, { useState } from 'react';
import { Headphones, Play, Pause, Volume2, Sparkles, Check, Mic } from 'lucide-react';
import { SHADOWING_PHRASES_2026 } from '@/data/shadowing';
import { sound } from '@/lib/sound';

export default function ShadowingStudio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhraseId, setActivePhraseId] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Barchasi' },
    { id: 'ielts_tech', label: '🤖 Texnologiya & AI' },
    { id: 'ielts_env', label: '🌿 Ekologiya & Iqlim' },
    { id: 'ielts_soc', label: '👥 Jamiyat & Madaniyat' },
    { id: 'ielts_edu', label: '📚 Ta\'lim & Rivojlanish' },
  ];

  const filtered = selectedCategory === 'all'
    ? SHADOWING_PHRASES_2026.slice(0, 16)
    : SHADOWING_PHRASES_2026.filter(p => p.category === selectedCategory).slice(0, 16);

  const activePhrase = SHADOWING_PHRASES_2026.find(p => p.id === activePhraseId) || SHADOWING_PHRASES_2026[0];

  const playSpeech = (text: string) => {
    sound.playClick();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (isPlaying) {
        setIsPlaying(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB'; // British Council accent
      utterance.rate = 0.88;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      setIsPlaying(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section id="shadowing-section" className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-3">
            <Headphones className="w-4 h-4" /> IELTS Speaking Band 8.5+
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            IELTS Speaking Shadowing Studio
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Native speaker ritmi, intonatsiyasi va leksik boyligini real vaqtda takrorlab, ravon talaffuzga erishing.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                sound.playClick();
                setSelectedCategory(c.id);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === c.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Studio Player & Phrase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Active Player Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20 px-2.5 py-1 rounded-full">
                  {activePhrase.categoryLabel}
                </span>
                <span className="text-xs font-bold text-amber-400 font-mono">
                  {activePhrase.level}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                <p className="text-base sm:text-lg font-medium text-slate-100 leading-relaxed">
                  &ldquo;{activePhrase.text}&rdquo;
                </p>
              </div>

              {/* Waveform Visualization Mock */}
              <div className="flex items-center justify-center gap-1.5 py-4">
                {[40, 70, 30, 90, 60, 100, 50, 80, 45, 95, 35, 85, 65, 40].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${isPlaying ? (h * Math.random()).toFixed(0) : h * 0.4}px` }}
                    className={`w-1.5 rounded-full transition-all duration-150 ${
                      isPlaying ? 'bg-cyan-400' : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Play Button */}
            <div className="pt-4">
              <button
                onClick={() => playSpeech(activePhrase.text)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-sky-300 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-slate-950" />}
                <span>{isPlaying ? 'To\'xtatish' : 'Tinglash va Takrorlash (Shadowing)'}</span>
              </button>
            </div>
          </div>

          {/* Phrase List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[480px] overflow-y-auto pr-1">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  sound.playClick();
                  setActivePhraseId(item.id);
                  playSpeech(item.text);
                }}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activePhraseId === item.id
                    ? 'bg-cyan-950/40 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                  <span className="font-bold text-cyan-400">{item.level}</span>
                  <span className="font-mono text-slate-500">{item.timing}</span>
                </div>
                <p className="text-xs sm:text-sm font-medium line-clamp-3 leading-snug">
                  {item.text}
                </p>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
