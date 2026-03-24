# Brief Story — Hors-Planning (2026-03-20)

> **Pilier du jour** : Le Plat — Hors planning
> **Objectif strategique** : Montrer la gamme complete StrictFood dans un contexte cuisine authentique — "photo de famille" des burgers
> **Persona cible** : Tous
> **Ref strategie** : Phase 1 — "Le plat est le heros"

---

## Story 1 — Photo de famille

| Champ | Valeur |
|-------|--------|
| Type | Visuel IA (scene-ia) |
| Mode | `scene-ia` |
| Highlight | LA CARTE |
| Qui produit | Pipeline |
| Template | `irl-story.html` (overlay logo + tagline) |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Presenter TOUS les burgers StrictFood reunis sur un plan de travail cuisine comme une "photo de famille" naturelle. Effet vitrine produit, impact visuel maximal (6 produits visibles).

### Contenu — Scene IA

**Photo scene (base)** : `public/images/photos-references/contexte/cuisine/cuisine-full-3.jpeg`

**Sujets a integrer (IA)** :

| Position | Produit | Slug recette | Photo reference (concept) |
|----------|---------|-------------|--------------------------|
| Avant-plan gauche | STRICT Boeuf | `strict-boeuf` | `.../burgers-black/strict-boeuf/strict-boeuf-main.png` |
| Avant-plan centre-gauche | STRICT Poulet | `strict-poulet` | `.../burgers-black/strict-poulet/strict-poulet-main.png` |
| Avant-plan centre-droit | STRICT Vege Falafel | `strict-vege-falafel` | `.../burgers-black/strict-vege/strict-vege-main.png` |
| Avant-plan droit | STRICT Wrap Boeuf | `strict-wrap-boeuf` | `public/images/photos-references/produits-source/strict-wrap-boeuf.png` |
| Arriere-plan gauche | STRICT MAX Boeuf | `strict-max-boeuf` | `.../burgers-black/strict-max-boeuf/strict-max-boeuf-black-1.png` |
| Arriere-plan droit | STRICT MAX Poulet | `strict-max-poulet` | `.../burgers-black/strict-max-poulet/strict-max-poulet-black-1.png` |

**Direction scene** :
- Les 4 produits front sont poses naturellement sur le plan de travail cuisine, espaces regulierement
- Les 2 MAX sont juste derriere, legerement sureleves (sur une planche a decouper ou direct sur le plan de travail en hauteur)
- Papier kraft STRICT FOOD'S sous chaque burger (comme au restaurant)
- Eclairage coherent avec la cuisine reelle — lumiere blanche industrielle, pas de warm shift excessif
- Leger angle plongee (~30 degres) pour voir tous les produits
- Chaque burger au PAIN NOIR sesame, nettement identifiable
- Ambiance "fin de preparation" : propre mais vivante (quelques miettes de sesame, un peu de sauce)

**Texte overlay** : `La <em>famille</em> au complet`

### Direction Caption

Angle : fierte de la gamme, invitation a decouvrir ou choisir son prefere
Ton : complice, un peu taquin ("Lequel tu prends en premier ?")
CTA : engagement (question en caption)

---

## Contraintes

- DA : Dark Food Premium (overlay minimal via irl-story.html)
- PAIN NOIR obligatoire sur TOUS les burgers
- Scene fidele a la vraie cuisine StrictFood (cf. photos reference cuisine/)
- Format : 1080x1920 (story Instagram)
- Resolution : 4K generation puis crop/resize
- Mood : cuivre
