# Prompt de sublimation — Story 03 STRICT Poulet

> Mode : `irl-sublimation` | API : GPT Images (gpt-image-1) | Format : 1024x1792 (9:16)
> Photo source : `strict-poulet-black-1.png`

## Prompt

```
Transform this food photograph into a cinematic Dark Food Premium still life. Tall portrait format, 9:16 aspect ratio (1080x1920 pixels).

SUBJECT — PRESERVE EXACTLY:
The burger must remain faithful to the input photograph. A charcoal black sesame bun — deep ink-dark surface, densely covered with golden sesame seeds, rustic granular texture. Inside: thick slices of golden-brown grilled chicken with a uniform Maillard crust (oven-seared, caramelized surface — no grill marks, no char lines). Small round spoon-shaped whole leaves of lamb's lettuce (mache) — max 3-5 leaves, some naturally folded. Thin-sliced red onion rings with visible concentric layers. A thin delicate drizzle of yellow-orange pepper sauce — a single fine thread dripping down the side of the bun. The bun must stay BLACK — do not lighten it. Do not add any ingredient not present in the original photo.

ENVIRONMENT — CREATE AROUND THE SUBJECT:
Replace the plain dark background with a lived-in dark kitchen environment in soft focus behind the burger. Worn black granite countertop surface beneath the burger, with a few natural crumbs and one sesame seed fallen aside. In the far background, barely visible: brushed stainless steel surfaces, dark wood shelving, the edge of a copper pan — all deeply out of focus. The environment suggests a real professional kitchen, not a void studio.

LIGHTING — CINEMATIC, NOT FLAT:
Single hard key light from the upper-left at 45 degrees, creating deep sculptural shadows on the right side of the burger. Warm copper-toned highlights on the chicken surface and sesame seeds — golden Maillard tones pushed toward warm amber-copper. A thin bright rim light on the right edge of the top bun, creating a sharp luminous contour separating it from the dark background. Warm ambient fill from below at 10% intensity — enough to open the deepest shadows without flattening the image. No flat lighting. No artificial glow. No neon highlights.

COLOR GRADING — COPPER DA:
Deep charcoal shadows (#141210), warm copper highlights on metallic and food surfaces. Desaturated background tones. Selective vivid saturation ONLY on the food elements: rich green mache leaves against the dark bun, golden sesame against charcoal, orange-amber sauce catching the light. Cinematic color grading: shadows pulled toward warm brown, highlights toward cream-copper. The overall tone is warm, dark, and premium — not cold, not blue, not clinical.

DEPTH OF FIELD:
Shot with an 85mm lens at f/1.8, shallow depth of field. The front edge of the bottom bun and the back edge of the top bun show gentle softness. The filling (chicken, mache, onion) is tack sharp. Soft circular bokeh in the background kitchen elements. Natural light leaks are acceptable.

TEXTURE & FILM:
Subtle analog film grain throughout the image, Kodak Portra 400 warmth. Not digital-clean — organic, tactile. Visible natural texture on food surfaces: the granular roughness of the charcoal bun, the fibrous pull of the chicken, the glossy viscosity of the pepper sauce, the delicate veins of the mache leaves.

COMPOSITION:
The burger is positioned in the lower-center of the tall 9:16 frame, occupying roughly 50-60% of the frame height. Generous negative space above (dark kitchen atmosphere, warm shadows). The product sits naturally on the countertop — grounded, not floating. Slight natural asymmetry as if placed by a chef, not perfectly centered. 30% of the frame above the burger is negative space with dark charcoal tones and the faint kitchen background.

CONSTRAINTS:
- The bun is CHARCOAL BLACK with sesame seeds — never lighten it, never make it brown or golden
- No text, no watermark, no logo overlay
- No artificial HDR or overexposure
- No plastic-looking surfaces
- Natural imperfections welcome: a crumb, an uneven sauce drip, a slightly tilted leaf
- The burger must look LUMINOUS and appetizing against the dark background — Dark Premium means dark bg + bright product
- Do not add grill marks on the chicken — the crust is smooth and oven-seared
- Do not replace mache with arugula, rocket, spinach, or generic lettuce
```

## Parametres API

```json
{
  "model": "gpt-image-1",
  "size": "1024x1792",
  "quality": "hd",
  "n": 1
}
```

## Checklist pre-generation

- [ ] Photo source `strict-poulet-black-1.png` jointe en input image
- [ ] Verifier que le modele est `gpt-image-1` (supporte image input)
- [ ] Format `1024x1792` (9:16 portrait, equivalent story Instagram)
- [ ] Quality `hd` pour les details alimentaires

## Checklist post-generation

- [ ] Le bun est NOIR (charcoal black sesame) — pas eclairci, pas marron
- [ ] Le poulet a une croute Maillard doree (pas de grill marks)
- [ ] Les feuilles sont de la mache (petites, rondes, vertes) — pas de la roquette
- [ ] La sauce est un filet fin jaune-orange — pas une nappe epaisse
- [ ] L'eclairage est cinematique et directionnel — pas plat
- [ ] Le grain film est subtil et organique
- [ ] Les tons cuivres sont presents sur le poulet et les graines de sesame
- [ ] Le fond montre un environnement cuisine (pas un void noir pur)
- [ ] Le produit est lumineux et contraste sur le fond sombre
- [ ] Pas de texte, pas de watermark
- [ ] Format bien 9:16 (vertical plein cadre story)
