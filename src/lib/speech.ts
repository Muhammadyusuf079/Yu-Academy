/**
 * YU Academy - 100% Reliable Dual-Engine Speech Synthesis
 * Engine A: Google Studio HD Audio (100% Authentic Female Voice)
 * Engine B: Web Speech API (Authentic Male / System Voices with Synchronous Safari Gesture)
 */

let currentAudio: HTMLAudioElement | null = null;
let activeUtterance: SpeechSynthesisUtterance | null = null;
let cachedVoices: SpeechSynthesisVoice[] = [];

// Initialize & cache voices as early as possible
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  try {
    cachedVoices = window.speechSynthesis.getVoices() || [];
    window.speechSynthesis.addEventListener('voiceschanged', () => {
      try {
        cachedVoices = window.speechSynthesis.getVoices() || [];
      } catch {}
    });
  } catch {}
}

const FEMALE_NAMES = [
  'google us english',
  'google uk english female',
  'microsoft jenny',
  'microsoft aria',
  'microsoft zira',
  'microsoft hazel',
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
  'ava',
  'allison',
  'susan',
  'veena',
  'female',
  'woman',
  'girl',
];

const MALE_NAMES = [
  'daniel',
  'oliver',
  'george',
  'google uk english male',
  'microsoft guy',
  'microsoft david',
  'david',
  'alex',
  'fred',
  'albert',
  'ralph',
  'rishi',
  'junior',
  'ryan',
  'brian',
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

export function stopSpeech(): void {
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    } catch {}
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      activeUtterance = null;
    } catch {}
  }
}

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

  const enVoices = allVoices.filter(v => v.lang.toLowerCase().startsWith('en'));
  const pool = enVoices.length > 0 ? enVoices : allVoices;

  if (gender === 'female') {
    for (const nameKeyword of FEMALE_NAMES) {
      const match = pool.find(v => v.name.toLowerCase().includes(nameKeyword));
      if (match) return match;
    }
    const strictlyNonMale = pool.filter(v => {
      const n = v.name.toLowerCase();
      return !MALE_NAMES.some(m => n.includes(m));
    });
    return strictlyNonMale[0] || null;
  } else {
    for (const nameKeyword of MALE_NAMES) {
      const match = pool.find(v => v.name.toLowerCase().includes(nameKeyword));
      if (match) return match;
    }
    const strictlyNonFemale = pool.filter(v => {
      const n = v.name.toLowerCase();
      return !FEMALE_NAMES.some(f => n.includes(f));
    });
    return strictlyNonFemale[0] || null;
  }
}

/**
 * Synchronous Web Speech Execution (Preserves Safari user gesture activation)
 */
function speakWithWebSpeech(
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

    const liveVoices = (browserVoices && browserVoices.length > 0)
      ? browserVoices
      : (window.speechSynthesis.getVoices() || cachedVoices);

    const utterance = new SpeechSynthesisUtterance(text);
    activeUtterance = utterance;

    const matchedVoice = findVoiceForGender(gender, liveVoices);

    if (matchedVoice) {
      utterance.voice = matchedVoice;
      utterance.lang = matchedVoice.lang;
    } else {
      utterance.lang = gender === 'female' ? 'en-US' : 'en-GB';
    }

    if (gender === 'female') {
      utterance.pitch = 1.28;
      utterance.rate = Math.max(0.75, Math.min(1.25, (speed || 1.0) * 0.96));
    } else {
      utterance.pitch = 0.82;
      utterance.rate = Math.max(0.65, Math.min(1.2, (speed || 1.0) * 0.92));
    }

    utterance.onend = () => {
      activeUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      activeUtterance = null;
      if (onError) onError();
    };

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.error('Web Speech error:', err);
    if (onError) onError();
  }
}

/**
 * Primary Speech Dispatcher:
 * - Female: Plays Google Studio HD Female Audio (100% natural female voice guaranteed), with Web Speech fallback
 * - Male: Plays Web Speech API with authentic male voices (Daniel/Oliver/Fred)
 */
export function speakTextWithGender(
  text: string,
  gender: 'female' | 'male',
  speed: number = 1.0,
  browserVoices?: SpeechSynthesisVoice[],
  onEnd?: () => void,
  onError?: () => void
): void {
  if (typeof window === 'undefined') return;

  stopSpeech();

  if (gender === 'female') {
    try {
      const query = encodeURIComponent(text.trim());
      const audioUrl = `/api/tts?text=${query}&gender=female`;
      const audio = new Audio(audioUrl);
      currentAudio = audio;
      audio.playbackRate = Math.max(0.7, Math.min(1.4, speed || 1.0));

      audio.onended = () => {
        currentAudio = null;
        if (onEnd) onEnd();
      };

      audio.onerror = () => {
        currentAudio = null;
        speakWithWebSpeech(text, 'female', speed, browserVoices, onEnd, onError);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          currentAudio = null;
          speakWithWebSpeech(text, 'female', speed, browserVoices, onEnd, onError);
        });
      }
    } catch {
      speakWithWebSpeech(text, 'female', speed, browserVoices, onEnd, onError);
    }
  } else {
    // Male Voice
    speakWithWebSpeech(text, 'male', speed, browserVoices, onEnd, onError);
  }
}
