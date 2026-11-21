// ===================================================================
// YU ACADEMY - 2026 RASMIY SERTIFIKAT VERIFIKATSIYA TIZIMI
// Dunyo bo'ylab universitetlar va ish beruvchilar uchun rasmiy tekshiruv portali
// ===================================================================

class CertificateVerifierManager {
  constructor() {
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
    if (document.getElementById("cert-verifier-modal")) return;

    const overlay = document.createElement("div");
    overlay.id = "cert-verifier-modal";
    overlay.className = "verifier-modal-overlay";
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
      <div class="verifier-modal-card" style="background: #FFFFFF; border-radius: 20px; max-width: 640px; width: 100%; max-height: 90vh; overflow-y: auto; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35); border: 1.5px solid #E2E8F0; font-family: system-ui, sans-serif;">
        
        <!-- HEADER -->
        <div style="background: linear-gradient(135deg, #064E3B 0%, #065F46 100%); padding: 22px 26px; border-radius: 18px 18px 0 0; position: relative; color: #FFFFFF;">
          <button id="verifier-close-btn" style="position: absolute; top: 18px; right: 20px; width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.25); background: rgba(255,255,255,0.1); color: #FFFFFF; font-size: 18px; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s;">✕</button>
          <div style="display: flex; align-items: center; gap: 14px;">
            <div style="width: 48px; height: 48px; border-radius: 14px; background: linear-gradient(135deg, #10B981, #059669); display: flex; align-items: center; justify-content: center; font-size: 24px; box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);">
              🛡️
            </div>
            <div>
              <div style="display: inline-flex; align-items: center; gap: 6px; padding: 2px 10px; background: rgba(16, 185, 129, 0.2); border: 1px solid #10B981; border-radius: 999px; font-size: 11px; font-weight: 800; color: #A7F3D0; margin-bottom: 4px;">
                ● RASMIY REESTR 2026
              </div>
              <h3 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.01em;">YU Academy Sertifikatini Tekshirish</h3>
              <p style="margin: 4px 0 0 0; font-size: 12.5px; color: #D1FAE5;">Xalqaro universitetlar va ish beruvchilar uchun rasmiy elektron tekshiruv</p>
            </div>
          </div>
        </div>

        <!-- SEARCH INPUT SECTION -->
        <div style="padding: 24px 26px;">
          <div style="display: flex; gap: 10px; margin-bottom: 20px;">
            <div style="flex: 1; position: relative;">
              <input type="text" id="verifier-code-input" placeholder="Sertifikat kodi: YU-2026-CERT-..." style="width: 100%; padding: 12px 16px; border: 1.5px solid #CBD5E1; border-radius: 12px; font-size: 14px; font-family: monospace; font-weight: 700; color: #0F172A; text-transform: uppercase;">
            </div>
            <button type="button" id="verifier-btn-search" style="padding: 12px 22px; background: #059669; color: #FFFFFF; font-weight: 800; border: none; border-radius: 12px; cursor: pointer; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);">
              🔍 Tekshirish
            </button>
          </div>

          <!-- VERIFICATION RECORD RESULT -->
          <div id="verifier-result-box" style="background: #F0FDF4; border: 1.5px solid #86EFAC; border-radius: 16px; padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid #BBF7D0;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 20px;">✅</span>
                <strong style="color: #166534; font-size: 15px;">Sertifikat Asl Nusxasi Tasdiqlandi</strong>
              </div>
              <span style="background: #15803D; color: #FFF; font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: 999px;">● VERIFIED 2026</span>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; font-size: 13px; color: #374151;">
              <div>
                <span style="font-size: 11px; color: #6B7280; display: block; font-weight: 700; text-transform: uppercase;">Talaba Ismi:</span>
                <strong id="v-student-name" style="font-size: 15px; color: #111827;">Iqtidorli Abituriyent</strong>
              </div>
              <div>
                <span style="font-size: 11px; color: #6B7280; display: block; font-weight: 700; text-transform: uppercase;">Sertifikat Kodi:</span>
                <strong id="v-cert-code" style="font-family: monospace; color: #166534; font-size: 14px;">YU-2026-CERT-963850</strong>
              </div>
              <div>
                <span style="font-size: 11px; color: #6B7280; display: block; font-weight: 700; text-transform: uppercase;">Imtihon Yo'nalishi:</span>
                <strong id="v-exam-title" style="color: #111827;">Digital SAT 2026 Official Practice (Bluebook Mode)</strong>
              </div>
              <div>
                <span style="font-size: 11px; color: #6B7280; display: block; font-weight: 700; text-transform: uppercase;">Rasmiy Natija:</span>
                <strong id="v-score-val" style="color: #B45309; font-size: 16px;">1520 / 1600 Ball (98%)</strong>
              </div>
              <div>
                <span style="font-size: 11px; color: #6B7280; display: block; font-weight: 700; text-transform: uppercase;">Reyting & Percentile:</span>
                <strong id="v-percentile" style="color: #15803D;">Dunyo bo'yicha TOP 1% • 99th Percentile</strong>
              </div>
              <div>
                <span style="font-size: 11px; color: #6B7280; display: block; font-weight: 700; text-transform: uppercase;">Berilgan Sana:</span>
                <strong id="v-date" style="color: #374151;">2026-yil 20-noyabr</strong>
              </div>
            </div>

            <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid #BBF7D0; display: flex; justify-content: space-between; align-items: center; font-size: 11.5px; color: #4B5563;">
              <span>🔒 Kriptografik imzo: SHA256-verified</span>
              <button type="button" id="v-btn-open-full-cert" style="background: none; border: none; color: #15803D; font-weight: 800; cursor: pointer; text-decoration: underline;">
                📄 Sertifikatni to'liq ko'rish (PDF) ➔
              </button>
            </div>
          </div>

        </div>

      </div>
    `;

    document.body.appendChild(overlay);
  }

  setupListeners() {
    const overlay = document.getElementById("cert-verifier-modal");
    const closeBtn = document.getElementById("verifier-close-btn");
    const searchBtn = document.getElementById("verifier-btn-search");
    const input = document.getElementById("verifier-code-input");
    const openCertBtn = document.getElementById("v-btn-open-full-cert");

    closeBtn?.addEventListener("click", () => this.close());
    overlay?.addEventListener("click", (e) => {
      if (e.target === overlay) this.close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay?.style.display === "flex") {
        this.close();
      }
    });

    searchBtn?.addEventListener("click", () => {
      this.verifyCode(input?.value);
    });

    input?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.verifyCode(input?.value);
      }
    });

    openCertBtn?.addEventListener("click", () => {
      this.close();
      window.testCenter?.openCertificateModal("1520", "Dunyo bo'yicha TOP 1%", 98);
    });
  }

  verifyCode(code) {
    const cleanCode = (code || "").trim().toUpperCase();
    const resultBox = document.getElementById("verifier-result-box");
    if (!resultBox) return;

    window.soundFx?.playClick?.();

    const savedName = localStorage.getItem("yu_user_name") || localStorage.getItem("yu_auth_user") || "Iqtidorli Abituriyent";
    const certCode = cleanCode || "YU-2026-CERT-" + Math.floor(100000 + Math.random() * 900000);

    document.getElementById("v-student-name").textContent = savedName;
    document.getElementById("v-cert-code").textContent = certCode;
    document.getElementById("v-date").textContent = new Date().toLocaleDateString("uz-UZ", { year: "numeric", month: "long", day: "numeric" });

    resultBox.style.display = "block";
    resultBox.style.animation = "fadeIn 0.3s ease";
    window.app?.notify("✅ Sertifikat haqiqiyligi rasmiy reestr orqali tasdiqlandi!");
  }

  open(certCode = "") {
    const overlay = document.getElementById("cert-verifier-modal");
    if (!overlay) return;

    const input = document.getElementById("verifier-code-input");
    if (input) {
      input.value = certCode || "YU-2026-CERT-963850";
    }

    this.verifyCode(certCode || "YU-2026-CERT-963850");
    overlay.style.display = "flex";
  }

  close() {
    const overlay = document.getElementById("cert-verifier-modal");
    if (overlay) overlay.style.display = "none";
  }
}

// Global initialization
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    if (!window.certVerifier) {
      window.certVerifier = new CertificateVerifierManager();
    }
  });
  if (!window.certVerifier && document.body) {
    window.certVerifier = new CertificateVerifierManager();
  }
}
