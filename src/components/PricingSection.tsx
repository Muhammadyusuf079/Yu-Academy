'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Sparkles, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { sound } from '@/lib/sound';

export default function PricingSection() {
  const tiers = [
    {
      name: 'Starter (Bepul)',
      price: "0 so'm",
      period: 'Cheksiz ochiq',
      desc: "Digital SAT va IELTS bilan tanishish uchun to'liq bepul kirish paketi.",
      popular: false,
      features: [
        'Rasmiy SAT Math Module 1 sinov testi',
        'IELTS Academic Reading 1-passage',
        'O\'rnatilgan Desmos grafik kalkulyatori',
        '1,850+ savollar bankidan qidiruv',
        '5,000+ akademik lug\'at bazasi',
      ],
      cta: 'Bepul Boshlash',
      href: '/tests',
    },
    {
      name: 'Pro (1500+ & 8.5)',
      price: "289,000 so'm",
      period: 'oyiga',
      desc: 'Top universitetlar va 100% grantga da\'vogarlar uchun to\'liq professional tayyorgarlik.',
      popular: true,
      features: [
        'Barcha 44 ta SAT Math & 54 ta RW modullari',
        'To\'liq CD-IELTS 4 ta bosqichli simulyator',
        'Adaptive Hard Module 2 (750+ ball kafolati)',
        'Speaking AI intonatsiya va Shadowing trenajyori',
        'Qadamma-qadam ilmiy yechimlar va video tahlil',
        '24/7 AI repetitor konsultatsiyasi',
      ],
      cta: 'Pro Rejimga O\'tish',
      href: '/tests',
    },
    {
      name: 'VIP Mentorlik',
      price: "790,000 so'm",
      period: 'oyiga',
      desc: 'SAT 1550+ va IELTS 8.5 olgan shaxsiy mentor bilan 1-ga-1 haftalik darslar.',
      popular: false,
      features: [
        'Pro paketning barcha imtiyozlari',
        'Haftada 2 marta shaxsiy 1-ga-1 tahlil sessiyalari',
        'College Essay va Common App arizasini tahrirlash',
        'AQSH Full-Ride grantlariga 100% hujjat tayyorlash',
        'Shaxsiy strategik o\'quv jadvali',
      ],
      cta: 'Mentor Tanlash',
      href: '/tests',
    },
  ];

  return (
    <section className="w-full py-20 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <Zap className="w-4 h-4" /> Shaffof Narxlar
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Maqsadli Ballingiz Uchun Qulay Tariflar
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Hech qanday yashirin to&apos;lovlarsiz. Istalgan vaqtda to&apos;xtatishingiz yoki tarifni yangilashingiz mumkin.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-cyan-950/30 border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20 scale-[1.02]'
                  : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-sky-400 text-slate-950 text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Eng Ommabop
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-xs text-slate-400 mb-6 min-h-[36px]">{tier.desc}</p>

                <div className="flex items-baseline gap-1.5 mb-6">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                    {tier.price}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">/{tier.period}</span>
                </div>

                <div className="w-full h-px bg-slate-800 mb-6" />

                <ul className="space-y-3.5 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href={tier.href}
                  onClick={() => sound.playClick()}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-sky-300 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
