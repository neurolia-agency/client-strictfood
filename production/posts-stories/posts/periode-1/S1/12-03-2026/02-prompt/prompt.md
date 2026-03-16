# Prompts — S1-02 Carrousel "Du Boucher a l'Assiette"

> Post : 2026-03-12 | Modele : Gemini (Nano Banana Pro) | Mode : image-to-image
> Genere par /image-prompt-engineer (Mode B)

---

## Slides 1-2 — PHOTOS REELLES (pas de generation)

- Slide 1 : `public/contenu-instagram/labourde/texte-labourde.png`
- Slide 2 : `public/contenu-instagram/labourde/2026-03-11-17-45-00-labourde-boucher-enhanced.png`

---

## Slide 3 / 5 — Assemblage burger, geste de precision

**Modele** : Gemini (Nano Banana Pro — image-to-image)
**Categorie** : Food Photography
**Aspect Ratio** : 4:5
**Resolution** : 4K
**Photo input** : `public/images/photos-references/produits-source/burgers-black/strict-poulet-black-1.png`

**Prompt** :

```
Transform this burger into an open burger being assembled by hands wearing black latex gloves. Remove the top bun entirely — the burger is mid-construction. Replace the chicken filling with a thick beef patty showing a uniform golden-brown Maillard crust (oven-seared, with a smooth caramelized surface). On top of the patty, add finely grated parmesan dust — tiny powdery granules scattered like sand and thin-sliced red onion rings with visible concentric layers. The black sesame bun base remains exactly as-is. One gloved hand is in the act of placing an ingredient, captured mid-gesture with precision and care. Reframe to a slightly elevated eye-level angle (20-30 degrees), medium-close framing with the burger occupying 70% of the frame. Studio side-light from the right at 60 degrees, semi-hard quality casting sculpted shadows, warm golden tungsten temperature. Deep charcoal background dissolving into darkness. The atmosphere is meticulous, artisanal — a craftsman at work in a professional kitchen. Shot at 85mm f/2.8.
```

---

## Slide 4 / 5 — Finitions verdure & sauce

**Modele** : Gemini (Nano Banana Pro — image-to-image)
**Categorie** : Food Photography
**Aspect Ratio** : 4:5
**Resolution** : 4K
**Photo input** : `public/images/photos-references/produits-source/burgers-black/strict-poulet-black-2.png`

**Prompt** :

```
Transform this burger into an open burger seen from a 3/4 overhead angle (30-40 degrees), tightly framed on the toppings. Replace the chicken with a thick beef patty beneath the garnishes. The star of this shot is fresh lamb's lettuce (mâche) — small, round, bright green whole leaves arranged in a loose bouquet on top, glistening with a hint of moisture. A thin drizzle of yellow-orange pepper sauce traces a delicate line across the greens — a subtle, elegant thread. Beneath the mâche, layers of parmesan dust and thin red onion rings are partially visible. Black sesame bun base intact underneath. A hand in a black latex glove is mid-action, either placing the last mâche leaves or tilting a sauce bottle to drizzle. Side-light from the left at 45 degrees, semi-soft and diffused, making the green leaves luminous and fresh against the deep black background. The color contrast is the focus: vivid green and warm orange against charcoal darkness. Shot at 100mm macro, f/3.5, shallow depth of field softening the edges. Fresh, alive, precise.
```

---

## Slide 5 / 5 — Hero shot, burger termine

**Modele** : Gemini (Nano Banana Pro — image-to-image)
**Categorie** : Food Photography
**Aspect Ratio** : 4:5
**Resolution** : 4K
**Photo input** : `public/images/photos-references/produits-source/burgers-black/strict-poulet-black-1.png`

**Prompt** :

```
Transform this into a monumental hero shot of a complete gourmet beef burger at exact eye level (0-10 degrees), the most dramatic and appetizing angle. Replace the chicken filling entirely with a thick beef patty showing a rich, caramelized Maillard crust. The full stack from bottom to top: black sesame seed bun base, thick beef patty with burnished golden-brown surface, finely grated parmesan dust — tiny powdery granules, thin-sliced red onion rings, a crown of fresh mâche leaves peeking out the sides, a subtle glistening thread of yellow-orange pepper sauce, and the black sesame bun cap slightly offset to reveal the layers within. A light dusting of parmesan granules has fallen onto the dark surface below. The burger stands alone, monumental — no hands, no utensils, no plate visible. Backlight from the rear-left at 135 degrees creates a warm golden rim light outlining the bun and ingredients, with a gentle frontal fill preserving detail in the shadows. Intense warm golden temperature, the most dramatic lighting of the series. Deep charcoal background, clean and uncluttered. Shot at 85mm f/2.0, the burger fills the center-lower two thirds of the frame with breathing room above. Appetite-inducing, premium, magazine-editorial quality.
```

---

## Commandes de generation

### Slide 3
```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Transform this burger into an open burger being assembled by hands wearing black latex gloves. Remove the top bun entirely — the burger is mid-construction. Replace the chicken filling with a thick beef patty showing a uniform golden-brown Maillard crust (oven-seared, with a smooth caramelized surface). On top of the patty, add finely grated parmesan dust — tiny powdery granules scattered like sand and thin-sliced red onion rings with visible concentric layers. The black sesame bun base remains exactly as-is. One gloved hand is in the act of placing an ingredient, captured mid-gesture with precision and care. Reframe to a slightly elevated eye-level angle (20-30 degrees), medium-close framing with the burger occupying 70% of the frame. Studio side-light from the right at 60 degrees, semi-hard quality casting sculpted shadows, warm golden tungsten temperature. Deep charcoal background dissolving into darkness. The atmosphere is meticulous, artisanal — a craftsman at work in a professional kitchen. Shot at 85mm f/2.8." \
  --filename "production/posts-stories/posts/periode-1/S1/2026-03-12/03-output/slide-3-assemblage.png" \
  --input-image "public/images/photos-references/produits-source/burgers-black/strict-poulet-black-1.png" \
  --resolution 4K \
  --aspect-ratio 4:5
```

### Slide 4
```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Transform this burger into an open burger seen from a 3/4 overhead angle (30-40 degrees), tightly framed on the toppings. Replace the chicken with a thick beef patty beneath the garnishes. The star of this shot is fresh lamb's lettuce (mâche) — small, round, bright green whole leaves arranged in a loose bouquet on top, glistening with a hint of moisture. A thin drizzle of yellow-orange pepper sauce traces a delicate line across the greens — a subtle, elegant thread. Beneath the mâche, layers of parmesan dust and thin red onion rings are partially visible. Black sesame bun base intact underneath. A hand in a black latex glove is mid-action, either placing the last mâche leaves or tilting a sauce bottle to drizzle. Side-light from the left at 45 degrees, semi-soft and diffused, making the green leaves luminous and fresh against the deep black background. The color contrast is the focus: vivid green and warm orange against charcoal darkness. Shot at 100mm macro, f/3.5, shallow depth of field softening the edges. Fresh, alive, precise." \
  --filename "production/posts-stories/posts/periode-1/S1/2026-03-12/03-output/slide-4-finitions.png" \
  --input-image "public/images/photos-references/produits-source/burgers-black/strict-poulet-black-2.png" \
  --resolution 4K \
  --aspect-ratio 4:5
```

### Slide 5
```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Transform this into a monumental hero shot of a complete gourmet beef burger at exact eye level (0-10 degrees), the most dramatic and appetizing angle. Replace the chicken filling entirely with a thick beef patty showing a rich, caramelized Maillard crust. The full stack from bottom to top: black sesame seed bun base, thick beef patty with burnished golden-brown surface, finely grated parmesan dust — tiny powdery granules, thin-sliced red onion rings, a crown of fresh mâche leaves peeking out the sides, a subtle glistening thread of yellow-orange pepper sauce, and the black sesame bun cap slightly offset to reveal the layers within. A light dusting of parmesan granules has fallen onto the dark surface below. The burger stands alone, monumental — no hands, no utensils, no plate visible. Backlight from the rear-left at 135 degrees creates a warm golden rim light outlining the bun and ingredients, with a gentle frontal fill preserving detail in the shadows. Intense warm golden temperature, the most dramatic lighting of the series. Deep charcoal background, clean and uncluttered. Shot at 85mm f/2.0, the burger fills the center-lower two thirds of the frame with breathing room above. Appetite-inducing, premium, magazine-editorial quality." \
  --filename "production/posts-stories/posts/periode-1/S1/2026-03-12/03-output/slide-5-hero.png" \
  --input-image "public/images/photos-references/produits-source/burgers-black/strict-poulet-black-1.png" \
  --resolution 4K \
  --aspect-ratio 4:5
```
