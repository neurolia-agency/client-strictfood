# Brief Stories — S3 Samedi (2026-03-29)

> **Pilier du jour** : Les Benefices — Post S3-03 Zero huile (masque-inverse, ambre)
> **Objectif strategique** : Completer le post Zero huile avec un visuel vapeur air fryer (sensation physique de la cuisson saine). Lifestyle rue energique. Fiche produit STRICT Vege (jamais eu de fiche story). Rappel samedi.

> **REGLE ABSOLUE** : Tous les chemins photo doivent pointer vers des fichiers existants.
> **Templates** : `story-universal.html` (defaut), `story-sillon.html`, `story-sceau.html`, `story-feuillete-photo.html`, `story-feuillete-data.html`.

---

## Story 1 — STRICT MAX Boeuf vapeur air fryer

| Champ | Valeur |
|-------|--------|
| Mode | full-ia |
| Traitement | — |
| Fond | ambre |
| Highlight | LA CARTE |
| Mood | cuivre |
| Concept visuel | sensation-vapeur |

### Objectif

Complement post Zero huile : montrer visuellement ce que la cuisson chaleur pulsee produit. Vapeur epaisse qui s'echappe du STRICT MAX Boeuf fraichement sorti du air fryer. On voit la chaleur, on sent la fraicheur de la cuisson.

### Contenu

| Champ | Valeur |
|-------|--------|
| Sujet | STRICT MAX Boeuf — burger ferme vu de 3/4, vapeur epaisse qui s'echappe du chapeau et des cotes, croute Maillard uniforme sur le double steak visible entre les buns, graines sesame dorees brillantes sur bun noir, fond ambre incandescent, chaleur palpable |
| Produit | STRICT MAX Boeuf — slug recette : `strict-max-boeuf` |
| Direction artistique | 85mm f/2.0, eclairage backlit chaud + lateral, vapeur eclairee par l'arriere (glow ambre), fond ambre-cuir, profondeur courte, grain film doux, atmosphere thermique, NO middle bun, NO grill marks |
| TEXT_LINE_1 | — |
| TEXT_LINE_2 | — |

---

## Story 2 — Lifestyle rue sac kraft

| Champ | Valeur |
|-------|--------|
| Mode | full-ia |
| Traitement | sceau |
| Fond | — |
| Highlight | — |
| Mood | cuivre |
| Concept visuel | lifestyle-rue |

### Objectif

Lifestyle urbain dynamique : un homme en marche dans une rue pietonne ensoleillée, sac kraft noir StrictFood a la main. Energie du samedi, sortie restau. Traitement sceau avec cercle glassmorphism.

### Contenu

| Champ | Valeur |
|-------|--------|
| Concept | lifestyle-rue |
| Photo reference | [ref Pinterest : "man walking pedestrian street sunny paper bag takeaway candid streetwear photography"] |
| Personnage | Homme ~27 ans, peau claire, cheveux chatains ondules mi-longs, lunettes de soleil |
| Tenue | Bomber ambre (#FABA43), t-shirt gris chine, bermuda cargo noir, sneakers blanches |
| Posture | En marche, pas determine, sac kraft noir tenu en main gauche |
| Regard | Droit devant, deporte gauche, lunettes cachent le regard |
| Scene | Rue pietonne ensoleillée, facades ocre/jaune en arriere-plan flou, pavés, passants flous |
| Sac kraft | oui |
| Cadrage | Plein pied, legere contre-plongee |
| TEXT_LINE_1 | — |
| TEXT_LINE_2 | — |

#### Champs sceau

| Champ | Valeur |
|-------|--------|
| SCEAU_NAME | STRICT<br>FOOD'S |
| SCEAU_SUB | Ton samedi |
| SCEAU_INFO | — |

---

## Story 3 — Fiche produit STRICT Vege

| Champ | Valeur |
|-------|--------|
| Mode | template |
| Traitement | — |
| Fond | — |
| Highlight | LA CARTE |
| Mood | cuivre |
| Concept visuel | — |

### Objectif

Fiche produit STRICT Vege Falafel : premiere fiche story dediee. Photo du falafel en fond, nom + kcal en overlay. Le vegetarien qui casse les codes.

### Contenu

| Champ | Valeur |
|-------|--------|
| Photo | `../public/images/photos-references/produits-source/burgers-black/strict-vege/strict-vege-main.png` |
| TEXT_LINE_1 | STRICT VEGE |
| TEXT_LINE_2 | 850 kcal · falafel |
| PHOTO_PRESET | photo-centre |
| INFO_POSITION | — |

---

## Story 4 — Rappel samedi

| Champ | Valeur |
|-------|--------|
| Mode | template |
| Traitement | — |
| Fond | — |
| Highlight | NOUS TROUVER |
| Mood | cuivre |
| Concept visuel | — |

### Objectif

Rappel de presence samedi : "SAMEDI = STRICT" + adresse complete. Photo deco salle en fond pour varier les angles.

### Contenu

| Champ | Valeur |
|-------|--------|
| Photo 1 | `../public/images/photos-references/contexte/salle-restaurant/déco-salle.jpeg` |
| Photo 2 | — |
| Accroche | SAMEDI = STRICT |
| Mot accent | STRICT |
| CTA type | adresse |
| CTA valeur | 88 Chemin de la Roseraie, Perpignan |

---

## Contraintes

- DA : Dark Food Premium — `story-universal.html` (stories 1, 3, 4), `story-sceau.html` (story 2)
- Mood : cuivre
- **Fond** : ambre (story 1), — (stories 2, 3, 4)
- **Pain noir obligatoire** sur tous les visuels burger
- **Chaleur pulsee** : jamais "grill", "grille", "barbecue"
- Tagline fixe : `Le cheat meal <em>qui n'en est pas un</em>`

## Etape suivante

> Executer `/story-producer S3 samedi` pour produire ces stories.
