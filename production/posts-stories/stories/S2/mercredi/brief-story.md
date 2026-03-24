# Brief Stories — S2 Mercredi (2026-03-19)

> **Pilier du jour** : Les Macros — Post #6 Macros comparaison (template)
> **Objectif stratégique** : Jour de post Macros. Les stories appuient avec un éducatif comparatif et un interactif qui introduit le concept MAX. L'IRL montre le rush.
> **Persona cible** : Sportifs + Actifs pressés
> **Ref stratégie** : Phase 1 §1.4 — "matérialiser le positionnement macros/premium"

---

## Story 1 — Éducatif : 596 kcal, 53g prot — et ton burger ?

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

Companion du post macros. Résumer la comparaison en un seul chiffre impactant : 596 kcal vs 800-1000 kcal pour un burger classique. Les abonnés qui voient la story en premier iront checker le post pour le détail.

### Contenu

Titre : `<em>596</em> kcal, 53g prot — et ton burger ?`
Chiffre clé : `596` + `kcal`
Explication : `Notre STRICT Bœuf : 596 kcal, 53g de protéines, 21.5g de lipides. Un burger classique ? 800-1000 kcal, 45-55g de lipides.`

Comparaison VS : oui
- Strict Food's : `596 kcal` `21.5g lipides`
- Classique : `Fast-food` `800-1000 kcal` `45-55g lipides`

Image de fond : `public/images/photos-references/dark-bg/burger-simple-boeuf-dark-bg.png`
Alignement photo : `—`
Image produit : `aucune`

---

## Story 2 — Interactif VS : Simple ou MAX ?

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

Introduire le concept de gamme MAX (double steak) via un sondage VS. Engager les abonnés sur la préférence Simple vs MAX. Préparer le terrain pour la fiche MAX Bœuf de jeudi.

### Contenu

Format sticker : Sondage 2 choix
Question : `Simple ou MAX ?`

**Mode visuel** : VS
Produit A : `Simple` — image : `public/images/photos-references/produits-source/burgers-black/strict-boeuf.png`
Produit B : `MAX` — image : `public/images/photos-references/produits-source/strict-max-boeuf.png`

Tagline : `Le cheat meal qui n'en est pas un`

---

## Story 3 — IRL : Rush du midi

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

Montrer l'énergie du service en plein rush. L'authenticité du moment renforce la crédibilité : le restaurant tourne, les commandes sortent. Contraste avec les visuels léchés des autres stories.

### Contenu

Photo : `[À FOURNIR par Romain]`
Texte overlay : `Rush du midi`
Position texte : bas
Filtre : léger

> **Fallback** : si pas de photo fraîche, utiliser `public/contenu-instagram/2025-10-03_15-57-14_UTC_2.jpg`

---

## Contraintes

- DA : Story 1 Dark Premium (Éducatif) + Story 2 Dark Premium (Interactif) + Story 3 IRL (overlay minimal)
- Mood : feuille pour l'éducatif (nutrition), cuivre pour l'interactif et l'IRL
- L'éducatif compare kcal et lipides — double métrique pour plus d'impact
- Le sondage VS montre visuellement la différence de taille Simple vs MAX
- L'IRL doit être authentique — pas de mise en scène excessive

## Logique de variation de template

| Type | Template | Famille |
|------|----------|---------|
| Éducatif | `educatif.html` | Dark Premium |
| Interactif | `interactif.html` | Dark Premium |
| IRL | `irl-story.html` | Dark Premium (overlay minimal) |

## Étape suivante

> Exécuter `/story-producer S2 mercredi` pour produire ces stories.
