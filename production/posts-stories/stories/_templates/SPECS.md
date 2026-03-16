# Spécifications Templates Stories — Cadres Rigides

> Ce document est la **source de vérité** pour le remplissage des templates.
> Le copywriter, le data mapper et le fill doivent respecter ces limites.

---

## Conventions globales

### Zone safe Instagram (1080×1920)

| Zone | Pixels | Contenu IG superposé |
|------|--------|---------------------|
| Haut | 0 → 250px | Username, photo profil, timestamp, X |
| Bas | 1670 → 1920px | Barre réponse, réactions, partage |
| Côtés | 0 → 65px | Marge device |

**Zone texte safe** : x: 70-1010px, y: 260-1660px

### Presets photo (classes CSS dans base.css)

| Classe | object-position | transform | Usage |
|--------|----------------|-----------|-------|
| `photo-centre` | 50% 40% | — | Sujet centré (produit détouré, plat vu de dessus) |
| `photo-droite` | 75% 30% | — | Sujet à droite (default Dark Premium) |
| `photo-gauche` | 25% 40% | — | Sujet à gauche |
| `photo-haut` | 50% 20% | — | Sujet en haut (devanture, enseigne) |
| `photo-large` | 50% 50% | scale(1.15) | Photo large (salle, panorama) |
| `photo-portrait` | 50% 25% | scale(1.1) | Photo verticale (portrait) |

### Forces de gradient (classes CSS dans base.css)

| Classe | Opacités | Usage |
|--------|----------|-------|
| `gradient-light` | top 0.35, bottom 0.55, left 0.60 | Photo sombre |
| `gradient-medium` | top 0.55, bottom 0.75, left 0.80 | Default |
| `gradient-strong` | top 0.70, bottom 0.88, left 0.92 | Photo claire / extérieur |

---

## 1. Vitrine (`vitrine.html`)

> Fiche produit complet OU composant/ingrédient. Deux variantes, même squelette.

### Cadre fixe

| Zone | Position | Hauteur | Contenu |
|------|----------|---------|---------|
| Hero photo | top: 0 | 1080px | Image produit/ingrédient, plein cadre |
| Gradient transition | top: ~780px | implicite (mask-image sur la photo) | Fade vers le fond |
| Info zone | top: 1020px → bottom: 0 | ~900px | Tout le texte + macros + tagline + logo |

### Info zone — Variante `produit`

| Élément | Typo | Max car | Max lignes | Position dans la zone |
|---------|------|---------|------------|----------------------|
| `PRODUCT_NAME` | Oswald 78px bold | 22 | 1 | Haut de l'info zone |
| `PRODUCT_SUBTITLE` | DM Sans 32px | 50 | 1 | Sous le nom |
| Barre macros | Oswald 52px + DM Sans 17px | 4 valeurs | 1 | Sous le subtitle, gap 30px |
| `BADGE_TEXT` | Space Grotesk 19px | 25 | 1 | Sous les macros |
| Divider + `TAGLINE` | Space Grotesk 38px | 40 | 1 | Bottom (margin-top: auto) |
| Logo | 160px width | — | — | Sous la tagline |

### Info zone — Variante `composant`

| Élément | Typo | Max car | Max lignes | Position dans la zone |
|---------|------|---------|------------|----------------------|
| `INGREDIENT_NAME` | Oswald 78px bold | 22 | 1 | Haut de l'info zone |
| `KEY_FACT` | DM Sans 32px | 120 | 3 | Sous le nom |
| `ARTISAN_NAME` | Space Grotesk 19px | 30 | 1 | Sous le fait clé |
| `IN_PRODUCT` | DM Sans 24px uppercase | 30 | 1 | Sous l'artisan |
| Divider + `TAGLINE` | Space Grotesk 38px | 40 | 1 | Bottom (margin-top: auto) |
| Logo | 160px width | — | — | Sous la tagline |

### Placeholders

**Variante produit** : `{{VARIANT}}` = `produit`, `{{PRODUCT_NAME}}`, `{{PRODUCT_SUBTITLE}}`, `{{PROTEIN}}`, `{{FAT}}`, `{{CARBS}}`, `{{KCAL}}`, `{{BADGE_TEXT}}`, `{{HERO_IMAGE_PATH}}`, `{{TAGLINE}}`, `{{MOOD_CLASS}}`, `{{PHOTO_PRESET}}`

**Variante composant** : `{{VARIANT}}` = `composant`, `{{INGREDIENT_NAME}}`, `{{KEY_FACT}}`, `{{ARTISAN_NAME}}`, `{{ARTISAN_CITY}}`, `{{IN_PRODUCT}}`, `{{HERO_IMAGE_PATH}}`, `{{TAGLINE}}`, `{{MOOD_CLASS}}`, `{{PHOTO_PRESET}}`

---

## 2. Éducatif (`educatif.html`)

> Chiffre clé + explication + comparaison VS optionnelle. Photo BG à droite.

### Cadre fixe

| Zone | Position | Contenu |
|------|----------|---------|
| Photo BG | Absolute, droite, masquée à gauche | Image contextuelle |
| Gradients | Top + bottom + left | Protection texte |
| Accent line | Left 70px, top 280px, height 1400px | Décor vertical |
| Content | Flex column, padded | Label → titre → chiffre → explication → VS |

### Zones texte

| Élément | Typo | Max car | Max lignes | Position Y |
|---------|------|---------|------------|-----------|
| Label "Le savais-tu ?" | DM Sans 24px | fixe | 1 | ~260px |
| `TITLE` | Space Grotesk 48px bold | 45 | 2 | ~310px |
| `FACT_NUMBER` | Oswald 200px bold accent | 4 | 1 | ~430px |
| `FACT_UNIT` | Oswald 60px | 25 | 1 | Sous le chiffre |
| `EXPLANATION` | DM Sans 34px | 120 | 3 | ~800px (fixe, pas auto) |
| VS block | Composé (voir détail) | — | — | ~1050px |
| `TAGLINE` | Space Grotesk 40px | 40 | 1 | Bottom section |

### VS block (optionnel)

| Élément | Typo | Max car |
|---------|------|---------|
| `VS_OURS_LABEL` | DM Sans 22px | fixe "Strict Food's" |
| `VS_OURS_VALUE` | Oswald 80px | 6 |
| `VS_OURS_UNIT` | DM Sans 24px | 15 |
| `VS_THEIRS_LABEL` | DM Sans 22px | 20 |
| `VS_THEIRS_VALUE` | Oswald 80px | 6 |
| `VS_THEIRS_UNIT` | DM Sans 24px | 15 |

### Placeholders

`{{TITLE}}`, `{{FACT_NUMBER}}`, `{{FACT_UNIT}}`, `{{EXPLANATION}}`, `{{SHOW_VS}}`, `{{VS_OURS_VALUE}}`, `{{VS_OURS_UNIT}}`, `{{VS_THEIRS_LABEL}}`, `{{VS_THEIRS_VALUE}}`, `{{VS_THEIRS_UNIT}}`, `{{TAGLINE}}`, `{{BG_IMAGE_PATH}}`, `{{SHOW_BG}}`, `{{SHOW_HERO}}`, `{{HERO_IMAGE_PATH}}`, `{{MOOD_CLASS}}`, `{{IMG_CLASS}}`, `{{GRADIENT_CLASS}}`, `{{PHOTO_PRESET}}`

---

## 3. Interactif (`interactif.html`)

> Question + zone sticker Instagram. Mode Single (1 photo) ou VS (2 produits).

### Cadre fixe

| Zone | Position | Contenu |
|------|----------|---------|
| Images | Absolute, behind content | Hero (single) ou 2 produits (VS) |
| Gradients | Top + bottom | Protection texte |
| Content | Flex column, top-aligned | Logo → label → question → VS typo → sticker |

### Zones texte

| Élément | Typo | Max car | Max lignes |
|---------|------|---------|------------|
| Label "Ton avis" | DM Sans 24px | fixe | 1 |
| `QUESTION` | Oswald 72px bold | 50 | 2 |
| `PRODUCT_A_LABEL` (VS) | Oswald 90px | 10 | 1 |
| `PRODUCT_B_LABEL` (VS) | Oswald 90px | 10 | 1 |
| Sticker zone | 900×260px, dashed border | — | — |
| `TAGLINE` | Space Grotesk 40px | 40 | 1 |

### Placeholders

`{{QUESTION}}`, `{{TAGLINE}}`, `{{BG_IMAGE_PATH}}`, `{{SHOW_IMAGE}}`, `{{SHOW_VS}}`, `{{VS_CLASS}}`, `{{PRODUCT_A_LABEL}}`, `{{PRODUCT_A_IMAGE}}`, `{{PRODUCT_B_LABEL}}`, `{{PRODUCT_B_IMAGE}}`, `{{MOOD_CLASS}}`, `{{IMG_CLASS}}`

---

## 4. Annonce (`annonce.html`)

> Badge + headline + body + CTA. Tout centré. Photo BG full-screen dimmed.

### Cadre fixe

| Zone | Position | Contenu |
|------|----------|---------|
| Photo BG | Absolute, full-screen, opacity faible | Image contextuelle dimmed |
| Gradient | Radial center → bords sombres | Protection texte |
| Content | Flex column, centered | Logo → badge → headline → divider → body → CTA |

### Zones texte

| Élément | Typo | Max car | Max lignes |
|---------|------|---------|------------|
| `BADGE_TEXT` | DM Sans 28px accent | 20 | 1 |
| `HEADLINE` | Oswald 90px bold | 30 | 2 |
| `BODY_TEXT` | DM Sans 34px | 120 | 3 |
| `CTA_TEXT` | Space Grotesk 28px | 25 | 1 |
| `TAGLINE` | Space Grotesk 40px | 40 | 1 |

### Placeholders

`{{BADGE_TEXT}}`, `{{HEADLINE}}`, `{{BODY_TEXT}}`, `{{CTA_TEXT}}`, `{{SHOW_CTA}}`, `{{TAGLINE}}`, `{{BG_IMAGE_PATH}}`, `{{SHOW_BG}}`, `{{MOOD_CLASS}}`, `{{IMG_CLASS}}`, `{{GRADIENT_CLASS}}`

---

## 5. IRL (`irl-story.html`)

> Photo plein cadre + overlay DA minimal (logo + texte optionnel).

### Cadre fixe

| Zone | Position | Contenu |
|------|----------|---------|
| Photo | Absolute, plein cadre 1080×1920 | Photo brute |
| Gradient haut | Top, height 350px | Protection logo |
| Gradient bas | Bottom, height 600px | Protection texte |
| Logo | Absolute, top 270px left 80px | 120px, opacity 0.8 |
| Texte | Absolute bottom, padded | Optionnel, max 1 phrase |

### Zones texte

| Élément | Typo | Max car | Max lignes |
|---------|------|---------|------------|
| `IRL_TEXT` | Space Grotesk 48px | 40 | 2 |

### Filtres photo

| Classe | Filtre | Usage |
|--------|--------|-------|
| `irl-filter-leger` | brightness 1.05, sepia 0.06 | Default |
| `irl-filter-moyen` | brightness 1.0, sepia 0.10 | Photo très claire |
| `irl-filter-fort` | brightness 0.95, sepia 0.15 | Extérieur très lumineux |

### Placeholders

`{{BG_IMAGE_PATH}}`, `{{IRL_TEXT}}`, `{{SHOW_TEXT}}`, `{{IRL_FILTER}}`, `{{IRL_TEXT_POSITION}}`, `{{MOOD_CLASS}}`, `{{PHOTO_PRESET}}`

---

## 6. Process (`process.html`)

> Avant/après ou étapes. Split vertical avec bande de séparation DA.

### Cadre fixe

| Zone | Position | Hauteur | Contenu |
|------|----------|---------|---------|
| Logo overlay | Absolute, top 270px left 80px | — | Logo petit, z-index au-dessus |
| Photo TOP | top: 0 | 920px | Image "avant" ou "étape 1" |
| Bande séparation | top: 900px | 80px | Ligne accent + label optionnel |
| Photo BOTTOM | top: 960px | 710px | Image "après" ou "étape 2" |
| Légende | Absolute, bottom 280px | — | Texte overlay sur la photo du bas |
| Bottom | bottom: 0, height 250px | — | Tagline + logo (zone safe) |

### Zones texte

| Élément | Typo | Max car | Max lignes |
|---------|------|---------|------------|
| `LABEL_TOP` | DM Sans 22px uppercase | 20 | 1 |
| `LABEL_BOTTOM` | DM Sans 22px uppercase | 20 | 1 |
| `SEPARATOR_TEXT` | Space Grotesk 24px | 15 | 1 |
| `CAPTION` | Space Grotesk 42px bold | 35 | 2 |
| `TAGLINE` | Space Grotesk 36px | 40 | 1 |

### Placeholders

`{{IMAGE_TOP}}`, `{{IMAGE_BOTTOM}}`, `{{LABEL_TOP}}`, `{{LABEL_BOTTOM}}`, `{{SEPARATOR_TEXT}}`, `{{CAPTION}}`, `{{TAGLINE}}`, `{{MOOD_CLASS}}`, `{{PHOTO_PRESET_TOP}}`, `{{PHOTO_PRESET_BOTTOM}}`

---

## Récap limites de caractères (quick reference)

| Template | Zone | Max car |
|----------|------|---------|
| vitrine | PRODUCT_NAME / INGREDIENT_NAME | 22 |
| vitrine | PRODUCT_SUBTITLE | 50 |
| vitrine | KEY_FACT | 120 |
| vitrine | BADGE_TEXT | 25 |
| educatif | TITLE | 45 |
| educatif | FACT_NUMBER | 4 |
| educatif | FACT_UNIT | 25 |
| educatif | EXPLANATION | 120 |
| interactif | QUESTION | 50 |
| interactif | PRODUCT_A/B_LABEL | 10 |
| annonce | BADGE_TEXT | 20 |
| annonce | HEADLINE | 30 |
| annonce | BODY_TEXT | 120 |
| annonce | CTA_TEXT | 25 |
| irl | IRL_TEXT | 40 |
| process | CAPTION | 35 |
| **tous** | TAGLINE | 40 |
