# Input Produit — S2-05 STRICT Poulet / 2026-03-17

> Genere automatiquement par l'agent input-mapper.
> Source : `01-art-direction/direction.md`
> A valider par l'operateur avant passage au prompt engineer.

---

## Produit Principal — STRICT Poulet

| Champ | Valeur |
|-------|--------|
| Produit | STRICT Poulet |
| Fiche recette | `production/_recettes/strict-poulet.md` |
| Photo reference | `public/images/photos-references/produits-source/strict-poulet-plongee.png` |
| Justification photo | L'art director demande une **plongee legere (25-30 degres au-dessus de la ligne des yeux)** avec un point de vue "client attable qui se penche au-dessus de son assiette". La photo `strict-poulet-plongee.png` est decrite comme une **vue plongee (dessus 3/4)** sur fond neutre, ce qui correspond exactement a l'angle demande. Les autres photos disponibles (vue de face, contre-plongee, vue top-down, fond noir) ne correspondent pas : la vue de face et la contre-plongee sont des angles opposes, et la vue du dessus (top-down a ~90 degres) est trop verticale par rapport aux 25-30 degres demandes. Le fond neutre de la photo source est compatible avec le compositing sur fond Charbon oklch(0.14 0.008 60) prevu par la direction creative. |

### Photos ecartees (justification)

| Photo | Raison du rejet |
|-------|----------------|
| `dark-bg/burger-poulet-roti-dark-bg.jpg` | Vue de face, eclairage chaud — bon fond DA mais angle incompatible (face vs plongee 25-30 degres) |
| `produits-source/strict-poulet.png` | Vue de face, fond neutre — angle incompatible |
| `produits-source/strict-poulet-contre-plongee.png` | Contre-plongee (angle bas) — angle oppose a la plongee demandee |
| `produits-source/strict-poulet-vue-dessus.png` | Vue strictement du dessus (top-down ~90 degres) — trop vertical, l'art director veut 25-30 degres, pas une flat-lay |
| `produits-source/black-strict-poulet.webp` | Fond noir, vue de face — angle incompatible |
