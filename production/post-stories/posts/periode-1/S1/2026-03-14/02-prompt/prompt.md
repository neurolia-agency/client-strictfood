# Prompt — Post S1-03 (Tiramisu Proteine, 14 mars 2026)

> Genere par image-prompt-engineer (Mode B).
> Source : `01-art-direction/direction.md` + `00-input/input.md`
> Photo reference : `public/contenu-instagram/2025-11-05_18-05-52_UTC.jpg`

---

## Specifications techniques

| Champ | Valeur |
|-------|--------|
| Modele | Gemini (Nanobanana Pro) |
| Mode | Image-to-image (sublimation de la photo reference) |
| Input image | `public/contenu-instagram/2025-11-05_18-05-52_UTC.jpg` |
| Categorie | Food — Dessert |
| Aspect Ratio | 4:5 |
| Resolution | 4K |
| Texte on-image | Non |

---

## Analyse photo source

Le vrai produit est :
- **Contenant** : petit pot plastique transparent individuel (format take-away), couvercle dome plastique (a retirer pour le hero shot)
- **Couche base** : strate brun-chocolat sombre, dense, humide (biscuit imbibe cafe)
- **Couche principale** : epaisse bande de creme beige/ivoire proteique, onctueuse, avec quelques marbrures/traces sombres visibles a travers la paroi
- **Top** : morceaux/chunks irreguliers de biscuit chocolat poses sur la creme — PAS de poudre de cacao lisse, c'est un crumble grossier, avec des eclats sombres et des miettes
- **Proportions** : la creme occupe environ 60% du volume, le biscuit base ~25%, le topping crumble ~15%

---

## Prompt

```
Editorial food photography of a single-serve tiramisu in a small clear plastic cup, lid removed, shot for a high-end dark food magazine. The cup is a compact individual take-away format with transparent walls revealing the layered interior. The camera captures the dessert at a low three-quarter angle, approximately 30 degrees, showing both the layered cross-section through the plastic walls and the textured crumble topping from above. Shot with a 90mm macro lens at f/2.8, the tiramisu is tack-sharp while the deep charcoal background dissolves into velvety darkness.

Through the transparent cup walls, the layer structure is clearly visible: a dark chocolate-brown coffee-soaked biscuit base occupying the bottom quarter, dense and moist with a granular wet texture. Above it, a thick generous band of ivory-beige protein cream fills the majority of the cup — smooth, unctuous, and dense, with subtle dark marbling and swirls visible where biscuit traces bleed into the cream. On top of the cream surface, scattered chunks and crumbles of dark chocolate biscuit sit in irregular pieces — rough, broken, artisanal — some larger fragments, some fine crumbs, creating a textured rustic crown. This is a crumble topping, coarse and generous, with individual pieces catching the light.

The cup sits slightly left of center on a matte black slate surface, cool and mineral. A few escaped biscuit crumbs and chocolate fragments have fallen onto the slate around the base — organic traces of assembly. A single whole coffee bean rests beside the cup as a quiet compositional accent.

Dramatic side-lighting enters from the right at 90 degrees, partially passing through the transparent plastic to illuminate the internal cream layer with a warm translucent glow while the dark biscuit base absorbs the light, deepening the contrast between layers. The crumble chunks on top cast tiny micro-shadows across the cream surface. A subtle warm fill from the left prevents the shadow side from going fully black, keeping detail visible through the cup wall. The light temperature is warm amber-gold, lending the cream a rich ivory warmth. Shadows stretch softly leftward across the slate, tinted with deep burgundy warmth.

The palette is dominated by deep charcoal background, rich chocolate-brown biscuit tones, and warm ivory-beige cream. The mood is indulgent and sophisticated — a restaurant-quality dessert in a casual take-away format, honest and unpretentious. The atmosphere feels intimate, the dessert freshly assembled with visible condensation micro-droplets on the cup wall hinting at cool freshness.
```

---

## Notes pour nano-banana-pro

- **Mode** : `--input-image` avec la photo source Instagram
- **Resolution** : `--resolution 4K`
- **Aspect ratio** : `--aspect-ratio 4:5`
- **Fidelite produit** : le prompt preserve fidèlement le contenant (pot plastique take-away), la structure des couches (biscuit base sombre, creme epaisse ivoire, crumble biscuit chocolat sur le dessus — PAS de poudre de cacao lisse). L'IA doit sublimer l'eclairage, le fond, et les textures tout en gardant le format casual authentique du produit.
- **Changements vs photo source** :
  1. Couvercle retire (hero shot ouvert)
  2. Fond remplace : comptoir vitrine → ardoise noire mate + fond Charbon
  3. Serviette retiree
  4. Eclairage sublimé : ambient vitrine → lateral dramatique studio
  5. Pot decentre vers la gauche (variation grille vs S1-01 a droite)
- **Points critiques a verifier** :
  1. Crumble biscuit chocolat sur le dessus (PAS poudre de cacao lisse)
  2. Couches visibles a travers le pot plastique (base sombre, creme claire)
  3. Fond Charbon profond, pas gris
  4. Format pot plastique take-away preserve (pas de verrine en verre)
  5. Eclairage lateral dramatique

---

## Commande nano-banana-pro

```bash
/nano-banana-pro --input-image public/contenu-instagram/2025-11-05_18-05-52_UTC.jpg --resolution 4K --aspect-ratio 4:5
```

Utiliser le prompt ci-dessus.
