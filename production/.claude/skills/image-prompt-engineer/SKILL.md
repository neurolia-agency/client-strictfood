---
name: image-prompt-engineer
description: >
  Craft professional image generation prompts for GPT Images and Nano Banana (Gemini).
  Use when the user asks to create, write, craft, improve, or optimize an image prompt,
  or when preparing prompts before generating images with /nano-banana-pro.
  Covers food photography, product shots, lifestyle, portraits, architecture, and more.
  Transforms vague requests OR structured creative briefs into detailed, effective prompts.
  Triggers on: "image prompt", "write a prompt for", "prompt for image", "photo prompt",
  "generate prompt", "prompt engineering image", "improve this prompt", "better prompt".
---

# Image Prompt Engineer

Transform image requests into professional-grade generation prompts optimized for GPT Images (gpt-image-1.5) or Nano Banana (Gemini 3 Pro Image).

**Accepts two types of input :**
- **Mode A — Requête libre** : Une demande vague ou courte ("a photo of a burger") → workflow complet avec clarification
- **Mode B — Brief structuré** : Un dossier de direction créative détaillé (output du skill `social-media-art-director`) → traduction directe en prompt, sans questions

## Détection du mode

**Mode B** si l'input contient **au moins 3** de ces éléments :
- Un champ "Angle de prise de vue" ou "Cadrage"
- Un champ "Éclairage" avec direction et qualité
- Un champ "Palette dominante" ou "Couleurs"
- Un champ "Sujet principal" avec description détaillée
- Un champ "Texte on-image" avec contenu spécifié
- Une structure par visuel numéroté ("Visuel 1 / 5", "Slide 2")

**Mode A** dans tous les autres cas.

---

## Mode A — Requête libre (workflow existant)

### Step 1 — Clarify Intent

Before writing, identify:
- **Subject**: What exactly should be in the image?
- **Purpose**: Where will this image be used? (social media, menu, website, print)
- **Style**: Photo-realistic, illustration, watercolor, 3D render, flat design?
- **Mood**: What emotion should the viewer feel?
- **Model target**: GPT Images or Gemini? (defaults to Gemini for photo-realism, GPT for text-in-image)

If the user's request is too vague, ask 1-2 targeted questions. Never ask more than 3 questions — infer the rest from context.

### Step 2 — Choose Model

| Criterion | GPT Images (gpt-image-1.5) | Gemini 3 Pro Image |
|-----------|---------------------------|-------------------|
| **Best for** | Text in images, logos, illustrations, editorial | Photo-realism, food, architecture, product |
| **Prompt style** | Structured, descriptive | Narrative paragraphs, cinematic language |
| **Text rendering** | Excellent (quotes, labels) | Limited |
| **Max resolution** | 1024×1024 / 1536 variants | 1K, 2K, 4K |
| **Negative prompts** | Supported (avoid X) | Not supported — reformulate positively |
| **Editing** | Inpainting with masks | Image-to-image with instructions |

### Step 3 — Structure the Prompt

Build the prompt using these 7 elements **in order**. Not all are required for every prompt — use judgment.

#### The 7 Elements

1. **Style / Medium**
   - Photography, digital illustration, watercolor, oil painting, 3D render, pencil sketch, vector art
   - For photography: specify camera feel (editorial, documentary, commercial, lifestyle)

2. **Subject**
   - Detailed description of the main subject
   - Be specific: "a steaming bowl of hand-pulled ramen with chashu pork" not "a bowl of noodles"
   - Include textures, colors, materials, states (melting, steaming, glistening)

3. **Environment / Setting**
   - Background, context, location
   - "on a weathered oak table in a sunlit French bistro" not "on a table"
   - Include depth cues: foreground elements, background blur

4. **Lighting**
   - Type: natural, studio, golden hour, overcast, neon, candlelight
   - Direction: side-lit, backlit, top-down, Rembrandt, rim light
   - Quality: soft/diffused, hard/dramatic, dappled

5. **Composition**
   - Camera angle: overhead/flat lay, 45°, eye-level, low angle, Dutch angle
   - Lens: 50mm (natural), 85mm (portrait), 35mm (environmental), macro
   - Framing: close-up, medium shot, wide, rule of thirds, centered, negative space

6. **Palette / Mood**
   - Color temperature: warm, cool, neutral
   - Dominant colors and accents
   - Emotional tone: cozy, dramatic, fresh, nostalgic, luxurious, playful

7. **Technical Details**
   - Aspect ratio (16:9, 1:1, 4:5, 9:16)
   - Resolution preference
   - Special requirements: no text, no watermark, transparent background
   - For GPT Images: any text to render in the image

#### Element Priority by Category

| Category | Must-have elements | Nice-to-have |
|----------|-------------------|--------------|
| Food | Subject, Lighting, Composition | Setting, Palette |
| Product | Subject, Lighting, Style | Composition, Technical |
| Portrait | Subject, Lighting, Mood | Setting, Composition |
| Landscape | Setting, Lighting, Palette | Composition, Style |
| Lifestyle | Subject, Setting, Mood | Lighting, Composition |

### Step 4 — Refine

- Read the prompt aloud — does it paint a clear picture?
- Remove redundancy (don't say "beautiful" — describe what makes it beautiful)
- Check model compatibility (no negatives for Gemini, specify text for GPT)
- Suggest 1-2 variations if the user might want options

---

## Mode B — Brief structuré (depuis social-media-art-director)

Quand l'input est un dossier de direction créative structuré, le workflow change.

### CONTRAINTES NON NÉGOCIABLES (Mode B)

Ces règles s'appliquent à **chaque** prompt généré en Mode B, sans exception :

#### 1. Fidélité produit absolue
Le brief spécifie une **recette** ou une **description exacte du produit** (ingrédients, formes, textures spécifiques). Le prompt DOIT décrire chaque élément avec sa forme exacte telle que spécifiée :
- "parmesan en miettes" → "small, irregular, powdery parmesan crumbles" (PAS "parmesan shavings", PAS "parmesan flakes")
- "oignons rouges en tranches" → "thin slices of raw red onion with visible concentric rings" (PAS "diced onion", PAS "onion chunks")
- "sauce poivron jaune-orangé" → "a subtle warm yellow-orange roasted pepper sauce" (PAS "red sauce", PAS "ketchup-like drizzle")

**Règle** : Ne jamais approximer, interpréter ou remplacer un ingrédient/forme par un synonyme. Si la recette dit "miettes", le prompt dit "crumbles/fragments", jamais "shavings/flakes/chips". La photo référence sert de vérification visuelle — le prompt doit correspondre à ce qu'on voit dans la photo.

#### 2. Résolution toujours 4K
Tout prompt Mode B est destiné à une génération en **4K**. Pas de 1K draft, pas de 2K intermédiaire.
- **Résolution recommandée** = toujours `4K`
- Ne jamais suggérer de "commencer en 1K pour itérer" — le pipeline est conçu pour produire un livrable final en une passe.

#### 3. Instruction photo référence obligatoire
Chaque prompt Mode B est accompagné d'une **photo référence** du produit réel, fournie en input image à Nanobanana. Le prompt DOIT contenir une instruction explicite de fidélité à cette photo. Ajouter systématiquement en fin de prompt :
- Pour Gemini : `"Match the exact appearance, ingredients, and proportions of the burger shown in the reference photo provided."`
- Pour GPT Images : `"Use the reference image as the definitive guide for the product's appearance — match all visible ingredients, their forms, textures, and arrangement exactly."`

Cette instruction est **obligatoire** et ne doit jamais être omise, même si le reste du prompt est très détaillé.

#### 4. Brand props — fidélité packaging
Si la direction créative inclut un brand prop, le prompt DOIT :
- Décrire le matériau exact (papier kraft noir mat, carton recyclé sombre, etc.)
- Spécifier le logo "STRICT FOOD'S" en majuscules condensées bold — **le second O de FOOD est une icône burger stylisée** (cercle avec 3 lignes ondulées = couches burger, base plate = bun bas). L'apostrophe-S fait partie du nom.
- Utiliser la couleur exacte : Cuivre Braisé (#BF8522) sur fond sombre OU blanc sur fond sombre OU noir mat sur kraft clair
- Intégrer le prop comme élément d'environnement/setting, JAMAIS comme sujet principal
- L'éclairage sur le prop suit l'éclairage global (pas de spotlight dédié)
- **OBLIGATOIRE — Fournir le logo en image référence secondaire** : `public/logo/strictfood-logo-reference.png` via `--reference-image` dans la commande de génération. Le prompt DOIT contenir : "Reproduce the exact STRICT FOOD'S logo shown in the second reference image on the branded packaging — especially the burger icon replacing the O."

#### 5. Style v2 — Réalisme documentaire

Chaque prompt Mode B DOIT intégrer des marqueurs de réalisme. Ces règles sont **non négociables** :

| Aspect | Obligation | Interdit |
|--------|-----------|----------|
| Imperfections | Au moins 2 par prompt : miettes tombées, pli du papier, feuille égarée, asymétrie, grain naturel | Perfection symétrique, propreté irréaliste |
| Garnitures | Quantités réalistes : mâche = max 3-5 petites feuilles (certaines pliées/naturelles) | Bouquets luxuriants, couronnes de verdure, grappes parfaites |
| Sauce | Filet unique irrégulier, subtil | Spirale parfaite, nappe épaisse, drizzle graphique |
| Proportions | Burger compact/dense comme le vrai produit | Towering, exagéré, style magazine food |
| Ambiance fond | Cuisine réelle en arrière-plan (inox, surfaces sombres, flou) | Fond studio void noir pur, fond uni numérique |
| Couleur/grain | Film-like natural color, léger grain, tons chauds naturels | HDR, surexposition, post-traitement saturé |
| Photo input | TOUJOURS la photo du produit réel (strict-boeuf.png pour un boeuf) | Cross-product (photo poulet → transformer en boeuf) sauf dernier recours |

**Template d'instructions de réalisme** à intégrer en fin de prompt :
```
The overall feel should be documentary-style food photography — real, slightly imperfect, authentic. NOT a stock photo. Slight natural film grain.
```

---

### Step 1 — Lire les inputs

**Fichiers à lire (dans cet ordre) :**
1. `[dossier-post]/01-art-direction/direction.md` — La fiche de direction créative
2. `production/_recettes/[produit].md` — La recette avec ingrédients et formes exactes
3. `production/_config/pipeline.md` — Le chemin de la photo référence + config DA
4. `production/_config/brand-props.md` — Si la direction créative mentionne un brand prop (champ "Brand props"), lire la description détaillée dans ce catalogue et l'intégrer au prompt.

**Extraire pour chaque visuel :**
- **Composition** → mapper vers Element 5 (angle, lens, framing)
- **Éclairage** → mapper vers Element 4 (type, direction, qualité)
- **Sujet principal + secondaires + absents** → mapper vers Element 2 (subject) + 3 (setting)
- **Palette & Mood** → mapper vers Element 6
- **Texte on-image** → décider du modèle (texte = GPT Images, pas de texte = Gemini)
- **Texture & Détails sensoriels** → enrichir Element 2 avec le vocabulaire sensoriel
- **Dimensions** → mapper vers Element 7
- **Recette / Description produit** → verrouiller chaque ingrédient et sa forme exacte (cf. contrainte 1)
- **Photo référence** → récupérer le chemin depuis `_config/pipeline.md` ou depuis la recette

### Step 2 — Choisir le modèle automatiquement

La règle est simple :
- **Texte on-image = Oui** → GPT Images (gpt-image-1.5)
- **Texte on-image = Non** et **Type = Photo** → Gemini (Nano Banana Pro)
- **Type = Infographie ou Template pur** → GPT Images (meilleure gestion des éléments graphiques)
- **Type = Mixte** → GPT Images si le texte est dominant, Gemini si la photo est dominante avec un texte simple superposable en post-production

### Step 3 — Construire le prompt

**Pour Gemini** : Convertir toutes les informations du brief en un paragraphe narratif fluide de 4-6 phrases. Suivre l'ordre : Style → Subject (avec textures sensorielles) → Setting → Lighting → Composition → Mood. Ne PAS reformuler les "éléments absents" en négatif — les ignorer simplement ou reformuler positivement.

**Pour GPT Images** : Structure descriptive plus modulaire. Inclure le texte exact entre guillemets avec police et placement. Utiliser les exclusions explicites si nécessaires ("No watermark, no other text").

### Step 4 — Vérifier

- [ ] Le prompt couvre-t-il TOUS les éléments spécifiés dans la fiche de direction créative ?
- [ ] Les textures et détails sensoriels du brief sont-ils traduits en vocabulaire de prompt ?
- [ ] Le modèle choisi est-il compatible avec les exigences (texte, photo-réalisme) ?
- [ ] Le prompt fait-il 4-6 phrases (pas plus de 8) ?
- [ ] Pour un carrousel : chaque prompt est-il cohérent avec les autres tout en étant autonome ?
- [ ] Les "éléments absents" du brief ne sont-ils PAS mentionnés dans le prompt (même en négatif pour Gemini) ?

### Step 5 — Livrer

Pour chaque visuel, fournir :

```
## Prompt — Visuel [N] / [N total]

**Model**: [GPT Images / Gemini]
**Category**: [Food / Product / Portrait / Lifestyle / Infographic / Other]
**Aspect Ratio**: [selon la fiche]
**Résolution** : 4K
**Photo référence** : [chemin du fichier — à fournir en input image à Nanobanana/GPT]

**Recette / Produit** :
[Liste exacte des ingrédients et leurs formes, copiée depuis le brief — sert de checklist de fidélité]

**Prompt**:
[Le prompt complet, prêt à copier-coller. DOIT contenir l'instruction de fidélité photo référence en fin de prompt.]

**Notes de post-production** : [si applicable]
```

Si le brief contient un carrousel de N slides, livrer N prompts dans l'ordre, chacun avec son bloc formaté.

**Écrire l'output** dans `[dossier-post]/02-prompt/prompt.md`

---

## Mapping Brief → Prompt (référence rapide)

| Champ du brief (art director) | Element du prompt | Notes |
|-------------------------------|-------------------|-------|
| Cadrage | Composition / Framing | plan serré → close-up, plan large → wide shot |
| Angle de prise de vue | Composition / Camera angle | 3/4 → 45-degree, contre-plongée → low angle |
| Sujet principal | Subject | Enrichir avec les textures du brief |
| Éléments secondaires | Setting / Environment | Background elements, props |
| Éléments absents | — | NE PAS mentionner. Pour GPT : exclusion explicite. Pour Gemini : ignorer. |
| Type d'éclairage | Lighting / Type | Mapper directement |
| Direction d'éclairage | Lighting / Direction | "latéral gauche" → "side-lit from the left" |
| Qualité d'éclairage | Lighting / Quality | "doux et diffus" → "soft, diffused" |
| Température lumière | Lighting + Palette | "chaud doré" → "warm golden tones" |
| Palette dominante | Palette / Colors | Traduire les couleurs DA en descriptions visuelles |
| Ambiance | Mood | 1-2 mots → développer en atmosphère narrative |
| Texte on-image (contenu) | Technical / Text | Exact entre guillemets, spécifier police et placement |
| Texte on-image (typo) | Technical / Text | "Oswald bold" → "bold condensed sans-serif" |
| Texture à mettre en valeur | Subject / Sensory | Utiliser le vocabulaire de `food-photography.md` |
| Mouvement | Subject / Action | "fromage qui file" → "stretching melted cheese" |
| Zone de respiration | Composition / Framing | "tiers supérieur dégagé" → "generous negative space in the upper third" |
| Brand props (ID + placement) | Setting / Environment | Lire description dans brand-props.md, traduire matériaux/textures/logo en prompt. Élément de Setting, pas de Subject. |

---

## Rules

1. **Narrative over keywords**: Write flowing descriptions, not comma-separated tags. "A steaming espresso in a ceramic cup on a marble counter, side-lit by morning sun through a café window" beats "espresso, ceramic cup, marble, side lighting, café, morning".

2. **Be specific, not generic**: Replace vague adjectives with concrete details. "Beautiful sunset" → "Golden hour light casting long amber shadows across wet sand, sky graduating from peach to deep violet".

3. **No negative prompts for Gemini**: Instead of "no blur, no artifacts", describe what you want positively: "tack-sharp focus on the subject with creamy bokeh background".

4. **Front-load the important parts**: Models weight the beginning of prompts more heavily. Put the style and subject first.

5. **Match prompt length to complexity**: Simple subjects need 1-3 sentences. Complex scenes need 4-6. Never exceed 8 sentences for a single prompt.

6. **Include sensory cues**: Textures (crispy, velvety, rough), temperatures (steaming, frosted), sounds implied by the scene (bustling market, quiet studio).

7. **Specify what you DON'T want only for GPT Images**: Use "without" or "no" sparingly and only with GPT. For Gemini, always reformulate positively.

8. **Context drives choices**: A menu photo needs clean isolation. An Instagram post needs lifestyle context. A billboard needs bold simplicity. Always consider the end use.

9. **Aspect ratio matters**: Portrait subjects → 4:5 or 9:16. Landscapes → 16:9. Products → 1:1. Social media → platform-specific.

10. **Iterate, don't restart**: When refining, change one element at a time. Track what works.

11. **Brief structuré = pas de questions** : Quand l'input vient du skill art director, toute l'information nécessaire est déjà là. Ne PAS demander de clarification — traduire directement. Si un champ est manquant, inférer la meilleure option.

12. **Cohérence carrousel** : Pour un set de prompts de carrousel, maintenir un fil conducteur visuel (même palette, même qualité de lumière) tout en variant suffisamment chaque slide (angle, cadrage, sujet).

## Anti-Patterns

| Bad | Why | Fix |
|-----|-----|-----|
| "A nice photo of food" | Too vague, zero specificity | "A close-up photo of a golden-brown croque monsieur on a white plate, melted gruyère stretching as it's cut, side-lit by soft window light" |
| "4K, HDR, ultra-realistic, 8K, masterpiece" | Keyword stuffing, models ignore most | Pick one quality indicator and describe the scene instead |
| "NOT blurry, NO watermark, without artifacts" | Negative prompts don't work on Gemini, waste tokens | "Tack-sharp focus, clean composition" |
| "A person standing" | No context, lighting, mood, or purpose | "A young barista in a linen apron, smiling while pouring latte art, warm morning light filtering through a café window, shot at 85mm f/1.8" |
| Prompt > 10 sentences | Diminishing returns, model confusion | Distill to 4-6 impactful sentences |
| "Make it look professional" | Subjective, unactionable | Specify what "professional" means: consistent lighting, clean background, styled props |
| Poser des questions quand le brief est complet | Perte de temps, le brief contient déjà tout | Traduire directement les specs du brief en prompt |
| Ignorer les textures du brief | Le prompt perd en spécificité sensorielle | Toujours mapper les champs "Texture" et "Mouvement" du brief |

## Output Format

**Mode A (requête libre) :**
```
**Model**: [GPT Images / Gemini]
**Category**: [Food / Product / Portrait / Lifestyle / Architecture / Other]
**Aspect Ratio**: [16:9 / 1:1 / 4:5 / 9:16]

**Prompt**:
[The complete, ready-to-use prompt]
```

**Mode B (brief structuré) :**
```
## Prompt — Visuel [N] / [N total]

**Model**: [GPT Images / Gemini]
**Category**: [Food / Product / Portrait / Lifestyle / Infographic / Other]
**Aspect Ratio**: [from brief]
**Résolution** : 4K
**Photo référence** : [chemin du fichier — à fournir en input image]

**Recette / Produit** :
[Liste exacte des ingrédients et formes — checklist fidélité]

**Prompt**:
[The complete prompt, incluant l'instruction de fidélité photo référence en fin de prompt]

**Notes de post-production** : [si applicable]
```

If the user wants both models, provide two separate prompts with model-specific optimizations.

## Specialized References

For detailed guidance, consult these reference files in `references/`:

- **`gpt-images-best-practices.md`** — OpenAI-specific parameters, text rendering, multi-image inputs
- **`gemini-best-practices.md`** — Gemini narrative style, resolution options, photography language
- **`food-photography.md`** — Food-specific lighting, plating, texture vocabulary, angles
- **`prompt-templates.md`** — Fill-in-the-blank templates for food, product, portrait, architecture
- **`few-shot-examples.md`** — 20 real input→prompt examples by model and category

## Integration with /nano-banana-pro

When chaining with `/nano-banana-pro`:
1. Craft the prompt using this skill's workflow
2. Pass the prompt directly to nano-banana-pro's `--prompt` parameter
3. **Résolution : toujours 4K en Mode B** (pas de draft 1K, pas de 2K intermédiaire)
4. **Fournir la photo référence en input image** — c'est obligatoire en Mode B. Nanobanana reçoit la photo + le prompt et doit produire un visuel fidèle au produit réel.
5. For edits: craft the editing instruction as a focused, action-oriented prompt

## Pipeline Position

```
Calendrier éditorial (brief stratégique)
        ↓                                    ╮
   social-media-art-director                 │
   (direction créative détaillée)            │ Photo référence produit
   ⚠ Ne voit PAS la photo référence          │ (fournie par l'opérateur)
        ↓                                    │
   [CE SKILL] image-prompt-engineer  ←───────╯
   Reçoit : fiche art director + photo référence + recette
   Produit : prompt qui fusionne direction créative + fidélité produit
        ↓
   Nano Banana Pro / GPT Images
   Reçoit : prompt + photo référence en input image
   Produit : visuel final en 4K
```

**Rôle de chaque input dans le prompt :**
- **Fiche art director** → Détermine le COMMENT (angle, éclairage, composition, mood, fond, texte)
- **Photo référence** → Détermine le QUOI (apparence exacte du produit, ingrédients, proportions)
- **Recette** → Verrouille la fidélité ingrédients dans le texte du prompt (filet de sécurité si la photo ne suffit pas)

## Quick Reference Card

```
STYLE → SUBJECT → SETTING → LIGHT → COMPOSITION → MOOD → TECHNICAL
  ↓        ↓         ↓        ↓          ↓           ↓        ↓
photo    what      where    how lit    camera      feeling   specs
```
