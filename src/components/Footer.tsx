'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Globe, Sparkles, Shield, Heart, Award, Headphones, BookOpen, ShieldAlert } from 'lucide-react';
import YuLogo from '@/components/YuLogo';

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 mt-20 relative overflow-hidden transition-colors">
      {/* Decorative Gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-200 dark:border-slate-800/60">
          
          {/* Brand & Geo Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <YuLogo size="md" />
            </Link>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              1500+ Digital SAT va 8.5 IELTS natijalariga erishish uchun ultra-zamonaviy ta&apos;lim ekotizimi. Rasmiy College Board Bluebook va Cambridge CD-IELTS simulyatori.
            </p>

            {/* GEO Local SEO info */}
            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>Bosh ofis: Toshkent shahri, O&apos;zbekiston (Tashkent, UZ)</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Hudud: O&apos;zbekiston &amp; Markaziy Osiyo (Central Asia)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Imtihonlar &amp; Testlar
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/tests" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Digital SAT Mock Testlar</Link>
              </li>
              <li>
                <Link href="/tests" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Cambridge IELTS 19 Simulyatsiya</Link>
              </li>
              <li>
                <Link href="/questions" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">5,000+ Savollar Bazasi</Link>
              </li>
              <li>
                <Link href="/tests" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">College Board Bluebook Baholash</Link>
              </li>
            </ul>
          </div>

          {/* Interaktiv Asboblar */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Interaktiv Asboblar
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#shadowing-studio" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">IELTS Shadowing Studio (Erkak &amp; Ayol)</a>
              </li>
              <li>
                <a href="#ielts-hub-section" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">AI Voice Speaking Partner</a>
              </li>
              <li>
                <a href="#grant-calculator" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">AQSH Grant Kalkulyatori</a>
              </li>
              <li>
                <a href="#yu-pricing-section" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Pro &amp; VIP Tariflar</a>
              </li>
            </ul>
          </div>

          {/* Huquqiy & Standartlar */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Standartlar &amp; Xavfsizlik
            </h4>
            <div className="space-y-3 text-xs text-slate-500">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>College Board 2026 Standarti</span>
              </div>
              <p className="leading-relaxed">
                Bluebook rasmiy imtihon interfeysi va o&apos;rnatilgan Desmos kalkulyatori.
              </p>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold pt-1">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Cambridge IELTS</span>
              </div>
              <p className="leading-relaxed">
                Band 8.5 va 9.0 native speaker audio modellari va rasmiy mezonlar.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 YU Academy. Barcha huquqlar himoyalangan.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Designed for ambitious SAT 1500+ &amp; IELTS 8.5+ scholars</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
