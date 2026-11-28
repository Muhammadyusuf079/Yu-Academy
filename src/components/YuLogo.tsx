'use client';

import React from 'react';
import Image from 'next/image';

interface YuLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
  showSubtitle?: boolean;
  className?: string;
}

export default function YuLogo({
  size = 'md',
  showBadge = true,
  showSubtitle = true,
  className = '',
}: YuLogoProps) {
  const iconDimensions = {
    sm: { width: 32, height: 32, box: 'w-8 h-8', text: 'text-sm', sub: 'text-[10px]' },
    md: { width: 38, height: 38, box: 'w-9 h-9 sm:w-10 sm:h-10', text: 'text-sm sm:text-base md:text-lg', sub: 'text-[11px]' },
    lg: { width: 56, height: 56, box: 'w-14 h-14', text: 'text-2xl', sub: 'text-xs' },
  }[size];

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* 3D Crystal Sapphire Glowing Logo Icon */}
      <div className={`relative ${iconDimensions.box} rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-400/50 group-hover:scale-105 transition-all duration-300 shrink-0`}>
        <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center overflow-hidden p-1 relative">
          <Image
            src="/icons/icon.svg"
            alt="YU Academy 2026 Official Logo"
            width={iconDimensions.width}
            height={iconDimensions.height}
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] group-hover:rotate-3 transition-transform duration-300"
            priority
          />
        </div>
      </div>

      {/* Typography */}
      <div>
        <div className="flex items-center gap-1.5">
          <span className={`${iconDimensions.text} font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors`}>
            YU ACADEMY
          </span>
          {showBadge && (
            <span className="px-1.5 py-0.5 text-[9px] font-black tracking-wider uppercase bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 rounded-md">
              2026
            </span>
          )}
        </div>
        {showSubtitle && (
          <p className={`${iconDimensions.sub} font-medium text-slate-500 dark:text-slate-400 tracking-wide hidden 2xl:block`}>
            Digital SAT & IELTS Ecosystem
          </p>
        )}
      </div>
    </div>
  );
}
