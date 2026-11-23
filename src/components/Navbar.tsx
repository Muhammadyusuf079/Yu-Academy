'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sparkles,
  BookOpen,
  Calculator,
  Award,
  Menu,
  X,
  ArrowRight,
  Flame,
  Zap,
  Gem,
} from 'lucide-react';
import { sound } from '@/lib/sound';
import { useGamification } from '@/lib/xp-store';
import StreakModal from '@/components/StreakModal';

interface NavbarProps {
  onOpenDictionary?: () => void;
  onOpenDesmos?: () => void;
  onOpenFormula?: () => void;
  onOpenPricing?: () => void;
}

export default function Navbar({
  onOpenDictionary,
  onOpenDesmos,
  onOpenFormula,
  onOpenPricing,
}: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [streakModalOpen, setStreakModalOpen] = useState(false);

  const { xp, streak } = useGamification();

  const handleNavClick = () => {
    sound.playClick();
    setMobileMenuOpen(false);
  };

  const scrollToPricing = () => {
    sound.playClick();
    setMobileMenuOpen(false);
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

  return (
    <>
      <StreakModal
        isOpen={streakModalOpen}
        onClose={() => setStreakModalOpen(false)}
        onOpenPricing={scrollToPricing}
      />

      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-900/90 border-b border-slate-800/80 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
            
            {/* Logo & Brand */}
            <Link 
              href="/" 
              onClick={handleNavClick}
              className="flex items-center gap-3 group focus:outline-none shrink-0"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 p-0.5 shadow-md shadow-cyan-500/30 group-hover:shadow-cyan-400/50 transition-all duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden">
                  <span className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-sky-200 bg-clip-text text-transparent">
                    YU
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                    YU ACADEMY
                  </span>
                  <span className="px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-md">
                    2026
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-400 tracking-wide hidden sm:block">
                  Digital SAT & IELTS Platform
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                onClick={handleNavClick}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  pathname === '/'
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                Asosiy
              </Link>

              <Link
                href="/tests"
                onClick={handleNavClick}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  pathname === '/tests'
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Award className="w-4 h-4 text-sky-400" />
                Mock Testlar
              </Link>

              <Link
                href="/questions"
                onClick={handleNavClick}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  pathname === '/questions'
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <BookOpen className="w-4 h-4 text-cyan-400" />
                Savollar Banki
              </Link>

              {onOpenDictionary && (
                <button
                  onClick={() => { sound.playClick(); onOpenDictionary(); }}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Lug&apos;at (CEFR & IELTS)
                </button>
              )}

              {onOpenDesmos && (
                <button
                  onClick={() => { sound.playClick(); onOpenDesmos(); }}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all flex items-center gap-1.5"
                >
                  <Calculator className="w-4 h-4 text-emerald-400" />
                  Desmos
                </button>
              )}

              {onOpenFormula && (
                <button
                  onClick={() => { sound.playClick(); onOpenFormula(); }}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
                >
                  Formulalar
                </button>
              )}

              <button
                onClick={scrollToPricing}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all flex items-center gap-1.5"
              >
                <Gem className="w-4 h-4 text-purple-400" />
                Tariflar
              </button>
            </nav>

            {/* Right Controls: Streak & XP Pill + Action */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Streak + XP Counter Pill */}
              <button
                onClick={() => {
                  sound.playClick();
                  setStreakModalOpen(true);
                }}
                title="Faol o'qish seriyasi va XP ballaringiz (Batafsil ko'rish uchun bosing)"
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-yellow-500/10 hover:from-amber-500/20 hover:to-yellow-500/20 border border-amber-500/30 text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-1 text-amber-400">
                  <Flame className="w-4 h-4 fill-amber-400 text-amber-500" />
                  <span>{streak} Kun</span>
                </span>
                <span className="w-1 h-1 rounded-full bg-amber-400/60" />
                <span className="flex items-center gap-1 text-cyan-400 font-mono">
                  <Zap className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                  <span>{xp.toLocaleString()} XP</span>
                </span>
              </button>

              {/* Start Test CTA */}
              <Link
                href="/tests"
                onClick={handleNavClick}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 shadow-md shadow-cyan-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Test Topshirish</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Button */}
              <div className="flex lg:hidden items-center">
                <button
                  onClick={() => { sound.playClick(); setMobileMenuOpen(!mobileMenuOpen); }}
                  className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2">
            <Link
              href="/"
              onClick={handleNavClick}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-800"
            >
              Asosiy Sahifa
            </Link>
            <Link
              href="/tests"
              onClick={handleNavClick}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-800"
            >
              Mock Testlar (54 talik)
            </Link>
            <Link
              href="/questions"
              onClick={handleNavClick}
              className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-800"
            >
              Savollar Banki (1,850+)
            </Link>
            {onOpenDictionary && (
              <button
                onClick={() => { handleNavClick(); onOpenDictionary(); }}
                className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-800 flex items-center justify-between"
              >
                <span>Akademik Lug&apos;at</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </button>
            )}
            {onOpenDesmos && (
              <button
                onClick={() => { handleNavClick(); onOpenDesmos(); }}
                className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-800 flex items-center justify-between"
              >
                <span>Desmos Kalkulyator</span>
                <Calculator className="w-4 h-4 text-emerald-400" />
              </button>
            )}
            {onOpenFormula && (
              <button
                onClick={() => { handleNavClick(); onOpenFormula(); }}
                className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-800"
              >
                Rasmiy Formulalar
              </button>
            )}
            <button
              onClick={scrollToPricing}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-slate-800 flex items-center justify-between"
            >
              <span>Tariflar & Obunalar</span>
              <Gem className="w-4 h-4 text-purple-400" />
            </button>
          </div>
        )}
      </header>
    </>
  );
}
