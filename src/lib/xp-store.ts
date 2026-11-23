'use client';

import { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { sound } from '@/lib/sound';

export interface GamificationState {
  xp: number;
  streak: number;
  activePlan: 'free' | 'plus' | 'pro' | 'premium';
  completedToday: {
    light?: boolean;
    medium?: boolean;
    hard?: boolean;
  };
}

const STORAGE_KEY_XP = 'yu_user_xp';
const STORAGE_KEY_STREAK = 'yu_user_streak';
const STORAGE_KEY_PLAN = 'yu_active_plan';
const STORAGE_KEY_COMPLETED = 'yu_daily_completed_tasks';

export function getStoredXP(): number {
  if (typeof window === 'undefined') return 1450;
  try {
    const val = localStorage.getItem(STORAGE_KEY_XP);
    if (val !== null && !isNaN(Number(val))) return Math.max(0, parseInt(val, 10));
  } catch {}
  return 1450;
}

export function getStoredStreak(): number {
  if (typeof window === 'undefined') return 3;
  try {
    const val = localStorage.getItem(STORAGE_KEY_STREAK);
    if (val !== null && !isNaN(Number(val))) return Math.max(1, parseInt(val, 10));
  } catch {}
  return 3;
}

export function getStoredPlan(): 'free' | 'plus' | 'pro' | 'premium' {
  if (typeof window === 'undefined') return 'free';
  try {
    const val = localStorage.getItem(STORAGE_KEY_PLAN) as any;
    if (['free', 'plus', 'pro', 'premium'].includes(val)) return val;
  } catch {}
  return 'free';
}

export function useGamification() {
  const [xp, setXp] = useState<number>(1450);
  const [streak, setStreak] = useState<number>(3);
  const [activePlan, setActivePlan] = useState<'free' | 'plus' | 'pro' | 'premium'>('free');
  const [completedToday, setCompletedToday] = useState<{ light?: boolean; medium?: boolean; hard?: boolean }>({});
  const [notification, setNotification] = useState<string | null>(null);

  // Sync from localStorage on mount and listen to changes
  useEffect(() => {
    setXp(getStoredXP());
    setStreak(getStoredStreak());
    setActivePlan(getStoredPlan());

    try {
      const savedTasks = localStorage.getItem(STORAGE_KEY_COMPLETED);
      if (savedTasks) setCompletedToday(JSON.parse(savedTasks));
    } catch {}

    const handleSync = (e: any) => {
      if (e.detail?.xp !== undefined) setXp(e.detail.xp);
      if (e.detail?.streak !== undefined) setStreak(e.detail.streak);
      if (e.detail?.plan !== undefined) setActivePlan(e.detail.plan);
      if (e.detail?.completed !== undefined) setCompletedToday(e.detail.completed);
    };

    window.addEventListener('yu_gamification_updated', handleSync);
    return () => window.removeEventListener('yu_gamification_updated', handleSync);
  }, []);

  const triggerUpdate = (newXP: number, newStreak: number, newPlan: any, newCompleted: any) => {
    try {
      window.dispatchEvent(
        new CustomEvent('yu_gamification_updated', {
          detail: { xp: newXP, streak: newStreak, plan: newPlan, completed: newCompleted },
        })
      );
    } catch {}
  };

  const addXP = useCallback(
    (amount: number, reason?: string) => {
      if (!amount || amount <= 0) return;
      const current = getStoredXP();
      const updated = current + amount;
      try {
        localStorage.setItem(STORAGE_KEY_XP, updated.toString());
      } catch {}
      setXp(updated);
      sound.playCoin();

      const notifMsg = reason ? `+${amount} XP: ${reason}` : `+${amount} XP qo'shildi!`;
      setNotification(notifMsg);
      setTimeout(() => setNotification(null), 3500);

      triggerUpdate(updated, streak, activePlan, completedToday);
    },
    [streak, activePlan, completedToday]
  );

  const claimPlanWithXP = useCallback(
    (planId: 'plus' | 'pro' | 'premium', xpCost: number): boolean => {
      const current = getStoredXP();
      if (current < xpCost) {
        sound.playError();
        return false;
      }
      const updated = current - xpCost;
      try {
        localStorage.setItem(STORAGE_KEY_XP, updated.toString());
        localStorage.setItem(STORAGE_KEY_PLAN, planId);
      } catch {}

      setXp(updated);
      setActivePlan(planId);
      sound.playSuccess();
      try {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
      } catch {}

      triggerUpdate(updated, streak, planId, completedToday);
      return true;
    },
    [streak, completedToday]
  );

  const completeDailyTask = useCallback(
    (tier: 'light' | 'medium' | 'hard') => {
      if (completedToday[tier]) return; // already done today

      const xpMap: Record<string, number> = {
        light: 200,
        medium: 350,
        hard: 450,
      };

      const reward = xpMap[tier] || 200;
      const newCompleted = { ...completedToday, [tier]: true };

      try {
        localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(newCompleted));
      } catch {}
      setCompletedToday(newCompleted);

      addXP(reward, `${tier === 'light' ? 'Yengil' : tier === 'medium' ? "O'rtacha" : 'Intensiv'} kunlik reja yakunlandi!`);
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch {}

      triggerUpdate(getStoredXP(), streak, activePlan, newCompleted);
    },
    [completedToday, addXP, streak, activePlan]
  );

  return {
    xp,
    streak,
    activePlan,
    completedToday,
    notification,
    addXP,
    claimPlanWithXP,
    completeDailyTask,
  };
}
