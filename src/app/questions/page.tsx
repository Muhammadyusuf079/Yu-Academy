'use client';

import React, { useState, useMemo, useEffect } from 'react';
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
  School,
  Gamepad2,
  BrainCircuit,
  Layers,
  GraduationCap,
  Headphones,
  PenTool,
  RotateCcw,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DesmosModal from '@/components/DesmosModal';
import FormulaSheetModal from '@/components/FormulaSheetModal';
import DictionaryModal from '@/components/DictionaryModal';
import AiSpeakingPartnerModal from '@/components/AiSpeakingPartnerModal';
import IeltsGameModal from '@/components/IeltsGameModal';
import { getAll5000Questions } from '@/data/question-bank-generator';
import { Question } from '@/types';
import { sound } from '@/lib/sound';

export default function QuestionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [examFilter, setExamFilter] = useState<'all' | 'SAT' | 'IELTS'>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(30);
  const [questionsPool, setQuestionsPool] = useState<Question[]>([]);

  // Modals
  const [desmosOpen, setDesmosOpen] = useState(false);
  const [formulaOpen, setFormulaOpen] = useState(false);
  const [dictOpen, setDictOpen] = useState(false);
  const [speakingOpen, setSpeakingOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);

  useEffect(() => {
    setQuestionsPool(getAll5000Questions());

    const handleCustomTests = () => {
      setQuestionsPool(getAll5000Questions());
    };

    window.addEventListener('yu_custom_tests_updated', handleCustomTests);
    return () => window.removeEventListener('yu_custom_tests_updated', handleCustomTests);
  }, []);

  const categoryCards = [
    {
      id: 'sat_math',
      title: 'Digital SAT Math',
      subtitle: 'Algebra, Advanced Math, Geometriya & Desmos',
      count: '2,200+ savol',
      icon: Calculator,
      color: 'from-cyan-500 to-blue-600',
      badge: 'Math Module 1 & 2',
      filterAction: () => { setExamFilter('SAT'); setSelectedCategory('Math'); },
    },
    {
      id: 'sat_rw',
      title: 'Digital SAT Reading & Writing',
      subtitle: 'Craft & Structure, Information & Ideas, Grammar',
      count: '1,500+ savol',
      icon: BookOpen,
      color: 'from-purple-500 to-indigo-600',
      badge: 'Reading & Conventions',
      filterAction: () => { setExamFilter('SAT'); setSelectedCategory('RW'); },
    },
    {
      id: 'ielts_listening',
      title: 'Cambridge IELTS Listening',
      subtitle: 'Sections 1-4, Dialoglar, Ma\'ruzalar & Qaydlar',
      count: '800+ savol',
      icon: Headphones,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Audio Simulation',
      filterAction: () => { setExamFilter('IELTS'); setSelectedCategory('Listening'); },
    },
    {
      id: 'ielts_reading',
      title: 'Cambridge IELTS Reading',
      subtitle: 'Academic Passages, True/False/Not Given, Headings',
      count: '600+ savol',
      icon: Layers,
      color: 'from-sky-500 to-blue-600',
      badge: 'Cambridge 16-19',
      filterAction: () => { setExamFilter('IELTS'); setSelectedCategory('Reading'); },
    },
    {
      id: 'ielts_vocab',
      title: 'Band 8.5+ Academic Lug\'at',
      subtitle: 'Collocations, Kontekstdagi so\'zlar, Flashcardlar',
      count: '1,200+ ibora',
      icon: Sparkles,
      color: 'from-amber-500 to-orange-600',
      badge: 'Lexical Resource',
      filterAction: () => { setSelectedCategory('Lexical'); },
    },
    {
      id: 'teacher_tests',
      title: '👨‍🏫 Ustoz Mualliflik Testlari',
      subtitle: 'Platforma ustozlari tomonidan kiritilgan yangi testlar',
      count: 'Maxsus baza',
      icon: School,
      color: 'from-rose-500 to-pink-600',
      badge: 'Mualliflik Testi',
      filterAction: () => { setSelectedCategory('TeacherCreated'); },
    },
  ];

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return questionsPool.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'TeacherCreated' && !item.tags?.includes('TeacherCreated')) {
          return false;
        }
        if (selectedCategory === 'Math' && !item.section?.toLowerCase().includes('math')) {
          return false;
        }
        if (selectedCategory === 'RW' && !item.section?.toLowerCase().includes('rw')) {
          return false;
        }
        if (selectedCategory === 'Listening' && !item.section?.toLowerCase().includes('listening')) {
          return false;
        }
        if (selectedCategory === 'Reading' && !item.section?.toLowerCase().includes('reading')) {
          return false;
        }
        if (selectedCategory === 'Lexical' && !item.section?.toLowerCase().includes('lexical') && !item.tags?.includes('Vocabulary')) {
          return false;
        }
      }

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
  }, [questionsPool, searchQuery, examFilter, difficultyFilter, selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      <DesmosModal isOpen={desmosOpen} onClose={() => setDesmosOpen(false)} />
      <FormulaSheetModal isOpen={formulaOpen} onClose={() => setFormulaOpen(false)} />
      <DictionaryModal isOpen={dictOpen} onClose={() => setDictOpen(false)} />
      <AiSpeakingPartnerModal isOpen={speakingOpen} onClose={() => setSpeakingOpen(false)} />
      <IeltsGameModal isOpen={gamesOpen} onClose={() => setGamesOpen(false)} />

      <Navbar
        onOpenDictionary={() => setDictOpen(true)}
        onOpenDesmos={() => setDesmosOpen(true)}
        onOpenFormula={() => setFormulaOpen(true)}
        onOpenSpeakingAi={() => setSpeakingOpen(true)}
        onOpenIeltsGames={() => setGamesOpen(true)}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        
        {/* Page Header */}
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 mb-3">
            <BookOpen className="w-4 h-4" /> 5,000+ Rasmiy Savollar Ekotizimi
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            5,000+ Digital SAT &amp; IELTS Savollar Banki
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-3">
            Quyidagi kategoriyalardan birini tanlab, o&apos;zingizga kerakli bo&apos;lim savollarini mashq qiling.
          </p>
        </div>

        {/* 1. VISUAL CATEGORY SELECTOR CARDS */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Yo&apos;nalish va Kategoriyani Tanlang:
            </span>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory('all');
                  setExamFilter('all');
                }}
                className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Barcha savollarni ko&apos;rish (Filtrni tozalash)</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryCards.map((cat) => {
              const Icon = cat.icon;
              const isSelected = 
                (cat.id === 'sat_math' && selectedCategory === 'Math') ||
                (cat.id === 'sat_rw' && selectedCategory === 'RW') ||
                (cat.id === 'ielts_listening' && selectedCategory === 'Listening') ||
                (cat.id === 'ielts_reading' && selectedCategory === 'Reading') ||
                (cat.id === 'ielts_vocab' && selectedCategory === 'Lexical') ||
                (cat.id === 'teacher_tests' && selectedCategory === 'TeacherCreated');

              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    sound.playClick();
                    cat.filterAction();
                  }}
                  className={`p-5 rounded-3xl border transition-all duration-200 cursor-pointer text-left relative overflow-hidden group hover:-translate-y-1 ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-cyan-500 shadow-xl shadow-cyan-500/10 ring-2 ring-cyan-500/30'
                      : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-cyan-400 shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
                    {cat.subtitle}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold">
                    <span className="text-cyan-600 dark:text-cyan-400 font-mono font-bold">{cat.count}</span>
                    <span className="text-slate-400 group-hover:text-cyan-500 transition-colors">
                      Tanlash &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. SEARCH & FILTER BAR */}
        <div className="p-4 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8 space-y-4 shadow-sm transition-colors">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Kalit so'z, formula, savol matni yoki mavzu bo'yicha qidiring..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Exam Filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-slate-500 font-bold mr-1">Imtihon:</span>
              {(['all', 'SAT', 'IELTS'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => { sound.playClick(); setExamFilter(type); setVisibleCount(30); }}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                    examFilter === type
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {type === 'all' ? 'Barchasi' : type}
                </button>
              ))}

              <span className="text-slate-300 dark:text-slate-600 mx-1">|</span>

              <span className="text-slate-500 font-bold mr-1">Qiyinlik:</span>
              {(['all', 'Easy', 'Medium', 'Hard'] as const).map((diff) => (
                <button
                  key={diff}
                  onClick={() => { sound.playClick(); setDifficultyFilter(diff); setVisibleCount(30); }}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
                    difficultyFilter === diff
                      ? 'bg-sky-500/20 text-sky-600 dark:text-sky-300 border border-sky-500/40 font-bold'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {diff === 'all' ? 'Barcha Daraja' : diff}
                </button>
              ))}
            </div>

            {/* Quick Count */}
            <div className="text-slate-500 dark:text-slate-400 font-mono">
              Tanlangan: <b className="text-cyan-600 dark:text-cyan-400">{filtered.length}</b> ta savol (jami 5,000+)
            </div>
          </div>
        </div>

        {/* 3. QUESTIONS LIST */}
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-500">
              <p>Ushbu kategoriya yoki qidiruvingiz bo&apos;yicha savol topilmadi.</p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="mt-3 text-xs font-bold text-cyan-500 hover:underline"
              >
                Filtrlarni tozalash &rarr;
              </button>
            </div>
          ) : (
            filtered.slice(0, visibleCount).map((q, idx) => {
              const isExpanded = expandedId === (q.id || String(idx));

              return (
                <div
                  key={q.id || idx}
                  className="rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all overflow-hidden shadow-sm"
                >
                  <div className="p-5 sm:p-6">
                    {/* Tags & Metadata */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                          {q.exam}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {q.section}
                        </span>
                        {q.tags?.includes('TeacherCreated') && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                            👨‍🏫 Ustoz Mualliflik Testi
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                        {q.difficulty}
                      </span>
                    </div>

                    {/* Question Stimulus if present */}
                    {q.stimulus && (
                      <div className="mb-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                        {q.stimulus}
                      </div>
                    )}

                    {/* Question Prompt */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                      {q.question}
                    </h3>

                    {/* Options Preview */}
                    {Array.isArray(q.options) && q.options.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {q.options.map((opt: any, oIdx: number) => (
                          <div
                            key={oIdx}
                            className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300 font-medium"
                          >
                            <b className="text-cyan-600 dark:text-cyan-400 mr-1.5">{String.fromCharCode(65 + oIdx)})</b>
                            {String(opt)}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Toggle Solution Button */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      <button
                        onClick={() => {
                          sound.playClick();
                          setExpandedId(isExpanded ? null : (q.id || String(idx)));
                        }}
                        className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                      >
                        <span>{isExpanded ? 'Yechimni yashirish' : 'Yechim va Desmos usulini ko\'rish'}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      <Link
                        href="/tests"
                        onClick={() => sound.playClick()}
                        className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
                      >
                        <span>Mock testda topshirish</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* Expandable Explanation */}
                    {isExpanded && (
                      <div className="mt-4 p-5 rounded-2xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed space-y-3 animate-in fade-in">
                        <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono">
                          <span className="text-cyan-600 dark:text-cyan-400 font-bold block mb-1">To&apos;g&apos;ri javob:</span>
                          <span className="text-slate-900 dark:text-white text-sm font-bold">
                            {typeof q.correctIndex === 'number' && q.options
                              ? `${String.fromCharCode(65 + q.correctIndex)}) ${q.options[q.correctIndex]}`
                              : q.correctAnswer}
                          </span>
                        </div>

                        <div>
                          <div className="font-bold text-cyan-700 dark:text-cyan-300 flex items-center gap-1.5 mb-1.5">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                            <span>Qadamma-qadam ilmiy yechim &amp; tahlil:</span>
                          </div>
                          <p className="whitespace-pre-line text-slate-700 dark:text-slate-300 leading-relaxed">
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
              className="px-8 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-cyan-500 text-slate-900 dark:text-white font-bold text-sm transition-all shadow-md hover:scale-105 active:scale-95"
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
