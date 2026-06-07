// ============================================================
// MHBM AVOCAT — CORE JS
// Language System · Navigation · Scroll Animations · Utils
// ============================================================

'use strict';

// ── SVG ICON HELPER ──────────────────────────────────────────
function icon(id, cls = '') {
  return `<svg class="${cls}" aria-hidden="true"><use href="../../assets/icons/icons.svg#icon-${id}"></use></svg>`;
}
function iconAbs(id, cls = '') {
  return `<svg class="${cls}" aria-hidden="true"><use href="${getBasePath()}assets/icons/icons.svg#icon-${id}"></use></svg>`;
}
function getBasePath() {
  const depth = location.pathname.split('/').filter(Boolean).length;
  if (depth === 0) return './';
  if (depth === 1) return './';
  if (depth === 2) return '../';
  return '../../';
}

// ── LANGUAGE SYSTEM ──────────────────────────────────────────
window.MHBM = window.MHBM || {};

MHBM.lang = {
  current: localStorage.getItem('mhbm_lang') || 'fr',

  init() {
    this.apply(this.current);
    this.bindToggle();
  },

  set(lang) {
    this.current = lang;
    localStorage.setItem('mhbm_lang', lang);
    this.apply(lang);
  },

  apply(lang) {
    const strings = lang === 'ar' ? window.LANG_AR : window.LANG_FR;
    if (!strings) return;

    // Direction
    document.documentElement.lang = lang;
    document.body.classList.toggle('rtl', lang === 'ar');

    // Update all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (strings[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = strings[key];
        } else {
          el.innerHTML = strings[key];
        }
      }
    });

    // Update [data-i18n-placeholder]
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (strings[key]) el.placeholder = strings[key];
    });

    // Update lang toggle buttons
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update page title
    if (strings.meta_title) document.title = strings.meta_title;

    // Dispatch event for page-specific handlers
    document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang, strings } }));
  },

  bindToggle() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-lang]');
      if (btn && btn.closest('.lang-toggle')) {
        this.set(btn.dataset.lang);
      }
    });
  },

  t(key) {
    const strings = this.current === 'ar' ? window.LANG_AR : window.LANG_FR;
    return strings?.[key] || key;
  }
};

// ── NAVIGATION ───────────────────────────────────────────────
MHBM.nav = {
  init() {
    this.navbar = document.getElementById('navbar');
    this.hamburger = document.querySelector('.hamburger');
    this.mobileMenu = document.getElementById('mobile-menu');

    this.bindScroll();
    this.bindHamburger();
    this.setActive();
    this.bindDropdowns();
  },

  bindScroll() {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (this.navbar) {
            this.navbar.classList.toggle('scrolled', window.scrollY > 60);
          }
          MHBM.backToTop.update();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  },

  bindHamburger() {
    if (!this.hamburger || !this.mobileMenu) return;
    this.hamburger.addEventListener('click', () => {
      const isOpen = this.mobileMenu.classList.toggle('open');
      this.hamburger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    // Close on link click
    this.mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        this.mobileMenu.classList.remove('open');
        this.hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  },

  setActive() {
    const path = location.pathname;
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const isHome = (href === 'index.html' || href === '/' || href === './') && (path === '/' || path.endsWith('index.html'));
      const isMatch = !isHome && href !== '/' && path.includes(href.replace('.html', ''));
      link.classList.toggle('active', isHome || isMatch);
    });
  },

  bindDropdowns() {
    // Keyboard accessibility
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          item.querySelector('.nav-dropdown')?.blur();
        }
      });
    });
  }
};

// ── SCROLL ANIMATIONS ─────────────────────────────────────────
MHBM.animations = {
  observer: null,

  init() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal], [data-stagger]').forEach(el => {
        el.classList.add('revealed');
      });
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal], [data-stagger]').forEach(el => {
      this.observer.observe(el);
    });
  },

  // Animated counter
  animateCounter(el, target, duration = 1500, prefix = '', suffix = '') {
    const start = performance.now();
    const isFloat = target % 1 !== 0;

    const step = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isFloat
        ? (eased * target).toFixed(1)
        : Math.floor(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target.toLocaleString() + suffix;
    };
    requestAnimationFrame(step);
  },

  initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length) return;

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const val = parseFloat(el.dataset.counter);
          const prefix = el.dataset.prefix || '';
          const suffix = el.dataset.suffix || '';
          this.animateCounter(el, val, 1800, prefix, suffix);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }
};

// ── BACK TO TOP ───────────────────────────────────────────────
MHBM.backToTop = {
  btn: null,
  init() {
    this.btn = document.getElementById('back-to-top');
    if (!this.btn) return;
    this.btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },
  update() {
    if (this.btn) {
      this.btn.classList.toggle('visible', window.scrollY > 400);
    }
  }
};

// ── COOKIE BANNER ─────────────────────────────────────────────
MHBM.cookies = {
  init() {
    if (localStorage.getItem('mhbm_cookies') === 'accepted') return;
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    banner.style.display = 'flex';

    banner.querySelector('#cookie-accept')?.addEventListener('click', () => {
      localStorage.setItem('mhbm_cookies', 'accepted');
      banner.style.animation = 'slideUp 0.3s reverse forwards';
      setTimeout(() => banner.remove(), 300);
    });

    banner.querySelector('#cookie-manage')?.addEventListener('click', () => {
      window.location.href = getBasePath() + 'pages/cookies.html';
    });
  }
};

// ── CONTACT FORM ──────────────────────────────────────────────
MHBM.form = {
  init() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const originalText = btn.innerHTML;

      btn.innerHTML = '<span class="spinner"></span>';
      btn.disabled = true;

      // Simulate API call
      await new Promise(r => setTimeout(r, 1800));

      btn.innerHTML = originalText;
      btn.disabled = false;

      const successEl = document.getElementById('form-success');
      const errorEl = document.getElementById('form-error');

      // Demo: always show success
      if (successEl) {
        form.style.display = 'none';
        successEl.style.display = 'block';
      }
    });
  }
};

// ── ACCORDION / FAQ ───────────────────────────────────────────
MHBM.accordion = {
  init() {
    document.querySelectorAll('.accordion-item').forEach(item => {
      const header = item.querySelector('.accordion-header');
      if (!header) return;

      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close all
        document.querySelectorAll('.accordion-item.open').forEach(other => {
          other.classList.remove('open');
        });
        // Toggle clicked
        if (!isOpen) item.classList.add('open');
      });
    });
  }
};

// ── TOAST NOTIFICATIONS ───────────────────────────────────────
MHBM.toast = {
  show(message, type = 'info', duration = 4000) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-msg">${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(30px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

// ── SMOOTH SCROLL FOR ANCHOR LINKS ────────────────────────────
MHBM.smoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = 100;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }
};

// ── TOPBAR CLOSE ──────────────────────────────────────────────
MHBM.topbar = {
  init() {
    const closeBtn = document.getElementById('topbar-close');
    const topbar = document.getElementById('topbar');
    if (!closeBtn || !topbar) return;
    closeBtn.addEventListener('click', () => {
      topbar.style.height = '0';
      topbar.style.overflow = 'hidden';
      topbar.style.padding = '0';
      document.documentElement.style.setProperty('--topbar-height', '0px');
    });
  }
};

// ── INIT ALL ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  MHBM.lang.init();
  MHBM.nav.init();
  MHBM.animations.init();
  MHBM.animations.initCounters();
  MHBM.backToTop.init();
  MHBM.cookies.init();
  MHBM.form.init();
  MHBM.accordion.init();
  MHBM.smoothScroll.init();
  MHBM.topbar.init();
});
