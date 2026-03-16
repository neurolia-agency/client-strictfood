# Brief Stories — S2 Lundi (2026-03-17)

> **Pilier du jour** : Le Plat (Food Porn Premium) — Post S2-05 publié aujourd'hui (STRICT Poulet, full-ia)
> **Objectif stratégique** : Accompagner le hero shot poulet SANS répéter la fiche produit (déjà faite en S1 vendredi). Angle éducatif protéines + introduction du concept MAX via sondage + sublimation poulet pour un visuel fort.
> **Persona cible** : Sportifs (macros poulet) + Actifs pressés (découverte gamme)
> **Ref stratégie** : Phase 1 §1.4 — "page vivante et cohérente avec le positionnement premium"

---

## Rappel S1 — Ne pas dupliquer

| Contenu | Fait en S1 | Jour |
|---------|-----------|------|
| Fiche Produit STRICT Poulet | ✅ | Vendredi |
| Interactif "Wrap ou Burger ?" | ✅ | Jeudi |
| Interactif "Bœuf ou Poulet ?" | ✅ | Mercredi |

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

Approfondir l'angle protéines du STRICT Poulet — le post montre le food porn, la story éduque sur les chiffres. Premier éducatif de la période (S1 n'en avait aucun). La comparaison avec un shaker de whey parle directement aux sportifs.

### Contenu

Titre : `<em>53g</em> de protéines dans un burger ?`
Chiffre clé : `53` + `g de protéines`
Explication : `Le STRICT Poulet, c'est l'équivalent de <strong>2 shakers de whey</strong> dans un burger à <strong>596 kcal</strong>. Poulet rôti, zéro huile, parmesan artisanal.`

Comparaison VS : oui
- Strict Food's : `53` `g protéines`
- Classique : `Shaker whey` `25-30` `g protéines`

Image de fond : `public/images/photos-references/dark-bg/burger-poulet-roti-dark-bg.jpg`
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

Introduire le concept de gamme MAX (double steak) via un sondage. Axe de comparaison jamais utilisé en S1 (les précédents : viande, format, dessert). Préparer le terrain pour la fiche produit MAX Bœuf de mercredi.

### Contenu

Format sticker : Sondage 2 choix
Question : `Simple ou MAX ?`
Option A : `Simple`
Option A Emoji : `👌`
Option B : `MAX`
Option B Emoji : `💪`

**Mode visuel** : VS
Produit A : `STRICT Bœuf` — image : `public/images/photos-references/produits-source/burgers-black/strict-boeuf.png`
Produit B : `STRICT MAX Bœuf` — image : `public/images/photos-references/produits-source/strict-max-boeuf.png`

Tagline : `Le cheat meal qui n'en est pas un`

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

Clore la journée avec un visuel fort du STRICT Poulet en plein cadre 9:16. La sublimation renforce l'ambiance DA sombre. Impact visuel maximal — première story non-template de la période.

### Contenu

Photo source : `public/images/photos-references/dark-bg/burger-poulet-roti-dark-bg.jpg`
Direction sublimation : `Renforcer les ombres DA, accentuer les tons cuivrés sur le poulet grillé, fond charbon plus profond, grain film subtil`
Texte overlay : `—`

---

## Contraintes

- DA : Story 1 Dark Premium (Éducatif) + Story 2 Dark Premium (Interactif) + Story 3 Sublimation
- Mood : feuille pour l'éducatif (nutrition), cuivre pour l'interactif et la sublimation
- L'éducatif compare aux shakers de whey — référence directe pour les sportifs
- Le sondage VS montre visuellement la différence de taille Simple vs MAX
- La sublimation doit rester réaliste — pas de HDR ou de surexposition

## Étape suivante

> Exécuter `/story-producer S2 lundi` pour produire ces stories.
