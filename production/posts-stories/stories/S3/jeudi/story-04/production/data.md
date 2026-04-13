# Data Mapping — Story 04 — Rappel horaires soir

## Template

`story-universal.html`

## Placeholders

| Placeholder | Valeur |
|-------------|--------|
| `{{BG_IMAGE_PATH}}` | `/Users/dorian.gz/dev/Neurolia Agency/client-strictfood/public/images/photos-references/contexte/salle-restaurant/salle1.jpeg` |
| `{{TEXT_LINE_1}}` | CE SOIR C'EST STRICT |
| `{{TEXT_LINE_2}}` | 11h-14h / 18h-22h |
| `{{SHOW_TEXT}}` | block |
| `{{SHOW_LINE_1}}` | block |
| `{{SHOW_LINE_2}}` | block |
| `{{SHOW_DIVIDER}}` | block |
| `{{TAGLINE}}` | Le cheat meal <em>qui n'en est pas un</em> |
| `{{MOOD_CLASS}}` | mood-cuivre |
| `{{PHOTO_PRESET}}` | photo-large |
| `{{INFO_POSITION}}` | |
| `{{IRL_FILTER}}` | leger |
| `{{GRAIN}}` | grain-subtle |

## Verification caracteres

| Zone | Texte | Longueur | Max |
|------|-------|----------|-----|
| TEXT_LINE_1 | CE SOIR C'EST STRICT | 20 | 22 ✓ |
| TEXT_LINE_2 | 11h-14h / 18h-22h | 17 | 30 ✓ |

## Notes

- Photo salle restaurant (reelle) → filtre IRL leger pour cohesion DA
- Preset photo-large : salle en plan large, scale 1.15
- Divider actif pour separer l'accroche des horaires
- Horaires : mardi-dimanche, 11h-14h / 18h-22h (source de verite pipeline.md)
