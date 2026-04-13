# Brief — Post [ID] ([Jour] [Date])

## Stratégie

| Champ | Valeur |
|-------|--------|
| Pilier | [Le Plat / La Cuisine / Les Macros / L'Équipe / Le Quartier] |
| Format | [Photo unique / Carrousel N slides / Triptych (3 posts)] |
| Dimensions | [4:5 / 1:1 / 3240x1080 (triptych) / 3240x1350 (triptych 4:5)] |
| **Traitement** | [photo-pure / knockout-band / masque / masque-inverse / texture-fill / carousel / triptych] |
| **Fond** | [ambre / charbon — voir `_config/fonds-ambre.md` pour les variantes ambre] |
| **Mode** | [full-ia / template (carrousel)] — `edit-ia` et `irl` sont hors-planning uniquement |
| Source image | [archive / ia — uniquement pour photo-pure, knockout-band, triptych] |
| Période | [SX — Nom de la période] |

> **RÈGLE ABSOLUE** : Tous les chemins photo doivent pointer vers des fichiers existants. JAMAIS de `[À FOURNIR]`. Si aucune photo ne matche, changer le sujet ou le traitement. Les photos pain blanc sont autorisées avec la mention `bun-swap-required`.
> **Mode** : les posts en planning sont tous en `full-ia` (sauf carrousels = `template`). Le produit est TOUJOURS décrit dans le prompt, jamais fourni en photo reference à l'IA.

## Objectif

[1-3 phrases : pourquoi ce post existe, quel rôle dans le feed, quel effet sur le viewer]

## Produit

**[NOM PRODUIT]** — [Description courte]
Slug recette : `[slug-kebab-case]`

> Ne PAS inclure de lien vers la photo référence ni la recette complète.
> L'input mapper résout automatiquement produit → photo + recette.

---

## Direction visuelle (selon le traitement)

### Si traitement = `photo-pure`

| Champ | Valeur |
|-------|--------|
| Source | [archive: `chemin/photo.png` / ia] |
| Direction photo | [Ce qu'on veut montrer — angle, cadrage, ambiance] |
| Fond | [ID fond ambre — ex: `ambre-halo` / charbon] |

> Zéro overlay, zéro élément graphique. Le produit parle seul.
> Si source = `ia` : le produit est DÉCRIT précisément depuis la fiche recette (`_recettes/[slug].md`), PAS de photo référence jointe. Meilleurs résultats quand l'IA génère le produit à partir de la description.

### Si traitement = `knockout-band`

| Champ | Valeur |
|-------|--------|
| Source | [archive: `chemin/photo.png` / ia] |
| Direction photo | [Cadrage, ambiance, fond — le produit doit être hero en plein cadre] |
| Fond | [ambre / charbon] |
| Texte bande | [Nom du produit — ex: "STRICT BOEUF"] |

> Bande dome : charbon sur fond ambre, ambre sur fond charbon. Tagline en dessous.

### Si traitement = `masque`

| Champ | Valeur |
|-------|--------|
| Photo produit | [archive: `chemin/photo.png` — sera visible à travers les lettres] |
| Texte | [1-2 mots — ex: "STRICT BOEUF", "MAX POULET"] |
| Fond | ambre |

> Règle : le burger doit être zoomé pour remplir 60%+ de chaque lettre. Un seul burger continu dans tout le texte.

### Si traitement = `masque-inverse`

| Champ | Valeur |
|-------|--------|
| Photo produit | [archive: `chemin/photo.png` — visible en fond, luminosité boostée] |
| Texte | [1-2 mots en ambre solide par-dessus la photo] |
| Fond | charbon |

### Si traitement = `texture-fill`

| Champ | Valeur |
|-------|--------|
| Texte | [1-3 lignes — ex: "LES BONS / LIPIDES"] |
| Texture | [bun-sesame-svg / bun-macro-photo / custom: description] |
| Fond | [ambre / charbon] |

> Variabilité : la texture doit correspondre au sujet (bun sésame pour les burgers, croûte poulet pour le poulet, etc.)

### Si traitement = `carousel`

| Champ | Valeur |
|-------|--------|
| Thématique | [Ex: "Les bons lipides", "Air fryer vs cuisson traditionnelle"] |
| Nombre de slides | [3-7] |
| Couverture | texture-fill SVG sésame (automatique) |
| Résumé contenu par slide | [Titres/angles de chaque slide] |

> Le contenu détaillé des slides est rédigé par l'agent copywriter carousel (`/carousel-producer`).
> Le brief ne contient que la thématique et la structure générale.

### Si traitement = `triptych`

| Champ | Valeur |
|-------|--------|
| Source | [archive / ia — doit être panoramique ou adaptable] |
| Texte panoramique | [Le mot/phrase qui traverse les 3 posts — ex: "STRICT BOEUF"] |
| Fond | [ambre / charbon] |
| Format | [3240x1080 (1:1) / 3240x1350 (4:5)] |

> Prévoir zone morte ~4px aux points de coupe (1080px et 2160px). Chaque post doit fonctionner seul ET en grille.

---

## Direction Caption

| Champ | Valeur |
|-------|--------|
| Angle | [L'angle éditorial — ex: "Générosité, double steak, le burger qui ne fait pas semblant"] |
| Ton | [Direct / Chaleureux / Provocateur / Éducatif / Storytelling] |
| CTA | [Call to action — ex: "Viens goûter" / "Tag un pote" / "Lien en bio" / "Aucun"] |
| Mention prix | [Oui (préciser) / Non] |
| Mention macros | [Oui (headline / dans le corps) / Non] |
| Mention fournisseurs | [Oui (lesquels) / Non] |
| Mots/phrases à inclure | [Optionnel — ex: "cheat meal qui n'en est pas un"] |
| Mots/phrases à éviter | [Optionnel — ex: "healthy", "régime", "sauce maison"] |

> La caption est générée APRÈS l'image par le skill `/caption-writer`.
> Pour les carrousels, la caption COMPLÈTE le contenu (angle différent, approfondissement, punch line).
> Ne PAS écrire la caption complète dans le brief.

---

## Contraintes

- [Contrainte visuelle 1 — ex: "Hero shot dessert, textures couches visibles"]
- [Contrainte visuelle 2 — ex: "Angle différent du post précédent"]
- Food Porn Dial : [X]/10
- Brand props : [oui (l'art director choisit) / non (pas de branding) / forcé: wrapper-burger]

---

## Étape suivante

> Exécuter `/instagram-producer [DATE]` pour les posts photo/knockout/masque.
> Exécuter `/carousel-producer [THEMATIQUE]` pour les carrousels.
> Le pipeline détecte automatiquement le traitement et route vers le bon sous-pipeline.
