## Hero — Context Block

### Dials Section
DESIGN_VARIANCE: 6 | MOTION_INTENSITY: 7 | VISUAL_DENSITY: 2
Source : project-dials.md > Dials par Section > Hero (override section spécifique)
Justification : "Impact première impression : variance +1 (split asymétrique), motion +1 (parallax produit + apparition théâtrale), density minimum (juste tagline + produit + CTA)"

---

### Contenu Résolu
- **H1 (Tagline)** : "Le cheat meal qui n'en est pas un" ← positioning.md > tagline
- **Sous-texte (Baseline)** : [CONTENU CLIENT REQUIS — baseline depuis positioning.md > baseline] ← positioning.md > baseline
- **CTA Primaire** : "Appelle pour commander" → tel:+33611745944 ← positioning.md > cta_principal
- **CTA Secondaire** : "Notre promesse" → #promesse (anchor link) ← homepage.md > Section 1
- **Visuel Héro** : `public/images/hero-v2.webp` (image hero optimisée WebP, full-bleed background, pas d'overlay) ← pipeline/input/assets/photo-selection.md > Hero

---

### Émotion
- **Primaire** : Désir immédiat (faim + curiosité) ← emotion-map.md > Homepage > Hero
- **Secondaire** : Intrigue ("c'est quoi ce fast-food premium ?") ← emotion-map.md > Homepage > Hero
- **Tension visuelle** : Fond Charbon austère vs produit éclairé chaud et appétissant — le burger surgit du noir, dramatique ← emotion-map.md > Homepage > Hero > Tension visuelle

---

### Layout

**Desktop (> 1024px)**
- Split screen asymétrique 40/60
- Texte gauche (40%) : H1 (Tagline) + baseline + 2 CTAs (primaire + secondaire) empilés verticalement
- Produit droit (60%) : Image burger surdimensionnée, min 50% viewport width, radius 16px
- Alignement texte : aligné à gauche (text-align: left)
- Max-width conteneur : 1280px (80rem) ← visual-vocabulary.md > Layout > "max-width contenu"
- Marge latérale responsive : clamp(24px, 5vw, 80px) ← visual-vocabulary.md > Espacements > "marge laterale"
- Spacing vertical : 120px top/bottom ← visual-vocabulary.md > Espacements > "padding section"

Source : homepage.md > Section 1 > Layout

**Mobile (< 640px)**
- Stack vertical : produit en premier (above the fold), texte en dessous
- Produit : full-width, aspect-ratio libre, radius 16px
- Texte : full-width, stacked
- Spacing vertical : 64px top/bottom ← visual-vocabulary.md > Espacements > "padding section mobile"
- Boutons : full-width, padding 18px 24px ← ui-kit.md > Boutons > Primaire > Variante mobile

Source : homepage.md > Section 1 > Layout

---

### Tokens Actifs

**Couleurs**
- **Fond** : var(--color-charbon) = oklch(0.14 0.008 60) / #141210 ← visual-vocabulary.md > Couleurs > "fond principal" & app/globals.css
- **Texte H1/H2** : var(--color-ivoire) = oklch(0.91 0.015 80) / #E8E0D4 ← app/globals.css > h1, h2 > color
- **Texte Body (Baseline)** : var(--color-sable) = oklch(0.73 0.025 75) / #B5AA98 ← visual-vocabulary.md > Couleurs > "texte secondaire"
- **CTA Primaire Background** : var(--color-cuivre) = oklch(0.67 0.15 68) / #BF8522 ← visual-vocabulary.md > Couleurs > "accent signature" & app/globals.css
- **CTA Primaire Texte** : var(--color-primary-foreground) = oklch(0.14 0.008 60) / Charbon ← ui-kit.md > Boutons > Primaire > Texte
- **CTA Secondaire Border** : var(--color-cendre) = oklch(0.30 0.01 55) / #3D3832 ← visual-vocabulary.md > Couleurs > "bordure subtile"
- **CTA Secondaire Texte** : var(--color-creme) = oklch(0.96 0.012 85) / #F5F0E8 ← ui-kit.md > Boutons > Secondaire > Texte

**Typographie**
- **H1 Tagline** : var(--font-heading) = 'Space Grotesk', font-size var(--font-size-h1) = clamp(2.5rem, 5vw + 1rem, 4.5rem), weight 700, line-height 1.05, letter-spacing -0.02em ← app/globals.css + visual-vocabulary.md > typographie > "typo massive"
- **Baseline** : var(--font-body) = 'DM Sans', font-size var(--font-size-body-lg) = clamp(1.125rem, 0.75vw + 0.875rem, 1.25rem), weight 400, line-height 1.5 ← app/globals.css + visual-vocabulary.md > typographie > "corps large"
- **CTA Texte** : DM Sans, weight 600, font-size 1rem ← ui-kit.md > Boutons > Primaire/Secondaire

**Transitions & Animations**
- **Hover CTA Primaire** : filter brightness(1.1), 200ms ease ← visual-vocabulary.md > Transitions & Animations > "hover bouton"
- **Hover CTA Secondaire** : border-color var(--color-cuivre), color var(--color-cuivre), 300ms cubic-bezier(0.22, 1, 0.36, 1) ← ui-kit.md > Boutons > Secondaire > Hover
- **Apparition au Load** : translateY(24px) > translateY(0), opacity 0 > 1, 600ms cubic-bezier(0.22, 1, 0.36, 1) ← visual-vocabulary.md > Transitions & Animations > "apparition douce"
- **Easing Standard** : cubic-bezier(0.22, 1, 0.36, 1) ← app/globals.css > --easing-standard & constraints.md > ON FAIT #10

**Formes**
- **Radius Boutons** : var(--radius-standard) = 12px / 0.75rem ← ui-kit.md > Boutons > Radius
- **Radius Image Hero** : var(--radius-large) = 16px / 1rem ← visual-vocabulary.md > Formes & Radius > "radius large"

**Espacements Boutons**
- **Padding Boutons Desktop** : 16px 32px ← ui-kit.md > Boutons > Primaire/Secondaire > Padding
- **Padding Boutons Mobile** : 18px 24px ← ui-kit.md > Boutons > Primaire > Variante mobile
- **Hauteur min Boutons** : 44px (touch target WCAG AA) ← ui-kit.md > Boutons > Primaire > Taille min

---

### Composants UI Kit

**Bouton Primaire**
- Background : var(--color-cuivre) = oklch(0.67 0.15 68)
- Texte : var(--color-primary-foreground) = oklch(0.14 0.008 60)
- Font : DM Sans, weight 600, 1rem
- Padding : 16px 32px (desktop) / 18px 24px (mobile)
- Radius : 12px
- Hover : filter brightness(1.1), 200ms ease
- Active : background var(--color-cuivre-active) = oklch(0.55 0.14 65)
- Focus : ring 2px offset 2px var(--color-cuivre-hover) = oklch(0.75 0.13 70)
- Hauteur min : 44px

Source : ui-kit.md > Boutons > Primaire (CTA)

**Bouton Secondaire**
- Background : transparent
- Border : 1px solid var(--color-cendre) = oklch(0.30 0.01 55)
- Texte : var(--color-creme) = oklch(0.96 0.012 85)
- Font : DM Sans, weight 500, 1rem
- Padding : 16px 32px
- Radius : 12px
- Hover : border-color var(--color-cuivre), color var(--color-cuivre), 300ms cubic-bezier(0.22, 1, 0.36, 1)
- Active : background var(--color-cuivre-pale) = oklch(0.20 0.02 68)

Source : ui-kit.md > Boutons > Secondaire

---

### Contraintes Applicables

**ON FAIT (Obligatoire)**
- **#1 — Fond Charbon dominant** : oklch(0.14 0.008 60) comme background global du Hero ← constraints.md > ON FAIT > #1
- **#2 — Cuivre Braise en accent uniquement** : max 10-15% de surface totale, réservé aux CTAs primaires ← constraints.md > ON FAIT > #2
- **#3 — Neutres chauds exclusivement** : tout texte en sous-teintes chaudes (Ivoire, Creme, Sable), hue 60-85°, jamais gris pur ← constraints.md > ON FAIT > #3
- **#4 — Space Grotesk pour titres** : H1 en Space Grotesk weight 700, letter-spacing -0.02em ← constraints.md > ON FAIT > #4
- **#5 — DM Sans pour body** : Baseline et CTA en DM Sans weight 400-600, line-height 1.5-1.6 ← constraints.md > ON FAIT > #5
- **#7 — Espacement sections** : 120px desktop / 64px mobile minimum ← constraints.md > ON FAIT > #7
- **#9 — Produit hero surdimensionné** : image occupe minimum 50% viewport width desktop ← constraints.md > ON FAIT > #9
- **#10 — Easing unique** : cubic-bezier(0.22, 1, 0.36, 1) pour toutes transitions ← constraints.md > ON FAIT > #10
- **#11 — Apparitions au scroll** : tous éléments via translateY(24px) + opacity, stagger 100ms entre siblings ← constraints.md > ON FAIT > #11

**ON NE FAIT PAS (Interdit)**
- **#2 — Pas noir pur** : jamais #000000, utiliser Charbon oklch(0.14 0.008 60) ← constraints.md > ON NE FAIT PAS > #2
- **#4 — Pas uppercase H1/H2** : H1 en sentence case (première lettre majuscule), réservé aux labels < 14px ← constraints.md > ON NE FAIT PAS > #4
- **#7 — Pas hero centré** : layout split asymétrique obligatoire (40 texte / 60 produit), JAMAIS centré ← constraints.md > ON NE FAIT PAS > #7
- **#10 — Pas animations > 800ms** : aucune transition ne dépasse 800ms, respecter Lighthouse > 90 ← constraints.md > ON NE FAIT PAS > #10
- **#11 — Pas parallax lourd** : éviter background-attachment: fixed ou scroll hijack complet, parallax leger 2-3% autorisée ← constraints.md > ON NE FAIT PAS > #11
- **#12 — Pas lorem ipsum** : tout texte visible depuis positioning.md ou marqué [CONTENU CLIENT REQUIS] ← constraints.md > ON NE FAIT PAS > #12

---

### Techniques Recommandées

**1. Split Screen Layout (P0 — Prioritaire)**

Texte gauche (promesse via tagline) vs Produit droit (preuve visuelle) en asymétrie 40/60 desktop.

Justification :
- Crée la tension Magician (promesse vs preuve) centrale à l'archétype
- Première impression d'impact, asymétrie structurelle reconnaissable
- DESIGN_VARIANCE 6 demande une rupture visuelle (vs hero centré => BANNI)

Implémentation :
- CSS Grid : `grid-template-columns: 1fr 1.2fr` (40/60 ratio)
- Mobile : bascule à une colonne, stack verticale produit > texte
- Produit : min 50% viewport width desktop

Source : project-dials.md > Arsenal Créatif > Split Screen Layout (P0) | emotion-map.md > Hero > Techniques recommandées

---

**2. Parallax Depth Léger (P1 — Optionnel mais recommandé)**

Micro-parallax translateY 2-3% au scroll sur image produit uniquement (translateY basé sur IntersectionObserver ou Framer Motion scroll hook).

Justification :
- Rend le produit "vivant" sans surcharge visuelle
- Profondeur subtile = théâtralité Magician (produit se détache du fond sombre)
- Performance : 2-3% de parallax ≠ background-attachment: fixed, Lighthouse > 90 respecté

Implémentation :
- `transform: translateY(calc(-2% * scrollProgress))` sur image
- Durée : 600-800ms (respect constraints.md #10)
- Limiter au viewport unique, pas sur mobile

Source : project-dials.md > Arsenal Créatif > Parallax Depth (leger) (P1) | emotion-map.md > Hero > Parallax Depth leger

---

**3. Apparition Décalée (Stagger) au Load (P0 — Intégrée)**

Révélation progressive des éléments texte au chargement page via translateY(24px) + opacity avec stagger 100ms.

Implémentation :
- H1 Tagline : apparaît premier (delay 0ms)
  - `translateY(24px) → 0`, opacity `0 → 1`, 600ms cubic-bezier(0.22, 1, 0.36, 1)
- Baseline : apparaît 100ms après H1
- CTA Primaire : apparaît 100ms après baseline
- CTA Secondaire : apparaît 100ms après CTA primaire

Justification :
- Rythme progressif = révélation théâtrale cohérente archétype Magician
- Stagger 100ms crée du rythme sans surcharge cognitive
- Texte seul apparaît avant produit (produit "in situ", texte en révélation)

Source : visual-vocabulary.md > Transitions & Animations > "apparition décalée" | constraints.md > ON FAIT #11 | app/globals.css > --stagger-delay = 100ms

---

**4. Hover Bouton Subtil (Intégrée)**

Interactions claires et rapides sur CTAs pour conversion optimale.

CTA Primaire :
- Hover : `filter: brightness(1.1)`, 200ms ease
- Change la luminosité du Cuivre Braise sans changer de couleur

CTA Secondaire :
- Hover : `border-color var(--color-cuivre)`, `color var(--color-cuivre)`, 300ms cubic-bezier(0.22, 1, 0.36, 1)
- Border and text deviennent Cuivre Braise

Source : visual-vocabulary.md > Transitions & Animations > "hover bouton" | ui-kit.md > Boutons > Hover states

---

### Interaction Détaillée

**Au Chargement Page**
1. Hero section apparaît en entrée (fade-in progressif du conteneur)
2. H1 Tagline : translateY(24px) > 0, opacity 0 > 1, 600ms cubic-bezier(0.22, 1, 0.36, 1)
3. Baseline : même animation, delay +100ms après H1
4. CTA Primaire : même animation, delay +100ms après baseline
5. CTA Secondaire : même animation, delay +100ms après CTA Primaire
6. Image produit : fade-in simultané avec H1 (ou en parallèle, possibilité de parallax dès l'apparition)

**Au Scroll (Pendant Consultation)**
- Image produit : micro-parallax translateY(-2% à -3% de la hauteur écran) selon scrollProgress
- Boutons : restent en position fixe ou animés subtlement (décision design pour B02)

**Au Hover**
- CTA Primaire : brightness(1.1), 200ms ease
- CTA Secondaire : border + text color Cuivre Braise, 300ms cubic-bezier(0.22, 1, 0.36, 1)
- Image produit : possible hover scale 1.02 (optionnel, décision B02)

**Focus/Accessible**
- Boutons : ring 2px offset 2px var(--color-cuivre-hover), visible keyboard navigation
- Contraste texte : min 4.5:1 WCAG AA (Ivoire sur Charbon = 15.7:1, conforme)

---

### Notes Spécifiques

- **Image Produit** : aspect-ratio libre (food porn 7/10), min 50% viewport desktop, max-width cohérent avec layout 60% side, radius 16px obligatoire
- **Mobile FAB Optionnel** : sur layout mobile serré, envisager sticky CTA Primaire en bas (FAB style) pour conversion. À vérifier avec agent B02.
- **Baseline Content** : placeholder [CONTENU CLIENT REQUIS] en attente du contenu exact — JAMAIS lorem ipsum (constraints.md #12)
- **Micro-interactions** : aucune animation > 800ms (constraints.md #10). Technique P1 (parallax) recommandée mais non-bloquante pour MVP.
- **Split Screen Breakpoint** : bascule à stack vertical < 640px (mobile), testable via breakpoints Tailwind

---

### Validation Checklist "Est-ce StrictFood ?"

- [x] Fond Charbon (oklch(0.14)) utilisé ?
- [x] Accent Cuivre Braise < 15% surface (CTAs uniquement) ?
- [x] Produit surdimensionné (60% split screen) ?
- [x] Typographie Space Grotesk bold sur H1 ?
- [x] Hero split asymétrique (PAS centré) ?
- [x] Transitions cubic-bezier(0.22, 1, 0.36, 1) sur appel ?
- [x] Texte Creme/Sable chaud sur Charbon (pas blanc pur) ?
- [ ] Baseline content (EN ATTENTE CLIENT)

**Score : 7/8 — Conforme. En attente du contenu baseline client.**

---

## Résumé Technique

**Section Hero** = première rencontre visuelle, objectif captiver par le produit (food porn 7/10), différencier par la promesse (tagline unique).

**Archétype Magician** = révélation progressive du burger via split screen asymétrique (40 texte / 60 produit) + parallax subtil (2-3%).

**Tone** : Convivialité brute (tagline + baseline chaleureux, CTAs engageants) + austérité du fond (Charbon) = tension désir immédiat.

**Dials suractivés** (MOTION 7, VARIANCE 6, DENSITY 2) justifiés par impact première impression. Performance : animations limitées 600-800ms, parallax légère = Lighthouse > 90 maintenu.

**Contenu** : tout réel ou marqué [CONTENU CLIENT REQUIS], zéro placeholder générique. Interactions rapides (hover 200-300ms), apprentissage progressif (stagger 100ms).

