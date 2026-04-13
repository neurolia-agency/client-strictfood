# Brief Carrousel Panoramique — [Scene] ([Date])

> Famille C — 1 image large decoupee en N slides raccordees (1080x1350 chacune)

## Strategie

| Champ | Valeur |
|-------|--------|
| Pilier | [Le Produit / Les Benefices / La Marque] |
| Format | Carrousel panoramique [3 ou 4] slides (total : [3240 ou 4320] x 1350) |
| Famille | C — Panoramique |
| Type | Panoramique |
| Scene | `[slug-scene]` (voir `_config/carousel-themes.md` section Panoramique) |
| Periode | [SX — Nom de la periode] |

## Produit principal

**[NOM PRODUIT]** — slug recette : `[slug-kebab-case]`

---

## Description de la scene

> Decrire la scene COMPLETE, de gauche a droite, comme un plan sequence horizontal.

### Vue d'ensemble

[Description de la scene entiere en 2-3 phrases : surface, ambiance, eclairage, disposition des elements]

### Disposition par zone

| Zone | Position | Elements |
|------|----------|----------|
| Gauche (slide 1) | [Description des elements a gauche] | |
| Centre-gauche (slide 2) | [Description — c'est ici que le produit hero est typiquement place] | |
| Centre-droit (slide 3) | [Description des elements a droite du produit] | |
| Droite (slide 4, si 4 slides) | [Description des elements a l'extremite droite] | |

### Surface / Fond

[Description de la surface continue : ex. "dark slate countertop, continuous from left to right, with subtle warm reflections"]

### Eclairage

[Description de l'eclairage : ex. "warm directional light from upper-left, consistent across the entire scene, dramatic shadows falling to the right"]

---

## Prompt IA (scene large)

> Le prompt decrit la scene entiere comme UNE composition horizontale. Le format de generation est 16:9 (3840x2160) ou 1:1 large (4096x4096), puis crop en bande de 1350px de haut.

### Format de generation

| Champ | Valeur |
|-------|--------|
| Ratio | [16:9 / 1:1 large] |
| Resolution | 4K |
| Nombre de slides | [3 / 4] |

### Regles prompt panoramique

- La scene est **horizontalement etalee** — les elements sont distribues de gauche a droite
- Le produit hero est au **centre** de la composition
- Les elements secondaires sont aux **extremites**
- La surface/fond est **continue** d'un bout a l'autre
- L'eclairage est **coherent** sur toute la largeur
- PAS de texte, PAS de logo dans l'image
- Pain noir obligatoire sur tous les burgers
- Pas de grill marks

---

## Direction Caption

| Champ | Valeur |
|-------|--------|
| Angle | [Complementaire a la scene — ex: "Decrire l'experience du repas complet"] |
| Ton | [Sensoriel / Direct / Provocateur / Storytelling] |
| CTA | [Ex: "Swipe pour decouvrir" / "Ton prochain repas" / Aucun] |
| Mention prix | [Oui (preciser) / Non] |
| Mention macros | [Oui / Non] |

> La caption est generee APRES validation visuelle par `/caption-writer`.

---

## Contraintes

- 1 seule generation IA pour toute la scene (pas de generation par slide)
- Decoupe automatique via `render-panoramic.js`
- Les raccords entre slides doivent etre naturels (pas de coupure sur un element important)
- Pain noir obligatoire
- Pas de grill marks
- Produit DECRIT (pas de photo reference)
- Resolution 4K

---

## Etape suivante

> 1. Generer l'image large via `/image-prompt-engineer` + `/nano-banana-pro` (format 16:9 4K)
> 2. Decouper via `node _templates/carousel/render-panoramic.js --input [image] --slides [3|4]`
> 3. Verifier les raccords entre slides
> 4. Valider → Caption
