# Story 02 — Data Mapping (Produit DA — IRL Sublimation)

## Mode

`irl-sublimation` — photo reelle sublimee via API image (format 9:16, 1080x1920)

## Photo source

| Champ | Valeur |
|-------|--------|
| Chemin | `/Users/dorian.gz/dev/Neurolia Agency/client-strictfood/public/images/photos-references/produits-source/burgers-black/strict-max-boeuf/strict-boeuf-ouvert.png` |
| Description | STRICT MAX Boeuf vue eclatee — bun noir flottant au-dessus, double steak visible, sauce poivron, mache, oignons rouges, parmesan. Fond noir. |
| Conformite pain noir | OK — bun noir sesame visible (haut et bas) |

## Direction sublimation

Ombres profondes, double steak en vedette, textures viande accentuees, tons grenat chauds, grain film subtil. Format 9:16 (1080x1920) pour story Instagram plein cadre. Le bun noir flottant avec la sauce qui coule est le hero visuel.

### Points d'attention sublimation :
- Le bun doit rester NOIR (pain noir sesame) — pas d'eclaircissement
- Double steak : croute Maillard visible, jus glistening
- Sauce poivron jaune-orange coulant entre les steaks
- Fond : charbon profond, ambiance grenat
- Eclairage : dramatique lateral, backlight subtil pour la sauce
- Le produit est sur fond noir detoure — la sublimation doit creer un environnement sombre et imposant

## Overlay (irl-story.html)

| Placeholder | Valeur |
|---|---|
| `{{BG_IMAGE_PATH}}` | [A REMPLACER apres sublimation — image 9:16 generee] |
| `{{IRL_TEXT}}` | — |
| `{{SHOW_TEXT}}` | none |
| `{{IRL_FILTER}}` | leger |
| `{{IRL_TEXT_POSITION}}` | bas |
| `{{MOOD_CLASS}}` | mood-grenat |
| `{{PHOTO_PRESET}}` | photo-centre |
| `{{TAGLINE}}` | Le cheat meal qui n'en est pas un |

## Photo brief originale

`public/images/photos-references/dark-bg/burger-double-boeuf-dark-bg.jpg` — SUPPRIMEE du disque.
Remplacee par `burgers-black/strict-max-boeuf/strict-boeuf-ouvert.png` (pain noir, vue eclatee, plus impactante pour sublimation).
