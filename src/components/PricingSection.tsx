'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  X as XIcon,
  Sparkles,
  Zap,
  Crown,
  ShieldCheck,
  ArrowRight,
  Flame,
  Award,
  Users,
  CreditCard,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { sound } from '@/lib/sound';
import { useGamification } from '@/lib/xp-store';
import { useAuth } from '@/lib/auth-store';
import AuthModal from '@/components/AuthModal';
import confetti from 'canvas-confetti';

export default function PricingSection() {
  const { user } = useAuth();
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authReason, setAuthReason] = useState<string | null>(null);
  const [checkoutModalPlan, setCheckoutModalPlan] = useState<any | null>(null);
  const [activatedSuccessPlan, setActivatedSuccessPlan] = useState<string | null>(null);

  const { xp, activePlan, claimPlanWithXP, activatePlanDirectly } = useGamification();

  const handleSelectPlan = (plan: any) => {
    sound.playClick();
    if (!user) {
      setAuthReason(`"${plan.name}" tarifini tanlash va faollashtirish uchun avval tizimda ro'yxatdan o'ting yoki profilingizga kiring.`);
      setAuthModalOpen(true);
      return;
    }

    if (plan.id === 'free') {
      activatePlanDirectly('free');
      setActivatedSuccessPlan("Doimiy Bepul Boshlang'ich");
      return;
    }

    setCheckoutModalPlan(plan);
  };

  const handleConfirmActivation = (planId: 'free' | 'plus' | 'pro' | 'premium', planName: string) => {
    sound.playSuccess();
    activatePlanDirectly(planId);
    setCheckoutModalPlan(null);
    setActivatedSuccessPlan(planName);
    try {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.55 } });
    } catch {}
  };

  const handleClaimXP = (planId: 'plus' | 'pro' | 'premium', cost: number, planName: string) => {
    sound.playClick();
    if (!user) {
      setAuthReason(`XP bilan tarif faollashtirish uchun avval tizimga kiring.`);
      setAuthModalOpen(true);
      return;
    }

    const ok = claimPlanWithXP(planId, cost);
    if (!ok) {
      alert(`Kechirasiz, ${planName} tarifini faollashtirish uchun sizda yetarli XP mavjud emas.\n\nKerakli: ${cost.toLocaleString()} XP\nSizdagi ball: ${xp.toLocaleString()} XP\n\nKunlik rejalarni bajarib energiya to'plang!`);
    } else {
      setActivatedSuccessPlan(`${planName} (${cost.toLocaleString()} XP bilan)`);
    }
  };

  const studentPlans = [
    {
      id: 'free' as const,
      name: 'Bepul Boshlang\'ich',
      badge: '🌿 Boshlang\'ich',
      tagline: 'Platformani to\'liq bepul sinab ko\'rish uchun',
      priceUSD: 0,
      priceUZS: "0 so'm",
      periodLabel: period === 'monthly' ? '/oy' : '/yil',
      subText: 'Doimiy Bepul kirish',
      featured: false,
      isVip: false,
      xpPrice: null,
      features: [
        { text: '5 ta rasmiy SAT & IELTS mock test', ok: true },
        { text: 'Kunlik challenge va saralangan savollar', ok: true },
        { text: 'Oflayn Desmos grafik kalkulyatori', ok: true },
        { text: 'Asosiy akademik lug\'at (CEFR B1-B2)', ok: true },
        { text: 'Cheksiz barcha Bluebook testlari', ok: false },
        { text: 'Cheksiz Neural Audio Shadowing (UK/US)', ok: false },
        { text: 'YU AI 2026 24/7 Shaxsiy Murabbiy', ok: false },
        { text: 'Xalqaro grantlar & Sertifikat', ok: false },
      ],
    },
    {
      id: 'plus' as const,
      name: 'Plus Plan',
      badge: '⚡ Tezkor O\'sish',
      tagline: 'Muntazam tayyorlanuvchi iqtidorli abituriyentlar uchun',
      priceUSD: period === 'monthly' ? 3 : 36,
      priceUZS: period === 'monthly' ? "38 000 so'm/oy" : "456 000 so'm/yil",
      periodLabel: period === 'monthly' ? '/oy' : '/yil',
      subText: period === 'monthly' ? "Oylik to'lov" : "Yillik to'lov",
      featured: false,
      isVip: false,
      xpPrice: 7000,
      features: [
        { text: 'Barcha 5,000+ rasmiy SAT & IELTS testlari', ok: true },
        { text: 'Qadamma-qadam rasmiy ilmiy yechimlar', ok: true },
        { text: 'Native Audio Shadowing (Erkak va ayol ovozlari)', ok: true },
        { text: 'Xatolar ustida ishlash & natijalar tarixi', ok: true },
        { text: 'Desmos 10 soniyalik tezkor algoritmlari', ok: true },
        { text: 'Reklamasiz toza professional interfeys', ok: true },
        { text: 'YU AI 2026 24/7 Shaxsiy Murabbiy', ok: false },
        { text: 'Ivy League & Xalqaro grantlar yo\'riqnomasi', ok: false },
      ],
    },
    {
      id: 'pro' as const,
      name: 'Pro Tavsiya',
      badge: '⭐ TAVSIYA ETILGAN',
      tagline: '1500+ SAT va 8.5 IELTS natijasini maqsad qilganlar uchun',
      priceUSD: period === 'monthly' ? 7 : 84,
      priceUZS: period === 'monthly' ? "89 000 so'm/oy" : "1 068 000 so'm/yil",
      periodLabel: period === 'monthly' ? '/oy' : '/yil',
      subText: period === 'monthly' ? "Oylik to'lov" : "Yillik to'lov",
      featured: true,
      isVip: false,
      xpPrice: 11000,
      features: [
        { text: 'Barcha Plus imkoniyatlari to\'liq ochiq', ok: true },
        { text: 'Cheksiz Bluebook & CD-IELTS simulyatsiyasi', ok: true },
        { text: 'AI Voice Speaking Partner bilan jonli mikrofonda muloqot', ok: true },
        { text: 'IELTS Gamification & O\'yinlar arenasi', ok: true },
        { text: 'AI xatolar tahlili va zaif mavzular diagnostikasi', ok: true },
        { text: 'Real imtihon ball bashorati (Score Predictor)', ok: true },
        { text: 'Desmos chuqur integratsiyasi va fokus rejim', ok: true },
        { text: 'Kurs yakunida rasmiy QR-kodli diplom', ok: true },
      ],
    },
    {
      id: 'premium' as const,
      name: 'Premium VIP',
      badge: '👑 CHEKSIZ VIP',
      tagline: 'Maksimal ball, xalqaro grantlar va shaxsiy mentorlik',
      priceUSD: period === 'monthly' ? 9 : 108,
      priceUZS: period === 'monthly' ? "115 000 so'm/oy" : "1 380 000 so'm/yil",
      periodLabel: period === 'monthly' ? '/oy' : '/yil',
      subText: period === 'monthly' ? "Oylik to'lov" : "Yillik to'lov",
      featured: false,
      isVip: true,
      xpPrice: 15000,
      features: [
        { text: 'Barcha Pro imkoniyatlari 100% cheksiz', ok: true },
        { text: 'YU AI 2026 Shaxsiy Murabbiy (24/7 cheksiz)', ok: true },
        { text: 'SAT & IELTS Writing insholarini rasmiy baholash', ok: true },
        { text: 'Ivy League & Top-100 Universitetlar grant qo\'llanmasi', ok: true },
        { text: 'Barcha materiallarni PDF tarzida yuklab olish', ok: true },
        { text: '24/7 Shaxsiy VIP mentor yordami', ok: true },
        { text: 'Rasmiy Fil suyagi fonidagi muhrli diplom', ok: true },
        { text: 'Yangi 2026 Bluebook yangilanishlariga 1-bo\'lib kirish', ok: true },
      ],
    },
  ];

  const teacherPlans = [
    {
      id: 'teacher_starter',
      name: 'Ustoz Boshlang\'ich',
      badge: '👨‍🏫 Individual Ustoz',
      tagline: 'Yakka tartibda repetitorlik qiluvchi o\'qituvchilar uchun',
      priceUSD: period === 'monthly' ? 5 : 60,
      priceUZS: period === 'monthly' ? "64 000 so'm/oy" : "768 000 so'm/yil",
      periodLabel: period === 'monthly' ? '/oy' : '/yil',
      subText: period === 'monthly' ? "Oylik to'lov" : "Yillik to'lov",
      featured: false,
      isVip: false,
      xpPrice: null,
      features: [
        { text: '15 nafargacha o\'quvchi qo\'shish imkoniyati', ok: true },
        { text: 'Ustoz Test Studiyasida mualliflik savollari tuzish', ok: true },
        { text: 'O\'quvchilar mock test natijalari tahlili', ok: true },
        { text: '5,000+ savollar bankidan test generatsiyasi', ok: true },
        { text: 'Barcha Bluebook & IELTS simulyatorlari', ok: true },
      ],
    },
    {
      id: 'teacher_pro',
      name: 'O\'quv Markaz Pro',
      badge: '🏫 O\'quv Markazlar Uchun',
      tagline: 'Katta guruhlar va o\'quv markazlar filiali uchun',
      priceUSD: period === 'monthly' ? 19 : 228,
      priceUZS: period === 'monthly' ? "245 000 so'm/oy" : "2 940 000 so'm/yil",
      periodLabel: period === 'monthly' ? '/oy' : '/yil',
      subText: period === 'monthly' ? "Oylik to'lov" : "Yillik to'lov",
      featured: true,
      isVip: false,
      xpPrice: null,
      features: [
        { text: 'Cheksiz guruhlar va 100+ o\'quvchilar', ok: true },
        { text: 'O\'quv markaz brendi (White-Label) logotipi', ok: true },
        { text: 'Oylik diagnostic mock imtihon o\'tkazish', ok: true },
        { text: 'Xalqaro sertifikatlarni markaz nomidan berish', ok: true },
        { text: '24/7 Priority texnik va metodik yordam', ok: true },
      ],
    },
  ];

  return (
    <section id="yu-pricing-section" className="w-full py-20 bg-slate-100/50 dark:bg-slate-950 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-4 h-4" /> Shaffof &amp; Professional Tariflar (2026 Standart)
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Maqsadli Natijangizga Mos Tarifni Tanlang
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Pul to&apos;lash orqali yoki platformada topshiriqlarni bajarib <span className="text-cyan-600 dark:text-cyan-400 font-bold">XP energiya</span> bilan obunani faollashtiring!
          </p>
        </div>

        {/* Dual Control Switchers (Role & Period) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          
          {/* Role Switcher */}
          <div className="p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center">
            <button
              onClick={() => { sound.playClick(); setRole('student'); }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                role === 'student'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Abituriyent &amp; Talaba</span>
            </button>
            <button
              onClick={() => { sound.playClick(); setRole('teacher'); }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                role === 'teacher'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Ustoz &amp; O&apos;quv Markaz</span>
            </button>
          </div>

          {/* Period Switcher */}
          <div className="p-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center">
            <button
              onClick={() => { sound.playClick(); setPeriod('monthly'); }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                period === 'monthly'
                  ? 'bg-slate-800 text-white dark:bg-slate-800 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Oylik to&apos;lov
            </button>
            <button
              onClick={() => { sound.playClick(); setPeriod('yearly'); }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                period === 'yearly'
                  ? 'bg-slate-800 text-white dark:bg-slate-800 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Yillik to&apos;lov (-20%)
            </button>
          </div>

        </div>

        {/* Pricing Cards Grid */}
        <div className={`grid grid-cols-1 ${role === 'student' ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 max-w-4xl mx-auto'} gap-6 items-stretch`}>
          
          {(role === 'student' ? studentPlans : teacherPlans).map((plan) => {
            const isCurrent = activePlan === plan.id;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  plan.featured
                    ? 'bg-white dark:bg-slate-900 border-2 border-cyan-500 shadow-xl shadow-cyan-500/10 scale-[1.02]'
                    : plan.isVip
                    ? 'bg-white dark:bg-slate-900 border-2 border-purple-500 shadow-xl shadow-purple-500/10'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Popular / VIP Badge */}
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-sky-300 text-slate-950 text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    ★ Tavsiya Etilgan
                  </div>
                )}
                {plan.isVip && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                    👑 Cheksiz VIP
                  </div>
                )}

                <div>
                  {/* Badge & Title */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">{plan.badge}</span>
                    {isCurrent && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                        Joriy Tarif
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 min-h-[34px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price Box */}
                  <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-baseline justify-start gap-1">
                      <span className="text-4xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                        ${plan.priceUSD}
                      </span>
                      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 font-sans">
                        {plan.periodLabel}
                      </span>
                    </div>

                    <div className="mt-2 text-xs font-bold text-cyan-600 dark:text-cyan-400">
                      {plan.priceUZS}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {plan.subText}
                    </div>
                  </div>

                  <div className="w-full h-px bg-slate-200 dark:border-slate-800 mb-6" />

                  {/* Feature List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className={`flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug ${
                          feat.ok
                            ? 'text-slate-800 dark:text-slate-200 font-medium'
                            : 'text-slate-400 dark:text-slate-600 line-through opacity-70'
                        }`}
                      >
                        {feat.ok ? (
                          <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        ) : (
                          <XIcon className="w-4 h-4 text-slate-400 dark:text-slate-600 shrink-0 mt-0.5" />
                        )}
                        <span>{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isCurrent
                        ? 'bg-emerald-600 text-white shadow-md'
                        : plan.featured
                        ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25 hover:scale-[1.02]'
                        : plan.isVip
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:brightness-110 shadow-lg shadow-purple-500/25 hover:scale-[1.02]'
                        : 'bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span>
                      {isCurrent
                        ? '✓ Sizda faol tarif'
                        : plan.id === 'free'
                        ? 'Doimiy Bepul Kirish'
                        : `${plan.name} Tarifini Tanlash`}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* XP Claim Button */}
                  {plan.xpPrice !== null && (
                    <button
                      onClick={() => handleClaimXP(plan.id, plan.xpPrice!, plan.name)}
                      className="w-full py-2.5 px-3 rounded-xl font-bold text-xs bg-slate-50 dark:bg-slate-900 border border-amber-500/40 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{plan.xpPrice.toLocaleString()} XP Bilan Faollashtirish</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}

        </div>

      </div>

      {/* Checkout & Plan Activation Modal */}
      {checkoutModalPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-white space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black">{checkoutModalPlan.name} Tarifini Faollashtirish</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">YU Academy 2026 Xavfsiz To&apos;lov &amp; Ekotizim</p>
                </div>
              </div>
              <button
                onClick={() => setCheckoutModalPlan(null)}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Plan Info Summary */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Foydalanuvchi:</span>
                <span className="font-bold text-slate-900 dark:text-white">{user?.name} ({user?.email})</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 dark:text-slate-400 font-medium">Tanlangan muddat:</span>
                <span className="font-bold text-slate-900 dark:text-white">{period === 'monthly' ? '1 Oylik obuna' : '1 Yillik obuna (-20%)'}</span>
              </div>
              <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-200 dark:border-slate-700">
                <span className="font-bold text-slate-700 dark:text-slate-300">To&apos;lov summasi:</span>
                <span className="text-lg font-black text-cyan-600 dark:text-cyan-400">{checkoutModalPlan.priceUZS} (${checkoutModalPlan.priceUSD})</span>
              </div>
            </div>

            {/* Activation Options */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
                Qulay to&apos;lov yoki test usulini tanlang:
              </span>

              {/* Instant 1-Click Demo Activation */}
              <button
                onClick={() => handleConfirmActivation(checkoutModalPlan.id, checkoutModalPlan.name)}
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-black text-sm flex items-center justify-between shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Zap className="w-5 h-5 fill-slate-950" />
                  <span>1-Sekundda Darhol Faollashtirish (Sinov)</span>
                </div>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Online Payment Providers */}
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => handleConfirmActivation(checkoutModalPlan.id, checkoutModalPlan.name)}
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 text-left transition-all flex items-center gap-2.5 cursor-pointer bg-white dark:bg-slate-800"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-xs font-bold">Payme / Click</span>
                </button>
                <button
                  onClick={() => handleConfirmActivation(checkoutModalPlan.id, checkoutModalPlan.name)}
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 text-left transition-all flex items-center gap-2.5 cursor-pointer bg-white dark:bg-slate-800"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shrink-0" />
                  <span className="text-xs font-bold">Uzcard / Humo / Visa</span>
                </button>
              </div>
            </div>

            <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
              🔒 256-bit SSL xavfsizlik protokoli bilan himoyalangan. Barcha huquqlar kafolatlangan.
            </p>
          </div>
        </div>
      )}

      {/* Activated Success Modal */}
      {activatedSuccessPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">
              Tarif Muvaffaqiyatli Faollashtirildi! 🎉
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Sizning <b>{activatedSuccessPlan}</b> obunangiz to&apos;liq yoqildi. Barcha cheklovsiz imkoniyatlar siz uchun ochiq!
            </p>
            <div className="pt-2">
              <button
                onClick={() => setActivatedSuccessPlan(null)}
                className="w-full py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs hover:bg-slate-800 transition-all cursor-pointer"
              >
                Ajoyib, tushunarli!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal Trigger when user is not logged in */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultTab="register"
        defaultRole={role}
      />
    </section>
  );
}
