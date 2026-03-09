# GPT Images — Best Practices

## Available Models

| Model | Strengths | Use When |
|-------|-----------|----------|
| **gpt-image-1.5** | Latest, best quality, text rendering, complex scenes | Default choice |
| **gpt-image-1** | Fast, reliable, good for simple generations | Speed matters |
| **DALL-E 3** | Creative interpretation, artistic styles | Artistic/abstract work |

## Technical Parameters

### Aspect Ratios & Sizes
- `1024×1024` — Square (1:1) — Default
- `1536×1024` — Landscape (3:2)
- `1024×1536` — Portrait (2:3)
- `1792×1024` — Wide landscape (16:9 equivalent)
- `1024×1792` — Tall portrait (9:16 equivalent)

### Quality Settings
- `standard` — Faster, lower cost
- `hd` — Higher detail, better for complex scenes

### Style Settings (DALL-E 3 only)
- `natural` — Photo-realistic, less stylized
- `vivid` — More saturated, dramatic (default)

## Text in Images

GPT Images excels at rendering text. Best practices:

1. **Use ALL CAPS for reliability**: `"MENU DU JOUR"` renders more consistently than `"Menu du Jour"`
2. **Keep text short**: 1-5 words work best. Paragraphs will have errors
3. **Specify font style**: "bold sans-serif", "elegant serif", "handwritten script"
4. **Place text deliberately**: "centered at the top", "bottom-right corner"
5. **Use quotes in prompt**: Wrap exact text in quotes: `with the text "LA PAUSE" in gold letters`
6. **Contrast matters**: Specify text color against background for readability

### Text Examples
```
A minimalist poster with "BRASSERIE • GLACIER • CAFÉ" in spaced uppercase letters,
elegant serif font, cream text on a dark brown background, centered composition.
```

## Prompt Structure for GPT Images

GPT Images responds well to structured, descriptive prompts:

```
[Style/Medium]. [Subject with details]. [Setting/Background].
[Lighting description]. [Composition/Camera]. [Mood/Colors].
[Technical: text, constraints].
```

### Effective Techniques

1. **Scene-setting narrative**: "Imagine a..." or "A photograph showing..."
2. **Explicit exclusions**: "No watermark, no text overlay" (works well)
3. **Reference real photography**: "Shot in the style of editorial food photography"
4. **Specify depth**: "Foreground: herbs. Midground: the plate. Background: blurred kitchen"

## Multi-Image Inputs

gpt-image-1.5 supports multiple reference images:
- **Style transfer**: Provide a style reference + content description
- **Composition matching**: Provide a layout reference + new subject
- **Brand consistency**: Provide brand assets + new scene

## Constraints & Exclusions

GPT Images supports explicit exclusions:
- "Without any text or watermarks"
- "No people in the background"
- "Avoid cluttered composition"
- "No artificial-looking elements"

## Iterative Refinement

GPT Images in chat mode supports conversational refinement:
1. Generate initial image
2. "Make the lighting warmer"
3. "Move the subject slightly left"
4. "Add more depth of field blur"

Each iteration can reference the previous output.

## Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| Text rendering errors | Use ALL CAPS, keep to 1-3 words, specify font |
| Overly literal interpretation | Use "in the style of" rather than copying references |
| Inconsistent style across generations | Add explicit style anchors: "consistent with editorial photography" |
| Too many elements competing | Prioritize 1-2 focal points, simplify background |
| Generic "stock photo" look | Add specific imperfections: "slightly worn table", "natural crumbs" |

## Quality Boosters

These phrases measurably improve GPT Images output:
- "Professional [food/product/portrait] photography"
- "Shot with a [specific lens, e.g., Canon 85mm f/1.4]"
- "Published in [Bon Appétit / Architectural Digest / Vogue]"
- "Award-winning composition"
- "Natural, unforced [lighting/pose/arrangement]"

## Output Format Integration

When generating for GPT Images via API:
```json
{
  "model": "gpt-image-1.5",
  "prompt": "...",
  "size": "1024x1024",
  "quality": "hd",
  "n": 1
}
```
