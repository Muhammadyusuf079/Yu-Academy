'use client';

import React, { useState } from 'react';
import { Calculator, Award, GraduationCap, DollarSign, ArrowRight } from 'lucide-react';
import { sound } from '@/lib/sound';

export default function GrantCalculator() {
  const [satScore, setSatScore] = useState<number>(1480);
  const [ieltsScore, setIeltsScore] = useState<number>(7.5);
  const [gpa, setGpa] = useState<number>(4.8);

  // Prediction calculation logic
  const calculateChances = () => {
    let score = 0;
    // SAT weight (0 - 50)
    score += Math.max(0, ((satScore - 1200) / 400) * 50);
    // IELTS weight (0 - 30)
    score += Math.max(0, ((ieltsScore - 6.0) / 3.0) * 30);
    // GPA weight (0 - 20)
    score += Math.max(0, ((gpa - 3.5) / 1.5) * 20);

    const fullRideChance = Math.min(96, Math.max(15, Math.round(score)));
    const estimatedGrant = Math.round((satScore / 1600) * 80000);

    return {
      chance: fullRideChance,
      grantAmount: estimatedGrant,
      targetUniversities:
        satScore >= 1520 && ieltsScore >= 8.0
          ? ['Harvard', 'MIT', 'Stanford', 'NYU Abu Dhabi (100% Full-Ride)']
          : satScore >= 1450 && ieltsScore >= 7.5
          ? ['Dartmouth', 'Vanderbilt', 'KAIST (Janubiy Koreya)', 'Jacobs Bremen']
          : ['University of Arizona', 'Drexel', 'DePauw (50K/yil)', 'USF'],
    };
  };

  const results = calculateChances();

  return (
    <section id="grant-calculator" className="w-full py-16 bg-slate-900/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <GraduationCap className="w-4 h-4" /> AQSH & Xorijiy Grantlar
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Xalqaro Universitetlar Grant Kalkulyatori
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            SAT va IELTS ko&apos;rsatkichlaringizni kiriting va 100% gacha bo&apos;lgan Full-Ride grant ehtimolini hisoblang.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Inputs Section */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            
            {/* SAT Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-200">Digital SAT Balli</label>
                <span className="text-base font-extrabold text-cyan-400 font-mono bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/30">
                  {satScore} / 1600
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="1600"
                step="10"
                value={satScore}
                onChange={(e) => {
                  setSatScore(Number(e.target.value));
                  sound.playClick();
                }}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>1000</span>
                <span>1350</span>
                <span>1500 (Top 1%)</span>
                <span>1600</span>
              </div>
            </div>

            {/* IELTS Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-200">IELTS Overall Band</label>
                <span className="text-base font-extrabold text-sky-400 font-mono bg-sky-500/10 px-3 py-1 rounded-lg border border-sky-500/30">
                  {ieltsScore.toFixed(1)} / 9.0
                </span>
              </div>
              <input
                type="range"
                min="5.5"
                max="9.0"
                step="0.5"
                value={ieltsScore}
                onChange={(e) => {
                  setIeltsScore(Number(e.target.value));
                  sound.playClick();
                }}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>5.5</span>
                <span>6.5</span>
                <span>7.5</span>
                <span>8.5+</span>
              </div>
            </div>

            {/* GPA Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-200">Maktab Attestat / Litsey GPA</label>
                <span className="text-base font-extrabold text-emerald-400 font-mono bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/30">
                  {gpa.toFixed(1)} / 5.0
                </span>
              </div>
              <input
                type="range"
                min="3.5"
                max="5.0"
                step="0.1"
                value={gpa}
                onChange={(e) => {
                  setGpa(Number(e.target.value));
                  sound.playClick();
                }}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>
          </div>

          {/* Results Output Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-cyan-950/60 via-slate-900 to-slate-950 border border-cyan-800/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                  Kutilayotgan Grant Ehtimoli:
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                    {results.chance}%
                  </span>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    Yuqori Imkoniyat
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Yillik O&apos;rtacha Grant Miqdori:
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono flex items-center gap-1">
                  <DollarSign className="w-6 h-6 text-cyan-400" />
                  <span>{results.grantAmount.toLocaleString()}/yil</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">4 yilda jami ~$320,000 gacha</p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Tavsiya qilinadigan universitetlar:
                </span>
                <ul className="space-y-1.5 text-xs font-semibold text-slate-200">
                  {results.targetUniversities.map((uni, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{uni}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="/tests"
                onClick={() => sound.playClick()}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 to-sky-300 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all"
              >
                <span>Ballni oshirish uchun test topshirish</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
