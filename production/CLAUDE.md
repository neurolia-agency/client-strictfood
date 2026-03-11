# Production Instagram StrictFood

Pipeline de production de visuels pour le compte @strictfood.

## Commande principale — Posts

```
/instagram-producer S1 2026-03-15
```

L'orchestrateur enchaine toutes les etapes automatiquement. Toujours preferer l'orchestrateur aux commandes manuelles.

## Pipeline Posts — Flux sequentiel

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

## Skills et agents du pipeline posts

### Skills

| Etape | Skill | Emplacement | Invocation |
|-------|-------|-------------|------------|
| Orchestration | `instagram-producer` | `production/.claude/skills/instagram-producer/` | `/instagram-producer S1 YYYY-MM-DD` |
| Art Direction | `social-media-art-director` | `production/.claude/skills/social-media-art-director/` | `/social-media-art-director` |
| Prompt Engineering | `image-prompt-engineer` | `production/.claude/skills/image-prompt-engineer/` | `/image-prompt-engineer` (Mode B) |
| Generation image | `nano-banana-pro` | `production/.claude/skills/nano-banana-pro/` | `/nano-banana-pro --resolution 4K` |

### Agent

| Etape | Agent | Modele | Emplacement | Outils |
|-------|-------|--------|-------------|--------|
| Input Mapping | `input-mapper` | Haiku | `production/.claude/agents/input-mapper.md` | Read, Glob, Grep, Write |

## Separation des responsabilites

| Etape | Voit | Ne voit PAS |
|-------|------|-------------|
| Art Director (skill) | Brief, Recette (formes), DA | Photos |
| Input Mapper (agent) | Direction creative, Photos (descriptions), Recettes | Brief |
| Prompt Engineer (skill) | Direction + Input (tout) | Brief original |

## Structure d'un post

```
production/posts-stories/posts/periode-1/S1/YYYY-MM-DD/
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
| `_templates/brief-v2.md` | Template de brief post |
| `_templates/brief-story.md` | Template de brief story |

## Regles

- **Dates** : format ISO `YYYY-MM-DD` pour les dossiers post
- **Resolution** : toujours 4K en production
- **API key** : `$GEMINI_API_KEY` (variable d'environnement, jamais en dur)
- **Le brief ne contient PAS de liens vers photos/recettes** — c'est l'input mapper qui resout
- **Ne JAMAIS ecrire direction/prompt a la main** — toujours via les skills dedies

---

## Pipeline Stories Instagram

### Commande principale

```
/story-producer S1 lundi        # Story unique
/story-producer S1              # Batch semaine complete
```

### Flux sequentiel (3 etapes)

```
brief-story.md
    |
    v
[1] Agent: story-data-mapper    →  story-NN-data.md  (si donnees produit)
    |
    v
 CHECKPOINT — Validation operateur
    |
    v
[2] Template fill + render       →  story-NN.html + story-NN.png/jpg
```

Pipeline plus leger que les posts : pas d'art direction ni de generation IA. Les stories utilisent des **templates HTML parametres** rendus en PNG via Puppeteer.

### Types de stories

| Type | Template | Pipeline | Qui |
|------|----------|----------|-----|
| Fiche Produit | `fiche-produit.html` | Oui | Pipeline |
| Teaser | `teaser-post.html` | Oui | Pipeline |
| Interactif | `interactif.html` | Oui | Pipeline |
| Educatif | `educatif.html` | Oui | Pipeline |
| Annonce | `annonce.html` | Oui | Pipeline |
| Coulisse / Lieu / Ambiance | — ou `annonce.html` | Partiel (vérif bib — Étape 1b) | Pipeline ou Romain/Dorian |
| CTA / Récap | — | Non | Romain/Dorian |

### Skills et agents du pipeline stories

| Etape | Outil | Emplacement |
|-------|-------|-------------|
| Orchestration | Skill `story-producer` | `production/.claude/skills/story-producer/` |
| Data Mapping | Agent `story-data-mapper` (Haiku) | `production/posts-stories/stories/.claude/agents/story-data-mapper.md` |
| Templates HTML | 5 templates parametres | `production/posts-stories/stories/_templates/` |
| CSS partage | Base + logo | `production/posts-stories/stories/_templates/_base/` |
| Rendu | Script Puppeteer | `production/posts-stories/stories/_scripts/render-story.js` |

### Structure d'un jour (multi-story)

```
production/posts-stories/stories/S1/lundi/
  brief-story.md            ← Brief operateur (toutes les stories du jour)
  story-01-data.md          ← Donnees Story 1
  story-01.html             ← Template rempli Story 1
  story-01.png / .jpg       ← Rendu final Story 1 (1080x1920)
  story-03-data.md          ← Donnees Story 3 (la 2 est capture terrain)
  story-03.html / .png / .jpg
```

### Ressources stories

| Dossier | Contenu |
|---------|---------|
| `posts-stories/stories/_templates/` | 5 templates HTML parametres |
| `posts-stories/stories/_templates/_base/` | CSS partage + logo SVG |
| `posts-stories/stories/_scripts/render-story.js` | Rendu Puppeteer 1080x1920 |
| `_templates/brief-story.md` | Template de brief story |
| `_recettes/` | Fiches recettes (source de donnees pour story-data-mapper) |

---

## Arborescence posts-stories

```
production/posts-stories/
  posts/
    periode-1/S1/YYYY-MM-DD/...   ← Posts Instagram (pipeline IA)
    periode-1/S2/YYYY-MM-DD/...
    periode-2/S5-S8/...
    periode-3/S9-S12/...
  stories/
    _templates/                     ← Templates HTML parametres
    _scripts/                       ← Puppeteer render
    S1/{lundi..samedi}/             ← Briefs + output stories
    S2/{lundi..dimanche}/
```
