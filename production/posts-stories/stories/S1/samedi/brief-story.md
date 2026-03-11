# Brief Stories — S1 Samedi (2026-03-15)

> **Pilier du jour** : Confiance (Preuve sociale) — Pas de post, jour de rush
> **Objectif stratégique** : Dernier jour de service de la semaine. On continue à construire le highlight LA CARTE (wrap = format différent des burgers) et on crée l'anticipation pour le post fondateurs de demain.
> **Persona cible** : Actifs pressés (wrap = rapide à manger) + Tous (teaser)
> **Ref stratégie** : Phase 1 §1.4 — "page vivante et cohérente" + §1.3 — crédibilité locale

---

## Story 1 — Teaser S1-04 : les visages derrière la marque

| Champ | Valeur |
|-------|--------|
| Type | Teaser |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `teaser-post.html` |

### Objectif

Préparer le post fondateurs de demain. La semaine a montré les produits et le process — demain, les gens découvrent qui est derrière tout ça. Le teaser humanise avant même de montrer.

### Contenu

Post teasé : `production/posts-stories/posts/periode-1/S1/2026-03-16/` (Romain & Dorian — portrait fondateurs)
Hook : `Demain, on vous présente les <em>visages</em> derrière StrictFood's.`
Date de publication : `Demain`
Sous-texte : `Derrière chaque burger, il y a deux passionnés. Rendez-vous sur le feed.`
Image de fond : `public/images/photos-references/contexte/salle-restaurant/accueil.jpeg`

---

## Story 2 — Fiche Produit : STRICT Wrap Boeuf

| Champ | Valeur |
|-------|--------|
| Type | Fiche Produit |
| Highlight | LA CARTE |
| Qui produit | Pipeline |
| Template | `fiche-produit.html` |

### Objectif

Révéler un format que les abonnés ne connaissent peut-être pas : le wrap. Jusqu'ici, le feed et les stories n'ont montré que des burgers et du dessert. Le wrap est parfait pour le persona "actif pressé" — rapide, complet, transportable. Troisième entrée dans le highlight LA CARTE.

### Contenu

**Produit** : STRICT Wrap Boeuf
Slug recette : `strict-wrap-boeuf`

> Le story-data-mapper résout automatiquement les données nutritionnelles depuis `_recettes/strict-wrap-boeuf.md`.
> Ne PAS copier les macros ici — c'est le rôle de l'agent.

Tagline : `Le cheat meal qui n'en est pas un`
Bénéfices à mettre en avant :
1. Format wrap, pratique à emporter
2. Même viande Boucherie Labourde que les burgers
3. Profil macro complet en un seul wrap

Image de fond : `aucune`

---

## Contraintes

- DA : Dark Food Premium (fond Charbon #141210, accents Cuivre Braisé #BF8522)
- Le teaser ne montre PAS les fondateurs — garder le suspense
- Le wrap diversifie la perception de la carte (pas que des burgers)

## Étape suivante

> Exécuter `/story-producer S1 samedi` pour produire ces stories.
