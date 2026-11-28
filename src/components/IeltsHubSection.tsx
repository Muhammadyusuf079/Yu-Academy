'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Headphones,
  BookOpen,
  PenTool,
  Mic,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Volume2,
  FileText,
} from 'lucide-react';
import { sound } from '@/lib/sound';

export default function IeltsHubSection() {
  const [activeTab, setActiveTab] = useState<'listening' | 'reading' | 'writing' | 'speaking'>('listening');

  const skillsData = {
    listening: {
      title: 'IELTS Listening (40 Savol)',
      time: '30 Daqiqa + 10 Daqiqa Transfer',
      desc: 'British Council va IDP xalqaro imtihon formatidagi 4 ta bo\'lim: kundalik suhbatlar, akademik dialoglar va ma\'ruzalar.',
      highlights: [
        'Section 1: Kundalik hayotiy suhbat (Form & Note Completion)',
        'Section 2: Umumiy mavzudagi monolog (Multiple Choice, Map/Plan Labelling)',
        'Section 3: Universitet muhitidagi akademik bahs (Matching, Classification)',
        'Section 4: Ilmiy ma\'ruza (Summary & Sentence Completion)',
      ],
      examRoute: '/tests',
      badge: 'Band 9.0 Audio Standard',
      color: 'from-emerald-500 to-teal-600',
      badgeColor: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    },
    reading: {
      title: 'IELTS Academic Reading (40 Savol)',
      time: '60 Daqiqa',
      desc: 'Cambridge 16–19 testlaridan saralangan 3 ta uzoq ilmiy maqola, True/False/Not Given va Heading Matching savollari.',
      highlights: [
        'Passage 1: Tasviriy va faktlarga asoslangan ilmiy matn (13 savol)',
        'Passage 2: Diskursiv va tahliliy tadqiqot matni (13 savol)',
        'Passage 3: Murakkab falsafiy va texnologik maqola (14 savol)',
        'Skimming & Scanning strategiyalari va tezkor kalit so\'z topish usullari',
      ],
      examRoute: '/tests',
      badge: 'Academic Cambridge Standard',
      color: 'from-sky-500 to-blue-600',
      badgeColor: 'bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/30',
    },
    writing: {
      title: 'IELTS Writing Task 1 & Task 2',
      time: '60 Daqiqa',
      desc: 'Grafik va diagrammalar tavsifi (Task 1) hamda 250+ so\'zlik akademik insho (Task 2) uchun Band 9 andozalari.',
      highlights: [
        'Task 1 (150 so\'z): Line graph, Bar chart, Pie chart, Table, Process, Map',
        'Task 2 (250 so\'z): Opinion, Discussion, Problem-Solution, Direct Questions',
        '4 ta baholash mezoni: Task Response, Coherence & Cohesion, Lexical Resource, Grammatical Accuracy',
        'Band 9.0 andozalari va akademik kirish/xulosa iboralari',
      ],
      examRoute: '/questions',
      badge: 'Band 9 Sample Templates',
      color: 'from-purple-500 to-indigo-600',
      badgeColor: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30',
    },
    speaking: {
      title: 'IELTS Speaking Shadowing Studio',
      time: '11–14 Daqiqa',
      desc: 'Native speakerlarning nutq intonatsiyasi, urg\'u va ravonligini real vaqtda takrorlash orqali Band 8.5+ darajaga erishing.',
      highlights: [
        'Part 1: Shaxsiy tanishuv va umumiy savollar (4-5 daqiqa)',
        'Part 2: 1 daqiqa tayyorgarlik va 2 daqiqalik monolog (Cue Card)',
        'Part 3: Chuqur tahliliy va mavhum savollar muhokamasi (4-5 daqiqa)',
        'Shadowing Studio: UK & US talaffuz modellari, tezlik nazorati',
      ],
      examRoute: '#shadowing-studio',
      badge: 'Interactive Audio Shadowing',
      color: 'from-amber-500 to-orange-600',
      badgeColor: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
    },
  };

  const currentSkill = skillsData[activeTab];

  return (
    <section id="ielts-hub-section" className="w-full py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/30 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>2026 British Council &amp; Cambridge Standarti</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            IELTS 8.5+ Master Ekotizimi
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            IELTS ning barcha 4 ta bo&apos;limi: Listening, Reading, Writing va Speaking bo&apos;yicha 
            haqiqiy imtihon simulyatori, rasmiy audio treklari va professional baholash mezonlari.
          </p>
        </div>

        {/* 4 Skills Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-3 p-1.5 bg-white dark:bg-slate-950/80 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm max-w-4xl mx-auto mb-10">
          <button
            onClick={() => { sound.playClick(); setActiveTab('listening'); }}
            className={`flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:py-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'listening'
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25 scale-[1.02]'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Headphones className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Listening</span>
          </button>

          <button
            onClick={() => { sound.playClick(); setActiveTab('reading'); }}
            className={`flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:py-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'reading'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25 scale-[1.02]'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Reading</span>
          </button>

          <button
            onClick={() => { sound.playClick(); setActiveTab('writing'); }}
            className={`flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:py-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'writing'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25 scale-[1.02]'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <PenTool className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Writing</span>
          </button>

          <button
            onClick={() => { sound.playClick(); setActiveTab('speaking'); }}
            className={`flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:py-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'speaking'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/25 scale-[1.02]'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
            }`}
          >
            <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Speaking</span>
          </button>
        </div>

        {/* Active Skill Feature Card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 dark:shadow-black/30 max-w-5xl mx-auto transition-all">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full border ${currentSkill.badgeColor}`}>
                  {currentSkill.badge}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  ⏱️ {currentSkill.time}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {currentSkill.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl leading-relaxed">
                {currentSkill.desc}
              </p>
            </div>

            <Link
              href={currentSkill.examRoute}
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
            >
              <span>{activeTab === 'speaking' ? "Shadowing Trenajyoriga O'tish" : "Mock Testni Boshlash"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Highlights List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {currentSkill.highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/80"
              >
                <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* IELTS Band Conversion Quick Table */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <span className="font-bold text-slate-700 dark:text-slate-300">
              📊 IELTS 2026 Rasmiy Ball Taxtasi:
            </span>
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap font-mono">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                39-40 = Band 9.0
              </span>
              <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold">
                35-38 = Band 8.0-8.5
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">
                30-34 = Band 7.0-7.5
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                23-29 = Band 6.0-6.5
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
