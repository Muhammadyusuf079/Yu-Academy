'use client';

import React, { useState, useEffect } from 'react';
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
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DesmosModal from '@/components/DesmosModal';
import FormulaSheetModal from '@/components/FormulaSheetModal';
import DictionaryModal from '@/components/DictionaryModal';
import { SAT_MATH_FULL_2026, SAT_RW_FULL_2026 } from '@/data/sat-questions';
import { IELTS_READING_FULL_2026, IELTS_LISTENING_FULL_2026 } from '@/data/ielts-questions';
import { Question } from '@/types';
import { sound } from '@/lib/sound';

type ExamType = 'sat_math' | 'sat_rw' | 'ielts_reading' | 'ielts_listening';

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

  // Modals
  const [desmosOpen, setDesmosOpen] = useState(false);
  const [formulaOpen, setFormulaOpen] = useState(false);
  const [dictOpen, setDictOpen] = useState(false);

  // Current questions list
  const questions: Question[] =
    selectedExam === 'sat_math'
      ? SAT_MATH_FULL_2026
      : selectedExam === 'sat_rw'
      ? SAT_RW_FULL_2026
      : selectedExam === 'ielts_reading'
      ? IELTS_READING_FULL_2026
      : IELTS_LISTENING_FULL_2026;

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
    try {
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
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
    setTimeLeft(exam.startsWith('sat') ? 35 * 60 : 40 * 60);
  };

  // Score Calculation
  const calculateResults = () => {
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

    // College Board SAT scale (200 - 800)
    const scaledScore = selectedExam.startsWith('sat')
      ? Math.round(200 + (correct / total) * 600)
      : Math.min(9.0, Math.round(((correct / total) * 9.0) * 2) / 2);

    return { correct, total, percentage, scaledScore };
  };

  const scoreData = calculateResults();

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

      <main className="flex-1 flex flex-col">
        
        {/* Top Control Bar (Bluebook Simulator Header) */}
        <div className="sticky top-16 sm:top-20 z-40 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-4 sm:px-6 py-2.5">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            
            {/* Exam Selector Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                2026 Bluebook
              </span>
              <select
                value={selectedExam}
                onChange={(e) => handleReset(e.target.value as ExamType)}
                className="bg-slate-800 border border-slate-700 text-white text-xs sm:text-sm font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-cyan-500"
              >
                <option value="sat_math">Digital SAT Math (44 Savol - M1 & M2)</option>
                <option value="sat_rw">Digital SAT Reading & Writing (54 Savol)</option>
                <option value="ielts_reading">IELTS Academic Reading (Full Test)</option>
                <option value="ielts_listening">IELTS Listening Simulation</option>
              </select>
            </div>

            {/* Timer Display */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-sm sm:text-base font-bold text-white">
                  {timerVisible ? formatTime(timeLeft) : '--:--'}
                </span>
                <button
                  onClick={() => setTimerVisible(!timerVisible)}
                  className="p-1 text-slate-400 hover:text-white"
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
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-bold transition-all"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Desmos</span>
                  </button>
                  <button
                    onClick={() => { sound.playClick(); setFormulaOpen(true); }}
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-lg text-xs font-bold transition-all"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Formulalar</span>
                  </button>
                </>
              )}

              {/* Matrix Toggle */}
              <button
                onClick={() => setShowMatrix(!showMatrix)}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg text-xs font-semibold"
              >
                Savollar ({currentIdx + 1}/{questions.length})
              </button>
            </div>
          </div>
        </div>

        {/* Question Matrix Popover */}
        {showMatrix && (
          <div className="bg-slate-900 border-b border-slate-800 p-4 animate-in slide-in-from-top-2">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-3 text-xs text-slate-400 font-semibold">
                <span>Savollar Matritsasi (1 - {questions.length})</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-cyan-500" /> Javob berilgan</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Belgilangan (🚩)</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-slate-700" /> Javobsiz</span>
                </div>
              </div>
              <div className="grid grid-cols-8 sm:grid-cols-11 md:grid-cols-22 gap-1.5">
                {questions.map((_, i) => {
                  const hasAnswer = userAnswers[i] !== undefined;
                  const isFlag = flagged[i];
                  const isCurrent = currentIdx === i;

                  let cellClass = 'bg-slate-800 text-slate-400 border-slate-700';
                  if (hasAnswer) cellClass = 'bg-cyan-500 text-slate-950 font-bold border-cyan-400';
                  if (isFlag) cellClass = 'bg-amber-500 text-slate-950 font-bold border-amber-400';
                  if (isCurrent) cellClass += ' ring-2 ring-white';

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
          <div className="max-w-4xl mx-auto px-4 py-12 w-full animate-in fade-in duration-300">
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center mb-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                <CheckCircle2 className="w-4 h-4" /> Imtihon Yakunlandi
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white mb-2">
                {selectedExam.startsWith('sat') ? `${scoreData.scaledScore} / 800` : `Band ${scoreData.scaledScore.toFixed(1)}`}
              </h2>
              <p className="text-slate-400 text-sm mb-6">
                Rasmiy College Board / Cambridge 2026 ball shkalasi bo&apos;yicha
              </p>

              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                  <span className="text-2xl font-bold text-emerald-400 font-mono block">{scoreData.correct}</span>
                  <span className="text-xs text-slate-400">To&apos;g&apos;ri javob</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                  <span className="text-2xl font-bold text-rose-400 font-mono block">{scoreData.total - scoreData.correct}</span>
                  <span className="text-xs text-slate-400">Xato javob</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700">
                  <span className="text-2xl font-bold text-cyan-400 font-mono block">{scoreData.percentage}%</span>
                  <span className="text-xs text-slate-400">Aniqlik</span>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleReset(selectedExam)}
                  className="px-6 py-3 rounded-xl font-bold text-sm bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Qayta topshirish
                </button>
                <Link
                  href="/questions"
                  className="px-6 py-3 rounded-xl font-bold text-sm bg-slate-800 text-white hover:bg-slate-700 transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Savollar bankini ko&apos;rish
                </Link>
              </div>
            </div>

            {/* Questions Review List */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Savollar tahlili va yechimlari:</h3>
              {questions.map((q, idx) => {
                const uAns = userAnswers[idx];
                const isCorrect =
                  typeof q.correctIndex === 'number'
                    ? uAns === q.correctIndex
                    : String(uAns).trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();

                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl border ${
                      isCorrect ? 'bg-slate-900/60 border-emerald-500/40' : 'bg-slate-900/60 border-rose-500/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-slate-400">Savol {idx + 1} ({q.section})</span>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        isCorrect ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                      }`}>
                        {isCorrect ? 'To\'g\'ri' : 'Xato'}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-semibold text-white mb-3">
                      {q.question}
                    </p>

                    <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 mb-3">
                      <span className="font-bold text-cyan-400 block mb-1">To&apos;g&apos;ri javob:</span>
                      {typeof q.correctIndex === 'number' && q.options
                        ? `${String.fromCharCode(65 + q.correctIndex)}) ${q.options[q.correctIndex]}`
                        : q.correctAnswer}
                    </div>

                    <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/30 text-xs text-slate-300">
                      <span className="font-bold text-cyan-300 block mb-1">Ilmiy yechim:</span>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Active Examination Workspace (College Board 2-Column Interface) */
          <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stimulus, Passage or Diagram */}
            <div className="lg:col-span-6 bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 h-full min-h-[420px] overflow-y-auto">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {currentQ.section || 'Exam Section'}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {currentQ.module || `Savol ${currentIdx + 1} / ${questions.length}`}
                </span>
              </div>

              {currentQ.svgDiagram && (
                <div
                  className="mb-5 p-4 rounded-2xl bg-slate-950 border border-slate-800 flex justify-center"
                  dangerouslySetInnerHTML={{ __html: currentQ.svgDiagram }}
                />
              )}

              {currentQ.stimulus ? (
                <div className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans whitespace-pre-line">
                  {currentQ.stimulus}
                </div>
              ) : (
                <div className="text-sm text-slate-400 italic">
                  Ushbu savol mustaqil topshiriq hisoblanadi. O&apos;ng tomondagi savolni o&apos;qib, javob variantini tanlang.
                </div>
              )}
            </div>

            {/* Right Column: Question & Multiple Choice / Grid-in */}
            <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl min-h-[420px]">
              
              <div>
                {/* Question Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-extrabold text-white">
                    Savol #{currentIdx + 1}
                  </span>
                  
                  {/* Mark for review */}
                  <button
                    onClick={toggleFlag}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                      flagged[currentIdx]
                        ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                        : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                    }`}
                  >
                    <Flag className={`w-3.5 h-3.5 ${flagged[currentIdx] ? 'fill-amber-400' : ''}`} />
                    <span>{flagged[currentIdx] ? 'Belgilangan' : 'Mark for Review'}</span>
                  </button>
                </div>

                {/* Question Prompt */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-6 leading-snug">
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
                              ? 'bg-cyan-500/15 border-cyan-400 text-white font-bold shadow-md shadow-cyan-500/10'
                              : 'bg-slate-800/60 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                          }`}
                        >
                          <span
                            className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
                              isChosen
                                ? 'bg-cyan-400 text-slate-950'
                                : 'bg-slate-700/70 text-slate-300'
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
                  <div className="mb-8 p-5 rounded-2xl bg-slate-800/50 border border-slate-700">
                    <label className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-2">
                      Student-Produced Response (Javobni kiriting):
                    </label>
                    <input
                      type="text"
                      value={typeof userAnswers[currentIdx] === 'string' ? userAnswers[currentIdx] as string : gridInInput}
                      onChange={(e) => handleGridInSubmit(e.target.value)}
                      placeholder="Masalan: 8, 23/3 yoki 4.75"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-600 text-white font-mono text-base focus:outline-none focus:border-cyan-400"
                    />
                    <p className="text-[11px] text-slate-400 mt-2">
                      Kasr belgisi (/) yoki o&apos;nlik nuqta (.) kiritishingiz mumkin.
                    </p>
                  </div>
                )}
              </div>

              {/* Navigation Footer */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    sound.playClick();
                    setCurrentIdx(Math.max(0, currentIdx - 1));
                  }}
                  disabled={currentIdx === 0}
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
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
                    className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
                  >
                    Keyingisi
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/30 flex items-center gap-1.5"
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
