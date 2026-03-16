# Story 01 — Data Mapping

## Type : Lieu (template: annonce.html)

| Placeholder | Valeur |
|-------------|--------|
| `{{MOOD_CLASS}}` | _(vide — cuivre = default)_ |
| `{{IMG_CLASS}}` | _(vide — visible = default)_ |
| `{{BADGE_TEXT}}` | NOUS TROUVER |
| `{{HEADLINE}}` | 88 Chemin de la <em>Roseraie</em> |
| `{{BODY_TEXT}}` | Château Roussillon, Perpignan. <strong>Du lundi au samedi</strong>, derrière le comptoir. |
| `{{CTA_TEXT}}` | _(vide)_ |
| `{{SHOW_CTA}}` | none |
| `{{SHOW_BG}}` | block |
| `{{BG_IMAGE_PATH}}` | /Users/dorian.gz/dev/Neurolia Agency/client-strictfood/public/images/photos-references/contexte/salle-restaurant/déco-salle.jpeg |
| `{{TAGLINE}}` | Le cheat meal qui n'en est pas un |

## Photo

- **Source** : `contexte/salle-restaurant/déco-salle.jpeg`
- **Description** : Mur végétal intérieur avec néon lumineux STRICT FOOD'S
- **Alignement** : néon STRICT FOOD'S (centré dans la photo)
- **Transform** : none (à évaluer au render)

## Notes

- ⚠️ **Doublon logo** : le néon STRICT FOOD'S est visible dans la photo. Le logo SVG overlay dans le template risque un doublon visuel. → Solution : masquer le logo SVG ou le déplacer en bas.
- Brand props : aucun
- Copywriter : body raccourci (suppression "on t'attend")
