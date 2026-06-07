// ============================================================
// MHBM AVOCAT — PAGE TEMPLATE BUILDER
// Injects shared nav, footer, topbar for inner pages
// ============================================================

(function() {
  // Detect depth from pages/ subdirectory
  const path = location.pathname;
  const inEspaceClient = path.includes('/espace-client/');
  const base = inEspaceClient ? '../../' : '../';

  // ── INJECT SVG ICONS ────────────────────────────────────────
  fetch(base + 'assets/icons/icons.svg')
    .then(r => r.text())
    .then(t => {
      const div = document.getElementById('svg-icons-container');
      if (div) div.innerHTML = t;
    });

  // ── BUILD TOPBAR ─────────────────────────────────────────────
  function buildTopbar() {
    return `
    <div id="topbar" role="banner">
      <div class="container">
        <div class="topbar-message">
          <svg class="globe-icon" width="14" height="14" aria-hidden="true"><use href="${base}assets/icons/icons.svg#icon-globe"></use></svg>
          <span data-i18n="topbar_msg">🌍 Vous vivez à l'étranger ? Consultez un avocat tunisien en ligne — Réponse sous 24h</span>
          &nbsp;<a href="${base}pages/consultation-ligne.html" class="topbar-cta" data-i18n="topbar_cta">Prendre rendez-vous →</a>
        </div>
        <div class="topbar-right">
          <a href="tel:+21673264360" style="color:rgba(255,255,255,0.7);font-size:var(--text-xs);display:flex;align-items:center;gap:4px;">
            <svg width="12" height="12"><use href="${base}assets/icons/icons.svg#icon-phone"></use></svg>
            +216 73 264 360
          </a>
          <div class="lang-toggle" role="group" aria-label="Langue / اللغة">
            <button data-lang="fr" class="active" aria-label="Français">FR</button>
            <button data-lang="ar" aria-label="العربية">AR</button>
          </div>
          <button id="topbar-close" style="background:none;border:none;color:rgba(255,255,255,0.4);cursor:pointer;font-size:18px;line-height:1;padding:2px 4px;" aria-label="Fermer">×</button>
        </div>
      </div>
    </div>`;
  }

  // ── BUILD NAVBAR ─────────────────────────────────────────────
  function buildNavbar() {
    return `
    <nav id="navbar" role="navigation" aria-label="Navigation principale">
      <div class="container navbar-inner">
        <div class="navbar-logo">
          <a href="${base}index.html" class="logo-placeholder" aria-label="Cabinet MHBM Avocat — Accueil">
            <span class="logo-name">MHBM <span style="color:var(--gold-600)">Avocat</span></span>
            <span class="logo-tagline" data-i18n="hero_badge">Avocat près la Cour de Cassation</span>
          </a>
        </div>
        <div class="navbar-nav" role="menubar">
          <a href="${base}index.html" class="nav-link" role="menuitem" data-i18n="nav_home">Accueil</a>
          <div class="nav-item" role="none">
            <a href="${base}pages/cabinet.html" class="nav-link" role="menuitem" data-i18n="nav_cabinet">Le Cabinet</a>
            <div class="nav-dropdown" role="menu">
              <a href="${base}pages/presentation.html" role="menuitem" data-i18n="nav_cabinet_presentation">Présentation</a>
              <a href="${base}pages/equipe.html" role="menuitem" data-i18n="nav_cabinet_equipe">L'Équipe</a>
              <a href="${base}pages/valeurs.html" role="menuitem" data-i18n="nav_cabinet_valeurs">Nos Valeurs</a>
              <a href="${base}pages/bureaux.html" role="menuitem" data-i18n="nav_cabinet_bureaux">Nos Bureaux</a>
            </div>
          </div>
          <div class="nav-item" role="none">
            <a href="${base}pages/expertises.html" class="nav-link" role="menuitem" data-i18n="nav_expertises">Expertises</a>
            <div class="nav-dropdown" role="menu">
              <a href="${base}pages/expertise-succession.html" role="menuitem" data-i18n="nav_exp_succession">Droit Successoral</a>
              <a href="${base}pages/expertise-immobilier.html" role="menuitem" data-i18n="nav_exp_immobilier">Droit Immobilier</a>
              <a href="${base}pages/expertise-divorce.html" role="menuitem" data-i18n="nav_exp_divorce">Divorce International</a>
              <a href="${base}pages/expertise-affaires.html" role="menuitem" data-i18n="nav_exp_affaires">Droit des Affaires</a>
              <div class="dropdown-divider"></div>
              <a href="${base}pages/expertise-fiscalite.html" role="menuitem" data-i18n="nav_exp_fiscalite">Fiscalité</a>
              <a href="${base}pages/expertise-nationalite.html" role="menuitem" data-i18n="nav_exp_nationalite">Nationalité</a>
              <a href="${base}pages/expertise-arbitrage.html" role="menuitem" data-i18n="nav_exp_arbitrage">Arbitrage</a>
              <a href="${base}pages/expertise-recouvrement.html" role="menuitem" data-i18n="nav_exp_recouvrement">Recouvrement</a>
            </div>
          </div>
          <a href="${base}pages/tunisiens-etranger.html" class="nav-link" role="menuitem" data-i18n="nav_etranger">Tunisiens à l'Étranger</a>
          <a href="${base}pages/consultation-ligne.html" class="nav-link" role="menuitem" data-i18n="nav_consultation">Consultation</a>
          <div class="nav-item" role="none">
            <a href="${base}pages/ressources.html" class="nav-link" role="menuitem" data-i18n="nav_ressources">Ressources</a>
            <div class="nav-dropdown" role="menu">
              <a href="${base}pages/blog.html" role="menuitem" data-i18n="nav_ressources_blog">Blog & Articles</a>
              <a href="${base}pages/guides.html" role="menuitem" data-i18n="nav_ressources_guides">Guides Pratiques</a>
              <a href="${base}pages/faq.html" role="menuitem" data-i18n="nav_ressources_faq">FAQ</a>
            </div>
          </div>
          <a href="${base}pages/honoraires.html" class="nav-link" role="menuitem" data-i18n="nav_honoraires">Honoraires</a>
          <a href="${base}pages/contact.html" class="nav-link" role="menuitem" data-i18n="nav_contact">Contact</a>
        </div>
        <div class="navbar-right">
          <a href="${base}pages/espace-client/login.html" class="btn btn--ghost btn--sm" data-i18n="nav_espace_client">Espace Client</a>
          <a href="${base}pages/consultation-ligne.html" class="btn btn--primary btn--sm" data-i18n="nav_cta">Prendre RDV</a>
          <button class="hamburger" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
    <div id="mobile-menu" role="dialog" aria-label="Menu mobile">
      <a href="${base}index.html" class="mobile-nav-link" data-i18n="nav_home">Accueil</a>
      <a href="${base}pages/cabinet.html" class="mobile-nav-link" data-i18n="nav_cabinet">Le Cabinet</a>
      <div class="mobile-nav-sub">
        <a href="${base}pages/presentation.html" data-i18n="nav_cabinet_presentation">Présentation</a>
        <a href="${base}pages/equipe.html" data-i18n="nav_cabinet_equipe">L'Équipe</a>
        <a href="${base}pages/valeurs.html" data-i18n="nav_cabinet_valeurs">Nos Valeurs</a>
      </div>
      <a href="${base}pages/expertises.html" class="mobile-nav-link" data-i18n="nav_expertises">Expertises</a>
      <div class="mobile-nav-sub">
        <a href="${base}pages/expertise-succession.html" data-i18n="nav_exp_succession">Droit Successoral</a>
        <a href="${base}pages/expertise-immobilier.html" data-i18n="nav_exp_immobilier">Droit Immobilier</a>
        <a href="${base}pages/expertise-divorce.html" data-i18n="nav_exp_divorce">Divorce International</a>
        <a href="${base}pages/expertise-affaires.html" data-i18n="nav_exp_affaires">Droit des Affaires</a>
        <a href="${base}pages/expertise-fiscalite.html" data-i18n="nav_exp_fiscalite">Fiscalité</a>
        <a href="${base}pages/expertise-nationalite.html" data-i18n="nav_exp_nationalite">Nationalité</a>
        <a href="${base}pages/expertise-arbitrage.html" data-i18n="nav_exp_arbitrage">Arbitrage</a>
        <a href="${base}pages/expertise-recouvrement.html" data-i18n="nav_exp_recouvrement">Recouvrement</a>
      </div>
      <a href="${base}pages/tunisiens-etranger.html" class="mobile-nav-link" data-i18n="nav_etranger">Tunisiens à l'Étranger</a>
      <a href="${base}pages/consultation-ligne.html" class="mobile-nav-link" data-i18n="nav_consultation">Consultation en Ligne</a>
      <a href="${base}pages/blog.html" class="mobile-nav-link" data-i18n="nav_ressources_blog">Blog</a>
      <a href="${base}pages/faq.html" class="mobile-nav-link" data-i18n="nav_ressources_faq">FAQ</a>
      <a href="${base}pages/honoraires.html" class="mobile-nav-link" data-i18n="nav_honoraires">Honoraires</a>
      <a href="${base}pages/contact.html" class="mobile-nav-link" data-i18n="nav_contact">Contact</a>
      <a href="${base}pages/espace-client/login.html" class="mobile-nav-link" data-i18n="nav_espace_client">Espace Client</a>
      <div style="margin-top:var(--space-6);display:flex;flex-direction:column;gap:var(--space-3);">
        <a href="${base}pages/consultation-ligne.html" class="btn btn--primary btn--lg" data-i18n="nav_cta">Prendre RDV</a>
        <a href="https://wa.me/21698258015" class="btn btn--outline btn--lg" target="_blank" rel="noopener">💬 WhatsApp</a>
      </div>
    </div>`;
  }

  // ── BUILD FOOTER ─────────────────────────────────────────────
  function buildFooter() {
    return `
    <footer id="footer" aria-label="Pied de page">
      <div class="container">
        <div class="footer-main">
          <div class="footer-brand">
            <div class="footer-logo logo-placeholder">
              <span class="logo-name">MHBM <span style="color:var(--gold-400)">Avocat</span></span>
              <span class="logo-tagline">Avocat près la Cour de Cassation</span>
            </div>
            <p class="footer-desc" data-i18n="footer_desc">Cabinet de référence en droit tunisien, fondé en 2010. Expertise, discrétion et engagement pour chaque client.</p>
            <div class="footer-social">
              <a href="#" class="footer-social-btn" aria-label="LinkedIn" target="_blank" rel="noopener"><svg><use href="${base}assets/icons/icons.svg#icon-linkedin"></use></svg></a>
              <a href="#" class="footer-social-btn" aria-label="Facebook" target="_blank" rel="noopener"><svg><use href="${base}assets/icons/icons.svg#icon-facebook"></use></svg></a>
              <a href="#" class="footer-social-btn" aria-label="Instagram" target="_blank" rel="noopener"><svg><use href="${base}assets/icons/icons.svg#icon-instagram"></use></svg></a>
              <a href="#" class="footer-social-btn" aria-label="YouTube" target="_blank" rel="noopener"><svg><use href="${base}assets/icons/icons.svg#icon-youtube"></use></svg></a>
              <a href="#" class="footer-social-btn" aria-label="X" target="_blank" rel="noopener"><svg><use href="${base}assets/icons/icons.svg#icon-x"></use></svg></a>
              <a href="https://wa.me/21698258015" class="footer-social-btn" aria-label="WhatsApp" target="_blank" rel="noopener"><svg><use href="${base}assets/icons/icons.svg#icon-whatsapp"></use></svg></a>
            </div>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footer_nav_title">Navigation</h4>
            <ul>
              <li><a href="${base}index.html" data-i18n="nav_home">Accueil</a></li>
              <li><a href="${base}pages/cabinet.html" data-i18n="nav_cabinet">Le Cabinet</a></li>
              <li><a href="${base}pages/equipe.html" data-i18n="nav_cabinet_equipe">L'Équipe</a></li>
              <li><a href="${base}pages/expertises.html" data-i18n="nav_expertises">Expertises</a></li>
              <li><a href="${base}pages/tunisiens-etranger.html" data-i18n="nav_etranger">Tunisiens à l'Étranger</a></li>
              <li><a href="${base}pages/consultation-ligne.html" data-i18n="nav_consultation">Consultation en Ligne</a></li>
              <li><a href="${base}pages/blog.html" data-i18n="nav_ressources_blog">Blog</a></li>
              <li><a href="${base}pages/faq.html" data-i18n="nav_ressources_faq">FAQ</a></li>
              <li><a href="${base}pages/honoraires.html" data-i18n="nav_honoraires">Honoraires</a></li>
              <li><a href="${base}pages/contact.html" data-i18n="nav_contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footer_contact_title">Contact</h4>
            <div style="display:flex;flex-direction:column;gap:var(--space-4);">
              <div class="footer-contact-item"><svg><use href="${base}assets/icons/icons.svg#icon-pin"></use></svg><span>Rue des Fleurs, M'saken, Sousse 4070, Tunisie</span></div>
              <div class="footer-contact-item"><svg><use href="${base}assets/icons/icons.svg#icon-phone"></use></svg><a href="tel:+21673264360">+216 73 264 360</a></div>
              <div class="footer-contact-item"><svg><use href="${base}assets/icons/icons.svg#icon-whatsapp"></use></svg><a href="https://wa.me/21698258015" target="_blank" rel="noopener">+216 98 258 015</a></div>
              <div class="footer-contact-item"><svg><use href="${base}assets/icons/icons.svg#icon-mail"></use></svg><a href="mailto:contact@mhbm-avocat.com">contact@mhbm-avocat.com</a></div>
              <div class="footer-contact-item"><svg><use href="${base}assets/icons/icons.svg#icon-globe"></use></svg><a href="https://www.mhbm-avocat.com" target="_blank" rel="noopener">www.mhbm-avocat.com</a></div>
            </div>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footer_hours_title">Horaires</h4>
            <div class="footer-hours">
              <div class="hour-row"><span class="day" data-i18n="footer_hours_1">Lundi – Vendredi</span><span data-i18n="footer_hours_1v">08:00 – 17:30</span></div>
              <div class="hour-row"><span class="day" data-i18n="footer_hours_2">Samedi</span><span data-i18n="footer_hours_2v">08:00 – 13:30</span></div>
              <div class="hour-row"><span class="day" data-i18n="footer_hours_3">Dimanche</span><span data-i18n="footer_hours_3v">Fermé</span></div>
            </div>
            <p style="font-size:var(--text-xs);color:rgba(255,255,255,0.35);margin-top:var(--space-4);line-height:1.5;" data-i18n="footer_hours_note">Consultations en ligne disponibles en dehors des horaires sur rendez-vous</p>
            <div style="margin-top:var(--space-5);"><a href="${base}pages/espace-client/login.html" class="btn btn--outline-white btn--sm" style="width:100%;" data-i18n="nav_espace_client">Espace Client</a></div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-inner">
            <div class="footer-copyright"><div data-i18n="footer_copyright">© 2025 Cabinet MHBM Avocat — Tous droits réservés<br>Maître Mohamed Haythem Ben Makhlouf, Avocat près la Cour de Cassation, inscrit au Barreau de Sousse</div></div>
            <div class="footer-legal-links">
              <a href="${base}pages/mentions-legales.html" data-i18n="footer_legal">Mentions légales</a>
              <a href="${base}pages/confidentialite.html" data-i18n="footer_privacy">Confidentialité</a>
              <a href="${base}pages/cookies.html" data-i18n="footer_cookies">Cookies</a>
            </div>
          </div>
          <div class="footer-disclaimer" data-i18n="footer_disclaimer">Les informations publiées sur ce site ont un caractère général et informatif. Elles ne constituent pas un avis juridique et ne sauraient se substituer à une consultation individuelle avec un avocat.</div>
        </div>
      </div>
    </footer>
    <div id="cookie-banner" style="display:none;" role="dialog" aria-label="Gestion des cookies">
      <p data-i18n="cookie_text">Ce site utilise des cookies pour améliorer votre expérience.</p>
      <div class="cookie-actions">
        <button id="cookie-accept" class="btn btn--primary btn--sm" data-i18n="cookie_accept">Accepter tous les cookies</button>
        <button id="cookie-manage" class="btn btn--ghost btn--sm" style="color:rgba(255,255,255,0.6);" data-i18n="cookie_manage">Gérer mes préférences</button>
      </div>
    </div>
    <button id="back-to-top" aria-label="Retour en haut">
      <svg width="20" height="20" style="fill:none;stroke:var(--white);stroke-width:2;" aria-hidden="true"><use href="${base}assets/icons/icons.svg#icon-arrow-up"></use></svg>
    </button>
    <div id="toast-container" role="status" aria-live="polite"></div>`;
  }

  // ── INJECT INTO PAGE ──────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('page-wrapper');
    if (!wrapper) return;

    // Prepend topbar + navbar
    const headerDiv = document.createElement('div');
    headerDiv.innerHTML = buildTopbar() + buildNavbar();
    wrapper.insertBefore(headerDiv, wrapper.firstChild);

    // Append footer
    wrapper.insertAdjacentHTML('beforeend', buildFooter());
  });

})();
