# Category-Specific Guides

> Detailed guidance for specific image categories. See also `food-photography.md` for food-specific vocabulary.

## Food Photography

### Ingredient Locked Descriptions (StrictFood)

These descriptions are the source of truth for all StrictFood product prompts. Use verbatim.

| Ingredient | EN description (required) | FORBIDDEN |
|-----------|---------------------------|----------|
| Pain noir (surface) | `charcoal black sesame bun — deep ink-dark surface with artisanal imperfections: visible CRACKS in the crust like dried earth, slightly asymmetric shape (NOT a perfect sphere — one side visibly more puffed than the other, the top slightly LOPSIDED, one edge dipping lower), micro-FISSURES running across the surface, patches where the dark crust has SPLIT revealing charcoal-grey crumb underneath, rustic handmade quality like fresh sourdough NOT a factory bun, golden sesame seeds in RANDOM uneven distribution (dense clusters mixed with sparse patches, a few seeds fallen off)` | `brioche`, `white bun`, `golden bun`, `smooth surface`, `perfectly round`, `uniform`, `factory`, `pristine` |
| Pain noir (proportions) | `The bun is COMPACT — slightly compressed under the weight of the filling, NOT a tall perfect dome, NOT oversized, NOT a perfect sphere. The shape is IRREGULAR and organic like hand-formed bread. The ingredients bulge out 2-3cm past the bun edges on all sides.` | `tall dome`, `puffy`, `large bun`, `thick bun`, `perfectly round sphere`, `symmetric` |
| Pain noir (top bun) | `The top bun cap repeats ALL the same imperfections as the base — cracks, fissures, lopsided shape, split crust patches. It is slightly FLATTENED and PRESSED DOWN by its own weight, with a visible flat spot where it has settled. NOT a pristine dome — dented, irregular, lived-in. NEVER describe as just "identical" — repeat the key imperfections explicitly.` | `identical`, `same as base`, `matching` (these words lose detail — always re-describe) |
| Pain noir (mie) | `dark charcoal-black crumb throughout — charcoal-infused dough` | `beige`, `white`, `light brown` crumb |
| Steak boeuf | `thick beef steak with deep intense Maillard crust (oven-seared at high pulsed heat, NO grill marks, NO char lines — the crust is UNIFORM but HEAVILY textured: rough, cratered, bark-like surface with deep mahogany-brown coloring almost blackened at the edges, visible meat grain and fiber texture breaking through the crust, small craggy peaks and valleys across the seared surface, NOT smooth, NOT polished, NOT pink — AGGRESSIVE dark sear), juices glistening in the crevices of the rough crust` | `grill marks`, `charred`, `pan-fried`, `smooth surface`, `pink meat` |
| Poulet roti | `thin irregular roasted chicken slices (each 5-8cm long) with deep golden-brown Maillard crust (oven-seared at high pulsed heat, NOT cubes, NOT whole fillet — each slice has a caramelized surface with visible crispy edges, deep golden-brown coloring with darker caramelized spots at the thinnest points, shredded pale meat fibers visible at torn edges, the surface has a rough seared grain NOT smooth NOT pale NOT raw-looking — INTENSE sear on tender chicken), juices pooling on the surface` | `grilled`, `diced`, `nuggets`, `smooth surface`, `pale/raw chicken` |
| Falafel | `ONE SINGLE thick round falafel patty — one continuous large disc the same diameter as the bun, NOT multiple small patties, NOT falafel balls, NOT a stack of mini patties. Deep golden crispy crust (air-fried at high pulsed heat, NO grill marks — the crust is THICK and CRUNCHY: rough granular surface with deep golden-brown coloring, visible chickpea grain texture in the crust, micro-cracks across the surface revealing vivid green chickpea-herb interior underneath, the crust SHATTERS when broken — brittle, crumbly, NOT smooth, NOT soft — DEEP CRUNCHY sear). There is EXACTLY ONE falafel patty in the burger — a single wide disc, not 2, not 3, not a cluster.` | `deep-fried`, `brown interior`, `smooth surface`, `multiple patties`, `falafel balls`, `small patties`, `stack of patties` |
| Parmesan | `parmesan crumbles (small irregular powdery fragments, NOT shavings, NOT slices — a hard cheese that does NOT melt or stretch)` | `cheese pull`, `shavings`, `melting cheese`, `mozzarella` |
| Mache | `mache leaves (small round spoon-shaped leaves with visible vein texture and natural imperfections — varied sizes, some wilted at edges, one crumpled, one folded over, another with a tiny brown spot near the stem, NOT arugula, NEVER uniform or plastic-looking)` | `arugula`, `rocket`, `lettuce`, `spinach` |
| Oignons rouges | `thin red onion ring slices with visible concentric layers` | `diced`, `chopped` |
| Sauce poivron | `yellow-orange pepper sauce — SOURCE visible between the TOP BUN CAP and the toppings, SEEPING OUT from between bun and ingredients, then TRAILING DOWN the steak surface in 1-2 thin glossy trails like warm honey. The sauce originates from the TOP and flows DOWNWARD. NO thick pool or nappe on the bottom bun — only thin trails that arrive at the base. The sauce catches specular highlights where it runs across the steak crust. NOT a flood, NOT a nappe on the bottom bun, NOT egg-yolk-like.` | `ketchup`, `mustard`, `mayo`, `thick sauce`, `red sauce`, `pool on bottom bun`, `nappe`, `coating the base`, `egg-yolk` |

### MAX Products (double portion)

Mention explicitly `TWO layers/portions` + `noticeably TALL`. Adapt physical interaction (2-hand grip, partial bite -- see realism-auditor domain 7).

**Stack asymmetry (mandatory for ALL MAX products):**
```
The two [steaks/chicken layers] are NOT perfectly aligned — the top layer is shifted
slightly to one side, offset 1-2cm from the bottom layer, as if placed by hand in a
real kitchen, NOT centered like a food styling maquette. The stack is asymmetric and
organic.
```

### Realism Style v2 — Documentary + Dynamism

| Aspect | Obligation | Forbidden |
|--------|-----------|----------|
| Imperfections | Min 2 per prompt: crumbs, paper fold, stray leaf, asymmetry, natural grain | Symmetric perfection, unrealistic cleanliness |
| Garnishes | Realistic quantities: mache = max 3-5 small leaves (some folded/natural) | Lush bouquets, perfect clusters |
| Sauce | Source at TOP (between bun cap and toppings), trails DOWN the steak in 1-2 glossy threads. NO pool on bottom bun. | Perfect spiral, thick coating on bottom bun, pool/nappe/flood at base, egg-yolk look, invisible/subtle |
| Proportions | Compact/dense like the real product | Towering, exaggerated magazine style |
| Background | Real kitchen backdrop (stainless steel, dark surfaces, blur) — **with contrasted lighting** | Pure black void, digital flat, **uniformly dark** |
| Color/grain | Film-like natural color, slight grain, **rich warm saturated tones, strong contrast** | HDR, overexposure, **washed out/dull** |
| Lighting | **Dramatic contrasted lighting**: strong source sculpting the product, vivid highlights on ingredients | Flat/uniform lighting |

**Realism template (append to food prompts):**
```
The overall feel should be documentary-style food photography — real, slightly imperfect,
authentic. NOT a stock photo. Slight natural film grain. Strong directional lighting creating
dramatic contrast — the product should pop luminously against the dark background. Rich,
saturated ingredient colors. The dark setting is a stage, not a cave.
```

### Colour Calibration — Anti-drift

| Target colour | Terms to use | FORBIDDEN |
|--------------|-------------|-----------|
| Ambre `#E5A520` | `warm gold`, `yellow-gold`, `marigold`, `NOT orange` | `amber` (orange drift), `copper`, `burnt sienna` |
| Charbon `#1a1714` | `dark charcoal`, `deep ink-dark` | `black` alone (too pure), `grey` |
| Cuivre Braise `#BF8522` | `warm matte copper-gold` | `bronze`, `brown` |

### Commercial Names

Do NOT include commercial product names in prompts (not "STRICT MAX Poulet"). Use generic descriptions ("a beef burger", "a double-chicken burger", "a falafel burger"). The name goes in the brief and caption, not the IA prompt.

## Lifestyle / Candid Photography

**Feel template:**
```
Shot on Canon EOS R5, 50mm f/1.8. Kodak Portra 400. Natural skin texture with
visible pores. Subtle film grain, slight lens vignetting. The subject does NOT
look at the camera. Aspect ratio: [ratio].
```

## Macro / Close-up

**Feel template:**
```
Shot on 100mm macro lens, f/2.8. Hyper-detail on the focal zone, everything else
dissolves into soft bokeh. The texture fills the frame. Aspect ratio: [ratio].
```

## Rules & Anti-Patterns

### Rules

1. **Narrative over keywords**: Write flowing descriptions, not comma-separated tags.
2. **Be specific, not generic**: Replace vague adjectives with concrete details.
3. **No negative prompts for Gemini**: Describe what you want positively.
4. **Front-load the important parts**: Models weight the beginning more heavily.
5. **Prompt length = 150-300 words minimum**: Short prompts produce generic results.
6. **Include sensory cues**: Textures (crispy, velvety), temperatures (steaming, frosted).
7. **CAPS for critical emphasis**: `DRIPPING`, `THICK GLOSSY`, `NOT shavings`, `NEVER uniform`.
8. **Inline negatives**: `(NOT X, NEVER Y)` directly after the element, not at the end.
9. **Movement and interaction verbs**: sauce SQUEEZING OUT, leaves BURSTING, cheese CRUMBLING.
10. **Energy words**: JUICY, WET, GENEROUS, OVERSTUFFED, THICK, GLOSSY, DRIPPING, GLISTENING.
11. **Brief structure = no questions**: When input comes from art director, translate directly.
12. **Carousel coherence**: Same palette/lighting, varied angles/framing per slide.

### Anti-Patterns

| Bad | Why | Fix |
|-----|-----|-----|
| "A nice photo of food" | Zero specificity | Describe the exact scene |
| "4K, HDR, ultra-realistic, 8K, masterpiece" | Keyword stuffing | Pick one quality indicator, describe the scene |
| "NOT blurry, NO watermark" | Doesn't work on Gemini | "Tack-sharp focus, clean composition" |
| Prompt < 100 words | Too short = generic | Minimum 150 words in Mode B |
| "Make it look professional" | Subjective | Specify what "professional" means |
| Asking questions on a complete brief | Wasted time | Translate directly |
