'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Award,
  Clock,
  Calculator,
  BookOpen,
  Flag,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Sparkles,
  HelpCircle,
  Home,
  Check,
  Printer,
  Brain,
  Filter,
  ArrowLeft,
  Layers,
  Search,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DesmosModal from '@/components/DesmosModal';
import FormulaSheetModal from '@/components/FormulaSheetModal';
import DictionaryModal from '@/components/DictionaryModal';
import CertificateModal from '@/components/CertificateModal';
import { getAll5200MockTestPackages, getQuestionsForPackage, MockTestPackage } from '@/data/mock-test-catalog';
import { Question } from '@/types';
import { sound } from '@/lib/sound';
import { useGamification } from '@/lib/xp-store';
import { useAuth } from '@/lib/auth-store';

type ReviewFilter = 'all' | 'wrong' | 'correct' | 'flagged';

export default function TestsPage() {
  const { user } = useAuth();
  const allPackages = useMemo(() => getAll5200MockTestPackages(), []);

  const [selectedPackageId, setSelectedPackageId] = useState<string>('sat-math-pkg-1');
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number | string>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [gridInInput, setGridInInput] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(35 * 60);
  const [timerVisible, setTimerVisible] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showMatrix, setShowMatrix] = useState<boolean>(false);
  const [showPackageCatalog, setShowPackageCatalog] = useState<boolean>(false);
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('all');
  const [aiExpanded, setAiExpanded] = useState<Record<number, boolean>>({});

  // 5,000+ Catalog Filter & Pagination States
  const [catalogCategory, setCatalogCategory] = useState<string>('all');
  const [catalogSearch, setCatalogSearch] = useState<string>('');
  const [catalogPage, setCatalogPage] = useState<number>(1);
  const CATALOG_PAGE_SIZE = 12;

  // Modals
  const [desmosOpen, setDesmosOpen] = useState(false);
  const [formulaOpen, setFormulaOpen] = useState(false);
  const [dictOpen, setDictOpen] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);

  const { addXP } = useGamification();

  const currentPkg = useMemo(() => {
    return allPackages.find(p => p.id === selectedPackageId) || allPackages[0];
  }, [allPackages, selectedPackageId]);

  // Derive questions pool dynamically for the selected mock package
  const questions: Question[] = useMemo(() => {
    return getQuestionsForPackage(currentPkg);
  }, [currentPkg]);

  const currentQ = questions[currentIdx] || questions[0];

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optIdx: number) => {
    if (isSubmitted) return;
    sound.playClick();
    setUserAnswers((prev) => ({ ...prev, [currentIdx]: optIdx }));
  };

  const handleGridInSubmit = (val: string) => {
    if (isSubmitted) return;
    setGridInInput(val);
    setUserAnswers((prev) => ({ ...prev, [currentIdx]: val.trim() }));
  };

  const toggleFlag = () => {
    sound.playClick();
    setFlagged((prev) => ({ ...prev, [currentIdx]: !prev[currentIdx] }));
  };

  const handleSubmit = () => {
    sound.playSuccess();
    setIsSubmitted(true);
    addXP(450, "Rasmiy 2026 Mock Test yakunlandi!");
    try {
      confetti({ particleCount: 120, spread: 90, origin: { y: 0.55 } });
    } catch {}
  };

  const handleSwitchPackage = (pkgId: string) => {
    sound.playClick();
    const pkg = allPackages.find(p => p.id === pkgId);
    if (pkg) {
      setSelectedPackageId(pkgId);
      setCurrentIdx(0);
      setUserAnswers({});
      setFlagged({});
      setGridInInput('');
      setIsSubmitted(false);
      setShowMatrix(false);
      setShowPackageCatalog(false);
      setReviewFilter('all');
      setAiExpanded({});
      setTimeLeft(pkg.timeMinutes * 60);
    }
  };

  const handleRandomHardTest = () => {
    sound.playClick();
    const hardPackages = allPackages.filter(p => p.difficulty === 'Hard Module 2' || p.difficulty === 'Extreme');
    const randomPkg = hardPackages[Math.floor(Math.random() * hardPackages.length)] || allPackages[0];
    handleSwitchPackage(randomPkg.id);
  };

  // Filter 5,200+ tests catalog
  const filteredCatalog = useMemo(() => {
    let list = allPackages;

    if (catalogCategory === 'sat_math') {
      list = list.filter(p => p.category === 'sat_math');
    } else if (catalogCategory === 'sat_rw') {
      list = list.filter(p => p.category === 'sat_rw');
    } else if (catalogCategory === 'ielts_reading') {
      list = list.filter(p => p.category === 'ielts_reading');
    } else if (catalogCategory === 'ielts_listening') {
      list = list.filter(p => p.category === 'ielts_listening');
    } else if (catalogCategory === 'hard_module') {
      list = list.filter(p => p.difficulty === 'Hard Module 2' || p.difficulty === 'Extreme');
    }

    if (catalogSearch.trim()) {
      const q = catalogSearch.toLowerCase().trim();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.topic.toLowerCase().includes(q) ||
        `#${p.testNumber}`.includes(q) ||
        p.id.toLowerCase().includes(q)
      );
    }

    return list;
  }, [allPackages, catalogCategory, catalogSearch]);

  const totalCatalogPages = Math.max(1, Math.ceil(filteredCatalog.length / CATALOG_PAGE_SIZE));
  const currentCatalogPageItems = useMemo(() => {
    const start = (catalogPage - 1) * CATALOG_PAGE_SIZE;
    return filteredCatalog.slice(start, start + CATALOG_PAGE_SIZE);
  }, [filteredCatalog, catalogPage]);

  // Score Calculation
  const scoreData = useMemo(() => {
    let correct = 0;
    questions.forEach((q, idx) => {
      const userAns = userAnswers[idx];
      if (q.options && q.options.length > 0 && typeof q.correctIndex === 'number') {
        if (userAns === q.correctIndex) correct++;
      } else if (q.correctAnswer) {
        if (String(userAns).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase()) {
          correct++;
        }
      }
    });

    const total = questions.length;
    const percentage = Math.round((correct / total) * 100);

    const scaledScore = currentPkg.exam === 'SAT'
      ? Math.round(200 + (correct / total) * 600)
      : Math.min(9.0, Math.round((4.0 + (correct / total) * 5.0) * 2) / 2);

    const percentileRank =
      percentage >= 95
        ? '99th Percentile (Top 1%)'
        : percentage >= 85
        ? '94th Percentile (Top 6%)'
        : percentage >= 75
        ? '86th Percentile (Top 14%)'
        : percentage >= 60
        ? '72nd Percentile (Top 28%)'
        : '50th Percentile';

    const scoreDisplayLabel = currentPkg.exam === 'SAT'
      ? `${scaledScore} / 800`
      : `Band ${scaledScore.toFixed(1)} / 9.0`;

    return {
      correct,
      total,
      wrong: total - correct,
      percentage,
      scaledScore,
      percentileRank,
      examTitleLabel: currentPkg.title,
      scoreDisplayLabel,
    };
  }, [questions, userAnswers, currentPkg]);

  // Filtered review list
  const reviewQuestions = useMemo(() => {
    return questions
      .map((q, idx) => {
        const uAns = userAnswers[idx];
        const isCorrect =
          typeof q.correctIndex === 'number'
            ? uAns === q.correctIndex
            : String(uAns).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
        const isFlag = !!flagged[idx];
        return { q, idx, uAns, isCorrect, isFlag };
      })
      .filter(({ isCorrect, isFlag }) => {
        if (reviewFilter === 'wrong') return !isCorrect;
        if (reviewFilter === 'correct') return isCorrect;
        if (reviewFilter === 'flagged') return isFlag;
        return true;
      });
  }, [questions, userAnswers, flagged, reviewFilter]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      <DesmosModal isOpen={desmosOpen} onClose={() => setDesmosOpen(false)} />
      <FormulaSheetModal isOpen={formulaOpen} onClose={() => setFormulaOpen(false)} />
      <DictionaryModal isOpen={dictOpen} onClose={() => setDictOpen(false)} />
      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        examTitle={scoreData.examTitleLabel}
        scoreDisplay={scoreData.scoreDisplayLabel}
        percentile={scoreData.percentileRank}
        initialCandidateName={user?.name}
      />

      {/* Bluebook Simulator Header with Clear Exit Button */}
      <div className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-2.5 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Exit to Home & Package Title */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
              title="Asosiy sahifaga qaytish (Chiqish)"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Chiqish</span>
            </Link>

            <button
              onClick={() => { sound.playClick(); setShowPackageCatalog(!showPackageCatalog); }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-all cursor-pointer shadow-sm"
              title="5,000+ testlar ro'yxatidan tanlash"
            >
              <Layers className="w-3.5 h-3.5 text-cyan-500" />
              <span className="max-w-[160px] sm:max-w-xs truncate font-mono text-xs">#{currentPkg.testNumber} {currentPkg.title}</span>
              <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                5,250+ Testlar ▼
              </span>
            </button>
          </div>

          {/* Right: Timer & Tools & Matrix */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Timer */}
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700">
              <Clock className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                {timerVisible ? formatTime(timeLeft) : '--:--'}
              </span>
              <button
                onClick={() => setTimerVisible(!timerVisible)}
                className="p-0.5 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                title={timerVisible ? 'Taymerni yashirish' : 'Taymerni ko\'rsatish'}
              >
                {timerVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Desmos Tool */}
            {currentPkg.exam === 'SAT' && (
              <button
                onClick={() => { sound.playClick(); setDesmosOpen(true); }}
                className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-xl text-xs font-bold transition-all"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Desmos</span>
              </button>
            )}

            {/* Questions Matrix Popover */}
            <button
              onClick={() => setShowMatrix(!showMatrix)}
              className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold"
            >
              Savol {currentIdx + 1}/{questions.length}
            </button>
          </div>
        </div>
      </div>

      {/* Package Catalog Popover (5,000+ Mock Tests Library Browser) */}
      {showPackageCatalog && (
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-5 shadow-2xl animate-in slide-in-from-top-2 z-40 transition-colors">
          <div className="max-w-6xl mx-auto space-y-4">
            
            {/* Header with Title & Action Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                    5,000+ Rasmiy Mock Testlar Kutubxonasi
                  </h4>
                  <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {filteredCatalog.length.toLocaleString()} ta mavjud test
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Digital SAT Hard Module 2, College Board 2026 hamda Cambridge IELTS 10-19 rasmiy test to&apos;plamlaridan birini tanlang
                </p>
              </div>

              <div className="flex items-center gap-2">
                {/* Random Hard Test Button */}
                <button
                  onClick={handleRandomHardTest}
                  className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs hover:brightness-110 flex items-center gap-1.5 shadow-md shadow-orange-500/20 transition-all cursor-pointer"
                  title="Tasodifiy qiyin testni darhol boshlash"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                  <span>🎲 Tasodifiy Qiyin Test</span>
                </button>

                <button
                  onClick={() => setShowPackageCatalog(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
                  title="Yopish"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Search & Category Filter Bar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              
              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                {[
                  { id: 'all', label: `🌐 Barchasi (${allPackages.length})` },
                  { id: 'hard_module', label: '⚡ Hard Module 2' },
                  { id: 'sat_math', label: '📐 SAT Math (1,650)' },
                  { id: 'sat_rw', label: '📖 SAT Reading & Writing (1,650)' },
                  { id: 'ielts_reading', label: '🎓 IELTS Reading (1,000)' },
                  { id: 'ielts_listening', label: '🎧 IELTS Listening (1,000)' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      sound.playClick();
                      setCatalogCategory(tab.id);
                      setCatalogPage(1);
                    }}
                    className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all ${
                      catalogCategory === tab.id
                        ? 'bg-cyan-500 text-slate-950 shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search Field */}
              <div className="relative min-w-[240px]">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={catalogSearch}
                  onChange={(e) => {
                    setCatalogSearch(e.target.value);
                    setCatalogPage(1);
                  }}
                  placeholder="Test nomi, mavzu yoki #raqami..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
                />
              </div>

            </div>

            {/* Test Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[360px] overflow-y-auto pr-1">
              {currentCatalogPageItems.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => handleSwitchPackage(pkg.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between group hover:scale-[1.01] ${
                    selectedPackageId === pkg.id
                      ? 'bg-cyan-50 dark:bg-cyan-950/40 border-cyan-500 text-cyan-950 dark:text-cyan-200 font-bold shadow-md shadow-cyan-500/10'
                      : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-cyan-400 hover:bg-white dark:hover:bg-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] mb-1.5">
                      <span className="font-extrabold uppercase px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                        #{pkg.testNumber} • {pkg.badge}
                      </span>
                      <span className="font-mono text-slate-400">{pkg.timeMinutes} daqiqa</span>
                    </div>

                    <h5 className="text-xs font-bold line-clamp-2 text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {pkg.title}
                    </h5>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <span>{pkg.questionsCount} ta savol</span>
                    <span className="text-amber-500 font-bold">★ {pkg.rating} ({pkg.attempts.toLocaleString()})</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
              <span>
                Sahifa <b>{catalogPage}</b> / {totalCatalogPages} ({filteredCatalog.length.toLocaleString()} ta test)
              </span>

              <div className="flex items-center gap-2">
                <button
                  disabled={catalogPage <= 1}
                  onClick={() => {
                    sound.playClick();
                    setCatalogPage(p => Math.max(1, p - 1));
                  }}
                  className="px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Oldingisi
                </button>
                <button
                  disabled={catalogPage >= totalCatalogPages}
                  onClick={() => {
                    sound.playClick();
                    setCatalogPage(p => Math.min(totalCatalogPages, p + 1));
                  }}
                  className="px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 disabled:opacity-30 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Keyingisi
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Question Matrix Popover */}
      {showMatrix && (
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 animate-in slide-in-from-top-2 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-3 text-xs text-slate-500 dark:text-slate-400 font-semibold">
              <span>Savollar Matritsasi (1 - {questions.length})</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-cyan-500" /> Belgilangan</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> 🚩 Flag</span>
              </div>
            </div>
            <div className="grid grid-cols-8 sm:grid-cols-11 md:grid-cols-22 gap-1.5">
              {questions.map((_, i) => {
                const hasAnswer = userAnswers[i] !== undefined;
                const isFlag = flagged[i];
                const isCurrent = currentIdx === i;

                let cellClass = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';
                if (hasAnswer) cellClass = 'bg-cyan-500 text-slate-950 font-bold border-cyan-400';
                if (isFlag) cellClass = 'bg-amber-500 text-slate-950 font-bold border-amber-400';
                if (isCurrent) cellClass += ' ring-2 ring-cyan-500 dark:ring-white';

                return (
                  <button
                    key={i}
                    onClick={() => {
                      sound.playClick();
                      setCurrentIdx(i);
                      setShowMatrix(false);
                    }}
                    className={`h-8 rounded-lg text-xs font-semibold border flex items-center justify-center transition-all ${cellClass}`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 flex flex-col">
        {/* Results Screen */}
        {isSubmitted ? (
          <div className="max-w-5xl mx-auto px-4 py-10 w-full animate-in fade-in duration-300">
            {/* Top Score Summary Banner */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center mb-10 shadow-2xl relative overflow-hidden">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
                <CheckCircle2 className="w-4 h-4" /> 2026 Rasmiy Imtihon Muvaffaqiyatli Yakunlandi
              </span>

              <h2 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white mb-2 font-mono">
                {scoreData.scoreDisplayLabel}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
                {scoreData.examTitleLabel} • {scoreData.percentileRank}
              </p>

              {/* 3 Metric Stat Boxes */}
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 font-mono block">
                    {scoreData.correct}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">To&apos;g&apos;ri javob</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span className="text-2xl sm:text-3xl font-bold text-rose-600 dark:text-rose-400 font-mono block">
                    {scoreData.wrong}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Xato javob</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span className="text-2xl sm:text-3xl font-bold text-cyan-600 dark:text-cyan-400 font-mono block">
                    {scoreData.percentage}%
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">Aniqlik</span>
                </div>
              </div>

              {/* Action Buttons: Certificate, Retake, Exit to Home */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => {
                    sound.playClick();
                    setCertModalOpen(true);
                  }}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-yellow-400 hover:brightness-110 text-slate-950 shadow-xl shadow-amber-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  <Award className="w-5 h-5" />
                  <span>Rasmiy Sertifikatni Olish (PDF)</span>
                </button>

                <button
                  onClick={() => handleSwitchPackage(selectedPackageId)}
                  className="px-5 py-3.5 rounded-xl font-bold text-sm bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Qayta Topshirish</span>
                </button>

                <Link
                  href="/"
                  className="px-5 py-3.5 rounded-xl font-bold text-sm bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  <span>Asosiy Sahifaga Qaytish</span>
                </Link>
              </div>
            </div>

            {/* Questions Review Detailed List */}
            <div className="space-y-4">
              {reviewQuestions.map(({ q, idx, uAns, isCorrect, isFlag }) => (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl border transition-all ${
                    isCorrect
                      ? 'bg-white dark:bg-slate-900/70 border-emerald-500/30'
                      : 'bg-white dark:bg-slate-900/70 border-rose-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3 text-xs font-bold">
                    <span className="text-slate-500">Savol #{idx + 1} • {q.section}</span>
                    <span className={isCorrect ? 'text-emerald-500' : 'text-rose-500'}>
                      {isCorrect ? '✓ To\'g\'ri' : '✗ Xato'}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                    {q.question}
                  </h4>

                  <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800/30 text-xs sm:text-sm text-slate-800 dark:text-slate-300">
                    <span className="font-bold text-cyan-600 block mb-1">Yechim &amp; Desmos usuli:</span>
                    <p className="leading-relaxed whitespace-pre-line">{q.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Active Examination Workspace (2-Column Interface) */
          <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Stimulus */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 h-full min-h-[440px] overflow-y-auto shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 text-xs">
                <span className="font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  {currentQ.section || 'Exam Section'}
                </span>
                <span className="font-mono text-slate-400">
                  {currentQ.module || `Savol ${currentIdx + 1} / ${questions.length}`}
                </span>
              </div>

              {currentQ.stimulus ? (
                <div className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-sans whitespace-pre-line">
                  {currentQ.stimulus}
                </div>
              ) : (
                <div className="text-sm text-slate-500 italic">
                  Ushbu savol mustaqil topshiriq hisoblanadi. O&apos;ng tomondagi topshiriqni o&apos;qib, to&apos;g&apos;ri variantni tanlang.
                </div>
              )}
            </div>

            {/* Right Column: Question & Multiple Choice */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl min-h-[440px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                    Savol #{currentIdx + 1}
                  </span>
                  
                  <button
                    onClick={toggleFlag}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                      flagged[currentIdx]
                        ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/40'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <Flag className={`w-3.5 h-3.5 ${flagged[currentIdx] ? 'fill-amber-400 text-amber-500' : ''}`} />
                    <span>{flagged[currentIdx] ? 'Belgilangan' : 'Mark for Review'}</span>
                  </button>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-6 leading-snug">
                  {currentQ.question}
                </h3>

                {Array.isArray(currentQ.options) && currentQ.options.length > 0 ? (
                  <div className="space-y-3 mb-8">
                    {currentQ.options.map((opt: any, optIdx: number) => {
                      const isChosen = userAnswers[currentIdx] === optIdx;
                      const letter = String.fromCharCode(65 + optIdx);

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(optIdx)}
                          className={`w-full p-4 rounded-xl border text-left transition-all flex items-center gap-3.5 ${
                            isChosen
                              ? 'bg-cyan-50 dark:bg-cyan-500/15 border-cyan-500 dark:border-cyan-400 text-slate-950 dark:text-white font-bold shadow-md shadow-cyan-500/10'
                              : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          <span
                            className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
                              isChosen
                                ? 'bg-cyan-500 text-slate-950'
                                : 'bg-slate-200 dark:bg-slate-700/70 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {letter}
                          </span>
                          <span className="text-sm font-medium">{String(opt)}</span>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="mb-8 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                    <label className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block mb-2">
                      Javobingizni kiriting:
                    </label>
                    <input
                      type="text"
                      value={typeof userAnswers[currentIdx] === 'string' ? userAnswers[currentIdx] as string : gridInInput}
                      onChange={(e) => handleGridInSubmit(e.target.value)}
                      placeholder="Masalan: 8 yoki 4.75"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white font-mono text-base focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                )}
              </div>

              {/* Navigation Footer */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    sound.playClick();
                    setCurrentIdx(Math.max(0, currentIdx - 1));
                  }}
                  disabled={currentIdx === 0}
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 flex items-center gap-1.5 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Oldingisi
                </button>

                {currentIdx < questions.length - 1 ? (
                  <button
                    onClick={() => {
                      sound.playClick();
                      setCurrentIdx(currentIdx + 1);
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-md shadow-cyan-500/20 flex items-center gap-1.5 transition-all"
                  >
                    Keyingisi
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/30 flex items-center gap-1.5 transition-all"
                  >
                    <Check className="w-4 h-4" />
                    Imtihonni Yakunlash
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
