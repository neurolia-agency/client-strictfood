# Production Instagram StrictFood

Pipeline de production de visuels pour le compte @strictfood.

## Commande principale

```
/instagram-producer YYYY-MM-DD
```

**ALWAYS** utiliser l'orchestrateur. **NEVER** ecrire direction/prompt a la main.

## Pipeline — Flux sequentiel

```
00-brief/brief.md           ← Operateur (template: _templates/brief-v2.md)
    ↓
[1] /social-media-art-director  →  01-art-direction/direction.md
    ↓
[2] Agent: input-mapper          →  00-input/input.md
    ↓
 🔒 CHECKPOINT — Validation operateur
    ↓
[3] /image-prompt-engineer       →  02-prompt/prompt.md
    ↓
[4] /nano-banana-pro             →  03-output/*.png (4K)
```

## Separation des responsabilites

| Etape | Voit | Ne voit PAS |
|-------|------|-------------|
| Art Director | Brief, Recette (formes), DA config | Photos |
| Input Mapper | Direction creative, Photos (descriptions), Recettes | Brief |
| Prompt Engineer | Direction + Input (tout) | Brief original |

## Skills & Agents

| Etape | Outil | Type | Modele | Invocation |
|-------|-------|------|--------|------------|
| Orchestration | `instagram-producer` | Skill | — | `/instagram-producer YYYY-MM-DD` |
| Art Direction | `social-media-art-director` | Skill | — | `/social-media-art-director` |
| Input Mapping | `input-mapper` | Agent | Haiku | Auto (via orchestrateur) |
| Prompt | `image-prompt-engineer` | Skill | — | `/image-prompt-engineer` (Mode B) |
| Generation | `nano-banana-pro` | Skill | Gemini 3 Pro | `/nano-banana-pro --resolution 4K` |

## Architecture

```
production/
├── CLAUDE.md                  # Ce fichier
├── idees-posts.md             # Idees de posts futurs
│
├── _config/                   # Configuration partagee
│   ├── pipeline.md            # DA, agents, modeles, resolution
│   ├── photo-references.md    # Mapping produit → photos (descriptions texte)
│   └── brand-props.md         # Catalogue accessoires marque (wrapper, cup, etc.)
│
├── _recettes/                 # Fiches produit (8 fiches, slug kebab-case)
│   ├── strict-boeuf.md
│   ├── strict-max-boeuf.md
│   ├── strict-poulet.md
│   ├── strict-max-poulet.md
│   ├── strict-vege-falafel.md
│   ├── strict-wrap-boeuf.md
│   ├── strict-wrap-poulet.md
│   └── tenders-strict.md
│
├── _templates/                # Templates operateur
│   ├── brief-v2.md            # Template brief standard
│   ├── guide-operateur.md     # Guide pas-a-pas complet
│   └── sublimation-burger.md  # Template carousel sublimation
│
├── .claude/
│   ├── agents/
│   │   └── input-mapper.md    # Mappe produit → photos + recettes
│   └── skills/
│       ├── instagram-producer/       # Orchestrateur
│       ├── social-media-art-director/ # Direction creative
│       ├── image-prompt-engineer/     # Prompts (+ references/)
│       └── nano-banana-pro/           # Generation image (+ scripts/)
│
└── post-stories/              # Output production
    ├── posts/
    │   └── periode-1/
    │       ├── S1/            # Semaine 1
    │       │   └── YYYY-MM-DD/
    │       └── S2/            # Semaine 2
    │           └── YYYY-MM-DD/
    └── stories/
        └── DD-MM-YYYY/        # Stories exportees (HTML + PNG + JPG)
```

## Structure d'un post

```
post-stories/posts/periode-1/S[n]/YYYY-MM-DD/
├── 00-brief/brief.md              ← Operateur
├── 00-input/input.md              ← input-mapper (auto)
├── 01-art-direction/direction.md  ← /social-media-art-director (auto)
├── 02-prompt/prompt.md            ← /image-prompt-engineer (auto)
└── 03-output/*.png                ← /nano-banana-pro (4K)
```

## Statut Posts — Periode 1

### S1

| Date | Brief | Direction | Input | Prompt | Output | Note |
|------|-------|-----------|-------|--------|--------|------|
| 2026-03-10 | ✅ | ✅ | ✅ | ✅ | ✅ 3 PNG | v1 (pre-pipeline) |
| 2026-03-12 | ✅ | ✅ | ✅ | ⬜ | ⬜ | |
| 2026-03-14 | ✅ | ✅ | ✅ | ✅ | ✅ 1 PNG | |
| 2026-03-16 | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | |

### S2

| Date | Brief | Direction | Input | Prompt | Output | Note |
|------|-------|-----------|-------|--------|--------|------|
| 2026-03-17 | ✅ | ✅ | ✅ | ✅ | ⬜ | |
| 2026-03-19 | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | |
| 2026-03-21 | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | |
| 2026-03-23 | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | |

## Sources de verite

| Domaine | Source |
|---------|--------|
| Photos produits | `_config/photo-references.md` (descriptions texte, jamais d'images) |
| Accessoires marque | `_config/brand-props.md` (BRAND_PRESENCE = 4/10) |
| Configuration DA | `_config/pipeline.md` |
| Recettes | `_recettes/[slug].md` (formes exactes ingredients + fournisseurs) |
| Template brief | `_templates/brief-v2.md` |
| Guide operateur | `_templates/guide-operateur.md` |
| Photos fichiers | `../public/images/photos-references/` (dark-bg, produits-source, contexte) |
| Tokens CSS | `../app/globals.css` |

## Regles

- **Dates** : format ISO `YYYY-MM-DD` pour les dossiers post
- **Resolution** : **ALWAYS** 4K, jamais de draft
- **API key** : `$GEMINI_API_KEY` (variable d'environnement, **NEVER** en dur)
- **Brief** : ne contient PAS de liens vers photos/recettes — l'input mapper resout
- **Modele** : Gemini (photo sans texte) / GPT Images (texte on-image)
- **Brand props** : max 2 par visuel, produit toujours hero (60-70% attention)
- **Rotation** : l'input mapper alterne les variantes photo pour eviter la repetition
- **Posts v1** : `2026-03-10/` et `2026-03-12/` sont pre-pipeline — ne PAS utiliser comme template
