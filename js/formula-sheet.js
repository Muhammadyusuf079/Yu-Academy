// ===================================================================
// YU ACADEMY - 2026 INTERAKTIV FORMULALAR VA DESMOS HIYLALARI
// Digital SAT Math Rasmiy Formulalar Varaqasi & 10 Soniyalik Usullar
// ===================================================================

const YU_FORMULA_DATABASE = {
  geometry: {
    title: "📐 Geometriya, Doira va Hajmlar",
    items: [
      {
        formula: "A = πr² • C = 2πr",
        name: "Doira Yuzasi va Aylana Uzunligi",
        desc: "r — radius. Diametr d = 2r. Yuzada kvadrat daraja, aylanada esa 2 koeffitsiyenti bo'ladi.",
        shortcut: "Desmos: r=5 deb kiritsangiz, pi*r^2 darhol hisoblanadi."
      },
      {
        formula: "(x - h)² + (y - k)² = r²",
        name: "Doira Standart Tenglamasi",
        desc: "Markaz koordinatalari: (h, k). Radiusi: r (o'ng tomondagi son r² ekanligini unutmang!).",
        shortcut: "Desmos'ga to'g'ridan-to'g'ri kiritsangiz doirani chizib beradi."
      },
      {
        formula: "A = ½ b • h",
        name: "Uchburchak Yuzasi",
        desc: "b — asos (base), h — unga tushirilgan balandlik (height).",
        shortcut: "Balandlik doimo asosga perpendikulyar bo'lishi shart."
      },
      {
        formula: "V = l • w • h",
        name: "To'g'ri Burchakli Parallelepiped Hajmi",
        desc: "l — uzunlik, w — kenglik, h — balandlik.",
        shortcut: "To'la sirt yuzasi: S = 2(lw + lh + wh)."
      },
      {
        formula: "V = πr²h",
        name: "Silindr Hajmi",
        desc: "Asos yuzasi (πr²) ko'paytirilgan balandlik (h).",
        shortcut: "Konus hajmi silindr hajmining ⅓ qismiga teng: V = ⅓πr²h."
      },
      {
        formula: "V = ⁴⁄₃ πr³",
        name: "Shar (Sfera) Hajmi",
        desc: "Shar sirtining yuzasi esa S = 4πr² ga teng.",
        shortcut: "College Board SAT imtihonida bu formula ekranda beriladi."
      }
    ]
  },
  algebra: {
    title: "📈 Algebra, Kvadrat Tenglamalar & Chiziqlar",
    items: [
      {
        formula: "D = b² - 4ac",
        name: "Diskriminant (Ildizlar Soni)",
        desc: "D > 0: 2 ta haqiqiy ildiz; D = 0: 1 ta karrali ildiz; D < 0: haqiqiy ildiz yo'q.",
        shortcut: "Desmos'da parabola x-o'qini necha marta kesishiga qarab 2 soniyada bilsa bo'ladi."
      },
      {
        formula: "h = -b / (2a) • k = f(h)",
        name: "Parabola Cho'qqisi (Vertex Form)",
        desc: "y = a(x - h)² + k. Agar a > 0 bo'lsa minimum, a < 0 bo'lsa maksimum nuqta.",
        shortcut: "Desmos'da parabola uchi ustiga bosing — (h, k) koordinatasi chiqadi."
      },
      {
        formula: "y = mx + b",
        name: "To'g'ri Chiziq (Slope-Intercept)",
        desc: "m — burchak koeffitsiyenti (Slope = Δy/Δx), b — y-kesishma nuqtasi (0, b).",
        shortcut: "Parallel chiziqlar: m1 = m2. Perpendikulyar: m1 • m2 = -1."
      },
      {
        formula: "x₁,₂ = (-b ± √D) / (2a)",
        name: "Kvadrat Tenglama Ildizlari Formulasi",
        desc: "ax² + bx + c = 0 tenglamasining ildizlarini aniq hisoblash.",
        shortcut: "Viyet teoremasi: x₁ + x₂ = -b/a va x₁ • x₂ = c/a."
      },
      {
        formula: "xᵃ • xᵇ = xᵃ⁺ᵇ • (xᵃ)ᵇ = xᵃᵇ",
        name: "Daraja Xossalari (Exponents)",
        desc: "Bir xil asosli sonlar ko'paytirilganda darajalar qo'shiladi, bo'linganda ayiriladi.",
        shortcut: "x⁻ᵃ = 1 / xᵃ va x^(1/n) = ⁿ√x."
      }
    ]
  },
  trigonometry: {
    title: "📐 Trigonometriya & Maxsus Uchburchaklar",
    items: [
      {
        formula: "a² + b² = c²",
        name: "Pifagor Teoremasi",
        desc: "To'g'ri burchakli uchburchakda gipotenuza kvadrati katetlar kvadratlari yig'indisiga teng.",
        shortcut: "Mashhur Pifagor uchliklari: (3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17)."
      },
      {
        formula: "30° - 60° - 90°",
        name: "Maxsus To'g'ri Burchakli Uchburchak",
        desc: "30° qarshisidagi katet x bo'lsa, 60° qarshisidagi x√3, gipotenuza 2x bo'ladi.",
        shortcut: "SAT Math'da har bir testda kamida 2 ta savol shu qoidaga tushadi."
      },
      {
        formula: "45° - 45° - 90°",
        name: "Teng Yonli To'g'ri Burchakli Uchburchak",
        desc: "Katetlari x va x bo'lsa, gipotenuza x√2 ga teng.",
        shortcut: "Kvadratning diagonali formulasi aynan shu qoidadan kelib chiqadi: d = s√2."
      },
      {
        formula: "sin(x) = cos(90° - x)",
        name: "Kofunksiya Ayniyati (Complementary Angles)",
        desc: "Agar ikki burchak yig'indisi 90° bo'lsa, birining sinusi ikkinchisining kosinusiga teng.",
        shortcut: "Misol: sin(35°) = cos(55°). SAT da eng ko'p qo'llaniladigan trik."
      }
    ]
  },
  desmos: {
    title: "🧮 Desmos 10-Soniyalik Hiylalar (Shortcuts)",
    items: [
      {
        formula: "Tenglamalar Sistemasi",
        name: "Grafik Kesishish Nuqtasi",
        desc: "Ikkala tenglamani Desmos'ga alohida qatorga kiriting. Grafikdagi kulrang kesishish nuqtasini bosing — x va y qiymati darhol ko'rinadi.",
        shortcut: "Qo'lda hisoblamasdan 5 soniyada yechish usuli."
      },
      {
        formula: "y₁ ~ mx₁ + b",
        name: "Chiziqli Regressiya Jadvali",
        desc: "Jadvaldagi nuqtalar berilganda Desmos'da '+' tugmasini bosib jadval qo'shing va ostiga 'y1 ~ mx1 + b' yozing — m va b qiymati chiqadi.",
        shortcut: "Kvadratik regressiya uchun: y1 ~ ax1^2 + bx1 + c."
      },
      {
        formula: "Sliders (Slayderlar)",
        name: "Noma'lum Konstantalarni Topish",
        desc: "Agar tenglamada a yoki k parametri bo'lsa, uni yozib 'add slider' tugmasini bosing va slayderni surib to'g'ri grafikni hosil qiling.",
        shortcut: "Tenglama necha yechimga ega bo'lishini vizual tekshirish."
      },
      {
        formula: "Tengsizliklar Hududini Bo'yash",
        name: "Inequalities Shading",
        desc: "2x + 3y <= 12 deb kiriting — Desmos ruxsat etilgan sohani avtomatik bo'yab beradi va nuqta sohada yotganini 1 soniyada ko'rsatadi.",
        shortcut: "Variantdagi nuqtalarni (x, y) kiritib tekshiring."
      }
    ]
  }
};

class FormulaSheetManager {
  constructor() {
    this.activeTab = "geometry";
    this.init();
  }

  init() {
    this.renderModal();
    this.setupListeners();
  }

  renderModal() {
    if (document.getElementById("formula-sheet-modal")) return;

    const overlay = document.createElement("div");
    overlay.id = "formula-sheet-modal";
    overlay.className = "formula-modal-overlay";
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.zIndex = "99998";
    overlay.style.display = "none";
    overlay.innerHTML = `
      <div class="formula-modal-card">
        <!-- HEADER -->
        <div class="formula-modal-header">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 42px; height: 42px; border-radius: 12px; background: linear-gradient(135deg, #4F46E5, #8B5CF6); display: flex; align-items: center; justify-content: center; font-size: 20px;">📐</div>
            <div>
              <h3 style="margin: 0; font-size: 18px; font-weight: 800; color: #ffffff;">Rasmiy Formulalar Varaqasi & Desmos Hiylalari</h3>
              <p style="margin: 2px 0 0 0; font-size: 12px; color: #94A3B8;">Digital SAT 2026 Bluebook Rasmiy Standarti</p>
            </div>
          </div>
          <button class="dict-close-btn" id="formula-close-btn" title="Yopish (Esc)">✕</button>
        </div>

        <!-- TABS -->
        <div class="formula-modal-tabs">
          <button class="formula-tab-btn active" data-tab="geometry">📐 Geometriya & Doira</button>
          <button class="formula-tab-btn" data-tab="algebra">📈 Algebra & Parabola</button>
          <button class="formula-tab-btn" data-tab="trigonometry">📐 Trigonometriya</button>
          <button class="formula-tab-btn" data-tab="desmos">🧮 Desmos 10s Hiylalar</button>
        </div>

        <!-- BODY -->
        <div class="formula-modal-body" id="formula-body-container">
          <!-- Dynamically populated -->
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  setupListeners() {
    const overlay = document.getElementById("formula-sheet-modal");
    const closeBtn = document.getElementById("formula-close-btn");

    closeBtn?.addEventListener("click", () => this.close());
    overlay?.addEventListener("click", (e) => {
      if (e.target === overlay) this.close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay?.classList.contains("active")) {
        this.close();
      }
    });

    document.querySelectorAll(".formula-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".formula-tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeTab = btn.getAttribute("data-tab") || "geometry";
        this.renderContent();
      });
    });
  }

  open(tab = "geometry") {
    const overlay = document.getElementById("formula-sheet-modal");
    if (!overlay) return;
    this.activeTab = tab;
    document.querySelectorAll(".formula-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tab);
    });
    this.renderContent();
    overlay.style.display = "flex";
    overlay.classList.add("active");
  }

  close() {
    const overlay = document.getElementById("formula-sheet-modal");
    if (!overlay) return;
    overlay.classList.remove("active");
    overlay.style.display = "none";
  }

  renderContent() {
    const container = document.getElementById("formula-body-container");
    if (!container) return;

    const data = YU_FORMULA_DATABASE[this.activeTab];
    if (!data) return;

    let html = `
      <div class="formula-section-card">
        <div class="formula-section-title">
          <span>${data.title}</span>
        </div>
        <div class="formula-items-grid">
          ${data.items.map(it => `
            <div class="formula-item-box">
              <div class="formula-math-display">${it.formula}</div>
              <div style="font-size: 14px; font-weight: 800; color: #1E293B; margin-bottom: 4px;">${it.name}</div>
              <div class="formula-desc-text">${it.desc}</div>
              ${it.shortcut ? `<div class="desmos-shortcut-pill">💡 ${it.shortcut}</div>` : ""}
              <button type="button" class="btn-formula-desmos" onclick="window.formulaSheet.testInDesmos('${encodeURIComponent(it.formula)}')" style="margin-top: 8px; padding: 5px 12px; background: #EEF2FF; color: #4F46E5; border: 1px solid #C7D2FE; border-radius: 8px; font-size: 11.5px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; transition: all 0.2s;">
                🧮 Desmosda Sinab Ko'rish ➔
              </button>
            </div>
          `).join("")}
        </div>
      </div>
    `;

    container.innerHTML = html;
  }

  testInDesmos(formulaStr) {
    this.close();
    window.desmosManager?.toggle(true);
    window.app?.notify("🧮 Formula Desmos kalkulyatorida ochildi!");
  }
}

// Global initialization
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    if (!window.formulaSheet) {
      window.formulaSheet = new FormulaSheetManager();
    }
  });
  if (!window.formulaSheet && document.body) {
    window.formulaSheet = new FormulaSheetManager();
  }
}
