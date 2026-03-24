# Brief — Post #5 (Lundi 17-03-2026)

## Stratégie

| Champ | Valeur |
|-------|--------|
| Pilier | Le Plat |
| Format | Photo unique |
| Dimensions | 4:5 |
| Mode | `compositing-ia` |
| Période | S2 — Compléter le mur visuel |

## Objectif

Premier post STRICT Poulet du feed. Introduction spectaculaire : hero shot en lévitation, angle dynamique, food porn maximal. Casser la monotonie des 2 premiers posts full-ia Bœuf avec un visuel à très fort impact. Le Poulet mérite une entrée en scène qui marque.

## Produit

**STRICT Poulet** — Burger poulet rôti effiloché, bun noir artisanal sésame, 596 kcal, 53g prot, 45g gluc, 21.5g lip, 12.99€.
Slug recette : `strict-poulet`

> Ne PAS inclure de lien vers la photo référence ni la recette complète.
> L'input mapper résout automatiquement produit → photo + recette.

---

## Sources visuelles (selon le mode)

### Mode = `compositing-ia`

| Champ | Valeur |
|-------|--------|
| Photo produit | `produits-source/burgers-black/strict-poulet/strict-poulet-levitation.png` |
| Scène imaginée | Lévitation dynamique : burger flottant en apesanteur ~15cm au-dessus d'une surface sombre mate, incliné ~10° pour révéler les couches intérieures. Éclairage studio dramatique top-left, ombre douce en dessous étirée selon l'inclinaison. Sauce poivron jaune-orangé qui coule du bord le plus bas en 2-3 gouttes visqueuses figées en pleine chute (style miel chaud). Feuilles de mâche qui s'échappent du bun, une tirée vers le bas par la gravité. Miettes de parmesan en suspension dans le vide entre le burger et la surface. Fond noir mat uni, ambiance studio food premium. |

---

## Direction Caption

| Champ | Valeur |
|-------|--------|
| Angle | Introduction hero du STRICT Poulet, food porn poulet rôti effiloché, cuisson chaleur pulsée, lévitation spectaculaire |
| Ton | Direct |
| CTA | Implicite (adresse en fin) |
| Mention prix | Non |
| Mention macros | Oui (headline — 53g prot) |
| Mention fournisseurs | Oui (Pains du Soleil, Myfitcheese) |
| Mots/phrases à inclure | "cuisson chaleur pulsée", "53g de protéines", "pain noir" |
| Mots/phrases à éviter | "healthy", "régime", "léger" |

> La caption est générée APRÈS l'image par le skill `/caption-writer`.
> Ne PAS écrire la caption complète dans le brief.

---

## Contraintes

- Poulet rôti effiloché en lamelles irrégulières visible à travers le bun noir (PAS en cubes, PAS en filet entier)
- Bun noir sésame (pitch-black charcoal bread, graines de sésame dorées) — OBLIGATOIRE
- Angle dynamique ~10° d'inclinaison, sensation d'apesanteur figée
- Sauce poivron jaune-orangé en coulures visqueuses (style miel chaud), PAS rouge, PAS blanche
- Mâche (petites feuilles rondes vertes, PAS de roquette) dépassant des bords du bun
- Parmesan en miettes (fragments poudreux irréguliers, PAS copeaux, PAS lamelles)
- DA : Dark Food Premium (fond noir mat uni, éclairage studio dramatique)
- Food Porn Dial : 8/10
- Brand props : non
- Référence style : `prompts-variantes-combo-b.md` #16 (strict-poulet concept-levitation) — adapter au ratio 4:5

---

## Étape suivante

> Exécuter `/instagram-producer 17-03-2026`
> Le pipeline détecte automatiquement le mode `compositing-ia` et route vers le bon sous-pipeline.
