# Production Pipeline Instagram — Règles v3

> S'applique quand on travaille dans `production/`

## ⛔ RÈGLE ABSOLUE — Pain noir obligatoire

**Tous les burgers StrictFood sont au pain noir (black bun sésame).** Le pain blanc/classique est obsolète et ne doit JAMAIS apparaître dans aucun livrable.

Cette règle s'applique à **TOUS** les process de création (posts ET stories, tous modes) :

| Étape | Vérification |
|-------|-------------|
| **Sélection photo** | UNIQUEMENT des photos `burgers-black/`. Si une photo pain blanc est la seule dispo → STOP, signaler `⚠️ PHOTO NON CONFORME — pain blanc` |
| **Génération IA** (prompt) | Le prompt DOIT spécifier "black sesame bun" ou "pain noir sésame". INTERDIT : "brioche", "white bun", "plain bun", "golden bun" |
| **Art direction** | Toute fiche de direction burger doit mentionner le pain noir comme contrainte visuelle |
| **Caption** | Toujours écrire "pain noir" (jamais "pain", "bun", "brioche" sans le qualificatif "noir") |
| **Checkpoint** | Vérifier visuellement que le bun est NOIR. Si pain blanc détecté → BLOQUER et demander remplacement |
| **Validation brouillon** | Avant promotion en `final/`, re-vérifier le pain noir |

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
| **Scènes cuisine** (scene-ia, compositing, IRL) | PAS de grill visible dans la cuisine. L'équipement de cuisson StrictFood = air fryer uniquement |

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
| **Compositing** | UTILISER les photos de `contexte/salle-restaurant/` comme fond. Pas de fond restaurant généré from scratch |
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

## 5 modes de création

| Mode | Pipeline | API |
|------|----------|-----|
| `full-ia` | Art Direction → Input Mapping → Prompt → Gemini 4K | Gemini |
| `irl-sublimation` | Photo source → Sublimation → GPT Images | GPT Images |
| `compositing-irl` | Photo produit + Photo lieu → Compositing → GPT Images | GPT Images |
| `compositing-ia` | Art Direction scène → Input Mapping → Prompt → Gemini 4K | Gemini |
| `template` | Data mapping → Template HTML → Puppeteer | Aucune |

## Workflow de planification

```
0. Régénérer l'historique — scanner les dossiers, réécrire historique-production.md (OBLIGATOIRE)
1. Planning semaine (planning-SX.md) — distribuer piliers, modes, sujets en évitant les doublons
2. Briefs individuels (brief-v3.md / brief-story.md) — à partir du planning validé
3. Production — /instagram-producer pour posts, /story-producer pour stories
```

**ALWAYS** lire puis réécrire l'historique par scan PUIS rédiger le planning AVANT les briefs. Le mode est décidé AU PLANNING, pas au brief.

> L'historique (`production/_config/historique-production.md`) EXISTE TOUJOURS — ne jamais supposer qu'il n'existe pas. "Régénérer" = LIRE le fichier existant, scanner les dossiers, puis RÉÉCRIRE avec les données fraîches. Ce n'est PAS un fichier à créer.
> Il reflète ce qui existe sur le disque. Un fichier supprimé = supprimé de l'historique au prochain scan. Ne JAMAIS modifier l'historique à la main.

### Règles anti-doublon (inter-semaines)

- Ne pas refaire un post sur un produit traité les 2 dernières semaines (sauf angle radicalement différent)
- Prioriser les piliers et modes sous-représentés vs les cibles
- Ne pas réutiliser la même photo qu'une semaine récente
- Varier les angles éditoriaux (pas 2 hero shots du même style)

### Règles de distribution (appliquées au planning)

**Posts** : jamais 2 consécutifs même mode · ≥3 modes/semaine · ≥3 piliers/semaine
**Stories** : ≥2 modes/jour · ≥1 story non-template/jour · max 3 interactifs/semaine

### Production hors planning

Pour les contenus spontanés :
- Posts → `posts-stories/posts/hors-planning/DD-MM-YYYY/`
- Stories → `posts-stories/stories/hors-planning/DD-MM-YYYY/`
- Liberté totale, tout agent invocable directement, pas de contrainte de distribution

## Flux brouillon → final

Le premier visuel généré va **TOUJOURS dans `brouillons/`**, JAMAIS directement dans `final/`.

```
Génération → brouillons/ → itérations si besoin → validation opérateur → final/
```

- `brouillons/` = espace de travail, itérations, corrections
- `final/` = visuel terminé et prêt à poster (seul dossier tracé dans l'historique)
- Un brouillon dans `brouillons/` n'est PAS tracé dans l'historique

## Caption après promotion en final

La caption est générée par `/caption-writer` **APRÈS** la promotion du visuel dans `final/`, JAMAIS sur un brouillon. Le brief contient une **Direction Caption** (angle, ton, CTA), PAS la caption complète.

## Skills et agents obligatoires

| Étape | Outil | Modes concernés |
|-------|-------|-----------------|
| Orchestration | Skill `/instagram-producer` | Tous |
| Art Direction | Skill `/social-media-art-director` | `full-ia`, `compositing-ia` |
| Input Mapping | Agent `input-mapper` (Haiku) | `full-ia`, `compositing-ia` |
| Prompt Engineering | Skill `/image-prompt-engineer` (Mode B) | `full-ia`, `compositing-ia` |
| Caption | Skill `/caption-writer` | **Tous** |

## Séparation des responsabilités

| Agent | Brief | Docs DA | Recettes | Photos | Direction créative | Image produite |
|-------|-------|---------|----------|--------|--------------------|----------------|
| Art Director | ✅ | ✅ | ✅ (formes) | ❌ | 📝 (produit) | ❌ |
| Input Mapper | ❌ | ❌ | ✅ | ✅ (descriptions) | ✅ (lit) | ❌ |
| Prompt Engineer | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ |
| Caption Writer | ✅ (Direction) | ❌ | ❌ | ❌ | ❌ | ✅ (vision) |

## Conventions

- **Dates** : format `DD-MM-YYYY` pour les dossiers post
- **Recettes** : slug kebab-case (`strict-boeuf.md`, `strict-max-poulet.md`)
- **Photos** : mapping centralisé dans `_config/photo-references.md`
- **Le brief ne contient PAS la caption** — seulement la Direction Caption
- **Le brief ne contient PAS de liens photos** (sauf modes IRL/compositing où la photo source est requise)
- **Pain noir** : tous les burgers au pain noir (black bun sésame). Zéro tolérance pour le pain blanc.
- **Tagline fixe** : `{{TAGLINE}}` = `Le cheat meal qui n'en est pas un` — TOUJOURS, ne jamais changer.
- **Brouillon d'abord** : premier visuel dans `brouillons/`, promotion vers `final/` après validation opérateur
- **Template planning** : utiliser `_templates/planning-semaine.md`
- **Template brief** : utiliser `_templates/brief-v3.md`
- **Résolution** : toujours 4K pour full-ia et compositing-ia
- **API key** : `$GEMINI_API_KEY` (variable d'environnement), jamais en dur

## Structure des posts (v3)

```
posts-stories/posts/periode-[N]/S[X]/DD-MM-YYYY/
├── brief/brief.md                 ← Opérateur (brief v3)
├── production/input.md            ← input-mapper / data mapping
├── production/art-direction.md    ← (full-ia, compositing-ia uniquement)
├── production/prompt.md           ← (full-ia, compositing-ia uniquement)
├── production/caption.md          ← /caption-writer (APRÈS promotion en final)
├── brouillons/*.png               ← Premier rendu + itérations
└── final/*.png                    ← Visuel(s) VALIDÉ(s) (promu(s) depuis brouillons/)
```

## Brief v2 legacy

Les briefs S1-S2 sont au format v2 (caption dans le brief, pas de mode). Ils fonctionnent en mode `full-ia` par défaut. Ne PAS les migrer — les nouvelles semaines utilisent brief-v3.

## Distribution piliers

| Pilier | Cible | Note |
|--------|-------|------|
| Le Plat | 35% | Food porn premium |
| La Cuisine | 25% | Process, coulisses, fournisseurs |
| Les Macros | 18% | Nutrition, comparaisons, éducation |
| L'Équipe | 15% | Portraits, storytelling, humain |
| Le Quartier | 7% | Communauté, local, partenaires |

> Vérifier mensuellement. La distribution par semaine peut varier, c'est la moyenne qui compte.

---

## Pipeline Stories

### Commande principale

```
/story-producer S1 lundi        # Story unique
/story-producer S1              # Batch semaine complète
```

### Types de stories (v3)

Les stories utilisent les mêmes 5 modes que les posts. Le mode est décidé au planning.

**Template** (~50%) : Fiche Produit, Focus Ingrédient, Interactif, Éducatif, Annonce
**IRL** (~20%) : Photo brute + overlay DA minimal
**Visuelles** (~30%) : irl-sublimation, compositing-irl, compositing-ia, full-ia → image plein cadre + overlay logo

> **Contrainte** : ≥2 modes/jour, ≥1 story non-template/jour, max 3 interactifs/semaine

### Conventions stories

- **Dossiers** : `posts-stories/stories/S[X]/[jour]/`
- **Brief** : `brief/brief-story.md` (template : `_templates/brief-story.md`)
- **Templates** : `_templates/[type].html` — NE JAMAIS modifier, uniquement copier et remplir
- **Rendu** : `_scripts/render-story.js` — Puppeteer, 1080×1920, PNG → `brouillons/`
- **Brouillon d'abord** : render dans `story-NN/brouillons/story.png`, promotion vers `story-NN/final/story.png` après validation
- **Layout produit surdimensionné** : quand un template a du texte concentré d'un côté, le visuel produit est surdimensionné (~1.5x) et coupé à ~50% par le bord opposé au texte. Texte gauche → produit déborde à droite. Photos produit fond noir → `object-fit: contain` + masque radial. Voir `SPECS.md`.
- **Texte blanc pur + accent** : hiérarchie par taille/poids/couleur, jamais par opacité. Labels en accent, body en `#fff`. `text-depth-3` sur tout texte devant une photo. `mark-tape-strong` sur les blocs longs.
- **Overlays adaptatifs** : classes `overlay-*` (direction) + `grad-*` (force) sur body. Gradient-left max 600px. Le data mapper choisit la combinaison selon le template et la photo.
- **Chemins absolus** : obligatoires dans le HTML rempli
