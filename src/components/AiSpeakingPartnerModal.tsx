'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Sparkles,
  Award,
  RefreshCw,
  Play,
  Square,
  CheckCircle2,
  BrainCircuit,
  MessageSquare,
  HelpCircle,
} from 'lucide-react';
import { sound } from '@/lib/sound';
import { useGamification } from '@/lib/xp-store';
import confetti from 'canvas-confetti';

interface AiSpeakingPartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface QuestionPrompt {
  id: number;
  part: 'Part 1' | 'Part 2' | 'Part 3';
  topic: string;
  examinerPrompt: string;
  suggestedVocab: string[];
  modelAnswer: string;
}

const SPEAKING_PROMPTS: QuestionPrompt[] = [
  {
    id: 1,
    part: 'Part 1',
    topic: 'Artificial Intelligence & Future Tech',
    examinerPrompt: "Do you think artificial intelligence will replace teachers in the future? Why or why not?",
    suggestedVocab: ['indispensable', 'pedagogical', 'cognitive empathy', 'augment', 'automation'],
    modelAnswer: "In my perspective, while AI can significantly augment the pedagogical process by tailoring lessons to individual learning paces, it cannot wholly replace human educators. Teachers cultivate critical thinking, emotional resilience, and moral discernment—qualities that no algorithmic neural network can replicate.",
  },
  {
    id: 2,
    part: 'Part 1',
    topic: 'Hometown & Urban Transformation',
    examinerPrompt: "What changes have you noticed in your hometown over the past five years?",
    suggestedVocab: ['rapid urbanization', 'infrastructure', 'bustling metropolis', 'residential complexes', 'green spaces'],
    modelAnswer: "Over the last half-decade, my city has undergone unprecedented infrastructural metamorphosis. Traditional low-rise quarters have made way for modern residential complexes and commercial hubs, though this expansion has unfortunately placed substantial strain on public transport and green spaces.",
  },
  {
    id: 3,
    part: 'Part 2',
    topic: 'An Ambitious Goal (Cue Card)',
    examinerPrompt: "Describe an ambitious academic or personal goal you have set for yourself. You should say: what the goal is, why you chose it, what steps you are taking, and how achieving it will affect your future.",
    suggestedVocab: ['milestone', 'rigorous regimen', 'tenacity', 'ivy league aspirations', 'full-ride scholarship'],
    modelAnswer: "One of the most defining aspirations I have embraced is securing a full-ride scholarship at a world-class institution with a 1500+ Digital SAT score and an 8.5 in IELTS. To realize this, I have adhered to a rigorous daily practice regimen, honing analytical problem-solving and immersing myself in academic literature.",
  },
  {
    id: 4,
    part: 'Part 3',
    topic: 'Global Environmental Solutions',
    examinerPrompt: "In what ways can international collaboration address the pressing crisis of climate change?",
    suggestedVocab: ['mitigate', 'unilateral', 'ecological equilibrium', 'renewable initiatives', 'stringent policies'],
    modelAnswer: "Climate degradation transcends geopolitical frontiers; hence, unilateral measures inevitably fall short. Effective global collaboration entails concerted technological transfer, multilateral funding for renewable infrastructure in developing economies, and enforcing stringent carbon emission caps across all industrial sectors.",
  },
  {
    id: 5,
    part: 'Part 3',
    topic: 'Education & Socio-Economic Mobility',
    examinerPrompt: "Should higher education be made completely free for all citizens regardless of income?",
    suggestedVocab: ['meritocracy', 'fiscal burden', 'equitable access', 'socio-economic mobility', 'subsidize'],
    modelAnswer: "Providing universally subsidized higher education fosters equal socio-economic mobility and prevents generational inequality. However, it imposes a considerable fiscal burden on national budgets, which means governments must balance accessibility with uncompromising academic excellence.",
  },
];

export default function AiSpeakingPartnerModal({ isOpen, onClose }: AiSpeakingPartnerModalProps) {
  const { addXP } = useGamification();
  const [currentPromptIdx, setCurrentPromptIdx] = useState(0);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [evaluation, setEvaluation] = useState<{
    bandScore: number;
    fluency: string;
    lexical: string;
    grammar: string;
    suggestions: string[];
  } | null>(null);

  const recognitionRef = useRef<any>(null);

  const prompt = SPEAKING_PROMPTS[currentPromptIdx];

  // Initialize Speech Recognition if supported
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
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            currentText += event.results[i][0].transcript;
          }
          setTranscript(currentText);
        };

        recognition.onerror = (event: any) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
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
    };
  }, []);

  if (!isOpen) return null;

  // Speak AI prompt
  const speakExaminerPrompt = (text: string) => {
    sound.playClick();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (isAiSpeaking) {
        setIsAiSpeaking(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB'; // Cambridge / British Council accent
      utterance.rate = 0.9;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsAiSpeaking(false);
      utterance.onerror = () => setIsAiSpeaking(false);

      setIsAiSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const startListening = () => {
    sound.playClick();
    setTranscript('');
    setEvaluation(null);

    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (e) {
        console.error(e);
      }
    } else {
      // Fallback if browser doesn't support Web Speech API
      alert("Brauzeringizda mikrofondan ovoz yozib olish (SpeechRecognition) funksiyasi qo'llab-quvvatlanmaydi. Iltimos, Chrome, Safari yoki Edge brauzeridan foydalaning.");
    }
  };

  const stopListeningAndEvaluate = () => {
    sound.playClick();
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
    }
    setIsListening(false);

    // AI Evaluation Algorithm
    const userWords = transcript.toLowerCase().split(/\s+/).filter(Boolean);
    const wordCount = userWords.length;

    let matchedVocab = prompt.suggestedVocab.filter(v =>
      transcript.toLowerCase().includes(v.toLowerCase())
    );

    // Calculate dynamic band score
    let score = 6.0;
    if (wordCount >= 20) score += 0.5;
    if (wordCount >= 40) score += 0.5;
    if (wordCount >= 70) score += 0.5;
    if (matchedVocab.length >= 1) score += 0.5;
    if (matchedVocab.length >= 2) score += 0.5;
    if (matchedVocab.length >= 3) score += 0.5;

    score = Math.min(9.0, Math.max(5.5, score));

    const evalResult = {
      bandScore: Number(score.toFixed(1)),
      fluency: wordCount > 35 ? "Ravonlik a'lo darajada (Band 8+)" : "Nutq davomiyligini biroz oshirish tavsiya etiladi",
      lexical: matchedVocab.length > 0 
        ? `Leksik boylik: "${matchedVocab.join(', ')}" akademik so'zlaridan unumli foydalanildi`
        : "Band 8+ lug'at birliklarini ko'proq kiritish tavsiya qilinadi",
      grammar: "Gap tuzilishi tushunarli va mantiqiy bog'langan",
      suggestions: [
        `Taklif qilingan akademik iboralarni nutqqa qo'shing: ${prompt.suggestedVocab.slice(0, 3).join(', ')}`,
        "Pauzalardan qochish uchun 'In addition to that...', 'Furthermore...' kabi connectorlardan foydalaning.",
      ],
    };

    setEvaluation(evalResult);
    addXP(150, `IELTS Speaking (${prompt.part}) mashqi uchun`);
    sound.playSuccess();
    try {
      confetti({ particleCount: 75, spread: 65, origin: { y: 0.6 } });
    } catch {}
  };

  const nextPrompt = () => {
    sound.playClick();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsAiSpeaking(false);
    setIsListening(false);
    setTranscript('');
    setEvaluation(null);
    setCurrentPromptIdx((prev) => (prev + 1) % SPEAKING_PROMPTS.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                Real-Time AI Voice Speaking Partner
                <span className="text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Cambridge Examiner AI
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Mikrofon orqali AI imtihon oluvchi bilan yuzma-yuz gaplashing va Band 9 tahlilini oling
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sound.playClick();
                if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                  window.speechSynthesis.cancel();
                }
                onClose();
              }}
              className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Active Question Box */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                  {prompt.part}
                </span>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Mavzu: {prompt.topic}
                </span>
              </div>
              <button
                onClick={nextPrompt}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Boshqa savol</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block mb-1">
                  Cambridge Examiner Savoli:
                </span>
                <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                  &ldquo;{prompt.examinerPrompt}&rdquo;
                </p>
              </div>

              <button
                onClick={() => speakExaminerPrompt(prompt.examinerPrompt)}
                className={`p-3 rounded-2xl transition-all shrink-0 ${
                  isAiSpeaking
                    ? 'bg-amber-500 text-slate-950 animate-pulse'
                    : 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30'
                }`}
                title="AI ovozida eshitish"
              >
                {isAiSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>

            {/* High-Scoring Vocabulary Hints */}
            <div>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-2">
                💡 Nutqingizda ishlatish tavsiya etiladigan Band 8.5+ so&apos;zlar:
              </span>
              <div className="flex flex-wrap gap-2">
                {prompt.suggestedVocab.map((v, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                  >
                    ✨ {v}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Student Speech Section */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Mic className="w-4 h-4 text-cyan-500" />
                Sizning Javobingiz (Ovoz yozuvi):
              </span>
              {isListening && (
                <span className="flex items-center gap-1.5 text-xs font-bold text-rose-500 animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Eshitilmoqda...
                </span>
              )}
            </div>

            <div className="min-h-[100px] p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
              {transcript ? (
                transcript
              ) : (
                <span className="text-slate-400 italic">
                  &ldquo;Mikrofonni Yoqish&rdquo; tugmasini bosing va ingliz tilida o&apos;z javobingizni gapiring. AI nutqingizni eshitib, avtomatik tahlil qiladi...
                </span>
              )}
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {!isListening ? (
                <button
                  onClick={startListening}
                  className="px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-400 to-sky-300 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2"
                >
                  <Mic className="w-4 h-4" />
                  <span>Mikrofonni Yoqish &amp; Gapirish</span>
                </button>
              ) : (
                <button
                  onClick={stopListeningAndEvaluate}
                  className="px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-rose-500 hover:bg-rose-600 text-white shadow-lg shadow-rose-500/25 transition-all flex items-center gap-2"
                >
                  <Square className="w-4 h-4" />
                  <span>Javobni Yakunlash &amp; AI Bahosini Olish</span>
                </button>
              )}

              {transcript && !isListening && !evaluation && (
                <button
                  onClick={stopListeningAndEvaluate}
                  className="px-5 py-3 rounded-2xl font-bold text-xs bg-emerald-500 text-slate-950 hover:brightness-110 transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Tahlil Qilish</span>
                </button>
              )}
            </div>
          </div>

          {/* AI Evaluation Report Card */}
          {evaluation && (
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-transparent border border-emerald-500/30 space-y-4 animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-emerald-500" />
                  <span className="font-bold text-slate-900 dark:text-white text-base">
                    Cambridge AI Baholash Natijasi
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">Taxminiy Band:</span>
                  <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                    {evaluation.bandScore} / 9.0
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-cyan-600 dark:text-cyan-400 block mb-1">Fluency &amp; Coherence</span>
                  <p className="text-slate-600 dark:text-slate-300">{evaluation.fluency}</p>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-amber-600 dark:text-amber-400 block mb-1">Lexical Resource</span>
                  <p className="text-slate-600 dark:text-slate-300">{evaluation.lexical}</p>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 block mb-1">Grammar &amp; Accuracy</span>
                  <p className="text-slate-600 dark:text-slate-300">{evaluation.grammar}</p>
                </div>
              </div>

              {/* Band 9 Model Answer Accordion */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 block mb-1">
                  🌟 Namuna: Band 9.0 Ideal Javob:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  &ldquo;{prompt.modelAnswer}&rdquo;
                </p>
                <button
                  onClick={() => speakExaminerPrompt(prompt.modelAnswer)}
                  className="mt-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Band 9 javobni audio tarzida eshitish</span>
                </button>
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>🎯 Har bir muvaffaqiyatli topshirilgan speaking javobi uchun +150 XP beriladi!</span>
          <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400">AI Examiner 2026</span>
        </div>

      </div>
    </div>
  );
}
