# Production Instagram StrictFood

Pipeline de production de visuels "Dark Food Premium" pour le compte @strictfood.

## Comment produire un post

### 1. Ecrire le brief

Creer le dossier du post et rediger le brief :

```
production/periode-1/S1/YYYY-MM-DD/00-brief/brief.md
```

Template : `_templates/brief-v2.md`

Le brief contient : Pilier, Format, Objectif, Produit (avec slug recette), Caption, Contraintes.
Le brief ne contient **jamais** de lien vers une photo ou une recette complete.

### 2. Lancer le pipeline

```
/instagram-producer YYYY-MM-DD
```

L'orchestrateur enchaine automatiquement les etapes 3 a 6.

### 3. Art Direction (automatique)

Skill `/social-media-art-director` lit le brief + la recette + la config DA.
Ecrit `01-art-direction/direction.md`.

### 4. Input Mapping (automatique)

Agent `input-mapper` (Haiku) lit la direction creative, identifie les produits verrouilles, et resout les liens vers les photos et recettes.
Ecrit `00-input/input.md`.

### 5. Validation operateur

Le pipeline s'arrete. L'operateur verifie le mapping produit → photo et valide.

### 6. Prompt Engineering (automatique)

Skill `/image-prompt-engineer` (Mode B) lit la direction + l'input mapping.
Ecrit `02-prompt/prompt.md`.

### 7. Generation image

La commande `/nano-banana-pro` ou GPT Images est assemblee et proposee a l'operateur.
Output dans `03-output/`.

## Structure d'un post

```
production/periode-1/S1/YYYY-MM-DD/
  00-brief/brief.md              ← Ecrit par l'operateur
  00-input/input.md              ← Genere par input-mapper
  01-art-direction/direction.md  ← Genere par /social-media-art-director
  02-prompt/prompt.md            ← Genere par /image-prompt-engineer
  03-output/*.png                ← Genere par /nano-banana-pro (4K)
```

## Ressources partagees

| Dossier | Role |
|---------|------|
| `_config/pipeline.md` | Configuration DA du pipeline |
| `_config/photo-references.md` | Mapping centralise produit → photo |
| `_config/brand-props.md` | Props physiques de marque |
| `_recettes/` | Fiches recettes par produit (slug kebab-case) |
| `_templates/brief-v2.md` | Template de brief |

## Separation des responsabilites

| Etape | Voit | Ne voit PAS |
|-------|------|-------------|
| Art Director | Brief, Recette (formes), DA | Photos |
| Input Mapper | Direction creative, Photos, Recettes | Brief |
| Prompt Engineer | Direction + Input (tout) | Brief original |

## Conventions

- **Dates** : format ISO `YYYY-MM-DD`
- **Recettes** : slug kebab-case (`strict-boeuf.md`, `strict-max-poulet.md`)
- **Resolution** : toujours 4K
- **API key** : `$GEMINI_API_KEY` (jamais en dur)
- **Direction et prompt** : toujours generes par les skills, jamais ecrits a la main
