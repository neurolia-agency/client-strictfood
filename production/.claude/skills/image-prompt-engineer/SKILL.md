---
name: image-prompt-engineer
description: >
  Rédige des prompts professionnels de génération d'image calibrés Combo-B (150-300 mots)
  pour GPT Images et Nano Banana (Gemini). Utiliser ce skill DÈS que l'utilisateur veut
  écrire, rédiger, créer, améliorer, optimiser ou transformer un prompt de génération d'image
  à partir d'un brief de direction créative structuré.
  Couvre food photography, produits, lifestyle, portraits, architecture.
  Utiliser aussi quand l'utilisateur demande des explications sur le style Combo-B
  ou la structure d'un prompt image. Toujours utiliser AVANT /nano-banana-pro pour préparer le prompt.
  Ne PAS utiliser pour : générer l'image elle-même (→ nano-banana-pro), la direction artistique
  (→ social-media-art-director), l'audit réalisme (→ realism-auditor).
---

# Image Prompt Engineer

Transform image requests into professional-grade generation prompts optimized for GPT Images (gpt-image-1.5) or Nano Banana (Gemini 3 Pro Image).

Recoit un dossier de direction creative detaille (output de `social-media-art-director`) et le traduit en prompt calibre Combo-B.

### CONTRAINTES NON NEGOCIABLES

#### 0. Pain noir obligatoire
Tous les burgers = **pain noir sesame (black bun)**. DOIT contenir `"charcoal black sesame bun"`. INTERDIT : `brioche`, `white bun`, `plain bun`, `golden bun`. Verification : ctrl-F "black" + "bun" avant livraison.

#### 0b. Fidelite salle de restaurant
Si decor restaurant : correspondre strictement a la vraie salle (photos : `public/images/photos-references/contexte/salle-restaurant/`). Elements reels : carrelage blanc/gris, bois chene clair, chaises noires metal, mur vegetal neon "STRICT FOOD'S", comptoir blanc. INTERDIT : `rustic`, `brick wall`, `warm wood paneling`, `cozy pub`, `vintage`. En cas de doute, preferer un fond neutre.

#### 0c. Proportions pain noir — Anti-surdimensionnement
Le bun DOIT etre `slightly compressed`, `compact`, ou `naturally sagging` — JAMAIS un dome parfait. Les ingredients DEBORDENT (2-3cm). Le top bun est `slightly flattened`. Phrase obligatoire dans chaque prompt burger :
```
The bun is COMPACT — slightly compressed under the weight of the filling, NOT a tall perfect dome,
NOT oversized. The ingredients bulge out 2-3cm past the bun edges on all sides.
```
INTERDIT : `perfectly round`, `tall dome`, `puffy`, `large bun`, `thick bun`.

#### 0d. Ordre d'empilement — Marqueurs spatiaux obligatoires
L'ordre des ingredients suit l'empilement reel (recette, bottom → top) avec **>=3 marqueurs spatiaux** : `from bottom to top:`, `sits directly on the bun`, `on top of the [precedent]:`, `above the [X]`, `peeking out from under`. INTERDIT : lister des ingredients sans position relative. Chaque couche est decrite APRES celle sur laquelle elle repose.

#### 0e. Signature Charbon × Ambre obligatoire
Chaque prompt contient les DEUX couleurs. Le fond determine la dominante, l'accent oppose est automatique. Voir BLOC 1b. Verification : ctrl-F `black`/`dark`/`charcoal` + `amber`/`golden`/`warm`/`copper`. Si l'un manque → AJOUTER un element d'accent.

#### 1. Fidelite produit absolue
Le prompt DOIT decrire chaque element avec sa forme exacte (recette). Ne jamais approximer. Descriptions verrouillees dans `references/category-guides.md`.

**ZERO ABREVIATION** : les descriptions locked (bun ~40 mots, Maillard ~40 mots, mache ~40 mots, sauce ~30 mots) doivent etre utilisees **EN ENTIER**. Violations : `"3-4 leaves casually placed"` → REJET. `"black bun with sesame"` → REJET.

#### 2. Resolution toujours 4K
Tout prompt Mode B = generation en **4K**. Pas de 1K draft.

#### 3. Produit TOUJOURS decrit (jamais de photo reference produit)
Produits decrits textuellement depuis `_recettes/[slug].md`. JAMAIS de photo produit en input. Seule photo en input = photo de scene/lieu en mode `edit-ia`.

#### 4. Brand props — fidelite packaging
Si brand prop : decrire materiau exact, logo "STRICT FOOD'S" (le second O = icone burger stylisee), couleur Cuivre Braise (#BF8522). Fournir `public/logo/strictfood-logo-reference.png` en image reference secondaire.

#### 5. Mode edit-ia — Photo lieu reelle + produit decrits
Prompt decrit SEULEMENT ce qu'on AJOUTE. **A. MINIMAL** (lieu reel) : `"Edit this photo. Do NOT change the scene. The ONLY change: place [product] on [surface]. Match lighting. FORBIDDEN: do not redesign."` **B. ENRICHI** (scene generique) : plus descriptif pour enrichir l'ambiance tout en preservant le fond. Pieges : surdimensionnement, eclairage studio/ambient, bords trop nets → voir `references/category-guides.md`.

---

### Step 1 — Lire les inputs

**Fichiers :** `art-direction.md` → `_recettes/[produit].md` → `_config/pipeline.md` → `brand-props.md` (si brand prop) → `fonds-ambre.md` (si fond ambre).

**Extraire :** Composition, Eclairage, Sujet + secondaires, Palette & Mood, Fond (ambre/charbon/mixte), Texte on-image (decide du modele), Recette (verrouiller chaque ingredient).

### Step 2 — Choisir le modele

**Texte on-image** → GPT Images | **Photo sans texte** → Gemini | **Infographie** → GPT Images

### Step 3 — Construire le prompt (structure 8 blocs)

**8 blocs obligatoires**, 150-300 mots, un ou deux paragraphes narratifs fluides. Voir **Style Combo-B** en fin de document.

```
BLOC 1 — OUVERTURE + FOND      BLOC 5 — ECLAIRAGE
BLOC 2 — PRODUIT                BLOC 6 — PROFONDEUR DE CHAMP
BLOC 3 — IMPERFECTIONS          BLOC 7 — FEEL GLOBAL
BLOC 4 — ANGLE CAMERA           BLOC 8 — FORMAT
```

#### FORMAT DE SORTIE (regle critique)

**Les blocs = outil de planification interne. Le prompt final = recit immersif SANS labels.**
```
Real food photograph. [fond]. [produit, CAPS sur critiques, negatifs inline].
[imperfections]. [angle]. [eclairage]. [feel + format].
```

#### Produits MAX (regle critique)

Pour TOUT burger MAX, le BLOC 2 DOIT inclure :
```
The burger has exactly TWO buns — one bottom, one top. Between them, TWO [steaks/chicken]
are stacked DIRECTLY on top of each other with [sauce/parmesan] as the ONLY separator.
The second portion rests FLAT on the first — meat touching meat with sauce between.
```
JAMAIS "double-stacked" seul. JAMAIS "NO middle bun" comme seule protection.

#### Traitements stories (regle critique)

`colonne`, `sillon`, `sceau`, `feuillete-photo`, `feuillete-data` = **post-production** (Puppeteer overlay). Le prompt genere SEULEMENT la photo de base.

---

#### BLOC 1 — Ouverture + Fond

Commencer par `Real food photograph.` puis decrire le fond.

| Fond | Instructions |
|------|-------------|
| `ambre-[ID]` | Injecter le bloc `prompt` de `_config/fonds-ambre.md` |
| `charbon` | `Dark matte charcoal surface (#1a1714) — slightly rough texture, subtle grain under raking light.` |
| `ambre+charbon` | Fond ambre dominant + accessoires charbon (kraft noir, ardoise, ustensiles sombres) |
| `charbon+ambre` | Fond charbon dominant + touches ambre (sesame, serviette doree, sauce) |
| Scene/lieu | Materiaux reels, lumiere ambiante, details d'usure |
| Concept | Action/concept comme ouverture narrative |

**Regle** : chaque fond = proprietes physiques (materiau, texture, usure). JAMAIS un mot seul.

#### BLOC 1b — Signature Charbon × Ambre (OBLIGATOIRE)

**Chaque prompt StrictFood DOIT contenir les deux couleurs : charbon ET ambre.** S'applique aux posts ET aux stories (food, lifestyle, brand). Le fond du brief determine la dominante — l'accent oppose est injecte automatiquement.

**Regle de couverture : l'accent couvre 15-20% du cadre.** Ce n'est PAS un detail discret — c'est un element structurant visible au premier regard.

| Fond dominant | Accent a injecter (15-20% du cadre) | Exemples STRUCTURANTS |
|---------------|--------------------------------------|----------------------|
| charbon | Ambre | Large kraft paper (couvrant ~1/5 du cadre), warm amber spotlight zone, golden clothing piece, copper tray, amber-lit surface area |
| ambre | Charbon | Black jacket/clothing, dark StrictFood bag, charcoal slate surface, deep shadow mass, black nitrile gloves |
| minimal | L'oppose du fond choisi | Si charbon → large zone de lumiere ambre. Si ambre → objet charbon imposant |
| craft | Les deux via produit + lumiere | Le bun noir = charbon (~15%), l'eclairage chaud = ambre (~15%) |
| **lifestyle (scene)** | Porte par le PERSONNAGE | Vetement charbon (veste noire, t-shirt sombre) + accessoire ambre (sac kraft dore, echarpe, bijou) OU l'inverse. Le sac kraft StrictFood (noir + logo dore) porte les DEUX couleurs |

**Verification avant livraison :**
1. ctrl-F charbon (`dark`, `black`, `charcoal`, `matte`, `shadow`) — present ?
2. ctrl-F ambre (`amber`, `golden`, `warm`, `copper`, `kraft`) — present ?
3. L'element d'accent est-il STRUCTURANT (grand objet, large surface, vetement visible) ou juste un reflet discret ? Si trop discret → renforcer.

**Ce bloc influence le BLOC 1 (fond), BLOC 2 (accessoires) et BLOC 5 (eclairage).** L'accent est naturel — un vetement, un accessoire, une lumiere, une surface — jamais force artificiellement.

#### BLOC 2 — Produit (description exhaustive)

Chaque ingredient dans l'ordre d'empilement, forme exacte, proprietes physiques. Descriptions verrouillees dans `references/category-guides.md`.

**Structure :**
1. Bun bottom + description COMPLETE (40+ mots, locked `Pain noir (surface)` avec CRACKS, FISSURES, LOPSIDED, SPLIT)
2. `The bun is COMPACT — slightly compressed, NOT a tall perfect dome, NOT a perfect sphere.`
3. Chaque ingredient avec marqueur spatial (`on the bun:`, `on top of:`, `above:`)
4. Bun top : RE-DECRIRE les imperfections (JAMAIS juste "identical" — repeter cracks, lopsided, fissures, flat spot). Voir locked `Pain noir (top bun)`.
5. `The ingredients bulge out 2-3cm past the bun edges.`

**REGLE TOP BUN** : JAMAIS decrire le top bun comme "identical charcoal black sesame bun" ou "same as base". Gemini oublie les details 200 mots plus tot. TOUJOURS re-decrire au minimum : `charcoal black bun cap with visible cracks, one side slightly LOPSIDED, a flat spot where it settled, sesame seeds in uneven clusters — NOT a pristine dome, NOT symmetric.`

#### BLOC 3 — Imperfections (minimum 3)
Elements tombes, produit pas parfait, detail de vie. Vraie photo, pas un render 3D.

#### BLOC 4 — Angle camera
Position precise. Varier entre prompts. Termes : `STRAIGHT-ON`, `slight LOW ANGLE (15 deg)`, `3/4 from LEFT`, `OVERHEAD`, `off-center (rule of thirds)`.

#### BLOC 5 — Eclairage
Key light (direction+qualite+temperature) + Fill light (direction+intensite) + Specular highlights (sur quels elements). Varier entre prompts.

#### BLOC 6 — Profondeur de champ
Specifier QUOI est sharp et QUOI est soft.

#### BLOC 7 — Feel global
Templates dans `references/category-guides.md` (food hero, lifestyle/candid, macro/close-up).

#### BLOC 8 — Format
`Aspect ratio: 4:5.` (ou 1:1, 9:16 selon brief).

---

### Step 3b — Audit realisme (OBLIGATOIRE)

Lancer `production/.claude/agents/realism-auditor.md` en mode post-prompt. 8 domaines : mains, fluides, eclairage, perspective, construction, materiaux, proportions, variete.

### Step 4 — Verifier

Voir la **checklist unifiee** en fin de document (Auto-verification).

### Step 5 — Livrer

```
## Prompt — Visuel [N] / [N total]
**Model**: [GPT Images / Gemini]  **Aspect Ratio**: [from brief]  **Resolution**: 4K
**Input image**: [chemin si edit-ia, sinon "aucune"]
**Recette / Produit**: [ingredients et formes — checklist fidelite]
**Prompt**: [150-300 mots, narratif, style Combo-B]
**Notes de post-production**: [si applicable]
```
Ecrire dans `[dossier-post]/production/prompt.md`

---

## Mapping Brief → Prompt

Cadrage → Composition/Framing | Angle → Camera angle | Sujet → Subject (enrichir textures) | Elements secondaires → Setting | Elements absents → NE PAS mentionner | Eclairage → Lighting | Palette → Colors | Ambiance → Mood (developper) | Texte on-image → Technical/Text | Texture → Sensory | Brand props → Setting (lire brand-props.md)

---

## Style de reference — Combo-B

> **Source** : `production/_config/prompts-variantes-combo-b.md` — 40 prompts calibres.

### Principes

1. **Un ou deux paragraphes narratifs fluides** — PAS de bullet points, PAS de blocs separes
2. **150-300 mots** — precision proportionnelle a la qualite
3. **CAPS pour directives critiques** — `DRIPPING`, `THICK GLOSSY`, `SQUEEZING OUT`, `NOT shavings`
4. **Negatifs inline** — `(NOT shavings, NOT slices)` directement apres l'ingredient
5. **Descriptions COMPLETES a chaque mention** — ne pas abreger
6. **Verbes de mouvement** — `SQUEEZING OUT`, `DRIPPING down`, `BURSTING from`, `TRAILING like warm honey`
7. **Positionnement spatial precis** — `8-10cm above`, `12cm to the LEFT`
8. **Conclusion** : eclairage + angle + fond + ratio
9. **Expression "trailing like warm honey"** — pattern sauce (visqueux, organique)
10. **APPETIT** — JUICY, WET, GENEROUS, OVERSTUFFED, GLISTENING, IMPOSING

### Exemple calibre — concept-main (Strict Boeuf)

```
A hand wearing a black glove gripping this burger firmly but casually, as if about to
take a bite. The hand enters from the bottom-left of the frame, fingers wrapped tightly
around the charcoal black sesame bun (deep ink-dark surface with artisanal imperfections
— visible cracks in the crust, slightly asymmetric shape, one side more puffed than the
other, micro-fissures, rustic handmade quality, golden sesame seeds in RANDOM uneven
distribution — dense clusters mixed with sparse patches, a few loose seeds on the glove),
thumb pressing down hard on the cap creating a deep visible dent that reveals the dark
charcoal-black crumb underneath, fingers digging into the base leaving deep indentations
in the soft bread. The bun visibly DEFORMS under the grip pressure, squishing inward where
each finger presses — the thick beef steak with deep intense Maillard crust (oven-seared
at high pulsed heat, NO grill marks, NO char lines — rough, cratered, bark-like surface
with deep mahogany-brown coloring almost blackened at edges, visible meat grain texture,
NOT smooth, NOT polished) bulging at the sides, juices glistening on its exposed edge.
Yellow-orange pepper sauce SQUEEZING OUT between the bun layers in thick glossy trails
trailing like warm honey, DRIPPING down the glove and falling in viscous drips below the
hand. Mache leaves (small round spoon-shaped leaves with visible vein texture and natural
imperfections — varied sizes, some wilted at edges, one crumpled, one folded over, another
with a tiny brown spot near the stem, NOT arugula, NEVER uniform or plastic-looking)
BURSTING OUT from the compressed sides — a natural mix: some pristine, others crumpled
with wrinkled edges, one with a small tear, sticking out 2-3cm past the bun. Red onion
ring slices peeking out with concentric layers visible, one half-hanging off the edge.
Parmesan crumbles (small irregular powdery fragments, NOT shavings, NOT slices — a hard
cheese that does NOT melt or stretch) visible at the edges, some fragments stuck to the
wet sauce on the glove fingers, a few fallen onto the dark surface below. The burger looks
OVERSTUFFED, JUICY, barely contained — sauce and ingredients escaping from the OPPOSITE
SIDE of the strongest grip pressure. Shot from a slight LOW ANGLE, heroic perspective
looking up at the hand and burger. Hard side light from the RIGHT, warm amber temperature,
casting the glove's sharp shadow across the bun surface, sculpting every texture. The sauce
catches specular highlights from the key light. Dark matte background. Aspect ratio: 4:5.
```

### Auto-verification (checklist unifiee — Steps 4 + Combo-B)

**Contenu :**
- [ ] Couvre TOUS les elements de la direction creative ?
- [ ] Chaque ingredient = forme exacte (recette) + description verrouilllee complete (40+ mots pour bun/mache/Maillard) ?
- [ ] Aucun terme interdit (grill marks, cheese pull, brioche, arugula, amber) ?
- [ ] Pas de nom commercial (STRICT, StrictFood) ?
- [ ] Audit realisme (Step 3b) execute, tous rouges resolus ?

**Style Combo-B :**
- [ ] 150-300 mots, narratif fluide (pas de listes) ?
- [ ] >=5 CAPS + negatifs inline (NOT/NEVER apres chaque ingredient) ?
- [ ] >=3 verbes de mouvement (DRIPPING, SQUEEZING, BURSTING) ?
- [ ] Positions spatiales precises (cm, degres, directions) ?
- [ ] Termine par : angle + eclairage + fond + ratio ?

**Burger specifique :**
- [ ] BUN COMPACT : "slightly compressed" / "NOT a tall perfect dome" ?
- [ ] ORDRE EMPILEMENT : >=3 marqueurs spatiaux ("on the bun:", "on top of:", "above:") ?
- [ ] DEBORDEMENT : "bulge out 2-3cm past the bun edges" ?
- [ ] Le prompt donne FAIM a la lecture ?

---

## References

| File | Content |
|------|---------|
| `category-guides.md` | Descriptions verrouillees ingredients, realism style, colour calibration, regles & anti-patterns |
| `food-photography.md` | Vocabulaire food-specific : eclairage, dressage, textures |
| `gpt-images-best-practices.md` | Parametres OpenAI, text rendering |
| `gemini-best-practices.md` | Style narratif Gemini, options resolution |
| `prompt-templates.md` | Templates fill-in-the-blank par categorie |
| `few-shot-examples.md` | 20 exemples reels input→prompt |

## Integration & Pipeline Position

```
social-media-art-director → [CE SKILL] → Nano Banana Pro / GPT Images → visuel 4K
```
Passer le prompt via `--prompt`. Resolution : toujours 4K. Pas de photo reference produit. Mode `edit-ia` : photo scene en `--input-image`.
