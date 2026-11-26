'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Calculator,
  Headphones,
  Award,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Users,
  Target,
  Zap,
  Flame,
  Globe,
  PenTool,
  BrainCircuit,
  Gamepad2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DailyChallenge from '@/components/DailyChallenge';
import GrantCalculator from '@/components/GrantCalculator';
import ShadowingStudio from '@/components/ShadowingStudio';
import PricingSection from '@/components/PricingSection';
import DictionaryModal from '@/components/DictionaryModal';
import DesmosModal from '@/components/DesmosModal';
import FormulaSheetModal from '@/components/FormulaSheetModal';
import IeltsHubSection from '@/components/IeltsHubSection';
import AiSpeakingPartnerModal from '@/components/AiSpeakingPartnerModal';
import IeltsGameModal from '@/components/IeltsGameModal';
import { sound } from '@/lib/sound';

export default function HomePage() {
  const [dictOpen, setDictOpen] = useState(false);
  const [desmosOpen, setDesmosOpen] = useState(false);
  const [formulaOpen, setFormulaOpen] = useState(false);
  const [speakingAiOpen, setSpeakingAiOpen] = useState(false);
  const [ieltsGamesOpen, setIeltsGamesOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "YU Academy platformasi College Board 2026 Bluebook imtihoniga qanchalik mos keladi?",
      a: "Platformamiz 100% rasmiy 2026-yilgi Digital SAT Bluebook standartlariga moslashtirilgan: Math (44 ta savol = Module 1: 22 + Module 2 Adaptive: 22) va Reading/Writing (54 ta savol = Module 1: 27 + Module 2: 27). Shuningdek, College Board ruxsat bergan to'liq Desmos grafik kalkulyatori va formulalar varaqasi o'rnatilgan.",
    },
    {
      q: "AI Voice Speaking trenajyori odam bilan qanday gaplashadi?",
      a: "Brauzeringizdagi mikrofon orqali Web Speech Recognition va Speech Synthesis yordamida AI imtihon oluvchi (Cambridge Examiner) sizga real vaqtda Part 1, 2, 3 savollarini beradi, siz javob berganingizda talaffuz, ravonlik va leksik boyligingizni tahlil qilib, Band 9 ideal namunasini ko'rsatadi.",
    },
    {
      q: "Ustozlar va o'quvchilar uchun qanday imkoniyatlar mavjud?",
      a: "Platformada o'quvchilar test topshirib sertifikat va grant strategiyasini olishlari, ustozlar esa o'z hisoblariga kirib, 'Ustoz Test Studiyasi' orqali yangi SAT va IELTS savollarini qo'shishlari va savollar bankini boyitishlari mumkin.",
    },
    {
      q: "O'rnatilgan Desmos kalkulyatori internet sekin bo'lsa ham ishlaydimi?",
      a: "Ha! Platformamizda 100% sayt ichida ishlaydigan HTML5 Canvas grafik dvigateli o'rnatilgan bo'lib, u parabolalar, chiziqli tizimlar va ildizlarni hatto oflayn yoki cheklovli internetda ham uzluksiz chizib beradi.",
    },
    {
      q: "Sertifikatdagi imzolar va rasmiy verifikatsiya qanday ishlaydi?",
      a: "Har bir test yakunida unikal QR-kodli va seriya raqamli rasmiy 'Certificate of Achievement' beriladi. Diplom klassik fil suyagi fonida yuqori sifatli quyuq ko'k imzo siyohi bilan chop etiladi yoki PDF tarzida saqlanadi.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col relative overflow-hidden transition-colors duration-200">
      
      {/* Modals */}
      <DictionaryModal isOpen={dictOpen} onClose={() => setDictOpen(false)} />
      <DesmosModal isOpen={desmosOpen} onClose={() => setDesmosOpen(false)} />
      <FormulaSheetModal isOpen={formulaOpen} onClose={() => setFormulaOpen(false)} />
      <AiSpeakingPartnerModal isOpen={speakingAiOpen} onClose={() => setSpeakingAiOpen(false)} />
      <IeltsGameModal isOpen={ieltsGamesOpen} onClose={() => setIeltsGamesOpen(false)} />

      {/* Navbar */}
      <Navbar
        onOpenDictionary={() => setDictOpen(true)}
        onOpenDesmos={() => setDesmosOpen(true)}
        onOpenFormula={() => setFormulaOpen(true)}
        onOpenSpeakingAi={() => setSpeakingAiOpen(true)}
        onOpenIeltsGames={() => setIeltsGamesOpen(true)}
        onOpenPricing={() => document.getElementById('yu-pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
      />

      <main className="flex-1 flex flex-col items-center">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full pt-12 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
          
          {/* Ambient Glowing Orbs */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-blue-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />

          {/* Logo Badge in Hero */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-slate-900/90 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/10 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="w-5 h-5 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
              <Image
                src="/icons/icon.svg"
                alt="Logo"
                width={16}
                height={16}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
            <span>2026 Rasmiy Digital SAT &amp; IELTS 8.5+ EdTech Ekotizimi</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] max-w-5xl mb-6">
            1500+ Digital SAT va 8.5 IELTS <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 dark:from-cyan-400 dark:via-sky-300 dark:to-blue-500 bg-clip-text text-transparent">
              Professional Imtihon Ekotizimi
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-10 font-normal">
            College Board rasmiy Bluebook formati, o&apos;rnatilgan Desmos grafik kalkulyatori, 
            ovozli AI Speaking Partner, IELTS o&apos;yinlar arenasi va Ustozlar test studiyasi.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-16">
            <Link
              href="/tests"
              onClick={() => sound.playClick()}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl font-black text-sm sm:text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:brightness-110 shadow-xl shadow-cyan-500/25 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Award className="w-5 h-5 text-slate-950" />
              <span>SAT Bluebook Mock</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <button
              onClick={() => {
                sound.playClick();
                setSpeakingAiOpen(true);
              }}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl font-bold text-sm sm:text-base text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
            >
              <BrainCircuit className="w-5 h-5 text-cyan-500" />
              <span>AI Voice Speaking</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setIeltsGamesOpen(true);
              }}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl font-bold text-sm sm:text-base text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-500/30 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
            >
              <Gamepad2 className="w-5 h-5 text-amber-500" />
              <span>IELTS O&apos;yinlar</span>
            </button>

            <Link
              href="/questions"
              onClick={() => sound.playClick()}
              className="w-full sm:w-auto px-6 py-4 rounded-2xl font-bold text-sm sm:text-base text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
            >
              <BookOpen className="w-5 h-5 text-cyan-500" />
              <span>5,000+ Savollar</span>
            </Link>
          </div>

          {/* Key Stats Counter Grid */}
          <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-200 dark:border-slate-800/80">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-center shadow-sm">
              <span className="text-3xl sm:text-4xl font-black text-cyan-600 dark:text-cyan-400 font-mono block">5,000+</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 block">Rasmiy Savollar Banki</span>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-center shadow-sm">
              <span className="text-3xl sm:text-4xl font-black text-sky-600 dark:text-sky-400 font-mono block">100%</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 block">Saytda O&apos;rnatilgan Desmos</span>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-center shadow-sm">
              <span className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 font-mono block">AI Voice</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 block">Real-vaqtda Speaking Hamroh</span>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-center shadow-sm">
              <span className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-400 font-mono block">Ustoz Studio</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 block">Mualliflik Testlari</span>
            </div>
          </div>
        </section>

        {/* ================= 6 POWER MODULES SECTION ================= */}
        <section className="w-full py-20 bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/60 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                Imkoniyatlar
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mt-3">
                Yuqori Natija Uchun Professional Vositalar
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Feature 1 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 shadow-md shadow-slate-200/40 dark:shadow-none transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors">
                  Digital SAT Math (44 Savol)
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Module 1 va Adaptive Hard Module 2 formatida rasmiy College Board savollari, Grid-In javob kiritish va 200–800 ball shkalasi.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 shadow-md shadow-slate-200/40 dark:shadow-none transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-500 dark:group-hover:text-sky-300 transition-colors">
                  100% Saytda O&apos;rnatilgan Desmos
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Tashqi tarmoq uzilsa ham to&apos;g&apos;ridan-to&apos;g&apos;ri sayt ichida ishlaydigan HTML5 Canvas grafik kalkulyatori va rasmiy Desmos embed.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 shadow-md shadow-slate-200/40 dark:shadow-none transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-300 transition-colors">
                  AI Voice Speaking Partner
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Cambridge Examiner AI bilan mikrofonda jonli muloqot qiling, talaffuz va ravonligingiz uchun Band 9 tahlilini oling.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 shadow-md shadow-slate-200/40 dark:shadow-none transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                  IELTS Gamification &amp; O&apos;yinlar
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Word Match Blitz va Band 8.5 Collocation Hunt o&apos;yinlari orqali akademik lug&apos;atni tezkor o&apos;rganing va XP jamg&apos;aring.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 shadow-md shadow-slate-200/40 dark:shadow-none transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors">
                  5,000+ Savollar Banki
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Barcha SAT va IELTS modullarini qamrab olgan keng qamrovli savollar bazasi va ustozlar yaratgan mualliflik testlari.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-rose-500/50 shadow-md shadow-slate-200/40 dark:shadow-none transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-rose-500 dark:group-hover:text-rose-300 transition-colors">
                  Rasmiy Verifikatsiyali Sertifikat
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Fil suyagi fonida tiniq imzo bilan professional diplom oling, QR-kod orqali platforma reestridan tekshiring.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= IELTS 4 SKILLS HUB COMPONENT ================= */}
        <IeltsHubSection />

        {/* ================= DAILY CHALLENGE COMPONENT ================= */}
        <DailyChallenge />

        {/* ================= GRANT CALCULATOR COMPONENT ================= */}
        <GrantCalculator />

        {/* ================= SHADOWING STUDIO COMPONENT ================= */}
        <ShadowingStudio />

        {/* ================= PRICING SECTION ================= */}
        <PricingSection />

        {/* ================= FAQ SECTION (SEO BOOST) ================= */}
        <section className="w-full py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-3">
              Tez-tez Beriladigan Savollar
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => {
                    sound.playClick();
                    setOpenFaq(openFaq === idx ? null : idx);
                  }}
                  className="w-full p-5 text-left font-bold text-base text-slate-900 dark:text-slate-100 flex items-center justify-between gap-4 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180 text-cyan-500' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
