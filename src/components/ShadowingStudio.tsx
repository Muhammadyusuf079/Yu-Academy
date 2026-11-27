'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Headphones, Play, Pause, Volume2, Sparkles, Check, User, Mic, Gauge, FastForward } from 'lucide-react';
import { SHADOWING_PHRASES_2026 } from '@/data/shadowing';
import { sound } from '@/lib/sound';

export default function ShadowingStudio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhraseId, setActivePhraseId] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [voiceGender, setVoiceGender] = useState<'female' | 'male'>('female');
  const [speechSpeed, setSpeechSpeed] = useState<number>(1.0);
  const [browserVoices, setBrowserVoices] = useState<SpeechSynthesisVoice[]>([]);

  const categories = [
    { id: 'all', label: 'Barchasi' },
    { id: 'ielts_tech', label: '🤖 Texnologiya & AI' },
    { id: 'ielts_env', label: '🌿 Ekologiya & Iqlim' },
    { id: 'ielts_soc', label: '👥 Jamiyat & Madaniyat' },
    { id: 'ielts_edu', label: '📚 Ta\'lim & Rivojlanish' },
  ];

  // Preload and cache browser voices reliably
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      if (v && v.length > 0) {
        setBrowserVoices(v);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const filtered = selectedCategory === 'all'
    ? SHADOWING_PHRASES_2026.slice(0, 16)
    : SHADOWING_PHRASES_2026.filter(p => p.category === selectedCategory).slice(0, 16);

  const activePhrase = SHADOWING_PHRASES_2026.find(p => p.id === activePhraseId) || SHADOWING_PHRASES_2026[0];

  const playSpeech = (text: string, gender: 'female' | 'male' = voiceGender, speed: number = speechSpeed) => {
    sound.playClick();
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    // Small timeout to allow previous cancel to finish cleanly across Safari and Chrome
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB';
      utterance.rate = speed;

      const voices = (browserVoices.length > 0 ? browserVoices : window.speechSynthesis.getVoices()) || [];
      const enVoices = voices.filter(v => v.lang.toLowerCase().startsWith('en'));

      if (gender === 'female') {
        // High priority female voices
        const femaleVoice = enVoices.find(v => {
          const name = v.name.toLowerCase();
          return (
            name.includes('female') ||
            name.includes('samantha') ||
            name.includes('victoria') ||
            name.includes('karen') ||
            name.includes('moira') ||
            name.includes('tessa') ||
            name.includes('fiona') ||
            name.includes('serena') ||
            name.includes('kate') ||
            name.includes('stephanie') ||
            name.includes('zira') ||
            name.includes('jenny') ||
            name.includes('libby') ||
            name.includes('sonia') ||
            name.includes('google uk english female') ||
            name.includes('google us english')
          );
        }) || enVoices.find(v => {
          const name = v.name.toLowerCase();
          return !name.includes('male') && !name.includes('daniel') && !name.includes('alex') && !name.includes('david') && !name.includes('george') && !name.includes('oliver') && !name.includes('fred');
        }) || enVoices[0];

        if (femaleVoice) {
          utterance.voice = femaleVoice;
        }
        utterance.pitch = 1.35; // Distinct, crisp, bright female tone
      } else {
        // High priority male voices
        const maleVoice = enVoices.find(v => {
          const name = v.name.toLowerCase();
          return (
            name.includes('male') ||
            name.includes('daniel') ||
            name.includes('george') ||
            name.includes('oliver') ||
            name.includes('alex') ||
            name.includes('david') ||
            name.includes('fred') ||
            name.includes('ryan') ||
            name.includes('google uk english male')
          );
        }) || enVoices.find(v => {
          const name = v.name.toLowerCase();
          return !name.includes('female') && !name.includes('samantha') && !name.includes('victoria') && !name.includes('karen') && !name.includes('zira');
        }) || enVoices[1] || enVoices[0];

        if (maleVoice) {
          utterance.voice = maleVoice;
        }
        utterance.pitch = 0.85; // Deep, calm, authoritative male tone
      }

      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      setIsPlaying(true);
      window.speechSynthesis.speak(utterance);
    }, 40);
  };

  return (
    <section id="shadowing-studio" className="w-full py-20 bg-slate-50 dark:bg-slate-950 transition-colors relative overflow-hidden">
      
      {/* Decorative ambient background */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3 shadow-sm">
            <Headphones className="w-4 h-4 text-cyan-500" /> IELTS Audio Shadowing Studio (Band 8.5+)
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            IELTS Speaking Shadowing Trenajyori
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Native speaker ritmi va intonatsiyasini qiz bola yoki o&apos;g&apos;il bola ovozida, sekin yoki tez tezlikda real vaqtda takrorlang.
          </p>
        </div>

        {/* Dual Switchers: Categories + Voice Gender + Speed */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 justify-center sm:justify-start">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(c.id);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === c.id
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Controls: Gender & Speed Switchers */}
          <div className="flex flex-wrap items-center gap-2.5">
            
            {/* Gender Toggle */}
            <div className="p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center">
              <button
                onClick={() => {
                  sound.playClick();
                  setVoiceGender('female');
                  if (isPlaying) playSpeech(activePhrase.text, 'female', speechSpeed);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  voiceGender === 'female'
                    ? 'bg-pink-500 text-white shadow-md shadow-pink-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>👩 Qiz bola ovozi</span>
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setVoiceGender('male');
                  if (isPlaying) playSpeech(activePhrase.text, 'male', speechSpeed);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  voiceGender === 'male'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>👨 O&apos;g&apos;il bola ovozi</span>
              </button>
            </div>

            {/* Speed Control (Sekin / Normal / Tez) */}
            <div className="p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-1">
              <span className="text-[10px] font-bold text-slate-400 px-2 flex items-center gap-1">
                <Gauge className="w-3 h-3 text-cyan-500" /> Tezlik:
              </span>
              {[
                { label: '0.75x', val: 0.75, tip: 'Sekin' },
                { label: '0.9x', val: 0.9, tip: 'Qulay' },
                { label: '1.0x', val: 1.0, tip: 'Normal' },
                { label: '1.25x', val: 1.25, tip: 'Tez' },
              ].map((s) => (
                <button
                  key={s.val}
                  onClick={() => {
                    sound.playClick();
                    setSpeechSpeed(s.val);
                    if (isPlaying) playSpeech(activePhrase.text, voiceGender, s.val);
                  }}
                  className={`px-2 py-1 rounded-lg text-[11px] font-mono font-bold transition-all ${
                    speechSpeed === s.val
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  title={`${s.tip} tezlik`}
                >
                  {s.label}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Studio Player & Phrase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Active Player Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-slate-200/50 dark:shadow-2xl relative transition-all duration-300 hover:shadow-2xl">
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

              {/* Animated Waveform Visualization */}
              <div className="flex items-center justify-center gap-1.5 py-3">
                {[35, 75, 25, 85, 55, 95, 45, 70, 40, 90, 30, 80, 60, 35].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${isPlaying ? (h * Math.random()).toFixed(0) : h * 0.35}px` }}
                    className={`w-1.5 rounded-full transition-all duration-150 ${
                      isPlaying
                        ? voiceGender === 'female' ? 'bg-pink-500 animate-pulse' : 'bg-cyan-500 animate-pulse'
                        : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span>Ovoz: <b>{voiceGender === 'female' ? '👩 Ayol diktori' : '👨 Erkak diktori'}</b></span>
                <span>Tezlik: <b className="font-mono text-cyan-600 dark:text-cyan-400">{speechSpeed}x</b></span>
              </div>
            </div>

            {/* Play Button */}
            <div className="pt-4">
              <button
                onClick={() => playSpeech(activePhrase.text, voiceGender, speechSpeed)}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg ${
                  voiceGender === 'female'
                    ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white shadow-pink-500/25 hover:brightness-110'
                    : 'bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 shadow-cyan-500/25 hover:brightness-110'
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
                  playSpeech(item.text, voiceGender, speechSpeed);
                }}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activePhraseId === item.id
                    ? voiceGender === 'female'
                      ? 'bg-pink-50 dark:bg-pink-950/40 border-pink-500 text-slate-900 dark:text-white shadow-lg shadow-pink-500/10'
                      : 'bg-cyan-50 dark:bg-cyan-950/40 border-cyan-500 text-slate-900 dark:text-white shadow-lg shadow-cyan-500/10'
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
