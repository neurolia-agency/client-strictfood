# Brand Props — Accessoires de Marque StrictFood

## Identite visuelle sur les props

| Element | Valeur |
|---------|--------|
| Logo | "STRICT FOOD'S" — deux mots, majuscules, typographie condensee bold (style Oswald). **Le second O de FOOD est remplace par une icone burger stylisee** : un cercle contenant 3 lignes ondulees horizontales (couches du burger) avec une base plate (bun du bas). L'apostrophe-S ('S) fait partie du nom de marque. |
| Couleur logo | Cuivre Braise (#BF8522 / oklch(0.67 0.15 68)) sur fond sombre OU blanc sur fond sombre OU noir mat sur kraft clair |
| Materiaux dominants | Papier kraft noir mat, carton recycle sombre, kraft naturel |
| Finition | Toujours mat, jamais brillant ni plastifie |
| Logo reference PNG (cuivre) | `public/logo/strictfood-logo-reference.png` (2200x608, Cuivre Braise sur Charbon) |
| Logo reference PNG (blanc) | `public/logo/strictfood-logo-white-reference.png` (2200x608, Blanc sur Charbon) |

### Logo description pour prompts (EN) — A copier dans tout prompt contenant un prop brande

```
The logo reads "STRICT FOOD'S" in bold condensed uppercase. The second O in FOOD is replaced by a stylized burger icon — a circle containing 3 wavy horizontal lines representing burger layers, with a flat base representing the bottom bun. The apostrophe-S is part of the brand name. The entire logo including the burger icon is rendered in warm matte copper-gold tone.
```

### Regle de reference visuelle logo

**OBLIGATOIRE** : Quand un visuel contient un prop avec logo, fournir `public/logo/strictfood-logo-reference.png` via le parametre `--reference-image` du script de generation. Le modele recoit ainsi :
- `--input-image` = photo produit (fidelite burger)
- `--reference-image` = logo PNG (fidelite logo)

Le prompt doit inclure : "Reproduce the exact STRICT FOOD'S logo shown in the second reference image on the branded packaging — especially the burger icon replacing the O."

## Dial BRAND_PRESENCE

**4/10** — ~30-40% des posts incluent au moins un prop.

Le branding doit rester subtil et organique. Les props apparaissent comme des elements naturels de la scene, jamais comme du placement produit force.

---

## Catalogue des props

### wrapper-burger

| Champ | Valeur |
|-------|--------|
| ID | `wrapper-burger` |
| Type | Papier d'emballage burger |
| Materiau | Papier kraft noir mat, legerement froisse par l'usage |
| Logo | "STRICTFOOD" imprime en Cuivre Braise |
| Taille | Enveloppe la moitie inferieure du burger |
| Variantes | **A** — motif diagonal repete (logo petit, en diagonale sur toute la surface) / **B** — logo unique centre (un seul logo grand au milieu) / **C** — kraft naturel brun avec logo noir mat |
| Usage typique | Tenu autour du burger, visible en partie, bords froisse naturellement |

### paper-liner

| Champ | Valeur |
|-------|--------|
| ID | `paper-liner` |
| Type | Papier sous-plat / papier de presentation |
| Materiau | Kraft noir mat, texture legerement grainee |
| Logo | Discret, imprime en coin (Cuivre Braise), petite taille |
| Taille | Depasse legerement sous le produit, bords visibles et froisse |
| Variantes | Aucune |
| Usage typique | Sous un burger, un wrap ou des frites, visible en bordure du cadre |

### cup-branded

| Champ | Valeur |
|-------|--------|
| ID | `cup-branded` |
| Type | Gobelet carton boisson |
| Materiau | Carton recycle noir mat, paroi epaisse |
| Logo | "STRICTFOOD" imprime lateralement en Cuivre Braise, taille moyenne |
| Taille | ~350ml, proportions standard gobelet a emporter |
| Variantes | Aucune |
| Usage typique | A cote du plat principal, legerement en arriere-plan ou en bord de cadre |

### pot-dessert

| Champ | Valeur |
|-------|--------|
| ID | `pot-dessert` |
| Type | Pot take-away pour desserts (bowlcake, overnight oats) |
| Materiau | Pot transparent (type PET recycle) + etiquette |
| Logo | Etiquette circulaire noire collee sur le couvercle ou le flanc — logo "STRICTFOOD" en Cuivre Braise + nom du dessert en blanc |
| Taille | ~250-350ml, format individuel |
| Variantes | Aucune |
| Usage typique | Sujet principal quand c'est un dessert, ou en element secondaire a cote d'un burger |

### sticker-round

| Champ | Valeur |
|-------|--------|
| ID | `sticker-round` |
| Type | Sticker de fermeture / scellage |
| Materiau | Papier adhesif mat |
| Logo | Rond ~3cm, fond noir mat, logo "STRICTFOOD" en Cuivre Braise centre |
| Taille | ~3cm de diametre |
| Variantes | Aucune |
| Usage typique | Colle sur un emballage kraft, un sachet, ou un pot — visible mais petit |

### napkin-branded

| Champ | Valeur |
|-------|--------|
| ID | `napkin-branded` |
| Type | Serviette papier |
| Materiau | Papier absorbant noir ou kraft naturel |
| Logo | Embossed ou imprime en coin, discret |
| Taille | Format standard serviette pliee |
| Variantes | **A** — noire avec logo embossed ton-sur-ton / **B** — kraft naturel avec logo Cuivre Braise imprime |
| Usage typique | Posee a cote du produit, partiellement froissee, element de contexte naturel |

---

## Regles d'utilisation

### Hierarchie visuelle

Le produit (burger, bowl, dessert) est **TOUJOURS le heros** du visuel :
- **60-70%** de l'attention visuelle doit aller au produit
- Les props sont des **elements de contexte** qui renforcent l'identite sans voler la vedette
- Un prop ne doit jamais etre plus net, plus eclaire ou plus central que le produit

### Quantite

- **Maximum 2 props** par visuel
- Privilegier 1 seul prop bien place plutot que 2 qui encombrent
- Certains visuels n'ont **aucun prop** — c'est normal et souhaitable (dial 4/10)

### Compatibilite pilier / prop

| Pilier | Props compatibles | Props interdits | Notes |
|--------|-------------------|-----------------|-------|
| Le Plat | wrapper-burger, paper-liner, cup-branded, napkin-branded | — | Food porn + branding subtil |
| La Cuisine | — | Tous | Le process artisanal ne montre pas de packaging |
| Les Macros | pot-dessert (si dessert), sticker-round | wrapper-burger, cup-branded | Infographies = pas de props photo |
| L'Equipe | napkin-branded, cup-branded | wrapper-burger, pot-dessert | Contexte humain, props discrets |
| Le Quartier | sticker-round, napkin-branded | wrapper-burger, pot-dessert | Props tres discrets si present |

### Coherence visuelle

- Le logo est **toujours** en majuscules condensees bold (style Oswald)
- La couleur sur fond sombre est **toujours** Cuivre Braise (#BF8522)
- La couleur sur fond kraft clair est **toujours** noir mat
- Les materiaux sont **toujours** mat — jamais brillant, jamais plastifie, jamais laque
- Les props doivent paraitre **utilises naturellement** (froisse, pose negligemment) — pas poses comme dans un catalogue
