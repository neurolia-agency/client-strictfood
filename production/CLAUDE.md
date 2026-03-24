# Production Instagram StrictFood

Pipeline de production de visuels et captions pour le compte @strictfood.

## Commande principale

```
/instagram-producer DD-MM-YYYY
```

**ALWAYS** utiliser l'orchestrateur. **NEVER** écrire direction/prompt/caption à la main.

## Pipeline v3 — Multi-mode

Le **planning semaine** décide du mode de chaque post et chaque story. L'orchestrateur lit le mode et route automatiquement.

### 6 modes de création (posts ET stories)

| Mode | Description | API | Usage type |
|------|-------------|-----|------------|
| `full-ia` | Gemini génère tout (produit + scène) | Gemini 4K | Food porn, produits sans photo idéale |
| `irl-sublimation` | Photo réelle sublimée DA | GPT Images | Coulisses, équipe, quartier |
| `compositing-irl` | 2 photos réelles mixées | GPT Images | Produit + salle/devanture |
| `compositing-ia` | Photo produit dans scène IA | Gemini 4K | Produit réel + ambiance imaginée |
| `scene-ia` | Photo scène réelle + sujets IA | Gemini 4K | Scène de vie : restaurant vivant, clients, interactions |
| `template` | HTML → Puppeteer | Aucune | Carrousels, infographies, fiches |

> Les stories utilisent les mêmes modes que les posts. Une story non-template produit une image plein cadre 1080×1920 avec overlay logo optionnel via `irl-story.html`.

### Flux par mode

```
MODE full-ia :
  Brief → Art Direction → Input Mapping → 🔒 → Prompt → Gemini 4K → brouillons/ → 🔍 itérations → final/ → Caption

MODE irl-sublimation :
  Brief → Vérification photo → 🔒 → Sublimation GPT Images → brouillons/ → 🔍 itérations → final/ → Caption

MODE compositing-irl :
  Brief → Vérification 2 photos → 🔒 → Compositing GPT Images → brouillons/ → 🔍 itérations → final/ → Caption

MODE compositing-ia :
  Brief → Art Direction scène → Input Mapping → 🔒 → Prompt → Gemini 4K → brouillons/ → 🔍 itérations → final/ → Caption

MODE scene-ia :
  Brief → Photo scène vérifiée → Realism Audit (analyse scène) → 🔒 → Prompt sujets → Realism Audit (audit prompt) → Gemini input-image 4K → brouillons/ → 🔍 itérations → final/ → Caption

MODE template :
  Brief → Data Mapping → 🔒 → Template Fill → Puppeteer → brouillons/ → 🔍 itérations → final/ → Caption
```

> **Brouillon → Final** : le premier visuel va TOUJOURS dans `brouillons/`. L'opérateur vérifie, demande des modifications si besoin, puis valide la promotion vers `final/`. La caption n'est générée qu'après promotion.

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
| Orchestration | `instagram-producer` | Skill | — | `/instagram-producer DD-MM-YYYY` |
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
│   └── guide-operateur.md     # Guide pas-à-pas (flux brouillon → final)
│
├── .claude/
│   ├── agents/
│   │   ├── input-mapper.md         # Mappe produit → photos + recettes
│   │   ├── strict-irl-prompter.md  # Prompts pour photos IRL
│   │   └── realism-auditor.md     # Audit realisme physique des prompts image
│   └── skills/
│       ├── instagram-producer/      # Orchestrateur v3 (routage par mode)
│       ├── story-producer/          # Orchestrateur stories
│       ├── social-media-art-director/ # Direction créative
│       ├── image-prompt-engineer/     # Prompts (+ references/)
│       ├── nano-banana-pro/           # Génération image Gemini (+ scripts/)
│       ├── caption-writer/            # Génération caption post-image (NOUVEAU v3)
│       ├── photo-compositor/          # Compositing 2 photos
│       ├── photo-realism-guide/       # Guide anti-IA
│       └── realism-auditor/           # Audit realisme prompts (pre/post-prompt)
│
└── posts-stories/             # Output production
    ├── posts/
    │   └── periode-1/
    │       ├── S1/            # Semaine 1
    │       │   └── DD-MM-YYYY/
    │       │       ├── brief/brief.md
    │       │       ├── production/input.md
    │       │       ├── production/art-direction.md     (si full-ia/compositing-ia)
    │       │       ├── production/prompt.md             (si full-ia/compositing-ia)
    │       │       ├── production/caption.md            (APRÈS promotion en final)
    │       │       ├── brouillons/*.png                 (premier rendu + itérations)
    │       │       └── final/*.png                      (visuel validé, promu depuis brouillons/)
    │       └── S2/
    └── stories/
        ├── _templates/        # Templates HTML paramétrés (7 types + IRL + demande-photos)
        ├── _scripts/          # Puppeteer render (1080x1920)
        └── S[X]/[jour]/       # Briefs + output stories (brouillons/ → final/)
```

## Structure d'un post (v3)

```
posts-stories/posts/periode-[N]/S[X]/DD-MM-YYYY/
├── brief/brief.md                 ← Opérateur (brief v3 avec Mode + Direction Caption)
├── production/input.md            ← input-mapper / data mapping (selon mode)
├── production/art-direction.md    ← /social-media-art-director (full-ia, compositing-ia)
├── production/prompt.md           ← /image-prompt-engineer (full-ia, compositing-ia)
├── production/caption.md          ← /caption-writer (TOUS les modes, APRÈS promotion en final)
├── brouillons/*.png               ← Premier rendu + itérations (brouillon)
└── final/*.png                    ← Visuel(s) VALIDÉ(s) prêt(s) à poster (promu(s) depuis brouillons/)
```

> **Flux brouillon → final** : le pipeline place le premier visuel dans `brouillons/`. L'opérateur vérifie, itère si besoin, puis demande la promotion vers `final/`. Seul `final/` est tracé dans l'historique.

## Workflow de planification (NOUVEAU v3)

```
0. Régénérer l'historique (OBLIGATOIRE)
   → Scanner les dossiers posts + stories
   → Réécrire _config/historique-production.md
   → Identifier produits, piliers, modes en retard

1. Planning semaine (planning-SX.md)
   → Distribuer piliers, modes (posts ET stories), sujets
   → Appliquer les règles de distribution automatiques
   → Identifier les photos IRL nécessaires
   → Valider avec l'opérateur

2. Briefs individuels (brief-v3.md par post, brief-story.md par jour)
   → Rédiger à partir du planning validé
   → Le mode est DÉJÀ DÉCIDÉ — le brief le reprend tel quel

3. Production (par post/jour)
   → /instagram-producer DD-MM-YYYY (posts)
   → /story-producer SX jour (stories)
```

### Règles de distribution (appliquées au planning)

**Posts** : jamais 2 consécutifs même mode · ≥3 modes/semaine · ≥3 piliers/semaine
**Stories** : ≥2 modes/jour · ≥2 stories non-template/jour · ≥2 IRL moments/jour · max 3 interactifs/semaine · **max 1 éducatif/semaine** · **max 1 fiche produit/semaine**

### Production hors planning

Pour les idées spontanées, actions ponctuelles, actualités :
- Posts → `posts-stories/posts/hors-planning/DD-MM-YYYY/`
- Stories → `posts-stories/stories/hors-planning/DD-MM-YYYY/`
- Liberté totale : n'importe quel mode, pilier, agent invocable directement
- N'affecte pas les compteurs de distribution du planning

## Statut Posts — Période 1

### S1

| Date | Brief | Mode | Direction | Input | Prompt | Output | Caption | Note |
|------|-------|------|-----------|-------|--------|--------|---------|------|
| 10-03-2026 | ✅ v2 | full-ia | ✅ | ✅ | ✅ | ✅ 3 PNG | ⬜ | v1 (pre-pipeline) |
| 12-03-2026 | ✅ v2 | full-ia | ✅ | ✅ | ⬜ | ⬜ | ⬜ | |
| 14-03-2026 | ✅ v2 | full-ia | ✅ | ✅ | ✅ | ✅ 1 PNG | ⬜ | |
| 16-03-2026 | ✅ v2 | full-ia | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | |

### S2

| Date | Brief | Mode | Direction | Input | Prompt | Output | Caption | Note |
|------|-------|------|-----------|-------|--------|--------|---------|------|
| 17-03-2026 | ✅ v2 | full-ia | ✅ | ✅ | ✅ | ⬜ | ⬜ | |
| 19-03-2026 | ✅ v2 | full-ia | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | |
| 21-03-2026 | ✅ v2 | full-ia | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | |
| 23-03-2026 | ✅ v2 | full-ia | ⬜ | ⬜ | ⬜ | ⬜ | ⬜ | |

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
| Configuration pipeline | `_config/pipeline.md` (modes, DA, modèles, tagline HTML) |
| **Concepts visuels** | `_config/concepts-visuels.md` (bibliothèque concepts food porn + moments IRL + micro-saisons) |
| **Historique production** | `_config/historique-production.md` (GÉNÉRÉ par scan des dossiers — reflet du disque) |
| Recettes | `_recettes/[slug].md` (formes exactes ingrédients + fournisseurs) |
| Template planning | `_templates/planning-semaine.md` |
| Template brief post | `_templates/brief-v3.md` |
| Template brief story | `_templates/brief-story.md` |
| Guide opérateur | `_templates/guide-operateur.md` |
| **Specs templates** | `posts-stories/stories/_templates/SPECS.md` (limites caractères, presets, gradients) |
| **Playbook** | `PLAYBOOK.md` (guide pas à pas par intention) |
| Photos fichiers | `../public/images/photos-references/` |
| Tokens CSS | `../app/globals.css` |

## Règles

- **⛔ PAIN NOIR OBLIGATOIRE** : tous les burgers StrictFood sont au pain noir (black bun sésame). Zéro tolérance pour le pain blanc dans TOUT livrable (posts, stories, tous modes). Photo pain blanc = STOP. Prompt sans "black bun" = STOP. Visuel avec bun blanc = BLOQUER.
- **⛔ CHALEUR PULSÉE OBLIGATOIRE** : StrictFood n'a AUCUN grill, AUCUN barbecue, AUCUNE poêle. TOUT est cuit au air fryer (chaleur pulsée), zéro huile. JAMAIS écrire "grill", "grillé", "barbecue", "poêlé", "frit" dans un brief, un prompt, une caption ou un texte. Remplacer par "chaleur pulsée", "air fryer", "cuit sans huile". Visuels : PAS de grill marks sur la viande (croûte Maillard uniforme). Scènes cuisine : PAS de grill visible.
- **Brouillon d'abord** : le premier visuel va TOUJOURS dans `brouillons/`, JAMAIS directement dans `final/`. L'opérateur vérifie, itère si besoin, puis valide la promotion vers `final/`.
- **Final = prêt à poster** : seuls les visuels dans `final/` sont considérés comme terminés et tracés dans l'historique.
- **Caption après promotion** : la caption est générée par `/caption-writer` APRÈS la promotion du visuel dans `final/`, jamais sur un brouillon.
- **Layout produit surdimensionné (templates)** : quand un template a du texte concentré d'un côté, le visuel produit est **surdimensionné (~1.5x) et coupé à ~50% par le bord opposé**. Texte à gauche → produit déborde à droite. Photos produit sur fond noir → `object-fit: contain` + masque radial. Voir `SPECS.md`.
- **⚡ Dark Premium ≠ Terne** : le fond est sombre (charbon) mais le PRODUIT et les TEXTES doivent être lumineux, contrastés et dynamiques. Couleurs des ingrédients vives et saturées. Éclairage contrasté et directionnel dans les prompts IA.
- **Texte blanc pur + accent** : hiérarchie par taille/poids/couleur, PAS par opacité. Blanc `#fff` pour le contenu, accent pour les labels et mots-clés. Jamais de texte gris.
- **Lisibilité sur photo** : `text-depth-3` (6 couches ombre) sur tout texte devant une photo. `mark-tape-strong` (accent 0.50) sur les blocs longs.
- **Overlays adaptatifs** : `overlay-*` (direction) + `grad-*` (force) choisis par le data mapper selon template et photo. Gradient-left max 600px, ne couvre que le texte.
- **Tagline fixe HTML** : `{{TAGLINE}}` = `Le cheat meal <em>qui n'en est pas un</em>` — TOUJOURS avec `<em>` (italique + accent cuivre), JAMAIS en texte brut, JAMAIS de point final.
- **Logo en bas** : le logo est sous la tagline en bas de chaque story (plus en haut — évite doublon avec le profil IG).
- **Safe zone bas = 80px** : IG a supprimé l'overlay "envoyer un message". `--safe-bottom: 80px` au lieu de 250px.
- **Historique d'abord** : LIRE puis RÉÉCRIRE `production/_config/historique-production.md` par scan des dossiers AVANT de planifier ou produire. Ce fichier EXISTE TOUJOURS — ne jamais supposer qu'il n'existe pas.
- **Planning ensuite** : rédiger `planning-SX.md` avant les briefs individuels
- **Historique = reflet du disque** : un fichier supprimé disparaît de l'historique au prochain scan. Ne JAMAIS modifier l'historique à la main. Les brouillons ne sont PAS tracés.
- **Mode obligatoire** : chaque brief v3 doit spécifier un mode de création
- **Dates** : format `DD-MM-YYYY` pour les dossiers post
- **Résolution** : ALWAYS 4K pour full-ia et compositing-ia
- **API key** : `$GEMINI_API_KEY` (variable d'environnement, NEVER en dur)
- **Brief v2 legacy** : les briefs S1-S2 fonctionnent en mode `full-ia` par défaut
- **Distribution piliers** : vérifier mensuellement que les 5 piliers sont représentés
- **Photos IRL** : identifier les besoins dans le planning AVANT la semaine
- **Realism Auditor obligatoire** : `/realism-audit` DOIT être exécuté avant toute génération IA (full-ia, compositing-ia, irl-sublimation, compositing-irl, scene-ia). Pre-prompt (contraintes) + post-prompt (audit). Seul le mode `template` est exempt.

---

## Pipeline Stories Instagram

### Commande principale

```
/story-producer S1 lundi        # Story unique
/story-producer S1              # Batch semaine complète
```

### Types de stories (v3)

Les stories utilisent les mêmes 5 modes que les posts. Le mode est décidé au planning.

#### Stories template (mode `template`)

| Type | Template HTML | Famille |
|------|---------------|---------|
| Produit Hero | `produit-hero.html` | Plein cadre + info minimale |
| Interactif | `interactif.html` | Dark Premium |
| Éducatif | `educatif.html` | Dark Premium |
| Annonce | `annonce.html` | Dark Premium |

#### Stories IRL (mode `irl`)

| Type | Template HTML | Famille |
|------|---------------|---------|
| IRL | `irl-story.html` | Dark Premium (overlay minimal) |

#### Stories visuelles (modes `irl-sublimation`, `compositing-irl`, `compositing-ia`, `full-ia`)

| Type | Mode | Output |
|------|------|--------|
| Produit DA | irl-sublimation | Photo sublimée 1080×1920 + overlay logo |
| Produit en situation | compositing-irl | Montage 1080×1920 + overlay logo |
| Visuel IA | full-ia | Image IA 1080×1920 + overlay logo |
| Scène imaginée | compositing-ia | Produit réel + scène IA 1080×1920 |

> Les stories visuelles produisent une image plein cadre. Le logo et un texte optionnel sont ajoutés via `irl-story.html`.

#### Formats spéciaux

| Type | Pipeline |
|------|----------|
| Séquence (N/M) | Selon le mode de chaque story |
| Recap | Semi-manuel (repost) |

> **Distribution** : **~10% template, ~25% irl, ~20% sublimation, ~15% compositing, ~15% full-ia, ~15% scene-ia**
> **Contrainte** : ≥2 stories non-template/jour · ≥2 IRL moments/jour · ≥2 modes/jour · max 1 éducatif/sem · max 1 fiche produit/sem · max 3 interactifs/sem
> **Concept visuel** : chaque story non-template DOIT avoir un concept visuel assigné (voir `_config/concepts-visuels.md`)

### Flux séquentiel stories

```
brief/brief-story.md
    ↓
[1] Lecture brief + vérification photos
    ↓
[1b] Agent: story-copywriter (Sonnet) → textes réécrits
    ↓
[2] Agent: story-data-mapper (Haiku) → story-NN/production/data.md
    ↓
 🔒 Validation opérateur (données)
    ↓
[3] Template fill + Puppeteer render → story-NN/brouillons/story.png (1080×1920)
    ↓
[4] 🔍 Vérification opérateur → itérations si besoin → promotion vers story-NN/final/story.png
    ↓
[Final] Génération Demande Photos (si photos manquantes)
```

> Le premier render va dans `brouillons/`. Le dossier `final/` ne reçoit le PNG qu'après validation explicite de l'opérateur.

### Skills et agents stories

| Étape | Outil | Modèle | Emplacement |
|-------|-------|--------|-------------|
| Orchestration | Skill `story-producer` | — | `production/.claude/skills/story-producer/` |
| Copywriting | Agent `story-copywriter` | Sonnet | `production/posts-stories/stories/.claude/agents/story-copywriter.md` |
| Data Mapping | Agent `story-data-mapper` | Haiku | `production/posts-stories/stories/.claude/agents/story-data-mapper.md` |
| Templates HTML | 6 templates rigides (vitrine, educatif, interactif, annonce, irl-story, process) + legacy | — | `production/posts-stories/stories/_templates/` |
| Spécifications templates | Limites caractères, presets photo, gradient | — | `production/posts-stories/stories/_templates/SPECS.md` |
| CSS partagé | Base + logo | — | `production/posts-stories/stories/_templates/_base/` |
| Rendu | Script Puppeteer | — | `production/posts-stories/stories/_scripts/render-story.js` |
