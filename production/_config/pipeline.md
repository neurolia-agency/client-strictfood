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
- **IRL (hors-planning uniquement)** : si Romain fournit des photos, elles vont en `hors-planning/`
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

Le pipeline supporte 4 modes de creation. Le mode est specifie dans le brief (champ `Mode`).

| Mode | Description | Pipeline | API | Planifiable |
|------|-------------|----------|-----|-------------|
| `full-ia` | Gemini genere tout (produit DECRIT + scene) | Art Direction → Input Mapping → Prompt → Gemini 2K | Gemini | Oui |
| `edit-ia` | Photo existante editee/sublimee par IA | Photo source → Edit prompt → GPT Images / Gemini | GPT Images / Gemini | **NON** (hors-planning uniquement) |
| `template` | Photo plein cadre + texte overlay minimal | Data mapping → `story-universal.html` → Puppeteer | Aucune | Oui |
| `irl` | Photo fraiche prise en live + overlay | Photo fraiche → `story-universal.html` → Puppeteer | Aucune | **NON** (hors-planning uniquement) |

> Le planning standard n'utilise que `full-ia` et `template`. Les modes `edit-ia` et `irl` sont reserves au `hors-planning/`.
> Les produits sont TOUJOURS decrits dans le prompt (jamais fournis en photo reference a l'IA).

### Bun-swap (photos pain blanc)

Les photos avec un pain blanc/rose/dore PEUVENT etre utilisees a condition de passer par un **bun-swap** :
1. La photo est passee en `edit-ia` avec directive : "Replace the golden/white bun with a charcoal black sesame bun, keeping everything else identical"
2. Le resultat est une photo avec pain noir, utilisable normalement
3. Le brief doit mentionner `bun-swap-required`

### Quand utiliser quel mode

| Pilier | Modes typiques | Justification |
|--------|----------------|---------------|
| Le Produit | `full-ia` | Food porn premium, scènes élaborées |
| Les Bénéfices | `template`, `full-ia` | Infographies, données visuelles, carrousels |
| La Marque | `full-ia`, `template` | Ponctuel : process, portraits, ancrage local |

> Posts simples (2/semaine) : tous en `full-ia`. Carrousels (2/semaine) : famille A = Puppeteer, famille B = Gemini × N, famille C = Gemini 16:9 + decoupe. Stories : **100% full-ia** (food 40% + lifestyle 30% + brand 30%). Le mode `template` n'est plus utilise pour les stories (trop redondant visuellement, limite la creativite).

## Produit dans les prompts IA

**Le produit est TOUJOURS décrit dans le prompt, JAMAIS fourni en photo reference.** Gemini génère le produit à partir de la description textuelle (ingrédients exacts depuis `_recettes/[slug].md`). Meilleurs résultats quand l'IA génère le produit : elle matche automatiquement la lumière, les ombres, la perspective et la profondeur de champ de la scène.

### Règles produit dans le prompt

1. **Description produit** : ingrédients exacts depuis `_recettes/[slug].md`
2. **Imperfections bun** : rond mais avec bosses, creux, micro-fissures, zones qui s'effritent, texture rugueuse — NE JAMAIS dire "oblong" (ça change la forme)
3. **Contraintes** : pain noir, pas de grill marks, croûte Maillard uniforme
4. **Style** : `Documentary food photography. No text, no logos, no people.`

## Photos Référence

→ Voir `production/_config/photo-references.md` (mapping centralisé produit → photos avec descriptions textuelles)

## Agent Input-Mapper

| Champ | Valeur |
|-------|--------|
| Agent | `production/.claude/agents/input-mapper.md` |
| Modèle | Haiku (tâche déterministe) |
| Déclenchement | Après validation de `production/art-direction.md` (mode `full-ia`) |
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
| Déclenchement | **OBLIGATOIRE** pour les modes IA (`full-ia`, `edit-ia`) |
| Modes | Pre-prompt (concept → contraintes) + Post-prompt (prompt → audit + corrections) |

### Rulesets par mode

| Mode | Domaines audités | Risques principaux |
|------|-----------------|-------------------|
| `full-ia` | 8 domaines (mains, fluides, éclairage, perspective, construction, matériaux, proportions, variété) | Mains impossibles, sauce illogique, éclairage contradictoire |
| `edit-ia` | 4 domaines (fidélité, préservation environnement, direction lumière, intensité) | L'IA réinvente le décor, déforme le produit, aspect trop IA |

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
| Produit | TOUJOURS décrit dans le prompt (jamais fourni en photo reference). Description depuis `_recettes/[slug].md` | Fournir une photo du produit en input à l'IA |

> **IMPORTANT — Dark Premium ≠ Terne.** Le fond est sombre (charbon), mais le PRODUIT doit être lumineux, contrasté et appétissant. Les couleurs des ingrédients (vert mâche, orange sauce, doré graines sésame, brun croûte Maillard) doivent "éclater" sur le fond sombre. Un visuel Dark Food Premium réussi = fond sombre dramatique + sujet lumineux et saturé.

> Ces règles s'appliquent à tous les agents et skills du pipeline. L'art director, le prompt engineer et l'opérateur doivent les respecter.

## Signature visuelle StrictFood — Trinite Charbon × Ambre × Pain Noir

**Chaque visuel StrictFood contient TOUJOURS ces 3 elements. Aucune exception. S'applique aux posts ET aux stories (food, lifestyle, brand).**

### Les 3 constantes

| Element | Description | Toujours present |
|---------|-------------|:----------------:|
| **Pain noir sesame** | Charcoal black sesame bun, surface encre noire, graines dorees irregulieres | OUI (sauf stories lifestyle sans produit visible) |
| **Charbon** | Noir mat profond — en fond OU en accessoire/objet/vetement/ombre | OUI |
| **Ambre** | Or chaud/cuivre — en fond OU en accessoire/lumiere/reflet/vetement | OUI |

### Regle de dualite

Les deux couleurs (charbon ET ambre) sont presentes sur chaque visuel. Le champ `Fond` du brief determine la dominante — l'accent oppose est automatique.

### Regle de couverture minimale (15-20%)

**La couleur secondaire (accent) doit couvrir au minimum 15-20% de la surface du visuel.** Ce n'est PAS un reflet discret ou un detail — c'est un element structurant, visible au premier coup d'oeil.

| Couleur secondaire | 15-20% = concretement | Trop peu (< 10%) |
|-------------------|------------------------|-------------------|
| **Ambre sur fond charbon** | Grand element dore (sac kraft, plateau, surface partielle, vetement, lumiere chaude marquee couvrant 1/5 du cadre) | Simple reflet sur la sauce, rim light fin, graine de sesame |
| **Charbon sur fond ambre** | Objet noir mat imposant (sac StrictFood, barquette, vetement sombre, ombre portee large, surface charbon partielle) | Petite ombre, logo discret, fine ligne sombre |

**Application par type de story :**

| Type story | Dominant typique | Accent 15-20% | Exemples concrets |
|------------|-----------------|----------------|-------------------|
| **Food** | Charbon (fond sombre) | Ambre : kraft dore visible, lumiere chaude marquee, surface ambre partielle | Hero shot sur fond charbon + large papier kraft dore sous le produit |
| **Lifestyle** | Variable (scene reelle) | Si scene claire → vetement/accessoire charbon (veste noire, sac noir StrictFood, casquette sombre). Si scene sombre → piece ambre (echarpe doree, sac kraft, lumiere ambre marquee) | Personnage en veste noire dans un parc ensoleille + sac kraft dore. OU : scene de rue sombre + echarpe/accessoire ambre |
| **Brand/Rappel** | Charbon ou ambre | L'accent oppose couvre 15-20% (texte overlay, element graphique, accessoire) | Fond charbon + zone ambre avec accroche. OU : fond ambre + element charbon (ardoise, packaging) |

**Pour les stories lifestyle** (scenes de vie, exterieurs, environnements varies) :
- La signature NE DEPEND PAS du decor naturel — elle est portee par le PERSONNAGE et ses ACCESSOIRES
- Vetement noir/charbon (veste, t-shirt, casquette) = element charbon
- Accessoire ambre/dore (sac kraft StrictFood, echarpe, bijou, lumiere chaude) = element ambre
- Le sac kraft noir avec logo dore StrictFood est l'accessoire ideal — il porte les DEUX couleurs
- Si la scene naturelle est deja dans les tons charbon (nuit, interieur sombre), l'accent ambre vient d'un vetement ou accessoire dore
- Si la scene est lumineuse/chaude (golden hour, plage, parc), l'accent charbon vient d'un vetement ou objet sombre

| Fond du brief | Dominant | Accent (automatique) | Exemples d'accent |
|---------------|----------|---------------------|-------------------|
| `charbon` | Fond sombre mat | Element ambre visible | Gants dores, plateau cuivre, serviette ambre, papier kraft dore, reflet chaud marque sur la sauce, lumiere ambre directionnelle |
| `ambre` | Fond dore chaud texture | Element charbon visible | Barquette noire mate, ardoise charbon, emballage noir, ombre portee profonde, ustensile sombre |
| `ambre+charbon` | Fond ambre | Accessoires charbon multiples | Papier kraft noir, ardoise, ustensiles sombres |
| `charbon+ambre` | Fond charbon | Accessoires ambre multiples | Serviette doree, sauce visible, eclats sesame, lumiere chaude marquee |
| `minimal` | Charbon OU ambre uni | L'accent oppose est dans la lumiere ou un detail | Rim light ambre sur fond charbon, ombre charbon sur fond ambre |
| `craft` | Kraft naturel | Les deux couleurs via le produit (bun noir) + lumiere (ambre) | Le kraft est neutre, le bun apporte le charbon, l'eclairage apporte l'ambre |

### Bloc de constantes prompt (injection obligatoire)

Le skill `/image-prompt-engineer` DOIT injecter ce bloc dans chaque prompt StrictFood :

```
STRICTFOOD VISUAL SIGNATURE (mandatory — posts AND stories):
- CHARCOAL × AMBER DUALITY: both colors MUST be present in the image
  - The SECONDARY color covers at least 15-20% of the frame — it is a STRUCTURAL element, not a subtle detail
  - If charcoal-dominant → amber element covers ~15-20% (large kraft paper, warm-lit surface area, golden clothing piece, amber spotlight zone)
  - If amber-dominant → charcoal element covers ~15-20% (black jacket, dark bag, charcoal surface, deep shadow mass)
  - For LIFESTYLE scenes: the signature is carried by the PERSON (clothing, accessories) and the StrictFood PACKAGING (black kraft bag with gold logo), NOT by the natural environment
- BLACK SESAME BUN: always present on burger/wrap visuals (not required on lifestyle stories without visible product)
- DIRECTIONAL LIGHTING: never flat — always sculpted, dramatic, with clear light direction
- FILM GRAIN: subtle analog grain, warm tones, NOT digital-clean
- ARTISANAL IMPERFECTIONS: crumbs, asymmetry, sauce drip, paper fold — never sterile
```

### Exemples concrets

| Concept | Fond | Accent | Resultat |
|---------|------|--------|----------|
| concept-macro | charbon | Eclairage ambre chaud qui fait briller la sauce | Gros plan croute Maillard, sauce dorée qui capte une lumière chaude, fond noir mat |
| concept-main | ambre | Gant noir qui contraste | Main gantée noire sur fond doré, pain noir sésame, lumière chaude |
| concept-coupe | minimal charbon | Kraft doré sous le burger coupé | Burger tranché sur papier kraft, fond noir, lumière ambre latérale |
| concept-flatlay | ambre | Ardoise charbon comme support | Vue top-down, sol ambre, ardoise noire avec burger, accessoires sombres |
| concept-levitation | charbon | Reflet ambre au sol + rim light doré | Burger flottant, fond noir, halo doré en bas, lumiere de contour ambre |
| concept-decon | minimal ambre | Ingredients alignes sur surface noire mate | Fond ambre, planche charbon, ingredients separes, eclairage dramatique |
| **story food** | charbon | Kraft dore ~20% du cadre | Hero shot 9:16, fond charbon, large papier kraft dore sous le burger, lumiere ambre |
| **story lifestyle** | scene claire (parc) | Veste noire + sac kraft noir/dore ~15% | Personnage en veste charbon dans un parc, tenant un sac kraft StrictFood dore, golden hour |
| **story lifestyle** | scene sombre (nuit) | Echarpe/accessoire ambre ~15% | Scene de rue la nuit, personnage avec accessoire ambre (echarpe, bonnet dore), sac kraft noir |
| **story brand** | charbon | Zone ambre avec accroche texte ~20% | Fond charbon, bande ambre avec texte "Ouvert mardi-dimanche", produit en bas |

### Verification

Le `realism-auditor` verifie la presence de la dualite :
- Le prompt mentionne-t-il un element charbon ? (fond, objet, ombre)
- Le prompt mentionne-t-il un element ambre ? (fond, lumiere, accessoire, reflet)
- Si l'un des deux manque → **BLOQUANT** : `⚠️ SIGNATURE STRICTFOOD INCOMPLETE — dualite charbon/ambre absente`

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
| Croûte Maillard boeuf (chaleur pulsée) | "deep intense Maillard crust (oven-seared at high pulsed heat) — rough, cratered, bark-like surface, deep mahogany-brown almost blackened at edges, visible meat grain, NOT smooth, NOT polished" | "grill marks", "char lines", "smooth surface", "pink meat" |
| Croûte Maillard poulet (chaleur pulsée) | "deep golden-brown Maillard crust (oven-seared at high pulsed heat) — caramelized surface with crispy edges, darker spots at thinnest points, shredded pale meat fibers at torn edges, NOT smooth, NOT pale" | "grill marks", "char lines", "smooth surface", "raw-looking" |
| Croûte falafel (chaleur pulsée) | "deep golden crispy crust (air-fried at high pulsed heat) — thick, crunchy, rough granular surface, micro-cracks revealing green interior, SHATTERS when broken, NOT smooth, NOT soft" | "deep-fried", "smooth surface", "brown interior" |

> **Règle** : le prompt engineer DOIT consulter ce tableau avant d'écrire tout prompt contenant ces ingrédients. Si un terme INTERDIT apparaît dans un prompt, c'est un bug.

## Modèle par défaut

| Mode | Modèle | Usage |
|------|--------|-------|
| `full-ia` | Gemini (Nanobanana Pro) | Génération complète produit + scène |
| `edit-ia` | GPT Images (gpt-image-1) ou Gemini | Edition/sublimation photo existante |
| `template` | Aucun (Puppeteer) | Rendu HTML en PNG |
| `irl` | Aucun (Puppeteer) | Photo fraiche + overlay |

**Fallbacks** :
- Si Gemini échoue sur `full-ia` → basculer sur GPT Images
- Si le mode nécessite du texte on-image → forcer GPT Images quel que soit le mode

## Carrousels — 9 types, 3 familles

### Rythme

**2 carrousels par semaine** (+ 2 posts simples = 4 publications/semaine).

### Familles

| Famille | Types | Pipeline | API |
|---------|-------|----------|-----|
| **A — Texte** | Educatif, Ingredient Spotlight, Menu Objectif | Recherche → Copywriting → Template HTML → Puppeteer | Aucune |
| **B — Photo** | Zoom Progressif, Texture/ASMR, Construction, Defile Gamme, Process Cuisine | Bloc coherence → Prompt × N slides → Gemini 2K | Gemini |
| **C — Panoramique** | Panoramique | Prompt scene large → Gemini 2K (16:9) → `render-panoramic.js` | Gemini |

### Distribution mensuelle (~8/mois)

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

### Contraintes carrousels

- Pas 2 memes types d'affilee (varier)
- Pas 2 memes produits en carrousel que la semaine precedente
- Max 1 carrousel texte (famille A) par semaine
- Le panoramique est le format le plus frequent (2-3/mois)
- Pain noir obligatoire sur tous les burgers visibles
- Pas de grill marks
- Produit DECRIT dans les prompts (jamais de photo reference)

### Briefs

| Famille | Template | Commande |
|---------|----------|----------|
| A | `_templates/brief-carousel.md` | `/carousel-producer DD-MM-YYYY` |
| B | `_templates/brief-carousel-photo.md` | Prompt × N + `/nano-banana-pro` |
| C | `_templates/brief-carousel-panoramique.md` | Prompt + `/nano-banana-pro` + `render-panoramic.js` |

### Reference complete

→ `_config/carousel-themes.md` (taxonomie, scenes panoramiques, sequences zoom/texture/construction/gamme/process, 31 themes educatifs)
