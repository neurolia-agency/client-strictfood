# Brief Stories — S3 Dimanche (2026-03-30)

> **Pilier du jour** : Les Benefices — Post S3-04 Carrousel "Le cheat meal est un mensonge"
> **Objectif strategique** : Completer le carrousel avec un visuel golden hour STRICT Poulet (plaisir sans culpabilite), un upsell dessert tiramisu et un lifestyle sortie de resto pour clore la semaine.

> **REGLE ABSOLUE** : Tous les chemins photo doivent pointer vers des fichiers existants.
> **Templates** : `story-universal.html` (defaut), `story-sillon.html`, `story-sceau.html`, `story-feuillete-photo.html`, `story-feuillete-data.html`.

---

## Story 1 — STRICT Poulet golden hour

| Champ | Valeur |
|-------|--------|
| Mode | full-ia |
| Traitement | — |
| Fond | ambre |
| Highlight | LA CARTE |
| Mood | cuivre |
| Concept visuel | atmo-golden |

### Objectif

Clore la micro-saison Macro & Texture avec un visuel chaleureux : STRICT Poulet baigne dans une lumiere golden hour. Ambiance "le dimanche en or". Complement du carrousel (le plaisir sans culpabilite = un burger au soleil couchant).

### Contenu

| Champ | Valeur |
|-------|--------|
| Sujet | STRICT Poulet — burger ferme vu de 3/4, lumiere golden hour chaude venant de la droite, ombres longues et douces, graines sesame dorees qui captent la lumiere, mache verte qui depasse legerement, miettes parmesan visibles, fond ambre incandescent avec texture kraft |
| Produit | STRICT Poulet — slug recette : `strict-poulet` |
| Direction artistique | 85mm f/1.8, eclairage golden hour lateral droit, fond ambre-sable, ombres chaudes allongees, atmosphere paisible et chaleureuse, grain film Kodak Gold, profondeur courte, sesame qui brille comme de l'or |
| TEXT_LINE_1 | — |
| TEXT_LINE_2 | — |

---

## Story 2 — Upsell Tiramisu Proteine

| Champ | Valeur |
|-------|--------|
| Mode | template |
| Traitement | — |
| Fond | — |
| Highlight | LA CARTE |
| Mood | cuivre |
| Concept visuel | — |

### Objectif

Upsell dessert en complement du carrousel "cheat meal" : le tiramisu proteine est la preuve qu'on peut se faire plaisir sans compromis. Photo tiramisu existante en fond.

### Contenu

| Champ | Valeur |
|-------|--------|
| Photo | `../public/images/photos-references/produits-source/desserts/tiramisu-proteine.png` |
| TEXT_LINE_1 | TIRAMISU PROTEINE |
| TEXT_LINE_2 | Le dessert sans culpabilite |
| PHOTO_PRESET | photo-centre |
| INFO_POSITION | — |

---

## Story 3 — Lifestyle sortie resto burger poulet

| Champ | Valeur |
|-------|--------|
| Mode | full-ia |
| Traitement | sillon |
| Fond | — |
| Highlight | — |
| Mood | cuivre |
| Concept visuel | lifestyle-sortie |

### Objectif

Fermer la semaine avec un lifestyle "sortie de resto" : une femme en 3/4 dos qui s'eloigne en croquant dans un burger poulet black bun. Dimanche soir, satisfaction post-repas, devanture floue en arriere-plan.

### Contenu

| Champ | Valeur |
|-------|--------|
| Concept | lifestyle-sortie |
| Photo reference | [ref Pinterest : "woman walking away restaurant burger hand 3/4 back candid evening photography"] |
| Personnage | Femme ~30 ans, cheveux chatains ondules longs, silhouette elancee |
| Tenue | Trench coat ambre (#FABA43), robe noire en dessous, bottines noires |
| Posture | En marche, 3/4 dos, tete legerement tournee vers le burger en main droite |
| Regard | Profil droit, regard vers le burger qu'elle s'apprete a croquer |
| Scene | Trottoir devant un restaurant (devanture floue en arriere-plan), eclairage soir doux, lampadaires chauds |
| Sac kraft | non (burger poulet black bun tenu en main droite, pain noir sesame visible, mache qui depasse) |
| Cadrage | Plan americain, 3/4 dos |
| TEXT_LINE_1 | — |
| TEXT_LINE_2 | — |

#### Champs sillon

| Champ | Valeur |
|-------|--------|
| PRODUCT_NAME | DIMANCHE STRICT |
| PRODUCT_INFO | Le plaisir sans compromis |

---

## Contraintes

- DA : Dark Food Premium — `story-universal.html` (stories 1, 2), `story-sillon.html` (story 3)
- Mood : cuivre
- **Fond** : ambre (story 1), — (stories 2, 3)
- **Pain noir obligatoire** sur tous les visuels burger
- **Chaleur pulsee** : jamais "grill", "grille", "barbecue"
- Tagline fixe : `Le cheat meal <em>qui n'en est pas un</em>`

## Etape suivante

> Executer `/story-producer S3 dimanche` pour produire ces stories.
