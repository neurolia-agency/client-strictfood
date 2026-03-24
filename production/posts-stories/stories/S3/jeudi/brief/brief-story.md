# Brief Stories — S3 Jeudi (2026-03-27)

> **Pilier du jour** : La Cuisine / Le Plat — Pas de post
> **Objectif strategique** : IRL preparation + service. Interactif snacks (premiere apparition des frites dans le feed). Journee equilibree entre coulisses et engagement.
> **Persona cible** : Tous
> **Ref strategie** : Phase 1 §2.3 — "engager via les sondages et les VS"

---

## Story 1 — IRL : Decoupe ingredients

| Champ | Valeur |
|-------|--------|
| Type | IRL |
| Mode | `irl` |
| Highlight | COULISSES |
| Qui produit | Romain/Dorian (photo) + Pipeline (overlay) |
| Template | `irl-story.html` |
| Mood | feuille |
| Image | hero |
| Brand props | aucun |

### Objectif

Montrer la fraicheur des ingredients — la decoupe est le premier geste visible de la preparation. Oignons rouges, mache, tomates — les couleurs vives contrastent avec les gants noirs. Le mood feuille renforce l'angle "frais".

### Contenu

Photo : `[A FOURNIR par Romain/Dorian — jeudi preparation]`
Texte overlay : `Frais du jour.`
Position texte : bas
Filtre : leger

> **Fallback** : si pas de photo fraiche, utiliser `public/contenu-instagram/2025-10-03_15-57-14_UTC_2.jpg` (decoupe viande plongee)
> **Cadrage souhaite** : Plan rapproche, planche + couteau, oignons rouges ou mache en cours de decoupe. Couleurs vives des legumes. Pas de visage.

---

## Story 2 — IRL : Plateau pret a servir

| Champ | Valeur |
|-------|--------|
| Type | IRL |
| Mode | `irl` |
| Highlight | — |
| Qui produit | Romain/Dorian (photo) + Pipeline (overlay) |
| Template | `irl-story.html` |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Le plateau complet pret a partir — burger noir + frites + boisson. C'est le money shot du service : tout est la, tout est pret, tout donne envie. La legere plongee montre l'ensemble d'un coup.

### Contenu

Photo : `[A FOURNIR par Romain/Dorian — jeudi service]`
Texte overlay : `—`
Position texte : bas
Filtre : leger

> **Cadrage souhaite** : Legere plongee (~30 degres), plateau complet visible (burger pain noir + frites + boisson). Comptoir en arriere-plan flou. Pas de visage.

---

## Story 3 — Interactif VS : Frites Classiques ou Patates Douces ?

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

Introduire les frites dans le feed (jamais couvertes en story). L'interactif VS genere de l'engagement et fait decouvrir les deux options. Axe completement nouveau par rapport a S1-S2 (burgers, desserts).

### Contenu

Format sticker : Sondage 2 choix
Question : `Classiques ou Patates Douces ?`
Option A : `Classiques`
Option B : `Patates Douces`
Tagline : `Le cheat meal qui n'en est pas un`

**Mode visuel** : VS

Produit A : `Classiques` — image : `public/images/photos-references/produits-source/snacks/frites-classiques.png`
Produit B : `Patates Douces` — image : `public/images/photos-references/produits-source/snacks/frites-patates-douces.png`

---

## Contraintes

- DA : 2 IRL + 1 template interactif
- Mood : feuille pour la decoupe (fraicheur ingredients), cuivre pour le reste
- L'interactif VS affiche les deux produits en split — les photos doivent etre sur fond sombre
- Axe interactif different de S1 (Boeuf/Poulet, Cookie/Tiramisu) et S2 (Simple/MAX, Viande/Vege)
- Photos IRL : prises pendant la preparation et le service du jeudi

## Etape suivante

> Executer `/story-producer S3 jeudi` pour produire ces stories.
