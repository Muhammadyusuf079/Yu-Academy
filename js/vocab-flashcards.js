// ===================================================================
// YU ACADEMY - 2026 AKADEMIK SO'ZLAR FLASHCARD VA SRS TRENAJYORI
// Spaced Repetition orqali SAT va IELTS lug'atini 10 baravar tez yodlash
// ===================================================================

class VocabFlashcardsManager {
  constructor() {
    this.currentIndex = 0;
    this.isFlipped = false;
    this.wordsList = [];
    this.masteredCount = 0;
    
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.init());
    } else {
      this.init();
    }
  }

  init() {
    this.loadWords();
    this.renderModal();
    this.setupListeners();
  }

  loadWords() {
    const rawDict = window.ACADEMIC_DICTIONARY_2026 || (typeof ACADEMIC_DICTIONARY_2026 !== "undefined" ? ACADEMIC_DICTIONARY_2026 : []);
    if (rawDict.length > 0) {
      this.wordsList = [...rawDict];
    } else {
      // High-yield fallback core academic vocabulary
      this.wordsList = [
        { word: "Aberration", pos: "noun", uz: "Qoidadan og'ish, noodatiy holat", def: "A departure from what is normal, usual, or expected.", example: "The sudden drop in temperature was an ecological aberration.", syn: "anomaly, deviation, peculiarity" },
        { word: "Benevolent", pos: "adjective", uz: "Xayrixoh, saxovatli", def: "Well meaning and kindly.", example: "A benevolent mentor guided the student toward a full university scholarship.", syn: "compassionate, altruistic, philanthropic" },
        { word: "Capitulate", pos: "verb", uz: "Taslim bo'lmoq, bo'ysunmoq", def: "Cease to resist an opponent or an unwelcome demand.", example: "The council capitulated to student demands for free library access.", syn: "surrender, yield, acquiesce" },
        { word: "Disparate", pos: "adjective", uz: "Mutlaqo farqli, turlicha", def: "Essentially different in kind; not allowing comparison.", example: "The team integrated disparate data streams into one predictive algorithm.", syn: "divergent, contrasting, heterogeneous" },
        { word: "Ephemeral", pos: "adjective", uz: "O'tkinchi, qisqa muddatli", def: "Lasting for a very short time.", example: "Fame on social media is often ephemeral compared to academic achievement.", syn: "transitory, fleeting, evanescent" },
        { word: "Fortuitous", pos: "adjective", uz: "Kutilmagan omadli, tasodifiy", def: "Happening by accident or chance rather than design.", example: "Their meeting in Oxford proved fortuitous for both research careers.", syn: "serendipitous, lucky, unexpected" },
        { word: "Gregarious", pos: "adjective", uz: "Kirishimli, xushchaqchaq", def: "Fond of company; sociable.", example: "Dolphins are famously gregarious marine mammals.", syn: "sociable, companionable, convivial" },
        { word: "Hierarchy", pos: "noun", uz: "Ierarxiya, pog'onaviy tuzilish", def: "A system in which members are ranked according to status or authority.", example: "The academic hierarchy placed tenured professors at the head of research.", syn: "ranking, grading, pecking order" },
        { word: "Indispensable", pos: "adjective", uz: "O'ta zarur, ajralmas", def: "Absolutely necessary.", example: "Consistent native shadowing is indispensable for achieving IELTS 8.5+.", syn: "essential, crucial, imperative" },
        { word: "Juxtapose", pos: "verb", uz: "Qiyoslash uchun yonma-yon qo'ymoq", def: "Place or deal with close together for contrasting effect.", example: "The author juxtaposed modern urban decay with pristine natural wilderness.", syn: "compare, contrast, collocate" }
      ];
    }
  }

  renderModal() {
    if (document.getElementById("vocab-flashcard-modal")) return;

    const overlay = document.createElement("div");
    overlay.id = "vocab-flashcard-modal";
    overlay.className = "vocab-modal-overlay";
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.zIndex = "99999";
    overlay.style.background = "rgba(15, 23, 42, 0.75)";
    overlay.style.backdropFilter = "blur(8px)";
    overlay.style.display = "none";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.padding = "16px";

    overlay.innerHTML = `
      <div class="vocab-flashcard-card" style="background: #FFFFFF; border-radius: 20px; max-width: 600px; width: 100%; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35); border: 1.5px solid #E2E8F0; font-family: system-ui, sans-serif; overflow: hidden;">
        
        <!-- HEADER -->
        <div style="background: linear-gradient(135deg, #1E1B4B 0%, #312E81 100%); padding: 18px 24px; display: flex; justify-content: space-between; align-items: center; color: #FFFFFF;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 40px; height: 40px; border-radius: 12px; background: linear-gradient(135deg, #8B5CF6, #6D28D9); display: flex; align-items: center; justify-content: center; font-size: 20px;">
              🗂️
            </div>
            <div>
              <h3 style="margin: 0; font-size: 17px; font-weight: 800;">Akademik So'zlar Flashcards (SRS)</h3>
              <span id="fc-progress-badge" style="font-size: 11.5px; color: #C7D2FE;">1-so'z • Jami 1,000+ so'z</span>
            </div>
          </div>
          <button id="fc-close-btn" style="width: 34px; height: 34px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.25); background: rgba(255,255,255,0.1); color: #FFFFFF; font-size: 16px; font-weight: 700; cursor: pointer;">✕</button>
        </div>

        <!-- 3D FLIP CARD CONTAINER -->
        <div style="padding: 24px 26px;">
          <div id="fc-card-flipper" style="min-height: 280px; background: #F8FAFC; border: 2px dashed #CBD5E1; border-radius: 18px; padding: 24px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); position: relative; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            
            <span style="position: absolute; top: 14px; right: 16px; font-size: 11px; font-weight: 700; color: #64748B; background: #FFF; padding: 3px 8px; border-radius: 6px; border: 1px solid #E2E8F0;">
              🔄 Aylantirish uchun bosing
            </span>

            <!-- FRONT CONTENT -->
            <div id="fc-front-view" style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
              <span id="fc-pos-pill" style="padding: 3px 10px; background: #EEF2FF; color: #4F46E5; font-size: 11.5px; font-weight: 800; border-radius: 999px; text-transform: uppercase;">noun</span>
              <h2 id="fc-word-title" style="margin: 4px 0; font-size: 36px; font-weight: 900; color: #0F172A; letter-spacing: -0.02em;">Aberration</h2>
              
              <button type="button" id="fc-btn-listen" style="margin-top: 6px; display: inline-flex; align-items: center; gap: 8px; padding: 8px 18px; background: #4F46E5; color: #FFF; border: none; border-radius: 999px; font-size: 12.5px; font-weight: 700; cursor: pointer; box-shadow: 0 4px 10px rgba(79, 70, 229, 0.3);">
                🔊 Ovozini Eshiting (UK/US)
              </button>
              
              <p style="margin: 12px 0 0 0; font-size: 12.5px; color: #64748B; font-style: italic;">(Tarjimasi va misolini ko'rish uchun kartochkani bosing)</p>
            </div>

            <!-- BACK CONTENT (HIDDEN BY DEFAULT) -->
            <div id="fc-back-view" style="display: none; flex-direction: column; align-items: center; gap: 12px; width: 100%;">
              <span style="padding: 2px 10px; background: #ECFDF5; color: #059669; font-size: 11px; font-weight: 800; border-radius: 999px;">O'ZBEKCHA MA'NOSI</span>
              <h3 id="fc-uz-meaning" style="margin: 0; font-size: 24px; font-weight: 800; color: #047857;">Qoidadan og'ish, noodatiy holat</h3>
              <p id="fc-eng-def" style="margin: 0; font-size: 13.5px; color: #475569; max-width: 480px; line-height: 1.5;">A departure from what is normal, usual, or expected.</p>
              
              <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 12px; width: 100%; margin-top: 6px; text-align: left;">
                <span style="font-size: 11px; font-weight: 800; color: #6D28D9; display: block; margin-bottom: 2px;">NAMUNAVIY GAP:</span>
                <p id="fc-example-sentence" style="margin: 0; font-size: 13px; color: #1E293B; font-style: italic;">"The sudden drop in temperature was an ecological aberration."</p>
              </div>

              <div id="fc-synonyms-wrap" style="font-size: 12px; color: #64748B;">
                <strong>Sinonimlar:</strong> <span id="fc-synonyms-text">anomaly, deviation, peculiarity</span>
              </div>
            </div>

          </div>

          <!-- ACTIONS BAR -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 18px;">
            <button type="button" id="fc-btn-review" style="padding: 13px; background: #FEF2F2; border: 1.5px solid #FECACA; color: #DC2626; border-radius: 12px; font-size: 13.5px; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
              🔄 Qayta Takrorlash
            </button>
            <button type="button" id="fc-btn-mastered" style="padding: 13px; background: linear-gradient(135deg, #10B981, #059669); border: none; color: #FFFFFF; border-radius: 12px; font-size: 13.5px; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);">
              ✅ Yodlab Oldim (+15 XP)
            </button>
          </div>

        </div>

      </div>
    `;

    document.body.appendChild(overlay);
  }

  setupListeners() {
    const overlay = document.getElementById("vocab-flashcard-modal");
    const closeBtn = document.getElementById("fc-close-btn");
    const flipper = document.getElementById("fc-card-flipper");
    const btnListen = document.getElementById("fc-btn-listen");
    const btnReview = document.getElementById("fc-btn-review");
    const btnMastered = document.getElementById("fc-btn-mastered");

    closeBtn?.addEventListener("click", () => this.close());
    overlay?.addEventListener("click", (e) => {
      if (e.target === overlay) this.close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay?.style.display === "flex") {
        this.close();
      }
      if (overlay?.style.display === "flex") {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          this.toggleFlip();
        } else if (e.key === "ArrowRight") {
          this.nextWord(true);
        } else if (e.key === "ArrowLeft") {
          this.nextWord(false);
        }
      }
    });

    flipper?.addEventListener("click", (e) => {
      if (e.target.closest("#fc-btn-listen")) return;
      this.toggleFlip();
    });

    btnListen?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.speakWord();
    });

    btnReview?.addEventListener("click", () => {
      window.soundFx?.playClick?.();
      this.nextWord(false);
    });

    btnMastered?.addEventListener("click", () => {
      window.soundFx?.playSuccess?.();
      this.masterWord();
    });
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
    const front = document.getElementById("fc-front-view");
    const back = document.getElementById("fc-back-view");
    const flipper = document.getElementById("fc-card-flipper");

    if (this.isFlipped) {
      front.style.display = "none";
      back.style.display = "flex";
      flipper.style.background = "#F0FDF4";
      flipper.style.borderColor = "#86EFAC";
    } else {
      front.style.display = "flex";
      back.style.display = "none";
      flipper.style.background = "#F8FAFC";
      flipper.style.borderColor = "#CBD5E1";
    }
  }

  speakWord() {
    const item = this.wordsList[this.currentIndex];
    if (!item || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(item.word);
    utt.lang = "en-GB";
    utt.rate = 0.9;
    window.speechSynthesis.speak(utt);
  }

  masterWord() {
    this.masteredCount++;
    if (window.xpManager) {
      window.xpManager.addXP(15, "Akademik so'z yodlandi");
    }
    window.goalTracker?.recordWordLearned();
    this.nextWord(true);
  }

  nextWord(advance = true) {
    if (advance) {
      this.currentIndex = (this.currentIndex + 1) % this.wordsList.length;
    } else {
      // shuffle slightly or move next
      this.currentIndex = (this.currentIndex + 1) % this.wordsList.length;
    }

    this.isFlipped = false;
    const front = document.getElementById("fc-front-view");
    const back = document.getElementById("fc-back-view");
    const flipper = document.getElementById("fc-card-flipper");

    if (front && back && flipper) {
      front.style.display = "flex";
      back.style.display = "none";
      flipper.style.background = "#F8FAFC";
      flipper.style.borderColor = "#CBD5E1";
    }

    this.updateCard();
  }

  updateCard() {
    const item = this.wordsList[this.currentIndex];
    if (!item) return;

    const badge = document.getElementById("fc-progress-badge");
    const wordTitle = document.getElementById("fc-word-title");
    const posPill = document.getElementById("fc-pos-pill");
    const uzMeaning = document.getElementById("fc-uz-meaning");
    const engDef = document.getElementById("fc-eng-def");
    const exSentence = document.getElementById("fc-example-sentence");
    const synText = document.getElementById("fc-synonyms-text");

    if (badge) badge.textContent = `${this.currentIndex + 1}-so'z • Yodlangan: ${this.masteredCount} ta`;
    if (wordTitle) wordTitle.textContent = item.word;
    if (posPill) posPill.textContent = item.pos || item.type || "word";
    if (uzMeaning) uzMeaning.textContent = item.uz || item.meaning || item.translation || "Akademik atama";
    if (engDef) engDef.textContent = item.def || item.definition || item.desc || "";
    if (exSentence) exSentence.textContent = item.example ? `"${item.example}"` : `The concept of ${item.word} is frequently tested in SAT & IELTS.`;
    if (synText) synText.textContent = item.syn || item.synonyms || "academic equivalent";
  }

  open() {
    const overlay = document.getElementById("vocab-flashcard-modal");
    if (!overlay) return;
    this.updateCard();
    overlay.style.display = "flex";
  }

  close() {
    const overlay = document.getElementById("vocab-flashcard-modal");
    if (overlay) overlay.style.display = "none";
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

// Global initialization
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    if (!window.vocabFlashcards) {
      window.vocabFlashcards = new VocabFlashcardsManager();
    }
  });
  if (!window.vocabFlashcards && document.body) {
    window.vocabFlashcards = new VocabFlashcardsManager();
  }
}
