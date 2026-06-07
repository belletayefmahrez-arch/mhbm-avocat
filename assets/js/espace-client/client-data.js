// ============================================================
// MHBM AVOCAT — ESPACE CLIENT DEMO DATA
// ⚠️ DONNÉES FICTIVES — À REMPLACER EN PRODUCTION
// ============================================================

window.DEMO_CLIENT = {
  id: 'client-demo-001',
  nom: 'Mahrez Beltaief',
  nom_ar: 'محرز باللطيّف',
  email: 'mahrez.beltaief@demo.com',
  phone: '+33 6 12 34 56 78',
  pays: 'France (Paris)',
  since: '2023',
  avatar: null,

  dossiers: [
    { id: 'DOS-2024-087', nom: 'Succession Ben Beltaief', type: 'Droit Successoral', status: 'active', date: '12 Jan 2024', avocat: 'Me Ben Makhlouf', next: '15 Mar 2024' },
    { id: 'DOS-2024-041', nom: 'Acquisition Appartement Sousse', type: 'Droit Immobilier', status: 'active', date: '08 Mar 2024', avocat: 'Me Trabelsi', next: '22 Mar 2024' },
    { id: 'DOS-2023-219', nom: 'Procuration Générale', type: 'Procuration', status: 'closed', date: '05 Nov 2023', avocat: 'Me Gharbi', next: null },
  ],

  documents: [
    { id: 'doc-1', nom: 'Acte de décès — Père', type: 'PDF', date: '10 Jan 2024', taille: '1.2 MB', dossier: 'DOS-2024-087' },
    { id: 'doc-2', nom: 'Certificat de nationalité', type: 'PDF', date: '10 Jan 2024', taille: '0.8 MB', dossier: 'DOS-2024-087' },
    { id: 'doc-3', nom: 'Titre foncier — Sousse', type: 'PDF', date: '08 Mar 2024', taille: '2.1 MB', dossier: 'DOS-2024-041' },
    { id: 'doc-4', nom: 'Compromis de vente (draft)', type: 'DOCX', date: '15 Mar 2024', taille: '0.4 MB', dossier: 'DOS-2024-041' },
    { id: 'doc-5', nom: 'Procuration générale signée', type: 'PDF', date: '05 Nov 2023', taille: '0.6 MB', dossier: 'DOS-2023-219' },
  ],

  messages: [
    { id: 'msg-1', de: 'Me Ben Makhlouf', sujet: 'Mise à jour dossier succession', corps: 'Bonjour M. Beltaief, j\'ai reçu les documents du tribunal. Nous avons bien avancé. Je vous recontacte mardi.', date: '2024-03-14', lu: true },
    { id: 'msg-2', de: 'Me Trabelsi', sujet: 'Rendez-vous notaire confirmé', corps: 'Bonjour, le rendez-vous chez le notaire est confirmé pour le 22 mars à 10h. Merci de confirmer votre présence.', date: '2024-03-15', lu: false },
    { id: 'msg-3', de: 'Secrétariat MHBM', sujet: 'Facture honoraires — Mars 2024', corps: 'Veuillez trouver ci-joint la facture correspondant aux honoraires du mois de mars 2024.', date: '2024-03-16', lu: false },
  ],

  consultations: [
    { id: 'rdv-1', type: 'Vidéo (Zoom)', date: '22 Mar 2024', heure: '10:00', avocat: 'Me Ben Makhlouf', sujet: 'Point succession', status: 'upcoming' },
    { id: 'rdv-2', type: 'Vidéo (Google Meet)', date: '08 Mar 2024', heure: '14:30', avocat: 'Me Trabelsi', sujet: 'Revue du compromis', status: 'done' },
    { id: 'rdv-3', type: 'Téléphone', date: '15 Jan 2024', heure: '09:00', avocat: 'Me Ben Makhlouf', sujet: 'Premiers éléments succession', status: 'done' },
  ],

  paiements: [
    { id: 'pay-1', ref: 'FAC-2024-031', montant: '800 TND', date: '01 Mar 2024', status: 'payé', dossier: 'DOS-2024-087' },
    { id: 'pay-2', ref: 'FAC-2024-018', montant: '500 TND', date: '10 Feb 2024', status: 'payé', dossier: 'DOS-2024-041' },
    { id: 'pay-3', ref: 'FAC-2024-047', montant: '1,200 TND', date: '15 Mar 2024', status: 'en attente', dossier: 'DOS-2024-087' },
  ],

  notifications: [
    { id: 'notif-1', texte: 'Nouveau message de Me Trabelsi', date: '15 Mar 2024', lu: false, lien: 'messages.html' },
    { id: 'notif-2', texte: 'Document ajouté : Compromis de vente', date: '15 Mar 2024', lu: false, lien: 'documents.html' },
    { id: 'notif-3', texte: 'Facture disponible — Mars 2024', date: '16 Mar 2024', lu: false, lien: 'paiements.html' },
    { id: 'notif-4', texte: 'Rappel RDV demain à 10h00', date: '21 Mar 2024', lu: false, lien: 'consultations.html' },
    { id: 'notif-5', texte: 'Dossier DOS-2023-219 clôturé', date: '05 Nov 2023', lu: true, lien: 'dossiers.html' },
  ]
};

// ── AUTH SYSTEM (DEMO) ────────────────────────────────────────
window.MHBM_AUTH = {
  SESSION_KEY: 'mhbm_session',

  isLoggedIn() {
    return !!sessionStorage.getItem(this.SESSION_KEY);
  },

  login(email, password) {
    // Demo: accept any credentials
    const session = {
      client: window.DEMO_CLIENT,
      loginTime: Date.now(),
      isDemo: true
    };
    sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
    return true;
  },

  demoLogin() {
    return this.login('demo@mhbm-avocat.com', 'demo123');
  },

  logout() {
    sessionStorage.removeItem(this.SESSION_KEY);
    window.location.href = 'login.html';
  },

  getSession() {
    const raw = sessionStorage.getItem(this.SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  },

  getClient() {
    const session = this.getSession();
    return session?.client || null;
  },

  requireAuth() {
    if (!this.isLoggedIn()) {
      window.location.href = 'login.html';
      return false;
    }
    return true;
  }
};
