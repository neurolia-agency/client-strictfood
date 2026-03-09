# Prompt — Post 1 (Lundi 10 mars 2026)

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Modèle | Gemini (Nanobanana Pro) |
| Mode | Image-to-image (sublimation) |
| Input image | `public/images/dark-bg/burger-simple-boeuf-dark-bg-2.png` |
| Résolution | 4K |
| Dimensions | 4:5 |
| Source DA | `production/2026-03-10/01-art-direction/direction.md` |
| Source recette | `production/_recettes/strict-boeuf.md` |

## Prompt

```
Premium dark food photography of a gourmet artisan burger, shot from a slight low angle (approximately 15-20 degrees below eye level) so the burger towers heroically in the center of the frame, occupying 70% of the vertical space. The format is 4:5 portrait.

The burger is built with these exact ingredients from bottom to top: a round brioche bun base with a smooth golden surface and a buttery toasted sheen catching warm highlights on its dome. A thick seared beef patty with a uniform Maillard crust — deep caramelized brown with visible micro-textures and glistening juices on the charred surface, cooked by pulsed heat with zero oil, so the crust is even and burnished rather than showing grill marks. Small irregular crumbs and powdery fragments of parmesan scattered over the patty — rustic, artisanal, not shaved or sliced. Thin rings of raw red onion with deep purple-crimson concentric layers visible, laid across the patty. Fresh mâche leaves — small, round, delicate green leaves in a natural bouquet, vibrant and lustrous. A subtle drizzle of yellow-orange pepper sauce — a thin, smooth filet, barely there, not a heavy pour. The top brioche bun with natural crackles on its golden glossy surface.

Dramatic chiaroscuro lighting rakes in from the left at 45 degrees, hard to semi-hard quality. Deep copper and amber highlights sculpt every ridge of the Maillard crust while the right side of the burger falls into rich, velvety black shadow. The light itself has a warm copper-amber temperature evoking embers and braise. A very faint fill on the right side (4:1 ratio) prevents total blackout while preserving the drama.

The background is a smooth, seamless charcoal-to-pure-black gradient, completely clean and empty. The burger sits on a dark slate surface with a few natural brioche crumbs and tiny parmesan fragments scattered around the base. A barely perceptible wisp of warmth rises from the freshly assembled burger.

The entire palette is burnished gold, warm copper, and deep amber tones against pure darkness, with small accents of vibrant green from the mâche and deep purple from the red onion rings breaking through the monochrome warmth. Shot at 85mm f/2.8, tack-sharp focus on the beef patty and parmesan crumbs, with the bun edges softening into shallow depth of field bokeh. Cinematic dark food premium atmosphere, raw and sovereign.
```

## Commande

```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "<prompt ci-dessus>" \
  --filename "2026-03-10-strict-boeuf-hero-4x5.png" \
  --input-image "public/images/dark-bg/burger-simple-boeuf-dark-bg-2.png" \
  --resolution 4K \
  --api-key "***"
```

## Prochaine étape

→ Output attendu dans `production/2026-03-10/03-output/`
