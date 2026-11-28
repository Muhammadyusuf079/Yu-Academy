'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sparkles,
  BookOpen,
  BookA,
  Calculator,
  Award,
  Menu,
  X,
  ArrowRight,
  Flame,
  Zap,
  Gem,
  Sun,
  Moon,
  Headphones,
  User,
  GraduationCap,
  School,
  PlusCircle,
  Gamepad2,
  BrainCircuit,
  ChevronDown,
  ShieldAlert,
} from 'lucide-react';
import { sound } from '@/lib/sound';
import { useGamification } from '@/lib/xp-store';
import { useTheme } from '@/lib/theme-provider';
import { useAuth } from '@/lib/auth-store';
import StreakModal from '@/components/StreakModal';
import AuthModal from '@/components/AuthModal';
import TeacherStudioModal from '@/components/TeacherStudioModal';
import AiSpeakingPartnerModal from '@/components/AiSpeakingPartnerModal';
import IeltsGameModal from '@/components/IeltsGameModal';
import AdminModal from '@/components/AdminModal';
import DictionaryModal from '@/components/DictionaryModal';
import YuLogo from '@/components/YuLogo';

interface NavbarProps {
  onOpenDictionary?: () => void;
  onOpenDesmos?: () => void;
  onOpenFormula?: () => void;
  onOpenPricing?: () => void;
  onOpenSpeakingAi?: () => void;
  onOpenIeltsGames?: () => void;
  onOpenAdmin?: () => void;
}

export default function Navbar({
  onOpenDictionary,
  onOpenDesmos,
  onOpenFormula,
  onOpenPricing,
  onOpenSpeakingAi,
  onOpenIeltsGames,
  onOpenAdmin,
}: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [streakModalOpen, setStreakModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [teacherStudioOpen, setTeacherStudioOpen] = useState(false);
  const [speakingAiOpen, setSpeakingAiOpen] = useState(false);
  const [ieltsGamesOpen, setIeltsGamesOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [dictModalInternalOpen, setDictModalInternalOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  const toolsDropdownRef = useRef<HTMLDivElement | null>(null);

  const { xp, streak } = useGamification();
  const { theme, toggleTheme } = useTheme();
  const { user, isTeacher } = useAuth();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (toolsDropdownRef.current && !toolsDropdownRef.current.contains(e.target as Node)) {
        setToolsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = () => {
    sound.playClick();
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
  };

  const handleThemeToggle = () => {
    sound.playClick();
    toggleTheme();
  };

  const scrollToPricing = () => {
    sound.playClick();
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
    if (onOpenPricing) {
      onOpenPricing();
    } else {
      const el = document.getElementById('yu-pricing-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#yu-pricing-section';
      }
    }
  };

  const scrollToIelts = () => {
    sound.playClick();
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
    const el = document.getElementById('ielts-hub-section') || document.getElementById('shadowing-studio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#ielts-hub-section';
    }
  };

  const handleOpenAiSpeaking = () => {
    sound.playClick();
    setToolsDropdownOpen(false);
    if (onOpenSpeakingAi) {
      onOpenSpeakingAi();
    } else {
      setSpeakingAiOpen(true);
    }
  };

  const handleOpenIeltsGames = () => {
    sound.playClick();
    setToolsDropdownOpen(false);
    if (onOpenIeltsGames) {
      onOpenIeltsGames();
    } else {
      setIeltsGamesOpen(true);
    }
  };

  const handleOpenAdminModal = () => {
    sound.playClick();
    setToolsDropdownOpen(false);
    if (onOpenAdmin) {
      onOpenAdmin();
    } else {
      setAdminModalOpen(true);
    }
  };

  const handleOpenDictionary = () => {
    sound.playClick();
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
    if (onOpenDictionary) {
      onOpenDictionary();
    } else {
      setDictModalInternalOpen(true);
    }
  };

  return (
    <>
      {/* Main Single-Row Sticky Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/95 dark:bg-slate-900/95 border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 gap-2 flex-nowrap whitespace-nowrap">
            
            {/* 1. Left: Logo & Brand */}
            <Link 
              href="/" 
              onClick={handleNavClick}
              className="flex items-center focus:outline-none shrink-0"
            >
              <YuLogo size="md" />
            </Link>

            {/* 2. Center: Clean Navigation Links (Rigid Flex Sibling - Never Overlaps) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
              <Link
                href="/"
                onClick={handleNavClick}
                className={`px-2.5 py-1.5 rounded-xl text-xs xl:text-sm font-bold transition-all shrink-0 ${
                  pathname === '/'
                    ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                Asosiy
              </Link>

              <Link
                href="/tests"
                onClick={handleNavClick}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs xl:text-sm font-bold transition-all shrink-0 ${
                  pathname === '/tests'
                    ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-sky-500" />
                <span className="hidden xl:inline">5,000+ Mock Testlar</span>
                <span className="xl:hidden">Mock Testlar</span>
              </Link>

              <button
                onClick={scrollToIelts}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs xl:text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all shrink-0"
              >
                <Headphones className="w-3.5 h-3.5 text-emerald-500" />
                <span>IELTS Hub</span>
              </button>

              <Link
                href="/questions"
                onClick={handleNavClick}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs xl:text-sm font-bold transition-all shrink-0 ${
                  pathname === '/questions'
                    ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
                <span className="hidden xl:inline">Savollar Bazasi</span>
                <span className="xl:hidden">Savollar</span>
              </Link>

              {/* 10,000+ Lug'at Header Button */}
              <button
                onClick={handleOpenDictionary}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs xl:text-sm font-bold bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30 hover:bg-amber-100 dark:hover:bg-amber-500/20 transition-all cursor-pointer shadow-sm shrink-0 whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]"
                title="10,000+ Akademik va Umumiy Lug'at (A1 - C2)"
              >
                <BookA className="w-3.5 h-3.5 text-amber-500" />
                <span className="hidden xl:inline">10,000+ Lug&apos;at</span>
                <span className="xl:hidden">Lug&apos;at</span>
              </button>

              {/* Tools Dropdown */}
              <div className="relative shrink-0" ref={toolsDropdownRef}>
                <button
                  onClick={() => { sound.playClick(); setToolsDropdownOpen(!toolsDropdownOpen); }}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs xl:text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Vositalar</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {toolsDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-2 space-y-1 animate-in fade-in slide-in-from-top-2 z-50">
                    <button
                      onClick={handleOpenAiSpeaking}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all text-left"
                    >
                      <BrainCircuit className="w-4 h-4 text-cyan-500" />
                      <div>
                        <span>AI Voice Speaking Partner</span>
                        <span className="text-[10px] text-slate-400 block font-normal">Real-vaqtda mikrofonda gaplashing</span>
                      </div>
                    </button>

                    <button
                      onClick={handleOpenIeltsGames}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:text-amber-600 dark:hover:text-amber-400 transition-all text-left"
                    >
                      <Gamepad2 className="w-4 h-4 text-amber-500" />
                      <div>
                        <span>IELTS Gamification &amp; O&apos;yinlar</span>
                        <span className="text-[10px] text-slate-400 block font-normal">Word Match &amp; Collocation Arena</span>
                      </div>
                    </button>

                    {onOpenDesmos && (
                      <button
                        onClick={() => { sound.playClick(); setToolsDropdownOpen(false); onOpenDesmos(); }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all text-left"
                      >
                        <Calculator className="w-4 h-4 text-emerald-500" />
                        <div>
                          <span>Desmos Kalkulyator</span>
                          <span className="text-[10px] text-slate-400 block font-normal">100% Sayt ichida grafik yechish</span>
                        </div>
                      </button>
                    )}

                    {onOpenDictionary && (
                      <button
                        onClick={() => { sound.playClick(); setToolsDropdownOpen(false); onOpenDictionary(); }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-400 transition-all text-left"
                      >
                        <BookOpen className="w-4 h-4 text-purple-500" />
                        <div>
                          <span>Akademik Lug&apos;at (CEFR &amp; SAT)</span>
                          <span className="text-[10px] text-slate-400 block font-normal">B1–C2 darajalar va Flashcardlar</span>
                        </div>
                      </button>
                    )}

                    {onOpenFormula && (
                      <button
                        onClick={() => { sound.playClick(); setToolsDropdownOpen(false); onOpenFormula(); }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-left"
                      >
                        <Sparkles className="w-4 h-4 text-sky-500" />
                        <div>
                          <span>College Board Formulalar</span>
                          <span className="text-[10px] text-slate-400 block font-normal">Geometriya va algebra varaqasi</span>
                        </div>
                      </button>
                    )}

                    <div className="w-full h-px bg-slate-200 dark:bg-slate-800 my-1" />

                    <button
                      onClick={handleOpenAdminModal}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-left"
                    >
                      <ShieldAlert className="w-4 h-4 text-cyan-500" />
                      <div>
                        <span>Admin Boshqaruv Paneli</span>
                        <span className="text-[10px] text-slate-400 block font-normal">Statistika va testlar boshqaruvi</span>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={scrollToPricing}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs xl:text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
              >
                <Gem className="w-3.5 h-3.5 text-purple-500" />
                <span>Tariflar</span>
              </button>
            </nav>

            {/* 3. Right: Single-Row Controls (Theme + Streak/XP + Auth/Teacher Studio + CTA) */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap shrink-0">
              
              {/* Theme Toggle Button */}
              <button
                onClick={handleThemeToggle}
                title={theme === 'dark' ? "Yorug' rejim (Light Mode)" : "Tungi rejim (Dark Mode)"}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-all shrink-0 hover:scale-105 active:scale-95"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </button>

              {/* Streak + XP Counter Pill */}
              <button
                onClick={() => {
                  sound.playClick();
                  setStreakModalOpen(true);
                }}
                title="Faol o'qish seriyasi va XP ballaringiz"
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 text-xs font-bold transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                <span className="flex items-center gap-0.5 text-amber-600 dark:text-amber-400">
                  <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                  <span>{streak}K</span>
                </span>
                <span className="w-1 h-1 rounded-full bg-amber-400/60" />
                <span className="flex items-center gap-0.5 text-cyan-600 dark:text-cyan-400 font-mono">
                  <Zap className="w-3 h-3 text-cyan-600 fill-cyan-500" />
                  <span>{xp}</span>
                </span>
              </button>

              {/* Teacher Test Studio Button */}
              {isTeacher && (
                <button
                  onClick={() => { sound.playClick(); setTeacherStudioOpen(true); }}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold bg-amber-500/15 hover:bg-amber-500/25 text-amber-700 dark:text-amber-300 border border-amber-500/40 transition-all shrink-0 hover:scale-105"
                  title="Ustoz Test Studiyasini ochish"
                >
                  <PlusCircle className="w-3.5 h-3.5 text-amber-500" />
                  <span className="hidden sm:inline">Test Qo&apos;shish</span>
                </button>
              )}

              {/* Auth / Profile & Analytics Button */}
              <button
                onClick={() => { sound.playClick(); setAuthModalOpen(true); }}
                className={`inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-bold border transition-all shrink-0 ${
                  user
                    ? 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200'
                    : 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 border-cyan-500/30'
                }`}
                title={user ? `${user.name} (Profil & Tahlil)` : "Kirish / Ro'yxatdan o'tish"}
              >
                {user ? (
                  <>
                    {user.role === 'teacher' ? (
                      <School className="w-3.5 h-3.5 text-amber-500" />
                    ) : (
                      <GraduationCap className="w-3.5 h-3.5 text-cyan-500" />
                    )}
                    <span className="max-w-[70px] sm:max-w-[100px] truncate">{user.name.split(' ')[0]}</span>
                  </>
                ) : (
                  <>
                    <User className="w-3.5 h-3.5" />
                    <span>Kirish</span>
                  </>
                )}
              </button>

              {/* Mobile Menu Trigger */}
              <div className="flex lg:hidden items-center">
                <button
                  onClick={() => { sound.playClick(); setMobileMenuOpen(!mobileMenuOpen); }}
                  className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2">
            <Link
              href="/"
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Asosiy Sahifa
            </Link>
            <Link
              href="/tests"
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              5,000+ Mock Testlar (Bluebook)
            </Link>
            <button
              onClick={scrollToIelts}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
            >
              <span>IELTS 4 Skills Hub</span>
              <Headphones className="w-4 h-4 text-emerald-500" />
            </button>
            <button
              onClick={handleOpenDictionary}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10 border border-amber-500/20 hover:bg-amber-100 dark:hover:bg-amber-500/20 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <BookA className="w-4 h-4 text-amber-500" />
                <span>10,000+ Akademik Lug&apos;at (A1–C2)</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <Link
              href="/questions"
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Savollar Bazasi &amp; Kategoriyalar
            </Link>
            <button
              onClick={() => { handleNavClick(); handleOpenAiSpeaking(); }}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
            >
              <span>AI Voice Speaking Partner</span>
              <BrainCircuit className="w-4 h-4 text-cyan-500" />
            </button>
            <button
              onClick={() => { handleNavClick(); handleOpenIeltsGames(); }}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-amber-600 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
            >
              <span>IELTS Gamification &amp; O&apos;yinlar</span>
              <Gamepad2 className="w-4 h-4 text-amber-500" />
            </button>
            <button
              onClick={() => { handleNavClick(); handleOpenAdminModal(); }}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
            >
              <span>Admin Boshqaruv Markazi</span>
              <ShieldAlert className="w-4 h-4 text-cyan-500" />
            </button>
            {isTeacher && (
              <button
                onClick={() => { handleNavClick(); setTeacherStudioOpen(true); }}
                className="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-amber-600 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
              >
                <span>Ustoz Test Studiyasi (Savol Qo&apos;shish)</span>
                <PlusCircle className="w-4 h-4 text-amber-500" />
              </button>
            )}
            <button
              onClick={scrollToPricing}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
            >
              <span>Tariflar &amp; Obunalar</span>
              <Gem className="w-4 h-4 text-purple-500" />
            </button>
            <button
              onClick={() => { handleNavClick(); setAuthModalOpen(true); }}
              className="w-full text-left px-3 py-2 rounded-xl text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-between"
            >
              <span>{user ? `Profil & Tahlil (${user.name})` : "Kirish / Ro'yxatdan O'tish"}</span>
              <User className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>

      {/* Modals - Always float cleanly above header (z-[100]) */}
      <StreakModal
        isOpen={streakModalOpen}
        onClose={() => setStreakModalOpen(false)}
        onOpenPricing={scrollToPricing}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      <TeacherStudioModal
        isOpen={teacherStudioOpen}
        onClose={() => setTeacherStudioOpen(false)}
      />

      <AiSpeakingPartnerModal
        isOpen={speakingAiOpen}
        onClose={() => setSpeakingAiOpen(false)}
      />

      <IeltsGameModal
        isOpen={ieltsGamesOpen}
        onClose={() => setIeltsGamesOpen(false)}
      />

      <AdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />

      <DictionaryModal
        isOpen={dictModalInternalOpen}
        onClose={() => setDictModalInternalOpen(false)}
      />
    </>
  );
}
