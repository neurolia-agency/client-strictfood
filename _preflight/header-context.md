## Header — Context Block

### Dials Section
DESIGN_VARIANCE: 5 | MOTION_INTENSITY: 6 | VISUAL_DENSITY: 3
Source : project-dials.md > Dials Globaux (pas d'override section — Header est composant transversal layout B01)

---

### Contenu Résolu

- **Logo** : StrictFood (lien → /) ← sitemap.md > Navigation > Header
- **Menu items (desktop horizontal)** :
  - "La Carte" → #carte ← sitemap.md > Navigation > Header
  - "Nos Artisans" → #artisans ← sitemap.md > Navigation > Header
  - "L'Experience" → #experience ← sitemap.md > Navigation > Header
  - "Avis" → #avis ← sitemap.md > Navigation > Header
- **CTA primaire** : "Commander" → tel:+33611745944 ← sitemap.md > Navigation > Header + positioning.md > cta_principal
- **Menu items (mobile)** : Hamburger toggle, memes liens que desktop ← sitemap.md > Navigation > Header (Structure Mobile)
- **CTA téléphone (mobile)** : Sticky ou FAB (Floating Action Button) ← sitemap.md > Navigation > Header (Structure Mobile)

---

### Émotion
- **Primaire** : Convivialité & Accessibilité (guider l'utilisateur vers les sections, puis vers l'action) ← tone.md implicite dans "tutoiement" + sitemap.md (navigation claire = accueil)
- **Secondaire** : Urgence modérée (CTA "Commander" visible en permanence, sans agressivité)
- **Tension** : Stabilité (header sticky rassurant) vs légèreté (backdrop blur, densité faible)

---

### Layout

**Desktop (> 1024px)**
- Sticky header, position fixed/sticky, top 0, z-index 50 ← visual-vocabulary.md > "sticky header"
- Flexbox horizontal : Logo (gauche, ~80px) — Menu 4 items (centre, espacement gap 32px) — CTA Primaire (droite, 44px min height) ← ui-kit.md > "Taille min : 44px hauteur"
- Padding horizontal : clamp(24px, 5vw, 80px) ← visual-vocabulary.md > "marge laterale"
- Hauteur header : 80-90px (accommoder le logo + padding vertical 16px) ← conventions Next.js header standard
- Arrière-plan : Charbon oklch(0.14 0.008 60), avec backdrop-filter blur(12px) au scroll ← visual-vocabulary.md > "sticky header" + project-dials.md > Arsenal > Backdrop Blur Header

**Tablet (640px - 1024px)**
- Hamburger menu (icone Lucide MenuIcon 24px) remplace le menu horizontal ← sitemap.md > Responsive > Tablet
- Logo (gauche) — Hamburger (centre-droit) — CTA telephone (droite)
- CTA devient "sticky" en bas d'écran ou badge persistant

**Mobile (< 640px)**
- Hamburger menu (icone Lucide MenuIcon 20px) ← sitemap.md > Responsive > Mobile
- Logo centré ou à gauche
- CTA téléphone : FAB (Floating Action Button) collant en bas à droite ← sitemap.md > Responsive > Mobile
- Arrière-plan : Charbon (même couleur, backdrop blur appliqué)

---

### Tokens Actifs

- **Fond** : var(--color-charbon) = oklch(0.14 0.008 60) ← visual-vocabulary.md > Couleurs > "fond principal" | app/globals.css:25
- **Texte menu** : var(--color-creme) = oklch(0.96 0.012 85) ← visual-vocabulary.md > Couleurs > "texte principal" | app/globals.css:31
- **Texte menu (hover)** : var(--color-or-braise) = oklch(0.68 0.14 75) ← visual-vocabulary.md > transitions > "hover subtil" appliqué aux liens
- **CTA Primaire (bouton)** : var(--color-or-braise) = oklch(0.68 0.14 75) sur var(--color-charbon) ← ui-kit.md > Boutons > Primaire + visual-vocabulary.md > Couleurs > "accent signature"
- **CTA Primaire (hover)** : filter: brightness(1.1), 200ms ease ← ui-kit.md > Boutons > Primaire > Hover | visual-vocabulary.md > transitions > "hover bouton"
- **CTA Primaire (focus ring)** : 2px ring var(--color-or-braise-hover) = oklch(0.76 0.12 78) ← ui-kit.md > Boutons > Primaire > Focus
- **Transition standard** : 300ms cubic-bezier(0.22, 1, 0.36, 1) ← visual-vocabulary.md > transitions > "transition standard" | app/globals.css:146
- **Backdrop blur** : blur(12px) ← visual-vocabulary.md > layout > "sticky header" | project-dials.md > Arsenal > Backdrop Blur Header
- **Border hover menu** : 1px solid var(--color-border) = oklch(0.30 0.01 55) ← ui-kit.md > Boutons > Secondaire > Border

---

### Composants UI Kit

- **Bouton CTA "Commander"** : Variante Primaire ← ui-kit.md > Boutons > Primaire
  - Background : var(--color-or-braise) oklch(0.68 0.14 75)
  - Texte : Charbon oklch(0.14) — poids Outfit 600
  - Radius : 12px
  - Padding : 16px 32px (desktop) / 18px 24px (mobile)
  - Hauteur min : 44px

- **Menu links** : Variante Ghost (liens secondaires) ← ui-kit.md > Boutons > Ghost
  - Pas de background/border
  - Texte : Creme oklch(0.96), weight 400, "corps confortable" ← visual-vocabulary.md > typographie > "corps confortable" = clamp(1rem, 0.5vw + 0.875rem, 1.125rem)
  - Hover : texte passe à Or Braise, transition 300ms standard ← visual-vocabulary.md > transitions > "hover subtil"

- **Icone Hamburger (mobile)** : Lucide MenuIcon, 20px, currentColor (Creme) ← ui-kit.md > Icones > Taille default 20px

- **Icone FAB (mobile)** : Lucide Phone ou PhoneCall, 24px, currentColor (Charbon sur Or Braise) ← ui-kit.md > Icones > Taille large 24px

---

### Contraintes Applicables

- **ON FAIT #1** : Fond Charbon dominant — oklch(0.14 0.008 60) ← constraints.md > ON FAIT > #1
- **ON FAIT #2** : Or Braise en accent uniquement sur CTA "Commander" — max 10-15% surface header ← constraints.md > ON FAIT > #2
- **ON FAIT #10** : Easing unique cubic-bezier(0.22, 1, 0.36, 1) pour transitions menu (hover) ← constraints.md > ON FAIT > #10
- **ON FAIT #11** : Apparitions au scroll — pas d'animation sur header (composant persistant), mais transitions d'état sur liens ← constraints.md > ON FAIT > #11
- **ON NE FAIT PAS #2** : Pas de noir pur #000000 — texte en Creme oklch(0.96) sur Charbon ← constraints.md > ON NE FAIT PAS > #2
- **ON NE FAIT PAS #3** : Pas de gradient coloré — fond uniforme Charbon, pas de dégradé arc-en-ciel ← constraints.md > ON NE FAIT PAS > #3
- **ON NE FAIT PAS #10** : Pas d'animations > 800ms — backdrop blur transition 300ms max ← constraints.md > ON NE FAIT PAS > #10

---

### Technique Recommandée

**Backdrop Blur Header** — P0 (priorité haute) ← project-dials.md > Arsenal Créatif > Backdrop Blur Header

- Sticky header avec `position: sticky; top: 0; z-index: 50`
- Backdrop-filter: blur(12px) activé au scroll (détection via IntersectionObserver ou CSS media query `@supports`)
- Justification : Crée une impression de profondeur premium, aide à lire le contenu behind le header au scroll, cohere avec archetype Magician (revelation progressive) ← project-dials.md > Arsenal > Backdrop Blur Header

**Scroll Spy (Smooth Scroll Integration)** — P0 (priorité haute) ← sitemap.md > Navigation > Comportement

- Chaque lien menu pointe vers une ancre (#carte, #artisans, #experience, #avis)
- Item actif (section visible dans viewport) surlignage en Or Braise ← emotion-map.md > Navigation implicite
- Smooth scroll vers les ancres via Lenis (déjà intégré dans la stack Next.js) ← sitemap.md > Navigation > Comportement

---

### Fichiers Sources

- **Wireframe** : /Users/jorisgustiez/Dev/Claude/neurolia-agency/client-strictfood/pipeline/output/03.5-wireframes/homepage.md (section Navigation > Header, ligne 193-201)
- **Dials** : /Users/jorisgustiez/Dev/Claude/neurolia-agency/client-strictfood/pipeline/output/02-art-direction/project-dials.md (Dials Globaux + Arsenal)
- **Sitemap** : /Users/jorisgustiez/Dev/Claude/neurolia-agency/client-strictfood/pipeline/output/03-sitemap.md (Navigation > Header + Responsive)
- **Tokens CSS** : /Users/jorisgustiez/Dev/Claude/neurolia-agency/client-strictfood/app/globals.css
- **UI Kit** : /Users/jorisgustiez/Dev/Claude/neurolia-agency/client-strictfood/pipeline/output/02-art-direction/ui-kit.md (Boutons, Icones)
- **Visual Vocabulary** : /Users/jorisgustiez/Dev/Claude/neurolia-agency/client-strictfood/pipeline/output/02-art-direction/visual-vocabulary.md (Typographie, Transitions, Layout)
- **Contraintes** : /Users/jorisgustiez/Dev/Claude/neurolia-agency/client-strictfood/pipeline/output/02-art-direction/constraints.md

---

### Notes Complémentaires

- **Pas de dépendance de section spécifique** : Le Header est composant transversal (layout B01) qui utilise les dials globaux (VARIANCE 5 / MOTION 6 / DENSITY 3). Aucune émotion spécifique n'est assignée, il sert de **facilitateur neutre** vers les sections.
- **Comportement au scroll** : La technique Backdrop Blur est optionnelle mais recommandée (P0). Si non implémentée, garder fond Charbon solide sans effect.
- **Accessibilité WCAG AA** : Tous les éléments interactifs (menu, CTA) respectent 44px min height touch target ← constraints.md (implicite) + ui-kit.md > Boutons > Taille min
- **Responsive mobile-first** : Menu horizontal desktop → hamburger tablet → hamburger mobile, FAB téléphone persistent mobile
