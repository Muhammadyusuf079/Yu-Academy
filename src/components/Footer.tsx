import React from 'react';
import Link from 'next/link';
import { MapPin, Globe, Sparkles, Shield, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Decorative Gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Brand & Geo Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-cyan-500/20">
                YU
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">YU ACADEMY</span>
                <span className="block text-xs font-semibold text-cyan-400">2026 Digital EdTech Platform</span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              1500+ Digital SAT va 8.5 IELTS natijalariga erishish uchun ultra-zamonaviy ta&apos;lim ekotizimi. Rasmiy College Board Bluebook va Cambridge CD-IELTS simulyatori.
            </p>

            {/* GEO Local SEO info */}
            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Bosh ofis: Toshkent shahri, O&apos;zbekiston (Tashkent, UZ)</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Hudud: O&apos;zbekiston & Markaziy Osiyo (Central Asia)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Imtihonlar
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/tests" className="hover:text-cyan-400 transition-colors">Digital SAT Math</Link>
              </li>
              <li>
                <Link href="/tests" className="hover:text-cyan-400 transition-colors">SAT Reading & Writing</Link>
              </li>
              <li>
                <Link href="/tests" className="hover:text-cyan-400 transition-colors">IELTS Academic Reading</Link>
              </li>
              <li>
                <Link href="/tests" className="hover:text-cyan-400 transition-colors">IELTS Listening Simulation</Link>
              </li>
              <li>
                <Link href="/tests" className="hover:text-cyan-400 transition-colors">College Board Scoring</Link>
              </li>
            </ul>
          </div>

          {/* Interaktiv Asboblar */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Asboblar
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/questions" className="hover:text-cyan-400 transition-colors">1,850+ Savollar Banki</Link>
              </li>
              <li>
                <a href="#desmos-section" className="hover:text-cyan-400 transition-colors">Desmos Kalkulyatori</a>
              </li>
              <li>
                <a href="#grant-calculator" className="hover:text-cyan-400 transition-colors">AQSH Grant Kalkulyatori</a>
              </li>
              <li>
                <a href="#shadowing-section" className="hover:text-cyan-400 transition-colors">Speaking Shadowing Trenajyori</a>
              </li>
              <li>
                <a href="#dictionary-section" className="hover:text-cyan-400 transition-colors">5,000+ Akademik Lug&apos;at</a>
              </li>
            </ul>
          </div>

          {/* Platforma & Huquqiy */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Mualliflar
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="font-semibold text-white">Mualliflar va Ishlab chiquvchilar:</p>
              <p className="text-cyan-300">Ilkhomjonov Umarbek</p>
              <p className="text-cyan-300">Xurramov MuhammadYusuf</p>
              <div className="pt-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Shield className="w-3 h-3" /> Rasmiy 2026 Standart
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; 2026 YU Academy. Barcha huquqlar himoyalangan. Mualliflar: Ilkhomjonov Umarbek va Xurramov MuhammadYusuf.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              O&apos;zbekistonda <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> bilan yaratilgan
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-cyan-400 font-medium">yuacademy.uz</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
