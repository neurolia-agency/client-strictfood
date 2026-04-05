# Brief Story — [Semaine] [Jour] #[N] (YYYY-MM-DD)

> **1 brief = 1 story.** Chaque story a son propre fichier brief.
> **Pilier du jour** : [Le Plat / La Cuisine / L'Equipe / Confiance] — [Post SX-NN publie aujourd'hui / Pas de post]

> **REGLE ABSOLUE** : Tous les chemins photo doivent pointer vers des fichiers existants. JAMAIS de `[A FOURNIR]`. Si aucune photo ne matche, changer le sujet ou le mode.
> **Templates** : `story-universal.html` (defaut), `story-sillon.html`, `story-sceau.html`, `story-feuillete-photo.html`, `story-feuillete-data.html`.

---

## Story

| Champ | Valeur |
|-------|--------|
| Mode | [full-ia] — toutes les stories sont en full-ia. `edit-ia` et `irl` sont hors-planning uniquement. `template` est deprecie pour les stories. |
| Traitement | [— / sillon / sceau / feuillete-photo / feuillete-data] |
| Fond | [— / ambre / charbon / ambre+charbon / charbon+ambre] |
| Highlight | [LA CARTE / COULISSES / NOS ARTISANS / NOUS TROUVER / L'EQUIPE / —] |
| Mood | [cuivre / grenat / feuille] |
| Concept visuel | [concept depuis `_config/concepts-visuels.md`] |
| Intention | [envie / curiosite / confiance / presence] |

> Le **Mode** est defini dans le planning semaine. Ne pas le changer dans le brief sauf hors-planning.
> Le **Traitement** est defini dans le planning semaine. Si vide ou `—`, c'est `photo-pure` (story-universal.html).
> Le **Fond** est pertinent uniquement pour le mode `full-ia` — il determine la palette du background dans le prompt image.
> Le produit est TOUJOURS decrit dans le prompt (jamais fourni en photo reference a l'IA).
> L'**Intention** est OBLIGATOIRE — elle guide le choix du concept et la direction artistique.

### Intention emotionnelle

| Valeur | Ce que le viewer doit RESSENTIR | Guide le concept vers |
|--------|-------------------------------|----------------------|
| `envie` | "Je veux ca MAINTENANT" — reaction viscerale, salivation | macro-sauce, sensation-overflow, action-croque, macro-jus, sensation-brillance |
| `curiosite` | "C'est quoi ca ?" — arrete le scroll, intrigue | eclate, selective-color, persp-dessous, double-exposure, persp-reflet, grain-cinema |
| `confiance` | "Ils sont serieux ces gens" — qualite, artisanat, process | action-service, macro-texture, macro-fromage, atmo-clair-obscur, moment-assemblage |
| `presence` | "Ah oui StrictFood, je devrais y aller" — rappel, horaires, CTA | Concepts brand/rappel, devanture, comptoir, moment-remise-sac |

### Objectif

[1-2 phrases : en quoi cette story sert l'intention choisie. Ex: "Envie — gros plan sauce qui coule sur le falafel, le viewer doit sauter le repas qu'il a prevu"]

### Contenu (selon le mode)

#### Si mode = `full-ia`

> Image entierement generee par l'IA en plein cadre.

| Champ | Valeur |
|-------|--------|
| Sujet | [description du visuel — ex: "STRICT Boeuf close-up macro, vapeur, fond charbon"] |
| Produit | [NOM PRODUIT] — slug recette : `[slug-kebab-case]` |
| Direction artistique | [ambiance, eclairage, style — ex: "cinematique, contre-jour, grain film"] |
| TEXT_LINE_1 | [max 22 car OU "—"] |
| TEXT_LINE_2 | [max 30 car OU "—"] |

#### Si mode = `full-ia` et type = `lifestyle`

> Photo lifestyle generee par IA. Process 2 etapes : generation photo → edition IA pour logo sur sac kraft.
> Voir `_config/lifestyle-process.md` pour le process complet.

| Champ | Valeur |
|-------|--------|
| Concept | [concept depuis `_config/concepts-visuels.md` section Lifestyle IA] |
| Photo reference | [URL Pinterest/IG ou chemin local de la photo d'inspiration du modele] |
| Personnage | [description OU "voir photo reference" — Claude analysera automatiquement] |
| Tenue | [description OU "adapter depuis photo reference" — piece ambre OBLIGATOIRE] |
| Posture | [en marche / assis / appuye — JAMAIS regard camera] |
| Regard | [deporte droite / deporte gauche / profil / 3/4 dos] |
| Scene | [description du lieu OU "adapter depuis photo reference"] |
| Sac kraft | oui |
| Cadrage | [plein pied / plan americain] |
| TEXT_LINE_1 | [max 22 car OU "—"] |
| TEXT_LINE_2 | [max 30 car OU "—"] |

> **Process 3 etapes** (voir `_config/lifestyle-process.md`) :
> 0. Claude analyse la photo reference et retranscrit le personnage, la tenue, le fond. Adapte pour StrictFood (piece ambre, sac kraft, regard candid).
> 1. Generation photo de base via `/image-prompt-engineer` + `/nano-banana-pro` (4K). PAS de logo dans le prompt.
> 2. Incrustation logo via Gemini edit avec `--reference-image public/logo/strictfood-logo-white-reference.png`.

#### Si mode = `template`

> Photo existante plein cadre + texte informatif overlay via `story-universal.html`.
> Remplace les anciens templates (educatif, interactif, fiche-produit, annonce).

| Champ | Valeur |
|-------|--------|
| Photo | `[chemin vers photo existante — OBLIGATOIRE]` |
| TEXT_LINE_1 | [max 22 car — chiffre cle, nom produit, question, annonce] |
| TEXT_LINE_2 | [max 30 car — unite, sous-titre, info complementaire] |
| PHOTO_PRESET | [photo-centre / photo-droite / photo-gauche / photo-haut / photo-bas / photo-large] |
| INFO_POSITION | [(vide=bas-centre) / info-haut-gauche / info-haut-centre / info-bas-gauche] |

**Exemples de contenu template** :
- Educatif : TEXT_LINE_1 = "53G PROTEINES", TEXT_LINE_2 = "Ton shaker ne fait pas le poids"
- Interactif : TEXT_LINE_1 = "QUEL EST TON STRICT ?", TEXT_LINE_2 = "—" (sondage ajoute nativement dans IG)
- Fiche produit : TEXT_LINE_1 = "STRICT VEGE", TEXT_LINE_2 = "850 kcal"
- Annonce : TEXT_LINE_1 = "MARDI-DIMANCHE", TEXT_LINE_2 = "11h-14h / 18h-22h"

> Les VS blocs, macros bars, listes d'ingredients = supprimes du template. Si ce contenu est important, il va en caption Instagram ou en post carrousel.

#### Si mode = `edit-ia` (hors-planning uniquement)

> Photo existante editee/sublimee par IA, puis overlay via `story-universal.html`.

| Champ | Valeur |
|-------|--------|
| Photo source | `[chemin vers photo existante — OBLIGATOIRE]` |
| Direction edit | [ce qu'on veut modifier — ex: "ambiance DA, ombres dramatiques, tons cuivre" ou "bun-swap pain noir"] |
| TEXT_LINE_1 | [max 22 car OU "—"] |
| TEXT_LINE_2 | [max 30 car OU "—"] |

#### Si mode = `irl` (hors-planning uniquement)

> Photo fraiche prise en live + overlay DA minimal via `story-universal.html`.

| Champ | Valeur |
|-------|--------|
| Photo | `[chemin vers photo fraiche — OBLIGATOIRE, doit exister sur le disque]` |
| TEXT_LINE_1 | [max 22 car OU "—"] |
| TEXT_LINE_2 | [max 30 car OU "—"] |
| PHOTO_PRESET | [photo-centre / photo-droite / photo-gauche / photo-haut / photo-bas / photo-large] |
| IRL_FILTER | [none / leger / moyen / fort] |
| INFO_POSITION | [(vide=bas-centre) / info-haut-gauche / info-haut-centre / info-bas-gauche] |

#### Si traitement = `sillon`

> Photo haut + arc dome + zone ambre bas. Le fond de la PHOTO est gere par `/image-prompt-engineer` via le champ Fond.

| Champ | Valeur |
|-------|--------|
| PRODUCT_NAME | [max 20 car — nom produit en Oswald 120px] |
| PRODUCT_INFO | [max 30 car — macros, accroche OU "—"] |

#### Si traitement = `sceau`

> Cercle glassmorphism avec arc dome interieur, sur photo plein cadre. Zone libre en dessous pour stickers IG.

| Champ | Valeur |
|-------|--------|
| SCEAU_NAME | [max 12 car — nom produit, 2 lignes possibles avec <br>] |
| SCEAU_SUB | [max 20 car — sous-titre] |
| SCEAU_INFO | [max 15 car — info (kcal, prix) OU "—"] |

#### Si traitement = `feuillete-photo`

> Photo plein cadre + bandeau dome ambre en haut. Utilise en sequence avec `feuillete-data`.

Pas de champs supplementaires — le template n'a que la photo + tagline + dome.

#### Si traitement = `feuillete-data`

> Fond charbon + donnee geante. Pas de photo. Fermeture de sequence.

| Champ | Valeur |
|-------|--------|
| DATA_NUMBER | [max 6 car — chiffre geant (ex: "946", "53G", "0%")] |
| DATA_UNIT | [max 15 car — unite (ex: "CALORIES", "PROTEINES")] |
| DATA_LINE_1 | [max 25 car — info (ex: "MARDI — DIMANCHE")] |
| DATA_LINE_2 | [max 25 car — info (ex: "11h-14h / 18h-22h") OU "—"] |

#### Si type = `rappel`

> Story bonus (#4) — rappel de presence. Visuel IA unique + accroche + CTA.
> L'info (horaires, adresse, tel) est integree dans le prompt IA ou ajoutee en overlay natif Instagram par l'operateur.
> Voir `_config/story-rappel.md` pour la banque d'accroches.

| Champ | Valeur |
|-------|--------|
| Sujet | [description de la scene IA — ex: "facade StrictFood vue de nuit, neon blanc, ambiance urbaine" ou "comptoir vu de 3/4, barquettes kraft, vapeur air fryer"] |
| Direction artistique | [ambiance, eclairage — ex: "nuit urbaine, neon, grain cinema" ou "lumiere chaude soiree, contre-jour"] |
| Accroche | [depuis la banque — ex: "TON WEEK-END COMMENCE ICI"] |
| Mot accent | [le mot en ambre — ex: "ICI"] |
| CTA type | [telephone / horaires / adresse] |
| CTA valeur | [ex: "06 11 74 59 44" ou "11h-14h / 18h-22h" ou "88 Chemin de la Roseraie"] |
| TEXT_LINE_1 | [accroche courte OU "—" si ajoutee en natif IG] |
| TEXT_LINE_2 | [CTA OU "—" si ajoute en natif IG] |

---

## Contraintes

- DA : Dark Food Premium — template par defaut `story-universal.html`, ou traitement specifique (sillon, sceau, feuillete-photo, feuillete-data)
- Mood : [cuivre / grenat / feuille] — cuivre = standard
- **Fond** : assigne dans le planning pour le mode `full-ia` — determine la palette du prompt image
- **Traitement** : assigne dans le planning — determine le template HTML utilise
- **Pain noir obligatoire** sur tous les visuels burger
- **Chaleur pulsee** : jamais "grill", "grille", "barbecue"
- Tagline fixe : `Le cheat meal <em>qui n'en est pas un</em>`

## Etape suivante

> Executer `/story-producer S[X] [jour]` pour produire cette story.
