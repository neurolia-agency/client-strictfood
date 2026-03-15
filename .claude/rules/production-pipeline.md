# Production Pipeline Instagram — Règles v3

> S'applique quand on travaille dans `production/`

## Commande principale

```
/instagram-producer YYYY-MM-DD
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
1. Planning semaine (planning-SX.md) — distribuer piliers, modes, sujets
2. Briefs individuels (brief-v3.md) — à partir du planning validé
3. Production — /instagram-producer pour chaque post
```

**ALWAYS** rédiger le planning AVANT les briefs.

## Caption après image

La caption est générée par `/caption-writer` **APRÈS** l'image. Le brief contient une **Direction Caption** (angle, ton, CTA), PAS la caption complète.

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

- **Dates** : format ISO `YYYY-MM-DD` pour les dossiers post
- **Recettes** : slug kebab-case (`strict-boeuf.md`, `strict-max-poulet.md`)
- **Photos** : mapping centralisé dans `_config/photo-references.md`
- **Le brief ne contient PAS la caption** — seulement la Direction Caption
- **Le brief ne contient PAS de liens photos** (sauf modes IRL/compositing où la photo source est requise)
- **Template planning** : utiliser `_templates/planning-semaine.md`
- **Template brief** : utiliser `_templates/brief-v3.md`
- **Résolution** : toujours 4K pour full-ia et compositing-ia
- **API key** : `$GEMINI_API_KEY` (variable d'environnement), jamais en dur

## Structure des posts (v3)

```
posts-stories/posts/periode-[N]/S[X]/YYYY-MM-DD/
├── 00-brief/brief.md              ← Opérateur (brief v3)
├── 00-input/input.md              ← input-mapper / data mapping
├── 01-art-direction/direction.md  ← (full-ia, compositing-ia uniquement)
├── 02-prompt/prompt.md            ← (full-ia, compositing-ia uniquement)
├── 03-output/*.png                ← Image(s) produite(s)
└── 04-caption/caption.md          ← /caption-writer (TOUS modes)
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

**Dark Premium** : Interactif, Éducatif, Annonce, Lieu, **IRL** (nouveau)
**Vitrine** : Fiche Produit, Focus Ingrédient
**Spéciaux** : Teaser, **Séquence N/M** (nouveau), Recap (semi-manuel)

> **IRL** : photo brute + overlay DA minimal. Coulisses, rush, ambiance.
> **Séquence** : multi-stories liées visuellement (process, éducatif).
> **Interactifs** : max 3/semaine.
> Chaque jour : au moins 1 Vitrine + 1 Dark Premium.

### Conventions stories

- **Dossiers** : `posts-stories/stories/S[X]/[jour]/`
- **Brief** : `brief-story.md` (template : `_templates/brief-story.md`)
- **Templates** : `_templates/[type].html` — NE JAMAIS modifier, uniquement copier et remplir
- **Rendu** : `_scripts/render-story.js` — Puppeteer, 1080×1920, PNG
- **Chemins absolus** : obligatoires dans le HTML rempli
