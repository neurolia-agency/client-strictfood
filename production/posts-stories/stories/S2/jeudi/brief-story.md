# Brief Stories — S2 Jeudi (2026-03-20)

> **Pilier du jour** : Le Plat — Pas de post
> **Objectif stratégique** : On dévoile le STRICT MAX Bœuf (double steak) en fiche + sublimation. Mood grenat = intensité. Journée dédiée à la puissance du produit phare pour sportifs.
> **Persona cible** : Sportifs
> **Ref stratégie** : Phase 1 §1.4 — "construire une présence crédible et cohérente"

---

## Story 1 — Fiche Produit : STRICT MAX Bœuf

| Champ | Valeur |
|-------|--------|
| Type | Fiche Produit |
| Mode | `template` |
| Highlight | LA CARTE |
| Qui produit | Pipeline |
| Template | `vitrine.html` (variante produit) |
| Mood | grenat |
| Image | hero |
| Brand props | aucun |

### Objectif

Introduire le STRICT MAX Bœuf — le double steak avec 97g de protéines. Le mood grenat marque l'intensité de ce produit hors norme. Nouveau produit dans le highlight LA CARTE.

### Contenu

**Produit** : STRICT MAX Bœuf
Slug recette : `strict-max-boeuf`

> Le story-data-mapper résout automatiquement les données nutritionnelles depuis `_recettes/strict-max-boeuf.md`.

Accroche : `Double steak, double ambition`
Macro star : `97g protéines`
Badge : `DOUBLE STEAK`
Prix : `14,99€`
Tagline : `Le cheat meal qui n'en est pas un`

Image hero : `public/images/photos-references/produits-source/strict-max-boeuf.png`

---

## Story 2 — Produit DA : MAX Bœuf sublimé

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

Sublimer le STRICT MAX Bœuf en plein cadre 9:16. Le double steak en vedette, les ombres profondes et les tons grenat renforcent le caractère intense du produit. Clôture visuelle de la journée MAX.

### Contenu

Photo source : `public/images/photos-references/dark-bg/burger-double-boeuf-dark-bg.jpg`
Direction sublimation : `Ombres profondes, double steak en vedette, textures viande accentuées, tons grenat chauds, grain film`
Texte overlay : `—`

---

## Contraintes

- DA : Story 1 Vitrine (Fiche Produit) + Story 2 Sublimation
- Mood : grenat sur les deux stories — intensité cohérente pour le produit MAX
- La sublimation doit accentuer la taille du double steak — c'est le différenciateur visuel
- Pas de troisième story — journée concentrée sur 2 stories fortes

## Logique de variation de template

| Type | Template | Famille |
|------|----------|---------|
| Fiche Produit | `vitrine.html` (variante produit) | Vitrine |
| Produit DA | `irl-story.html` (overlay post-sublimation) | Dark Premium |

## Étape suivante

> Exécuter `/story-producer S2 jeudi` pour produire ces stories.
