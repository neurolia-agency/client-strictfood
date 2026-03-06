# Vocabulaire Visuel

<!-- Derive de : 01-brand/colors.md, 01-brand/typography.md, moodboard.md (patterns adoptes) -->

## Espacements

| Terme | Valeur | Usage |
|-------|--------|-------|
| "whitespace genereux" | 160px (10rem) | Entre sections (desktop) |
| "whitespace mobile" | 96px (6rem) | Entre sections (mobile) |
| "padding section" | 120px top/bottom (7.5rem) | Interieur sections desktop |
| "padding section mobile" | 64px top/bottom (4rem) | Interieur sections mobile |
| "espace respiration" | 48-64px (3-4rem) | Entre groupes d'elements |
| "gap composant" | 32px (2rem) | Entre elements d'un groupe |
| "gap serre" | 16px (1rem) | Entre elements lies (icon + label, badge + texte) |
| "gap hero CTAs" | 12px (gap-3) | Specifique hero, override du gap serre 16px |
| "marge laterale" | clamp(24px, 5vw, 80px) | Padding conteneur responsive |
| "max-width contenu" | 1280px (80rem) | Largeur max du contenu |
| "max-width texte" | 640px (40rem) | Largeur max paragraphes (lisibilite) |

## Typographie

| Terme | Valeur | Usage |
|-------|--------|-------|
| "typo display" | clamp(3.5rem, 8vw + 1rem, 7.5rem) / weight 700 / Oswald | H1 Hero display — tagline surdimensionnee |
| "typo massive" | clamp(2.5rem, 5vw + 1rem, 4.5rem) / weight 700 / Oswald | H1 standard |
| "titre section" | clamp(2rem, 3.5vw + 0.5rem, 3rem) / weight 700 / Space Grotesk | H2 sections |
| "sous-titre" | clamp(1.625rem, 2.5vw + 0.5rem, 2.25rem) / weight 600 / Space Grotesk | H3 |
| "titre card" | clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem) / weight 600 / Space Grotesk | H4 |
| "corps confortable" | clamp(1rem, 0.5vw + 0.875rem, 1.125rem) / weight 400 / line-height 1.6 / DM Sans | Body text |
| "corps large" | clamp(1.125rem, 0.75vw + 0.875rem, 1.25rem) / weight 400 / line-height 1.5 / DM Sans | Intros, lead paragraphs |
| "texte discret" | 0.875rem (14px) / weight 400 / DM Sans | Captions, labels |
| "texte micro" | 0.75rem (12px) / weight 400 / DM Sans | Badges internes, meta |
| "line-height aere" | 1.6 | Body text DM Sans |
| "line-height titre" | 1.05-1.15 | Headings Space Grotesk (1.05 H1, 1.1 H2, 1.15 H3) |
| "letter-spacing display" | -0.04em (mobile) / -0.06em (md+) | Tracking H1 hero display (Oswald) |
| "letter-spacing titre" | -0.02em | Gros titres H1/H2 (resserrement) |
| "letter-spacing uppercase" | 0.08em | Labels, badges, micro-copy en uppercase |

## Transitions & Animations

| Terme | Valeur | Usage |
|-------|--------|-------|
| "hover subtil" | translateY(-4px), 300ms cubic-bezier(0.22, 1, 0.36, 1) | Cards, liens |
| "hover bouton" | filter: brightness(1.1), 200ms ease | Boutons CTA |
| "apparition douce" | translateY(24px) > translateY(0), opacity 0 > 1, 600ms cubic-bezier(0.22, 1, 0.36, 1) | Sections au scroll (IntersectionObserver) |
| "apparition rapide" | opacity 0 > 1, 300ms ease | Elements UI, tooltips |
| "apparition decalee" | Meme que "apparition douce" + stagger 100ms entre elements enfants | Listes, grilles de cards |
| "transition standard" | 300ms cubic-bezier(0.22, 1, 0.36, 1) | Changements d'etat (couleur, border, background) |
| "animation macro" | 800ms cubic-bezier(0.22, 1, 0.36, 1) | Reveal sections hero, sticky scroll |
| "easing standard" | cubic-bezier(0.22, 1, 0.36, 1) | Tous les elements (easeOutExpo feeling) |
| "easing bounce" | cubic-bezier(0.34, 1.56, 0.64, 1) | RESERVE aux micro-interactions ponctuelles (badge count, like) |

## Couleurs (reference)

| Terme | Valeur OKLCH | Valeur HEX | Usage |
|-------|-------------|------------|-------|
| "accent signature" | oklch(0.67 0.15 68) | #BF8522 | Cuivre Braise — CTAs, liens actifs, highlights, bordures d'emphase |
| "accent signature hover" | oklch(0.75 0.13 70) | #D4A44E | Cuivre Braise clair — hover, focus rings |
| "accent signature active" | oklch(0.55 0.14 65) | #8E6215 | Cuivre Braise fonce — active, texte sur fond clair |
| "accent secondaire" | oklch(0.42 0.10 22) | #7C3530 | Grenat Fume — accents craft, separateurs, hover states |
| "accent tertiaire (nutrition)" | oklch(0.52 0.06 145) | #5C7858 | Feuille Grillee — badges nutrition uniquement |
| "fond principal" | oklch(0.14 0.008 60) | #141210 | Charbon — background global |
| "fond alternatif" | oklch(0.18 0.008 60) | #1E1B18 | Ebene — sections alternees |
| "surface card" | oklch(0.22 0.01 60) | #2A2622 | Fumee — cards, modals, surfaces elevees |
| "bordure subtile" | oklch(0.30 0.01 55) | #3D3832 | Cendre — separateurs, bordures |
| "texte principal" | oklch(0.96 0.012 85) | #F5F0E8 | Creme — headings + body sur fond sombre |
| "texte heading" | oklch(0.91 0.015 80) | #E8E0D4 | Ivoire — titres (leger contraste chaud) |
| "texte secondaire" | oklch(0.73 0.025 75) | #B5AA98 | Sable — sous-titres, descriptions |
| "texte muted" | oklch(0.58 0.02 70) | #8A8070 | Pierre — texte long, descriptions etendues |
| "texte faint" | oklch(0.42 0.02 65) | #605848 | Gres — labels, captions, placeholders |
| "presence couleur" | 10-15% de la surface | — | Ratio accent Cuivre Braise sur la page totale |

## Formes & Radius

| Terme | Valeur | Usage |
|-------|--------|-------|
| "radius standard" | 12px | Cards, boutons, images inline |
| "radius large" | 16px | Hero images, sections a fond distinct |
| "radius pill" | 999px | Badges, tags, indicateurs |
| "radius input" | 8px | Champs de formulaire |
| "radius subtle" | 6px | Petits elements (tooltips, toggles) |
| "radius zero" | 0px | Lignes separatrices, bordures structurelles |

## Ombres

| Terme | Valeur | Usage |
|-------|--------|-------|
| "ombre subtle" | 0 1px 2px rgba(0, 0, 0, 0.3), 0 0 0 1px oklch(0.25 0.01 60) | Etat par defaut cards (elevation subtile) |
| "ombre hover" | 0 4px 12px rgba(0, 0, 0, 0.4), 0 0 0 1px oklch(0.30 0.01 55) | Hover cards |
| "ombre elevee" | 0 8px 24px rgba(0, 0, 0, 0.5) | Modals, dropdowns |
| "glow accent" | 0 0 20px oklch(0.67 0.15 68 / 0.15) | Effet subtil Cuivre Braise sur elements CTA importants |
| "teinte ombre" | rgba(20, 18, 16, x) | Toujours noir chaud coherent avec Charbon |

> **Note dark theme** : Sur fond sombre, les ombres classiques sont peu visibles. Privilegier l'elevation par changement de surface (Charbon > Ebene > Fumee > Cendre) et les bordures subtiles plutot que des box-shadows lourdes.

## Layout

| Terme | Valeur | Usage |
|-------|--------|-------|
| "conteneur" | max-width: 1280px, margin: 0 auto, padding: clamp(24px, 5vw, 80px) | Wrapper principal |
| "grille standard" | 12 colonnes, gap 32px | Layout desktop |
| "grille mobile" | 1 colonne, gap 24px | Layout mobile |
| "grille cards" | repeat(auto-fill, minmax(300px, 1fr)), gap 32px | Grille adaptative produits |
| "full-bleed" | width: 100vw, margin-left: calc(-50vw + 50%) | Sections pleine largeur (hero, CTA final) |
| "sticky header" | position: sticky, top: 0, z-index: 50, backdrop-filter: blur(12px) | Navigation |
| "split hero" | grid-template-columns: 1fr 1.2fr (desktop), 1fr (mobile) | Hero section avec produit dominant |

## Breakpoints

| Terme | Valeur | Usage |
|-------|--------|-------|
| "mobile" | < 640px | Smartphones |
| "tablet" | 640px - 1024px | Tablettes |
| "desktop" | > 1024px | Ordinateurs |
| "large" | > 1440px | Grands ecrans |
