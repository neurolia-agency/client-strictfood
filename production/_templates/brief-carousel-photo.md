# Brief Carrousel Photo — [Type] ([Date])

> Famille B — Chaque slide = 1 image Gemini 2K (1080x1350, 4:5)

## Strategie

| Champ | Valeur |
|-------|--------|
| Pilier | [Le Produit / Les Benefices / La Marque] |
| Format | Carrousel photo [N] slides (1080x1350, 4:5) |
| Famille | B — Photo |
| Type | [Zoom Progressif / Texture ASMR / Construction / Defile Gamme / Process Cuisine] |
| Periode | [SX — Nom de la periode] |

## Produit principal

**[NOM PRODUIT]** — slug recette : `[slug-kebab-case]`

---

## Coherence inter-slides

> Ce bloc est IDENTIQUE dans tous les prompts du carrousel. Il assure la coherence visuelle.

### Fond / Surface

[Description precise de la surface : ex. "dark slate surface with subtle grain texture, scattered sesame seeds and crumbs"]

### Eclairage

[Description precise : ex. "single warm directional light from upper-left, dramatic shadows, warm color temperature 3200K"]

### Style camera

[Description precise : ex. "Shot on Hasselblad H6D-100c, 80mm lens, documentary food photography, film-like grain"]

### Regles negatives

[Ce qui ne doit PAS apparaitre : ex. "NO text, NO logos, NO people, NO grill marks, NO white bun"]

---

## Slides

### Slide 1

| Champ | Valeur |
|-------|--------|
| Sujet | [Ce que montre cette slide] |
| Cadrage | [Plan large / Plan serre / Macro / Ultra-macro] |
| Description | [Description detaillee de ce qui doit apparaitre dans l'image] |

### Slide 2

| Champ | Valeur |
|-------|--------|
| Sujet | [Ce que montre cette slide] |
| Cadrage | [Plan large / Plan serre / Macro / Ultra-macro] |
| Description | [Description detaillee] |

### Slide 3

| Champ | Valeur |
|-------|--------|
| Sujet | [Ce que montre cette slide] |
| Cadrage | [Plan large / Plan serre / Macro / Ultra-macro] |
| Description | [Description detaillee] |

### Slide 4 (optionnel)

| Champ | Valeur |
|-------|--------|
| Sujet | [Ce que montre cette slide] |
| Cadrage | [Plan large / Plan serre / Macro / Ultra-macro] |
| Description | [Description detaillee] |

### Slide 5 (optionnel)

| Champ | Valeur |
|-------|--------|
| Sujet | [Ce que montre cette slide] |
| Cadrage | [Plan large / Plan serre / Macro / Ultra-macro] |
| Description | [Description detaillee] |

---

## Direction Caption

| Champ | Valeur |
|-------|--------|
| Angle | [Complementaire au visuel — ex: "Decrire les textures et ingredients, inviter a venir gouter"] |
| Ton | [Sensoriel / Direct / Provocateur / Storytelling] |
| CTA | [Ex: "Enregistre ce post" / "Commande le tien" / Aucun] |
| Mention prix | [Oui (preciser) / Non] |
| Mention macros | [Oui / Non] |

> La caption est generee APRES validation visuelle par `/caption-writer`.

---

## Contraintes

- Pain noir obligatoire sur tous les burgers visibles
- Pas de grill marks (croute Maillard uniforme)
- Pas de texte dans les images
- Ingredients fideles aux recettes (`_recettes/[slug].md`)
- Resolution : 2K (1080x1350 par slide)
- Produit DECRIT dans le prompt (jamais de photo reference)
- Le bloc de coherence est repete dans CHAQUE prompt de slide

---

## Etape suivante

> Generer chaque slide via `/image-prompt-engineer` + `/nano-banana-pro` avec le bloc de coherence commun.
> Puis valider la coherence visuelle de l'ensemble avant caption.
