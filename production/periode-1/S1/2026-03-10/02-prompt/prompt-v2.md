# Prompt v2 — Post 1 (10 mars 2026)

> Généré par image-prompt-engineer (Mode B)
> Source : `01-art-direction/direction-v2.md` + `00-input/input-v2.md`

---

## Prompt — Visuel 1 / 1

**Model**: Gemini (Nano Banana Pro)
**Category**: Food
**Aspect Ratio**: 4:5
**Résolution** : 4K
**Photo référence** : `public/images/photos-references/produits-source/strict-boeuf.png`

**Recette / Produit** (checklist fidélité) :

| Ingrédient | Forme exacte |
|-----------|--------------|
| Pain brioche (base) | Bun rond, surface lisse dorée, légèrement brillante |
| Steak haché de bœuf | Steak épais, croûte Maillard uniforme (PAS de grill marks), cuisson chaleur pulsée |
| Parmesan | En miettes — petits fragments irréguliers, poudreux. PAS copeaux, PAS lamelles |
| Oignons rouges | Tranches fines — rondelles avec anneaux concentriques visibles |
| Mâche | Feuilles entières — petites feuilles rondes vertes en bouquet. PAS roquette |
| Sauce poivron | Jaune-orangé subtil — filet lisse, PAS nappe, PAS rouge |
| Pain brioche (chapeau) | Surface dorée brillante, légères craquelures naturelles |

**Prompt** :

```
A 45-degree overhead food photograph of an artisan burger positioned off-center on the lower-right third of the frame, resting directly on a charred, blackened wooden plank with deep carbonized grain texture. The brioche bun top sits slightly askew, revealing the layered interior: small irregular powdery parmesan crumbles scattered over tender round mâche leaves in a fresh green bouquet, thin-sliced red onion rings with visible concentric layers, a thick beef patty with a smooth uniform golden-brown Maillard crust and a subtle drizzle of warm yellow-orange roasted pepper sauce — all stacked on a glossy golden brioche base. Warm golden backlight from the upper-right rear creates a luminous amber rim light tracing the bun's contour, making the mâche leaves glow semi-translucent with delicate veins visible, catching parmesan fragments like tiny golden nuggets, and rendering the red onion slices in translucent purple silhouette. A faint wisp of heat vapor rises from the patty, barely perceptible against the backlit haze, while the bun gleams with a subtle buttery lustre. The deep charcoal background gradually lightens near the light source, with long warm shadows tinted in smoky garnet tones stretching toward the viewer across the scorched wood surface, where a few escaped mâche leaves and parmesan crumbles rest naturally beside the burger. The atmosphere is intimate and organic, capturing the anticipatory moment just before the first bite — shot with an 85mm lens at f/2.8 for high-end food editorial quality. Match the exact appearance, ingredients, and proportions of the burger shown in the reference photo provided.
```

**Notes de post-production** :
- Crop final 4:5 si nécessaire
- Vérifier fidélité ingrédients vs photo référence (parmesan = miettes, sauce = jaune-orangé, mâche = feuilles rondes)
- Le backlight peut nécessiter un ajustement d'exposition si les highlights brûlent sur le bun

---

## Comparaison v1 / v2

| Élément | Prompt v1 | Prompt v2 |
|---------|-----------|-----------|
| Angle | Contre-plongée légère (15-20°) | Plongée 3/4 (45°) |
| Éclairage | Clair-obscur latéral gauche | Backlight doré arrière-droit |
| Surface | Ardoise sombre | Planche bois brûlé/carbonisé |
| Position | Centré, 70% du cadre | Décentré bas-droit, 55-60% |
| Mood | Brut et souverain | Intime et organique |
| Bun | Posé parfaitement | Légèrement de travers |
| Photo ref | dark-bg/burger-simple-boeuf-dark-bg-2.png | produits-source/strict-boeuf.png |
