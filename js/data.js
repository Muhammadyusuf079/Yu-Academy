// Yu Academy - 2026-yilgi Rasmiy SAT va IELTS Imtihon Savollari Bazasi
// Barcha savollar 2026-yilgi rasmiy Digital SAT (Bluebook) va IELTS (Computer-Delivered) formatida

const EXAM_DATABASE_2026 = {
  // 🎯 Digital SAT to'liq modullari
  sat_math_full: typeof SAT_MATH_FULL_2026 !== "undefined" ? SAT_MATH_FULL_2026 : [],
  sat_rw_full: typeof SAT_RW_FULL_2026 !== "undefined" ? SAT_RW_FULL_2026 : [],
  
  // 🇬🇧 IELTS to'liq modullari
  ielts_reading_full: typeof IELTS_READING_FULL_2026 !== "undefined" ? IELTS_READING_FULL_2026 : [],
  ielts_listening_full: typeof IELTS_LISTENING_FULL_2026 !== "undefined" ? IELTS_LISTENING_FULL_2026 : [],

  // Universal pools for Question Bank & general searches
  get sat() {
    return [...this.sat_math_full, ...this.sat_rw_full];
  },

  get ielts() {
    return [
      ...this.ielts_reading_full,
      ...this.ielts_listening_full,
      {
        id: "ielts-2026-s1",
        exam: "IELTS",
        year: "2026",
        examSession: "2026 IELTS Speaking Cue Card (Actual Pool)",
        section: "Speaking Part 2 & Part 3",
        difficulty: "Band 8.0+",
        stimulus: "IELTS SPEAKING PART 2 CUE CARD (2026 Actual Question):\n\n'Describe an artificial intelligence tool or technological innovation that significantly altered your academic or professional productivity.'\n\nYou should say:\n• What the innovation is and when you adopted it\n• How it functions in your daily workflow\n• What challenges or ethical considerations arose\n• And explain whether you believe it will eventually replace human expertise in that domain.",
        question: "Band 8.5 Speaking da ushbu Cue Card ga javob berishda eng kuchli akademik ibora (collocation) qaysi?",
        options: [
          "It made things very good and fast for my homework.",
          "This tool acts as an indispensable cognitive scaffold, streamlining iterative revisions while preserving human critical oversight.",
          "I like it because everyone uses it today everywhere.",
          "It is nice and very interesting computer thing."
        ],
        correctIndex: 1,
        explanation: "'Indispensable cognitive scaffold' (ajralmas aqliy ko'makchi), 'streamlining iterative revisions' (ketma-ket tuzatishlarni tezlashtirish) va 'preserving human critical oversight' (insonning tanqidiy nazoratini saqlab qolish) kabi collocations imtihonchidan to'g'ridan-to'g'ri Lexical Resource 9.0 ball olib keladi.",
        tags: ["Speaking", "Cue Card", "Band 8.5", "Collocations", "2026 Exam"]
      },
      {
        id: "ielts-2026-w1",
        exam: "IELTS",
        year: "2026",
        examSession: "2026 IELTS Writing Task 2 (Actual Exam)",
        section: "Writing Task 2: Opinion Essay",
        difficulty: "Band 8.0+",
        stimulus: "IELTS WRITING TASK 2 ESSAY PROMPT (2026 Actual Question):\n\n'In many modern nations, higher education institutions are increasingly automating evaluation and grading through machine-learning algorithms. Some people believe this ensures total impartiality, while others argue that algorithmic assessment dehumanizes education and overlooks creative nuance.'\n\nDiscuss both views and give your own considered opinion.",
        question: "Ushbu insho uchun eng yuqori baholanishi kafolatlangan Thesis Statement (asosiy pozitsiya) strukturasini tanlang:",
        options: [
          "Some people like algorithms and some do not, and I will discuss both.",
          "While algorithmic grading undeniably eliminates subjective human bias in quantitative metrics, it fundamentally lacks the qualitative discernment needed to appraise creative synthesis; therefore, a hybrid paradigm is imperative.",
          "I agree completely because computers never make mistakes.",
          "Computers should be banned from all schools immediately."
        ],
        correctIndex: 1,
        explanation: "Ushbu thesis statement ikkala tomonning asosli nuqtalarini (eliminates subjective bias vs lacks qualitative discernment) muvozanatli tarzda qamrab oladi va inshoning aniq xulosaviy pozitsiyasini (hybrid paradigm) ochib beradi. Task Achievement va Coherence & Cohesion bo'yicha Band 8.5+ talabiga to'liq javob beradi.",
        tags: ["Writing", "Task 2", "Thesis Statement", "2026 Exam"]
      }
    ];
  }
};

// Global window bindings for full compatibility across modules
window.EXAM_DATABASE_2026 = EXAM_DATABASE_2026;
if (typeof SAT_MATH_FULL_2026 !== "undefined") window.SAT_MATH_FULL_2026 = SAT_MATH_FULL_2026;
if (typeof SAT_RW_FULL_2026 !== "undefined") window.SAT_RW_FULL_2026 = SAT_RW_FULL_2026;
if (typeof IELTS_READING_FULL_2026 !== "undefined") window.IELTS_READING_FULL_2026 = IELTS_READING_FULL_2026;
if (typeof IELTS_LISTENING_FULL_2026 !== "undefined") window.IELTS_LISTENING_FULL_2026 = IELTS_LISTENING_FULL_2026;
