# Production Pipeline Instagram — Regles v5

> S'applique quand on travaille dans `production/`

## REGLE ABSOLUE — Zero dependance photos fraiches

Le planning standard ne depend JAMAIS de photos a prendre par Romain/Dorian. Le planning standard utilise uniquement `full-ia`. Les modes `edit-ia` et `irl` sont reserves au `hors-planning/` uniquement. Le mode `template` est deprecie pour les stories.

| Verification | Action |
|-------------|--------|
| **Brief planifie** | JAMAIS de `[A FOURNIR]`, `[A PRENDRE]`, `[ROMAIN]` |
| **Planning** | Les modes `irl` et `edit-ia` ne doivent PAS apparaitre dans un planning standard |
| **Chemin photo** | Verifier l'existence du fichier AVANT de l'ecrire dans le brief (mode template) |

## REGLE — Stories 100% full-ia

Toutes les stories sont en mode `full-ia` (food 40%, lifestyle 30%, brand 30%). Le mode `template` est deprecie pour les stories — chaque story est un visuel IA unique. Les stories rappel utilisent l'agent `rappel-copywriter` pour le copywriting creatif. Les templates HTML (`story-universal.html`, `story-sillon.html`, etc.) sont utilises uniquement pour l'overlay final (logo, tagline, texte), PAS comme pipeline de rendu principal.

## REGLE — Produit decrit, jamais en photo reference

Dans tous les modes IA (full-ia, edit-ia), le produit est DECRIT dans le prompt textuel. Jamais de photo produit en input. Le prompt engineer est calibre sur le style Combo-B (150-300 mots).

## REGLE — 1 brief = 1 story

Chaque story a son propre brief individuel (`brief-story.md`). Plus de briefs groupes par jour.

## ⛔ RÈGLE ABSOLUE — Pain noir obligatoire

**Tous les burgers StrictFood sont au pain noir (black bun sésame).** Le pain blanc/classique est obsolète et ne doit JAMAIS apparaître dans aucun livrable.

Cette règle s'applique à **TOUS** les process de création (posts ET stories, tous modes) :

| Étape | Vérification |
|-------|-------------|
| **Selection photo** | Preferer `burgers-black/`. Si photo pain blanc → utilisable avec `bun-swap-required` (conversion IA). Si aucune photo dispo → STOP |
| **Génération IA** (prompt) | Le prompt DOIT spécifier "black sesame bun" ou "pain noir sésame". INTERDIT : "brioche", "white bun", "plain bun", "golden bun" |
| **Art direction** | Toute fiche de direction burger doit mentionner le pain noir comme contrainte visuelle |
| **Caption** | Toujours écrire "pain noir" (jamais "pain", "bun", "brioche" sans le qualificatif "noir") |
| **Checkpoint** | Vérifier visuellement que le bun est NOIR. Si pain blanc détecté → BLOQUER et demander remplacement |
| **Validation brouillon** | Avant validation, re-verifier le pain noir |

> Si un doute existe sur la couleur du bun dans un visuel, **bloquer** plutôt que laisser passer.

## ⛔ RÈGLE ABSOLUE — Chaleur pulsée (air fryer) obligatoire

**StrictFood ne possède AUCUN grill, AUCUN barbecue, AUCUNE poêle, AUCUNE friteuse à huile.** TOUT est cuit au air fryer (chaleur pulsée). Zéro huile de cuisson. C'est un principe FONDAMENTAL de la marque — ce qui différencie StrictFood d'un fast-food classique.

Cette règle s'applique à **TOUS** les process de création (posts ET stories, tous modes, briefs, plannings, captions, prompts IA) :

| Étape | Vérification |
|-------|-------------|
| **Planning / Brief** | JAMAIS écrire "grill", "barbecue", "grillé", "poêlé", "frit". Écrire "chaleur pulsée", "air fryer", "cuisson sans huile". |
| **Textes stories** | Le mot "grill" ou "grillé" ne doit JAMAIS apparaître. Remplacer par "cuit au air fryer" ou "chaleur pulsée" |
| **Génération IA** (prompt) | INTERDIT dans les prompts : "grill marks", "grilled", "charred", "barbecued", "pan-fried", "deep-fried". OBLIGATOIRE : "oven-seared", "uniform Maillard crust", "air-fried" |
| **Art direction** | Toute mention de cuisson doit spécifier "chaleur pulsée (air fryer, zéro huile)" |
| **Visuel** | PAS de marques de grill sur la viande. La croûte est UNIFORME (réaction de Maillard au four), pas rayée |
| **Caption** | Mentionner "chaleur pulsée" ou "air fryer" ou "cuit sans huile", JAMAIS "grillé" |
| **Scènes cuisine** (full-ia, edit-ia, IRL) | PAS de grill visible dans la cuisine. L'équipement de cuisson StrictFood = air fryer uniquement |

**Termes INTERDITS** (tous contextes) :
`grill`, `grillé`, `grillée`, `barbecue`, `BBQ`, `poêle`, `poêlé`, `frit`, `friture`, `huile de cuisson`, `grill marks`, `grilled`, `charred`, `char lines`, `barbecued`, `pan-fried`, `deep-fried`, `fried in oil`

**Termes OBLIGATOIRES** (remplacement) :
`chaleur pulsée`, `air fryer`, `cuit sans huile`, `zéro huile`, `cuisson sèche`, `oven-seared`, `uniform Maillard crust`, `air-fried`

> Si "grill" ou tout terme interdit apparaît dans un brief, un prompt, une caption ou un visuel → **BLOQUER** immédiatement. `⚠️ CUISSON NON CONFORME — StrictFood n'utilise pas de grill`

## ⛔ RÈGLE ABSOLUE — Fidélité salle de restaurant

**Quand un visuel montre la salle du restaurant StrictFood, CHAQUE élément visible doit être fidèle à la réalité.** Les photos de référence de la salle (`public/images/photos-references/contexte/salle-restaurant/`, 8 photos) sont la source de vérité. Rien ne doit être inventé ni altéré.

### Principe

Les photos de la salle PEUVENT et DOIVENT être utilisées. Mais le résultat doit être **indiscernable de la réalité** :

| Autorisé | Interdit |
|----------|----------|
| Changer l'angle de vue / la perspective | Modifier les matériaux (ex: murs boisés au lieu de carrelage) |
| Reconstituer une table ou chaise manquante sur la photo (même modèle) | Ajouter du mobilier qui n'existe pas (fauteuils, banquettes, lustres) |
| Compléter un mur partiellement visible (même carrelage/texture) | Changer l'ambiance lumineuse (chaud/pub au lieu de neutre/moderne) |
| Cadrer sur une zone spécifique de la salle | Inventer une décoration absente (brique, bois sombre, plantes au plafond) |
| Ajouter le produit sur une table existante | Remplacer le sol, le comptoir ou le mur végétal par autre chose |
| Ajuster légèrement l'éclairage pour le food porn | Transformer l'espace en un autre style de restaurant |

### Caractéristiques de la vraie salle (référence)

| Élément | Description exacte |
|---------|-------------------|
| **Murs** | Carrelage blanc/gris clair (grands carreaux rectangulaires) |
| **Accent bois** | Bois blond (chêne clair) en panneau mural partiel + plateaux de table |
| **Mobilier** | Tables rondes bois blond + chaises noires métal (style industriel épuré) |
| **Mur végétal** | Grand mur de plantes vertes avec néon blanc "STRICT FOOD'S" |
| **Comptoir** | Vitrine réfrigérée noire + comptoir blanc |
| **Menu board** | Grand panneau noir avec typographie blanche |
| **Sol** | Gris clair |
| **Ambiance** | Moderne, minimaliste, lumineux (éclairage blanc/neutre) |

### Application par étape

| Étape | Action |
|-------|--------|
| **Art direction** | Si scène en salle → décrire UNIQUEMENT les éléments réels de la salle. Fournir les photos de référence comme input |
| **Prompt IA** | Décrire le décor en reprenant les matériaux et couleurs exacts. Fournir les photos salle comme référence image si l'API le permet |
| **edit-ia** | Si scene restaurant, UTILISER les photos de `contexte/salle-restaurant/` comme input. Le produit est decrit dans le prompt |
| **Checkpoint visuel** | Comparer le rendu avec les photos de référence. Tout élément qui n'existe pas dans la vraie salle → BLOQUER `⚠️ DÉCOR RESTAURANT NON CONFORME — [élément inventé]` |

### Lieux neutres (non concernés par cette règle)

Les fonds suivants n'ont pas besoin de fidélité à la salle — ils sont libres :
- Fond noir/charbon abstrait, surface sombre minimaliste
- Table isolée avec papier kraft / ardoise / planche bois
- Plan de travail cuisine (pas de salle visible)
- Extérieur, parc, rue, terrasse
- Studio photo (fond uni, éclairage contrôlé)

> Cette règle ne concerne QUE les visuels où **l'intérieur du restaurant est reconnaissable**. Si la salle n'est pas visible (plan serré, fond flou neutre), pas de contrainte.

> Photos de référence : `public/images/photos-references/contexte/salle-restaurant/` (8 photos)

## Commande principale

```
/instagram-producer DD-MM-YYYY
```

L'orchestrateur détecte le **mode** dans le brief et route vers le bon sous-pipeline. Toujours préférer l'orchestrateur aux commandes manuelles.

## 4 modes de creation

| Mode | Pipeline | API | Planifiable |
|------|----------|-----|-------------|
| `full-ia` | Art Direction → Input Mapping → Prompt (Combo-B, 150-300 mots) → Gemini 2K | Gemini | Oui |
| `edit-ia` | Photo lieu en input → Prompt (produit decrit) → Gemini edit 4K | Gemini | **NON** (hors-planning) |
| `template` | Data mapping → Template HTML → Puppeteer | Aucune | Oui |
| `irl` | Photo fraiche → overlay minimal | Aucune | **NON** (hors-planning) |

> **Modes supprimes en v5** : `irl-sublimation`, `compositing-irl`, `compositing-ia`, `scene-ia`, `irl-archive`, `carousel`. Ces modes n'existent plus.

## Workflow de planification

```
0. Régénérer l'historique — scanner les dossiers, réécrire historique-production.md (OBLIGATOIRE)
1. Planning semaine (planning-SX.md) — distribuer 2 posts + 2 carrousels + stories en evitant les doublons
2. Briefs individuels — brief-v3.md (posts), brief-carousel*.md (carrousels selon famille A/B/C), brief-story.md (stories)
3. Production — /instagram-producer (posts), /carousel-producer ou prompt×N (carrousels), /story-producer (stories)
```

**ALWAYS** lire puis réécrire l'historique par scan PUIS rédiger le planning AVANT les briefs. Le mode est décidé AU PLANNING, pas au brief.

> L'historique (`production/_config/historique-production.md`) EXISTE TOUJOURS — ne jamais supposer qu'il n'existe pas. "Régénérer" = LIRE le fichier existant, scanner les dossiers, puis RÉÉCRIRE avec les données fraîches. Ce n'est PAS un fichier à créer.
> Il reflète ce qui existe sur le disque. Un fichier supprimé = supprimé de l'historique au prochain scan. Ne JAMAIS modifier l'historique à la main.

### Règles anti-doublon (inter-semaines)

- Ne pas refaire un post sur un produit traité les 2 dernières semaines (sauf angle radicalement différent)
- Prioriser les piliers et modes sous-représentés vs les cibles
- Ne pas réutiliser la même photo qu'une semaine récente
- Varier les angles éditoriaux (pas 2 hero shots du même style)

### Regles de distribution (appliquees au planning)

**Publications** : 2 posts simples + 2 carrousels par semaine = 4 publications
**Posts** : tous en `full-ia`, ≥2 piliers differents/semaine
**Carrousels** : 9 types, 3 familles (A texte, B photo, C panoramique). Distribution mensuelle : Panoramique 2-3, Zoom Progressif 1-2, Texture/ASMR 1, Educatif 1, Construction 0.5, Ingredient Spotlight 0.5, Defile Gamme 0.5, Process Cuisine 0.5, Menu Objectif 0.5
**Piliers** : Le Produit 55%, Les Benefices 35%, La Marque 10% (posts + carrousels combines)
**Stories** : **100% full-ia** — food 40% · lifestyle 30% · brand 30% · max 7 lifestyle/semaine. Rappels via agent `rappel-copywriter`.

### Production hors planning

Pour les contenus spontanés :
- Posts → `posts-stories/posts/hors-planning/DD-MM-YYYY/`
- Stories → `posts-stories/stories/hors-planning/DD-MM-YYYY/`
- Liberte totale : tous les modes (y compris `edit-ia` et `irl`), tout agent invocable via `/freestyle`

## Flux brouillons

Le premier visuel genere va **TOUJOURS dans `brouillons/`**. Pas de dossier `final/`.

```
Generation → brouillons/ → iterations si besoin → validation operateur → Caption → publication.md (apres publication)
```

- `brouillons/` = espace de travail, iterations, corrections. Le visuel valide reste dans brouillons/.
- `publication.md` = fichier de metadonnees cree APRES publication effective sur Instagram (date, heure, lien, metriques).

## Caption apres validation

La caption est generee par `/caption-writer` **APRES** validation du visuel par l'operateur, JAMAIS sur un brouillon non valide. Le brief contient une **Direction Caption** (angle, ton, CTA), PAS la caption complete.

## Skills et agents obligatoires

| Etape | Outil | Modes concernes |
|-------|-------|-----------------|
| Orchestration | Skill `/instagram-producer` | Tous |
| Art Direction | Skill `/social-media-art-director` | `full-ia` |
| Background | Agent `background-inventor` | `full-ia` |
| Input Mapping | Agent `input-mapper` (Haiku) | `full-ia` |
| Prompt Engineering | Skill `/image-prompt-engineer` (calibre Combo-B, 150-300 mots) | `full-ia`, `edit-ia` |
| Story Copywriting | Agent `story-copywriter` (Sonnet) | Stories |
| Caption | Skill `/caption-writer` | **Tous** |
| Hors-planning | Skill `/freestyle` | `edit-ia`, `irl` |

## Separation des responsabilites

| Agent | Brief | Docs DA | Recettes | Direction creative | Image produite |
|-------|-------|---------|----------|--------------------|----------------|
| Art Director | ✅ | ✅ | ✅ (formes) | 📝 (produit) | ❌ |
| Background Inventor | ✅ | ❌ | ❌ | 📝 (fond/scene) | ❌ |
| Input Mapper | ❌ | ❌ | ✅ | ✅ (lit) | ❌ |
| Prompt Engineer | ❌ | ❌ | ✅ | ✅ | ❌ |
| Story Copywriter | ✅ | ❌ | ✅ | ❌ | ❌ |
| Caption Writer | ✅ (Direction) | ❌ | ❌ | ❌ | ✅ (vision) |

## Conventions

- **Dates** : format `DD-MM-YYYY` pour les dossiers post
- **Recettes** : slug kebab-case (`strict-boeuf.md`, `strict-max-poulet.md`)
- **Photos** : mapping centralisé dans `_config/photo-references.md`
- **Le brief ne contient PAS la caption** — seulement la Direction Caption
- **Le brief ne contient PAS de liens photos** (sauf mode edit-ia ou la photo lieu est requise)
- **Pain noir** : tous les burgers au pain noir (black bun sésame). Zéro tolérance pour le pain blanc.
- **Tagline fixe** : `{{TAGLINE}}` = `Le cheat meal qui n'en est pas un` — TOUJOURS, ne jamais changer.
- **Brouillon d'abord** : premier visuel dans `brouillons/`. Pas de dossier `final/`. `publication.md` apres publication
- **Template planning** : utiliser `_templates/planning-semaine.md`
- **Template brief** : utiliser `_templates/brief-v3.md`
- **Resolution** : toujours 2K pour full-ia et edit-ia (4K desactive)
- **Produit decrit** : dans tous les modes IA, le produit est decrit dans le prompt. Jamais de photo produit en input
- **API key** : `$GEMINI_API_KEY` (variable d'environnement), jamais en dur

## Structure des posts (v5)

```
posts-stories/posts/periode-[N]/S[X]/DD-MM-YYYY/
├── brief/brief.md                 ← Operateur (brief v5)
├── production/
│   ├── art-direction.md           ← /social-media-art-director (full-ia uniquement)
│   ├── input.md                   ← input-mapper / data mapping
│   ├── prompt.md                  ← /image-prompt-engineer (full-ia, edit-ia)
│   ├── caption.md                 ← /caption-writer (APRES validation visuel)
│   └── publication.md             ← Metadonnees post-publication (date, heure, lien, metriques)
└── brouillons/*.png               ← Rendu + iterations
```

## Brief v2 legacy

Les briefs S1-S2 sont au format v2 (caption dans le brief, pas de mode). Ils fonctionnent en mode `full-ia` par défaut. Ne PAS les migrer — les nouvelles semaines utilisent brief-v3.

## Distribution piliers

| Pilier | Cible | Ce qu'il couvre |
|--------|-------|----------------|
| Le Produit | 55% | Food porn, hero shots, concepts visuels, tous les produits |
| Les Bénéfices | 35% | Nutrition, comparaisons fast-food, macros, ingrédients, carrousels |
| La Marque | 10% | Ponctuel : devanture, fondateur, process air fryer |

> 3 piliers. "La Cuisine", "L'Équipe" et "Le Quartier" sont absorbés dans "La Marque" (usage ponctuel).
> Vérifier mensuellement. La distribution par semaine peut varier, c'est la moyenne qui compte.

---

## Pipeline Stories

### Commande principale

```
/story-producer S1 lundi        # Story unique
/story-producer S1              # Batch semaine complete
```

### Types de stories (v5)

Les stories utilisent les memes modes que les posts. Le mode est decide au planning. 1 brief = 1 story.

**Full-ia food** (~40%) : Produit StrictFood (hero shot, concept food porn)
**Full-ia lifestyle** (~30%) : Scene de vie, moment, ambiance (pas de produit central)
**Template** (~30%) : Photo plein cadre + texte overlay minimal

> **Contrainte** : ≥2 full-ia par jour · max 7 lifestyle/semaine

### Conventions stories

- **Dossiers** : `posts-stories/stories/S[X]/[jour]/`
- **Brief** : `brief/brief-story.md` (template : `_templates/brief-story.md`) — 1 brief = 1 story
- **Template unique** : `story-universal.html` — NE JAMAIS modifier, uniquement copier et remplir
- **Rendu** : `_scripts/render-story.js` — Puppeteer, 1080x1920, PNG → `brouillons/`
- **Brouillon** : render dans `story-NN/brouillons/story.png`. Pas de dossier `final/`. `publication.md` apres publication
- **Layout produit surdimensionne** : quand un template a du texte concentre d'un cote, le visuel produit est surdimensionne (~1.5x) et coupe a ~50% par le bord oppose au texte. Texte gauche → produit deborde a droite. Photos produit fond noir → `object-fit: contain` + masque radial. Voir `SPECS.md`.
- **Texte blanc pur + accent** : hierarchie par taille/poids/couleur, jamais par opacite. Labels en accent, body en `#fff`. `text-depth-3` sur tout texte devant une photo. `mark-tape-strong` sur les blocs longs.
- **Overlays adaptatifs** : classes `overlay-*` (direction) + `grad-*` (force) sur body. Gradient-left max 600px. Le data mapper choisit la combinaison selon le template et la photo.
- **Chemins absolus** : obligatoires dans le HTML rempli
