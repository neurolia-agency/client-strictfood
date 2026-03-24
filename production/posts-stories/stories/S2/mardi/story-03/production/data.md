# Story 03 — Data Mapping (Compositing IRL — Falafel sur comptoir)

## Mode

`compositing-irl` — deux photos réelles composées via API image

## Photos sources

| Rôle | Chemin |
|------|--------|
| Photo produit | `/Users/dorian.gz/dev/Neurolia Agency/client-strictfood/public/images/photos-references/produits-source/burgers-black/strict-vege/strict-vege-falafel-black-2.png` |
| Photo lieu | `/Users/dorian.gz/dev/Neurolia Agency/client-strictfood/public/images/photos-references/contexte/salle-restaurant/salle1.jpeg` |

## Intention compositing

Falafel posé sur table en salle, éclairage chaud restaurant, léger flou arrière-plan.

## Overlay (irl-story.html)

| Placeholder | Valeur |
|---|---|
| `{{BG_IMAGE_PATH}}` | [chemin vers image composite générée] |
| `{{IRL_TEXT}}` | — |
| `{{SHOW_TEXT}}` | none |
| `{{IRL_FILTER}}` | irl-filter-leger |
| `{{MOOD_CLASS}}` | mood-feuille |
| `{{PHOTO_PRESET}}` | photo-centre |
| `{{TAGLINE}}` | Le cheat meal qui n'en est pas un |

## Pain noir

Photo produit = `strict-vege-falafel-black-2.png` — pain noir sésame conforme.
