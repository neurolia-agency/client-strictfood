# Configuration Pipeline v3

## ⛔ Horaires d'ouverture — Source de verite

StrictFood est ouvert **du mardi au dimanche**. Ferme le **lundi** uniquement.

| Jour | Service midi | Service soir |
|------|-------------|-------------|
| Lundi | FERME | FERME |
| Mardi | 11h — 14h | 18h — 22h |
| Mercredi | 11h — 14h | 18h — 22h |
| Jeudi | 11h — 14h | 18h — 22h |
| Vendredi | 11h — 14h | 18h — 22h |
| Samedi | 11h — 14h | 18h — 22h |
| Dimanche | 11h — 14h | 18h — 22h |

**Implications pour la production** :
- **IRL (photos fraiches)** : possibles du mardi au dimanche (6 jours)
- **Seul jour ferme** : lundi — pas de rush, pas de service, pas de clients
- **Annonces horaires** : TOUJOURS ecrire "du mardi au dimanche" (JAMAIS "du mardi au samedi")
- **"Dernier jour de la semaine"** : le dimanche (PAS le samedi)
- **Captions/textes** : ne JAMAIS dire que le restaurant est ferme le dimanche

> Si un brief, caption, annonce ou planning mentionne une fermeture le dimanche ou dit "du mardi au samedi" → **BLOQUER** : `⚠️ HORAIRES INCORRECTS — StrictFood est ouvert du mardi au dimanche`

## ⛔ Pain noir obligatoire

Tous les burgers StrictFood sont au **pain noir (black bun sésame)**. Le pain blanc est obsolète. Cette règle s'applique à tous les modes, tous les skills, tous les agents — posts ET stories. Voir les règles détaillées dans `.claude/rules/production-pipeline.md`.

## ⛔ Chaleur pulsée obligatoire (air fryer, zéro huile)

StrictFood n'a **AUCUN grill, AUCUN barbecue, AUCUNE poêle, AUCUNE friteuse à huile**. Tout est cuit au **air fryer (chaleur pulsée)**, zéro huile. C'est un principe fondamental de la marque.

**INTERDIT dans les prompts, briefs, captions, textes** : `grill`, `grillé`, `barbecue`, `poêlé`, `frit`, `grill marks`, `grilled`, `charred`, `char lines`, `pan-fried`, `deep-fried`

**OBLIGATOIRE** : `chaleur pulsée`, `air fryer`, `cuit sans huile`, `oven-seared`, `uniform Maillard crust`, `air-fried`

**Visuels** : pas de marques de grill sur la viande (croûte Maillard uniforme). Scènes cuisine : pas de grill visible.

Voir les règles détaillées dans `.claude/rules/production-pipeline.md`.

## ⛔ Compatibilité concept × ingrédients

Avant de choisir un concept visuel, vérifier qu'il est **physiquement compatible** avec les ingrédients réels du produit. Consulter `_recettes/[slug].md`.

**Concepts INCOMPATIBLES avec les produits StrictFood :**

| Concept | Pourquoi c'est incompatible | Produits concernés |
|---------|---------------------------|-------------------|
| `cheese pull` / `fromage fondu qui s'étire` | StrictFood utilise du **parmesan Myfitcheese** = fromage DUR qui s'émiette. Il ne fond PAS en fils, ne s'étire PAS. | Tous les burgers et wraps |
| `grill marks` / `barbecue` | Cuisson à chaleur pulsée (air fryer). Pas de marques de grill. | Tous les produits |
| `deep-fried` / `friture` | Zéro huile. Air fryer uniquement. | Tenders, frites |

**Concepts COMPATIBLES pour le fromage StrictFood :**

| Au lieu de... | Utiliser... | Description |
|---------------|-----------|-------------|
| Cheese pull (fils) | `macro-parmesan` | Gros plan sur les miettes de parmesan posées sur le steak chaud — certaines miettes légèrement dorées/fondues au contact, granuleuses, brillantes |
| Fromage fondant | `parmesan-melt` | Parmesan qui ramollit sur surface chaude — il ne coule PAS, il DORE et devient légèrement brillant tout en restant en miettes |
| Nappe de fromage | `parmesan-dust` | Pluie de miettes de parmesan tombant sur le burger — petits fragments irréguliers en suspension, poudreux |

> Si un concept visuel décrit du fromage qui s'étire, fond en nappes, ou fait des fils → **BLOQUER** immédiatement. `⚠️ CONCEPT INCOMPATIBLE — StrictFood = parmesan dur, pas de cheese pull`

## Tagline — Format HTML verrouillé

La tagline StrictFood est **toujours identique** et **toujours au même endroit** (bas, centré, au-dessus du logo).

**HTML canonique** (à copier tel quel dans TOUS les templates et data mappings) :
```html
Le cheat meal <em>qui n'en est pas un</em>
```

- `<em>` = italique + couleur accent (cuivre `var(--accent)`)
- JAMAIS de point à la fin
- JAMAIS en texte brut sans `<em>`
- JAMAIS de variation du texte
- Position : bottom-section, centré, au-dessus du logo

Tout agent, skill ou script qui injecte `{{TAGLINE}}` DOIT utiliser cette version HTML exacte.

## Modes de création

Le pipeline supporte 5 modes de création. Le mode est spécifié dans le brief (champ `Mode`).

| Mode | Description | Pipeline | API |
|------|-------------|----------|-----|
| `full-ia` | Gemini génère tout (produit + scène) | Art Direction → Input Mapping → Prompt → Gemini 4K | Gemini |
| `irl-sublimation` | Photo réelle sublimée pour aligner DA | Photo source → Sublimation prompt → GPT Images | GPT Images |
| `compositing-irl` | 2 photos réelles mixées (produit + lieu) | Photo produit + Photo lieu → Compositing → GPT Images | GPT Images |
| `compositing-ia` | Photo produit réelle dans scène IA | Art Direction scène → Input Mapping → Prompt → Gemini 4K | Gemini |
| `scene-ia` | Photo scène réelle + sujets IA (personnes, produits, interactions) | Photo scène → Realism Audit → Prompt sujets → Gemini input-image | Gemini |
| `template` | Carrousels, infographies (HTML → Puppeteer) | Data mapping → Template HTML → Puppeteer | Aucune |

### Quand utiliser quel mode

| Pilier | Modes typiques | Justification |
|--------|----------------|---------------|
| Le Plat | `full-ia`, `compositing-ia` | Food porn premium, scènes élaborées |
| La Cuisine | `irl-sublimation`, `compositing-irl` | Authenticité, photos réelles du process |
| Les Macros | `template`, `full-ia` | Infographies, données visuelles |
| L'Équipe | `irl-sublimation`, `compositing-irl`, `scene-ia` | Portraits réels, humanisation, interactions IA |
| Le Quartier | `irl-sublimation`, `compositing-irl`, `scene-ia` | Lieu réel, communauté, scène de vie |
| Scène de vie | `scene-ia` | Scène réelle du restaurant + personnes/interactions IA |

> Aucun mode n'est réservé à un pilier. Un post "Le Plat" peut être en `irl-sublimation` (photo prise en cuisine) et un post "L'Équipe" peut être en `compositing-ia` (portrait dans une scène imaginée).

## Photos Référence

→ Voir `production/_config/photo-references.md` (mapping centralisé produit → photos avec descriptions textuelles)

## Agent Input-Mapper

| Champ | Valeur |
|-------|--------|
| Agent | `production/.claude/agents/input-mapper.md` |
| Modèle | Haiku (tâche déterministe) |
| Déclenchement | Après validation de `production/art-direction.md` (modes `full-ia` et `compositing-ia`) |
| Input | Chemin du dossier post (ex: `production/posts-stories/posts/periode-1/S3/24-03-2026/`) |
| Output | `[dossier-post]/production/input.md` |
| Consulte | `_config/photo-references.md` + `_recettes/[slug].md` |

## Caption Writer

| Champ | Valeur |
|-------|--------|
| Skill | `production/.claude/skills/caption-writer/SKILL.md` |
| Déclenchement | APRÈS la génération de l'image (tous les modes) |
| Input | Brief (Direction Caption) + Image produite (vision) + 15 dernières captions |
| Output | `[dossier-post]/production/caption.md` |

## Realism Auditor

| Champ | Valeur |
|-------|--------|
| Agent | `production/.claude/agents/realism-auditor.md` |
| Skill | `production/.claude/skills/realism-auditor/SKILL.md` |
| Modèle | Sonnet |
| Déclenchement | **OBLIGATOIRE** pour tous les modes IA (full-ia, compositing-ia, irl-sublimation, compositing-irl, scene-ia) |
| Modes | Pre-prompt (concept → contraintes) + Post-prompt (prompt → audit + corrections) |

### Rulesets par mode

| Mode | Domaines audités | Risques principaux |
|------|-----------------|-------------------|
| `full-ia` / `compositing-ia` | 8 domaines (mains, fluides, éclairage, perspective, construction, matériaux, proportions, variété) | Mains impossibles, sauce illogique, éclairage contradictoire |
| `irl-sublimation` | 4 domaines (fidélité, préservation environnement, direction lumière, intensité) | GPT réinvente le décor, déforme le produit, aspect trop IA |
| `compositing-irl` | 5 domaines (scale matching, lumière croisée, ombres/reflets, edge blending, température couleur) | Produit collé, échelle incohérente, absence d'ombres |

> L'audit est OBLIGATOIRE avant toute génération IA. Le mode `template` (Puppeteer) n'est pas concerné.

## DA Référence

| Élément | Valeur | Source |
|---------|--------|--------|
| Palette complète | oklch tokens | `app/globals.css` |
| Contraintes design | Règles visuelles | `pipeline/output/02-art-direction/constraints.md` |
| Vocabulaire visuel | Moodboard textuel | `pipeline/output/02-art-direction/visual-vocabulary.md` |
| Composants UI | Kit composants | `pipeline/output/02-art-direction/ui-kit.md` |
| Emotions par section | Carte émotionnelle | `pipeline/output/02-art-direction/emotion-map.md` |
| Tone of voice | Ton éditorial | `pipeline/output/01-brand/tone.md` |
| Positionnement | Tagline, USPs, messages | `pipeline/output/01-brand/positioning.md` |

## Stratégie Instagram

| Document | Chemin |
|----------|--------|
| Stratégie globale | `strategie/strategie-globale.md` |
| Stratégie Instagram | `strategie/instagram-strategie.md` |

## Concepts visuels

→ Voir `production/_config/concepts-visuels.md` (bibliothèque de concepts pour le planning)

## Résolution

**Toujours 4K** — pas de résolution intermédiaire. Le brouillon est déjà en 4K (qualité finale), seul son emplacement change (`brouillons/` → `final/` après validation).

## Flux brouillon → final

Le premier visuel généré va dans `brouillons/`, JAMAIS dans `final/`. L'opérateur vérifie, itère si besoin, puis valide la promotion vers `final/`. La caption est générée APRÈS promotion.

## Style v2 — Réalisme documentaire + Dynamisme visuel

Principes visuels obligatoires pour toutes les générations de visuels Instagram :

| Principe | Règle | Interdit |
|----------|-------|----------|
| Réalisme > Perfection | Documentary-style food photography, imperfections naturelles (miettes tombées, asymétrie, plis du papier, feuille égarée) | Stock photo parfaite, symétrie artificielle, propreté irréaliste |
| Proportions fidèles | Burger compact et dense comme le vrai produit | Burger towering/magazine, proportions exagérées |
| Garnitures réalistes | Mâche : max 3-5 petites feuilles, certaines pliées/naturelles | Bouquet luxuriant, couronne de salade, gouttelettes parfaites |
| Sauce | Filet unique irrégulier, subtil | Spirale parfaite, nappe épaisse, drizzle graphique |
| Ambiance | Cuisine réelle en arrière-plan (inox, surfaces sombres, flou) — **mais avec un éclairage contrasté et dynamique** | Fond studio void pur noir, fond uni numérique, **fond uniformément sombre sans contraste** |
| Grain et couleur | Film-like natural color, léger grain, **tons chauds riches et saturés, contraste marqué** | HDR, surexposition, **mais aussi : visuels ternes, sombres sans relief, couleurs délavées** |
| Contraste et dynamisme | **Éclairage contrasté avec zones de lumière marquées sur le produit.** Le burger doit "ressortir" du fond sombre. Couleurs des ingrédients vives et appétissantes. | Éclairage plat et uniforme, produit qui se fond dans le fond, absence de points lumineux |
| Photo input | TOUJOURS la photo du produit réel (strict-boeuf.png pour un boeuf) | Cross-product transform (poulet→boeuf) sauf si aucune photo du produit réel n'existe |

> **IMPORTANT — Dark Premium ≠ Terne.** Le fond est sombre (charbon), mais le PRODUIT doit être lumineux, contrasté et appétissant. Les couleurs des ingrédients (vert mâche, orange sauce, doré graines sésame, brun croûte Maillard) doivent "éclater" sur le fond sombre. Un visuel Dark Food Premium réussi = fond sombre dramatique + sujet lumineux et saturé.

> Ces règles s'appliquent à tous les agents et skills du pipeline. L'art director, le prompt engineer et l'opérateur doivent les respecter.

## Brand Props

| Élément | Valeur | Source |
|---------|--------|--------|
| Catalogue props | Descriptions packaging brandé | `production/_config/brand-props.md` |
| Dial BRAND_PRESENCE | 4/10 (~30-40% des posts) | `production/_config/brand-props.md` |

## Vocabulaire ingrédients — Traductions verrouillées (FR → EN prompt)

Certains ingrédients ont un rendu visuel problématique si mal traduits. Ces traductions sont **obligatoires** dans tous les prompts Gemini/GPT.

| Ingrédient (FR) | Traduction prompt (EN) | INTERDIT en prompt |
|------------------|------------------------|---------------------|
| **Pain noir (bun) — surface** | "charcoal black sesame bun — deep ink-dark surface, densely covered with golden sesame seeds in RANDOM uneven distribution, artisanal imperfections: visible cracks in the crust, slightly asymmetric shape (not perfectly spherical), one side slightly more puffed, micro-fissures, rustic handmade quality" | "brioche", "white bun", "plain bun", "golden bun", "classic bun", "perfectly round", "smooth surface", "uniform shape" |
| **Pain noir (bun) — mie/intérieur** | "the bread crumb is DARK CHARCOAL-BLACK throughout the entire mass — charcoal-infused dough, the interior is the SAME dark tone as the surface but more matte, dense spongy texture with irregular air pockets" | "beige crumb", "light interior", "yellow inside", "white bread crumb", "golden interior", "light brown crumb" — la mie n'est JAMAIS claire |
| Parmesan en miettes / poudreux | "finely grated parmesan dust, tiny powdery granules scattered like sand" | "crumbles", "chunks", "shavings", "shaved", "slices" |
| Mâche (feuilles entières) | "lamb's lettuce (mâche) — small, round, spoon-shaped whole leaves" | "arugula", "rocket", "lettuce", "spinach" |
| Oignons rouges en tranches fines | "thin-sliced red onion rings with visible concentric layers" | "diced", "chopped", "minced" |
| Sauce poivron | "a thin delicate drizzle of yellow-orange pepper sauce — a single fine thread" | "ketchup", "mustard", "mayo", "thick sauce" |
| Croûte Maillard (chaleur pulsée) | "uniform golden-brown Maillard crust, smooth caramelized surface (oven-seared)" | "grill marks", "char lines", "blackened" |

> **Règle** : le prompt engineer DOIT consulter ce tableau avant d'écrire tout prompt contenant ces ingrédients. Si un terme INTERDIT apparaît dans un prompt, c'est un bug.

## Modèle par défaut

| Mode | Modèle | Usage |
|------|--------|-------|
| `full-ia` | Gemini (Nanobanana Pro) | Génération complète produit + scène |
| `irl-sublimation` | GPT Images (gpt-image-1) | Retouche/sublimation photo réelle |
| `compositing-irl` | GPT Images (gpt-image-1) | Mixage 2 photos réelles |
| `compositing-ia` | Gemini (Nanobanana Pro) | Intégration produit réel dans scène IA |
| `scene-ia` | Gemini (Nanobanana Pro) | Intégration sujets IA dans scène réelle |
| `template` | Aucun (Puppeteer) | Rendu HTML en PNG |

**Fallbacks** :
- Si Gemini échoue sur `full-ia` / `compositing-ia` → basculer sur GPT Images
- Si le mode nécessite du texte on-image → forcer GPT Images quel que soit le mode
