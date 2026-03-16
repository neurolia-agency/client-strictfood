# Story 02 — Data Mapping

## Type : Focus Ingrédient (template: focus-ingredient.html, style Vitrine)

| Placeholder | Valeur |
|-------------|--------|
| `{{MOOD_CLASS}}` | mood-feuille |
| `{{ARTISAN_NAME}}` | Pains du Soleil |
| `{{ARTISAN_CITY}}` | Perpignan |
| `{{ARTISAN_DESC}}` | Boulangerie artisanale, livraison quotidienne à l'aube |
| `{{HERO_IMAGE_PATH}}` | /Users/dorian.gz/dev/Neurolia Agency/client-strictfood/public/images/photos-references/produits-source/burgers-black/strict-boeuf.png |
| `{{INGREDIENT_NAME}}` | Pain noir au sésame |
| `{{KEY_FACT}}` | <strong>Brioché. Noir. Livré chaque matin.</strong> Graines de sésame torréfiées, croûte qui tient. C'est lui qui donne sa gueule au burger. |
| `{{IN_PRODUCT}}` | Dans tous nos burgers |
| `{{TAGLINE}}` | Le cheat meal qui n'en est pas un |

## Photo

- **Source** : `produits-source/burgers-black/strict-boeuf.png`
- **Description** : STRICT Bœuf, single patty bœuf, black bun sésame, fond noir, vue de face
- **Note** : Le black bun est l'élément hero — graines de sésame dorées visibles, texture noire

## Notes

- Copywriter : KEY_FACT réécrit — 3 beats visuels bold + "donne sa gueule au burger" (marqueur identitaire)
- ARTISAN_DESC dédoublé de KEY_FACT — "à l'aube" vs "chaque matin" (zéro redondance)
- Brand props : aucun
- Le template ajoute déjà "— —" autour d'ARTISAN_NAME via CSS pseudo-elements
