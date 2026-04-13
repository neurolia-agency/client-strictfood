# SOUS-PIPELINE FOOD -- `full-ia` food (40%)

Gemini genere une image food (produit DECRIT + scene). Aucune photo en input.

```
Brief -> Art Direction -> Input Mapping -> CHECKPOINT -> Realism Audit -> Prompt Combo-B -> Gemini 2K 9:16 -> brouillons/
```

## F1 -- Art Direction

1. Lire la fiche recette `production/_recettes/[slug].md`
2. Lire la config DA `production/_config/pipeline.md`
3. **APPELER LE SKILL** : `social-media-art-director`
   - Contexte : brief + recette + config DA + fond assigne
   - Output : art-direction dans le dossier production de la story

## F2 -- Input Mapping

1. **SPAWNER L'AGENT** : `input-mapper`
   - L'agent lit la direction, consulte `_config/photo-references.md` et `_recettes/`
   - **Le produit est DECRIT textuellement** (jamais de photo en input)
   - Output : input.md dans le dossier production de la story

## CHECKPOINT FOOD

Afficher le mapping a l'operateur. Attendre validation.

## F3 -- Realism Audit (obligatoire)

1. **APPELER LE SKILL** : `realism-auditor` en mode PRE-PROMPT
   - Contexte : concept + produit + recette
   - Output : fiche de contraintes realisme

## F4 -- Prompt Engineering

1. **APPELER LE SKILL** : `image-prompt-engineer` (Mode B, style Combo-B)
   - Contexte : art-direction + input + contraintes realisme
   - Format : 9:16 (1080x1920)
   - Output : prompt.md

2. **APPELER LE SKILL** : `realism-auditor` en mode POST-PROMPT
   - Output : prompt audite et corrige

## F5 -- Generation image

```bash
uv run production/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "[prompt]" --filename "[date]-[slug]-story-food.png" \
  --resolution 2K --api-key "$GEMINI_API_KEY"
```

Output dans `brouillons/`. Puis appliquer le template (traitement) si != photo-pure.
