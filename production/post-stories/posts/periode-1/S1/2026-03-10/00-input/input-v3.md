# Input Produit v3 — Post 1 (10 mars 2026)

> Adapté manuellement pour la mise à jour black bun.
> Source : `01-art-direction/direction-v3.md`

---

## Produit Principal — STRICT Bœuf (Black Bun)

| Champ | Valeur |
|-------|--------|
| Produit | STRICT Bœuf — Burger signature (version black bun) |
| Catégorie | Burgers |
| Prix | 12,99 € |
| Macros | 596 kcal · 53 g prot · 45 g glu · 21,5 g lip |
| Fiche recette | `production/_recettes/strict-boeuf.md` |
| Photo référence | `public/images/photos-references/produits-source/burgers-black/strict-boeuf.png` |
| Justification photo | Photo source black bun sur fond noir — exactement le produit STRICT Bœuf mis à jour avec pain noir au sésame. Anchor style, vue de face, fond noir studio. Pas de transformation de fond nécessaire (déjà Dark Food Premium). Le prompt engineer appliquera l'angle 3/4 plongeant 45° + backlight doré demandés par la direction v3. |

---

## Recette (ordre d'empilement bas → haut)

| Ordre | Ingrédient | Forme exacte | Fournisseur |
|-------|-----------|--------------|-------------|
| 1 | Pain noir au sésame (base) | Bun rond noir, surface texturée recouverte de graines de sésame dorées | Pains du Soleil |
| 2 | Steak haché de bœuf | Steak épais, viande de grison, croûte Maillard visible, cuisson chaleur pulsée (zéro huile) | Boucherie Labourde |
| 3 | Parmesan | En miettes — petits fragments irréguliers, poudreux. PAS en copeaux, PAS en lamelles, PAS en tranches. | Myfitcheese |
| 4 | Oignons rouges | En tranches fines — rondelles avec anneaux concentriques visibles. PAS émincés, PAS en dés. | — |
| 5 | Mâche | Feuilles entières — petites feuilles rondes vertes en bouquet. PAS de roquette, PAS de laitue. | — |
| 6 | Sauce poivron | Couleur jaune-orangé subtil — sauce lisse, pas épaisse. PAS rouge, PAS blanche. Filet subtil, pas une nappe. | Fait maison |
| 7 | Pain noir au sésame (chapeau) | Identique à la base, surface noire texturée avec graines de sésame dorées | Pains du Soleil |

### Notes fidélité cuisson

- Cuisson à chaleur pulsée → croûte Maillard uniforme (pas de grill marks)
- Zéro huile de cuisson
- Le parmesan en miettes est un marqueur visuel distinctif et différenciant
- La sauce poivron = filet subtil, pas dominante visuellement
- Les graines de sésame dorées sur le bun noir = nouveau marqueur signature

---

## Photos alternatives considérées

| Photo | Description | Verdict |
|-------|-------------|---------|
| `burgers-black/strict-boeuf.png` | STRICT Bœuf, black bun sésame, fond noir | Alternative valide mais `strict-boeuf.png` a un meilleur cadrage anchor style. |
| `burgers-black/simple-boeuf-black.png` | Burger simple bœuf, black bun, fond noir | Variante plus simple, moins détaillée. |
| `produits-source/strict-boeuf.png` | STRICT Bœuf, vue de face, fond neutre (ancien brioche) | **Obsolète** — ancienne photo avec brioche dorée, ne correspond plus à la recette actuelle. |

---

## Statut mapping

| Check | Résultat |
|-------|----------|
| Produit identifié | STRICT Bœuf (black bun) |
| Photo trouvée | `burgers-black/strict-boeuf.png` |
| Fiche recette | `strict-boeuf.md` (complète, 7 ingrédients, pain noir au sésame) |
| PLACEHOLDER | Non — photo réelle disponible |
| RECETTE MANQUANTE | Non — fiche complète |

---

> **Prochaine étape** : passage au skill `/image-prompt-engineer` en Mode B avec `direction-v3.md` + ce fichier `input-v3.md`.
