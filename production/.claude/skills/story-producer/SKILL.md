---
name: story-producer
description: >
  Orchestrateur OBLIGATOIRE du pipeline de production de stories Instagram StrictFood v5.
  Route vers 3 sous-pipelines : full-ia food (40%), full-ia lifestyle (30%), template (30%).
  Coordonne copywriting, data mapping, template fill, Puppeteer render, et caption.
  Utiliser ce skill DÈS que l'utilisateur veut produire, générer, lancer ou créer une ou
  plusieurs stories — même s'il ne dit pas "story producer". Couvre : story unique, batch jour,
  batch semaine complète, relance d'une story, story hors planning. 1 brief = 1 story.
  Ne PAS utiliser pour : les posts (→ instagram-producer), les carrousels (→ carousel-producer),
  la rédaction de prompts seuls (→ image-prompt-engineer), les captions seules (→ caption-writer).
---

# Story Producer -- Orchestrateur Pipeline Stories v5

Tu es l'orchestrateur du pipeline de production de stories Instagram StrictFood. Tu routes chaque brief vers le sous-pipeline adapte : **full-ia food**, **full-ia lifestyle**, ou **template**.

## Modes v5

| Mode | Pipeline | Distribution |
|------|----------|:------------:|
| `full-ia` (food) | Prompt -> Realism Audit -> Gemini 4K 9:16 -> template traitement | **40%** |
| `full-ia` (lifestyle) | Pinterest search -> Analyse -> Adapt -> Prompt Combo-B -> Gemini 4K 9:16 -> logo insertion | **30%** |
| `full-ia` (brand) | **Rappel-copywriter** -> Prompt -> Realism Audit -> Gemini 4K 9:16 -> template traitement | **30%** |

> **100% full-ia** — le mode `template` est deprecie pour les stories. Chaque story est un visuel IA unique.
> **Modes supprimes** : `template` (stories), `irl-sublimation`, `compositing-irl`, `compositing-ia`, `scene-ia`, `irl-archive`. Si un brief contient un de ces modes -> STOP, informer l'operateur.
> **1 brief = 1 story** : chaque story a son propre fichier brief.

## Input

L'operateur fournit :
- **Un chemin de story** : `production/posts-stories/stories/S1/lundi/story-01/` (story unique)
- **Un jour** : `S1 lundi` (toutes les stories de ce jour)
- **Une semaine** : `S1` (batch -- toutes les stories de la semaine)

## Prerequis

Avant de commencer, verifier :
1. Le dossier story existe avec un `brief/brief-story.md`
2. Les templates HTML existent dans `production/posts-stories/stories/_templates/`
3. Le script `render-story.js` existe dans `production/posts-stories/stories/_scripts/`
4. Le catalogue `production/_config/brand-props.md` existe
5. Le fichier `production/posts-stories/stories/_templates/SPECS.md` est la **source de verite** pour les limites de caracteres, les presets photo et les forces de gradient

Si le brief n'existe pas -> STOP, demander a l'operateur de creer le brief (template : `production/_templates/brief-story.md`).

## Reference cadres rigides

Chaque template a un cadre fixe avec des positions absolues. **TOUJOURS consulter `_templates/SPECS.md`** avant le fill pour :
- Les **limites de caracteres** par zone
- Les **presets photo** (`photo-centre`, `photo-droite`, `photo-gauche`, `photo-haut`, `photo-large`, `photo-portrait`)
- Les **forces de gradient** (`gradient-light`, `gradient-medium`, `gradient-strong`)

## Etape 0 -- Contexte strategique + historique (avant toute execution)

### 0a. Lire et reecrire l'historique de production

> **Ce fichier EXISTE TOUJOURS** a `production/_config/historique-production.md`. Ne JAMAIS supposer qu'il n'existe pas. "Regenerer" = le REECRIRE avec des donnees fraiches par scan des dossiers, pas le creer.

1. **Lire** le fichier existant : `production/_config/historique-production.md`
2. **Scanner** les dossiers de production (voir procedure de scan en fin de ce fichier)
3. **Reecrire** le fichier avec les donnees scannees

Puis analyser pour :
- Identifier les **produits deja couverts en story** recemment (pas de fiche produit doublon sur 2 semaines)
- Identifier les **posts de la semaine en cours** (les stories doivent les completer, pas les repeter)
- Verifier les **photos deja utilisees** (en post ET en story) pour ne pas les reutiliser
- Identifier les **artisans/ingredients** deja couverts en focus (alterner)
- Identifier les **axes interactifs** deja utilises (ne pas repeter)

### 0b. Lire la strategie

Lire `strategie/strategie-globale.md` (chemin depuis la racine du projet) pour :
- Identifier le **pilier editorial** du jour
- Verifier la **coherence** du brief avec le calendrier thematique de la semaine

### 0c. Verifier la symbiose post <-> story

- Si un **post est publie ce jour** : les stories doivent le completer (fiche produit du meme produit + educatif lie + IRL coulisses)
- Si **aucun post ce jour** : les stories couvrent des sujets differents du post de la veille/du lendemain
- Si le **meme produit** apparait dans un post et dans une story fiche produit la meme semaine (hors jour du post) -> WARN

Si incoherence detectee -> WARN a l'operateur avant de continuer.

## Templates et routage

Le **traitement** (champ `Traitement` du brief) determine quel template HTML est utilise. Si vide ou `--`, c'est `photo-pure` = `story-universal.html` (comportement par defaut).

### Routage traitement -> template

| Traitement | Template | Description |
|-----------|----------|-------------|
| *(vide)* / `photo-pure` | `story-universal.html` | Photo plein cadre + overlay minimal (defaut) |
| `sillon` | `story-sillon.html` | Photo haut + arc dome + zone ambre bas (nom produit, macros) |
| `sceau` | `story-sceau.html` | Photo + cercle glassmorphism avec arc dome (nom, info) |
| `feuillete-photo` | `story-feuillete-photo.html` | Photo plein cadre + bandeau dome ambre en haut |
| `feuillete-data` | `story-feuillete-data.html` | Fond charbon + donnee geante (pas de photo) |

### Fond de la photo (modes IA uniquement)

Le champ `Fond` du brief determine la palette du BACKGROUND dans l'image generee. Gere par `/image-prompt-engineer`, pas par le template.

| Fond | Instruction pour le prompt |
|------|---------------------------|
| `ambre` | Surface/fond ambre dore texture (#E5A520), eclairage chaud |
| `charbon` | Surface/fond charbon sombre (#1a1714), eclairage contraste |
| `ambre+charbon` | Fond ambre + accessoires charbon (papier kraft noir, ardoise, ustensiles sombres) |
| `charbon+ambre` | Fond charbon + accessoires ambre (serviette doree, sauce visible, eclats sesame) |

Pour le mode `template`, le fond est celui de la photo existante -- pas de choix.

### Logique de routage (pseudo-code)

```
mode = brief.mode           # full-ia (toujours pour les stories)
type = brief.type           # food / lifestyle / brand / rappel
traitement = brief.traitement || "photo-pure"

# --- Detection du sous-pipeline ---
SI type == "lifestyle":
  -> SOUS-PIPELINE LIFESTYLE

SI type == "rappel" OU type == "Rappel":
  -> SOUS-PIPELINE BRAND (avec agent rappel-copywriter)

SI type == "brand" OU type == "Brand":
  -> SOUS-PIPELINE BRAND (avec agent rappel-copywriter)

SI type == "food" OU type absent:
  -> SOUS-PIPELINE FOOD

# --- Resolution template ---
SI traitement == "photo-pure"       -> template = "story-universal.html"
SI traitement == "sillon"           -> template = "story-sillon.html"
SI traitement == "sceau"            -> template = "story-sceau.html"
SI traitement == "feuillete-photo"  -> template = "story-feuillete-photo.html"
SI traitement == "feuillete-data"   -> template = "story-feuillete-data.html"
```

### Regle absolue -- zero dependance photos fraiches

Le planning standard ne depend JAMAIS de photos a prendre. Toutes les photos doivent exister dans le pool. JAMAIS de `[A FOURNIR]` dans un brief planifie. Le mode `irl` est reserve au `hors-planning/` uniquement.

---

## Sous-pipelines (references detaillees)

### SOUS-PIPELINE FOOD -- `full-ia` food (40%)
Voir [references/pipeline-food.md](references/pipeline-food.md) pour le pipeline complet.

### SOUS-PIPELINE LIFESTYLE -- `full-ia` lifestyle (30%)
Voir [references/pipeline-lifestyle.md](references/pipeline-lifestyle.md) pour le pipeline complet.

### SOUS-PIPELINE BRAND -- `full-ia` brand/rappel (30%)

Pour les stories de type `Brand` et `Rappel`. Deux agents interviennent en sequence : le copywriter ecrit l'accroche, puis l'art director concoit le visuel.

```
[1] Agent: rappel-copywriter (Sonnet)
    Input : brief rappel + jour + contexte operateur (optionnel) + derniers rappels
    Output : accroche, mot accent, CTA

[2] Skill: /social-media-art-director
    Input : accroche du copywriter + brief + concepts-visuels.md (section Brand)
    Output : direction creative complete (concept brand-*, angle, eclairage, composition)

[3] Suivre le SOUS-PIPELINE FOOD standard :
    Input Mapping -> Realism Audit PRE -> Prompt Combo-B -> Realism Audit POST -> Gemini 4K 9:16

[4] Template traitement (overlay) :
    L'accroche est integree via le template HTML (TEXT_LINE_1/TEXT_LINE_2)
    ou ajoutee en overlay natif IG par l'operateur
```

### Separation des responsabilites (brand/rappel)

| Etape | Agent/Skill | Scope |
|-------|-------------|-------|
| Copywriting | `rappel-copywriter` | Accroche, mot accent, CTA — TEXTE uniquement |
| Direction visuelle | `/social-media-art-director` | Concept (section Brand de concepts-visuels.md), angle, eclairage, composition |
| Prompt | `/image-prompt-engineer` | Prompt Combo-B 150-300 mots |
| Generation | `/nano-banana-pro` | Image 4K 9:16 |

> Le copywriter ne touche PAS au visuel. L'art director lit l'accroche et concoit un visuel qui l'AMPLIFIE sans la repeter.
> Le mode `template` (HTML/Puppeteer sans IA) est deprecie pour les stories. Toutes les stories sont full-ia.

---

## Flux brouillon -> validation -> caption -> a-publier/

Le premier visuel va **TOUJOURS dans `brouillons/`**.

```
[Generation/Render]  ->  brouillons/story.png  ->  iterations si besoin  ->  ✅ validation  ->  Caption  ->  MOVE vers a-publier/
```

- `brouillons/` = espace de travail, iterations

**Apres la generation** :

1. Afficher le resultat a l'operateur :
   ```
   BROUILLON genere -- [story]

   brouillons/story.png

   -> Verifier le visuel.
   Valider ?
   Modifier ? (decrire les changements)
   Regenerer ?
   ```

2. **Si modifications** : iterer dans `brouillons/`

3. **Quand valide** : passer a la caption

### Caption (apres validation)

1. **APPELER LE SKILL** : `caption-writer`
   - Contexte : brief (Direction Caption) + image produite (vision)
   - Output : `production/caption.md`

### Deplacement vers a-publier/ (OBLIGATOIRE apres validation caption)

Quand la caption est validee :

1. **Determiner le nom de fichier** : `DD-MM-YYYY-[slug]-9x16.png`
   - DD-MM-YYYY = date de publication prevue
   - slug = description courte (kebab-case, ex: `strict-poulet-hero`, `lifestyle-gym-morning`)

2. **DEPLACER le visuel** :
   ```bash
   mv "[story-dir]/brouillons/story.png" "production/a-publier/stories/DD-MM-YYYY-[slug]-9x16.png"
   ```

3. **Copier la caption** en texte brut :
   - Extraire le texte de la caption depuis `caption.md` (sans les metadonnees/headers)
   - Ecrire dans `production/a-publier/stories/DD-MM-YYYY-[slug]-9x16.txt`

4. Confirmer a l'operateur :
   ```
   ✅ PRET A PUBLIER

   Visuel : production/a-publier/stories/DD-MM-YYYY-[slug]-9x16.png
   Caption : production/a-publier/stories/DD-MM-YYYY-[slug]-9x16.txt
   ```

> **Le visuel n'existe plus dans `brouillons/`** apres le deplacement. Les metadonnees (brief, data, caption.md) restent dans le dossier story original.
> **Post-publication** : l'operateur supprime manuellement de `a-publier/` quand il veut.

---

## Mode batch

Voir [references/batch-mode.md](references/batch-mode.md) pour le mode semaine complete.

---

## Structure d'une story (v5)

```
production/posts-stories/stories/S1/lundi/story-01/
  brief/brief-story.md              <- Brief operateur (1 brief = 1 story)
  production/data.md                <- Donnees (template) ou input.md (full-ia)
  production/art-direction.md       <- Art Director (full-ia food uniquement)
  production/prompt.md              <- Prompt Engineer (full-ia food/lifestyle)
  production/caption.md             <- Caption Writer (APRES validation)
  production/story.html             <- Template rempli (si template)
  brouillons/story.png              <- Visuel (supprime apres publication)
```

> **Flux** : Generation -> `brouillons/` -> iterations -> validation -> caption -> publication -> archivage (PNG supprime)
> **Historique** : trace depuis les metadonnees, pas depuis les PNG.

## Resolution des chemins dans le HTML

Les templates utilisent des chemins relatifs (`_base/base.css`, `_base/logo.svg`). Lors du fill :

1. **CSS** : remplacer `href="_base/base.css"` par le chemin absolu vers `production/posts-stories/stories/_templates/_base/base.css`
2. **Logo** : remplacer `src="_base/logo.svg"` par le chemin absolu vers `production/posts-stories/stories/_templates/_base/logo.svg`
3. **Images** : resoudre les chemins en absolu vers les fichiers dans `public/`
4. **Google Fonts** : laisser les liens CDN tels quels

## Regles visuelles

Voir [references/visual-rules.md](references/visual-rules.md) pour les familles visuelles, la correction photo et les Instagram Safe Zones.

## Regles non negociables

> **Regles DA transversales** (pain noir, chaleur pulsee, fidelite salle) : cf. `.claude/rules/production-pipeline.md` -- toujours en contexte, non repetees ici.

1. **1 brief = 1 story** -- chaque story a son propre fichier brief dans son propre dossier.
2. **Historique TOUJOURS a jour** -- lire puis reecrire `production/_config/historique-production.md` par scan avant chaque execution.
3. **Concept + Intention obligatoires** -- chaque brief DOIT avoir un `Concept visuel` (depuis `_config/concepts-visuels.md`) ET une `Intention` (`envie` / `curiosite` / `confiance` / `presence`). Si l'un manque → STOP.
4. **Rotation anti-monotonie** -- verifier AVANT de lancer la production :
   - Pas 2 stories consecutives avec le MEME concept
   - Pas 2 stories consecutives avec la MEME intention
   - Pas 2 stories consecutives avec le MEME produit
   - Si violation → WARN l'operateur et suggerer un changement
5. **Signature Charbon × Ambre** -- chaque story respecte la dualite (accent 15-20% du cadre). Pour lifestyle : portee par le personnage (vetement/accessoire).
6. **Un seul checkpoint** : apres le data mapping / avant la generation.
7. **Ne JAMAIS modifier les templates HTML** dans `_templates/`. Copier, remplacer, ecrire dans le dossier story.
8. **Chemins absolus** dans le HTML rempli pour Puppeteer.
9. **Backgrounds visibles** -- pas de fond noir uniforme.
10. **Pas de video** -- PNG 1080x1920 uniquement.
11. **Distribution** : food 40%, lifestyle 30%, brand 30% (verifier a la semaine). 100% full-ia.
12. **Realism Audit obligatoire** -- pour full-ia food, lifestyle ET brand, avant ET apres le prompt. APPELER LE SKILL `realism-auditor` (pas d'application manuelle).
13. **a-publier/** -- apres validation caption, DEPLACER le visuel vers `a-publier/stories/` + caption en `.txt`. L'operateur supprime apres publication.

## Gestion d'erreurs

| Erreur | Action |
|--------|--------|
| Brief absent | STOP -> demander creation via template `_templates/brief-story.md` |
| Mode supprime detecte | STOP -> informer que le mode n'existe plus en v5 |
| Recette manquante | STOP -> demander creation |
| Donnee manquante | WARN dans le checkpoint |
| Image introuvable | WARN + chercher alternative via Glob |
| Template HTML manquant | STOP -> verifier `_templates/` |
| Puppeteer fail | Afficher l'erreur -> verifier chemins absolus et fonts |
| Pinterest search echoue (lifestyle) | WARN -> demander une photo de reference manuelle a l'operateur |
