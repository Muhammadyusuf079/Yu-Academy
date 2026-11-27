'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  ShieldAlert,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  Settings,
  Plus,
  Trash2,
  CheckCircle2,
  BarChart3,
  Database,
  Lock,
  Search,
  Sparkles,
} from 'lucide-react';
import { sound } from '@/lib/sound';
import { useAuth } from '@/lib/auth-store';
import confetti from 'canvas-confetti';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminModal({ isOpen, onClose }: AdminModalProps) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'stats' | 'tests' | 'users' | 'settings'>('stats');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock Admin Data
  const [testPackages, setTestPackages] = useState([
    { id: 'pkg-1', name: 'Digital SAT Official Bluebook Mock 2026 #1', questionsCount: 98, status: 'Active', category: 'SAT Full' },
    { id: 'pkg-2', name: 'Digital SAT Adaptive Hard Module 2 Drill', questionsCount: 44, status: 'Active', category: 'SAT Math' },
    { id: 'pkg-3', name: 'Cambridge IELTS 19 Academic Full Simulation', questionsCount: 80, status: 'Active', category: 'IELTS' },
    { id: 'pkg-4', name: 'SAT Reading & Writing Craft & Structure Master', questionsCount: 54, status: 'Active', category: 'SAT RW' },
    { id: 'pkg-5', name: 'IELTS Band 8.5+ Speaking & Shadowing Series', questionsCount: 40, status: 'Active', category: 'IELTS Speaking' },
    { id: 'pkg-6', name: 'Desmos 10-Second SAT Math Hacks Test', questionsCount: 30, status: 'Active', category: 'Desmos Math' },
  ]);

  const [usersList, setUsersList] = useState([
    { id: 'usr-1', name: 'Shohruh Bekmirzayev', email: 'shohruh@yuacademy.uz', role: 'student', xp: 4850, tests: 24, satScore: 1510 },
    { id: 'usr-2', name: 'Ustoz Jasur Aliyev', email: 'jasur@yuacademy.uz', role: 'teacher', xp: 12400, tests: 68, satScore: 1560 },
    { id: 'usr-3', name: 'Madina Karimova', email: 'madina@yuacademy.uz', role: 'student', xp: 3200, tests: 18, satScore: 1470 },
    { id: 'usr-4', name: 'Bobur Mirzayev', email: 'bobur@yuacademy.uz', role: 'student', xp: 5120, tests: 31, satScore: 1530 },
    { id: 'usr-5', name: 'Dilnoza Rahimova', email: 'dilnoza@yuacademy.uz', role: 'teacher', xp: 9800, tests: 45, satScore: 1540 },
  ]);

  const [newPkgName, setNewPkgName] = useState('');
  const [newPkgCategory, setNewPkgCategory] = useState('SAT Full');
  const [newPkgCount, setNewPkgCount] = useState(44);
  const [alertMsg, setAlertMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAddPackage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPkgName.trim()) return;

    const newPkg = {
      id: `pkg-${Date.now()}`,
      name: newPkgName.trim(),
      category: newPkgCategory,
      questionsCount: Number(newPkgCount),
      status: 'Active',
    };

    setTestPackages([newPkg, ...testPackages]);
    setNewPkgName('');
    sound.playSuccess();
    setAlertMsg('Yangi test to\'plami muvaffaqiyatli tizimga kiritildi!');
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch {}
    setTimeout(() => setAlertMsg(null), 3000);
  };

  const handleDeletePackage = (id: string) => {
    sound.playClick();
    setTestPackages(testPackages.filter(p => p.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[88vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-cyan-500/20">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                YU Academy Admin Boshqaruv Markazi
                <span className="text-[10px] font-bold uppercase bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30">
                  Super Admin
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Testlar to&apos;plami, o&apos;quvchilar, statistik ko&apos;rsatkichlar va ekotizim sozlamalari
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => { sound.playClick(); onClose(); }}
              className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-colors"
              title="Yopish (Chiqish)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 pt-2.5 bg-white dark:bg-slate-900 gap-2 sm:gap-4 overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => { sound.playClick(); setActiveTab('stats'); }}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-all ${
              activeTab === 'stats'
                ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Platforma Statistikasi</span>
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveTab('tests'); }}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-all ${
              activeTab === 'tests'
                ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Testlar Boshqaruvi ({testPackages.length})</span>
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveTab('users'); }}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-all ${
              activeTab === 'users'
                ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Foydalanuvchilar ({usersList.length})</span>
          </button>
          <button
            onClick={() => { sound.playClick(); setActiveTab('settings'); }}
            className={`pb-3 text-xs sm:text-sm font-bold border-b-2 flex items-center gap-1.5 transition-all ${
              activeTab === 'settings'
                ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Tizim Sozlamalari</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {alertMsg && (
            <div className="mb-4 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{alertMsg}</span>
            </div>
          )}

          {/* TAB 1: Platforma Statistikasi */}
          {activeTab === 'stats' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
                  <span className="text-3xl font-black text-cyan-600 dark:text-cyan-400 font-mono block">14,820+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-1 block">Ro&apos;yxatdan O&apos;tganlar</span>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
                  <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono block">89,450+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-1 block">Topshirilgan Testlar</span>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
                  <span className="text-3xl font-black text-amber-600 dark:text-amber-400 font-mono block">1420</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-1 block">O&apos;rtacha SAT Balli</span>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
                  <span className="text-3xl font-black text-purple-600 dark:text-purple-400 font-mono block">3,420+</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-1 block">Berilgan Sertifikatlar</span>
                </div>
              </div>

              {/* Progress & Health */}
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-4">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  Server va API Salomatlik Holati
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Vercel Edge Network:</span>
                    <span className="font-bold text-emerald-500 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> 100% Online
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Desmos Offline Engine:</span>
                    <span className="font-bold text-emerald-500 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> Faol (Zero-latency)
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-slate-600 dark:text-slate-400">AI Voice WebSpeech:</span>
                    <span className="font-bold text-emerald-500 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> Tayyor
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Testlar Boshqaruvi */}
          {activeTab === 'tests' && (
            <div className="space-y-6">
              {/* Add New Test Package Form */}
              <form onSubmit={handleAddPackage} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                  Yangi Test To&apos;plamini Ro&apos;yxatga Qo&apos;shish:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                  <input
                    type="text"
                    value={newPkgName}
                    onChange={(e) => setNewPkgName(e.target.value)}
                    placeholder="Test to'plami nomi (masalan: SAT Test #12)"
                    className="sm:col-span-2 px-3 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                    required
                  />
                  <select
                    value={newPkgCategory}
                    onChange={(e) => setNewPkgCategory(e.target.value)}
                    className="px-3 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
                  >
                    <option value="SAT Full">SAT Full Mock</option>
                    <option value="SAT Math">SAT Math Drill</option>
                    <option value="SAT RW">SAT Reading/Writing</option>
                    <option value="IELTS">IELTS Simulation</option>
                  </select>
                  <button
                    type="submit"
                    className="py-2 px-4 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:brightness-110 shadow-sm flex items-center justify-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Qo&apos;shish</span>
                  </button>
                </div>
              </form>

              {/* Package list */}
              <div className="space-y-2.5">
                {testPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                          {pkg.category}
                        </span>
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {pkg.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {pkg.questionsCount} ta savol • Status: <b className="text-emerald-500">{pkg.status}</b>
                      </span>
                    </div>

                    <button
                      onClick={() => handleDeletePackage(pkg.id)}
                      className="p-2 text-rose-500 hover:text-rose-700 hover:bg-rose-500/10 rounded-xl transition-colors"
                      title="O'chirish"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Foydalanuvchilar */}
          {activeTab === 'users' && (
            <div className="space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Foydalanuvchini ismi yoki pochtasi bo'yicha qidiring..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                {usersList
                  .filter(u => u.name.toLowerCase().includes(searchQuery.toLowerCase()) || u.email.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((u) => (
                    <div
                      key={u.id}
                      className="p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 text-white font-bold text-sm flex items-center justify-center">
                          {u.name.charAt(0)}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 dark:text-white block">
                            {u.name}
                          </span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                            {u.email}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-semibold">
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                          {u.role === 'teacher' ? '👨‍🏫 Ustoz' : '🎓 O\'quvchi'}
                        </span>
                        <span className="text-cyan-600 dark:text-cyan-400 font-mono">
                          {u.xp.toLocaleString()} XP
                        </span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-mono">
                          SAT: {u.satScore}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* TAB 4: Tizim Sozlamalari */}
          {activeTab === 'settings' && (
            <div className="space-y-4 max-w-xl">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                  Grafik Dvigateli Boshqaruvi:
                </span>
                <label className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <input type="checkbox" defaultChecked className="rounded text-cyan-500" />
                  <span>Oflayn Canvas dvigatelini asosiy standart sifatida yoqish</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <input type="checkbox" defaultChecked className="rounded text-cyan-500" />
                  <span>College Board rasmiy Bluebook andozalarini ko&apos;rsatish</span>
                </label>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                  AI Ovozli Examiner Sozlamalari:
                </span>
                <label className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <input type="checkbox" defaultChecked className="rounded text-cyan-500" />
                  <span>Erkak va ayol talaffuz modellarini avtomatik tanlash</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <input type="checkbox" defaultChecked className="rounded text-cyan-500" />
                  <span>Har bir muvaffaqiyatli topshirilgan speaking uchun +150 XP berish</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Footer with Exit Button */}
        <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 text-xs flex items-center justify-between">
          <span className="text-slate-500 dark:text-slate-400">
            🔒 YU Admin v2.0 • Xavfsiz Shifrlangan Ulanish
          </span>
          <button
            onClick={() => { sound.playClick(); onClose(); }}
            className="px-4 py-1.5 rounded-xl text-xs font-bold bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all"
          >
            Chiqish / Yopish
          </button>
        </div>

      </div>
    </div>
  );
}
