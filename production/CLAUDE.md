# Production Instagram StrictFood

Pipeline de production de visuels et captions pour le compte @strictfood.

## Commande principale

```
/instagram-producer YYYY-MM-DD
```

**ALWAYS** utiliser l'orchestrateur. **NEVER** écrire direction/prompt/caption à la main.

## Pipeline v3 — Multi-mode

Le pipeline détecte le **mode de création** dans le brief et route automatiquement.

### 5 modes de création

| Mode | Description | API | Usage type |
|------|-------------|-----|------------|
| `full-ia` | Gemini génère tout (produit + scène) | Gemini 4K | Food porn, produits sans photo idéale |
| `irl-sublimation` | Photo réelle sublimée DA | GPT Images | Coulisses, équipe, quartier |
| `compositing-irl` | 2 photos réelles mixées | GPT Images | Produit + salle/devanture |
| `compositing-ia` | Photo produit dans scène IA | Gemini 4K | Produit réel + ambiance imaginée |
| `template` | HTML → Puppeteer | Aucune | Carrousels, infographies, macros |

### Flux par mode

```
MODE full-ia :
  Brief → Art Direction → Input Mapping → 🔒 → Prompt → Gemini 4K → Caption

MODE irl-sublimation :
  Brief → Vérification photo → 🔒 → Sublimation GPT Images → Caption

MODE compositing-irl :
  Brief → Vérification 2 photos → 🔒 → Compositing GPT Images → Caption

MODE compositing-ia :
  Brief → Art Direction scène → Input Mapping → 🔒 → Prompt → Gemini 4K → Caption

MODE template :
  Brief → Data Mapping → 🔒 → Template Fill → Puppeteer → Caption
```

> **Caption TOUJOURS après l'image** — le skill `/caption-writer` analyse visuellement l'image produite.

## Séparation des responsabilités

| Étape | Voit | Ne voit PAS |
|-------|------|-------------|
| Art Director | Brief, Recette (formes), DA config | Photos |
| Input Mapper | Direction créative, Photos (descriptions), Recettes | Brief |
| Prompt Engineer | Direction + Input (tout) | Brief original |
| Caption Writer | Brief (Direction Caption), Image (vision), Dernières captions | Prompt, Direction créative |

## Skills & Agents

| Étape | Outil | Type | Modèle | Invocation |
|-------|-------|------|--------|------------|
| Orchestration | `instagram-producer` | Skill | — | `/instagram-producer YYYY-MM-DD` |
| Art Direction | `social-media-art-director` | Skill | — | Auto (modes full-ia, compositing-ia) |
| Input Mapping | `input-mapper` | Agent | Haiku | Auto (modes full-ia, compositing-ia) |
| Prompt | `image-prompt-engineer` | Skill | — | Auto (modes full-ia, compositing-ia) |
| Génération | `nano-banana-pro` | Skill | Gemini 3 Pro | Auto (modes full-ia, compositing-ia) |
| Caption | `caption-writer` | Skill | — | Auto (tous les modes) |
| Variantes produit | `product-variant-generator` | Agent | Sonnet | Manuel ou pre-batch semaine |

## Architecture

```
production/
├── CLAUDE.md                  # Ce fichier
│
├── _config/                   # Configuration partagée
│   ├── pipeline.md            # Modes, DA, agents, modèles, résolution
│   ├── photo-references.md    # Mapping produit → photos (descriptions texte)
│   ├── product-variants.md    # Registre variantes générées par IA
│   └── brand-props.md         # Catalogue accessoires marque
│
├── _recettes/                 # Fiches produit (8 fiches, slug kebab-case)
│
├── _templates/                # Templates opérateur
│   ├── planning-semaine.md    # Template planning hebdomadaire (NOUVEAU v3)
│   ├── brief-v3.md            # Template brief post multi-mode (NOUVEAU v3)
│   ├── brief-story.md         # Template brief story (IRL + Séquence ajoutés v3)
│   └── guide-operateur.md     # Guide pas-à-pas
│
├── .claude/
│   ├── agents/
│   │   ├── input-mapper.md         # Mappe produit → photos + recettes
│   │   └── strict-irl-prompter.md  # Prompts pour photos IRL
│   └── skills/
│       ├── instagram-producer/      # Orchestrateur v3 (routage par mode)
│       ├── story-producer/          # Orchestrateur stories
│       ├── social-media-art-director/ # Direction créative
│       ├── image-prompt-engineer/     # Prompts (+ references/)
│       ├── nano-banana-pro/           # Génération image Gemini (+ scripts/)
│       ├── caption-writer/            # Génération caption post-image (NOUVEAU v3)
│       ├── photo-compositor/          # Compositing 2 photos
│       └── photo-realism-guide/       # Guide anti-IA
│
└── posts-stories/             # Output production
    ├── posts/
    │   └── periode-1/
    │       ├── S1/            # Semaine 1
    │       │   └── YYYY-MM-DD/
    │       │       ├── 00-brief/brief.md
    │       │       ├── 00-input/input.md
    │       │       ├── 01-art-direction/direction.md  (si full-ia/compositing-ia)
    │       │       ├── 02-prompt/prompt.md             (si full-ia/compositing-ia)
    │       │       ├── 03-output/*.png
    │       │       └── 04-caption/caption.md           (NOUVEAU v3)
    │       └── S2/
    └── stories/
        ├── _templates/        # Templates HTML paramétrés (7 types + IRL + demande-photos)
        ├── _scripts/          # Puppeteer render (1080x1920)
        └── S[X]/[jour]/       # Briefs + output stories
```

## Structure d'un post (v3)

```
posts-stories/posts/periode-[N]/S[X]/YYYY-MM-DD/
├── 00-brief/brief.md              ← Opérateur (brief v3 avec Mode + Direction Caption)
├── 00-input/input.md              ← input-mapper / data mapping (selon mode)
├── 01-art-direction/direction.md  ← /social-media-art-director (full-ia, compositing-ia)
├── 02-prompt/prompt.md            ← /image-prompt-engineer (full-ia, compositing-ia)
├── 03-output/*.png                ← Image(s) produite(s)
└── 04-caption/caption.md          ← /caption-writer (TOUS les modes)
```

## Workflow de planification (NOUVEAU v3)

```
1. Planning semaine (planning-SX.md)
   → Distribuer piliers, modes, sujets, stories
   → Vérifier la distribution piliers
   → Identifier les photos IRL nécessaires
   → Valider avec l'opérateur

2. Briefs individuels (brief-v3.md par post, brief-story.md par jour)
   → Rédiger à partir du planning validé

3. Production (par post/jour)
   → /instagram-producer YYYY-MM-DD (posts)
   → /story-producer SX jour (stories)
```

## Statut Posts — Période 1

### S1

| Date | Brief | Mode | Direction | Input | Prompt | Output | Caption | Note |
|------|-------|------|-----------|-------|--------|--------|---------|------|
| 2026-03-10 | ✅ v2 | full-ia | ✅ | ✅ | ✅ | ✅ 3 PNG | ⬜ | v1 (pre-pipeline) |
| 2026-03-12 | ✅ v2 | full-ia | ✅ | ✅ | ⬜ | ⬜ | ⬜ | |
| 2026-03-14 | ✅ v2 | full-ia | ✅ | ✅ | ✅ | ✅ 1 PNG | ⬜ | |
| 2026-03-16 | ✅ v2 | full-ia | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | |

### S2

| Date | Brief | Mode | Direction | Input | Prompt | Output | Caption | Note |
|------|-------|------|-----------|-------|--------|--------|---------|------|
| 2026-03-17 | ✅ v2 | full-ia | ✅ | ✅ | ✅ | ⬜ | ⬜ | |
| 2026-03-19 | ✅ v2 | full-ia | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | |
| 2026-03-21 | ✅ v2 | full-ia | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | |
| 2026-03-23 | ✅ v2 | full-ia | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | |

> Les briefs S1-S2 sont au format v2. Ils fonctionnent en mode `full-ia` par défaut.
> Les nouvelles semaines (S3+) utiliseront le brief v3 avec planning semaine.

## Sources de vérité

| Domaine | Source |
|---------|--------|
| Stratégie éditoriale | `../strategie/strategie-globale.md` |
| Stratégie Instagram | `../strategie/instagram-strategie.md` |
| Photos produits | `_config/photo-references.md` (descriptions texte, jamais d'images) |
| Variantes produit IA | `_config/product-variants.md` |
| Accessoires marque | `_config/brand-props.md` (BRAND_PRESENCE = 4/10) |
| Configuration pipeline | `_config/pipeline.md` (modes, DA, modèles) |
| Recettes | `_recettes/[slug].md` (formes exactes ingrédients + fournisseurs) |
| Template planning | `_templates/planning-semaine.md` |
| Template brief post | `_templates/brief-v3.md` |
| Template brief story | `_templates/brief-story.md` |
| Guide opérateur | `_templates/guide-operateur.md` |
| Photos fichiers | `../public/images/photos-references/` |
| Tokens CSS | `../app/globals.css` |

## Règles

- **Planning d'abord** : toujours rédiger `planning-SX.md` avant les briefs individuels
- **Mode obligatoire** : chaque brief v3 doit spécifier un mode de création
- **Caption après image** : la caption est générée par `/caption-writer` après l'image, jamais écrite dans le brief
- **Dates** : format ISO `YYYY-MM-DD` pour les dossiers post
- **Résolution** : ALWAYS 4K pour full-ia et compositing-ia
- **API key** : `$GEMINI_API_KEY` (variable d'environnement, NEVER en dur)
- **Brief v2 legacy** : les briefs S1-S2 fonctionnent en mode `full-ia` par défaut
- **Distribution piliers** : vérifier mensuellement que les 5 piliers sont représentés
- **Photos IRL** : identifier les besoins dans le planning AVANT la semaine

---

## Pipeline Stories Instagram

### Commande principale

```
/story-producer S1 lundi        # Story unique
/story-producer S1              # Batch semaine complète
```

### Types de stories (v3)

#### Dark Premium (fond charbon, tons sombres)

| Type | Template | Pipeline |
|------|----------|----------|
| Interactif | `interactif.html` | Oui |
| Éducatif | `educatif.html` | Oui |
| Annonce | `annonce.html` | Oui |
| Lieu / Ambiance | `annonce.html` | Oui |
| **IRL** | `irl-story.html` | **Oui (NOUVEAU v3)** |

#### Vitrine (fond gradient coloré)

| Type | Template | Pipeline |
|------|----------|----------|
| Fiche Produit | `produit-vitrine.html` | Oui |
| Focus Ingrédient | `focus-ingredient.html` | Oui |

#### Formats spéciaux

| Type | Template | Pipeline |
|------|----------|----------|
| **Séquence (N/M)** | template existant | **Oui (NOUVEAU v3)** |
| Teaser | `teaser-post.html` | Oui |
| Recap | — (repost) | Semi-manuel |

> **Interactifs** : 2-3 par semaine (max 3).
> **IRL** : photo brute + overlay DA minimal. Pour les coulisses, rush, ambiance.
> **Séquence** : multi-stories liées (1/3, 2/3, 3/3) pour process, éducatif, avant/après.
> Chaque jour : au moins 1 Vitrine + 1 Dark Premium.

### Flux séquentiel stories

```
brief-story.md
    ↓
[1] Lecture brief + vérification photos
    ↓
[1b] Agent: story-copywriter (Sonnet) → textes réécrits
    ↓
[2] Agent: story-data-mapper (Haiku) → story-NN-data.md
    ↓
 🔒 Validation opérateur
    ↓
[3] Template fill + Puppeteer render → story-NN.png (1080×1920)
    ↓
[Final] Génération Demande Photos (si photos manquantes)
```

### Skills et agents stories

| Étape | Outil | Modèle | Emplacement |
|-------|-------|--------|-------------|
| Orchestration | Skill `story-producer` | — | `production/.claude/skills/story-producer/` |
| Copywriting | Agent `story-copywriter` | Sonnet | `production/posts-stories/stories/.claude/agents/story-copywriter.md` |
| Data Mapping | Agent `story-data-mapper` | Haiku | `production/posts-stories/stories/.claude/agents/story-data-mapper.md` |
| Templates HTML | 8 templates paramétrés + demande-photos | — | `production/posts-stories/stories/_templates/` |
| CSS partagé | Base + logo | — | `production/posts-stories/stories/_templates/_base/` |
| Rendu | Script Puppeteer | — | `production/posts-stories/stories/_scripts/render-story.js` |
