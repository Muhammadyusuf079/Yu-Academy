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
  category?: 'sat' | 'ielts' | 'everyday' | 'math' | 'academic' | string;
  level?: 'B1' | 'B2' | 'C1' | 'C2' | string;
  ieltsBand?: '6.5' | '7.0' | '7.5' | '8.0' | '8.5' | '9.0' | string;
  satDifficulty?: 'Medium' | 'Hard' | 'High-Frequency' | 'Advanced' | string;
  topic?: 'education' | 'technology' | 'environment' | 'society' | 'science' | 'economy' | 'health' | 'culture' | 'math' | 'general' | string;
  example?: string;
  exampleUz?: string;
  synonyms?: string[];
  antonyms?: string[];
  examTip?: string;
  collocations?: string[];
  [key: string]: any;
}

export interface DictionaryFilterParams {
  search?: string;
  category?: string;
  level?: string;
  ieltsBand?: string;
  topic?: string;
  page?: number;
  limit?: number;
}

export interface CertificateVerificationResult {
  valid: boolean;
  certificateId: string;
  candidateName: string;
  examType: 'SAT' | 'IELTS';
  scoreDisplay: string;
  percentile: string;
  issueDate: string;
  leadExaminer: string;
  academicDirector: string;
  verificationHash: string;
  qrCodeUrl?: string;
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
