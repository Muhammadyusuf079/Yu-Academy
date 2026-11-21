// YU Academy - Ustozlar uchun Yangi Test Qo'shish Studiyasi (Teacher Test Studio 2026)
// Zamonaviy animatsiyalar, fayl (rasm/audio/PDF) yuklash, interaktiv variantlar va jonli ko'rinish

class TeacherTestStudio {
  constructor() {
    this.storageKey = "yu_custom_teacher_tests";
    this.customTests = [];
    this.selectedExam = "SAT";
    this.selectedDifficulty = "O'rtacha";
    this.selectedGrade = "10-sinf";
    this.selectedCorrectIndex = 0;
    this.attachedFile = null; // { dataUrl, name, type, size }
    this.init();
  }

  init() {
    this.loadCustomTests();
    this.createModal();
    this.injectCustomTestsIntoDatabase();
  }

  loadCustomTests() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      this.customTests = saved ? JSON.parse(saved) : [];
    } catch (e) {
      this.customTests = [];
    }
  }

  saveCustomTests() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.customTests));
    } catch (e) {}
  }

  injectCustomTestsIntoDatabase() {
    if (typeof EXAM_DATABASE_2026 === "undefined") return;

    this.customTests.forEach(q => {
      if (q.exam === "SAT") {
        if (!EXAM_DATABASE_2026.sat_math_full.some(item => item.id === q.id)) {
          if ((q.section || "").toLowerCase().includes("math") || (q.section || "").toLowerCase().includes("algebra") || (q.section || "").toLowerCase().includes("geometry")) {
            EXAM_DATABASE_2026.sat_math_full.unshift(q);
          } else {
            EXAM_DATABASE_2026.sat_rw_full.unshift(q);
          }
        }
      } else {
        if (!EXAM_DATABASE_2026.ielts_reading_full.some(item => item.id === q.id)) {
          if ((q.section || "").toLowerCase().includes("listening")) {
            EXAM_DATABASE_2026.ielts_listening_full.unshift(q);
          } else {
            EXAM_DATABASE_2026.ielts_reading_full.unshift(q);
          }
        }
      }
    });
  }

  createModal() {
    if (document.getElementById("teacher-test-modal")) return;

    const modal = document.createElement("div");
    modal.id = "teacher-test-modal";
    modal.className = "modal-overlay studio-modal-overlay";
    modal.innerHTML = `
      <div class="teacher-studio-card" id="teacher-studio-card">
        
        <!-- Header with glowing gradient bar -->
        <div class="studio-header">
          <div class="studio-header-left">
            <div class="studio-avatar-badge">👨‍🏫</div>
            <div>
              <div class="studio-badge-pill">YU ACADEMY USTOZ STUDIYASI 2026</div>
              <h2 class="studio-title">Yangi Test & Savol Yaratish</h2>
              <p class="studio-subtitle">O'z mualliflik savolingizni rasm yoki audio fayli bilan biriktirib o'quvchilarga taqdim eting</p>
            </div>
          </div>
          <button type="button" class="studio-close-btn" id="btn-close-teacher-modal" title="Yopish">✕</button>
        </div>

        <form id="teacher-new-test-form" class="studio-form-body">
          
          <!-- 1. Exam Switcher Pills -->
          <div class="studio-field-row">
            <label class="studio-label">Imtihon Yo'nalishi *</label>
            <div class="studio-exam-pills">
              <button type="button" class="studio-exam-pill active" data-exam-target="SAT" id="pill-exam-sat">
                <span class="pill-icon">🎯</span>
                <span class="pill-text"><strong>Digital SAT 2026</strong> (Math & Reading/Writing)</span>
              </button>
              <button type="button" class="studio-exam-pill" data-exam-target="IELTS" id="pill-exam-ielts">
                <span class="pill-icon">🇬🇧</span>
                <span class="pill-text"><strong>IELTS Academic 2026</strong> (Reading & Listening)</span>
              </button>
            </div>
          </div>

          <!-- 1.5 Target Grade Selector (Nechanchi sinf uchun) -->
          <div class="studio-field-row" style="margin-top: 14px; margin-bottom: 6px;">
            <div class="studio-label-with-hint">
              <label class="studio-label">🏫 Nechanchi sinf / Auditoriya uchun? *</label>
              <span class="studio-hint">Test kimga mo'ljallanganligini tanlang</span>
            </div>
            <div class="studio-grade-pills" id="studio-grade-pills">
              <button type="button" class="studio-grade-pill" data-grade="8-sinf">🏫 8-sinf (Pre-SAT)</button>
              <button type="button" class="studio-grade-pill" data-grade="9-sinf">🏫 9-sinf (Asoslar)</button>
              <button type="button" class="studio-grade-pill active" data-grade="10-sinf">🎓 10-sinf (Asosiy)</button>
              <button type="button" class="studio-grade-pill" data-grade="11-sinf">🎓 11-sinf (Imtihon)</button>
              <button type="button" class="studio-grade-pill" data-grade="Litsey / Kollej">🏛️ Litsey / Kollej</button>
              <button type="button" class="studio-grade-pill" data-grade="Barcha sinflar">🌐 Barcha sinflar</button>
            </div>
          </div>

          <!-- 2. Section & Difficulty Grid -->
          <div class="studio-grid-2">
            <div class="studio-form-group">
              <label class="studio-label" for="teacher-section-select">Bo'lim / Mavzu nomi *</label>
              <select id="teacher-section-select" class="studio-input studio-select" required>
                <!-- Populated dynamically -->
              </select>
            </div>

            <div class="studio-form-group">
              <label class="studio-label">Qiyinlik darajasi *</label>
              <div class="studio-difficulty-pills">
                <button type="button" class="studio-diff-pill" data-diff="Oson">🟢 Oson</button>
                <button type="button" class="studio-diff-pill active" data-diff="O'rtacha">🟡 O'rtacha</button>
                <button type="button" class="studio-diff-pill" data-diff="Murakkab">🔴 Murakkab</button>
              </div>
            </div>
          </div>

          <!-- 3. Stimulus / Context Textarea -->
          <div class="studio-form-group">
            <div class="studio-label-with-hint">
              <label class="studio-label" for="teacher-stimulus-input">Matn / Kontekst (Reading matni yoki formula sharti - ixtiyoriy)</label>
              <span class="studio-hint">Talabaga beriladigan asosiy ma'lumot</span>
            </div>
            <textarea id="teacher-stimulus-input" class="studio-input studio-textarea" rows="3" placeholder="Masalan: SAT Math da 'A line in the xy-plane passes through points (0, 4) and (2, 8)...' yoki IELTS Reading matni parchasi..."></textarea>
          </div>

          <!-- 4. NEW: DRAG & DROP FILE / IMAGE / AUDIO ATTACHMENT ZONE -->
          <div class="studio-form-group">
            <div class="studio-label-with-hint">
              <label class="studio-label">📎 Fayl, Rasm yoki Audio Ilova Qilish (Ixtiyoriy)</label>
              <span class="studio-hint">Grafik, chizma, IELTS audio yoki PDF fayllar</span>
            </div>
            
            <div class="studio-dropzone" id="studio-dropzone">
              <input type="file" id="studio-file-input" accept="image/*,audio/*,.pdf" style="display: none;">
              
              <!-- Dropzone Default State -->
              <div class="dropzone-idle" id="dropzone-idle">
                <div class="dropzone-icon-pulse">📁</div>
                <div class="dropzone-prompt">
                  <strong>Faylni bu yerga tashlang</strong> yoki <span class="dropzone-link">kompyuterdan tanlang</span>
                </div>
                <div class="dropzone-formats">
                  Qo'llab-quvvatlanadi: Rasm (PNG, JPG, WebP), IELTS Audio (MP3, WAV), Hujjat (PDF) • Maks 15MB
                </div>
              </div>

              <!-- Dropzone Loaded Preview State -->
              <div class="dropzone-preview" id="dropzone-preview" style="display: none;">
                <div class="preview-media-holder" id="preview-media-holder"></div>
                <div class="preview-file-info">
                  <div class="preview-file-name" id="preview-file-name">fayl.png</div>
                  <div class="preview-file-meta" id="preview-file-meta">Rasm • 240 KB</div>
                </div>
                <button type="button" class="preview-remove-btn" id="btn-remove-attachment" title="Faylni o'chirish">
                  ✕ Bekor qilish
                </button>
              </div>
            </div>
          </div>

          <!-- 5. Question Prompt Input -->
          <div class="studio-form-group">
            <label class="studio-label" for="teacher-question-input">Savol Matni (Prompt) *</label>
            <textarea id="teacher-question-input" class="studio-input studio-textarea" rows="2" placeholder="Masalan: What is the slope of the line? yoki Which of the following best summarizes paragraph 2?" required></textarea>
          </div>

          <!-- 6. Interactive Answer Options A, B, C, D -->
          <div class="studio-form-group">
            <div class="studio-label-with-hint">
              <label class="studio-label">Javob Variantlari va To'g'ri Javobni Belgilang *</label>
              <span class="studio-hint">To'g'ri javobni tanlash uchun harf ustiga bosing</span>
            </div>

            <div class="studio-options-container" id="studio-options-container">
              
              <div class="studio-option-card selected" data-opt-index="0" id="studio-opt-card-0">
                <button type="button" class="opt-letter-circle">A</button>
                <input type="text" class="opt-text-input" id="teacher-opt-0" placeholder="Variant A javob matni" required>
                <span class="opt-correct-tag">✓ To'g'ri</span>
              </div>

              <div class="studio-option-card" data-opt-index="1" id="studio-opt-card-1">
                <button type="button" class="opt-letter-circle">B</button>
                <input type="text" class="opt-text-input" id="teacher-opt-1" placeholder="Variant B javob matni" required>
                <span class="opt-correct-tag">✓ To'g'ri</span>
              </div>

              <div class="studio-option-card" data-opt-index="2" id="studio-opt-card-2">
                <button type="button" class="opt-letter-circle">C</button>
                <input type="text" class="opt-text-input" id="teacher-opt-2" placeholder="Variant C javob matni" required>
                <span class="opt-correct-tag">✓ To'g'ri</span>
              </div>

              <div class="studio-option-card" data-opt-index="3" id="studio-opt-card-3">
                <button type="button" class="opt-letter-circle">D</button>
                <input type="text" class="opt-text-input" id="teacher-opt-3" placeholder="Variant D javob matni" required>
                <span class="opt-correct-tag">✓ To'g'ri</span>
              </div>

            </div>
          </div>

          <!-- 7. Tools Toggle & Explanation -->
          <div class="studio-grid-2">
            <div class="studio-form-group">
              <label class="studio-label">Desmos Kalkulyatori</label>
              <label class="studio-switch-label">
                <input type="checkbox" id="teacher-has-desmos" checked>
                <span class="studio-switch-slider"></span>
                <span class="studio-switch-text">🧮 Savolda Desmos kalkulyatori yoqilsin</span>
              </label>
            </div>

            <div class="studio-form-group">
              <label class="studio-label" for="teacher-explanation-input">Yechim va Tushuntirish (Explanation)</label>
              <textarea id="teacher-explanation-input" class="studio-input studio-textarea" rows="2" placeholder="Masalan: m = (8 - 4) / (2 - 0) = 4 / 2 = 2. Shuning uchun to'g'ri javob Variant A."></textarea>
            </div>
          </div>

          <!-- 8. Interactive Live Preview Drawer (Collapsible) -->
          <div class="studio-live-preview-box" id="studio-live-preview-box" style="display: none;">
            <div class="live-preview-header">
              <span>👁️ Jonli Talaba Ko'rinishi (Live Preview)</span>
              <span class="live-preview-badge">Student Mode</span>
            </div>
            <div class="live-preview-content" id="live-preview-render">
              <!-- Rendered dynamically -->
            </div>
          </div>

          <!-- 9. Footer Actions -->
          <div class="studio-actions-footer">
            <button type="button" class="btn btn-outline-secondary studio-btn-preview" id="btn-toggle-live-preview">
              👁️ Jonli ko'rish
            </button>
            <div style="flex: 1;"></div>
            <button type="button" class="btn btn-secondary studio-btn-cancel" id="btn-cancel-studio">
              Bekor qilish
            </button>
            <button type="submit" class="btn btn-primary studio-btn-submit" id="btn-submit-studio">
              <span>🚀 Testni Saqlash va E'lon Qilish</span>
            </button>
          </div>

        </form>

      </div>
    `;

    document.body.appendChild(modal);
    this.setupModalEvents(modal);
    this.updateSectionOptions();
  }

  setupModalEvents(modal) {
    // Close modal
    document.getElementById("btn-close-teacher-modal")?.addEventListener("click", () => this.closeModal());
    document.getElementById("btn-cancel-studio")?.addEventListener("click", () => this.closeModal());
    modal.addEventListener("click", (e) => {
      if (e.target === modal) this.closeModal();
    });

    // Exam switchers
    const satPill = document.getElementById("pill-exam-sat");
    const ieltsPill = document.getElementById("pill-exam-ielts");

    satPill?.addEventListener("click", () => {
      satPill.classList.add("active");
      ieltsPill?.classList.remove("active");
      this.selectedExam = "SAT";
      this.updateSectionOptions();
      const desmosCb = document.getElementById("teacher-has-desmos");
      if (desmosCb) desmosCb.checked = true;
    });

    ieltsPill?.addEventListener("click", () => {
      ieltsPill.classList.add("active");
      satPill?.classList.remove("active");
      this.selectedExam = "IELTS";
      this.updateSectionOptions();
      const desmosCb = document.getElementById("teacher-has-desmos");
      if (desmosCb) desmosCb.checked = false;
    });

    // Grade pills selection (Nechanchi sinf uchun)
    document.querySelectorAll(".studio-grade-pill").forEach(btn => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".studio-grade-pill").forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        this.selectedGrade = e.currentTarget.getAttribute("data-grade");
        this.updateLivePreview();
      });
    });

    // Difficulty buttons
    document.querySelectorAll(".studio-diff-pill").forEach(btn => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".studio-diff-pill").forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");
        this.selectedDifficulty = e.currentTarget.getAttribute("data-diff");
      });
    });

    // Options A, B, C, D correct selection
    document.querySelectorAll(".studio-option-card").forEach(card => {
      const idx = parseInt(card.getAttribute("data-opt-index"), 10);
      card.querySelector(".opt-letter-circle")?.addEventListener("click", () => {
        this.selectCorrectOption(idx);
      });
      card.querySelector(".opt-correct-tag")?.addEventListener("click", () => {
        this.selectCorrectOption(idx);
      });
    });

    // File Drag & Drop Setup
    this.setupFileDropzone();

    // Live preview toggle
    document.getElementById("btn-toggle-live-preview")?.addEventListener("click", () => {
      this.toggleLivePreview();
    });

    // Form submit
    const form = document.getElementById("teacher-new-test-form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });
  }

  selectCorrectOption(idx) {
    this.selectedCorrectIndex = idx;
    document.querySelectorAll(".studio-option-card").forEach((card, i) => {
      if (i === idx) {
        card.classList.add("selected");
      } else {
        card.classList.remove("selected");
      }
    });
  }

  updateSectionOptions() {
    const select = document.getElementById("teacher-section-select");
    if (!select) return;

    if (this.selectedExam === "SAT") {
      select.innerHTML = `
        <optgroup label="🧮 Digital SAT Math">
          <option value="SAT Math: Algebra">🧮 Algebra (Linear Equations & Systems)</option>
          <option value="SAT Math: Advanced Math">📐 Advanced Math (Quadratics & Polynomials)</option>
          <option value="SAT Math: Problem Solving & Data">📊 Problem Solving & Data Analysis</option>
          <option value="SAT Math: Geometry & Trigonometry">📏 Geometry & Trigonometry</option>
        </optgroup>
        <optgroup label="📖 Digital SAT Reading & Writing">
          <option value="SAT Reading: Information and Ideas">📖 Information and Ideas (Central Idea & Evidence)</option>
          <option value="SAT Reading: Craft and Structure">🔍 Craft and Structure (Words in Context & Structure)</option>
          <option value="SAT Writing: Standard English Conventions">✍️ Standard English Conventions (Grammar & Punctuation)</option>
          <option value="SAT Writing: Expression of Ideas">💡 Expression of Ideas (Transitions & Rhetorical Synthesis)</option>
        </optgroup>
      `;
    } else {
      select.innerHTML = `
        <optgroup label="📖 IELTS Academic Reading">
          <option value="IELTS Reading Passage 1">📖 Reading Passage 1 (Descriptive / Factual)</option>
          <option value="IELTS Reading Passage 2">📖 Reading Passage 2 (Analytical / Scientific)</option>
          <option value="IELTS Reading Passage 3">📖 Reading Passage 3 (Complex Argumentative)</option>
        </optgroup>
        <optgroup label="🎧 IELTS Academic Listening">
          <option value="IELTS Listening: Section 1">🎧 Listening Section 1 (Everyday Social Context)</option>
          <option value="IELTS Listening: Section 2">🎧 Listening Section 2 (Public Information Monologue)</option>
          <option value="IELTS Listening: Section 3">🎧 Listening Section 3 (Academic Discussion / Seminar)</option>
          <option value="IELTS Listening: Section 4">🎧 Listening Section 4 (University Lecture Monologue)</option>
        </optgroup>
        <optgroup label="✍️ IELTS Writing & Speaking">
          <option value="IELTS Writing Task 2">✍️ Writing Task 2: Academic Essay</option>
          <option value="IELTS Speaking Cue Card">🎙️ Speaking Part 2 & Part 3 (Cue Cards)</option>
        </optgroup>
      `;
    }
  }

  setupFileDropzone() {
    const dropzone = document.getElementById("studio-dropzone");
    const fileInput = document.getElementById("studio-file-input");
    const removeBtn = document.getElementById("btn-remove-attachment");

    if (!dropzone || !fileInput) return;

    // Click to choose file
    dropzone.addEventListener("click", (e) => {
      if (e.target.closest("#btn-remove-attachment")) return;
      fileInput.click();
    });

    fileInput.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (file) this.processUploadedFile(file);
    });

    // Drag and drop events
    ["dragenter", "dragover"].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add("dragover");
      });
    });

    ["dragleave", "drop"].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove("dragover");
      });
    });

    dropzone.addEventListener("drop", (e) => {
      const dt = e.dataTransfer;
      const file = dt.files?.[0];
      if (file) this.processUploadedFile(file);
    });

    // Remove file
    removeBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.clearAttachedFile();
    });
  }

  processUploadedFile(file) {
    if (!file) return;

    // Max 15MB
    if (file.size > 15 * 1024 * 1024) {
      window.app?.notify("Fayl hajmi 15MB dan oshmasligi kerak! ⚠️");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      this.attachedFile = {
        dataUrl,
        name: file.name,
        type: file.type,
        size: (file.size / 1024).toFixed(1) + " KB"
      };
      this.renderFilePreview();
      window.app?.notify(`📎 Fayl yuklandi: ${file.name}`);
    };
    reader.readAsDataURL(file);
  }

  renderFilePreview() {
    const idleEl = document.getElementById("dropzone-idle");
    const previewEl = document.getElementById("dropzone-preview");
    const mediaHolder = document.getElementById("preview-media-holder");
    const nameEl = document.getElementById("preview-file-name");
    const metaEl = document.getElementById("preview-file-meta");

    if (!this.attachedFile || !previewEl || !mediaHolder) return;

    if (idleEl) idleEl.style.display = "none";
    previewEl.style.display = "flex";

    nameEl.textContent = this.attachedFile.name;
    metaEl.textContent = `${this.attachedFile.type || "Fayl"} • ${this.attachedFile.size}`;

    if (this.attachedFile.type.startsWith("image/")) {
      mediaHolder.innerHTML = `<img src="${this.attachedFile.dataUrl}" alt="Preview" class="preview-thumb-img">`;
    } else if (this.attachedFile.type.startsWith("audio/")) {
      mediaHolder.innerHTML = `<div class="preview-audio-tag">🎧 <audio controls src="${this.attachedFile.dataUrl}" style="height: 32px;"></audio></div>`;
    } else {
      mediaHolder.innerHTML = `<div class="preview-doc-icon">📄</div>`;
    }
  }

  clearAttachedFile() {
    this.attachedFile = null;
    const idleEl = document.getElementById("dropzone-idle");
    const previewEl = document.getElementById("dropzone-preview");
    const fileInput = document.getElementById("studio-file-input");

    if (idleEl) idleEl.style.display = "block";
    if (previewEl) previewEl.style.display = "none";
    if (fileInput) fileInput.value = "";
    window.app?.notify("Biriktirilgan fayl olib tashlandi 🗑️");
  }

  toggleLivePreview() {
    const previewBox = document.getElementById("studio-live-preview-box");
    const renderTarget = document.getElementById("live-preview-render");
    if (!previewBox || !renderTarget) return;

    const isVisible = previewBox.style.display !== "none";
    if (isVisible) {
      previewBox.style.display = "none";
      return;
    }

    const stimulus = document.getElementById("teacher-stimulus-input")?.value || "Savol konteksti berilmagan.";
    const question = document.getElementById("teacher-question-input")?.value || "Savol matni kiritilmadi.";
    const opt0 = document.getElementById("teacher-opt-0")?.value || "Variant A";
    const opt1 = document.getElementById("teacher-opt-1")?.value || "Variant B";
    const opt2 = document.getElementById("teacher-opt-2")?.value || "Variant C";
    const opt3 = document.getElementById("teacher-opt-3")?.value || "Variant D";
    const options = [opt0, opt1, opt2, opt3];

    let mediaHtml = "";
    if (this.attachedFile) {
      if (this.attachedFile.type.startsWith("image/")) {
        mediaHtml = `<img src="${this.attachedFile.dataUrl}" style="max-width: 100%; max-height: 200px; border-radius: 8px; margin: 10px 0; border: 1px solid #CBD5E1;">`;
      } else if (this.attachedFile.type.startsWith("audio/")) {
        mediaHtml = `<audio controls src="${this.attachedFile.dataUrl}" style="width: 100%; margin: 10px 0;"></audio>`;
      }
    }

    renderTarget.innerHTML = `
      <div style="background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 12px; padding: 18px; color: #0F172A;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px; align-items: center;">
          <span style="padding: 3px 10px; border-radius: 6px; background: #EEF2FF; color: #4F46E5; font-weight: 800; font-size: 11.5px;">
            ${this.selectedExam} 2026 • ${this.selectedDifficulty} • 🏫 ${this.selectedGrade || '10-sinf'}
          </span>
          <span style="font-size: 12px; color: #64748B; font-weight: 600;">👨‍🏫 Mualliflik Savoli</span>
        </div>
        <p style="font-size: 13.5px; color: #475569; margin-bottom: 10px; line-height: 1.5;">${stimulus}</p>
        ${mediaHtml}
        <strong style="font-size: 14.5px; display: block; margin-bottom: 12px;">${question}</strong>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${options.map((opt, i) => `
            <div style="padding: 9px 14px; border-radius: 8px; border: 1.5px solid ${i === this.selectedCorrectIndex ? '#10B981' : '#E2E8F0'}; background: ${i === this.selectedCorrectIndex ? '#ECFDF5' : '#F8FAFC'}; font-size: 13px; display: flex; align-items: center; justify-content: space-between;">
              <span><strong>${String.fromCharCode(65 + i)}.</strong> ${opt}</span>
              ${i === this.selectedCorrectIndex ? '<span style="color: #059669; font-weight: 800; font-size: 11px;">✓ To\'g\'ri javob</span>' : ''}
            </div>
          `).join("")}
        </div>
      </div>
    `;

    previewBox.style.display = "block";
    previewBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  openModal() {
    const modal = document.getElementById("teacher-test-modal");
    if (modal) {
      modal.classList.add("active");
      const card = document.getElementById("teacher-studio-card");
      if (card) {
        card.classList.remove("studio-animate-pop");
        void card.offsetWidth; // trigger reflow
        card.classList.add("studio-animate-pop");
      }
    }
  }

  closeModal() {
    const modal = document.getElementById("teacher-test-modal");
    if (modal) modal.classList.remove("active");
  }

  handleFormSubmit() {
    const section = document.getElementById("teacher-section-select")?.value.trim() || "SAT Math: Algebra";
    const stimulus = document.getElementById("teacher-stimulus-input")?.value.trim() || "Savol sharti va konteksti:";
    const question = document.getElementById("teacher-question-input")?.value.trim();
    const opt0 = document.getElementById("teacher-opt-0")?.value.trim();
    const opt1 = document.getElementById("teacher-opt-1")?.value.trim();
    const opt2 = document.getElementById("teacher-opt-2")?.value.trim();
    const opt3 = document.getElementById("teacher-opt-3")?.value.trim();
    const hasDesmos = document.getElementById("teacher-has-desmos")?.checked ?? true;
    const explanation = document.getElementById("teacher-explanation-input")?.value.trim() || "To'g'ri javob tanlangan variant bo'yicha yechiladi.";

    if (!question || !opt0 || !opt1 || !opt2 || !opt3) {
      window.app?.notify("Iltimos, savol matni va barcha 4 variantni to'ldiring! ⚠️");
      return;
    }

    const authorName = window.authManager?.currentUser?.name || "Hurmatli Ustoz";
    const targetGrade = this.selectedGrade || "10-sinf";

    const newQuestion = {
      id: "teacher-" + Date.now(),
      exam: this.selectedExam,
      year: "2026",
      examSession: `👨‍🏫 ${authorName} • 🏫 ${targetGrade}`,
      section,
      difficulty: this.selectedDifficulty,
      targetGrade: targetGrade,
      stimulus,
      question,
      options: [opt0, opt1, opt2, opt3],
      correctIndex: this.selectedCorrectIndex,
      explanation,
      hasDesmos,
      isTeacherCreated: true,
      author: authorName,
      fileData: this.attachedFile ? this.attachedFile.dataUrl : null,
      fileName: this.attachedFile ? this.attachedFile.name : null,
      fileType: this.attachedFile ? this.attachedFile.type : null,
      tags: [this.selectedExam, "Ustoz Savoli", targetGrade, "2026", "Mualliflik"]
    };

    // Save locally
    this.customTests.unshift(newQuestion);
    this.saveCustomTests();

    // Inject into database
    this.injectCustomTestsIntoDatabase();

    // Increment question counter
    window.statsManager?.incrementQuestions(1);

    // Refresh Question Bank & Stats
    window.app?.renderQuestionBank();
    window.app?.updateStats();

    // Celebration Confetti effect
    this.triggerCelebration();

    // Close & Reset
    this.closeModal();
    this.resetForm();

    window.app?.notify(`🎉 Qoyilmaqom, ${authorName}! Yangi ${this.selectedExam} testi muvaffaqiyatli saqlandi va Savollar Bazasiga joylandi!`);
  }

  resetForm() {
    document.getElementById("teacher-stimulus-input").value = "";
    document.getElementById("teacher-question-input").value = "";
    document.getElementById("teacher-opt-0").value = "";
    document.getElementById("teacher-opt-1").value = "";
    document.getElementById("teacher-opt-2").value = "";
    document.getElementById("teacher-opt-3").value = "";
    document.getElementById("teacher-explanation-input").value = "";
    this.clearAttachedFile();
    this.selectCorrectOption(0);
    this.selectedGrade = "10-sinf";
    document.querySelectorAll(".studio-grade-pill").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-grade") === "10-sinf");
    });
    const previewBox = document.getElementById("studio-live-preview-box");
    if (previewBox) previewBox.style.display = "none";
  }

  updateLanguage(lang) {
    this.currentLang = lang;
    const badge = document.querySelector(".studio-badge-pill");
    const title = document.querySelector(".studio-title");
    const subtitle = document.querySelector(".studio-subtitle");
    const cancelBtn = document.getElementById("btn-cancel-studio");
    const submitBtn = document.getElementById("btn-submit-studio");
    const previewBtn = document.getElementById("btn-toggle-live-preview");
    const dropzonePrompt = document.querySelector(".dropzone-prompt");
    const dropzoneFormats = document.querySelector(".dropzone-formats");
    const desmosText = document.querySelector(".studio-switch-text");

    if (lang === "ru") {
      if (badge) badge.textContent = "СТУДИЯ ПРЕПОДАВАТЕЛЯ YU ACADEMY 2026";
      if (title) title.textContent = "Создание нового теста и вопроса";
      if (subtitle) subtitle.textContent = "Прикрепите изображение или аудио к авторскому вопросу и опубликуйте";
      if (cancelBtn) cancelBtn.textContent = "Отмена";
      if (submitBtn) submitBtn.innerHTML = "<span>🚀 Сохранить и опубликовать тест</span>";
      if (previewBtn) previewBtn.textContent = "👁️ Предпросмотр";
      if (dropzonePrompt) dropzonePrompt.innerHTML = "<strong>Перетащите файл сюда</strong> или <span class='dropzone-link'>выберите с устройства</span>";
      if (dropzoneFormats) dropzoneFormats.textContent = "Поддерживаются: Изображения (PNG, JPG, WebP), Аудио IELTS (MP3, WAV), Документы (PDF) • До 15МБ";
      if (desmosText) desmosText.textContent = "🧮 Включить калькулятор Desmos в вопросе";
    } else if (lang === "en") {
      if (badge) badge.textContent = "YU ACADEMY TEACHER STUDIO 2026";
      if (title) title.textContent = "Create New Test & Question";
      if (subtitle) subtitle.textContent = "Attach an image or audio to your question and share with students";
      if (cancelBtn) cancelBtn.textContent = "Cancel";
      if (submitBtn) submitBtn.innerHTML = "<span>🚀 Save & Publish Question</span>";
      if (previewBtn) previewBtn.textContent = "👁️ Live Preview";
      if (dropzonePrompt) dropzonePrompt.innerHTML = "<strong>Drop file here</strong> or <span class='dropzone-link'>browse from device</span>";
      if (dropzoneFormats) dropzoneFormats.textContent = "Supported: Images (PNG, JPG, WebP), IELTS Audio (MP3, WAV), Documents (PDF) • Up to 15MB";
      if (desmosText) desmosText.textContent = "🧮 Enable Desmos graphing calculator";
    } else {
      if (badge) badge.textContent = "YU ACADEMY USTOZ STUDIYASI 2026";
      if (title) title.textContent = "Yangi Test & Savol Yaratish";
      if (subtitle) subtitle.textContent = "O'z mualliflik savolingizni rasm yoki audio fayli bilan biriktirib o'quvchilarga taqdim eting";
      if (cancelBtn) cancelBtn.textContent = "Bekor qilish";
      if (submitBtn) submitBtn.innerHTML = "<span>🚀 Testni Saqlash va E'lon Qilish</span>";
      if (previewBtn) previewBtn.textContent = "👁️ Jonli ko'rish";
      if (dropzonePrompt) dropzonePrompt.innerHTML = "<strong>Faylni bu yerga tashlang</strong> yoki <span class='dropzone-link'>kompyuterdan tanlang</span>";
      if (dropzoneFormats) dropzoneFormats.textContent = "Qo'llab-quvvatlanadi: Rasm (PNG, JPG, WebP), IELTS Audio (MP3, WAV), Hujjat (PDF) • Maks 15MB";
      if (desmosText) desmosText.textContent = "🧮 Savolda Desmos kalkulyatori yoqilsin";
    }

    this.updateSectionOptions();
  }

  triggerCelebration() {
    const confettiContainer = document.createElement("div");
    confettiContainer.className = "studio-confetti-burst";
    confettiContainer.innerHTML = `
      <div class="confetti-item" style="left: 20%; background: #4F46E5;"></div>
      <div class="confetti-item" style="left: 35%; background: #10B981;"></div>
      <div class="confetti-item" style="left: 50%; background: #F59E0B;"></div>
      <div class="confetti-item" style="left: 65%; background: #EC4899;"></div>
      <div class="confetti-item" style="left: 80%; background: #6366F1;"></div>
    `;
    document.body.appendChild(confettiContainer);
    setTimeout(() => confettiContainer.remove(), 2500);
  }
}

// Global instance
window.teacherStudio = new TeacherTestStudio();
