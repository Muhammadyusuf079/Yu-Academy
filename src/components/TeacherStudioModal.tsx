'use client';

import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, CheckCircle2, School, Sparkles, BookOpen, Calculator, Award, Save, AlertCircle } from 'lucide-react';
import { Question } from '@/types';
import { sound } from '@/lib/sound';
import confetti from 'canvas-confetti';

interface TeacherStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STORAGE_KEY_TEACHER_TESTS = 'yu_custom_teacher_tests';

export function getTeacherTests(): Question[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_TEACHER_TESTS);
    if (raw) return JSON.parse(raw);
  } catch {}
  return [];
}

export default function TeacherStudioModal({ isOpen, onClose }: TeacherStudioModalProps) {
  const [tests, setTests] = useState<Question[]>([]);
  const [activeTab, setActiveTab] = useState<'create' | 'list'>('create');

  // Form State
  const [exam, setExam] = useState<'SAT' | 'IELTS'>('SAT');
  const [section, setSection] = useState('Math: Algebra');
  const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium');
  const [stimulus, setStimulus] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [explanation, setExplanation] = useState('');
  const [hasDesmos, setHasDesmos] = useState(true);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTests(getTeacherTests());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOptionChange = (idx: number, val: string) => {
    const next = [...options];
    next[idx] = val;
    setOptions(next);
  };

  const handleCreateQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!questionText.trim()) {
      setMessage('Iltimos, savol matnini kiriting!');
      sound.playError();
      return;
    }

    if (options.some(opt => !opt.trim())) {
      setMessage('Iltimos, barcha 4 ta variant (A, B, C, D) javoblarini to\'ldiring!');
      sound.playError();
      return;
    }

    const newQuestion: Question = {
      id: `teacher-${Date.now()}`,
      exam,
      year: '2026',
      examSession: 'Ustoz Mualliflik Testi',
      section,
      module: 'Teacher Studio 2026',
      difficulty,
      hasDesmos: exam === 'SAT' ? hasDesmos : false,
      stimulus: stimulus.trim() || undefined,
      question: questionText.trim(),
      options: options.map(o => o.trim()),
      correctIndex,
      explanation: explanation.trim() || 'To\'g\'ri javob tahlili muallif ustoz tomonidan taqdim etilgan.',
      tags: ['TeacherCreated', exam, section, difficulty],
    };

    const current = getTeacherTests();
    const updated = [newQuestion, ...current];

    try {
      localStorage.setItem(STORAGE_KEY_TEACHER_TESTS, JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('yu_custom_tests_updated', { detail: updated }));
    } catch {}

    setTests(updated);
    sound.playSuccess();
    try {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    } catch {}

    // Reset Form
    setStimulus('');
    setQuestionText('');
    setOptions(['', '', '', '']);
    setExplanation('');
    setMessage('Yangi test muvaffaqiyatli saqlandi va umumiy savollar bankiga qo\'shildi!');
    setActiveTab('list');
  };

  const handleDelete = (id: string) => {
    sound.playClick();
    const filtered = tests.filter(t => t.id !== id);
    try {
      localStorage.setItem(STORAGE_KEY_TEACHER_TESTS, JSON.stringify(filtered));
      window.dispatchEvent(new CustomEvent('yu_custom_tests_updated', { detail: filtered }));
    } catch {}
    setTests(filtered);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center border border-amber-500/30">
              <School className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                Ustoz Test Studiyasi (Teacher Test Studio)
                <span className="text-[10px] font-bold uppercase bg-amber-500/20 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                  Ustoz Rejimi
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                O&apos;quvchilaringiz uchun Digital SAT va IELTS savollari yarating
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => { sound.playClick(); onClose(); }}
              className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 pt-3 bg-white dark:bg-slate-900 gap-3">
          <button
            onClick={() => { sound.playClick(); setActiveTab('create'); }}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-all ${
              activeTab === 'create'
                ? 'border-amber-500 text-amber-600 dark:text-amber-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>Yangi Test Qo&apos;shish</span>
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveTab('list'); }}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-all ${
              activeTab === 'list'
                ? 'border-amber-500 text-amber-600 dark:text-amber-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Yaratilgan Testlarim ({tests.length})</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {message && (
            <div className="mb-4 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{message}</span>
            </div>
          )}

          {activeTab === 'create' ? (
            <form onSubmit={handleCreateQuestion} className="space-y-4">
              
              {/* Exam & Section Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Imtihon turi:
                  </label>
                  <select
                    value={exam}
                    onChange={(e) => {
                      const val = e.target.value as 'SAT' | 'IELTS';
                      setExam(val);
                      setSection(val === 'SAT' ? 'Math: Algebra' : 'IELTS: Reading Academic');
                    }}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
                  >
                    <option value="SAT">Digital SAT 2026</option>
                    <option value="IELTS">IELTS Cambridge 19</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Bo&apos;lim (Section):
                  </label>
                  <select
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
                  >
                    {exam === 'SAT' ? (
                      <>
                        <option value="Math: Algebra">Math: Algebra</option>
                        <option value="Math: Advanced Math">Math: Advanced Math</option>
                        <option value="Math: Problem Solving">Math: Problem Solving</option>
                        <option value="Math: Geometry & Trigonometry">Math: Geometry &amp; Trigonometry</option>
                        <option value="RW: Craft & Structure">RW: Craft &amp; Structure</option>
                        <option value="RW: Information & Ideas">RW: Information &amp; Ideas</option>
                        <option value="RW: Standard English Conventions">RW: Standard English Conventions</option>
                        <option value="RW: Expression of Ideas">RW: Expression of Ideas</option>
                      </>
                    ) : (
                      <>
                        <option value="IELTS: Reading Academic">IELTS: Reading Academic</option>
                        <option value="IELTS: Listening Section 1-4">IELTS: Listening Section 1-4</option>
                        <option value="IELTS: Writing Task 1/2">IELTS: Writing Task 1/2</option>
                        <option value="IELTS: Speaking Cue Card">IELTS: Speaking Cue Card</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Qiyinlik darajasi:
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
                  >
                    <option value="Easy">Oson (Easy)</option>
                    <option value="Medium">O&apos;rtacha (Medium)</option>
                    <option value="Hard">Qiyin (Hard Module 2)</option>
                  </select>
                </div>
              </div>

              {/* Context / Stimulus */}
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Matn, Tenglama yoki Kontekst (Ixtiyoriy):
                </label>
                <textarea
                  rows={2}
                  value={stimulus}
                  onChange={(e) => setStimulus(e.target.value)}
                  placeholder="Masalan: Tenglama berilgan: 3(2x - 5) + 7 = 4(x + 1) yoki Reading parcha matni..."
                  className="w-full p-3 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              {/* Question */}
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Savol matni (*):
                </label>
                <input
                  type="text"
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder="Masalan: What is the value of x that satisfies the given equation?"
                  className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
                  required
                />
              </div>

              {/* 4 Options Grid */}
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2">
                  Variantlar va To&apos;g&apos;ri javobni belgilash:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {['A', 'B', 'C', 'D'].map((letter, idx) => (
                    <div
                      key={letter}
                      className={`flex items-center gap-2 p-2 rounded-xl border transition-all ${
                        correctIndex === idx
                          ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30'
                          : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => { sound.playClick(); setCorrectIndex(idx); }}
                        className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-all ${
                          correctIndex === idx
                            ? 'bg-emerald-500 text-white shadow-sm'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-emerald-500 hover:text-white'
                        }`}
                        title="To'g'ri javob sifatida belgilash"
                      >
                        {letter}
                      </button>
                      <input
                        type="text"
                        value={options[idx]}
                        onChange={(e) => handleOptionChange(idx, e.target.value)}
                        placeholder={`${letter} varianti javobi`}
                        className="flex-1 bg-transparent text-xs text-slate-900 dark:text-white focus:outline-none"
                        required
                      />
                      {correctIndex === idx && (
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                          ✓ To&apos;g&apos;ri
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Explanation & Desmos shortcut */}
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Yechim tushuntirishi va Desmos usuli (Explanation):
                </label>
                <textarea
                  rows={2}
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  placeholder="Bosqichma-bosqich yechim yoki Desmos grafik kalkulyatoridagi tezkor yo'l..."
                  className="w-full p-3 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              {/* Desmos check */}
              {exam === 'SAT' && (
                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300">
                  <input
                    type="checkbox"
                    checked={hasDesmos}
                    onChange={(e) => setHasDesmos(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400"
                  />
                  <span>Ushbu savol uchun Desmos grafik kalkulyatoridan foydalanish tavsiya etiladi</span>
                </label>
              )}

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Testni Saqlash va Savollar Bankiga Qo&apos;shish</span>
                </button>
              </div>

            </form>
          ) : (
            <div className="space-y-3">
              {tests.length === 0 ? (
                <div className="text-center py-12 text-slate-500 dark:text-slate-400">
                  <School className="w-12 h-12 mx-auto mb-3 opacity-40 text-amber-500" />
                  <p className="text-sm font-bold">Hozircha o&apos;z testlaringiz mavjud emas.</p>
                  <p className="text-xs mt-1">Yuqoridagi &ldquo;Yangi Test Qo&apos;shish&rdquo; tugmasi orqali ilk savolingizni kiriting!</p>
                </div>
              ) : (
                tests.map((t, idx) => (
                  <div
                    key={t.id}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                          {t.exam} • {t.section}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500">
                          Daraja: {t.difficulty}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {idx + 1}. {t.question}
                      </p>
                      <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-600 dark:text-slate-300 pt-1">
                        {t.options.map((opt: string, oIdx: number) => (
                          <div
                            key={oIdx}
                            className={`p-1.5 rounded-lg border ${
                              t.correctIndex === oIdx
                                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 font-bold'
                                : 'border-transparent'
                            }`}
                          >
                            {String.fromCharCode(65 + oIdx)}) {opt} {t.correctIndex === oIdx ? '✓' : ''}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleDelete(t.id)}
                      className="p-2 text-rose-500 hover:text-rose-700 hover:bg-rose-500/10 rounded-xl transition-colors shrink-0"
                      title="O'chirish"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>💡 Ustoz qo&apos;shgan har bir test avtomatik ravishda barcha o&apos;quvchilar savollar bankiga integratsiya qilinadi.</span>
          <span className="font-mono font-bold text-amber-600 dark:text-amber-400">YU Studio v2.0</span>
        </div>

      </div>
    </div>
  );
}
