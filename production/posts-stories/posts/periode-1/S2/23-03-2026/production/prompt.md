# Prompt — Visuel 1 / 1

**Model**: Gemini (Nano Banana Pro) — compositing-ia, pas de texte on-image
**Category**: Food
**Aspect Ratio**: 4:5
**Resolution**: 4K
**Photo reference (input image)**: `public/images/photos-references/produits-source/wraps/strict-wrap-poulet.png`

## Recette / Produit (checklist fidelite)

STRICT Wrap Poulet — coupe en diagonale, interieur visible :
- Tortilla de ble souple, enroulee serree, surface legerement toastee (chaleur pulsee)
- Poulet roti en lamelles — tranches fines irregulieres, croute Maillard uniforme (oven-seared, zero huile). PAS en cubes.
- Parmesan en miettes — petits fragments irreguliers, poudreux. PAS en copeaux/lamelles.
- Oignons rouges en tranches fines — rondelles avec anneaux concentriques visibles.
- Mache — petites feuilles rondes vertes entieres. PAS de roquette, PAS de laitue.
- Sauce poivron jaune-orange subtil — sauce lisse, pas epaisse. PAS rouge, PAS blanche.

---

## Prompt

```
Documentary-style food photograph, shot on a 85mm lens at f/2.8, 4:5 aspect ratio. A freshly cut STRICT Wrap Poulet placed on a dark brushed stainless steel kitchen counter, viewed from a slightly elevated 3/4 angle (~35 degrees), as if the chef just set it down after slicing. The wrap from the reference photo is the hero — preserve its exact appearance, proportions, and ingredients faithfully. Both diagonal-cut halves are visible, slightly stacked and offset, exposing the cross-section toward the upper-right: thin-sliced roasted chicken breast with uniform golden-brown Maillard crust (oven-seared, zero oil), finely grated parmesan dust in tiny powdery granules glistening on the warm chicken, lamb's lettuce (mache) with small round spoon-shaped whole green leaves, thin-sliced red onion rings with visible concentric layers, and a thin delicate drizzle of yellow-orange pepper sauce threading through the filling.

The wrap sits on a black matte kraft paper liner with natural creases and folds — not laid flat, authentically crumpled from kitchen use. A few tiny parmesan granules have fallen onto the paper near the cut. A thin escaped thread of yellow-orange pepper sauce trails onto the paper from the freshly sliced edge. One edge of the tortilla is slightly lifted and wavy, not perfectly rolled — handmade quality.

Single hard key light from the upper-left at 45 degrees, warm golden-copper tone simulating professional kitchen evening service lighting. Deep sculptural shadows falling to the right of the wrap. Soft fill from the right at 15% intensity — enough to open the shadows without flattening. The brushed stainless steel counter catches directional warm copper highlights along its grain. Subtle light wisps of steam rising from the fresh cut — the chicken is still warm. Not heavy fog, just faint heat vapor barely visible against the dark background.

The upper third of the frame is generous negative space — dark charcoal tones with soft bokeh and the faint steam. The wrap occupies roughly 55% of the frame in the center-lower area. Deep charcoal shadows in the background, selective vivid saturation on the food elements: rich green mache, warm orange sauce, golden toasted tortilla surface, amber Maillard crust. Cinematic color grading with shadows pulled toward warm brown, highlights toward cream. Subtle analog film grain, natural imperfections throughout. No artificial glow, no neon highlights, no plastic-looking surfaces. The dark setting is a dramatic stage, not a cave — the product pops luminously against the deep background.

Match the exact appearance, ingredients, and proportions of the wrap shown in the reference photo provided. Do not alter, redesign, or reimagine the product — integrate it faithfully into this generated kitchen scene.
```

---

## Audit realisme (auto-verification)

| # | Domaine | Sev | Resultat |
|---|---------|-----|----------|
| 1 | Mains & prehension | — | N/A (pas de main dans la scene) |
| 2 | Physique fluides | OK | Sauce = filet echappee sur papier, coule vers le bas par gravite. Source identifiable (coupe du wrap). |
| 3 | Coherence eclairage | OK | Source unique upper-left 45°. Ombres a droite. Fill doux a droite. Reflets inox coherents avec la direction. Pas de contradiction. |
| 4 | Perspective & geometrie | OK | 3/4 surplombant ~35°. On voit le dessus des wraps + la surface du comptoir. Cross-section visible a la coupe. Coherent. |
| 5 | Logique construction | OK | Wrap pose sur paper-liner, paper-liner sur inox. Pas de levitation. Miettes au sol correspondent a la coupe. |
| 6 | Materiaux & textures | OK | Tortilla toastee (pas "grilled"). Poulet = Maillard crust (pas grill marks). Parmesan = dust/granules (pas shavings). Mache = lamb's lettuce (pas arugula). Sauce = yellow-orange (pas rouge). Tous les termes verrouilles respectes. |
| 7 | Proportions & echelle | OK | Wrap ~55% du cadre sur un comptoir cuisine. Taille realiste. |
| 8 | Variete inter-prompts | — | N/A (prompt unique) |
| 9 | Principes candid | — | N/A (pas de personne) |
| 10 | Post-generation | — | A verifier apres generation : tortilla toastee (pas blanche), pas de texte parasite, pas de grill marks |

**Termes interdits — verification** :
- "grilled" / "grill marks" / "charred" : ABSENT ✅
- "brioche" / "white bun" : N/A (pas de bun — c'est un wrap) ✅
- "arugula" / "rocket" / "lettuce" / "spinach" : ABSENT ✅
- "shavings" / "chunks" / "slices" (parmesan) : ABSENT ✅
- "ketchup" / "mayo" / "red sauce" : ABSENT ✅

**Resultat audit : aucun 🔴 bloquant, aucun 🟡 important. Prompt pret.**

---

## Commande de generation

```bash
uv run production/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "[prompt ci-dessus]" \
  --input-image "public/images/photos-references/produits-source/wraps/strict-wrap-poulet.png" \
  --resolution 4K \
  --aspect-ratio 4:5 \
  --filename "23-03-2026-strict-wrap-poulet-compositing-ia-4x5.png" \
  --api-key "$GEMINI_API_KEY"
```

Output : `posts-stories/posts/periode-1/S2/23-03-2026/brouillons/`

---

## Notes post-production

- Verifier visuellement que le wrap de la photo reelle est fidele (pas reinvente par Gemini)
- Checker l'absence de texte parasite sur l'inox ou le paper-liner
- Verifier que la tortilla reste doree/toastee (pas blanche ni brulee)
- Verifier que les graines visibles dans la photo source sont preservees
- Si le paper-liner ne montre pas de logo → acceptable (le logo est discret et Gemini peut l'omettre)
- La vapeur doit etre subtile — si nuage epais → regenerer
