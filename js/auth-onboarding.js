// YU Academy - Ro'yxatdan o'tish, Kirish va Shaxsiy Kabinet Boshqaruvi

class AuthManager {
  constructor() {
    this.currentUser = null;
    this.init();
  }

  init() {
    this.loadUser();
    this.createAuthModal();
    this.renderHeaderAuth();
    this.setupDropdownCloser();
  }

  setupDropdownCloser() {
    document.addEventListener("click", (e) => {
      const container = document.getElementById("user-dropdown-container");
      if (container && !container.contains(e.target)) {
        this.closeUserDropdown();
      }
    });
  }

  toggleUserDropdown(e) {
    if (e) e.stopPropagation();
    const menu = document.getElementById("header-user-dropdown-menu");
    if (menu) {
      menu.classList.toggle("active");
    }
  }

  closeUserDropdown() {
    const menu = document.getElementById("header-user-dropdown-menu");
    if (menu) menu.classList.remove("active");
  }

  loadUser() {
    try {
      const saved = localStorage.getItem("yu_current_user");
      if (saved) {
        this.currentUser = JSON.parse(saved);
        if (this.currentUser && this.currentUser.name === "Azizbek") {
          this.currentUser.name = "O'quvchi";
          this.saveUser();
        }
      } else {
        this.currentUser = null;
      }
    } catch (e) {
      this.currentUser = null;
    }
  }

  saveUser() {
    try {
      if (this.currentUser) {
        localStorage.setItem("yu_current_user", JSON.stringify(this.currentUser));
      } else {
        localStorage.removeItem("yu_current_user");
      }
    } catch (e) {}
    this.renderHeaderAuth();
  }

  logout() {
    this.closeUserDropdown();
    this.currentUser = null;
    localStorage.removeItem("yu_current_user");
    this.renderHeaderAuth();
    window.app?.notify("Hisobdan muvaffaqiyatli chiqildi. Yangi foydalanuvchi sifatida kirishingiz mumkin! 🚪");
  }

  renderHeaderAuth() {
    const authContainer = document.getElementById("header-auth-group");
    if (!authContainer) return;

    const lang = window.app?.currentLang || "uz";
    const registerText = lang === "ru" ? "Регистрация" : (lang === "en" ? "Sign Up" : "Ro'yxatdan o'tish");
    const loginText = lang === "ru" ? "Войти" : (lang === "en" ? "Log In" : "Kirish");
    const mockLinkText = lang === "ru" ? "Полные пробные тесты" : (lang === "en" ? "Full Mock Exams" : "To'liq Mock Imtihonlar");
    const qBankLinkText = lang === "ru" ? "База вопросов" : (lang === "en" ? "Question Bank" : "Savollar Bazasi");
    const addTestText = lang === "ru" ? "Создать тест (Учитель)" : (lang === "en" ? "Create Test (Teacher)" : "Yangi Test Qo'shish (Ustoz)");
    const historyText = lang === "ru" ? "История тестов и баллы" : (lang === "en" ? "Test History & Scores" : "Testlar Tarixi & Ballar");
    const logoutText = lang === "ru" ? "Выйти из аккаунта" : (lang === "en" ? "Log Out" : "Tizimdan Chiqish");

    if (!this.currentUser) {
      authContainer.innerHTML = `
        <button class="capsule-btn-outline capsule-btn-register" onclick="window.authManager.openAuthModal('register')">
          ${registerText}
        </button>
        <button class="capsule-btn-solid" onclick="window.authManager.openAuthModal('login')">
          <span>👤</span> ${loginText}
        </button>
      `;
    } else {
      const isTeacher = this.currentUser.role === "teacher";
      const icon = isTeacher ? "👨‍🏫" : "👨‍🎓";
      const displayName = this.currentUser.name || (lang === "ru" ? "Пользователь" : (lang === "en" ? "User" : "Foydalanuvchi"));
      const roleSubText = isTeacher ? (lang === "ru" ? "Преподаватель и Ментор" : (lang === "en" ? "Partner Mentor & Teacher" : "Hamkor Ustoz & Mentor")) : (lang === "ru" ? "Активный ученик YU Academy" : (lang === "en" ? "Active YU Academy Student" : "YU Academy Faol O'quvchisi"));

      authContainer.innerHTML = `
        <div class="header-user-dropdown-container" id="user-dropdown-container" style="position: relative;">
          <button class="header-user-pill-btn" id="btn-user-dropdown-toggle" onclick="window.authManager.toggleUserDropdown(event)" title="${lang === 'ru' ? 'Профиль и меню' : (lang === 'en' ? 'Profile & menu' : 'Shaxsiy profil va menyu')}">
            <span class="header-user-avatar">${icon}</span>
            <span class="header-user-name">${displayName}</span>
            <span class="header-user-chevron">▾</span>
          </button>

          <div class="header-user-dropdown-menu" id="header-user-dropdown-menu">
            <div class="user-dropdown-profile-header">
              <div class="dropdown-avatar-circle">${icon}</div>
              <div class="dropdown-details">
                <strong class="dropdown-name">${displayName}</strong>
                <span class="dropdown-role">${roleSubText}</span>
                <span class="dropdown-email">${this.currentUser.email || "YU Academy A'zosi"}</span>
              </div>
            </div>

            <div class="user-dropdown-divider"></div>

            <div class="user-dropdown-links">
              <a href="tests.html" class="user-dropdown-item">
                <span class="item-icon">⏱️</span>
                <span>${mockLinkText}</span>
              </a>
              <a href="questions.html" class="user-dropdown-item">
                <span class="item-icon">📚</span>
                <span>${qBankLinkText}</span>
              </a>
              ${isTeacher ? `
              <button type="button" class="user-dropdown-item" onclick="window.teacherStudio?.openModal(); window.authManager.closeUserDropdown();">
                <span class="item-icon">➕</span>
                <span>${addTestText}</span>
              </button>
              ` : ""}
              <button type="button" class="user-dropdown-item" onclick="window.testCenter?.renderHistoryView(); document.getElementById('test-modal')?.classList.add('active'); window.authManager.closeUserDropdown();">
                <span class="item-icon">📜</span>
                <span>${historyText}</span>
              </button>
            </div>

            <div class="user-dropdown-divider"></div>

            <button type="button" class="user-dropdown-logout-btn" onclick="window.authManager.logout()">
              <span class="logout-icon">🚪</span>
              <span>${logoutText}</span>
            </button>
          </div>
        </div>
      `;
    }
  }

  createAuthModal() {
    if (document.getElementById("auth-modal")) return;

    const modal = document.createElement("div");
    modal.id = "auth-modal";
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="topqir-auth-card" id="topqir-auth-card-inner">
        <button class="auth-card-close-x" id="btn-close-auth" title="Yopish">✕</button>
        <div id="auth-modal-content">
          <!-- Rendered dynamically -->
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("btn-close-auth")?.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  openAuthModal(mode = "register") {
    const modal = document.getElementById("auth-modal");
    if (!modal) return;
    modal.classList.add("active");
    if (mode === "login") {
      this.renderLoginView();
    } else {
      this.renderRegisterView();
    }
  }

  renderRegisterView() {
    const container = document.getElementById("auth-modal-content");
    if (!container) return;

    const currentCount = window.statsManager ? window.statsManager.format(window.statsManager.stats.studentsCount) : "100+";

    container.innerHTML = `
      <div class="auth-live-students-pill">
        <span>👥</span>
        <span><strong id="auth-modal-students-count">${currentCount}</strong> faol o'quvchi safimizda!</span>
        <span class="pulse-live-dot" title="Jonli"></span>
      </div>

      <div class="auth-modal-tabs">
        <button class="auth-tab-btn active" id="tab-register-btn">📝 Ro'yxatdan o'tish</button>
        <button class="auth-tab-btn" id="tab-login-btn">👤 Kirish</button>
      </div>

      <form id="yu-register-form">
        <div class="form-group">
          <label>Ism va Familiyangiz *</label>
          <input type="text" name="name" placeholder="Masalan: Sardor Aliyev" required autocomplete="name">
        </div>

        <div class="form-group">
          <label>Telefon raqam yoki Email *</label>
          <input type="text" name="email" placeholder="+998 90 123 45 67 yoki email" required autocomplete="email">
        </div>

        <div class="form-group">
          <label>Parol yarating *</label>
          <input type="password" name="password" placeholder="Kamida 4 ta belgi" required minlength="4" autocomplete="new-password">
        </div>

        <div class="role-selector-cards" style="margin-bottom: 16px;">
          <label class="role-card selected" style="padding: 10px 14px;">
            <input type="radio" name="role" value="student" checked>
            <div class="role-icon" style="font-size: 24px;">👨‍🎓</div>
            <div class="role-desc">
              <strong style="font-size: 14px;">O'quvchi / Talaba</strong>
              <p style="font-size: 11.5px;">1500+ SAT va 8.5 IELTS ga tayyorlanish</p>
            </div>
          </label>

          <label class="role-card" style="padding: 10px 14px;">
            <input type="radio" name="role" value="teacher">
            <div class="role-icon" style="font-size: 24px;">👨‍🏫</div>
            <div class="role-desc">
              <strong style="font-size: 14px;">O'qituvchi / Ustoz</strong>
              <p style="font-size: 11.5px;">Sinflar va testlarni boshqarish</p>
            </div>
          </label>
        </div>

        <button type="submit" class="topqir-auth-submit-btn">
          Ro'yxatdan o'tish 🚀
        </button>

        <button type="button" class="guest-login-btn" id="btn-quick-guest-login">
          <span>⚡</span>
          <span>Mehmon sifatida 1 bosishda kirish</span>
        </button>

        <p style="text-align: center; margin-top: 18px; font-size: 13px; color: #64748B;">
          Hisobingiz bormi? 
          <a href="#" id="link-goto-login" style="color: #4F46E5; font-weight: 700; text-decoration: none;">Kirish oynasiga o'tish</a>
        </p>
      </form>
    `;

    document.getElementById("tab-login-btn")?.addEventListener("click", () => this.renderLoginView());
    document.getElementById("link-goto-login")?.addEventListener("click", (e) => {
      e.preventDefault();
      this.renderLoginView();
    });

    container.querySelectorAll("input[name='role']").forEach(radio => {
      radio.addEventListener("change", (e) => {
        container.querySelectorAll(".role-card").forEach(c => c.classList.remove("selected"));
        e.target.closest(".role-card").classList.add("selected");
      });
    });

    // 1-Click Guest Login
    document.getElementById("btn-quick-guest-login")?.addEventListener("click", () => {
      this.currentUser = {
        name: "Mehmon O'quvchi",
        email: "guest@yuacademy.uz",
        role: "student",
        level: "Boshlang'ich",
        registeredAt: new Date().toLocaleDateString("uz-UZ")
      };
      this.saveUser();
      document.getElementById("auth-modal")?.classList.remove("active");
      window.statsManager?.incrementStudents(1, "Mehmon O'quvchi");
      window.app?.notify("YU Academy ga xush kelibsiz! Mehmon sifatida muvaffaqiyatli kirdingiz 🎓");
    });

    // Form Submission (Registration)
    const form = document.getElementById("yu-register-form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim() || "O'quvchi";
      const email = form.email.value.trim();
      const role = form.role.value || "student";

      this.currentUser = {
        name,
        email,
        role,
        level: role === "teacher" ? "Ustoz" : "Abituriyent",
        targetExam: "SAT & IELTS 2026",
        registeredAt: new Date().toLocaleDateString("uz-UZ")
      };

      this.saveUser();
      document.getElementById("auth-modal")?.classList.remove("active");

      // Real increment (+1) to registered users
      window.statsManager?.incrementStudents(1, this.currentUser.name);

      const welcomeMsg = role === "teacher"
        ? `Tabriklaymiz, ${name}! Ustoz sifatida muvaffaqiyatli ro'yxatdan o'tdingiz 👨‍🏫`
        : `Tabriklaymiz, ${name}! YU Academy safimizga xush kelibsiz 🚀`;
      
      window.app?.notify(welcomeMsg);
    });
  }

  renderLoginView() {
    const container = document.getElementById("auth-modal-content");
    if (!container) return;

    const currentCount = window.statsManager ? window.statsManager.format(window.statsManager.stats.studentsCount) : "100+";

    container.innerHTML = `
      <div class="auth-live-students-pill">
        <span>👥</span>
        <span><strong id="auth-modal-students-count">${currentCount}</strong> faol o'quvchi safimizda!</span>
        <span class="pulse-live-dot" title="Jonli"></span>
      </div>

      <div class="auth-modal-tabs">
        <button class="auth-tab-btn" id="tab-register-btn">📝 Ro'yxatdan o'tish</button>
        <button class="auth-tab-btn active" id="tab-login-btn">👤 Kirish</button>
      </div>

      <form id="yu-login-form">
        <div class="form-group">
          <label>Telefon raqam yoki Email</label>
          <input type="text" name="loginId" placeholder="+998 90 123 45 67 yoki email" required autocomplete="username">
        </div>

        <div class="form-group">
          <label>Parol</label>
          <input type="password" name="password" placeholder="••••••••" required autocomplete="current-password">
        </div>

        <button type="submit" class="topqir-auth-submit-btn">
          Kirish ➔
        </button>

        <button type="button" class="guest-login-btn" id="btn-quick-guest-login2">
          <span>⚡</span>
          <span>Mehmon sifatida 1 bosishda kirish</span>
        </button>

        <p style="text-align: center; margin-top: 18px; font-size: 13px; color: #64748B;">
          Hisobingiz yo'qmi? 
          <a href="#" id="link-goto-register" style="color: #4F46E5; font-weight: 700; text-decoration: none;">Ro'yxatdan o'ting</a>
        </p>
      </form>
    `;

    document.getElementById("tab-register-btn")?.addEventListener("click", () => this.renderRegisterView());
    document.getElementById("link-goto-register")?.addEventListener("click", (e) => {
      e.preventDefault();
      this.renderRegisterView();
    });

    document.getElementById("btn-quick-guest-login2")?.addEventListener("click", () => {
      this.currentUser = {
        name: "Mehmon O'quvchi",
        email: "guest@yuacademy.uz",
        role: "student",
        level: "Boshlang'ich",
        registeredAt: new Date().toLocaleDateString("uz-UZ")
      };
      this.saveUser();
      document.getElementById("auth-modal")?.classList.remove("active");
      window.statsManager?.incrementStudents(1, "Mehmon O'quvchi");
      window.app?.notify("YU Academy ga xush kelibsiz! Mehmon sifatida muvaffaqiyatli kirdingiz 🎓");
    });

    const form = document.getElementById("yu-login-form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const loginId = form.loginId.value.trim() || "O'quvchi";
      let namePart = loginId.split("@")[0].replace(/\+998/g, "");
      if (!namePart || namePart.length < 2) namePart = "O'quvchi";

      this.currentUser = {
        name: namePart,
        email: loginId,
        role: "student",
        level: "Faol Talaba",
        targetExam: "Digital SAT & IELTS"
      };

      this.saveUser();
      document.getElementById("auth-modal")?.classList.remove("active");
      window.app?.notify(`Xush kelibsiz, ${this.currentUser.name}! 🚀`);
    });
  }

  openProfileModal() {
    if (!this.currentUser) {
      this.openAuthModal("login");
      return;
    }

    const modal = document.getElementById("auth-modal");
    const container = document.getElementById("auth-modal-content");
    if (!modal || !container) return;

    modal.classList.add("active");
    const isTeacher = this.currentUser.role === "teacher";

    container.innerHTML = `
      <div style="text-align: center; padding: 12px 6px;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: ${isTeacher ? '#10B981' : '#4F46E5'}; color: #fff; font-size: 32px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px auto; box-shadow: 0 8px 20px rgba(79, 70, 229, 0.25);">
          ${isTeacher ? "👨‍🏫" : "👨‍🎓"}
        </div>
        <h3 style="font-size: 20px; font-weight: 800; color: #0F172A; margin-bottom: 4px;">${this.currentUser.name}</h3>
        <p style="font-size: 13px; color: #64748B; margin-bottom: 18px;">${this.currentUser.email || "yuacademy_student"}</p>

        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; padding: 16px; text-align: left; margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 13px; color: #64748B;">Rol:</span>
            <strong style="font-size: 13px; color: #0F172A;">${isTeacher ? "O'qituvchi / Ustoz" : "O'quvchi / Talaba"}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span style="font-size: 13px; color: #64748B;">Maqsad:</span>
            <strong style="font-size: 13px; color: #4F46E5;">Digital SAT 1500+ & IELTS 8.5</strong>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="font-size: 13px; color: #64748B;">Holati:</span>
            <strong style="font-size: 13px; color: #10B981;">🟢 Faol foydalanuvchi</strong>
          </div>
        </div>

        <div style="display: flex; gap: 10px;">
          <button class="btn btn-secondary" style="flex: 1;" onclick="document.getElementById('auth-modal').classList.remove('active')">
            Yopish
          </button>
          <button class="btn btn-outline-danger" style="flex: 1; border-color: #EF4444; color: #DC2626;" onclick="window.authManager.logout(); document.getElementById('auth-modal').classList.remove('active');">
            Chiqish 🚪
          </button>
        </div>
      </div>
    `;
  }
}

// Global instance
window.authManager = new AuthManager();
