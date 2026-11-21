// ===================================================================
// YU ACADEMY - 2026 KUNLIK MAQSAD VA REAL ACTIVITY TRACKER
// Real-time tracking: foydalanuvchining haqiqiy mashq vaqtini normaga nisbatan hisoblash
// ===================================================================

const INTENSITY_CONFIG_2026 = {
  easy: {
    label: "Yengil (15)",
    quizTarget: 15,
    quizTitle: "15 ta SAT yoki IELTS savolini ishlash",
    shadowTargetMinutes: 5,
    shadowTitle: "5 daqiqa Native Shadowing talaffuzi",
    vocabTarget: 3,
    vocabTitle: "3 ta yangi akademik so'z o'rganish"
  },
  medium: {
    label: "O'rtacha (25)",
    quizTarget: 25,
    quizTitle: "25 ta SAT yoki IELTS savolini ishlash",
    shadowTargetMinutes: 10,
    shadowTitle: "10 daqiqa Native Shadowing talaffuzi",
    vocabTarget: 5,
    vocabTitle: "5 ta yangi akademik so'z o'rganish"
  },
  intensive: {
    label: "Intensiv (50)",
    quizTarget: 50,
    quizTitle: "50 ta intensiv SAT/IELTS savolini ishlash",
    shadowTargetMinutes: 15,
    shadowTitle: "15 daqiqa Native Shadowing talaffuzi",
    vocabTarget: 10,
    vocabTitle: "10 ta yangi akademik so'z o'rganish"
  }
};

class GoalTrackerManager {
  constructor() {
    this.intensity = "medium"; // easy, medium, intensive
    this.cleanLegacyMockState();
    this.loadSavedIntensity();
    this.init();
  }

  getTodayDate() {
    return new Date().toISOString().slice(0, 10);
  }

  getStorageKey() {
    return `yu_daily_activity_${this.getTodayDate()}`;
  }

  // Remove old static mock completion state if present
  cleanLegacyMockState() {
    try {
      const oldState = localStorage.getItem("yu_daily_goal_state_2026");
      if (oldState) {
        // Remove legacy mock state so real calculations take precedence
        localStorage.removeItem("yu_daily_goal_state_2026");
      }
    } catch (e) {}
  }

  loadSavedIntensity() {
    try {
      const saved = localStorage.getItem("yu_goal_intensity_2026");
      if (saved && INTENSITY_CONFIG_2026[saved]) {
        this.intensity = saved;
      }
    } catch (e) {}
  }

  saveIntensity() {
    try {
      localStorage.setItem("yu_goal_intensity_2026", this.intensity);
    } catch (e) {}
  }

  // Real daily user activity from localStorage
  getActivity() {
    const key = this.getStorageKey();
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          shadowingSeconds: Math.max(0, Number(parsed.shadowingSeconds) || 0),
          questionsSolved: Math.max(0, Number(parsed.questionsSolved) || 0),
          vocabLearned: Math.max(0, Number(parsed.vocabLearned) || 0),
          manualCompleted: parsed.manualCompleted || {}
        };
      }
    } catch (e) {}

    return {
      shadowingSeconds: 0,
      questionsSolved: 0,
      vocabLearned: 0,
      manualCompleted: {}
    };
  }

  saveActivity(act) {
    const key = this.getStorageKey();
    try {
      localStorage.setItem(key, JSON.stringify(act));
    } catch (e) {}
  }

  // API to record real user actions across the app
  recordShadowingSeconds(seconds) {
    if (!seconds || isNaN(seconds) || seconds <= 0) return;
    const act = this.getActivity();
    act.shadowingSeconds = Math.round(act.shadowingSeconds + seconds);
    this.saveActivity(act);
    this.update();
  }

  recordQuestionsSolved(count = 1) {
    if (!count || isNaN(count) || count <= 0) return;
    const act = this.getActivity();
    act.questionsSolved += count;
    this.saveActivity(act);
    this.update();
  }

  recordVocabLearned(count = 1) {
    if (!count || isNaN(count) || count <= 0) return;
    const act = this.getActivity();
    act.vocabLearned += count;
    this.saveActivity(act);
    this.update();
  }

  init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.mount());
    } else {
      this.mount();
    }
  }

  mount() {
    const mountPoint = document.getElementById("daily-goal-tracker-mount");
    if (!mountPoint) return;
    this.render(mountPoint);
  }

  update() {
    const mountPoint = document.getElementById("daily-goal-tracker-mount");
    if (mountPoint) {
      this.render(mountPoint);
    }
    const percent = this.calculatePercent();
    if (percent === 100) {
      window.xpManager?.recordDailyPlanComplete(this.intensity);
    }
  }

  setIntensity(level) {
    if (!INTENSITY_CONFIG_2026[level]) return;
    this.intensity = level;
    this.saveIntensity();
    this.update();
  }

  // Calculate each task's real progress and ratio relative to the target norm
  getCalculatedTasks() {
    const config = INTENSITY_CONFIG_2026[this.intensity] || INTENSITY_CONFIG_2026.medium;
    const act = this.getActivity();

    // 1. SAT / IELTS Questions
    const quizActual = act.questionsSolved;
    const quizTarget = config.quizTarget;
    const quizManuallyChecked = Boolean(act.manualCompleted?.["task-quiz"]);
    const quizRatio = quizManuallyChecked ? 1.0 : Math.min(1.0, quizActual / quizTarget);
    const quizCompleted = quizManuallyChecked || (quizActual >= quizTarget);

    // 2. Native Shadowing (exact minutes and ratio to norm)
    const targetShadowSec = config.shadowTargetMinutes * 60;
    const shadowSec = act.shadowingSeconds;
    const shadowMinutes = Math.floor(shadowSec / 60);
    const shadowManuallyChecked = Boolean(act.manualCompleted?.["task-shadow"]);
    const shadowRatio = shadowManuallyChecked ? 1.0 : Math.min(1.0, shadowSec / targetShadowSec);
    const shadowCompleted = shadowManuallyChecked || (shadowSec >= targetShadowSec);

    // Shadowing progress label: e.g. "8 / 10 daqiqa" or if under 1 min: "45s / 10 daqiqa"
    let shadowProgressStr = `${shadowMinutes} / ${config.shadowTargetMinutes} daqiqa`;
    if (shadowMinutes === 0 && shadowSec > 0) {
      shadowProgressStr = `${shadowSec} sek / ${config.shadowTargetMinutes} daqiqa`;
    }

    // 3. Academic Vocabulary
    const vocabActual = act.vocabLearned;
    const vocabTarget = config.vocabTarget;
    const vocabManuallyChecked = Boolean(act.manualCompleted?.["task-vocab"]);
    const vocabRatio = vocabManuallyChecked ? 1.0 : Math.min(1.0, vocabActual / vocabTarget);
    const vocabCompleted = vocabManuallyChecked || (vocabActual >= vocabTarget);

    return [
      {
        id: "task-quiz",
        title: config.quizTitle,
        actual: quizActual,
        target: quizTarget,
        ratio: quizRatio,
        progress: `${quizActual} / ${quizTarget}`,
        completed: quizCompleted,
        action: () => window.testCenter?.startOfficialExam("SAT", null, "SAT_MATH")
      },
      {
        id: "task-shadow",
        title: config.shadowTitle,
        actualSeconds: shadowSec,
        actualMinutes: shadowMinutes,
        targetMinutes: config.shadowTargetMinutes,
        ratio: shadowRatio,
        progress: shadowProgressStr,
        completed: shadowCompleted,
        action: () => window.shadowingTrainer?.openTrainer()
      },
      {
        id: "task-vocab",
        title: config.vocabTitle,
        actual: vocabActual,
        target: vocabTarget,
        ratio: vocabRatio,
        progress: `${vocabActual} / ${vocabTarget} so'z`,
        completed: vocabCompleted,
        action: () => window.academicDictionary?.open()
      }
    ];
  }

  // Overall completion percentage: exact average of the 3 ratios relative to their norms
  calculatePercent() {
    const tasks = this.getCalculatedTasks();
    const sumRatios = tasks.reduce((acc, t) => acc + t.ratio, 0);
    return Math.min(100, Math.round((sumRatios / tasks.length) * 100));
  }

  toggleTask(taskId) {
    const act = this.getActivity();
    if (!act.manualCompleted) act.manualCompleted = {};

    const currentlyChecked = Boolean(act.manualCompleted[taskId]);
    if (currentlyChecked) {
      delete act.manualCompleted[taskId];
    } else {
      act.manualCompleted[taskId] = true;
    }

    this.saveActivity(act);
    this.update();

    const percent = this.calculatePercent();
    if (percent === 100) {
      window.xpManager?.recordDailyPlanComplete(this.intensity);
    } else {
      window.soundFx?.playClick?.();
    }
  }

  runTaskAction(taskId) {
    const tasks = this.getCalculatedTasks();
    const task = tasks.find(t => t.id === taskId);
    if (task && typeof task.action === "function") {
      task.action();
    }
  }

  render(container) {
    const tasks = this.getCalculatedTasks();
    const percent = this.calculatePercent();
    const circumference = 2 * Math.PI * 50; // r=50 -> ~314.16
    const offset = circumference - (percent / 100) * circumference;

    container.innerHTML = `
      <div class="daily-goal-tracker-card">
        <!-- HEADER -->
        <div class="goal-tracker-header">
          <div class="goal-title-wrap">
            <div class="goal-icon-badge">🎯</div>
            <div class="goal-titles">
              <h4>Bugungi Kunlik Maqsad & Reja</h4>
              <p>Har kungi muntazamlik — 1500+ SAT va 8.5 IELTS kaliti • Rejani yakunlab +200, +350 yoki +450 XP oling!</p>
            </div>
          </div>

          <!-- INTENSITY SWITCHER -->
          <div class="goal-level-switcher">
            <button type="button" class="goal-level-btn ${this.intensity === 'easy' ? 'active' : ''}" onclick="window.goalTracker.setIntensity('easy')">Yengil (15) • +200 XP</button>
            <button type="button" class="goal-level-btn ${this.intensity === 'medium' ? 'active' : ''}" onclick="window.goalTracker.setIntensity('medium')">O'rtacha (25) • +350 XP</button>
            <button type="button" class="goal-level-btn ${this.intensity === 'intensive' ? 'active' : ''}" onclick="window.goalTracker.setIntensity('intensive')">Intensiv (50) • +450 XP</button>
          </div>
        </div>

        <!-- BODY WITH SVG PROGRESS RING AND TASKS -->
        <div class="goal-tracker-body">
          <!-- RING -->
          <div class="goal-progress-ring-wrap" style="width: 120px; height: 120px; max-width: 120px; max-height: 120px; position: relative; margin: 0 auto; flex-shrink: 0;">
            <svg class="goal-ring-svg" width="120" height="120" viewBox="0 0 120 120" style="width: 120px; height: 120px; max-width: 120px; max-height: 120px; display: block; transform: rotate(-90deg);">
              <defs>
                <linearGradient id="goalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#10B981" />
                  <stop offset="100%" stop-color="#059669" />
                </linearGradient>
              </defs>
              <circle class="goal-ring-bg" cx="60" cy="60" r="50" fill="none" stroke="#E2E8F0" stroke-width="10" style="fill: none; stroke: #E2E8F0; stroke-width: 10px;"></circle>
              <circle class="goal-ring-fill" cx="60" cy="60" r="50" fill="none" stroke="url(#goalGradient)" stroke-width="10" stroke-linecap="round" stroke-dasharray="314.16" style="fill: none; stroke: url(#goalGradient); stroke-width: 10px; stroke-dashoffset: ${offset}; stroke-linecap: round; stroke-dasharray: 314.16; transition: stroke-dashoffset 0.8s ease;"></circle>
            </svg>
            <div class="goal-ring-center-text">
              <span class="goal-percent-number">${percent}%</span>
              <span class="goal-percent-label">${percent === 100 ? 'Bajarildi!' : 'Progress'}</span>
            </div>
          </div>

          <!-- TASK ITEMS -->
          <div class="goal-tasks-list">
            ${tasks.map(t => `
              <div class="goal-task-item ${t.completed ? 'completed' : ''}">
                <div class="goal-task-info" onclick="window.goalTracker.toggleTask('${t.id}')">
                  <div class="goal-task-check">${t.completed ? '✓' : ''}</div>
                  <span class="goal-task-name">${t.title}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="goal-task-progress">${t.progress}</span>
                  <button type="button" class="btn-sm-pill" onclick="event.stopPropagation(); window.goalTracker.runTaskAction('${t.id}')" style="background: #EEF2FF; color: #4F46E5; font-size: 11px; font-weight: 800; border: none; padding: 4px 10px; border-radius: 999px; cursor: pointer;" title="Topshiriqni bajarish">➔ O'tish</button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }
}

// Global initialization
if (typeof window !== "undefined") {
  window.goalTracker = new GoalTrackerManager();
}
