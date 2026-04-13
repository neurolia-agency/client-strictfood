# Spécifications Templates Stories — Cadres Rigides

> Ce document est la **source de vérité** pour le remplissage des templates.
> Le copywriter, le data mapper et le fill doivent respecter ces limites.

---

## Conventions globales

### ⛔ Pain noir obligatoire

Toute photo ou visuel de burger DOIT montrer un pain noir (black bun sésame). Si une photo montre un bun blanc → non conforme, ne pas utiliser.

### Layout texte/visuel — Technique du produit surdimensionné

Quand un template contient du texte concentré d'un côté, le visuel produit doit **combler l'espace vide opposé** en étant **surdimensionné et coupé par le bord** (~50% visible).

#### Technique

1. **Agrandir le visuel** : `width` et `height` à 1.3x–1.5x de la taille normale (ex: 1500px au lieu de 1100px)
2. **Décaler vers le bord** : `right: -500px` à `-700px` (ou `left` si inversé) pour que ~50% du produit déborde hors cadre
3. **Masque radial** : remplacer le masque linéaire par défaut par un `radial-gradient` qui fond le produit dans le fond sombre sans coupure nette
4. **`object-fit: contain`** : pour les photos produit sur fond noir (pas `cover`)

Exemple concret (éducatif, texte à gauche, burger à droite) :
```css
width: 1500px; height: 1500px; top: 150px; right: -600px;
object-fit: contain; object-position: center;
mask-image: radial-gradient(ellipse 85% 85% at 50% 50%, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.5) 60%, transparent 80%);
```

#### Application par template

| Template | Texte principal | Placement produit | Technique |
|----------|----------------|-------------------|-----------|
| `educatif.html` | Gauche (titre, chiffre, explication, VS) | **Droite, surdimensionné, ~50% visible** | `right: -500/-700px`, width 1300-1500px |
| `annonce.html` | Centré (headline, body, CTA) | **Fond centré** — la photo remplit le fond derrière le texte centré | Preset `photo-centre`, masque radial |
| `interactif.html` | Haut (question) + Bas (sticker) | **Centre/bas** — image entre question et sticker zone | Positionnement central |
| `vitrine.html` | Bas (info zone) | **Haut** — hero photo domine la moitié haute | Preset par défaut du template |

#### Quand appliquer

- **Photos produit sur fond noir** (dossier `burgers-black/`, `dark-bg/`) → technique surdimensionné + `object-fit: contain`
- **Photos contextuelles** (cuisine, salle, extérieur) → garder le comportement `bg-image` par défaut avec `object-fit: cover`
- **Vitrine** → ne PAS appliquer (le hero a son propre cadre fixe)

### Zone safe Instagram (1080×1920)

| Zone | Pixels | Contenu IG superposé |
|------|--------|---------------------|
| Haut | 0 → 250px | Username, photo profil, timestamp, X |
| Bas | 1840 → 1920px | Marge minimale (IG a supprimé l'overlay "envoyer un message") |
| Côtés | 0 → 65px | Marge device |

**Zone texte safe** : x: 70-1010px, y: 260-1840px

> **`--safe-bottom` = 80px** (réduit de 250px). Instagram a supprimé le call-to-action superposé en bas des stories.

### Logo — Position en bas (sous la tagline)

Le logo est positionné **EN BAS**, sous la tagline, dans TOUS les templates. Il n'est plus en haut — ça évite le doublon avec le nom du profil Instagram affiché par l'interface IG.

**Structure bottom (tous templates Dark Premium) :**
```html
<div class="bottom-section">
  <div class="tagline">Le cheat meal <em>qui n'en est pas un</em></div>
  <div class="logo-container">
    <img src="_base/logo.svg" alt="STRICT FOOD'S">
  </div>
</div>
```

**Structure bottom (IRL) :**
```html
<div class="irl-bottom">
  <div class="tagline">Le cheat meal <em>qui n'en est pas un</em></div>
  <div class="logo-container">
    <img src="_base/logo.svg" alt="STRICT FOOD'S">
  </div>
</div>
```

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
| `gradient-light` | top 0.20, bottom 0.40, left 0.45 | Photo sombre ou produit lumineux |
| `gradient-medium` | top 0.40, bottom 0.55, left 0.60 | Default |
| `gradient-strong` | top 0.55, bottom 0.72, left 0.78 | Photo claire / extérieur |

### Réglages image par défaut (base.css)

| Variable | Valeur | Effet |
|----------|--------|-------|
| `--img-opacity` | `0.75` | Visibilité image de fond (75%) |
| `--img-brightness` | `1.30` | Boost luminosité (+30%) |
| `--img-sepia` | `0.05` | Touche chaude très légère |
| `--img-saturate` | `1.10` | Boost saturation (+10%) |

> **Dark Premium ≠ Terne** : le fond est sombre, mais les images et textes doivent être lumineux, contrastés et dynamiques.

### Hiérarchie texte — Blanc pur + Accent

**Principe** : la hiérarchie se fait par **taille, poids et couleur (blanc vs accent)** — PAS par opacité. Tout le texte visible est en blanc pur `#fff` ou en accent `var(--accent)`.

| Rôle | Couleur | Poids | Exemples |
|------|---------|-------|----------|
| Labels / catégories | **Accent** (cuivre/vert/grenat) + `brightness(1.2)` | 600 | "Le savais-tu ?", "Ton avis", "Seulement" |
| Headlines | **Blanc pur** `#fff` | 700 | Titres, questions |
| Chiffres hero | **Accent** + `brightness(1.3)` | 700 | "53", prix, kcal |
| Unités / sous-titres | **Blanc pur** `#fff` | 500 | "grammes de protéines" |
| Body / explications | **Blanc pur** `#fff` | 400 | Texte d'explication |
| Mots-clés dans body | **Accent** + `brightness(1.2)` | 600 | `<strong>` dans les explications |

> **JAMAIS de texte gris** (opacity < 1.0) pour du contenu principal. Réserver l'opacité réduite aux éléments décoratifs (placeholders sticker, hints).

### Lisibilité sur fond texturé — text-depth + mark-tape

Quand du texte blanc est positionné par-dessus un visuel (burger, photo), utiliser :

| Outil | Classe | Effet | Quand |
|-------|--------|-------|-------|
| **Halo sombre** | `text-depth-3` | 6 couches d'ombre (0.9 max) créant un coussin de contraste | Tout texte devant une photo |
| **Bande accent** | `mark-tape-strong` | Bande accent à 0.50 opacité + bordures 0.90 | Blocs de texte longs (>80 car) devant une photo |

Le `text-depth-3` est le niveau par défaut pour les templates Dark Premium avec photo. Le `text-depth-1` ou `text-depth-2` ne sont utilisés que si le texte est sur du charbon pur (pas de photo derrière).

---

## Story Universal (`story-universal.html`) — TEMPLATE PRINCIPAL

> **Remplace tous les anciens templates.** Photo plein cadre + overlay minimal.
> La photo EST la story. Le texte est un complement optionnel, jamais le sujet.

### Cadre fixe

| Zone | Position | Contenu |
|------|----------|---------|
| Photo plein cadre | absolute, 100% width/height | Image (irl-archive, full-ia, sublimation, compositing) |
| Gradient haut | top, height 350px | Protection safe zone IG (discret) |
| Gradient bas | bottom, height 550px | Protection texte + tagline |
| Text zone | bottom 220px, centre | 2 lignes de texte optionnelles |
| Bottom | bottom 0, padding safe-bottom | Tagline + logo |

### Zones texte

| Element | Typo | Max car | Max lignes | Optionnel ? |
|---------|------|---------|------------|-------------|
| `TEXT_LINE_1` | Oswald 72px bold uppercase | 22 | 1 | Oui — `SHOW_LINE_1` |
| `TEXT_LINE_2` | Space Grotesk 34px accent | 30 | 1 | Oui — `SHOW_LINE_2` |
| Divider | 50px accent gradient | — | — | Oui — `SHOW_DIVIDER` |
| `TAGLINE` | Space Grotesk 36px | 40 | 1 | Non — toujours affiche |
| Logo | 180px width | — | — | Non — toujours affiche |

### Variantes de position

| Classe | Position info | Quand |
|--------|-------------|-------|
| (par defaut) | Centre en bas (au-dessus de tagline) | Produit centre dans l'image |
| `info-haut-gauche` | Haut gauche (top 280px) | Produit a droite |
| `info-haut-centre` | Haut centre (top 280px) | Produit en bas |
| `info-bas-gauche` | Bas gauche | Produit a droite |

### Filtres IRL (photos reelles)

| Classe | Filtre | Usage |
|--------|--------|-------|
| `filter-none` | Aucun | Images IA (deja traitees) |
| `filter-leger` | brightness 1.05, sepia 0.06 | Default photos reelles |
| `filter-moyen` | brightness 1.0, sepia 0.10 | Photo tres claire |
| `filter-fort` | brightness 0.95, sepia 0.15 | Exterieur tres lumineux |

### Exemples de contenu

| Usage | TEXT_LINE_1 | TEXT_LINE_2 | INFO_POSITION |
|-------|------------|------------|---------------|
| Food porn pur | — (masque) | — (masque) | — |
| Produit nomme | "STRICT BOEUF" | "946 kcal" | (defaut) |
| Educatif | "53G PROTEINES" | "Ton shaker ne fait pas le poids" | info-haut-gauche |
| Interactif | "QUEL EST TON STRICT ?" | — | (defaut) |
| Fiche produit | "STRICT VEGE" | "850 kcal" | (defaut) |
| Annonce | "MARDI-DIMANCHE" | "11h-14h / 18h-22h" | info-haut-centre |
| IRL archive | "RUSH DU MIDI" | — | (defaut) |

### Placeholders

`{{BG_IMAGE_PATH}}`, `{{TEXT_LINE_1}}`, `{{TEXT_LINE_2}}`, `{{SHOW_TEXT}}`, `{{SHOW_LINE_1}}`, `{{SHOW_LINE_2}}`, `{{SHOW_DIVIDER}}`, `{{TAGLINE}}`, `{{MOOD_CLASS}}`, `{{PHOTO_PRESET}}`, `{{INFO_POSITION}}`, `{{IRL_FILTER}}`, `{{GRAIN}}`

---

## Fond de la photo (modes IA)

Le **fond** est une dimension independante du traitement template. Il determine la palette du BACKGROUND dans l'image generee par `/image-prompt-engineer`. Pas de lien avec le template utilise.

| Fond | Description | Modes concernes |
|------|-----------|-----------------|
| `ambre` | Surface ambre doree texturee (#FABA43), eclairage chaud | full-ia |
| `charbon` | Surface charbon sombre (#1a1714), eclairage contraste | full-ia |
| `ambre+charbon` | Fond ambre + accessoires charbon (papier kraft noir, ardoise) | full-ia |
| `charbon+ambre` | Fond charbon + accessoires ambre (serviette doree, sesame) | full-ia |

---

> **TEMPLATES SUPPRIMES** : `story-sillon.html`, `story-sceau.html`, `story-feuillete-photo.html`, `story-feuillete-data.html` et leurs traitements associes (arc dome, sceau glassmorphism, bandeau dome) sont supprimes. Le nouveau systeme utilise le Visual Concept Engine (intent-engine) pour les stories visuelles IA et le visual-composer pour les layouts typographiques crees a la volee.

---

## Recap limites de caracteres

| Template | Zone | Max car |
|----------|------|---------|
| **story-universal** | TEXT_LINE_1 | 22 |
| **story-universal** | TEXT_LINE_2 | 30 |
| **tous** | TAGLINE | 40 | **FIXE : `Le cheat meal <em>qui n'en est pas un</em>`** |

---

## TEMPLATES DEPRECIES (legacy S1-S2)

> Les templates ci-dessous sont deprecies depuis la v4. Ils restent dans `_templates/` pour ne pas casser les renders S1-S2 existants, mais ne doivent plus etre utilises pour les nouvelles stories.

---

## 1. Produit Hero (`produit-hero.html`) — DEPRECATED, remplace par story-universal

> ⚠️ **Remplace l'ancien template `vitrine.html`.** Le produit est affiché en plein cadre (photo générée ou sublimée), avec des informations minimales en overlay. Pas de zone info séparée — l'image EST le contenu.

### Cadre fixe

| Zone | Position | Contenu |
|------|----------|---------|
| Photo plein cadre | absolute, 100% width/height | Image produit (full-ia, irl-sublimation, compositing) |
| Gradient bas | bottom, height 550px | Protection texte, dégradé vers charbon |
| Product zone | bottom 220px, centré | Nom produit + info optionnelle |
| Bottom | bottom 0, padding 80px | Tagline + logo |

### Zones texte

| Élément | Typo | Max car | Max lignes | Optionnel ? |
|--------|------|---------|------------|-------------|
| `PRODUCT_NAME` | Oswald 72px bold uppercase | 22 | 1 | Oui — `SHOW_NAME` |
| `PRODUCT_INFO` | Space Grotesk 34px accent | 25 | 1 | Oui — `SHOW_INFO` |
| `TAGLINE` | Space Grotesk 36px | 40 | 1 | Non — toujours affiché |
| Logo | 180px width | — | — | Non — toujours affiché |

### Variants de position

| Classe | Position info | Quand |
|--------|-------------|-------|
| (par défaut) | Centré en bas (au-dessus de tagline) | Produit centré dans l'image |
| `info-haut-gauche` | Haut gauche (top 280px) | Produit à droite dans l'image |
| `info-haut-centre` | Haut centré (top 280px) | Produit en bas dans l'image |
| `info-bas-gauche` | Bas gauche | Produit à droite |

### Exemples d'usage

| Info affichée | PRODUCT_NAME | PRODUCT_INFO | Effet |
|--------------|-------------|-------------|-------|
| Nom seul | "STRICT BŒUF" | (masqué) | Impact maximal, nom bold |
| Nom + macros | "STRICT MAX POULET" | "112g protéines" | Showcase nutrition |
| Nom + kcal | "STRICT VÉGÉ" | "850 kcal" | Simple et direct |
| Nom + accroche | "STRICT BŒUF" | "Le goût sans compromis" | Branding |
| Rien | (masqué) | (masqué) | Pure food porn, tagline + logo seulement |

### Placeholders

`{{BG_IMAGE_PATH}}`, `{{PRODUCT_NAME}}`, `{{PRODUCT_INFO}}`, `{{SHOW_PRODUCT_INFO}}`, `{{SHOW_NAME}}`, `{{SHOW_INFO}}`, `{{SHOW_DIVIDER}}`, `{{TAGLINE}}`, `{{MOOD_CLASS}}`, `{{PHOTO_PRESET}}`, `{{INFO_POSITION}}`

> **Le visuel vient d'un mode IA** (full-ia, irl-sublimation, compositing) — PAS d'une photo référence posée dans un template. L'image est générée/sublimée PUIS insérée dans ce template pour l'overlay texte.

---

## 2. Educatif (`educatif.html`) — DEPRECATED, remplace par story-universal

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

## 3. Interactif (`interactif.html`) — DEPRECATED, remplace par story-universal

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

## 4. Annonce (`annonce.html`) — DEPRECATED, remplace par story-universal

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

## 5. IRL (`irl-story.html`) — DEPRECATED, remplace par story-universal

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

## 6. Process (`process.html`) — DEPRECATED, remplace par story-universal

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

## Recap limites de caracteres (quick reference)

| Template | Zone | Max car |
|----------|------|---------|
| **story-universal** | **TEXT_LINE_1** | **22** |
| **story-universal** | **TEXT_LINE_2** | **30** |
| **tous** | TAGLINE | 40 | **FIXE HTML : `Le cheat meal <em>qui n'en est pas un</em>`** |

### Legacy (deprecated)

| Template | Zone | Max car |
|----------|------|---------|
| produit-hero | PRODUCT_NAME | 22 |
| produit-hero | PRODUCT_INFO | 25 |
| educatif | TITLE | 45 |
| educatif | FACT_NUMBER | 4 |
| interactif | QUESTION | 50 |
| annonce | HEADLINE | 30 |
| irl | IRL_TEXT | 40 |
