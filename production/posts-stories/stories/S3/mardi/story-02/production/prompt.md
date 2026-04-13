# Prompt — S3 Mardi Story 02

> **Mode** : full-ia lifestyle
> **Concept** : lifestyle-escalier (banc urbain adapte)
> **Traitement** : sillon
> **Produit en scene** : burger boeuf black bun + sac kraft noir
> **Format** : 9:16 (1080×1920)

## Contraintes realisme appliquees

- Personnage ne regarde JAMAIS la camera
- Pain NOIR sesame obligatoire sur le burger
- Sac kraft NOIR matte, legerement froisse, PAS de logo (ajoute en etape 2)
- Piece ambre obligatoire dans la tenue
- Posture candid naturelle, pas posee
- Peau naturelle : pores visibles, texture reelle, pas de retouche
- Au moins 3 traits distinctifs sur la personne

## Prompt Combo-B

```
Street photography editorial of a young Mediterranean woman, approximately 26 years old, curly brown mid-length hair, tortoiseshell sunglasses pushed up on her head, small gold chain necklace, a tiny mole on her left cheekbone. She wears a cropped ambre-gold hoodie (#FABA43, the dominant color piece), wide-leg white cargo pants, chunky black platform sneakers. She sits on a modern metal public bench in a city square, one leg tucked underneath her, body turned 3/4 toward camera. Her right hand holds a burger at chin height — the burger has a pitch-black charcoal sesame bun densely covered in golden sesame seeds, with visible mâche leaves (small round green, NOT arugula) bursting out the sides, red onion rings peeking, and a thick beef steak with Maillard crust (NO grill marks). Her left hand rests on the bench beside a slightly crumpled matte black kraft paper take-away bag (NO logo, NO text on the bag — plain black kraft). Her gaze is directed LEFT, a half-smile as if someone is passing by — she does NOT look at the camera. Behind her: a vibrant yellow-painted wall with a large colorful mural/fresco (reds, teals, warm yellows), sunlit, casting sharp midday shadows. The bench sits on light grey stone pavement. Natural direct midday light, sharp shadows, warm tones. Dewy skin texture, visible pores on her forearms. Shot on 35mm f/2.0, ISO 400, street photography style, Kodak Portra 400 grain, slight contre-plongée. Full american shot framing. Aspect ratio: 9:16 vertical portrait.
```

## Etape 2 — Logo insertion (apres generation)

Si le sac kraft est visible et face camera :
```
Edit this full-body street photograph. Print the exact white logo from the reference
image onto the front face of the black kraft paper bag. The logo must appear as white
ink printed directly on the matte black kraft surface, centered on the bag face, about
55 percent of bag width. Reproduce the exact same typography, burger icon in the O,
and spacing as shown in the reference logo. Keep the ENTIRE original image perfectly
intact — full body framing, the background, the lighting. Change NOTHING except adding
the logo on the bag. Maintain the original 9:16 vertical portrait format.
```

Logo reference : `public/logo/strictfood-logo-white-reference.png`

## Sillon — Champs template

| Placeholder | Valeur |
|-------------|--------|
| PRODUCT_NAME | PAUSE STRICT |
| PRODUCT_INFO | Ton midi, en mieux |
| SHOW_INFO | block |
| MOOD_CLASS | mood-cuivre |
| PHOTO_PRESET | photo-centre |
| GRAIN | grain-subtle |
| TAGLINE | Le cheat meal <em>qui n'en est pas un</em> |
