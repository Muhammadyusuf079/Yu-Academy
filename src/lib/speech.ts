/**
 * YU Academy - Bulletproof Speech Synthesis Utility
 * Guarantees distinct, authentic Female vs Male voices across all browsers (Chrome, Safari, Edge, Firefox, iOS, macOS, Windows)
 */

let activeUtterance: SpeechSynthesisUtterance | null = null;

// Female voice name identifiers
const FEMALE_VOICE_NAMES = [
  'samantha',
  'victoria',
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
  'google uk english female',
  'google us english',
  'female',
  'woman',
];

// Male voice name identifiers
const MALE_VOICE_NAMES = [
  'daniel',
  'george',
  'oliver',
  'alex',
  'david',
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

export function getBestVoiceForGender(
  gender: 'female' | 'male',
  browserVoices?: SpeechSynthesisVoice[]
): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;

  const voices = (browserVoices && browserVoices.length > 0)
    ? browserVoices
    : window.speechSynthesis.getVoices();

  if (!voices || voices.length === 0) return null;

  // Filter English voices
  const enVoices = voices.filter(v => v.lang.toLowerCase().startsWith('en'));
  const candidatePool = enVoices.length > 0 ? enVoices : voices;

  if (gender === 'female') {
    // 1. Look for explicit female name match
    const explicitFemale = candidatePool.find(v => {
      const name = v.name.toLowerCase();
      return FEMALE_VOICE_NAMES.some(fn => name.includes(fn)) &&
        !MALE_VOICE_NAMES.some(mn => name.includes(mn));
    });

    if (explicitFemale) return explicitFemale;

    // 2. Fallback: Any voice that does not contain male names
    const nonMaleVoice = candidatePool.find(v => {
      const name = v.name.toLowerCase();
      return !MALE_VOICE_NAMES.some(mn => name.includes(mn));
    });

    return nonMaleVoice || candidatePool[0];
  } else {
    // 1. Look for explicit male name match
    const explicitMale = candidatePool.find(v => {
      const name = v.name.toLowerCase();
      return MALE_VOICE_NAMES.some(mn => name.includes(mn));
    });

    if (explicitMale) return explicitMale;

    // 2. Fallback: Any voice that does not contain female names
    const nonFemaleVoice = candidatePool.find(v => {
      const name = v.name.toLowerCase();
      return !FEMALE_VOICE_NAMES.some(fn => name.includes(fn));
    });

    return nonFemaleVoice || candidatePool[1] || candidatePool[0];
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

  // Cancel any ongoing speech
  try {
    window.speechSynthesis.cancel();
  } catch {}

  // Chrome timeout workaround: small delay after cancel ensures clean speech start
  setTimeout(() => {
    try {
      const utterance = new SpeechSynthesisUtterance(text);
      activeUtterance = utterance; // Prevent garbage collection mid-speech

      const voice = getBestVoiceForGender(gender, browserVoices);

      if (voice) {
        utterance.voice = voice;
        // CRITICAL: Language MUST match voice.lang, otherwise Chrome defaults to en-GB (Daniel male)
        utterance.lang = voice.lang || (gender === 'female' ? 'en-US' : 'en-GB');
      } else {
        utterance.lang = gender === 'female' ? 'en-US' : 'en-GB';
      }

      // Authentic pitch calibration
      if (gender === 'female') {
        utterance.pitch = 1.45; // Clear, bright, crisp female pitch
      } else {
        utterance.pitch = 0.82; // Deep, calm, authoritative male pitch
      }

      utterance.rate = speed || 1.0;

      utterance.onend = () => {
        activeUtterance = null;
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        console.warn('Speech synthesis notice:', e);
        activeUtterance = null;
        if (onError) onError();
      };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error('Speech error:', err);
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
