'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, Printer, CheckCircle2, X, Download } from 'lucide-react';
import { sound } from '@/lib/sound';

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
  initialCandidateName = 'Mehmon O\'quvchi',
}: CertificateModalProps) {
  const [candidateName, setCandidateName] = useState(initialCandidateName);
  const [certCode, setCertCode] = useState('');
  const [issueDate, setIssueDate] = useState('');

  useEffect(() => {
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
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="print:hidden absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate Frame (Optimized for Screen & Print) */}
        <div className="relative bg-gradient-to-b from-amber-50/10 via-slate-950 to-amber-950/10 border-4 border-amber-500/40 rounded-2xl p-6 sm:p-10 text-center shadow-inner overflow-hidden">
          
          {/* Subtle Decorative Corners */}
          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-400/60" />
          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-400/60" />
          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-400/60" />
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-400/60" />

          {/* Seal / Emblem */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 shadow-lg shadow-amber-500/30 mb-4">
            <Award className="w-9 h-9" />
          </div>

          {/* Certificate Header */}
          <p className="text-xs uppercase tracking-[0.3em] font-extrabold text-amber-400 mb-1">
            YU ACADEMY • OFFICIAL STANDARDIZED ASSESSMENT
          </p>
          <h2 className="text-2xl sm:text-4xl font-serif font-black text-white tracking-wide mb-3">
            Certificate of Achievement
          </h2>
          <p className="text-xs text-slate-300 font-sans tracking-wider uppercase mb-6">
            This official credential confirms that
          </p>

          {/* Student Editable Name Box */}
          <div className="max-w-md mx-auto mb-2">
            <input
              type="text"
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              placeholder="Ism va Familiyangizni kiriting"
              className="w-full text-center text-xl sm:text-2xl font-serif font-bold text-amber-300 bg-transparent border-b-2 border-amber-400/60 focus:outline-none focus:border-amber-300 pb-1"
            />
          </div>
          <p className="print:hidden text-[11px] text-slate-400 mb-6 italic">
            (Ismingizni o&apos;zgartirish uchun matn ustiga bosing)
          </p>

          {/* Achievement Description */}
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-6 font-sans">
            has successfully completed the full-length standardized examination for <br />
            <strong className="text-white font-bold">{examTitle}</strong> under strict 
            College Board & Cambridge assessment criteria, exhibiting high academic proficiency and analytical acumen.
          </p>

          {/* Official Score Display */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 mb-8">
            <div className="text-center">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
                Official Score
              </span>
              <span className="text-2xl sm:text-3xl font-black text-white font-mono">
                {scoreDisplay}
              </span>
            </div>
            <div className="text-center border-l border-slate-700">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
                Percentile Status
              </span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                {percentile}
              </span>
            </div>
          </div>

          {/* Signatures & Verification Grid */}
          <div className="grid grid-cols-3 items-end gap-4 max-w-xl mx-auto pt-4 border-t border-slate-800">
            
            {/* Signature 1: Academic Director */}
            <div className="flex flex-col items-center">
              <div className="h-14 flex items-end justify-center mb-1">
                <img
                  src="/assets/images/signatures/signature_academic_director.png"
                  alt="Signature"
                  className="max-h-14 max-w-[130px] object-contain -rotate-2"
                />
              </div>
              <div className="w-full border-t border-slate-600 pt-1 text-center">
                <span className="text-[11px] font-semibold text-slate-300 block">
                  Head of Academic Board
                </span>
              </div>
            </div>

            {/* Central Verification QR/Badge */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/10 mb-1">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-300 block">
                {certCode}
              </span>
              <span className="text-[9px] font-bold text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                VERIFIED 2026
              </span>
            </div>

            {/* Signature 2: Chief Assessment Officer */}
            <div className="flex flex-col items-center">
              <div className="h-14 flex items-end justify-center mb-1">
                <img
                  src="/assets/images/signatures/signature_lead_examiner.png"
                  alt="Signature"
                  className="max-h-14 max-w-[130px] object-contain rotate-1"
                />
              </div>
              <div className="w-full border-t border-slate-600 pt-1 text-center">
                <span className="text-[11px] font-semibold text-slate-300 block">
                  Chief Assessment Officer
                </span>
              </div>
            </div>

          </div>

          {/* Footer Meta */}
          <div className="mt-6 text-[11px] text-slate-400">
            Issue Date: <strong className="text-slate-200">{issueDate}</strong> • Verification Registry:{' '}
            <span className="text-cyan-400 font-mono font-medium">yuacademy.uz/verify/{certCode}</span>
          </div>

        </div>

        {/* Action Controls */}
        <div className="print:hidden mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handlePrint}
            className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-yellow-400 hover:brightness-110 text-slate-950 shadow-lg shadow-amber-500/25 flex items-center gap-2 transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Chop Etish / PDF Saqlash</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              window.open(`/api/verify-certificate?id=${certCode}`, '_blank');
            }}
            className="px-5 py-3 rounded-xl font-bold text-sm bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-2 transition-all"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Reestrda Tekshirish</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-5 py-3 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1.5 transition-all"
          >
            <X className="w-4 h-4" />
            <span>Yopish</span>
          </button>
        </div>

      </div>
    </div>
  );
}
