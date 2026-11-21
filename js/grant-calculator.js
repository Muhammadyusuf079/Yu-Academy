// ===================================================================
// YU ACADEMY - 2026 IVY LEAGUE & TOP-100 GRANT VA QABUL KALKULYATORI
// AQSH, Buyuk Britaniya va Yevropa Top Universitetlariga 100% Grant Imkoniyatini Hisoblash
// ===================================================================

class GrantCalculatorManager {
  constructor() {
    this.examType = "SAT";
    this.satScore = 1520;
    this.ieltsScore = 8.0;
    this.gpa = 4.8;
    this.hasOlympiad = true;
    this.hasProjects = true;
    this.hasLeadership = false;
    
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.init());
    } else {
      this.init();
    }
  }

  init() {
    this.renderModal();
    this.setupListeners();
  }

  renderModal() {
    if (document.getElementById("grant-calculator-modal")) return;

    const overlay = document.createElement("div");
    overlay.id = "grant-calculator-modal";
    overlay.className = "grant-modal-overlay";
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
      <div class="grant-modal-card" style="background: #FFFFFF; border-radius: 20px; max-width: 780px; width: 100%; max-height: 92vh; overflow-y: auto; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35); border: 1.5px solid #E2E8F0; font-family: system-ui, sans-serif;">
        
        <!-- HEADER -->
        <div style="background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%); padding: 22px 26px; border-radius: 18px 18px 0 0; position: relative; color: #FFFFFF;">
          <button id="grant-close-btn" style="position: absolute; top: 18px; right: 20px; width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.25); background: rgba(255,255,255,0.1); color: #FFFFFF; font-size: 18px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s;">✕</button>
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 14px; background: linear-gradient(135deg, #F59E0B, #D97706); display: flex; align-items: center; justify-content: center; font-size: 24px; box-shadow: 0 4px 14px rgba(245, 158, 11, 0.4);">
              🏛️
            </div>
            <div>
              <div style="display: inline-flex; align-items: center; gap: 6px; padding: 2px 10px; background: rgba(245, 158, 11, 0.2); border: 1px solid #F59E0B; border-radius: 999px; font-size: 11px; font-weight: 800; color: #FCD34D; margin-bottom: 4px;">
                ⭐ YU ACADEMY 2026 EKSKLYUZIV
              </div>
              <h3 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.01em;">Ivy League & Top-100 Universitetlar Grant Kalkulyatori</h3>
              <p style="margin: 4px 0 0 0; font-size: 12.5px; color: #CBD5E1;">SAT / IELTS ballaringiz asosida xalqaro grant va stipendiya yutish imkoniyatingizni aniqlang</p>
            </div>
          </div>
        </div>

        <!-- BODY -->
        <div style="padding: 24px 26px;">
          
          <!-- INPUTS GRID -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 18px; margin-bottom: 24px;">
            
            <!-- Exam Selector & Score -->
            <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 14px; padding: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <label style="font-size: 12px; font-weight: 800; color: #475569; text-transform: uppercase;">Imtihon Balli</label>
                <div style="display: flex; gap: 4px;">
                  <button type="button" id="calc-tab-sat" class="calc-type-btn active" style="padding: 3px 8px; font-size: 11px; font-weight: 800; border-radius: 6px; border: none; cursor: pointer; background: #0284C7; color: #FFF;">SAT</button>
                  <button type="button" id="calc-tab-ielts" class="calc-type-btn" style="padding: 3px 8px; font-size: 11px; font-weight: 800; border-radius: 6px; border: none; cursor: pointer; background: #E2E8F0; color: #475569;">IELTS</button>
                </div>
              </div>
              
              <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 8px;">
                <span id="display-score-val" style="font-size: 32px; font-weight: 900; color: #0284C7; font-family: monospace;">1520</span>
                <span id="display-score-max" style="font-size: 13px; font-weight: 700; color: #64748B;">/ 1600 Ball</span>
              </div>
              <input type="range" id="input-calc-score" min="1000" max="1600" step="10" value="1520" style="width: 100%; accent-color: #0284C7; cursor: pointer;">
              <div style="display: flex; justify-content: space-between; font-size: 10.5px; color: #94A3B8; font-weight: 600; margin-top: 4px;">
                <span id="score-min-label">1000</span>
                <span id="score-mid-label">1350 (Grant ostonasi)</span>
                <span id="score-max-label">1600</span>
              </div>
            </div>

            <!-- GPA -->
            <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 14px; padding: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <label style="font-size: 12px; font-weight: 800; color: #475569; text-transform: uppercase;">Maktab/Litsey Bahosi (GPA)</label>
                <span id="display-gpa-val" style="font-size: 18px; font-weight: 900; color: #059669; font-family: monospace;">4.8 / 5.0</span>
              </div>
              <p style="font-size: 11.5px; color: #64748B; margin: 0 0 12px 0;">Attestat yoki diplomdagi o'rtacha a'lo baholar foizi (96%)</p>
              <input type="range" id="input-calc-gpa" min="3.0" max="5.0" step="0.1" value="4.8" style="width: 100%; accent-color: #059669; cursor: pointer;">
              <div style="display: flex; justify-content: space-between; font-size: 10.5px; color: #94A3B8; font-weight: 600; margin-top: 4px;">
                <span>3.0 (Qoniqarli)</span>
                <span>4.0 (Yaxshi)</span>
                <span>5.0 (Oltin medal)</span>
              </div>
            </div>

          </div>

          <!-- EXTRACURRICULARS CHECKBOXES -->
          <div style="background: #F1F5F9; border-radius: 14px; padding: 14px 18px; margin-bottom: 24px;">
            <label style="font-size: 12px; font-weight: 800; color: #334155; text-transform: uppercase; display: block; margin-bottom: 10px;">
              Qo'shimcha Yutuqlar & Faollik (Portfolio Boost):
            </label>
            <div style="display: flex; flex-wrap: wrap; gap: 14px;">
              <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: #1E293B; cursor: pointer;">
                <input type="checkbox" id="check-olympiad" checked style="accent-color: #4F46E5; width: 16px; height: 16px;">
                🥇 Respublika / Xalqaro Olimpiada g'olibi (+12%)
              </label>
              <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: #1E293B; cursor: pointer;">
                <input type="checkbox" id="check-projects" checked style="accent-color: #4F46E5; width: 16px; height: 16px;">
                💻 IT/Startap yoki Ilmiy Maqola (+8%)
              </label>
              <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: #1E293B; cursor: pointer;">
                <input type="checkbox" id="check-leadership" style="accent-color: #4F46E5; width: 16px; height: 16px;">
                🤝 Volontyorlik & Liderlik faoliyati (+6%)
              </label>
            </div>
          </div>

          <!-- CALCULATION RESULTS CARDS -->
          <h4 style="margin: 0 0 14px 0; font-size: 14.5px; font-weight: 800; color: #0F172A; text-transform: uppercase; letter-spacing: 0.05em;">
            🎓 2026 Qabul va Grant Ehtimoli Tahlili:
          </h4>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-bottom: 24px;">
            
            <!-- Result 1: Ivy League & US Top 30 -->
            <div style="background: linear-gradient(135deg, #EFF6FF, #DBEAFE); border: 1.5px solid #93C5FD; border-radius: 14px; padding: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 12px; font-weight: 800; color: #1E40AF;">🇺🇸 AQSH Ivy League & Top 30</span>
                <span id="ivy-chance-pill" style="padding: 2px 8px; background: #1D4ED8; color: #FFF; border-radius: 999px; font-size: 11px; font-weight: 800;">84% Ehtimol</span>
              </div>
              <div style="font-size: 11px; color: #3B82F6; margin-bottom: 8px;">Harvard, MIT, Columbia, Stanford, NYU</div>
              <div style="background: #FFFFFF; border-radius: 10px; padding: 10px; margin-top: 8px;">
                <span style="font-size: 11px; color: #64748B; font-weight: 600; display: block;">Kutilayotgan Grant:</span>
                <strong id="ivy-scholarship-val" style="font-size: 18px; color: #1D4ED8; font-weight: 900;">$85,000 / yil</strong>
                <span style="font-size: 10.5px; color: #059669; font-weight: 700; display: block; margin-top: 2px;">✓ 100% To'liq ta'lim + yotoqxona</span>
              </div>
            </div>

            <!-- Result 2: UK Russell Group -->
            <div style="background: linear-gradient(135deg, #ECFDF5, #D1FAE5); border: 1.5px solid #6EE7B7; border-radius: 14px; padding: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 12px; font-weight: 800; color: #065F46;">🇬🇧 UK Russell Group</span>
                <span id="uk-chance-pill" style="padding: 2px 8px; background: #059669; color: #FFF; border-radius: 999px; font-size: 11px; font-weight: 800;">89% Ehtimol</span>
              </div>
              <div style="font-size: 11px; color: #10B981; margin-bottom: 8px;">Oxford, Cambridge, Imperial, UCL, Edinburgh</div>
              <div style="background: #FFFFFF; border-radius: 10px; padding: 10px; margin-top: 8px;">
                <span style="font-size: 11px; color: #64748B; font-weight: 600; display: block;">Kutilayotgan Grant:</span>
                <strong id="uk-scholarship-val" style="font-size: 18px; color: #059669; font-weight: 900;">£32,000 / yil</strong>
                <span style="font-size: 10.5px; color: #059669; font-weight: 700; display: block; margin-top: 2px;">✓ Merit-based Vice-Chancellor</span>
              </div>
            </div>

            <!-- Result 3: Europe & Asia Top-50 -->
            <div style="background: linear-gradient(135deg, #FAF5FF, #F3E8FF); border: 1.5px solid #D8B4FE; border-radius: 14px; padding: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 12px; font-weight: 800; color: #5B21B6;">🇪🇺 Yevropa & Osiyo Top 50</span>
                <span id="eu-chance-pill" style="padding: 2px 8px; background: #7C3AED; color: #FFF; border-radius: 999px; font-size: 11px; font-weight: 800;">94% Ehtimol</span>
              </div>
              <div style="font-size: 11px; color: #8B5CF6; margin-bottom: 8px;">ETH Zurich, TUM Germaniya, NUS Singapur</div>
              <div style="background: #FFFFFF; border-radius: 10px; padding: 10px; margin-top: 8px;">
                <span style="font-size: 11px; color: #64748B; font-weight: 600; display: block;">Kutilayotgan Grant:</span>
                <strong id="eu-scholarship-val" style="font-size: 18px; color: #7C3AED; font-weight: 900;">100% Tuition Waiver</strong>
                <span style="font-size: 10.5px; color: #059669; font-weight: 700; display: block; margin-top: 2px;">✓ DAAD / Government Scholarship</span>
              </div>
            </div>

          </div>

          <!-- YU ACADEMY ACTIONABLE RECOMMENDATION -->
          <div style="background: #FFFBEB; border: 1.5px solid #FCD34D; border-radius: 14px; padding: 16px; margin-bottom: 22px;">
            <div style="display: flex; gap: 12px; align-items: flex-start;">
              <span style="font-size: 24px;">💡</span>
              <div>
                <strong style="color: #92400E; font-size: 14px; display: block; margin-bottom: 4px;">YU AI Shaxsiy Tavsiyasi & Ballarni Oshirish Strategiyasi:</strong>
                <p id="calc-advice-text" style="margin: 0; font-size: 13px; color: #78350F; line-height: 1.55;">
                  Sizning 1520 ballingiz dunyoning 99% abituriyentlaridan yuqori. SAT Math bo'limini 790-800 ga chiqarsangiz, Harvard va MIT dan 100% to'liq grant ($340,000) olish ehtimolingiz 93% gacha ko'tariladi!
                </p>
              </div>
            </div>
          </div>

          <!-- ACTION BUTTONS -->
          <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: flex-end;">
            <button type="button" id="calc-btn-start-mock" class="btn btn-primary" style="background: linear-gradient(135deg, #0284C7 0%, #1D4ED8 100%); font-weight: 800; padding: 12px 22px; border: none;">
              🎯 SAT Bluebook Mock Testini Boshlash
            </button>
            <button type="button" id="calc-btn-view-plans" class="btn btn-secondary" style="border: 2px solid #4F46E5; color: #4F46E5; font-weight: 800; padding: 12px 20px;">
              💎 Plus / Pro Tariflariga O'tish
            </button>
          </div>

        </div>

      </div>
    `;

    document.body.appendChild(overlay);
  }

  setupListeners() {
    const overlay = document.getElementById("grant-calculator-modal");
    const closeBtn = document.getElementById("grant-close-btn");
    const scoreInput = document.getElementById("input-calc-score");
    const gpaInput = document.getElementById("input-calc-gpa");
    const tabSat = document.getElementById("calc-tab-sat");
    const tabIelts = document.getElementById("calc-tab-ielts");
    const checkOlympiad = document.getElementById("check-olympiad");
    const checkProjects = document.getElementById("check-projects");
    const checkLeadership = document.getElementById("check-leadership");

    closeBtn?.addEventListener("click", () => this.close());
    overlay?.addEventListener("click", (e) => {
      if (e.target === overlay) this.close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay?.style.display === "flex") {
        this.close();
      }
    });

    tabSat?.addEventListener("click", () => {
      this.examType = "SAT";
      tabSat.style.background = "#0284C7";
      tabSat.style.color = "#FFF";
      tabIelts.style.background = "#E2E8F0";
      tabIelts.style.color = "#475569";

      scoreInput.min = "1000";
      scoreInput.max = "1600";
      scoreInput.step = "10";
      scoreInput.value = this.satScore.toString();
      document.getElementById("score-min-label").textContent = "1000";
      document.getElementById("score-mid-label").textContent = "1350 (Grant)";
      document.getElementById("score-max-label").textContent = "1600";
      document.getElementById("display-score-max").textContent = "/ 1600 Ball";
      document.getElementById("calc-btn-start-mock").textContent = "🎯 SAT Bluebook Mock Testini Boshlash";

      this.updateCalculations();
    });

    tabIelts?.addEventListener("click", () => {
      this.examType = "IELTS";
      tabIelts.style.background = "#059669";
      tabIelts.style.color = "#FFF";
      tabSat.style.background = "#E2E8F0";
      tabSat.style.color = "#475569";

      scoreInput.min = "5.0";
      scoreInput.max = "9.0";
      scoreInput.step = "0.5";
      scoreInput.value = this.ieltsScore.toString();
      document.getElementById("score-min-label").textContent = "5.0";
      document.getElementById("score-mid-label").textContent = "7.0 (Grant)";
      document.getElementById("score-max-label").textContent = "9.0";
      document.getElementById("display-score-max").textContent = "/ 9.0 Band";
      document.getElementById("calc-btn-start-mock").textContent = "🇬🇧 CD-IELTS Mock Testini Boshlash";

      this.updateCalculations();
    });

    scoreInput?.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      if (this.examType === "SAT") {
        this.satScore = Math.round(val);
      } else {
        this.ieltsScore = val;
      }
      this.updateCalculations();
    });

    gpaInput?.addEventListener("input", (e) => {
      this.gpa = parseFloat(e.target.value);
      this.updateCalculations();
    });

    [checkOlympiad, checkProjects, checkLeadership].forEach(chk => {
      chk?.addEventListener("change", () => {
        this.hasOlympiad = !!checkOlympiad?.checked;
        this.hasProjects = !!checkProjects?.checked;
        this.hasLeadership = !!checkLeadership?.checked;
        this.updateCalculations();
      });
    });

    document.getElementById("calc-btn-start-mock")?.addEventListener("click", () => {
      this.close();
      if (this.examType === "SAT") {
        window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH");
      } else {
        window.testCenter?.startOfficialExam("IELTS", null, "IELTS_READING");
      }
    });

    document.getElementById("calc-btn-view-plans")?.addEventListener("click", () => {
      this.close();
      document.getElementById("yu-pricing-section")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  updateCalculations() {
    const scoreVal = this.examType === "SAT" ? this.satScore : this.ieltsScore;
    const scoreEl = document.getElementById("display-score-val");
    if (scoreEl) {
      scoreEl.textContent = this.examType === "SAT" ? scoreVal.toString() : scoreVal.toFixed(1);
      scoreEl.style.color = this.examType === "SAT" ? "#0284C7" : "#059669";
    }

    const gpaEl = document.getElementById("display-gpa-val");
    if (gpaEl) {
      gpaEl.textContent = `${this.gpa.toFixed(1)} / 5.0`;
    }

    // Base probabilities
    let baseIvy = 0;
    let baseUK = 0;
    let baseEU = 0;

    if (this.examType === "SAT") {
      const sat = this.satScore;
      if (sat >= 1550) { baseIvy = 82; baseUK = 90; baseEU = 96; }
      else if (sat >= 1500) { baseIvy = 72; baseUK = 84; baseEU = 92; }
      else if (sat >= 1450) { baseIvy = 58; baseUK = 76; baseEU = 86; }
      else if (sat >= 1400) { baseIvy = 42; baseUK = 68; baseEU = 78; }
      else if (sat >= 1300) { baseIvy = 25; baseUK = 52; baseEU = 66; }
      else { baseIvy = 12; baseUK = 35; baseEU = 50; }
    } else {
      const ielts = this.ieltsScore;
      if (ielts >= 8.5) { baseIvy = 80; baseUK = 92; baseEU = 96; }
      else if (ielts >= 8.0) { baseIvy = 68; baseUK = 86; baseEU = 91; }
      else if (ielts >= 7.5) { baseIvy = 52; baseUK = 78; baseEU = 84; }
      else if (ielts >= 7.0) { baseIvy = 35; baseUK = 65; baseEU = 75; }
      else { baseIvy = 15; baseUK = 40; baseEU = 55; }
    }

    // GPA multiplier
    const gpaBonus = Math.round((this.gpa - 3.0) * 5); // 0 to 10%
    let extraBonus = 0;
    if (this.hasOlympiad) extraBonus += 10;
    if (this.hasProjects) extraBonus += 6;
    if (this.hasLeadership) extraBonus += 5;

    const ivyFinal = Math.min(97, Math.max(10, baseIvy + gpaBonus + extraBonus));
    const ukFinal = Math.min(98, Math.max(15, baseUK + gpaBonus + extraBonus));
    const euFinal = Math.min(99, Math.max(20, baseEU + gpaBonus + extraBonus));

    // Update UI elements
    const ivyPill = document.getElementById("ivy-chance-pill");
    if (ivyPill) ivyPill.textContent = `${ivyFinal}% Ehtimol`;

    const ukPill = document.getElementById("uk-chance-pill");
    if (ukPill) ukPill.textContent = `${ukFinal}% Ehtimol`;

    const euPill = document.getElementById("eu-chance-pill");
    if (euPill) euPill.textContent = `${euFinal}% Ehtimol`;

    // Advice text
    const adviceEl = document.getElementById("calc-advice-text");
    if (adviceEl) {
      if (this.examType === "SAT") {
        if (this.satScore >= 1500) {
          adviceEl.innerHTML = `Sizning <strong>${this.satScore} ballingiz</strong> dunyoning top 1% natijasidir! AQSH Ivy League universitetlaridan to'liq <strong>$340,000 lik 4 yillik to'liq grant</strong> olish ehtimolingiz <strong>${ivyFinal}%</strong>. YU Academy trenajyorlarida muntazam mock topshirib, test tezligini saqlang!`;
        } else if (this.satScore >= 1400) {
          adviceEl.innerHTML = `Hozirgi <strong>${this.satScore} ballingiz</strong> bilan grant ehtimoli <strong>${ivyFinal}%</strong>. YU Academy 44 Math modulida mashq qilib, Math ballingizni 750+ ga chiqarsangiz, grant imkoniyatingiz <strong>85% ga oshadi</strong>!`;
        } else {
          adviceEl.innerHTML = `Boshlang'ich natijangiz yaxshi (${this.satScore} ball). AQSH grantlariga kirish uchun YU Academy Daily Challenge va rasmiy Bluebook testlari yordamida ballingizni 1450+ ga ko'tarish tavsiya etiladi.`;
        }
      } else {
        if (this.ieltsScore >= 8.0) {
          adviceEl.innerHTML = `Ajoyib! <strong>Band ${this.ieltsScore.toFixed(1)}</strong> bilan Buyuk Britaniya va Yevropaning istalgan top universitetiga <strong>${ukFinal}% grant ehtimoli</strong> bilan ariza topshirishingiz mumkin!`;
        } else {
          adviceEl.innerHTML = `Hozirgi <strong>Band ${this.ieltsScore.toFixed(1)}</strong> yaxshi asos. YU Native Shadowing orqali Speaking va Listening ko'rsatkichingizni 8.0+ ga ko'tarsangiz, xalqaro grant ehtimoli <strong>${ukFinal}% ga yetadi</strong>!`;
        }
      }
    }
  }

  open(score = null, type = "SAT") {
    const overlay = document.getElementById("grant-calculator-modal");
    if (!overlay) return;

    if (score) {
      if (type === "SAT") this.satScore = score;
      else this.ieltsScore = score;
      this.examType = type;
    }

    this.updateCalculations();
    overlay.style.display = "flex";
  }

  close() {
    const overlay = document.getElementById("grant-calculator-modal");
    if (overlay) overlay.style.display = "none";
  }
}

// Global initialization
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    if (!window.grantCalculator) {
      window.grantCalculator = new GrantCalculatorManager();
    }
  });
  if (!window.grantCalculator && document.body) {
    window.grantCalculator = new GrantCalculatorManager();
  }
}
