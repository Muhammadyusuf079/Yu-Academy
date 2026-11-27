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
import { SAT_MATH_FULL_2026, SAT_RW_FULL_2026 } from '@/data/sat-questions';
import { IELTS_READING_FULL_2026, IELTS_LISTENING_FULL_2026 } from '@/data/ielts-questions';
import { getAll5000Questions } from '@/data/question-bank-generator';
import { Question } from '@/types';
import { sound } from '@/lib/sound';
import { useGamification } from '@/lib/xp-store';
import { useAuth } from '@/lib/auth-store';

type ReviewFilter = 'all' | 'wrong' | 'correct' | 'flagged';

interface TestPackageInfo {
  id: string;
  title: string;
  category: 'sat_math' | 'sat_rw' | 'sat_full' | 'ielts_reading' | 'ielts_listening' | 'ielts_full';
  exam: 'SAT' | 'IELTS';
  questionsCount: number;
  timeMinutes: number;
  difficulty: 'Standard' | 'Hard Module 2' | 'Diagnostic' | 'Cambridge 19';
}

const AVAILABLE_TEST_PACKAGES: TestPackageInfo[] = [
  { id: 'sat-m-1', title: 'Digital SAT Math Official Mock #1 (Bluebook)', category: 'sat_math', exam: 'SAT', questionsCount: 44, timeMinutes: 35, difficulty: 'Standard' },
  { id: 'sat-m-2', title: 'Digital SAT Math Adaptive Hard Module 2 Drill', category: 'sat_math', exam: 'SAT', questionsCount: 44, timeMinutes: 35, difficulty: 'Hard Module 2' },
  { id: 'sat-m-3', title: 'Digital SAT Math Practice Test #3 (Algebra & Desmos)', category: 'sat_math', exam: 'SAT', questionsCount: 44, timeMinutes: 35, difficulty: 'Standard' },
  { id: 'sat-rw-1', title: 'Digital SAT Reading & Writing Full Test #1', category: 'sat_rw', exam: 'SAT', questionsCount: 54, timeMinutes: 32, difficulty: 'Standard' },
  { id: 'sat-rw-2', title: 'Digital SAT RW Advanced Craft & Structure #2', category: 'sat_rw', exam: 'SAT', questionsCount: 54, timeMinutes: 32, difficulty: 'Hard Module 2' },
  { id: 'ielts-r-19-1', title: 'Cambridge IELTS 19 Academic Reading Test 1', category: 'ielts_reading', exam: 'IELTS', questionsCount: 40, timeMinutes: 60, difficulty: 'Cambridge 19' },
  { id: 'ielts-r-19-2', title: 'Cambridge IELTS 19 Academic Reading Test 2', category: 'ielts_reading', exam: 'IELTS', questionsCount: 40, timeMinutes: 60, difficulty: 'Cambridge 19' },
  { id: 'ielts-l-19-1', title: 'Cambridge IELTS 19 Listening Simulation Test 1', category: 'ielts_listening', exam: 'IELTS', questionsCount: 40, timeMinutes: 35, difficulty: 'Cambridge 19' },
  { id: 'ielts-l-19-2', title: 'Cambridge IELTS 19 Listening Simulation Test 2', category: 'ielts_listening', exam: 'IELTS', questionsCount: 40, timeMinutes: 35, difficulty: 'Cambridge 19' },
  { id: 'ielts-r-18-1', title: 'Cambridge IELTS 18 Academic Reading Test 1', category: 'ielts_reading', exam: 'IELTS', questionsCount: 40, timeMinutes: 60, difficulty: 'Standard' },
  { id: 'ielts-l-18-1', title: 'Cambridge IELTS 18 Listening Simulation Test 1', category: 'ielts_listening', exam: 'IELTS', questionsCount: 40, timeMinutes: 35, difficulty: 'Standard' },
];

export default function TestsPage() {
  const { user } = useAuth();
  const [selectedPackageId, setSelectedPackageId] = useState<string>('sat-m-1');
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

  // Modals
  const [desmosOpen, setDesmosOpen] = useState(false);
  const [formulaOpen, setFormulaOpen] = useState(false);
  const [dictOpen, setDictOpen] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);

  const { addXP } = useGamification();

  const currentPkg = AVAILABLE_TEST_PACKAGES.find(p => p.id === selectedPackageId) || AVAILABLE_TEST_PACKAGES[0];

  // Derive questions pool based on selected package
  const questions: Question[] = useMemo(() => {
    if (currentPkg.category === 'sat_math') {
      return SAT_MATH_FULL_2026.slice(0, currentPkg.questionsCount);
    }
    if (currentPkg.category === 'sat_rw') {
      return SAT_RW_FULL_2026.slice(0, currentPkg.questionsCount);
    }
    if (currentPkg.category === 'ielts_reading') {
      return IELTS_READING_FULL_2026.slice(0, currentPkg.questionsCount);
    }
    return IELTS_LISTENING_FULL_2026.slice(0, currentPkg.questionsCount);
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
    const pkg = AVAILABLE_TEST_PACKAGES.find(p => p.id === pkgId);
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
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-all"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="max-w-[160px] sm:max-w-xs truncate">{currentPkg.title}</span>
              <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono">({AVAILABLE_TEST_PACKAGES.length} ta test) ▼</span>
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

      {/* Package Catalog Popover (Choose from Mock Tests Library) */}
      {showPackageCatalog && (
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-5 shadow-2xl animate-in slide-in-from-top-2 z-40">
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-black text-slate-900 dark:text-white">
                  5,000+ Testlar To&apos;plami Kutubxonasi
                </h4>
                <p className="text-xs text-slate-500">
                  Kerakli Digital SAT yoki Cambridge IELTS test to&apos;plamini tanlang
                </p>
              </div>
              <button
                onClick={() => setShowPackageCatalog(false)}
                className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                Yopish ✕
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-72 overflow-y-auto">
              {AVAILABLE_TEST_PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => handleSwitchPackage(pkg.id)}
                  className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    selectedPackageId === pkg.id
                      ? 'bg-cyan-50 dark:bg-cyan-950/40 border-cyan-500 text-cyan-950 dark:text-cyan-200 font-bold'
                      : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-cyan-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] mb-1">
                    <span className="font-bold uppercase px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      {pkg.exam} • {pkg.difficulty}
                    </span>
                    <span className="font-mono">{pkg.timeMinutes} daqiqa</span>
                  </div>
                  <span className="text-xs font-bold line-clamp-1">{pkg.title}</span>
                  <span className="text-[10px] text-slate-400 mt-1">{pkg.questionsCount} ta savol</span>
                </button>
              ))}
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
