# Brief — Post S2-05 (Lundi 2026-03-17)

## Stratégie

| Champ | Valeur |
|-------|--------|
| Pilier | Le Plat (Food Porn Premium) |
| Format | Photo unique |
| Dimensions | 4:5 |
| Mode | `full-ia` |
| Période | S2 — Compléter le mur visuel |

## Objectif

Ouvrir S2 avec un nouveau produit hero. Le STRICT Poulet diversifie le feed après 3 posts bœuf/tiramisu/process en S1. Ce post installe le standard Dark Food Premium sur un deuxième produit burger, avec un angle visuel différent de S1-01.

## Produit

**STRICT Poulet** — Burger poulet rôti, 596 kcal, 53g de protéines.
Slug recette : `strict-poulet`

> Ne PAS inclure de lien vers la photo référence ni la recette complète.
> L'input mapper résout automatiquement produit → photo + recette.

---

## Sources visuelles

### Mode = `full-ia`

> Aucune source à fournir. Le pipeline résout via `photo-references.md` et génère avec Gemini.

> **Note** : DA + input + prompt déjà produits dans ce dossier. Reprendre le pipeline à l'étape de génération Gemini 4K.

---

## Direction Caption

| Champ | Valeur |
|-------|--------|
| Angle | Food porn poulet, le nouveau hero, cuisson chaleur pulsée |
| Ton | Direct |
| CTA | Implicite (adresse en fin) |
| Mention prix | Oui (12,99€) |
| Mention macros | Oui (headline — 596 kcal, 53g protéines) |
| Mention fournisseurs | Oui (Pains du Soleil, Myfitcheese) |
| Mots/phrases à inclure | "assemblé devant toi", "cuit sans une goutte d'huile" |
| Mots/phrases à éviter | "healthy", "régime", "light" |

> La caption est générée APRÈS l'image par le skill `/caption-writer`.

---

## Contraintes

- Hero shot du STRICT Poulet, angle différent de S1-01 (vue 3/4 inversée ou légèrement plongeante)
- Texture du poulet grillé bien visible, verdure fraîche éclatante
- DA : Dark Food Premium (fond Charbon, tons Cuivre Braisé)
- Food Porn Dial : 7/10
- Brand props : non

---

## Étape suivante

> Exécuter `/instagram-producer 2026-03-17`
> **Note** : DA, input et prompt déjà produits — reprendre à l'étape de génération Gemini 4K.
