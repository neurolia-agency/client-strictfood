# Brief Stories — S2 Dimanche (2026-03-23)

> **Pilier du jour** : Le Plat (Food Porn Premium) — Post S2-08 publié aujourd'hui (STRICT Wrap Poulet, compositing-ia)
> **Objectif stratégique** : Clore S2 avec le wrap. Introduire le format wrap dans LA CARTE, rappeler l'adresse (fermé mais on prépare le retour mardi), et frapper fort avec un visuel IA du wrap.
> **Persona cible** : Actifs pressés (wrap = rapide, petit prix) + Sportifs (60,5g prot)
> **Ref stratégie** : Phase 1 §1.4 — "Diversifier les produits présentés" + montrer la gamme au-delà des burgers

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

Accompagner le post wrap avec la fiche macros. Le wrap a le meilleur ratio protéines/prix de la carte (60,5g pour 8,99€). Les sportifs qui comptent leurs macros et leur budget sont directement ciblés.

### Contenu

**Produit** : STRICT Wrap Poulet
Slug recette : `strict-wrap-poulet`

> Le story-data-mapper résout automatiquement les données nutritionnelles depuis `_recettes/strict-wrap-poulet.md`.

Accroche : `60g de prot. 8,99€. Point.`
Macro star : `60,5g protéines`
Badge : `MEILLEUR RATIO`
Prix : `8,99€`
Tagline : `Le cheat meal qui n'en est pas un`

Image hero : `public/images/photos-references/produits-source/strict-wrap-poulet.png`

---

## Story 2 — Lieu : 88 Chemin de la Roseraie

| Champ | Valeur |
|-------|--------|
| Type | Lieu |
| Mode | `template` |
| Highlight | NOUS TROUVER |
| Qui produit | Pipeline |
| Template | `annonce.html` |
| Mood | cuivre |
| Image | visible |
| Brand props | aucun |

### Objectif

Rappeler l'adresse et les horaires. Le dimanche, le restaurant est fermé — c'est le moment de donner envie de revenir mardi.

### Contenu

Badge : `NOUS TROUVER`
Headline : `88 Chemin de la <em>Roseraie</em>`
Body : `Château Roussillon, Perpignan. <strong>On t'attend dès mardi</strong>, midi et soir.`
CTA : `aucun`
Image de fond : `public/images/photos-references/contexte/salle-restaurant/salle1.jpeg`
Alignement photo : `—`
Tagline : `Le cheat meal qui n'en est pas un`

---

## Story 3 — Visuel IA : Wrap Poulet cinématique

| Champ | Valeur |
|-------|--------|
| Type | Visuel IA |
| Mode | `full-ia` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `irl-story.html` (overlay post-génération) |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Clore S2 avec un visuel IA impactant du wrap. Format 9:16 plein cadre, ambiance cinématique. Le full-ia permet une mise en scène impossible en photo réelle.

### Contenu

Sujet : `STRICT Wrap Poulet en close-up, coupé en diagonale, intérieur visible (poulet grillé en lamelles, mâche, parmesan miettes, sauce poivron), vapeur subtile`
Direction artistique : `Cinématique, éclairage latéral chaud cuivré, fond cuisine sombre (inox, surfaces flou), grain film, format 9:16 portrait, contre-plongée 3/4`
Texte overlay : `—`

---

## Contraintes

- DA : Story 1 Vitrine + Story 2 Dark Premium + Story 3 Full-IA
- Mood : cuivre — standard, on clôt la semaine avec cohérence
- Le wrap doit être visuellement distinct des burgers (forme allongée vs ronde)
- Le visuel IA respecte les règles de réalisme documentaire (pipeline.md Style v2)
- Résolution 9:16 (1080×1920) pour le full-ia

## Étape suivante

> Exécuter `/story-producer S2 dimanche` pour produire ces stories.
