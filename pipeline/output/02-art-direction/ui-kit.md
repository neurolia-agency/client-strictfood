# UI Kit — StrictFood

<!-- Derive de : visual-vocabulary.md, constraints.md, project-dials.md, 01-brand/colors.md -->

## Boutons

### Primaire (CTA)

- **Background** : var(--color-primary) — Cuivre Braise oklch(0.67 0.15 68)
- **Texte** : var(--color-background) — Charbon oklch(0.14) (contraste fort sur cuivre)
- **Font** : DM Sans, weight 600, 1rem
- **Radius** : var(--radius-pill) — 999px
- **Padding** : var(--button-padding) — 16px 32px (standard) / var(--button-padding-hero) — 18px 40px (hero)
- **Hover** : filter: brightness(1.1), var(--duration-fast) ease (visual-vocabulary.md > "hover bouton")
- **Active** : background var(--color-cuivre-active) oklch(0.55 0.14 65)
- **Focus** : ring 2px offset 2px var(--ring) oklch(0.75 0.13 70)
- **Taille min** : var(--button-min-height) — 44px (accessibilite WCAG AA touch target)
- **Variante mobile** : full-width sur < 640px, padding var(--button-padding-mobile) — 18px 24px
- **Variante hero** : font-size var(--button-font-size-hero) — 1.0625rem, min-height var(--button-min-height-hero) — 3.25rem, padding var(--button-padding-hero), glow shadow var(--shadow-glow)

### Secondaire

- **Background** : transparent
- **Border** : 1px solid var(--color-border) — Cendre oklch(0.30)
- **Texte** : var(--color-foreground) — Creme oklch(0.96)
- **Font** : DM Sans, weight 500, 1rem
- **Radius** : var(--radius-pill) — 999px
- **Padding** : var(--button-padding) — 16px 32px / var(--button-padding-hero) en hero
- **Variante hero (Liquid Glass)** : glass morphism, backdrop-filter blur(12px) saturate(180%), specular highlight, font-size var(--button-font-size-hero) — 1.0625rem, min-height var(--button-min-height-hero) — 3.25rem
- **Hover** : border-color var(--color-primary) oklch(0.67), color var(--color-primary), var(--duration-normal) var(--easing-standard)
- **Active** : background var(--color-cuivre-pale) oklch(0.20 0.02 68)

### Ghost

- **Background** : transparent
- **Border** : none
- **Texte** : var(--color-foreground-muted) — Sable oklch(0.73)
- **Font** : DM Sans, weight 400, 0.875rem
- **Padding** : 8px 16px
- **Hover** : background var(--color-surface) oklch(0.22), color var(--color-foreground), 200ms ease
- **Usage** : Navigation secondaire, liens "en savoir plus", actions tertiaires

### Effet Shimmer (`.btn-shimmer`)

Reflet cuivre horizontal au hover, applique sur le CTA primaire hero.

- **Technique** : pseudo-element `::after` avec gradient translucide (blanc 25% → 8%), translate de -100% a +100% au hover
- **Transition** : var(--duration-reveal) var(--easing-standard) — 600ms cubic-bezier(0.22, 1, 0.36, 1)
- **Classe CSS** : `.btn-shimmer` (definie dans globals.css)
- **Usage** : Ajouter la classe sur tout CTA primaire qui necessite un reflet au hover. Le bouton doit avoir `position: relative; overflow: hidden;`
- **Fichier source** : `app/globals.css` lignes 379-402

### Liquid Glass (`<LiquidGlassLink>`)

Bouton secondaire hero avec glass morphism avance. Composant React dedie.

- **Composant** : `components/ui/liquid-glass-link.tsx`
- **Props** : etend `React.AnchorHTMLAttributes<HTMLAnchorElement>` (balise `<a>`)
- **Apparence** :
  - Background : rgba(255, 255, 255, 0.08)
  - Border : 1px solid rgba(255, 255, 255, 0.12)
  - Box-shadow : inset specular highlight + outer shadow
  - Specular : gradient top-to-bottom (blanc 22% → 6% → transparent)
  - Radius : var(--radius-pill)
  - Couleur texte : var(--color-creme)
- **Backdrop-filter** :
  - Chromium : SVG filter custom (`feTurbulence` + `feDisplacementMap` + `feGaussianBlur`) pour un effet liquide organique
  - Safari/Firefox (fallback) : `blur(4px) saturate(180%) brightness(1.15)`
  - Detection : `window.chrome` au mount (client-side)
- **Hover** : background → 0.12, border → 0.2, shadow intensifie
- **Focus** : ring 2px var(--color-cuivre)
- **Transitions** : var(--duration-normal) var(--easing-standard) sur background, border-color, box-shadow

> **Interdit** : Aucun autre style de bouton. Si un composant necessite un bouton,
> il utilise l'une de ces 3 variantes + les 2 effets hero ci-dessus. Pas de bouton custom par section.

## Cards

### Style autorise

- **Background** : var(--color-surface) — Fumee oklch(0.22 0.01 60)
- **Border** : 1px solid var(--color-border) oklch(0.30 0.01 55) — UN seul style (border, pas shadow comme elevation principale)
- **Radius** : 16px (visual-vocabulary.md > "radius large")
- **Shadow** : "ombre subtle" — 0 1px 2px rgba(0, 0, 0, 0.3), 0 0 0 1px oklch(0.25 0.01 60)
- **Shadow hover** : "ombre hover" — 0 4px 12px rgba(0, 0, 0, 0.4), border-color oklch(0.35 0.01 55)
- **Padding interne** : 24px
- **Separation contenu** : gap 16px entre elements internes (gap serre)
- **Image dans card** : radius 12px (radius standard), aspect-ratio 4/3 pour les produits food

> **Anti-pattern** : Pas de card avec border + shadow lourde + radius arrondis > 16px simultanement.
> Pas de cards toutes identiques en taille et padding — varier au moins la proportion image/texte.

## Inputs & Formulaires

### Champ texte

- **Background** : transparent
- **Border** : 1px solid var(--color-border) oklch(0.30)
- **Radius** : 8px (visual-vocabulary.md > "radius input")
- **Padding** : 12px 16px
- **Font** : DM Sans, weight 400, 1rem
- **Couleur texte** : var(--color-foreground) Creme
- **Placeholder** : var(--color-foreground-faint) Gres oklch(0.42)
- **Focus** : border-color var(--color-primary) oklch(0.67), ring 2px var(--color-primary-light) oklch(0.75 0.13 70 / 0.3)
- **Erreur** : border var(--color-error) oklch(0.52 0.16 25) + message en var(--color-error) sous le champ
- **Disabled** : opacity 0.5, cursor: not-allowed
- **Label** : au-dessus du champ, DM Sans weight 500, 0.875rem, var(--color-foreground-muted) Sable, margin-bottom 8px

### Textarea

- **Meme style** que champ texte, min-height: 120px, resize: vertical

### Select

- **Meme style** que champ texte + chevron custom (icone Lucide ChevronDown, 16px, currentColor)

## Badges / Tags

- **Background** : var(--color-primary) oklch(0.67 0.15 68 / 0.12) — Cuivre Braise a 12% opacite
- **Texte** : var(--color-primary) Cuivre Braise oklch(0.67)
- **Font** : DM Sans, weight 500, 0.75rem, uppercase, letter-spacing 0.08em
- **Radius** : 999px (visual-vocabulary.md > "radius pill")
- **Padding** : 4px 12px
- **Variante nutritionnelle** : background var(--color-tertiary) oklch(0.52 0.06 145 / 0.12), texte Feuille Grillee — pour badges "proteines", "sans huile", etc.
- **Variante craft** : background var(--color-secondary) oklch(0.42 0.10 22 / 0.12), texte Grenat Fume — pour badges artisans, partenaires

## Separateurs

- **Horizontal** : 1px solid var(--color-border) oklch(0.30 0.01 55), opacity 0.5
- **Vertical** : idem, hauteur contextuelle
- **Espacement** : margin 32px 0 (gap composant)
- **Interdit** : hr decoratif, gradient separator, double-line, separateur avec icone au milieu

## Icones

- **Librairie** : Lucide (https://lucide.dev) — choisie pour sa coherence avec le style geometrique/clean de Space Grotesk
- **Taille default** : 20px
- **Taille large** : 24px (sections features)
- **Couleur** : currentColor (herite du texte parent)
- **Stroke-width** : 1.5 (defaut Lucide — ni trop fin, ni trop epais)
- **Interdit** : melanger plusieurs librairies d'icones, utiliser des emoji en remplacement d'icones UI

## Conteneurs de section

### Standard

- **Max-width** : 1280px (visual-vocabulary.md > "max-width contenu")
- **Padding horizontal** : clamp(24px, 5vw, 80px) (visual-vocabulary.md > "marge laterale")
- **Spacing vertical** : 160px desktop / 96px mobile (visual-vocabulary.md > "whitespace genereux/mobile")
- **Padding interne** : 120px top/bottom desktop / 64px mobile (visual-vocabulary.md > "padding section")

### Full-bleed

- **Width** : 100vw, margin-left: calc(-50vw + 50%)
- **Usage** : Hero, section CTA final uniquement
- **Padding interne** : identique au standard (le contenu reste dans le conteneur 1280px)

## Etats Interactifs

### Loading

- Skeleton pulse : background var(--color-surface) oklch(0.22) oscillant vers oklch(0.27)
- Duree animation : 1.5s infinite ease-in-out
- Forme : meme radius et dimensions que l'element cible

### Empty state

- Icone Lucide (24px) + texte centre, var(--color-foreground-muted) Sable
- Texte descriptif et actionnable (ex: "Aucun produit disponible — reviens vite !")
- Jamais un simple "Aucun resultat"

### Error state

- Bordure var(--color-error) oklch(0.52 0.16 25)
- Icone AlertCircle (Lucide) en var(--color-error)
- Message descriptif sous l'element, DM Sans weight 400, 0.875rem, var(--color-error)
- Jamais de message technique ("Error 500", "null reference")

## Regle d'or

> Tout composant qui n'est pas dans ce ui-kit doit etre justifie.
> Si un agent cree un pattern non liste ici, le Constraint Validator doit le signaler.
> Exception : les elements specifiques a une technique de l'arsenal creatif (project-dials.md)
> sont autorises s'ils sont documentes dans le context-block de la section concernee.
