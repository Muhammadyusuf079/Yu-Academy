// ===================================================================
// YU ACADEMY - 2026 TARIFLAR VA PREMIUM OBUNALAR MODULI
// Plus ($3 / $36), Pro ($7 / $84), Premium ($9 / $108) & Bepul Starter Tizimi
// ===================================================================

const YU_PRICING_PLANS_2026 = {
  student: [
    {
      id: "free",
      name: "Bepul",
      badge: "🌿 Boshlang'ich",
      featured: false,
      isVip: false,
      tagline: "Platformani to'liq bepul sinab ko'rish uchun",
      priceMonthly: 0,
      priceYearly: 0,
      uzsMonthly: 0,
      uzsYearly: 0,
      btnText: "Bepul Boshlash",
      btnClass: "outline",
      features: [
        { text: "5 ta rasmiy SAT & IELTS mock test", ok: true },
        { text: "Kunlik challenge va saralangan savollar", ok: true },
        { text: "5 daqiqa/kun Native Shadowing trenajyori", ok: true },
        { text: "Desmos grafik kalkulyatori & formulalar", ok: true },
        { text: "Asosiy akademik lug'at (500+ so'z)", ok: true },
        { text: "Cheksiz barcha Bluebook testlari", ok: false },
        { text: "Cheksiz Neural Audio Shadowing (UK/US/AU)", ok: false },
        { text: "YU AI 2026 24/7 Shaxsiy Murabbiy", ok: false },
        { text: "Xalqaro grantlar & Sertifikat", ok: false }
      ]
    },
    {
      id: "plus",
      name: "Plus",
      badge: "⚡ Tezkor O'sish",
      featured: false,
      isVip: false,
      tagline: "Muntazam tayyorlanuvchi iqtidorli abituriyentlar uchun",
      priceMonthly: 3,
      priceYearly: 36, // 12 * $3
      uzsMonthly: 38000,
      uzsYearly: 456000,
      xpPrice: 7000,
      btnText: "Plus Tarifini Tanlash",
      btnClass: "primary",
      features: [
        { text: "Barcha 50+ rasmiy SAT & IELTS testlari", ok: true },
        { text: "1,850+ to'liq savollar bazasi va filtrlari", ok: true },
        { text: "15 daqiqa/kun Native Shadowing trenajyori", ok: true },
        { text: "Qadamma-qadam rasmiy ilmiy yechimlar", ok: true },
        { text: "Xatolar ustida ishlash & natijalar tarixi", ok: true },
        { text: "Reklamasiz, chalg'ituvchilarsiz toza interfeys", ok: true },
        { text: "Desmos 10 soniyalik tezkor algoritmlari", ok: true },
        { text: "YU AI 2026 24/7 Shaxsiy Murabbiy", ok: false },
        { text: "Ivy League & Xalqaro grantlar yo'riqnomasi", ok: false }
      ]
    },
    {
      id: "pro",
      name: "Pro",
      badge: "⭐ TAVSIYA ETILGAN • ENG OMMABOP",
      featured: true,
      isVip: false,
      tagline: "1500+ SAT va 8.5 IELTS natijasini maqsad qilganlar uchun",
      priceMonthly: 7,
      priceYearly: 84, // 12 * $7
      uzsMonthly: 89000,
      uzsYearly: 1068000,
      xpPrice: 11000,
      btnText: "Pro Tarifga O'tish ➔",
      btnClass: "gradient-featured",
      features: [
        { text: "Barcha Plus imkoniyatlari", ok: true },
        { text: "Cheksiz rasmiy Bluebook & CD-IELTS simulyatsiyasi", ok: true },
        { text: "Cheksiz 180+ Neural Audio Shadowing (UK/US/AU)", ok: true },
        { text: "Desmos chuqur integratsiyasi va fokus rejim", ok: true },
        { text: "AI xatolar tahlili va zaif mavzular diagnostikasi", ok: true },
        { text: "Shaxsiy kunlik maqsad, streak va mukofotlar", ok: true },
        { text: "Real imtihon ball bashorati (Score Predictor)", ok: true },
        { text: "Jonli YU Live Arena & barcha mini-trenajyorlar", ok: true },
        { text: "YU AI 2026 24/7 Shaxsiy Murabbiy", ok: false }
      ]
    },
    {
      id: "premium",
      name: "Premium",
      badge: "👑 CHEKSIZ VIP",
      featured: false,
      isVip: true,
      tagline: "Maksimal ball, xalqaro grantlar va shaxsiy mentorlik",
      priceMonthly: 9,
      priceYearly: 108, // 12 * $9
      uzsMonthly: 115000,
      uzsYearly: 1380000,
      xpPrice: 15000,
      btnText: "Premium VIP Olish 👑",
      btnClass: "gradient-vip",
      features: [
        { text: "Barcha Pro imkoniyatlari 100% cheksiz", ok: true },
        { text: "YU AI 2026 Shaxsiy Murabbiy (24/7 cheksiz savol-javob)", ok: true },
        { text: "SAT & IELTS Writing insholarini rasmiy baholash", ok: true },
        { text: "Ivy League & Top-100 Universitetlar grant qo'llanmasi", ok: true },
        { text: "Barcha materiallarni PDF va oflayn yuklab olish", ok: true },
        { text: "24/7 Shaxsiy VIP mentor yordami (Telegram orqali)", ok: true },
        { text: "Kursni muvaffaqiyatli tugatgach Xalqaro Sertifikat", ok: true },
        { text: "Yangi 2026 Bluebook yangilanishlariga 1-bo'lib kirish", ok: true }
      ]
    }
  ],
  teacher: [
    {
      id: "teacher_starter",
      name: "Ustoz Boshlang'ich",
      badge: "👨‍🏫 Individual Ustoz",
      featured: false,
      isVip: false,
      tagline: "Yakka tartibda repetitorlik qiluvchi o'qituvchilar uchun",
      priceMonthly: 5,
      priceYearly: 60, // 12 * $5
      uzsMonthly: 64000,
      uzsYearly: 768000,
      btnText: "Ustoz Tarifini Tanlash",
      btnClass: "primary",
      features: [
        { text: "3 tagacha sinf va 30 ta o'quvchi biriktirish", ok: true },
        { text: "O'quvchilar test natijalari va xatolari tahlili", ok: true },
        { text: "Cheksiz test va savol qo'shish (Teacher Studio)", ok: true },
        { text: "Topqir Live sinf musobaqasi: 30 o'yinchi", ok: true },
        { text: "PDF va Excel formatda natijalarni eksport qilish", ok: true }
      ]
    },
    {
      id: "teacher_pro",
      name: "Ustoz Pro",
      badge: "⭐ O'QUV MARKAZI UCHUN",
      featured: true,
      isVip: false,
      tagline: "O'quv markazlari va guruhli tayyorlov kurslari uchun",
      priceMonthly: 12,
      priceYearly: 144, // 12 * $12
      uzsMonthly: 153000,
      uzsYearly: 1836000,
      btnText: "O'quv Markaz Rejasini Olish",
      btnClass: "gradient-featured",
      features: [
        { text: "15 tagacha sinf va 200 ta o'quvchi biriktirish", ok: true },
        { text: "O'quvchilarning progress va test tahlili paneli", ok: true },
        { text: "Topqir Live sinf musobaqasi: 150 o'yinchi", ok: true },
        { text: "O'quv markazi logotipi bilan maxsus testlar", ok: true },
        { text: "Brendlashtirilgan PDF hisobotlar va eksport", ok: true },
        { text: "24/7 Shaxsiy texnik qo'llab-quvvatlash", ok: true }
      ]
    }
  ]
};

class PricingManager {
  constructor() {
    this.audience = "student"; // "student" | "teacher"
    this.period = "monthly";   // "monthly" | "yearly"
    this.selectedPlan = null;
    this.discountCode = "";
    this.discountPercent = 0;
    this.init();
  }

  init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.mount());
    } else {
      this.mount();
    }
  }

  mount() {
    const mountEl = document.getElementById("yu-pricing-section-mount");
    if (!mountEl) return;
    this.render(mountEl);
    this.setupCheckoutModal();
    if (window.location.hash === "#yu-pricing-section") {
      setTimeout(() => {
        document.getElementById("yu-pricing-section")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }

  setAudience(aud) {
    if (this.audience === aud) return;
    this.audience = aud;
    window.soundFx?.playClick?.();
    this.update();
  }

  setPeriod(period) {
    if (this.period === period) return;
    this.period = period;
    window.soundFx?.playClick?.();
    this.update();
  }

  update() {
    const mountEl = document.getElementById("yu-pricing-section-mount");
    if (mountEl) {
      this.render(mountEl);
    }
  }

  getCurrentUserTier() {
    try {
      return localStorage.getItem("yu_user_tier") || "free";
    } catch (e) {
      return "free";
    }
  }

  render(container) {
    const plans = YU_PRICING_PLANS_2026[this.audience] || YU_PRICING_PLANS_2026.student;
    const isYearly = this.period === "yearly";
    const currentTier = this.getCurrentUserTier();

    container.innerHTML = `
      <section class="yu-pricing-container" id="yu-pricing-section">
        <!-- Ambient Glowing Crystal Spheres -->
        <div class="pricing-glow-orb pricing-orb-1"></div>
        <div class="pricing-glow-orb pricing-orb-2"></div>

        <!-- HEADER -->
        <div class="pricing-section-header">
          <div class="pricing-badge-pill">
            <span>💎</span> YU ACADEMY 2026 TARIFLAR VA REJALAR
          </div>
          <h2 class="pricing-main-title">
            O'zingizga Mos Tarifni Tanlang va <span class="gradient-text">1500+ SAT / 8.5 IELTS</span> Natijasiga Erishtiring!
          </h2>
          <p class="pricing-subtitle">
            Haqiqiy Bluebook va British Council formatidagi barcha rasmiy materiallar, 
            Native Audio Shadowing va Desmos trenajyorlaridan to'liq foydalaning.
          </p>

          <!-- DUAL INTERACTIVE TOGGLES -->
          <div class="pricing-toggles-wrapper">
            <!-- AUDIENCE TOGGLE: Abituriyent vs Ustoz -->
            <div class="pricing-segmented-control audience-segmented">
              <button type="button" class="pricing-segment-btn ${this.audience === 'student' ? 'active' : ''}" onclick="window.pricingManager.setAudience('student')">
                <span>🎓</span> Abituriyent & Talaba
              </button>
              <button type="button" class="pricing-segment-btn ${this.audience === 'teacher' ? 'active' : ''}" onclick="window.pricingManager.setAudience('teacher')">
                <span>👨‍🏫</span> Ustoz & O'quv Markaz
              </button>
            </div>

            <!-- BILLING PERIOD TOGGLE: Oylik vs Yillik (Chegirmasiz, to'liq o'z narxida) -->
            <div class="pricing-segmented-control period-segmented">
              <button type="button" class="pricing-segment-btn ${!isYearly ? 'active' : ''}" onclick="window.pricingManager.setPeriod('monthly')">
                Oylik to'lov
              </button>
              <button type="button" class="pricing-segment-btn ${isYearly ? 'active' : ''}" onclick="window.pricingManager.setPeriod('yearly')">
                Yillik to'lov
              </button>
            </div>
          </div>
        </div>

        <!-- CARDS GRID -->
        <div class="pricing-cards-grid-2026 ${plans.length === 2 ? 'two-cols' : ''}">
          ${plans.map(p => this.renderPlanCard(p, isYearly, currentTier)).join("")}
        </div>

        <!-- TRUST FOOTNOTE WITH PAYMENT METHODS -->
        <div class="pricing-trust-banner">
          <div class="trust-icons-list">
            <span class="trust-item">🔒 256-bit Xavfsiz To'lov</span>
            <span class="trust-divider">•</span>
            <span class="trust-item">⚡ Bir Lahzada Faollashadi</span>
            <span class="trust-divider">•</span>
            <span class="trust-item">🛡️ 14 Kunlik Kafolat</span>
          </div>
          <div class="payment-badges-row">
            <span class="pay-logo-pill payme-pill">Payme</span>
            <span class="pay-logo-pill click-pill">Click</span>
            <span class="pay-logo-pill uzum-pill">Uzum Bank</span>
            <span class="pay-logo-pill card-pill">Visa / Mastercard</span>
            <span class="pay-logo-pill card-pill">Humo / Uzcard</span>
          </div>
        </div>
      </section>
    `;
  }

  renderPlanCard(p, isYearly, currentTier) {
    const isCurrent = currentTier === p.id;
    const price = isYearly ? p.priceYearly : p.priceMonthly;
    const cadence = isYearly ? "/ yil" : "/ oy";
    const uzs = isYearly ? p.uzsYearly : p.uzsMonthly;

    return `
      <div class="yu-pricing-card ${p.featured ? 'featured' : ''} ${p.isVip ? 'vip' : ''} ${isCurrent ? 'is-current-plan' : ''}">
        <!-- Floating Top Badge -->
        <div class="card-floating-badge ${p.featured ? 'badge-featured' : (p.isVip ? 'badge-vip' : 'badge-standard')}">
          ${isCurrent ? '✓ JORIY TARIFINGIZ' : p.badge}
        </div>

        <!-- Card Header (fixed height for strict horizontal alignment across all 4 cards) -->
        <div class="pricing-card-head">
          <h3 class="plan-name">${p.name}</h3>
          <p class="plan-tagline">${p.tagline}</p>
        </div>

        <!-- Price Display (fixed height & baseline alignment so $0 and numbers align perfectly) -->
        <div class="plan-price-box">
          <div class="price-digits-row">
            <span class="price-currency">$</span>
            <span class="price-val">${price}</span>
            <span class="price-cadence">${cadence}</span>
          </div>
          ${price > 0 ? `
            <div class="price-sub-equiv">
              ${uzs.toLocaleString()} so'm${cadence}
            </div>
          ` : `
            <div class="price-sub-equiv free-forever">Doimiy Bepul kirish</div>
          `}
        </div>

        <!-- Action Button -->
        <div class="plan-cta-box">
          <button type="button" 
                  class="btn-plan-action ${p.btnClass} ${isCurrent ? 'btn-current' : ''}" 
                  onclick="window.pricingManager.selectPlan('${p.id}')">
            ${isCurrent ? "✓ Joriy Tarif" : p.btnText}
          </button>
          ${p.xpPrice ? `
            <button type="button" 
                    class="btn-plan-xp-redeem ${isCurrent ? 'btn-current-disabled' : ''}" 
                    onclick="window.pricingManager.redeemWithXP('${p.id}')"
                    title="Ushbu tarifni to'plangan XP ballar bilan olish">
              <span>⚡</span>
              <span>${p.xpPrice.toLocaleString()} XP bilan olish</span>
            </button>
          ` : ''}
        </div>

        <!-- Features Divider -->
        <div class="features-divider">
          <span>Imkoniyatlar</span>
        </div>

        <!-- Features List -->
        <ul class="plan-features-list">
          ${p.features.map(f => `
            <li class="${f.ok ? 'feat-ok' : 'feat-no'}">
              <span class="feat-icon">${f.ok ? '✓' : '—'}</span>
              <span class="feat-label">${f.text}</span>
            </li>
          `).join("")}
        </ul>
      </div>
    `;
  }

  selectPlan(planId) {
    window.soundFx?.playClick?.();
    const allPlans = [...YU_PRICING_PLANS_2026.student, ...YU_PRICING_PLANS_2026.teacher];
    const plan = allPlans.find(p => p.id === planId);
    if (!plan) return;

    if (plan.id === "free") {
      window.app?.notify("Siz hozirda Bepul tarifdasiz! Barcha ochiq sinov testlaridan foydalanishingiz mumkin.");
      return;
    }

    this.selectedPlan = plan;
    this.openCheckoutModal();
  }

  setupCheckoutModal() {
    let modal = document.getElementById("pricing-checkout-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "pricing-checkout-modal";
      modal.className = "pricing-checkout-modal-overlay";
      document.body.appendChild(modal);
    }
  }

  openCheckoutModal() {
    const modal = document.getElementById("pricing-checkout-modal");
    if (!modal || !this.selectedPlan) return;

    const isYearly = this.period === "yearly";
    const finalAmountUSD = isYearly ? this.selectedPlan.priceYearly : this.selectedPlan.priceMonthly;
    const finalAmountUZS = isYearly ? this.selectedPlan.uzsYearly : this.selectedPlan.uzsMonthly;
    const periodLabel = isYearly ? "Yillik Obuna (12 oy)" : "Oylik Obuna (1 oy)";

    modal.innerHTML = `
      <div class="pricing-modal-box">
        <!-- Close Button -->
        <button type="button" class="modal-close-btn" onclick="window.pricingManager.closeCheckoutModal()">✕</button>

        <div class="modal-head-row">
          <div class="modal-head-icon">💎</div>
          <div>
            <h3 class="modal-title">YU Academy ${this.selectedPlan.name} Tarifini Faollashtirish</h3>
            <p class="modal-desc">2026 Digital SAT va IELTS platformasiga to'liq cheksiz kirish huquqi</p>
          </div>
        </div>

        <!-- Order Summary Card -->
        <div class="modal-order-summary">
          <div class="summary-plan-badge">
            <span class="plan-pill-title">${this.selectedPlan.name} Tarifi</span>
            <span class="period-pill">${periodLabel}</span>
          </div>

          <div class="summary-price-line">
            <span class="label">Jami to'lov:</span>
            <div class="price-val-wrap">
              <span class="usd-price">$${finalAmountUSD}</span>
              <span class="uzs-price">(~${finalAmountUZS.toLocaleString()} so'm)</span>
            </div>
          </div>
        </div>

        <!-- Promo Code Input -->
        <div class="modal-promo-section">
          <label class="promo-label">Promokod bormi?</label>
          <div class="promo-input-row">
            <input type="text" id="yu-promo-input" class="promo-field" placeholder="Masalan: YU2026" value="${this.discountCode}">
            <button type="button" class="btn-apply-promo" onclick="window.pricingManager.applyPromoCode()">Qo'llash</button>
          </div>
          <div id="promo-status-msg" class="promo-status-text"></div>
        </div>

        <!-- Payment Method Selection -->
        <div class="modal-pay-methods-section">
          <label class="pay-method-label">To'lov usulini tanlang:</label>
          <div class="pay-methods-grid">
            <label class="pay-method-card active">
              <input type="radio" name="payMethod" value="payme" checked>
              <span class="pay-brand">Payme</span>
              <span class="pay-sub">Uzcard / Humo</span>
            </label>
            <label class="pay-method-card">
              <input type="radio" name="payMethod" value="click">
              <span class="pay-brand">Click Up</span>
              <span class="pay-sub">Tezkor to'lov</span>
            </label>
            <label class="pay-method-card">
              <input type="radio" name="payMethod" value="uzum">
              <span class="pay-brand">Uzum Bank</span>
              <span class="pay-sub">0% komissiya</span>
            </label>
            <label class="pay-method-card">
              <input type="radio" name="payMethod" value="visa">
              <span class="pay-brand">Visa / Master</span>
              <span class="pay-sub">Xalqaro karta</span>
            </label>
          </div>
        </div>

        <!-- Actions -->
        <div class="modal-actions-row">
          <button type="button" class="btn-cancel-modal" onclick="window.pricingManager.closeCheckoutModal()">Bekor qilish</button>
          <button type="button" class="btn-confirm-pay" onclick="window.pricingManager.confirmPayment()">
            <span>🔒 To'lovni Tasdiqlash ($${finalAmountUSD})</span>
          </button>
        </div>

        <p class="modal-guarantee-note">
          🛡️ 14 kunlik to'liq pul qaytarish kafolati. Istalgan vaqtda obunani bekor qilishingiz mumkin.
        </p>
      </div>
    `;

    modal.classList.add("active");
  }

  closeCheckoutModal() {
    const modal = document.getElementById("pricing-checkout-modal");
    if (modal) modal.classList.remove("active");
  }

  applyPromoCode() {
    const input = document.getElementById("yu-promo-input");
    const statusMsg = document.getElementById("promo-status-msg");
    if (!input || !statusMsg) return;

    const code = input.value.trim().toUpperCase();
    if (code === "YU2026" || code === "GRANT100" || code === "TOPQIR") {
      this.discountCode = code;
      this.discountPercent = 15;
      statusMsg.className = "promo-status-text success";
      statusMsg.textContent = "🎉 Promokod qabul qilindi! 15% qo'shimcha chegirma berildi.";
      window.soundFx?.playSuccess?.();
    } else if (code) {
      statusMsg.className = "promo-status-text error";
      statusMsg.textContent = "⚠️ Noto'g'ri promokod. 'YU2026' kodini sinab ko'ring.";
      window.soundFx?.playWrong?.();
    }
  }

  confirmPayment() {
    if (!this.selectedPlan) return;
    const plan = this.selectedPlan;

    // Simulate successful subscription
    try {
      localStorage.setItem("yu_user_tier", plan.id);
      let xp = parseInt(localStorage.getItem("yu_user_xp") || "1450", 10);
      xp += 200;
      localStorage.setItem("yu_user_xp", xp.toString());
    } catch (e) {}

    this.closeCheckoutModal();

    // Celebration
    window.yuAudio?.triggerConfetti?.();
    window.soundFx?.playFanfare?.();
    window.app?.notify(`🎉 Tabriklaymiz! Siz YU Academy "${plan.name}" tarifiga muvaffaqiyatli obuna bo'ldingiz! (+200 XP)`);

    // Update header badge if present
    this.updateHeaderBadge(plan);
    this.update();
  }

  updateHeaderBadge(plan) {
    const streakPill = document.querySelector(".header-streak-pill");
    if (streakPill && plan.id !== "free") {
      const existingBadge = document.getElementById("header-user-tier-badge");
      if (existingBadge) existingBadge.remove();

      const badge = document.createElement("span");
      badge.id = "header-user-tier-badge";
      badge.style.cssText = "background: linear-gradient(135deg, #4F46E5, #7C3AED); color: #fff; font-size: 10.5px; font-weight: 800; padding: 3px 8px; border-radius: 999px; margin-left: 6px; letter-spacing: 0.3px;";
      badge.textContent = plan.id === "premium" ? "👑 PREMIUM VIP" : (plan.id === "pro" ? "⭐ PRO A'ZO" : "⚡ PLUS A'ZO");
      streakPill.appendChild(badge);
    }
  }

  redeemWithXP(planId) {
    window.soundFx?.playClick?.();
    const allPlans = [...YU_PRICING_PLANS_2026.student, ...YU_PRICING_PLANS_2026.teacher];
    const plan = allPlans.find(p => p.id === planId);
    if (!plan || !plan.xpPrice) return;

    const curTier = this.getCurrentUserTier();
    if (curTier === plan.id) {
      window.app?.notify(`Siz allaqachon "${plan.name}" tarifidasiz!`);
      return;
    }

    const currentXP = window.xpManager ? window.xpManager.getXP() : parseInt(localStorage.getItem("yu_user_xp") || "1450", 10);

    if (currentXP >= plan.xpPrice) {
      this.openXPConfirmModal(plan, currentXP);
    } else {
      this.openXPInsufficientModal(plan, currentXP);
    }
  }

  openXPConfirmModal(plan, currentXP) {
    let modal = document.getElementById("pricing-xp-confirm-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "pricing-xp-confirm-modal";
      modal.className = "checkout-modal-overlay";
      document.body.appendChild(modal);
    }

    const remainingXP = currentXP - plan.xpPrice;

    modal.innerHTML = `
      <div class="checkout-modal-card" style="max-width: 520px;">
        <div class="checkout-modal-header" style="background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);">
          <div class="modal-plan-meta">
            <span class="modal-plan-badge" style="background: linear-gradient(135deg, #6366F1, #8B5CF6);">⚡ XP BILAN FAOLASHTIRISH</span>
            <h3 class="modal-plan-title" style="color: #fff;">${plan.name} Tarifi</h3>
            <p style="margin: 3px 0 0; font-size: 13px; color: #94A3B8;">To'plangan XP ballaringiz hisobiga 1 oylik to'liq obuna</p>
          </div>
          <button class="checkout-close-btn" id="btn-close-xp-confirm">✕</button>
        </div>

        <div class="checkout-modal-body" style="padding: 24px;">
          <!-- SUMMARY BOX -->
          <div style="background: #F8FAFC; border: 2px solid #E0E7FF; border-radius: 16px; padding: 18px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 12px; border-bottom: 1px solid #E2E8F0;">
              <span style="font-size: 14px; color: #64748B;">Sizning joriy XP balansingiz:</span>
              <span style="font-size: 16px; font-weight: 900; color: #1E293B;">⚡ ${currentXP.toLocaleString()} XP</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #E2E8F0;">
              <span style="font-size: 14px; color: #4F46E5; font-weight: 700;">${plan.name} tarifi narxi:</span>
              <span style="font-size: 18px; font-weight: 900; color: #4F46E5;">-${plan.xpPrice.toLocaleString()} XP</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 12px;">
              <span style="font-size: 14px; font-weight: 700; color: #0F172A;">Faollashtirilgach qoladi:</span>
              <span style="font-size: 16px; font-weight: 900; color: #059669;">⚡ ${remainingXP.toLocaleString()} XP</span>
            </div>
          </div>

          <p style="font-size: 13px; color: #475569; line-height: 1.5; margin: 0 0 20px 0; text-align: center;">
            Ushbu tarif 1 oy (30 kun) davomida to'liq barcha cheksiz imkoniyatlari bilan bir lahzada faollashadi.
          </p>

          <div style="display: flex; gap: 12px;">
            <button type="button" class="btn btn-secondary" id="btn-cancel-xp-confirm" style="flex: 1; padding: 12px; font-weight: 700;">
              Bekor Qilish
            </button>
            <button type="button" class="btn btn-primary" id="btn-submit-xp-redeem" style="flex: 1.5; padding: 12px; font-weight: 800; background: linear-gradient(135deg, #4F46E5, #7C3AED);">
              ⚡ Ha, Faollashtirish
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.add("active");

    document.getElementById("btn-close-xp-confirm")?.addEventListener("click", () => modal.classList.remove("active"));
    document.getElementById("btn-cancel-xp-confirm")?.addEventListener("click", () => modal.classList.remove("active"));
    document.getElementById("btn-submit-xp-redeem")?.addEventListener("click", () => {
      modal.classList.remove("active");
      this.confirmXPRedemption(plan);
    });
  }

  confirmXPRedemption(plan) {
    if (window.xpManager) {
      window.xpManager.spendXP(plan.xpPrice, `${plan.name} tarifi`);
    } else {
      let xp = parseInt(localStorage.getItem("yu_user_xp") || "1450", 10);
      xp = Math.max(0, xp - plan.xpPrice);
      localStorage.setItem("yu_user_xp", xp.toString());
    }

    try {
      localStorage.setItem("yu_user_tier", plan.id);
    } catch (e) {}

    // Celebration
    window.yuAudio?.triggerConfetti?.();
    window.soundFx?.playFanfare?.();
    window.app?.notify(`🎉 Tabriklaymiz! ${plan.xpPrice.toLocaleString()} XP evaziga "${plan.name}" tarifi 1 oyga muvaffaqiyatli faollashtirildi!`);

    this.updateHeaderBadge(plan);
    this.update();
  }

  openXPInsufficientModal(plan, currentXP) {
    let modal = document.getElementById("pricing-xp-insufficient-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "pricing-xp-insufficient-modal";
      modal.className = "checkout-modal-overlay";
      document.body.appendChild(modal);
    }

    const neededXP = plan.xpPrice - currentXP;

    modal.innerHTML = `
      <div class="checkout-modal-card" style="max-width: 540px;">
        <div class="checkout-modal-header" style="background: linear-gradient(135deg, #1E1B4B 0%, #312E81 100%);">
          <div class="modal-plan-meta">
            <span class="modal-plan-badge" style="background: #F59E0B; color: #000;">⚡ XP YETARLI EMAS</span>
            <h3 class="modal-plan-title" style="color: #fff;">${plan.name} Tarifi uchun XP Yetishmayapti</h3>
            <p style="margin: 3px 0 0; font-size: 13px; color: #C7D2FE;">Kunlik rejani bajarib tezda yetishmayotgan XP ni to'plang!</p>
          </div>
          <button class="checkout-close-btn" id="btn-close-xp-insuf">✕</button>
        </div>

        <div class="checkout-modal-body" style="padding: 24px;">
          <!-- DEFICIT CARD -->
          <div style="background: #FFFBEB; border: 2px solid #FDE68A; border-radius: 16px; padding: 18px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 10px; border-bottom: 1px solid #FCD34D;">
              <span style="font-size: 13px; color: #92400E; font-weight: 600;">Sizdagi joriy XP:</span>
              <span style="font-size: 16px; font-weight: 800; color: #92400E;">⚡ ${currentXP.toLocaleString()} XP</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #FCD34D;">
              <span style="font-size: 13px; color: #92400E; font-weight: 600;">${plan.name} tarifi narxi:</span>
              <span style="font-size: 16px; font-weight: 800; color: #92400E;">${plan.xpPrice.toLocaleString()} XP</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 10px;">
              <span style="font-size: 14px; font-weight: 800; color: #B45309;">Yetishmayotgan XP:</span>
              <span style="font-size: 18px; font-weight: 900; color: #DC2626;">-${neededXP.toLocaleString()} XP</span>
            </div>
          </div>

          <!-- HOW TO EARN XP GUIDE -->
          <div style="background: #F8FAFC; border: 1.5px solid #E2E8F0; border-radius: 16px; padding: 16px; margin-bottom: 20px;">
            <div style="font-size: 12px; font-weight: 800; color: #475569; text-transform: uppercase; margin-bottom: 10px; letter-spacing: 0.5px;">
              💡 Qanday qilib tezda XP to'plash mumkin?
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 13px; color: #1E293B;">
              <div style="display: flex; justify-content: space-between;">
                <span>🟢 <strong>Yengil kunlik reja</strong> (15 savol):</span>
                <span style="color: #059669; font-weight: 800;">+200 XP</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span>🟡 <strong>O'rtacha kunlik reja</strong> (25 savol):</span>
                <span style="color: #D97706; font-weight: 800;">+350 XP</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span>🔴 <strong>Intensiv kunlik reja</strong> (50 savol):</span>
                <span style="color: #7C3AED; font-weight: 800;">+450 XP</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span>📝 Test va savollar ishlash:</span>
                <span style="color: #2563EB; font-weight: 700;">+50 XP har savolga</span>
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 12px;">
            <button type="button" class="btn btn-secondary" id="btn-buy-with-cash" style="flex: 1; padding: 12px; font-weight: 700;">
              💳 Pul bilan sotib olish ($)
            </button>
            <button type="button" class="btn btn-primary" id="btn-go-to-goals" style="flex: 1.5; padding: 12px; font-weight: 800; background: linear-gradient(135deg, #10B981, #059669);">
              🎯 Rejani Bajarish (+XP)
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.add("active");

    document.getElementById("btn-close-xp-insuf")?.addEventListener("click", () => modal.classList.remove("active"));
    document.getElementById("btn-buy-with-cash")?.addEventListener("click", () => {
      modal.classList.remove("active");
      this.selectPlan(plan.id);
    });
    document.getElementById("btn-go-to-goals")?.addEventListener("click", () => {
      modal.classList.remove("active");
      document.getElementById("daily-goal-tracker-mount")?.scrollIntoView({ behavior: "smooth" });
    });
  }
}

// Global initialization
if (typeof window !== "undefined") {
  window.pricingManager = new PricingManager();
}
