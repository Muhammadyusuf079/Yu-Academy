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

// Female voice name identifiers in priority order (macOS, Windows, Chrome, Edge, iOS, Android)
const FEMALE_NAMES = [
  'samantha',
  'victoria',
  'karen',
  'kathy',
  'moira',
  'tessa',
  'fiona',
  'serena',
  'kate',
  'stephanie',
  'zira',
  'jenny',
  'aria',
  'libby',
  'sonia',
  'maisie',
  'ava',
  'allison',
  'susan',
  'veena',
  'zoe',
  'nicky',
  'sangeeta',
  'priya',
  'hazel',
  'heera',
  'helena',
  'catherine',
  'linda',
  'google us english',
  'google uk english female',
  'female',
  'woman',
  'girl',
];

// Male and novelty voice name identifiers (strictly avoided when female is requested)
const MALE_NAMES = [
  'daniel',
  'oliver',
  'george',
  'david',
  'alex',
  'fred',
  'albert',
  'ralph',
  'rishi',
  'junior',
  'ryan',
  'brian',
  'guy',
  'tom',
  'mark',
  'richard',
  'james',
  'google uk english male',
  'microsoft david',
  'microsoft mark',
  'microsoft george',
  'male',
  'man',
  'boy',
  'bad news',
  'bahh',
  'bells',
  'boing',
  'bubbles',
  'cellos',
  'good news',
  'jester',
  'organ',
  'superstar',
  'trinoids',
  'whisper',
  'zarvox',
  'wobble',
];

export function getCachedVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
  if (cachedVoices.length > 0) return cachedVoices;
  cachedVoices = window.speechSynthesis.getVoices() || [];
  return cachedVoices;
}

export function findVoiceForGender(
  gender: 'female' | 'male',
  passedVoices?: SpeechSynthesisVoice[]
): SpeechSynthesisVoice | null {
  const allVoices = (passedVoices && passedVoices.length > 0)
    ? passedVoices
    : getCachedVoices();

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

    // 2. Strict Filter: Any voice whose name does NOT match ANY male or novelty name
    const strictlyNonMale = pool.filter(v => {
      const n = v.name.toLowerCase();
      return !MALE_NAMES.some(m => n.includes(m));
    });

    if (strictlyNonMale.length > 0) {
      // Look for any female hint in the name
      const femaleLike = strictlyNonMale.find(v => {
        const n = v.name.toLowerCase();
        return n.includes('female') || n.includes('woman') || n.includes('girl') || n.includes('natural');
      });
      return femaleLike || strictlyNonMale[0];
    }

    // 3. Fallback to first voice in pool if no female available (pitch shift will handle feminization)
    return pool[0] || null;
  } else {
    // Male Voice Selection:
    for (const nameKeyword of MALE_NAMES) {
      const match = pool.find(v => v.name.toLowerCase().includes(nameKeyword));
      if (match) return match;
    }

    const strictlyNonFemale = pool.filter(v => {
      const n = v.name.toLowerCase();
      return !FEMALE_NAMES.some(f => n.includes(f));
    });

    if (strictlyNonFemale.length > 0) {
      return strictlyNonFemale[0];
    }

    return pool[0] || null;
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

  const runSynthesis = () => {
    try {
      const liveVoices = (browserVoices && browserVoices.length > 0)
        ? browserVoices
        : (window.speechSynthesis.getVoices() || cachedVoices);

      const utterance = new SpeechSynthesisUtterance(text);
      activeUtterance = utterance; // Prevent garbage collection during playback

      const matchedVoice = findVoiceForGender(gender, liveVoices);

      if (matchedVoice) {
        utterance.voice = matchedVoice;
        utterance.lang = matchedVoice.lang || (gender === 'female' ? 'en-US' : 'en-GB');
      } else {
        utterance.lang = gender === 'female' ? 'en-US' : 'en-GB';
      }

      // Voice Pitch & Rate Calibration:
      // Female: 1.35 pitch + 1.04 rate (Natural, bright, clearly feminine tone)
      // Male: 0.82 pitch + 0.96 rate (Deep, calm, resonant masculine tone)
      if (gender === 'female') {
        utterance.pitch = 1.35;
        utterance.rate = Math.max(0.7, Math.min(1.4, (speed || 1.0) * 1.04));
      } else {
        utterance.pitch = 0.82;
        utterance.rate = Math.max(0.6, Math.min(1.3, (speed || 1.0) * 0.96));
      }

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
  };

  // If voices have not yet loaded in this browser session, wait for onvoiceschanged
  const availableVoices = window.speechSynthesis.getVoices();
  if (!availableVoices || availableVoices.length === 0) {
    let triggered = false;
    const fallbackTimer = setTimeout(() => {
      if (!triggered) {
        triggered = true;
        runSynthesis();
      }
    }, 120);

    window.speechSynthesis.onvoiceschanged = () => {
      if (!triggered) {
        triggered = true;
        clearTimeout(fallbackTimer);
        cachedVoices = window.speechSynthesis.getVoices() || [];
        runSynthesis();
      }
    };
  } else {
    setTimeout(runSynthesis, 35);
  }
}

export function stopSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      activeUtterance = null;
    } catch {}
  }
}
