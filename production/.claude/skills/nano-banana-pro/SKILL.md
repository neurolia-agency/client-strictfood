---
name: nano-banana-pro
description: >
  Génère et édite des images via l'API Nano Banana Pro (Gemini 3 Pro Image).
  Utiliser quand l'utilisateur demande de générer, créer, éditer, modifier ou retoucher une image.
  Aussi quand un fichier image existant est référencé pour modification (fond, remplacement, retouche).
  Supporte text-to-image et image-to-image, résolution configurable (1K, 2K, 4K).
  NE PAS lire l'image avant — utiliser directement avec --input-image.
  Triggers : "génère l'image", "nano banana", "gemini image", "génère avec gemini",
  "modifie cette image", "change le fond", "retouche", "image 4K".
---

# Nano Banana Pro Image Generation & Editing

Generate new images or edit existing ones using Google's Nano Banana Pro API (Gemini 3 Pro Image).

## Usage

Run the script using absolute path (do NOT cd to skill directory first):

**Generate new image:**
```bash
uv run production/.claude/skills/nano-banana-pro/scripts/generate_image.py --prompt "your image description" --filename "output-name.png" [--resolution 1K|2K|4K] [--api-key KEY]
```

**Edit existing image:**
```bash
uv run production/.claude/skills/nano-banana-pro/scripts/generate_image.py --prompt "editing instructions" --filename "output-name.png" --input-image "path/to/input.png" [--resolution 1K|2K|4K] [--api-key KEY]
```

**Important:** Always run from the user's current working directory so images are saved where the user is working, not in the skill directory.

## Resolution Options

The Gemini 3 Pro Image API supports three resolutions (uppercase K required):

- **1K** (default) - ~1024px resolution
- **2K** - ~2048px resolution
- **4K** - ~4096px resolution

Map user requests to API parameters:
- No mention of resolution → `1K`
- "low resolution", "1080", "1080p", "1K" → `1K`
- "2K", "2048", "normal", "medium resolution" → `2K`
- "high resolution", "high-res", "hi-res", "4K", "ultra" → `4K`

## API Key

The script checks for API key in this order:
1. `--api-key` argument (use if user provided key in chat)
2. `GEMINI_API_KEY` environment variable

If neither is available, the script exits with an error message.

## Filename Generation

Generate filenames with the pattern: `yyyy-mm-dd-hh-mm-ss-name.png`

**Format:** `{timestamp}-{descriptive-name}.png`
- Timestamp: Current date/time in format `yyyy-mm-dd-hh-mm-ss` (24-hour format)
- Name: Descriptive lowercase text with hyphens
- Keep the descriptive part concise (1-5 words typically)
- Use context from user's prompt or conversation
- If unclear, use random identifier (e.g., `x9k2`, `a7b3`)

Examples:
- Prompt "A serene Japanese garden" → `2025-11-23-14-23-05-japanese-garden.png`
- Prompt "sunset over mountains" → `2025-11-23-15-30-12-sunset-mountains.png`
- Prompt "create an image of a robot" → `2025-11-23-16-45-33-robot.png`
- Unclear context → `2025-11-23-17-12-48-x9k2.png`

## Image Editing

When the user wants to modify an existing image:
1. Check if they provide an image path or reference an image in the current directory
2. Use `--input-image` parameter with the path to the image
3. The prompt should contain editing instructions (e.g., "make the sky more dramatic", "remove the person", "change to cartoon style")
4. Common editing tasks: add/remove elements, change style, adjust colors, blur background, etc.

## Prompt Handling

**For generation:** Pass user's image description as-is to `--prompt`. Only rework if clearly insufficient.

**For editing:** Pass editing instructions in `--prompt` (e.g., "add a rainbow in the sky", "make it look like a watercolor painting")

Preserve user's creative intent in both cases.

## ⛔ Realism Audit obligatoire AVANT generation (StrictFood)

**AVANT de lancer `generate_image.py`** pour un visuel StrictFood (post, story, freestyle) :

Verifier que le skill `/realism-auditor` a ete formellement invoque dans cette conversation :
- **PRE-PROMPT** : extraction des contraintes (avant ecriture du prompt)
- **POST-PROMPT** : audit du prompt fini (apres ecriture du prompt)

Si l'un des deux est manquant → **BLOQUER la generation** :
```
STOP — GENERATION BLOQUEE
Le skill /realism-auditor n'a pas ete invoque en [PRE/POST]-PROMPT.
Invoquer /realism-auditor maintenant avant de continuer.
```

Ne PAS appliquer les contraintes "de tete" sans invoquer le skill. L'application manuelle produit systematiquement des erreurs (cheese pull, grill marks, morsure impossible, pain blanc).

**Exception** : si le prompt ne concerne PAS un produit StrictFood (test, image decorative sans produit), l'audit n'est pas requis.

## ⛔ Pain noir obligatoire (StrictFood)

Quand le prompt concerne un burger StrictFood : vérifier que le prompt contient "black bun" ou "charcoal black sesame bun". Si le prompt mentionne un burger sans qualifier le bun comme noir → AVERTIR l'opérateur et suggérer d'ajouter la description du pain noir. Le pain blanc est obsolète chez StrictFood.

## ⛔ Fidélité salle de restaurant (StrictFood)

Quand le prompt décrit un intérieur de restaurant (mots-clés : "restaurant interior", "dining room", "restaurant counter", "salle") : vérifier que le décor correspond à la vraie salle StrictFood (carrelage blanc/gris, bois blond chêne, chaises noires métal, mur végétal néon, comptoir vitrine noire, éclairage blanc neutre). Si le prompt contient "warm wood", "rustic", "cozy", "brick wall", "dim ambient" ou tout élément ne correspondant pas à la salle réelle → AVERTIR l'opérateur `⚠️ DÉCOR RESTAURANT NON CONFORME — le prompt décrit un restaurant qui ne ressemble pas à la vraie salle StrictFood`. Photos de référence : `public/images/photos-references/contexte/salle-restaurant/`.

## Output

- Saves PNG to current directory (or specified path if filename includes directory)
- Script outputs the full path to the generated image
- **Do not read the image back** - just inform the user of the saved path

## Examples

**Generate new image:**
```bash
uv run production/.claude/skills/nano-banana-pro/scripts/generate_image.py --prompt "A serene Japanese garden with cherry blossoms" --filename "2025-11-23-14-23-05-japanese-garden.png" --resolution 4K
```

**Edit existing image:**
```bash
uv run production/.claude/skills/nano-banana-pro/scripts/generate_image.py --prompt "make the sky more dramatic with storm clouds" --filename "2025-11-23-14-25-30-dramatic-sky.png" --input-image "original-photo.jpg" --resolution 2K
```
