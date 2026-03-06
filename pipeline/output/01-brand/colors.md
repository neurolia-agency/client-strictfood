# Palette de Couleurs

<!-- Derive de : 00-platform.md > Archetype Magician (transformation, revelation dramatique), Values (transparence, convivialite) -->
<!-- Source CSV : .claude/skills/ui-ux-pro-max/data/colors.csv — palettes #35, #4, #68, #37, #83 -->

## Processus de selection (ui-ux-pro-max)

### Palettes CSV consultees

| # | Product Type | Direction | Pertinence StrictFood |
|---|-------------|-----------|----------------------|
| 35 | Luxury/Premium Brand | Dark #1C1917 + gold CTA #CA8A04 | Dark + gold = le plus proche de la DA "Dark Food Premium" |
| 4 | E-commerce Luxury | Dark #1C1917 + gold CTA #CA8A04 | Confirme la convergence dark + gold pour le premium |
| 68 | Brewery/Winery | Burgundy #7C2D12 + craft gold #CA8A04 | Artisanal premium + or = ancrage craft |
| 37 | Fitness/Gym App | Orange #F97316 + green #22C55E sur dark #1F2937 | Energie fitness sur fond sombre |
| 83 | Theater/Cinema | Dramatic dark #0F0F23 + spotlight gold #CA8A04 | Theatre noir + projecteur dore = archetype Magician |

### Strategies explorees

**Strategie A — Monochrome Ambre (analogique)**
Tout dans les tons chauds : cuivre, ambre, brown. Inspire de #35 + #66 (Bakery/Cafe).
Rejetee : trop monochrome, pas assez de tension visuelle pour le Magician (qui a besoin de contraste).

**Strategie B — Cuivre & Grenat (split-complementaire chaud)**
Or-cuivre en primaire + grenat/bordeaux fume en secondaire. Inspire de #35 + #68.
Retenue : le grenat apporte la profondeur "craft premium" (breweries, artisanat) et le cuivre conserve l'appetence alimentaire (caramelisation). L'angle chromatique (~46 deg) cree du contraste sans sortir du spectre chaud.

**Strategie C — Ambre & Olive (complementaire attenue)**
Or-ambre + olive grille. Inspire de #37 + #35.
Rejetee : l'olive evoque le "healthy generique" que le brief rejette explicitement ("pas de health food generique").

### Choix retenu : Strategie B — Cuivre & Grenat

**Justification** :
- Le cuivre (hue 68 deg) est plus "forge/braise" que l'or pur (hue 85-90 deg) — il incarne la transformation par le feu (Magician) et la chaleur pulsee (differenciateur StrictFood)
- Le grenat fume (hue 22 deg) apporte la dimension "craft artisanal" inspiree des palettes brewery/winery (#68) — coherent avec l'Ancrage Local et les partenaires artisans
- Un accent tertiaire "Feuille Grillee" (vert tres mute) est reserve aux badges nutritionnels uniquement — il signale le positionnement sante sans tomber dans le "vert pomme" generique
- Les 3 palettes premium du CSV (#35, #4, #83) convergent sur le gold #CA8A04 comme accent sur dark : le cuivre est sa personnalisation "minerale"

## Couleur Primaire

- **Nom** : Cuivre Braise
- **OKLCH** : oklch(0.67 0.15 68)
- **HEX** : #BF8522 (approx.)
- **Usage** : Accent principal — CTAs, liens actifs, elements d'emphase, highlights sur les visuels food, bordures actives

### Variantes

- **Cuivre Braise clair** : oklch(0.75 0.13 70) / ~#D4A44E — Hover, focus, bordures actives
- **Cuivre Braise fonce** : oklch(0.55 0.14 65) / ~#8E6215 — Active, texte sur fond clair
- **Cuivre Braise pale** : oklch(0.20 0.02 68) / ~#282218 — Background tint subtil, sections alternees

## Couleur Secondaire

- **Nom** : Grenat Fume
- **OKLCH** : oklch(0.42 0.10 22)
- **HEX** : #7C3530 (approx.)
- **Usage** : Accent secondaire — separateurs decoratifs, hover states enrichis, accents craft/artisanal, backgrounds cards speciales (artisans)

### Variantes

- **Grenat Fume clair** : oklch(0.52 0.08 25) / ~#96524C — Hover, backgrounds legers
- **Grenat Fume fonce** : oklch(0.34 0.10 20) / ~#5E2420 — Active, texte sur fond clair

## Accent Tertiaire (Nutrition)

- **Nom** : Feuille Grillee
- **OKLCH** : oklch(0.52 0.06 145)
- **HEX** : #5C7858 (approx.)
- **Usage** : Exclusivement pour badges nutritionnels, indicateurs "sain", macros — usage tres parcimonieux

## Neutrals

### Backgrounds

- **Charbon** : oklch(0.14 0.008 60) / #141210 — Background principal (quasi-noir chaud, reference bois/G63)
- **Ebene** : oklch(0.18 0.008 60) / #1E1B18 — Background alternatif, sections contrastees
- **Fumee** : oklch(0.22 0.01 60) / #2A2622 — Surfaces elevees (cards, modals)
- **Cendre** : oklch(0.30 0.01 55) / #3D3832 — Bordures, separateurs

### Textes

- **Creme** : oklch(0.96 0.012 85) / #F5F0E8 — Texte principal (heading + body sur fond sombre)
- **Ivoire** : oklch(0.91 0.015 80) / #E8E0D4 — Titres (leger contraste chaud)
- **Sable** : oklch(0.73 0.025 75) / #B5AA98 — Sous-titres, texte secondaire
- **Pierre** : oklch(0.58 0.02 70) / #8A8070 — Texte muted (descriptions longues)
- **Gres** : oklch(0.42 0.02 65) / #605848 — Labels, captions, placeholders

## Semantique

- **Succes** : oklch(0.52 0.06 145) — Aligne sur Feuille Grillee (harmonie)
- **Erreur** : oklch(0.52 0.16 25) — Rouge sourd chaud
- **Warning** : oklch(0.65 0.14 68) — Aligne sur Cuivre Braise (harmonie)
- **Info** : oklch(0.55 0.06 240) — Bleu-gris neutre

## Harmonie Colorimetrique

Strategie : **Split-complementaire chaud enrichi.**

```
         Feuille Grillee (145 deg)
           \
            \     Grenat (22 deg)
             \   /
    Cuivre (68 deg) -------- Fond (60 deg, desature)
```

Le Cuivre Braise (68 deg) et le Grenat Fume (22 deg) forment un angle de ~46 deg — suffisamment eloignes pour creer du contraste chromatique, tous deux dans le spectre chaud (food, artisanat, forge). La Feuille Grillee (145 deg) en tertiaire cree une triade attenuee avec le Cuivre, reservee aux badges nutrition.

Les 3 accents partagent le meme background sombre chaud (60 deg), unifiant l'ensemble.

Le systeme evite deliberement :
- Le bleu/violet (pas de "tech aesthetic" ou "AI vibe")
- Le vert vif (pas de "health food" generique — la Feuille Grillee est un olive fonce, pas un vert)
- Le rouge vif (pas de "fast-food classique" — le grenat est fume et sourd, jamais criard)

## Variables CSS

```css
:root {
  /* Primaire — Cuivre Braise */
  --color-primary: oklch(0.67 0.15 68);
  --color-primary-light: oklch(0.75 0.13 70);
  --color-primary-dark: oklch(0.55 0.14 65);
  --color-primary-pale: oklch(0.20 0.02 68);

  /* Secondaire — Grenat Fume */
  --color-secondary: oklch(0.42 0.10 22);
  --color-secondary-light: oklch(0.52 0.08 25);
  --color-secondary-dark: oklch(0.34 0.10 20);

  /* Tertiaire — Feuille Grillee (nutrition only) */
  --color-tertiary: oklch(0.52 0.06 145);

  /* Backgrounds — Charbon */
  --color-background: oklch(0.14 0.008 60);
  --color-background-alt: oklch(0.18 0.008 60);
  --color-surface: oklch(0.22 0.01 60);
  --color-border: oklch(0.30 0.01 55);

  /* Textes — Gamme creme */
  --color-foreground: oklch(0.96 0.012 85);
  --color-foreground-heading: oklch(0.91 0.015 80);
  --color-foreground-muted: oklch(0.73 0.025 75);
  --color-foreground-subtle: oklch(0.58 0.02 70);
  --color-foreground-faint: oklch(0.42 0.02 65);

  /* Semantique */
  --color-success: oklch(0.52 0.06 145);
  --color-error: oklch(0.52 0.16 25);
  --color-warning: oklch(0.65 0.14 68);
  --color-info: oklch(0.55 0.06 240);
}
```

## Notes d'Usage

- **Contraste WCAG AA** : Creme (#F5F0E8) sur Charbon (#141210) = ratio ~14:1 (AAA). Cuivre Braise sur Charbon = ratio ~5.5:1 (AA pour large text). Grenat Fume sur Charbon = ratio ~2.5:1 (accent decoratif uniquement, jamais pour texte seul).
- **Le Cuivre Braise ne s'utilise jamais en aplat de background large** — reserve aux accents, CTAs, bordures actives, highlights. En fond, utiliser la variante pale.
- **Le Grenat Fume est un accent enrichissant** — utilise pour les elements "craft" : cards artisans, separateurs decoratifs, hover states enrichis, backgrounds tintes sur sections artisanales. Pas pour le texte courant (contraste insuffisant).
- **La Feuille Grillee est hyper-restreinte** — badges nutrition uniquement. Jamais de surface, jamais de texte courant.
- **Sur fond clair (si applicable pour sections inversees)** : utiliser Charbon comme texte, Cuivre Braise fonce pour les accents.

## Compatibilite frontend-design2

- [x] Max 1 couleur d'accent principal (Cuivre Braise) — Grenat/Feuille sont secondaire/tertiaire (frontend-design2 Rule 2)
- [x] Saturation accent : C=0.15 < 0.80 (Rule 2)
- [x] Pas de purple/blue "AI aesthetic" (LILA BAN — Rule 2)
- [x] Pas de neon/outer glows prevus (Section 7)
- [x] Pas de pure black #000000 — utilise off-black oklch(0.14 0.008 60) warm (Section 7)
- [x] Bases neutres : gamme chaude coherente (hue 55-85 deg pour les neutres)
