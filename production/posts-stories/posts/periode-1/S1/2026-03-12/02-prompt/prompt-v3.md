# Prompts v3 — S1-02 Carrousel "Du Boucher a l'Assiette"

> Post : 2026-03-12 | Modele : Gemini (Nano Banana Pro) | Mode : image-to-image + reference-image
> v3 — Idem v2 (realisme documentaire) + logo STRICT FOOD'S fidele via --reference-image
> Photo input : STRICT Boeuf black bun reel
> Logo input : `public/logo/strictfood-logo-reference.png` (via --reference-image)

---

## Slides 1-2 — PHOTOS REELLES (pas de generation)

- Slide 1 : `public/contenu-instagram/labourde/texte-labourde.png`
- Slide 2 : `public/contenu-instagram/labourde/2026-03-11-17-45-00-labourde-boucher-enhanced.png`

---

## Slide 3 / 5 — Assemblage burger, geste de precision

**Modele** : Gemini (Nano Banana Pro — image-to-image + reference)
**Categorie** : Food Photography
**Aspect Ratio** : 4:5
**Resolution** : 4K
**Photo input** : `public/images/photos-references/produits-source/burgers-black/strict-boeuf.png`
**Logo reference** : `public/logo/strictfood-logo-reference.png`

**Prompt** :

```
Keep this exact burger as the base — same black sesame bun, same thick beef patty, same compact proportions. Remove the top bun to show the burger mid-construction, open-faced. Add a pair of black latex gloved hands from behind, one hand placing thin-sliced red onion rings onto the patty. Sprinkle a few irregular crumbs of parmesan dust on the patty surface — sparse, powdery granules, not a thick layer. The burger sits on a sheet of black kraft paper displaying the exact STRICT FOOD'S logo shown in the second reference image — reproduce it faithfully, especially the stylized burger icon that replaces the O in FOOD'S, printed in warm matte copper-gold tone. The paper is slightly crinkled and extends beyond the burger edges. A few parmesan crumbs have fallen onto the paper around the base. Reframe to slightly elevated eye-level (20-30 degrees), medium-close shot. Warm side-light from the right, casting natural shadows. The background is the dark workspace of a real kitchen — not a clean studio, slightly out of focus with hints of stainless steel and dark surfaces. The overall feel should be documentary-style food photography — real, slightly imperfect, authentic. NOT a stock photo. Slight natural film grain. Shot at 85mm f/2.8.
```

---

## Slide 4 / 5 — Finitions verdure & sauce

**Modele** : Gemini (Nano Banana Pro — image-to-image + reference)
**Categorie** : Food Photography
**Aspect Ratio** : 4:5
**Resolution** : 4K
**Photo input** : `public/images/photos-references/produits-source/burgers-black/strict-boeuf.png`
**Logo reference** : `public/logo/strictfood-logo-reference.png`

**Prompt** :

```
Keep this exact burger but show it open-faced from a 3/4 overhead angle (30-40 degrees). The top bun is removed. On top of the beef patty and toppings, add ONLY 4-5 small mâche leaves — tiny round green leaves, some slightly folded or overlapping naturally, NOT a lush perfect bouquet. One leaf has fallen onto the dark kraft paper liner below. A thin subtle drizzle of yellow-orange pepper sauce — just a single delicate thread, slightly uneven, NOT a perfect spiral. The black sesame bun base is visible beneath. The burger sits on crinkled black kraft paper liner displaying the exact STRICT FOOD'S logo from the second reference image — reproduce it faithfully with the burger icon replacing the O, printed in warm matte copper-gold tone at the paper edge. A gloved black hand is mid-gesture, fingers just releasing a mâche leaf. The angle shows the real compact proportions of the burger — it is a fast-good burger, not a towering gourmet stack. Side-light from the left at 45 degrees, warm but not overly dramatic. Background is dark and slightly out of focus. Real restaurant kitchen feel, not a photography studio. Slight natural imperfections — a crumb on the paper, an uneven sauce line. The overall feel should be documentary-style food photography — real, slightly imperfect, authentic. NOT a stock photo. Shot at 90mm f/3.2, natural color grading.
```

---

## Slide 5 / 5 — Hero shot, burger termine

**Modele** : Gemini (Nano Banana Pro — image-to-image + reference)
**Categorie** : Food Photography
**Aspect Ratio** : 4:5
**Resolution** : 4K
**Photo input** : `public/images/photos-references/produits-source/burgers-black/strict-boeuf.png`
**Logo reference** : `public/logo/strictfood-logo-reference.png`

**Prompt** :

```
Keep this exact burger with its real proportions — compact, dense, not tall. This is the hero shot at eye level (0-10 degrees). The complete burger: black sesame bun base, thick beef patty with natural Maillard crust, just 3-4 small mâche leaves barely peeking out from one side (not symmetrically arranged), thin red onion slices partially visible, a subtle hint of yellow-orange sauce on the edge — and the black sesame bun cap on top, slightly offset showing a glimpse of the filling. The burger sits on crinkled black kraft paper branded with the exact STRICT FOOD'S logo from the second reference image — reproduce the logo faithfully with the burger icon replacing the O, printed in warm matte copper-gold tone. The paper wraps loosely around the lower third of the burger like real take-away presentation, with natural creases and folds. A few parmesan crumbs and one tiny mâche leaf have fallen onto the paper surface below. Backlight from rear-left creating a warm rim on the bun and paper edges. The dark background has subtle texture — not pure black void, more like a dark restaurant counter surface with slight grain. The lighting is warm golden but not overdone. The burger should look EXACTLY like it would if a customer received it — appetizing but real, compact but generous, crafted but not magazine-airbrushed. The overall feel should be documentary-style food photography — real, slightly imperfect, authentic. NOT a stock photo. Shot at 85mm f/2.0, natural film-like color, slight warmth.
```

---

## Commandes de generation

### Slide 3
```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Keep this exact burger as the base — same black sesame bun, same thick beef patty, same compact proportions. Remove the top bun to show the burger mid-construction, open-faced. Add a pair of black latex gloved hands from behind, one hand placing thin-sliced red onion rings onto the patty. Sprinkle a few irregular crumbs of parmesan dust on the patty surface — sparse, powdery granules, not a thick layer. The burger sits on a sheet of black kraft paper displaying the exact STRICT FOOD'S logo shown in the second reference image — reproduce it faithfully, especially the stylized burger icon that replaces the O in FOOD'S, printed in warm matte copper-gold tone. The paper is slightly crinkled and extends beyond the burger edges. A few parmesan crumbs have fallen onto the paper around the base. Reframe to slightly elevated eye-level (20-30 degrees), medium-close shot. Warm side-light from the right, casting natural shadows. The background is the dark workspace of a real kitchen — not a clean studio, slightly out of focus with hints of stainless steel and dark surfaces. The overall feel should be documentary-style food photography — real, slightly imperfect, authentic. NOT a stock photo. Slight natural film grain. Shot at 85mm f/2.8." \
  --filename "production/posts-stories/posts/periode-1/S1/2026-03-12/03-output/slide-3-assemblage-v3.png" \
  --input-image "public/images/photos-references/produits-source/burgers-black/strict-boeuf.png" \
  --reference-image "public/logo/strictfood-logo-reference.png" \
  --resolution 4K \
  --aspect-ratio 4:5
```

### Slide 4
```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Keep this exact burger but show it open-faced from a 3/4 overhead angle (30-40 degrees). The top bun is removed. On top of the beef patty and toppings, add ONLY 4-5 small mâche leaves — tiny round green leaves, some slightly folded or overlapping naturally, NOT a lush perfect bouquet. One leaf has fallen onto the dark kraft paper liner below. A thin subtle drizzle of yellow-orange pepper sauce — just a single delicate thread, slightly uneven, NOT a perfect spiral. The black sesame bun base is visible beneath. The burger sits on crinkled black kraft paper liner displaying the exact STRICT FOOD'S logo from the second reference image — reproduce it faithfully with the burger icon replacing the O, printed in warm matte copper-gold tone at the paper edge. A gloved black hand is mid-gesture, fingers just releasing a mâche leaf. The angle shows the real compact proportions of the burger — it is a fast-good burger, not a towering gourmet stack. Side-light from the left at 45 degrees, warm but not overly dramatic. Background is dark and slightly out of focus. Real restaurant kitchen feel, not a photography studio. Slight natural imperfections — a crumb on the paper, an uneven sauce line. The overall feel should be documentary-style food photography — real, slightly imperfect, authentic. NOT a stock photo. Shot at 90mm f/3.2, natural color grading." \
  --filename "production/posts-stories/posts/periode-1/S1/2026-03-12/03-output/slide-4-finitions-v3.png" \
  --input-image "public/images/photos-references/produits-source/burgers-black/strict-boeuf.png" \
  --reference-image "public/logo/strictfood-logo-reference.png" \
  --resolution 4K \
  --aspect-ratio 4:5
```

### Slide 5
```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Keep this exact burger with its real proportions — compact, dense, not tall. This is the hero shot at eye level (0-10 degrees). The complete burger: black sesame bun base, thick beef patty with natural Maillard crust, just 3-4 small mâche leaves barely peeking out from one side (not symmetrically arranged), thin red onion slices partially visible, a subtle hint of yellow-orange sauce on the edge — and the black sesame bun cap on top, slightly offset showing a glimpse of the filling. The burger sits on crinkled black kraft paper branded with the exact STRICT FOOD'S logo from the second reference image — reproduce the logo faithfully with the burger icon replacing the O, printed in warm matte copper-gold tone. The paper wraps loosely around the lower third of the burger like real take-away presentation, with natural creases and folds. A few parmesan crumbs and one tiny mâche leaf have fallen onto the paper surface below. Backlight from rear-left creating a warm rim on the bun and paper edges. The dark background has subtle texture — not pure black void, more like a dark restaurant counter surface with slight grain. The lighting is warm golden but not overdone. The burger should look EXACTLY like it would if a customer received it — appetizing but real, compact but generous, crafted but not magazine-airbrushed. The overall feel should be documentary-style food photography — real, slightly imperfect, authentic. NOT a stock photo. Shot at 85mm f/2.0, natural film-like color, slight warmth." \
  --filename "production/posts-stories/posts/periode-1/S1/2026-03-12/03-output/slide-5-hero-v3.png" \
  --input-image "public/images/photos-references/produits-source/burgers-black/strict-boeuf.png" \
  --reference-image "public/logo/strictfood-logo-reference.png" \
  --resolution 4K \
  --aspect-ratio 4:5
```
