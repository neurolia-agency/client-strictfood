# Template Prompt Compositing — StrictFood

> Structure obligatoire pour les modes `compositing-irl` et `compositing-ia`.
> Verrouille la qualite des generations en standardisant les 8 blocs du prompt.

## Principe

Le compositing place un **produit decrit par le prompt** (jamais en photo input) dans une **scene reelle fournie en photo input**. Le produit est genere par l'IA pour s'integrer naturellement dans la scene.

**Reference validee** : S3/mercredi/story-03 (MAX Poulet sur table salle restaurant)

---

## Structure prompt (8 blocs obligatoires)

### 1. CAMERA

```
Shot on Sony A7IV, 35mm f/2.8, ISO 400, shallow depth of field, natural indoor lighting
```

Toujours la meme spec camera. Pas de variation.

### 2. SCENE

Decrire le lieu **depuis la photo input** — materiaux exacts, eclairage, couleurs dominantes.

```
Exemple : "A light oak wood table inside a modern fast-food restaurant. White/grey tile walls,
black metal chairs, green plant wall with white neon sign visible in soft bokeh background.
Neutral white indoor lighting, slightly warm."
```

**Regle** : ne decrire QUE ce qui est visible dans la photo de reference. Ne rien inventer.

### 3. PRODUIT

Decrire le burger **depuis `_recettes/[slug].md`** — ingredients exacts dans l'ordre.

```
Exemple : "A compact, realistic-sized burger with a charcoal black sesame bun showing artisanal
imperfections — irregular cracks, uneven sesame seeds with a few fallen on the paper. Inside:
air-fried chicken breast with uniform golden Maillard crust (no grill marks), fresh lamb's
lettuce (small round leaves), red onion rings, drizzle of honey-mustard sauce."
```

**Regles produit** :
- Pain NOIR sesame avec imperfections artisanales (fissures, sesame irregulier)
- Croute Maillard UNIFORME (pas de grill marks — cuisson air fryer)
- Taille realiste et compacte (pas towering/magazine)
- Ingredients decrits avec les termes verrouilles de la recette
- Quelques graines de sesame tombees autour

### 4. PLACEMENT

```
The burger is placed on crumpled brown kraft paper, on [surface from photo — e.g., "the oak wood table"].
A few sesame seeds scattered on the kraft paper. Slight sauce drip on the paper edge.
```

**Toujours sur du papier kraft froisse.** C'est le placement standard StrictFood.

### 5. INTEGRATION

```
Natural lighting matching the ambient scene — same direction, same color temperature.
Soft natural shadow beneath the burger on the kraft paper. Very slight steam wisps rising
from the warm patty, barely visible. No artificial spotlight on the product.
```

**Regle critique** : l'eclairage du produit DOIT matcher la scene. Meme direction, meme temperature de couleur. Pas de spot additionnel.

### 6. ARRIERE-PLAN

```
Background softly blurred (shallow depth of field, f/2.8 bokeh). Restaurant elements
visible but not distracting — [elements specifiques de la scene: menu board, plant wall,
counter, etc.]. Depth layers: product sharp, mid-ground slightly soft, background fully blurred.
```

### 7. STYLE

```
Documentary food photography. Candid restaurant moment. No text, no logos, no watermarks,
no people, no hands. Natural imperfections — slightly uneven burger, a leaf poking out,
sauce not perfectly centered. Real food, not styled for magazine.
```

### 8. FORMAT

```
Portrait orientation, 9:16 aspect ratio, 4K resolution (2160x3840).
```

---

## Contraintes verrouillees

| Contrainte | Valeur | Pourquoi |
|-----------|--------|----------|
| Papier kraft | TOUJOURS | Signature StrictFood, ancrage realiste |
| Bokeh arriere-plan | TOUJOURS | Separation produit/scene, effet premium |
| Eclairage match | TOUJOURS | Coherence = realisme |
| Burger compact | TOUJOURS | Realisme (pas de burger geant IA) |
| Steam/vapeur | TOUJOURS (subtile) | "Juste sorti du air fryer" |
| Sesame irregulier | TOUJOURS | Anti-IA, artisanal |
| Grill marks | JAMAIS | Air fryer = croute Maillard uniforme |
| Pain blanc | JAMAIS | Pain noir sesame obligatoire |
| Texte/logo dans l'image | JAMAIS | Ajoute en overlay via template |
| Personnes | JAMAIS en compositing | Risque IA mains/visages |

---

## Checklist post-generation (4 points — STOP si 1 echoue)

| # | Check | Action si echec |
|---|-------|----------------|
| 1 | **Pain NOIR ?** (pas dore, pas brun, NOIR charbon) | Regenerer avec emphasis "charcoal black" |
| 2 | **Proportions realistes ?** (burger pas geant, tient dans une main) | Regenerer avec "compact, hand-sized" |
| 3 | **Eclairage coherent ?** (meme direction et temperature que la scene) | Regenerer avec description eclairage specifique |
| 4 | **Materiaux du lieu conformes ?** (si salle visible: carrelage blanc, bois blond, chaises noires) | Verifier vs photos reference `contexte/salle-restaurant/` |

---

## Exemple de prompt complet

```
Shot on Sony A7IV, 35mm f/2.8, ISO 400, shallow depth of field, natural indoor lighting.

A light oak wood table inside a modern fast-food restaurant. White-grey rectangular tile walls,
black industrial metal chairs, a large green plant wall with a white neon "STRICT FOOD'S" sign
glowing softly in the blurred background. A black menu board with white text visible further back.
Neutral white ceiling lights creating even, slightly warm indoor illumination.

On the table, a compact realistic-sized burger sits on crumpled brown kraft paper. The bun is
charcoal black with golden sesame seeds — artisanally imperfect with small cracks and uneven seed
distribution, a few seeds fallen onto the kraft paper. Inside: two air-fried chicken breast pieces
with uniform golden Maillard crust (absolutely no grill marks), fresh lamb's lettuce (small round
green leaves), thin red onion rings, a visible drizzle of honey-mustard sauce slightly running
down the side.

Natural lighting matching the ambient scene — same direction from the ceiling, same warm-neutral
temperature. Soft shadow beneath the burger on the kraft paper. Very subtle steam wisps rising
from the warm chicken, barely visible.

Background softly blurred with beautiful f/2.8 bokeh. The plant wall neon and menu board are
recognizable but dreamy. Three depth layers: burger tack-sharp, table mid-ground slightly soft,
back wall fully blurred.

Documentary food photography. Candid restaurant moment. No text, no logos, no watermarks, no people.
Natural imperfections — a leaf slightly askew, sauce not perfectly centered, one onion ring tilted.

Portrait orientation, 9:16 aspect ratio, 4K resolution.
```
