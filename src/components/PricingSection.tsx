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
} from 'lucide-react';
import { sound } from '@/lib/sound';
import { useGamification } from '@/lib/xp-store';
import confetti from 'canvas-confetti';

export default function PricingSection() {
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [period, setPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const { xp, activePlan, claimPlanWithXP } = useGamification();

  const handleClaimXP = (planId: 'plus' | 'pro' | 'premium', cost: number, planName: string) => {
    sound.playClick();
    const ok = claimPlanWithXP(planId, cost);
    if (!ok) {
      alert(`Kechirasiz, ${planName} tarifini faollashtirish uchun sizda yetarli XP mavjud emas.\n\nKerakli: ${cost.toLocaleString()} XP\nSizdagi ball: ${xp.toLocaleString()} XP\n\nKunlik rejalarni bajarib (Yengil: +200, O'rtacha: +350, Intensiv: +450 XP) energiya to'plang!`);
    } else {
      alert(`Tabriklaymiz! ${planName} tarifi ${cost.toLocaleString()} XP ga muvaffaqiyatli faollashtirildi! 🎉`);
    }
  };

  const studentPlans = [
    {
      id: 'free' as const,
      name: 'Bepul',
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
        { text: '5 daqiqa/kun Native Shadowing trenajyori', ok: true },
        { text: 'Desmos grafik kalkulyatori & formulalar', ok: true },
        { text: 'Asosiy akademik lug\'at (CEFR B1-B2)', ok: true },
        { text: 'Cheksiz barcha Bluebook testlari', ok: false },
        { text: 'Cheksiz Neural Audio Shadowing (UK/US/AU)', ok: false },
        { text: 'YU AI 2026 24/7 Shaxsiy Murabbiy', ok: false },
        { text: 'Xalqaro grantlar & Sertifikat', ok: false },
      ],
    },
    {
      id: 'plus' as const,
      name: 'Plus',
      badge: '⚡ Tezkor O\'sish',
      tagline: 'Muntazam tayyorlanuvchi iqtidorli abituriyentlar uchun',
      priceUSD: period === 'monthly' ? 3 : 36,
      priceUZS: period === 'monthly' ? "38 000 so'm/oy" : "456 000 so'm/yil",
      periodLabel: period === 'monthly' ? '/oy' : '/yil',
      subText: period === 'monthly' ? "Oylik to'lov" : "Yillik $36 to'lanadi",
      featured: false,
      isVip: false,
      xpPrice: 7000,
      features: [
        { text: 'Barcha 50+ rasmiy SAT & IELTS testlari', ok: true },
        { text: '1,850+ to\'liq savollar bazasi va filtrlari', ok: true },
        { text: '15 daqiqa/kun Native Shadowing trenajyori', ok: true },
        { text: 'Qadamma-qadam rasmiy ilmiy yechimlar', ok: true },
        { text: 'Xatolar ustida ishlash & natijalar tarixi', ok: true },
        { text: 'Reklamasiz, chalg\'ituvchilarsiz toza interfeys', ok: true },
        { text: 'Desmos 10 soniyalik tezkor algoritmlari', ok: true },
        { text: 'YU AI 2026 24/7 Shaxsiy Murabbiy', ok: false },
        { text: 'Ivy League & Xalqaro grantlar yo\'riqnomasi', ok: false },
      ],
    },
    {
      id: 'pro' as const,
      name: 'Pro',
      badge: '⭐ TAVSIYA ETILGAN • ENG OMMABOP',
      tagline: '1500+ SAT va 8.5 IELTS natijasini maqsad qilganlar uchun',
      priceUSD: period === 'monthly' ? 7 : 84,
      priceUZS: period === 'monthly' ? "89 000 so'm/oy" : "1 068 000 so'm/yil",
      periodLabel: period === 'monthly' ? '/oy' : '/yil',
      subText: period === 'monthly' ? "Oylik to'lov" : "Yillik $84 to'lanadi",
      featured: true,
      isVip: false,
      xpPrice: 11000,
      features: [
        { text: 'Barcha Plus imkoniyatlari', ok: true },
        { text: 'Cheksiz rasmiy Bluebook & CD-IELTS simulyatsiyasi', ok: true },
        { text: 'Cheksiz 180+ Neural Audio Shadowing (UK/US/AU)', ok: true },
        { text: 'Desmos chuqur integratsiyasi va fokus rejim', ok: true },
        { text: 'AI xatolar tahlili va zaif mavzular diagnostikasi', ok: true },
        { text: 'Shaxsiy kunlik maqsad, streak va mukofotlar', ok: true },
        { text: 'Real imtihon ball bashorati (Score Predictor)', ok: true },
        { text: 'Jonli YU Live Arena & barcha mini-trenajyorlar', ok: true },
        { text: 'YU AI 2026 24/7 Shaxsiy Murabbiy', ok: false },
      ],
    },
    {
      id: 'premium' as const,
      name: 'Premium',
      badge: '👑 CHEKSIZ VIP',
      tagline: 'Maksimal ball, xalqaro grantlar va shaxsiy mentorlik',
      priceUSD: period === 'monthly' ? 9 : 108,
      priceUZS: period === 'monthly' ? "115 000 so'm/oy" : "1 380 000 so'm/yil",
      periodLabel: period === 'monthly' ? '/oy' : '/yil',
      subText: period === 'monthly' ? "Oylik to'lov" : "Yillik $108 to'lanadi",
      featured: false,
      isVip: true,
      xpPrice: 15000,
      features: [
        { text: 'Barcha Pro imkoniyatlari 100% cheksiz', ok: true },
        { text: 'YU AI 2026 Shaxsiy Murabbiy (24/7 cheksiz savol-javob)', ok: true },
        { text: 'SAT & IELTS Writing insholarini rasmiy baholash', ok: true },
        { text: 'Ivy League & Top-100 Universitetlar grant qo\'llanmasi', ok: true },
        { text: 'Barcha materiallarni PDF va oflayn yuklab olish', ok: true },
        { text: '24/7 Shaxsiy VIP mentor yordami (Telegram orqali)', ok: true },
        { text: 'Kursni muvaffaqiyatli tugatgach Xalqaro Sertifikat', ok: true },
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
      subText: period === 'monthly' ? "Oylik to'lov" : "Yillik $60 to'lanadi",
      featured: false,
      isVip: false,
      xpPrice: null,
      features: [
        { text: '15 nafargacha o\'quvchi qo\'shish imkoniyati', ok: true },
        { text: 'O\'quvchilar mock test natijalari tahlili', ok: true },
        { text: 'Avtomatik uyga vazifalar va test tuzish', ok: true },
        { text: '1,850+ savollar bankidan test generatsiyasi', ok: true },
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
      subText: period === 'monthly' ? "Oylik to'lov" : "Yillik $228 to'lanadi",
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
    <section id="yu-pricing-section" className="w-full py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/5 to-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-4 h-4" /> Shaffof & Professional Tariflar (2026 Standart)
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Maqsadli Natijangizga Mos Tarifni Tanlang
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Pul to&apos;lash orqali yoki platformada vazifalarni bajarib <span className="text-cyan-600 dark:text-cyan-400 font-bold">XP energiya</span> to&apos;plab obuna bo&apos;ling!
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
              <span>Abituriyent & Talaba</span>
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
              <span>Ustoz & O&apos;quv Markaz</span>
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
              Yillik to&apos;lov (O&apos;z narxida)
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
                    ? 'bg-gradient-to-b from-white via-cyan-50/50 to-cyan-100/30 dark:from-slate-900 dark:via-slate-900 dark:to-cyan-950/40 border-2 border-cyan-500 dark:border-cyan-400 shadow-2xl shadow-cyan-500/20 scale-[1.02]'
                    : plan.isVip
                    ? 'bg-gradient-to-b from-white via-purple-50/50 to-purple-100/30 dark:from-slate-900 dark:via-slate-900 dark:to-purple-950/40 border-2 border-purple-500 shadow-2xl shadow-purple-500/20'
                    : 'bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-md shadow-slate-200/40 dark:shadow-none'
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

                  {/* Price Box with EXACT Baseline Alignment */}
                  <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80">
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

                  <div className="w-full h-px bg-slate-200 dark:bg-slate-800/80 mb-6" />

                  {/* Feature List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className={`flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug ${
                          feat.ok ? 'text-slate-200' : 'text-slate-600 line-through opacity-70'
                        }`}
                      >
                        {feat.ok ? (
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        ) : (
                          <XIcon className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                        )}
                        <span>{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions: Cash CTA & XP CTA */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                  
                  {/* Primary Cash Button */}
                  <Link
                    href="/tests"
                    onClick={() => sound.playClick()}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                      plan.featured
                        ? 'bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25'
                        : plan.isVip
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:brightness-110 shadow-lg shadow-purple-500/25'
                        : 'bg-slate-800 text-white hover:bg-slate-700'
                    }`}
                  >
                    <span>{plan.id === 'free' ? 'Doimiy Bepul Kirish' : `${plan.name} Tarifini Tanlash`}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* XP Claim Button (If applicable) */}
                  {plan.xpPrice !== null && (
                    <button
                      onClick={() => handleClaimXP(plan.id, plan.xpPrice!, plan.name)}
                      className="w-full py-2.5 px-3 rounded-xl font-bold text-xs bg-slate-900 border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{plan.xpPrice.toLocaleString()} XP Bilan Faollashtirish</span>
                    </button>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
