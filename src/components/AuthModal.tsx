'use client';

import React, { useState } from 'react';
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
} from 'lucide-react';
import { useAuth, UserProfile } from '@/lib/auth-store';
import { useGamification } from '@/lib/xp-store';
import { sound } from '@/lib/sound';
import confetti from 'canvas-confetti';

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
  const [role, setRole] = useState<'student' | 'teacher'>(defaultRole);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subject, setSubject] = useState('SAT Math & IELTS');
  const [targetExam, setTargetExam] = useState<'SAT' | 'IELTS' | 'BOTH'>('BOTH');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
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
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title="Yopish (Chiqish)"
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
        <div className="flex-1 overflow-y-auto p-6">
          {tab === 'analytics' && user ? (
            /* AKKAUNT TAHLILI DASHBOARD */
            <div className="space-y-6 animate-in fade-in">
              
              {/* Profile Card Summary */}
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
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
                        A&apos;zolik: 2026-yil
                      </span>
                      <span>•</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
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
                  className="px-4 py-2 rounded-xl text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 flex items-center gap-1.5 transition-all shrink-0"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Akkauntdan Chiqish</span>
                </button>
              </div>

              {/* 4 Metric Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shadow-sm">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Topshirilgan Testlar</span>
                  <span className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 font-mono">18 ta</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Jami 5,000+ to&apos;plamdan</span>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shadow-sm">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">O&apos;rtacha Aniqlik</span>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">88.5%</span>
                  <span className="text-[10px] text-emerald-500 block mt-0.5">Yuqori samaradorlik</span>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shadow-sm">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">SAT Prognoz</span>
                  <span className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400 font-mono">1510</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">99th Percentile</span>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center shadow-sm">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">IELTS Prognoz</span>
                  <span className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400 font-mono">8.0</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Cambridge Standarti</span>
                </div>
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
                      <span className="font-mono text-cyan-600 dark:text-cyan-400">92%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div className="h-full bg-cyan-500 rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span className="text-slate-700 dark:text-slate-300">Digital SAT Math: Kvadrat Tenglamalar &amp; Parabolalar</span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400">86%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: '86%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span className="text-slate-700 dark:text-slate-300">SAT Reading &amp; Writing: Craft &amp; Structure &amp; Vocabulary</span>
                      <span className="font-mono text-amber-600 dark:text-amber-400">89%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '89%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-semibold mb-1">
                      <span className="text-slate-700 dark:text-slate-300">IELTS Speaking AI &amp; Shadowing Ravonligi</span>
                      <span className="font-mono text-purple-600 dark:text-purple-400">Band 8.0</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full" style={{ width: '88%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Test History */}
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-3">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  So&apos;nggi Topshirilgan Imtihonlar Tarixi:
                </span>
                <div className="space-y-2">
                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <b className="text-slate-900 dark:text-white block">Digital SAT Math Full Mock #1</b>
                      <span className="text-[11px] text-slate-400">2026-yil 26-noyabr • Rasmiy Bluebook</span>
                    </div>
                    <span className="font-mono font-black text-cyan-600 dark:text-cyan-400 text-sm">
                      780 / 800
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <b className="text-slate-900 dark:text-white block">Cambridge IELTS 19 Academic Reading</b>
                      <span className="text-[11px] text-slate-400">2026-yil 25-noyabr • 40 savol</span>
                    </div>
                    <span className="font-mono font-black text-emerald-600 dark:text-emerald-400 text-sm">
                      Band 8.5
                    </span>
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
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col gap-1.5 ${
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
                      5,000+ test topshirish, real-vaqtda AI Speaking va AQSH grantlarini yutish
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => { sound.playClick(); setRole('teacher'); }}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col gap-1.5 ${
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
                  className="w-full py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
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
                    className="py-2.5 px-3 rounded-2xl text-xs font-bold bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30 transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <School className="w-4 h-4" />
                    <span>Ustoz Demo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoLogin('student')}
                    className="py-2.5 px-3 rounded-2xl text-xs font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>O&apos;quvchi Demo</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer with Exit Button */}
        <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 text-xs flex items-center justify-between">
          <span className="text-slate-500 dark:text-slate-400">
            💡 Shaxsiy natijalaringiz avtomatik saqlanib boriladi.
          </span>
          <button
            onClick={() => { sound.playClick(); onClose(); }}
            className="px-4 py-1.5 rounded-xl text-xs font-bold bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all"
          >
            Yopish / Chiqish
          </button>
        </div>

      </div>
    </div>
  );
}
