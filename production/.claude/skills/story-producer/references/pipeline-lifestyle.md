# SOUS-PIPELINE LIFESTYLE -- `full-ia` lifestyle (30%)

Pipeline en 2+ etapes avec recherche Pinterest automatique.

```
Brief -> Pinterest Search -> Analyse photo ref -> Adaptation StrictFood -> Realism Audit PRE -> Prompt Combo-B -> Realism Audit POST -> Gemini 4K 9:16 -> (Logo insertion si pas dans scene) -> brouillons/
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

## L3 -- Adaptation StrictFood

Transformer la reference Pinterest pour l'univers StrictFood :

1. **Signature Charbon × Ambre (15-20% chacun)** : le personnage PORTE la signature via vetements et accessoires. Les deux couleurs doivent etre presentes et couvrir chacune ~15-20% du cadre :
   - **Element charbon** (~15-20%) : vetement sombre (veste noire, t-shirt charbon, casquette sombre, pantalon noir) OU accessoire noir (sac StrictFood noir)
   - **Element ambre** (~15-20%) : accessoire dore/cuivre (echarpe ambre, bijou, sac kraft dore, bonnet dore) OU piece vestimentaire chaude OU lumiere ambre marquee (golden hour, eclairage chaud)
   - **Le sac kraft StrictFood** (noir + logo dore) porte les DEUX couleurs — c'est l'accessoire ideal

2. **Produit StrictFood** : le personnage tient un **sac kraft noir avec logo STRICT FOOD'S** OU un **burger wrapper noir avec logo**
3. **Regard candid** : pas de regard camera direct -- regard de cote, vers le bas, vers le produit. Expression naturelle, pas posee.
4. **Pain noir** : si un burger est visible, TOUJOURS black sesame bun
5. **Aucun logo sur les vetements** sauf StrictFood

## L3b -- Realism Audit PRE-PROMPT (OBLIGATOIRE)

1. **APPELER LE SKILL** : `realism-auditor` en mode PRE-PROMPT
   - Contexte : concept lifestyle + produit StrictFood (si visible) + recette
   - Output : fiche de contraintes realisme
   - Verifie : pain noir, chaleur pulsee, proportions produit, materiaux, regard candid

> **BLOQUANT** : ne PAS passer a L4 sans cette etape. L'audit lifestyle verifie que le produit decrit (sac kraft, burger, wrapper) respecte les contraintes physiques et visuelles.

## L4 -- Prompt Engineering (style Combo-B)

1. **APPELER LE SKILL** : `image-prompt-engineer` (Mode A ou B, style Combo-B)
   - Contexte : description adaptee (personnage, tenue, posture, decor, piece ambre, produit StrictFood) + **contraintes realisme (L3b)**
   - Format : 9:16 (1080x1920)
   - Output : prompt.md

2. **APPELER LE SKILL** : `realism-auditor` en mode POST-PROMPT
   - Contexte : prompt redige
   - Output : prompt audite et corrige
   - Verifie les 8 domaines : mains, fluides, eclairage, perspective, construction, materiaux, proportions, variete

## L5 -- Generation image

```bash
uv run production/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "[prompt]" --filename "[date]-lifestyle-story.png" \
  --resolution 4K --api-key "$GEMINI_API_KEY"
```

## L6 -- Logo insertion (si necessaire)

Si le logo STRICT FOOD'S n'est pas visible dans la scene (pas de sac kraft, pas de wrapper) :
1. **Inserer le logo** via template overlay ou edition image
2. Position : bas de la story (zone safe)

Output dans `brouillons/`. Puis appliquer le template (traitement) si != photo-pure.
