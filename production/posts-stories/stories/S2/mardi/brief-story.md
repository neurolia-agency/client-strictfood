# Brief Stories — S2 Mardi (2026-03-18)

> **Pilier du jour** : La Cuisine (Process & Artisans) — Pas de post
> **Objectif stratégique** : Journée éducation + coulisses. Expliquer la cuisson chaleur pulsée (USP technique) et montrer la cuisine en action. Première story IRL de la période.
> **Persona cible** : Sportifs (cuisson sans huile = macros) + Actifs pressés (authenticité)
> **Ref stratégie** : Phase 1 §1.4 — "preuve sociale complémentaire" + §3.2 — "crédibiliser le fait maison"

---

## Story 1 — Éducatif : Cuisson chaleur pulsée

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

Expliquer le USP technique de StrictFood : la cuisson chaleur pulsée sans huile. Matérialiser l'argument "zéro huile" avec des chiffres. Les sportifs comprennent l'impact sur les lipides.

### Contenu

Titre : `Cuisson sans <em>huile</em> ?`
Chiffre clé : `0` + `grammes d'huile de cuisson`
Explication : `On cuit tout à la <strong>chaleur pulsée</strong>. Résultat : une croûte Maillard parfaite, sans une seule goutte d'huile. Moins de lipides, même goût.`

Comparaison VS : oui
- Strict Food's : `0g` `d'huile`
- Classique : `Friteuse classique` `15-30g` `d'huile par portion`

Image de fond : `public/images/photos-references/contexte/cuisine/air-fryers-pro.jpeg`
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

Première story IRL de la période. Montrer la cuisine avant le service : préparation des ingrédients, mise en place. L'authenticité crée la confiance.

### Contenu

Photo : `[À FOURNIR par Romain — coulisses cuisine matin, préparation]`
Texte overlay : `Avant le service`
Position texte : bas
Filtre : léger

> **Fallback** : si pas de photo fraîche, utiliser `public/contenu-instagram/2025-10-03_15-57-14_UTC_2.jpg` (découpe viande, plongée)

---

## Contraintes

- DA : Story 1 Dark Premium (Éducatif) + Story 2 IRL (overlay minimal)
- Mood : feuille pour l'éducatif (technique/nutrition), cuivre pour l'IRL
- L'éducatif met en avant les air fryers — montrer la technologie, pas juste les chiffres
- L'IRL doit être authentique — pas de mise en scène excessive

## Étape suivante

> Exécuter `/story-producer S2 mardi` pour produire ces stories.
