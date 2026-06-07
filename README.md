# Cabinet MHBM Avocat — Site Web Complet

## 🏛️ À propos du projet

Site web professionnel complet pour le **Cabinet MHBM Avocat**, fondé par Maître Mohamed Haythem Ben Makhlouf, Avocat près la Cour de Cassation, Barreau de Sousse, Tunisie.

---

## 🚀 Démarrage rapide

### Option 1 — Ouvrir directement dans le navigateur
Double-cliquez sur `index.html` pour ouvrir la page d'accueil.

### Option 2 — Serveur local (recommandé)
```bash
# Python 3
cd mhbm-avocat
python3 -m http.server 8000
# Puis ouvrir : http://localhost:8000

# Node.js (npx)
npx serve .

# Live Server (VS Code)
# Clic droit sur index.html → Open with Live Server
```

---

## 📁 Structure du projet

```
mhbm-avocat/
│
├── index.html                    ← Page d'accueil principale
│
├── pages/
│   ├── cabinet.html              ← Le Cabinet (menu)
│   ├── presentation.html         ← Histoire du cabinet
│   ├── equipe.html               ← L'équipe (6 membres)
│   ├── valeurs.html              ← Valeurs fondatrices
│   ├── bureaux.html              ← Adresse et localisation
│   │
│   ├── expertises.html           ← Toutes les expertises
│   ├── expertise-succession.html ← Droit Successoral
│   ├── expertise-immobilier.html ← Droit Immobilier
│   ├── expertise-divorce.html    ← Divorce International
│   ├── expertise-affaires.html   ← Droit des Affaires
│   ├── expertise-fiscalite.html  ← Fiscalité Internationale
│   ├── expertise-nationalite.html← Nationalité Tunisienne
│   ├── expertise-arbitrage.html  ← Arbitrage & Médiation
│   ├── expertise-recouvrement.html← Recouvrement de Créances
│   │
│   ├── tunisiens-etranger.html   ← Tunisiens à l'Étranger
│   ├── consultation-ligne.html   ← Consultation en Ligne
│   │
│   ├── ressources.html           ← Centre de Ressources
│   ├── blog.html                 ← Blog / Articles
│   ├── article-heritage.html     ← Article: Héritage depuis la France
│   ├── article-immobilier.html   ← Article: Achat immobilier non-résident
│   ├── article-consultation.html ← Article: Consulter en ligne
│   ├── guides.html               ← Guides pratiques
│   ├── faq.html                  ← FAQ (accordéon interactif)
│   │
│   ├── honoraires.html           ← Honoraires et tarifs
│   ├── contact.html              ← Page Contact
│   │
│   ├── mentions-legales.html     ← Mentions légales
│   ├── confidentialite.html      ← Politique de confidentialité
│   ├── cookies.html              ← Politique cookies
│   │
│   └── espace-client/
│       ├── login.html            ← Connexion (demo: clic sur "Connexion démo")
│       ├── dashboard.html        ← Tableau de bord
│       ├── dossiers.html         ← Mes dossiers
│       ├── documents.html        ← Documents partagés
│       ├── messages.html         ← Messagerie
│       ├── consultations.html    ← Mes consultations
│       ├── paiements.html        ← Paiements et factures
│       ├── notifications.html    ← Notifications
│       ├── profil.html           ← Mon profil
│       └── parametres.html       ← Paramètres
│
└── assets/
    ├── css/
    │   ├── variables.css         ← Système de couleurs & variables CSS
    │   ├── reset.css             ← Reset & utilitaires de base
    │   ├── typography.css        ← Typographie & échelle de tailles
    │   ├── components.css        ← Tous les composants UI
    │   └── animations.css        ← Animations, transitions, responsive
    │
    ├── js/
    │   ├── core.js               ← Système de langue, navigation, animations
    │   ├── lang/
    │   │   ├── fr.js             ← Chaînes de texte en français
    │   │   └── ar.js             ← Chaînes de texte en arabe
    │   ├── components/
    │   │   └── page-template.js  ← Génération auto nav/footer pages internes
    │   └── espace-client/
    │       └── client-data.js    ← Données démo + système d'auth
    │
    └── icons/
        └── icons.svg             ← Sprite SVG avec 40+ icônes personnalisées
```

---

## 🎨 Identité visuelle

### Palette de couleurs
| Couleur | Usage | Valeur HEX |
|---------|-------|------------|
| Bleu Institutionnel | Couleur principale, identité | `#0A3977` |
| Bleu Profond | Fond header/footer | `#071F45` |
| Bleu Moyen | Éléments interactifs | `#1B4C96` |
| Or Juridique | Accents, CTA secondaires | `#B58A45` |
| Or Clair | Hover, badges | `#C89A55` |
| Blanc Premium | Fond dominant (70-80%) | `#FFFFFF` |
| Gris Doux | Sections alternatives | `#F7F8FA` |

### Typographie
- **Titres** : `Playfair Display` (serif, institutionnel)
- **Corps** : `DM Sans` (sans-serif, lisible)
- **Arabe** : `Tajawal` (optimisé RTL)

---

## 🌐 Fonctionnalités clés

### Bilingue Français / Arabe
- Commutateur de langue dans la barre supérieure
- RTL automatique pour l'arabe
- Toutes les chaînes dans `assets/js/lang/fr.js` et `ar.js`
- Mémorisation de la langue dans `localStorage`

### Navigation
- Barre supérieure informative
- Menu sticky avec dropdowns
- Menu mobile hamburger responsive
- Scroll animations (Intersection Observer)
- Bouton "retour en haut"

### Espace Client (Démonstration)
- Connexion démo : cliquer sur **"Connexion démo"** dans la page login
- Client fictif : **Mahrez Beltaief** (محرز باللطيّف)
- Dashboard complet avec dossiers, messages, consultations, paiements
- **⚠️ Aucune base de données réelle — données fictives uniquement**

### Formulaires
- Validation côté client
- Simulation d'envoi avec feedback visuel
- Bandeau cookie consent
- FAQ avec accordéon interactif

---

## 📋 Checklist de personnalisation

### Contenu à remplacer
- [ ] **Logo** : Remplacer le placeholder texte par `<img src="assets/images/logo.svg" ...>`
  - Format recommandé : SVG ou PNG transparent
  - Taille recommandée : `200 × 60 px`
- [ ] **Photo Maître Ben Makhlouf** : `800 × 1000 px` (format portrait 4:5)
- [ ] **Photos équipe** : `500 × 620 px` par membre (6 photos)
- [ ] **Photo bureau** : `1600 × 900 px`
- [ ] **Photo héro** : `1920 × 1080 px`

### Liens réseaux sociaux (dans footer)
Remplacer les `href="#"` par les vraies URLs dans `index.html` et `components/page-template.js` :
- LinkedIn Maître Ben Makhlouf
- Facebook Cabinet MHBM
- Instagram
- YouTube
- X (Twitter)
- TikTok

### Coordonnées
Vérifier dans `assets/js/lang/fr.js` et `ar.js` :
- Adresse : `Rue des Fleurs, M'saken, Sousse 4070`
- Tél : `+216 73 264 360`
- WhatsApp : `+216 98 258 015`
- Email : `contact@mhbm-avocat.com`

### Google Maps
Remplacer le placeholder carte dans `bureaux.html` et `contact.html` par un iframe Google Maps.

---

## 🔧 Mise en production

### 1. Backend formulaire de contact
Connecter le formulaire (`id="contact-form"`) à un service comme :
- [Formspree](https://formspree.io)
- [EmailJS](https://emailjs.com)
- Backend PHP/Node.js personnalisé

### 2. Espace client réel
Remplacer `assets/js/espace-client/client-data.js` par une vraie API REST :
- Base de données (MySQL, PostgreSQL, MongoDB)
- Authentification JWT ou sessions
- API sécurisée (HTTPS obligatoire)

### 3. SEO & Analytics
- Ajouter Google Analytics / Tag Manager
- Soumettre le sitemap à Google Search Console
- Vérifier les balises Open Graph avec Facebook Debugger

### 4. HTTPS
Déployer uniquement avec HTTPS (SSL/TLS obligatoire pour la crédibilité).

---

## 📊 Pages — Total

| Catégorie | Nombre |
|-----------|--------|
| Pages principales | 6 |
| Pages cabinet | 4 |
| Pages expertises | 9 |
| Articles blog | 3 |
| Ressources | 3 |
| Pages légales | 3 |
| Espace client | 10 |
| **Total** | **38 pages** |

---

## ⚠️ Notes importantes

1. **Données équipe fictives** : Les 6 membres de l'équipe dans `equipe.html` sont des données de démonstration. À remplacer par les vraies informations.

2. **Espace client démo** : Le système de connexion est une simulation UX uniquement. Aucune sécurité réelle n'est implémentée.

3. **Témoignages** : Les témoignages présents sont des exemples. Remplacer par de vrais témoignages clients avec leur accord.

4. **Tarifs** : La page `honoraires.html` affiche "Sur devis" — à compléter selon la politique tarifaire réelle du cabinet.

---

## 🏆 Technologies utilisées

- **HTML5** — Structure sémantique, accessibilité ARIA
- **CSS3** — Custom Properties, Grid, Flexbox, Animations
- **JavaScript Vanilla** — ES6+, Intersection Observer, Fetch API
- **Google Fonts** — Playfair Display, DM Sans, Tajawal
- **SVG** — Sprite d'icônes 100% personnalisées (40+ icônes)

*Aucune dépendance externe, aucun framework — code propre et maintenable.*

---

## 📞 Contact Cabinet

**Cabinet MHBM Avocat**
Maître Mohamed Haythem Ben Makhlouf
Avocat près la Cour de Cassation
Barreau de Sousse

📍 Rue des Fleurs, M'saken, Sousse 4070, Tunisie
📞 +216 73 264 360
💬 WhatsApp : +216 98 258 015
✉️ contact@mhbm-avocat.com
🌐 www.mhbm-avocat.com

---

*© 2025 Cabinet MHBM Avocat — Tous droits réservés*
