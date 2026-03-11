# Brief Stories — S1 Lundi (2026-03-10)

> **Pilier du jour** : Le Plat (Food Porn Premium) — Post S1-01 publié aujourd'hui
> **Objectif stratégique** : Premier jour du reboot Instagram. Installer le standard visuel DA et ancrer le positionnement macros/premium dès le premier contact.
> **Persona cible** : Sportifs (macros) + Actifs pressés (découverte)
> **Ref stratégie** : Phase 1 §1.4 — "page vivante et cohérente avec le positionnement premium"

---

## Story 1 — Teaser S1-01 : le reboot commence

| Champ | Valeur |
|-------|--------|
| Type | Teaser |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `teaser-post.html` |

### Objectif

Créer l'anticipation pour le tout premier post du reboot. Les abonnés doivent comprendre qu'un nouveau chapitre s'ouvre — et aller checker le feed. Premier contact avec la nouvelle DA Dark Food Premium en story.

### Contenu

Post teasé : `production/posts-stories/posts/periode-1/S1/2026-03-10/` (STRICT Boeuf — hero shot DA Dark Food Premium)
Hook : `Le reboot <em>commence</em>.`
Date de publication : `Aujourd'hui`
Sous-texte : `Nouveau chapitre pour StrictFood's. Regarde le feed.`
Image de fond : `public/images/photos-references/contexte/cuisine/cuisine-full.jpeg`

---

## Story 2 — Fiche Produit : STRICT Boeuf

| Champ | Valeur |
|-------|--------|
| Type | Fiche Produit |
| Highlight | LA CARTE |
| Qui produit | Pipeline |
| Template | `fiche-produit.html` |

### Objectif

Compléter le post S1-01 avec les données nutritionnelles. Le post montre le food porn, la story donne les chiffres. Les sportifs veulent ces macros. Premier contenu du highlight "LA CARTE" — on construit la bibliothèque produit dès le jour 1.

### Contenu

**Produit** : STRICT Boeuf
Slug recette : `strict-boeuf`

> Le story-data-mapper résout automatiquement les données nutritionnelles depuis `_recettes/strict-boeuf.md`.
> Ne PAS copier les macros ici — c'est le rôle de l'agent.

Tagline : `Le cheat meal qui n'en est pas un`
Bénéfices à mettre en avant :
1. Cuisson chaleur pulsée, zéro huile
2. Viande Boucherie Labourde, Perpignan
3. 53g de protéines par burger

Image de fond : `aucune`

---

## Contraintes

- DA : Dark Food Premium (fond Charbon #141210, accents Cuivre Braisé #BF8522)
- Le teaser doit être posté AVANT le post S1-01 (idéalement 2-3h avant)
- La fiche produit en deuxième story, après publication du post

## Étape suivante

> Exécuter `/story-producer S1 lundi` pour produire ces stories.
