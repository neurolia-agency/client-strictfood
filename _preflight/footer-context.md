## Footer — Context Block

### Dials Section
DESIGN_VARIANCE: 5 | MOTION_INTENSITY: 6 | VISUAL_DENSITY: 3
Source : project-dials.md > Dials Globaux (aucun override section pour Footer — composant layout transversal)

### Contenu Résolu
- Logo : StrictFood + tagline ← positioning.md > tagline ("Le cheat meal qui n'en est pas un") ← wireframe > Footer section
- Navigation : La Carte · Nos Artisans · L'Experience · Avis · Contact ← wireframe > Footer section + Header mirror
- Contact — Téléphone : +33 6 11 74 59 44 ← wireframe > Footer section + about.md
- Contact — Adresse : Perpignan [ADRESSE EXACTE CLIENT REQUISE] ← wireframe > Footer section (placeholder marque dans wireframe)
- Contact — Horaires : [HORAIRES CLIENT REQUIS] ← wireframe > Footer section (placeholder marque dans wireframe)
- Réseaux sociaux : Instagram + TikTok ← wireframe > Footer section + about.md > contact > reseaux sociaux
- Legal link : Mentions legales → /mentions-legales ← wireframe > Footer section + mentions-legales.md route
- Copyright : © 2026 StrictFood — RD FITNESS ← projet + about.md > nom

### Émotion
- Primaire : Non spécifié dans emotion-map.md pour Footer
- Secondaire : Cohérence de fin de parcours (clôture du site)
- Principe directeur : Footer = ancrage local + accessibilité, reflet du header avec légère simplification
- Justification : Footer est composant transversal non documenté en émotions (page utilitaire). Suit l'archétype global (Magician) avec ton Convivialité (invitation au retour, pas fermeture).

### Layout
- Structure 5 colonnes desktop (contrainte wireframe) :
  1. Logo + tagline (25% largeur) — flex column, gap 16px
  2. Navigation (20% largeur) — vertical stack, liens non underlinés (styling standard ghost button)
  3. Contact (20% largeur) — vertical stack (téléphone clickable, adresse, horaires)
  4. Réseaux (10% largeur) — vertical stack d'icones Lucide (Instagram, TikTok, 24px)
  5. Legal (25% largeur) — Mentions Legales link (ghost button)
- Ligne du bas : Séparateur 1px Cendre (bordure subtile, opacity 0.5) + copyright centré en "texte micro" (12px)
- Spacing : max-width conteneur 1280px, padding horizontal clamp(24px, 5vw, 80px) ← visual-vocabulary.md
- Mobile : Stack vertical 1 colonne (order: Logo, Nav, Contact, Socials, Legal), espacement gap 48px entre groupes ← visual-vocabulary.md > "espace respiration"
- Alignement : gauche sur desktop, centré sur mobile
- Fond : var(--color-charbon) = oklch(0.14 0.008 60) (#141210) ← wireframe > Footer + constraints.md #1

### Tokens Actifs
- Fond principal : var(--color-charbon) = oklch(0.14 0.008 60) ← visual-vocabulary.md > couleurs > "fond principal" + globals.css line 25
- Texte principal (logo + nav) : var(--color-creme) = oklch(0.96 0.012 85) (#F5F0E8) ← visual-vocabulary.md > "texte principal" + globals.css line 31
- Texte heading (Logo H3) : var(--color-ivoire) = oklch(0.91 0.015 80) (#E8E0D4) ← visual-vocabulary.md > "texte heading" + globals.css line 32
- Texte secondaire (adresse, horaires) : var(--color-sable) = oklch(0.73 0.025 75) (#B5AA98) ← visual-vocabulary.md > "texte secondaire" + globals.css line 33
- Texte micro (copyright) : var(--color-pierre) = oklch(0.58 0.02 70) (#8A8070) ← visual-vocabulary.md > "texte muted" + globals.css line 34
- Bordure séparatrice : var(--color-cendre) = oklch(0.30 0.01 55) (#3D3832) ← visual-vocabulary.md > couleurs > "bordure subtile" + globals.css line 28
- Hover lien (navigation, legal) : var(--color-or-braise) = oklch(0.68 0.14 75) (#C4922A) ← visual-vocabulary.md > "accent signature" + globals.css line 14
- Icone réseaux (couleur héritage) : currentColor (texte parent) ← ui-kit.md > Icones
- Transition lien : var(--transition-hover) = 300ms cubic-bezier(0.22, 1, 0.36, 1) ← visual-vocabulary.md > "transition standard" + globals.css line 143
- Typographie Logo (H3 style) : var(--font-heading) Space Grotesk, weight 600, var(--font-size-h3) clamp(1.625rem, 2.5vw + 0.5rem, 2.25rem) ← visual-vocabulary.md > "sous-titre" + globals.css line 73, 79-80
- Typographie Navigation (corps confortable) : var(--font-body) Outfit, weight 400, var(--font-size-body) clamp(1rem, 0.5vw + 0.875rem, 1.125rem) ← visual-vocabulary.md > "corps confortable" + globals.css line 74, 83
- Typographie Copyright (micro) : var(--font-size-caption) = 0.75rem (12px) ← visual-vocabulary.md > "texte micro" + globals.css line 86

### Composants UI Kit
- Lien Navigation : Variante ghost (ui-kit.md > Ghost) — background transparent, border none, text Sable hover-to-Or Braise, 300ms transition
- Lien "Mentions Legales" : Variante ghost (ui-kit.md > Ghost)
- Séparateur ligne : 1px solid Cendre, opacity 0.5 (ui-kit.md > Separateurs > Horizontal)
- Icones Réseaux : Lucide 24px, currentColor (ui-kit.md > Icones — choisie pour cohérence géométrique avec Space Grotesk)
- Conteneur : .container-custom — max-width 1280px, margin auto, padding clamp(24px, 5vw, 80px) ← globals.css line 286-291

### Contraintes Applicables
- ON FAIT #1 : Fond Charbon dominant oklch(0.14) ✓ — wireframe spécifie Charbon, conforme constraints.md ← constraints.md > ON FAIT #1
- ON FAIT #2 : Or Braise en accent uniquement (réservé hover lien navigation, < 10% surface) ✓ ← constraints.md > ON FAIT #2
- ON FAIT #3 : Neutres chauds exclusivement — texte Creme/Ivoire/Sable/Pierre, jamais gris pur ✓ ← constraints.md > ON FAIT #3
- ON FAIT #4 : Space Grotesk pour logo (H3), Outfit pour navigation et texte ✓ ← constraints.md > ON FAIT #4
- ON FAIT #5 : Outfit pour body (contact, copyright), weight 400, line-height 1.6 minimum ✓ ← constraints.md > ON FAIT #5
- ON FAIT #6 : Taille minimum 16px mobile (texte navigation = clamp 1rem min) ✓ ← constraints.md > ON FAIT #6
- ON FAIT #10 : Easing cubic-bezier(0.22, 1, 0.36, 1) sur hover lien ✓ ← constraints.md > ON FAIT #10
- ON NE FAIT PAS #2 : Pas de noir pur #000000 — utiliser Charbon oklch(0.14) ✓ ← constraints.md > ON NE FAIT PAS #2
- ON NE FAIT PAS #7 : N/A (footer n'a pas de hero) ← constraints.md > ON NE FAIT PAS #7
- ON NE FAIT PAS #12 : Pas de lorem ipsum — contenu logo (tagline), nav (vrais liens) et legal resolus ✓ ← constraints.md > ON NE FAIT PAS #12

### Technique Recommandée
Aucune technique spéciale de l'arsenal pour Footer (composant layout statique).
Source : project-dials.md > Arsenal Créatif — Footer n'est pas listé dans les techniques retenues (Hero/La Carte/Nos Artisans/L'Experience/Avis/Contact ciblent l'interactivité)

**Justification** : Footer est composant purement informatif et de navigation. Transitions standard (300ms cubic-bezier) sur hover lien suffisent. Pas de parallax, counter animation, sticky scroll, magnetic button, ou stagger. Reflet du Header (wireframe > Header > "Backdrop Blur Header" P0 technique) pouvant être appliqué si copie sticky, mais wireframe Footer ne précise pas sticky — traiter comme section standard.

### Notes Spécifiques
- Wireframe specifie "5 colonnes" mais ne précise pas les proportions — 25%-20%-20%-10%-25% suggéré, à adapter UX
- Téléphone du footer est clickable href="tel:+33611745944" (même que header CTA)
- Tagline dans footer reprend le même contenu que hero (cohérence marque)
- Navigation footer = miroir header (La Carte, Nos Artisans, L'Experience, Avis, Contact) ← wireframe consistency
- Mobile : vérifier ordre des colonnes pour lisibilité (recommandé : Logo > Nav > Contact > Socials > Legal)

