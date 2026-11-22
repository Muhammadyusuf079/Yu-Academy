'use client';

import React, { useState, useMemo } from 'react';
import { X, Search, Sparkles, Volume2, BookA, GraduationCap, Globe, Lightbulb, Filter } from 'lucide-react';
import { YU_DICTIONARY_DATABASE } from '@/data/dictionary';
import { sound } from '@/lib/sound';
import { DictionaryEntry } from '@/types';

interface DictionaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DictionaryModal({ isOpen, onClose }: DictionaryModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<'all' | 'ielts' | 'sat' | 'math'>('all');
  const [filterLevel, setFilterLevel] = useState<'all' | 'B1' | 'B2' | 'C1' | 'C2'>('all');
  const [filterBand, setFilterBand] = useState<string>('all');
  const [filterTopic, setFilterTopic] = useState<string>('all');
  const [voiceAccent, setVoiceAccent] = useState<'US' | 'UK'>('US');

  const filteredWords = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return YU_DICTIONARY_DATABASE.filter((item: DictionaryEntry) => {
      // 1. Search text filter
      if (q) {
        const matchText =
          item.word?.toLowerCase().includes(q) ||
          item.uz?.toLowerCase().includes(q) ||
          item.shortDef?.toLowerCase().includes(q) ||
          item.example?.toLowerCase().includes(q) ||
          item.synonyms?.some((s) => s.toLowerCase().includes(q));
        if (!matchText) return false;
      }

      // 2. Category filter
      if (filterCategory !== 'all') {
        if (filterCategory === 'ielts' && item.category !== 'ielts') return false;
        if (filterCategory === 'sat' && item.category !== 'sat') return false;
        if (filterCategory === 'math' && item.category !== 'math') return false;
      }

      // 3. CEFR Level filter (B1, B2, C1, C2)
      if (filterLevel !== 'all' && item.level !== filterLevel) {
        return false;
      }

      // 4. IELTS Band filter
      if (filterBand !== 'all') {
        if (filterBand === '9.0' && item.ieltsBand !== '9.0') return false;
        if (filterBand === '8.0+' && item.ieltsBand !== '8.0' && item.ieltsBand !== '8.5' && item.ieltsBand !== '9.0') return false;
        if (filterBand === '7.0+' && item.ieltsBand !== '7.0' && item.ieltsBand !== '7.5' && item.ieltsBand !== '8.0' && item.ieltsBand !== '8.5' && item.ieltsBand !== '9.0') return false;
      }

      // 5. Topic filter
      if (filterTopic !== 'all' && item.topic !== filterTopic) {
        return false;
      }

      return true;
    }).slice(0, 60);
  }, [searchQuery, filterCategory, filterLevel, filterBand, filterTopic]);

  const speakWord = (word: string) => {
    sound.playClick();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = voiceAccent === 'UK' ? 'en-GB' : 'en-US';
      utterance.rate = 0.88;
      window.speechSynthesis.speak(utterance);
    }
  };

  const getLevelBadge = (level?: string, ieltsBand?: string) => {
    if (level === 'C2') {
      return (
        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1 shadow-sm">
          <span>🏆 C2 Mastery</span>
          {ieltsBand && <span>• Band {ieltsBand}</span>}
        </span>
      );
    }
    if (level === 'C1') {
      return (
        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
          <span>⭐ C1 Advanced</span>
          {ieltsBand && <span>• Band {ieltsBand}</span>}
        </span>
      );
    }
    if (level === 'B2') {
      return (
        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
          <span>📘 B2 Vantage</span>
          {ieltsBand && <span>• Band {ieltsBand}</span>}
        </span>
      );
    }
    return (
      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-300 border border-slate-600/40">
        B1 Core
      </span>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-850 border-b border-slate-800">
          <div className="flex items-center justify-between gap-3 mb-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/30 to-amber-600/10 text-amber-400 flex items-center justify-center border border-amber-500/40 shadow-inner">
                <BookA className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                  Akademik Lug&apos;at &amp; Darajalar Bazasi
                  <span className="text-[10px] font-extrabold uppercase bg-cyan-500/20 text-cyan-300 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                    B1 • B2 • C1 • C2
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Digital SAT va IELTS (Band 7.0 - 9.0) imtihonlari uchun darajalar va mavzular bo&apos;yicha saralangan
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Voice Accent Switcher */}
              <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs">
                <button
                  onClick={() => setVoiceAccent('US')}
                  className={`px-2 py-1 rounded font-bold transition-all ${
                    voiceAccent === 'US' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                  title="AQSH talaffuzi"
                >
                  🇺🇸 US
                </button>
                <button
                  onClick={() => setVoiceAccent('UK')}
                  className={`px-2 py-1 rounded font-bold transition-all ${
                    voiceAccent === 'UK' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Britaniya talaffuzi"
                >
                  🇬🇧 UK
                </button>
              </div>

              <button
                onClick={() => { sound.playClick(); onClose(); }}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                title="Yopish"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search Input */}
          <div className="relative mb-3">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Inglizcha so'z, o'zbekcha tarjima yoki sinonimlarni qidiring..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Bar: Categories + Levels */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-800/80">
            {/* Category Tabs */}
            <div className="flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => { sound.playClick(); setFilterCategory('all'); }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  filterCategory === 'all' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                Barchasi
              </button>
              <button
                onClick={() => { sound.playClick(); setFilterCategory('ielts'); }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  filterCategory === 'ielts' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🇬🇧 IELTS</span>
              </button>
              <button
                onClick={() => { sound.playClick(); setFilterCategory('sat'); }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  filterCategory === 'sat' ? 'bg-sky-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>🎯 SAT</span>
              </button>
              <button
                onClick={() => { sound.playClick(); setFilterCategory('math'); }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  filterCategory === 'math' ? 'bg-indigo-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>📐 Math</span>
              </button>
            </div>

            {/* CEFR Level Filters */}
            <div className="flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800 ml-auto">
              <span className="text-[11px] font-bold text-slate-500 px-1 hidden sm:inline">Daraja:</span>
              {(['all', 'B2', 'C1', 'C2'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => { sound.playClick(); setFilterLevel(lvl); }}
                  className={`px-2 py-0.5 rounded-lg text-xs font-bold transition-all ${
                    filterLevel === lvl
                      ? lvl === 'C2'
                        ? 'bg-purple-500 text-white'
                        : lvl === 'C1'
                        ? 'bg-amber-500 text-slate-950'
                        : lvl === 'B2'
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-700 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lvl === 'all' ? 'Barcha' : lvl}
                </button>
              ))}
            </div>

            {/* IELTS Band Filter */}
            {filterCategory === 'ielts' && (
              <div className="flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800 animate-in fade-in">
                <span className="text-[11px] font-bold text-slate-500 px-1">Band:</span>
                {(['all', '7.0+', '8.0+', '9.0'] as const).map((b) => (
                  <button
                    key={b}
                    onClick={() => { sound.playClick(); setFilterBand(b); }}
                    className={`px-2 py-0.5 rounded-lg text-xs font-bold transition-all ${
                      filterBand === b ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {b === 'all' ? 'Har qanday' : b}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Word List */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-3">
          {filteredWords.length === 0 ? (
            <div className="text-center py-16 text-slate-500 text-sm">
              <BookA className="w-10 h-10 mx-auto text-slate-600 mb-2 opacity-50" />
              <p className="font-semibold text-slate-400">Hech qanday so&apos;z topilmadi.</p>
              <p className="text-xs text-slate-500 mt-1">Filtr parametrlarini o&apos;zgartirib ko&apos;ring yoki boshqa so&apos;z kiriting.</p>
            </div>
          ) : (
            filteredWords.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/70 hover:border-slate-600 transition-all group"
              >
                {/* Word Top Bar */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-lg sm:text-xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                      {item.word}
                    </span>

                    {item.ipa && (
                      <span className="text-xs font-mono text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                        {item.ipa}
                      </span>
                    )}

                    {item.pos && (
                      <span className="text-[11px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-slate-700/60">
                        {item.pos}
                      </span>
                    )}

                    {getLevelBadge(item.level, item.ieltsBand)}

                    {item.topic && item.topic !== 'general' && (
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/40">
                        📁 {item.topic}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => speakWord(item.word)}
                    className="p-2 text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/50 rounded-lg transition-colors border border-transparent hover:border-cyan-800/50"
                    title={`${item.word} talaffuzini tinglash (${voiceAccent})`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Uzbek Translation */}
                <p className="text-sm font-bold text-cyan-300 mb-1">
                  🇺🇿 {item.uz}
                </p>

                {/* English Definition */}
                {item.shortDef && (
                  <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                    {item.shortDef}
                  </p>
                )}

                {/* Example Sentences */}
                {item.example && (
                  <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80 my-2 space-y-1">
                    <p className="text-xs text-slate-300 italic">
                      &ldquo;{item.example}&rdquo;
                    </p>
                    {item.exampleUz && (
                      <p className="text-[11px] text-slate-400">
                        ↳ {item.exampleUz}
                      </p>
                    )}
                  </div>
                )}

                {/* Collocations & Synonyms */}
                <div className="flex flex-wrap items-center gap-1.5 mt-2">
                  {item.synonyms && item.synonyms.length > 0 && (
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <span className="font-semibold text-slate-500">Sinonimlar:</span>
                      {item.synonyms.slice(0, 4).map((s, si) => (
                        <span key={si} className="bg-slate-700/40 px-1.5 py-0.5 rounded text-slate-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.collocations && item.collocations.length > 0 && (
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 ml-auto">
                      <span className="font-semibold text-emerald-400">Kollokatsiyalar:</span>
                      {item.collocations.slice(0, 2).map((col, ci) => (
                        <span key={ci} className="bg-emerald-950/40 border border-emerald-800/40 px-1.5 py-0.5 rounded text-emerald-300">
                          {col}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Official Exam Tip Box */}
                {item.examTip && (
                  <div className="mt-2.5 flex items-start gap-2 bg-amber-500/10 border border-amber-500/25 p-2 rounded-lg text-[11.5px] text-amber-200">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><b>Imtihon Layfxaki:</b> {item.examTip}</span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-slate-850 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>Ko&apos;rsatilyapti: <b className="text-white">{filteredWords.length}</b> ta so&apos;z</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-500">Jami bazada: <b>{YU_DICTIONARY_DATABASE.length}</b> ta</span>
          </div>

          <button
            onClick={() => { sound.playClick(); onClose(); }}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
}
