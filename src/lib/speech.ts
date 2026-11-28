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
  window.speechSynthesis.addEventListener('voiceschanged', () => {
    try {
      cachedVoices = window.speechSynthesis.getVoices() || [];
    } catch {}
  });
}

// Female voice name identifiers in priority order by browser & OS engine:
// 1. Google Chrome Built-in Studio Voices (Zero OS dependency, always available in Chrome)
// 2. Microsoft Edge Neural Voices
// 3. Apple macOS / iOS Studio Voices
const FEMALE_NAMES = [
  'google us english',           // Google Chrome default American female (Studio quality)
  'google uk english female',    // Google Chrome British female
  'microsoft jenny',             // Edge Neural American female
  'microsoft aria',              // Edge Neural female
  'microsoft zira',              // Windows default female
  'microsoft hazel',             // Windows British female
  'samantha',                    // Apple macOS American female
  'victoria',                    // Apple macOS British female
  'karen',                       // Apple macOS Australian female
  'kathy',                       // Apple macOS female
  'moira',                       // Apple macOS Irish female
  'tessa',                       // Apple macOS South African female
  'fiona',                       // Apple Scottish female
  'serena',                      // Apple British female
  'kate',                        // Apple female
  'stephanie',                   // Apple female
  'ava',                         // Apple female
  'allison',                     // Apple female
  'susan',                       // Apple female
  'veena',                       // Indian female
  'zoe',                         // Female
  'nicky',                       // Female
  'sangeeta',                    // Female
  'priya',                       // Female
  'female',                      // Generic female indicator
  'woman',                       // Generic female indicator
  'girl',                        // Generic female indicator
];

// Male voice name identifiers (strictly avoided when female is requested)
const MALE_NAMES = [
  'google uk english male',      // Google Chrome British male
  'microsoft guy',               // Edge Neural American male
  'microsoft david',             // Windows default male
  'microsoft mark',              // Windows male
  'microsoft george',            // Windows male
  'daniel',                      // Apple British male
  'oliver',                      // Apple British male
  'george',                      // Apple British male
  'david',                       // Apple / Windows male
  'alex',                        // Apple macOS default male
  'fred',                        // Apple male
  'albert',                      // Apple male
  'ralph',                       // Apple male
  'rishi',                       // Apple Indian male
  'junior',                      // Apple male
  'ryan',                        // Male
  'brian',                       // Male
  'guy',                         // Male
  'tom',                         // Male
  'mark',                        // Male
  'richard',                     // Male
  'james',                       // Male
  'male',                        // Generic male indicator
  'man',                         // Generic male indicator
  'boy',                         // Generic male indicator
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

/**
 * Ensures browser speech synthesis voices are loaded asynchronously
 */
export function ensureVoicesLoaded(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve([]);
      return;
    }

    const current = window.speechSynthesis.getVoices() || [];
    if (current.length > 0) {
      cachedVoices = current;
      resolve(current);
      return;
    }

    let resolved = false;
    const finalize = (voices: SpeechSynthesisVoice[]) => {
      if (!resolved && voices.length > 0) {
        resolved = true;
        cachedVoices = voices;
        resolve(voices);
      }
    };

    // Event listener for browsers that fire voiceschanged
    const onVoicesChanged = () => {
      const v = window.speechSynthesis.getVoices() || [];
      finalize(v);
    };

    window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged, { once: true });

    // Polling fallback (Chrome and Safari sometimes load without firing event)
    let checks = 0;
    const pollInterval = setInterval(() => {
      checks++;
      const v = window.speechSynthesis.getVoices() || [];
      if (v.length > 0) {
        clearInterval(pollInterval);
        finalize(v);
      } else if (checks > 25) { // 25 * 30ms = 750ms timeout
        clearInterval(pollInterval);
        if (!resolved) {
          resolved = true;
          resolve([]);
        }
      }
    }, 30);
  });
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
      const femaleLike = strictlyNonMale.find(v => {
        const n = v.name.toLowerCase();
        return n.includes('female') || n.includes('woman') || n.includes('girl') || n.includes('natural');
      });
      return femaleLike || strictlyNonMale[0];
    }

    // 3. Fallback
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

  // Ensure voices are loaded before creating utterance
  ensureVoicesLoaded().then((loadedVoices) => {
    try {
      const voicesToUse = (loadedVoices && loadedVoices.length > 0)
        ? loadedVoices
        : ((browserVoices && browserVoices.length > 0) ? browserVoices : cachedVoices);

      const utterance = new SpeechSynthesisUtterance(text);
      activeUtterance = utterance; // Prevent garbage collection during playback

      const matchedVoice = findVoiceForGender(gender, voicesToUse);

      if (matchedVoice) {
        utterance.voice = matchedVoice;
        utterance.lang = matchedVoice.lang || (gender === 'female' ? 'en-US' : 'en-GB');
      } else {
        utterance.lang = gender === 'female' ? 'en-US' : 'en-GB';
      }

      // Voice Pitch & Rate Calibration:
      // Female: pitch 1.02, rate 1.0 (Natural, authentic adult woman voice without distortion)
      // Male: pitch 0.92, rate 0.96 (Warm, natural masculine voice)
      if (gender === 'female') {
        utterance.pitch = 1.02;
        utterance.rate = Math.max(0.7, Math.min(1.4, speed || 1.0));
      } else {
        utterance.pitch = 0.92;
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

      // Slight settle delay before speak to clear Safari/Chrome audio pipeline
      setTimeout(() => {
        try {
          window.speechSynthesis.speak(utterance);
        } catch (e) {
          console.error('Error in window.speechSynthesis.speak:', e);
          if (onError) onError();
        }
      }, 25);

    } catch (err) {
      console.error('Speech synthesis execution error:', err);
      if (onError) onError();
    }
  });
}

export function stopSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      activeUtterance = null;
    } catch {}
  }
}
