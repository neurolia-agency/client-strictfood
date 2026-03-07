# Nos Artisans — Context Block

## Dials Section
DESIGN_VARIANCE: 5 | MOTION_INTENSITY: 7 | VISUAL_DENSITY: 3
Source : project-dials.md > Nos Artisans

## Contenu Résolu

- **Titre** : "Derriere chaque burger, des artisans que tu connais." ← positioning.md > Messages par Section > Nos Artisans
- **Artisan 1 (Boucherie)** : "Boucherie Labourde" (nom H3, Cuivre Braise) | Spécialité : viande artisanale | Localisation : Perpignan ← about.md > Chiffres Cles + about.md > Valeurs > Ancrage Local
- **Artisan 2 (Pain)** : "Pains du Soleil" (nom H3, Cuivre Braise) | Spécialité : pain artisanal | Localisation : Perpignan ← about.md > Chiffres Cles + about.md > Valeurs > Ancrage Local
- **Artisan 3 (Fromage)** : "Myfitcheese" (nom H3, Cuivre Braise) | Spécialité : fromage hyperprotéine | Localisation : Perpignan ← services.md > Burgers Artisanaux > inclus
- **Visuels** : 3 photos artisans (découpe viande, fromage frais, assemblage burger) ← pipeline/input/assets/photo-selection.md > Nos Artisans [PHOTOS CLIENT À CONFIRMER]

## Émotion

- **Primaire** : Confiance (ancrage local, preuves tangibles) ← emotion-map.md > Homepage > Nos Artisans
- **Secondaire** : Fierté locale ("je connais ce boulanger") ← emotion-map.md > Homepage > Nos Artisans
- **Tension** : Portraits/noms des artisans (humain, chaleureux) vs background Charbon sévère — l'humain surgit du noir ← emotion-map.md > Homepage > Nos Artisans

## Layout

**Titre H2 en haut** : centré, max-width 640px (lisibilité), avec apparition douce au scroll.

**Sticky Scroll Stack** : 3 panels pleine largeur qui se superposent progressivement au scroll. Chaque panel = split horizontal asymétrique :
- Gauche / Droite alternés (Artisan 1 image à gauche, Artisan 2 image à droite, Artisan 3 image à gauche)
- Image artisan : 50% largeur (min 50% viewport mobile = full-bleed)
- Texte : 50% largeur (nom H3 Cuivre Braise + spécialité + localisation "Perpignan")
- Hauteur : pleine hauteur de la section (vh adaptée au scroll trigger)

**Fond de section** : Charbon oklch(0.14 0.008 60) ← visual-vocabulary.md > couleurs > "fond principal"

**Fond de chaque panel** : légèrement différent (Charbon → Ebène → Charbon) pour la variation sans distraction ← emotion-map.md > tension visuelle

**Mobile** : Stack vertical simple, 1 artisan par écran, image pleine largeur puis texte dessous.

**Espacement** : 160px entre sections (desktop) / 96px (mobile) ← visual-vocabulary.md > espacements > "whitespace genereux/mobile" | Padding interne 120px top/bottom desktop / 64px mobile ← visual-vocabulary.md > "padding section"

## Tokens Actifs

- **Fond section** : var(--color-charbon) = oklch(0.14 0.008 60) ← visual-vocabulary.md > couleurs > "fond principal"
- **Titre H2** : var(--font-heading) Space Grotesk, clamp(2rem, 3.5vw + 0.5rem, 3rem), weight 700 ← globals.css > --font-size-h2
- **Titre artisan (H3)** : var(--font-heading) Space Grotesk, clamp(1.625rem, 2.5vw + 0.5rem, 2.25rem), weight 600, color var(--color-cuivre) = oklch(0.67 0.15 68) ← globals.css > --font-size-h3 + visual-vocabulary.md > "accent signature"
- **Texte spécialité** : var(--font-body) DM Sans, clamp(1rem, 0.5vw + 0.875rem, 1.125rem), weight 400, color var(--color-sable) = oklch(0.73 0.025 75) ← globals.css > --font-size-body + visual-vocabulary.md > "texte secondaire"
- **Texte localisation (badge)** : var(--color-cuivre-pale) = oklch(0.20 0.02 68), UPPERCASE, letter-spacing 0.08em ← ui-kit.md > Badges > variante craft (Grenat Fume) — RÉSOLUE COMME BADGE DISCRET
- **Easing transition** : cubic-bezier(0.22, 1, 0.36, 1) ← visual-vocabulary.md > transitions > "easing standard"
- **Transition macro (animation stack)** : 800ms cubic-bezier(0.22, 1, 0.36, 1) ← visual-vocabulary.md > transitions > "animation macro"
- **Apparition douce (contenu)** : translateY(24px) + opacity 0→1, 600ms cubic-bezier(0.22, 1, 0.36, 1) ← visual-vocabulary.md > transitions > "apparition douce"
- **Stagger entre artisans** : 100ms ← visual-vocabulary.md > transitions > "apparition decalee"
- **Padding conteneur** : clamp(24px, 5vw, 80px) ← visual-vocabulary.md > espacements > "marge laterale"
- **Max-width contenu** : 1280px ← visual-vocabulary.md > espacements > "max-width contenu"

## Composants UI Kit

- **Titre H2** : style section standard (Space Grotesk, weight 700, line-height 1.1) ← ui-kit.md > section standards
- **Noms artisans (H3)** : Cuivre Braise, prominence narrative (humanisation par le nom en couleur signature) ← ui-kit.md + emotion-map.md tension
- **Localisation badge** : "PERPIGNAN" en badge discret variante craft (Grenat Fume à 12% opacity) ← ui-kit.md > Badges > variante craft (note : grenat fume utilisé pour craft artisanal)
- **Conteneur section** : max-width 1280px, padding clamp(24px, 5vw, 80px) ← ui-kit.md > Conteneurs de section > Standard
- **Aucun bouton** : section narrative uniquement, pas de CTA secondaire

## Contraintes Applicables

### ON FAIT

- **#1 — Fond Charbon dominant** : Background Charbon oklch(0.14 0.008 60) pour la section, panels alternés avec Ebène ← constraints.md > ON FAIT #1
- **#3 — Noms artisans Cuivre Braise en accent** : Noms en oklch(0.67 0.15 68) reserve aux titres artisans uniquement (< 10% surface) ← constraints.md > ON FAIT #2
- **#4 — Typographie Space Grotesk H2-H5** : H2 et H3 en Space Grotesk, weight 600-700, letter-spacing -0.02em ← constraints.md > ON FAIT #4
- **#5 — DM Sans pour corps** : Description et localisation en DM Sans weight 400, line-height 1.6 ← constraints.md > ON FAIT #5
- **#7 — Espacement sections 160px/96px** : Respect des whitespace genereux ← constraints.md > ON FAIT #7
- **#10 — Easing cubic-bezier(0.22, 1, 0.36, 1)** : Toutes les transitions (sticky stack, fade in) utilisent cet easing standard ← constraints.md > ON FAIT #10
- **#11 — Apparitions au scroll** : Contenu de chaque panel apparaît via translateY(24px) + opacity, stagger 100ms ← constraints.md > ON FAIT #11

### ON NE FAIT PAS

- **#2 — Pas de noir pur #000000** : Charbon oklch(0.14) utilisé, pas de #000 ← constraints.md > ON NE FAIT PAS #2
- **#5 — Pas de polices additionnelles** : Space Grotesk + DM Sans uniquement, pas de serif, pas de script ← constraints.md > ON NE FAIT PAS #5
- **#10 — Pas d'animations > 800ms** : Sticky stack = 800ms max, stagger 100ms entre artisans ← constraints.md > ON NE FAIT PAS #10
- **#12 — Pas de lorem ipsum ou placeholder** : Contenus résolus (noms artisans + localisation), photos réelles ou étiquetées [PHOTOS CLIENT REQUISES] ← constraints.md > ON NE FAIT PAS #12

## Technique Recommandée

**Sticky Scroll Stack** (P1) — chaque artisan se révèle en s'empilant au scroll ← project-dials.md > Arsenal > Sticky Scroll Stack

**Justification** : Le sticky stack crée un rituel de découverte où chaque artisan a son moment de revelation (Magician archetype). Cohérent avec la valeur Ancrage Local — chacun mérite sa place. MOTION_INTENSITY 7 justifie cette technique avancée. Renforce la tension émotionnelle : humanité (portrait) vs austérité (Charbon). Performance : IntersectionObserver-based, pas de scroll hijack lourd.

**Source** : project-dials.md > Arsenal Créatif > Sticky Scroll Stack | emotion-map.md > Nos Artisans > Techniques recommandées

---

## Notes d'Implémentation

1. **Visuels** : Les 3 photos artisans (découpe viande, fromage frais, assemblage burger) doivent être confirmées client. Actuellement marquées `[PHOTOS CLIENT REQUISES]` ← constraints.md > ON NE FAIT PAS #12
2. **Stack vs Défilement** : Le "sticky scroll stack" signifie que les panels restent visibles à l'écran en se chevauchant progressivement au scroll (couche par couche). Sur mobile, passer à un stack vertical simple (1 artisan par vue complète).
3. **Badge localisation** : "PERPIGNAN" en petit badge discret, variante craft (Grenat Fume), appliqué sous le titre artisan.
4. **Accessible** : Min-height touch targets 44px pour les zones de clic (si interactif), contrast ratio 4.5:1 respecté (Cuivre Braise sur Charbon, Sable sur Charbon).
