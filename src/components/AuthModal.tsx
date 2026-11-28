'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  X,
  UserCheck,
  Sparkles,
  GraduationCap,
  School,
  Mail,
  Lock,
  User,
  ArrowRight,
  ShieldCheck,
  LogIn,
  BarChart3,
  Award,
  Zap,
  TrendingUp,
  Clock,
  CheckCircle2,
  Calendar,
  LogOut,
  Mic,
  RotateCcw,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { useAuth, UserProfile } from '@/lib/auth-store';
import { useGamification } from '@/lib/xp-store';
import { sound } from '@/lib/sound';
import confetti from 'canvas-confetti';

interface CompletedTestRecord {
  id: string;
  testId: string;
  title: string;
  exam: 'SAT' | 'IELTS';
  scoreDisplay: string;
  scaledScore: number;
  percentage: number;
  correct: number;
  total: number;
  date: string;
}

interface ShadowingRecord {
  id: string;
  phraseText: string;
  score: number;
  category: string;
  level: string;
  date: string;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'register' | 'analytics';
  defaultRole?: 'student' | 'teacher';
}

export default function AuthModal({
  isOpen,
  onClose,
  defaultTab = 'login',
  defaultRole = 'student',
}: AuthModalProps) {
  const { user, login, logout } = useAuth();
  const { xp, streak } = useGamification();

  const [tab, setTab] = useState<'login' | 'register' | 'analytics'>(user ? 'analytics' : defaultTab);
  const [analyticsSubTab, setAnalyticsSubTab] = useState<'tests' | 'shadowing'>('tests');
  const [role, setRole] = useState<'student' | 'teacher'>(defaultRole);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subject, setSubject] = useState('SAT Math & IELTS');
  const [targetExam, setTargetExam] = useState<'SAT' | 'IELTS' | 'BOTH'>('BOTH');
  const [error, setError] = useState<string | null>(null);

  const [testHistory, setTestHistory] = useState<CompletedTestRecord[]>([]);
  const [shadowingHistory, setShadowingHistory] = useState<ShadowingRecord[]>([]);

  // Guarantee tab switches to analytics when logged in user opens modal
  useEffect(() => {
    if (isOpen) {
      if (user) {
        setTab('analytics');
      } else {
        setTab(defaultTab || 'login');
      }
    }
  }, [isOpen, user, defaultTab]);

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Load dynamic test & shadowing records from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadRecords = () => {
      try {
        const rawTests = localStorage.getItem('yu_test_history');
        if (rawTests) {
          const parsed = JSON.parse(rawTests);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setTestHistory(parsed);
          } else {
            setTestHistory([]);
          }
        } else {
          // Initialize demo tests if user has no test history yet
          const defaultTests: CompletedTestRecord[] = [
            {
              id: 'test-seed-1',
              testId: 'sat-m-1',
              title: 'Digital SAT Math Full Mock #1',
              exam: 'SAT',
              scoreDisplay: '780 / 800',
              scaledScore: 780,
              percentage: 92,
              correct: 41,
              total: 44,
              date: '2026-yil 26-noyabr',
            },
            {
              id: 'test-seed-2',
              testId: 'ielts-r-1',
              title: 'Cambridge IELTS 19 Academic Reading',
              exam: 'IELTS',
              scoreDisplay: 'Band 8.5',
              scaledScore: 8.5,
              percentage: 89,
              correct: 36,
              total: 40,
              date: '2026-yil 25-noyabr',
            },
          ];
          setTestHistory(defaultTests);
        }

        const rawShadowing = localStorage.getItem('yu_shadowing_history');
        if (rawShadowing) {
          const parsed = JSON.parse(rawShadowing);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setShadowingHistory(parsed);
          } else {
            setShadowingHistory([]);
          }
        } else {
          // Initialize demo shadowing history if empty
          const defaultShadowing: ShadowingRecord[] = [
            {
              id: 'sh-seed-1',
              phraseText: 'Artificial intelligence is revolutionizing education by creating personalized learning paths.',
              score: 94,
              category: 'Texnologiya & AI',
              level: 'Band 8.5',
              date: '2026-yil 26-noyabr',
            },
            {
              id: 'sh-seed-2',
              phraseText: 'Sustainable urban planning mitigates environmental degradation in major metropolitan hubs.',
              score: 88,
              category: 'Ekologiya & Iqlim',
              level: 'Band 8.0',
              date: '2026-yil 25-noyabr',
            },
          ];
          setShadowingHistory(defaultShadowing);
        }
      } catch {}
    };

    loadRecords();

    const handleTestSync = (e: any) => {
      if (e.detail && Array.isArray(e.detail)) setTestHistory(e.detail);
    };
    const handleShadowingSync = (e: any) => {
      if (e.detail && Array.isArray(e.detail)) setShadowingHistory(e.detail);
    };

    window.addEventListener('yu_test_history_updated', handleTestSync);
    window.addEventListener('yu_shadowing_updated', handleShadowingSync);
    return () => {
      window.removeEventListener('yu_test_history_updated', handleTestSync);
      window.removeEventListener('yu_shadowing_updated', handleShadowingSync);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Dynamic statistics calculations
  const totalTests = testHistory.length;
  const avgAccuracy = totalTests > 0
    ? Math.round(testHistory.reduce((acc, t) => acc + (t.percentage || 0), 0) / totalTests)
    : 0;

  const satTests = testHistory.filter(t => t.exam === 'SAT');
  const satForecast = satTests.length > 0
    ? Math.round(satTests.reduce((acc, t) => acc + (t.scaledScore || 700), 0) / satTests.length)
    : 1480;

  const ieltsTests = testHistory.filter(t => t.exam === 'IELTS');
  const ieltsForecast = ieltsTests.length > 0
    ? (Math.round((ieltsTests.reduce((acc, t) => acc + (t.scaledScore || 7.5), 0) / ieltsTests.length) * 2) / 2).toFixed(1)
    : '8.0';

  const totalShadowing = shadowingHistory.length;
  const avgShadowingScore = totalShadowing > 0
    ? Math.round(shadowingHistory.reduce((acc, s) => acc + (s.score || 0), 0) / totalShadowing)
    : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (tab === 'register' && !name.trim()) {
      setError('Iltimos, ismingizni kiriting!');
      sound.playError();
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setError('Iltimos, haqiqiy elektron pochta manzilini kiriting!');
      sound.playError();
      return;
    }

    if (password.length < 4) {
      setError('Parol kamida 4 ta belgidan iborat bo\'lishi kerak!');
      sound.playError();
      return;
    }

    const newUser: UserProfile = {
      id: 'yu-usr-' + Date.now(),
      name: tab === 'register' ? name.trim() : email.split('@')[0],
      email: email.trim(),
      role: role,
      subject: role === 'teacher' ? subject : undefined,
      targetExam: targetExam,
      targetScore: role === 'student' ? '1520+ SAT / Band 8.5' : undefined,
      xp: xp || 1450,
      joinedDate: new Date().toLocaleDateString('uz-UZ'),
    };

    login(newUser);
    try {
      confetti({ particleCount: 85, spread: 75, origin: { y: 0.6 } });
    } catch {}
    setTab('analytics');
  };

  const handleDemoLogin = (selectedRole: 'student' | 'teacher') => {
    sound.playClick();
    const demoUser: UserProfile = {
      id: 'yu-demo-' + (selectedRole === 'teacher' ? 't1' : 's1'),
      name: selectedRole === 'teacher' ? 'Ustoz Jasur Aliyev' : 'Shohruh Bekmirzayev',
      email: selectedRole === 'teacher' ? 'teacher@yuacademy.uz' : 'student@yuacademy.uz',
      role: selectedRole,
      subject: selectedRole === 'teacher' ? 'Digital SAT Math & IELTS' : undefined,
      institution: selectedRole === 'teacher' ? 'Prezident Maktabi / Yu Academy' : 'Toshkent',
      targetExam: 'BOTH',
      targetScore: '1550 SAT / 8.5 IELTS',
      xp: selectedRole === 'teacher' ? 9800 : 3450,
      joinedDate: '2026-yil',
    };

    login(demoUser);
    try {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    } catch {}
    setTab('analytics');
  };

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          sound.playClick();
          onClose();
        }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl sm:max-w-3xl max-h-[92vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                {user ? "Foydalanuvchi Profili va Akkaunt Tahlili" : "Platformaga Kirish & Ro'yxatdan O'tish"}
                <span className="text-[10px] font-bold uppercase bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30">
                  EdTech 2026
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                YU Academy Digital SAT va IELTS Shaxsiy Rivojlanish Kabineti
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => { sound.playClick(); onClose(); }}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Yopish (Platformaga qaytish)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 pt-3 bg-white dark:bg-slate-900 gap-3 overflow-x-auto whitespace-nowrap">
          {user ? (
            <>
              <button
                type="button"
                onClick={() => { sound.playClick(); setTab('analytics'); }}
                className={`pb-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-all ${
                  tab === 'analytics'
                    ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Akkaunt Tahlili &amp; Natijalarim</span>
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => { sound.playClick(); setTab('login'); setError(null); }}
                className={`pb-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-all ${
                  tab === 'login'
                    ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <LogIn className="w-4 h-4" />
                <span>Tizimga Kirish</span>
              </button>
              <button
                type="button"
                onClick={() => { sound.playClick(); setTab('register'); setError(null); }}
                className={`pb-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-all ${
                  tab === 'register'
                    ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>Yangi Ro&apos;yxatdan O&apos;tish</span>
              </button>
            </>
          )}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {tab === 'analytics' && user ? (
            /* AKKAUNT TAHLILI DASHBOARD */
            <div className="space-y-6 animate-in fade-in">
              
              {/* Profile Card Summary */}
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 shadow-sm">
                <div className="flex items-center gap-4 text-center sm:text-left">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-blue-600 text-white font-black text-3xl flex items-center justify-center shadow-xl shadow-cyan-500/20">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <h4 className="text-xl font-black text-slate-900 dark:text-white">
                        {user.name}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                        {user.role === 'teacher' ? '👨‍🏫 Ustoz' : '🎓 O\'quvchi'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                      {user.email}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        A&apos;zolik: {user.joinedDate || '2026-yil'}
                      </span>
                      <span>•</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        Faol Status
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    sound.playClick();
                    logout();
                    setTab('login');
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 flex items-center gap-1.5 transition-all shrink-0 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Akkauntdan Chiqish</span>
                </button>
              </div>

              {/* 4 Dynamic Metric Stats Grid (Based on Real Test & Shadowing Records) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shadow-sm hover:border-cyan-500/50 transition-all">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Topshirilgan Testlar</span>
                  <span className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 font-mono">
                    {totalTests} ta
                  </span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Jami 5,250+ to&apos;plamdan</span>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shadow-sm hover:border-emerald-500/50 transition-all">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">O&apos;rtacha Aniqlik</span>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                    {avgAccuracy}%
                  </span>
                  <span className="text-[10px] text-emerald-500 block mt-0.5">
                    {avgAccuracy >= 85 ? "Yuqori samaradorlik" : avgAccuracy >= 65 ? "Yaxshi ko'rsatkich" : "O'sish talab etiladi"}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shadow-sm hover:border-amber-500/50 transition-all">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">SAT Prognoz</span>
                  <span className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 font-mono">
                    {satForecast}
                  </span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">
                    {satTests.length > 0 ? `${satTests.length} ta test asosida` : "Diagnostic hisob"}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shadow-sm hover:border-purple-500/50 transition-all">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">IELTS &amp; Shadowing</span>
                  <span className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400 font-mono">
                    Band {ieltsForecast}
                  </span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">
                    {totalShadowing > 0 ? `Shadowing: ${avgShadowingScore}% aniqlik` : "Cambridge Standarti"}
                  </span>
                </div>
              </div>

              {/* Sub-Tabs: Test History vs Shadowing Results */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => { sound.playClick(); setAnalyticsSubTab('tests'); }}
                      className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                        analyticsSubTab === 'tests'
                          ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Topshirilgan Testlar ({totalTests})</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => { sound.playClick(); setAnalyticsSubTab('shadowing'); }}
                      className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                        analyticsSubTab === 'shadowing'
                          ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <Mic className="w-3.5 h-3.5" />
                      <span>IELTS Shadowing Natijalari ({totalShadowing})</span>
                    </button>
                  </div>

                  {analyticsSubTab === 'tests' ? (
                    <Link
                      href="/tests"
                      onClick={() => { sound.playClick(); onClose(); }}
                      className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>Yangi Test Boshlash</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <a
                      href="#shadowing-studio"
                      onClick={() => { sound.playClick(); onClose(); }}
                      className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
                    >
                      <span>Shadowing Studiyasi</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Sub-tab 1: Completed Test History */}
                {analyticsSubTab === 'tests' && (
                  <div className="space-y-3">
                    {testHistory.length === 0 ? (
                      <div className="p-8 text-center bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                        <Layers className="w-8 h-8 text-slate-400 mx-auto" />
                        <h5 className="text-sm font-bold text-slate-700 dark:text-slate-300">
                          Siz hali imtihon topshirmagansiz
                        </h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                          5,250+ ta Digital SAT va IELTS rasmiy Bluebook simulator testlarimizdan birini tanlang va natijangizni shu yerda tahlil qiling.
                        </p>
                        <Link
                          href="/tests"
                          onClick={() => { sound.playClick(); onClose(); }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:brightness-110 shadow-md shadow-cyan-500/20 transition-all"
                        >
                          <Zap className="w-3.5 h-3.5" />
                          <span>Birinchi Testni Boshlash</span>
                        </Link>
                      </div>
                    ) : (
                      testHistory.map((test) => (
                        <div
                          key={test.id}
                          className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 transition-all hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                                test.exam === 'SAT'
                                  ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                                  : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                              }`}>
                                {test.exam}
                              </span>
                              <b className="text-sm font-bold text-slate-900 dark:text-white">
                                {test.title}
                              </b>
                            </div>
                            <span className="text-[11px] text-slate-400 block">
                              {test.date} {test.total ? `• ${test.correct}/${test.total} to'g'ri javob` : ''}
                            </span>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="font-mono font-black text-cyan-600 dark:text-cyan-400 text-base sm:text-lg block">
                              {test.scoreDisplay}
                            </span>
                            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                              {test.percentage}% aniqlik
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}

                {/* Sub-tab 2: Shadowing Pronunciation Practice Records */}
                {analyticsSubTab === 'shadowing' && (
                  <div className="space-y-3">
                    {shadowingHistory.length === 0 ? (
                      <div className="p-8 text-center bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                        <Mic className="w-8 h-8 text-purple-400 mx-auto" />
                        <h5 className="text-sm font-bold text-slate-700 dark:text-slate-300">
                          Siz hali IELTS Shadowing mashqini bajarmadingiz
                        </h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                          110+ ta ilmiy gaplarni ona tili diktori orqasidan mikrofonda takrorlang va sun&apos;iy intellekt talaffuzingizni so&apos;zma-so&apos;z tahlil qiladi.
                        </p>
                        <a
                          href="#shadowing-studio"
                          onClick={() => { sound.playClick(); onClose(); }}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-purple-500 text-white hover:brightness-110 shadow-md shadow-purple-500/20 transition-all"
                        >
                          <Mic className="w-3.5 h-3.5" />
                          <span>Shadowing Studiyasiga O&apos;tish</span>
                        </a>
                      </div>
                    ) : (
                      shadowingHistory.map((sh) => (
                        <div
                          key={sh.id}
                          className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
                        >
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">
                                {sh.category || 'IELTS Speaking'}
                              </span>
                              <span className="text-[10px] font-bold text-amber-500 font-mono">
                                {sh.level || 'Band 8.0+'}
                              </span>
                            </div>
                            <p className="text-xs text-slate-700 dark:text-slate-200 font-medium italic line-clamp-2">
                              &ldquo;{sh.phraseText}&rdquo;
                            </p>
                            <span className="text-[10px] text-slate-400 block">
                              {sh.date}
                            </span>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="font-mono font-black text-purple-600 dark:text-purple-400 text-base sm:text-lg block">
                              {sh.score}%
                            </span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                              sh.score >= 80
                                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                                : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                            }`}>
                              {sh.score >= 80 ? "A'lo talaffuz" : "Yaxshi natija"}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* Topic Mastery Progress Bars */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-500" />
                    <span>Mavzular Bo&apos;yicha O&apos;zlashtirish Darajasi:</span>
                  </h4>
                  <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                    Batafsil Tahlil
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span className="text-slate-700 dark:text-slate-300">Digital SAT Math: Algebra &amp; Chiziqli Tizimlar</span>
                      <span className="font-mono text-cyan-600 dark:text-cyan-400">{Math.max(88, avgAccuracy)}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div className="h-full bg-cyan-500 rounded-full transition-all duration-500" style={{ width: `${Math.max(88, avgAccuracy)}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span className="text-slate-700 dark:text-slate-300">Digital SAT Math: Geometriya &amp; Funksiyalar</span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400">{Math.max(82, avgAccuracy - 4)}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${Math.max(82, avgAccuracy - 4)}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span className="text-slate-700 dark:text-slate-300">SAT Reading &amp; Writing: Vocabulary &amp; Craft</span>
                      <span className="font-mono text-amber-600 dark:text-amber-400">{Math.max(85, avgAccuracy - 2)}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full transition-all duration-500" style={{ width: `${Math.max(85, avgAccuracy - 2)}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span className="text-slate-700 dark:text-slate-300">IELTS Speaking AI &amp; Shadowing Ravonligi</span>
                      <span className="font-mono text-purple-600 dark:text-purple-400">
                        {totalShadowing > 0 ? `${avgShadowingScore}% aniqlik` : 'Band 8.0'}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full transition-all duration-500" style={{ width: `${totalShadowing > 0 ? avgShadowingScore : 88}%` }} />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* LOGIN & REGISTRATION FORMS */
            <div className="space-y-5 animate-in fade-in">
              {/* Role Selection */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 block">
                  Platformadagi Rolingizni Tanlang:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => { sound.playClick(); setRole('student'); }}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col gap-1.5 cursor-pointer ${
                      role === 'student'
                        ? 'bg-cyan-50 dark:bg-cyan-950/40 border-cyan-500 text-cyan-950 dark:text-cyan-200 shadow-md shadow-cyan-500/10'
                        : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-cyan-500" />
                      <span className="font-bold text-sm">🎓 O&apos;quvchi (Student)</span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                      5,250+ test topshirish, real-vaqtda AI Speaking va AQSH grantlarini yutish
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { sound.playClick(); setRole('teacher'); }}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col gap-1.5 cursor-pointer ${
                      role === 'teacher'
                        ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 text-amber-950 dark:text-amber-200 shadow-md shadow-amber-500/10'
                        : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <School className="w-5 h-5 text-amber-500" />
                      <span className="font-bold text-sm">👨‍🏫 Ustoz (Teacher)</span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                      O&apos;z mualliflik testlarini qo&apos;shish, o&apos;quvchilar natijalarini boshqarish
                    </span>
                  </button>
                </div>
              </div>

              {/* Error banner */}
              {error && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-semibold">
                  {error}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {tab === 'register' && (
                  <div>
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                      Ism va Familiyangiz (*):
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Masalan: Jasur Rahimov"
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                        required
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Elektron pochta (*):
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@example.com"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Parol (*):
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{tab === 'login' ? 'Tizimga Kirish' : "Ro'yxatdan O'tish va Shaxsiy Kabinetga Kirish"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* 1-Click Demo Accounts */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs text-slate-400 block text-center mb-3">
                  Tezkor 1-soniyalik sinov hisoblari orqali kirish:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleDemoLogin('teacher')}
                    className="py-2.5 px-3 rounded-2xl text-xs font-bold bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <School className="w-4 h-4" />
                    <span>Ustoz Demo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoLogin('student')}
                    className="py-2.5 px-3 rounded-2xl text-xs font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>O&apos;quvchi Demo</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer with Prominent Exit / Close Button */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
            💡 Shaxsiy natijalaringiz va tahlillaringiz avtomatik saqlanadi.
          </span>
          <button
            onClick={() => { sound.playClick(); onClose(); }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ml-auto"
            title="Platformaga qaytish"
          >
            <LogOut className="w-4 h-4 rotate-180" />
            <span>Tahlildan Chiqish / Platformaga Qaytish</span>
          </button>
        </div>

      </div>
    </div>
  );
}
