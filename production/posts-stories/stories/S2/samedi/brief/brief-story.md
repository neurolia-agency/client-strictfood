# Brief Stories — S2 Samedi (2026-03-22)

> **Pilier du jour** : Confiance / Le Plat — Pas de post
> **Objectif strategique** : Samedi = peak week-end. Rappeler qu'on est ouvert tout le week-end (samedi + dimanche). Introduire les Tenders dans la carte (premier snack en story). Fermer avec un visuel food porn sublime du Boeuf. Sequence : ancrage lieu → decouverte produit → impact visuel.
> **Persona cible** : Actifs presses + Tous
> **Ref strategie** : Phase 1 §5.1 — "ancrer le lieu et les horaires dans l'esprit du client"

---

## Story 1 — Annonce : Horaires week-end

| Champ | Valeur |
|-------|--------|
| Type | Annonce |
| Mode | `template` |
| Highlight | NOUS TROUVER |
| Qui produit | Pipeline |
| Template | `annonce.html` |
| Mood | cuivre |
| Image | visible |
| Brand props | aucun |

### Objectif

Rappeler que le restaurant est ouvert tout le week-end — samedi ET dimanche, deux services par jour. Creer le reflexe "week-end = StrictFood". Le highlight NOUS TROUVER alimente la story permanente de localisation.

### Contenu

Badge : `NOUS TROUVER`
Headline : `Ce <em>week-end</em>, on est la`
Body : `Ouvert samedi et dimanche, <strong>11h-14h</strong> et <strong>18h-22h</strong>. On t'attend.`
CTA : `aucun`
Image de fond : `public/images/photos-references/contexte/salle-restaurant/salle1.jpeg`
Alignement photo : `centre salle`
Tagline : `Le cheat meal qui n'en est pas un`

---

## Story 2 — Produit Hero : Tenders STRICT

| Champ | Valeur |
|-------|--------|
| Type | Produit Hero |
| Mode | `template` |
| Highlight | LA CARTE |
| Qui produit | Pipeline |
| Template | `produit-hero.html` |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Introduire les Tenders STRICT en mode food porn — la photo du produit EST la story. Approche visuelle maximale avec overlay minimal (nom + info courte). Premier snack presente dans le feed.

### Contenu

**Produit** : Tenders STRICT
PRODUCT_NAME : `Tenders STRICT`
PRODUCT_INFO : `Air-fried. Zero huile.`
INFO_POSITION : (defaut — centre bas)

Image : `public/images/photos-references/produits-source/snacks/tenders-strict.png`
Tagline : `Le cheat meal qui n'en est pas un`

---

## Story 3 — Produit DA : STRICT Boeuf gold sublime

| Champ | Valeur |
|-------|--------|
| Type | Produit DA |
| Mode | `irl-sublimation` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `irl-story.html` (overlay post-sublimation) |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Fermer la journee avec un hero shot sublime du STRICT Boeuf sur fond dore. L'ambiance gold renforce l'identite premium. La sublimation pousse les textures et les tons cuivres. Photo jamais utilisee en production.

### Contenu

Photo source : `public/images/photos-references/produits-source/burgers-black/strict-boeuf/strict-boeuf-gold-bg.png`
Direction sublimation : `Sublimer le STRICT Boeuf sur fond dore. Accentuer la croute Maillard uniforme sur le steak (chaleur pulsee, pas de grill marks), les graines de sesame dorees sur le pain noir, les textures de la mache et des miettes de parmesan. Renforcer les tons gold/cuivre de l'arriere-plan. Grain film cinematique. Full-frame 9:16.`
Texte overlay : `—`

---

## Contraintes

- DA : 2 templates (Annonce Dark Premium + Fiche Vitrine) + 1 sublimation
- Mood : cuivre sur les 3 stories
- Horaires : ouvert samedi ET dimanche, 11h-14h / 18h-22h — JAMAIS dire "dernier jour"
- La fiche Tenders est la premiere apparition de ce produit en story
- La sublimation doit preserver le pain NOIR — pas d'eclaircissement du bun
- Maillard uniforme (air fryer) — pas de grill marks sur le steak

## Etape suivante

> Executer `/story-producer S2 samedi` pour produire ces stories.
