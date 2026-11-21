'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, BookOpen, Calculator, Headphones, Award, Menu, X, ArrowRight, Volume2 } from 'lucide-react';
import { sound } from '@/lib/sound';

interface NavbarProps {
  onOpenDictionary?: () => void;
  onOpenDesmos?: () => void;
  onOpenFormula?: () => void;
}

export default function Navbar({ onOpenDictionary, onOpenDesmos, onOpenFormula }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    sound.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-900/85 border-b border-slate-800/80 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand */}
          <Link 
            href="/" 
            onClick={handleNavClick}
            className="flex items-center gap-3 group focus:outline-none"
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
                <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  YU ACADEMY
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-md">
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
              Bosh sahifa
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
              Imtihonlar Markazi
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
                Lug&apos;at (5,000+)
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
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/tests"
              onClick={handleNavClick}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:from-cyan-300 hover:to-sky-200 shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Testni boshlash</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <Link
            href="/"
            onClick={handleNavClick}
            className={`block px-4 py-3 rounded-xl text-base font-semibold ${
              pathname === '/' ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            Bosh sahifa
          </Link>
          <Link
            href="/tests"
            onClick={handleNavClick}
            className={`block px-4 py-3 rounded-xl text-base font-semibold ${
              pathname === '/tests' ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            Imtihonlar Markazi (SAT & IELTS)
          </Link>
          <Link
            href="/questions"
            onClick={handleNavClick}
            className={`block px-4 py-3 rounded-xl text-base font-semibold ${
              pathname === '/questions' ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            Savollar Banki (1,850+ savol)
          </Link>
          {onOpenDictionary && (
            <button
              onClick={() => { handleNavClick(); onOpenDictionary(); }}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-300 hover:bg-slate-900"
            >
              Lug&apos;at qidiruvi (5,000+ so&apos;z)
            </button>
          )}
          {onOpenDesmos && (
            <button
              onClick={() => { handleNavClick(); onOpenDesmos(); }}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-300 hover:bg-slate-900"
            >
              Desmos Kalkulyatori
            </button>
          )}
          <div className="pt-2">
            <Link
              href="/tests"
              onClick={handleNavClick}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300"
            >
              <span>Mock Testni Boshlash</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
