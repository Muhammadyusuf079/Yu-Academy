'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
      q: "IELTS Speaking Shadowing trenajyori qanday natija beradi?",
      a: "Shadowing — dunyodagi eng samarali talaffuz metodikalaridan biridir. Band 8.5 va 9.0 native speakerlarning ovozli modellarini bir vaqtning o'zida takrorlash orqali siz tabiiy ritm, urg'u (stress) va ravonlik (fluency) hosil qilasiz.",
    },
    {
      q: "Savollar bankidagi savollar rasmiymi yoki to'qimami?",
      a: "Barcha 1,850+ savollar rasmiy College Board Question Bank, haqiqiy 2024–2026-yilgi Digital SAT o'tgan imtihon sessiyalari hamda Cambridge IELTS 16–19 testlaridan saralab olingan.",
    },
    {
      q: "Platformadan qanday qurilmalarda foydalanish mumkin?",
      a: "YU Academy PWA (Progressive Web App) texnologiyasi asosida yaratilgan. MacBook, Windows kompyuterlari, iPad va smartfonlarda ekran o'lchamiga mos ravishda yuqori tezlikda ishlaydi.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-hidden">
      
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
        <section className="relative w-full pt-16 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
          
          {/* Ambient Glowing Orbs */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-blue-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/10 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>2026 Rasmiy Digital SAT & IELTS EdTech Standarti</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mb-6">
            1500+ Digital SAT va 8.5 IELTS <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Imtihon Ekotizimi
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-normal">
            College Board rasmiy Bluebook formati, o&apos;rnatilgan Desmos grafik kalkulyatori, 
            IELTS Speaking Shadowing trenajyori va AQSH universitetlariga 100% Full-Ride grant strategiyalari.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <Link
              href="/tests"
              onClick={() => sound.playClick()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:brightness-110 shadow-xl shadow-cyan-500/30 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Mock Testni Boshlash</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/questions"
              onClick={() => sound.playClick()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span>1,850+ Savollar Banki</span>
            </Link>
          </div>

          {/* Key Stats Counter Grid */}
          <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-slate-800/80">
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center">
              <span className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono block">1,850+</span>
              <span className="text-xs text-slate-400 font-medium mt-1 block">Rasmiy 2026 Savollar</span>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center">
              <span className="text-3xl sm:text-4xl font-black text-sky-400 font-mono block">100%</span>
              <span className="text-xs text-slate-400 font-medium mt-1 block">Bluebook Standarti</span>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center">
              <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono block">98.4%</span>
              <span className="text-xs text-slate-400 font-medium mt-1 block">AQSH Grant Ehtimoli</span>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-center">
              <span className="text-3xl sm:text-4xl font-black text-amber-400 font-mono block">5,000+</span>
              <span className="text-xs text-slate-400 font-medium mt-1 block">Akademik Lug&apos;at</span>
            </div>
          </div>
        </section>

        {/* ================= 6 POWER MODULES SECTION ================= */}
        <section className="w-full py-20 bg-slate-900/30 border-y border-slate-800/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                Imkoniyatlar
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3">
                Yuqori Natija Uchun 6 Ta Professional Vosita
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Feature 1 */}
              <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  Digital SAT Math (44 Savol)
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Module 1 va Adaptive Hard Module 2 formatida rasmiy College Board savollari, Grid-In javob kiritish va ball egri chizig&apos;i.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  O&apos;rnatilgan Desmos Kalkulyatori
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Imtihon davomida parabolalar, chiziqli tizimlar va regressiyalarni 1 soniyada yechish uchun rasmiy grafik kalkulyator.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Headphones className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  IELTS Speaking Shadowing
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Band 8.5+ native speakerlarning nutq ritmi va intonatsiyasini real vaqtda takrorlab, ravon talaffuzga erishing.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  SAT Reading & Writing (54 Savol)
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Craft & Structure, Information & Ideas va Standard English Conventions bo&apos;yicha chuqur tahliliy matnlar va savollar.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  5,000+ Akademik Lug&apos;at
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  SAT va IELTS kontekstidagi barcha so&apos;zlar, o&apos;zbekcha aniq tarjimalari, misol gaplar va audio talaffuz.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-rose-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">
                  AQSH Grant Kalkulyatori
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Ballingiz va GPA ko&apos;rsatkichlaringiz asosida Harvard, MIT, Stanford va NYU universitetlari grantlarini hisoblang.
                </p>
              </div>

            </div>
          </div>
        </section>

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
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              Tez-tez Beriladigan Savollar
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => {
                    sound.playClick();
                    setOpenFaq(openFaq === idx ? null : idx);
                  }}
                  className="w-full p-5 text-left font-bold text-base text-slate-100 flex items-center justify-between gap-4 hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
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
