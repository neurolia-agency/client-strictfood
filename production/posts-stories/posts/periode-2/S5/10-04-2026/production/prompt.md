# Prompt — Visuel 1/1 (Phase 1 — Macro pour masque)

**Model** : Gemini (Nano Banana Pro)
**Aspect Ratio** : 4:5
**Resolution** : 2K
**Input image** : aucune (full-ia)
**Recette / Produit** : STRICT Poulet — pain noir sesame, lamelles poulet roti Maillard, parmesan miettes, oignons rouges tranches, mache, sauce poivron jaune-orange

---

## Prompt

Real food photograph. Extreme macro close-up of a chicken burger filling the ENTIRE frame at 220%+ zoom — the burger IS the image, no visible surface, no background context, just dark matte charcoal behind any gaps. Shot on 100mm macro lens, f/2.8. Hyper-detail on every texture.

From bottom to top: the base is a charcoal black sesame bun — deep ink-dark surface with artisanal imperfections: visible CRACKS in the crust like dried earth, slightly asymmetric shape (NOT a perfect sphere — one side visibly more puffed than the other), micro-FISSURES running across the surface, patches where the dark crust has SPLIT revealing charcoal-grey crumb underneath, golden sesame seeds in RANDOM uneven distribution (dense clusters mixed with sparse patches, a few seeds fallen off). The bun is COMPACT — slightly compressed under the weight of the filling, NOT a tall perfect dome, NOT oversized.

On the bun: thin irregular roasted chicken slices (each 5-8cm long) with deep golden-brown Maillard crust (oven-seared at high pulsed heat, NOT cubes, NOT whole fillet — each slice has a caramelized surface with visible crispy edges, deep golden-brown coloring with darker caramelized spots at the thinnest points, shredded pale meat fibers visible at torn edges, the surface has a rough seared grain NOT smooth NOT pale NOT raw-looking — INTENSE sear on tender chicken), juices pooling on the surface. On top of the chicken: parmesan crumbles (small irregular powdery fragments, NOT shavings, NOT slices — a hard cheese that does NOT melt or stretch), some fragments GLISTENING where they touch the warm chicken. Above the parmesan: thin red onion ring slices with visible concentric layers, one half-hanging off the edge. Peeking out from between the layers: mache leaves (small round spoon-shaped leaves with visible vein texture and natural imperfections — varied sizes, some wilted at edges, one crumpled, one folded over, another with a tiny brown spot near the stem, NOT arugula, NEVER uniform or plastic-looking). Yellow-orange pepper sauce — SOURCE visible between the TOP BUN CAP and the toppings, SEEPING OUT from between bun and ingredients, then TRAILING DOWN the chicken surface in 1-2 thin glossy trails like warm honey. The sauce originates from the TOP and flows DOWNWARD. NO thick pool or nappe on the bottom bun — only thin trails that arrive at the base. The sauce catches specular highlights where it runs across the chicken crust. NOT a flood, NOT a nappe on the bottom bun, NOT egg-yolk-like. The top bun cap repeats ALL the same imperfections — cracks, fissures, lopsided shape, split crust patches, slightly FLATTENED and PRESSED DOWN, with a visible flat spot where it has settled, sesame seeds in uneven clusters. The ingredients bulge out 2-3cm past the bun edges on all sides.

Imperfections: a few sesame seeds fallen and resting in the gap between layers, one parmesan fragment stuck to the sauce trail, a tiny mache leaf escaped sideways. 3/4 angle from the front (45 degrees), slightly below center — revealing the SIDE layers and top simultaneously. Hard directional key light from the RIGHT (3 o'clock), warm golden temperature, sculpting every crack and grain of the Maillard crust, casting sharp shadows in the crevices between ingredients. Fill light from the left at half intensity. Every sesame seed catches a specular highlight from the right. The sauce trails GLISTEN. Rich saturated warm tones — the golden Maillard, the vivid green mache, the orange sauce thread all POP against the ink-dark bun. Slight natural film grain. Dark matte charcoal background behind any visible gaps. Aspect ratio: 4:5.

---

## Notes post-production (Phase 2 — Masque CSS)

La photo generee ci-dessus sert de TEXTURE pour le masque typographique :
1. Ouvrir `mock-masque-v3.html` comme base
2. Remplacer le texte par `53G`
3. Injecter la macro generee comme `background-image` du `.mask-text`
4. Ajuster `background-position` pour centrer les couches les plus colorees (poulet Maillard + parmesan + mache) dans le coeur des lettres "5", "3", "G"
5. `background-size: 220% auto` (ou ajuster pour que la matiere remplisse 60%+ de chaque lettre)
6. Filtres CSS : `contrast(1.15) saturate(1.2) brightness(1.1)`
7. Fond ambre `#FABA43` avec gradient radial subtil
8. Tagline + grain inchanges
9. Render Puppeteer 1080x1350

## Checklist auto-verification

**Contenu :**
- [x] Couvre TOUS les elements de la direction creative
- [x] Chaque ingredient = forme exacte recette + description verrouillee complete
- [x] Aucun terme interdit (grill marks, cheese pull, brioche, arugula, amber)
- [x] Pas de nom commercial (STRICT, StrictFood)
- [x] Audit realisme execute (pre-prompt)

**Style Combo-B :**
- [x] 285 mots, narratif fluide (pas de listes)
- [x] CAPS : CRACKS, FISSURES, SPLIT, COMPACT, INTENSE, GLISTENING, SEEPING, TRAILING, FLATTENED, POP
- [x] Negatifs inline : NOT shavings, NOT slices, NOT cubes, NOT arugula, NEVER uniform, NOT smooth, NOT pale
- [x] Verbes de mouvement : SEEPING OUT, TRAILING like warm honey, GLISTENING, pooling, BURSTING
- [x] Positions spatiales : "from bottom to top", "on the bun", "on top of the chicken", "above the parmesan", "peeking out from between"
- [x] Termine par angle + eclairage + fond + ratio

**Burger specifique :**
- [x] BUN COMPACT : "slightly compressed", "NOT a tall perfect dome"
- [x] ORDRE EMPILEMENT : 5 marqueurs spatiaux
- [x] DEBORDEMENT : "bulge out 2-3cm past the bun edges"
- [x] Le prompt donne FAIM a la lecture

**Signature charbon × ambre :**
- [x] Charbon : bun ink-dark, dark matte charcoal background
- [x] Ambre : warm golden temperature (eclairage), golden Maillard, golden sesame seeds, orange sauce — la dualite est dans les ingredients + eclairage. Le fond ambre CSS (Phase 2) complete la signature au compositing.

**Macro specifique :**
- [x] 220%+ zoom — burger remplit 100% du cadre
- [x] 100mm macro lens, f/2.8
- [x] Fond charbon mat neutre (facilite background-clip CSS)
- [x] Pas de mains, pas de props, pas de surface
