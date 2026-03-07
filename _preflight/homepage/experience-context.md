## L'Expérience — Context Block

### Dials Section
DESIGN_VARIANCE: 5 | MOTION_INTENSITY: 5 | VISUAL_DENSITY: 2
Source : project-dials.md > L'Experience (override section)

### Contenu Résolu
- Titre H2 : "Viens voir par toi-même." ← homepage.md > Section 4 > Contenu
- Sous-bloc principal USP : "Cuisine Ouverte (transparence, tout se voit — cuisine ouverte, rien à cacher)" ← positioning.md > USPs > Cuisine Ouverte
- Texte narratif : "Quand tu passes la porte, tu vois tout : les ingrédients, la préparation, les gestes. Pas de mur, pas de rideau." ← homepage.md > Section 4 > Texte narratif + positioning.md > Cuisine Ouverte
- Visuel primaire : `public/contenu-instagram/2025-11-07_17-32-18_UTC.jpg` (intérieur restaurant, comptoir, mur végétal) ← homepage.md > Section 4 > Visuel
- Visuel secondaire : `public/contenu-instagram/2025-10-03_15-57-14_UTC_6.jpg` (fondateur derrière vitrine cuisine ouverte) ← homepage.md > Section 4 > Visuel secondaire

### Émotion
- Primaire : Admiration ("ils n'ont vraiment rien à cacher") ← emotion-map.md > Homepage > L'Experience
- Secondaire : Immersion ("j'ai envie d'y aller, de voir par moi-même") ← emotion-map.md > Homepage > L'Experience
- Tension : Narration intimiste (invitation personnelle) vs visuel immersif du lieu (cuisine ouverte, mur végétal, comptoir) — on se projette dans l'espace ← emotion-map.md > Homepage > L'Experience > Tension visuelle

### Layout
Layout asymétrique en 2 blocs. Bloc gauche (55%) : titre H2 + texte narratif sur l'expérience du lieu. Bloc droit (45%) : image cuisine ouverte pleine hauteur (radius 16px). Mobile : stack vertical, image puis texte. ← homepage.md > Section 4 > Layout

Breakpoints :
- Desktop (> 1024px) : grid 2 colonnes (55% / 45%), padding section 120px top/bottom ← visual-vocabulary.md > Espacements + Breakpoints
- Mobile (< 640px) : stack vertical, image en premier (above the fold), texte en dessous, padding section 64px top/bottom ← homepage.md > Hero > Mobile pattern + visual-vocabulary.md

### Tokens Actifs
- Fond : var(--color-ebene) = oklch(0.18 0.008 60) / #1E1B18 ← visual-vocabulary.md > Couleurs > "fond alternatif" | constraints.md > ON FAIT #1
- Texte titre (H2) : var(--color-ivoire) = oklch(0.91 0.015 80) / #E8E0D4 ← visual-vocabulary.md > Couleurs > "texte heading" | app/globals.css ligne 50
- Texte body : var(--color-sable) = oklch(0.73 0.025 75) / #B5AA98 ← visual-vocabulary.md > Couleurs > "texte secondaire" | app/globals.css ligne 50
- Typo H2 : var(--font-heading) = Space Grotesk, weight 700, size clamp(2rem, 3.5vw + 0.5rem, 3rem), line-height 1.1 ← visual-vocabulary.md > Typographie > "titre section" | constraints.md > ON FAIT #4
- Typo body : var(--font-body) = DM Sans, weight 400, size clamp(1rem, 0.5vw + 0.875rem, 1.125rem), line-height 1.6 ← visual-vocabulary.md > Typographie > "corps confortable" | constraints.md > ON FAIT #5
- Radius image : var(--radius-large) = 16px ← visual-vocabulary.md > Formes & Radius > "radius large" | ui-kit.md > Cards > Style autorisé
- Transition apparition texte : var(--easing-standard) = cubic-bezier(0.22, 1, 0.36, 1), var(--duration-reveal) = 600ms ← visual-vocabulary.md > Transitions > "apparition douce" | constraints.md > ON FAIT #10
- Parallax image : translateY 2-3% au scroll ← homepage.md > Section 4 > Interaction + emotion-map.md > L'Experience > Techniques

### Composants UI Kit
- Pas de composants UI Kit discrets dans cette section (c'est une section de contenu immersif — texte + image).

### Contraintes Applicables
- ON FAIT #1 (Fond Charbon dominant ou Ebene alternatif) : Fond Ebene oklch(0.18) appliqué ← constraints.md > ON FAIT #1, visual-vocabulary.md > Couleurs
- ON FAIT #4 (Oswald pour H1, Space Grotesk pour H2-H5) : Titre H2 en Space Grotesk weight 700 ← constraints.md > ON FAIT #4
- ON FAIT #5 (DM Sans pour body, weight 400, line-height 1.6) : Texte narratif en DM Sans weight 400, line-height 1.6 ← constraints.md > ON FAIT #5
- ON FAIT #7 (Espacement sections 160px desktop / 96px mobile minimum) : Appliqué via section-padding + section-spacing ← constraints.md > ON FAIT #7, visual-vocabulary.md > Espacements
- ON FAIT #10 (Easing cubic-bezier(0.22, 1, 0.36, 1) uniquement) : Transitions d'apparition au scroll ← constraints.md > ON FAIT #10
- ON FAIT #11 (Apparitions au scroll translateY 24px + opacity) : Texte et image apparaissent via scroll-triggered fade in ← constraints.md > ON FAIT #11
- ON NE FAIT PAS #4 (Pas d'uppercase sur H1/H2) : Titre en casse normale ← constraints.md > ON NE FAIT PAS #4
- ON NE FAIT PAS #10 (Pas d'animations > 800ms) : Parallax et fade in <= 600-800ms ← constraints.md > ON NE FAIT PAS #10
- ON NE FAIT PAS #12 (Pas de lorem ipsum, tout contenu = brief ou [CONTENU CLIENT REQUIS]) : Contenu issu de positioning.md et homepage.md, visuels issus de photo-selection.md ← constraints.md > ON NE FAIT PAS #12

### Technique Recommandée
1. **Scroll-triggered Fade In** (P0) — revelation progressive du lieu au scroll. ← project-dials.md > Arsenal > Scroll-triggered Fade In | emotion-map.md > L'Experience > Techniques recommandees
   - Justification : Crée une découverte progressive (archetype Magician). Le contenu apparaît translateY(24px) → translateY(0) + opacity 0→1 sur 600ms quand la section entre dans le viewport.

2. **Parallax Depth léger (P1, 2-3%)** — profondeur subtile sur l'image cuisine ouverte. ← project-dials.md > Arsenal recommande | emotion-map.md > L'Experience > Parallax Depth leger
   - Justification : Rend l'image "vivante" et invite à la visite. Parallax translateY ±2-3% au scroll (pas de parallax lourd). Performance Lighthouse > 90 maintenue.

Aucune autre technique spéciale pour cette section. Elle reste sobre et immersive — l'image cuisine ouverte est la star.
