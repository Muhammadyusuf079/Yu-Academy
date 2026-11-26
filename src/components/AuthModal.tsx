'use client';

import React, { useState } from 'react';
import { X, UserCheck, Sparkles, GraduationCap, School, Mail, Lock, User, ArrowRight, ShieldCheck, LogIn } from 'lucide-react';
import { useAuth, UserProfile } from '@/lib/auth-store';
import { sound } from '@/lib/sound';
import confetti from 'canvas-confetti';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'register';
  defaultRole?: 'student' | 'teacher';
}

export default function AuthModal({
  isOpen,
  onClose,
  defaultTab = 'login',
  defaultRole = 'student',
}: AuthModalProps) {
  const { user, login, logout } = useAuth();
  const [tab, setTab] = useState<'login' | 'register'>(defaultTab);
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
      targetScore: role === 'student' ? '1500+ SAT / Band 8.5' : undefined,
      xp: 1450,
      joinedDate: new Date().toLocaleDateString('uz-UZ'),
    };

    login(newUser);
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch {}
    onClose();
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
      xp: selectedRole === 'teacher' ? 9800 : 2650,
      joinedDate: '2026-yil',
    };

    login(demoUser);
    try {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    } catch {}
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden transition-all">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                {user ? "Foydalanuvchi Profili" : tab === 'login' ? "Platformaga Kirish" : "Ro'yxatdan O'tish"}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                YU Academy 2026 EdTech Ekotizimi
              </p>
            </div>
          </div>

          <button
            onClick={() => { sound.playClick(); onClose(); }}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* If user is already logged in, show their profile */}
        {user ? (
          <div className="p-6 space-y-6">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 text-white font-black text-2xl flex items-center justify-center mx-auto mb-3 shadow-lg shadow-cyan-500/20">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {user.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-3">
                {user.email}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                {user.role === 'teacher' ? (
                  <>
                    <School className="w-3.5 h-3.5" />
                    <span>Ustoz (Test yaratish huquqi faol)</span>
                  </>
                ) : (
                  <>
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>O&apos;quvchi (Student)</span>
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold block">Status</span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Faol A&apos;zo</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold block">Imtihon Maqsadi</span>
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400">{user.targetExam || 'SAT + IELTS'}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  logout();
                  sound.playClick();
                }}
                className="w-full py-2.5 rounded-xl font-bold text-xs bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30 hover:bg-rose-500/20 transition-all"
              >
                Akkauntdan Chiqish
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                className="w-full py-2.5 rounded-xl font-bold text-xs bg-cyan-500 text-slate-950 hover:brightness-110 transition-all"
              >
                Yopish
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 space-y-5">
            {/* Tab switch */}
            <div className="flex rounded-xl p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                type="button"
                onClick={() => { sound.playClick(); setTab('login'); setError(null); }}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  tab === 'login'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Kirish
              </button>
              <button
                type="button"
                onClick={() => { sound.playClick(); setTab('register'); setError(null); }}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  tab === 'register'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Ro&apos;yxatdan O&apos;tish
              </button>
            </div>

            {/* Role Selector */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 block">
                Platformadagi Rolingizni Tanlang:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => { sound.playClick(); setRole('student'); }}
                  className={`p-3 rounded-2xl border text-left transition-all flex flex-col gap-1 ${
                    role === 'student'
                      ? 'bg-cyan-50 dark:bg-cyan-950/40 border-cyan-500 text-cyan-900 dark:text-cyan-200 shadow-sm'
                      : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-cyan-500" />
                    <span className="font-bold text-xs">🎓 O&apos;quvchi</span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Test topshirish, AI Speaking va grant yutish
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => { sound.playClick(); setRole('teacher'); }}
                  className={`p-3 rounded-2xl border text-left transition-all flex flex-col gap-1 ${
                    role === 'teacher'
                      ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 text-amber-900 dark:text-amber-200 shadow-sm'
                      : 'bg-white dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <School className="w-4 h-4 text-amber-500" />
                    <span className="font-bold text-xs">👨‍🏫 Ustoz</span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    O&apos;z testlarini qo&apos;shish &amp; boshqarish
                  </span>
                </button>
              </div>
            </div>

            {/* Error banner */}
            {error && (
              <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-medium">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              {tab === 'register' && (
                <div>
                  <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Ism va Familiyangiz:
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Masalan: Sardor Rahimov"
                      className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Email Manzilingiz:
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Parol:
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {tab === 'register' && role === 'teacher' && (
                <div>
                  <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1">
                    Dars beradigan yo&apos;nalishingiz:
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="SAT Math / IELTS Reading & Speaking"
                    className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-cyan-400 to-sky-300 text-slate-950 hover:brightness-110 shadow-md shadow-cyan-500/25 transition-all flex items-center justify-center gap-1.5"
              >
                <span>{tab === 'login' ? 'Tizimga Kirish' : "Ro'yxatdan O'tish va Boshlash"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick 1-Click Demo Buttons */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <span className="text-[10px] text-slate-400 block text-center mb-2">
                Tezkor 1-soniyalik sinov hisoblari:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleDemoLogin('teacher')}
                  className="py-2 px-2.5 rounded-xl text-[11px] font-bold bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30 transition-all text-center flex items-center justify-center gap-1"
                >
                  <School className="w-3.5 h-3.5" />
                  <span>Ustoz Demo</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoLogin('student')}
                  className="py-2 px-2.5 rounded-xl text-[11px] font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 transition-all text-center flex items-center justify-center gap-1"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>O&apos;quvchi Demo</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
