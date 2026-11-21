// Yu Academy - O'rnatilgan Desmos Grafik Kalkulyatori 2026
// Rasmiy College Board Digital SAT Bluebook standarti & Avtonom Offline Matematika Trenajyori

class DesmosManager {
  constructor() {
    this.isOpen = false;
    this.calculator = null;
    this.offlineEngine = null;
    this.isMaximized = false;
    this.mode = "detecting"; // "api" | "offline"
    this.init();
  }

  init() {
    this.createDesmosModal();
    this.setupEventListeners();
  }

  createDesmosModal() {
    if (document.getElementById("desmos-modal")) return;

    const modal = document.createElement("div");
    modal.id = "desmos-modal";
    modal.className = "desmos-overlay";
    modal.innerHTML = `
      <div class="desmos-window" id="desmos-window-box">
        
        <!-- Header Bar -->
        <div class="desmos-header">
          <div class="desmos-title">
            <div class="desmos-icon-box">🧮</div>
            <div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <strong style="font-size: 15px; color: var(--slate-900);">Desmos Graphing Calculator</strong>
                <span class="desmos-badge" id="desmos-mode-badge">Digital SAT Bluebook</span>
              </div>
              <span class="desmos-subtitle" id="desmos-status-text">Rasmiy College Board Imtihon Standarti (2026)</span>
            </div>
          </div>

          <!-- Formula Quick Presets & Window Actions -->
          <div class="desmos-actions">
            <div class="desmos-presets-group">
              <button type="button" class="desmos-btn-pill" id="desmos-btn-linear" title="Chiziqli funksiya (SAT Math)">
                📐 y = 2x + 3
              </button>
              <button type="button" class="desmos-btn-pill" id="desmos-btn-circle" title="Doira tenglamasi (SAT Math)">
                🔵 (x-2)²+(y-3)²=16
              </button>
              <button type="button" class="desmos-btn-pill" id="desmos-btn-parabola" title="Kvadratik parabola">
                📈 y = x² - 4
              </button>
              <button type="button" class="desmos-btn-pill" id="desmos-btn-system" title="Tenglamalar sistemasi (Kesishish)">
                ✨ Tizim (Kesishish)
              </button>
              <button type="button" class="desmos-btn-pill desmos-pill-clear" id="desmos-btn-clear" title="Tozalash">
                🗑️ Tozalash
              </button>
            </div>

            <div class="desmos-win-ctrls">
              <button type="button" class="desmos-icon-btn" id="desmos-max-btn" title="Kattalashtirish (Fullscreen)">
                ⛶
              </button>
              <button type="button" class="modal-close-btn" id="desmos-close-btn" title="Yopish">
                ✕
              </button>
            </div>
          </div>
        </div>

        <!-- Calculator Body -->
        <div class="desmos-body" id="desmos-body-container">
          <!-- 1. Rasmiy Desmos API Container -->
          <div id="desmos-calculator-container" style="width: 100%; height: 100%; display: block; position: relative;"></div>

          <!-- 2. Offline Fallback Interactive Engine (Tarmoq yo'qligida avtomatik ishlaydi) -->
          <div id="desmos-offline-fallback" style="display: none; width: 100%; height: 100%;"></div>
        </div>

      </div>
    `;

    document.body.appendChild(modal);
  }

  setupEventListeners() {
    // Close & Dismiss
    document.getElementById("desmos-close-btn")?.addEventListener("click", () => this.toggle(false));
    
    const modal = document.getElementById("desmos-modal");
    modal?.addEventListener("click", (e) => {
      if (e.target === modal) this.toggle(false);
    });

    // Maximize / Restore
    document.getElementById("desmos-max-btn")?.addEventListener("click", () => this.toggleMaximize());

    // Preset Formulas
    document.getElementById("desmos-btn-linear")?.addEventListener("click", () => {
      this.setExpression("linear_ex", "y = 2x + 3", "#2563EB");
      window.app?.notify("Desmos: y = 2x + 3 chiziqli funksiyasi chizildi! 📐");
    });

    document.getElementById("desmos-btn-circle")?.addEventListener("click", () => {
      this.setExpression("circle_ex", "(x-2)^2 + (y-3)^2 = 16", "#7C3AED");
      window.app?.notify("Desmos: Doira tenglamasi (markazi (2,3), R=4) chizildi! 🔵");
    });

    document.getElementById("desmos-btn-parabola")?.addEventListener("click", () => {
      this.setExpression("parabola_ex", "y = x^2 - 4", "#059669");
      window.app?.notify("Desmos: y = x² - 4 parabolasi chizildi! 📈");
    });

    document.getElementById("desmos-btn-system")?.addEventListener("click", () => {
      this.setExpression("sys_1", "y = 2x - 1", "#DC2626");
      this.setExpression("sys_2", "y = -x + 5", "#2563EB");
      window.app?.notify("Desmos: Tenglamalar tizimi chizildi. Kesishish nuqtasi: (2, 3) ✨");
    });

    document.getElementById("desmos-btn-clear")?.addEventListener("click", () => {
      this.clearAll();
      window.app?.notify("Desmos grafiklari tozalandi 🗑️");
    });
  }

  loadDesmosScript() {
    if (window.Desmos && window.Desmos.GraphingCalculator) {
      return Promise.resolve(window.Desmos);
    }

    return new Promise((resolve, reject) => {
      let script = document.querySelector('script[src*="desmos.com/api"]');
      if (!script) {
        script = document.createElement("script");
        script.src = "https://www.desmos.com/api/v1.9/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6";
        script.async = true;
        document.head.appendChild(script);
      }

      const timeout = setTimeout(() => {
        if (window.Desmos && window.Desmos.GraphingCalculator) {
          resolve(window.Desmos);
        } else {
          reject(new Error("Desmos API script yuklanishi vaqti tugadi"));
        }
      }, 3500);

      script.onload = () => {
        clearTimeout(timeout);
        if (window.Desmos && window.Desmos.GraphingCalculator) {
          resolve(window.Desmos);
        } else {
          reject(new Error("Desmos obyekti aniqlanmadi"));
        }
      };

      script.onerror = () => {
        clearTimeout(timeout);
        reject(new Error("Desmos CDN tarmog'iga ulanib bo'lmadi"));
      };
    });
  }

  mountCalculator() {
    if (this.calculator || this.offlineEngine) return;

    const container = document.getElementById("desmos-calculator-container");
    if (!container) return;

    if (window.Desmos && window.Desmos.GraphingCalculator) {
      this.mountDesmosApi();
    } else {
      this.loadDesmosScript()
        .then(() => {
          this.mountDesmosApi();
        })
        .catch((err) => {
          console.warn("Desmos API ulanmadi, Avtonom Grafikli Dvigatel ishga tushirilmoqda:", err);
          this.mountOfflineEngine();
        });
    }
  }

  mountDesmosApi() {
    const container = document.getElementById("desmos-calculator-container");
    if (!container || !window.Desmos) return;

    try {
      this.calculator = window.Desmos.GraphingCalculator(container, {
        keypad: true,
        expressions: true,
        settingsMenu: true,
        zoomButtons: true,
        expressionsTopbar: true,
        pointsOfInterest: true,
        trace: true,
        border: false,
        showResetButtonOnGraphpaper: true,
        pasteGraphLink: true
      });

      // Dastlabki imtihon misoli
      this.calculator.setExpression({ id: "init_1", latex: "y = 2x + 3", color: "#2563EB" });
      this.calculator.setExpression({ id: "init_2", latex: "y = -x + 6", color: "#7C3AED" });

      this.mode = "api";
      const badge = document.getElementById("desmos-mode-badge");
      if (badge) {
        badge.textContent = "🟢 Rasmiy Desmos API (SAT Bluebook)";
        badge.classList.add("badge-online");
      }
      const statusText = document.getElementById("desmos-status-text");
      if (statusText) {
        statusText.textContent = "Barcha formulalar, f(x), jadvallar va virtual klaviatura faol";
      }

      setTimeout(() => this.calculator?.resize(), 80);
    } catch (e) {
      console.warn("Desmos GraphingCalculator xatosi:", e);
      this.mountOfflineEngine();
    }
  }

  mountOfflineEngine() {
    this.mode = "offline";
    const apiContainer = document.getElementById("desmos-calculator-container");
    const fallbackBox = document.getElementById("desmos-offline-fallback");
    if (apiContainer) apiContainer.style.display = "none";
    if (fallbackBox) {
      fallbackBox.style.display = "block";
      this.offlineEngine = new OfflineMathGraphEngine(fallbackBox);
    }

    const badge = document.getElementById("desmos-mode-badge");
    if (badge) {
      badge.textContent = "⚡ Avtonom SAT Dvigateli (Offline)";
      badge.classList.remove("badge-online");
    }
    const statusText = document.getElementById("desmos-status-text");
    if (statusText) {
      statusText.textContent = "Lokal interaktiv koordinata tizimi va formula tahlilchisi";
    }
  }

  setExpression(id, latex, color = null) {
    if (this.calculator) {
      const expr = { id, latex };
      if (color) expr.color = color;
      this.calculator.setExpression(expr);
    } else if (this.offlineEngine) {
      this.offlineEngine.addExpression(latex, color);
    }
  }

  clearAll() {
    if (this.calculator) {
      this.calculator.setBlank();
    } else if (this.offlineEngine) {
      this.offlineEngine.clearAll();
    }
  }

  toggle(show = null) {
    const modal = document.getElementById("desmos-modal");
    if (!modal) return;

    this.isOpen = show !== null ? show : !this.isOpen;

    if (this.isOpen) {
      modal.classList.add("active");
      this.mountCalculator();
      setTimeout(() => {
        if (this.calculator) this.calculator.resize();
        if (this.offlineEngine) this.offlineEngine.resize();
      }, 100);
    } else {
      modal.classList.remove("active");
    }
  }

  openModal() {
    this.toggle(true);
  }

  closeModal() {
    this.toggle(false);
  }

  toggleMaximize() {
    const winBox = document.getElementById("desmos-window-box");
    if (!winBox) return;

    this.isMaximized = !this.isMaximized;
    winBox.classList.toggle("maximized", this.isMaximized);

    const btn = document.getElementById("desmos-max-btn");
    if (btn) btn.textContent = this.isMaximized ? "🗗" : "⛶";

    setTimeout(() => {
      if (this.calculator) this.calculator.resize();
      if (this.offlineEngine) this.offlineEngine.resize();
    }, 150);
  }
}

// -------------------------------------------------------------
// Offline Fallback Math Engine (Agar tarmoq bo'lmasa ishlaydi)
// -------------------------------------------------------------
class OfflineMathGraphEngine {
  constructor(container) {
    this.container = container;
    this.expressions = [
      { id: "e1", text: "y = 2x + 3", color: "#2563EB", visible: true },
      { id: "e2", text: "y = x^2 - 4", color: "#059669", visible: true }
    ];
    this.colors = ["#2563EB", "#7C3AED", "#059669", "#DC2626", "#D97706", "#0891B2"];
    this.scale = 35; // pixels per math unit
    this.offsetX = 0;
    this.offsetY = 0;
    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;
    this.activeInput = null;

    this.renderLayout();
    this.initCanvas();
    this.renderExpressionsList();
    this.draw();
  }

  renderLayout() {
    this.container.innerHTML = `
      <div class="offline-engine-wrap">
        <!-- Chap: Ifodalar ro'yxati va Klaviatura -->
        <div class="offline-sidebar">
          <div class="offline-sidebar-head">
            <span style="font-weight: 700; font-size: 13px; color: var(--slate-900);">📐 Funksiya & Tenglamalar</span>
            <button type="button" class="btn-offline-add" id="btn-offline-add-expr">+ Yangi ifoda</button>
          </div>

          <div class="offline-expr-list" id="offline-expr-list"></div>

          <!-- Virtual Math Keypad -->
          <div class="offline-keypad">
            <div class="keypad-row">
              <button type="button" class="kp-btn" data-val="x">x</button>
              <button type="button" class="kp-btn" data-val="y">y</button>
              <button type="button" class="kp-btn" data-val="^2">x²</button>
              <button type="button" class="kp-btn" data-val="^">xⁿ</button>
              <button type="button" class="kp-btn" data-val="sqrt(">√</button>
              <button type="button" class="kp-btn" data-val="pi">π</button>
            </div>
            <div class="keypad-row">
              <button type="button" class="kp-btn" data-val=" + ">+</button>
              <button type="button" class="kp-btn" data-val=" - ">-</button>
              <button type="button" class="kp-btn" data-val=" * ">×</button>
              <button type="button" class="kp-btn" data-val=" / ">÷</button>
              <button type="button" class="kp-btn" data-val="(">(</button>
              <button type="button" class="kp-btn" data-val=")">)</button>
            </div>
            <div class="keypad-row">
              <button type="button" class="kp-btn" data-val="sin(">sin</button>
              <button type="button" class="kp-btn" data-val="cos(">cos</button>
              <button type="button" class="kp-btn" data-val="tan(">tan</button>
              <button type="button" class="kp-btn" data-val=" = ">=</button>
              <button type="button" class="kp-btn kp-btn-del" id="kp-btn-backspace">⌫</button>
              <button type="button" class="kp-btn kp-btn-clr" id="kp-btn-clr">C</button>
            </div>
          </div>
        </div>

        <!-- O'ng: Koordinata tekisligi (Canvas) -->
        <div class="offline-canvas-area" id="offline-canvas-wrap">
          <div class="canvas-floating-controls">
            <button type="button" class="c-ctrl-btn" id="btn-c-zoom-in" title="Kattalashtirish">+</button>
            <button type="button" class="c-ctrl-btn" id="btn-c-zoom-out" title="Kichiklashtirish">-</button>
            <button type="button" class="c-ctrl-btn" id="btn-c-zoom-reset" title="Markazlashtirish">🏠</button>
            <span class="c-coord-pill" id="c-coord-display">X: 0.00 | Y: 0.00</span>
          </div>
          <canvas id="offline-math-canvas"></canvas>
        </div>
      </div>
    `;

    document.getElementById("btn-offline-add-expr")?.addEventListener("click", () => {
      this.addNewExpression();
    });

    // Keypad touches
    this.container.querySelectorAll(".kp-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const val = e.currentTarget.getAttribute("data-val");
        if (val) this.insertAtCursor(val);
      });
    });

    document.getElementById("kp-btn-backspace")?.addEventListener("click", () => {
      this.backspaceAtCursor();
    });

    document.getElementById("kp-btn-clr")?.addEventListener("click", () => {
      if (this.activeInput) {
        this.activeInput.value = "";
        this.activeInput.dispatchEvent(new Event("input"));
      }
    });

    // Canvas tools
    document.getElementById("btn-c-zoom-in")?.addEventListener("click", () => {
      this.scale = Math.min(120, this.scale * 1.25);
      this.draw();
    });
    document.getElementById("btn-c-zoom-out")?.addEventListener("click", () => {
      this.scale = Math.max(12, this.scale / 1.25);
      this.draw();
    });
    document.getElementById("btn-c-zoom-reset")?.addEventListener("click", () => {
      this.scale = 35;
      this.offsetX = 0;
      this.offsetY = 0;
      this.draw();
    });
  }

  initCanvas() {
    this.canvas = document.getElementById("offline-math-canvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.resize();

    // Mouse drag for panning
    this.canvas.addEventListener("mousedown", (e) => {
      this.isDragging = true;
      this.startX = e.clientX - this.offsetX;
      this.startY = e.clientY - this.offsetY;
      this.canvas.style.cursor = "grabbing";
    });

    window.addEventListener("mousemove", (e) => {
      if (this.isDragging) {
        this.offsetX = e.clientX - this.startX;
        this.offsetY = e.clientY - this.startY;
        this.draw();
      }

      // Track mouse coordinates
      if (this.canvas) {
        const rect = this.canvas.getBoundingClientRect();
        if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
          const originX = this.canvas.width / 2 + this.offsetX;
          const originY = this.canvas.height / 2 + this.offsetY;
          const mathX = ((e.clientX - rect.left) - originX) / this.scale;
          const mathY = -((e.clientY - rect.top) - originY) / this.scale;
          const coordEl = document.getElementById("c-coord-display");
          if (coordEl) coordEl.textContent = `X: ${mathX.toFixed(2)} | Y: ${mathY.toFixed(2)}`;
        }
      }
    });

    window.addEventListener("mouseup", () => {
      if (this.isDragging) {
        this.isDragging = false;
        if (this.canvas) this.canvas.style.cursor = "crosshair";
      }
    });

    // Mouse wheel zoom
    this.canvas.addEventListener("wheel", (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.15 : 0.88;
      this.scale = Math.max(12, Math.min(150, this.scale * zoomFactor));
      this.draw();
    }, { passive: false });
  }

  resize() {
    const wrap = document.getElementById("offline-canvas-wrap");
    if (!wrap || !this.canvas) return;
    this.canvas.width = wrap.clientWidth;
    this.canvas.height = wrap.clientHeight;
    this.draw();
  }

  renderExpressionsList() {
    const listEl = document.getElementById("offline-expr-list");
    if (!listEl) return;
    listEl.innerHTML = "";

    this.expressions.forEach((expr, idx) => {
      const row = document.createElement("div");
      row.className = "offline-expr-row";
      row.innerHTML = `
        <span class="expr-color-dot" style="background: ${expr.color};"></span>
        <input 
          type="text" 
          class="offline-expr-input" 
          data-id="${expr.id}" 
          value="${expr.text}" 
          placeholder="masalan: y = 2x + 1 yoki x^2 + y^2 = 9"
        >
        <button type="button" class="expr-btn-del" data-id="${expr.id}" title="O'chirish">✕</button>
      `;

      const input = row.querySelector(".offline-expr-input");
      input.addEventListener("focus", (e) => {
        this.activeInput = e.target;
      });
      input.addEventListener("input", (e) => {
        expr.text = e.target.value.trim();
        this.draw();
      });

      row.querySelector(".expr-btn-del").addEventListener("click", () => {
        this.expressions = this.expressions.filter(x => x.id !== expr.id);
        this.renderExpressionsList();
        this.draw();
      });

      listEl.appendChild(row);
      if (idx === this.expressions.length - 1 && !this.activeInput) {
        this.activeInput = input;
      }
    });
  }

  addNewExpression() {
    const newId = "e_" + Date.now();
    const color = this.colors[this.expressions.length % this.colors.length];
    this.expressions.push({ id: newId, text: "", color, visible: true });
    this.renderExpressionsList();
    const lastInput = this.container.querySelector(`.offline-expr-input[data-id="${newId}"]`);
    lastInput?.focus();
  }

  addExpression(text, color = null) {
    const newId = "e_" + Date.now();
    const chosenColor = color || this.colors[this.expressions.length % this.colors.length];
    this.expressions.push({ id: newId, text, color: chosenColor, visible: true });
    this.renderExpressionsList();
    this.draw();
  }

  clearAll() {
    this.expressions = [];
    this.addNewExpression();
    this.draw();
  }

  insertAtCursor(str) {
    if (!this.activeInput) {
      const inputs = this.container.querySelectorAll(".offline-expr-input");
      if (inputs.length > 0) this.activeInput = inputs[inputs.length - 1];
    }
    if (!this.activeInput) return;

    const input = this.activeInput;
    const start = input.selectionStart || input.value.length;
    const end = input.selectionEnd || input.value.length;
    const text = input.value;
    input.value = text.substring(0, start) + str + text.substring(end);
    input.selectionStart = input.selectionEnd = start + str.length;
    input.focus();
    input.dispatchEvent(new Event("input"));
  }

  backspaceAtCursor() {
    if (!this.activeInput) return;
    const input = this.activeInput;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    if (start === end && start > 0) {
      input.value = input.value.substring(0, start - 1) + input.value.substring(end);
      input.selectionStart = input.selectionEnd = start - 1;
    } else if (start !== end) {
      input.value = input.value.substring(0, start) + input.value.substring(end);
      input.selectionStart = input.selectionEnd = start;
    }
    input.focus();
    input.dispatchEvent(new Event("input"));
  }

  draw() {
    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);

    const originX = w / 2 + this.offsetX;
    const originY = h / 2 + this.offsetY;

    // 1. Grid chiziqlari
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#E2E8F0";

    const startMathX = Math.floor((-originX) / this.scale);
    const endMathX = Math.ceil((w - originX) / this.scale);
    const startMathY = Math.floor((originY - h) / this.scale);
    const endMathY = Math.ceil(originY / this.scale);

    // Vertikal grid
    for (let x = startMathX; x <= endMathX; x++) {
      const px = originX + x * this.scale;
      ctx.beginPath();
      ctx.moveTo(px, 0);
      ctx.lineTo(px, h);
      ctx.stroke();
    }

    // Gorizontal grid
    for (let y = startMathY; y <= endMathY; y++) {
      const py = originY - y * this.scale;
      ctx.beginPath();
      ctx.moveTo(0, py);
      ctx.lineTo(w, py);
      ctx.stroke();
    }

    // 2. Markaziy o'qlar (Axes)
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#334155";

    // X o'qi
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(w, originY);
    ctx.stroke();

    // Y o'qi
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, h);
    ctx.stroke();

    // 3. Sonlar va Tillar
    ctx.fillStyle = "#64748B";
    ctx.font = "11px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    const step = this.scale < 25 ? 2 : 1;

    for (let x = startMathX; x <= endMathX; x += step) {
      if (x === 0) continue;
      const px = originX + x * this.scale;
      ctx.fillText(x.toString(), px, originY + 5);
    }

    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (let y = startMathY; y <= endMathY; y += step) {
      if (y === 0) continue;
      const py = originY - y * this.scale;
      ctx.fillText(y.toString(), originX - 6, py);
    }
    ctx.fillText("0", originX - 6, originY + 12);

    // 4. Funksiyalar va grafiklarni chizish
    this.expressions.forEach(expr => {
      if (!expr.text || !expr.visible) return;
      this.plotSingleEquation(ctx, expr, originX, originY, w, h);
    });
  }

  plotSingleEquation(ctx, expr, originX, originY, width, height) {
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = expr.color;

    let eq = expr.text.replace(/\s+/g, "");

    // Doira tekshiruvi: (x-a)^2 + (y-b)^2 = r^2
    const circleRegex = /\(?x([+-]\d+)?\)?\^2\+\(?y([+-]\d+)?\)?\^2=(\d+(\.\d+)?)/;
    const circleMatch = eq.match(circleRegex);

    if (circleMatch) {
      const a = circleMatch[1] ? -parseFloat(circleMatch[1]) : 0;
      const b = circleMatch[2] ? -parseFloat(circleMatch[2]) : 0;
      const r = Math.sqrt(parseFloat(circleMatch[3]));

      const cx = originX + a * this.scale;
      const cy = originY - b * this.scale;
      const cr = r * this.scale;

      ctx.beginPath();
      ctx.arc(cx, cy, cr, 0, Math.PI * 2);
      ctx.stroke();
      return;
    }

    // Chiziqli yoki standart y = f(x)
    let funcStr = eq;
    if (funcStr.startsWith("y=")) funcStr = funcStr.substring(2);

    // Formulani JS ga aylantirish
    const jsFuncStr = funcStr
      .replace(/\^/g, "**")
      .replace(/(\d+)([a-zA-Z])/g, "$1*$2")
      .replace(/sqrt\(/g, "Math.sqrt(")
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/pi/g, "Math.PI");

    let f = null;
    try {
      f = new Function("x", `return ${jsFuncStr};`);
      f(1); // Test execution
    } catch (e) {
      return; // Noto'g'ri formula
    }

    ctx.beginPath();
    let started = false;

    // Har bir piksel bo'yicha hisoblash
    for (let px = 0; px <= width; px += 2) {
      const mathX = (px - originX) / this.scale;
      try {
        const mathY = f(mathX);
        if (isNaN(mathY) || !isFinite(mathY)) {
          started = false;
          continue;
        }

        const py = originY - mathY * this.scale;

        // Ekrandan juda uzoqqa ketmasligi uchun
        if (py < -500 || py > height + 500) {
          started = false;
          continue;
        }

        if (!started) {
          ctx.moveTo(px, py);
          started = true;
        } else {
          ctx.lineTo(px, py);
        }
      } catch (err) {
        started = false;
      }
    }

    ctx.stroke();
  }
}

// Global instansiya
window.desmosManager = new DesmosManager();
