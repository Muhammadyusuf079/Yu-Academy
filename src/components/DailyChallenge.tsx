'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Flame, CheckCircle2, XCircle, ArrowRight, Sparkles, Award } from 'lucide-react';
import { sound } from '@/lib/sound';

export default function DailyChallenge() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [streak, setStreak] = useState(3);
  const [xp, setXp] = useState(150);

  // Challenge of the day
  const challenge = {
    exam: 'Digital SAT Math 2026',
    topic: 'Algebra: Systems of Equations',
    difficulty: 'Hard (700+ Score)',
    question: 'A line in the xy-plane passes through (2, 5) and is perpendicular to the line 3x - 4y = 12. What is the y-intercept of this perpendicular line?',
    options: [
      'A) y-intercept = 23/3',
      'B) y-intercept = 11/3',
      'C) y-intercept = -4/3',
      'D) y-intercept = 19/4',
    ],
    correctIndex: 0,
    explanation: 'First, find the slope of the given line 3x - 4y = 12 => 4y = 3x - 12 => y = (3/4)x - 3. The slope is m₁ = 3/4. The perpendicular slope is the negative reciprocal: m₂ = -4/3. Using the point (2, 5) in slope-intercept form y - y₁ = m(x - x₁): y - 5 = (-4/3)(x - 2) => y = (-4/3)x + 8/3 + 5 => y = (-4/3)x + 23/3. The y-intercept is 23/3.',
  };

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    sound.playClick();
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === challenge.correctIndex) {
      sound.playSuccess();
      setStreak((prev) => prev + 1);
      setXp((prev) => prev + 50);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {}
    } else {
      sound.playError();
    }
  };

  return (
    <section className="w-full py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl p-6 sm:p-8">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Badge & Streak */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Kunlik Sinov (Daily Challenge)
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  {challenge.exam}
                </h3>
              </div>
            </div>

            {/* Streak & XP Stats */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">
                <Flame className="w-4 h-4 fill-amber-400" />
                <span>{streak} Kunlik Streak</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold">
                <Award className="w-4 h-4" />
                <span>+{xp} XP</span>
              </div>
            </div>
          </div>

          {/* Question Text */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 mb-6 text-slate-100 text-sm sm:text-base leading-relaxed font-medium">
            {challenge.question}
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {challenge.options.map((opt, idx) => {
              let btnClass = 'bg-slate-800/70 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600';
              if (isAnswered) {
                if (idx === challenge.correctIndex) {
                  btnClass = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                } else if (idx === selectedOption) {
                  btnClass = 'bg-rose-500/20 border-rose-500 text-rose-300 font-bold';
                } else {
                  btnClass = 'bg-slate-800/40 border-slate-800 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswered}
                  className={`p-4 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${btnClass}`}
                >
                  <span>{opt}</span>
                  {isAnswered && idx === challenge.correctIndex && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== challenge.correctIndex && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner */}
          {isAnswered && (
            <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/40 border border-cyan-800/50 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
              <h4 className="font-bold text-cyan-300 flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Qadamma-qadam ilmiy yechim:
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {challenge.explanation}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
