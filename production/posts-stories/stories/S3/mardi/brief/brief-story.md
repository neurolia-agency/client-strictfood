# Brief Stories — S3 Mardi (2026-03-25)

> **Pilier du jour** : La Cuisine — Pas de post
> **Objectif strategique** : Premier jour ouvert de la semaine. Montrer ce qui compose un STRICT Boeuf (educatif), sublimer la croute de cuisson (macro) et magnifier le parmesan Myfitcheese (macro). Continuer la micro-saison Macro & Texture.
> **Persona cible** : Locavores + Tous
> **Ref strategie** : Phase 1 §3.1 — "montrer les coulisses pour creer la confiance"

---

## Story 1 — Educatif : Combien d'ingredients ?

| Champ | Valeur |
|-------|--------|
| Type | Educatif |
| Mode | `template` |
| Highlight | COULISSES |
| Qui produit | Pipeline |
| Template | `educatif.html` |
| Mood | feuille |
| Image | hero |
| Brand props | aucun |

### Objectif

Montrer la simplicite radicale du STRICT Boeuf : seulement 7 ingredients naturels et prononcables. Le contraste avec les 60+ additifs d'un fast-food classique est le choc visuel. La photo du burger ouvert revele chaque couche comme une preuve.

### Contenu

Titre : `Combien d'ingredients ?`
Chiffre cle : `7` + `ingredients naturels`
Explication : `Un STRICT Boeuf, c'est <strong>7 couches</strong> d'ingredients frais et prononcables. Rien d'autre.`

Comparaison VS :
- Strict Food's : `7` `ingredients`
- Fast-food classique : `60+` `additifs`

Image de fond : `public/images/photos-references/produits-source/burgers-black/strict-boeuf/strict-boeuf-ouvert.png`
Alignement photo : `—`
Image produit (optionnel) : `aucune`

---

## Story 2 — Produit DA : STRICT Boeuf macro-croustillant

| Champ | Valeur |
|-------|--------|
| Type | Produit DA |
| Mode | `irl-sublimation` |
| Highlight | COULISSES |
| Qui produit | Pipeline |
| Template | `irl-story.html` (overlay post-sublimation) |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Gros plan macro sur la croute Maillard du steak et les textures du STRICT Boeuf. La sublimation pousse la photo macro existante vers l'hyper-detail : chaque fibre de viande, chaque miette de parmesan posee sur la surface chaude, chaque reflet de sauce. Concept `macro-croustillant` de la micro-saison A.

### Contenu

Photo source : `public/images/photos-references/produits-source/burgers-black/strict-boeuf/strict-boeuf-macro.png`
Direction sublimation : `Pousser les textures vers l'hyper-detail. La croute Maillard uniforme du steak (chaleur pulsee, pas de grill marks) doit sembler croustillante et caramelisee. Les miettes de parmesan Myfitcheese posees sur la viande chaude — certaines legerement dorees au contact, granuleuses, poudreuses. La sauce poivron jaune-orange visible en filet. Les petites feuilles rondes de mache. Tons cuivres chauds, ombres profondes, grain film. Full-frame 9:16.`
Texte overlay : `—`

---

## Story 3 — Produit DA : STRICT Boeuf macro-parmesan

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

Fermer la journee avec du food porn macro sur le parmesan Myfitcheese. Le parmesan proteine est en MIETTES poudreuses sur le steak chaud — certaines miettes dorent legerement au contact, d'autres restent granuleuses et irregulieres. C'est un marqueur visuel distinctif de StrictFood. La sublimation magnifie ces miettes — or, brillance, texture de sable. Concept `macro-fromage` de la micro-saison A.

### Contenu

Photo source : `public/images/photos-references/produits-source/burgers-black/strict-boeuf/strict-boeuf-main-2.png`
Direction sublimation : `Magnifier les miettes de parmesan Myfitcheese sur le steak — fragments irreguliers, poudreux, certains dores au contact de la surface chaude. Accentuer le contraste main gantee noire / miettes dorees / pain noir sesame. Croute Maillard uniforme sur le steak (pas de grill marks). Tons cuivres chauds sur les reflets du parmesan. Grain film. Full-frame 9:16.`
Texte overlay : `—`

---

## Contraintes

- DA : 1 educatif template + 2 sublimations food porn macro
- Mood : feuille pour l'educatif (nutrition/ingredients), cuivre pour les 2 sublimations
- Micro-saison A : concepts `macro-croustillant` (story 2) et `macro-fromage` (story 3)
- Parmesan = miettes poudreuses, PAS de cheese pull (fromage dur qui ne s'etire pas)
- Croute Maillard uniforme (chaleur pulsee) — PAS de grill marks

## Etape suivante

> Executer `/story-producer S3 mardi` pour produire ces stories.
