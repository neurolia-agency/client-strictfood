# Prompts — Post 2 (Mercredi 12 mars 2026)

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Format | Carrousel 5 slides |
| Dimensions | 4:5 |
| Source DA | `production/2026-03-12/01-art-direction/direction.md` |
| Source recette | `production/_recettes/strict-boeuf.md` |

---

## Prompt 1 — Slide 1 : Cover Texte

### Métadonnées

| Champ | Valeur |
|-------|--------|
| Modèle | GPT Images (gpt-image-1.5) |
| Mode | Text-to-image (template pur) |
| Input image | Aucune |
| Résolution | 1024×1536 (2:3, crop symétrique en 4:5) |

### Prompt

```
A bold typographic poster on a pure dark charcoal background (#141210). The background is completely flat, no texture, no gradient, no image — just solid dark charcoal.

Centered vertically and horizontally, three lines of text in a condensed bold sans-serif typeface similar to Oswald Bold, ALL CAPS:

Line 1 (smaller): "DE LA BOUCHERIE"
Line 2 (largest, hero text): "LABOURDE"
Line 3 (smaller): "À TON ASSIETTE."

"LABOURDE" is rendered in a warm copper-gold color (#BF8522), larger than the other lines, commanding attention. "DE LA BOUCHERIE" and "À TON ASSIETTE." are in pure white (#FFFFFF), smaller but still bold and legible.

The text has generous margins on all sides (at least 15%). Clean, minimal, typographic. No logo, no photo, no icons, no decorative elements. The period after "ASSIETTE" is intentional. The overall mood is direct, raw, premium — like a title card for a food documentary. The format is portrait 2:3.
```

### Commande

```bash
# GPT Images — texte on-image
# Après génération, crop symétrique de 2:3 vers 4:5
```

---

## Prompt 2 — Slide 2 : La Découpe

### Métadonnées

| Champ | Valeur |
|-------|--------|
| Modèle | Gemini (Nanobanana Pro) |
| Mode | Image-to-image (sublimation documentaire) |
| Input image | `public/contenu-instagram/2025-10-03_15-57-14_UTC_2.jpg` |
| Résolution | 4K |
| Dimensions | 4:5 |

### Prompt

```
Cinematic dark food documentary photography. Sublimate this kitchen photo into a premium dark food aesthetic while preserving its documentary authenticity.

The scene shows hands in black nitrile gloves cutting raw beef on a wooden cutting board. Keep the exact same composition, gesture, and angle. This is a real moment in an open kitchen — preserve that truth.

KEY TRANSFORMATIONS:
- BACKGROUND: Dramatically darken the entire background — the kitchen equipment, glass partition, and stainless steel surfaces should fade into deep charcoal darkness (#141210). Only keep enough ambient detail to suggest "professional open kitchen" without any distraction.
- LIGHTING: Restructure the lighting into a semi-hard directional light from upper-left, illuminating the cutting board, the meat, and the gloved hands. The light has a warm copper-amber temperature (#BF8522 highlights). The knife blade catches a sharp metallic reflection.
- MEAT: The raw beef pieces should glow with their natural deep red-pink color, amplified by the warm lighting. The muscle grain and marbling should be visible and appetizing.
- CUTTING BOARD: The wooden board takes on warm amber tones under the copper light. Its natural wood grain is visible — patina of use, artisanal.
- GLOVES: The black nitrile gloves remain deep black, with subtle highlights on the knuckle folds catching the copper light.
- SHADOWS: Deep and progressive. The upper third of the frame transitions into pure charcoal darkness. The right side falls into shadow.

The overall palette is charcoal black, deep red raw beef, warm amber wood, and copper highlights. The mood is raw, methodical, artisanal — a craftsman at work. Shot at 50mm f/2.8, focus sharp on the hands and meat, background dissolving into dark bokeh. Format 4:5 portrait.
```

### Commande

```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "<prompt ci-dessus>" \
  --filename "slide2-decoupe-4x5.png" \
  --input-image "public/contenu-instagram/2025-10-03_15-57-14_UTC_2.jpg" \
  --resolution 4K \
  --api-key "***"
```

---

## Prompt 3 — Slide 3 : L'Assemblage

### Métadonnées

| Champ | Valeur |
|-------|--------|
| Modèle | Gemini (Nanobanana Pro) |
| Mode | Image-to-image (sublimation documentaire) |
| Input image | `public/contenu-instagram/2025-10-03_15-57-14_UTC_1.jpg` |
| Résolution | 4K |
| Dimensions | 4:5 |

### Prompt

```
Cinematic dark food documentary photography. Sublimate this kitchen photo into a premium dark food aesthetic while preserving its intimate, handcrafted feel.

The scene shows a black-gloved hand carefully placing fresh mâche leaves and garnishes onto an open burger on a golden brioche bun. The bun top sits to the left in the foreground (soft focus). The burger rests on parchment paper on a dark granite counter. A kraft takeout box is blurred in the warm-lit background.

KEY TRANSFORMATIONS:
- BACKGROUND: The kraft box and all background elements dissolve into warm, deep charcoal darkness (#141210). The warm ambient glow from the original becomes a diffuse amber source from the back-left, creating a subtle rim light on the gloved hand.
- LIGHTING: Semi-hard directional light from the left/back-left. The brioche bun catches warm golden highlights. The mâche leaves have a fresh, lustrous green glow. The gloved hand is backlit with a subtle copper rim.
- BRIOCHE BUN: The golden surface should gleam with buttery warmth — Cuivre Braisé (#BF8522) highlights on its dome. The bun top in the foreground is a soft golden blur.
- MÂCHE: Fresh, vibrant green leaves (#5C7858 Feuille Grillée) — small, round, lustrous. They pop against the dark meat and bun as the main color accent.
- PARCHMENT PAPER: Naturally crumpled, warm-toned, suggesting handcraft.
- GRANITE COUNTER: Darkened significantly, just enough texture visible to ground the scene.
- GLOVES: Deep black, wrinkled at the fingers mid-gesture — capturing the precise, delicate motion of placing a leaf.

The overall palette is deep charcoal, golden amber bun, vivid green mâche, and copper highlights against darkness. The mood is intimate and precise — not industrial, but handcrafted with care. The viewer feels like they're watching from across the open kitchen counter. Shot at 85mm f/2, shallow depth of field with the bun top beautifully blurred in the foreground. Format 4:5 portrait.
```

### Commande

```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "<prompt ci-dessus>" \
  --filename "slide3-assemblage-4x5.png" \
  --input-image "public/contenu-instagram/2025-10-03_15-57-14_UTC_1.jpg" \
  --resolution 4K \
  --api-key "***"
```

---

## Prompt 4 — Slide 4 : Les Finitions

### Métadonnées

| Champ | Valeur |
|-------|--------|
| Modèle | Gemini (Nanobanana Pro) |
| Mode | Image-to-image (sublimation documentaire) |
| Input image | `public/contenu-instagram/2025-11-24_17-18-14_UTC.jpg` |
| Résolution | 4K |
| Dimensions | 4:5 |

### Prompt

```
Cinematic dark food documentary photography. Sublimate this kitchen photo into a premium dark food aesthetic. This is the penultimate slide of a carousel — tension is building toward the final reveal.

The scene shows a black-gloved hand adding fresh mâche leaves onto an impressive double-stacked beef burger on a brioche bun. The bun top rests to the left with sauces visible on its inner surface. The burger sits on parchment paper on a granite counter. The frame is portrait orientation, with the burger dominating the lower two-thirds and the gloved hand entering from the top.

KEY TRANSFORMATIONS:
- BACKGROUND: All kitchen elements above and behind the burger (stainless steel, surfaces) fade into pure charcoal darkness (#141210). The upper third of the frame is near-black.
- LIGHTING: Semi-hard directional light from upper-left (45°). The light sculpts the double steak, revealing the Maillard crust texture on both patties. Warm copper-amber temperature throughout.
- DOUBLE STEAK: This is the hero element. Two thick beef patties stacked, each with a visible uniform Maillard crust — deep caramelized brown, not grill-marked. The crust catches Cuivre Braisé (#BF8522) highlights on its ridges. The mass and volume of the double stack is imposing.
- MÂCHE: Fresh green leaves (#5C7858) being placed by the gloved hand — the finishing touch. They contrast dramatically with the dark meat.
- BRIOCHE BUN BASE: Golden, warm, slightly compressed under the weight of the double steak — suggesting real heft.
- BUN TOP (left): Soft focus, with sauces on its inner surface barely visible — a narrative hint of what comes next.
- GLOVES: Black, the hand is in the final gesture of placing garnish. Last moment of human craft before the product stands alone.
- PARCHMENT & COUNTER: Darkened, minimal, grounding the scene without distraction.

The overall palette is charcoal darkness, deep Maillard browns, copper highlights, and accents of vivid green mâche. The mood is powerful and imminent — the burger is almost complete, the viewer craves the final result. Shot at 50mm f/2.8, focus tack-sharp on the double steak and mâche, edges softening. Format 4:5 portrait.
```

### Commande

```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "<prompt ci-dessus>" \
  --filename "slide4-finitions-4x5.png" \
  --input-image "public/contenu-instagram/2025-11-24_17-18-14_UTC.jpg" \
  --resolution 4K \
  --api-key "***"
```

---

## Prompt 5 — Slide 5 : Le Burger Fini

### Métadonnées

| Champ | Valeur |
|-------|--------|
| Modèle | Gemini (Nanobanana Pro) |
| Mode | Image-to-image (sublimation food porn) |
| Input image | `public/contenu-instagram/2025-11-22_17-18-46_UTC_2.jpg` |
| Résolution | 4K |
| Dimensions | 4:5 |
| Source recette | `production/_recettes/strict-boeuf.md` |

### Prompt

```
Premium dark food photography of a finished gourmet double-stacked artisan burger — the climax and payoff of a 5-slide carousel showing the journey from raw meat to finished product. This final slide is full food porn: dramatic, appetizing, monumental.

Sublimate this photo of a completed burger into cinematic dark food premium aesthetic. The burger sits on dark branded paper on a wooden surface. Remove all background distractions — the menu board and environment dissolve into pure seamless charcoal-to-black (#141210).

THE BURGER (recipe fidelity required — STRICT Boeuf):
- BRIOCHE BUN: Round, smooth golden surface with a buttery toasted sheen and natural subtle crackles. The top bun dome catches warm Cuivre Braisé (#BF8522) highlights. Supplied by Pains du Soleil.
- DOUBLE BEEF PATTY: Two thick seared beef patties with uniform Maillard crust — deep caramelized brown with visible micro-textures and glistening juices. Cooked by pulsed heat with zero oil (even, burnished crust, NO grill marks). The double stack creates impressive vertical mass. Supplied by Boucherie Labourde.
- PARMESAN: Small irregular crumbs and powdery fragments scattered between the mâche and the patties — rustic, artisanal, NOT shaved or sliced. This is a distinctive visual marker. Supplied by Myfitcheese.
- RED ONION: Thin rings with deep purple-crimson concentric layers visible, peeking out from the sides of the burger.
- MÂCHE: Small, round, delicate green leaves in a natural bouquet, vibrant and lustrous (#5C7858 Feuille Grillée), spilling slightly out of the burger.
- PEPPER SAUCE: A subtle thin drizzle of yellow-orange sauce — smooth, barely there, a filet not a flood. Visible but not dominant.
- BUN BASE: Identical golden brioche, peeking under the stacked patties.

LIGHTING: Dramatic chiaroscuro, hard to semi-hard, raking in from the left at 45 degrees and slightly above. Deep copper-amber highlights sculpt every ridge of the Maillard crust and the dome of the bun. The right side falls into rich velvety shadow. Very faint fill on the right (4:1 ratio) to prevent total blackout. The light itself has a warm copper temperature evoking embers.

BACKGROUND: Seamless charcoal-to-pure-black gradient. The dark branded paper under the burger is partially visible with subtle "STRICT FOOD" text — a discrete signature. The wooden surface below adds a whisper of warm natural texture at the very bottom edge.

DETAILS: A barely perceptible wisp of warmth rises from the freshly assembled burger. The parmesan crumbs catch individual highlights. The mâche leaves glisten with freshness. Every texture is hyper-detailed and appetizing.

The entire palette is burnished gold, warm copper, deep Maillard browns against pure darkness, with small accents of vivid green mâche, deep purple onion rings, and a whisper of yellow-orange sauce. Shot at 85mm f/2.8, tack-sharp focus on the beef patties and parmesan crumbs, bun edges softening into shallow depth of field. Cinematic dark food premium atmosphere — the culmination of the artisan's craft. No hands, no distractions — the burger stands alone, sovereign, as the reward. Format 4:5 portrait.
```

### Commande

```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "<prompt ci-dessus>" \
  --filename "slide5-burger-fini-4x5.png" \
  --input-image "public/contenu-instagram/2025-11-22_17-18-46_UTC_2.jpg" \
  --resolution 4K \
  --api-key "***"
```

---

## Séquence de génération

| Ordre | Slide | Commande | Output |
|-------|-------|----------|--------|
| 1 | Slide 1 — Cover | GPT Images (texte critique) | `03-output/slide1-cover-4x5.png` |
| 2 | Slide 2 — Découpe | `nano-banana-pro --input-image UTC_2.jpg` | `03-output/slide2-decoupe-4x5.png` |
| 3 | Slide 3 — Assemblage | `nano-banana-pro --input-image UTC_1.jpg` | `03-output/slide3-assemblage-4x5.png` |
| 4 | Slide 4 — Finitions | `nano-banana-pro --input-image 17-18-14_UTC.jpg` | `03-output/slide4-finitions-4x5.png` |
| 5 | Slide 5 — Burger Fini | `nano-banana-pro --input-image 17-18-46_UTC_2.jpg` | `03-output/slide5-burger-fini-4x5.png` |

## Vérification post-génération

1. Cohérence palette Charbon/Cuivre sur les 5 slides
2. Progression narrative : texte → brut → assemblage → finitions → food porn
3. Slide 1 : texte lisible, centré, "LABOURDE" en cuivre
4. Slides 2-4 : mains gantées noires présentes, fond assombri vers Charbon
5. Slide 5 : fidélité recette (mâche, oignons rouges, parmesan miettes, sauce poivron)
6. Slide 5 : pas de mains (le burger est "libéré")
7. Chaque slide fonctionne en standalone dans la grille

## Prochaine étape

→ Générer les 5 images séquentiellement
→ Output dans `production/2026-03-12/03-output/`
