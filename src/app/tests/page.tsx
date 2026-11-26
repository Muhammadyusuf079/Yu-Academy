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
import { Question } from '@/types';
import { sound } from '@/lib/sound';
import { useGamification } from '@/lib/xp-store';

type ExamType = 'sat_math' | 'sat_rw' | 'ielts_reading' | 'ielts_listening';
type ReviewFilter = 'all' | 'wrong' | 'correct' | 'flagged';

export default function TestsPage() {
  const [selectedExam, setSelectedExam] = useState<ExamType>('sat_math');
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number | string>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [gridInInput, setGridInInput] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(35 * 60); // 35 daqiqa
  const [timerVisible, setTimerVisible] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showMatrix, setShowMatrix] = useState<boolean>(false);
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('all');
  const [aiExpanded, setAiExpanded] = useState<Record<number, boolean>>({});

  // Modals
  const [desmosOpen, setDesmosOpen] = useState(false);
  const [formulaOpen, setFormulaOpen] = useState(false);
  const [dictOpen, setDictOpen] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);

  const { addXP } = useGamification();

  // Current questions list sliced strictly to official specifications:
  // SAT Math: 44 questions (Module 1: 22 + Module 2: 22)
  // SAT RW: 54 questions (Module 1: 27 + Module 2: 27)
  // IELTS Reading: 40 questions
  // IELTS Listening: 40 questions
  const questions: Question[] = useMemo(() => {
    if (selectedExam === 'sat_math') {
      return SAT_MATH_FULL_2026.slice(0, 44);
    }
    if (selectedExam === 'sat_rw') {
      return SAT_RW_FULL_2026.slice(0, 54);
    }
    if (selectedExam === 'ielts_reading') {
      return IELTS_READING_FULL_2026.slice(0, 40);
    }
    return IELTS_LISTENING_FULL_2026.slice(0, 40);
  }, [selectedExam]);

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

  const handleReset = (exam: ExamType) => {
    sound.playClick();
    setSelectedExam(exam);
    setCurrentIdx(0);
    setUserAnswers({});
    setFlagged({});
    setGridInInput('');
    setIsSubmitted(false);
    setShowMatrix(false);
    setReviewFilter('all');
    setAiExpanded({});
    setTimeLeft(exam.startsWith('sat') ? 35 * 60 : 40 * 60);
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

    // College Board SAT scale (200 - 800) / Cambridge IELTS scale (4.5 - 9.0)
    const scaledScore = selectedExam.startsWith('sat')
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

    const examTitleLabel =
      selectedExam === 'sat_math'
        ? 'Digital SAT Math (Official Bluebook 2026)'
        : selectedExam === 'sat_rw'
        ? 'Digital SAT Reading & Writing (Bluebook 2026)'
        : selectedExam === 'ielts_reading'
        ? 'Cambridge IELTS Academic Reading'
        : 'Cambridge IELTS Listening Simulation';

    const scoreDisplayLabel = selectedExam.startsWith('sat')
      ? `${scaledScore} / 800`
      : `Band ${scaledScore.toFixed(1)} / 9.0`;

    return {
      correct,
      total,
      wrong: total - correct,
      percentage,
      scaledScore,
      percentileRank,
      examTitleLabel,
      scoreDisplayLabel,
    };
  }, [questions, userAnswers, selectedExam]);

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
      />

      <Navbar
        onOpenDictionary={() => setDictOpen(true)}
        onOpenDesmos={() => setDesmosOpen(true)}
        onOpenFormula={() => setFormulaOpen(true)}
      />

      <main className="flex-1 flex flex-col">
        
        {/* Top Control Bar (Bluebook Simulator Header) */}
        <div className="sticky top-16 sm:top-20 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-2.5 transition-colors">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            
            {/* Exam Selector Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                2026 Bluebook
              </span>
              <select
                value={selectedExam}
                onChange={(e) => handleReset(e.target.value as ExamType)}
                className="bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-cyan-500"
              >
                <option value="sat_math">Digital SAT Math (44 Savol - M1 &amp; M2)</option>
                <option value="sat_rw">Digital SAT Reading &amp; Writing (54 Savol)</option>
                <option value="ielts_reading">IELTS Academic Reading (40 Savol)</option>
                <option value="ielts_listening">IELTS Listening Simulation (40 Savol)</option>
              </select>
            </div>

            {/* Timer Display */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700">
                <Clock className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="font-mono text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {timerVisible ? formatTime(timeLeft) : '--:--'}
                </span>
                <button
                  onClick={() => setTimerVisible(!timerVisible)}
                  className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
                  title={timerVisible ? 'Taymerni yashirish' : 'Taymerni ko\'rsatish'}
                >
                  {timerVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Tools buttons */}
              {selectedExam.startsWith('sat') && (
                <>
                  <button
                    onClick={() => { sound.playClick(); setDesmosOpen(true); }}
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-bold transition-all"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Desmos</span>
                  </button>
                  <button
                    onClick={() => { sound.playClick(); setFormulaOpen(true); }}
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 border border-sky-500/30 rounded-lg text-xs font-bold transition-all"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Formulalar</span>
                  </button>
                </>
              )}

              {/* Matrix Toggle */}
              <button
                onClick={() => setShowMatrix(!showMatrix)}
                className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-semibold"
              >
                Savollar ({currentIdx + 1}/{questions.length})
              </button>
            </div>
          </div>
        </div>

        {/* Question Matrix Popover */}
        {showMatrix && (
          <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-4 animate-in slide-in-from-top-2 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-3 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                <span>Savollar Matritsasi (1 - {questions.length})</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-cyan-500" /> Javob berilgan</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Belgilangan (🚩)</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" /> Javobsiz</span>
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

        {/* Results Screen */}
        {isSubmitted ? (
          <div className="max-w-5xl mx-auto px-4 py-12 w-full animate-in fade-in duration-300">
            
            {/* Top Score Summary Banner */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center mb-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
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

              {/* Action Buttons: Certificate, Retake, Bank */}
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
                  onClick={() => handleReset(selectedExam)}
                  className="px-5 py-3.5 rounded-xl font-bold text-sm bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Qayta Topshirish</span>
                </button>

                <Link
                  href="/questions"
                  className="px-5 py-3.5 rounded-xl font-bold text-sm bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Savollar Banki</span>
                </Link>
              </div>

            </div>

            {/* Review Filter Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Savollar Tahlili:
                </span>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                <button
                  onClick={() => { sound.playClick(); setReviewFilter('all'); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    reviewFilter === 'all'
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Barchasi ({scoreData.total})
                </button>
                <button
                  onClick={() => { sound.playClick(); setReviewFilter('wrong'); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    reviewFilter === 'wrong'
                      ? 'bg-rose-500 text-white font-bold'
                      : 'bg-slate-100 dark:bg-slate-800 text-rose-600 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-950/40'
                  }`}
                >
                  Xatolar ustida ishlash ({scoreData.wrong})
                </button>
                <button
                  onClick={() => { sound.playClick(); setReviewFilter('correct'); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    reviewFilter === 'correct'
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-950/40'
                  }`}
                >
                  To&apos;g&apos;ri javoblar ({scoreData.correct})
                </button>
              </div>
            </div>

            {/* Questions Review Detailed List */}
            <div className="space-y-6">
              {reviewQuestions.map(({ q, idx, uAns, isCorrect, isFlag }) => {
                const isAiOpen = !!aiExpanded[idx];

                return (
                  <div
                    key={idx}
                    className={`p-6 sm:p-7 rounded-3xl border transition-all ${
                      isCorrect
                        ? 'bg-white dark:bg-slate-900/70 border-emerald-500/30 shadow-md shadow-emerald-500/5'
                        : 'bg-white dark:bg-slate-900/70 border-rose-500/40 shadow-md shadow-rose-500/5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                          Savol #{idx + 1}
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {q.section || 'General'}
                        </span>
                        {isFlag && (
                          <span className="text-xs font-bold text-amber-500 dark:text-amber-400 flex items-center gap-1">
                            <Flag className="w-3 h-3 fill-amber-400" /> Belgilangan
                          </span>
                        )}
                      </div>
                      
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          isCorrect
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                            : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20'
                        }`}
                      >
                        {isCorrect ? 'To\'g\'ri javob' : 'Xato javob'}
                      </span>
                    </div>

                    {q.stimulus && (
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-4 whitespace-pre-line leading-relaxed font-sans">
                        {q.stimulus}
                      </div>
                    )}

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                      {q.question}
                    </h4>

                    {/* Answer Comparison Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                        <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-1">
                          Sizning javobingiz:
                        </span>
                        <span className={`text-sm font-semibold font-mono ${isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                          {uAns !== undefined
                            ? typeof q.correctIndex === 'number' && q.options && typeof uAns === 'number'
                              ? `${String.fromCharCode(65 + uAns)}) ${q.options[uAns]}`
                              : String(uAns)
                            : 'Bo\'sh qoldirilgan'}
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                        <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 block mb-1">
                          Rasmiy to&apos;g&apos;ri javob:
                        </span>
                        <span className="text-sm font-semibold font-mono text-slate-900 dark:text-white">
                          {typeof q.correctIndex === 'number' && q.options
                            ? `${String.fromCharCode(65 + q.correctIndex)}) ${q.options[q.correctIndex]}`
                            : q.correctAnswer}
                        </span>
                      </div>
                    </div>

                    {/* Scientific Step-by-Step Explanation */}
                    <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-800/30 text-xs sm:text-sm text-slate-800 dark:text-slate-300 mb-4">
                      <span className="font-bold text-cyan-700 dark:text-cyan-300 flex items-center gap-1.5 mb-1.5">
                        <Sparkles className="w-4 h-4 text-cyan-500" />
                        Rasmiy 2026 Qadamma-qadam Yechim &amp; Tahlil:
                      </span>
                      <p className="leading-relaxed whitespace-pre-line">
                        {q.explanation}
                      </p>
                    </div>

                    {/* Interactive AI Tutor Explanation Button */}
                    <button
                      onClick={() => {
                        sound.playClick();
                        setAiExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/30 transition-all"
                    >
                      <Brain className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                      <span>{isAiOpen ? 'AI Tushuntirishni Yashirish' : 'YU AI Murabbiydan Interaktiv Tushuntirish Olish'}</span>
                    </button>

                    {/* AI Mentor Expanded Panel */}
                    {isAiOpen && (
                      <div className="mt-3 p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/40 text-xs sm:text-sm text-purple-900 dark:text-purple-100 animate-in fade-in duration-200">
                        <div className="font-bold text-purple-700 dark:text-purple-300 mb-1.5 flex items-center gap-1.5">
                          <span>🧠 YU AI 2026 Murabbiy Tahlili:</span>
                        </div>
                        <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                          Ushbu savol College Board imtihonida <strong>{q.section || 'standart'}</strong> doirasida nomzodning tezkor mantiqiy fikrlashini tekshiradi. 
                          Agar siz bu yerda xatolikka yo&apos;l qo&apos;ygan bo&apos;lsangiz, asosan belgilangan shartlarni diqqat bilan o&apos;qimaslik yoki hisoblashdagi belgilar almashinuvi sabab bo&apos;lgan. 
                          Desmos kalkulyatorida tenglamani kiritish orqali bu javobni 5 soniyada tekshirib olishingiz mumkin edi.
                        </p>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>
        ) : (
          /* Active Examination Workspace (College Board 2-Column Interface) */
          <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stimulus, Passage or Diagram */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 h-full min-h-[440px] overflow-y-auto shadow-md shadow-slate-200/30 dark:shadow-none transition-colors">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  {currentQ.section || 'Exam Section'}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {currentQ.module || `Savol ${currentIdx + 1} / ${questions.length}`}
                </span>
              </div>

              {currentQ.svgDiagram && (
                <div
                  className="mb-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex justify-center"
                  dangerouslySetInnerHTML={{ __html: currentQ.svgDiagram }}
                />
              )}

              {currentQ.stimulus ? (
                <div className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-sans whitespace-pre-line">
                  {currentQ.stimulus}
                </div>
              ) : (
                <div className="text-sm text-slate-500 italic">
                  Ushbu savol mustaqil topshiriq hisoblanadi. O&apos;ng tomondagi savolni o&apos;qib, to&apos;g&apos;ri javob variantini tanlang.
                </div>
              )}
            </div>

            {/* Right Column: Question & Multiple Choice / Grid-in */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl min-h-[440px] transition-colors">
              
              <div>
                {/* Question Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                    Savol #{currentIdx + 1}
                  </span>
                  
                  {/* Mark for review */}
                  <button
                    onClick={toggleFlag}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                      flagged[currentIdx]
                        ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/40'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Flag className={`w-3.5 h-3.5 ${flagged[currentIdx] ? 'fill-amber-400 text-amber-500' : ''}`} />
                    <span>{flagged[currentIdx] ? 'Belgilangan' : 'Mark for Review'}</span>
                  </button>
                </div>

                {/* Question Prompt */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-6 leading-snug">
                  {currentQ.question}
                </h3>

                {/* Options / Grid-in */}
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
                              : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
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
                  /* Student-Produced Response (Grid-In) */
                  <div className="mb-8 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                    <label className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block mb-2">
                      Student-Produced Response (Javobni kiriting):
                    </label>
                    <input
                      type="text"
                      value={typeof userAnswers[currentIdx] === 'string' ? userAnswers[currentIdx] as string : gridInInput}
                      onChange={(e) => handleGridInSubmit(e.target.value)}
                      placeholder="Masalan: 8, 23/3 yoki 4.75"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white font-mono text-base focus:outline-none focus:border-cyan-500"
                    />
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                      Kasr belgisi (/) yoki o&apos;nlik nuqta (.) kiritishingiz mumkin.
                    </p>
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
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition-all"
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
                    className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-md shadow-cyan-500/20 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
                  >
                    Keyingisi
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/30 flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
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
