# Brief Stories — S2 Vendredi (2026-03-21)

> **Pilier du jour** : La Cuisine (Process & Artisans) — Post S2-07 publié aujourd'hui (Myfitcheese, irl-sublimation)
> **Objectif stratégique** : Accompagner le post artisan avec un nouveau produit (Falafel) et un sondage engagement. La sublimation du Falafel clôt la journée avec un visuel fort.
> **Persona cible** : Végétariens/flexitariens (falafel) + Sportifs (engagement)
> **Ref stratégie** : Phase 1 §1.4 — "Diversifier les produits présentés pour élargir la perception de la carte"

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

Révéler l'option végétarienne de StrictFood. Élargir la perception : pas que des burgers viande, il y a aussi un falafel artisanal. Le mood feuille (vert) est naturel pour un produit végétal.

### Contenu

**Produit** : STRICT Végé Falafel
Slug recette : `strict-vege-falafel`

> Le story-data-mapper résout automatiquement les données nutritionnelles depuis `_recettes/strict-vege-falafel.md`.

Accroche : `Le végé qui n'a rien à envier`
Macro star : `[résolu par agent]`
Badge : `VÉGÉTARIEN`
Prix : `[résolu par agent]`
Tagline : `Le cheat meal qui n'en est pas un`

Image hero : `public/images/photos-references/produits-source/burgers-black/strict-vege-falafel-black-1.png`

---

## Story 2 — Interactif VS : Bœuf vs Falafel

| Champ | Valeur |
|-------|--------|
| Type | Interactif |
| Mode | `template` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `interactif.html` |
| Mood | cuivre |
| Image | visible |
| Brand props | aucun |

### Objectif

Engager sur le choix viande vs végé. Montrer que StrictFood a les deux options. Le VS donne envie de goûter l'option qu'on n'a pas encore essayée.

### Contenu

Format sticker : Sondage 2 choix
Question : `Et toi, Team Viande ou Team Végé ?`
Option A : `Bœuf`
Option A Emoji : `🥩`
Option B : `Falafel`
Option B Emoji : `🧆`

**Mode visuel** : VS
Produit A : `STRICT Bœuf` — image : `public/images/photos-references/produits-source/burgers-black/strict-boeuf.png`
Produit B : `STRICT Falafel` — image : `public/images/photos-references/produits-source/burgers-black/strict-vege-falafel-black-2.png`

Tagline : `Le cheat meal qui n'en est pas un`

---

## Story 3 — Produit DA : Falafel sublimé

| Champ | Valeur |
|-------|--------|
| Type | Produit DA |
| Mode | `irl-sublimation` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `irl-story.html` (overlay post-sublimation) |
| Mood | feuille |
| Image | hero |
| Brand props | aucun |

### Objectif

Clore la journée avec un visuel sublimé du Falafel en 9:16. Montrer que même le végé est traité avec le même niveau de soin visuel que les burgers viande.

### Contenu

Photo source : `public/images/photos-references/dark-bg/burger-falafel-dark-bg.jpg`
Direction sublimation : `Renforcer les tons chauds sur la galette falafel, accentuer les verts de la mâche, fond charbon profond, grain film`
Texte overlay : `—`

---

## Contraintes

- DA : Story 1 Vitrine + Story 2 Dark Premium + Story 3 Sublimation
- Mood : feuille (produit végétal = fraîcheur/nature), cuivre pour l'interactif
- Le falafel doit avoir le même niveau de food porn que les burgers — pas un produit de seconde zone
- La sublimation accentue les verts naturels du falafel

## Étape suivante

> Exécuter `/story-producer S2 vendredi` pour produire ces stories.
