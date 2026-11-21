// YU Academy - 2026 SAT & IELTS Rasmiy Imtihon Trenajyori (Official Exam Engine)
// 1-to-1 Bluebook & CD-IELTS Replica: 44 SAT Math, 54 SAT RW, 40 IELTS Reading/Listening
// Grid-in (Student-Produced Responses), Official Scoring Curves, Desmos & Shadowing

class TestCenter {
  constructor() {
    this.currentExamType = "SAT"; // "SAT" or "IELTS"
    this.currentExamMode = "SAT_MATH"; // "SAT_MATH", "SAT_RW", "IELTS_READING", "IELTS_LISTENING", "SAT_GENERAL", "IELTS_GENERAL"
    this.currentQuestions = [];
    this.currentQuestionIdx = 0;
    this.userAnswers = {}; // { qIdx: optIdx OR "gridInString" }
    this.markedForReview = new Set();
    this.eliminatedOptions = {}; // { qIdx: Set([optIdx]) }
    this.timerInterval = null;
    this.remainingSeconds = 0;
    this.isTimerHidden = false;
    this.showNavigatorModal = false;
    this.reviewFilter = "all"; // "all", "wrong", "correct", "flagged"
    this.testHistory = [];

    this.loadHistory();
    this.setupGlobalShortcuts();
  }

  loadHistory() {
    try {
      const saved = localStorage.getItem("yu_test_history_2026");
      if (saved) this.testHistory = JSON.parse(saved);
    } catch (e) {
      this.testHistory = [];
    }
  }

  saveHistory(record) {
    this.testHistory.unshift(record);
    try {
      localStorage.setItem("yu_test_history_2026", JSON.stringify(this.testHistory.slice(0, 50)));
    } catch (e) {}
  }

  setupGlobalShortcuts() {
    window.addEventListener("keydown", (e) => {
      const modal = document.getElementById("test-modal");
      if (!modal || !modal.classList.contains("active") || this.currentQuestions.length === 0) return;

      if (e.key === "Escape") {
        e.preventDefault();
        this.exitExam();
        return;
      }

      // Avoid capturing input if user is in an input field
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      const q = this.currentQuestions[this.currentQuestionIdx];
      if (!q) return;

      const key = e.key.toUpperCase();
      let optIdx = -1;

      if (!q.isGridIn) {
        if (key === "A" || key === "1") optIdx = 0;
        else if (key === "B" || key === "2") optIdx = 1;
        else if (key === "C" || key === "3") optIdx = 2;
        else if (key === "D" || key === "4") optIdx = 3;

        if (optIdx !== -1 && q.options && optIdx < q.options.length) {
          e.preventDefault();
          this.userAnswers[this.currentQuestionIdx] = optIdx;
          this.renderQuestionView();
          return;
        }
      }

      if (e.key === "ArrowRight") {
        if (this.currentQuestionIdx < this.currentQuestions.length - 1) {
          e.preventDefault();
          this.currentQuestionIdx++;
          this.renderQuestionView();
        }
      } else if (e.key === "ArrowLeft") {
        if (this.currentQuestionIdx > 0) {
          e.preventDefault();
          this.currentQuestionIdx--;
          this.renderQuestionView();
        }
      }
    });
  }

  getSolvedQuestionsHistory() {
    try {
      const data = localStorage.getItem("yu_solved_questions_history_2026");
      return data ? new Set(JSON.parse(data)) : new Set();
    } catch (e) {
      return new Set();
    }
  }

  saveSolvedQuestionIds(ids) {
    if (!ids || ids.length === 0) return;
    try {
      const history = this.getSolvedQuestionsHistory();
      ids.forEach(id => {
        if (id) history.add(id);
      });
      localStorage.setItem("yu_solved_questions_history_2026", JSON.stringify([...history]));
      window.goalTracker?.recordQuestionsSolved(ids.length);
    } catch (e) {}
  }

  getNonRepeatingQuestions(sourcePool, examMode) {
    if (!sourcePool || sourcePool.length === 0) return [];

    // For official mock simulations (Digital SAT & IELTS CD), preserve the official College Board / Cambridge structure:
    // Module 1 (Q1-22 for Math, Q1-27 for RW) followed by Module 2, with grid-ins at the end of each module.
    // Random shuffling across modules would break the official difficulty progression and placement of grid-ins.
    const isOfficialMock = [
      "SAT_MATH", "SAT_RW", "SAT_FULL_MOCK", "SAT_MOCK_1", "SAT_MOCK_2", "SAT_MOCK_3",
      "IELTS_READING", "IELTS_LISTENING", "IELTS_FULL_MOCK", "IELTS_MOCK_1", "IELTS_MOCK_2", "IELTS_MOCK_3"
    ].includes(examMode);

    if (isOfficialMock) {
      return sourcePool.slice(0, 54).map(q => JSON.parse(JSON.stringify(q)));
    }

    const solved = this.getSolvedQuestionsHistory();

    // Fisher-Yates random shuffle
    const shuffle = (array) => {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    // Separate unseen vs already seen
    const unseen = sourcePool.filter(q => !solved.has(q.id));
    let chosen = [];

    if (unseen.length >= 8) {
      // Prioritize brand-new unseen questions
      chosen = shuffle(unseen);
    } else {
      // If student has solved almost all questions in this bank,
      // reset solved history for this pool and provide a freshly shuffled mixed variant!
      sourcePool.forEach(q => solved.delete(q.id));
      try {
        localStorage.setItem("yu_solved_questions_history_2026", JSON.stringify([...solved]));
      } catch (e) {}
      chosen = shuffle(sourcePool);
    }

    // Shuffle answer choices (A, B, C, D) so options never appear in predictable positions
    return chosen.map(q => {
      const clone = JSON.parse(JSON.stringify(q));
      if (!clone.isGridIn && clone.options && clone.options.length === 4) {
        const correctText = clone.options[clone.correctIndex];
        const shuffledOpts = shuffle(clone.options);
        clone.options = shuffledOpts;
        clone.correctIndex = shuffledOpts.indexOf(correctText);
      }
      return clone;
    });
  }

  exitExam() {
    const answeredCount = Object.keys(this.userAnswers).length;
    const msg = answeredCount > 0
      ? `Imtihonni to'xtatmoqchimisiz? Siz ${answeredCount} ta savolga javob berdingiz. Chiqsangiz, test to'xtatiladi.`
      : "Imtihondan chiqmoqchimisiz?";

    if (confirm(msg)) {
      this.clearTimer();
      // Record any answered questions so they don't repeat immediately
      const answeredIds = Object.keys(this.userAnswers)
        .map(idx => this.currentQuestions[parseInt(idx)]?.id)
        .filter(Boolean);
      this.saveSolvedQuestionIds(answeredIds);

      document.getElementById("test-modal")?.classList.remove("active");
      window.app?.notify("Imtihondan chiqildi. Asosiy sahifadasiz. 🏠");
    }
  }

  startOfficialExam(examType = "SAT", specificQuestionId = null, examMode = null) {
    this.currentExamType = examType.toUpperCase();
    this.currentExamMode = examMode || (this.currentExamType === "SAT" ? "SAT_MOCK_1" : "IELTS_MOCK_1");

    let sourcePool = [];

    if (specificQuestionId) {
      const fullPool = this.currentExamType === "SAT" ? EXAM_DATABASE_2026.sat : EXAM_DATABASE_2026.ielts;
      const found = fullPool.find(q => q.id === specificQuestionId);
      if (found) {
        const sameSec = fullPool.filter(q => q.id !== found.id && q.section === found.section);
        const otherSec = fullPool.filter(q => q.id !== found.id && q.section !== found.section);
        
        const shuffle = (array) => {
          const arr = [...array];
          for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
          return arr;
        };

        // Found question is Question 1, followed by related questions to form EXACTLY 54 questions!
        const testPool = [found, ...shuffle(sameSec), ...shuffle(otherSec)].slice(0, 54);
        sourcePool = testPool;
        this.remainingSeconds = 64 * 60; // 64 minutes for 54 questions
      } else {
        sourcePool = fullPool.slice(0, 54);
        this.remainingSeconds = 64 * 60;
      }
    } else {
      if (this.currentExamMode === "SAT_MOCK_1" || this.currentExamMode === "SAT_FULL_MOCK") {
        sourcePool = EXAM_DATABASE_2026.sat.slice(0, 54);
        this.remainingSeconds = 64 * 60; // 64 minutes for 54 questions
      } else if (this.currentExamMode === "SAT_MOCK_2") {
        sourcePool = EXAM_DATABASE_2026.sat.slice(54, 108);
        this.remainingSeconds = 64 * 60;
      } else if (this.currentExamMode === "SAT_MOCK_3") {
        sourcePool = EXAM_DATABASE_2026.sat.slice(108, 162);
        this.remainingSeconds = 64 * 60;
      } else if (this.currentExamMode === "SAT_MATH") {
        sourcePool = (EXAM_DATABASE_2026.sat_math_full && EXAM_DATABASE_2026.sat_math_full.length >= 54)
          ? EXAM_DATABASE_2026.sat_math_full.slice(0, 54)
          : EXAM_DATABASE_2026.sat.slice(0, 54);
        this.remainingSeconds = 70 * 60; // 70 minutes for 54 Math questions
      } else if (this.currentExamMode === "SAT_RW") {
        sourcePool = (EXAM_DATABASE_2026.sat_rw_full && EXAM_DATABASE_2026.sat_rw_full.length >= 54)
          ? EXAM_DATABASE_2026.sat_rw_full.slice(0, 54)
          : EXAM_DATABASE_2026.sat.slice(0, 54);
        this.remainingSeconds = 64 * 60; // 64 minutes for 54 RW questions
      } else if (this.currentExamMode === "IELTS_MOCK_1" || this.currentExamMode === "IELTS_FULL_MOCK") {
        sourcePool = EXAM_DATABASE_2026.ielts.slice(0, 54);
        this.remainingSeconds = 60 * 60; // 60 minutes for 54 questions
      } else if (this.currentExamMode === "IELTS_MOCK_2") {
        sourcePool = EXAM_DATABASE_2026.ielts.slice(54, 108);
        this.remainingSeconds = 60 * 60;
      } else if (this.currentExamMode === "IELTS_MOCK_3") {
        sourcePool = EXAM_DATABASE_2026.ielts.slice(108, 162);
        this.remainingSeconds = 60 * 60;
      } else if (this.currentExamMode === "IELTS_READING") {
        sourcePool = (EXAM_DATABASE_2026.ielts_reading_full && EXAM_DATABASE_2026.ielts_reading_full.length >= 54)
          ? EXAM_DATABASE_2026.ielts_reading_full.slice(0, 54)
          : EXAM_DATABASE_2026.ielts.slice(0, 54);
        this.remainingSeconds = 60 * 60;
      } else if (this.currentExamMode === "IELTS_LISTENING") {
        sourcePool = (EXAM_DATABASE_2026.ielts_listening_full && EXAM_DATABASE_2026.ielts_listening_full.length >= 54)
          ? EXAM_DATABASE_2026.ielts_listening_full.slice(0, 54)
          : EXAM_DATABASE_2026.ielts.slice(0, 54);
        this.remainingSeconds = 50 * 60;
      } else {
        const fullPool = this.currentExamType === "SAT" ? EXAM_DATABASE_2026.sat : EXAM_DATABASE_2026.ielts;
        sourcePool = fullPool.slice(0, 54);
        this.remainingSeconds = 60 * 60;
      }
    }

    // Har doim aniq 54 ta savoldan iborat bo'lishini kafolatlaymiz
    if (sourcePool.length < 54) {
      const backupPool = this.currentExamType === "SAT" ? EXAM_DATABASE_2026.sat : EXAM_DATABASE_2026.ielts;
      const needed = 54 - sourcePool.length;
      const additional = backupPool.filter(q => !sourcePool.some(s => s.id === q.id)).slice(0, needed);
      sourcePool = [...sourcePool, ...additional];
    }
    sourcePool = sourcePool.slice(0, 54);

    // Takrorlanmaydigan va aralash yangi test varianti (54 ta savol)
    this.currentQuestions = specificQuestionId ? sourcePool : this.getNonRepeatingQuestions(sourcePool, this.currentExamMode);
    if (this.currentQuestions.length > 54) {
      this.currentQuestions = this.currentQuestions.slice(0, 54);
    }
    this.currentQuestionIdx = 0;
    this.userAnswers = {};
    this.markedForReview = new Set();
    this.eliminatedOptions = {};
    this.isTimerHidden = false;
    this.showNavigatorModal = false;

    const modal = document.getElementById("test-modal");
    if (!modal) return;

    modal.classList.add("active");
    this.renderQuestionView();
    this.startTimer();

    if (!specificQuestionId) {
      window.app?.notify("🎯 Rasmiy 54 ta savoldan iborat yangi 2026 imtihon varianti yuklandi!");
    } else {
      window.app?.notify("🎯 To'liq 54 ta savoldan iborat test yuklandi! 1-savol: Siz tanlagan savol.");
    }
  }

  startTimer() {
    this.clearTimer();
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      this.remainingSeconds--;
      this.updateTimerDisplay();

      if (this.remainingSeconds <= 0) {
        this.clearTimer();
        alert("⏱️ Rasmiy imtihon vaqti yakunlandi! Natijalaringiz hisoblanmoqda...");
        this.submitExam();
      }
    }, 1000);
  }

  clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateTimerDisplay() {
    const timerEl = document.getElementById("test-timer");
    if (!timerEl) return;

    if (this.isTimerHidden) {
      timerEl.textContent = "⏱️ Yashiringan";
      return;
    }

    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    timerEl.textContent = `⏱️ ${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  renderQuestionView() {
    const container = document.getElementById("test-content");
    if (!container || this.currentQuestions.length === 0) return;

    const q = this.currentQuestions[this.currentQuestionIdx];
    const totalQ = this.currentQuestions.length;
    const selectedAnswer = this.userAnswers[this.currentQuestionIdx];
    const isMarked = this.markedForReview.has(this.currentQuestionIdx);
    const eliminated = this.eliminatedOptions[this.currentQuestionIdx] || new Set();

    let examTitle = "Digital SAT 2026 (54 Savol)";
    if (this.currentExamMode === "SAT_MOCK_1" || this.currentExamMode === "SAT_FULL_MOCK") examTitle = "🎯 Digital SAT Official Mock #1 (54 Savol • 1600 Ball)";
    else if (this.currentExamMode === "SAT_MOCK_2") examTitle = "🎯 Digital SAT Official Mock #2 (54 Savol • 1600 Ball)";
    else if (this.currentExamMode === "SAT_MOCK_3") examTitle = "🎯 Digital SAT Official Mock #3 (54 Savol • 1600 Ball)";
    else if (this.currentExamMode === "SAT_MATH") examTitle = "🧮 Digital SAT Math Intensive Mock (54 Savol)";
    else if (this.currentExamMode === "SAT_RW") examTitle = "📖 Digital SAT Reading & Writing Mock (54 Savol)";
    else if (this.currentExamMode === "IELTS_MOCK_1" || this.currentExamMode === "IELTS_FULL_MOCK") examTitle = "🇬🇧 CD-IELTS Academic Official Mock #1 (54 Savol • Band 0-9.0)";
    else if (this.currentExamMode === "IELTS_MOCK_2") examTitle = "🇬🇧 CD-IELTS Academic Official Mock #2 (54 Savol • Band 0-9.0)";
    else if (this.currentExamMode === "IELTS_MOCK_3") examTitle = "🇬🇧 CD-IELTS Academic Official Mock #3 (54 Savol • Band 0-9.0)";
    else if (this.currentExamMode === "IELTS_READING") examTitle = "📖 IELTS Academic Reading Mock (54 Savol)";
    else if (this.currentExamMode === "IELTS_LISTENING") examTitle = "🎧 IELTS Academic Listening Mock (54 Savol)";

    let mediaMarkup = "";
    if (q.svgDiagram) {
      mediaMarkup = `
        <div class="bb-media-container" style="margin: 16px 0; text-align: center; background: #FFFFFF; padding: 16px; border-radius: 12px; border: 1.5px solid var(--border); box-shadow: 0 2px 10px rgba(0,0,0,0.04);">
          ${q.svgDiagram}
          <span style="display: block; font-size: 11px; color: var(--slate-500); font-weight: 700; margin-top: 6px;">📐 College Board 2026 Rasmiy Geometrik Grafik / Diagramma</span>
        </div>
      `;
    } else if (q.fileData) {
      if (q.fileType && q.fileType.startsWith("image/") || q.fileData.startsWith("data:image/")) {
        mediaMarkup = `
          <div class="bb-media-container" style="margin: 14px 0; text-align: center;">
            <img src="${q.fileData}" alt="${q.fileName || 'Attached Graphic'}" style="max-width: 100%; max-height: 280px; border-radius: 8px; border: 1.5px solid var(--border); box-shadow: 0 4px 12px rgba(0,0,0,0.08); background: #FFF;">
            <span style="display: block; font-size: 11px; color: var(--slate-400); margin-top: 4px;">📎 ${q.fileName || 'Grafik / Diagramma ilovasi'}</span>
          </div>
        `;
      } else if (q.fileType && q.fileType.startsWith("audio/") || q.fileData.startsWith("data:audio/")) {
        mediaMarkup = `
          <div class="bb-media-container" style="margin: 14px 0; padding: 12px; background: rgba(79, 70, 229, 0.08); border-radius: 10px; border: 1.5px solid #C7D2FE;">
            <div style="font-weight: 700; font-size: 13px; color: #4F46E5; margin-bottom: 6px;">🎧 IELTS Listening Audio: ${q.fileName || 'Audio Track'}</div>
            <audio controls src="${q.fileData}" style="width: 100%;"></audio>
          </div>
        `;
      } else {
        mediaMarkup = `
          <div class="bb-media-container" style="margin: 14px 0; padding: 10px; background: var(--bg-card-subtle); border-radius: 8px; border: 1px solid var(--border);">
            <span style="font-size: 12px; font-weight: 600;">📄 Biriktirilgan fayl: ${q.fileName || 'Hujjat'}</span>
          </div>
        `;
      }
    }

    container.innerHTML = `
      <!-- BLUEBOOK / CD-IELTS OFFICIAL TOP TOOLBAR -->
      <div class="bluebook-toolbar">
        <div class="bb-left-tools">
          <span class="test-category-badge ${this.currentExamType.toLowerCase()}">
            ${examTitle}
          </span>
          <span class="bb-section-name">${q.section} ${q.module ? `(${q.module})` : ""}</span>
          <button class="bb-tool-btn ${isMarked ? "marked" : ""}" id="btn-mark-review" title="Keyinroq qaytish uchun belgilash">
            🚩 ${isMarked ? "Belgilangan (Flagged)" : "Mark for Review"}
          </button>
        </div>

        <div class="bb-center-tools" style="display: flex; align-items: center; gap: 6px;">
          <div class="test-timer-badge" id="test-timer">⏱️ 00:00</div>
          <button class="bb-tool-btn" id="btn-toggle-timer" title="Vaqtni ko'rsatish / yashirish" style="padding: 6px 8px;">
            ${this.isTimerHidden ? "👁️ Ko'rsatish" : "🙈 Yashirish"}
          </button>
        </div>

        <div class="bb-right-tools">
          ${this.currentExamType === "SAT" ? `
            <button class="bb-tool-btn" id="btn-open-desmos-test" title="Desmos Grafik Kalkulyatorini ochish">
              🧮 Desmos
            </button>
            <button class="bb-tool-btn" id="btn-open-formula-sheet" title="SAT Formulalar varaqasi">
              📐 Formulalar
            </button>
          ` : `
            <button class="bb-tool-btn" id="btn-open-shadowing-test" title="Shadowing Talaffuz Trenajyori">
              🎙️ Shadowing Studio
            </button>
          `}
          
          <button class="bb-tool-btn" id="btn-open-dictionary-test" title="Akademik Lug'at va Tarjima" onclick="window.academicDictionary?.open();" style="background: rgba(99, 102, 241, 0.12); color: #4F46E5; border-color: #818CF8; font-weight: 700;">📖 Lug'at</button>
          <button class="bb-finish-fast-btn" id="btn-toolbar-finish-exam" title="Testni yakunlash va natijani ko'rish">🏁 Testni Yakunlash</button>
          <button class="bb-exit-btn" id="btn-exit-exam" title="Imtihondan chiqish">🚪 Chiqish</button>
          <button class="modal-close-btn" id="btn-close-test-x" title="Chiqish">✕</button>
        </div>
      </div>

      <!-- PROGRESS BAR -->
      <div class="test-progress-bar-container">
        <div class="test-progress-fill" style="width: ${((this.currentQuestionIdx + 1) / totalQ) * 100}%"></div>
      </div>

      <!-- 2-COLUMN SPLIT TESTING INTERFACE -->
      <div class="bluebook-split-container">
        
        <!-- LEFT COLUMN: OFFICIAL 2026 STIMULUS / PASSAGE / CONTEXT -->
        <div class="bb-left-pane">
          <div class="pane-header-title">
            <span>${this.currentExamType === "SAT" ? "College Board 2026 Context & Stimulus" : "IELTS 2026 Official Passage & Audio Context"}</span>
            <span class="exam-session-pill">${q.examSession || "Official 2026 Exam"}</span>
          </div>
          <div class="bb-passage-box">
            ${q.stimulus.replace(/\n/g, "<br>")}
            ${mediaMarkup}
          </div>
        </div>

        <!-- RIGHT COLUMN: OFFICIAL QUESTION & CHOICES / GRID-IN -->
        <div class="bb-right-pane">
          <div class="bb-q-header">
            <span class="bb-q-num">Question ${this.currentQuestionIdx + 1} of ${totalQ}</span>
            <span style="font-size: 11px; color: var(--slate-400); font-family: var(--font-mono);">
              ${q.isGridIn ? "Student-Produced Response (Grid-In)" : "Press [A, B, C, D] on keyboard"}
            </span>
          </div>

          <div class="bb-question-prompt">
            ${q.question.replace(/\n/g, "<br>")}
          </div>

          ${q.isGridIn ? `
            <!-- STUDENT-PRODUCED RESPONSE (GRID-IN NUMERIC INPUT) -->
            <div class="grid-in-container" style="margin-top: 20px; background: #FFFFFF; border: 1.5px solid var(--border); border-radius: var(--radius-md); padding: 18px;">
              <label style="display: block; font-size: 13px; font-weight: 700; color: var(--slate-700); margin-bottom: 8px;">
                ✍️ Enter your answer (integer, decimal, or fraction):
              </label>
              <div style="display: flex; gap: 10px; align-items: center;">
                <input 
                  type="text" 
                  id="grid-in-input" 
                  value="${selectedAnswer !== undefined ? selectedAnswer : ""}" 
                  placeholder="e.g., 7/2, 3.5, 47, -2" 
                  style="flex: 1; padding: 12px 14px; font-size: 18px; font-family: var(--font-mono); font-weight: 700; border: 2px solid var(--brand-indigo); border-radius: var(--radius-md); outline: none; background: #FAFAFA; color: var(--slate-900);"
                  autocomplete="off"
                >
                <button class="btn btn-primary" id="btn-save-gridin" style="padding: 12px 18px;">Save Answer ✓</button>
              </div>
              <p style="font-size: 11px; color: var(--slate-500); margin-top: 10px; line-height: 1.4;">
                💡 <em>College Board Bluebook Rule:</em> Acceptable characters: digits (0-9), negative sign (-), fraction bar (/), and decimal point (.).
              </p>
            </div>
          ` : `
            <!-- STANDARD MULTIPLE CHOICE OPTIONS -->
            <div class="test-options-list">
              ${q.options.map((opt, idx) => {
                const isEliminated = eliminated.has(idx);
                const isChosen = selectedAnswer === idx;
                const letter = String.fromCharCode(65 + idx);

                return `
                  <div class="test-option-item ${isChosen ? "selected" : ""} ${isEliminated ? "eliminated" : ""}" data-opt-idx="${idx}">
                    <span class="option-letter">${letter}</span>
                    <span class="option-text">${opt}</span>
                    <button class="btn-cross-out" title="Bu variantni o'chirish" onclick="event.stopPropagation(); testCenter.toggleEliminate(${idx})">
                      ${isEliminated ? "Qaytarish" : "✕"}
                    </button>
                  </div>
                `;
              }).join("")}
            </div>
          `}
        </div>
      </div>

      <!-- BOTTOM NAVIGATION BAR -->
      <div class="test-footer-nav" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        <button class="btn btn-secondary" id="btn-prev-q" ${this.currentQuestionIdx === 0 ? "disabled" : ""}>
          ${(window.app?.currentLang === "ru") ? "⬅️ Предыдущий" : ((window.app?.currentLang === "en") ? "⬅️ Previous" : "⬅️ Oldingi savol")}
        </button>

        <!-- Question Navigator Dropdown / Popover Trigger -->
        <button class="btn btn-secondary" id="btn-open-nav-modal" style="display: flex; align-items: center; gap: 8px;">
          <span>📋 ${(window.app?.currentLang === "ru") ? `Вопрос ${this.currentQuestionIdx + 1} / ${totalQ}` : ((window.app?.currentLang === "en") ? `Question ${this.currentQuestionIdx + 1} / ${totalQ}` : `Savol ${this.currentQuestionIdx + 1} / ${totalQ}`)}</span>
          <span style="font-size: 10px; background: var(--slate-200); padding: 2px 6px; border-radius: 999px;">${(window.app?.currentLang === "ru") ? "Все" : ((window.app?.currentLang === "en") ? "All" : "Barchasi")}</span>
        </button>

        <div style="display: flex; align-items: center; gap: 10px;">
          <button class="btn btn-success" id="btn-finish-exam" style="background: linear-gradient(135deg, #10B981 0%, #059669 100%); color: #FFFFFF; font-weight: 800; border: none; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35); display: inline-flex; align-items: center; gap: 6px; padding: 10px 18px; border-radius: 10px;">
            🏁 ${(window.app?.currentLang === "ru") ? "Завершить тест" : ((window.app?.currentLang === "en") ? "Finish Test" : "Testni Yakunlash")}
          </button>

          ${this.currentQuestionIdx < totalQ - 1 ? `
            <button class="btn btn-primary" id="btn-next-q">
              ${(window.app?.currentLang === "ru") ? "Следующий ➡️" : ((window.app?.currentLang === "en") ? "Next ➡️" : "Keyingi savol ➡️")}
            </button>
          ` : ""}
        </div>
      </div>

      <!-- QUESTION NAVIGATOR POPUP OVERLAY (Matrix of 40/44/54 questions) -->
      ${this.showNavigatorModal ? `
        <div class="navigator-modal-backdrop" id="nav-matrix-modal">
          <div class="navigator-modal-box">
            <div class="nav-matrix-header">
              <h4>📋 Barcha ${totalQ} ta Imtihon Savollari</h4>
              <button class="modal-close-btn" id="btn-close-nav-matrix">✕</button>
            </div>
            <div class="nav-matrix-legend">
              <span class="legend-item"><span class="legend-box answered"></span> Javob berilgan</span>
              <span class="legend-item"><span class="legend-box current"></span> Hozirgi</span>
              <span class="legend-item"><span class="legend-box unans"></span> Javobsiz</span>
              <span class="legend-item">🚩 Belgilangan (Review)</span>
            </div>
            <div class="nav-matrix-grid">
              ${this.currentQuestions.map((item, i) => {
                const hasAns = this.userAnswers[i] !== undefined && this.userAnswers[i] !== "";
                const isCur = i === this.currentQuestionIdx;
                const isM = this.markedForReview.has(i);
                return `
                  <button class="nav-matrix-pill ${isCur ? "current" : ""} ${hasAns ? "answered" : "unans"}" data-jump-idx="${i}">
                    <span>${i + 1}</span>
                    ${isM ? `<span class="pill-flag-icon">🚩</span>` : ""}
                  </button>
                `;
              }).join("")}
            </div>

            <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; gap: 10px; flex-wrap: wrap;">
              <span style="font-size: 13px; color: var(--slate-600); font-weight: 600;">
                Javob berildi: <strong style="color: var(--brand-indigo);">${Object.keys(this.userAnswers).length} / ${totalQ}</strong>
              </span>
              <button class="btn btn-success" id="btn-nav-modal-finish-exam" style="background: linear-gradient(135deg, #10B981 0%, #059669 100%); color: #FFFFFF; font-weight: 800; border: none; padding: 9px 18px; border-radius: 10px; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.35);">
                🏁 Testni Yakunlash va Natijani Ko'rish
              </button>
            </div>
          </div>
        </div>
      ` : ""}
    `;

    this.updateTimerDisplay();

    // Toggle timer visibility
    document.getElementById("btn-toggle-timer")?.addEventListener("click", () => {
      this.isTimerHidden = !this.isTimerHidden;
      this.updateTimerDisplay();
      const btn = document.getElementById("btn-toggle-timer");
      if (btn) btn.textContent = this.isTimerHidden ? "👁️ Ko'rsatish" : "🙈 Yashirish";
    });

    // Option selection for multiple-choice
    container.querySelectorAll(".test-option-item").forEach(item => {
      item.addEventListener("click", () => {
        window.yuAudio?.playClick();
        const idx = parseInt(item.getAttribute("data-opt-idx"));
        this.userAnswers[this.currentQuestionIdx] = idx;
        this.renderQuestionView();
      });
    });

    // Grid-in numeric input handling
    const gridInput = document.getElementById("grid-in-input");
    const saveGridBtn = document.getElementById("btn-save-gridin");
    if (gridInput) {
      gridInput.focus();
      const commitGrid = () => {
        const val = gridInput.value.trim();
        if (val) {
          this.userAnswers[this.currentQuestionIdx] = val;
        } else {
          delete this.userAnswers[this.currentQuestionIdx];
        }
      };
      gridInput.addEventListener("input", commitGrid);
      saveGridBtn?.addEventListener("click", () => {
        commitGrid();
        if (this.currentQuestionIdx < totalQ - 1) {
          this.currentQuestionIdx++;
          this.renderQuestionView();
        }
      });
      gridInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          commitGrid();
          if (this.currentQuestionIdx < totalQ - 1) {
            this.currentQuestionIdx++;
            this.renderQuestionView();
          }
        }
      });
    }

    // Mark for review toggle
    document.getElementById("btn-mark-review")?.addEventListener("click", () => {
      if (this.markedForReview.has(this.currentQuestionIdx)) {
        this.markedForReview.delete(this.currentQuestionIdx);
      } else {
        this.markedForReview.add(this.currentQuestionIdx);
      }
      this.renderQuestionView();
    });

    // Desmos button in SAT toolbar
    document.getElementById("btn-open-desmos-test")?.addEventListener("click", () => {
      window.desmosManager?.toggle(true);
    });

    // Formula sheet button
    document.getElementById("btn-open-formula-sheet")?.addEventListener("click", () => {
      this.showFormulaSheet();
    });

    // Shadowing in IELTS toolbar
    document.getElementById("btn-open-shadowing-test")?.addEventListener("click", () => {
      window.shadowingTrainer?.openTrainer();
    });

    

    // Exit test modal (both button and X)
    document.getElementById("btn-exit-exam")?.addEventListener("click", () => {
      this.exitExam();
    });

    document.getElementById("btn-close-test-x")?.addEventListener("click", () => {
      this.exitExam();
    });

    // Open/Close question matrix navigator
    document.getElementById("btn-open-nav-modal")?.addEventListener("click", () => {
      this.showNavigatorModal = !this.showNavigatorModal;
      this.renderQuestionView();
    });

    document.getElementById("btn-close-nav-matrix")?.addEventListener("click", () => {
      this.showNavigatorModal = false;
      this.renderQuestionView();
    });

    container.querySelectorAll(".nav-matrix-pill").forEach(pill => {
      pill.addEventListener("click", (e) => {
        this.currentQuestionIdx = parseInt(e.currentTarget.getAttribute("data-jump-idx"));
        this.showNavigatorModal = false;
        this.renderQuestionView();
      });
    });

    // Navigation buttons
    document.getElementById("btn-prev-q")?.addEventListener("click", () => {
      if (this.currentQuestionIdx > 0) {
        this.currentQuestionIdx--;
        this.renderQuestionView();
      }
    });

    document.getElementById("btn-next-q")?.addEventListener("click", () => {
      if (this.currentQuestionIdx < totalQ - 1) {
        this.currentQuestionIdx++;
        this.renderQuestionView();
      }
    });

    const handleFinishExamPrompt = () => {
      const answered = Object.keys(this.userAnswers).length;
      const total = this.currentQuestions.length;
      if (this.currentQuestionIdx === total - 1 || answered === total) {
        this.submitExam();
      } else {
        const msg = (window.app?.currentLang === "ru")
          ? `Вы ответили на ${answered} из ${total} вопросов.\n\nЗавершить экзамен и посмотреть результаты с подробным разбором?`
          : ((window.app?.currentLang === "en")
            ? `You answered ${answered} out of ${total} questions.\n\nDo you want to finish the exam and see your official score report?`
            : `Siz ${total} ta savoldan ${answered} tasiga javob berdingiz.\n\nImtihonni yakunlab, natijalaringiz va savollar tahlilini ko'rishni xohlaysizmi?`);
        if (confirm(msg)) {
          this.submitExam();
        }
      }
    };

    document.getElementById("btn-toolbar-finish-exam")?.addEventListener("click", handleFinishExamPrompt);
    document.getElementById("btn-finish-exam")?.addEventListener("click", handleFinishExamPrompt);
    document.getElementById("btn-nav-modal-finish-exam")?.addEventListener("click", () => {
      this.showNavigatorModal = false;
      handleFinishExamPrompt();
    });
  }

  toggleEliminate(optIdx) {
    if (!this.eliminatedOptions[this.currentQuestionIdx]) {
      this.eliminatedOptions[this.currentQuestionIdx] = new Set();
    }
    const set = this.eliminatedOptions[this.currentQuestionIdx];
    if (set.has(optIdx)) {
      set.delete(optIdx);
    } else {
      set.add(optIdx);
    }
    this.renderQuestionView();
  }

    showFormulaSheet() {
    if (window.formulaSheet) {
      window.formulaSheet.open();
    } else {
      alert(`📐 College Board SAT Reference Sheet:\n\n• Doira yuzi: A = πr²\n• Pifagor: a² + b² = c²\n• Maxsus uchburchaklar: 30-60-90, 45-45-90`);
    }
  }

  // Answer matching with numeric fraction support
  isAnswerCorrect(question, userAnswer) {
    if (userAnswer === undefined || userAnswer === null || userAnswer === "") return false;

    if (question.isGridIn) {
      const u = String(userAnswer).trim().toLowerCase();
      const c = String(question.correctAnswer).trim().toLowerCase();
      if (u === c) return true;

      const evalFrac = (val) => {
        if (val.includes("/")) {
          const parts = val.split("/");
          if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1]) && Number(parts[1]) !== 0) {
            return Number(parts[0]) / Number(parts[1]);
          }
        }
        return isNaN(val) ? null : Number(val);
      };

      const numU = evalFrac(u);
      const numC = evalFrac(c);
      if (numU !== null && numC !== null && Math.abs(numU - numC) < 0.0001) {
        return true;
      }
      return false;
    } else {
      return userAnswer === question.correctIndex;
    }
  }

  submitExam() {
    this.clearTimer();

    let correctCount = 0;
    const totalCount = this.currentQuestions.length;

    this.currentQuestions.forEach((q, idx) => {
      if (this.isAnswerCorrect(q, this.userAnswers[idx])) {
        correctCount++;
      }
    });

    const percent = Math.round((correctCount / totalCount) * 100);

    let scoreDisplay = "";
    let scoreLabel = "";
    let subscoreDetail = "";

    if (this.currentExamType === "SAT") {
      if (this.currentExamMode === "SAT_FULL_MOCK") {
        let rwCorrect = 0;
        let rwTotal = 0;
        let mathCorrect = 0;
        let mathTotal = 0;

        this.currentQuestions.forEach((q, idx) => {
          const isCorrect = this.isAnswerCorrect(q, this.userAnswers[idx]);
          const isRw = (q.section && (q.section.toLowerCase().includes("reading") || q.section.toLowerCase().includes("writing"))) || (q.id && q.id.startsWith("sat-rw")) || idx < 54;
          if (isRw) {
            rwTotal++;
            if (isCorrect) rwCorrect++;
          } else {
            mathTotal++;
            if (isCorrect) mathCorrect++;
          }
        });

        const scaledRW = Math.round(200 + (rwCorrect / Math.max(1, rwTotal)) * 600);
        let scaledMath = 200;
        if (mathCorrect === mathTotal) scaledMath = 800;
        else if (mathCorrect >= 42) scaledMath = 780 + (mathCorrect - 42) * 10;
        else if (mathCorrect >= 38) scaledMath = 720 + (mathCorrect - 38) * 15;
        else if (mathCorrect >= 32) scaledMath = 640 + (mathCorrect - 32) * 13;
        else if (mathCorrect >= 24) scaledMath = 540 + (mathCorrect - 24) * 12;
        else scaledMath = Math.max(200, 200 + Math.round((mathCorrect / Math.max(1, mathTotal)) * 600));

        const composite = scaledRW + scaledMath;
        scoreDisplay = `${composite} / 1600`;
        scoreLabel = composite >= 1500 ? "🏆 Ivy League & Top 1% (1500+ SAT)!" : composite >= 1400 ? "🌟 AQSH Nufuzli Universitetlari Grantiga Munosib!" : "📈 Yaxshi Natija — O'rganishni davom ettiring";
        subscoreDetail = `RW Bo'limi: ${rwCorrect}/${rwTotal} (${scaledRW} ball) | Math Bo'limi: ${mathCorrect}/${mathTotal} (${scaledMath} ball) • Umumiy Mock Natijasi: ${composite} / 1600`;
      } else if (this.currentExamMode === "SAT_MATH") {
        // Official College Board Math Curve (200 - 800)
        let scaledMath = 200;
        if (correctCount === 44) scaledMath = 800;
        else if (correctCount >= 42) scaledMath = 780 + (correctCount - 42) * 10;
        else if (correctCount >= 38) scaledMath = 720 + (correctCount - 38) * 15;
        else if (correctCount >= 32) scaledMath = 640 + (correctCount - 32) * 13;
        else if (correctCount >= 24) scaledMath = 540 + (correctCount - 24) * 12;
        else scaledMath = Math.max(200, 200 + Math.round((correctCount / 24) * 340));

        scoreDisplay = `${scaledMath} / 800`;
        scoreLabel = scaledMath >= 750 ? "Ivy League & MIT Level (Top 1% Math)" : scaledMath >= 650 ? "AQSH TOP-50 Universitetlari Darajasi" : "Qo'shimcha tayyorgarlik talab etiladi";
        subscoreDetail = `SAT Math Bo'limi: 44 savoldan ${correctCount} ta to'g'ri. Taxminiy umumiy SAT: ${scaledMath + 740} / 1600`;
      } else if (this.currentExamMode === "SAT_RW") {
        let scaledRW = 200 + Math.round((correctCount / totalCount) * 600);
        scoreDisplay = `${scaledRW} / 800`;
        scoreLabel = scaledRW >= 720 ? "C2 Proficiency Level (Top 2%)" : "Yaxshi natija";
        subscoreDetail = `SAT Reading & Writing: ${totalCount} savoldan ${correctCount} ta to'g'ri.`;
      } else {
        const scaledScore = 800 + Math.round((percent / 100) * 800);
        scoreDisplay = `${scaledScore} / 1600`;
        scoreLabel = scaledScore >= 1480 ? "Top 1% Natija!" : "AQSH Grantlariga Yaroqli";
      }
    } else {
      if (this.currentExamMode === "IELTS_FULL_MOCK") {
        let lisCorrect = 0;
        let lisTotal = 0;
        let readCorrect = 0;
        let readTotal = 0;

        this.currentQuestions.forEach((q, idx) => {
          const isCorrect = this.isAnswerCorrect(q, this.userAnswers[idx]);
          const isLis = (q.section && q.section.toLowerCase().includes("listening")) || (q.id && q.id.startsWith("ielts-l")) || idx < 40;
          if (isLis) {
            lisTotal++;
            if (isCorrect) lisCorrect++;
          } else {
            readTotal++;
            if (isCorrect) readCorrect++;
          }
        });

        const calcBand = (c) => {
          if (c >= 39) return 9.0;
          if (c >= 37) return 8.5;
          if (c >= 35) return 8.0;
          if (c >= 33) return 7.5;
          if (c >= 30) return 7.0;
          if (c >= 27) return 6.5;
          if (c >= 23) return 6.0;
          if (c >= 19) return 5.5;
          if (c >= 15) return 5.0;
          if (c >= 10) return 4.5;
          return 4.0;
        };

        const bandL = calcBand(lisCorrect);
        const bandR = calcBand(readCorrect);
        const overall = Math.round(((bandL + bandR) / 2) * 2) / 2;

        scoreDisplay = `Overall Band ${overall.toFixed(1)}`;
        scoreLabel = overall >= 8.0 ? "🏆 Expert User — Oxford, Cambridge & Top Grantlar!" : overall >= 7.0 ? "🌟 Good User — Xalqaro Grantlar Talabiga Mos!" : "📈 Competent User (B2+)";
        subscoreDetail = `Listening: Band ${bandL.toFixed(1)} (${lisCorrect}/${lisTotal}) | Reading: Band ${bandR.toFixed(1)} (${readCorrect}/${readTotal}) • Jami: Overall Band ${overall.toFixed(1)}`;
      } else {
        // Official Cambridge IELTS Raw-to-Band Conversion for /40
        let band = 4.0;
        if (correctCount >= 39) band = 9.0;
        else if (correctCount >= 37) band = 8.5;
        else if (correctCount >= 35) band = 8.0;
        else if (correctCount >= 33) band = 7.5;
        else if (correctCount >= 30) band = 7.0;
        else if (correctCount >= 27) band = 6.5;
        else if (correctCount >= 23) band = 6.0;
        else if (correctCount >= 19) band = 5.5;
        else if (correctCount >= 15) band = 5.0;
        else if (correctCount >= 10) band = 4.5;
        else band = 4.0;

        scoreDisplay = `Band ${band.toFixed(1)}`;
        scoreLabel = band >= 8.0 ? "Expert User (Oxford & Cambridge Talabi)" : band >= 7.0 ? "Good User (Xalqaro Grantlar Talabi)" : "Competent User (B2)";
        subscoreDetail = `IELTS Academic: 40 savoldan ${correctCount} ta to'g'ri javob (${percent}%)`;
      }
    }

    this.saveHistory({
      id: "ex-" + Date.now(),
      examType: this.currentExamType,
      examMode: this.currentExamMode,
      date: new Date().toLocaleDateString("uz-UZ") + " " + new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" }),
      scoreDisplay,
      scoreLabel,
      subscoreDetail,
      correctCount,
      totalCount,
      percent,
      questions: this.currentQuestions,
      userAnswers: this.userAnswers
    });

    // Real-time dynamic platform test counter increment (+1)
    window.statsManager?.incrementTests(1, `${this.currentExamType} ${this.currentExamMode || "Imtihon"}`);

    // Mark questions as solved in history so subsequent tests give fresh questions
    this.saveSolvedQuestionIds(this.currentQuestions.map(q => q.id));

    this.renderResultView(correctCount, totalCount, percent, scoreDisplay, scoreLabel, subscoreDetail);
  }

  calculateSkillMatrix() {
    const skillsMap = {};
    this.currentQuestions.forEach((q, idx) => {
      let sec = q.section || (this.currentExamType === "SAT" ? "Quantitative Reasoning" : "IELTS Reading Core");
      if (!skillsMap[sec]) {
        skillsMap[sec] = { total: 0, correct: 0 };
      }
      skillsMap[sec].total++;
      if (this.isAnswerCorrect(q, this.userAnswers[idx])) {
        skillsMap[sec].correct++;
      }
    });

    return Object.entries(skillsMap).map(([name, data]) => {
      const pct = Math.round((data.correct / Math.max(1, data.total)) * 100);
      let color = "#10B981"; // emerald
      if (pct < 60) color = "#EF4444"; // red
      else if (pct < 80) color = "#F59E0B"; // amber
      return {
        name,
        total: data.total,
        correct: data.correct,
        pct,
        color
      };
    });
  }

  retakeWrongOnly() {
    const wrongQuestions = this.currentQuestions.filter((q, idx) => !this.isAnswerCorrect(q, this.userAnswers[idx]));
    if (wrongQuestions.length === 0) {
      window.app?.notify("🎉 Tabriklaymiz! Sizda birorta ham xato yo'q, 100% to'g'ri natija!");
      return;
    }

    this.currentQuestions = wrongQuestions;
    this.currentQuestionIdx = 0;
    this.userAnswers = {};
    this.markedForReview.clear();
    this.eliminatedOptions = {};
    this.remainingSeconds = this.currentQuestions.length * 95; // 95 sec per question
    this.startTimer();
    this.renderQuestionView();
    window.app?.notify(`🎯 Xatolar ustida ishlash boshlandi! (${wrongQuestions.length} ta savol)`);
  }

  

  openCertificateModal(scoreDisplay, scoreLabel, percent) {
    let modal = document.getElementById("certificate-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "certificate-modal";
      modal.className = "certificate-modal-overlay";
      document.body.appendChild(modal);
    }

    const savedName = localStorage.getItem("yu_user_name") || localStorage.getItem("yu_auth_user") || "Iqtidorli Abituriyent";
    const certCode = "YU-2026-CERT-" + Math.floor(100000 + Math.random() * 900000);
    const dateFormatted = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    const examTitle = this.currentExamType === "SAT"
      ? `Digital SAT 2026 Official Practice Examination (${this.currentExamMode})`
      : `IELTS Academic 2026 Official Standardized Test (${this.currentExamMode})`;

    modal.innerHTML = `
      <div class="certificate-dialog">
        <div class="certificate-paper">
          <div class="cert-watermark"></div>
          <div class="cert-corner-decor cert-tl"></div>
          <div class="cert-corner-decor cert-tr"></div>
          <div class="cert-corner-decor cert-bl"></div>
          <div class="cert-corner-decor cert-br"></div>

          <img src="icons/favicon.svg?v=2026.12" alt="YU Academy" class="cert-emblem-badge">
          <div class="cert-inst-title">YU Academy of Global Education</div>
          <div class="cert-sub-inst">Official Standardized Testing & Assessment Board • 2026</div>

          <div class="cert-main-award">Certificate of Academic Achievement</div>
          <div class="cert-presentation-text">This official credential certifies that:</div>

          <div class="cert-student-name-box" contenteditable="true" id="cert-student-name" title="Ismingizni tahrirlash uchun bosing">${savedName}</div>
          <p style="font-size: 11px; color: #94A3B8; margin-top: -10px; margin-bottom: 14px;">(Ism va familiyangizni to'g'irlash uchun ustiga bosing)</p>

          <div class="cert-reason-text">
            has successfully completed the full-length rigorous <strong>${examTitle}</strong> under strict College Board & Cambridge standardized testing conditions, exhibiting outstanding critical mastery, computational precision, and analytical acumen.
          </div>

          <div class="cert-score-display-box">
            <div>
              <span style="font-size: 11px; color: #78350F; font-weight: 700; text-transform: uppercase; display: block;">Official Score:</span>
              <span class="cert-score-number">${scoreDisplay}</span>
            </div>
            <div style="border-left: 2px solid #FCD34D; padding-left: 16px; text-align: left;">
              <span style="font-size: 11px; color: #78350F; font-weight: 700; text-transform: uppercase; display: block;">Percentile Status:</span>
              <span class="cert-score-rank">${scoreLabel} (${percent}%)</span>
            </div>
          </div>

          <div class="cert-bottom-grid">
            <div class="cert-sign-col">
              <div style="height: 66px; display: flex; align-items: flex-end; justify-content: center; margin-bottom: 2px;">
                <img src="assets/images/signatures/signature_academic_director.png" alt="Signature" class="cert-signature-img" style="max-height: 68px; max-width: 140px; object-fit: contain; transform: rotate(-2deg); filter: drop-shadow(0 1px 1px rgba(0,0,0,0.15));">
              </div>
              <div class="cert-sign-line">
                <div class="cert-sign-title">Head of Academic Board</div>
              </div>
            </div>

            <div class="cert-qr-box">
              <div style="width: 60px; height: 60px; background: #FFFFFF; border: 1px solid #CBD5E1; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 24px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
                🛡️
              </div>
              <span class="cert-verification-id">${certCode}</span>
              <span style="font-size: 9px; color: #059669; font-weight: 700;">● VERIFIED 2026</span>
            </div>

            <div class="cert-sign-col">
              <div style="height: 66px; display: flex; align-items: flex-end; justify-content: center; margin-bottom: 2px;">
                <img src="assets/images/signatures/signature_lead_examiner.png" alt="Signature" class="cert-signature-img" style="max-height: 68px; max-width: 140px; object-fit: contain; transform: rotate(1deg); filter: drop-shadow(0 1px 1px rgba(0,0,0,0.15));">
              </div>
              <div class="cert-sign-line">
                <div class="cert-sign-title">Chief Assessment Officer</div>
              </div>
            </div>
          </div>

          <div style="margin-top: 18px; font-size: 11px; color: #64748B; font-family: system-ui, sans-serif;">
            Issue Date: <strong>${dateFormatted}</strong> • Verification Registry: <a href="javascript:void(0)" onclick="window.certVerifier?.open('${certCode}')" style="color: #0284C7; font-weight: 700; text-decoration: underline;">yuacademy.uz/verify/${certCode}</a>
          </div>
        </div>

        <div class="cert-actions-bar">
          <button class="btn btn-primary" id="btn-print-cert" style="padding: 10px 22px; font-weight: 800; background: linear-gradient(135deg, #F59E0B, #D97706); border: none;">
            🖨️ Chop Etish / PDF Saqlash
          </button>
          <button class="btn btn-secondary" id="btn-verify-cert-direct" style="padding: 10px 18px; font-weight: 700; background: #ECFDF5; color: #047857; border: 1.5px solid #A7F3D0;">
            🛡️ Reestrda Tekshirish
          </button>
          <button class="btn btn-secondary" id="btn-close-cert" style="padding: 10px 20px; font-weight: 700;">
            ✕ Yopish
          </button>
        </div>
      </div>
    `;

    modal.classList.add("active");

    const nameEl = document.getElementById("cert-student-name");
    nameEl?.addEventListener("input", () => {
      const val = nameEl.textContent.trim();
      if (val) {
        localStorage.setItem("yu_user_name", val);
      }
    });

    document.getElementById("btn-verify-cert-direct")?.addEventListener("click", () => {
      window.certVerifier?.open(certCode);
    });

    document.getElementById("btn-print-cert")?.addEventListener("click", () => {
      window.print();
    });

    document.getElementById("btn-close-cert")?.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  explainWithAI(qId) {
    const q = this.currentQuestions.find(item => item.id === qId);
    if (!q) return;
    if (window.aiAssistant) {
      window.aiAssistant.openChat();
      window.aiAssistant.explainQuestionDirectly(q);
    } else {
      window.app?.notify("AI Murabbiy hozir faollashtirilmoqda...");
    }
  }

  formatStepByStepExplanation(q, isCorrect, userChosenText, correctText) {
    const rawExpl = (q.explanation || "").trim();
    const lines = rawExpl.split("\n").map(l => l.trim()).filter(Boolean);
    
    let step1 = "";
    let step2 = "";
    let step3 = "";
    let step4 = "";

    const stepMap = {};
    lines.forEach(l => {
      const match = l.match(/^([1-4])-Qadam:\s*(.*)$/i);
      if (match) {
        stepMap[parseInt(match[1])] = match[2];
      }
    });

    if (stepMap[1]) step1 = stepMap[1];
    if (stepMap[2]) step2 = stepMap[2];
    if (stepMap[3]) step3 = stepMap[3];
    if (stepMap[4]) step4 = stepMap[4];

    if (!step1) {
      if (q.stimulus && q.stimulus.length > 10) {
        const shortStim = q.stimulus.replace(/\n+/g, " ").substring(0, 190);
        step1 = `<strong>Savol konteksti va sharti:</strong> "${shortStim}${q.stimulus.length > 190 ? "..." : ""}". Savol talabi: <em>${q.question}</em>`;
      } else {
        step1 = `<strong>Savol talabi:</strong> ${q.question}. Asosiy berilgan parametrlar va maqsadni aniqlash zarur.`;
      }
    }

    if (!step2) {
      const sec = (q.section || "").toLowerCase();
      if (sec.includes("math") || sec.includes("algebra") || sec.includes("geometry") || q.hasDesmos) {
        step2 = `<strong>Matematik tahlil & formula:</strong> Rasmiy College Board standart formulasini qo'llash, o'zgaruvchilarni ajratish yoki Desmos grafik kalkulyatorida tenglamalar tizimini modellashtirish.`;
      } else if (sec.includes("reading") || sec.includes("craft") || sec.includes("information")) {
        step2 = `<strong>Matn tahlili strategiyasi:</strong> Matndagi kalit so'zlar (contextual keywords), muallif pozitsiyasi va mantiqiy bog'lovchilarni qidirish.`;
      } else if (sec.includes("listening")) {
        step2 = `<strong>Listening strategiyasi:</strong> Audio trekdagi asosiy raqamlar, chalg'ituvchi variantlar (distractors) va to'g'ridan-to'g'ri parafrazalarga diqqat qaratish.`;
      } else {
        step2 = `<strong>Grammatik qoida & mantiq:</strong> Standard English Conventions qoidalari, so'z turkumlari muvofiqligi va kontekst talabi.`;
      }
    }

    if (!step3) {
      step3 = rawExpl ? rawExpl.replace(/\n+/g, "<br>") : "Rasmiy akademik yechim bosqichlari to'liq tahlil qilindi.";
    }

    if (!step4) {
      if (isCorrect) {
        step4 = `<strong>Yakuniy to'g'ri xulosa:</strong> Siz to'g'ri variantni tanladingiz: <span style="color: #059669; font-weight: 800;">${correctText}</span>. Berilgan shart va qoidalarga to'liq mos keladi.`;
      } else {
        step4 = `<strong>Xato tahlili:</strong> Siz tanlagan javob (<span style="color: #DC2626; font-weight: 800;">${userChosenText}</span>) savol shartiga yoki qoidaga zid bo'lgani sababli noto'g'ri. To'g'ri javob: <span style="color: #059669; font-weight: 800;">${correctText}</span>.`;
      }
    }

    return `
      <div class="step-explanation-wrapper">
        <div class="step-card-box">
          <div class="step-card-header step-header-1">
            <span class="step-num-badge">1-Qadam</span>
            <span class="step-title">Savol Mazmuni & Berilgan Shart</span>
          </div>
          <div class="step-card-body">${step1}</div>
        </div>

        <div class="step-card-box">
          <div class="step-card-header step-header-2">
            <span class="step-num-badge">2-Qadam</span>
            <span class="step-title">Qoida, Formula & Yechish Strategiyasi</span>
          </div>
          <div class="step-card-body">${step2}</div>
        </div>

        <div class="step-card-box">
          <div class="step-card-header step-header-3">
            <span class="step-num-badge">3-Qadam</span>
            <span class="step-title">Bosqichma-bosqich Yechim & Mantiqiy Tahlil</span>
          </div>
          <div class="step-card-body">${step3}</div>
        </div>

        <div class="step-card-box ${isCorrect ? 'step-box-success' : 'step-box-wrong'}">
          <div class="step-card-header ${isCorrect ? 'step-header-success' : 'step-header-wrong'}">
            <span class="step-num-badge">4-Qadam</span>
            <span class="step-title">${isCorrect ? '✅ To\'g\'ri Javob Xulosasi' : '❌ Xato Tahlili & To\'g\'ri Javob'}</span>
          </div>
          <div class="step-card-body">${step4}</div>
        </div>
      </div>
    `;
  }

  renderResultView(correct, total, percent, scoreDisplay, scoreLabel, subscoreDetail) {
    const container = document.getElementById("test-content");
    if (!container) return;

    // 1. Instantly reset scroll to top so user sees the grand celebration hero banner & trophy!
    const testModal = document.getElementById("test-modal");
    const modalCard = container.closest(".modal-card") || container.parentElement;
    if (modalCard) {
      modalCard.scrollTop = 0;
      modalCard.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (testModal) {
      testModal.scrollTop = 0;
    }

    // 2. Trigger grand audio fanfare and multi-cannon celebratory confetti
    window.yuAudio?.triggerGrandCelebration();
    window.soundFx?.triggerGrandCelebration?.();

    this.reviewFilter = "all";
    const skillMatrix = this.calculateSkillMatrix();
    const wrongCount = total - correct;

    // Global Percentile Badge
    let percentileStatus = "⭐ Dunyo bo'yicha TOP 1% • 99th Percentile";
    if (percent < 70) percentileStatus = "📈 Yaxshi Natija • Har kungi mashq bilan 1500+ sari";
    else if (percent < 85) percentileStatus = "🌟 Dunyo bo'yicha TOP 10% • 90th Percentile (AQSH Grantlari)";

    const renderReviewList = () => {
      let filteredQ = this.currentQuestions.map((q, idx) => ({ q, idx }));

      if (this.reviewFilter === "wrong") {
        filteredQ = filteredQ.filter(item => !this.isAnswerCorrect(item.q, this.userAnswers[item.idx]));
      } else if (this.reviewFilter === "correct") {
        filteredQ = filteredQ.filter(item => this.isAnswerCorrect(item.q, this.userAnswers[item.idx]));
      } else if (this.reviewFilter === "flagged") {
        filteredQ = filteredQ.filter(item => this.markedForReview.has(item.idx));
      }

      return filteredQ.map(({ q, idx }) => {
        const isCorrect = this.isAnswerCorrect(q, this.userAnswers[idx]);
        const userChosen = this.userAnswers[idx];
        const isFlagged = this.markedForReview.has(idx);

        let userChosenText = "Belgilanmagan";
        let correctText = "";

        if (q.isGridIn) {
          userChosenText = userChosen !== undefined ? userChosen : "Bo'sh qoldirilgan";
          correctText = q.correctAnswer;
        } else {
          userChosenText = userChosen !== undefined ? `${String.fromCharCode(65 + userChosen)}) ${q.options[userChosen]}` : "Belgilanmagan";
          correctText = `${String.fromCharCode(65 + q.correctIndex)}) ${q.options[q.correctIndex]}`;
        }

        return `
          <div class="review-card ${isCorrect ? "correct-card" : "wrong-card"}">
            <div class="review-status">
              <span>${isCorrect ? "✅ To'g'ri javob" : "❌ Xato javob"} ${isFlagged ? "• 🚩 Belgilangan" : ""}</span>
              <span class="q-sec-tag">${q.section} (${q.difficulty || "2026"})</span>
            </div>
            ${q.stimulus ? `<div class="review-stimulus-box" style="margin: 8px 0; padding: 10px 14px; background: #F8FAFC; border-left: 3px solid #64748B; border-radius: 6px; font-size: 13px; color: #334155; line-height: 1.5;"><strong style="color: #475569; font-size: 11px; text-transform: uppercase; display: block; margin-bottom: 4px;">Kontekst & Shart:</strong>${q.stimulus.replace(/\n/g, '<br>')}</div>` : ""}
            <p class="review-q-text"><strong>${idx + 1}. Savol:</strong> ${q.question}</p>
            <div class="review-options-summary">
              <p class="opt-line">Sizning javobingiz: <strong>${userChosenText}</strong></p>
              ${!isCorrect ? `<p class="opt-line text-success">To'g'ri javob: <strong>${correctText}</strong></p>` : ""}
            </div>
            ${this.formatStepByStepExplanation(q, isCorrect, userChosenText, correctText)}
          </div>
        `;
      }).join("");
    };

    const circumference = 2 * Math.PI * 58; // radius 58 -> ~364.4
    const offset = circumference - (circumference * percent / 100);

    container.innerHTML = `
      <div class="test-result-wrapper" style="position: relative;">
        <!-- Top Right Exit / Close Button -->
        <button class="btn-close-result-x" id="btn-close-results-modal" title="Chiqish / Asosiy sahifaga qaytish" style="position: absolute; top: 16px; right: 18px; width: 40px; height: 40px; border-radius: 50%; border: 1.5px solid #CBD5E1; background: #FFFFFF; color: #475569; font-size: 20px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08); z-index: 25; transition: all 0.2s;">
          ✕
        </button>
        
        <!-- ================= 1. GRAND CELEBRATION HERO BANNER ================= -->
        <div class="celebration-hero-card">
          <div class="celebration-rays-bg"></div>
          
          <div class="celebration-trophy-wrap">
            🏆
          </div>

          <h2 class="celebration-title">🎉 2026 Rasmiy Imtihon Muvaffaqiyatli Yakunlandi!</h2>
          <p class="celebration-subtitle">
            ${this.currentExamType === "SAT" ? "Digital SAT Bluebook Official Score Report" : "IELTS Official Test Report Form (TRF)"} • 100% Rasmiy Standart
          </p>

          <div class="score-gauge-container">
            <!-- Animated Radial SVG Gauge -->
            <div class="score-circular-gauge">
              <svg class="score-gauge-svg" viewBox="0 0 140 140">
                <defs>
                  <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#38BDF8" />
                    <stop offset="100%" stop-color="#818CF8" />
                  </linearGradient>
                </defs>
                <circle class="score-gauge-bg" cx="70" cy="70" r="58"></circle>
                <circle class="score-gauge-fill" id="score-gauge-fill-circle" cx="70" cy="70" r="58"
                  style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${circumference};"></circle>
              </svg>
              <div class="score-gauge-text">
                <span class="gauge-number" id="animated-score-percent">0%</span>
                <span class="gauge-label">Aniqlik</span>
              </div>
            </div>

            <!-- Score Meta Panel -->
            <div class="score-meta-panel">
              <div class="score-composite-badge">${scoreDisplay}</div>
              <div class="percentile-pill">${percentileStatus}</div>
              <p style="font-size: 13.5px; color: #CBD5E1; margin: 4px 0 0 0;">
                Jami <strong>${total}</strong> ta savoldan <strong>${correct}</strong> tasiga to'g'ri javob berildi (${percent}%)
              </p>
              ${subscoreDetail ? `<span style="font-size: 12px; color: #94A3B8; font-weight: 600;">${subscoreDetail}</span>` : ""}
            </div>
          </div>
        </div>

        <!-- ================= 2. PLATFORM AVZALLIKLARI (CERTIFICATE & ACTIONS) ================= -->
        <div class="result-actions-row" style="margin-bottom: 24px; display: flex; flex-wrap: wrap; gap: 10px;">
          <!-- Avzallik 1: Rasmiy Sertifikat -->
          <button class="btn btn-primary" id="btn-view-certificate" style="background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%); border: none; font-weight: 800; box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35);">
            📜 Rasmiy Sertifikatni Olish (PDF)
          </button>

          <!-- Avzallik 2: Xatolar Ustida Ishlash -->
          ${wrongCount > 0 ? `
            <button class="btn btn-secondary" id="btn-remediate-mistakes" style="border: 2px solid #EF4444; color: #DC2626; font-weight: 800; background: #FEF2F2;">
              🎯 Xatolar Ustida Ishlash (${wrongCount} ta xato)
            </button>
          ` : `
            <button class="btn btn-secondary" style="border: 2px solid #10B981; color: #059669; font-weight: 800; background: #ECFDF5;" disabled>
              ✨ Barcha javoblar 100% to'g'ri!
            </button>
          `}

          <!-- Avzallik 3: Asosiy sahifaga qaytish (Chiqish) -->
          <button class="btn btn-secondary" id="btn-exit-to-home" style="border: 2px solid #64748B; color: #1E293B; font-weight: 800; background: #F8FAFC; display: inline-flex; align-items: center; gap: 8px;">
            🚪 Asosiy Sahifaga Qaytish (Chiqish)
          </button>

          <button class="btn btn-ghost" id="btn-retake-exam">🔄 Testni Qayta Topshirish</button>
          <button class="btn btn-ghost" id="btn-toggle-exam-type">
            🔄 ${this.currentExamType === "SAT" ? "🇬🇧 IELTS 2026 ga o'tish" : "🎯 SAT 2026 ga o'tish"}
          </button>
        </div>

        <!-- ================= 3. AVZALLIK: DIAGNOSTIC SKILL BREAKDOWN MATRIX ================= -->
        <div class="diagnostic-matrix-card">
          <div class="matrix-header">
            <div class="matrix-title">
              <span>📊</span> Ko'nikmalar Diagnostikasi & Mavzular Bo'yicha Tahlil (2026 Standard)
            </div>
            <span style="font-size: 12px; color: var(--slate-500); font-weight: 700;">Diagnostik Ko'rsatkich</span>
          </div>

          <div class="skills-grid">
            ${skillMatrix.map(sk => `
              <div class="skill-row">
                <div class="skill-row-meta">
                  <span>${sk.name}</span>
                  <span style="color: ${sk.color}; font-weight: 800;">${sk.correct}/${sk.total} (${sk.pct}%)</span>
                </div>
                <div class="skill-track">
                  <div class="skill-fill-bar" style="width: 0%; background: ${sk.color};" data-target-width="${sk.pct}%"></div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- ================= 4. SELF-GRADING SOLUTIONS AND REVIEWS ================= -->
        <div class="result-review-section">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 16px;">
            <h4 class="review-title" style="margin-bottom: 0;">2026 Rasmiy Yechimlar va Tahlillar (Self-Grading):</h4>
            <div class="review-filter-chips" style="display: flex; gap: 6px;">
              <button class="filter-chip active" id="rf-all">Barchasi (${total})</button>
              <button class="filter-chip" id="rf-wrong">❌ Xatolar (${wrongCount})</button>
              <button class="filter-chip" id="rf-correct">✅ To'g'ri (${correct})</button>
              <button class="filter-chip" id="rf-flagged">🚩 Belgilangan (${this.markedForReview.size})</button>
            </div>
          </div>

          <div class="review-list" id="review-cards-container">
            ${renderReviewList()}
          </div>
        </div>

      </div>
    `;

    // Trigger SVG gauge and score count-up animation
    setTimeout(() => {
      if (modalCard) modalCard.scrollTop = 0;
      if (testModal) testModal.scrollTop = 0;

      const fillCircle = document.getElementById("score-gauge-fill-circle");
      if (fillCircle) {
        fillCircle.style.strokeDashoffset = offset.toString();
      }

      // Animate percentage text
      const percentEl = document.getElementById("animated-score-percent");
      if (percentEl) {
        if (percent === 0) {
          percentEl.textContent = "0%";
        } else {
          let cur = 0;
          const stepTime = Math.max(15, Math.floor(1200 / percent));
          const counter = setInterval(() => {
            cur++;
            if (cur >= percent) {
              cur = percent;
              clearInterval(counter);
            }
            percentEl.textContent = `${cur}%`;
          }, stepTime);
        }
      }

      // Animate skill bars
      document.querySelectorAll(".skill-fill-bar").forEach(bar => {
        const target = bar.getAttribute("data-target-width");
        if (target) bar.style.width = target;
      });
    }, 60);

    // Wire up events
    document.getElementById("btn-view-certificate")?.addEventListener("click", () => {
      this.openCertificateModal(scoreDisplay, scoreLabel, percent);
    });

    document.getElementById("btn-remediate-mistakes")?.addEventListener("click", () => {
      this.retakeWrongOnly();
    });

    const handleExitFromResults = () => {
      this.clearTimer();
      document.getElementById("test-modal")?.classList.remove("active");
      window.app?.notify("Imtihondan chiqildi. Asosiy sahifadasiz. 🏠");
    };

    document.getElementById("btn-close-results-modal")?.addEventListener("click", handleExitFromResults);
    document.getElementById("btn-exit-to-home")?.addEventListener("click", handleExitFromResults);

    

    const attachFilters = () => {
      const updateFilter = (fName, btnId) => {
        this.reviewFilter = fName;
        document.querySelectorAll(".review-filter-chips .filter-chip").forEach(b => b.classList.remove("active"));
        document.getElementById(btnId)?.classList.add("active");
        const listEl = document.getElementById("review-cards-container");
        if (listEl) listEl.innerHTML = renderReviewList();
      };

      document.getElementById("rf-all")?.addEventListener("click", () => updateFilter("all", "rf-all"));
      document.getElementById("rf-wrong")?.addEventListener("click", () => updateFilter("wrong", "rf-wrong"));
      document.getElementById("rf-correct")?.addEventListener("click", () => updateFilter("correct", "rf-correct"));
      document.getElementById("rf-flagged")?.addEventListener("click", () => updateFilter("flagged", "rf-flagged"));
    };

    attachFilters();

    document.getElementById("btn-retake-exam")?.addEventListener("click", () => {
      this.startOfficialExam(this.currentExamType, null, this.currentExamMode);
    });

    document.getElementById("btn-toggle-exam-type")?.addEventListener("click", () => {
      const nextType = this.currentExamType === "SAT" ? "IELTS" : "SAT";
      const nextMode = nextType === "SAT" ? "SAT_MATH" : "IELTS_READING";
      this.startOfficialExam(nextType, null, nextMode);
    });
  }

  renderHistoryView() {
    const container = document.getElementById("test-content");
    if (!container) return;

    container.innerHTML = `
      <div class="test-history-view" style="padding: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h3 style="font-size: 20px; font-weight: 800; color: var(--slate-900);">📜 Mening Test Tarixim va Tahlillar</h3>
          <button class="btn btn-secondary" onclick="document.getElementById('test-modal').classList.remove('active');">✕ Yopish</button>
        </div>

        ${this.testHistory.length === 0 ? `
          <div class="empty-feed-card" style="padding: 40px; text-align: center;">
            <p style="color: var(--slate-500);">Siz hali rasmiy test topshirmagansiz. 2026 Bluebook yoki IELTS testini boshlab, natijangizni bu yerda ko'rishingiz mumkin!</p>
            <button class="btn btn-primary" onclick="testCenter.startOfficialExam('SAT', null, 'SAT_MATH')" style="margin-top: 14px;">
              🎯 Digital SAT Math (44 Savol) Testini Boshlash
            </button>
          </div>
        ` : `
          <div class="history-cards-list" style="display: flex; flex-direction: column; gap: 12px;">
            ${this.testHistory.map((h, i) => `
              <div class="history-item-card" style="display: flex; justify-content: space-between; align-items: center; background: #fff; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 14px 18px;">
                <div style="display: flex; flex-direction: column; gap: 4px;">
                  <span class="test-category-badge ${h.examType.toLowerCase()}">${h.examType} 2026 (${h.examMode || "Full Mock"})</span>
                  <strong style="color: var(--slate-900); font-size: 14px;">${h.scoreLabel}</strong>
                  <span style="font-size: 12px; color: var(--slate-600);">${h.subscoreDetail || ""}</span>
                  <span style="font-size: 11px; color: var(--slate-400); font-family: var(--font-mono);">${h.date}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="font-family: var(--font-mono); font-weight: 800; color: var(--brand-indigo); font-size: 18px;">${h.scoreDisplay}</span>
                </div>
              </div>
            `).join("")}
          </div>
        `}
      </div>
    `;
  }
}

// Global TestCenter instance
if (typeof window !== "undefined" && !window.testCenter) {
  window.testCenter = new TestCenter();
}
