'use client';

import React from 'react';
import Link from 'next/link';
import {
  Flame,
  Zap,
  CheckCircle2,
  Lock,
  Crown,
  Sparkles,
  ArrowRight,
  X,
  Target,
  Trophy,
} from 'lucide-react';
import { useGamification } from '@/lib/xp-store';
import { sound } from '@/lib/sound';

interface StreakModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPricing?: () => void;
}

export default function StreakModal({ isOpen, onClose, onOpenPricing }: StreakModalProps) {
  const { xp, streak, activePlan, completedToday, completeDailyTask, claimPlanWithXP } = useGamification();

  if (!isOpen) return null;

  const handleClaim = (planId: 'plus' | 'pro' | 'premium', cost: number) => {
    sound.playClick();
    const success = claimPlanWithXP(planId, cost);
    if (!success) {
      alert(`Kechirasiz, sizda ushbu tarif uchun yetarli XP mavjud emas. Kerakli: ${cost.toLocaleString()} XP, sizda: ${xp.toLocaleString()} XP. Kunlik vazifalarni bajarib XP to'plang!`);
    } else {
      alert(`Tabriklaymiz! Siz ${planId.toUpperCase()} tarifini muvaffaqiyatli ${cost.toLocaleString()} XP ga faollashtirdingiz! 🎉`);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Stats */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-4 h-4" /> YU Gamifikatsiya & Mukofotlar Markazi
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Faol O&apos;qish Seriyasi & Ballaringiz
          </h2>
        </div>

        {/* Big Cards: Streak + XP */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-slate-900 border border-amber-500/30 text-center relative overflow-hidden">
            <Flame className="w-8 h-8 text-amber-400 mx-auto mb-2 animate-bounce" />
            <span className="text-3xl sm:text-4xl font-black text-white font-mono block">
              {streak} Kun
            </span>
            <span className="text-xs text-amber-300 font-medium">Uzluksiz Streak</span>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-sky-500/5 to-slate-900 border border-cyan-500/30 text-center relative overflow-hidden">
            <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <span className="text-3xl sm:text-4xl font-black text-white font-mono block">
              {xp.toLocaleString()} XP
            </span>
            <span className="text-xs text-cyan-300 font-medium">Jamg&apos;arilgan Energiya</span>
          </div>
        </div>

        {/* Current Active Plan Badge */}
        <div className="mb-6 p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Crown className="w-5 h-5 text-amber-400" />
            <div>
              <span className="text-xs text-slate-400 block">Joriy Tarfingiz:</span>
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                {activePlan === 'free' ? 'Bepul Boshlang\'ich' : `${activePlan.toUpperCase()} Tarifi`}
              </span>
            </div>
          </div>
          {onOpenPricing && (
            <button
              onClick={() => {
                sound.playClick();
                onClose();
                onOpenPricing();
              }}
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 underline"
            >
              Tariflarni ko&apos;rish →
            </button>
          )}
        </div>

        {/* Daily Goals Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
              <Target className="w-4 h-4 text-cyan-400" />
              Kunlik Rejalar & XP Ishlash:
            </h3>
            <span className="text-xs text-slate-400">Har kuni yangilanadi</span>
          </div>

          <div className="space-y-3">
            {/* Light Plan */}
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/80 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-sm font-bold text-white">Yengil Reja (15 daqiqa)</span>
                </div>
                <p className="text-xs text-slate-400">5 ta test savoli yoki 10 ta yangi akademik so&apos;z yodlash</p>
              </div>
              <button
                onClick={() => completeDailyTask('light')}
                disabled={completedToday.light}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 ${
                  completedToday.light
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-default'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20'
                }`}
              >
                {completedToday.light ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" /> Bajarildi
                  </>
                ) : (
                  '+200 XP Olish'
                )}
              </button>
            </div>

            {/* Medium Plan */}
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/80 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="text-sm font-bold text-white">O&apos;rtacha Reja (30 daqiqa)</span>
                </div>
                <p className="text-xs text-slate-400">1 ta to&apos;liq SAT Math moduli yoki IELTS Reading matni</p>
              </div>
              <button
                onClick={() => completeDailyTask('medium')}
                disabled={completedToday.medium}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 ${
                  completedToday.medium
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30 cursor-default'
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                }`}
              >
                {completedToday.medium ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" /> Bajarildi
                  </>
                ) : (
                  '+350 XP Olish'
                )}
              </button>
            </div>

            {/* Hard / Intensive Plan */}
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/80 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                  <span className="text-sm font-bold text-white">Intensiv Reja (45 daqiqa)</span>
                </div>
                <p className="text-xs text-slate-400">54 talik Mock Testni yakunlash va xatolar tahlili</p>
              </div>
              <button
                onClick={() => completeDailyTask('hard')}
                disabled={completedToday.hard}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 ${
                  completedToday.hard
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30 cursor-default'
                    : 'bg-purple-500 hover:bg-purple-400 text-slate-950 shadow-md shadow-purple-500/20'
                }`}
              >
                {completedToday.hard ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" /> Bajarildi
                  </>
                ) : (
                  '+450 XP Olish'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Spend XP on Tariffs Section */}
        <div className="pt-6 border-t border-slate-800">
          <h3 className="text-sm font-extrabold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Tariflarni XP Orqali Faollashtirish:
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            Pul to&apos;lamasdan, platformada dars qilib to&apos;plagan XP ballaringiz bilan tariflarni ochishingiz mumkin:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Plus */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-cyan-400 block">Plus Tarifi</span>
                <span className="text-lg font-black text-white font-mono my-1 block">7,000 XP</span>
                <p className="text-[11px] text-slate-400 mb-3">50+ testlar va xatolar ustida ishlash</p>
              </div>
              <button
                onClick={() => handleClaim('plus', 7000)}
                disabled={xp < 7000 || activePlan === 'plus'}
                className="w-full py-2 rounded-lg text-xs font-bold bg-cyan-400 text-slate-950 hover:bg-cyan-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {activePlan === 'plus' ? 'Faol' : '7,000 XP ga Olish'}
              </button>
            </div>

            {/* Pro */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-cyan-500/40 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 text-[9px] font-extrabold px-2 py-0.5 rounded-bl">
                Tavsiya
              </div>
              <div>
                <span className="text-xs font-bold text-sky-400 block">Pro Tarifi</span>
                <span className="text-lg font-black text-white font-mono my-1 block">11,000 XP</span>
                <p className="text-[11px] text-slate-400 mb-3">Cheksiz Bluebook va AI xatolar tahlili</p>
              </div>
              <button
                onClick={() => handleClaim('pro', 11000)}
                disabled={xp < 11000 || activePlan === 'pro'}
                className="w-full py-2 rounded-lg text-xs font-bold bg-sky-400 text-slate-950 hover:bg-sky-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {activePlan === 'pro' ? 'Faol' : '11,000 XP ga Olish'}
              </button>
            </div>

            {/* Premium */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-purple-500/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-purple-400 block">Premium VIP</span>
                <span className="text-lg font-black text-white font-mono my-1 block">15,000 XP</span>
                <p className="text-[11px] text-slate-400 mb-3">24/7 AI murabbiy va xalqaro sertifikat</p>
              </div>
              <button
                onClick={() => handleClaim('premium', 15000)}
                disabled={xp < 15000 || activePlan === 'premium'}
                className="w-full py-2 rounded-lg text-xs font-bold bg-purple-400 text-slate-950 hover:bg-purple-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                {activePlan === 'premium' ? 'Faol' : '15,000 XP ga Olish'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
