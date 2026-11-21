'use client';

import React, { useState, useMemo } from 'react';
import { X, Search, Sparkles, Volume2, BookA } from 'lucide-react';
import { YU_DICTIONARY_DATABASE } from '@/data/dictionary';
import { sound } from '@/lib/sound';

interface DictionaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DictionaryModal({ isOpen, onClose }: DictionaryModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'sat' | 'ielts'>('all');

  const filteredWords = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q && filterType === 'all') {
      return YU_DICTIONARY_DATABASE.slice(0, 30);
    }
    return YU_DICTIONARY_DATABASE.filter((item) => {
      const matchText =
        item.word?.toLowerCase().includes(q) ||
        item.uz?.toLowerCase().includes(q) ||
        item.shortDef?.toLowerCase().includes(q);
      if (!matchText) return false;
      if (filterType === 'sat') return item.category?.toLowerCase().includes('sat');
      if (filterType === 'ielts') return item.category?.toLowerCase().includes('ielts');
      return true;
    }).slice(0, 50);
  }, [searchQuery, filterType]);

  const speakWord = (word: string) => {
    sound.playClick();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl h-[85vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-slate-850 border-b border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <BookA className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  Akademik Lug&apos;at (5,000+ So&apos;z)
                  <span className="text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                    2026 Edition
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Digital SAT va IELTS imtihonlarida eng ko&apos;p uchraydigan akademik so&apos;zlar
                </p>
              </div>
            </div>

            <button
              onClick={() => { sound.playClick(); onClose(); }}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input & Filters */}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Inglizcha so'z yoki o'zbekcha tarjimasini yozing..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                autoFocus
              />
            </div>
            
            <div className="flex items-center gap-1.5 self-end sm:self-auto">
              <button
                onClick={() => { sound.playClick(); setFilterType('all'); }}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filterType === 'all'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Barchasi
              </button>
              <button
                onClick={() => { sound.playClick(); setFilterType('sat'); }}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filterType === 'sat'
                    ? 'bg-sky-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                SAT Math & RW
              </button>
              <button
                onClick={() => { sound.playClick(); setFilterType('ielts'); }}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filterType === 'ielts'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                IELTS Band 8+
              </button>
            </div>
          </div>
        </div>

        {/* Word List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {filteredWords.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-sm">
              <p>&quot;{searchQuery}&quot; bo&apos;yicha hech qanday so&apos;z topilmadi.</p>
            </div>
          ) : (
            filteredWords.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/70 transition-all group"
              >
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.word}
                    </span>
                    {item.ipa && (
                      <span className="text-xs font-mono text-cyan-300">
                        {item.ipa}
                      </span>
                    )}
                    {item.pos && (
                      <span className="text-[11px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-slate-700/60">
                        {item.pos}
                      </span>
                    )}
                    {item.category && (
                      <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {item.category}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => speakWord(item.word)}
                    className="p-1.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 rounded-lg transition-colors"
                    title="Talaffuzni tinglash"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-sm font-semibold text-cyan-300 mb-1">
                  {item.uz}
                </p>

                {item.shortDef && (
                  <p className="text-xs text-slate-400 mb-1">
                    {item.shortDef}
                  </p>
                )}

                {item.example && (
                  <p className="text-xs text-slate-400 italic bg-slate-900/50 p-2 rounded-lg border border-slate-800 mt-2">
                    &ldquo;{item.example}&rdquo;
                  </p>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-slate-850 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
          <span>Topilgan so&apos;zlar: <b>{filteredWords.length}</b> ta</span>
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
