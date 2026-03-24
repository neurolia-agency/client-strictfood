# Brief Stories — S2 Lundi (2026-03-17)

> **Pilier du jour** : Le Plat — Post #5 STRICT Poulet (compositing-irl)
> **Objectif stratégique** : Jour de post Poulet. Les stories complètent avec un angle nutrition (éducatif) et du contenu authentique (IRL). Le sublimé Poulet prolonge le food porn du post.
> **Persona cible** : Sportifs + Actifs pressés
> **Ref stratégie** : Phase 1 §1.4 — "installer le Dark Food Premium comme signature"

---

## Story 1 — Éducatif : 53g de protéines dans un burger ?

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

Approfondir l'angle protéines du STRICT Poulet en complément du post du jour. Le post montre le food porn, la story éduque sur les chiffres. La comparaison avec un shaker de whey parle directement aux sportifs.

### Contenu

Titre : `<em>53g</em> de protéines dans un burger ?`
Chiffre clé : `53` + `grammes de protéines`
Explication : `Le STRICT Poulet contient autant de protéines qu'un shaker et demi de whey. Sans la poudre.`

Comparaison VS : oui
- Strict Food's : `53` `g protéines`
- Classique : `Shaker whey` `25-30` `g protéines`

Image de fond : `public/images/photos-references/dark-bg/burger-poulet-roti-dark-bg.jpg`
Alignement photo : `—`
Image produit : `aucune`

---

## Story 2 — IRL : Coulisses préparation matin

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

Montrer la cuisine avant le service : préparation des ingrédients, mise en place. L'authenticité crée la confiance. Contraste avec le food porn du post — ici on montre le réel.

### Contenu

Photo : `[À FOURNIR par Romain]`
Texte overlay : `Avant le service`
Position texte : bas
Filtre : léger

> **Fallback** : si pas de photo fraîche, utiliser `public/contenu-instagram/2025-10-03_15-57-14_UTC_3.jpg`

---

## Story 3 — Produit DA : STRICT Poulet sublimé

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

Clore la journée avec un visuel fort du STRICT Poulet en plein cadre 9:16. La sublimation renforce l'ambiance DA sombre. Impact visuel maximal pour prolonger le food porn du post.

### Contenu

Photo source : `public/images/photos-references/dark-bg/burger-poulet-roti-dark-bg.jpg`
Direction sublimation : `Renforcer ombres DA, tons cuivrés sur poulet grillé, charbon profond, grain film subtil`
Texte overlay : `—`

---

## Contraintes

- DA : Story 1 Dark Premium (Éducatif) + Story 2 IRL (overlay minimal) + Story 3 Sublimation
- Mood : feuille pour l'éducatif (nutrition), cuivre pour l'IRL et la sublimation
- L'éducatif compare aux shakers de whey — référence directe pour les sportifs
- La sublimation doit rester réaliste — pas de HDR ou de surexposition
- L'IRL doit être authentique — pas de mise en scène excessive

## Logique de variation de template

| Type | Template | Famille |
|------|----------|---------|
| Éducatif | `educatif.html` | Dark Premium |
| IRL | `irl-story.html` | Dark Premium (overlay minimal) |
| Produit DA | `irl-story.html` (overlay post-sublimation) | Dark Premium |

## Étape suivante

> Exécuter `/story-producer S2 lundi` pour produire ces stories.
