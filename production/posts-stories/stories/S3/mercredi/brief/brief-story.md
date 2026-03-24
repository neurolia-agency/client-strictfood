# Brief Stories — S3 Mercredi (2026-03-26)

> **Pilier du jour** : Le Plat / Confiance — Pas de post
> **Objectif strategique** : IRL energie du rush + premiere apparition du STRICT MAX Poulet en compositing. Le MAX Poulet est le seul burger JAMAIS montre — cette story l'introduit dans le feed.
> **Persona cible** : Sportifs + Tous
> **Ref strategie** : Phase 1 §2.1 — "presenter chaque produit de la carte"

---

## Story 1 — IRL : Rush du midi

| Champ | Valeur |
|-------|--------|
| Type | IRL |
| Mode | `irl` |
| Highlight | COULISSES |
| Qui produit | Romain/Dorian (photo) + Pipeline (overlay) |
| Template | `irl-story.html` |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Capturer l'energie du service au pic du midi. Le restaurant plein, les clients qui attendent, le mouvement — c'est la preuve sociale en direct. Le rush = la demande existe.

### Contenu

Photo : `[A FOURNIR par Romain/Dorian — mercredi midi, pendant le rush]`
Texte overlay : `Rush.`
Position texte : bas
Filtre : leger

> **Cadrage souhaite** : Plan large, restaurant plein, file d'attente visible si possible. Mouvement, energie, flou de mouvement acceptable. Mur vegetal/neon en arriere-plan si angle le permet.

---

## Story 2 — IRL : Remise du sac

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

Le moment de la remise du sac au client — le geste final du service. Le sac StrictFood est visible, les mains se croisent au comptoir. Moment humain et commercial.

### Contenu

Photo : `[A FOURNIR par Romain/Dorian — mercredi pendant le service]`
Texte overlay : `Bonne degustation.`
Position texte : bas
Filtre : leger

> **Cadrage souhaite** : Plan moyen au comptoir. Les deux mains (equipe + client) + sac StrictFood bien visible. Le logo sur le sac est un bonus.

---

## Story 3 — Produit en situation : STRICT MAX Poulet au comptoir

| Champ | Valeur |
|-------|--------|
| Type | Produit en situation |
| Mode | `compositing-irl` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `irl-story.html` (overlay post-compositing) |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

PREMIERE APPARITION du STRICT MAX Poulet dans les stories. Le compositing pose le burger sur le comptoir reel du restaurant. Le contexte ancre le produit dans le lieu — on voit le burger au comptoir comme si on allait le prendre.

### Contenu

**compositing-irl** :
Photo produit : `public/images/photos-references/produits-source/burgers-black/strict-max-poulet/strict-max-poulet-black-1.png`
Photo lieu : `public/images/photos-references/contexte/salle-restaurant/accueil.jpeg`
Intention compositing : `MAX Poulet pose sur le comptoir d'accueil, eclairage interieur naturel du restaurant. Plan moyen avec profondeur sur la salle en arriere-plan. Le burger est en vedette au premier plan, le comptoir et la vitrine donnent le contexte. Ambiance "pret a etre servi". Respecter les materiaux reels : comptoir blanc, vitrine noire.`

Texte overlay : `—`

---

## Contraintes

- DA : 2 IRL authentiques + 1 compositing introduction produit
- Mood : cuivre sur les 3 stories
- Le compositing DOIT respecter la fidelite de la salle (carrelage blanc, comptoir blanc, vitrine noire — voir photos reference)
- Le STRICT MAX Poulet a un PAIN NOIR — verifier visuellement apres compositing
- Photos IRL : prises pendant le rush du mercredi midi

## Etape suivante

> Executer `/story-producer S3 mercredi` pour produire ces stories.
