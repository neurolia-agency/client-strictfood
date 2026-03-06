# Project Dials — StrictFood

<!-- Derive de : 00-platform.md > Archetype Magician/Hero + Calibrage Frontend, 00-brief.md > Ambition Visuelle, emotion-map.md -->

## Dials Globaux

> Ces valeurs OVERRIDENT les defaults du skill frontend-design2 (8, 6, 4) pour ce projet.
> Le skill dit : "ALWAYS listen to the user: adapt these values dynamically."
> Ces dials SONT les valeurs de l'utilisateur pour ce projet.

| Dial | Valeur | Justification |
|------|--------|---------------|
| DESIGN_VARIANCE | 5 | Archetype Hero = structure solide, symetrie dominante (00-platform.md "DESIGN_VARIANCE 4-5/10"). Ambition "Premium" (00-brief.md) = soigne, pas experimental. Ruptures ponctuelles autorisees (hero split, artisans sticky) pour le drama Magician, mais la structure reste maitrisee. |
| MOTION_INTENSITY | 6 | Archetype Magician = revelations progressives, apparitions theatrales (00-platform.md "MOTION_INTENSITY 6/10"). Complexite technique "animations avancees Framer Motion" acceptee (00-brief.md). Performance mobile Lighthouse > 90 impose une limite haute. |
| VISUAL_DENSITY | 3 | "Aere et premium — laisser respirer les visuels food, grands espaces negatifs" (00-platform.md). VISUAL_DENSITY 3 = max 3 types d'info par viewport. Whitespace genereux = accueil (Convivialite), premium (G63), respiration des visuels food (food porn 7/10). |

## Dials par Section

> Override les dials globaux pour des sections specifiques qui necessitent un traitement different.

| Section | VARIANCE | MOTION | DENSITY | Justification |
|---------|----------|--------|---------|---------------|
| Hero | 6 | 7 | 2 | Impact premiere impression : variance +1 (split asymetrique), motion +1 (parallax produit + apparition theatrale), density minimum (juste tagline + produit + CTA) |
| La Promesse | 5 | 6 | 3 | Storytelling + preuves : variance standard (split Z asymetrique), motion +1 (counter 0% + stagger blocs), density standard (narration + mini-cards, pas de catalogue) |
| Nos Artisans | 5 | 7 | 3 | Storytelling : variance standard, motion +1 (sticky scroll stack pour revelation progressive), density standard (1 artisan a la fois) |
| L'Experience | 5 | 5 | 2 | Experience du lieu : variance standard (layout asymetrique), motion moderee (fade in + parallax leger), density minimum (immersion visuelle du lieu) |
| Avis & Confiance | 4 | 5 | 4 | Credibilite : variance contenue (structure fiable), motion moderee (compteurs), density +1 (data points + temoignages) |
| Contact & Horaires | 3 | 4 | 3 | Conversion pure : variance minimum (pas de distraction), motion reduite (magnetic button seul), density standard (info + CTA) |
| Mentions Legales | 2 | 2 | 5 | Page utilitaire : variance minimum, motion minimum, density haute (texte legal dense — attendu et accepte) |

## Arsenal Creatif Selectionne

> Techniques du skill frontend-design2 Section 8 retenues pour ce projet.
> Synthese des recommandations de emotion-map.md.
> Max 8-10 techniques pour tout le projet (coherence > variete).

### Techniques retenues

| Technique | Section(s) cible(s) | Emotion servie | Priorite |
|-----------|---------------------|----------------|----------|
| Split Screen Layout | Hero | Tension desir (texte vs produit) | P0 |
| Parallax Depth (leger) | Hero | Produit "vivant", profondeur | P1 |
| Hover Reveal Card | La Promesse | Decouverte macros, transparence | P0 |
| Apparition decalee (stagger) | La Promesse, Avis | Rythme progressif | P0 |
| Sticky Scroll Stack | Nos Artisans | Revelation, ancrage local | P1 |
| Counter Animation | La Promesse, Avis | Drama (chiffre "0"), validation | P1 |
| Magnetic Button | Contact, Hero | Engagement tactile, conversion | P1 |
| Backdrop Blur Header | Navigation | Premium, profondeur | P0 |
| Scroll-triggered Fade In | Toutes sections | Revelation progressive (Magician) | P0 |

### Techniques explicitement exclues

| Technique | Pourquoi |
|-----------|----------|
| Horizontal Scroll Hijack | Desorientation mobile, performance (Lighthouse > 90), archetype Hero = structure claire |
| Glitch Effect / Text Scramble | Trop agressif pour "Convivialite Brute", connote tech/dystopie — pas food |
| Particle Explosion Button | Surcharge pour site conversion-first, AI tell evident |
| Glassmorphism Cards | Effet "gel" incoherent avec l'esthetique minerale/mate du G63 |
| Marquee Text Loop | Incoherent avec le registre premium (connote promo/soldes) |
| 3D Tilt Card | Performance mobile fragile, surcharge pour un menu food |
| Full-page Scroll Snap | Contraint le scroll naturel, frustrant pour la cible Actif Presse (veut aller vite) |
| Blob / Organic Shape Morphing | Incoherent avec le registre angulaire (G63, Space Grotesk) |

## Anti-Patterns frontend-design2 Renforces

> Regles du skill Section 7 (100 AI Tells) qui sont PARTICULIEREMENT critiques pour ce projet.
> Ces regles s'ajoutent aux defaults du skill — elles sont rappelees ici car le risque est eleve.

- [ ] **NO Centered Hero** — DESIGN_VARIANCE 5 >= 4 pour ce projet, hero split obligatoire (contraintes.md #7)
- [ ] **NO 3-Column Card Layouts** — Risque eleve sur les mini-cards La Promesse (utiliser grille auto-fill asymetrique ou 2+1)
- [ ] **NO Generic Gradient Backgrounds** — Fond Charbon uni, pas de gradient decoratif (contraintes.md #3)
- [ ] **NO Purple/Blue Accent** — LILA BAN strict, accent = Cuivre Braise uniquement (colors.md)
- [ ] **NO Stock Placeholder Images** — Photos food reelles ou placeholder labelle [PHOTO CLIENT REQUISE] (contraintes.md #12)
- [ ] **NO Symmetric Hero with Centered Text + Subtitle + Button Stack** — Le pattern "titre centre + sous-titre + bouton" est l'AI tell le plus courant
- [ ] **NO Pure Black #000000** — Charbon oklch(0.14) obligatoire (colors.md)
- [ ] **NO Perfect Card Grid (same height, same padding, same everything)** — Varier les tailles ou utiliser un layout Bento

## Mapping Emotion > Dials

> Table de reference rapide pour les agents. Quand une section vise une emotion,
> ces valeurs guident les dials.

| Emotion | VARIANCE tendance | MOTION tendance | DENSITY tendance |
|---------|-------------------|-----------------|------------------|
| Confiance | 3-5 | 2-4 | 2-4 |
| Curiosite | 5-7 | 4-6 | 3-5 |
| Urgence (conversion) | 3-5 | 4-5 | 3-5 |
| Serenite | 2-4 | 2-3 | 1-3 |
| Desir (appetence) | 5-7 | 5-7 | 2-3 |
| Admiration | 6-8 | 5-7 | 2-3 |
| Validation sociale | 3-5 | 4-5 | 4-5 |
| Fierte locale | 4-6 | 5-6 | 3-4 |
