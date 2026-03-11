# Input Produit v2 — Post 1 (10 mars 2026)

> Généré automatiquement par l'agent input-mapper.
> Source : `01-art-direction/direction-v2.md`
> À valider par l'opérateur avant passage au prompt engineer.

---

## Produit Principal — STRICT Bœuf

| Champ | Valeur |
|-------|--------|
| Produit | STRICT Bœuf — Burger signature |
| Catégorie | Burgers |
| Prix | 12,99 € |
| Macros | 596 kcal · 53 g prot · 45 g glu · 21,5 g lip |
| Fiche recette | `production/_recettes/strict-boeuf.md` |
| Photo référence | `public/images/photos-references/produits-source/strict-boeuf.png` |
| Justification photo | Choix opérateur — photo produit source sur fond neutre. Le prompt engineer transformera le fond en Dark Food Premium (Charbon) et appliquera l'angle 3/4 plongeant 45° + backlight doré demandés par la direction v2. La photo source offre une meilleure lisibilité des textures et ingrédients réels du burger. |

---

## Recette (ordre d'empilement bas → haut)

| Ordre | Ingrédient | Forme exacte | Fournisseur |
|-------|-----------|--------------|-------------|
| 1 | Pain brioche (base) | Bun rond, surface lisse dorée, légèrement brillante | Pains du Soleil |
| 2 | Steak haché de bœuf | Steak épais, viande de grison, croûte Maillard visible, cuisson chaleur pulsée (zéro huile) | Boucherie Labourde |
| 3 | Parmesan | En miettes — petits fragments irréguliers, poudreux. PAS en copeaux, PAS en lamelles, PAS en tranches. | Myfitcheese |
| 4 | Oignons rouges | En tranches fines — rondelles avec anneaux concentriques visibles. PAS émincés, PAS en dés. | — |
| 5 | Mâche | Feuilles entières — petites feuilles rondes vertes en bouquet. PAS de roquette, PAS de laitue. | — |
| 6 | Sauce poivron | Couleur jaune-orangé subtil — sauce lisse, pas épaisse. PAS rouge, PAS blanche. Filet subtil, pas une nappe. | Fait maison |
| 7 | Pain brioche (chapeau) | Identique à la base, surface dorée brillante avec légères craquelures naturelles | Pains du Soleil |

### Notes fidélité cuisson

- Cuisson à chaleur pulsée → croûte Maillard uniforme (pas de grill marks)
- Zéro huile de cuisson
- Le parmesan en miettes est un marqueur visuel distinctif et différenciant
- La sauce poivron = filet subtil, pas dominante visuellement

---

## Photos alternatives considérées

| Photo | Description | Verdict |
|-------|-------------|---------|
| `dark-bg/strict-boeuf-plongee.png` | Burger simple bœuf, fond sombre DA, plongée (angle haut) | Angle plus proche du 3/4 plongeant demandé, mais **non retenue** car l'art director a explicitement verrouillé `burger-simple-boeuf-dark-bg-2.png` comme source à sublimer. |
| `produits-source/strict-boeuf-plongee.png` | STRICT Bœuf, vue plongée (dessus 3/4), fond neutre | Bon angle 3/4 mais fond neutre — incompatible avec le mood Dark Food Premium demandé. Non verrouillée par l'AD. |
| `produits-source/strict-boeuf-vue-dessus.png` | STRICT Bœuf, vue strictement du dessus (top-down), fond neutre | Angle trop vertical (top-down ≠ 3/4 plongeant 45°). Non pertinent. |

---

## Statut mapping

| Check | Résultat |
|-------|----------|
| Produit identifié | STRICT Bœuf |
| Photo trouvée | `produits-source/strict-boeuf.png` (choix opérateur) |
| Fiche recette | `strict-boeuf.md` (complète, 7 ingrédients) |
| PLACEHOLDER | Non — photo réelle disponible |
| RECETTE MANQUANTE | Non — fiche complète |

---

> **Prochaine étape** : validation opérateur, puis passage au skill `/image-prompt-engineer` en Mode B avec `direction-v2.md` + ce fichier `input-v2.md`.
