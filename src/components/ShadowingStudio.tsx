'use client';

import React, { useState, useEffect } from 'react';
import { Headphones, Play, Pause, Volume2, Sparkles, Check, User, Mic } from 'lucide-react';
import { SHADOWING_PHRASES_2026 } from '@/data/shadowing';
import { sound } from '@/lib/sound';

export default function ShadowingStudio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhraseId, setActivePhraseId] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [voiceGender, setVoiceGender] = useState<'male' | 'female'>('female');

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

  const playSpeech = (text: string, gender: 'male' | 'female' = voiceGender) => {
    sound.playClick();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (isPlaying) {
        setIsPlaying(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB'; // British Council / Cambridge Native accent
      utterance.rate = 0.88;

      // Select matching gender voice from available browser voices
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        const enVoices = voices.filter(v => v.lang.startsWith('en'));
        if (gender === 'female') {
          const femaleVoice = enVoices.find(v => 
            v.name.toLowerCase().includes('female') ||
            v.name.toLowerCase().includes('samantha') ||
            v.name.toLowerCase().includes('victoria') ||
            v.name.toLowerCase().includes('karen') ||
            v.name.toLowerCase().includes('moira') ||
            v.name.toLowerCase().includes('zira') ||
            v.name.toLowerCase().includes('serena')
          );
          if (femaleVoice) utterance.voice = femaleVoice;
          utterance.pitch = 1.12; // Natural female pitch
        } else {
          const maleVoice = enVoices.find(v => 
            v.name.toLowerCase().includes('male') ||
            v.name.toLowerCase().includes('daniel') ||
            v.name.toLowerCase().includes('george') ||
            v.name.toLowerCase().includes('oliver') ||
            v.name.toLowerCase().includes('alex') ||
            v.name.toLowerCase().includes('david')
          );
          if (maleVoice) utterance.voice = maleVoice;
          utterance.pitch = 0.86; // Natural male resonance
        }
      } else {
        utterance.pitch = gender === 'female' ? 1.15 : 0.85;
      }

      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      setIsPlaying(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section id="shadowing-studio" className="w-full py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3">
            <Headphones className="w-4 h-4" /> IELTS Audio Shadowing Studio (Band 8.5+)
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            IELTS Speaking Shadowing Trenajyori
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Native speaker ritmi, intonatsiyasi va leksik boyligini erkak va ayol ovozlarida real vaqtda takrorlab, ravon talaffuzga erishing.
          </p>
        </div>

        {/* Gender Voice Switcher & Category Pills */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(c.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === c.id
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Voice Gender Switcher */}
          <div className="p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center shrink-0">
            <button
              onClick={() => {
                sound.playClick();
                setVoiceGender('female');
                if (isPlaying) playSpeech(activePhrase.text, 'female');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                voiceGender === 'female'
                  ? 'bg-pink-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>👩 Qiz bola ovozi</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setVoiceGender('male');
                if (isPlaying) playSpeech(activePhrase.text, 'male');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                voiceGender === 'male'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>👨 O&apos;g&apos;il bola ovozi</span>
            </button>
          </div>

        </div>

        {/* Studio Player & Phrase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Active Player Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-slate-200/50 dark:shadow-2xl relative transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 px-2.5 py-1 rounded-full">
                  {activePhrase.categoryLabel}
                </span>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">
                  {activePhrase.level}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80">
                <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-100 leading-relaxed font-sans">
                  &ldquo;{activePhrase.text}&rdquo;
                </p>
              </div>

              {/* Waveform Visualization */}
              <div className="flex items-center justify-center gap-1.5 py-3">
                {[35, 75, 25, 85, 55, 95, 45, 70, 40, 90, 30, 80, 60, 35].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${isPlaying ? (h * Math.random()).toFixed(0) : h * 0.35}px` }}
                    className={`w-1.5 rounded-full transition-all duration-150 ${
                      isPlaying
                        ? voiceGender === 'female' ? 'bg-pink-500' : 'bg-cyan-500'
                        : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <div className="text-center text-xs text-slate-500 dark:text-slate-400 font-medium">
                Hozirgi ovoz: <b>{voiceGender === 'female' ? '👩 Ayol native speaker (UK/US)' : '👨 Erkak native speaker (UK/US)'}</b>
              </div>
            </div>

            {/* Play Button */}
            <div className="pt-4">
              <button
                onClick={() => playSpeech(activePhrase.text, voiceGender)}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg ${
                  voiceGender === 'female'
                    ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-pink-500/25'
                    : 'bg-gradient-to-r from-cyan-400 to-sky-300 text-slate-950 shadow-cyan-500/25'
                }`}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                <span>{isPlaying ? 'To\'xtatish' : 'Tinglash va Takrorlash (Shadowing)'}</span>
              </button>
            </div>
          </div>

          {/* Phrase List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-1">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  sound.playClick();
                  setActivePhraseId(item.id);
                  playSpeech(item.text, voiceGender);
                }}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activePhraseId === item.id
                    ? 'bg-cyan-50 dark:bg-cyan-950/40 border-cyan-500 text-slate-900 dark:text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-bold text-cyan-600 dark:text-cyan-400">{item.level}</span>
                  <span className="font-mono text-slate-400 dark:text-slate-500">{item.timing}</span>
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
