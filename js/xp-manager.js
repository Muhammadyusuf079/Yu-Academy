// ===================================================================
// YU ACADEMY - 2026 XP, STREAK & GAMIFICATION MANAGER
// Real-time XP tracking, daily goal rewards (+200, +350, +450 XP),
// and tariff subscription redemption (Plus: 7k, Pro: 11k, Premium: 15k)
// ===================================================================

class XPManager {
  constructor() {
    this.xp = this.loadXP();
    this.streak = this.loadStreak();
    this.lastStreakDate = this.loadLastStreakDate();
    this.claimedPlans = this.loadClaimedPlans();
    this.init();
  }

  loadXP() {
    try {
      const val = localStorage.getItem("yu_user_xp");
      if (val !== null && !isNaN(Number(val))) {
        return Math.max(0, parseInt(val, 10));
      }
    } catch (e) {}
    // Default initial starting XP
    return 1450;
  }

  saveXP() {
    try {
      localStorage.setItem("yu_user_xp", this.xp.toString());
    } catch (e) {}
  }

  loadStreak() {
    try {
      const val = localStorage.getItem("yu_user_streak");
      if (val !== null && !isNaN(Number(val))) {
        return Math.max(1, parseInt(val, 10));
      }
    } catch (e) {}
    return 3;
  }

  saveStreak() {
    try {
      localStorage.setItem("yu_user_streak", this.streak.toString());
    } catch (e) {}
  }

  loadLastStreakDate() {
    try {
      return localStorage.getItem("yu_last_streak_date") || "";
    } catch (e) {
      return "";
    }
  }

  loadClaimedPlans() {
    try {
      const saved = localStorage.getItem("yu_daily_xp_claims_2026");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {};
  }

  saveClaimedPlans() {
    try {
      localStorage.setItem("yu_daily_xp_claims_2026", JSON.stringify(this.claimedPlans));
    } catch (e) {}
  }

  getXP() {
    return this.xp;
  }

  getStreak() {
    return this.streak;
  }

  canAfford(amount) {
    return this.xp >= amount;
  }

  addXP(amount, reason = "", notify = true) {
    if (!amount || isNaN(amount) || amount <= 0) return;
    this.xp += Math.round(amount);
    this.saveXP();
    this.updateHeader();

    if (notify) {
      window.soundFx?.playCoin?.();
      window.app?.notify(reason ? `⚡ +${amount} XP: ${reason}` : `⚡ +${amount} XP hisobingizga qo'shildi!`);
    }

    try {
      window.dispatchEvent(new CustomEvent("yu_xp_changed", { detail: { xp: this.xp, added: amount } }));
    } catch (e) {}
  }

  spendXP(amount, planName = "") {
    if (!this.canAfford(amount)) return false;
    this.xp -= Math.round(amount);
    this.saveXP();
    this.updateHeader();

    try {
      window.dispatchEvent(new CustomEvent("yu_xp_changed", { detail: { xp: this.xp, spent: amount } }));
    } catch (e) {}

    return true;
  }

  // Daily plan completion reward according to user's specification:
  // - Yengil (easy): +200 XP
  // - O'rtacha (medium): +350 XP
  // - Intensiv (intensive): +450 XP
  recordDailyPlanComplete(intensity = "medium") {
    const rewards = {
      easy: 200,
      medium: 350,
      intensive: 450
    };
    const reward = rewards[intensity] || 350;
    const today = new Date().toISOString().slice(0, 10);
    const claimKey = `${today}_${intensity}`;

    if (this.claimedPlans[claimKey]) {
      return { alreadyClaimed: true, reward };
    }

    // Mark as claimed for today
    this.claimedPlans[claimKey] = true;
    this.saveClaimedPlans();

    // Check streak update
    let streakIncremented = false;
    if (this.lastStreakDate !== today) {
      this.streak += 1;
      this.lastStreakDate = today;
      this.saveStreak();
      try {
        localStorage.setItem("yu_last_streak_date", today);
      } catch (e) {}
      streakIncremented = true;
    }

    // Add XP
    this.xp += reward;
    this.saveXP();
    this.updateHeader();

    // Celebration
    window.soundFx?.playFanfare?.();
    window.yuAudio?.triggerConfetti?.();

    const intensityNames = {
      easy: "Yengil (15 savol)",
      medium: "O'rtacha (25 savol)",
      intensive: "Intensiv (50 savol)"
    };
    const intensityName = intensityNames[intensity] || "Kunlik";

    window.app?.notify(
      `🎉 Tabriklaymiz! ${intensityName} rejangiz 100% bajarildi: +${reward} XP ${streakIncremented ? 'va 1 kunlik Streak 🔥' : ''} qo'shildi!`
    );

    try {
      window.dispatchEvent(new CustomEvent("yu_xp_changed", { detail: { xp: this.xp, added: reward } }));
    } catch (e) {}

    return { alreadyClaimed: false, reward, streakIncremented };
  }

  init() {
    this.injectStyles();
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        this.updateHeader();
        this.bindEvents();
      });
    } else {
      this.updateHeader();
      this.bindEvents();
    }
  }

  bindEvents() {
    // Add click listeners to all header streak pills
    document.querySelectorAll(".header-streak-pill").forEach(pill => {
      pill.style.cursor = "pointer";
      pill.title = "🔥 Streak va ⚡ XP Gamifikatsiya Markazini ochish";
      pill.addEventListener("click", () => this.openStreakModal());
    });
  }

  updateHeader() {
    const formattedXP = this.xp.toLocaleString();
    const formattedStreak = this.streak.toString();

    // Update all streak values in DOM
    document.querySelectorAll(".header-streak-pill").forEach(pill => {
      pill.style.cursor = "pointer";
      const fireEl = pill.querySelector(".streak-fire");
      if (fireEl) {
        fireEl.innerHTML = `🔥 ${formattedStreak} Kun`;
      }
      const xpEl = pill.querySelector(".streak-xp");
      if (xpEl) {
        xpEl.innerHTML = `⚡ ${formattedXP} XP`;
      }
    });

    const specificXpEl = document.getElementById("header-xp-val");
    if (specificXpEl) specificXpEl.textContent = formattedXP;

    const specificStreakEl = document.getElementById("header-streak-val");
    if (specificStreakEl) specificStreakEl.textContent = formattedStreak;

    // Update any custom XP indicators
    document.querySelectorAll("[data-bind-xp]").forEach(el => {
      el.textContent = formattedXP;
    });
    document.querySelectorAll("[data-bind-streak]").forEach(el => {
      el.textContent = formattedStreak;
    });
  }

  injectStyles() {
    if (document.getElementById("yu-xp-manager-styles")) return;
    const style = document.createElement("style");
    style.id = "yu-xp-manager-styles";
    style.textContent = `
      .header-streak-pill {
        cursor: pointer !important;
        transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        user-select: none;
      }
      .header-streak-pill:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 6px 18px rgba(245, 158, 11, 0.25);
        border-color: #F59E0B;
      }
      .xp-modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.75);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        z-index: 99999;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 16px;
        opacity: 0;
        transition: opacity 0.25s ease;
      }
      .xp-modal-overlay.active {
        display: flex;
        opacity: 1;
      }
      .xp-modal-card {
        background: #ffffff;
        width: 100%;
        max-width: 620px;
        border-radius: 24px;
        box-shadow: 0 25px 60px -12px rgba(15, 23, 42, 0.4), 0 0 0 1px rgba(99, 102, 241, 0.15);
        overflow: hidden;
        animation: xpCardPop 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes xpCardPop {
        from { transform: scale(0.94) translateY(16px); opacity: 0; }
        to { transform: scale(1) translateY(0); opacity: 1; }
      }
      .xp-modal-header {
        background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
        padding: 22px 28px;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      .xp-modal-body {
        padding: 24px 28px;
        max-height: 80vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .xp-stats-hero {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;
      }
      .xp-stat-box {
        background: linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%);
        border: 2px solid #E0E7FF;
        border-radius: 18px;
        padding: 18px;
        text-align: center;
        position: relative;
        overflow: hidden;
      }
      .xp-stat-val {
        font-size: 28px;
        font-weight: 900;
        color: #1E1B4B;
        margin-top: 4px;
        letter-spacing: -0.5px;
      }
      .xp-stat-lbl {
        font-size: 12px;
        font-weight: 800;
        color: #6366F1;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .xp-section-title {
        font-size: 14px;
        font-weight: 800;
        color: #0F172A;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .xp-rewards-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }
      .xp-reward-card {
        background: #ffffff;
        border: 1.5px solid #E2E8F0;
        border-radius: 14px;
        padding: 12px;
        text-align: center;
        transition: all 0.2s;
      }
      .xp-reward-card:hover {
        border-color: #6366F1;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(99, 102, 241, 0.12);
      }
      .xp-reward-card.active-plan {
        border-color: #10B981;
        background: #F0FDF4;
      }
      .xp-tariffs-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .xp-tariff-item {
        background: #F8FAFC;
        border: 1.5px solid #E2E8F0;
        border-radius: 16px;
        padding: 14px 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
      }
      .xp-tariff-info h5 {
        margin: 0;
        font-size: 15px;
        font-weight: 800;
        color: #1E293B;
      }
      .xp-tariff-info p {
        margin: 3px 0 0 0;
        font-size: 12px;
        color: #64748B;
      }
      .xp-progress-bar-bg {
        height: 6px;
        background: #E2E8F0;
        border-radius: 999px;
        overflow: hidden;
        margin-top: 6px;
        width: 140px;
      }
      .xp-progress-bar-fill {
        height: 100%;
        background: linear-gradient(90deg, #6366F1, #8B5CF6);
        border-radius: 999px;
      }
      .btn-xp-modal-redeem {
        background: linear-gradient(135deg, #4F46E5, #6366F1);
        color: #ffffff;
        border: none;
        padding: 8px 16px;
        border-radius: 999px;
        font-size: 12px;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
      }
      .btn-xp-modal-redeem:hover:not(:disabled) {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
      }
      .btn-xp-modal-redeem:disabled {
        background: #E2E8F0;
        color: #94A3B8;
        cursor: not-allowed;
      }
    `;
    document.head.appendChild(style);
  }

  openStreakModal() {
    let modal = document.getElementById("xp-streak-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "xp-streak-modal";
      modal.className = "xp-modal-overlay";
      document.body.appendChild(modal);
    }

    const currentTier = localStorage.getItem("yu_user_tier") || "free";
    const plusPct = Math.min(100, Math.round((this.xp / 7000) * 100));
    const proPct = Math.min(100, Math.round((this.xp / 11000) * 100));
    const premPct = Math.min(100, Math.round((this.xp / 15000) * 100));

    modal.innerHTML = `
      <div class="xp-modal-card">
        <div class="xp-modal-header">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="font-size: 26px;">⚡</div>
            <div>
              <h3 style="margin: 0; font-size: 18px; font-weight: 800; color: #fff;">YU Streak & XP Gamifikatsiya Markazi</h3>
              <p style="margin: 3px 0 0 0; font-size: 12px; color: #94A3B8;">Kunlik rejani bajaring, XP to'plang va tariflarni bepul oching!</p>
            </div>
          </div>
          <button class="dict-close-btn" id="btn-close-xp-modal" style="background: rgba(255,255,255,0.1); border:none; color:#fff; width:32px; height:32px; border-radius:50%; cursor:pointer;">✕</button>
        </div>

        <div class="xp-modal-body">
          <!-- STATS HERO -->
          <div class="xp-stats-hero">
            <div class="xp-stat-box" style="border-color: #FDE68A; background: #FFFBEB;">
              <div class="xp-stat-lbl" style="color: #D97706;">🔥 Faol Streak</div>
              <div class="xp-stat-val" style="color: #92400E;">${this.streak} Kun</div>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #B45309;">Muntazam o'qish seriyasi</p>
            </div>

            <div class="xp-stat-box" style="border-color: #C7D2FE; background: #EEF2FF;">
              <div class="xp-stat-lbl" style="color: #4F46E5;">⚡ Umumiy XP Balans</div>
              <div class="xp-stat-val" style="color: #312E81;">${this.xp.toLocaleString()} XP</div>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #6366F1;">Barcha to'plangan tajriba</p>
            </div>
          </div>

          <!-- KUNLIK REJA MUKOFORLARI -->
          <div>
            <div class="xp-section-title">
              <span>🎯</span> Kunlik Reja Mukofotlari (Kuniga XP):
            </div>
            <div class="xp-rewards-grid" style="margin-top: 10px;">
              <div class="xp-reward-card">
                <div style="font-size: 18px;">🟢</div>
                <div style="font-weight: 800; font-size: 13px; color: #0F172A; margin-top: 4px;">Yengil Reja</div>
                <div style="font-size: 11px; color: #64748B;">15 ta savol</div>
                <div style="font-size: 15px; font-weight: 900; color: #059669; margin-top: 6px;">+200 XP</div>
              </div>

              <div class="xp-reward-card">
                <div style="font-size: 18px;">🟡</div>
                <div style="font-weight: 800; font-size: 13px; color: #0F172A; margin-top: 4px;">O'rtacha Reja</div>
                <div style="font-size: 11px; color: #64748B;">25 ta savol</div>
                <div style="font-size: 15px; font-weight: 900; color: #D97706; margin-top: 6px;">+350 XP</div>
              </div>

              <div class="xp-reward-card" style="border-color: #C7D2FE; background: #FAF5FF;">
                <div style="font-size: 18px;">🔴</div>
                <div style="font-weight: 800; font-size: 13px; color: #0F172A; margin-top: 4px;">Intensiv Reja</div>
                <div style="font-size: 11px; color: #64748B;">50 ta savol</div>
                <div style="font-size: 15px; font-weight: 900; color: #7C3AED; margin-top: 6px;">+450 XP</div>
              </div>
            </div>
          </div>

          <!-- TARIFLARNI XP BILAN OLISH -->
          <div>
            <div class="xp-section-title">
              <span>💎</span> Tariflarni XP Bilan Bepul Ochish:
            </div>
            <div class="xp-tariffs-list" style="margin-top: 10px;">
              <!-- PLUS -->
              <div class="xp-tariff-item">
                <div class="xp-tariff-info">
                  <h5>Plus Tarifi (7,000 XP)</h5>
                  <p>Barcha testlar, xatolar tahlili va formulalar</p>
                  <div class="xp-progress-bar-bg">
                    <div class="xp-progress-bar-fill" style="width: ${plusPct}%;"></div>
                  </div>
                </div>
                <div>
                  ${currentTier === 'plus' ? `
                    <span style="font-size: 12px; font-weight: 800; color: #059669;">✓ Faol</span>
                  ` : `
                    <button class="btn-xp-modal-redeem" onclick="window.xpManager.closeStreakModal(); window.pricingManager?.redeemWithXP('plus');">
                      ${this.xp >= 7000 ? '⚡ 7,000 XP bilan olish' : `${this.xp}/7,000 XP`}
                    </button>
                  `}
                </div>
              </div>

              <!-- PRO -->
              <div class="xp-tariff-item">
                <div class="xp-tariff-info">
                  <h5>Pro Tarifi (11,000 XP)</h5>
                  <p>Cheksiz Bluebook, IELTS, 180+ Audio Shadowing</p>
                  <div class="xp-progress-bar-bg">
                    <div class="xp-progress-bar-fill" style="width: ${proPct}%; background: linear-gradient(90deg, #F59E0B, #D97706);"></div>
                  </div>
                </div>
                <div>
                  ${currentTier === 'pro' ? `
                    <span style="font-size: 12px; font-weight: 800; color: #059669;">✓ Faol</span>
                  ` : `
                    <button class="btn-xp-modal-redeem" style="background: linear-gradient(135deg, #F59E0B, #D97706);" onclick="window.xpManager.closeStreakModal(); window.pricingManager?.redeemWithXP('pro');">
                      ${this.xp >= 11000 ? '⚡ 11,000 XP bilan olish' : `${this.xp}/11,000 XP`}
                    </button>
                  `}
                </div>
              </div>

              <!-- PREMIUM -->
              <div class="xp-tariff-item">
                <div class="xp-tariff-info">
                  <h5>Premium VIP Tarifi (15,000 XP)</h5>
                  <p>YU AI 24/7 Mentor, Writing baholash, Rasmiy Sertifikat</p>
                  <div class="xp-progress-bar-bg">
                    <div class="xp-progress-bar-fill" style="width: ${premPct}%; background: linear-gradient(90deg, #7C3AED, #4F46E5);"></div>
                  </div>
                </div>
                <div>
                  ${currentTier === 'premium' ? `
                    <span style="font-size: 12px; font-weight: 800; color: #7C3AED;">✓ Faol VIP</span>
                  ` : `
                    <button class="btn-xp-modal-redeem" style="background: linear-gradient(135deg, #7C3AED, #4F46E5);" onclick="window.xpManager.closeStreakModal(); window.pricingManager?.redeemWithXP('premium');">
                      ${this.xp >= 15000 ? '⚡ 15,000 XP bilan olish' : `${this.xp}/15,000 XP`}
                    </button>
                  `}
                </div>
              </div>
            </div>
          </div>

          <!-- FOOTER ACTIONS -->
          <div style="display: flex; gap: 10px; margin-top: 8px;">
            <button type="button" class="btn btn-primary" style="flex: 1; padding: 12px; font-weight: 800;" onclick="window.xpManager.closeStreakModal(); document.getElementById('daily-goal-tracker-mount')?.scrollIntoView({ behavior: 'smooth' });">
              🎯 Kunlik Rejani Bajarish
            </button>
            <button type="button" class="btn btn-secondary" style="padding: 12px 20px; font-weight: 700;" onclick="window.xpManager.closeStreakModal(); document.getElementById('yu-pricing-section')?.scrollIntoView({ behavior: 'smooth' });">
              💎 Barcha Tariflar
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.add("active");

    document.getElementById("btn-close-xp-modal")?.addEventListener("click", () => this.closeStreakModal());
    modal.addEventListener("click", (e) => {
      if (e.target === modal) this.closeStreakModal();
    });
  }

  closeStreakModal() {
    const modal = document.getElementById("xp-streak-modal");
    if (modal) modal.classList.remove("active");
  }
}

// Global initialization
if (typeof window !== "undefined") {
  window.xpManager = new XPManager();
}
