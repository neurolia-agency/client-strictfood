# Brief Stories — S1 Mercredi (2026-03-12)

> **Pilier du jour** : La Cuisine — Post S1-02 publié aujourd'hui (Carrousel "Du boucher à l'assiette")
> **Objectif stratégique** : Jour 1 des stories S1. Installer la présence story quotidienne et présenter le produit star en format Vitrine pour capitaliser sur le hero shot de lundi.
> **Persona cible** : Actifs pressés
> **Ref stratégie** : Phase 1 §3.1 — "Installer le Dark Food Premium comme signature reconnaissable en 4-5 posts"

---

## Story 1 — STRICT Boeuf

| Champ | Valeur |
|-------|--------|
| Type | Fiche Produit |
| Highlight | LA CARTE |
| Qui produit | Pipeline |
| Template | `produit-vitrine.html` |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Présenter le burger signature en format story Vitrine. Le post du lundi (S1-01) a introduit le STRICT Boeuf en photo — cette story le met en fiche produit avec macros et prix, pour ceux qui ont raté le post ou veulent les détails rapides.

### Contenu

**Produit** : STRICT Boeuf
Slug recette : `strict-boeuf`

Accroche : `Le burger qui bat tes macros`
Macro star : `53g protéines`
Badge : `ARTISANAL`
Prix : `12,99€`
Tagline : `Le cheat meal qui n'en est pas un.`

Image hero : `public/images/photos-references/produits-source/burgers-black/strict-boeuf.png`

---

## Story 2 — Boeuf ou Poulet ?

| Champ | Valeur |
|-------|--------|
| Type | Interactif |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `interactif.html` |
| Mood | cuivre |
| Image | visible |
| Brand props | aucun |

### Objectif

Premier interactif de la semaine. Engager l'audience sur la préférence viande — question simple, universelle, qui pousse au tap. Alimente aussi le Highlight LA CARTE indirectement en montrant qu'il y a du choix.

### Contenu

Format sticker : Sondage 2 choix
Question : `Team Boeuf ou Team Poulet ?`
Option A : `Boeuf`
Option A Emoji : `🥩`
Option B : `Poulet`
Option B Emoji : `🍗`
Image de fond : `public/images/photos-references/contexte/cuisine/cuisine-full.jpeg`
Alignement photo : `—`
Tagline : `Le cheat meal qui n'en est pas un.`

---

## Contraintes

- DA : Vitrine (Story 1) + Dark Food Premium (Story 2)
- Mood : cuivre — standard, première semaine, on installe l'identité
- Image : hero pour la Fiche Produit (produit plein cadre), visible pour l'Interactif
- Sublimation : les templates appliquent automatiquement `text-depth` (headlines), `mark-tape` (body/info), `brightness(1.2)` (accents). Aucune action manuelle requise.

## Logique de variation de template

| Type | Template | Style |
|------|----------|-------|
| Fiche Produit | `produit-vitrine.html` | **Vitrine** (coloré, produit hero) |
| Interactif | `interactif.html` | Dark Premium |

## Étape suivante

> Exécuter `/story-producer S1 mercredi` pour produire ces stories.
