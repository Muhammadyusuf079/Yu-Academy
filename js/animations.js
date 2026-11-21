// ===================================================================
// YU ACADEMY - 2026 MODERN ANIMATIONS & INTERACTIVE ENGINE
// Scroll Reveals, Number Counters, Ambient Orbs & Micro-interactions
// ===================================================================

class AnimationEngine {
  constructor() {
    this.hasAnimatedStats = false;
    this.init();
  }

  init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.setupScrollReveal();
    this.setupNumberCounters();
    this.setupButtonFeedback();
  }

  // 1. SCROLL-TRIGGERED ENTRANCE REVEALS
  setupScrollReveal() {
    // Automatically tag cards and sections for smooth reveal
    const targetSelectors = [
      ".advantage-bento-card",
      ".topqir-game-card",
      ".bento-card",
      ".audience-card",
      ".workflow-step-item",
      ".daily-goal-tracker-card",
      ".hero-stat-col"
    ];

    targetSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach((el, idx) => {
        if (!el.classList.contains("reveal-on-scroll")) {
          el.classList.add("reveal-on-scroll");
          // Apply staggered animation delay based on index in row
          const staggerIdx = (idx % 4) + 1;
          el.classList.add(`stagger-${staggerIdx}`);
        }
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          // Optionally unobserve once revealed
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    document.querySelectorAll(".reveal-on-scroll, .reveal-scale-in").forEach(el => {
      observer.observe(el);
    });
  }

  // 2. DYNAMIC NUMBER COUNTER ANIMATION
  setupNumberCounters() {
    const statsSection = document.querySelector(".topqir-hero-stats-row");
    if (!statsSection) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimatedStats) {
          this.hasAnimatedStats = true;
          this.animateCounter("hero-stat-tests", 48930, "+", 1800);
          this.animateCounter("hero-stat-modules", 1850, "+", 1600);
          this.animateCounter("hero-stat-questions", 99.2, "%", 1500, 1);
          this.animateCounter("hero-students-count", 101, "+", 1400);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(statsSection);
  }

  animateCounter(elementId, targetVal, suffix = "", duration = 1500, decimals = 0) {
    const el = document.getElementById(elementId);
    if (!el) return;

    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic formula
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * targetVal;

      if (decimals > 0) {
        el.textContent = currentVal.toFixed(decimals) + suffix;
      } else {
        el.textContent = Math.floor(currentVal).toLocaleString("en-US") + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        if (decimals > 0) {
          el.textContent = targetVal.toFixed(decimals) + suffix;
        } else {
          el.textContent = targetVal.toLocaleString("en-US") + suffix;
        }
      }
    };

    requestAnimationFrame(update);
  }

  // 3. TACTILE BUTTON & INTERACTIVE FEEDBACK
  setupButtonFeedback() {
    document.querySelectorAll("button, .btn, .nav-item-btn, .advantage-bento-card").forEach(btn => {
      btn.addEventListener("click", () => {
        // Subtle click sound effect if sound-fx is available
        window.soundFx?.playClick?.();
      });
    });
  }
}

// Global instance
if (typeof window !== "undefined") {
  window.animationEngine = new AnimationEngine();
}
