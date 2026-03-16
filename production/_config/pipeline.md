# Configuration Pipeline v3

## Modes de création

Le pipeline supporte 5 modes de création. Le mode est spécifié dans le brief (champ `Mode`).

| Mode | Description | Pipeline | API |
|------|-------------|----------|-----|
| `full-ia` | Gemini génère tout (produit + scène) | Art Direction → Input Mapping → Prompt → Gemini 4K | Gemini |
| `irl-sublimation` | Photo réelle sublimée pour aligner DA | Photo source → Sublimation prompt → GPT Images | GPT Images |
| `compositing-irl` | 2 photos réelles mixées (produit + lieu) | Photo produit + Photo lieu → Compositing → GPT Images | GPT Images |
| `compositing-ia` | Photo produit réelle dans scène IA | Art Direction scène → Input Mapping → Prompt → Gemini 4K | Gemini |
| `template` | Carrousels, infographies (HTML → Puppeteer) | Data mapping → Template HTML → Puppeteer | Aucune |

### Quand utiliser quel mode

| Pilier | Modes typiques | Justification |
|--------|----------------|---------------|
| Le Plat | `full-ia`, `compositing-ia` | Food porn premium, scènes élaborées |
| La Cuisine | `irl-sublimation`, `compositing-irl` | Authenticité, photos réelles du process |
| Les Macros | `template`, `full-ia` | Infographies, données visuelles |
| L'Équipe | `irl-sublimation`, `compositing-irl` | Portraits réels, humanisation |
| Le Quartier | `irl-sublimation`, `compositing-irl` | Lieu réel, communauté |

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

## Résolution

**Toujours 4K** — pas de draft, pas d'intermédiaire.

## Style v2 — Réalisme documentaire

Principes visuels obligatoires pour toutes les générations de visuels Instagram :

| Principe | Règle | Interdit |
|----------|-------|----------|
| Réalisme > Perfection | Documentary-style food photography, imperfections naturelles (miettes tombées, asymétrie, plis du papier, feuille égarée) | Stock photo parfaite, symétrie artificielle, propreté irréaliste |
| Proportions fidèles | Burger compact et dense comme le vrai produit | Burger towering/magazine, proportions exagérées |
| Garnitures réalistes | Mâche : max 3-5 petites feuilles, certaines pliées/naturelles | Bouquet luxuriant, couronne de salade, gouttelettes parfaites |
| Sauce | Filet unique irrégulier, subtil | Spirale parfaite, nappe épaisse, drizzle graphique |
| Ambiance | Cuisine réelle en arrière-plan (inox, surfaces sombres, flou) | Fond studio void pur noir, fond uni numérique |
| Grain et couleur | Film-like natural color, léger grain, tons chauds naturels | HDR, surexposition, post-traitement saturé |
| Photo input | TOUJOURS la photo du produit réel (strict-boeuf.png pour un boeuf) | Cross-product transform (poulet→boeuf) sauf si aucune photo du produit réel n'existe |

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
| `template` | Aucun (Puppeteer) | Rendu HTML en PNG |

**Fallbacks** :
- Si Gemini échoue sur `full-ia` / `compositing-ia` → basculer sur GPT Images
- Si le mode nécessite du texte on-image → forcer GPT Images quel que soit le mode
