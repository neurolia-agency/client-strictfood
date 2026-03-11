# Production Pipeline Instagram — Règles v2

> S'applique quand on travaille dans `production/`

## Arborescence

```
production/
  _config/              ← Config partagée (DA, photos, pipeline)
  _recettes/            ← Fiches produit
  _templates/           ← Templates brief (post + story)
  .claude/skills/       ← Skills du pipeline (orchestrateurs, DA, prompt, generation)
  .claude/agents/       ← Agent input-mapper
  posts-stories/
    posts/periode-X/SX/YYYY-MM-DD/   ← Posts Instagram (pipeline IA)
    stories/SX/[jour]/                ← Stories Instagram (pipeline template)
    stories/_templates/               ← Templates HTML paramétrés
    stories/_scripts/                 ← Puppeteer render
```

## Pipeline Posts

### Commande principale

```
/instagram-producer S1 2026-03-15
```

L'orchestrateur enchaîne TOUTES les étapes automatiquement. Toujours préférer l'orchestrateur aux commandes manuelles.

### Flux séquentiel

```
00-brief/brief.md
    ↓
Skill: /social-media-art-director (obligatoire)
    ↓
Agent: input-mapper (automatique, Haiku)
    ↓
🔒 Validation opérateur
    ↓
Skill: /image-prompt-engineer en Mode B (obligatoire)
    ↓
Nanobanana Pro / GPT Images
```

### Skills et agents obligatoires

| Étape | Outil | Invocation |
|-------|-------|------------|
| Orchestration | Skill | `/instagram-producer` — enchaîne toutes les étapes |
| Art Direction | Skill | `/social-media-art-director` — NE PAS écrire la direction à la main |
| Input Mapping | Agent | `production/.claude/agents/input-mapper.md` — modèle Haiku |
| Prompt Engineering | Skill | `/image-prompt-engineer` en Mode B — NE PAS écrire le prompt à la main |

### Séparation des responsabilités

| Agent | Brief | Docs DA | Recettes | Photos | Direction créative |
|-------|-------|---------|----------|--------|--------------------|
| Art Director | ✅ | ✅ | ✅ (formes) | ❌ | 📝 (produit) |
| Input Mapper | ❌ | ❌ | ✅ | ✅ (descriptions) | ✅ (lit) |
| Prompt Engineer | ❌ | ❌ | ✅ | ✅ | ✅ |

### Conventions posts

- **Dossiers** : `posts-stories/posts/periode-X/SX/YYYY-MM-DD/`
- **Dates** : format ISO `YYYY-MM-DD`
- **Recettes** : slug kebab-case (`strict-boeuf.md`, `strict-max-poulet.md`)
- **Photos** : mapping centralisé dans `_config/photo-references.md` — jamais dans le brief, jamais dans la direction
- **Le brief ne contient PAS de liens vers photos/recettes** — c'est l'input mapper qui résout
- **Template** : utiliser `_templates/brief-v2.md` pour les nouveaux posts
- **Résolution** : toujours 4K
- **API key** : `$GEMINI_API_KEY` (variable d'environnement), jamais en dur

### Posts v1

Les posts `2026-03-10/` et `2026-03-12/` sont des posts v1 (pre-pipeline). Ne PAS les utiliser comme template.

---

## Pipeline Stories

### Commande principale

```
/story-producer S1 lundi        # Story unique
/story-producer S1              # Batch semaine complète
```

### Flux séquentiel (3 étapes)

```
brief-story.md
    ↓
Agent: story-data-mapper (Haiku)
    ↓
🔒 Validation opérateur
    ↓
Template fill + Puppeteer render → story-NN.png (1080×1920)
```

### Types automatisables

Fiche Produit, Teaser, Interactif, Éducatif, Annonce → templates HTML paramétrés dans `posts-stories/stories/_templates/`.
Coulisse, Lieu, Ambiance → vérification bibliothèque (Étape 1b) : reclassables en Pipeline si photo disponible. CTA, Récap → captures terrain (Romain/Dorian).

### Conventions stories

- **Dossiers** : `posts-stories/stories/S[X]/[jour]/` (lundi, mardi, etc.)
- **Brief** : `brief-story.md` (template : `_templates/brief-story.md`)
- **Templates** : `posts-stories/stories/_templates/[type].html` — NE JAMAIS modifier, uniquement copier et remplir
- **Rendu** : `posts-stories/stories/_scripts/render-story.js` — Puppeteer, 1080×1920, PNG + JPG
- **Chemins absolus** : obligatoires dans le HTML rempli pour que Puppeteer charge les assets en `file://`
