# Data Mapping — Story Dimanche S3 #02 (Template)

## Template
`story-universal.html`

## Placeholders

| Placeholder | Valeur |
|-------------|--------|
| `{{BG_IMAGE_PATH}}` | `/Users/dorian.gz/dev/Neurolia Agency/client-strictfood/public/images/photos-references/produits-source/desserts/tiramisu-proteine.png` |
| `{{TEXT_LINE_1}}` | TIRAMISU PROTEINE |
| `{{TEXT_LINE_2}}` | Le dessert sans culpabilite |
| `{{SHOW_TEXT}}` | block |
| `{{SHOW_LINE_1}}` | block |
| `{{SHOW_LINE_2}}` | block |
| `{{SHOW_DIVIDER}}` | block |
| `{{TAGLINE}}` | Le cheat meal <em>qui n'en est pas un</em> |
| `{{MOOD_CLASS}}` | mood-cuivre |
| `{{PHOTO_PRESET}}` | photo-centre |
| `{{INFO_POSITION}}` | *(vide — defaut bas centre)* |
| `{{IRL_FILTER}}` | none |
| `{{GRAIN}}` | *(vide)* |

## Verification limites caracteres
- TEXT_LINE_1 : "TIRAMISU PROTEINE" = 17 car (max 22) ✅
- TEXT_LINE_2 : "Le dessert sans culpabilite" = 27 car (max 30) ✅

## Gradient
`gradient-medium` — photo de dessert sur fond neutre, contraste standard

## Notes
- Photo existante du tiramisu proteine, pas de generation IA
- Photo centree (produit detoured/isole sur fond)
- Pas de filtre IRL (photo studio)
