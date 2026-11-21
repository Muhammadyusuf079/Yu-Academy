// YU Academy - Interaktiv Ta'limiy Trenajyorlar va Mini-Game Dvigateli
// Har bir kartochka real ishlovchi qiziqarli o'yin va imtihon trenajyorini ishga tushiradi!

class TopqirGamesManager {
  constructor() {
    this.currentScore = 0;
    this.currentStreak = 0;
    this.timerInterval = null;
    this.createGameModal();
  }

  createGameModal() {
    if (document.getElementById("topqir-game-modal")) return;

    const modal = document.createElement("div");
    modal.id = "topqir-game-modal";
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="game-play-card" id="game-play-card-inner">
        <div class="game-top-bar">
          <div class="game-title-group">
            <span id="game-active-icon" style="font-size: 26px;">🎮</span>
            <h3 id="game-active-title">YU Academy Trenajyori</h3>
          </div>
          <div class="game-stats-pill-row">
            <div class="game-stat-pill" title="To'plangan ball">
              <span>⭐</span> <span id="game-score-val">0</span>
            </div>
            <div class="game-stat-pill" title="Ketma-ket to'g'ri javoblar">
              <span>🔥</span> <span id="game-streak-val">0</span>
            </div>
            <button type="button" class="game-exit-pill-btn" id="btn-exit-game" title="Mashqdan chiqish">🚪 Chiqish</button>
            <button class="auth-card-close-x" id="btn-close-game-modal" title="Chiqish">✕</button>
          </div>
        </div>

        <div class="game-arena-content" id="game-arena-body">
          <!-- Injected dynamically based on game -->
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("btn-close-game-modal")?.addEventListener("click", () => {
      this.closeGame();
    });

    document.getElementById("btn-exit-game")?.addEventListener("click", () => {
      this.closeGame();
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) this.closeGame();
    });
  }

  closeGame() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    document.getElementById("topqir-game-modal")?.classList.remove("active");
    window.app?.notify("Mashg'ulot yakunlandi. Asosiy sahifadasiz. 🏠");
  }

  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  openGame(gameType) {
    this.lastGameType = gameType;
    const modal = document.getElementById("topqir-game-modal");
    if (!modal) return;
    this.currentScore = 0;
    this.currentStreak = 0;
    this.updateStats();
    modal.classList.add("active");

    switch(gameType) {
      case "live":
        this.renderLiveQuiz();
        break;
      case "qaysi-katta":
        this.renderQaysiKatta();
        break;
      case "soz-topish":
        this.renderSozTopish();
        break;
      case "quti-ochish":
        this.renderQutiOchish();
        break;
      case "baliq-ovlash":
        this.renderBaliqOvlash();
        break;
      case "savat":
        this.renderSavat();
        break;
      case "topqir-card":
        this.renderTopqirCard();
        break;
      default:
        this.renderLiveQuiz();
    }
  }

  updateStats() {
    const scoreEl = document.getElementById("game-score-val");
    const streakEl = document.getElementById("game-streak-val");
    if (scoreEl) scoreEl.textContent = this.currentScore;
    if (streakEl) streakEl.textContent = this.currentStreak;
  }

  addScore(pts) {
    this.currentStreak++;
    const bonus = this.currentStreak >= 3 ? 50 : 0;
    this.currentScore += pts + bonus;
    this.updateStats();
  }

  resetStreak() {
    this.currentStreak = 0;
    this.updateStats();
  }

  // 1. YU LIVE ARENA
  renderLiveQuiz() {
    const titleEl = document.getElementById("game-active-title");
    const iconEl = document.getElementById("game-active-icon");
    const arena = document.getElementById("game-arena-body");
    if (titleEl) titleEl.textContent = "YU Live Arena — Jonli Musobaqa";
    if (iconEl) iconEl.textContent = "🏆";

    const pool = [
      {
        q: "Digital SAT Math: Agar 3x + 12 = 33 bo'lsa, x ning qiymati qancha?",
        opts: ["5", "7", "9", "11"],
        correct: 1,
        exp: "3x = 33 - 12 = 21 => x = 7"
      },
      {
        q: "IELTS Vocabulary: 'Substantial' so'zining sinonimi qaysi?",
        opts: ["Tiny", "Significant", "Weak", "Temporary"],
        correct: 1,
        exp: "Substantial = Katta, salmoqli, muhim (Significant)"
      },
      {
        q: "Desmos kalkulyatorida y = ax² + bx + c funksiyasining uchi (vertex) qaysi formula bilan topiladi?",
        opts: ["x = -b / (2a)", "x = -b / a", "x = c / a", "x = 2a / b"],
        correct: 0,
        exp: "Parabola uchi: x = -b / (2a)"
      },
      {
        q: "Digital SAT 2026 imtihonida Math bo'limida nechta savol bor?",
        opts: ["30 ta", "36 ta", "44 ta (22+22)", "54 ta"],
        correct: 2,
        exp: "Digital SAT Math 2 ta moduldan iborat bo'lib, jami 44 ta savoldan iborat."
      },
      {
        q: "SAT Math: Chiziqli funksiya y = 4x - 7 ning y-o'qi bilan kesishish nuqtasi (y-intercept) qaysi?",
        opts: ["(0, 4)", "(0, -7)", "(-7, 0)", "(4, 0)"],
        correct: 1,
        exp: "x = 0 da y = -7, demak (0, -7)"
      },
      {
        q: "IELTS Reading: Muallif matnda 'corroborate' so'zini qo'llasa, u nimani nazarda tutadi?",
        opts: ["Inkor etish", "Tasdiqlash / Dalillash", "Shubha uyg'otish", "Kechiktirish"],
        correct: 1,
        exp: "Corroborate = confirm or give support to (tasdiqlash)"
      },
      {
        q: "SAT Geometry: Doiraning radiusi 6 bo'lsa, uning yuzi (Area) qanchaga teng?",
        opts: ["12π", "18π", "36π", "72π"],
        correct: 2,
        exp: "Area = π·r² = π·6² = 36π"
      },
      {
        q: "IELTS Writing Task 2 da 250 ta so'zdan kam yozish qanday jazoga olib keladi?",
        opts: ["Jazo yo'q", "Task Achievement balidan ball tushiriladi", "To'g'ridan-to'g'ri 0 ball", "Imtihondan chetlatiladi"],
        correct: 1,
        exp: "Underlength javoblar Task Achievement kriteriyasidan past baholanadi."
      },
      {
        q: "SAT Math: Agar f(x) = 2x² - 3x + 1 bo'lsa, f(3) ning qiymati qancha?",
        opts: ["10", "12", "14", "8"],
        correct: 0,
        exp: "f(3) = 2(9) - 3(3) + 1 = 18 - 9 + 1 = 10"
      },
      {
        q: "SAT Vocabulary: 'Pragmatic' so'zi nimani anglatadi?",
        opts: ["Xayolparast", "Amaliy / Realist", "Qo'rqoq", "G'azablangan"],
        correct: 1,
        exp: "Pragmatic = dealing with things sensibly and realistically (amaliy)"
      }
    ];

    const questions = this.shuffle(pool).slice(0, 5);

    let currentQ = 0;

    const showQuestion = (idx) => {
      if (idx >= questions.length) {
        this.renderCelebration("YU Live Arena Musobaqasi Yakunlandi!", this.currentScore);
        return;
      }

      const qObj = questions[idx];
      let timeLeft = 15;

      arena.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <span style="font-size: 13px; font-weight: 700; color: #4F46E5;">Savol ${idx + 1} / ${questions.length}</span>
          <span class="game-stat-pill" style="color: #DC2626; font-size: 14px;">⏱️ <strong id="quiz-timer">${timeLeft}</strong>s</span>
        </div>

        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 18px; padding: 20px; margin-bottom: 20px; text-align: center;">
          <h4 style="font-size: 17px; font-weight: 700; color: #0F172A; line-height: 1.45;">${qObj.q}</h4>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;" id="quiz-opts-grid">
          ${qObj.opts.map((opt, oIdx) => `
            <button class="quiz-opt-btn" data-opt-idx="${oIdx}" style="padding: 14px 18px; border-radius: 14px; border: 1.5px solid #E2E8F0; background: #FFFFFF; font-size: 14px; font-weight: 700; color: #0F172A; cursor: pointer; transition: all 0.15s ease; text-align: left;">
              <span style="display: inline-block; width: 24px; height: 24px; border-radius: 50%; background: #EEF2FF; color: #4F46E5; text-align: center; line-height: 24px; font-size: 12px; margin-right: 8px;">${String.fromCharCode(65 + oIdx)}</span>
              ${opt}
            </button>
          `).join("")}
        </div>
      `;

      if (this.timerInterval) clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => {
        timeLeft--;
        const tEl = document.getElementById("quiz-timer");
        if (tEl) tEl.textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(this.timerInterval);
          this.resetStreak();
          showFeedback(null);
        }
      }, 1000);

      const showFeedback = (selectedIdx) => {
        clearInterval(this.timerInterval);
        const btns = arena.querySelectorAll(".quiz-opt-btn");
        btns.forEach((btn, bIdx) => {
          btn.disabled = true;
          if (bIdx === qObj.correct) {
            btn.style.background = "#ECFDF5";
            btn.style.borderColor = "#10B981";
            btn.style.color = "#065F46";
          } else if (bIdx === selectedIdx) {
            btn.style.background = "#FEF2F2";
            btn.style.borderColor = "#EF4444";
            btn.style.color = "#991B1B";
          }
        });

        const isCorrect = selectedIdx === qObj.correct;
        if (isCorrect) {
          this.addScore(100);
        } else {
          this.resetStreak();
        }

        setTimeout(() => {
          currentQ++;
          showQuestion(currentQ);
        }, 1200);
      };

      arena.querySelectorAll(".quiz-opt-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const idx = parseInt(btn.getAttribute("data-opt-idx"));
          showFeedback(idx);
        });
      });
    };

    showQuestion(0);
  }

  // 2. QAYSI KATTA? (MATH DUEL)
  renderQaysiKatta() {
    const titleEl = document.getElementById("game-active-title");
    const iconEl = document.getElementById("game-active-icon");
    const arena = document.getElementById("game-arena-body");
    if (titleEl) titleEl.textContent = "Qaysi katta? — Raqamlarni Solishtirish";
    if (iconEl) iconEl.textContent = "⚖️";

    const duelPool = [
      { left: "2⁶ (2 darajasi 6)", valA: 64, right: "4³ (4 darajasi 3)", valB: 64, equal: true },
      { left: "√196", valA: 14, right: "3² + 4", valB: 13, bigger: "left" },
      { left: "7 / 8 (0.875)", valA: 0.875, right: "8 / 9 (0.888...)", valB: 0.888, bigger: "right" },
      { left: "5! (5 faktorial)", valA: 120, right: "11² (11 kvadrati)", valB: 121, bigger: "right" },
      { left: "Log₁₀(1000)", valA: 3, right: "√9", valB: 3, equal: true },
      { left: "3⁴ (3 darajasi 4)", valA: 81, right: "2⁷ (2 darajasi 7)", valB: 128, bigger: "right" },
      { left: "√289", valA: 17, right: "2⁴ + 1", valB: 17, equal: true },
      { left: "25% of 240", valA: 60, right: "30% of 180", valB: 54, bigger: "left" },
      { left: "4! (4 faktorial)", valA: 24, right: "5² - 1", valB: 24, equal: true },
      { left: "2¹⁰ (1024)", valA: 1024, right: "10³ (1000)", valB: 1000, bigger: "left" }
    ];

    const pairs = this.shuffle(duelPool).slice(0, 5);

    let pIdx = 0;

    const showPair = (idx) => {
      if (idx >= pairs.length) {
        this.renderCelebration("Barcha solishtirishlarni yechdingiz!", this.currentScore);
        return;
      }

      const p = pairs[idx];
      arena.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
          <span style="font-size: 13px; font-weight: 700; color: #7C3AED;">Topshiriq ${idx + 1} / ${pairs.length}</span>
          <h4 style="font-size: 16px; color: #475569; margin-top: 4px;">Qaysi tarafning qiymati kattaroq?</h4>
        </div>

        <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 16px; align-items: center; margin-bottom: 24px;">
          <button class="duel-box-btn" id="btn-choice-left" style="background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%); border: 2px solid #C7D2FE; border-radius: 20px; padding: 28px 16px; font-size: 19px; font-weight: 800; color: #3730A3; cursor: pointer; transition: all 0.2s ease;">
            ${p.left}
          </button>

          <button id="btn-choice-equal" style="padding: 10px 16px; border-radius: 9999px; background: #F1F5F9; border: 1.5px solid #CBD5E1; font-size: 14px; font-weight: 800; color: #475569; cursor: pointer;">
            Teng (=)
          </button>

          <button class="duel-box-btn" id="btn-choice-right" style="background: linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%); border: 2px solid #FBCFE8; border-radius: 20px; padding: 28px 16px; font-size: 19px; font-weight: 800; color: #9D174D; cursor: pointer; transition: all 0.2s ease;">
            ${p.right}
          </button>
        </div>

        <div id="duel-feedback" style="text-align: center; font-size: 14px; font-weight: 700; min-height: 24px;"></div>
      `;

      const checkAnswer = (userChoice) => {
        let correct = false;
        if (p.equal && userChoice === "equal") correct = true;
        else if (p.bigger === userChoice) correct = true;

        const fb = document.getElementById("duel-feedback");
        if (correct) {
          this.addScore(100);
          if (fb) fb.innerHTML = `<span style="color: #10B981;">To'g'ri topdingiz! +100 ball 🎉</span>`;
        } else {
          this.resetStreak();
          if (fb) fb.innerHTML = `<span style="color: #EF4444;">Noto'g'ri. (${p.left} = ${p.valA}, ${p.right} = ${p.valB})</span>`;
        }

        setTimeout(() => {
          pIdx++;
          showPair(pIdx);
        }, 1100);
      };

      document.getElementById("btn-choice-left")?.addEventListener("click", () => checkAnswer("left"));
      document.getElementById("btn-choice-right")?.addEventListener("click", () => checkAnswer("right"));
      document.getElementById("btn-choice-equal")?.addEventListener("click", () => checkAnswer("equal"));
    };

    showPair(0);
  }

  // 3. SO'Z TOPISH (SCRAMBLED LETTERS)
  renderSozTopish() {
    const titleEl = document.getElementById("game-active-title");
    const iconEl = document.getElementById("game-active-icon");
    const arena = document.getElementById("game-arena-body");
    if (titleEl) titleEl.textContent = "So'z topish — Harflardan So'z Yig'ish";
    if (iconEl) iconEl.textContent = "🅰️";

    const wordPool = [
      { word: "ADAPT", hint: "IELTS & SAT: Yangi sharoitga moslashmoq", letters: ["T", "A", "P", "D", "A"] },
      { word: "FOCUS", hint: "Diqqatni bir joyga jamlash", letters: ["C", "F", "U", "O", "S"] },
      { word: "GENIUS", hint: "O'ta qobiliyatli, daho inson", letters: ["N", "I", "G", "S", "U", "E"] },
      { word: "CRITICAL", hint: "SAT Reading: Tanqidiy va tahliliy qarash", letters: ["C", "I", "R", "T", "I", "L", "A", "C"] },
      { word: "MITIGATE", hint: "IELTS 8.5: Salbiy ta'sirni kamaytirish, yumshatish", letters: ["M", "I", "T", "G", "A", "T", "E", "I"] },
      { word: "SUBTLE", hint: "SAT Vocab: Nozik, sezilar-sezilmas farq", letters: ["S", "U", "B", "T", "L", "E"] },
      { word: "DYNAMIC", hint: "Doimiy harakatdagi, o'zgaruvchan", letters: ["D", "Y", "N", "A", "M", "I", "C"] },
      { word: "EMPIRICAL", hint: "Tajriba va amaliy kuzatuvga asoslangan", letters: ["E", "M", "P", "I", "R", "I", "C", "A", "L"] }
    ];

    const words = this.shuffle(wordPool).slice(0, 4);

    let wIdx = 0;

    const showWord = (idx) => {
      if (idx >= words.length) {
        this.renderCelebration("Barcha so'zlarni muvaffaqiyatli terdingiz!", this.currentScore);
        return;
      }

      const wObj = words[idx];
      let userWord = [];

      arena.innerHTML = `
        <div style="text-align: center; margin-bottom: 16px;">
          <span style="font-size: 13px; font-weight: 700; color: #059669;">So'z ${idx + 1} / ${words.length}</span>
          <p style="font-size: 14px; color: #475569; margin-top: 4px;">💡 Ma'nosi: <strong>${wObj.hint}</strong></p>
        </div>

        <div style="min-height: 56px; border: 2px dashed #CBD5E1; border-radius: 16px; margin-bottom: 24px; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 8px;" id="selected-letters-box">
          <span style="color: #94A3B8; font-size: 14px;">Harflarni bosib so'zni yig'ing...</span>
        </div>

        <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin-bottom: 24px;" id="available-letters-row">
          ${wObj.letters.map((char, cIdx) => `
            <button class="game-letter-btn" data-char="${char}" data-c-idx="${cIdx}" style="width: 48px; height: 48px; border-radius: 14px; background: #FFFFFF; border: 2px solid #E2E8F0; font-size: 18px; font-weight: 800; color: #0F172A; cursor: pointer; transition: all 0.15s ease; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
              ${char}
            </button>
          `).join("")}
        </div>

        <div style="display: flex; justify-content: center; gap: 12px;">
          <button id="btn-reset-letters" style="padding: 10px 18px; border-radius: 9999px; background: #F1F5F9; border: 1px solid #CBD5E1; font-size: 13px; font-weight: 700; cursor: pointer;">
            🔄 Tozalash
          </button>
          <button id="btn-check-word" style="padding: 10px 24px; border-radius: 9999px; background: #059669; color: #fff; border: none; font-size: 13.5px; font-weight: 800; cursor: pointer;">
            Tekshirish ➔
          </button>
        </div>
      `;

      const selBox = document.getElementById("selected-letters-box");

      arena.querySelectorAll(".game-letter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          if (btn.disabled) return;
          const char = btn.getAttribute("data-char");
          userWord.push({ char, btn });
          btn.disabled = true;
          btn.style.opacity = "0.3";

          renderSelection();
        });
      });

      const renderSelection = () => {
        if (userWord.length === 0) {
          selBox.innerHTML = `<span style="color: #94A3B8; font-size: 14px;">Harflarni bosib so'zni yig'ing...</span>`;
          return;
        }

        selBox.innerHTML = userWord.map(item => `
          <span style="width: 40px; height: 40px; border-radius: 10px; background: #ECFDF5; border: 1.5px solid #10B981; color: #065F46; font-size: 18px; font-weight: 800; display: flex; align-items: center; justify-content: center;">
            ${item.char}
          </span>
        `).join("");
      };

      document.getElementById("btn-reset-letters")?.addEventListener("click", () => {
        userWord.forEach(item => {
          item.btn.disabled = false;
          item.btn.style.opacity = "1";
        });
        userWord = [];
        renderSelection();
      });

      document.getElementById("btn-check-word")?.addEventListener("click", () => {
        const assembled = userWord.map(i => i.char).join("");
        if (assembled === wObj.word) {
          this.addScore(150);
          selBox.style.background = "#ECFDF5";
          selBox.style.borderColor = "#10B981";
          window.app?.notify(`Barakalla! "${wObj.word}" so'zi to'g'ri topildi! +150 ball 🎉`);
          setTimeout(() => {
            wIdx++;
            showWord(wIdx);
          }, 1000);
        } else {
          this.resetStreak();
          selBox.style.background = "#FEF2F2";
          selBox.style.borderColor = "#EF4444";
          window.app?.notify("Noto'g'ri yig'ildi. Qaytadan urinib ko'ring!");
        }
      });
    };

    showWord(0);
  }

  // 4. QUTI OCHISH (MYSTERY BOX)
  renderQutiOchish() {
    const titleEl = document.getElementById("game-active-title");
    const iconEl = document.getElementById("game-active-icon");
    const arena = document.getElementById("game-arena-body");
    if (titleEl) titleEl.textContent = "Quti ochish — Sovg'a Qutisini Oching!";
    if (iconEl) iconEl.textContent = "🎁";

    const rewards = [
      { title: "💎 Super Bonus!", desc: "+300 Ball va IELTS Band 8.5 Collocations Lug'ati!", pts: 300, icon: "💎" },
      { title: "🚀 SAT Desmos Master!", desc: "+250 Ball va Kvadrat Tenglamalarni 10s da yechish siri!", pts: 250, icon: "🧮" },
      { title: "🔥 Streak Multiplier!", desc: "+200 Ball va 2X Ball kuchaytirgichi!", pts: 200, icon: "🔥" }
    ];

    arena.innerHTML = `
      <div style="text-align: center; margin-bottom: 24px;">
        <h4 style="font-size: 17px; font-weight: 700; color: #0F172A;">3 ta qutidan birini tanlang va oching:</h4>
        <p style="font-size: 13.5px; color: #64748B;">Har bir quti ichida qimmatli bilim bonusi va ballar mavjud!</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 30px;">
        ${[1, 2, 3].map(num => `
          <button class="mystery-box-btn" data-box-num="${num}" style="background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%); border: 2.5px solid #86EFAC; border-radius: 22px; padding: 34px 14px; text-align: center; cursor: pointer; transition: all 0.25s ease; box-shadow: 0 8px 20px rgba(16, 185, 129, 0.15);">
            <div style="font-size: 46px; margin-bottom: 10px; animation: bounce 2s infinite;">🎁</div>
            <strong style="font-size: 16px; color: #065F46;">Quti #${num}</strong>
          </button>
        `).join("")}
      </div>

      <div id="mystery-result-box" style="text-align: center; min-height: 40px;"></div>
    `;

    arena.querySelectorAll(".mystery-box-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        arena.querySelectorAll(".mystery-box-btn").forEach(b => b.disabled = true);
        const reward = rewards[Math.floor(Math.random() * rewards.length)];
        this.addScore(reward.pts);

        btn.style.transform = "scale(1.08)";
        btn.style.borderColor = "#10B981";

        const resBox = document.getElementById("mystery-result-box");
        if (resBox) {
          resBox.innerHTML = `
            <div style="background: #ECFDF5; border: 1.5px solid #10B981; border-radius: 18px; padding: 18px; animation: fadeIn 0.3s ease;">
              <span style="font-size: 32px;">${reward.icon}</span>
              <h4 style="font-size: 18px; font-weight: 800; color: #065F46; margin: 6px 0;">${reward.title}</h4>
              <p style="font-size: 13.5px; color: #047857; margin-bottom: 12px;">${reward.desc}</p>
              <button class="btn btn-primary" onclick="window.topqirGames.closeGame(); window.app.notify('Yutuq profilingizga qo\\'shildi! 🎉')">Qabul qilish</button>
            </div>
          `;
        }
      });
    });
  }

  // 5. GRID-IN MATH SPRINT
  renderBaliqOvlash() {
    const titleEl = document.getElementById("game-active-title");
    const iconEl = document.getElementById("game-active-icon");
    const arena = document.getElementById("game-arena-body");
    if (titleEl) titleEl.textContent = "Grid-In Math Sprint — Tenglama Ildizini Toping!";
    if (iconEl) iconEl.textContent = "⚡";

    const stagesPool = [
      { eq: "2x + 8 = 24  =>  x = ?", correct: 8, fishes: [6, 8, 12, 16] },
      { eq: "x² - 25 = 0 (musbat x)  =>  x = ?", correct: 5, fishes: [3, 5, 10, 25] },
      { eq: "3(x - 2) = 15  =>  x = ?", correct: 7, fishes: [4, 7, 9, 11] },
      { eq: "5x - 7 = 33  =>  x = ?", correct: 8, fishes: [6, 7, 8, 9] },
      { eq: "x² - 49 = 0 (musbat x)  =>  x = ?", correct: 7, fishes: [5, 7, 14, 49] },
      { eq: "4x + 12 = 40  =>  x = ?", correct: 7, fishes: [6, 7, 8, 10] },
      { eq: "2(x + 5) = 28  =>  x = ?", correct: 9, fishes: [8, 9, 11, 14] },
      { eq: "√x = 6  =>  x = ?", correct: 36, fishes: [12, 24, 36, 48] }
    ];

    const stages = this.shuffle(stagesPool).slice(0, 4);

    let stIdx = 0;

    const showStage = (idx) => {
      if (idx >= stages.length) {
        this.renderCelebration("Ajoyib! Barcha tenglama ildizlarini to'g'ri topdingiz!", this.currentScore);
        return;
      }

      const st = stages[idx];
      arena.innerHTML = `
        <div style="text-align: center; margin-bottom: 16px;">
          <span style="font-size: 13px; font-weight: 700; color: #0284C7;">Sprint Bosqichi ${idx + 1} / ${stages.length}</span>
          <div style="background: #E0F2FE; border: 1.5px solid #BAE6FD; border-radius: 16px; padding: 14px; margin-top: 8px;">
            <h4 style="font-size: 18px; font-weight: 800; font-family: var(--font-mono); color: #0369A1;">${st.eq}</h4>
          </div>
        </div>

        <div style="background: linear-gradient(180deg, #E0F2FE 0%, #0284C7 100%); border-radius: 22px; padding: 30px 20px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 16px; position: relative;">
          ${st.fishes.map(num => `
            <button class="fish-btn" data-val="${num}" style="background: rgba(255,255,255,0.95); border: 2px solid #BAE6FD; border-radius: 18px; padding: 18px 12px; font-size: 22px; font-weight: 900; color: #0369A1; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
              <span>🎯</span>
              <span>${num}</span>
            </button>
          `).join("")}
        </div>

        <div id="fishing-feedback" style="text-align: center; min-height: 24px; font-size: 14px; font-weight: 700;"></div>
      `;

      arena.querySelectorAll(".fish-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const val = parseInt(btn.getAttribute("data-val"));
          const fb = document.getElementById("fishing-feedback");
          arena.querySelectorAll(".fish-btn").forEach(b => b.disabled = true);

          if (val === st.correct) {
            btn.style.background = "#ECFDF5";
            btn.style.borderColor = "#10B981";
            btn.style.color = "#065F46";
            this.addScore(120);
            if (fb) fb.innerHTML = `<span style="color: #0284C7;">Qoyilmaqom tezkorlik! To'g'ri ildiz: ${val}! +120 ball ⚡</span>`;
          } else {
            btn.style.background = "#FEF2F2";
            btn.style.borderColor = "#EF4444";
            btn.style.color = "#991B1B";
            this.resetStreak();
            if (fb) fb.innerHTML = `<span style="color: #DC2626;">Noto'g'ri qiymat tanlandi. To'g'ri javob: ${st.correct}</span>`;
          }

          setTimeout(() => {
            stIdx++;
            showStage(stIdx);
          }, 1100);
        });
      });
    };

    showStage(0);
  }

  // 6. VOCAB CLASSIFIER
  renderSavat() {
    const titleEl = document.getElementById("game-active-title");
    const iconEl = document.getElementById("game-active-icon");
    const arena = document.getElementById("game-arena-body");
    if (titleEl) titleEl.textContent = "Vocab Classifier — SAT va IELTS Terminlari";
    if (iconEl) iconEl.textContent = "🎯";

    const itemsPool = [
      { word: "Quadratic Equation", target: "SAT" },
      { word: "Speaking Cue Card", target: "IELTS" },
      { word: "Desmos Parabola", target: "SAT" },
      { word: "Academic Writing Task 2", target: "IELTS" },
      { word: "Standard Deviation", target: "SAT" },
      { word: "Lexical Resource", target: "IELTS" },
      { word: "Exponential Growth Model", target: "SAT" },
      { word: "Coherence and Cohesion", target: "IELTS" },
      { word: "Circle Equation (x-h)²+(y-k)²=r²", target: "SAT" },
      { word: "Listening Multiple Choice", target: "IELTS" },
      { word: "System of Linear Equations", target: "SAT" },
      { word: "Fluency and Pronunciation", target: "IELTS" }
    ];

    const items = this.shuffle(itemsPool).slice(0, 5);

    let iIdx = 0;

    const showItem = (idx) => {
      if (idx >= items.length) {
        this.renderCelebration("Barcha tushunchalar to'g'ri savatlarga solindi!", this.currentScore);
        return;
      }

      const item = items[idx];
      arena.innerHTML = `
        <div style="text-align: center; margin-bottom: 16px;">
          <span style="font-size: 13px; font-weight: 700; color: #EA580C;">Saralash ${idx + 1} / ${items.length}</span>
          <p style="font-size: 14px; color: #475569; margin-top: 4px;">Ushbu atama qaysi imtihon savatiga tegishli?</p>
        </div>

        <div style="background: #FFF7ED; border: 2px solid #FED7AA; border-radius: 18px; padding: 22px; text-align: center; margin-bottom: 24px;">
          <strong style="font-size: 20px; color: #C2410C;">"${item.word}"</strong>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <button class="basket-btn" data-target="SAT" style="background: #EEF2FF; border: 2px solid #C7D2FE; border-radius: 20px; padding: 24px 16px; text-align: center; cursor: pointer; transition: all 0.2s ease;">
            <div style="font-size: 34px; margin-bottom: 6px;">🧺 🎯</div>
            <strong style="font-size: 16px; color: #3730A3;">SAT Savati</strong>
          </button>

          <button class="basket-btn" data-target="IELTS" style="background: #ECFDF5; border: 2px solid #A7F3D0; border-radius: 20px; padding: 24px 16px; text-align: center; cursor: pointer; transition: all 0.2s ease;">
            <div style="font-size: 34px; margin-bottom: 6px;">🧺 🇬🇧</div>
            <strong style="font-size: 16px; color: #065F46;">IELTS Savati</strong>
          </button>
        </div>
      `;

      arena.querySelectorAll(".basket-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const chosen = btn.getAttribute("data-target");
          arena.querySelectorAll(".basket-btn").forEach(b => b.disabled = true);

          if (chosen === item.target) {
            btn.style.borderColor = "#10B981";
            this.addScore(100);
            window.app?.notify(`To'g'ri savat! "${item.word}" ➔ ${chosen}! +100 ball ✨`);
          } else {
            btn.style.borderColor = "#EF4444";
            this.resetStreak();
            window.app?.notify(`Noto'g'ri savat. "${item.word}" ➔ ${item.target} ga tegishli.`);
          }

          setTimeout(() => {
            iIdx++;
            showItem(iIdx);
          }, 900);
        });
      });
    };

    showItem(0);
  }

  // 7. YU SPEAKING FLASHCARD
  renderTopqirCard() {
    const titleEl = document.getElementById("game-active-title");
    const iconEl = document.getElementById("game-active-icon");
    const arena = document.getElementById("game-arena-body");
    if (titleEl) titleEl.textContent = "Speaking Cards — Flashcard & Speaking";
    if (iconEl) iconEl.textContent = "🎴";

    const cardPool = [
      { front: "What is an 'Algorithm'?", back: "A step-by-step procedure for solving a problem or performing a task.", topic: "SAT Computer & Logic" },
      { front: "Describe a memorable journey you took.", back: "Cue Card Tip: Talk about where you went, with whom, what you did, and why it was memorable using vivid adjectives (breathtaking, unforgettable).", topic: "IELTS Speaking Part 2" },
      { front: "Formula for the area of a circle?", back: "Area = π · r²  (College Board 공식 Formulalar Jadvali)", topic: "SAT Math Geometry" },
      { front: "Describe an environmental problem in your city.", back: "Cue Card Tip: Highlight air pollution or urban waste, causes (vehicular emissions), and actionable solutions (green energy, cycling lanes).", topic: "IELTS Speaking Part 2" },
      { front: "What is the Vertex Form of a quadratic parabola?", back: "y = a(x - h)² + k, where (h, k) is the vertex.", topic: "SAT Math Algebra" },
      { front: "Describe a person who inspired you to learn English.", back: "Cue Card Tip: Mention who they are, how they influenced your vocabulary and habits, and the long-term impact on your goals.", topic: "IELTS Speaking Part 2" }
    ];

    const cards = this.shuffle(cardPool).slice(0, 4);

    let cIdx = 0;
    let isFlipped = false;

    const showCard = (idx) => {
      if (idx >= cards.length) {
        this.renderCelebration("Barcha kartochkalarni o'rganib chiqdingiz!", this.currentScore);
        return;
      }

      const c = cards[idx];
      isFlipped = false;

      arena.innerHTML = `
        <div style="text-align: center; margin-bottom: 16px;">
          <span style="font-size: 13px; font-weight: 700; color: #7C3AED;">Kartochka ${idx + 1} / ${cards.length} • ${c.topic}</span>
          <p style="font-size: 13px; color: #64748B;">Javobni ko'rish uchun kartochkani bosing:</p>
        </div>

        <div id="flip-card-box" style="background: linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%); border: 2px solid #DDD6FE; border-radius: 24px; padding: 40px 24px; text-align: center; min-height: 180px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(124, 58, 237, 0.12);">
          <span style="font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: #7C3AED; margin-bottom: 12px;">Savol / Tushuncha (O'girish uchun bosing 🔄)</span>
          <h4 style="font-size: 20px; font-weight: 800; color: #4C1D95; line-height: 1.4;" id="card-inner-text">${c.front}</h4>
        </div>

        <div style="display: flex; justify-content: center; gap: 12px; margin-top: 24px;">
          <button id="btn-card-known" style="padding: 10px 22px; border-radius: 9999px; background: #10B981; color: #fff; border: none; font-size: 13.5px; font-weight: 800; cursor: pointer;">
            Bilar edim (+100) 👍
          </button>
          <button id="btn-card-next" style="padding: 10px 22px; border-radius: 9999px; background: #F1F5F9; border: 1.5px solid #CBD5E1; font-size: 13.5px; font-weight: 700; cursor: pointer;">
            Keyingisi ➔
          </button>
        </div>
      `;

      const cardBox = document.getElementById("flip-card-box");
      const cardText = document.getElementById("card-inner-text");

      cardBox?.addEventListener("click", () => {
        isFlipped = !isFlipped;
        if (isFlipped) {
          cardBox.style.background = "#ECFDF5";
          cardBox.style.borderColor = "#A7F3D0";
          cardText.style.color = "#065F46";
          cardText.textContent = c.back;
        } else {
          cardBox.style.background = "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)";
          cardBox.style.borderColor = "#DDD6FE";
          cardText.style.color = "#4C1D95";
          cardText.textContent = c.front;
        }
      });

      document.getElementById("btn-card-known")?.addEventListener("click", () => {
        this.addScore(100);
        cIdx++;
        showCard(cIdx);
      });

      document.getElementById("btn-card-next")?.addEventListener("click", () => {
        cIdx++;
        showCard(cIdx);
      });
    };

    showCard(0);
  }

  // CELEBRATION SCREEN
  renderCelebration(msg, score) {
    // Real-time tests counter increment (+1)
    window.statsManager?.incrementTests(1, "Interaktiv Mashq");

    const arena = document.getElementById("game-arena-body");
    if (!arena) return;

    arena.innerHTML = `
      <div style="text-align: center; padding: 24px 10px;">
        <div style="font-size: 54px; margin-bottom: 12px;">🏆</div>
        <h3 style="font-size: 22px; font-weight: 800; color: #0F172A; margin-bottom: 8px;">Ajoyib Natija!</h3>
        <p style="font-size: 14.5px; color: #64748B; margin-bottom: 20px;">${msg}</p>
        
        <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 20px; padding: 18px; max-width: 260px; margin: 0 auto 24px auto;">
          <span style="font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase;">To'plangan Ball:</span>
          <h2 style="font-size: 38px; font-weight: 900; font-family: var(--font-mono); color: #4F46E5; margin: 4px 0;">+${score}</h2>
          <span style="font-size: 12px; color: #10B981; font-weight: 700;">🟢 YU Academy Reytingingiz Ko'tarildi!</span>
        </div>

        <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
          <button class="btn btn-secondary" id="btn-replay-fresh-game">
            🔄 Yangi savollar bilan qayta o'ynash
          </button>
          <button class="btn btn-primary" onclick="window.topqirGames.closeGame(); window.app.notify('Ballaringiz profilingizga qo\\'shildi! 🚀')">
            Yopish va Davom Etish
          </button>
        </div>
      </div>
    `;

    document.getElementById("btn-replay-fresh-game")?.addEventListener("click", () => {
      window.app?.notify("🎯 Yangi variant yuklandi! Savollar takrorlanmaydi.");
      this.openGame(this.lastGameType || "live");
    });
  }
}

// Global initialization
window.topqirGames = window.yuGames = new TopqirGamesManager();
