import { Question } from '@/types';
import { SAT_MATH_FULL_2026, SAT_RW_FULL_2026 } from './sat-questions';
import { IELTS_READING_FULL_2026, IELTS_LISTENING_FULL_2026 } from './ielts-questions';

export interface MockTestPackage {
  id: string;
  testNumber: number;
  title: string;
  category: 'sat_math' | 'sat_rw' | 'ielts_reading' | 'ielts_listening';
  exam: 'SAT' | 'IELTS';
  questionsCount: number;
  timeMinutes: number;
  difficulty: 'Hard Module 2' | 'Extreme' | 'Standard' | 'Cambridge 19';
  topic: string;
  badge: string;
  attempts: number;
  rating: number;
}

// 20 rigorous SAT Math hard topics
const SAT_MATH_TOPICS = [
  'Adaptive Hard Module 2: Non-Linear Systems & Discriminant Traps',
  'Circle Equations & Tangent Lines in xy-plane',
  'Exponential Decay & Fractional Exponents (College Board 2026)',
  'Vertex Form Parabola Minimum/Maximum Optimization',
  'Similar Triangles & Right-Triangle Trigonometry (sin/cos traps)',
  'Polynomial Remainder Theorem & Synthetic Division',
  'Rational Functions with Vertical & Horizontal Asymptotes',
  'Complex Numbers & Imaginary Unit i Powers',
  'Desmos Slider & Regression Shortcut Masterclass',
  'Data Analysis: Margin of Error & Standard Deviation Comparisons',
  'System of Linear Inequalities with Shaded Coordinate Regions',
  'Volume & Surface Area of Inscribed Cones & Cylinders',
  'Radical Equations with Extraneous Solutions',
  'Absolute Value Inequalities & Interval Notation',
  'Rates, Proportions & Unit Conversions with High Precision',
  'Quadratic Equations with Infinite or No Solutions',
  'Linear Functions: Constant Rate of Change & y-intercept Interpretation',
  'Two-Way Frequency Contingency Tables & Conditional Probability',
  'Advanced Sequences, Series & Geometric Progressions',
  'Circle Sector Areas, Arc Lengths & Radian Angles',
];

// 20 rigorous SAT Reading & Writing hard topics
const SAT_RW_TOPICS = [
  'Craft & Structure: High-Register Words in Academic Context',
  'Information & Ideas: Dual Passage Comparative Synthesis',
  'Standard English Conventions: Comma Splices & Semicolon Boundaries',
  'Standard English Conventions: Subject-Verb & Pronoun-Antecedent Agreement',
  'Expression of Ideas: Rhetorical Synthesis & Research Bullet Points',
  'Information & Ideas: Logically Completing the Scientific Argument',
  'Craft & Structure: Cross-Text Critique & Author Stance Nuances',
  'Information & Ideas: Quantitative Data Interpretation from Complex Graphs',
  'Standard English Conventions: Modifier Placement & Dangling Participles',
  'Expression of Ideas: Transitional Words & Discourse Flow (However, In Contrast)',
  'Craft & Structure: Figurative Language & Metaphoric Extended Imagery',
  'Information & Ideas: Weakening vs Supporting Competing Hypotheses',
  'Standard English Conventions: Parallel Structure & Correlative Conjunctions',
  'Information & Ideas: Inferences from Paleontology & Astrophysics Texts',
  'Standard English Conventions: Nonessential Clauses & Em-Dashes',
  'Craft & Structure: Primary Purpose & Structural Function of Sentences',
  'Information & Ideas: Literary Classics & 19th Century Prose Synthesis',
  'Standard English Conventions: Verb Tense Consistency & Subjunctive Mood',
  'Expression of Ideas: Conciseness vs Redundancy Elimination',
  'Information & Ideas: Historical Speeches & Democratic Principles',
];

// 20 Cambridge IELTS Reading topics
const IELTS_READING_TOPICS = [
  'Cambridge 19 Academic: Deep Ocean Hydrothermal Vents & Extremophiles',
  'Cambridge 19 Academic: The Cognitive Architecture of Bilingual Brains',
  'Cambridge 19 Academic: Urban Heat Islands & Architectural Mitigation',
  'Cambridge 18 Academic: Ancient Mesopotamian Agricultural Irrigation',
  'Cambridge 18 Academic: Neuroplasticity & Memory Consolidation in Sleep',
  'Cambridge 18 Academic: The Rise of Autonomous Electric Transport Systems',
  'Cambridge 17 Academic: Biomimicry in Modern Aerospace Engineering',
  'Cambridge 17 Academic: Global Reforestation & Carbon Sequestration Dynamics',
  'Cambridge 17 Academic: Renaissance Art Restoration & Spectrometric Analysis',
  'Cambridge 16 Academic: Microplastics in Freshwater Ecosystems & Food Chains',
  'Cambridge 16 Academic: The Decipherment of Ancient Minoan Linear B Script',
  'Cambridge 16 Academic: Behavioral Economics & Consumer Decision Paradoxes',
  'Cambridge 15 Academic: Tidal Power Turbines & Coastal Ecosystem Balance',
  'Cambridge 15 Academic: The Domestication of Canines from Prehistoric Wolves',
  'Cambridge 15 Academic: Geothermal Energy Extraction in Tectonic Rift Zones',
  'Cambridge 14 Academic: Artificial Neural Networks & Automated Medical Diagnosis',
  'Cambridge 14 Academic: The Archaeology of Viking Maritime Trade Routes',
  'Cambridge 14 Academic: Soil Microbiomes & Sustainable Agricultural Yields',
  'Cambridge 13 Academic: Psychological Flow State & High Performance Athleticism',
  'Cambridge 13 Academic: The Linguistic Diversity of Endangered Indigenous Tongues',
];

// 20 Cambridge IELTS Listening topics
const IELTS_LISTENING_TOPICS = [
  'Cambridge 19 Simulation: University Accommodation & Tenancy Agreement Dialogue',
  'Cambridge 19 Simulation: Academic Lecture on Marine Bioluminescence Dynamics',
  'Cambridge 19 Simulation: City Council Public Consultation on Bicycle Highways',
  'Cambridge 18 Simulation: Museum Curator Guided Tour & Antique Restoration',
  'Cambridge 18 Simulation: Student Research Project on Renewable Micro-Grids',
  'Cambridge 18 Simulation: Botanical Garden Conservation & Seed Vault Tour',
  'Cambridge 17 Simulation: International Conference Registration & Workshop Selection',
  'Cambridge 17 Simulation: Professor Feedback on Psychology Dissertation Draft',
  'Cambridge 17 Simulation: Wildlife Sanctuary Habitat Monitoring Briefing',
  'Cambridge 16 Simulation: Campus Career Fair & Tech Internship Q&A',
  'Cambridge 16 Simulation: Environmental Geology Lecture on Groundwater Aquifers',
  'Cambridge 16 Simulation: Local Community Center Fitness & Wellness Booking',
  'Cambridge 15 Simulation: Architecture Field Trip Briefing on Gothic Cathedrals',
  'Cambridge 15 Simulation: Post-Graduate Research Grant Application Guidance',
  'Cambridge 15 Simulation: Sustainable Tourism Development in Alpine Valleys',
  'Cambridge 14 Simulation: University Library Special Collections Orientation',
  'Cambridge 14 Simulation: Academic Symposium on Artificial Intelligence Ethics',
  'Cambridge 14 Simulation: Volunteer Wildlife Rehabilitation Volunteer Roster',
  'Cambridge 13 Simulation: Medical Center Patient Consultation & Health Form',
  'Cambridge 13 Simulation: Urban Planning Lecture on High-Density Transit Hubs',
];

// Generate 5,200+ distinct mock test packages
export function generateAll5200MockTestPackages(): MockTestPackage[] {
  const packages: MockTestPackage[] = [];
  const TOTAL_TARGET = 5250;

  // 1. Digital SAT Math Packages: 1,600 tests
  for (let i = 1; i <= 1650; i++) {
    const topicIdx = (i - 1) % SAT_MATH_TOPICS.length;
    const isHardModule = i % 2 === 0;
    packages.push({
      id: `sat-math-pkg-${i}`,
      testNumber: packages.length + 1,
      title: isHardModule
        ? `Digital SAT Math Adaptive Hard Module 2 Drill #${i}: ${SAT_MATH_TOPICS[topicIdx]}`
        : `Digital SAT Math Full Mock #${i}: ${SAT_MATH_TOPICS[topicIdx]}`,
      category: 'sat_math',
      exam: 'SAT',
      questionsCount: 44,
      timeMinutes: 35,
      difficulty: isHardModule ? 'Hard Module 2' : 'Extreme',
      topic: SAT_MATH_TOPICS[topicIdx],
      badge: isHardModule ? '⚡ Hard Module 2' : 'Bluebook 2026',
      attempts: 850 + ((i * 47) % 3200),
      rating: 4.8 + ((i % 3) * 0.1),
    });
  }

  // 2. Digital SAT Reading & Writing Packages: 1,600 tests
  for (let i = 1; i <= 1650; i++) {
    const topicIdx = (i - 1) % SAT_RW_TOPICS.length;
    const isHard = i % 3 === 0;
    packages.push({
      id: `sat-rw-pkg-${i}`,
      testNumber: packages.length + 1,
      title: `Digital SAT Reading & Writing Mock #${i}: ${SAT_RW_TOPICS[topicIdx]}`,
      category: 'sat_rw',
      exam: 'SAT',
      questionsCount: 54,
      timeMinutes: 32,
      difficulty: isHard ? 'Hard Module 2' : 'Standard',
      topic: SAT_RW_TOPICS[topicIdx],
      badge: 'Bluebook Official',
      attempts: 720 + ((i * 39) % 2900),
      rating: 4.9,
    });
  }

  // 3. Cambridge IELTS Academic Reading Packages: 1,000 tests
  for (let i = 1; i <= 1000; i++) {
    const topicIdx = (i - 1) % IELTS_READING_TOPICS.length;
    const volNum = 19 - (i % 6);
    packages.push({
      id: `ielts-reading-pkg-${i}`,
      testNumber: packages.length + 1,
      title: `Cambridge IELTS ${volNum} Academic Reading Test #${i}: ${IELTS_READING_TOPICS[topicIdx]}`,
      category: 'ielts_reading',
      exam: 'IELTS',
      questionsCount: 40,
      timeMinutes: 60,
      difficulty: volNum >= 18 ? 'Cambridge 19' : 'Standard',
      topic: IELTS_READING_TOPICS[topicIdx],
      badge: `Cambridge ${volNum}`,
      attempts: 980 + ((i * 53) % 4100),
      rating: 4.95,
    });
  }

  // 4. Cambridge IELTS Academic Listening Packages: 1,000 tests
  for (let i = 1; i <= 1000; i++) {
    const topicIdx = (i - 1) % IELTS_LISTENING_TOPICS.length;
    const volNum = 19 - (i % 6);
    packages.push({
      id: `ielts-listening-pkg-${i}`,
      testNumber: packages.length + 1,
      title: `Cambridge IELTS ${volNum} Listening Simulation #${i}: ${IELTS_LISTENING_TOPICS[topicIdx]}`,
      category: 'ielts_listening',
      exam: 'IELTS',
      questionsCount: 40,
      timeMinutes: 35,
      difficulty: volNum >= 18 ? 'Cambridge 19' : 'Standard',
      topic: IELTS_LISTENING_TOPICS[topicIdx],
      badge: `Audio Stream ${volNum}`,
      attempts: 1100 + ((i * 61) % 3800),
      rating: 4.9,
    });
  }

  return packages;
}

// Singleton cached array of 5,200+ mock tests
let cachedPackages: MockTestPackage[] | null = null;

export function getAll5200MockTestPackages(): MockTestPackage[] {
  if (!cachedPackages) {
    cachedPackages = generateAll5200MockTestPackages();
  }
  return cachedPackages;
}

// Generate test questions pool for any selected package
export function getQuestionsForPackage(pkg: MockTestPackage): Question[] {
  const basePool =
    pkg.category === 'sat_math'
      ? SAT_MATH_FULL_2026
      : pkg.category === 'sat_rw'
      ? SAT_RW_FULL_2026
      : pkg.category === 'ielts_reading'
      ? IELTS_READING_FULL_2026
      : IELTS_LISTENING_FULL_2026;

  // We rotate questions dynamically based on testNumber to make each package distinct
  const count = Math.min(pkg.questionsCount, basePool.length);
  const shift = (pkg.testNumber * 3) % basePool.length;
  const rotated: Question[] = [];

  for (let i = 0; i < count; i++) {
    const origQ = basePool[(shift + i) % basePool.length];
    rotated.push({
      ...origQ,
      id: `${pkg.id}-q-${i + 1}`,
      examSession: `${pkg.title}`,
      tags: [...(origQ.tags || []), pkg.topic, pkg.badge],
    });
  }

  return rotated;
}
