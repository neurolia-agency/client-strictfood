# Playbook Production Instagram — StrictFood v5

> Guide operateur. Chaque section repond a une intention : "Je veux faire X."
> Les regles techniques sont dans `CLAUDE.md`. Ici, on suit les etapes.

---

## Navigation rapide

| Je veux... | Section |
|------------|---------|
| Planifier une semaine | [1. Planifier](#1-planifier-une-semaine) |
| Produire un post | [2. Produire un post](#2-produire-un-post) |
| Produire les stories du jour | [3. Produire des stories](#3-produire-des-stories) |
| Produire un carrousel | [4. Produire un carrousel](#4-produire-un-carrousel) |
| Creer un visuel spontane (hors planning) | [5. Hors planning](#5-hors-planning) |
| Comprendre les modes de creation | [6. Modes](#6-les-modes-de-creation) |
| Comprendre les distributions | [7. Distributions](#7-distributions) |
| Comprendre le systeme visuel | [8. Systeme visuel](#8-systeme-visuel) |
| Comprendre l'architecture | [9. Architecture](#9-architecture) |
| Verifier avant publication | [10. Checklists](#10-checklists) |
| Chercher un terme | [Glossaire](#glossaire) |

---

## 1. Planifier une semaine

### Quand

Avant chaque semaine de production. Obligatoire avant les briefs.

### Etapes

```
Etape 0 — Regenerer l'historique
    ↓
Etape 1 — Creer le planning publications (2 posts + 2 carrousels/semaine)
    ↓
Etape 2 — Creer le planning stories (21 stories/semaine)
    ↓
Etape 3 — Valider les distributions
    ↓
Etape 4 — Rediger les briefs individuels
```

### Etape 0 — Regenerer l'historique

**Obligatoire a chaque debut de semaine.** L'historique reflete ce qui existe sur le disque.

```
Lire production/_config/historique-production.md
Scanner tous les dossiers posts + stories
Reecrire le fichier avec les donnees fraiches
```

L'historique repond a : quels produits ont ete couverts, quels piliers, quels traitements, quelles photos utilisees. Il permet d'eviter les doublons.

### Etape 1 — Planning publications (2 posts + 2 carrousels)

**2 posts simples + 2 carrousels par semaine = 4 publications.** Template : `_templates/planning-semaine.md`

#### Posts simples (2/semaine)

Pour chaque post, decider :

| Champ | Choix | Source |
|-------|-------|--------|
| **Pilier** | Le Produit, Les Benefices, La Marque | Distribution piliers |
| **Traitement** | photo-pure, knockout-band, masque, masque-inverse, texture-fill, triptych | Distribution traitements |
| **Fond** | ambre (+ ID variante) ou charbon | Distribution fonds |
| **Produit** | Un des 8 produits ou sujet pilier | Historique (eviter doublons) |
| **Concept visuel** | Un concept de `_config/concepts-visuels.md` | Varier vs semaines precedentes |

**Mode : tous les posts simples en planning sont `full-ia`.**

#### Carrousels (2/semaine)

Pour chaque carrousel, decider :

| Champ | Choix | Source |
|-------|-------|--------|
| **Type** | 1 des 9 types | `_config/carousel-themes.md` |
| **Famille** | A (texte), B (photo), C (panoramique) | Selon le type |
| **Pilier** | Le Produit, Les Benefices, La Marque | Distribution piliers |
| **Produit** | Produit principal du carrousel | Historique (eviter doublons) |
| **Slides** | 3-5 (B/C) ou 4-10 (A) | Selon le type |
| **Slug** | Theme educatif ou scene panoramique | `_config/carousel-themes.md` |

**9 types :** Panoramique (C, 2-3/mois) · Zoom Progressif (B, 1-2/mois) · Texture/ASMR (B, 1/mois) · Educatif (A, 1/mois) · Construction (B, 0.5/mois) · Ingredient Spotlight (A, 0.5/mois) · Defile Gamme (B, 0.5/mois) · Process Cuisine (B, 0.5/mois) · Menu Objectif (A, 0.5/mois)

### Etape 2 — Planning stories

**21 stories par semaine (3 par jour).** Pour chaque story, decider :

| Champ | Choix |
|-------|-------|
| **Mode** | `full-ia` (food ou lifestyle) ou `template` |
| **Sous-type** | Food : concept visuel produit. Lifestyle : concept lifestyle. Template : educatif, interactif, annonce, fiche produit |
| **Fond** (modes IA) | ambre, charbon, ambre+charbon, charbon+ambre |
| **Traitement** (stories) | photo-pure, sillon, sceau, feuillete-photo, feuillete-data |
| **Produit/Sujet** | Varier vs posts et stories adjacentes |

### Etape 3 — Verifier les distributions

Avant de valider, verifier :

**Posts :**
- [ ] ≥3 traitements differents sur les 4 posts
- [ ] ≥3 piliers differents
- [ ] Pas 2 consecutifs meme traitement
- [ ] Max 1 triptych/quinzaine
- [ ] ~65% fonds ambre / ~35% charbon

**Stories :**
- [ ] ~40% full-ia food (~8-9 stories)
- [ ] ~30% full-ia lifestyle (~6-7 stories)
- [ ] ~30% template (~6-7 stories)
- [ ] ≥2 full-ia par jour
- [ ] Max 3 interactifs/semaine
- [ ] Max 1 educatif/semaine
- [ ] Max 1 fiche produit/semaine
- [ ] Fonds IA : ~50% ambre, ~25% charbon, ~15% ambre+charbon, ~10% charbon+ambre

### Etape 4 — Briefs individuels

**Posts** : 1 brief par post → `_templates/brief-v3.md`
**Stories** : 1 brief par story → `_templates/brief-story.md`

Chaque brief pointe vers des photos existantes (mode template) ou decrit le visuel a generer (mode full-ia). **Jamais de `[A FOURNIR]`.**

---

## 2. Produire un post

### Commande

```
/instagram-producer DD-MM-YYYY
```

L'orchestrateur lit le brief, detecte le mode et execute le pipeline.

### Pipeline full-ia (99% des posts en planning)

```
[1] Brief lu → mode full-ia detecte
         ↓
[2] Art Direction
    Skill : /social-media-art-director
    Input : brief + recette produit
    Output : production/art-direction.md
         ↓
[3] Input Mapping
    Agent : input-mapper (Haiku)
    Input : art-direction.md + recettes + photo-references
    Output : production/input.md
         ↓
    🔒 Validation operateur
         ↓
[4] Realism Audit PRE-PROMPT
    Skill : /realism-auditor
    Lit : realism-auditor.md + recette + pipeline.md (termes interdits)
    Extrait les contraintes specifiques concept x produit
         ↓
[5] Prompt Engineering
    Skill : /image-prompt-engineer (Mode B, style Combo-B)
    Output : production/prompt.md
    Minimum 150-300 mots, narratif fluide, CAPS, negatifs inline
         ↓
[6] Realism Audit POST-PROMPT
    Verifie : termes interdits absents, termes obligatoires presents,
    physique coherente, proportions adaptees au produit
         ↓
    🔒 Validation operateur
         ↓
[7] Generation image
    Skill : /nano-banana-pro
    Resolution : TOUJOURS 2K
    Pas de photo reference produit (produit decrit dans le prompt)
         ↓
[8] Image dans brouillons/
         ↓
    🔍 Verification operateur
    Pain noir ? Ingredients corrects ? Pas de grill marks ?
    Eclairage coherent ? Esthetique DA respectee ?
         ↓
    Si KO → iterations (modifier prompt, regenerer)
    Si OK → "valide" → le visuel reste dans brouillons/
         ↓
[9] Caption
    Skill : /caption-writer
    Input : image validee (vision) + direction caption du brief
    Output : production/caption.md
         ↓
[10] Publication sur Instagram (manuelle)
         ↓
[11] Archivage (via dashboard Neurolia)
     PNG supprime, metadata texte conservee, historique mis a jour
```

### Pipeline template / carrousel

```
Brief → /carousel-producer DD-MM-YYYY
     → Recherche scientifique (/nutrition-researcher)
     → Copywriting (carousel-copywriter agent)
     → Template fill HTML
     → Puppeteer 1080x1350
     → brouillons/ → validation → caption → publication
```

### Resultat : structure du dossier post

```
posts-stories/posts/periode-[N]/S[X]/DD-MM-YYYY/
├── brief/brief.md                     ← Le brief (template brief-v3)
├── production/
│   ├── art-direction.md               ← Direction creative
│   ├── input.md                       ← Mapping photos + recettes
│   ├── prompt.md                      ← Prompt final (style Combo-B)
│   └── caption.md                     ← Caption generee apres validation
└── brouillons/                        ← Visuels generes
    ├── *.png                          ← Premier rendu + iterations
    └── publication.md                 ← Metadata apres publication (PNG supprime)
```

---

## 3. Produire des stories

### Commande

```
/story-producer SX jour        # Un jour specifique (3 stories)
/story-producer SX             # Toute la semaine (21 stories)
```

### Pipeline full-ia food

Pour les stories produit (macro, concept, hero) :

```
Brief story lu → mode full-ia food detecte
         ↓
[1] Lecture brief + verification concept visuel
         ↓
[2] Realism Audit pre-prompt (contraintes concept x produit)
         ↓
[3] Prompt Engineering (style Combo-B, format 9:16)
         ↓
[4] Realism Audit post-prompt
         ↓
    🔒 Validation operateur
         ↓
[5] Generation /nano-banana-pro 2K (9:16)
         ↓
[6] brouillons/story.png
         ↓
    🔍 Verification operateur
         ↓
[7] Logo insertion (Gemini edit, 2 etapes)
    Etape 1 : generer le visuel SANS logo
    Etape 2 : inserer logo via --reference-image public/logo/strictfood-logo-white-reference.png
         ↓
[8] Validation → caption → publication → archivage
```

### Pipeline full-ia lifestyle

Les stories lifestyle avec personnage(s) + produit StrictFood :

```
Brief story lu → mode full-ia lifestyle detecte
         ↓
[1] Recherche Pinterest automatisee
    Mots-cles : "tenue [homme/femme] couleur vive [contexte]"
    Filtrage : couleurs vives, posture naturelle, decor exploitable
         ↓
[2] Analyse photo Pinterest
    Transcription : personnage, tenue (pieces, couleurs, matieres),
    posture, decor (mur, sol, lumiere, elements)
         ↓
[3] Adaptation StrictFood
    - 1 piece vestimentaire ambre (#FABA43) : bomber, hoodie, casquette, sac
    - Produit StrictFood dans la scene : burger tenu, kraft bag, plateau
    - Gaze : JAMAIS vers la camera → 3/4, profil, regard deporte
    - Posture : en mouvement, pas posee
    - Logo OBLIGATOIRE : sur papier emballage burger OU sur sac kraft dans la scene
         ↓
[4] Prompt Engineering (style Combo-B, 150-300 mots, format 9:16)
    Le prompt decrit TOUT : personnage adapte + tenue + decor + produit + eclairage
    Pas de photo Pinterest en input — inspiration textuelle uniquement
         ↓
[5] Realism Audit post-prompt
         ↓
    🔒 Validation operateur
         ↓
[6] Generation /nano-banana-pro 2K (9:16)
         ↓
[7] brouillons/ → verification → logo insertion si pas dans la scene
         ↓
[8] Validation → caption → publication → archivage
```

### Pipeline template

Pour les stories educatif, interactif, annonce, fiche produit :

```
Brief story lu → mode template detecte
         ↓
[1] Story-copywriter (agent Sonnet)
    Reecrit les textes bruts du brief en textes impactants
         ↓
[2] Story-data-mapper (agent Haiku)
    Mappe les donnees vers les champs du template HTML
         ↓
    🔒 Validation operateur (donnees)
         ↓
[3] Template fill (story-universal.html ou traitement specifique)
    + Puppeteer render 1080x1920
         ↓
[4] brouillons/ → verification → validation
         ↓
[5] Caption → publication → archivage
```

### Story Rappel (bonus #4)

Story supplementaire publiee tous les 2 jours. Rappel que le restaurant existe + CTA.

- **Visuel** : photo reelle du restaurant (mode template) OU fond ambre/charbon (mode full-ia)
- **Texte** : hook de la banque de rotation + telephone/horaires/adresse
- **Config** : `_config/story-rappel.md`
- Ne remplace pas les 3 stories principales

### Resultat : structure du dossier story

```
posts-stories/stories/S[X]/[jour]/
├── brief/brief-story-01.md            ← 1 brief par story
├── brief/brief-story-02.md
├── brief/brief-story-03.md
├── story-01/
│   ├── production/data.md             ← Donnees mappees (template)
│   ├── production/prompt.md           ← Prompt (full-ia)
│   ├── production/caption.md          ← Caption
│   └── brouillons/
│       ├── story.png                  ← Visuel genere
│       └── publication.md             ← Metadata apres publication
├── story-02/
│   └── ...
└── story-03/
    └── ...
```

---

## 4. Produire un carrousel

### 9 types, 3 familles

| Famille | Types | Pipeline |
|---------|-------|----------|
| **A — Texte** | Educatif, Ingredient Spotlight, Menu Objectif | Recherche → Copywriting → Template HTML → Puppeteer |
| **B — Photo** | Zoom Progressif, Texture/ASMR, Construction, Defile Gamme, Process Cuisine | Art Dir → Prompt × N slides → Gemini 2K (1080x1350) |
| **C — Panoramique** | Panoramique | Prompt scene large → Gemini 2K (16:9) → `render-panoramic.js` |

### Pipeline Famille A (texte) — `/carousel-producer DD-MM-YYYY`

```
Brief carrousel (Famille A, Thematique: slug)
         ↓
[1] Recherche scientifique
    Skill : /nutrition-researcher
    Sources : PubMed, Harvard, NEJM, OMS, EFSA
    Output : production/carousel-research.md
         ↓
[2] Copywriting
    Agent : carousel-copywriter (Sonnet)
    Output : production/carousel-content.md
         ↓
    🔒 Validation operateur (contenu)
         ↓
[3] Template fill → Puppeteer render (1080x1350)
         ↓
[4] brouillons/ → verification → validation → caption
```

### Pipeline Famille B (photo)

```
Brief carrousel photo (Famille B, Type: [zoom/texture/construction/gamme/process])
         ↓
[1] Definir le bloc de coherence (fond, eclairage, style camera)
    Identique dans tous les prompts du carrousel
         ↓
[2] Pour chaque slide :
    /image-prompt-engineer (bloc commun + description slide specifique)
    /realism-auditor (audit pre/post-prompt)
    /nano-banana-pro 2K (1080x1350, ratio 4:5)
         ↓
[3] N slides dans brouillons/ → verification coherence inter-slides
         ↓
[4] Validation → caption
```

### Pipeline Famille C (panoramique)

```
Brief carrousel panoramique (scene decrite en detail)
         ↓
[1] /image-prompt-engineer (scene large horizontale)
    /realism-auditor
         ↓
[2] /nano-banana-pro 2K (format 16:9, scene etalee)
         ↓
[3] node _templates/carousel/render-panoramic.js --input image.png --slides [3|4]
    Decoupe en N tranches de 1080x1350
         ↓
[4] N slides dans brouillons/ → verification raccords
         ↓
[5] Validation → caption
```

### Themes et references

- **Famille A** : 31 themes educatifs dans `_config/carousel-themes.md`
- **Famille B** : sequences par produit dans `_config/carousel-themes.md` (zoom, texture, construction, gamme)
- **Famille C** : scenes panoramiques dans `_config/carousel-themes.md` (table, flat lay, comptoir, ambiance)

---

## 5. Hors planning

### Quand

Idee spontanee, actualite, contenu opportuniste. Liberte totale sur le mode, le produit, le pilier.

### Commande

```
/freestyle "description de ce que tu veux"
```

Exemples :
```
/freestyle "Strict Boeuf qui flotte au-dessus d'un skateboard dans un skatepark sunset"
/freestyle "Photo de la salle avec le burger sur le comptoir"
/freestyle "Romain qui coupe la viande, photo prise ce midi"
```

### Modes disponibles hors planning

| Mode | Quand l'utiliser | API |
|------|-----------------|-----|
| `full-ia` | Visuel invente de zero (food porn, lifestyle, concept creatif) | Gemini 2K |
| `edit-ia` | Tu as une bonne photo de lieu et tu veux y integrer un produit/personnage | Gemini 2K (input-image) |
| `template` | Story rapide avec texte + photo existante | Puppeteer |
| `irl` | Romain vient de prendre une photo en cuisine/service | Puppeteer (overlay DA) |

### Flux hors planning

```
/freestyle "description"
         ↓
[1] Le skill verifie la conformite DA :
    Pain noir ? Pas de grill ? Ingredients fideles ? Visual system respecte ?
         ↓
[2] Choisit automatiquement le mode adapte
         ↓
[3] Genere le prompt (ou data mapping pour template)
    Memes contraintes que le pipeline standard (Combo-B, realism audit)
         ↓
[4] Generation → brouillons/ → validation → caption → publication
```

### Dossier

```
posts-stories/posts/hors-planning/DD-MM-YYYY/     (posts)
posts-stories/stories/hors-planning/DD-MM-YYYY/   (stories)
```

Le hors-planning n'affecte pas les compteurs de distribution du planning.

---

## 6. Les modes de creation

### Vue d'ensemble

| Mode | Ce que l'IA genere | Input image | Planning | Hors planning |
|------|-------------------|-------------|----------|---------------|
| **full-ia** | TOUT (produit + scene + fond) | Aucune | Oui | Oui |
| **template** | Rien (HTML + Puppeteer) | Photo existante (optionnel) | Oui | Oui |
| **edit-ia** | Produit/sujets ajoutes a une photo reelle | Photo de lieu | Non | Oui |
| **irl** | Rien (overlay DA sur photo fraiche) | Photo fraiche | Non | Oui |

### full-ia — Le mode principal

Le produit et la scene sont **entierement decrits dans le prompt** a partir de la fiche recette et de la direction creative. Aucune photo en input.

**Sous-types :**

| Sous-type | Description | Exemple |
|-----------|-------------|---------|
| **Food hero** | Produit seul sur fond (ambre ou charbon), food porn | Strict Boeuf concept-main sur fond ambre-halo |
| **Food concept** | Produit dans une mise en scene creative | Strict MAX Boeuf concept-eclate 9:16 |
| **Lifestyle** | Personnage(s) + produit StrictFood dans un decor | Homme bomber ambre devant mur graffiti, kraft bag |
| **Macro** | Extreme gros plan sur une zone du produit | Zone sauce + parmesan entre les 2 steaks du MAX |
| **Scene** | Moment de service, comptoir, cuisine (100% genere) | Fist bump au comptoir, plateau avec burger et frites |

**Regle produit** : le produit est TOUJOURS decrit dans le prompt (jamais de photo reference). La fiche recette (`_recettes/[slug].md`) est la source de verite.

**Regle lifestyle** : le process Pinterest automatise fournit l'inspiration visuelle (texture, tenue, decor). Les mots-cles incluent TOUJOURS "couleur" ou "couleur vive". Le logo StrictFood est OBLIGATOIRE (emballage burger ou sac kraft).

### edit-ia — Compositing sur photo reelle

Une photo reelle en input. L'IA ajoute des elements sans modifier le decor.

- **Lieu reconnaissable** (salle StrictFood) → prompt MINIMAL
- **Lieu generique** (parc, rue) → prompt ENRICHI

Reserve au hors-planning (necessite une bonne photo de contexte).

### template — Rendu HTML

Pas d'IA. Donnees mappees dans un template HTML, rendues par Puppeteer. Pour les stories educatif, interactif, annonce, fiche produit, et les carrousels.

### irl — Photo fraiche

Photo prise en live par Romain ou Dorian + overlay DA minimal. Reserve au hors-planning.

---

## 7. Distributions

### Publications — 4 par semaine (2 posts + 2 carrousels)

#### Posts simples (2/semaine)

**Traitements (cible mensuelle) :**

| Traitement | Cible |
|-----------|-------|
| photo-pure | ~45% |
| knockout-band | ~25% |
| texture-fill | ~10% |
| triptych | ~10% |
| masque | ~5% |
| masque-inverse | ~5% |

**Fonds :** ambre ~65% / charbon ~35%
**Mode :** tous en `full-ia`

#### Carrousels (2/semaine = ~8/mois)

| Type | Famille | Freq/mois | Pilier |
|------|---------|-----------|--------|
| Panoramique | C | 2-3 | Le Produit |
| Zoom Progressif | B | 1-2 | Le Produit |
| Texture/ASMR | B | 1 | Le Produit |
| Educatif | A | 1 | Les Benefices |
| Construction | B | 0.5 | Le Produit |
| Ingredient Spotlight | A | 0.5 | Les Benefices |
| Defile Gamme | B | 0.5 | Le Produit |
| Process Cuisine | B | 0.5 | La Marque |
| Menu Objectif | A | 0.5 | Les Benefices |

#### Piliers (posts + carrousels combines)

| Pilier | Cible | Ce qu'il couvre |
|--------|-------|----------------|
| Le Produit | 55% | Food porn, hero shots, concepts visuels, panoramiques, zoom, texture, construction |
| Les Benefices | 35% | Nutrition, comparaisons, macros, educatifs, ingredient spotlight, menu objectif |
| La Marque | 10% | Ponctuel : devanture, fondateur, process cuisine |

**Contraintes publications :**
- Jamais 2 posts consecutifs meme traitement
- ≥2 piliers differents/semaine (posts + carrousels)
- Max 1 triptych/quinzaine
- Pas 2 carrousels du meme type d'affilee
- Alterner famille A et famille B/C dans la semaine (max 1 educatif/semaine)

### Stories — 21 par semaine (3/jour)

**Modes :**

| Mode | Sous-type | Cible | Par semaine |
|------|-----------|-------|-------------|
| full-ia | food (produit, macro, concept) | **40%** | ~8-9 |
| full-ia | lifestyle (personnage + produit) | **30%** | ~6-7 |
| template | educatif, interactif, annonce, fiche | **30%** | ~6-7 |

**Fonds stories (modes IA) :** ambre ~50%, charbon ~25%, ambre+charbon ~15%, charbon+ambre ~10%

**Contraintes stories :**
- ≥2 full-ia par jour
- Max 3 interactifs/semaine
- Max 1 educatif/semaine
- Max 1 fiche produit/semaine
- Max 7 lifestyle/semaine

---

## 8. Systeme visuel

### Traitements posts (identite feed)

| Traitement | Description |
|-----------|-------------|
| **photo-pure** | Produit seul, zero overlay. Le food porn parle seul. |
| **knockout-band** | Produit hero + bande dome identitaire (charbon sur ambre OU ambre sur charbon) |
| **masque** | Typo geante revele le produit (lettres = fenetre sur la photo) |
| **masque-inverse** | Texte ambre solide sur photo |
| **texture-fill** | Lettres remplies par texture produit (sesame, Maillard) |
| **triptych** | 3 posts = 1 visuel dans la grille Instagram |

### Traitements stories

| Traitement | Template HTML | Description |
|-----------|---------------|-------------|
| **photo-pure** | `story-universal.html` | Photo plein cadre + overlay logo minimal |
| **sillon** | `story-sillon.html` | Photo haut + arc dome + zone ambre bas |
| **sceau** | `story-sceau.html` | Photo + cercle glassmorphism avec arc dome |
| **feuillete-photo** | `story-feuillete-photo.html` | Split photo dominante + zone texte |
| **feuillete-data** | `story-feuillete-data.html` | Split data dominante + zone photo |

### Fonds

**32 variantes ambre** dans `_config/fonds-ambre.md` — surfaces, accessoires, effets lumiere, organiques, artistiques, premium. Chaque variante a un ID : `Fond: ambre-halo`.

**Agent background-inventor** : invente de nouveaux fonds originaux quand on veut de la variete. Respecte la DA (palette ambre/charbon, materiaux physiques).

### Concepts visuels

60+ concepts dans `_config/concepts-visuels.md` :
- **Cadrage** : macro, concept-ouvert, concept-eclate, concept-coupe, concept-main...
- **Moment** : action-croque, sensation-goutte, sensation-vapeur...
- **Environnement** : atmo-intime, atmo-neon, lifestyle-terrasse...
- **Camera** : angles, focales, profondeurs de champ

Les concepts sont de l'**inspiration**, pas des regles rigides.

---

## 9. Architecture

### Flux global

```
                    PLANNING
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
     POSTS (2)     STORIES (21)  CARROUSELS (2)
     (full-ia)    (full-ia +     (A: Puppeteer
                   template)      B: Gemini x N
          │            │          C: Gemini + split)
          ▼            ▼            │
       Gemini      Gemini /         ▼
        2K        Puppeteer    Gemini / Puppeteer
          │            │            │
          └────────────┼────────────┘
                       ▼
                  brouillons/
                       │
                       ▼
               Validation operateur
                       │
                       ▼
                Caption (/caption-writer)
                       │
                       ▼
               Publication Instagram
                       │
                       ▼
              Archivage (metadata texte)
```

### Skills et agents

| Outil | Type | Role |
|-------|------|------|
| `/instagram-producer` | Skill | Orchestration posts |
| `/story-producer` | Skill | Orchestration stories |
| `/carousel-producer` | Skill | Orchestration carrousels |
| `/freestyle` | Skill | Production hors planning cadree |
| `/social-media-art-director` | Skill | Direction creative (posts full-ia) |
| `/image-prompt-engineer` | Skill | Prompt style Combo-B (150-300 mots) |
| `/nano-banana-pro` | Skill | Generation image Gemini 2K |
| `/caption-writer` | Skill | Caption apres validation visuel |
| `/realism-auditor` | Skill | Audit pre/post-prompt (obligatoire IA) |
| `/nutrition-researcher` | Skill | Recherche scientifique (carrousels) |
| `input-mapper` | Agent Haiku | Mapping produit → recettes |
| `story-copywriter` | Agent Sonnet | Reecriture textes stories |
| `story-data-mapper` | Agent Haiku | Mapping donnees → template HTML |
| `carousel-copywriter` | Agent Sonnet | Contenu structure par slide |
| `background-inventor` | Agent | Invention fonds creatifs DA |

### Fichiers cles

| Fichier | Role |
|---------|------|
| `CLAUDE.md` | Reference technique complete |
| `PLAYBOOK.md` | Ce fichier (guide operateur) |
| `_config/pipeline.md` | Configuration modes, DA, modeles |
| `_config/historique-production.md` | Historique genere par scan |
| `_config/photo-references.md` | Mapping produit → photos |
| `_config/concepts-visuels.md` | 60+ concepts visuels |
| `_config/fonds-ambre.md` | 32 variantes fonds ambre |
| `_config/carousel-themes.md` | Taxonomie 9 types carrousels (3 familles) |
| `_config/story-rappel.md` | Config story rappel bonus |
| `_recettes/[slug].md` | Fiches recettes (8 produits) |
| `_templates/planning-semaine.md` | Template planning |
| `_templates/brief-v3.md` | Template brief post |
| `_templates/brief-story.md` | Template brief story |
| `_templates/brief-carousel.md` | Template brief carrousel texte (famille A) |
| `_templates/brief-carousel-photo.md` | Template brief carrousel photo (famille B) |
| `_templates/brief-carousel-panoramique.md` | Template brief carrousel panoramique (famille C) |

### Commandes

| Commande | Action |
|----------|--------|
| `/instagram-producer DD-MM-YYYY` | Produire un post |
| `/story-producer SX jour` | Produire les stories d'un jour |
| `/story-producer SX` | Produire toute la semaine |
| `/carousel-producer DD-MM-YYYY` | Produire un carrousel |
| `/freestyle "description"` | Visuel hors planning |

---

## 10. Checklists

### Checklist post

- [ ] **Pain noir** : le bun est NOIR (pas blanc, pas dore)
- [ ] **Pas de grill** : pas de marques de grill (croute Maillard uniforme)
- [ ] **Ingredients fideles** : mache (petites feuilles rondes), parmesan (miettes), sauce (jaune-orange), oignons rouges (tranches)
- [ ] **Esthetique DA** : fond coherent, eclairage contraste, produit lumineux sur fond sombre
- [ ] **Traitement** : le traitement visuel est correct (knockout-band, masque, etc.)
- [ ] **Texte parasite** : pas de texte genere par l'IA dans l'image
- [ ] **Caption** : generee par /caption-writer, pas de "grill"/"grille"/"barbecue"
- [ ] **Format** : ratio correct (4:5, 1:1, 9:16)

### Checklist story

- [ ] **Safe zones** : rien dans les 250px du haut ni les 80px du bas
- [ ] **Logo en bas** : sous la tagline, pas en haut
- [ ] **Tagline** : "Le cheat meal qui n'en est pas un" avec italique
- [ ] **Pain noir** : si burger visible
- [ ] **Lifestyle** : logo present (emballage ou kraft), regard PAS vers la camera
- [ ] **Template** : texte lisible, contraste suffisant
- [ ] **Zone basse** : pas de bande noire vide > 300px

### Checklist carrousel

**Famille A (texte) :**
- [ ] **Couverture** : texture SVG sesame, titre lisible, pas de numerotation
- [ ] **Sources** : en 1 seule slide (avant-derniere)
- [ ] **CTA** : derniere slide avec tagline + macros produit
- [ ] **Coherence** : meme palette sur toutes les slides
- [ ] **Chiffres** : pas de repetition titre ↔ fact-block

**Famille B (photo) :**
- [ ] **Coherence** : meme fond, meme eclairage, meme style sur toutes les slides
- [ ] **Pain noir** : visible et correct sur chaque slide avec burger
- [ ] **Pas de grill marks** : croute Maillard uniforme
- [ ] **Pas de texte** dans les images generees
- [ ] **Resolution** : 1080x1350 (4:5) par slide

**Famille C (panoramique) :**
- [ ] **Raccords** : pas de coupure sur un element important entre les slides
- [ ] **Continuite** : fond/surface continu d'un bout a l'autre
- [ ] **Pain noir** : sur tous les burgers visibles
- [ ] **Pas de texte** dans l'image
- [ ] **Resolution** : chaque slide 1080x1350 apres decoupe

---

## Glossaire

| Terme | Definition |
|-------|-----------|
| **Pilier** | Categorie editoriale (Le Produit, Les Benefices, La Marque) |
| **Traitement** | Style visuel du post dans le feed (photo-pure, knockout-band, masque, etc.) |
| **Mode** | Methode de creation (full-ia, edit-ia, template, irl) |
| **Fond** | Arriere-plan du visuel (ambre, charbon, variantes) |
| **Concept visuel** | Idee de mise en scene (macro-sauce, concept-eclate, lifestyle-terrasse) |
| **Brief** | Document decrivant le visuel a produire (1 brief = 1 post ou 1 story) |
| **Planning** | Tableau semaine distribuant piliers, modes, traitements, produits |
| **Brouillon** | Visuel genere, dans `brouillons/`, en attente de validation |
| **Validation** | L'operateur confirme que le visuel est OK |
| **Archivage** | PNG supprime apres publication, remplace par metadata texte |
| **Historique** | Fichier markdown genere par scan des dossiers |
| **Combo-B** | Style de prompt reference (150-300 mots, narratif, CAPS, negatifs inline) |
| **Realism Audit** | Verification physique/logique du prompt avant generation |
| **Hors planning** | Production spontanee via `/freestyle`, n'affecte pas les compteurs |
| **DA** | Direction artistique (Dark Food Premium) |
| **Chaleur pulsee** | Cuisson air fryer (JAMAIS "grill", "barbecue") |
| **Pain noir** | Bun charbon sesame (JAMAIS pain blanc) |
| **Tagline** | "Le cheat meal qui n'en est pas un" — fixe |
| **Safe zone** | Zone IG (top 250px, bottom 80px, sides 65px) |
| **Puppeteer** | Moteur HTML → PNG (stories 1080x1920, carrousels 1080x1350) |
| **Gemini 2K** | API generation images (Nano Banana Pro) |
| **Story Rappel** | Story bonus (#4) tous les 2 jours — rappel restaurant + CTA |

---

## Regles absolues

S'appliquent a TOUT contenu, TOUS modes, TOUTES etapes :

1. **Pain noir obligatoire** — Tous les burgers au pain noir sesame. Zero tolerance pain blanc.
2. **Chaleur pulsee obligatoire** — Pas de grill. Tout au air fryer. JAMAIS "grill", "grille", "barbecue", "poele", "frit".
3. **Produit decrit, jamais en photo** — Le produit est decrit dans le prompt depuis la recette. Pas de photo reference produit.
4. **Prompt style Combo-B** — 150-300 mots, narratif fluide, CAPS, negatifs inline, verbes de mouvement.
5. **Brouillon d'abord** — Le premier visuel va dans `brouillons/`. Jamais publie directement.
6. **Caption apres validation** — Generee APRES validation du visuel, pas avant.
7. **Fidelite salle restaurant** — Si l'interieur est visible, correspondre a la vraie salle.
8. **Logo sur lifestyle** — Chaque visuel lifestyle DOIT montrer le logo (emballage ou kraft bag).
