# Story 03 — Data Mapping

> Type : Interactif | Template : interactif.html (custom single-scene) | Style : Dark Premium
> Variante de la Story 02 — image scène unique générée via Nano Banana Pro (wrap boeuf + burger poulet)

## Placeholders

| Placeholder | Valeur |
|-------------|--------|
| `{{MOOD_CLASS}}` | `` |
| `{{IMG_CLASS}}` | `` |
| `{{QUESTION}}` | `T'es de quelle team ?` |
| `{{OPTION_A}}` | `Wrap` |
| `{{OPTION_A_EMOJI}}` | `🌯` |
| `{{OPTION_B}}` | `Burger` |
| `{{OPTION_B_EMOJI}}` | `🍔` |
| `{{TAGLINE}}` | `Le cheat meal qui n'en est pas un.` |

## Image scène (générée — Nano Banana Pro / Gemini)

| Champ | Valeur |
|-------|--------|
| Fichier | `wrap-vs-poulet-scene.png` |
| Méthode | Image-to-image avec référence (Gemini 3 Pro Image, 4K) |
| Input image | `public/images/photos-references/produits-source/wraps/strict-wrap-boeuf.png` |
| Reference image | `public/images/photos-references/produits-source/burgers-black/strict-poulet-black-2.png` |
| Contenu | Scène unique : wrap boeuf coupé (gauche) + burger poulet black bun sésame (droite), même surface sombre |

## Contrôles Style v2

- ✅ **Same-product priority** : wrap boeuf fidèle à la photo source, burger poulet fidèle à la photo source
- ✅ **Proportions réalistes** : prompt impose "compact realistic fast-food proportions", documentary realism
- ✅ **Black bun** : burger poulet avec pain noir sésame (référence `strict-poulet-black-2.png`)
- ✅ **Garnitures fidèles** : wrap (boeuf, épinards, oignon rouge, fromage) / burger (poulet grillé, mâche, oignon rouge, sauce)
- ✅ **Pas de cross-product** : chaque produit est généré à partir de sa propre photo référence

## Copywriter — Changements

| Champ | Brief original | Version copywriter | Raison |
|-------|---------------|-------------------|--------|
| Question | Wrap ou Burger ? | T'es de quelle team ? | Provocation douce, crée la tension avant de voir les options. |
| Options | Wrap / Burger | (inchangées) | Claires, 1 mot. |
| Tagline | Le cheat meal qui n'en est pas un. | (inchangée) | Signature de marque. |

## Différence avec Story 02

- Story 02 : `wrap-vs-burger-scene.png` — wrap boeuf + burger **boeuf** (STRICT Boeuf black bun)
- Story 03 : `wrap-vs-poulet-scene.png` — wrap boeuf + burger **poulet** (STRICT Poulet black bun)
- Layout identique (single scene image + overlays typographiques)
