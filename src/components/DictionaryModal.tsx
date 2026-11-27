'use client';

import React, { useState, useMemo } from 'react';
import { X, Search, Sparkles, Volume2, BookA, GraduationCap, Globe, Lightbulb, Filter, Layers, CreditCard, RotateCw } from 'lucide-react';
import { getAll10000DictionaryWords, DICTIONARY_TOPICS, CefrLevel } from '@/data/dictionary-expanded-generator';
import { sound } from '@/lib/sound';
import { speakTextWithGender, stopSpeech } from '@/lib/speech';
import { DictionaryEntry } from '@/types';

interface DictionaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DictionaryModal({ isOpen, onClose }: DictionaryModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<'all' | 'ielts' | 'sat' | 'math' | 'academic'>('all');
  const [filterLevel, setFilterLevel] = useState<'all' | CefrLevel>('all');
  const [filterBand, setFilterBand] = useState<string>('all');
  const [filterTopic, setFilterTopic] = useState<string>('all');
  const [voiceAccent, setVoiceAccent] = useState<'US' | 'UK'>('US');
  const [viewMode, setViewMode] = useState<'list' | 'flashcard'>('list');
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const allWords = useMemo(() => getAll10000DictionaryWords(), []);

  const filteredWords = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return allWords.filter((item: DictionaryEntry) => {
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
        if (filterCategory === 'academic' && item.category !== 'academic') return false;
      }

      // 3. CEFR Level filter (A1 - C2)
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
    }).slice(0, 80);
  }, [allWords, searchQuery, filterCategory, filterLevel, filterBand, filterTopic]);

  const speakWord = (word: string) => {
    sound.playClick();
    speakTextWithGender(word, 'female', 0.88);
  };

  const getLevelBadge = (level?: string, ieltsBand?: string) => {
    if (level === 'C2') {
      return (
        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/30 flex items-center gap-1 shadow-sm">
          <span>🏆 C2 Proficiency</span>
          {ieltsBand && <span>• Band {ieltsBand}</span>}
        </span>
      );
    }
    if (level === 'C1') {
      return (
        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1">
          <span>⭐ C1 Advanced</span>
          {ieltsBand && <span>• Band {ieltsBand}</span>}
        </span>
      );
    }
    if (level === 'B2') {
      return (
        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/30 flex items-center gap-1">
          <span>📘 B2 Vantage</span>
          {ieltsBand && <span>• Band {ieltsBand}</span>}
        </span>
      );
    }
    if (level === 'B1') {
      return (
        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
          📗 B1 Intermediate
        </span>
      );
    }
    if (level === 'A2') {
      return (
        <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/30">
          📙 A2 Pre-Intermediate
        </span>
      );
    }
    return (
      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600/40">
        🎯 A1 Elementary
      </span>
    );
  };

  if (!isOpen) return null;

  const currentFlashcard = filteredWords[cardIndex] || filteredWords[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-900 dark:text-slate-100 transition-colors">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between gap-3 mb-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/30 shadow-inner">
                <BookA className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  10,000+ Akademik Lug&apos;at &amp; Barcha Darajalar
                  <span className="text-[10px] font-extrabold uppercase bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30">
                    A1 • A2 • B1 • B2 • C1 • C2
                  </span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Digital SAT va IELTS (Band 6.0 - 9.0) imtihonlari hamda barcha darajalar uchun 10,000+ so&apos;zlar bazasi
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* View Mode Switcher (List vs Flashcards) */}
              <div className="flex items-center bg-slate-200/80 dark:bg-slate-800 rounded-lg p-0.5 text-xs">
                <button
                  onClick={() => { sound.playClick(); setViewMode('list'); }}
                  className={`px-2 py-1 rounded font-bold transition-all flex items-center gap-1 ${
                    viewMode === 'list'
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                  title="Ro'yxat ko'rinishi"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Ro&apos;yxat</span>
                </button>
                <button
                  onClick={() => { sound.playClick(); setViewMode('flashcard'); setIsFlipped(false); }}
                  className={`px-2 py-1 rounded font-bold transition-all flex items-center gap-1 ${
                    viewMode === 'flashcard'
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'text-slate-500 dark:text-slate-400'
                  }`}
                  title="Flashcard kartochka rejimi"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Flashcard</span>
                </button>
              </div>

              {/* Voice Accent Switcher */}
              <div className="flex items-center bg-slate-200/80 dark:bg-slate-800 rounded-lg p-0.5 text-xs">
                <button
                  onClick={() => setVoiceAccent('US')}
                  className={`px-2 py-1 rounded font-bold transition-all ${
                    voiceAccent === 'US' ? 'bg-cyan-500 text-slate-950' : 'text-slate-500 dark:text-slate-400'
                  }`}
                  title="AQSH talaffuzi"
                >
                  🇺🇸 US
                </button>
                <button
                  onClick={() => setVoiceAccent('UK')}
                  className={`px-2 py-1 rounded font-bold transition-all ${
                    voiceAccent === 'UK' ? 'bg-cyan-500 text-slate-950' : 'text-slate-500 dark:text-slate-400'
                  }`}
                  title="Britaniya talaffuzi"
                >
                  🇬🇧 UK
                </button>
              </div>

              <button
                onClick={() => { sound.playClick(); onClose(); }}
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
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
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-sm"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter Bar: Categories + Levels */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-200 dark:border-slate-800">
            {/* Category Tabs */}
            <div className="flex items-center gap-1 bg-slate-200/60 dark:bg-slate-950/60 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => { sound.playClick(); setFilterCategory('all'); }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  filterCategory === 'all' ? 'bg-cyan-500 text-slate-950' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Barchasi
              </button>
              <button
                onClick={() => { sound.playClick(); setFilterCategory('ielts'); }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  filterCategory === 'ielts' ? 'bg-emerald-500 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>🇬🇧 IELTS</span>
              </button>
              <button
                onClick={() => { sound.playClick(); setFilterCategory('sat'); }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  filterCategory === 'sat' ? 'bg-sky-500 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>🎯 SAT</span>
              </button>
              <button
                onClick={() => { sound.playClick(); setFilterCategory('math'); }}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  filterCategory === 'math' ? 'bg-indigo-500 text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>📐 Math</span>
              </button>
            </div>

            {/* CEFR Level Filters */}
            <div className="flex items-center gap-1 bg-slate-200/60 dark:bg-slate-950/60 p-1 rounded-xl border border-slate-200 dark:border-slate-800 ml-auto flex-wrap">
              <span className="text-[11px] font-bold text-slate-500 px-1 hidden sm:inline">CEFR:</span>
              {(['all', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => { sound.playClick(); setFilterLevel(lvl); }}
                  className={`px-2 py-0.5 rounded-lg text-xs font-bold transition-all ${
                    filterLevel === lvl
                      ? lvl === 'C2'
                        ? 'bg-purple-600 text-white'
                        : lvl === 'C1'
                        ? 'bg-amber-500 text-slate-950 font-black'
                        : lvl === 'B2'
                        ? 'bg-cyan-500 text-slate-950 font-black'
                        : lvl === 'B1'
                        ? 'bg-emerald-500 text-white'
                        : lvl === 'A2'
                        ? 'bg-orange-500 text-white'
                        : lvl === 'A1'
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-700 text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {lvl === 'all' ? 'Barcha' : lvl}
                </button>
              ))}
            </div>

            {/* IELTS Band Filter */}
            <div className="flex items-center gap-1 bg-slate-200/60 dark:bg-slate-950/60 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] font-bold text-slate-500 px-1 hidden sm:inline">IELTS:</span>
              {(['all', '7.0+', '8.0+', '9.0'] as const).map((b) => (
                <button
                  key={b}
                  onClick={() => { sound.playClick(); setFilterBand(b); }}
                  className={`px-2 py-0.5 rounded-lg text-xs font-bold transition-all ${
                    filterBand === b
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {b === 'all' ? 'Barcha' : b}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Body: List Mode vs Flashcard Mode */}
        {viewMode === 'list' ? (
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 divide-y divide-slate-100 dark:divide-slate-800/80">
            {filteredWords.length === 0 ? (
              <div className="py-16 text-center text-slate-400">
                <BookA className="w-12 h-12 mx-auto mb-3 text-slate-500 opacity-60" />
                <p className="text-base font-bold text-slate-700 dark:text-slate-300">Hech qanday so&apos;z topilmadi</p>
                <p className="text-xs text-slate-500 mt-1">Qidiruv so&apos;zini yoki filtrlarni o&apos;zgartirib ko&apos;ring</p>
              </div>
            ) : (
              filteredWords.map((item, idx) => (
                <div
                  key={`${item.word}-${idx}`}
                  className="pt-3.5 first:pt-0 group hover:bg-slate-50 dark:hover:bg-slate-800/40 p-3 rounded-xl transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-lg font-black text-slate-900 dark:text-white tracking-tight">
                        {item.word}
                      </span>
                      {item.pronunciation && (
                        <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                          {item.pronunciation}
                        </span>
                      )}
                      {item.partOfSpeech && (
                        <span className="text-[11px] italic text-slate-500">
                          ({item.partOfSpeech})
                        </span>
                      )}
                      {getLevelBadge(item.level, item.ieltsBand)}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => speakWord(item.word)}
                        className="p-1.5 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 rounded-lg transition-colors flex items-center gap-1 text-xs font-bold"
                        title="Ovoz chiqarib eshitish"
                      >
                        <Volume2 className="w-4 h-4" />
                        <span className="text-[10px] hidden sm:inline">Tinglash</span>
                      </button>
                    </div>
                  </div>

                  {/* Uzbek translation */}
                  <div className="text-sm font-semibold text-cyan-700 dark:text-cyan-300 mb-1">
                    🇺🇿 {item.uz}
                  </div>

                  {/* English Definition */}
                  <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-1.5">
                    {item.shortDef}
                  </div>

                  {/* Example Sentence */}
                  {item.example && (
                    <div className="text-xs text-slate-500 dark:text-slate-400 italic bg-slate-100 dark:bg-slate-950/60 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800/80">
                      &quot;{item.example}&quot;
                    </div>
                  )}

                  {/* Synonyms */}
                  {item.synonyms && item.synonyms.length > 0 && (
                    <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                      <span className="text-[10px] font-bold text-slate-400">Sinonimlar:</span>
                      {item.synonyms.map((syn, sIdx) => (
                        <span
                          key={sIdx}
                          onClick={() => setSearchQuery(syn)}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-600 dark:hover:text-cyan-300 cursor-pointer transition-colors"
                        >
                          {syn}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        ) : (
          /* Flashcard View Mode */
          <div className="flex-1 flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-950/40">
            {filteredWords.length > 0 && currentFlashcard ? (
              <div className="w-full max-w-md flex flex-col items-center">
                
                {/* Progress bar */}
                <div className="w-full flex items-center justify-between text-xs font-bold text-slate-500 mb-3">
                  <span>Kartochka {cardIndex + 1} / {filteredWords.length}</span>
                  <span>{currentFlashcard.level || 'C1'} • Band {currentFlashcard.ieltsBand || '8.0'}</span>
                </div>

                {/* Flip Card Container */}
                <div
                  onClick={() => { sound.playClick(); setIsFlipped(!isFlipped); }}
                  className="w-full min-h-[280px] p-8 rounded-3xl bg-white dark:bg-slate-800 border-2 border-cyan-500/40 shadow-xl shadow-cyan-500/10 cursor-pointer flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.02] relative group select-none"
                >
                  <span className="absolute top-4 right-4 text-xs text-slate-400 flex items-center gap-1">
                    <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
                    Bosing
                  </span>

                  {!isFlipped ? (
                    <div>
                      {getLevelBadge(currentFlashcard.level, currentFlashcard.ieltsBand)}
                      <h4 className="text-3xl font-black text-slate-900 dark:text-white mt-4 mb-2 tracking-tight">
                        {currentFlashcard.word}
                      </h4>
                      {currentFlashcard.pronunciation && (
                        <p className="text-sm font-mono text-cyan-600 dark:text-cyan-400">
                          {currentFlashcard.pronunciation}
                        </p>
                      )}
                      <p className="text-xs text-slate-400 mt-6 font-medium">
                        (O&apos;zbekcha ma&apos;nosini ko&apos;rish uchun bosing)
                      </p>
                    </div>
                  ) : (
                    <div>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                        🇺🇿 O&apos;zbekcha Tarjimasi
                      </span>
                      <h4 className="text-2xl font-black text-cyan-600 dark:text-cyan-400 mb-3">
                        {currentFlashcard.uz}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {currentFlashcard.shortDef}
                      </p>
                      {currentFlashcard.example && (
                        <p className="text-xs italic text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700">
                          &quot;{currentFlashcard.example}&quot;
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Audio & Navigation buttons */}
                <div className="flex items-center gap-3 mt-6">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setCardIndex((prev) => (prev > 0 ? prev - 1 : filteredWords.length - 1));
                      setIsFlipped(false);
                    }}
                    className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                  >
                    ← Oldingi
                  </button>

                  <button
                    onClick={() => speakWord(currentFlashcard.word)}
                    className="p-3 rounded-full bg-cyan-500 text-slate-950 font-bold hover:scale-110 active:scale-95 shadow-md shadow-cyan-500/30 transition-all"
                    title="Talaffuzni tinglash"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => {
                      sound.playClick();
                      setCardIndex((prev) => (prev < filteredWords.length - 1 ? prev + 1 : 0));
                      setIsFlipped(false);
                    }}
                    className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                  >
                    Keyingi →
                  </button>
                </div>

              </div>
            ) : (
              <p className="text-sm text-slate-400">Hech qanday so&apos;z tanlanmagan</p>
            )}
          </div>
        )}

        {/* Footer info bar */}
        <div className="p-3 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Ko&apos;rsatilyapti: <strong className="text-cyan-600 dark:text-cyan-400">{filteredWords.length} ta</strong> so&apos;z</span>
          <span className="hidden sm:inline">CEFR A1–C2 &amp; IELTS Band 5.0–9.0 Rasmiy Lug&apos;at</span>
        </div>

      </div>
    </div>
  );
}
