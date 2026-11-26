'use client';

import { useState, useEffect, useCallback } from 'react';
import { sound } from '@/lib/sound';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  subject?: string;
  institution?: string;
  targetExam?: 'SAT' | 'IELTS' | 'BOTH';
  targetScore?: string;
  xp: number;
  avatar?: string;
  joinedDate: string;
}

const STORAGE_KEY_AUTH = 'yu_auth_user';

export function getStoredUser(): UserProfile | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY_AUTH);
    if (raw) return JSON.parse(raw);
  } catch {}
  return null;
}

export function useAuth() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setUser(getStoredUser());
    setIsLoaded(true);

    const handleAuthSync = (e: any) => {
      setUser(e.detail || null);
    };

    window.addEventListener('yu_auth_updated', handleAuthSync);
    return () => window.removeEventListener('yu_auth_updated', handleAuthSync);
  }, []);

  const login = useCallback((profile: UserProfile) => {
    try {
      localStorage.setItem(STORAGE_KEY_AUTH, JSON.stringify(profile));
    } catch {}
    setUser(profile);
    sound.playSuccess();
    try {
      window.dispatchEvent(new CustomEvent('yu_auth_updated', { detail: profile }));
    } catch {}
  }, []);

  const logout = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY_AUTH);
    } catch {}
    setUser(null);
    sound.playClick();
    try {
      window.dispatchEvent(new CustomEvent('yu_auth_updated', { detail: null }));
    } catch {}
  }, []);

  const switchRole = useCallback((role: 'student' | 'teacher') => {
    if (!user) return;
    const updated: UserProfile = { ...user, role };
    login(updated);
  }, [user, login]);

  return {
    user,
    isLoaded,
    isStudent: user?.role === 'student',
    isTeacher: user?.role === 'teacher',
    login,
    logout,
    switchRole,
  };
}
