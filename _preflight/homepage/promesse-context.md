# La Promesse — Context Block

## Dials Section
**DESIGN_VARIANCE: 5 | MOTION_INTENSITY: 6 | VISUAL_DENSITY: 3**

Source: `project-dials.md > Dials par Section > La Promesse` (override de dials globaux)

---

## Contenu Résolu

### Accroche H2
- **Texte** : "Et si ton burger respectait ton corps ?" ← `homepage.md > Section 2 : La Promesse > Contenu > Accroche H2`
- **Typographie** : `visual-vocabulary.md > Typographie > "titre section"` = clamp(2rem, 3.5vw + 0.5rem, 3rem) / weight 700 / Space Grotesk ← `globals.css > --font-size-h2`
- **Couleur** : var(--color-ivoire) = oklch(0.91 0.015 80) ← `globals.css > h2 > color`
- **Alignment** : Centré, max-width 640px ← `homepage.md > Layout`

### Sous-texte Narratif
- **Texte** : "Tu connais la scene. Le burger qui te fait envie, et la petite voix qui te dit que tu vas le regretter. Chez StrictFood, on a decide que cette voix avait tort." ← `homepage.md > Section 2 : La Promesse > Contenu > Sous-texte narratif`
- **Typographie** : `visual-vocabulary.md > Typographie > "corps large"` = clamp(1.125rem, 0.75vw + 0.875rem, 1.25rem) / weight 400 / line-height 1.5 / DM Sans ← `globals.css > --font-size-body-lg`
- **Couleur** : var(--color-sable) = oklch(0.73 0.025 75) ← `globals.css > p > color`

### Bloc 1 — Cuisson

#### Titre H3
- **Texte** : "Cuit a chaleur pulsee. Pas une goutte d'huile." ← `homepage.md > Section 2 : La Promesse > Contenu > Bloc 1 — Cuisson > Titre H3`
- **Typographie** : `visual-vocabulary.md > Typographie > "sous-titre"` = clamp(1.625rem, 2.5vw + 0.5rem, 2.25rem) / weight 600 / Space Grotesk ← `globals.css > --font-size-h3`
- **Couleur** : var(--color-ivoire) = oklch(0.91 0.015 80)

#### Texte Narratif Bloc 1
- **Contenu** : "courte narration sur le remplacement des bains de friture par des Airfryers professionnels — meme croustillant, zero gras" ← `homepage.md > Section 2 : La Promesse > Contenu > Bloc 1 — Cuisson > Texte narratif`
- **Typographie** : corps standard DM Sans, weight 400, line-height 1.6 ← `globals.css > p`
- **Couleur** : var(--color-sable) = oklch(0.73 0.025 75)

#### Élément Visuel "0%"
- **Format** : Typographie massive animée, clamp(4rem, 8vw, 8rem) ← `homepage.md > Section 2 : La Promesse > Contenu > Bloc 1 — Cuisson > Element visuel`
- **Animation** : Counter animation (100→0, 800ms, scroll-triggered) ← `homepage.md > Interaction > Counter animation "0%"`
- **Easing** : cubic-bezier(0.22, 1, 0.36, 1) ← `globals.css > --easing-standard`
- **Durée** : 800ms ← `homepage.md > Technique > Counter Animation (800ms)`
- **Couleur** : var(--color-cuivre) = oklch(0.67 0.15 68) — accent signature ← `visual-vocabulary.md > Couleurs > "accent signature"`
- **Font** : Oswald, weight 700 (typo display/massive) ← `globals.css > --font-display`

#### Badge Pill "ZERO HUILE DE CUISSON"
- **Texte** : "ZERO HUILE DE CUISSON" ← `homepage.md > Section 2 : La Promesse > Contenu > Bloc 1 — Cuisson > Badge pill`
- **Variante** : nutritionnelle (Feuille Grillee) ← `homepage.md > Bloc 1 — Cuisson > Badge pill : "ZERO HUILE DE CUISSON" — ui-kit.md > badges > variante nutritionnelle (Sauge Fraiche)`
- **Couleur fond** : var(--color-feuille) oklch(0.52 0.06 145 / 0.12) — Feuille Grillee a 12% opacite ← `globals.css > --color-feuille` et `ui-kit.md > Badges / Tags > Variante nutritionnelle`
- **Couleur texte** : var(--color-feuille) oklch(0.52 0.06 145) — Feuille Grillee ← `ui-kit.md > Badges / Tags > Variante nutritionnelle`
- **Font** : DM Sans, weight 500, 0.75rem, uppercase, letter-spacing 0.08em ← `ui-kit.md > Badges / Tags`
- **Radius** : var(--radius-pill) = 999px ← `globals.css > --radius-pill`
- **Padding** : 4px 12px ← `ui-kit.md > Badges / Tags`

#### Visuel Bloc 1
- **Fichier** : `2025-11-22_17-18-46_UTC_2.jpg` — "Burger boeuf angle rapproche, food porn — montre le croustillant sans huile" ← `photo-selection.md > La Promesse (Section 2) > P0 > Usage: Bloc Cuisson`
- **Aspect Ratio** : food photography standard, eclairage dramatique chaud

### Bloc 2 — Macros

#### Titre H3
- **Texte** : "Un burger que tu peux lire avant de le manger." ← `homepage.md > Section 2 : La Promesse > Contenu > Bloc 2 — Macros > Titre H3`
- **Typographie** : `visual-vocabulary.md > Typographie > "sous-titre"` = clamp(1.625rem, 2.5vw + 0.5rem, 2.25rem) / weight 600 / Space Grotesk ← `globals.css > --font-size-h3`
- **Couleur** : var(--color-ivoire) = oklch(0.91 0.015 80)

#### Texte Narratif Bloc 2
- **Contenu** : "narration sur la transparence nutritionnelle — quand tu connais les macros, plus besoin de choisir entre plaisir et discipline" ← `homepage.md > Section 2 : La Promesse > Contenu > Bloc 2 — Macros > Texte narratif`
- **Typographie** : corps standard DM Sans, weight 400, line-height 1.6
- **Couleur** : var(--color-sable) = oklch(0.73 0.025 75)

#### Mini-Cards Macros (2-3 produits)
- **Produit 1** : "STRICT Boeuf" ← `carte.md > BURGERS > STRICT Boeuf`
  - Kcal: 596 ← `carte.md > BURGERS > STRICT Boeuf > Kcal`
  - Protéines: 53g ← `carte.md > BURGERS > STRICT Boeuf > Prot.`
- **Produit 2** : "STRICT MAX Poulet" ← `carte.md > BURGERS > STRICT MAX Poulet`
  - Kcal: 946 ← `carte.md > BURGERS > STRICT MAX Poulet > Kcal`
  - Protéines: 112g ← `carte.md > BURGERS > STRICT MAX Poulet > Prot.`
- **Produit 3** : "Cookie protéiné" ← `carte.md > DESSERTS > Cookie protéiné`
  - Kcal: 273 ← `carte.md > DESSERTS > Cookie protéiné > Kcal`
  - Protéines: 26g ← `carte.md > DESSERTS > Cookie protéiné > Prot.`
- **Style Card** : `ui-kit.md > Cards > Style autorise`
  - Background: var(--color-surface) = oklch(0.22 0.01 60) — Fumee
  - Border: 1px solid var(--color-border) oklch(0.30 0.01 55) — Cendre
  - Radius: 16px (visual-vocabulary.md > "radius large")
  - Shadow: var(--shadow-subtle) = 0 1px 2px rgba(0, 0, 0, 0.3), 0 0 0 1px oklch(0.25 0.01 60)
  - Padding: 24px
  - Image aspect-ratio: 4/3 pour les produits food
- **Interaction** : Hover subtil sur mini-cards ← `homepage.md > Interaction > hover subtil sur mini-cards macros`
  - translateY(-4px), 300ms cubic-bezier(0.22, 1, 0.36, 1) ← `visual-vocabulary.md > Transitions & Animations > "hover subtil"`

#### Badge Pill "MACROS AFFICHEES"
- **Texte** : "MACROS AFFICHEES" ← `homepage.md > Section 2 : La Promesse > Contenu > Bloc 2 — Macros > Badge pill`
- **Variante** : nutritionnelle (Feuille Grillee) ← `homepage.md > Bloc 2 — Macros > Badge pill : "MACROS AFFICHEES" — ui-kit.md > badges > variante nutritionnelle (Sauge Fraiche)`
- **Couleur fond** : var(--color-feuille) oklch(0.52 0.06 145 / 0.12) — Feuille Grillee a 12% opacite
- **Couleur texte** : var(--color-feuille) oklch(0.52 0.06 145) — Feuille Grillee
- **Font** : DM Sans, weight 500, 0.75rem, uppercase, letter-spacing 0.08em
- **Radius** : var(--radius-pill) = 999px
- **Padding** : 4px 12px

### Phrase de Fermeture
- **Texte** : "Le cheat meal qui n'en est pas un." ← `homepage.md > Section 2 : La Promesse > Contenu > Phrase de fermeture` (même que `positioning.md > tagline`)
- **Typographie** : `visual-vocabulary.md > Typographie > "typo massive"` = clamp(2.5rem, 5vw + 1rem, 4.5rem) / weight 700 / Oswald ← `globals.css > --font-size-h1`
- **Couleur** : var(--color-cuivre) = oklch(0.67 0.15 68) — Cuivre Braise ← `visual-vocabulary.md > Couleurs > "accent signature"`
- **Alignment** : Centré ← `homepage.md > Layout > Phrase de fermeture centree`

---

## Émotion

### Émotions Primaire & Secondaire
- **Primaire** : Révélation ("ce fast-food n'est pas ce que tu crois") ← `emotion-map.md > Homepage > La Promesse > Emotion primaire`
- **Secondaire** : Soulagement ("je peux me faire plaisir sans culpabiliser") ← `emotion-map.md > Homepage > La Promesse > Emotion secondaire`

### Tension Visuelle
- **Description** : Narration émotionnelle (storytelling, ton personnel) vs preuves concrètes (0% huile animé, macros chiffrées) — le cœur et la tête convaincus en même temps ← `emotion-map.md > Homepage > La Promesse > Tension visuelle`

### Élément Signature
- "0%" en typographie massive animée (counter 100→0) + mini-cards macros + badges pill Feuille Grillee + phrase de fermeture tagline Cuivre Braise ← `emotion-map.md > Homepage > La Promesse > Element signature`

---

## Layout

### Structure Générale
- Accroche H2 + sous-texte centrés, max-width 640px ← `homepage.md > Section 2 : Layout`
- 2 blocs empilés en split asymétrique (55/45) avec alternance gauche-droite (rythme Z) ← `homepage.md > Section 2 : Layout`
- Phrase de fermeture centrée ← `homepage.md > Section 2 : Layout`
- Mobile: stack vertical (tous éléments en colonne unique) ← `homepage.md > Section 2 : Layout > Mobile`

### Spacing
- Entre sections: 160px desktop / 96px mobile (var(--spacing-section) / var(--spacing-section-mobile)) ← `visual-vocabulary.md > Espacements > "whitespace genereux/mobile"`
- Padding interne: 120px top/bottom desktop / 64px mobile (var(--spacing-section-padding) / var(--spacing-section-padding-mobile)) ← `visual-vocabulary.md > Espacements > "padding section/mobile"`
- Gap entre blocs: 48-64px (espace respiration) ← `visual-vocabulary.md > Espacements > "espace respiration"`
- Gap entre éléments composant: 32px (gap composant) ← `visual-vocabulary.md > Espacements > "gap composant"`

### Breakpoints
- Desktop: > 1024px — split 55/45 avec alternance
- Mobile: < 640px — stack vertical, full-width

### Alternance Gauche-Droite (Rythme Z)
- Bloc 1 (Cuisson): Image à droite, texte à gauche (55% texte / 45% image) ← implicite du wireframe
- Bloc 2 (Macros): Image à gauche, texte à droite (45% image / 55% texte) ← implicite du wireframe

---

## Tokens Actifs

### Couleurs Fond
- **Fond section** : var(--color-ebene) = oklch(0.18 0.008 60) — Ebene ← `homepage.md > Section 2 : Fond` et `visual-vocabulary.md > Couleurs > "fond alternatif"`
- **Surface cards** : var(--color-surface) = oklch(0.22 0.01 60) — Fumee ← `ui-kit.md > Cards > Background`
- **Bordures cards** : var(--color-border) = oklch(0.30 0.01 55) — Cendre ← `ui-kit.md > Cards > Border`

### Couleurs Texte
- **Headings (H2, H3)** : var(--color-ivoire) = oklch(0.91 0.015 80) — Ivoire ← `globals.css > h2, h3 > color`
- **Body text** : var(--color-sable) = oklch(0.73 0.025 75) — Sable ← `globals.css > p > color`
- **Accent (phrase fermeture, "0%")** : var(--color-cuivre) = oklch(0.67 0.15 68) — Cuivre Braise ← `visual-vocabulary.md > Couleurs > "accent signature"`
- **Badge nutritionnel** : var(--color-feuille) = oklch(0.52 0.06 145) — Feuille Grillee ← `globals.css > --color-feuille`

### Typographie
- **H2 (Accroche)** : var(--font-heading) = Space Grotesk, var(--font-size-h2), weight 700, line-height 1.15, letter-spacing -0.02em ← `globals.css > h2`
- **H3 (Titres blocs)** : var(--font-heading) = Space Grotesk, var(--font-size-h3), weight 600, line-height 1.15 ← `globals.css > h3`
- **Body (narrations)** : var(--font-body) = DM Sans, var(--font-size-body), weight 400, line-height 1.6 ← `globals.css > p`
- **"0%" (typo massive)** : var(--font-display) = Oswald, clamp(4rem, 8vw, 8rem), weight 700, line-height tight, letter-spacing -0.04em ← `visual-vocabulary.md > Typographie > "typo massive"`
- **Phrase fermeture (H1 style)** : var(--font-display) = Oswald, var(--font-size-h1), weight 700, line-height 1.05, letter-spacing -0.02em ← `globals.css > h1`

### Transitions & Animations
- **Counter "0%"** : 800ms cubic-bezier(0.22, 1, 0.36, 1), scroll-triggered, 100→0 ← `visual-vocabulary.md > Transitions & Animations > "animation macro"`
- **Apparition douce (H2, narrations)** : translateY(24px) > translateY(0), opacity 0 > 1, 600ms cubic-bezier(0.22, 1, 0.36, 1) ← `visual-vocabulary.md > Transitions & Animations > "apparition douce"`
- **Apparition décalée (stagger blocs)** : Même "apparition douce" + stagger 100ms entre siblings ← `visual-vocabulary.md > Transitions & Animations > "apparition decalee"` et `homepage.md > Interaction > apparition decalee (stagger 150ms entre blocs)` — Note: wireframe dit 150ms, visual-vocabulary dit 100ms standard; utiliser 150ms per wireframe
- **Hover subtil cards** : translateY(-4px), 300ms cubic-bezier(0.22, 1, 0.36, 1) ← `visual-vocabulary.md > Transitions & Animations > "hover subtil"`
- **Easing standard** : cubic-bezier(0.22, 1, 0.36, 1) — toutes les transitions ← `globals.css > --easing-standard`

### Formes & Radius
- **Cards macros** : radius 16px (visual-vocabulary.md > "radius large") ← `ui-kit.md > Cards > Radius`
- **Badges** : radius 999px (visual-vocabulary.md > "radius pill") ← `ui-kit.md > Badges / Tags > Radius`
- **Images inline** : radius 12px (visual-vocabulary.md > "radius standard") ← `visual-vocabulary.md > Formes & Radius > "radius standard"`

### Ombres
- **Cards par défaut** : var(--shadow-subtle) = 0 1px 2px rgba(0, 0, 0, 0.3), 0 0 0 1px oklch(0.25 0.01 60) ← `globals.css > --shadow-subtle`
- **Cards hover** : var(--shadow-hover) = 0 4px 12px rgba(0, 0, 0, 0.4), border-color oklch(0.35 0.01 55) ← `globals.css > --shadow-hover`

---

## Composants UI Kit

### Badges
- **Type** : Variante nutritionnelle (Feuille Grillee) ← `ui-kit.md > Badges / Tags > Variante nutritionnelle`
- **Deux badges dans la section** :
  1. "ZERO HUILE DE CUISSON" (Bloc 1)
  2. "MACROS AFFICHEES" (Bloc 2)
- **Style complet** : DM Sans 0.75rem, uppercase, letter-spacing 0.08em, radius 999px, padding 4px 12px ← `ui-kit.md > Badges / Tags`

### Cards (Mini-Cards Macros)
- **Style** : Conforme ui-kit.md > Cards > Style autorise ← `ui-kit.md > Cards`
- **Background** : var(--color-surface) oklch(0.22 0.01 60)
- **Border** : 1px solid var(--color-border) oklch(0.30 0.01 55)
- **Radius** : 16px
- **Shadow** : var(--shadow-subtle)
- **Padding** : 24px
- **Image aspect-ratio** : 4/3
- **Contenu** : Nom produit (H4), kcal + protéines (body), visuel produit
- **Interaction** : Hover subtil (translateY -4px, 300ms)

### Pas de boutons dans cette section
- Aucun bouton CTA requis pour La Promesse (contrairement au Hero) ← implicite du wireframe

---

## Contraintes Applicables

### ON FAIT (obligatoire pour cette section)

- **#1 Fond Charbon/Ebene dominant** : Section utilise fond Ebene alternée ← `constraints.md > ON FAIT > #1`
- **#4 Oswald pour H1, Space Grotesk pour H2-H5** : "0%" en Oswald, H2/H3 en Space Grotesk, "phrase fermeture" en Oswald ← `constraints.md > ON FAIT > #4`
- **#5 DM Sans pour body** : Tous les corps de texte en DM Sans weight 400, line-height 1.6 ← `constraints.md > ON FAIT > #5`
- **#7 Espacement sections 160px/96px minimum** : Respecter la whitespace généreuse entre La Promesse et sections adjacentes ← `constraints.md > ON FAIT > #7`
- **#10 Easing unique** : cubic-bezier(0.22, 1, 0.36, 1) pour TOUS les transitions ← `constraints.md > ON FAIT > #10`
- **#11 Apparitions au scroll** : Tous éléments de contenu apparaissent via translateY(24px) + opacity, stagger 150ms ← `constraints.md > ON FAIT > #11`

### ON NE FAIT PAS (interdit)

- **#4 Pas d'uppercase sur H1/H2** : H2 et H3 en sentence case, jamais UPPERCASE (sauf labels/badges < 14px) ← `constraints.md > ON NE FAIT PAS > #4`
- **#10 Pas d'animations > 800ms** : Counter "0%" = 800ms exactement, transitions standard 300-600ms ← `constraints.md > ON NE FAIT PAS > #10`
- **#12 Pas de lorem ipsum** : Tous textes depuis positioning.md, carte.md, wireframe — pas de placeholder génériques ← `constraints.md > ON NE FAIT PAS > #12`

---

## Technique Recommandée

### Counter Animation (P1)
- **Technique** : "0%" animée au scroll (100→0, 800ms) — moment de drama visuel ← `homepage.md > Technique > Counter Animation`
- **Source** : `project-dials.md > Arsenal Creatif Selectionne > Techniques retenues > Counter Animation`
- **Section cible** : La Promesse (Bloc Cuisson)
- **Émotion servie** : Drama (chiffre "0"), validation du différenciateur clé ← `project-dials.md > Arsenal Creatif > Counter Animation > Emotion servie`
- **Implémentation** : Scroll-triggered via IntersectionObserver, animate from 100 to 0, duration 800ms, easing cubic-bezier(0.22, 1, 0.36, 1) ← `homepage.md > Interaction`

### Staggered Appear (P0)
- **Technique** : Révélation progressive des 2 blocs (150ms stagger) ← `homepage.md > Technique > Staggered Appear`
- **Source** : `project-dials.md > Arsenal Creatif Selectionne > Techniques retenues > Apparition decalee (stagger)`
- **Cibles** : Bloc Cuisson (entier) → Bloc Macros (entier)
- **Timing** : 150ms entre chaque bloc ← `homepage.md > Interaction > apparition decalee (stagger 150ms entre blocs)`
- **Easing** : cubic-bezier(0.22, 1, 0.36, 1)
- **Justification** : Rythme la narration en 2 temps — d'abord la cuisson (émotion), puis les macros (preuve) ← `emotion-map.md > La Promesse > Techniques frontend-design2 recommandees > Justification`

### Scroll-triggered Fade In (P0)
- **Technique** : Révélation progressive au scroll (apparition douce) ← `visual-vocabulary.md > Transitions & Animations > "apparition douce"`
- **Éléments affectés** : H2, narratifs, blocs entiers
- **Style** : translateY(24px) + opacity 0 → 1, 600ms cubic-bezier(0.22, 1, 0.36, 1) ← `visual-vocabulary.md > Transitions & Animations > "apparition douce"`
- **Déclencheur** : IntersectionObserver quand élément rentre dans viewport ← implicite du pattern Magician

### Hover Subtil Cards (P0)
- **Technique** : Elevation subtile au hover ← `project-dials.md > Arsenal Creatif Selectionne > Techniques retenues > Hover Reveal Card`
- **Éléments affectés** : Mini-cards macros
- **Style** : translateY(-4px), transition 300ms cubic-bezier(0.22, 1, 0.36, 1) ← `visual-vocabulary.md > Transitions & Animations > "hover subtil"`
- **Shadow transition** : border-color oklch(0.35) au hover ← implicite du design de card

---

## Checklist Conformité

- [x] Fond Ebene (alternée vs Charbon Hero)
- [x] Typographie: Oswald pour "0%" et "phrase fermeture", Space Grotesk pour H2/H3, DM Sans pour body
- [x] Espacement: 160px/96px entre sections, 120px/64px padding interne
- [x] Couleurs: Cuivre Braise accent (< 15% surface), Feuille Grillee badges, Ivoire headings, Sable body
- [x] Radius: 16px cards, 999px badges
- [x] Animations: 800ms max (counter), 300ms standard, easing unique cubic-bezier(0.22, 1, 0.36, 1)
- [x] Layout: Rythme Z (alternance 55/45), stack vertical mobile
- [x] Émotion: Révélation (preuves + narration), Soulagement (plaisir sans culpabilité)
- [x] Contenu: Sourced desde positioning.md, carte.md, wireframe — zéro lorem ipsum
- [x] Composants UI Kit: Badges nutritionnels, Cards standards, zéro patterns custom

---

**Date assemblage** : 2026-03-06
**Statut** : Contexte complet — prêt pour Aesthetic Director
**Dépendances** : Zéro pointeur non résolu
