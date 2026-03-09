# Style Anchors — Photos de reference validees

Photo validee par categorie, a passer en `--input-image` pour que Nano Banana reproduise le style exact (lighting, mood, textures, grain, background) sans avoir a le decrire dans le prompt.

---

## Burgers

| Categorie | Style Anchor | Chemin | Status |
|-----------|-------------|--------|--------|
| Burger simple | STRICT Boeuf v8 | `public/images/photos-references/dark-bg/burger-simple-boeuf-dark-bg.png` | Validee |
| Burger double | — | — | A generer puis valider |

### Description de l'ancre Burger simple

Pain brioche artisanal dore, steak boeuf avec croute Maillard rugueuse, mache verte en bouquet organique, oignons croustillants, sauce en deux couches, parmesan. Fond sombre studio, eclairage dramatique lateral chaud ambre, grain photographique naturel, textures brutes. Vue de face, format 1:1.

### Ingredients de base (pour calculer les swaps)

- Pain brioche artisanal dore (Pains du Soleil)
- Steak boeuf avec croute Maillard (Boucherie Labourde)
- Mache verte en bouquet organique
- Oignons croustillants
- Sauce maison en deux couches
- Copeaux de parmesan (Myfitcheese)

---

## Wraps

| Categorie | Style Anchor | Chemin | Status |
|-----------|-------------|--------|--------|
| Wrap coupe | — | — | A generer (1ere generation) puis valider |

> Photos brutes disponibles pour premiere generation : `public/images/photos-brutes/produits-seuls/wraps/`

---

## Snacks

| Categorie | Style Anchor | Chemin | Status |
|-----------|-------------|--------|--------|
| Tenders | — | — | A generer puis valider |
| Frites | — | — | A generer puis valider |

---

## Desserts

| Categorie | Style Anchor | Chemin | Status |
|-----------|-------------|--------|--------|
| Cookie | — | — | A generer puis valider |
| Tiramisu | — | — | A generer puis valider |
| Overnight | — | — | A generer puis valider |
| Milkshake | — | — | A generer puis valider |

---

## Boissons

| Categorie | Style Anchor | Chemin | Status |
|-----------|-------------|--------|--------|
| Boisson zero | — | — | A generer puis valider |
| Energisante | — | — | A generer puis valider |

---

## Workflow par produit

```
1. Identifier la categorie du produit → recuperer le style anchor dans ce fichier
2. Lire la recette du produit → identifier les swaps d'ingredients vs l'ancre
3. Adapter le template (templates/sublimation-[categorie].md) avec les swaps uniquement
4. Appeler nano-banana-pro avec --input-image [style-anchor] + prompt adapte
5. Valider → si OK, sauver dans photos-references/produits-source/
```

## Exemple concret : STRICT Poulet

- **Style anchor** : `burger-simple-boeuf-dark-bg.png` (burger boeuf)
- **Swap** : "Replace the beef steak patty with a thick chicken fillet with uniform Maillard crust"
- **Tout le reste** (bun, mache, oignons, sauce, parmesan, lighting, mood) = identique = pas dans le prompt