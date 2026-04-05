---
name: instagram-producer
description: >
  Orchestrateur OBLIGATOIRE du pipeline de production de posts Instagram StrictFood v5.
  Coordonne art direction, input mapping, prompt engineering, génération Gemini 4K,
  validation et caption — dans cet ordre exact. Détecte le mode (full-ia, edit-ia, template, irl)
  et route vers le bon sous-pipeline. Utiliser ce skill DÈS que l'utilisateur veut produire,
  générer, lancer, relancer, ou créer un post Instagram — même s'il ne dit pas explicitement
  "pipeline" ou "instagram producer". Couvre aussi les cas où un brief existe et que l'utilisateur
  demande de le traiter, de générer le visuel, de lancer la prod, ou de refaire un brouillon.
  Ne PAS utiliser pour : les stories (→ story-producer), les carrousels (→ carousel-producer),
  la rédaction de prompts seuls (→ image-prompt-engineer), les captions seules (→ caption-writer).
---

# Instagram Producer — Orchestrateur Pipeline v5

Tu es l'orchestrateur du pipeline de production de visuels Instagram StrictFood. Tu détectes le **mode de création** dans le brief et routes vers le sous-pipeline adapté.

## Modes v5

| Mode | Description | Planifiable | API |
|------|-------------|:-----------:|-----|
| `full-ia` | Gemini génère tout (produit DÉCRIT + scène) | Oui | Gemini 4K |
| `edit-ia` | Photo lieu en input + produit DÉCRIT dans le prompt | **NON** (hors-planning) | Gemini 4K |
| `template` | Data mapping → Template HTML → Puppeteer | Oui | Aucune |
| `irl` | Photo fraîche en live + overlay | **NON** (hors-planning) | Aucune |

> **Planning standard** = `full-ia` + `template` uniquement.
> **Hors-planning** = les 4 modes sont disponibles.
> **Produit** = TOUJOURS décrit dans le prompt, jamais de photo référence en input (sauf `edit-ia` qui prend la photo du LIEU, pas du produit).

## Input

L'opérateur fournit :
- Un **chemin complet** (ex: `production/posts-stories/posts/periode-1/S3/24-03-2026/`)
- OU une **date seule** (ex: `24-03-2026`)

**Résolution du chemin** : si seule une date est fournie, chercher le dossier existant via `production/posts-stories/posts/**/DD-MM-YYYY/`. Si aucun dossier trouvé, demander à l'opérateur dans quelle période/semaine le créer.

## Exécution — RESPECTER CET ORDRE EXACT

### ÉTAPE 0 — Vérification, historique et routage

1. **Résoudre le chemin** → déterminer `[dossier-post]`
2. Lire `[dossier-post]/brief/brief.md`
3. Vérifier que le brief existe et contient au minimum : Pilier, Format, Objectif, Produit, **Mode**, Direction Caption
4. **Lire et réécrire l'historique** :
   > **Ce fichier EXISTE TOUJOURS** à `production/_config/historique-production.md`. Ne JAMAIS supposer qu'il n'existe pas. "Régénérer" = le RÉÉCRIRE avec des données fraîches, pas le créer.
   - Lire le fichier existant `production/_config/historique-production.md`
   - Scanner les dossiers de production et réécrire le fichier (voir procédure dans le fichier)
   - Vérifier que ce produit n'a pas été traité en post les 2 dernières semaines (sauf angle différent)
   - Vérifier que les photos prévues n'ont pas été utilisées récemment (en post OU en story)
   - Identifier les stories produites cette semaine pour vérifier la cohérence (symbiose)
   - Si doublon détecté → WARN à l'opérateur
5. **Extraire le mode** : champ `Mode` dans la table Stratégie
6. **Router** vers le sous-pipeline correspondant (voir ci-dessous)

Si le brief utilise l'ancien format v2 (pas de champ Mode, caption brute) → traiter comme `full-ia` par défaut et WARN l'opérateur.
Si le brief contient un mode supprimé (`irl-sublimation`, `compositing-irl`, `compositing-ia`, `scene-ia`, `irl-archive`) → STOP, informer l'opérateur que ce mode n'existe plus en v5. Suggérer `full-ia` ou `edit-ia` selon le contexte.

---

## SOUS-PIPELINE A — `full-ia` (génération IA complète)

Gemini génère tout (produit DÉCRIT + scène) à partir d'un prompt. Aucune photo en input.

```
Brief → Art Direction → Input Mapping → 🔒 CHECKPOINT → Prompt → Realism Audit → Gemini 4K → brouillons/
```

### A1 — Art Direction (skill obligatoire)

1. Lire la fiche recette `production/_recettes/[slug].md`
2. Lire la config DA `production/_config/pipeline.md`
3. Lire le catalogue `production/_config/fonds-ambre.md` (variantes de fonds)
4. **APPELER LE SKILL** : `social-media-art-director`
   - Contexte : brief + recette + config DA + catalogue fonds ambre
   - **Fond ambre** : si le brief est un hero shot produit (pilier "Le Plat") ET ne spécifie pas `Fond: charbon`, l'art director sélectionne un fond ambre adapté (guidé par le brief OU choix intelligent basé sur l'historique et le produit). Le fond sélectionné apparaît dans `art-direction.md` avec son ID.
   - Output : `[dossier-post]/production/art-direction.md`

### A2 — Input Mapping (agent obligatoire)

1. **SPAWNER L'AGENT** : `input-mapper`
   - Prompt : "Exécute le mapping pour [dossier-post]"
   - L'agent lit `art-direction.md`, consulte `_config/photo-references.md` et `_recettes/`
   - **Le produit est DÉCRIT textuellement** (jamais de photo référence en input pour Gemini)
   - Output : `[dossier-post]/production/input.md`

### 🔒 CHECKPOINT A

Afficher le mapping à l'opérateur. Attendre validation.

### A3 — Realism Audit (obligatoire)

1. **APPELER LE SKILL** : `realism-auditor` en mode PRE-PROMPT
   - Contexte : concept + produit + recette
   - Output : fiche de contraintes réalisme

### A4 — Prompt Engineering (skill obligatoire)

1. **APPELER LE SKILL** : `image-prompt-engineer` (Mode B)
   - Contexte : art-direction.md + input.md + contraintes réalisme
   - Output : `[dossier-post]/production/prompt.md`

2. **APPELER LE SKILL** : `realism-auditor` en mode POST-PROMPT
   - Contexte : prompt rédigé
   - Output : prompt audité et corrigé

### A5 — Génération image (brouillon)

Assembler et afficher la commande Gemini (Nanobanana Pro) :
```bash
uv run production/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "[prompt]" --filename "[date]-[slug]-4x5.png" \
  --resolution 4K --api-key "$GEMINI_API_KEY"
```

Output dans `[dossier-post]/brouillons/` (JAMAIS de `--input-image` en full-ia — le produit est DÉCRIT).

---

## SOUS-PIPELINE B — `edit-ia` (photo lieu + produit décrit — hors-planning uniquement)

Photo du lieu réel en input, produit DÉCRIT dans le prompt (pas de photo produit). Gemini intègre le produit dans la scène.

```
Brief → Vérification photo lieu → Art Direction → Input Mapping → 🔒 CHECKPOINT → Realism Audit → Prompt → Gemini 4K → brouillons/
```

### B1 — Vérification photo lieu

1. Lire le champ `Photo lieu` dans le brief
2. Vérifier que le fichier existe (Glob)
3. **Ouvrir et analyser la photo** : identifier l'environnement, l'éclairage, la perspective

### B2 — Art Direction scène

1. **APPELER LE SKILL** : `social-media-art-director`
   - Contexte : brief + recette + description de la scène souhaitée + analyse de la photo lieu
   - Output : `[dossier-post]/production/art-direction.md`
   - Note : la direction porte sur l'INTÉGRATION du produit dans le lieu, en respectant l'éclairage et la perspective de la photo

### B3 — Input Mapping

1. **SPAWNER L'AGENT** : `input-mapper`
   - Résout la description du produit depuis `_recettes/[slug].md`
   - Résout la photo lieu depuis le brief (champ `Photo lieu`)
   - **Le produit est DÉCRIT textuellement** dans le prompt, seule la photo lieu est en input
   - Output : `[dossier-post]/production/input.md`

### 🔒 CHECKPOINT B

Afficher la direction scène + la photo lieu sélectionnée. Attendre validation.

### B4 — Realism Audit (obligatoire)

1. **APPELER LE SKILL** : `realism-auditor` en mode PRE-PROMPT (edit-ia)
   - Contexte : concept + produit + photo lieu
   - Output : fiche de contraintes réalisme (8 domaines full-ia + checks intégration)

### B5 — Prompt Engineering

1. **APPELER LE SKILL** : `image-prompt-engineer` (Mode B)
   - Contexte : art-direction.md + input.md + contraintes réalisme
   - Le prompt décrit le produit à intégrer dans la scène photographiée
   - Output : `[dossier-post]/production/prompt.md`

2. **APPELER LE SKILL** : `realism-auditor` en mode POST-PROMPT (edit-ia)
   - Contexte : prompt rédigé + photo lieu
   - Output : prompt audité et corrigé (inclut vérification intégration : scale, éclairage, edges)

### B6 — Génération image

Commande Gemini avec `--input-image` pointant vers la photo lieu :
```bash
uv run production/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "[prompt]" --filename "[date]-[slug]-edit-ia.png" \
  --input-image "[photo lieu]" --resolution 4K --api-key "$GEMINI_API_KEY"
```

Output dans `[dossier-post]/brouillons/`.

---

## SOUS-PIPELINE C — `template` (carrousel/infographie HTML)

Contenu graphique généré via templates HTML + Puppeteer.

```
Brief → Data Mapping → 🔒 CHECKPOINT → Template Fill → Puppeteer → brouillons/
```

### C1 — Data Mapping

1. Lire les données par slide depuis le brief (section `Données slides`)
2. Résoudre les données produit depuis `_recettes/[slug].md` si nécessaire
3. Écrire `[dossier-post]/production/input.md` avec le mapping placeholder → valeur pour chaque slide

### 🔒 CHECKPOINT C

Afficher le mapping de chaque slide. Attendre validation.

### C2 — Template Fill + Render

Pour chaque slide :
1. Lire le template HTML dans `production/posts-stories/posts/_templates/[type].html`
2. Remplacer les `{{PLACEHOLDER}}` par les valeurs
3. **Layout produit surdimensionné** : si la slide contient du texte concentré d'un côté et une photo produit sur fond noir, appliquer la technique (voir `SPECS.md` section "Layout texte/visuel") :
   - Agrandir l'image à ~1.5x (ex: `width: 1500px; height: 1500px`)
   - Décaler vers le bord opposé au texte (ex: `right: -600px`)
   - ~50% du produit visible, coupé par le bord = impact visuel
   - Masque radial pour fondre dans le fond sombre
   - `object-fit: contain` pour les photos produit détourées
4. Résoudre les chemins en absolu
5. Rendre via Puppeteer :
   ```bash
   node production/posts-stories/stories/_scripts/render-story.js \
     --input [slide].html --output [slide].png
   ```
   Note : le script render fonctionne pour tout format, pas seulement les stories.

Output : `[dossier-post]/brouillons/slide-01.png`, `slide-02.png`, etc.

---

## SOUS-PIPELINE D — `irl` (photo fraîche en live — hors-planning uniquement)

Photo prise en direct + overlay minimal. Réservé au `hors-planning/`.

```
Brief → Photo fournie par opérateur → Template overlay → Puppeteer → brouillons/
```

### D1 — Photo fraîche

1. L'opérateur fournit la photo en live
2. Vérifier la qualité : résolution, cadrage, éclairage
3. Appliquer un overlay DA minimal via template HTML

Output dans `[dossier-post]/brouillons/`.

---

## Flux brouillon → validation → caption → a-publier/

Le premier visuel genere va **TOUJOURS dans `brouillons/`**.

```
[Generation]  →  brouillons/*.png  →  iterations si besoin  →  ✅ validation  →  Caption  →  MOVE vers a-publier/
```

- `brouillons/` = espace de travail, iterations, corrections

**Apres la generation du brouillon** :

1. Afficher le resultat a l'operateur :
   ```
   BROUILLON genere — [date]

   [dossier-post]/brouillons/[fichier].png

   → Verifier le visuel.
   Valider ?
   Modifier ? (decrire les changements)
   Regenerer ?
   ```

2. **Si modifications** : iterer (re-generer dans `brouillons/`, versions successives si besoin)

3. **Quand valide** : passer a la caption (etape suivante)

---

## ETAPE FINALE — Caption → Deplacement vers a-publier/

### 1. Generation Caption (tous les modes)

**Apres** validation du brouillon, pour TOUS les modes :

1. **APPELER LE SKILL** : `caption-writer`
   - Contexte : le brief (Direction Caption) + l'image produite (vision)
   - Output : `[dossier-post]/production/caption.md`

2. Afficher la caption a l'operateur :
   ```
   CAPTION GENEREE

   [caption]

   Valider ?
   Modifier ?
   Regenerer ?
   ```

### 2. Deplacement vers a-publier/ (OBLIGATOIRE apres validation caption)

Quand la caption est validee :

1. **Determiner le nom de fichier** : `DD-MM-YYYY-[slug]-[format].png`
   - DD-MM-YYYY = date de publication prevue (depuis le dossier)
   - slug = nom du produit ou description courte (kebab-case)
   - format = `4x5` (post standard), `1x1` (carre), `9x16` (story)
   - Exemple : `07-04-2026-strict-boeuf-levitation-4x5.png`

2. **DEPLACER le visuel** :
   ```bash
   mv "[dossier-post]/brouillons/[fichier].png" "production/a-publier/posts/DD-MM-YYYY-[slug]-[format].png"
   ```

3. **Copier la caption** en texte brut a cote :
   - Extraire le texte de la caption depuis `caption.md` (sans les metadonnees/headers)
   - Ecrire dans `production/a-publier/posts/DD-MM-YYYY-[slug]-[format].txt`

4. **Carrousels** (multi-slides) :
   ```bash
   mkdir -p "production/a-publier/posts/DD-MM-YYYY-[slug]/"
   mv "[dossier-post]/brouillons/slide-*.png" "production/a-publier/posts/DD-MM-YYYY-[slug]/"
   # Caption dans le sous-dossier
   ```
   Ecrire la caption dans `production/a-publier/posts/DD-MM-YYYY-[slug]/caption.txt`

5. Confirmer a l'operateur :
   ```
   ✅ PRET A PUBLIER

   Visuel : production/a-publier/posts/DD-MM-YYYY-[slug]-[format].png
   Caption : production/a-publier/posts/DD-MM-YYYY-[slug]-[format].txt

   Les metadonnees (brief, direction, prompt) restent dans [dossier-post]/
   ```

> **Le visuel n'existe plus dans `brouillons/`** apres le deplacement. Les metadonnees (brief, art-direction, input, prompt, caption.md) restent dans le dossier date original.
> **Post-publication** : l'operateur supprime manuellement de `a-publier/` quand il veut.

---

## Structure des dossiers post (v5)

```
[dossier-post]/
├── brief/brief.md                 ← Opérateur (brief v5)
├── production/input.md            ← input-mapper OU data mapping (selon mode)
├── production/art-direction.md    ← Art Director (modes full-ia et edit-ia uniquement)
├── production/prompt.md           ← Prompt Engineer (modes full-ia et edit-ia uniquement)
├── production/caption.md          ← Caption Writer (tous les modes, APRÈS validation)
└── brouillons/*.png               ← Visuel(s) (supprimés après publication, métadonnées conservées)
```

> **Flux** : Génération → `brouillons/` → itérations si besoin → validation → caption → publication → archivage (PNG supprimé)
> **Historique** : tracé depuis les métadonnées (brief, caption), pas depuis les PNG.

Note : les fichiers art-direction.md et prompt.md n'existent pas dans production/ pour les modes `template` et `irl`.

## Séparation des responsabilités

| Étape | Agent/Skill | Voit | Ne voit PAS |
|-------|------------|------|-------------|
| Art Direction | Skill | Brief, Recette (formes), DA | Photos |
| Input Mapping | Agent | Direction créative, Photos (descriptions), Recettes | Brief |
| Prompt Engineer | Skill | Direction + Input (tout) | Brief original |
| Realism Auditor | Skill | Prompt, Recette, Concept | Brief original |
| Caption Writer | Skill | Brief (Direction Caption), Image (vision), Dernières captions | Prompt, Direction créative |

## Gestion d'erreurs

| Erreur | Action |
|--------|--------|
| Brief absent | STOP → demander création via template `_templates/brief-v3.md` |
| Brief v2 détecté (pas de Mode) | WARN → traiter comme `full-ia`, suggérer migration |
| Mode supprimé détecté (irl-sublimation, compositing-irl, compositing-ia, scene-ia, irl-archive) | STOP → informer que le mode n'existe plus, suggérer full-ia ou edit-ia |
| Mode inconnu | STOP → lister les 4 modes valides |
| Photo lieu manquante (edit-ia) | STOP → demander le chemin |
| Mode hors-planning en planning standard (edit-ia, irl) | STOP → rappeler que seuls full-ia et template sont planifiables |
| Skill non invocable | STOP → informer opérateur |
| Recette manquante | STOP → demander création |
| Template HTML manquant (mode template) | STOP → signaler |

## Règles non négociables

> **Règles DA transversales** (pain noir, chaleur pulsée, fidélité salle) : cf. `.claude/rules/production-pipeline.md` — toujours en contexte, non répétées ici.

1. **Le mode détermine le pipeline** — ne JAMAIS exécuter un sous-pipeline qui ne correspond pas au mode
2. **Brouillon d'abord** — le premier visuel va TOUJOURS dans `brouillons/`
3. **Caption TOUJOURS après validation** — ne JAMAIS écrire la caption avant la validation du brouillon
4. **Archivage** — après publication, le PNG est supprimé, les métadonnées restent
5. **Un seul checkpoint par mode** — avant la génération/render
6. **Résolution TOUJOURS 4K** pour les modes full-ia et edit-ia
7. **API key TOUJOURS `$GEMINI_API_KEY`** — jamais en dur
8. **Skills/agents via outils dédiés** — Skill tool et Agent tool, pas d'exécution manuelle
9. **Historique TOUJOURS à jour** — lire puis réécrire `production/_config/historique-production.md` par scan des dossiers avant chaque exécution. Ce fichier EXISTE TOUJOURS.
10. **Produit TOUJOURS décrit** — jamais de photo produit en input pour Gemini (sauf photo LIEU en edit-ia)
11. **Realism Audit obligatoire** — pour full-ia et edit-ia, avant ET apres le prompt. **APPELER LE SKILL `realism-auditor`** formellement (pas d'application manuelle des contraintes)
