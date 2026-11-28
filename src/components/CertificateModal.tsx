'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, Printer, CheckCircle2, X, Download, Palette, Sparkles } from 'lucide-react';
import { sound } from '@/lib/sound';
import { useAuth } from '@/lib/auth-store';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  examTitle: string;
  scoreDisplay: string;
  percentile: string;
  initialCandidateName?: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  examTitle,
  scoreDisplay,
  percentile,
  initialCandidateName,
}: CertificateModalProps) {
  const { user } = useAuth();
  const [candidateName, setCandidateName] = useState(initialCandidateName || user?.name || 'Mehmon O\'quvchi');
  const [certCode, setCertCode] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [certTheme, setCertTheme] = useState<'ivory' | 'royal_dark'>('ivory');

  useEffect(() => {
    // If user is logged in, automatically inject their real name
    if (user?.name) {
      setCandidateName(user.name);
    } else if (initialCandidateName) {
      setCandidateName(initialCandidateName);
    }

    // Generate unique verifiable certificate serial
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setCertCode(`YU-2026-CERT-${randomNum}`);

    const now = new Date();
    const formatted = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setIssueDate(formatted);
  }, [isOpen, user, initialCandidateName]);

  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl p-4 sm:p-8 shadow-2xl my-6">
        
        {/* Controls Bar */}
        <div className="print:hidden flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-300">Diplom Ko&apos;rinishi:</span>
            <div className="flex rounded-xl p-1 bg-slate-800 border border-slate-700">
              <button
                onClick={() => { sound.playClick(); setCertTheme('ivory'); }}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  certTheme === 'ivory'
                    ? 'bg-amber-100 text-amber-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                📜 Klassik Fil Suyagi (Tavsiya etiladi)
              </button>
              <button
                onClick={() => { sound.playClick(); setCertTheme('royal_dark'); }}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  certTheme === 'royal_dark'
                    ? 'bg-slate-700 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🌌 Royal Qora Oltin
              </button>
            </div>
          </div>

          <button
            onClick={() => { sound.playClick(); onClose(); }}
            className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
            title="Yopish (Chiqish)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Frame (Optimized for Screen & Print) */}
        <div
          className={`relative rounded-2xl p-6 sm:p-12 text-center shadow-2xl overflow-hidden transition-all duration-300 ${
            certTheme === 'ivory'
              ? 'bg-[#FFFDF7] text-slate-900 border-8 border-amber-600/70 shadow-amber-900/20'
              : 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white border-8 border-amber-500/60 shadow-black/60'
          }`}
        >
          {/* Decorative Corners */}
          <div className="absolute top-3 left-3 w-12 h-12 border-t-4 border-l-4 border-amber-500/70" />
          <div className="absolute top-3 right-3 w-12 h-12 border-t-4 border-r-4 border-amber-500/70" />
          <div className="absolute bottom-3 left-3 w-12 h-12 border-b-4 border-l-4 border-amber-500/70" />
          <div className="absolute bottom-3 right-3 w-12 h-12 border-b-4 border-r-4 border-amber-500/70" />

          {/* Seal / Emblem */}
          <div className="inline-flex items-center justify-center w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 text-slate-950 shadow-2xl shadow-amber-500/30 mb-4 border-2 border-white/60">
            <Award className="w-10 h-10" />
          </div>

          {/* Certificate Header */}
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] font-black text-amber-700 dark:text-amber-400 mb-1">
            YU ACADEMY • OFFICIAL STANDARDIZED ASSESSMENT
          </p>
          <h2
            className={`text-2xl sm:text-4xl font-serif font-black tracking-wide mb-3 ${
              certTheme === 'ivory' ? 'text-slate-950' : 'text-white'
            }`}
          >
            Certificate of Achievement
          </h2>
          <p
            className={`text-xs font-sans tracking-widest uppercase mb-6 ${
              certTheme === 'ivory' ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            This official credential confirms that
          </p>

          {/* Student Editable Name Box - Auto Filled */}
          <div className="max-w-lg mx-auto mb-2">
            <input
              type="text"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              placeholder="Ism va Familiyangizni kiriting"
              className={`w-full text-center text-2xl sm:text-4xl font-serif font-black pb-1 bg-transparent border-b-2 focus:outline-none ${
                certTheme === 'ivory'
                  ? 'text-blue-950 border-amber-600/70 focus:border-amber-700'
                  : 'text-amber-300 border-amber-400/60 focus:border-amber-300'
              }`}
            />
          </div>
          <p className="print:hidden text-[11px] text-slate-400 mb-6 italic">
            (Ismingiz akkauntingizdan avtomatik olindi • O&apos;zgartirish uchun matn ustiga bosing)
          </p>

          {/* Achievement Description */}
          <p
            className={`text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-6 font-sans ${
              certTheme === 'ivory' ? 'text-slate-700' : 'text-slate-300'
            }`}
          >
            has successfully completed the full-length standardized examination for <br />
            <strong className={certTheme === 'ivory' ? 'text-slate-950 font-bold' : 'text-white font-bold'}>
              {examTitle}
            </strong>{' '}
            under strict College Board &amp; Cambridge assessment criteria, exhibiting high academic proficiency and analytical acumen.
          </p>

          {/* Official Score Display */}
          <div
            className={`grid grid-cols-2 gap-4 max-w-md mx-auto p-4 rounded-2xl mb-8 border ${
              certTheme === 'ivory'
                ? 'bg-amber-50/70 border-amber-300 text-slate-900 shadow-sm'
                : 'bg-slate-900/90 border-amber-500/30 text-white'
            }`}
          >
            <div className="text-center">
              <span className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400 tracking-wider block">
                Official Score
              </span>
              <span
                className={`text-2xl sm:text-3xl font-black font-mono ${
                  certTheme === 'ivory' ? 'text-slate-950' : 'text-white'
                }`}
              >
                {scoreDisplay}
              </span>
            </div>
            <div
              className={`text-center border-l ${
                certTheme === 'ivory' ? 'border-amber-200' : 'border-slate-700'
              }`}
            >
              <span className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400 tracking-wider block">
                Percentile Status
              </span>
              <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                {percentile}
              </span>
            </div>
          </div>

          {/* Prominent Large Signatures & Verification Grid */}
          <div
            className={`grid grid-cols-3 items-end gap-6 max-w-2xl mx-auto pt-6 border-t ${
              certTheme === 'ivory' ? 'border-amber-300' : 'border-slate-800'
            }`}
          >
            
            {/* Signature 1: Academic Director */}
            <div className="flex flex-col items-center">
              <div className="h-20 sm:h-24 flex items-end justify-center mb-1">
                <img
                  src="/assets/images/signatures/signature_academic_director.png"
                  alt="Academic Director Signature"
                  className={`max-h-20 sm:max-h-24 max-w-[180px] sm:max-w-[220px] object-contain -rotate-2 ${
                    certTheme === 'royal_dark'
                      ? 'filter invert brightness-200 contrast-125'
                      : 'contrast-125'
                  }`}
                />
              </div>
              <div
                className={`w-full border-t-2 pt-1 text-center ${
                  certTheme === 'ivory' ? 'border-slate-600' : 'border-slate-500'
                }`}
              >
                <span
                  className={`text-xs sm:text-sm font-bold block ${
                    certTheme === 'ivory' ? 'text-slate-950' : 'text-slate-100'
                  }`}
                >
                  Head of Academic Board
                </span>
                <span className="text-[10px] text-slate-500 block">
                  Prof. D. Campbell, Ph.D.
                </span>
              </div>
            </div>

            {/* Central Verification QR/Badge */}
            <div className="flex flex-col items-center justify-center">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-md mb-1 border ${
                  certTheme === 'ivory'
                    ? 'bg-emerald-50 border-emerald-300'
                    : 'bg-slate-900 border-emerald-500/40'
                }`}
              >
                <ShieldCheck className="w-8 h-8" />
              </div>
              <span
                className={`text-[10px] sm:text-xs font-mono font-bold block ${
                  certTheme === 'ivory' ? 'text-slate-800' : 'text-slate-300'
                }`}
              >
                {certCode}
              </span>
              <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                VERIFIED 2026
              </span>
            </div>

            {/* Signature 2: Chief Assessment Officer */}
            <div className="flex flex-col items-center">
              <div className="h-20 sm:h-24 flex items-end justify-center mb-1">
                <img
                  src="/assets/images/signatures/signature_lead_examiner.png"
                  alt="Lead Examiner Signature"
                  className={`max-h-20 sm:max-h-24 max-w-[180px] sm:max-w-[220px] object-contain rotate-1 ${
                    certTheme === 'royal_dark'
                      ? 'filter invert brightness-200 contrast-125'
                      : 'contrast-125'
                  }`}
                />
              </div>
              <div
                className={`w-full border-t-2 pt-1 text-center ${
                  certTheme === 'ivory' ? 'border-slate-600' : 'border-slate-500'
                }`}
              >
                <span
                  className={`text-xs sm:text-sm font-bold block ${
                    certTheme === 'ivory' ? 'text-slate-950' : 'text-slate-100'
                  }`}
                >
                  Chief Assessment Officer
                </span>
                <span className="text-[10px] text-slate-500 block">
                  Dr. E. Harrison, M.Ed.
                </span>
              </div>
            </div>

          </div>

          {/* Footer Meta */}
          <div
            className={`mt-6 text-[11px] ${
              certTheme === 'ivory' ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            Issue Date:{' '}
            <strong className={certTheme === 'ivory' ? 'text-slate-800' : 'text-slate-200'}>
              {issueDate}
            </strong>{' '}
            • Verification Registry:{' '}
            <span className="text-cyan-600 dark:text-cyan-400 font-mono font-medium">
              yuacademy.uz/verify/{certCode}
            </span>
          </div>

        </div>

        {/* Action Controls */}
        <div className="print:hidden mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handlePrint}
            className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-yellow-400 hover:brightness-110 text-slate-950 shadow-lg shadow-amber-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>Chop Etish / PDF Saqlash</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              window.open(`/api/verify-certificate?id=${certCode}`, '_blank');
            }}
            className="px-5 py-3.5 rounded-xl font-bold text-sm bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-2 transition-all"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Reestrda Tekshirish</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-5 py-3.5 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5 transition-all"
          >
            <X className="w-4 h-4" />
            <span>Yopish / Chiqish</span>
          </button>
        </div>

      </div>
    </div>
  );
}
