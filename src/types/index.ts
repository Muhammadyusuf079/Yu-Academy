export interface Question {
  id: string;
  exam: 'SAT' | 'IELTS' | string;
  year?: string;
  examSession?: string;
  section?: string;
  module?: string;
  passageNum?: number;
  difficulty?: string;
  hasDesmos?: boolean;
  stimulus?: string;
  question?: any;
  options?: any;
  correctIndex?: any;
  correctAnswer?: any;
  explanation?: any;
  tags?: any;
  svgDiagram?: string;
  audioTrack?: string;
  isGridIn?: boolean;
  [key: string]: any;
}

export interface DictionaryEntry {
  word: string;
  ipa?: string;
  pos?: string;
  uz?: string;
  shortDef?: string;
  category?: string;
  example?: string;
  exampleUz?: string;
  synonyms?: string[];
  [key: string]: any;
}

export interface ShadowingExercise {
  id: string;
  title: string;
  level: string;
  speaker: string;
  accent: string;
  topic: string;
  audioFile: string;
  text: string;
  ipa?: string;
  uzbekTranslation: string;
  tips: string[];
}
