# Brief — Carrousel Panoramique C1 (Samedi 29-03-2026)

> Famille C — 1 image large decoupee en 4 slides raccordees (1080x1350 chacune)

## Strategie

| Champ | Valeur |
|-------|--------|
| Pilier | Le Produit |
| Format | Carrousel panoramique 4 slides (4320x1350 total, 1080x1350 par slide) |
| Famille | C — Panoramique |
| Type | Panoramique |
| Scene | `pano-table-complete` |
| Periode | S3 — Periode 1 |

## Produit principal

**STRICT MAX Poulet** — hero central du panoramique
Slug recette : `strict-max-poulet`

**Produits secondaires** : Tenders STRICT, Frites patate douce

---

## Description de la scene

### Vue d'ensemble

Scene de table vue legerement en plongee (~30 degres). Surface ardoise noire texturee avec reflets chauds subtils. Un repas StrictFood complet etale de gauche a droite : tenders, burger hero au centre, frites et sauce, main qui attrape une frite. Eclairage chaud directionnel venant du haut-gauche, ombres marquees vers la droite. Ambiance food porn premium, sombre et contrastee.

### Disposition par zone

| Zone | Position | Elements |
|------|----------|----------|
| Gauche (slide 1) | Tenders dores (3-4 pieces) sur papier kraft froisse + petit ramequin noir avec sauce poivron jaune-orange. Miettes de panure sur l'ardoise. |
| Centre-gauche (slide 2) | Burger STRICT MAX Poulet en profil dramatique. Pain noir sesame, double couche de lamelles poulet dorees visibles, mache petites feuilles rondes, oignons rouges en tranches, parmesan miettes, filet de sauce. Burger impose et genereux. |
| Centre-droit (slide 3) | Frites patate douce en eventail sortant d'un cornet papier kraft. Surface caramelisee visible. Serviette kraft froissee a cote. |
| Droite (slide 4) | Main realiste (peau naturelle, ongles propres, sans bijoux) qui attrape une frite patate douce. Bokeh leger en arriere-plan. Quelques grains de sesame eparpilles sur l'ardoise. |

### Surface / Fond

Surface ardoise noire texturee, continue de gauche a droite. Grain subtil, reflets chauds du a l'eclairage directionnel. Quelques miettes de sesame et de panure dispersees naturellement sur toute la surface.

### Eclairage

Source chaude directionnelle depuis le haut-gauche (10h). Temperature ~3200K. Ombres marquees tombant vers la droite et le bas. Points lumineux sur les surfaces brillantes (sauce, croute poulet, sesame dore). Ambiance Dark Food Premium : fond sombre, sujet lumineux.

---

## Prompt IA (scene large)

### Format de generation

| Champ | Valeur |
|-------|--------|
| Ratio | 16:9 |
| Resolution | 4K |
| Nombre de slides | 4 |

### Regles prompt panoramique

- Scene horizontalement etalee, elements distribues de gauche a droite
- Burger hero au centre de la composition (slides 2-3)
- Surface ardoise continue d'un bout a l'autre
- Eclairage coherent sur toute la largeur
- PAS de texte, PAS de logo dans l'image
- Pain noir obligatoire (charcoal black sesame bun)
- Pas de grill marks (croute Maillard uniforme, air-fried)
- Main realiste (si visible) — attention aux artefacts IA
- Tenders avec croute doree air-fried (pas de friture)
- Parmesan en miettes (pas en copeaux/shavings)
- Mache = petites feuilles rondes (pas d'arugula)
- Sauce poivron = filet fin jaune-orange (pas de ketchup/mayo)

---

## Direction Caption

| Champ | Valeur |
|-------|--------|
| Angle | L'experience du repas complet : swipe pour decouvrir chaque element du menu StrictFood |
| Ton | Sensoriel / Direct |
| CTA | "Swipe" (implicite, le format invite au swipe) |
| Mention prix | Non |
| Mention macros | Oui (dans le corps — proteines totales du repas) |

---

## Contraintes

- 1 seule generation IA pour toute la scene (pas de generation par slide)
- Decoupe via `node _templates/carousel/render-panoramic.js --input [image] --slides 4`
- Les raccords entre slides doivent etre naturels (pas de coupure sur le burger ou la main)
- Le burger hero est centre sur les slides 2-3 pour qu'il ne soit PAS coupe par un raccord
- Pain noir obligatoire
- Pas de grill marks
- Food Porn Dial : 8/10
- Brand props : oui (papier kraft)

---

## Etape suivante

> 1. `/image-prompt-engineer` avec la description de scene ci-dessus (format 16:9)
> 2. `/realism-auditor` pre-prompt + post-prompt
> 3. `/nano-banana-pro` en 4K format 16:9
> 4. `node _templates/carousel/render-panoramic.js --input [image.png] --slides 4 --output ./brouillons/`
> 5. Verifier les raccords entre slides
> 6. Valider → `/caption-writer`
