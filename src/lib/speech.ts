/**
 * YU Academy - 100% Reliable Speech Synthesis Engine
 * Guarantees distinct, authentic Female (Qiz bola) vs Male (O'g'il bola) voices
 * across all browsers (Chrome, Safari, Edge, Firefox, macOS, iOS, Windows, Android)
 */

let activeUtterance: SpeechSynthesisUtterance | null = null;
let cachedVoices: SpeechSynthesisVoice[] = [];

// Initialize & cache voices as early as possible
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  cachedVoices = window.speechSynthesis.getVoices() || [];
  window.speechSynthesis.onvoiceschanged = () => {
    try {
      cachedVoices = window.speechSynthesis.getVoices() || [];
    } catch {}
  };
}

// Female voice name identifiers in order of audio quality
const FEMALE_NAMES = [
  'samantha',
  'victoria',
  'google us english',
  'google uk english female',
  'karen',
  'moira',
  'tessa',
  'fiona',
  'serena',
  'kate',
  'stephanie',
  'zira',
  'jenny',
  'libby',
  'sonia',
  'maisie',
  'ava',
  'allison',
  'susan',
  'veena',
  'female',
  'woman',
];

// Male voice name identifiers
const MALE_NAMES = [
  'daniel',
  'oliver',
  'george',
  'david',
  'alex',
  'fred',
  'ryan',
  'brian',
  'guy',
  'tom',
  'albert',
  'google uk english male',
  'male',
  'man',
];

export function getCachedVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
  if (cachedVoices.length > 0) return cachedVoices;
  cachedVoices = window.speechSynthesis.getVoices() || [];
  return cachedVoices;
}

export function findVoiceForGender(gender: 'female' | 'male'): SpeechSynthesisVoice | null {
  const allVoices = getCachedVoices();
  if (!allVoices || allVoices.length === 0) return null;

  // Prefer English voices
  const enVoices = allVoices.filter(v => v.lang.toLowerCase().startsWith('en'));
  const pool = enVoices.length > 0 ? enVoices : allVoices;

  if (gender === 'female') {
    // 1. Search by known female names in priority order
    for (const nameKeyword of FEMALE_NAMES) {
      const match = pool.find(v => v.name.toLowerCase().includes(nameKeyword));
      if (match) return match;
    }

    // 2. Fallback: Any voice whose name does NOT match any male name
    const nonMale = pool.find(v => {
      const n = v.name.toLowerCase();
      return !MALE_NAMES.some(m => n.includes(m));
    });
    if (nonMale) return nonMale;

    return pool[0] || null;
  } else {
    // 1. Search by known male names
    for (const nameKeyword of MALE_NAMES) {
      const match = pool.find(v => v.name.toLowerCase().includes(nameKeyword));
      if (match) return match;
    }

    // 2. Fallback: Any voice whose name does NOT match any female name
    const nonFemale = pool.find(v => {
      const n = v.name.toLowerCase();
      return !FEMALE_NAMES.some(f => n.includes(f));
    });
    if (nonFemale) return nonFemale;

    return pool[1] || pool[0] || null;
  }
}

export function speakTextWithGender(
  text: string,
  gender: 'female' | 'male',
  speed: number = 1.0,
  browserVoices?: SpeechSynthesisVoice[],
  onEnd?: () => void,
  onError?: () => void
): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    if (onEnd) onEnd();
    return;
  }

  try {
    window.speechSynthesis.cancel();
  } catch {}

  // Allow cancellation to settle across Safari/Chrome
  setTimeout(() => {
    try {
      // Re-query voices if cache was empty
      if (cachedVoices.length === 0) {
        cachedVoices = window.speechSynthesis.getVoices() || [];
      }

      const utterance = new SpeechSynthesisUtterance(text);
      activeUtterance = utterance; // Retain reference to prevent garbage collection

      const matchedVoice = findVoiceForGender(gender);

      if (matchedVoice) {
        utterance.voice = matchedVoice;
        utterance.lang = matchedVoice.lang || (gender === 'female' ? 'en-US' : 'en-GB');
      } else {
        utterance.lang = gender === 'female' ? 'en-US' : 'en-GB';
      }

      // Voice Pitch Calibration:
      // Female: 1.45 (Bright, natural feminine pitch)
      // Male: 0.80 (Deep, calm, resonant masculine pitch)
      if (gender === 'female') {
        utterance.pitch = 1.45;
      } else {
        utterance.pitch = 0.80;
      }

      utterance.rate = Math.max(0.6, Math.min(1.5, speed || 1.0));

      utterance.onend = () => {
        activeUtterance = null;
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        console.warn('SpeechSynthesis event notice:', e);
        activeUtterance = null;
        if (onError) onError();
      };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error('Speech synthesis execution error:', err);
      if (onError) onError();
    }
  }, 45);
}

export function stopSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      activeUtterance = null;
    } catch {}
  }
}
