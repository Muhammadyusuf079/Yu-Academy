// Yu Academy - 2026 Ultra-Responsive Audio FX & Confetti Particle Engine
// Zero external libraries, pure Web Audio API synthesis and canvas-based confetti particles

class SoundFXEngine {
  constructor() {
    this.audioCtx = null;
    this.isMuted = false;
    this.confettiCanvas = null;
    this.confettiCtx = null;
    this.confettiParticles = [];
    this.isAnimRunning = false;
    try {
      this.isMuted = localStorage.getItem("yu_sound_muted") === "true";
    } catch (e) {}

    // Initialize audio context lazily on first user interaction
    const initAudio = () => {
      this.getAudioContext();
      window.removeEventListener("pointerdown", initAudio);
      window.removeEventListener("keydown", initAudio);
    };
    window.addEventListener("pointerdown", initAudio, { once: true });
    window.addEventListener("keydown", initAudio, { once: true });
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    try {
      localStorage.setItem("yu_sound_muted", this.isMuted.toString());
    } catch (e) {}
    if (!this.isMuted) {
      this.playClick();
    }
    this.updateSoundPillUI();
    return this.isMuted;
  }

  updateSoundPillUI() {
    document.querySelectorAll(".sound-toggle-btn").forEach(btn => {
      btn.innerHTML = this.isMuted ? "<span>🔇</span>" : "<span>🔊</span>";
      btn.classList.toggle("muted", this.isMuted);
    });
  }

  // 1. Crisp, tactile button click (Frequency sweep 580Hz -> 220Hz, 15ms)
  playClick() {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.015);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.016);
    } catch (e) {}
  }

  // 2. Uplifting victory chord (C5 -> E5 -> G5) for correct answers and XP gain
  playSuccess() {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        const startTime = now + idx * 0.06;
        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(0.12, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.36);
      });
    } catch (e) {}
  }

  // 3. Gentle non-punishing feedback for mistakes (soft two-tone descent)
  playWrong() {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.18);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.19);
    } catch (e) {}
  }

  // 4. Sparkling streak celebration chime (4 rising harmonics with sweet decay)
  playStreak() {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const freqs = [440, 554.37, 659.25, 880, 1108.73]; // A4, C#5, E5, A5, C#6
      const now = ctx.currentTime;

      freqs.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        const start = now + i * 0.05;
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.001, start);
        gain.gain.linearRampToValueAtTime(0.14, start + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + 0.46);
      });
    } catch (e) {}
  }

  // 5. Pleasant coin / reward sound (E6 -> B6 sparkling chime)
  playCoin() {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = "sine";
      osc2.type = "sine";
      osc1.frequency.setValueAtTime(987.77, now); // B5
      osc1.frequency.setValueAtTime(1318.51, now + 0.07); // E6
      osc2.frequency.setValueAtTime(1975.53, now + 0.07); // B6

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.38);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now + 0.07);
      osc1.stop(now + 0.4);
      osc2.stop(now + 0.4);
    } catch (e) {}
  }

  playFanfare() {
    this.playGrandCelebration();
  }

  triggerCelebration() {
    this.triggerGrandCelebration();
  }

  // ================= 6. PERSISTENT CANVAS & PARTICLES ENGINE =================
  initConfettiCanvas() {
    let canvas = document.getElementById("yu-confetti-canvas");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = "yu-confetti-canvas";
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "9999999";
      document.body.appendChild(canvas);
    }

    const dpr = window.devicePixelRatio || 1;
    const targetW = window.innerWidth * dpr;
    const targetH = window.innerHeight * dpr;

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
      const ctx = canvas.getContext("2d");
      ctx.scale(dpr, dpr);
      this.confettiCtx = ctx;
    } else if (!this.confettiCtx) {
      this.confettiCtx = canvas.getContext("2d");
      this.confettiCtx.scale(dpr, dpr);
    }

    this.confettiCanvas = canvas;
    return this.confettiCtx;
  }

  triggerConfetti(targetElem = null, count = 85) {
    const ctx = this.initConfettiCanvas();
    if (!ctx) return;

    let originX = window.innerWidth / 2;
    let originY = window.innerHeight * 0.45;

    if (targetElem && typeof targetElem.getBoundingClientRect === "function") {
      const rect = targetElem.getBoundingClientRect();
      originX = rect.left + rect.width / 2;
      originY = rect.top + rect.height / 2;
    }

    // Festive Color Palette: Cyan, Sky Blue, Sapphire, Gold, Emerald, Purple, Pink, Rose, Pure White
    const colors = [
      "#00E5FF", "#38BDF8", "#2563EB", "#F59E0B", "#10B981",
      "#8B5CF6", "#EC4899", "#F43F5E", "#FBBF24", "#FFFFFF"
    ];
    const shapes = ["rect", "circle", "ribbon"];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 9;
      this.confettiParticles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.8,
        w: 6 + Math.random() * 8,
        h: 4 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 14,
        alpha: 1,
        decay: 0.007 + Math.random() * 0.007,
        gravity: 0.22,
        drag: 0.965,
        wobble: Math.random() * 10,
        wobbleSpeed: 0.08 + Math.random() * 0.06
      });
    }

    if (!this.isAnimRunning) {
      this.isAnimRunning = true;
      requestAnimationFrame(this.renderConfettiLoop.bind(this));
    }
  }

  renderConfettiLoop() {
    if (!this.confettiCanvas || !this.confettiCtx) {
      this.isAnimRunning = false;
      return;
    }

    const ctx = this.confettiCtx;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    let aliveCount = 0;
    const nextParticles = [];

    for (let i = 0; i < this.confettiParticles.length; i++) {
      const p = this.confettiParticles[i];
      p.vx *= p.drag;
      p.vy = p.vy * p.drag + p.gravity;
      p.x += p.vx + Math.sin(p.wobble) * 0.8;
      p.y += p.vy;
      p.rotation += p.rotSpeed;
      p.wobble += p.wobbleSpeed;
      p.alpha -= p.decay;

      if (p.alpha > 0.01 && p.y < window.innerHeight + 80) {
        aliveCount++;
        nextParticles.push(p);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;

        if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "ribbon") {
          ctx.fillRect(-p.w / 2, -p.h / 4, p.w, p.h / 2);
        } else {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }
        ctx.restore();
      }
    }

    this.confettiParticles = nextParticles;

    if (aliveCount > 0) {
      requestAnimationFrame(this.renderConfettiLoop.bind(this));
    } else {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      this.isAnimRunning = false;
    }
  }

  // ================= 7. GRAND EXAM CELEBRATION FANFARE & MULTI-CANNON CONFETTI =================
  playGrandCelebration() {
    if (this.isMuted) return;
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // Stage 1: Triumphant fanfare arpeggio (C4 -> G4 -> C5 -> E5 -> G5 -> C6)
      const fanfareNotes = [
        { freq: 261.63, delay: 0.00, dur: 0.22, vol: 0.12 }, // C4
        { freq: 392.00, delay: 0.12, dur: 0.22, vol: 0.13 }, // G4
        { freq: 523.25, delay: 0.24, dur: 0.25, vol: 0.14 }, // C5
        { freq: 659.25, delay: 0.36, dur: 0.30, vol: 0.15 }, // E5
        { freq: 783.99, delay: 0.48, dur: 0.35, vol: 0.16 }, // G5
        { freq: 1046.50, delay: 0.65, dur: 0.85, vol: 0.18 }, // C6 (Grand Finale note)
        { freq: 1318.51, delay: 0.68, dur: 0.85, vol: 0.12 }, // E6 (Sparkling third)
      ];

      fanfareNotes.forEach(({ freq, delay, dur, vol }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "triangle";
        const start = now + delay;
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.001, start);
        gain.gain.linearRampToValueAtTime(vol, start + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(start);
        osc.stop(start + dur + 0.05);
      });
    } catch (e) {}
  }

  triggerGrandCelebration() {
    this.playGrandCelebration();

    // Wave 1: Center blast (100 particles)
    this.triggerConfetti(null, 100);

    // Wave 2: Left corner cannon at 180ms
    setTimeout(() => {
      this.triggerConfetti({
        getBoundingClientRect: () => ({
          left: 60,
          top: window.innerHeight * 0.75,
          width: 0,
          height: 0
        })
      }, 75);
    }, 180);

    // Wave 3: Right corner cannon at 360ms
    setTimeout(() => {
      this.triggerConfetti({
        getBoundingClientRect: () => ({
          left: window.innerWidth - 60,
          top: window.innerHeight * 0.75,
          width: 0,
          height: 0
        })
      }, 75);
    }, 360);

    // DOM Confetti Rain Burst (Guarantees 100% visible festive explosion across all browsers)
    try {
      const domBurst = document.createElement("div");
      domBurst.className = "yu-grand-celebration-burst";
      const colors = ["#00E5FF", "#38BDF8", "#2563EB", "#F59E0B", "#10B981", "#8B5CF6", "#EC4899", "#FFD700"];
      let piecesHtml = "";
      for (let i = 0; i < 40; i++) {
        const left = (i * 2.5) + (Math.random() * 2);
        const delay = (Math.random() * 0.8).toFixed(2);
        const dur = (2.2 + Math.random() * 1.2).toFixed(2);
        const col = colors[i % colors.length];
        const size = Math.floor(10 + Math.random() * 8);
        piecesHtml += `<div class="yu-confetti-piece" style="left: ${left}%; background: ${col}; width: ${size}px; height: ${size + 4}px; animation-delay: ${delay}s; animation-duration: ${dur}s;"></div>`;
      }
      domBurst.innerHTML = piecesHtml;
      document.body.appendChild(domBurst);
      setTimeout(() => {
        if (domBurst.parentNode) domBurst.parentNode.removeChild(domBurst);
      }, 3500);
    } catch (e) {}
  }
}

// Global singleton instance
window.yuAudio = new SoundFXEngine();
window.soundFx = window.yuAudio;
