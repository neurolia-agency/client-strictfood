# Gemini 3 Pro Image — Best Practices

## Overview

Gemini 3 Pro Image (used by `/nano-banana-pro`) excels at photo-realistic generation. It responds best to narrative, cinematic descriptions rather than keyword lists.

## Resolution Options

| Setting | Resolution | Best For |
|---------|-----------|----------|
| **1K** | ~1024px | Social media, previews, iterations (default) |
| **2K** | ~2048px | Website heroes, presentations |
| **4K** | ~4096px | Print, large displays, portfolio |

Always start with 1K for drafts, scale up once the prompt is refined.

## Prompt Style: Narrative Over Keywords

Gemini strongly prefers flowing, descriptive paragraphs over comma-separated tags.

### Bad (keyword style)
```
espresso, ceramic cup, marble counter, side lighting, café, morning, bokeh, 4K, professional
```

### Good (narrative style)
```
A freshly pulled espresso in a handcrafted ceramic cup rests on a cool marble
countertop. Soft morning light streams through a nearby café window, casting
a gentle side-light that illuminates the rich crema. The background dissolves
into a creamy bokeh of warm café tones. Shot at a slight angle with a 50mm lens,
the composition feels intimate and inviting.
```

## Photography Language

Gemini responds exceptionally well to real photography terminology:

### Lenses & Focal Lengths
- **24mm** — Wide, environmental, dramatic perspective
- **35mm** — Street photography, environmental portraits
- **50mm** — Natural perspective, "what the eye sees"
- **85mm** — Portrait, flattering compression, shallow DoF
- **100mm macro** — Extreme close-ups, texture details
- **200mm** — Compressed backgrounds, telephoto isolation

### Camera Angles
- **Flat lay / overhead** — 90° above, great for food arrangements
- **45-degree** — Most natural dining perspective
- **Eye-level** — Dramatic, immersive
- **Low angle** — Heroic, monumental feel
- **Dutch angle** — Dynamic, editorial energy

### Lighting Terminology
- **Key light** — Main illumination source
- **Fill light** — Softens shadows
- **Rim/Back light** — Separates subject from background, adds glow
- **Bounce light** — Reflected, soft, natural
- **Window light** — Most flattering for food and portraits
- **Golden hour** — Warm, long shadows, magical quality

### Depth of Field
- **Shallow (f/1.4–f/2.8)** — Subject isolation, creamy bokeh
- **Medium (f/4–f/5.6)** — Subject sharp, context visible
- **Deep (f/8–f/16)** — Everything sharp, landscapes

## No Negative Prompts

Gemini does NOT support negative prompts. Never write:
- "No blur" → Instead: "Tack-sharp focus throughout"
- "No watermark" → Instead: "Clean, unobstructed composition"
- "Not too dark" → Instead: "Well-lit with balanced exposure"
- "Without people" → Instead: "Empty scene, solitary atmosphere"
- "No text" → Instead: describe the scene without mentioning text

### Reformulation Guide

| Negative (don't use) | Positive (use this) |
|----------------------|---------------------|
| No blur | Pin-sharp focus on the subject |
| No noise/grain | Clean, smooth image quality |
| No distracting background | Soft, harmonious background |
| Not overexposed | Balanced, natural exposure |
| No artificial look | Authentic, organic feel |
| Without clutter | Minimal, intentional styling |
| Avoid harsh shadows | Soft, diffused lighting |

## Specificity Spectrum

Be specific where it matters, general where it doesn't:

### Too Vague
"A photo of a cake" → Gemini will make generic choices for everything

### Just Right
"A three-layer chocolate ganache cake on a vintage cake stand, dusted with cocoa powder, one slice cut revealing moist layers. Side-lit by afternoon window light on a linen tablecloth. Shot at 85mm, f/2.8."

### Too Specific (counterproductive)
"A three-layer chocolate ganache cake, exactly 8 inches in diameter, precisely 4.5 inches tall, with exactly 12 chocolate curls on top, at exactly 43 degrees from the camera..." → Over-constraining reduces quality.

## Image Editing Mode

When editing existing images with Gemini:
1. **Be action-oriented**: "Change the background to a sunset beach"
2. **Reference specific areas**: "Make the sky more dramatic with deeper oranges"
3. **One change at a time**: Complex multi-edits reduce quality
4. **Preserve intent**: "Keep the subject exactly the same, only modify the lighting"

## Scene Composition Tips

1. **Rule of thirds**: "Subject positioned on the left third of the frame"
2. **Leading lines**: "A path drawing the eye toward the main subject"
3. **Negative space**: "Generous empty space above the subject for text overlay"
4. **Layered depth**: "Foreground herbs, midground plate, background kitchen blur"
5. **Color harmony**: "Complementary warm terracotta and cool sage green palette"

## Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| Prompt too short (<15 words) | Expand with lighting, composition, mood details |
| Mixing styles inconsistently | Choose one cohesive style per prompt |
| Requesting text in image | Gemini struggles with text — use GPT Images instead |
| Over-relying on "4K, ultra-realistic" | These tags add little — describe the scene quality instead |
| Ignoring aspect ratio | Think about composition before generating |

## Quality Indicators (Use Sparingly)

Instead of stacking quality keywords, use one contextual reference:
- "Shot for a high-end food magazine editorial"
- "Commercial product photography quality"
- "Fine art portrait with gallery-worthy composition"
- "Architectural photography for a design publication"
