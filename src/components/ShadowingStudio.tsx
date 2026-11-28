'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Headphones,
  Play,
  Pause,
  Volume2,
  Sparkles,
  Check,
  X as XIcon,
  Mic,
  MicOff,
  Gauge,
  RotateCcw,
  Award,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { SHADOWING_PHRASES_2026, ShadowingPhrase } from '@/data/shadowing';
import { sound } from '@/lib/sound';
import { speakTextWithGender, stopSpeech } from '@/lib/speech';
import { useGamification } from '@/lib/xp-store';
import confetti from 'canvas-confetti';

export default function ShadowingStudio() {
  const { addXP } = useGamification();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhraseId, setActivePhraseId] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [voiceGender, setVoiceGender] = useState<'female' | 'male'>('female');
  const [speechSpeed, setSpeechSpeed] = useState<number>(1.0);
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);
  const [browserVoices, setBrowserVoices] = useState<SpeechSynthesisVoice[]>([]);

  // Load and cache browser voices
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices() || [];
      if (v.length > 0) setBrowserVoices(v);
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  // Speech Recognition & Pronunciation Analysis States
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [userTranscript, setUserTranscript] = useState<string>('');
  const [speechAnalysis, setSpeechAnalysis] = useState<{
    score: number;
    totalWords: number;
    correctWords: number;
    words: { original: string; clean: string; isCorrect: boolean }[];
  } | null>(null);

  const recognitionRef = useRef<any>(null);

  const categories = [
    { id: 'all', label: '🌐 Barchasi (110+)' },
    { id: 'ielts_tech', label: '🤖 Texnologiya & AI' },
    { id: 'ielts_env', label: '🌿 Ekologiya & Iqlim' },
    { id: 'ielts_soc', label: '👥 Jamiyat & Madaniyat' },
    { id: 'ielts_edu', label: '📚 Ta\'lim & Rivojlanish' },
    { id: 'ielts_econ', label: '💼 Iqtisodiyot & Biznes' },
    { id: 'ielts_health', label: '🩺 Salomatlik & Tibbiyot' },
    { id: 'ielts_arts', label: '🎨 San\'at & Falsafa' },
  ];

  // Initialize Speech Recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event: any) => {
          let currentText = '';
          for (let i = 0; i < event.results.length; ++i) {
            currentText += event.results[i][0].transcript + ' ';
          }
          setUserTranscript(currentText.trim());
        };

        recognition.onerror = (e: any) => {
          console.warn('Speech recognition warning:', e.error);
          setIsRecording(false);
        };

        recognition.onend = () => {
          setIsRecording(false);
        };

        recognitionRef.current = recognition;
      }
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {}
      }
      stopSpeech();
    };
  }, []);

  const filtered = selectedCategory === 'all'
    ? SHADOWING_PHRASES_2026
    : SHADOWING_PHRASES_2026.filter(p => p.category === selectedCategory);

  const activePhrase = SHADOWING_PHRASES_2026.find(p => p.id === activePhraseId) || SHADOWING_PHRASES_2026[0];

  // Play Full Sentence
  const playSpeech = (text: string, gender: 'female' | 'male' = voiceGender, speed: number = speechSpeed) => {
    sound.playClick();
    stopSpeech();
    setIsPlaying(true);
    speakTextWithGender(
      text,
      gender,
      speed,
      browserVoices,
      () => setIsPlaying(false),
      () => setIsPlaying(false)
    );
  };

  const handleTogglePlay = () => {
    sound.playClick();
    if (isPlaying) {
      stopSpeech();
      setIsPlaying(false);
    } else {
      playSpeech(activePhrase.text, voiceGender, speechSpeed);
    }
  };

  // Play Single Word (for pronunciation correction)
  const speakSingleWord = (word: string) => {
    sound.playClick();
    setSpeakingWord(word);
    speakTextWithGender(
      word,
      voiceGender,
      0.85,
      browserVoices,
      () => setSpeakingWord(null),
      () => setSpeakingWord(null)
    );
  };

  // Start Student Voice Recording
  const startRecording = () => {
    sound.playClick();
    if (isPlaying) {
      stopSpeech();
      setIsPlaying(false);
    }

    setUserTranscript('');
    setSpeechAnalysis(null);

    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch (err) {
        console.warn('Recognition start retry:', err);
      }
    } else {
      alert("Brauzeringizda ovoz yozib olish (SpeechRecognition) qo'llab-quvvatlanmaydi. Iltimos, Chrome, Safari yoki Edge brauzeridan foydalaning.");
    }
  };

  // Stop Recording and Compute Word-by-Word Analysis
  const stopRecordingAndAnalyze = () => {
    sound.playClick();
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
    }
    setIsRecording(false);

    // Compute detailed word-by-word comparison
    const targetWords = activePhrase.text.split(/\s+/).filter(Boolean);
    const userWords = userTranscript
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()?"']/g, '')
      .split(/\s+/)
      .filter(Boolean);

    let correctCount = 0;

    const wordsAnalysis = targetWords.map((orig) => {
      const clean = orig.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?"']/g, '');
      const isMatched = userWords.some(
        (uw) => uw === clean || (clean.length > 4 && (uw.startsWith(clean.slice(0, 4)) || clean.startsWith(uw.slice(0, 4))))
      );

      if (isMatched) correctCount++;
      return {
        original: orig,
        clean: clean,
        isCorrect: isMatched,
      };
    });

    const score = targetWords.length > 0 ? Math.round((correctCount / targetWords.length) * 100) : 0;

    setSpeechAnalysis({
      score,
      totalWords: targetWords.length,
      correctWords: correctCount,
      words: wordsAnalysis,
    });

    if (score >= 70) {
      sound.playSuccess();
      addXP(120, "IELTS Shadowing a'lo talaffuz!");
      try {
        confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 } });
      } catch {}
    } else {
      sound.playCoin();
      addXP(40, "IELTS Shadowing mashqi bajarildi");
    }
  };

  return (
    <section id="shadowing-studio" className="w-full py-20 bg-slate-50 dark:bg-slate-950 transition-colors relative overflow-hidden">
      
      {/* Decorative ambient background */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3 shadow-sm">
            <Headphones className="w-4 h-4 text-cyan-500" /> IELTS Audio Shadowing Studio (Band 8.5–9.0)
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            IELTS Speaking Shadowing Trenajyori
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Native speaker ritmi va intonatsiyasini qiz bola yoki o&apos;g&apos;il bola ovozida takrorlang, mikrofonda talaffuzingizni tekshiring va har bir xato so&apos;zni alohida eshiting.
          </p>
        </div>

        {/* Dual Switchers: Categories + Voice Gender + Speed */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 justify-center sm:justify-start">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(c.id);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === c.id
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Controls: Gender & Speed Switchers */}
          <div className="flex flex-wrap items-center gap-2.5">
            
            {/* Gender Toggle */}
            <div className="p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center">
              <button
                onClick={() => {
                  sound.playClick();
                  setVoiceGender('female');
                  if (isPlaying) playSpeech(activePhrase.text, 'female', speechSpeed);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  voiceGender === 'female'
                    ? 'bg-pink-500 text-white shadow-md shadow-pink-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>👩 Qiz bola ovozi</span>
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setVoiceGender('male');
                  if (isPlaying) playSpeech(activePhrase.text, 'male', speechSpeed);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  voiceGender === 'male'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>👨 O&apos;g&apos;il bola ovozi</span>
              </button>
            </div>

            {/* Speed Control (Sekin / Normal / Tez) */}
            <div className="p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-1">
              <span className="text-[10px] font-bold text-slate-400 px-2 flex items-center gap-1">
                <Gauge className="w-3 h-3 text-cyan-500" /> Tezlik:
              </span>
              {[
                { label: '0.75x', val: 0.75, tip: 'Sekin' },
                { label: '0.9x', val: 0.9, tip: 'Qulay' },
                { label: '1.0x', val: 1.0, tip: 'Normal' },
                { label: '1.25x', val: 1.25, tip: 'Tez' },
              ].map((s) => (
                <button
                  key={s.val}
                  onClick={() => {
                    sound.playClick();
                    setSpeechSpeed(s.val);
                    if (isPlaying) playSpeech(activePhrase.text, voiceGender, s.val);
                  }}
                  className={`px-2 py-1 rounded-lg text-[11px] font-mono font-bold transition-all ${
                    speechSpeed === s.val
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  title={`${s.tip} tezlik`}
                >
                  {s.label}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Studio Player & Phrase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Active Player Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl shadow-slate-200/50 dark:shadow-2xl relative transition-all duration-300 hover:shadow-2xl space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 px-2.5 py-1 rounded-full">
                  {activePhrase.categoryLabel}
                </span>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">
                  {activePhrase.level}
                </span>
              </div>

              {/* Phrase Text */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80">
                <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-100 leading-relaxed font-sans">
                  &ldquo;{activePhrase.text}&rdquo;
                </p>
              </div>

              {/* Animated Waveform Visualization */}
              <div className="flex items-center justify-center gap-1.5 py-2">
                {[35, 75, 25, 85, 55, 95, 45, 70, 40, 90, 30, 80, 60, 35].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${isPlaying ? (h * Math.random()).toFixed(0) : h * 0.35}px` }}
                    className={`w-1.5 rounded-full transition-all duration-150 ${
                      isPlaying
                        ? voiceGender === 'female' ? 'bg-pink-500 animate-pulse' : 'bg-cyan-500 animate-pulse'
                        : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span>Diktori: <b>{voiceGender === 'female' ? '👩 Qiz bola ovozi (Google US / Samantha)' : '👨 O\'g\'il bola ovozi (Google UK / Daniel)'}</b></span>
                <span>Tezlik: <b className="font-mono text-cyan-600 dark:text-cyan-400">{speechSpeed}x</b></span>
              </div>
            </div>

            {/* Action Buttons: Play + Microphone Recording */}
            <div className="space-y-3 pt-2">
              {/* Play Audio Button */}
              <button
                onClick={handleTogglePlay}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all hover:scale-[1.01] active:scale-[0.98] shadow-lg cursor-pointer ${
                  voiceGender === 'female'
                    ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white shadow-pink-500/25 hover:brightness-110'
                    : 'bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 shadow-cyan-500/25 hover:brightness-110'
                }`}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                <span>{isPlaying ? 'To\'xtatish' : 'Tinglash va Takrorlash (Shadowing)'}</span>
              </button>

              {/* Record / Analyze Button */}
              {!isRecording ? (
                <button
                  onClick={startRecording}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 transition-all cursor-pointer"
                >
                  <Mic className="w-4 h-4 text-rose-500" />
                  <span>Mikrofonda Takrorlang (Talaffuzni Tekshirish)</span>
                </button>
              ) : (
                <button
                  onClick={stopRecordingAndAnalyze}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-xs bg-rose-500 hover:bg-rose-600 text-white animate-pulse shadow-lg shadow-rose-500/30 transition-all cursor-pointer"
                >
                  <MicOff className="w-4 h-4" />
                  <span>Gapirib Bo&apos;ldim (Tahlil Qilish)</span>
                </button>
              )}
            </div>

            {/* Live recording indicator */}
            {isRecording && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-800/40 text-xs text-rose-700 dark:text-rose-300 animate-in fade-in">
                <span className="font-bold flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  Sizni tinglamoqda...
                </span>
                <p className="italic text-slate-700 dark:text-slate-300">
                  {userTranscript || "Gapiring, so'zlaringiz real vaqtda tahlil qilinadi..."}
                </p>
              </div>
            )}

            {/* Word-by-Word Pronunciation Error Analysis Box */}
            {speechAnalysis && (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 space-y-3 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-cyan-500" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Talaffuz Aniqligi: <b className="text-cyan-600 dark:text-cyan-400 font-mono text-sm">{speechAnalysis.score}%</b>
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    {speechAnalysis.correctWords} / {speechAnalysis.totalWords} so&apos;z to&apos;g&apos;ri
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 block mb-2 font-bold">
                    💡 So&apos;zlar tahlili: Qizil so&apos;zni bosing — uning to&apos;g&apos;ri talaffuzini eshitasiz:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {speechAnalysis.words.map((w, idx) => (
                      <button
                        key={idx}
                        onClick={() => speakSingleWord(w.clean)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm ${
                          w.isCorrect
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40'
                            : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-500/50 hover:bg-rose-100 animate-pulse'
                        } ${speakingWord === w.clean ? 'ring-2 ring-cyan-500' : ''}`}
                        title={w.isCorrect ? "To'g'ri talaffuz qilindi (Eshitish uchun bosing)" : "Xato yoki aytilmadi! To'g'ri talaffuzini eshitish uchun bosing"}
                      >
                        {w.isCorrect ? (
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        ) : (
                          <Volume2 className="w-3 h-3 text-rose-600 shrink-0" />
                        )}
                        <span>{w.original}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {speechAnalysis.score < 100 && (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    🔴 Qizil rangdagi xato so&apos;zlarni eshitib, qaytadan Shadowing qiling!
                  </p>
                )}
              </div>
            )}

          </div>

          {/* Phrase List (110+ items) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[560px] overflow-y-auto pr-1">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  sound.playClick();
                  setActivePhraseId(item.id);
                  setUserTranscript('');
                  setSpeechAnalysis(null);
                  playSpeech(item.text, voiceGender, speechSpeed);
                }}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  activePhraseId === item.id
                    ? voiceGender === 'female'
                      ? 'bg-pink-50 dark:bg-pink-950/40 border-pink-500 text-slate-900 dark:text-white shadow-lg shadow-pink-500/10'
                      : 'bg-cyan-50 dark:bg-cyan-950/40 border-cyan-500 text-slate-900 dark:text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-bold text-cyan-600 dark:text-cyan-400">#{item.id} • {item.level}</span>
                  <span className="font-mono text-slate-400 dark:text-slate-500">{item.timing}</span>
                </div>
                <p className="text-xs sm:text-sm font-medium line-clamp-3 leading-snug">
                  {item.text}
                </p>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
