# Production — Pipeline Instagram v2

Pipeline de production de visuels Instagram "Dark Food Premium" pour StrictFood.

## Architecture v2 — Séparation des responsabilités

Le principe central : **chaque agent ne voit que ce dont il a besoin.**

| Agent | Brief | Docs DA | Recettes | Photos | Direction créative |
|-------|-------|---------|----------|--------|--------------------|
| Art Director | ✅ | ✅ | ✅ (formes) | ❌ | 📝 (produit) |
| Input Mapper | ❌ | ❌ | ✅ | ✅ (descriptions) | ✅ (lit) |
| Prompt Engineer | ❌ | ❌ | ✅ | ✅ | ✅ |

- L'**art director** décide du style visuel et verrouille quels produits apparaissent, sans connaître les détails produit.
- L'**input mapper** (agent automatique Haiku) fait le lien entre les produits verrouillés et les photos/recettes.
- Le **prompt engineer** est le seul à tout recevoir pour produire le prompt final.

## Structure

```
production/
├── _recettes/                    # Fiches produit (1 fichier = 1 produit)
│   ├── strict-boeuf.md
│   ├── strict-poulet.md
│   ├── strict-vege-falafel.md
│   ├── strict-max-boeuf.md
│   ├── strict-max-poulet.md
│   ├── strict-wrap-boeuf.md
│   ├── strict-wrap-poulet.md
│   ├── tenders-strict.md
│   └── ...
├── _config/
│   ├── pipeline.md               # Configuration générale (DA, stratégie, résolution, modèles)
│   └── photo-references.md       # Mapping centralisé produit → photos + descriptions textuelles
├── YYYY-MM-DD/                   # Un dossier par post, nommé par date de publication
│   ├── 00-brief/
│   │   └── brief.md              # Brief stratégique (pilier, objectif, message, caption)
│   ├── 01-art-direction/
│   │   └── direction.md          # Direction créative (composition, éclairage, mood, produits verrouillés)
│   ├── 00-input/
│   │   └── input.md              # Mapping produit → recette + photo (généré par input-mapper)
│   ├── 02-prompt/
│   │   └── prompt.md             # Prompt Nanobanana/GPT (output prompt engineer)
│   └── 03-output/
│       └── [visuels finaux]      # Images générées
```

## Flux séquentiel

```
00-brief/brief.md
    ↓
Skill: social-media-art-director
Input : brief + docs DA (constraints, visual-vocabulary, emotion-map, project-dials)
Output → 01-art-direction/direction.md
    ↓
Agent: input-mapper (automatique, Haiku)
Input : direction.md → identifie produits verrouillés
Consulte : _config/photo-references.md + _recettes/
Output → 00-input/input.md
    ↓
🔒 Opérateur valide ou ajuste input.md
    ↓
Skill: image-prompt-engineer
Input : direction.md + input.md (→ recette + photo référence)
Output → 02-prompt/prompt.md
    ↓
Nanobanana Pro / GPT Images
Input : prompt + photo référence en input image
Output → 03-output/
```

## Commande unique (recommandé)

```bash
# Pipeline complet — une seule commande
/instagram-producer 2026-03-15

# L'orchestrateur enchaîne automatiquement :
# 1. Vérifie le brief
# 2. Lance /social-media-art-director → direction.md
# 3. Spawne l'agent input-mapper → input.md
# 4. PAUSE → validation opérateur
# 5. Lance /image-prompt-engineer Mode B → prompt.md
# 6. Affiche la commande NanoBanana prête à exécuter
```

## Commandes manuelles (si besoin d'exécuter une étape isolée)

```bash
# Étape 1 — Brief → Art Direction
"Lis production/YYYY-MM-DD/00-brief/brief.md puis exécute le skill social-media-art-director.
Écris l'output dans 01-art-direction/direction.md"

# Étape 1bis — Art Direction → Input Mapping (automatique)
"Exécute l'agent input-mapper sur production/YYYY-MM-DD/"

# Étape 2 — Direction + Input → Prompt
"Lis production/YYYY-MM-DD/01-art-direction/direction.md et 00-input/input.md.
Exécute le skill image-prompt-engineer en Mode B.
Écris l'output dans 02-prompt/prompt.md"

# Le prompt est ensuite copié dans Nanobanana/GPT Images avec la photo référence
```

## Conventions

- **Dates** : format ISO `YYYY-MM-DD`
- **Recettes** : slug du produit en kebab-case (`strict-boeuf.md`, `strict-max-poulet.md`)
- **Photos référence** : mapping centralisé dans `_config/photo-references.md` (pas dans le brief, pas dans la direction créative)
- **Un post = un dossier** : même si le post est un carrousel, tout reste dans le même dossier date
- **Le brief ne contient PAS de liens vers photos/recettes** — c'est l'input mapper qui résout ces liens

## Posts existants (v1)

Les posts `2026-03-10/` et `2026-03-12/` ont été produits en v1 (art director voyait tout). Ils restent en l'état — pas de migration.
