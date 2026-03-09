# Production — Pipeline Contenu Social Media

## Structure

```
production/
├── _recettes/                    # Fiches produit réutilisables (1 fichier = 1 produit)
│   ├── strict-boeuf.md
│   ├── strict-poulet.md
│   ├── strict-max-boeuf.md
│   └── ...
├── _config/
│   └── pipeline.md               # Configuration du pipeline (chemins photos ref, DA, etc.)
├── YYYY-MM-DD/                   # Un dossier par post, nommé par date de publication
│   ├── 00-brief/
│   │   └── brief.md              # Brief stratégique (extrait du calendrier éditorial)
│   ├── 01-art-direction/
│   │   └── direction.md          # Fiche direction créative (output social-media-art-director)
│   ├── 02-prompt/
│   │   └── prompt.md             # Prompt Nanobanana/GPT (output image-prompt-engineer)
│   └── 03-output/
│       └── [visuels finaux]      # Images générées (.png, .jpg)
```

## Pipeline

```
00-brief/brief.md
    + _recettes/[produit].md
    + _config/pipeline.md (chemins photos ref, DA)
        ↓
    Skill: social-media-art-director
    Input : brief + recette
    Output → 01-art-direction/direction.md
        ↓                                     ╮
    Skill: image-prompt-engineer               │ Photo référence
    Input : direction.md + recette + photo ref │ (chemin dans _config)
    Output → 02-prompt/prompt.md               │
        ↓                                     ╯
    Nanobanana Pro / GPT Images
    Input : prompt + photo référence en input image
    Output → 03-output/
```

## Commandes Claude Code

```bash
# Exécuter une étape sur un post
# Étape 1 → 2 : Brief → Art Direction
"Lis production/2026-03-10/00-brief/brief.md et la recette associée, puis exécute le skill social-media-art-director. Écris l'output dans 01-art-direction/direction.md"

# Étape 2 → 3 : Art Direction → Prompt
"Lis production/2026-03-10/01-art-direction/direction.md, la recette, et la photo référence. Exécute le skill image-prompt-engineer en Mode B. Écris l'output dans 02-prompt/prompt.md"

# Le prompt est ensuite copié dans Nanobanana manuellement avec la photo référence
```

## Conventions

- **Dates** : format ISO `YYYY-MM-DD`
- **Recettes** : slug du produit en kebab-case (`strict-boeuf.md`, `strict-max-poulet.md`)
- **Photos référence** : chemins relatifs depuis la racine projet, stockés dans `_config/pipeline.md`
- **Un post = un dossier** : même si le post est un carrousel, tout reste dans le même dossier date
