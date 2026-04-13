# SOUS-PIPELINE LIFESTYLE -- `full-ia` lifestyle (30%)

Pipeline en 2+ etapes avec recherche Pinterest automatique.

```
Brief -> Pinterest Search -> Analyse photo ref -> Adaptation StrictFood -> ART DIRECTION (invention) -> Realism Audit PRE -> Prompt Combo-B -> Realism Audit POST -> Gemini 2K 9:16 -> (Logo insertion si pas dans scene) -> brouillons/
```

## L1 -- Recherche Pinterest automatique

1. **Construire les mots-cles** depuis le brief :
   - Theme lifestyle du brief (ex: "street style", "cafe morning", "gym post-workout")
   - Ajouter TOUJOURS "couleur vive" aux mots-cles
   - Exemples : "street style burger couleur vive", "cafe morning healthy food couleur vive"

2. **Rechercher sur Pinterest** via web search :
   - Chercher 5-10 images de reference
   - Selectionner la meilleure (composition, couleurs, posture, potentiel adaptation)

## L2 -- Analyse photo reference

1. **Ouvrir et analyser la photo Pinterest selectionnee** :
   - **Personnage** : morphologie, age apparent, style
   - **Tenue** : couleurs, style, pieces cles
   - **Posture** : debout/assis, angle, expression
   - **Decor** : environnement, lumiere, palette de couleurs

## L3 -- Adaptation StrictFood (contraintes de base)

Appliquer les contraintes non negociables a la reference Pinterest :

1. **Regard candid** : pas de regard camera direct -- regard de cote, vers le bas, vers le produit. Expression naturelle, pas posee.
2. **Pain noir** : si un burger est visible, TOUJOURS black sesame bun
3. **Aucun logo sur les vetements** sauf StrictFood
4. **Produit StrictFood** : le personnage tient un **sac kraft noir avec logo STRICT FOOD'S** OU un **burger wrapper noir avec logo**

## L3b -- Art Direction (OBLIGATOIRE — invention creative)

**APPELER LE SKILL** : `social-media-art-director`
- **Input** : brief lifestyle + photo Pinterest analysee + concept visuel du brief + intention emotionnelle + fond assigne
- **Mandat** : le skill ne se contente PAS d'adapter la photo Pinterest — il INVENTE une mise en scene unique qui respecte la reference mais l'enrichit. Il decide :
  - **Signature Charbon × Ambre** : quels vetements/accessoires portent les 15-20% de chaque couleur ? Quel article precis (pas "un vetement sombre" — "une veste bomber noire mate, zip cuivre visible") ?
  - **L'accessoire ambre** : quel objet dore/cuivre specifique ? Ou est-il place ? Comment capte-t-il la lumiere ?
  - **La scene** : quel detail narratif rend cette story unique ? (ex: un sac kraft pose sur un muret, une main qui sort un burger du sac, des miettes sur le jean)
  - **L'eclairage** : quelle lumiere precise, quelle direction, quel mood ? (pas juste "golden hour" — "soleil rasant 15 degres depuis la gauche, ombre longue du personnage sur le trottoir")
  - **Le cadrage** : quel fragment du personnage est visible ? Quelle proportion produit vs humain ?
- **Output** : `art-direction.md` dans le dossier production de la story

> L'art-director INVENTE. Il ne se contente pas de mapper les contraintes — il cree un visuel que le catalogue de combinaisons n'aurait pas propose. C'est ici que la creativite entre dans le pipeline.

## L3c -- Realism Audit PRE-PROMPT (OBLIGATOIRE)

1. **APPELER LE SKILL** : `realism-auditor` en mode PRE-PROMPT
   - Contexte : art-direction lifestyle + produit StrictFood (si visible) + recette
   - Output : fiche de contraintes realisme
   - Verifie : pain noir, chaleur pulsee, proportions produit, materiaux, regard candid, signature charbon×ambre

> **BLOQUANT** : ne PAS passer a L4 sans cette etape.

## L4 -- Prompt Engineering (style Combo-B)

1. **APPELER LE SKILL** : `image-prompt-engineer` (Mode A ou B, style Combo-B)
   - Contexte : **art-direction.md** (PAS la photo Pinterest brute) + contraintes realisme (L3c)
   - Format : 9:16 (1080x1920)
   - Output : prompt.md

2. **APPELER LE SKILL** : `realism-auditor` en mode POST-PROMPT
   - Contexte : prompt redige
   - Output : prompt audite et corrige
   - Verifie les 10 domaines

## L5 -- Generation image

```bash
uv run production/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "[prompt]" --filename "[date]-lifestyle-story.png" \
  --resolution 2K --api-key "$GEMINI_API_KEY"
```

## L6 -- Logo insertion (si necessaire)

Si le logo STRICT FOOD'S n'est pas visible dans la scene (pas de sac kraft, pas de wrapper) :
1. **Inserer le logo** via template overlay ou edition image
2. Position : bas de la story (zone safe)

Output dans `brouillons/`. Puis appliquer le template (traitement) si != photo-pure.
