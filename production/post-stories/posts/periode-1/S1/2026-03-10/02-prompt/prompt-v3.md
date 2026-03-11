# Prompt v3 — Post 1 (10 mars 2026)

> Généré par image-prompt-engineer (Mode B)
> Source : `01-art-direction/direction-v3.md` + `00-input/input-v3.md`
> Changement clé vs v2 : Pain brioche dorée → Pain noir au sésame (black bun)

---

## Prompt — Visuel 1 / 1

**Model**: Gemini (Nano Banana Pro)
**Category**: Food
**Aspect Ratio**: 4:5
**Résolution** : 4K
**Photo référence** : `public/images/photos-references/produits-source/burgers-black/strict-boeuf.png`

**Recette / Produit** (checklist fidélité) :

| Ingrédient | Forme exacte |
|-----------|--------------|
| Pain noir au sésame (base) | Bun rond noir, surface texturée recouverte de graines de sésame dorées |
| Steak haché de bœuf | Steak épais, croûte Maillard uniforme (PAS de grill marks), cuisson chaleur pulsée |
| Parmesan | En miettes — petits fragments irréguliers, poudreux. PAS copeaux, PAS lamelles |
| Oignons rouges | Tranches fines — rondelles avec anneaux concentriques visibles |
| Mâche | Feuilles entières — petites feuilles rondes vertes en bouquet. PAS roquette |
| Sauce poivron | Jaune-orangé subtil — filet lisse, PAS nappe, PAS rouge |
| Pain noir au sésame (chapeau) | Surface noire texturée avec graines de sésame dorées, légèrement de travers |

**Prompt** :

```
A 45-degree overhead food photograph of an artisan black sesame bun burger positioned off-center on the lower-right third of the frame, resting directly on a charred, blackened wooden plank with deep carbonized grain texture. The dark bun top — matte black with scattered golden sesame seeds catching the light like tiny embers — sits slightly askew, revealing the layered interior: small irregular powdery parmesan crumbles scattered over tender round mâche leaves in a fresh green bouquet, thin-sliced red onion rings with visible concentric layers, a thick beef patty with a smooth uniform golden-brown Maillard crust and a subtle drizzle of warm yellow-orange roasted pepper sauce — all stacked on a matching black sesame seed base bun. Warm golden backlight from the upper-right rear creates a luminous amber rim light that traces each individual sesame seed on the dark bun surface, turning them into glowing golden micro-points against the matte black, while making the mâche leaves glow semi-translucent with delicate veins visible, catching parmesan fragments like tiny golden nuggets, and rendering the red onion slices in translucent purple silhouette. A faint wisp of heat vapor rises from the patty edge, barely perceptible against the backlit haze. The deep charcoal background gradually lightens near the light source, the dark bun merging subtly into the background with only the rim-lit sesame seeds and the colorful garniture spilling from between the buns creating the separation. Long warm shadows tinted in smoky garnet tones stretch toward the viewer across the scorched wood surface, where a few escaped mâche leaves and parmesan crumbles rest naturally beside the burger. The atmosphere is intimate and darkly premium, capturing the anticipatory moment just before the first bite — shot with an 85mm lens at f/2.8 for high-end food editorial quality. Match the exact appearance, ingredients, and proportions of the burger shown in the reference photo provided.
```

**Notes de post-production** :
- Crop final 4:5 si nécessaire
- Vérifier fidélité ingrédients vs photo référence (parmesan = miettes, sauce = jaune-orangé, mâche = feuilles rondes)
- Vérifier que le bun est bien NOIR avec graines de sésame (PAS brioche dorée)
- Le backlight doit illuminer les graines individuellement — si les graines sont peu visibles, ajuster l'exposition
- Le bun noir doit se fondre partiellement dans le fond charbon — la séparation vient du rim light sur les graines

---

## Comparaison v2 / v3

| Élément | Prompt v2 | Prompt v3 |
|---------|-----------|-----------|
| Bun | Brioche dorée, surface lisse brillante | Pain noir au sésame, surface mate texturée |
| Rim light focus | Contour lisse du bun doré | Graines de sésame dorées individuelles |
| Contraste bun/fond | Fort (doré vs charbon) | Fusion — séparation par graines rim-lit + garniture |
| Palette bun | Or/ambre dominant | Noir mat + micro-points dorés (graines) |
| Photo ref | `produits-source/strict-boeuf.png` | `burgers-black/strict-boeuf.png` |
| Angle | Plongée 3/4 (45°) | Identique |
| Éclairage | Backlight doré arrière-droit | Identique |
| Surface | Planche bois brûlé/carbonisé | Identique |
| Position | Décentré bas-droit | Identique |
| Mood | Intime et organique | Intime, organique + premium mystérieux |
