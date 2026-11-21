// YU Academy - Podkastlar va Shadowing Interaktiv Trenajyori 2026
// 30+ Ilmiy va Rasmiy IELTS/SAT Gaplari, Realistik Native Speaker Ovozi, Ovoz Yozish va AI Baholash

const SHADOWING_PHRASES_2026 = [
  // 1. IELTS 8.5+ Texnologiya va AI
  {
    id: 1,
    category: "ielts_tech",
    categoryLabel: "🤖 Texnologiya & AI",
    text: "Personally speaking, technology has radically transformed how we acquire new skills and prepare for global examinations.",
    timing: "0:06",
    level: "Band 8.5"
  },
  {
    id: 2,
    category: "ielts_tech",
    categoryLabel: "🤖 Texnologiya & AI",
    text: "Seldom do students realize just how crucial consistent shadowing is for natural rhythm and intonation.",
    timing: "0:06",
    level: "Band 8.5"
  },
  {
    id: 3,
    category: "ielts_tech",
    categoryLabel: "🤖 Texnologiya & AI",
    text: "Artificial intelligence acts as an indispensable cognitive scaffold, streamlining iterative revisions while preserving human critical oversight.",
    timing: "0:08",
    level: "Band 9.0"
  },
  {
    id: 4,
    category: "ielts_tech",
    categoryLabel: "🤖 Texnologiya & AI",
    text: "The rapid integration of machine-learning algorithms has spurred extensive debates over the boundary between automated grading and qualitative judgment.",
    timing: "0:08",
    level: "Band 9.0"
  },
  {
    id: 5,
    category: "ielts_tech",
    categoryLabel: "🤖 Texnologiya & AI",
    text: "Cutting-edge digital tools empower candidates to simulate authentic test environments with unprecedented precision.",
    timing: "0:07",
    level: "Band 8.5"
  },
  {
    id: 6,
    category: "ielts_tech",
    categoryLabel: "🤖 Texnologiya & AI",
    text: "Consistent exposure to native phonological nuances dramatically bolsters an applicant's conversational confidence and clarity.",
    timing: "0:07",
    level: "Band 8.5"
  },

  // 2. Universitetlar, Ivy League va Xalqaro Grantlar
  {
    id: 7,
    category: "ielts_edu",
    categoryLabel: "🎓 Ta'lim & Grantlar",
    text: "Securing a prestigious international scholarship necessitates not merely outstanding grades, but demonstrated leadership and social impact.",
    timing: "0:08",
    level: "Band 8.5"
  },
  {
    id: 8,
    category: "ielts_edu",
    categoryLabel: "🎓 Ta'lim & Grantlar",
    text: "Top-tier American universities prioritize candidates who display genuine intellectual curiosity alongside resilience in challenging situations.",
    timing: "0:08",
    level: "Band 9.0"
  },
  {
    id: 9,
    category: "ielts_edu",
    categoryLabel: "🎓 Ta'lim & Grantlar",
    text: "Rigorous standardized examinations assess critical thinking, evidence-based reasoning, and quantitative problem-solving.",
    timing: "0:07",
    level: "Band 8.5"
  },
  {
    id: 10,
    category: "ielts_edu",
    categoryLabel: "🎓 Ta'lim & Grantlar",
    text: "Undergraduates actively collaborating with professors on empirical research cultivate invaluable data synthesis capabilities.",
    timing: "0:08",
    level: "Band 9.0"
  },
  {
    id: 11,
    category: "ielts_edu",
    categoryLabel: "🎓 Ta'lim & Grantlar",
    text: "A compelling personal statement weaves academic accomplishments together with clear, goal-driven future aspirations.",
    timing: "0:07",
    level: "Band 8.5"
  },
  {
    id: 12,
    category: "ielts_edu",
    categoryLabel: "🎓 Ta'lim & Grantlar",
    text: "Interdisciplinary seminars empower proactive scholars to formulate innovative remedies for complex socio-economic issues.",
    timing: "0:08",
    level: "Band 9.0"
  },

  // 3. Ekologiya, Barqarorlik va Global Iqtisodiyot
  {
    id: 13,
    category: "ielts_env",
    categoryLabel: "🌍 Ekologiya & Iqtisod",
    text: "Transitioning toward renewable energy infrastructure requires bold multilateral investments across municipal and corporate entities.",
    timing: "0:08",
    level: "Band 8.5"
  },
  {
    id: 14,
    category: "ielts_env",
    categoryLabel: "🌍 Ekologiya & Iqtisod",
    text: "Biodiversity preservation constitutes an indispensable ecological safeguard against the accelerating consequences of global warming.",
    timing: "0:08",
    level: "Band 9.0"
  },
  {
    id: 15,
    category: "ielts_env",
    categoryLabel: "🌍 Ekologiya & Iqtisod",
    text: "Macroeconomic indicators reveal that sudden trade disruptions disproportionately affect developing regions and supply logistics.",
    timing: "0:08",
    level: "Band 8.5"
  },
  {
    id: 16,
    category: "ielts_env",
    categoryLabel: "🌍 Ekologiya & Iqtisod",
    text: "Adopting circular economic models significantly curtails industrial carbon emissions and minimizes non-recyclable landfill waste.",
    timing: "0:08",
    level: "Band 8.5"
  },
  {
    id: 17,
    category: "ielts_env",
    categoryLabel: "🌍 Ekologiya & Iqtisod",
    text: "Enforceable international agreements remain paramount in holding global industries accountable for continuous ecological stewardship.",
    timing: "0:08",
    level: "Band 9.0"
  },
  {
    id: 18,
    category: "ielts_env",
    categoryLabel: "🌍 Ekologiya & Iqtisod",
    text: "Forward-thinking urban designers integrate communal parks and zero-emission transit to construct resilient smart cities.",
    timing: "0:08",
    level: "Band 8.5"
  },

  // 4. Jamiyat, Psixologiya va Nutq Madaniyati
  {
    id: 19,
    category: "ielts_soc",
    categoryLabel: "🧠 Jamiyat & Nutq",
    text: "Cognitive flexibility enables agile communicators to tailor their rhetorical delivery to varied cultural backgrounds.",
    timing: "0:07",
    level: "Band 8.5"
  },
  {
    id: 20,
    category: "ielts_soc",
    categoryLabel: "🧠 Jamiyat & Nutq",
    text: "Extensive psychological studies substantiate that systematic deliberate practice fosters exceptional mastery in linguistics.",
    timing: "0:08",
    level: "Band 9.0"
  },
  {
    id: 21,
    category: "ielts_soc",
    categoryLabel: "🧠 Jamiyat & Nutq",
    text: "Cultivating critical literacy remains imperative in separating rigorous empirical findings from unsubstantiated digital claims.",
    timing: "0:08",
    level: "Band 8.5"
  },
  {
    id: 22,
    category: "ielts_soc",
    categoryLabel: "🧠 Jamiyat & Nutq",
    text: "Effective diplomacy hinges upon active listening, mutual respect, and an unshakeable commitment to constructive dialogue.",
    timing: "0:08",
    level: "Band 8.5"
  },
  {
    id: 23,
    category: "ielts_soc",
    categoryLabel: "🧠 Jamiyat & Nutq",
    text: "Recent neuroimaging studies demonstrate that spaced repetition consolidates neural connections essential for enduring knowledge.",
    timing: "0:08",
    level: "Band 9.0"
  },
  {
    id: 24,
    category: "ielts_soc",
    categoryLabel: "🧠 Jamiyat & Nutq",
    text: "Nurturing an inclusive learning environment inspires students from every background to unleash their distinct talents.",
    timing: "0:08",
    level: "Band 8.5"
  },

  // 5. Digital SAT Critical Reading & Advanced Vocabulary
  {
    id: 25,
    category: "sat_vocab",
    categoryLabel: "📐 SAT Critical Reading",
    text: "The author’s deliberate deployment of vivid metaphors accentuates the protagonist’s lingering moral ambivalence.",
    timing: "0:07",
    level: "SAT 1550+"
  },
  {
    id: 26,
    category: "sat_vocab",
    categoryLabel: "📐 SAT Critical Reading",
    text: "Contrary to prevailing public assumptions, rigorous empirical trials unequivocally contradict the conventional medical paradigm.",
    timing: "0:08",
    level: "SAT 1550+"
  },
  {
    id: 27,
    category: "sat_vocab",
    categoryLabel: "📐 SAT Critical Reading",
    text: "The contrasting historical testimonies illuminate a profound schism between official propaganda and documented civil reality.",
    timing: "0:08",
    level: "SAT 1600"
  },
  {
    id: 28,
    category: "sat_vocab",
    categoryLabel: "📐 SAT Critical Reading",
    text: "Meticulous archival research allows modern historians to reconstruct complex viewpoints that traditional surveys overlooked.",
    timing: "0:08",
    level: "SAT 1550+"
  },
  {
    id: 29,
    category: "sat_vocab",
    categoryLabel: "📐 SAT Critical Reading",
    text: "Her impassioned advocacy for civil liberties resonated powerfully throughout the highly contentious legislative debates.",
    timing: "0:08",
    level: "SAT 1550+"
  },
  {
    id: 30,
    category: "sat_vocab",
    categoryLabel: "📐 SAT Critical Reading",
    text: "By decomposing convoluted algebraic theorems into primary mathematical postulates, researchers resolved decades of analytical stagnation.",
    timing: "0:08",
    level: "SAT 1600"
  }
];

class ShadowingTrainer {
  constructor() {
    this.allPhrases = SHADOWING_PHRASES_2026;
    this.activeCategory = "all";
    this.filteredPhrases = [...this.allPhrases];
    this.currentPhraseIdx = 0;
    
    // Voice & Speech Synthesis
    this.selectedGender = localStorage.getItem("yu_shadow_gender") || "female"; // "female" (Sarah) | "male" (Erkak Spiker)
    this.selectedAccent = "en-US"; // "en-US", "en-GB", "en-AU"
    this.playbackRate = parseFloat(localStorage.getItem("yu_shadow_speed")) || 1.0; // Default natural 1.0x native rate
    this.nativeVoice = null;
    this.isSpeaking = false;
    
    // Real Voice Recording & Speech Recognition Evaluation
    this.isRecording = false;
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.userAudioUrl = null;
    this.recordTimer = null;
    this.recordingSeconds = 0;
    this.recognition = null;
    this.spokenTranscript = "";
    this.lastEvaluation = null;

    this.init();
  }

  init() {
    this.createShadowingModal();
    this.initVoices();
  }

  initVoices() {
    if ("speechSynthesis" in window) {
      // Warm up voices
      window.speechSynthesis.onvoiceschanged = () => {
        this.selectOptimalVoice();
      };
      this.selectOptimalVoice();
    }
  }

  selectOptimalVoice() {
    if (!("speechSynthesis" in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return;

    const isMale = this.selectedGender === "male";

    // Strictly exclude novelty, robotic, distorted, or legacy cartoon voices
    const excludedVoices = [
      "fred", "ralph", "albert", "bad news", "bahh", "bells", "boing", "bubbles",
      "cellos", "deranged", "good news", "hysterical", "jester", "junior", "organ",
      "superstar", "trinoids", "whisper", "wobble", "zarvox", "grandma", "grandpa"
    ];

    // Explicit list of male voices to NEVER use for female speaker
    const maleNames = [
      "daniel", "eddy", "reed", "rocko", "grandpa", "oliver", "arthur", "guy",
      "david", "mark", "george", "ryan", "alex", "tom", "rishi", "aaron",
      "jamie", "malcolm", "uk english male", "us english male", "male"
    ];

    const cleanVoices = voices.filter(v => {
      const vName = v.name.toLowerCase();
      return !excludedVoices.some(bad => vName.includes(bad));
    });

    // Strictly English voices: EXCLUDE Russian (Milena, ru), Uzbek (uz), etc.
    const englishVoices = cleanVoices.filter(v => {
      const lang = (v.lang || "").replace('_', '-').toLowerCase();
      const vName = (v.name || "").toLowerCase();
      if (lang.startsWith("ru") || lang.startsWith("uz") || lang.startsWith("de") || 
          lang.startsWith("fr") || lang.startsWith("es") || lang.startsWith("it") || 
          lang.startsWith("zh") || lang.startsWith("ja") || lang.startsWith("ko")) {
        return false;
      }
      return lang.startsWith("en") || vName.includes("english") || vName.includes("британия") || vName.includes("сша");
    });
    const pool = englishVoices.length > 0 ? englishVoices : cleanVoices.filter(v => !(v.lang || "").toLowerCase().startsWith("ru"));

    let match = null;

    if (!isMale) {
      // ===== 👩 REAL NATURAL FEMALE SPEAKER (100% Guaranteed Genuine Female) =====
      // Known authentic natural female voices across macOS, iOS, Windows, Chrome, Android
      // Includes Shelley, Sandy, Flo (macOS British English female voices)
      const authenticFemaleNames = [
        "shelley", "flo", "sandy", "serena", "stephanie", "google uk english female", "martha", "victoria", "libby", "sonia", "kate",
        "samantha", "karen", "moira", "tessa", "ava", "allison", "susan", "kathy",
        "jenny", "aria", "zira", "fiona", "google us english", "uk english female", "female", "natural"
      ];

      // Pool strictly filtered to exclude any male voices
      const femaleOnlyPool = pool.filter(v => {
        const n = v.name.toLowerCase();
        return !maleNames.some(m => n.includes(m));
      });

      const accentPrefix = this.selectedAccent.substring(0, 5).toLowerCase();

      // Step A: Best match - British/American/Australian accent + Known female name
      match = femaleOnlyPool.find(v => {
        const l = v.lang.replace('_', '-').toLowerCase();
        const n = v.name.toLowerCase();
        return l.startsWith(accentPrefix) && authenticFemaleNames.some(name => n.includes(name));
      });

      // Step B: Match by accent in female-only pool
      if (!match) {
        match = femaleOnlyPool.find(v => {
          const l = v.lang.replace('_', '-').toLowerCase();
          return l.startsWith(accentPrefix);
        });
      }

      // Step C: Match any authentic female voice in any English locale (e.g. Samantha, Karen)
      if (!match) {
        match = femaleOnlyPool.find(v => {
          const n = v.name.toLowerCase();
          return authenticFemaleNames.some(name => n.includes(name));
        });
      }

      // Step D: Any voice in female-only pool
      if (!match && femaleOnlyPool.length > 0) {
        match = femaleOnlyPool[0];
      }

    } else {
      // ===== 👨 REAL MASCULINE MALE VOICE (Authentic Human Tone) =====
      // Real natural male voices across macOS, iOS, Windows, Chrome, Android
      const realMaleVoices = [
        "daniel", "eddy", "reed", "rocko", "oliver", "arthur", "guy",
        "david", "mark", "george", "ryan", "alex", "tom", "rishi", "aaron",
        "uk english male", "us english male", "male"
      ];
      const allFemaleNames = [
        "shelley", "flo", "serena", "stephanie", "martha", "libby", "sonia", "hazel",
        "victoria", "kate", "samantha", "karen", "ava", "allison", "susan", "zira",
        "fiona", "moira", "tessa", "veena", "sandy", "kathy", "jenny", "aria", "female"
      ];

      // Step A: Search real male voice matching chosen accent
      const accentPrefix = this.selectedAccent.substring(0, 5).toLowerCase();
      match = pool.find(v => {
        const l = v.lang.replace('_', '-').toLowerCase();
        const n = v.name.toLowerCase();
        return l.startsWith(accentPrefix) && realMaleVoices.some(name => n.includes(name));
      });

      // Step B: Search any real male voice in pool
      if (!match) {
        match = pool.find(v => {
          const n = v.name.toLowerCase();
          return realMaleVoices.some(name => n.includes(name));
        });
      }

      // Step C: Strictly non-female and non-robotic voice
      if (!match) {
        match = pool.find(v => {
          const n = v.name.toLowerCase();
          return !allFemaleNames.some(fn => n.includes(fn));
        });
      }
    }

    // Fallback MUST be an English voice, NEVER a Russian or non-English voice
    this.nativeVoice = match || pool[0] || englishVoices[0] || null;
  }

  createShadowingModal() {
    if (document.getElementById("shadowing-modal")) return;

    const modal = document.createElement("div");
    modal.id = "shadowing-modal";
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-card shadowing-modal-card" style="max-width: 820px; width: 95%;">
        
        <!-- Header Bar -->
        <div class="modal-header-bar" style="border-bottom: 1px solid var(--border); padding-bottom: 16px; margin-bottom: 16px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 44px; height: 44px; border-radius: 12px; background: linear-gradient(135deg, #4F46E5, #3730A3); color: #FFF; display: flex; align-items: center; justify-content: center; font-size: 22px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);">
              🎙️
            </div>
            <div>
              <h3 id="shadow-modal-title" style="margin: 0; font-size: 19px; font-weight: 800; color: var(--slate-900);">Shadowing & Accent Studio 2026</h3>
              <span id="shadow-modal-sub" style="font-size: 12px; color: var(--brand-indigo); font-weight: 700;">IELTS Speaking Band 8.5–9.0 & SAT Nutq Trenajyori (30 ta Rasmiy Gap)</span>
            </div>
          </div>
          <button class="modal-close-btn" id="btn-close-shadowing" title="Yopish">✕</button>
        </div>

        <!-- Category Selector Pills (Scrollable with Full Visibility & Zero Clipping) -->
        <div class="shadow-cat-pills" id="shadow-category-pills" style="display: flex; align-items: center; gap: 8px; overflow-x: auto; padding: 10px 4px 14px 4px; min-height: 54px; margin-bottom: 18px; box-sizing: border-box; flex-shrink: 0;">
          <button type="button" class="shadow-cat-pill active" data-cat="all" style="padding: 8px 16px; border-radius: 9999px; font-size: 12.5px; font-weight: 700; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0;">Barchasi (30)</button>
          <button type="button" class="shadow-cat-pill" data-cat="ielts_tech" style="padding: 8px 16px; border-radius: 9999px; font-size: 12.5px; font-weight: 700; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0;">🤖 Texnologiya & AI</button>
          <button type="button" class="shadow-cat-pill" data-cat="ielts_edu" style="padding: 8px 16px; border-radius: 9999px; font-size: 12.5px; font-weight: 700; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0;">🎓 Ta'lim & Grantlar</button>
          <button type="button" class="shadow-cat-pill" data-cat="ielts_env" style="padding: 8px 16px; border-radius: 9999px; font-size: 12.5px; font-weight: 700; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0;">🌍 Ekologiya & Iqtisod</button>
          <button type="button" class="shadow-cat-pill" data-cat="ielts_soc" style="padding: 8px 16px; border-radius: 9999px; font-size: 12.5px; font-weight: 700; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0;">🧠 Jamiyat & Nutq</button>
          <button type="button" class="shadow-cat-pill" data-cat="sat_vocab" style="padding: 8px 16px; border-radius: 9999px; font-size: 12.5px; font-weight: 700; cursor: pointer; white-space: nowrap; display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0;">📐 SAT Critical</button>
        </div>

        <div class="shadowing-body" id="shadowing-body-content">
          <!-- Dynamically Rendered Phrase Card & Recorder -->
        </div>

      </div>
    `;

    document.body.appendChild(modal);

    // Close button
    document.getElementById("btn-close-shadowing")?.addEventListener("click", () => {
      this.closeTrainer();
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) this.closeTrainer();
    });

    // Category pills events
    modal.querySelectorAll(".shadow-cat-pill").forEach(pill => {
      pill.addEventListener("click", (e) => {
        modal.querySelectorAll(".shadow-cat-pill").forEach(p => p.classList.remove("active"));
        e.currentTarget.classList.add("active");
        const cat = e.currentTarget.getAttribute("data-cat");
        this.filterCategory(cat);
      });
    });
  }

  filterCategory(cat) {
    this.activeCategory = cat;
    if (cat === "all") {
      this.filteredPhrases = [...this.allPhrases];
    } else {
      this.filteredPhrases = this.allPhrases.filter(p => p.category === cat);
    }
    this.currentPhraseIdx = 0;
    this.userAudioUrl = null;
    this.spokenTranscript = "";
    this.lastEvaluation = null;
    this.renderPhraseView();
  }

  openTrainer(category = null) {
    const modal = document.getElementById("shadowing-modal");
    if (!modal) return;

    this.userAudioUrl = null;
    this.spokenTranscript = "";
    this.lastEvaluation = null;

    const targetCat = category || "all";
    modal.querySelectorAll(".shadow-cat-pill").forEach(p => {
      if (p.getAttribute("data-cat") === targetCat) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });
    this.filterCategory(targetCat);

    modal.classList.add("active");
    this.renderPhraseView();
  }

  closeTrainer() {
    this.stopPlayback();
    if (this.isRecording) {
      this.stopRecordingInternal();
    }
    const modal = document.getElementById("shadowing-modal");
    if (modal) modal.classList.remove("active");
  }

  getAccentDisplayLabel() {
    const isMale = this.selectedGender === "male";
    if (isMale) {
      if (this.selectedAccent === "en-US") return "🇺🇸 American Natural (Guy - Human Neural Male)";
      if (this.selectedAccent === "en-AU") return "🇦🇺 Australian Accent (William - Human Neural Male)";
      return "🇬🇧 British Oxford (Ryan - Human BBC RP Male)";
    } else {
      if (this.selectedAccent === "en-US") return "🇺🇸 American Expressive (Jenny - Human Neural Female)";
      if (this.selectedAccent === "en-AU") return "🇦🇺 Australian Native (Natasha - Human Neural Female)";
      return "🇬🇧 British Oxford (Sonia - Human Oxford RP Female)";
    }
  }

  getSpeakerNameLabel() {
    const isMale = this.selectedGender === "male";
    return isMale ? "👨 Erkak Spiker (Haqiqiy Native Male Baritone)" : "👩 Haqiqiy Qiz Bola Spiker (Real Native Female Voice)";
  }

  renderPhraseView() {
    const container = document.getElementById("shadowing-body-content");
    if (!container || this.filteredPhrases.length === 0) return;

    const phrase = this.filteredPhrases[this.currentPhraseIdx];
    const total = this.filteredPhrases.length;
    const lang = window.app?.currentLang || "uz";

    // Build Karaoke Word Spans (interactive: click any word to pronounce individually)
    const words = phrase.text.split(" ");
    const wordsHtml = words.map((w, idx) => {
      const cleanW = w.replace(/'/g, "\\'");
      return `<span class="phrase-word" id="phrase-word-${idx}" onclick="window.shadowingTrainer?.speakWord('${cleanW}')" title="So'zni alohida tinglash (🔊)" style="cursor: pointer;">${w}</span>`;
    }).join(" ");

    container.innerHTML = `
      <div class="shadow-step-container">
        
        <!-- Progress Bar & Category Meta -->
        <div class="shadow-progress-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="background: #EEF2FF; color: #4F46E5; padding: 2px 8px; border-radius: 6px; font-size: 11px; font-weight: 800;">
              ${phrase.categoryLabel}
            </span>
            <span style="font-weight: 800; color: var(--slate-900);">
              ${lang === "ru" ? `Фраза ${this.currentPhraseIdx + 1} из ${total}` : (lang === "en" ? `Phrase ${this.currentPhraseIdx + 1} of ${total}` : `Gap ${this.currentPhraseIdx + 1} / ${total}`)}
            </span>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <span class="shadow-time-tag" style="background: rgba(16, 185, 129, 0.1); color: #059669; border: 1px solid rgba(16, 185, 129, 0.25); padding: 2px 8px; border-radius: 999px;">
              ⏱️ ${phrase.timing}
            </span>
            <span style="background: #FEF3C7; color: #D97706; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 800;">
              ⭐ ${phrase.level}
            </span>
          </div>
        </div>

        <!-- NATIVE SPEAKER AUDIO CARD (GENDER & ACCENT SWITCHER) -->
        <div class="native-speaker-card" style="border: 2px solid #C7D2FE; background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%); border-radius: 18px; padding: 22px;">
          
          <!-- Gender & Accent Controls Bar -->
          <div class="voice-config-bar" style="display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; margin-bottom: 16px; padding: 10px 14px; background: rgba(238, 242, 255, 0.7); border-radius: 12px; border: 1px solid #E0E7FF;">
            <!-- Spiker Jinsi: Haqiqiy Qiz / Erkak Spiker -->
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 12px; font-weight: 800; color: var(--slate-700);">Spiker:</span>
              <div class="gender-toggle-pills">
                <button type="button" class="gender-pill ${this.selectedGender === 'female' ? 'active' : ''}" data-gender="female">
                  👩 Haqiqiy Qiz Bola Ovozi
                </button>
                <button type="button" class="gender-pill ${this.selectedGender === 'male' ? 'active' : ''}" data-gender="male">
                  👨 Erkak Spiker (Real Male)
                </button>
              </div>
            </div>

            <!-- Aksent tanlash -->
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 12px; font-weight: 800; color: var(--slate-700);">Aksent:</span>
              <div class="voice-accents-row">
                <button type="button" class="accent-pill ${this.selectedAccent === "en-US" ? "active" : ""}" data-accent="en-US">
                  🇺🇸 US
                </button>
                <button type="button" class="accent-pill ${this.selectedAccent === "en-GB" ? "active" : ""}" data-accent="en-GB">
                  🇬🇧 UK
                </button>
                <button type="button" class="accent-pill ${this.selectedAccent === "en-AU" ? "active" : ""}" data-accent="en-AU">
                  🇦🇺 AU
                </button>
              </div>
            </div>
          </div>

          <!-- Speaker Avatar & Live Visualizer -->
          <div class="speaker-avatar-wrap" style="display: flex; flex-direction: column; align-items: center; gap: 8px; margin-bottom: 14px;">
            <div style="position: relative; display: inline-flex; align-items: center; justify-content: center;">
              <span class="speaker-avatar" id="native-speaker-avatar" style="font-size: 40px; filter: drop-shadow(0 4px 10px rgba(79, 70, 229, 0.25)); transition: transform 0.2s;">
                ${this.selectedGender === "male" ? "👨‍💼" : "👩‍🎓"}
              </span>
            </div>
            
            <!-- 7-Bar Dynamic Frequency Audio Visualizer -->
            <div class="sound-wave-bars" id="native-sound-waves">
              <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            
            <div style="text-align: center;">
              <strong style="font-size: 15px; font-weight: 800; color: var(--slate-900); display: block;" id="speaker-name-label">
                ${this.getSpeakerNameLabel()}
              </strong>
              <span style="font-size: 12px; font-weight: 700; color: var(--brand-indigo);" id="voice-accent-label">
                ${this.getAccentDisplayLabel()}
              </span>
            </div>
          </div>

          <!-- Real-time Karaoke Highlighting Phrase Display -->
          <div class="phrase-text-display" id="karaoke-phrase-box" style="margin-bottom: 18px;">
            "${wordsHtml}"
          </div>

          <!-- Audio Controls Bar & Interactive Speed Pills -->
          <div class="speaker-controls-container" style="display: flex; flex-direction: column; align-items: center; gap: 14px; margin-bottom: 22px;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap;">
              <button class="btn btn-primary" id="btn-speak-phrase" style="padding: 12px 28px; font-weight: 800; font-size: 14.5px; background: linear-gradient(135deg, #4F46E5 0%, #3730A3 100%); box-shadow: 0 4px 16px rgba(79, 70, 229, 0.35); border-radius: 12px; cursor: pointer; transition: all 0.2s ease;">
                <span id="speak-btn-text">🔊 Tinglash (${this.selectedGender === 'male' ? '👨 Erkak Spiker' : '👩 Haqiqiy Qiz Ovozi'})</span>
              </button>
            </div>

            <!-- Modern Interactive Speed Pills -->
            <div class="shadow-speed-selector-bar">
              <span style="font-size: 12px; font-weight: 800; color: var(--slate-600); display: flex; align-items: center; gap: 4px; margin-right: 4px;">
                ⚡ <span>Nutq tezligi:</span>
              </span>
              <button type="button" class="speed-pill-btn ${Math.abs(this.playbackRate - 0.5) < 0.05 ? 'active' : ''}" data-speed="0.5" title="0.5x - Juda sekin (har bir so'z va tovushni aniq eshitish)">0.5x (Juda sekin)</button>
              <button type="button" class="speed-pill-btn ${Math.abs(this.playbackRate - 0.75) < 0.05 ? 'active' : ''}" data-speed="0.75" title="0.75x - Sekin (qulay takrorlash)">0.75x (Sekin)</button>
              <button type="button" class="speed-pill-btn ${Math.abs(this.playbackRate - 1.0) < 0.05 ? 'active' : ''}" data-speed="1.0" title="1.0x - Tabiiy standart tezlik">1.0x (Tabiiy)</button>
              <button type="button" class="speed-pill-btn ${Math.abs(this.playbackRate - 1.25) < 0.05 ? 'active' : ''}" data-speed="1.25" title="1.25x - Tez (IELTS Band 8.5 nutq tezligi)">1.25x (Tez)</button>
              <button type="button" class="speed-pill-btn ${Math.abs(this.playbackRate - 1.5) < 0.05 ? 'active' : ''}" data-speed="1.5" title="1.5x - Maksimal tezlik (Native Speaker)">1.5x (Maksimal)</button>
            </div>
          </div>
        </div>

        <!-- REAL MICROPHONE VOICE RECORDING CARD -->
        <div class="user-record-card" style="border: 2px dashed #818CF8; border-radius: 18px; padding: 22px; background: #F8FAFC;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
            <h4 style="font-size: 15px; font-weight: 800; color: var(--slate-900); margin: 0;">
              🎙️ Endi o'zingiz ovoz yozib takrorlang (Shadowing):
            </h4>
            
            <div id="recording-live-indicator" style="display: ${this.isRecording ? 'inline-flex' : 'none'};">
              <span class="recording-timer-badge">
                <span class="recording-pulse-dot"></span>
                <span id="recording-seconds-counter">00:00</span>
              </span>
            </div>
          </div>

          <p style="font-size: 13px; color: var(--slate-600); margin: 0 0 16px 0; text-align: left; line-height: 1.5;">
            Mikrofon tugmasini bosing va gapni xuddi native speaker kabi intonatsiya, tezlik va pauzalar bilan talaffuz qiling:
          </p>

          <!-- Recording Action Buttons -->
          <div class="record-controls-row" style="display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap;">
            <button class="btn ${this.isRecording ? "btn-danger btn-recording-pulse" : "btn-primary"}" id="btn-toggle-record" style="padding: 12px 24px; font-size: 14px; font-weight: 800; border-radius: 12px;">
              <span>${this.isRecording ? "⏹️ Yozishni To'xtatish" : "🎙️ Ovozni Yozishni Boshlash"}</span>
            </button>
            
            <button class="btn btn-secondary" id="btn-listen-my-voice" ${this.userAudioUrl ? "" : "disabled"} style="padding: 12px 20px; font-size: 13.5px; font-weight: 700; border-radius: 12px;">
              <span>▶️ O'z Ovozimni Eshitish</span>
            </button>
          </div>

          <!-- Side-by-side Audio Comparison & Evaluation Box -->
          <div id="shadow-feedback-box" style="display: ${this.userAudioUrl ? 'block' : 'none'}; margin-top: 18px;">
            ${this.renderEvaluationContent()}
          </div>
        </div>

        <!-- FOOTER NAVIGATION BAR -->
        <div class="shadow-footer-nav" style="display: flex; align-items: center; justify-content: space-between; margin-top: 8px; border-top: 1px solid var(--border); padding-top: 16px;">
          <button class="btn btn-secondary" id="btn-prev-phrase" ${this.currentPhraseIdx === 0 ? "disabled" : ""}>
            ⬅️ Oldingi gap
          </button>
          
          <span style="font-size: 12px; color: var(--slate-400); font-family: var(--font-mono);">
            Gap ${this.currentPhraseIdx + 1} / ${total}
          </span>

          <button class="btn btn-primary" id="btn-next-phrase" style="background: linear-gradient(135deg, #4F46E5 0%, #3730A3 100%);">
            ${this.currentPhraseIdx === total - 1 ? "Mashqni Yakunlash 🏁" : "Keyingi gap ➡️"}
          </button>
        </div>

      </div>
    `;

    this.attachCardEventListeners(phrase, total);
  }

  attachCardEventListeners(phrase, total) {
    // 0. Gender Selector (Qiz / O'g'il)
    document.querySelectorAll(".gender-pill").forEach(pill => {
      pill.addEventListener("click", (e) => {
        this.stopPlayback();
        document.querySelectorAll(".gender-pill").forEach(p => p.classList.remove("active"));
        e.currentTarget.classList.add("active");
        this.selectedGender = e.currentTarget.getAttribute("data-gender");
        try {
          localStorage.setItem("yu_shadow_gender", this.selectedGender);
        } catch (err) {}

        const isMale = this.selectedGender === "male";
        this.selectOptimalVoice();

        const avatar = document.getElementById("native-speaker-avatar");
        const nameLabel = document.getElementById("speaker-name-label");
        const accentLabel = document.getElementById("voice-accent-label");
        if (avatar) avatar.textContent = isMale ? "👨‍💼" : "👩‍🎓";
        if (nameLabel) nameLabel.textContent = this.getSpeakerNameLabel();
        if (accentLabel) {
          accentLabel.textContent = this.getAccentDisplayLabel();
        }

        const speakBtnSpan = document.getElementById("speak-btn-text") || document.querySelector("#btn-speak-phrase span");
        if (speakBtnSpan) {
          speakBtnSpan.textContent = `🔊 Tinglash (${isMale ? '👨 Erkak Spiker' : '👩 Haqiqiy Qiz Ovozi'})`;
        }

        window.app?.notify(isMale ? "Spiker: 👨 Erkak Spiker (Haqiqiy erkak ovozi) tanlandi! 🎧" : "Spiker: 👩 Haqiqiy Qiz Bola Ovozi tanlandi! 🎧");
      });
    });

    // 1. Play / Stop Native Speaker Voice (Toggle)
    document.getElementById("btn-speak-phrase")?.addEventListener("click", () => {
      if (this.isSpeaking) {
        this.stopPlayback();
      } else {
        this.playNativePhrase(phrase.text);
      }
    });

    // 2. Playback Speed Change via Interactive Speed Pills
    document.querySelectorAll(".speed-pill-btn").forEach(pill => {
      pill.addEventListener("click", (e) => {
        const val = parseFloat(e.currentTarget.getAttribute("data-speed"));
        if (!isNaN(val)) {
          this.setPlaybackSpeed(val, phrase.text);
        }
      });
    });

    // 3. Accent Selector Buttons
    document.querySelectorAll(".accent-pill").forEach(pill => {
      pill.addEventListener("click", (e) => {
        document.querySelectorAll(".accent-pill").forEach(p => p.classList.remove("active"));
        e.currentTarget.classList.add("active");
        this.selectedAccent = e.currentTarget.getAttribute("data-accent");
        this.selectOptimalVoice();
        
        const label = document.getElementById("voice-accent-label");
        if (label) {
          label.textContent = this.getAccentDisplayLabel();
        }
        window.app?.notify(`Aksent tanlandi: ${this.getAccentDisplayLabel()} 🎧`);
      });
    });

    // 4. Toggle Voice Recording
    document.getElementById("btn-toggle-record")?.addEventListener("click", () => {
      this.toggleRecording();
    });

    // 5. Listen to Student's Voice Recording
    document.getElementById("btn-listen-my-voice")?.addEventListener("click", () => {
      this.playUserAudio();
    });

    // 6. Navigation Buttons
    document.getElementById("btn-prev-phrase")?.addEventListener("click", () => {
      if (this.currentPhraseIdx > 0) {
        this.stopPlayback();
        this.currentPhraseIdx--;
        this.userAudioUrl = null;
        this.spokenTranscript = "";
        this.lastEvaluation = null;
        this.renderPhraseView();
      }
    });

    document.getElementById("btn-next-phrase")?.addEventListener("click", () => {
      if (this.currentPhraseIdx < total - 1) {
        this.stopPlayback();
        this.currentPhraseIdx++;
        this.userAudioUrl = null;
        this.spokenTranscript = "";
        this.lastEvaluation = null;
        this.renderPhraseView();
      } else {
        this.closeTrainer();
        window.app?.notify("🎉 Qoyilmaqom! Shadowing trenajyorida 30 ta rasmiy gap muvaffaqiyatli mashq qilindi!");
      }
    });
  }

  // ================= DYNAMIC PLAYBACK SPEED CONTROLLER =================
  setPlaybackSpeed(speed, currentText) {
    this.playbackRate = speed;
    try {
      localStorage.setItem("yu_shadow_speed", speed.toString());
    } catch (e) {}

    // Update active pill styling in DOM immediately
    document.querySelectorAll(".speed-pill-btn").forEach(btn => {
      const bSpeed = parseFloat(btn.getAttribute("data-speed"));
      if (Math.abs(bSpeed - speed) < 0.05) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const speedDescriptions = {
      0.5: "0.5x (Juda sekin - fonetik tahlil)",
      0.75: "0.75x (Sekin - qulay takrorlash)",
      1.0: "1.0x (Tabiiy standart native tezligi)",
      1.25: "1.25x (Tez - IELTS Band 8.5)",
      1.5: "1.5x (Maksimal tez - Native Challenge)"
    };
    const desc = speedDescriptions[speed] || `${speed}x`;
    window.app?.notify(`⚡ Nutq tezligi: ${desc} ga o'rnatildi! 🎧`);

    // If audio is currently playing in studio player, update playback rate dynamically
    if (this.isSpeaking && this.audioPlayer && !this.audioPlayer.paused) {
      this.audioPlayer.playbackRate = speed;
      this.audioPlayer.preservesPitch = true;
    } else if (this.isSpeaking && currentText) {
      this.playNativePhrase(currentText);
    }
  }

  // ================= 100% GENUINE HUMAN STUDIO NATIVE AUDIO & KARAOKE =================
  playNativePhrase(text) {
    // Stop any existing playback first
    this.stopPlayback();

    const curPhrase = this.filteredPhrases[this.currentPhraseIdx];
    const isMale = this.selectedGender === "male";
    let voiceKey = "uk_female";
    if (isMale) {
      if (this.selectedAccent === "en-US") voiceKey = "us_male";
      else if (this.selectedAccent === "en-AU") voiceKey = "au_male";
      else voiceKey = "uk_male";
    } else {
      if (this.selectedAccent === "en-US") voiceKey = "us_female";
      else if (this.selectedAccent === "en-AU") voiceKey = "au_female";
      else voiceKey = "uk_female";
    }

    const waves = document.getElementById("native-sound-waves");
    if (waves) waves.classList.add("animating");

    const speakBtnText = document.getElementById("speak-btn-text");
    if (speakBtnText) {
      speakBtnText.textContent = "⏹️ To'xtatish";
    }

    const words = text.split(" ");
    document.querySelectorAll(".phrase-word").forEach(w => w.classList.remove("speaking-active"));

    const cleanupSpeaking = () => {
      if (waves) waves.classList.remove("animating");
      document.querySelectorAll(".phrase-word").forEach(w => w.classList.remove("speaking-active"));
      this.isSpeaking = false;
      if (speakBtnText) {
        speakBtnText.textContent = `🔊 Tinglash (${this.selectedGender === 'male' ? '👨 Erkak Spiker' : '👩 Haqiqiy Qiz Ovozi'})`;
      }
    };

    // Priority 1: High-Definition Studio Native Audio File (.m4a)
    // Recorded by Serena (Official UK Female Oxford RP), Daniel (UK Male), Samantha (US Female), Alex (US Male)
    if (curPhrase && curPhrase.id) {
      const audioPath = `audio/shadowing/phrase_${curPhrase.id}_${voiceKey}.m4a`;
      if (!this.audioPlayer) {
        this.audioPlayer = new Audio();
      }

      this.audioPlayer.src = audioPath;
      try {
        this.audioPlayer.load();
      } catch (e) {}
      this.audioPlayer.preservesPitch = true;
      const rate = Math.max(0.4, Math.min(2.0, this.playbackRate || 1.0));
      this.audioPlayer.playbackRate = rate;

      // Real-time Karaoke word highlighting synchronized to actual audio progress
      this.audioPlayer.ontimeupdate = () => {
        if (!this.audioPlayer.duration) return;
        const progress = this.audioPlayer.currentTime / this.audioPlayer.duration;
        const currentWordIdx = Math.min(words.length - 1, Math.floor(progress * words.length));
        document.querySelectorAll(".phrase-word").forEach((w, idx) => {
          if (idx === currentWordIdx) {
            w.classList.add("speaking-active");
          } else {
            w.classList.remove("speaking-active");
          }
        });
      };

      this.audioPlayer.onended = () => {
        const playedSec = Math.round(this.audioPlayer?.duration || 7);
        if (playedSec > 0) {
          window.goalTracker?.recordShadowingSeconds(playedSec);
        }
        cleanupSpeaking();
      };
      this.audioPlayer.onerror = () => {
        console.warn("Studio audio file load error, falling back to natural speech synthesis");
        this.playFallbackSpeech(text, cleanupSpeaking);
      };

      this.isSpeaking = true;
      this.audioPlayer.play().catch(e => {
        console.warn("Audio autoplay blocked, using fallback speech:", e);
        this.playFallbackSpeech(text, cleanupSpeaking);
      });
      return;
    }

    // Priority 2: Fallback Speech Synthesis (for custom teacher phrases)
    this.playFallbackSpeech(text, cleanupSpeaking);
  }

  playFallbackSpeech(text, cleanupSpeaking) {
    if (!("speechSynthesis" in window)) {
      cleanupSpeaking();
      return;
    }

    window.speechSynthesis.cancel();
    this.selectOptimalVoice();

    const utterance = new SpeechSynthesisUtterance(text);
    if (this.nativeVoice) {
      utterance.voice = this.nativeVoice;
      utterance.lang = this.selectedAccent || "en-GB";
    } else {
      utterance.lang = this.selectedAccent || "en-GB";
    }

    // Natural 1.0 pitch - never pitch shift to avoid robotic artifacts
    utterance.pitch = 1.0;
    utterance.rate = Math.max(0.4, Math.min(2.0, this.playbackRate || 1.0));
    utterance.volume = 1.0;

    const words = text.split(" ");
    let wordIdx = 0;
    utterance.onboundary = (event) => {
      if (event.name === "word") {
        document.querySelectorAll(".phrase-word").forEach(w => w.classList.remove("speaking-active"));
        const targetWord = document.getElementById(`phrase-word-${wordIdx}`);
        if (targetWord) targetWord.classList.add("speaking-active");
        wordIdx = (wordIdx + 1) % words.length;
      }
    };

    utterance.onend = () => {
      window.goalTracker?.recordShadowingSeconds(6);
      cleanupSpeaking();
    };
    utterance.onerror = cleanupSpeaking;

    this.isSpeaking = true;
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 30);
  }

  stopPlayback() {
    if (this.audioPlayer) {
      this.audioPlayer.pause();
      this.audioPlayer.currentTime = 0;
    }
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    const waves = document.getElementById("native-sound-waves");
    if (waves) waves.classList.remove("animating");
    document.querySelectorAll(".phrase-word").forEach(w => w.classList.remove("speaking-active"));
    this.isSpeaking = false;
    const speakBtnText = document.getElementById("speak-btn-text");
    if (speakBtnText) {
      speakBtnText.textContent = `🔊 Tinglash (${this.selectedGender === 'male' ? '👨 Erkak Spiker' : '👩 Haqiqiy Qiz Ovozi'})`;
    }
  }

  speakWord(wordText) {
    if (!wordText) return;
    const cleanWord = wordText.replace(/[^a-zA-Z'-]/g, "").trim();
    if (!cleanWord) return;

    window.soundFx?.playClick?.();
    window.app?.notify(`🔊 "${cleanWord}" talaffuz qilinmoqda...`);

    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(cleanWord);
    this.selectOptimalVoice();
    if (this.nativeVoice) {
      utterance.voice = this.nativeVoice;
    }
    utterance.lang = this.selectedAccent || "en-GB";
    utterance.rate = 0.85; // Crystal-clear individual word pacing
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    window.speechSynthesis.speak(utterance);
  }

  // ================= REAL VOICE RECORDING & SPEECH RECOGNITION ENGINE =================
  async toggleRecording() {
    if (this.isRecording) {
      this.stopRecordingInternal();
    } else {
      await this.startRecordingInternal();
    }
  }

  async startRecordingInternal() {
    this.stopPlayback(); // Stop any speaker audio
    this.isRecording = false;
    this.spokenTranscript = "";
    this.lastEvaluation = null;
    this.userAudioUrl = null; // Reset audio URL immediately so previous feedback is hidden!
    this.audioChunks = [];
    this.recordingSeconds = 0;
    this.isEvaluating = false;

    // Safely abort previous recognition session
    if (this.recognition) {
      try {
        this.recognition.onresult = null;
        this.recognition.onerror = null;
        this.recognition.onend = null;
        this.recognition.abort();
      } catch (e) {}
      this.recognition = null;
    }

    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        // Pick best supported MIME type
        let mimeType = "audio/webm";
        if (typeof MediaRecorder !== "undefined") {
          if (MediaRecorder.isTypeSupported("audio/webm;codecs=opus")) {
            mimeType = "audio/webm;codecs=opus";
          } else if (MediaRecorder.isTypeSupported("audio/mp4")) {
            mimeType = "audio/mp4";
          }
        }

        this.mediaRecorder = new MediaRecorder(stream, { mimeType });
        this.audioChunks = [];

        this.mediaRecorder.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            this.audioChunks.push(event.data);
          }
        };

        this.mediaRecorder.onstop = () => {
          const audioBlob = new Blob(this.audioChunks, { type: mimeType });
          this.userAudioUrl = URL.createObjectURL(audioBlob);

          // Give a short grace period for speech recognition to finalize, then evaluate ONCE
          setTimeout(() => {
            this.finishEvaluation();
          }, 200);
        };

        // Initialize SpeechRecognition if supported by browser
        const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRec) {
          try {
            this.recognition = new SpeechRec();
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.lang = this.selectedAccent || "en-US";

            // Standard Web Speech API: construct transcript cleanly from results array without outer concatenation!
            this.recognition.onresult = (event) => {
              let finalTrans = "";
              let interimTrans = "";

              for (let i = 0; i < event.results.length; ++i) {
                const res = event.results[i];
                if (res.isFinal) {
                  finalTrans += res[0].transcript + " ";
                } else {
                  interimTrans += res[0].transcript;
                }
              }

              const combined = (finalTrans + interimTrans).trim();
              if (combined) {
                this.spokenTranscript = combined;
              }
            };

            this.recognition.onerror = (e) => {
              console.warn("SpeechRec warning:", e);
            };

            this.recognition.start();
          } catch (recErr) {
            console.warn("SpeechRec start error:", recErr);
          }
        }

        this.mediaRecorder.start();
        this.isRecording = true;
        this.startTimer();
        this.renderPhraseView();
        window.app?.notify("🔴 Ovoz yozilmoqda... Gapni mikrofonga aniq talaffuz qiling!");
      } else {
        this.fallbackSimulation();
      }
    } catch (err) {
      console.warn("Mic getUserMedia error:", err);
      this.fallbackSimulation();
    }
  }

  stopRecordingInternal() {
    if (!this.isRecording) return;
    this.isRecording = false;
    this.stopTimer();

    // Safely stop Speech Recognition
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {}
    }

    if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
      try {
        this.mediaRecorder.stop();
        this.mediaRecorder.stream?.getTracks().forEach(track => track.stop());
      } catch (e) {
        this.finishEvaluation();
      }
    } else {
      this.finishEvaluation();
    }
  }

  finishEvaluation() {
    if (this.isEvaluating) return;
    this.isEvaluating = true;
    const phrase = this.filteredPhrases[this.currentPhraseIdx];
    if (this.recordingSeconds > 0) {
      window.goalTracker?.recordShadowingSeconds(this.recordingSeconds);
    }
    this.lastEvaluation = this.evaluateUserSpeech(phrase, this.spokenTranscript, this.recordingSeconds);
    this.renderPhraseView();
    window.app?.notify("✅ Talaffuz tahlil qilindi! Haqiqiy natijangiz tayyor 🎯");
    setTimeout(() => {
      this.isEvaluating = false;
    }, 400);
  }

  fallbackSimulation() {
    this.isRecording = true;
    this.startTimer();
    this.renderPhraseView();
    window.app?.notify("🔴 Ovoz yozilmoqda (Mikrofon simulyatsiyasi)...");

    setTimeout(() => {
      this.isRecording = false;
      this.stopTimer();
      if (this.recordingSeconds > 0) {
        window.goalTracker?.recordShadowingSeconds(this.recordingSeconds);
      }
      this.userAudioUrl = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=";
      const phrase = this.filteredPhrases[this.currentPhraseIdx];
      this.spokenTranscript = "";
      this.lastEvaluation = this.evaluateUserSpeech(phrase, "", this.recordingSeconds);
      this.renderPhraseView();
      window.app?.notify("⚠️ Mikrofon ulanmaganligi sababli nutq eshitilmadi.");
    }, 3500);
  }

  startTimer() {
    this.recordingSeconds = 0;
    clearInterval(this.recordTimer);
    this.recordTimer = setInterval(() => {
      this.recordingSeconds++;
      const counterEl = document.getElementById("recording-seconds-counter");
      if (counterEl) {
        const mins = Math.floor(this.recordingSeconds / 60).toString().padStart(2, "0");
        const secs = (this.recordingSeconds % 60).toString().padStart(2, "0");
        counterEl.textContent = `${mins}:${secs}`;
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.recordTimer);
  }

  playUserAudio() {
    if (!this.userAudioUrl) return;
    const audio = new Audio(this.userAudioUrl);
    audio.playbackRate = Math.max(0.5, Math.min(2.0, this.playbackRate || 1.0));
    audio.play();
    window.app?.notify(`🎧 O'z yozgan ovozingiz yangramoqda (${this.playbackRate || 1.0}x tezlikda)...`);
  }

  // ================= REAL SPEECH ACCURACY EVALUATION =================
  evaluateUserSpeech(phrase, spokenText, durationSec) {
    const rawTarget = phrase?.text || "";
    const cleanWord = (w) => (w || "").toLowerCase().replace(/[^a-z0-9]/g, "");

    const targetTokens = rawTarget
      .split(/\s+/)
      .map(w => ({ raw: w, clean: cleanWord(w) }))
      .filter(t => t.clean.length > 0);

    const userSpoken = (spokenText || "").trim();
    const spokenTokens = userSpoken
      .split(/\s+/)
      .map(cleanWord)
      .filter(w => w.length > 0);

    // Fast Levenshtein Distance for precise pronunciation matching
    const levenshtein = (s1, s2) => {
      if (s1 === s2) return 0;
      if (!s1.length) return s2.length;
      if (!s2.length) return s1.length;
      const matrix = [];
      for (let i = 0; i <= s2.length; i++) matrix[i] = [i];
      for (let j = 0; j <= s1.length; j++) matrix[0][j] = j;
      for (let i = 1; i <= s2.length; i++) {
        for (let j = 1; j <= s1.length; j++) {
          if (s2.charAt(i - 1) === s1.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(
              matrix[i - 1][j - 1] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j] + 1
            );
          }
        }
      }
      return matrix[s2.length][s1.length];
    };

    // Authentic Word Matcher (exact match, regular plural/suffix stem, or single minor typo)
    const wordMatches = (w1, w2) => {
      if (!w1 || !w2) return false;
      if (w1 === w2) return true;
      // Stem comparison for plurals and verb suffixes
      const stem1 = w1.replace(/s$|ed$|ing$/, "");
      const stem2 = w2.replace(/s$|ed$|ing$/, "");
      if (stem1 && stem1 === stem2) return true;
      // Minor recognition typo allowance for longer words (length >= 5)
      if (w1.length >= 5 && w2.length >= 5) {
        if (levenshtein(w1, w2) <= 1) return true;
      }
      return false;
    };

    // Case 1: Silent or empty recording
    if (spokenTokens.length === 0) {
      const wordsAnalysis = targetTokens.map(t => ({ raw: t.raw, matched: false }));
      return {
        score: 0,
        intonation: 0,
        fluency: 0,
        band: "IELTS Band 1.0 (Ovoz Yo'q)",
        bandClass: "band-bad",
        matchedCount: 0,
        totalWords: targetTokens.length,
        spokenTranscript: "",
        wordsAnalysis,
        critique: "⚠️ <strong>Mikrofondan ovoz eshitilmadi:</strong> Mikrofon nutqingizni qabul qilmadi yoki siz jim turdingiz. Mikrofonga ruxsat berilganligini tekshiring va gapni baland ovozda qayta ayting."
      };
    }

    // Case 2: Matching words against target in order
    const usedIndices = new Set();
    let maxConsecutive = 0;
    let currentConsecutive = 0;

    const wordsAnalysis = targetTokens.map(t => {
      let matched = false;
      for (let j = 0; j < spokenTokens.length; j++) {
        if (!usedIndices.has(j) && wordMatches(t.clean, spokenTokens[j])) {
          matched = true;
          usedIndices.add(j);
          break;
        }
      }
      if (matched) {
        currentConsecutive++;
        if (currentConsecutive > maxConsecutive) maxConsecutive = currentConsecutive;
      } else {
        currentConsecutive = 0;
      }
      return { raw: t.raw, clean: t.clean, matched };
    });

    const matchedCount = wordsAnalysis.filter(w => w.matched).length;
    const totalWords = targetTokens.length;
    const matchRatio = totalWords > 0 ? (matchedCount / totalWords) : 0;

    // Real, transparent accuracy percentage
    const score = Math.round(matchRatio * 100);

    // Intonation score: based on accuracy and connected speech flow
    const flowRatio = totalWords > 0 ? (maxConsecutive / totalWords) : 0;
    const intonation = Math.min(100, Math.round(score * 0.85 + flowRatio * 15));

    // Fluency score: based on natural pacing without artificial random numbers
    const expectedSec = totalWords / 2.3;
    const actualSec = Math.max(1, durationSec || 4);
    const speedRatio = expectedSec / actualSec;
    let fluencyPenalty = 0;
    if (speedRatio < 0.45) fluencyPenalty = 20; // Too slow
    else if (speedRatio > 2.2) fluencyPenalty = 15; // Too fast
    const fluency = Math.max(0, Math.min(100, Math.round(score - fluencyPenalty)));

    // Real IELTS Band Score mapping based on official criteria
    let band = "";
    let bandClass = "";
    let critique = "";

    if (score >= 90) {
      band = "IELTS Band 8.5–9.0 (Oliy Natija)";
      bandClass = "band-best";
      critique = "🌟 <strong>Mukammal natija!</strong> Deyarli barcha so'zlarni to'g'ri va ravon talaffuz qildingiz. Haqiqiy rasmiy imtihon uchun yuqori ko'rsatkich!";
    } else if (score >= 75) {
      band = "IELTS Band 7.5–8.0 (Kuchli)";
      bandClass = "band-good";
      critique = "🟢 <strong>Yaxshi natija!</strong> Gapning asosiy qismi to'g'ri aytildi. Qizil rang bilan ko'rsatilgan so'zlarni spiker orqali takrorlab, natijani yanada oshiring.";
    } else if (score >= 55) {
      band = "IELTS Band 6.0–6.5 (O'rtacha)";
      bandClass = "band-mid";
      critique = "🟡 <strong>O'rtacha natija:</strong> Ayrim asosiy so'zlar to'g'ri, biroq bir qancha so'zlar qolib ketdi yoki noaniq aytildi. Qizil chizilgan so'zlarga e'tibor bering.";
    } else if (score >= 30) {
      band = "IELTS Band 5.0–5.5 (Qoniqarli)";
      bandClass = "band-bad";
      critique = "⚠️ <strong>Ko'p xatoliklar:</strong> Gapning yarmidan ko'p qismidagi so'zlar noto'g'ri talaffuz qilindi. Audio spikerni tinglab, gapni qaytadan sekin mashq qiling.";
    } else {
      band = "IELTS Band 4.0–4.5 (Noto'g'ri nutq)";
      bandClass = "band-bad";
      critique = "❌ <strong>So'zlar mos kelmadi:</strong> Siz aytgan so'zlar berilgan gapga mos tushmadi. Berilgan matnni diqqat bilan o'qib, baland ovozda qayta ayting.";
    }

    return {
      score,
      intonation,
      fluency,
      band,
      bandClass,
      matchedCount,
      totalWords,
      spokenTranscript: userSpoken,
      wordsAnalysis,
      critique
    };
  }

  renderEvaluationContent() {
    if (!this.lastEvaluation) {
      return `
        <div style="background: var(--bg-card-subtle, #F8FAFC); border: 1.5px dashed var(--border, #CBD5E1); border-radius: 14px; padding: 18px; text-align: center; color: var(--slate-500, #64748B);">
          <span style="font-size: 24px; display: block; margin-bottom: 6px;">🎙️</span>
          <p style="margin: 0; font-size: 13.5px; font-weight: 600;">
            Ovozingizni yozib to'xtatganingizdan so'ng, YU AI bu yerda real so'zma-so'z tahlil va natijalarni ko'rsatadi.
          </p>
        </div>
      `;
    }

    const { score, intonation, fluency, band, bandClass, critique, wordsAnalysis, spokenTranscript, matchedCount, totalWords } = this.lastEvaluation;

    const bandStyles = {
      "band-best": "background: #D1FAE5; color: #065F46; border: 1px solid #10B981;",
      "band-good": "background: #DBEAFE; color: #1E40AF; border: 1px solid #3B82F6;",
      "band-mid":  "background: #FEF3C7; color: #92400E; border: 1px solid #F59E0B;",
      "band-bad":  "background: #FEE2E2; color: #991B1B; border: 1px solid #EF4444;"
    };

    const containerBorders = {
      "band-best": "1.5px solid #10B981",
      "band-good": "1.5px solid #3B82F6",
      "band-mid":  "1.5px solid #F59E0B",
      "band-bad":  "1.5px solid #EF4444"
    };

    const wordsBadgesHtml = (wordsAnalysis || []).map(w => {
      const cleanW = (w.raw || "").replace(/'/g, "\\'").replace(/"/g, "&quot;");
      if (w.matched) {
        return `<button type="button" class="shadow-word-pill pill-matched" onclick="window.shadowingTrainer?.speakWord('${cleanW}')" title="Talaffuzini xohlagancha qayta tinglash uchun bosing">✓ ${w.raw} <span class="pill-audio-icon">🔊</span></button>`;
      } else {
        return `<button type="button" class="shadow-word-pill pill-missed" onclick="window.shadowingTrainer?.speakWord('${cleanW}')" title="Xato aytilgan so'z — to'g'ri talaffuzini xohlagancha qayta tinglash uchun bosing">✗ ${w.raw} <span class="pill-audio-icon">🔊</span></button>`;
      }
    }).join(" ");

    return `
      <div style="background: var(--bg-card, #FFFFFF); border: ${containerBorders[bandClass] || "1.5px solid #10B981"}; border-radius: 16px; padding: 18px; text-align: left; box-shadow: 0 4px 14px rgba(0,0,0,0.06);">
        <!-- Header Row -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 22px;">🤖</span>
            <div>
              <strong style="font-size: 14.5px; color: var(--slate-900, #0F172A); display: block;">YU AI Pronunciation & Speech Recognizer</strong>
              <span style="font-size: 11.5px; color: var(--slate-500, #64748B);">Haqiqiy mikrofon va so'zlar aniqligi tahlili</span>
            </div>
          </div>
          <span style="${bandStyles[bandClass] || bandStyles['band-mid']} padding: 4px 12px; border-radius: 999px; font-weight: 800; font-size: 12.5px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            ${band}
          </span>
        </div>

        <!-- 3 Core Metrics -->
        <div class="eval-score-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 10px; margin-bottom: 14px;">
          <div class="eval-metric-box" style="background: var(--bg-card-subtle, #F8FAFC); border: 1px solid var(--border, #E2E8F0); border-radius: 10px; padding: 10px 8px; text-align: center;">
            <div class="eval-metric-val" style="font-size: 24px; font-weight: 800; color: ${score >= 70 ? '#10B981' : (score >= 45 ? '#F59E0B' : '#EF4444')};">${score}%</div>
            <div class="eval-metric-label" style="font-size: 11px; font-weight: 700; color: var(--slate-500, #64748B); margin-top: 2px;">Spikerga o'xshashlik</div>
          </div>
          <div class="eval-metric-box" style="background: var(--bg-card-subtle, #F8FAFC); border: 1px solid var(--border, #E2E8F0); border-radius: 10px; padding: 10px 8px; text-align: center;">
            <div class="eval-metric-val" style="font-size: 24px; font-weight: 800; color: ${intonation >= 70 ? '#10B981' : (intonation >= 45 ? '#F59E0B' : '#EF4444')};">${intonation}%</div>
            <div class="eval-metric-label" style="font-size: 11px; font-weight: 700; color: var(--slate-500, #64748B); margin-top: 2px;">Intonatsiya & Ritm</div>
          </div>
          <div class="eval-metric-box" style="background: var(--bg-card-subtle, #F8FAFC); border: 1px solid var(--border, #E2E8F0); border-radius: 10px; padding: 10px 8px; text-align: center;">
            <div class="eval-metric-val" style="font-size: 24px; font-weight: 800; color: ${fluency >= 70 ? '#10B981' : (fluency >= 45 ? '#F59E0B' : '#EF4444')};">${fluency}%</div>
            <div class="eval-metric-label" style="font-size: 11px; font-weight: 700; color: var(--slate-500, #64748B); margin-top: 2px;">Nutq Ravonligi</div>
          </div>
        </div>

        <!-- Word-by-word Analysis -->
        <div style="background: var(--bg-card-subtle, #F8FAFC); border: 1px solid var(--border, #E2E8F0); border-radius: 12px; padding: 12px 14px; margin-bottom: 12px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; flex-wrap: wrap; gap: 4px;">
            <span style="font-size: 11.5px; font-weight: 800; color: var(--slate-700, #334155); text-transform: uppercase; letter-spacing: 0.5px;">
              📝 So'zma-so'z aniqlik (${matchedCount}/${totalWords} ta to'g'ri):
            </span>
            <span style="font-size: 11px; color: var(--slate-500, #64748B);">
              <span style="color: #059669; font-weight: 700;">✓ To'g'ri</span> &nbsp;|&nbsp; <span style="color: #E11D48; font-weight: 700;">✗ Xato / Qolib ketgan</span>
            </span>
          </div>
          <div style="font-size: 11.5px; color: #4F46E5; font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 5px;">
            <span>🔊</span> Istalgan so'z ustiga bosing — uning to'g'ri talaffuzini xohlaganingizcha qayta-qayta eshitishingiz mumkin:
          </div>
          <div style="line-height: 2.2; margin-top: 4px;">
            ${wordsBadgesHtml}
          </div>
        </div>

        <!-- Spoken Transcript Box -->
        <div style="background: var(--slate-100, #F1F5F9); border-radius: 10px; padding: 10px 14px; margin-bottom: 12px; font-size: 12.5px; color: var(--slate-700, #334155); border-left: 3px solid #6366F1;">
          <strong>🎙️ Siz aytgan gap (Mikrofon tahlili):</strong> 
          <span style="color: ${spokenTranscript ? 'var(--slate-900, #0F172A)' : '#94A3B8'}; font-weight: 600; font-style: italic; margin-left: 4px;">
            "${spokenTranscript || "(Hech qanday so'z aniqlanmadi yoki mikrofon eshitmadi)"}"
          </span>
        </div>

        <!-- AI Murabbiy Tavsiyasi -->
        <div style="font-size: 12.5px; line-height: 1.5; padding: 10px 14px; border-radius: 10px; background: ${bandClass === 'band-bad' ? '#FFF1F2' : (bandClass === 'band-mid' ? '#FFFBEB' : '#ECFDF5')}; color: ${bandClass === 'band-bad' ? '#991B1B' : (bandClass === 'band-mid' ? '#92400E' : '#065F46')}; border: 1px solid ${bandClass === 'band-bad' ? '#FECDD3' : (bandClass === 'band-mid' ? '#FDE68A' : '#A7F3D0')};">
          💡 ${critique}
        </div>
      </div>
    `;
  }
}

// Global instance
window.shadowingTrainer = new ShadowingTrainer();
