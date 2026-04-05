# Production Instagram StrictFood

Pipeline de production de visuels et captions pour le compte @strictfood.

## Commande principale

```
/instagram-producer DD-MM-YYYY
```

**ALWAYS** utiliser l'orchestrateur. **NEVER** écrire direction/prompt/caption à la main.

## Pipeline v5 — Simplifié

Le **planning semaine** décide du mode de chaque post et chaque story. L'orchestrateur lit le mode et route automatiquement.

### 4 modes de creation (posts ET stories)

| Mode | Description | API | Planifiable |
|------|-------------|-----|-------------|
| `full-ia` | Gemini genere tout (produit decrit + scene) | Gemini 4K | Oui |
| `edit-ia` | Photo lieu en input + produit decrit dans le prompt | Gemini 4K | **NON** (hors-planning uniquement) |
| `template` | Photo plein cadre + texte overlay minimal (Puppeteer) | Aucune | Oui |
| `irl` | Photo fraiche en live + overlay | Aucune | **NON** (hors-planning uniquement) |

> **Modes supprimes en v5** : `irl-sublimation`, `compositing-irl`, `compositing-ia`, `scene-ia`, `irl-archive`, `carousel`. Ces modes n'existent plus.
> **Planning standard** : utilise uniquement `full-ia` et `template`.
> **Hors-planning** : peut utiliser `edit-ia` et `irl` en plus.
> **Produit TOUJOURS decrit** : le produit est decrit dans le prompt, jamais en photo reference.
> **Template unique** : toutes les stories utilisent `story-universal.html` (photo plein cadre + overlay minimal).

### Flux par mode

```
MODE full-ia :
  Brief → Art Direction → Input Mapping → 🔒 → Realism Audit PRE → Prompt (Combo-B) → Realism Audit POST → Gemini 4K → brouillons/ → 🔍 itérations → ✅ Validation → Caption → a-publier/

MODE edit-ia (hors-planning) :
  Brief → Photo lieu → 🔒 → Realism Audit PRE → Prompt (produit decrit) → Realism Audit POST → Gemini edit 4K → brouillons/ → 🔍 itérations → ✅ Validation → Caption → a-publier/

MODE template :
  Brief → Data Mapping → 🔒 → Template Fill → Puppeteer → brouillons/ → 🔍 itérations → ✅ Validation → Caption → a-publier/

MODE irl (hors-planning) :
  Photo fraiche → overlay minimal → brouillons/ → 🔍 → ✅ Validation → Caption → a-publier/
```

> **Brouillons** : le premier visuel va TOUJOURS dans `brouillons/`. L'operateur verifie, demande des modifications si besoin.
> **Validation** : quand l'operateur valide, le visuel est DEPLACE de `brouillons/` vers `a-publier/[posts|stories]/` avec le nommage `DD-MM-YYYY-[slug]-[format].png` + caption en `.txt` a cote.
> **Apres publication** : l'operateur supprime manuellement de `a-publier/` quand il veut.

### Dossier `a-publier/`

Dossier centralise pour tous les visuels valides, prets a etre publies sur Instagram.

```
production/a-publier/
├── posts/
│   ├── 07-04-2026-strict-boeuf-levitation-4x5.png
│   ├── 07-04-2026-strict-boeuf-levitation-4x5.txt       ← caption
│   ├── 08-04-2026-zoom-progressif-proteines/             ← carrousel (multi-slides)
│   │   ├── slide-01.png
│   │   ├── slide-02.png
│   │   └── caption.txt
│   └── ...
└── stories/
    ├── 07-04-2026-strict-poulet-hero-9x16.png
    ├── 07-04-2026-strict-poulet-hero-9x16.txt
    └── ...
```

| Regle | Detail |
|-------|--------|
| **Nommage** | `DD-MM-YYYY-[slug]-[format].[ext]` (ex: `07-04-2026-strict-boeuf-levitation-4x5.png`) |
| **Caption** | Fichier `.txt` avec le meme nom (posts/stories simples) ou `caption.txt` dans le sous-dossier (carrousels) |
| **Deplacement** | Le visuel est DEPLACE (pas copie) de `brouillons/` vers `a-publier/` — il n'existe plus dans brouillons apres validation |
| **Carrousels** | Sous-dossier `DD-MM-YYYY-[slug]/` dans `posts/` avec toutes les slides + caption.txt |
| **Post-publication** | L'operateur supprime manuellement quand il veut |
| **Metadonnees** | Le brief, art-direction, input, prompt restent dans le dossier date original |

> **Caption TOUJOURS après l'image** — le skill `/caption-writer` analyse visuellement l'image produite.
> **Produit decrit, jamais en photo reference** : dans tous les modes IA (full-ia, edit-ia), le produit est DECRIT dans le prompt textuel. Jamais de photo produit en input.

## Séparation des responsabilités

| Étape | Voit | Ne voit PAS |
|-------|------|-------------|
| Art Director | Brief, Recette (formes), DA config | — |
| Background Inventor | Brief, Concept visuel, Fond assigné | Recette |
| Input Mapper | Direction créative, Recettes | Brief |
| Prompt Engineer | Direction + Input (tout), calibré Combo-B (150-300 mots) | Brief original |
| Story Copywriter | Brief story, Recette, Concept visuel | Prompt, Direction créative |
| Caption Writer | Brief (Direction Caption), Image (vision), Dernières captions | Prompt, Direction créative |

## Skills & Agents

| Étape | Outil | Type | Modèle | Invocation |
|-------|-------|------|--------|------------|
| Orchestration | `instagram-producer` | Skill | — | `/instagram-producer DD-MM-YYYY` |
| Art Direction | `social-media-art-director` | Skill | — | Auto (mode full-ia) |
| Background | `background-inventor` | Agent | Sonnet | Auto (mode full-ia — invente le fond/scene) |
| Input Mapping | `input-mapper` | Agent | Haiku | Auto (mode full-ia) |
| Prompt | `image-prompt-engineer` | Skill | — | Auto (modes full-ia, edit-ia) — calibré Combo-B (150-300 mots) |
| Génération | `nano-banana-pro` | Skill | Gemini 3 Pro | Auto (modes full-ia, edit-ia) |
| Story Copywriting | `story-copywriter` | Agent | Sonnet | Auto (stories — reecrit les textes du brief) |
| Caption | `caption-writer` | Skill | — | Auto (tous les modes) |
| Hors-planning | `/freestyle` | Skill | — | `/freestyle` (production spontanee, tous modes) |

## Architecture

```
production/
├── CLAUDE.md                  # Ce fichier
│
├── _config/                   # Configuration partagée
│   ├── pipeline.md            # Modes, DA, agents, modèles, résolution
│   ├── photo-references.md    # Mapping produit → photos (descriptions texte)
│   ├── product-variants.md    # Registre variantes générées par IA
│   ├── brand-props.md         # Catalogue accessoires marque
│   ├── fonds-ambre.md         # 32 variantes de fonds Ambre Incandescente (appelables par ID)
│   └── concepts-visuels.md   # Bibliothèque concepts food porn + moments lifestyle
│
├── _recettes/                 # Fiches produit (8 fiches, slug kebab-case)
│
├── _templates/                # Templates opérateur
│   ├── planning-semaine.md    # Template planning (2 posts + 2 carrousels + stories)
│   ├── brief-v3.md            # Template brief post
│   ├── brief-carousel.md      # Template brief carrousel texte (famille A)
│   ├── brief-carousel-photo.md # Template brief carrousel photo (famille B)
│   ├── brief-carousel-panoramique.md # Template brief carrousel panoramique (famille C)
│   ├── brief-story.md         # Template brief story (1 brief = 1 story)
│   ├── carousel/              # Templates HTML + scripts carrousels
│   │   ├── render-panoramic.js # Script decoupe panoramique (N slides 1080x1350)
│   │   └── ...                # Templates cover, slide, CTA, sources
│   └── guide-operateur.md     # Guide pas-à-pas
│
├── .claude/
│   ├── agents/
│   │   ├── input-mapper.md         # Mappe produit → recettes
│   │   ├── background-inventor.md  # Invente le fond/scene pour full-ia
│   │   ├── story-copywriter.md     # Reecrit les textes du brief story
│   │   ├── strict-irl-prompter.md  # Prompts pour photos IRL
│   │   └── realism-auditor.md     # Audit realisme physique des prompts image
│   └── skills/
│       ├── instagram-producer/      # Orchestrateur v5 (routage par mode)
│       ├── story-producer/          # Orchestrateur stories
│       ├── freestyle/               # Production hors-planning (tous modes)
│       ├── social-media-art-director/ # Direction créative
│       ├── image-prompt-engineer/     # Prompts calibrés Combo-B (150-300 mots)
│       ├── nano-banana-pro/           # Génération image Gemini (+ scripts/)
│       ├── caption-writer/            # Génération caption post-image
│       ├── photo-realism-guide/       # Guide anti-IA
│       └── realism-auditor/           # Audit realisme prompts (pre/post-prompt)
│
├── a-publier/                 # Visuels valides prets a publier
│   ├── posts/                 # Posts + carrousels valides
│   └── stories/               # Stories validees
│
└── posts-stories/             # Output production
    ├── posts/
    │   └── periode-1/
    │       ├── S1/            # Semaine 1
    │       │   └── DD-MM-YYYY/
    │       │       ├── brief/brief.md
    │       │       ├── production/art-direction.md     (si full-ia)
    │       │       ├── production/input.md
    │       │       ├── production/prompt.md             (si full-ia/edit-ia)
    │       │       ├── production/caption.md            (APRÈS validation visuel)
    │       │       ├── production/publication.md        (APRÈS publication Instagram)
    │       │       └── brouillons/*.png                 (rendu + itérations)
    │       └── S2/
    └── stories/
        ├── _templates/        # Templates HTML paramétrés
        ├── _scripts/          # Puppeteer render (1080x1920)
        └── S[X]/[jour]/       # Briefs + output stories (brouillons/)
```

## Structure d'un post (v5)

```
posts-stories/posts/periode-[N]/S[X]/DD-MM-YYYY/
├── brief/brief.md                 ← Opérateur (brief v5 avec Mode + Direction Caption)
├── production/
│   ├── art-direction.md           ← /social-media-art-director (full-ia uniquement)
│   ├── input.md                   ← input-mapper / data mapping
│   ├── prompt.md                  ← /image-prompt-engineer (full-ia, edit-ia)
│   ├── caption.md                 ← /caption-writer (TOUS les modes, APRÈS validation visuel)
│   └── publication.md             ← Metadonnees post-publication (date, heure, lien, metriques)
└── brouillons/*.png               ← Rendu + itérations
```

> **Pas de dossier final/** dans le dossier date. A la validation, le visuel est DEPLACE vers `a-publier/[posts|stories]/`. Les metadonnees (brief, art-direction, input, prompt, caption) restent dans le dossier date.

## Workflow de planification (v5)

```
0. Régénérer l'historique (OBLIGATOIRE)
   → Scanner les dossiers posts + stories
   → Réécrire _config/historique-production.md
   → Identifier produits, piliers, modes en retard

1. Planning semaine (planning-SX.md)
   → Distribuer 2 posts + 2 carrousels + stories
   → Choisir le type de chaque carrousel (9 types, 3 familles)
   → Appliquer les regles de distribution
   → Valider avec l'operateur

2. Briefs individuels
   → Posts : `brief-v3.md`
   → Carrousels texte (A) : `brief-carousel.md`
   → Carrousels photo (B) : `brief-carousel-photo.md`
   → Carrousels panoramique (C) : `brief-carousel-panoramique.md`
   → Stories : `brief-story.md` (1 brief = 1 story)

3. Production
   → /instagram-producer DD-MM-YYYY (posts)
   → /carousel-producer DD-MM-YYYY (carrousels famille A)
   → Prompt × N + /nano-banana-pro (carrousels famille B)
   → Prompt large + /nano-banana-pro + render-panoramic.js (carrousels famille C)
   → /story-producer SX jour (stories)
```

### Règles de distribution (appliquées au planning)

**Publications** : 2 posts simples + 2 carrousels par semaine = 4 publications
**Posts** : tous en `full-ia`, ≥2 piliers differents/semaine
**Carrousels** : 9 types, 3 familles (A texte, B photo, C panoramique). Voir `_config/carousel-themes.md`.
- Distribution mensuelle : Panoramique 2-3, Zoom Progressif 1-2, Texture/ASMR 1, Educatif 1, Construction 0.5, Ingredient Spotlight 0.5, Defile Gamme 0.5, Process Cuisine 0.5, Menu Objectif 0.5
**Piliers** : Le Produit 55%, Les Benefices 35%, La Marque 10% (posts + carrousels combines)
**Stories** : **100% full-ia** — food 40% · lifestyle 30% · brand 30% · max 7 lifestyle/semaine. Le mode `template` est deprecie pour les stories.

### Production hors planning

Pour les idees spontanees, actions ponctuelles, actualites :
- Posts → `posts-stories/posts/hors-planning/DD-MM-YYYY/`
- Stories → `posts-stories/stories/hors-planning/DD-MM-YYYY/`
- Liberte totale : tous les modes (y compris `edit-ia` et `irl`), tout agent invocable via `/freestyle`
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
| **Fonds Ambre** | `_config/fonds-ambre.md` (32 variantes de fonds Ambre Incandescente, appelables par ID dans les briefs) |
| **Historique production** | `_config/historique-production.md` (GÉNÉRÉ par scan des dossiers — reflet du disque) |
| Recettes | `_recettes/[slug].md` (formes exactes ingrédients + fournisseurs) |
| Template planning | `_templates/planning-semaine.md` (2 posts + 2 carrousels + stories) |
| Template brief post | `_templates/brief-v3.md` |
| Template brief carrousel A | `_templates/brief-carousel.md` (famille texte) |
| Template brief carrousel B | `_templates/brief-carousel-photo.md` (famille photo) |
| Template brief carrousel C | `_templates/brief-carousel-panoramique.md` (famille panoramique) |
| Template brief story | `_templates/brief-story.md` (1 brief = 1 story) |
| **Taxonomie carrousels** | `_config/carousel-themes.md` (9 types, 3 familles, scenes, sequences) |
| Guide operateur | `_templates/guide-operateur.md` |
| **Specs templates** | `posts-stories/stories/_templates/SPECS.md` (limites caractères, presets, gradients) |
| **Playbook** | `PLAYBOOK.md` (guide pas à pas par intention) |
| Photos fichiers | `../public/images/photos-references/` |
| Tokens CSS | `../app/globals.css` |

## Règles

- **⛔ PAIN NOIR OBLIGATOIRE** : tous les burgers StrictFood sont au pain noir (black bun sésame). Zéro tolérance pour le pain blanc dans TOUT livrable (posts, stories, tous modes). Photo pain blanc = STOP. Prompt sans "black bun" = STOP. Visuel avec bun blanc = BLOQUER.
- **⛔ CHALEUR PULSÉE OBLIGATOIRE** : StrictFood n'a AUCUN grill, AUCUN barbecue, AUCUNE poêle. TOUT est cuit au air fryer (chaleur pulsée), zéro huile. JAMAIS écrire "grill", "grillé", "barbecue", "poêlé", "frit" dans un brief, un prompt, une caption ou un texte. Remplacer par "chaleur pulsée", "air fryer", "cuit sans huile". Visuels : PAS de grill marks sur la viande (croûte Maillard uniforme). Scènes cuisine : PAS de grill visible.
- **Brouillon d'abord** : le premier visuel va TOUJOURS dans `brouillons/`. L'operateur verifie et itere si besoin.
- **Validation → a-publier/** : quand l'operateur valide, DEPLACER le visuel vers `a-publier/[posts|stories]/DD-MM-YYYY-[slug]-[format].png` + copier la caption en `.txt` a cote. Le visuel n'existe plus dans `brouillons/` apres deplacement.
- **Post-publication** : l'operateur supprime manuellement de `a-publier/` quand il veut. Les metadonnees (brief, direction, prompt, caption) restent dans le dossier date.
- **Caption après validation** : la caption est générée par `/caption-writer` APRES validation du visuel par l'opérateur.
- **Produit decrit, jamais en photo reference** : dans tous les modes IA (full-ia, edit-ia), le produit est DECRIT dans le prompt textuel. Jamais de photo produit en input.
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
- **Historique = reflet du disque** : un fichier supprimé disparaît de l'historique au prochain scan. Ne JAMAIS modifier l'historique à la main.
- **Mode obligatoire** : chaque brief v3 doit spécifier un mode de création
- **Dates** : format `DD-MM-YYYY` pour les dossiers post
- **Résolution** : ALWAYS 4K pour full-ia et edit-ia
- **API key** : `$GEMINI_API_KEY` (variable d'environnement, NEVER en dur)
- **Brief v2 legacy** : les briefs S1-S2 fonctionnent en mode `full-ia` par défaut
- **Distribution piliers** : 3 piliers (Le Produit 55%, Les Bénéfices 35%, La Marque 10%). Vérifier mensuellement
- **Zero dependance photos fraiches** : le planning standard ne depend JAMAIS de photos a prendre. Le mode `irl` et `edit-ia` sont reserves au `hors-planning/` uniquement.
- **Templates stories** : `story-universal.html` (defaut) + `story-sillon.html`, `story-sceau.html`, `story-feuillete-photo.html`, `story-feuillete-data.html`. Le traitement est choisi au planning. Les anciens templates (educatif, interactif, fiche-produit, annonce) sont deprecies.
- **Fond stories (modes IA)** : chaque story en mode IA a un fond assigne (`ambre`, `charbon`, `ambre+charbon`, `charbon+ambre`) qui determine la palette du background dans le prompt image via `/image-prompt-engineer`.
- **Story Rappel** : story bonus #4 publiee tous les 2 jours — photo reelle du restaurant + accroche + CTA (telephone/horaires/adresse). Ne remplace pas les 3 stories principales. Voir `_config/story-rappel.md`.
- **Realism Auditor obligatoire** : `/realism-audit` DOIT etre execute avant toute generation IA (full-ia, edit-ia). Pre-prompt (contraintes) + post-prompt (audit). Les modes `template` et `irl` sont exempts.
- **Prompt Engineer calibre Combo-B** : les prompts font 150-300 mots, style Combo-B. Le prompt engineer est calibre sur ce format.

---

## Pipeline Stories Instagram

### Commande principale

```
/story-producer S1 lundi        # Story unique
/story-producer S1              # Batch semaine complète
```

### Types de stories (v5)

Les stories utilisent les memes modes que les posts. Le mode est decide au planning. 1 brief = 1 story.

#### Stories full-ia — 3 categories (100% IA)

| Categorie | Description | Cible |
|-----------|-------------|-------|
| Food | Produit StrictFood (hero shot, concept food porn) | 40% |
| Lifestyle | Scene de vie, moment, ambiance (pas de produit central) | 30% |
| Brand | Rappels, fiches produit, educatif, interactif — visuels IA uniques | 30% |

> Toutes les stories sont en full-ia. Le mode `template` est deprecie pour les stories (trop redondant visuellement, limite la creativite).
> **Distribution** : **full-ia food 40% · full-ia lifestyle 30% · full-ia brand 30%**
> **Contrainte** : max 7 lifestyle/semaine
> **Concept visuel** : chaque story DOIT avoir un concept visuel assigne (voir `_config/concepts-visuels.md`)

### Flux sequentiel stories

```
brief/brief-story.md (1 brief = 1 story)
    ↓
[1] Lecture brief + verification photos
    ↓
[1b] Agent: story-copywriter (Sonnet) → textes reecrits
    ↓
[2] Agent: story-data-mapper (Haiku) → story-NN/production/data.md
    ↓
 🔒 Validation operateur (donnees)
    ↓
[3] Template fill + Puppeteer render → story-NN/brouillons/story.png (1080x1920)
    ↓
[4] 🔍 Verification operateur → iterations si besoin
    ↓
[5] Caption → publication.md (apres publication)
```

> Le render va dans `brouillons/`. Pas de dossier `final/`. Le fichier `publication.md` est cree apres publication effective.

### Skills et agents stories

| Etape | Outil | Modele | Emplacement |
|-------|-------|--------|-------------|
| Orchestration | Skill `story-producer` | — | `production/.claude/skills/story-producer/` |
| Copywriting | Agent `story-copywriter` | Sonnet | `production/.claude/agents/story-copywriter.md` |
| Data Mapping | Agent `story-data-mapper` | Haiku | `production/posts-stories/stories/.claude/agents/story-data-mapper.md` |
| Background | Agent `background-inventor` | Sonnet | `production/.claude/agents/background-inventor.md` |
| Template HTML | `story-universal.html` (template unique) | — | `production/posts-stories/stories/_templates/` |
| Specifications templates | Limites caracteres, presets photo, gradient | — | `production/posts-stories/stories/_templates/SPECS.md` |
| CSS partage | Base + logo | — | `production/posts-stories/stories/_templates/_base/` |
| Rendu | Script Puppeteer | — | `production/posts-stories/stories/_scripts/render-story.js` |
