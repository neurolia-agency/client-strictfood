# Composition System — Gabarits, overlays et coherence feed

Systeme de composition pour posts et stories Instagram. Gabarits de mise en page,
techniques d'overlay, sublimation de fond et regles de coherence feed.

---

## Formats Instagram

| Format | Ratio | Dimensions | Usage |
|--------|-------|-----------|-------|
| Post carre | 1:1 | 1080 x 1080px | Feed standard |
| Post portrait | 4:5 | 1080 x 1350px | Feed optimise reach |
| Story / Reel | 9:16 | 1080 x 1920px | Stories + Reels |
| Carrousel | 1:1 ou 4:5 | idem | Multi-slides |

### Safe zones

| Zone | Pixels | Contenu IG superpose |
|------|--------|---------------------|
| **Haut (Story)** | 0 → 250px | Username, photo profil, timestamp, bouton X |
| **Bas (Story)** | 1840 → 1920px | Marge device (80px) |
| **Cotes** | 0 → 65px | Marge cropping device |
| **Posts** | 60px tous cotes | Marge de securite |

Les brand elements decoratifs PEUVENT deborder dans les zones IG.
Le texte informatif (noms, prix, CTA) DOIT rester dans la zone safe.

---

## Gabarit de composition — Structure type

```
┌─────────────────────────────┐
│  [SAFE ZONE — marges]        │
│  ┌───────────────────────┐  │
│  │   ZONE IMAGE           │  │  → photo, produit, rendu IA
│  │                        │  │
│  ├────────────────────────┤  │
│  │   ZONE HEADLINE        │  │  → texte principal, font display, grande taille
│  ├────────────────────────┤  │
│  │   ZONE BODY (opt.)     │  │  → detail, prix, description courte
│  ├────────────────────────┤  │
│  │   ZONE CTA / LOGO      │  │  → bouton, badge, watermark logotype
│  └────────────────────────┘  │
└─────────────────────────────┘
```

Les zones ne sont pas fixes — elles s'adaptent au type de contenu.
Un food porn hero = 90% image, 10% logo. Un post annonce = 40% image, 60% texte.

---

## Techniques d'overlay

### Color overlay — Unifier le feed

Couche coloree semi-transparente sur la photo. Cree la cohesion chromatique.

```css
.color-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba([PRIMARY_RGB], 0.15);
  mix-blend-mode: multiply; /* ou screen pour eclaircir */
}
```

- **multiply** : assombrit, enrichit les ombres (pour fond sombre)
- **screen** : eclaircit, revele les lumieres (pour fond clair)
- **Opacite** : 0.10-0.25 (subtil, pas un filtre Instagram visible)
- **REGLE** : utiliser la MEME opacite et le MEME blend mode sur tous les posts photo

### Gradient de lisibilite

Gradient sombre pour placer du texte sur une photo.

```css
/* Gradient bas (texte en bas du post) */
.gradient-bottom {
  background: linear-gradient(to top,
    rgba(0,0,0, 0.85) 0%,
    rgba(0,0,0, 0.4) 50%,
    transparent 100%);
}

/* Gradient lateral (texte a gauche) */
.gradient-left {
  background: linear-gradient(to right,
    rgba(0,0,0, 0.9) 0%,
    rgba(0,0,0, 0.5) 35%,
    transparent 55%);
}
```

### Grain cinematique

Texture subtile qui ajoute de la matiere sans bruit.

```css
.grain {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,..."); /* noise pattern SVG */
  background-size: 200px;
  pointer-events: none;
}
```

---

## Sublimation de fond

Transformer un fond uni ou une photo brute en surface premium.

### Fond uni avec profondeur

Eviter l'aplat plat en ajoutant des gradients radiaux subtils.

```css
.fond-premium {
  background-color: [PRIMARY];
  background-image:
    radial-gradient(ellipse at 30% 70%, rgba(0,0,0,0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 40%);
}
```

### Fond photo avec color grading

```css
.photo-graded {
  filter: contrast(1.12) saturate(1.15) brightness(0.93);
}
.photo-graded::after {
  /* Couche de tonalite */
  background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.4) 100%);
  mix-blend-mode: multiply;
}
```

### Split composition

Moitie fond colore / moitie photo. Cree du dynamisme, bien adapte aux carrousels.

```css
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.split-color { background-color: [PRIMARY]; }
.split-photo { background-image: url(...); background-size: cover; }
```

---

## Coherence feed — Regles de grille

### Principe : reconnaissable en 0.3 seconde

Le feed Instagram est vu en grille de 3 colonnes sur mobile (~161px par post).
A cette echelle, seuls 3 choses sont visibles : la **couleur dominante**, la **structure**
(texte ou photo) et les **brand elements** s'ils sont assez gros.

### Ratio de fonds

Definir un ratio cible entre les types de fond du feed.
Exemples :
- 70% photo / 30% typo-only
- 60% fond accent / 40% fond sombre
- 50% close-up / 30% plan moyen / 20% typographique

Le ratio exact depend de la marque. L'important est de le DEFINIR et de le RESPECTER.

### Regles d'alternance

- **JAMAIS** 3 posts consecutifs avec le meme type de fond
- **JAMAIS** 3 posts consecutifs avec le meme cadrage
- **JAMAIS** 2 posts consecutifs avec exactement les memes brand elements
- **TOUJOURS** au moins 1 post sur 10 "en respiration" (zero element, photo seule)

### Verification en grille 3x3

Avant de publier, simuler la grille des 9 derniers posts :

```
[post7] [post8] [post9]   ← le prochain post
[post4] [post5] [post6]
[post1] [post2] [post3]
```

Verifier :
- Les couleurs dominantes alternent (pas de colonne uniforme)
- Les types de contenu alternent (pas de ligne de 3 close-ups)
- Les brand elements sont visibles sans etre monotones
- L'ensemble a une signature distincte

### Procedure d'audit

1. Lister les 9 derniers posts : fond, type, brand elements
2. Compter les ratios (correspondent-ils aux cibles ?)
3. Detecter les repetitions adjacentes
4. Recommander le prochain post (fond, type, elements) pour reequilibrer

---

## Logotype en post

### Variantes a produire

1. **Couleur principale** — version complete sur fond neutre
2. **Monochrome blanc** — pour fond sombre ou photo
3. **Monochrome sombre** — pour fond clair
4. **Badge / monogramme** — initiale(s) dans une forme (usage compact)
5. **Watermark** — opacity 0.25-0.35, blanc ou couleur legere

### Regles de placement

- **Position constante** : choisir UN emplacement (coin bas-droit ou bas-gauche le plus souvent)
  et s'y tenir sur TOUS les posts. La repetition du placement cree la reconnaissance.
- **Taille** : 40-80px de large. Plus petit = invisible. Plus grand = envahissant.
- **JAMAIS** centrer le logo (sauf post typographique dedie).
- **Tester a 161px** (taille feed mobile) : le logo est-il perceptible ? Si non, inutile.
