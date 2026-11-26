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
import { sound } from '@/lib/sound';

export default function HomePage() {
  const [dictOpen, setDictOpen] = useState(false);
  const [desmosOpen, setDesmosOpen] = useState(false);
  const [formulaOpen, setFormulaOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "YU Academy platformasi College Board 2026 Bluebook imtihoniga qanchalik mos keladi?",
      a: "Platformamiz 100% rasmiy 2026-yilgi Digital SAT Bluebook standartlariga moslashtirilgan: Math (44 ta savol = Module 1: 22 + Module 2 Adaptive: 22) va Reading/Writing (54 ta savol = Module 1: 27 + Module 2: 27). Shuningdek, College Board ruxsat bergan to'liq Desmos grafik kalkulyatori va formulalar varaqasi o'rnatilgan.",
    },
    {
      q: "IELTS 4 ta ko'nikmasi (Listening, Reading, Writing, Speaking) qanday o'rgatiladi?",
      a: "Platformada Cambridge IELTS 16–19 standartidagi 40 talik Listening va Reading to'liq simulyatsiyasi, Speaking uchun Band 8.5+ audio Shadowing Studio hamda Writing Task 1 & 2 uchun Band 9 rasmiy andozalari joylashtirilgan.",
    },
    {
      q: "IELTS Speaking Shadowing trenajyori qanday natija beradi?",
      a: "Shadowing — dunyodagi eng samarali talaffuz metodikalaridan biridir. Band 8.5 va 9.0 native speakerlarning ovozli modellarini bir vaqtning o'zida takrorlash orqali siz tabiiy ritm, urg'u (stress) va ravonlik (fluency) hosil qilasiz.",
    },
    {
      q: "Savollar bankidagi savollar rasmiymi yoki to'qimami?",
      a: "Barcha 1,850+ savollar rasmiy College Board Question Bank, haqiqiy 2024–2026-yilgi Digital SAT o'tgan imtihon sessiyalari hamda Cambridge IELTS testlaridan saralab olingan va xatosiz qilib tekshirilgan.",
    },
    {
      q: "Platformada Light va Dark rejim bormi?",
      a: "Ha! Yuqori paneldagi Quyosh/Oy tugmasi orqali ko'zingizga qulay bo'lgan Tungi (Dark) yoki Yorug' (Light) rejimni tanlashingiz mumkin.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col relative overflow-hidden transition-colors duration-200">
      
      {/* Modals */}
      <DictionaryModal isOpen={dictOpen} onClose={() => setDictOpen(false)} />
      <DesmosModal isOpen={desmosOpen} onClose={() => setDesmosOpen(false)} />
      <FormulaSheetModal isOpen={formulaOpen} onClose={() => setFormulaOpen(false)} />

      {/* Navbar */}
      <Navbar
        onOpenDictionary={() => setDictOpen(true)}
        onOpenDesmos={() => setDesmosOpen(true)}
        onOpenFormula={() => setFormulaOpen(true)}
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
              Imtihon Ekotizimi
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed mb-10 font-normal">
            College Board rasmiy Bluebook formati, o&apos;rnatilgan Desmos grafik kalkulyatori, 
            IELTS Speaking Shadowing trenajyori va AQSH universitetlariga 100% Full-Ride grant strategiyalari.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <Link
              href="/tests"
              onClick={() => sound.playClick()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:brightness-110 shadow-xl shadow-cyan-500/25 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Award className="w-5 h-5 text-slate-950" />
              <span>SAT Bluebook Mock Test</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <button
              onClick={() => {
                sound.playClick();
                document.getElementById('ielts-hub-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
            >
              <Headphones className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
              <span>IELTS 4 Skills Hub</span>
            </button>

            <Link
              href="/questions"
              onClick={() => sound.playClick()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
            >
              <BookOpen className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
              <span>1,850+ Savollar Banki</span>
            </Link>
          </div>

          {/* Key Stats Counter Grid */}
          <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-200 dark:border-slate-800/80">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-center shadow-sm">
              <span className="text-3xl sm:text-4xl font-black text-cyan-600 dark:text-cyan-400 font-mono block">1,850+</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 block">Rasmiy 2026 Savollar</span>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-center shadow-sm">
              <span className="text-3xl sm:text-4xl font-black text-sky-600 dark:text-sky-400 font-mono block">100%</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 block">Bluebook &amp; Cambridge</span>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-center shadow-sm">
              <span className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 font-mono block">Band 8.5+</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 block">IELTS Audio Standarti</span>
            </div>
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-center shadow-sm">
              <span className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-400 font-mono block">CEFR C2</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 block">40,000+ Darajali Lug&apos;at</span>
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
                Yuqori Natija Uchun 6 Ta Professional Vosita
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
                  O&apos;rnatilgan Desmos Kalkulyatori
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Imtihon davomida parabolalar, chiziqli tizimlar va regressiyalarni 1 soniyada yechish uchun rasmiy grafik kalkulyator.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 shadow-md shadow-slate-200/40 dark:shadow-none transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Headphones className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-300 transition-colors">
                  IELTS Speaking Shadowing
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Band 8.5+ native speakerlarning nutq ritmi va intonatsiyasini real vaqtda takrorlab, ravon talaffuzga erishing.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 shadow-md shadow-slate-200/40 dark:shadow-none transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors">
                  SAT Reading &amp; Writing (54 Savol)
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Craft &amp; Structure, Information &amp; Ideas va Standard English Conventions bo&apos;yicha chuqur tahliliy matnlar va savollar.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 shadow-md shadow-slate-200/40 dark:shadow-none transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                  Darajali Akademik Lug&apos;at (CEFR &amp; SAT)
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  B1, B2, C1, C2 va IELTS Band 5.0–9.0 bo&apos;yicha ajratilgan so&apos;zlar, o&apos;zbekcha tarjimalari va interaktiv Flashcard trenajyori.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-rose-500/50 shadow-md shadow-slate-200/40 dark:shadow-none transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-rose-500 dark:group-hover:text-rose-300 transition-colors">
                  AQSH Grant Kalkulyatori
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Ballingiz va GPA ko&apos;rsatkichlaringiz asosida Harvard, MIT, Stanford va NYU universitetlari grantlarini hisoblang.
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
