# Brief Stories — S3 Jeudi (2026-03-27)

> **Pilier du jour** : Le Produit — Post S3-02 STRICT MAX Poulet (knockout-band, ambre)
> **Objectif strategique** : Completer le post MAX Poulet avec un macro frites (complement side), une data feuillete "2X POULET" et un lifestyle parc decontracte. Rappel horaires soir.

> **REGLE ABSOLUE** : Tous les chemins photo doivent pointer vers des fichiers existants.
> **Templates** : `story-universal.html` (defaut), `story-sillon.html`, `story-sceau.html`, `story-feuillete-photo.html`, `story-feuillete-data.html`.

---

## Story 1 — Frites Patates Douces macro

| Champ | Valeur |
|-------|--------|
| Mode | full-ia |
| Traitement | — |
| Fond | ambre+charbon |
| Highlight | LA CARTE |
| Mood | cuivre |
| Concept visuel | macro-croustillant |

### Objectif

Premiere apparition des Frites Patates Douces en story. Macro extreme sur la croute croustillante doree, cristaux de sel Maldon visibles, vapeur legere. Complement du post MAX Poulet (les frites accompagnent le burger).

### Contenu

| Champ | Valeur |
|-------|--------|
| Sujet | Frites Patates Douces — macro extreme sur frites croustillantes dorees dans barquette kraft noire, croute caramelisee visible, cristaux de sel Maldon brillants sur la surface, vapeur legere, fond ambre incandescent avec ardoise noire et ustensiles sombres |
| Produit | Frites Patates Douces |
| Direction artistique | Macro 100mm f/2.8, eclairage lateral chaud rasant, fond ambre + accessoires charbon (ardoise, pince noire), profondeur courte, texture croute ultra-detaillee, sel qui brille, grain film doux |
| TEXT_LINE_1 | — |
| TEXT_LINE_2 | — |

---

## Story 2 — Data 2X Poulet

| Champ | Valeur |
|-------|--------|
| Mode | template |
| Traitement | feuillete-data |
| Fond | — |
| Highlight | LA CARTE |
| Mood | cuivre |
| Concept visuel | — |

### Objectif

Complement post MAX Poulet : fermer la sequence avec le chiffre choc "2X" (double portion de poulet). Format feuillete-data — fond charbon, chiffre geant, pas de photo.

### Contenu

| Champ | Valeur |
|-------|--------|
| Photo | — |
| TEXT_LINE_1 | 2X POULET |
| TEXT_LINE_2 | STRICT MAX |
| PHOTO_PRESET | — |
| INFO_POSITION | — |

#### Champs feuillete-data

| Champ | Valeur |
|-------|--------|
| DATA_NUMBER | 2X |
| DATA_UNIT | POULET |
| DATA_LINE_1 | STRICT MAX POULET |
| DATA_LINE_2 | 112g proteines — 946 kcal |

---

## Story 3 — Lifestyle parc wrap poulet

| Champ | Valeur |
|-------|--------|
| Mode | full-ia |
| Traitement | — |
| Fond | — |
| Highlight | — |
| Mood | cuivre |
| Concept visuel | lifestyle-parc |

### Objectif

Scene lifestyle nature : une jeune femme sur un banc de parc en lumiere golden hour, croquant dans un wrap poulet ouvert. Moment de pause en plein air, chaleur et serenite.

### Contenu

| Champ | Valeur |
|-------|--------|
| Concept | lifestyle-parc |
| Photo reference | [ref Pinterest : "woman eating wrap park bench golden hour candid street photography warm tones"] |
| Personnage | Femme ~25 ans, peau claire, cheveux blonds attaches en queue de cheval basse |
| Tenue | Hoodie ambre (#FABA43), legging noir, sneakers blanches |
| Posture | Assise sur banc de parc, jambes croisees, wrap tenu en deux mains, en train de croquer |
| Regard | Baisse vers le wrap, sourire discret post-bouchee |
| Scene | Banc de parc bois et metal, verdure en arriere-plan flou, lumiere golden hour laterale, ombres longues |
| Sac kraft | non (wrap poulet ouvert, garniture visible : lamelles poulet, mache, parmesan) |
| Cadrage | Plan americain, legere contre-plongee |
| TEXT_LINE_1 | — |
| TEXT_LINE_2 | — |

---

## Story 4 — Rappel horaires soir

| Champ | Valeur |
|-------|--------|
| Mode | template |
| Traitement | — |
| Fond | — |
| Highlight | NOUS TROUVER |
| Mood | cuivre |
| Concept visuel | — |

### Objectif

Rappel de presence soiree : "CE SOIR C'EST STRICT" + horaires. Photo salle du restaurant en fond.

### Contenu

| Champ | Valeur |
|-------|--------|
| Photo 1 | `../public/images/photos-references/contexte/salle-restaurant/salle1.jpeg` |
| Photo 2 | — |
| Accroche | CE SOIR C'EST STRICT |
| Mot accent | STRICT |
| CTA type | horaires |
| CTA valeur | 11h-14h / 18h-22h |

---

## Contraintes

- DA : Dark Food Premium — `story-universal.html` (stories 1, 3, 4), `story-feuillete-data.html` (story 2)
- Mood : cuivre
- **Fond** : ambre+charbon (story 1), — (stories 2, 3, 4)
- **Pain noir obligatoire** sur tous les visuels burger/wrap
- **Chaleur pulsee** : jamais "grill", "grille", "barbecue"
- Tagline fixe : `Le cheat meal <em>qui n'en est pas un</em>`

## Etape suivante

> Executer `/story-producer S3 jeudi` pour produire ces stories.
