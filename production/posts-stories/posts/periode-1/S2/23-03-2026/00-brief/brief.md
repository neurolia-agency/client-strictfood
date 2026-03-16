# Brief — Post S2-08 (Dimanche 2026-03-23)

## Stratégie

| Champ | Valeur |
|-------|--------|
| Pilier | Le Plat (Food Porn Premium) |
| Format | Photo unique |
| Dimensions | 4:5 |
| Mode | `compositing-ia` |
| Période | S2 — Compléter le mur visuel |

## Objectif

Fermer S2 avec un format de produit différent (wrap vs burger) pour montrer la diversité de la carte. Le wrap est aussi le produit d'entrée de gamme (8,99€) — le meilleur ratio protéines/prix. Le compositing-ia intègre la photo réelle du wrap dans une scène IA cinématique.

## Produit

**STRICT Wrap Poulet** — Wrap poulet, 598 kcal, 60,5g de protéines.
Slug recette : `strict-wrap-poulet`

> Ne PAS inclure de lien vers la photo référence ni la recette complète.
> L'input mapper résout automatiquement produit → photo + recette.

---

## Sources visuelles

### Mode = `compositing-ia`

| Champ | Valeur |
|-------|--------|
| Photo produit | `public/images/photos-references/produits-source/strict-wrap-poulet.png` |
| Scène imaginée | Comptoir cuisine sombre avec surfaces inox brossé, éclairage latéral chaud cuivré, légère vapeur en arrière-plan, papier d'emballage STRICT froissé, ambiance service du soir |

---

## Direction Caption

| Champ | Valeur |
|-------|--------|
| Angle | Diversité carte, prix accessible, même qualité que les burgers |
| Ton | Direct |
| CTA | Implicite (adresse en fin) |
| Mention prix | Oui (8,99€ — argument accessibilité) |
| Mention macros | Oui (headline — 598 kcal, 60,5g protéines) |
| Mention fournisseurs | Oui (même artisans que les burgers) |
| Mots/phrases à inclure | "même viande, mêmes artisans, même cuisson", "juste un format différent" |
| Mots/phrases à éviter | "healthy", "régime", "diet" |

> La caption est générée APRÈS l'image par le skill `/caption-writer`.

---

## Contraintes

- Le wrap doit être visuellement distinct des burgers (forme allongée/roulée vs ronde)
- Ingrédients visibles à l'intérieur du wrap (coupé en diagonale)
- Fond sombre, éclairage latéral chaud
- Le compositing doit intégrer naturellement le wrap réel dans la scène IA
- DA : Dark Food Premium (fond Charbon, tons Cuivre Braisé)
- Food Porn Dial : 7/10
- Brand props : oui (l'art director choisit — papier STRICT possible)

---

## Étape suivante

> Exécuter `/instagram-producer 2026-03-23`
> Le pipeline détecte le mode `compositing-ia` et route vers Art Direction → Input Mapping → Prompt → Gemini 4K.
