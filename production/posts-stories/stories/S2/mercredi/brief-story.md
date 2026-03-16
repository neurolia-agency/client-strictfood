# Brief Stories — S2 Mercredi (2026-03-19)

> **Pilier du jour** : Les Macros (Nutrition & Éducation) — Post S2-06 publié aujourd'hui (Comparaison macros, template carrousel)
> **Objectif stratégique** : Journée nutrition. Accompagner le post infographique avec un éducatif complémentaire et présenter le STRICT MAX Bœuf (nouveau produit carte). Le compositing-irl montre le produit en contexte réel.
> **Persona cible** : Sportifs (macros) + Actifs pressés (découverte MAX)
> **Ref stratégie** : Phase 1 §3.1 — "Installer le Dark Food Premium comme signature reconnaissable"

---

## Story 1 — Éducatif : Notre burger vs burger classique

| Champ | Valeur |
|-------|--------|
| Type | Éducatif |
| Mode | `template` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `educatif.html` |
| Mood | feuille |
| Image | visible |
| Brand props | aucun |

### Objectif

Companion du post macros. Résumer la comparaison en un seul chiffre impactant. Les abonnés qui voient la story en premier iront checker le post pour le détail.

### Contenu

Titre : `596 kcal, <em>53g</em> de protéines`
Chiffre clé : `53` + `g de protéines`
Explication : `Notre STRICT Bœuf : 596 kcal, 53g de prot. Un burger classique : ~900 kcal, 28g de prot. <strong>Même plaisir, pas les mêmes chiffres.</strong>`

Comparaison VS : oui
- Strict Food's : `53` `g protéines`
- Classique : `Burger fast-food` `28` `g protéines`

Image de fond : `public/images/photos-references/dark-bg/burger-simple-boeuf-dark-bg.png`
Alignement photo : `—`
Image produit : `aucune`

---

## Story 2 — Fiche Produit : STRICT MAX Bœuf

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

Introduire le STRICT MAX Bœuf — le double steak. Nouveau produit dans le highlight LA CARTE. Le mood grenat (intense) marque la différence avec le STRICT Bœuf standard.

### Contenu

**Produit** : STRICT MAX Bœuf
Slug recette : `strict-max-boeuf`

> Le story-data-mapper résout automatiquement les données nutritionnelles depuis `_recettes/strict-max-boeuf.md`.

Accroche : `Double steak, double ambition`
Macro star : `[résolu par agent]`
Badge : `DOUBLE STEAK`
Prix : `[résolu par agent]`
Tagline : `Le cheat meal qui n'en est pas un`

Image hero : `public/images/photos-references/produits-source/strict-max-boeuf.png`

---

## Story 3 — Produit en situation : MAX Bœuf sur comptoir

| Champ | Valeur |
|-------|--------|
| Type | Produit en situation |
| Mode | `compositing-irl` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `irl-story.html` (overlay post-compositing) |
| Mood | grenat |
| Image | hero |
| Brand props | aucun |

### Objectif

Montrer le MAX Bœuf dans son environnement réel — posé sur le comptoir du restaurant. Le compositing IRL crée une immersion. Le spectateur se projette dans le lieu avec le produit.

### Contenu

**compositing-irl** :
Photo produit : `public/images/photos-references/produits-source/strict-max-boeuf.png`
Photo lieu : `public/images/photos-references/contexte/salle-restaurant/accueil.jpeg`
Intention compositing : `Le MAX Bœuf posé sur le comptoir d'accueil, éclairage naturel chaud du restaurant, léger flou en arrière-plan`

Texte overlay : `—`

---

## Contraintes

- DA : Story 1 Dark Premium + Story 2 Vitrine + Story 3 Compositing
- Mood : feuille (éducatif) + grenat (MAX = intensité, passion)
- Le compositing doit rester réaliste — le burger doit paraître posé naturellement
- Le MAX Bœuf est plus impressionnant visuellement que le standard — exploiter la taille

## Étape suivante

> Exécuter `/story-producer S2 mercredi` pour produire ces stories.
