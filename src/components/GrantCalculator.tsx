'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Award,
  Sparkles,
  Globe,
  Building2,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  TrendingUp,
  Zap,
  BookOpen,
  MapPin,
  ShieldCheck,
  Star,
  Layers,
  ChevronRight,
  Sliders,
} from 'lucide-react';
import { sound } from '@/lib/sound';
import confetti from 'canvas-confetti';

interface UniversityScholarship {
  id: string;
  name: string;
  location: string;
  country: string;
  flag: string;
  region: 'us' | 'asia' | 'uk' | 'europe';
  regionLabel: string;
  minSat: number;
  minIelts: number;
  acceptanceRate: string;
  grantType: string;
  grantCoverage: '100% Full-Ride' | 'Full Tuition' | 'Merit Grant';
  grantAmountPerYear: string;
  fourYearTotal: string;
  features: string[];
  popularMajors: string[];
  ranking: string;
  badgeColor: string;
}

const UNIVERSITIES_DATABASE: UniversityScholarship[] = [
  {
    id: 'harvard',
    name: 'Harvard University',
    location: 'Cambridge, Massachusetts',
    country: 'AQSH',
    flag: '🇺🇸',
    region: 'us',
    regionLabel: 'AQSH (Ivy League)',
    minSat: 1520,
    minIelts: 8.0,
    acceptanceRate: '3.4%',
    grantType: '100% Need-Blind Full-Ride Grant',
    grantCoverage: '100% Full-Ride',
    grantAmountPerYear: '$85,000 / yil',
    fourYearTotal: '$340,000',
    ranking: 'World #1 (Ivy League)',
    badgeColor: 'from-rose-500 to-red-600',
    features: [
      'Kontrakt va yotoqxona 100% bepul',
      'Xalqaro talabalar uchun Need-Blind to\'liq ta\'minot',
      'Yillik oziq-ovqat va shaxsiy xarajatlar qoplanadi',
    ],
    popularMajors: ['Computer Science', 'Economics', 'Applied Mathematics', 'Pre-Med'],
  },
  {
    id: 'nyu-ad',
    name: 'NYU Abu Dhabi',
    location: 'Saadiyat Island, Abu-Dabi',
    country: 'BAA / AQSH',
    flag: '🇦🇪',
    region: 'asia',
    regionLabel: 'Yaqin Sharq & Osiyo',
    minSat: 1470,
    minIelts: 7.5,
    acceptanceRate: '4.0%',
    grantType: '100% Falcon Scholarship + Stipendiya',
    grantCoverage: '100% Full-Ride',
    grantAmountPerYear: '$82,000 / yil',
    fourYearTotal: '$328,000',
    ranking: 'Top Tier Global',
    badgeColor: 'from-purple-500 to-indigo-600',
    features: [
      '100% Kontrakt + 5-yulduzli kampus yotoqxonasi',
      'Oylik ~$800 stipendiya + tibbiy sug\'urta',
      'Yiliga 2 marta bepul aviachipta (Toshkent-Dubay)',
    ],
    popularMajors: ['Computer Engineering', 'Data Science', 'Economics & Finance', 'Social Research'],
  },
  {
    id: 'mit',
    name: 'MIT - Massachusetts Institute of Technology',
    location: 'Cambridge, Massachusetts',
    country: 'AQSH',
    flag: '🇺🇸',
    region: 'us',
    regionLabel: 'AQSH (Top STEM)',
    minSat: 1540,
    minIelts: 8.0,
    acceptanceRate: '3.9%',
    grantType: 'Full Need-Met Global Grant',
    grantCoverage: '100% Full-Ride',
    grantAmountPerYear: '$86,000 / yil',
    fourYearTotal: '$344,000',
    ranking: 'QS World #1 STEM',
    badgeColor: 'from-cyan-500 to-blue-600',
    features: [
      'Dunyoning #1 texnologik va muhandislik OTMi',
      '100% bepul ta\'lim, laboratoriya va turar joy',
      'UROP ilmiy tadqiqot dasturi orqali alohida maosh',
    ],
    popularMajors: ['Artificial Intelligence', 'Robotics & CS', 'Quantum Physics', 'Aerospace'],
  },
  {
    id: 'kaist',
    name: 'KAIST (Korea Advanced Institute of Science & Tech)',
    location: 'Daejeon',
    country: 'Janubiy Koreya',
    flag: '🇰🇷',
    region: 'asia',
    regionLabel: 'Osiyo Texnologiya',
    minSat: 1420,
    minIelts: 7.0,
    acceptanceRate: '14.5%',
    grantType: 'KAIST International Presidential Grant',
    grantCoverage: '100% Full-Ride',
    grantAmountPerYear: '$42,000 / yil',
    fourYearTotal: '$168,000',
    ranking: 'Asia #1 Tech',
    badgeColor: 'from-sky-500 to-teal-600',
    features: [
      '100% Davlat granti (kontrakt to\'liq qoplanadi)',
      'Oylik 350,000 KRW stipendiya beriladi',
      'Barcha darslar 100% ingliz tilida olib boriladi',
    ],
    popularMajors: ['Computer Science', 'Mechanical Engineering', 'BioTechnology', 'Semiconductors'],
  },
  {
    id: 'oxbridge',
    name: 'University of Oxford & Cambridge',
    location: 'Oksford & Kembrij',
    country: 'Buyuk Britaniya',
    flag: '🇬🇧',
    region: 'uk',
    regionLabel: 'Buyuk Britaniya',
    minSat: 1510,
    minIelts: 7.5,
    acceptanceRate: '14.0%',
    grantType: 'Rhodes & Cambridge Trust Scholarship',
    grantCoverage: 'Full Tuition',
    grantAmountPerYear: '£48,000 / yil',
    fourYearTotal: '£192,000',
    ranking: 'World Top 3',
    badgeColor: 'from-amber-500 to-yellow-600',
    features: [
      'Xalqaro e\'tirof etilgan kollegial ta\'lim tizimi',
      'Dunyoning eng nufuzli ilmiy laboratoriyalari',
      'Buyuk Britaniyaning eng yuqori ilmiy stipendiyalari',
    ],
    popularMajors: ['PPE (Politics & Economics)', 'Mathematics & CS', 'Law', 'Medicine'],
  },
  {
    id: 'nus',
    name: 'NUS - National University of Singapore',
    location: 'Kent Ridge',
    country: 'Singapur',
    flag: '🇸🇬',
    region: 'asia',
    regionLabel: 'Osiyo N1',
    minSat: 1490,
    minIelts: 7.5,
    acceptanceRate: '5.2%',
    grantType: 'ASEAN & Singapore Science Scholarship',
    grantCoverage: '100% Full-Ride',
    grantAmountPerYear: '$52,000 / yil',
    fourYearTotal: '$208,000',
    ranking: 'Asia #1 (QS #8)',
    badgeColor: 'from-emerald-500 to-green-600',
    features: [
      '100% Kontrakt to\'lovi va yashash subsidiyasi',
      'Yillik S$6,500 qo\'shimcha yashash xarajatlari',
      'Silikon vodiysi va Singapur IT gigantlarida amaliyot',
    ],
    popularMajors: ['Information Systems', 'Business Analytics', 'Finance & FinTech', 'AI Systems'],
  },
  {
    id: 'constructor',
    name: 'Constructor University (Jacobs Bremen)',
    location: 'Bremen',
    country: 'Germaniya',
    flag: '🇩🇪',
    region: 'europe',
    regionLabel: 'Yevropa',
    minSat: 1360,
    minIelts: 7.0,
    acceptanceRate: '32.0%',
    grantType: 'Academic Merit & Tuition Waiver',
    grantCoverage: 'Merit Grant',
    grantAmountPerYear: '€30,000 / yil',
    fourYearTotal: '€120,000',
    ranking: 'Germany Top Private',
    badgeColor: 'from-teal-500 to-cyan-600',
    features: [
      'SAT balliga ko\'ra avtomatik beriladigan merit grant',
      'Kampus ichida xalqaro yotoqxona va ovqatlanish',
      'Yevropa Ittifoqida 18 oylik erkin ishlash vizasi',
    ],
    popularMajors: ['Computer Science', 'Software Engineering', 'Biochemistry', 'Industrial Engineering'],
  },
  {
    id: 'dartmouth',
    name: 'Dartmouth College & Vanderbilt',
    location: 'Hanover, NH & Nashville, TN',
    country: 'AQSH',
    flag: '🇺🇸',
    region: 'us',
    regionLabel: 'AQSH (Ivy League & Top 15)',
    minSat: 1480,
    minIelts: 7.5,
    acceptanceRate: '6.2%',
    grantType: '100% Need-Blind Full Tuition Grant',
    grantCoverage: '100% Full-Ride',
    grantAmountPerYear: '$84,000 / yil',
    fourYearTotal: '$336,000',
    ranking: 'Ivy League Elite',
    badgeColor: 'from-blue-600 to-indigo-700',
    features: [
      'Kichik guruhlarda professor bilan yakkama-yakka ta\'lim',
      '100% Kontrakt, turar joy va kitoblar qoplanadi',
      'Wall Street va Silikon vodiysiga to\'g\'ridan-to\'g\'ri yo\'llanma',
    ],
    popularMajors: ['Economics', 'Computer Science', 'Government', 'Engineering Physics'],
  },
];

export default function GrantCalculator() {
  const [satScore, setSatScore] = useState<number>(1480);
  const [ieltsScore, setIeltsScore] = useState<number>(7.5);
  const [gpaScore, setGpaScore] = useState<number>(4.8);
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'us' | 'asia' | 'uk' | 'europe'>('all');

  // Dynamic Admission & Full-Ride Chance Calculation
  const chanceData = useMemo(() => {
    let score = 0;
    // SAT weight: 0 - 55
    score += Math.max(0, ((satScore - 1200) / 400) * 55);
    // IELTS weight: 0 - 30
    score += Math.max(0, ((ieltsScore - 6.0) / 3.0) * 30);
    // GPA weight: 0 - 15
    score += Math.max(0, ((gpaScore - 3.5) / 1.5) * 15);

    const calculatedPercent = Math.min(97, Math.max(22, Math.round(score)));
    const estimatedYearlyGrant = Math.round((satScore / 1600) * 85000);
    const estimatedFourYearGrant = estimatedYearlyGrant * 4;

    let tierLabel = 'Raqobatbardosh Shans';
    let tierBadgeClass = 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30';
    if (calculatedPercent >= 90) {
      tierLabel = '100% Full-Ride Grant Ehtimoli Yuqori';
      tierBadgeClass = 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
    } else if (calculatedPercent >= 75) {
      tierLabel = 'Kuchli Xalqaro Grant Imkoniyati';
      tierBadgeClass = 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30';
    }

    return {
      percentage: calculatedPercent,
      yearlyGrant: estimatedYearlyGrant,
      fourYearGrant: estimatedFourYearGrant,
      tierLabel,
      tierBadgeClass,
    };
  }, [satScore, ieltsScore, gpaScore]);

  // Filtered Universities based on Region Tab
  const filteredUniversities = useMemo(() => {
    if (selectedRegion === 'all') return UNIVERSITIES_DATABASE;
    return UNIVERSITIES_DATABASE.filter((u) => u.region === selectedRegion);
  }, [selectedRegion]);

  const handleCelebrate = () => {
    sound.playSuccess();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {}
  };

  return (
    <section id="grant-calculator" className="w-full py-16 sm:py-24 bg-slate-50/80 dark:bg-slate-900/40 relative overflow-hidden transition-colors border-y border-slate-200/80 dark:border-slate-800/80">
      
      {/* Ambient background glowing circles */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-bold border border-cyan-500/30 mb-4 animate-in fade-in">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Xalqaro Qabul &amp; 100% Full-Ride Grantlar Ekotizimi 2026</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Xalqaro Universitetlar Smart Qabul Kompasi
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed max-w-2xl mx-auto">
            Digital SAT va IELTS ko&apos;rsatkichlaringiz bo&apos;yicha dunyoning eng nufuzli universitetlariga 
            100% bepul ta&apos;lim, yotoqxona va oylik stipendiya yutish imkoniyatingizni real-vaqtda tekshiring.
          </p>
        </div>

        {/* ================= 1. LIVE AI ADMISSION & GRANT BAROMETER ================= */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-black/40 mb-14 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Touch Score Pickers */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-cyan-500" />
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                    Ko&apos;rsatkichlaringizni Sozlang:
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-semibold hidden sm:inline">
                  Avtomatik real-vaqtda hisoblanadi
                </span>
              </div>

              {/* 1. Digital SAT Selector */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-cyan-500" />
                    <span>Digital SAT Balli:</span>
                  </label>
                  <span className="text-sm sm:text-base font-black text-cyan-600 dark:text-cyan-400 font-mono bg-cyan-50 dark:bg-cyan-500/10 px-3 py-1 rounded-xl border border-cyan-500/30">
                    {satScore} / 1600
                  </span>
                </div>

                {/* Preset Chips */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { score: 1350, label: '1350 (Yaxshi)' },
                    { score: 1450, label: '1450 (Top 5%)' },
                    { score: 1520, label: '1520 (Top 1%)' },
                    { score: 1570, label: '1570 (Ivy League)' },
                  ].map((preset) => (
                    <button
                      key={preset.score}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setSatScore(preset.score);
                      }}
                      className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border text-center ${
                        satScore === preset.score
                          ? 'bg-cyan-500 text-slate-950 font-black border-cyan-400 shadow-md shadow-cyan-500/20'
                          : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-cyan-500/50'
                      }`}
                    >
                      <span className="block font-mono font-bold text-xs sm:text-sm">{preset.score}</span>
                      <span className="text-[10px] opacity-75 hidden sm:block truncate">{preset.label.split(' ')[1]}</span>
                    </button>
                  ))}
                </div>

                {/* Range Slider for fine tuning */}
                <input
                  type="range"
                  min="1100"
                  max="1600"
                  step="10"
                  value={satScore}
                  onChange={(e) => {
                    setSatScore(Number(e.target.value));
                    sound.playClick();
                  }}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              {/* 2. IELTS Overall Band Selector */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-sky-500" />
                    <span>IELTS Overall Band:</span>
                  </label>
                  <span className="text-sm sm:text-base font-black text-sky-600 dark:text-sky-400 font-mono bg-sky-50 dark:bg-sky-500/10 px-3 py-1 rounded-xl border border-sky-500/30">
                    Band {ieltsScore.toFixed(1)} / 9.0
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {[
                    { score: 7.0, label: 'Band 7.0' },
                    { score: 7.5, label: 'Band 7.5' },
                    { score: 8.0, label: 'Band 8.0' },
                    { score: 8.5, label: 'Band 8.5+' },
                  ].map((preset) => (
                    <button
                      key={preset.score}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setIeltsScore(preset.score);
                      }}
                      className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border text-center ${
                        ieltsScore === preset.score
                          ? 'bg-sky-500 text-white font-black border-sky-400 shadow-md shadow-sky-500/20'
                          : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-sky-500/50'
                      }`}
                    >
                      <span className="block font-mono font-bold text-xs sm:text-sm">{preset.label}</span>
                    </button>
                  ))}
                </div>

                <input
                  type="range"
                  min="6.0"
                  max="9.0"
                  step="0.5"
                  value={ieltsScore}
                  onChange={(e) => {
                    setIeltsScore(Number(e.target.value));
                    sound.playClick();
                  }}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>

              {/* 3. GPA & Academic Standing Selector */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-emerald-500" />
                    <span>Maktab / Litsey GPA (Attestat):</span>
                  </label>
                  <span className="text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400 font-mono bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-xl border border-emerald-500/30">
                    {gpaScore.toFixed(1)} / 5.0
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { gpa: 4.5, label: '4.5 (Yaxshi)' },
                    { gpa: 4.8, label: '4.8 (A\'lo)' },
                    { gpa: 5.0, label: '5.0 (Medalchi)' },
                  ].map((preset) => (
                    <button
                      key={preset.gpa}
                      type="button"
                      onClick={() => {
                        sound.playClick();
                        setGpaScore(preset.gpa);
                      }}
                      className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border text-center ${
                        gpaScore === preset.gpa
                          ? 'bg-emerald-500 text-slate-950 font-black border-emerald-400 shadow-md shadow-emerald-500/20'
                          : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-500/50'
                      }`}
                    >
                      <span className="font-mono">{preset.label}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Live Animated Radial Barometer Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-cyan-500/10 via-sky-500/5 to-purple-500/10 dark:from-cyan-950/40 dark:via-slate-900 dark:to-purple-950/30 border border-cyan-500/30 dark:border-cyan-800/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    Qabul va Grant Ehtimoli:
                  </span>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${chanceData.tierBadgeClass}`}>
                    {chanceData.tierLabel}
                  </span>
                </div>

                {/* Big Animated Percentage Display */}
                <div className="flex items-center gap-5">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="stroke-slate-200 dark:stroke-slate-800"
                        strokeWidth="10"
                        fill="transparent"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        className="stroke-cyan-500 dark:stroke-cyan-400 transition-all duration-700 ease-out"
                        strokeWidth="10"
                        strokeDasharray={264}
                        strokeDashoffset={264 - (264 * chanceData.percentage) / 100}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl sm:text-3xl font-black font-mono text-slate-900 dark:text-white leading-none">
                        {chanceData.percentage}%
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">Shans</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase text-slate-400 block">Kutilayotgan Yillik Grant:</span>
                    <div className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-300 font-mono flex items-center">
                      <DollarSign className="w-6 h-6 text-cyan-500 shrink-0" />
                      <span>{chanceData.yearlyGrant.toLocaleString()} / yil</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block">
                      4 yilda jami: <b className="text-emerald-600 dark:text-emerald-400 font-mono">~${chanceData.fourYearGrant.toLocaleString()}</b> gacha
                    </span>
                  </div>
                </div>

                {/* Key Benefits pill list */}
                <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span><b>O&apos;qish to&apos;lovi:</b> 100% universitet tomonidan qoplanadi</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span><b>Turar joy:</b> Kampus yotoqxonasi bepul taqdim etiladi</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span><b>Stipendiya:</b> Oylik $400 - $800 gacha shaxsiy xarajatlar uchun</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <Link
                  href="/tests"
                  onClick={handleCelebrate}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Zap className="w-4 h-4" />
                  <span>Ushbu Universitetlar Uchun Test Topshirish</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <p className="text-[11px] text-slate-400 text-center font-medium">
                  🚀 5,250+ ta rasmiy Digital SAT va IELTS savollari orqali ballingizni oshiring
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ================= 2. TOP 100 GLOBAL UNIVERSITIES DIRECTORY ================= */}
        <div className="space-y-6">
          
          {/* Header & Region Switcher */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Globe className="w-6 h-6 text-cyan-500" />
                <span>Top Xalqaro Universitetlar va Grant Talablari</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Siz tanlagan ko&apos;rsatkichlar ({satScore} SAT • Band {ieltsScore}) asosida grantlar mosligi
              </p>
            </div>

            {/* Region Filter Pills (Mobile Horizontal Scrollable) */}
            <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-x-auto max-w-full pb-1 md:pb-1 scrollbar-none">
              {[
                { id: 'all', label: '🌐 Barchasi' },
                { id: 'us', label: '🇺🇸 AQSH & Ivy League' },
                { id: 'asia', label: '🇦🇪 & 🇰🇷 Osiyo (NYU AD, KAIST)' },
                { id: 'uk', label: '🇬🇧 Buyuk Britaniya' },
                { id: 'europe', label: '🇩🇪 Yevropa (Constructor)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setSelectedRegion(tab.id as any);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedRegion === tab.id
                      ? 'bg-cyan-500 text-slate-950 font-black shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredUniversities.map((uni) => {
              const isSatEligible = satScore >= uni.minSat;
              const isIeltsEligible = ieltsScore >= uni.minIelts;
              const isFullyQualified = isSatEligible && isIeltsEligible;

              return (
                <div
                  key={uni.id}
                  className={`rounded-3xl p-5 sm:p-6 bg-white dark:bg-slate-900 border transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 relative group ${
                    isFullyQualified
                      ? 'border-emerald-500/60 shadow-lg shadow-emerald-500/5'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  {/* Top Status & Badge */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl" role="img" aria-label={uni.country}>
                        {uni.flag}
                      </span>
                      <span className="text-[10px] font-black uppercase font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {uni.ranking}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-black text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors leading-snug">
                        {uni.name}
                      </h4>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="truncate">{uni.location}</span>
                      </p>
                    </div>

                    {/* Scholarship Type Highlight */}
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-800 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block">
                        Grant Qoplami:
                      </span>
                      <span className="text-xs font-black text-slate-900 dark:text-white block">
                        {uni.grantType}
                      </span>
                      <div className="flex items-center justify-between pt-1 text-[11px] font-mono">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">{uni.grantAmountPerYear}</span>
                        <span className="text-slate-400 font-semibold">{uni.acceptanceRate} qabul</span>
                      </div>
                    </div>

                    {/* Requirements vs User Score */}
                    <div className="space-y-1.5 text-xs pt-1">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 dark:text-slate-400">Kerakli SAT:</span>
                        <span className={`font-mono font-bold ${isSatEligible ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'}`}>
                          {uni.minSat}+ {isSatEligible ? '✓' : `(-${uni.minSat - satScore})`}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 dark:text-slate-400">Kerakli IELTS:</span>
                        <span className={`font-mono font-bold ${isIeltsEligible ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'}`}>
                          Band {uni.minIelts}+ {isIeltsEligible ? '✓' : ''}
                        </span>
                      </div>
                    </div>

                    {/* Popular Majors Chips */}
                    <div className="pt-1">
                      <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Ommabop Yo&apos;nalishlar:</span>
                      <div className="flex flex-wrap gap-1">
                        {uni.popularMajors.slice(0, 3).map((major, mIdx) => (
                          <span
                            key={mIdx}
                            className="text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-md"
                          >
                            {major}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Qualification Tag & Action */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-4">
                    {isFullyQualified ? (
                      <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-between mb-2">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>100% Mos Keldi!</span>
                        </span>
                        <span className="text-[10px] font-mono">Full-Ride</span>
                      </div>
                    ) : (
                      <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-semibold flex items-center justify-between mb-2">
                        <span>Ballni oshirish kerak</span>
                        <span className="font-mono text-[10px] text-cyan-600">Mock Test</span>
                      </div>
                    )}

                    <Link
                      href="/tests"
                      onClick={() => sound.playClick()}
                      className="w-full py-2 px-3 rounded-xl text-xs font-bold text-center bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-cyan-500 hover:text-slate-950 dark:hover:bg-cyan-500 dark:hover:text-slate-950 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Tayyorgarlik Testi</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
