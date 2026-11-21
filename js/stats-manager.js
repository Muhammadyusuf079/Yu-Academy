// YU Academy - Real-Time Dynamic Platform Statistics Manager
// Boshlang'ich 100+ o'quvchi va har bir ro'yxatdan o'tishda +1 ga oshuvchi real hisoblagich

class StatsManager {
  constructor() {
    this.storageKey = "yu_platform_stats_v6";
    this.stats = {
      studentsCount: 100,
      testsCompleted: 48,
      questionsCount: 1850,
      teachersCount: 14,
      satHighest: "1560 / 1600",
      ieltsHighest: "8.5 / 9.0",
      grantsWon: "99.2%",
      successRate: "96.4%",
      uptime: "99.9%"
    };
    this.hasAnimated = false;
    this.init();
  }

  init() {
    this.loadStats();
    this.renderAll();
    this.setupIntersectionObserver();
  }

  loadStats() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.studentsCount === "number" && parsed.studentsCount >= 100 && parsed.studentsCount < 50000) {
          this.stats.studentsCount = parsed.studentsCount;
        } else {
          this.stats.studentsCount = 100;
        }
        if (typeof parsed.testsCompleted === "number") {
          this.stats.testsCompleted = parsed.testsCompleted;
        }
        if (typeof parsed.questionsCount === "number") {
          this.stats.questionsCount = parsed.questionsCount;
        }
      } else {
        this.stats.studentsCount = 100;
        this.saveStats();
      }
    } catch (e) {
      this.stats.studentsCount = 100;
    }
  }

  saveStats() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.stats));
    } catch (e) {}
  }

  format(num, suffix = "+") {
    return Number(num).toLocaleString("en-US") + suffix;
  }

  animateNumber(el, start, end, duration = 1200, prefix = "", suffix = "+") {
    if (!el) return;
    const startTime = performance.now();
    const range = end - start;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + range * ease);
      el.textContent = `${prefix}${current.toLocaleString("en-US")}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = `${prefix}${end.toLocaleString("en-US")}${suffix}`;
      }
    };

    requestAnimationFrame(tick);
  }

  setupIntersectionObserver() {
    if (this.hasAnimated) return;
    const targetSection = document.getElementById("real-stats-section");
    if (!targetSection) {
      this.triggerCountUp();
      return;
    }

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.triggerCountUp();
            observer.disconnect();
          }
        });
      }, { threshold: 0.15 });
      observer.observe(targetSection);
    } else {
      this.triggerCountUp();
    }
  }

  triggerCountUp() {
    const elStudents = document.getElementById("real-stat-students");
    const elTests = document.getElementById("real-stat-tests");
    const elQuestions = document.getElementById("real-stat-questions");
    const elTeachers = document.getElementById("real-stat-teachers");
    const heroStudents = document.getElementById("hero-students-count");
    const heroTests = document.getElementById("hero-stat-tests");

    if (elStudents) this.animateNumber(elStudents, 0, this.stats.studentsCount, 1200, "", "+");
    if (elTests) this.animateNumber(elTests, 0, this.stats.testsCompleted, 1200, "", "+");
    if (elQuestions) this.animateNumber(elQuestions, 0, this.stats.questionsCount, 1200, "", "+");
    if (elTeachers) this.animateNumber(elTeachers, 0, this.stats.teachersCount, 1000, "", "+");
    if (heroStudents) this.animateNumber(heroStudents, 0, this.stats.studentsCount, 1200, "", "+");
    if (heroTests) this.animateNumber(heroTests, 0, this.stats.testsCompleted, 1200, "", "+");
  }

  incrementStudents(amount = 1, userName = "") {
    this.stats.studentsCount += amount;
    this.saveStats();
    this.renderAll("students");

    // Celebratory visual effect on hero pill and real-stat card
    const heroPill = document.querySelector(".topqir-students-counter-pill");
    if (heroPill) {
      this.spawnFloatingEffect(heroPill, `+${amount} o'quvchi!`);
    }
    const realStatCard = document.getElementById("real-stat-students");
    if (realStatCard) {
      this.spawnFloatingEffect(realStatCard, `+${amount}`);
    }

    const toastMsg = userName 
      ? `🎉 Tabriklaymiz, ${userName}! YU Academy safimizga qo'shildi (+1). Jami: ${this.format(this.stats.studentsCount)}`
      : `🎉 Yangi o'quvchi ro'yxatdan o'tdi (+1)! Jami: ${this.format(this.stats.studentsCount)}`;
    
    window.app?.notify(toastMsg);
  }

  incrementTests(amount = 1, testName = "") {
    this.stats.testsCompleted += amount;
    this.saveStats();
    this.renderAll("tests");

    const statCard = document.getElementById("real-stat-tests");
    if (statCard) {
      this.spawnFloatingEffect(statCard, `+${amount} test!`);
    }
    const heroStat = document.getElementById("hero-stat-tests");
    if (heroStat) {
      this.spawnFloatingEffect(heroStat, `+${amount}`);
    }

    if (testName) {
      window.app?.notify(`📝 Yangi test muvaffaqiyatli topshirildi: ${testName} (+1)!`);
    }
  }

  incrementQuestions(amount = 1) {
    this.stats.questionsCount += amount;
    this.saveStats();
    this.renderAll("questions");
  }

  renderAll(animatedKey = null) {
    const studentsFormatted = this.format(this.stats.studentsCount);
    const testsFormatted = this.format(this.stats.testsCompleted);
    const questionsFormatted = this.format(this.stats.questionsCount);
    const teachersFormatted = this.format(this.stats.teachersCount);

    // 1. Hero Pill & Bottom Stats
    this.updateElement("hero-students-count", studentsFormatted, animatedKey === "students");
    this.updateElement("hero-stat-tests", testsFormatted, animatedKey === "tests");
    this.updateElement("hero-stat-modules", "1,850+", false);
    this.updateElement("hero-stat-questions", "99.2%", false);

    // 2. Real Stats Cards
    this.updateElement("real-stat-students", studentsFormatted, animatedKey === "students");
    this.updateElement("real-stat-tests", testsFormatted, animatedKey === "tests");
    this.updateElement("real-stat-questions", questionsFormatted, animatedKey === "questions");
    this.updateElement("real-stat-teachers", teachersFormatted, animatedKey === "teachers");
    this.updateElement("real-stat-sat-highest", this.stats.satHighest, false);
    this.updateElement("real-stat-grants", this.stats.grantsWon, false);

    // 3. Auth Modal Banner Pill
    this.updateElement("auth-modal-students-count", studentsFormatted, animatedKey === "students");
  }

  updateElement(id, text, animate = false) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = text;
    if (animate) {
      el.classList.remove("num-tick-anim");
      void el.offsetWidth;
      el.classList.add("num-tick-anim");
    }
  }

  spawnFloatingEffect(anchorEl, text) {
    if (!anchorEl) return;
    const badge = document.createElement("span");
    badge.className = "floating-plus-one";
    badge.textContent = text;
    badge.style.left = "50%";
    badge.style.top = "-12px";
    if (getComputedStyle(anchorEl).position === "static") {
      anchorEl.style.position = "relative";
    }
    anchorEl.appendChild(badge);

    setTimeout(() => {
      badge.remove();
    }, 1300);
  }
}

// Global instance
window.statsManager = new StatsManager();
