# Brief Stories — S3 Dimanche (2026-03-30)

> **Pilier du jour** : Le Plat / Confiance — Pas de post
> **Objectif strategique** : Dernier jour ouvert de la semaine (fermeture lundi). Sublimation MAX Boeuf vapeur + 2e compositing MAX Poulet (angle intime) + educatif pain noir. Mix food porn + education pour boucler la semaine.
> **Persona cible** : Sportifs + Locavores
> **Ref strategie** : Phase 1 §2.1 — "presenter chaque produit de la carte"

---

## Story 1 — Produit DA : STRICT MAX Boeuf vapeur

| Champ | Valeur |
|-------|--------|
| Type | Produit DA |
| Mode | `irl-sublimation` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `irl-story.html` (overlay post-sublimation) |
| Mood | grenat |
| Image | hero |
| Brand props | aucun |

### Objectif

Le STRICT MAX Boeuf dans son expression la plus intense — vapeur epaisse, chaleur du grill, doubles steaks en vedette. Le mood grenat marque l'intensite et la puissance du produit "MAX". La vapeur ajoutee cree l'impression de sortir du grill a l'instant.

### Contenu

Photo source : `public/images/photos-references/produits-source/burgers-black/strict-max-boeuf/strict-max-boeuf-eclate.png`
Direction sublimation : `Vapeur epaisse ajoutee — fumee lente montante, chaleur palpable. Les doubles steaks sont le point focal — textures viande accentuees, Maillard prononcee. Tons grenat chauds (pas cuivre — grenat pour l'intensite MAX). Profondeur maximale des ombres. Grain film prononce. Full-frame 9:16.`
Texte overlay : `—`

---

## Story 2 — Produit en situation : STRICT MAX Poulet intime

| Champ | Valeur |
|-------|--------|
| Type | Produit en situation |
| Mode | `compositing-irl` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `irl-story.html` (overlay post-compositing) |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

2e apparition du STRICT MAX Poulet cette semaine — angle radicalement different de mercredi. Ici : intime, spot unique, "objet precieux". Le comptoir est a peine visible, tout le focus est sur le burger. Si mercredi montrait le contexte (plan moyen, salle visible), dimanche montre le produit seul dans la lumiere.

### Contenu

**compositing-irl** :
Photo produit : `public/images/photos-references/produits-source/burgers-black/strict-max-poulet/strict-max-poulet-black.png`
Photo lieu : `public/images/photos-references/contexte/salle-restaurant/accueil-crop-comptoir.jpeg`
Intention compositing : `MAX Poulet eclaire par un spot unique directionnel, obscurite quasi-totale autour. Effet "objet precieux" — le burger brille dans le noir. Le comptoir est a peine devine en arriere-plan (crop serre). Focus total sur le produit, pas sur le lieu. Contraste fort : burger lumineux / fond sombre.`

Texte overlay : `—`

---

## Story 3 — Educatif : Pain noir ≠ pain brule

| Champ | Valeur |
|-------|--------|
| Type | Educatif |
| Mode | `template` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `educatif.html` |
| Mood | feuille |
| Image | visible |
| Brand props | aucun |

### Objectif

Demystifier le pain noir — beaucoup de gens pensent que c'est du pain "brule" ou "colore". Cette story explique que c'est du charbon vegetal + sesame, fabrique par un artisan local (Pains du Soleil). Angle educatif nouveau (jamais couvert) qui cree un lien subtil avec l'artisan sans refaire un focus ingredient.

### Contenu

Titre : `Pain noir ≠ pain <em>brule</em>`
Chiffre cle : `100` + `% artisanal`
Explication : `Notre pain noir est fabrique par Pains du Soleil, a Perpignan. Charbon vegetal + sesame noir. Plus de fibres, zero colorant artificiel.`

Comparaison VS :
- Strict Food's : `Charbon vegetal` `artisanal`
- Classique : `Bun industriel` `conservateurs`

Image de fond : `public/images/photos-references/contexte/cuisine/air-fryers-pro.jpeg`
Alignement photo : `—`
Image produit : `aucune`

---

## Contraintes

- DA : 1 sublimation grenat + 1 compositing cuivre + 1 template educatif feuille
- 3 moods differents dans la journee — voulu : variete pour fermer la semaine
- Le compositing est un ANGLE DIFFERENT de mercredi (intime vs contexte) — pas le meme rendu
- Le MAX Boeuf en grenat et le MAX Poulet en cuivre creent une distinction visuelle entre les gammes
- L'educatif pain noir doit etre factuel — verifier les claims avec la fiche artisan Pains du Soleil
- Micro-saison A : concept `sensation-vapeur` (story 1) + `atmo-intime` (story 2)

## Etape suivante

> Executer `/story-producer S3 dimanche` pour produire ces stories.
