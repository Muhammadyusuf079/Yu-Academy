'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  Award,
  Zap,
  Timer,
  RefreshCw,
  CheckCircle2,
  Trophy,
  Gamepad2,
  Flame,
  ArrowRight,
} from 'lucide-react';
import { sound } from '@/lib/sound';
import { useGamification } from '@/lib/xp-store';
import confetti from 'canvas-confetti';

interface IeltsGameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MatchPair {
  id: number;
  word: string;
  translation: string;
}

const VOCAB_PAIRS_POOL: MatchPair[] = [
  { id: 1, word: 'Ubiquitous', translation: 'Hamma joyda uchraydigan' },
  { id: 2, word: 'Pragmatic', translation: 'Amaliy, realistik' },
  { id: 3, word: 'Mitigate', translation: 'Yumshatmoq, kamaytirmoq' },
  { id: 4, word: 'Substantiate', translation: 'Dalillar bilan isbotlamoq' },
  { id: 5, word: 'Anomalous', translation: 'Normadan chetga chiqqan' },
  { id: 6, word: 'Eloquent', translation: 'Fasohotli, ravon so\'zlovchi' },
  { id: 7, word: 'Lucrative', translation: 'Juda foydali, daromadli' },
  { id: 8, word: 'Pernicious', translation: 'Zararli, halokatli' },
  { id: 9, word: 'Exemplify', translation: 'Misol bo\'lib xizmat qilmoq' },
  { id: 10, word: 'Prevalent', translation: 'Keng tarqalgan' },
];

export default function IeltsGameModal({ isOpen, onClose }: IeltsGameModalProps) {
  const { addXP } = useGamification();
  const [activeGame, setActiveGame] = useState<'match' | 'collocation'>('match');

  // Game 1: Match Blitz State
  const [cards, setCards] = useState<{ id: string; text: string; matchId: number; type: 'en' | 'uz' }[]>([]);
  const [selectedCard, setSelectedCard] = useState<{ id: string; matchId: number; type: 'en' | 'uz' } | null>(null);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(45);
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);

  // Game 2: Collocations
  const [collocIdx, setCollocIdx] = useState(0);
  const [collocFeedback, setCollocFeedback] = useState<string | null>(null);

  const collocations = [
    {
      sentence: "The government must play a ______ role in combating climate change.",
      options: ['pivotal', 'trivial', 'marginal', 'hollow'],
      correct: 0,
      expl: "'Play a pivotal role' = hal qiluvchi rol o'ynamoq (Band 8.5 collocation)",
    },
    {
      sentence: "Recent scientific discoveries have cast serious ______ on the old theory.",
      options: ['doubt', 'light', 'vision', 'mind'],
      correct: 0,
      expl: "'Cast serious doubt on' = jiddiy shubha uyg'otmoq",
    },
    {
      sentence: "The country witnessed an ______ growth in digital innovation over the decade.",
      options: ['unprecedented', 'unprepared', 'unequal', 'unpleasant'],
      correct: 0,
      expl: "'Unprecedented growth' = misli ko'rilmagan o'sish",
    },
    {
      sentence: "Strict safety regulations were implemented to avert ______ consequences.",
      options: ['catastrophic', 'pleasant', 'superficial', 'minute'],
      correct: 0,
      expl: "'Catastrophic consequences' = fojiali oqibatlar",
    },
  ];

  // Initialize Match Game
  const startMatchGame = () => {
    sound.playClick();
    // Pick 4 random pairs
    const shuffled = [...VOCAB_PAIRS_POOL].sort(() => 0.5 - Math.random()).slice(0, 4);
    const gameCards: { id: string; text: string; matchId: number; type: 'en' | 'uz' }[] = [];

    shuffled.forEach(p => {
      gameCards.push({ id: `en-${p.id}`, text: p.word, matchId: p.id, type: 'en' });
      gameCards.push({ id: `uz-${p.id}`, text: p.translation, matchId: p.id, type: 'uz' });
    });

    setCards(gameCards.sort(() => 0.5 - Math.random()));
    setMatchedIds([]);
    setSelectedCard(null);
    setTimeLeft(45);
    setScore(0);
    setGameActive(true);
  };

  useEffect(() => {
    if (isOpen && activeGame === 'match' && !gameActive && matchedIds.length === 0) {
      startMatchGame();
    }
  }, [isOpen, activeGame]);

  // Timer
  useEffect(() => {
    if (!gameActive) return;
    if (timeLeft <= 0) {
      setGameActive(false);
      sound.playError();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameActive, timeLeft]);

  // Handle Card Click
  const handleCardClick = (card: { id: string; text: string; matchId: number; type: 'en' | 'uz' }) => {
    if (!gameActive || matchedIds.includes(card.matchId)) return;
    sound.playClick();

    if (!selectedCard) {
      setSelectedCard(card);
      return;
    }

    if (selectedCard.id === card.id) {
      setSelectedCard(null);
      return;
    }

    // Check Match
    if (selectedCard.matchId === card.matchId && selectedCard.type !== card.type) {
      // Correct Match!
      sound.playSuccess();
      const newMatched = [...matchedIds, card.matchId];
      setMatchedIds(newMatched);
      setSelectedCard(null);
      setScore(prev => prev + 25);

      if (newMatched.length === 4) {
        // Round Completed!
        setGameActive(false);
        addXP(150, "IELTS Word Match Blitz g'alabasi!");
        try {
          confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        } catch {}
      }
    } else {
      // Wrong Match
      sound.playError();
      setSelectedCard(null);
    }
  };

  const handleCollocSelect = (choiceIdx: number) => {
    sound.playClick();
    const curr = collocations[collocIdx];
    if (choiceIdx === curr.correct) {
      sound.playSuccess();
      setCollocFeedback(`To'g'ri! ${curr.expl}`);
      addXP(50, "IELTS Collocation to'g'ri javobi!");
    } else {
      sound.playError();
      setCollocFeedback(`Xato. To'g'ri javob: "${curr.options[curr.correct]}". ${curr.expl}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center font-bold shadow-md shadow-amber-500/20">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                IELTS Gamification &amp; O&apos;yinlar
                <span className="text-[10px] font-bold uppercase bg-amber-500/20 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                  XP Arena
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                O&apos;yin orqali Band 8.5 so&apos;zlarni tezroq eslab qoling va XP jamg&apos;aring
              </p>
            </div>
          </div>

          <button
            onClick={() => { sound.playClick(); onClose(); }}
            className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 pt-3 bg-white dark:bg-slate-900 gap-3">
          <button
            onClick={() => { sound.playClick(); setActiveGame('match'); }}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-all ${
              activeGame === 'match'
                ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Word Match Blitz (Juftlikni Top)</span>
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveGame('collocation'); }}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-all ${
              activeGame === 'collocation'
                ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Band 8.5 Collocation Hunt</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {activeGame === 'match' ? (
            <div className="space-y-6">
              
              {/* Score and Timer Bar */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <Timer className={`w-5 h-5 ${timeLeft <= 10 ? 'text-rose-500 animate-pulse' : 'text-cyan-500'}`} />
                  <span className="text-sm font-mono font-bold text-slate-900 dark:text-white">
                    {timeLeft} soniya
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    Ball: {score} / 100
                  </span>
                </div>

                <button
                  onClick={startMatchGame}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/30 flex items-center gap-1 transition-all"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Qaytadan boshlash</span>
                </button>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {cards.map(card => {
                  const isMatched = matchedIds.includes(card.matchId);
                  const isSelected = selectedCard?.id === card.id;

                  return (
                    <button
                      key={card.id}
                      onClick={() => handleCardClick(card)}
                      disabled={isMatched}
                      className={`h-24 p-3 rounded-2xl border text-xs sm:text-sm font-bold flex flex-col items-center justify-center text-center transition-all ${
                        isMatched
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 opacity-60 scale-95'
                          : isSelected
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/25 scale-105'
                          : 'bg-white dark:bg-slate-850 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-cyan-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>{card.text}</span>
                      <span className="text-[10px] mt-1 font-mono uppercase text-slate-400">
                        {card.type === 'en' ? 'Inglizcha' : 'O\'zbekcha'}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Win Banner */}
              {matchedIds.length === 4 && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 text-center animate-in fade-in">
                  <span className="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400 block mb-1">
                    🎉 Tabriklaymiz! Barcha juftliklarni to&apos;g&apos;ri topdingiz!
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-300">
                    Sizga +150 XP muvaffaqiyatli taqdim etildi.
                  </span>
                </div>
              )}

            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Collocation Challenge Card */}
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-bold">Savol: {collocIdx + 1} / {collocations.length}</span>
                  <span className="font-bold text-amber-500">Band 8.5 Collocation</span>
                </div>

                <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                  &ldquo;{collocations[collocIdx].sentence}&rdquo;
                </p>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {collocations[collocIdx].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleCollocSelect(i)}
                      className="p-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 hover:border-cyan-500 hover:bg-cyan-500/10 text-left transition-all"
                    >
                      {String.fromCharCode(65 + i)}) {opt}
                    </button>
                  ))}
                </div>

                {/* Feedback */}
                {collocFeedback && (
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-800 dark:text-cyan-300 font-medium">
                    {collocFeedback}
                  </div>
                )}

                {/* Next button */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setCollocFeedback(null);
                      setCollocIdx((prev) => (prev + 1) % collocations.length);
                    }}
                    className="px-5 py-2.5 rounded-xl font-bold text-xs bg-cyan-500 text-slate-950 hover:brightness-110 flex items-center gap-1.5 transition-all"
                  >
                    <span>Keyingi ibora</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>⚡ IELTS o&apos;yinlarida to&apos;plangan XP umumiy profilingizga qo&apos;shiladi.</span>
          <span className="font-mono font-bold text-amber-500">IELTS Play 2026</span>
        </div>

      </div>
    </div>
  );
}
