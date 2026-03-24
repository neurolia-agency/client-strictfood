# Brief Stories — S2 Dimanche (2026-03-23)

> **Pilier du jour** : Le Plat — Post #8 STRICT Wrap Poulet (compositing-ia)
> **Objectif strategique** : Jour du post Wrap Poulet. Les stories completent avec la fiche produit du Wrap, un rappel de localisation, et un visuel IA full-frame du Wrap. Triptyque : decouverte → ancrage lieu → impact visuel.
> **Persona cible** : Actifs presses + Sportifs
> **Ref strategie** : Phase 1 §2.1 — "presenter chaque produit de la carte"

---

## Story 1 — Fiche Produit : STRICT Wrap Poulet

| Champ | Valeur |
|-------|--------|
| Type | Fiche Produit |
| Mode | `template` |
| Highlight | LA CARTE |
| Qui produit | Pipeline |
| Template | `vitrine.html` (variante produit) |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Presenter le STRICT Wrap Poulet en fiche produit le jour de son post. La story Vitrine montre les macros et le prix, le post montre le food porn. Complementarite directe.

### Contenu

**Produit** : STRICT Wrap Poulet
Slug recette : `strict-wrap-poulet`

> Le story-data-mapper resout automatiquement les donnees nutritionnelles depuis `_recettes/strict-wrap-poulet.md`.

Accroche : `Meme viande, meme cuisson. Format wrap.`
Macro star : `42g proteines`
Badge : `BEST RATIO`
Prix : `10,99€`
Tagline : `Le cheat meal qui n'en est pas un`

Image hero : `public/images/photos-references/produits-source/wraps/strict-wrap-poulet.png`

---

## Story 2 — Lieu : 88 Chemin de la Roseraie

| Champ | Valeur |
|-------|--------|
| Type | Annonce |
| Mode | `template` |
| Highlight | NOUS TROUVER |
| Qui produit | Pipeline |
| Template | `annonce.html` |
| Mood | cuivre |
| Image | visible |
| Brand props | aucun |

### Objectif

Ancrer l'adresse et les horaires. Le dimanche est un jour de service — dernier jour avant la fermeture du lundi. Le highlight NOUS TROUVER complete celui du samedi (week-end → adresse).

### Contenu

Badge : `NOUS TROUVER`
Headline : `88 Chemin de la <em>Roseraie</em>`
Body : `Chateau Roussillon, Perpignan. <strong>Du mardi au dimanche</strong>, 11h-14h / 18h-22h.`
CTA : `aucun`
Image de fond : `public/images/photos-references/contexte/salle-restaurant/salle1.jpeg`
Alignement photo : `centre salle`
Tagline : `Le cheat meal qui n'en est pas un`

---

## Story 3 — Visuel IA : Wrap Poulet cinematique

| Champ | Valeur |
|-------|--------|
| Type | Visuel IA |
| Mode | `full-ia` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `irl-story.html` (overlay post-generation) |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Clore S2 avec un visuel IA ambitieux du Wrap Poulet. La coupe diagonale montre l'interieur (lamelles de poulet roti, mache, sauce poivron). Complementaire au post du jour qui montre le wrap entier en compositing — ici on voit l'interieur.

### Contenu

Sujet : `STRICT Wrap Poulet coupe en diagonale, interieur visible — lamelles de poulet roti avec croute Maillard, feuilles de mache rondes, filet de sauce poivron jaune-orange, le tout dans une tortilla. Fond charbon profond. Le wrap est le seul element visible, en plein cadre.`
Direction artistique : `Eclairage cuivre lateral revelant les textures internes. La coupe diagonale est nette et propre — on voit chaque couche. Tons cuivres chauds sur le poulet et la sauce. Fond charbon ultra-sombre. Grain film subtil. Format portrait 9:16. Style cinematique, pas illustration. Hyper-realiste.`
Texte overlay : `—`

---

## Contraintes

- DA : 2 templates (Fiche Vitrine + Annonce Dark Premium) + 1 full-ia
- Mood : cuivre sur les 3 stories
- Jour du post #8 Wrap Poulet : la fiche produit story + le visuel IA sont complementaires au post
- La fiche Wrap Poulet ne doit PAS utiliser la meme photo que le post (le post utilise `produits-source/wraps/strict-wrap-poulet.png` en compositing — la fiche Vitrine l'utilise aussi mais c'est le jour du post, exception acceptee)
- Full-ia : le wrap contient du poulet roti en LAMELLES (pas en cubes, pas effiloche), de la mache (pas roquette), de la sauce poivron jaune-orange (pas rouge)
- Les 2 stories NOUS TROUVER (sam horaires + dim adresse) forment une paire

## Etape suivante

> Executer `/story-producer S2 dimanche` pour produire ces stories.
