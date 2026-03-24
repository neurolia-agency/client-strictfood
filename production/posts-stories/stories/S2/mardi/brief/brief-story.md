# Brief Stories — S2 Mardi (2026-03-18)

> **Pilier du jour** : La Cuisine / Confiance — Pas de post
> **Objectif stratégique** : Pas de post. On ouvre un nouveau produit (Falafel = option végé) et un nouvel artisan (Labourde). Le compositing montre le Falafel en situation.
> **Persona cible** : Locavores + Tous
> **Ref stratégie** : Phase 1 §3.2 — "présenter les artisans partenaires"

---

## Story 1 — Fiche Produit : STRICT Végé Falafel

| Champ | Valeur |
|-------|--------|
| Type | Fiche Produit |
| Mode | `template` |
| Highlight | LA CARTE |
| Qui produit | Pipeline |
| Template | `vitrine.html` (variante produit) |
| Mood | feuille |
| Image | hero |
| Brand props | aucun |

### Objectif

Présenter l'option végétarienne de la carte. Le STRICT Végé Falafel élargit la cible au-delà des carnivores et montre que StrictFood pense à tous les profils. Première apparition de ce produit dans les stories.

### Contenu

**Produit** : STRICT Végé Falafel
Slug recette : `strict-vege-falafel`

> Le story-data-mapper résout automatiquement les données nutritionnelles depuis `_recettes/strict-vege-falafel.md`.

Accroche : `Le végé qui a du caractère`
Macro star : `35.5g protéines`
Badge : `VÉGÉTARIEN`
Prix : `12,99€`
Tagline : `Le cheat meal qui n'en est pas un`

Image hero : `public/images/photos-references/produits-source/strict-vege-falafel.png`

---

## Story 2 — Focus Ingrédient : Viande Boucherie Labourde

| Champ | Valeur |
|-------|--------|
| Type | Focus Ingrédient |
| Mode | `template` |
| Highlight | NOS ARTISANS |
| Qui produit | Pipeline |
| Template | `vitrine.html` (variante composant) |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Présenter le fournisseur viande de StrictFood. La Boucherie Labourde ancre la traçabilité locale. Les locavores veulent savoir d'où vient la viande — cette story répond à la question.

### Contenu

**Ingrédient** : Viande bœuf
Artisan : `Boucherie Labourde`
Localité : `Perpignan`
Fait clé : `Notre viande vient de la Boucherie Labourde, à Perpignan. Locale, traçable, artisanale.`
Dans le : `STRICT Bœuf, STRICT MAX Bœuf, STRICT Wrap Bœuf`
Tagline : `Le cheat meal qui n'en est pas un`

Image hero : `public/contenu-instagram/2025-10-03_15-57-14_UTC_1.jpg` (découpe viande, vue latérale)

---

## Story 3 — Produit en situation : Falafel sur comptoir

| Champ | Valeur |
|-------|--------|
| Type | Produit en situation |
| Mode | `compositing-irl` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `irl-story.html` (overlay post-compositing) |
| Mood | feuille |
| Image | hero |
| Brand props | aucun |

### Objectif

Montrer le Falafel dans son environnement réel — posé sur une table en salle. Le compositing IRL crée une immersion. Le spectateur se projette dans le restaurant avec le produit végétarien.

### Contenu

**compositing-irl** :
Photo produit : `public/images/photos-references/produits-source/strict-vege-falafel.png`
Photo lieu : `public/images/photos-references/contexte/salle-restaurant/salle1.jpeg`
Intention compositing : `Falafel posé sur table en salle, éclairage chaud restaurant, léger flou arrière-plan`

Texte overlay : `—`

---

## Contraintes

- DA : Story 1 Vitrine (Fiche Produit) + Story 2 Vitrine (Focus Ingrédient) + Story 3 Compositing IRL
- Mood : feuille pour le Falafel (fraîcheur végétale), cuivre pour l'artisan (authenticité)
- Le compositing doit rester réaliste — le burger doit paraître posé naturellement sur la table
- Le Focus Ingrédient met en avant l'artisan, pas le produit fini

## Logique de variation de template

| Type | Template | Famille |
|------|----------|---------|
| Fiche Produit | `vitrine.html` (variante produit) | Vitrine |
| Focus Ingrédient | `vitrine.html` (variante composant) | Vitrine |
| Produit en situation | `irl-story.html` (overlay post-compositing) | Dark Premium |

## Étape suivante

> Exécuter `/story-producer S2 mardi` pour produire ces stories.
