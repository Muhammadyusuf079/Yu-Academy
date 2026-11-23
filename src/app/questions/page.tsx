'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  BookOpen,
  Filter,
  CheckCircle2,
  Calculator,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Brain,
  Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DesmosModal from '@/components/DesmosModal';
import FormulaSheetModal from '@/components/FormulaSheetModal';
import DictionaryModal from '@/components/DictionaryModal';
import { ALL_SAT_QUESTIONS } from '@/data/sat-questions';
import { ALL_IELTS_QUESTIONS } from '@/data/ielts-questions';
import { Question } from '@/types';
import { sound } from '@/lib/sound';

export default function QuestionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [examFilter, setExamFilter] = useState<'all' | 'SAT' | 'IELTS'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(30);

  // Modals
  const [desmosOpen, setDesmosOpen] = useState(false);
  const [formulaOpen, setFormulaOpen] = useState(false);
  const [dictOpen, setDictOpen] = useState(false);

  // Combine datasets
  const allPool: Question[] = useMemo(() => {
    return [...ALL_SAT_QUESTIONS, ...ALL_IELTS_QUESTIONS];
  }, []);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allPool.filter((item) => {
      if (examFilter !== 'all' && item.exam !== examFilter) return false;
      if (difficultyFilter !== 'all' && item.difficulty !== difficultyFilter) return false;
      if (!q) return true;

      const inQuestion = typeof item.question === 'string' ? item.question.toLowerCase().includes(q) : false;
      const inStimulus = item.stimulus?.toLowerCase().includes(q);
      const inSection = item.section ? item.section.toLowerCase().includes(q) : false;
      const inTags = Array.isArray(item.tags)
        ? item.tags.some((t: string) => typeof t === 'string' && t.toLowerCase().includes(q))
        : false;

      return inQuestion || inStimulus || inSection || inTags;
    });
  }, [allPool, searchQuery, examFilter, difficultyFilter]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <DesmosModal isOpen={desmosOpen} onClose={() => setDesmosOpen(false)} />
      <FormulaSheetModal isOpen={formulaOpen} onClose={() => setFormulaOpen(false)} />
      <DictionaryModal isOpen={dictOpen} onClose={() => setDictOpen(false)} />

      <Navbar
        onOpenDictionary={() => setDictOpen(true)}
        onOpenDesmos={() => setDesmosOpen(true)}
        onOpenFormula={() => setFormulaOpen(true)}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        
        {/* Page Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <BookOpen className="w-4 h-4" /> 1,850+ Rasmiy Savollar Bazasi
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Digital SAT & IELTS Savollar Banki
          </h1>
          <p className="text-slate-400 text-sm mt-3">
            College Board Bluebook va Cambridge imtihonlarining barcha mavzulari, rasmiy yechimlari va Desmos tezkor usullari bilan.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 sm:p-6 rounded-3xl bg-slate-900 border border-slate-800 mb-8 space-y-4 shadow-xl">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Mavzu (Algebra, Geometry, Reading), kalit so'z yoki formula bo'yicha qidiring..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Exam Filter Buttons */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-slate-400 font-bold mr-1">Imtihon:</span>
              {(['all', 'SAT', 'IELTS'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => { sound.playClick(); setExamFilter(type); setVisibleCount(30); }}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                    examFilter === type
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {type === 'all' ? 'Barchasi' : type}
                </button>
              ))}

              <span className="text-slate-500 mx-1">|</span>

              <span className="text-slate-400 font-bold mr-1">Qiyinlik:</span>
              {(['all', 'Easy', 'Medium', 'Hard', 'Advanced'] as const).map((diff) => (
                <button
                  key={diff}
                  onClick={() => { sound.playClick(); setDifficultyFilter(diff); setVisibleCount(30); }}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    difficultyFilter === diff
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {diff === 'all' ? 'Barcha Daraja' : diff}
                </button>
              ))}
            </div>

            {/* Quick Count */}
            <div className="text-slate-400 font-mono">
              Topildi: <b className="text-cyan-400">{filtered.length}</b> ta savol
            </div>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800 text-slate-500">
              <p>Qidiruvingiz bo&apos;yicha hech qanday savol topilmadi.</p>
            </div>
          ) : (
            filtered.slice(0, visibleCount).map((q, idx) => {
              const isExpanded = expandedId === (q.id || String(idx));

              return (
                <div
                  key={q.id || idx}
                  className="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all overflow-hidden shadow-lg"
                >
                  <div className="p-5 sm:p-6">
                    {/* Tags & Metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {q.exam}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          {q.section}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-400">
                        {q.difficulty}
                      </span>
                    </div>

                    {/* Question Prompt */}
                    <h3 className="text-base sm:text-lg font-bold text-white mb-4 leading-snug">
                      {q.question}
                    </h3>

                    {/* Options Preview */}
                    {Array.isArray(q.options) && q.options.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {q.options.map((opt: any, oIdx: number) => (
                          <div
                            key={oIdx}
                            className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs text-slate-300 font-medium"
                          >
                            <b className="text-cyan-400 mr-1.5">{String.fromCharCode(65 + oIdx)})</b>
                            {String(opt)}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Toggle Solution Button */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                      <button
                        onClick={() => {
                          sound.playClick();
                          setExpandedId(isExpanded ? null : (q.id || String(idx)));
                        }}
                        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                      >
                        <span>{isExpanded ? 'Yechimni yashirish' : 'Yechim va Desmos usulini ko\'rish'}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      <Link
                        href="/tests"
                        onClick={() => sound.playClick()}
                        className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1"
                      >
                        <span>Mock testda topshirish</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Expandable Explanation */}
                    {isExpanded && (
                      <div className="mt-4 p-5 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 text-xs sm:text-sm text-slate-200 leading-relaxed space-y-3 animate-in fade-in">
                        
                        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
                          <span className="text-cyan-400 font-bold block mb-1">To&apos;g&apos;ri javob:</span>
                          <span className="text-white text-sm font-semibold">
                            {typeof q.correctIndex === 'number' && q.options
                              ? `${String.fromCharCode(65 + q.correctIndex)}) ${q.options[q.correctIndex]}`
                              : q.correctAnswer}
                          </span>
                        </div>

                        <div>
                          <div className="font-bold text-cyan-300 flex items-center gap-1.5 mb-1.5">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                            <span>Qadamma-qadam ilmiy yechim & tahlil:</span>
                          </div>
                          <p className="whitespace-pre-line text-slate-300 leading-relaxed">
                            {q.explanation}
                          </p>
                        </div>

                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Load More Button */}
        {visibleCount < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => {
                sound.playClick();
                setVisibleCount((prev) => prev + 30);
              }}
              className="px-8 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-white font-bold text-sm transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              Ko&apos;proq savollarni ko&apos;rish (+30 ta) • Qolgan: {filtered.length - visibleCount}
            </button>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
