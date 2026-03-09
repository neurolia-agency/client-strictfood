# Production Instagram StrictFood

Pipeline de production de visuels pour le compte @strictfood.

## Commande principale

```
/instagram-producer YYYY-MM-DD
```

L'orchestrateur enchaine toutes les etapes automatiquement. Toujours preferer l'orchestrateur aux commandes manuelles.

## Pipeline — Flux sequentiel

```
00-brief/brief.md
    |
    v
[1] /social-media-art-director  →  01-art-direction/direction.md
    |
    v
[2] Agent: input-mapper          →  00-input/input.md
    |
    v
 CHECKPOINT — Validation operateur
    |
    v
[3] /image-prompt-engineer        →  02-prompt/prompt.md
    |
    v
[4] /nano-banana-pro              →  03-output/*.png
```

## Skills et agents du pipeline

### Skills

| Etape | Skill | Scope | Emplacement | Invocation |
|-------|-------|-------|-------------|------------|
| Orchestration | `instagram-producer` | Projet | `.claude/skills/instagram-producer/` | `/instagram-producer YYYY-MM-DD` |
| Art Direction | `social-media-art-director` | Workspace | `neurolia-agency/.claude/skills/social-media-art-director/` | `/social-media-art-director` |
| Prompt Engineering | `image-prompt-engineer` | Global | `~/.claude/skills/image-prompt-engineer/` | `/image-prompt-engineer` (Mode B) |
| Generation image | `nano-banana-pro` | Global | `~/.claude/skills/nano-banana-pro/` | `/nano-banana-pro --resolution 4K` |

### Agent

| Etape | Agent | Modele | Emplacement | Outils |
|-------|-------|--------|-------------|--------|
| Input Mapping | `input-mapper` | Haiku | `.claude/agents/input-mapper.md` | Read, Glob, Grep, Write |

## Separation des responsabilites

| Etape | Voit | Ne voit PAS |
|-------|------|-------------|
| Art Director (skill) | Brief, Recette (formes), DA | Photos |
| Input Mapper (agent) | Direction creative, Photos (descriptions), Recettes | Brief |
| Prompt Engineer (skill) | Direction + Input (tout) | Brief original |

## Structure d'un post

```
production/phase-1/S1/YYYY-MM-DD/
  00-brief/brief.md         ← Brief operateur (template: _templates/brief-v2.md)
  00-input/input.md          ← Genere par input-mapper
  01-art-direction/direction.md  ← Genere par /social-media-art-director
  02-prompt/prompt.md        ← Genere par /image-prompt-engineer
  03-output/*.png            ← Genere par /nano-banana-pro (4K)
```

## Ressources partagees

| Dossier | Contenu |
|---------|---------|
| `_config/pipeline.md` | Configuration DA du pipeline |
| `_config/photo-references.md` | Mapping centralise produit → photo |
| `_recettes/` | Fiches recettes par produit (slug kebab-case) |
| `_templates/brief-v2.md` | Template de brief |

## Regles

- **Dates** : format ISO `YYYY-MM-DD` pour les dossiers post
- **Resolution** : toujours 4K en production
- **API key** : `$GEMINI_API_KEY` (variable d'environnement, jamais en dur)
- **Le brief ne contient PAS de liens vers photos/recettes** — c'est l'input mapper qui resout
- **Ne JAMAIS ecrire direction/prompt a la main** — toujours via les skills dedies
