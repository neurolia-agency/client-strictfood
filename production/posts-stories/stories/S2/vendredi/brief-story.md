# Brief Stories — S2 Vendredi (2026-03-21)

> **Pilier du jour** : La Cuisine — Post #7 Boucherie Labourde (irl-sublimation)
> **Objectif stratégique** : Jour de post artisan Labourde. Les stories complètent avec un angle cuisson (zéro huile) et un interactif viande/végé. Le compositing ancre le Bœuf devant la devanture.
> **Persona cible** : Sportifs + Locavores
> **Ref stratégie** : Phase 1 §3.2 — "ancrer la traçabilité locale"

---

## Story 1 — Éducatif : 0g d'huile de cuisson

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

Expliquer le USP technique de StrictFood : la cuisson chaleur pulsée sans huile. Matérialiser l'argument "zéro huile" avec des chiffres. Complément du post artisan — le post parle de la viande, la story parle de la cuisson.

### Contenu

Titre : `<em>0g</em> d'huile de cuisson`
Chiffre clé : `0` + `grammes d'huile`
Explication : `Chaleur pulsée, pas de friteuse. Nos burgers sont cuits sans une goutte d'huile ajoutée.`

Comparaison VS : oui
- Strict Food's : `0g` `huile cuisson`
- Classique : `Friteuse` `15-30g` `huile par service`

Image de fond : `public/images/photos-references/contexte/cuisine/air-fryers-pro.jpeg`
Alignement photo : `—`
Image produit : `aucune`

---

## Story 2 — Interactif VS : Team Viande ou Team Végé ?

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

Engager les abonnés sur la préférence viande/végé. Le Falafel a été présenté mardi en fiche — maintenant on le confronte au Bœuf. Crée du débat et de l'engagement.

### Contenu

Format sticker : Sondage 2 choix
Question : `Team Viande ou Team Végé ?`

**Mode visuel** : VS
Produit A : `Viande` — image : `public/images/photos-references/produits-source/burgers-black/strict-boeuf.png`
Produit B : `Végé` — image : `public/images/photos-references/produits-source/burgers-black/strict-vege-falafel-black-1.png`

Tagline : `Le cheat meal qui n'en est pas un`

---

## Story 3 — Produit en situation : Bœuf devant devanture

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

Ancrer visuellement le STRICT Bœuf devant la façade StrictFood. Burger + devanture = "ce burger, tu le trouves ici". Fusion produit + lieu en lien avec le post artisan du jour (la viande vient d'ici, le burger se mange ici).

### Contenu

**compositing-irl** :
Photo produit : `public/images/photos-references/produits-source/burgers-black/strict-boeuf.png`
Photo lieu : `public/images/photos-references/contexte/exterieur/devanture.jpeg`
Intention compositing : `Burger posé/tenu devant la façade StrictFood, lumière naturelle, ancrage local`

Texte overlay : `—`

---

## Contraintes

- DA : Story 1 Dark Premium (Éducatif) + Story 2 Dark Premium (Interactif) + Story 3 Compositing IRL
- Mood : feuille pour l'éducatif (technique cuisson), cuivre pour l'interactif et le compositing
- L'éducatif met en avant les air fryers — montrer la technologie, pas juste les chiffres
- Le compositing doit intégrer naturellement le burger dans le contexte de la devanture
- Le sondage VS oppose visuellement le Bœuf et le Falafel — formats similaires, identités distinctes

## Logique de variation de template

| Type | Template | Famille |
|------|----------|---------|
| Éducatif | `educatif.html` | Dark Premium |
| Interactif | `interactif.html` | Dark Premium |
| Produit en situation | `irl-story.html` (overlay post-compositing) | Dark Premium |

## Étape suivante

> Exécuter `/story-producer S2 vendredi` pour produire ces stories.
