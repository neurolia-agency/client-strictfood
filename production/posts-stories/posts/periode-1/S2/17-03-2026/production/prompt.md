# Prompt — Post #5 (17-03-2026)

## Prompt — Visuel 1 / 1

**Model**: Gemini (Nano Banana Pro)
**Category**: Food
**Aspect Ratio**: 4:5
**Résolution** : 4K
**Photo référence** : `public/images/photos-references/produits-source/burgers-black/strict-poulet/strict-poulet-levitation.png`

**Recette / Produit** (checklist fidélité) :
- Pain noir sésame : charcoal black sesame bun, deep ink-dark surface, densely covered with golden sesame seeds
- Poulet rôti : thin irregular slices, uniform golden-brown Maillard crust, smooth caramelized surface (oven-seared)
- Parmesan : finely grated parmesan dust, tiny powdery granules scattered like sand
- Mâche : lamb's lettuce (mâche), small round spoon-shaped whole leaves (3-5 max)
- Oignons rouges : thin-sliced red onion rings with visible concentric layers
- Sauce poivron : yellow-orange pepper sauce, thin viscous drizzle

**Prompt**:

```
Enhance this levitating burger photograph into a premium food studio shot. The burger — a charcoal black sesame bun (deep ink-dark surface, densely covered with golden sesame seeds) filled with thin irregular roasted chicken slices showing uniform golden-brown Maillard crust, lamb's lettuce (mâche — small, round, spoon-shaped whole leaves), thin-sliced red onion rings with visible concentric layers, and finely grated parmesan dust — is already floating mid-air, tilted approximately 10 degrees to the right, and must be PRESERVED exactly as shown in the reference photo: same angle, same ingredients, same proportions.

Enrich the scene around the burger: amplify the yellow-orange pepper sauce dripping from the lowest tilted edge into 2-3 thick viscous drips trailing like warm honey, frozen mid-fall in the air gap between the burger and a dark matte slate surface visible in the bottom 15% of the frame. Scatter 3-5 tiny powdery parmesan fragments caught mid-fall in the void beneath the burger, suspended in dramatic stillness. Add a single mâche leaf detaching from the burger, pulled downward by gravity, halfway between the burger and the surface — this leaf slightly crumpled with a natural fold. One red onion ring slides toward the low right side of the bun, half-emerged.

A soft diffused shadow of the burger stretches across the dark slate surface below, elongated toward the right to match the tilt. Dramatic studio lighting from 45 degrees above-left sculpts the bun profile and layers — hard, contrasty light with slight diffusion creating sharp highlights on every golden sesame seed and on the Maillard crust of the chicken. A subtle warm rim light traces the upper-right edge of the bun cap, separating it from the pure black matte background. The light temperature is warm golden-amber, reinforcing the copper-gold tones of the sesame seeds and caramelized chicken. Rich, saturated ingredient colors: vivid green mâche leaves, luminous yellow-orange sauce drips, red-violet onion rings, off-white parmesan dust — all popping against the deep charcoal void. The overall feel is dramatic freeze-frame food photography — everything in motion yet frozen in a single instant, JUICY, WET, GENEROUS. Aspect ratio: 4:5.

Match the exact appearance, ingredients, and proportions of the burger shown in the reference photo provided.
```

**Commande de génération** :

```bash
cd "/Users/dorian.gz/dev/Neurolia Agency/client-strictfood" && \
uv run production/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Enhance this levitating burger photograph into a premium food studio shot. The burger — a charcoal black sesame bun (deep ink-dark surface, densely covered with golden sesame seeds) filled with thin irregular roasted chicken slices showing uniform golden-brown Maillard crust, lamb's lettuce (mâche — small, round, spoon-shaped whole leaves), thin-sliced red onion rings with visible concentric layers, and finely grated parmesan dust — is already floating mid-air, tilted approximately 10 degrees to the right, and must be PRESERVED exactly as shown in the reference photo: same angle, same ingredients, same proportions. Enrich the scene around the burger: amplify the yellow-orange pepper sauce dripping from the lowest tilted edge into 2-3 thick viscous drips trailing like warm honey, frozen mid-fall in the air gap between the burger and a dark matte slate surface visible in the bottom 15% of the frame. Scatter 3-5 tiny powdery parmesan fragments caught mid-fall in the void beneath the burger, suspended in dramatic stillness. Add a single mâche leaf detaching from the burger, pulled downward by gravity, halfway between the burger and the surface — this leaf slightly crumpled with a natural fold. One red onion ring slides toward the low right side of the bun, half-emerged. A soft diffused shadow of the burger stretches across the dark slate surface below, elongated toward the right to match the tilt. Dramatic studio lighting from 45 degrees above-left sculpts the bun profile and layers — hard, contrasty light with slight diffusion creating sharp highlights on every golden sesame seed and on the Maillard crust of the chicken. A subtle warm rim light traces the upper-right edge of the bun cap, separating it from the pure black matte background. The light temperature is warm golden-amber, reinforcing the copper-gold tones of the sesame seeds and caramelized chicken. Rich, saturated ingredient colors: vivid green mâche leaves, luminous yellow-orange sauce drips, red-violet onion rings, off-white parmesan dust — all popping against the deep charcoal void. The overall feel is dramatic freeze-frame food photography — everything in motion yet frozen in a single instant, JUICY, WET, GENEROUS. Aspect ratio: 4:5. Match the exact appearance, ingredients, and proportions of the burger shown in the reference photo provided." \
  --filename "17-03-2026-strict-poulet-levitation-4x5.png" \
  --input-image "public/images/photos-references/produits-source/burgers-black/strict-poulet/strict-poulet-levitation.png" \
  --resolution 4K \
  --api-key "$GEMINI_API_KEY"
```

> **Output** : `production/posts-stories/posts/periode-1/S2/17-03-2026/brouillons/17-03-2026-strict-poulet-levitation-4x5.png`

**Vérifications pré-livraison** :
- [x] "black sesame bun" présent dans le prompt ✅ (charcoal black sesame bun, 2 occurrences)
- [x] Aucun terme interdit (brioche, white bun, plain bun, golden bun) ✅
- [x] Instruction fidélité photo référence en fin de prompt ✅
- [x] Tous les ingrédients avec formes exactes ✅
- [x] Vocabulaire verrouillé pipeline.md respecté ✅
- [x] Imperfections naturelles intégrées (feuille crumpled, onion ring half-emerged) ✅
- [x] Ratio 4:5 spécifié ✅
- [x] Résolution 4K ✅
- [x] Instruction PRESERVE existant + ENRICH scène ✅
- [x] Sauce viscosité "trailing like warm honey" ✅

**Notes de post-production** : Aucune — le visuel doit être livrable tel quel en 4K.
