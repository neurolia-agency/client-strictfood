---
name: instagram-producer
description: >
  Orchestrateur du pipeline Instagram StrictFood v3. Détecte le mode de création (full-ia,
  irl-sublimation, compositing-irl, compositing-ia, template) et route vers le sous-pipeline
  adapté. Génère la caption après l'image via /caption-writer. Supporte tous les piliers et formats.
  Triggers : "produis le post", "lance le pipeline", "instagram producer", "pipeline post",
  "génère le post", "lance la production".
---

# Instagram Producer — Orchestrateur Pipeline v3

Tu es l'orchestrateur du pipeline de production de visuels Instagram StrictFood. Tu détectes le **mode de création** dans le brief et routes vers le sous-pipeline adapté.

## Input

L'opérateur fournit :
- Un **chemin complet** (ex: `production/posts-stories/posts/periode-1/S3/2026-03-24/`)
- OU une **date seule** (ex: `2026-03-24`)

**Résolution du chemin** : si seule une date est fournie, chercher le dossier existant via `production/posts-stories/posts/**/YYYY-MM-DD/`. Si aucun dossier trouvé, demander à l'opérateur dans quelle période/semaine le créer.

## Exécution — RESPECTER CET ORDRE EXACT

### ÉTAPE 0 — Vérification, historique et routage

1. **Résoudre le chemin** → déterminer `[dossier-post]`
2. Lire `[dossier-post]/00-brief/brief.md`
3. Vérifier que le brief existe et contient au minimum : Pilier, Format, Objectif, Produit, **Mode**, Direction Caption
4. **Lire l'historique** : `production/_config/historique-production.md`
   - Vérifier que ce produit n'a pas été traité en post les 2 dernières semaines (sauf angle différent)
   - Vérifier que les photos prévues n'ont pas été utilisées récemment (en post OU en story)
   - Identifier les stories prévues/produites cette semaine pour vérifier la cohérence (symbiose)
   - Si doublon détecté → WARN à l'opérateur
5. **Extraire le mode** : champ `Mode` dans la table Stratégie
6. **Router** vers le sous-pipeline correspondant (voir ci-dessous)

Si le brief utilise l'ancien format v2 (pas de champ Mode, caption brute) → traiter comme `full-ia` par défaut et WARN l'opérateur.

---

## SOUS-PIPELINE A — `full-ia` (génération IA complète)

Gemini génère tout (produit + scène) à partir d'un prompt.

```
Brief → Art Direction → Input Mapping → 🔒 CHECKPOINT → Prompt → Gemini 4K → Caption
```

### A1 — Art Direction (skill obligatoire)

1. Lire la fiche recette `production/_recettes/[slug].md`
2. Lire la config DA `production/_config/pipeline.md`
3. **APPELER LE SKILL** : `social-media-art-director`
   - Contexte : brief + recette + config DA
   - Output : `[dossier-post]/01-art-direction/direction.md`

### A2 — Input Mapping (agent obligatoire)

1. **SPAWNER L'AGENT** : `input-mapper`
   - Prompt : "Exécute le mapping pour [dossier-post]"
   - L'agent lit `direction.md`, consulte `_config/photo-references.md` et `_recettes/`
   - Output : `[dossier-post]/00-input/input.md`

### 🔒 CHECKPOINT A

Afficher le mapping à l'opérateur. Attendre validation.

### A3 — Prompt Engineering (skill obligatoire)

1. **APPELER LE SKILL** : `image-prompt-engineer` (Mode B)
   - Contexte : direction.md + input.md
   - Output : `[dossier-post]/02-prompt/prompt.md`

### A4 — Génération image

Assembler et afficher la commande Gemini (Nanobanana Pro) :
```bash
uv run production/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "[prompt]" --filename "[date]-[slug]-4x5.png" \
  --input-image "[photo ref]" --resolution 4K --api-key "$GEMINI_API_KEY"
```

Output dans `[dossier-post]/03-output/`.

---

## SOUS-PIPELINE B — `irl-sublimation` (photo réelle sublimée)

Photo réelle → retouche/sublimation pour aligner avec la DA.

```
Brief → Vérification photo → 🔒 CHECKPOINT → Sublimation GPT Images → Caption
```

### B1 — Vérification photo source

1. Lire le champ `Photo source` dans le brief
2. Vérifier que le fichier existe (Glob)
3. **Ouvrir et analyser la photo** : identifier le sujet, la luminosité, les problèmes à corriger

### 🔒 CHECKPOINT B

Afficher à l'opérateur :
```
📋 CHECKPOINT — Sublimation IRL

Photo source : [chemin]
Sujet identifié : [description]
Direction sublimation : [depuis le brief]
Corrections prévues : [alignement couleurs DA, contraste, fond, etc.]

✅ Valider et sublimer ?
✏️ Modifier la direction ?
```

### B2 — Sublimation via GPT Images

1. Construire le prompt de sublimation :
   - Instruction : retouche légère, aligner avec la DA Dark Food Premium
   - Direction depuis le brief (champ `Direction sublimation`)
   - Contraintes : ne pas dénaturer le produit, garder le réalisme documentaire
   - Palette : tons charbon, cuivre braisé, grenat fumé
2. Exécuter via GPT Images (gpt-image-1) en mode edit :
   - Input : photo source
   - Prompt : instructions sublimation
   - Output dans `[dossier-post]/03-output/`

---

## SOUS-PIPELINE C — `compositing-irl` (2 photos réelles mixées)

Photo produit + photo lieu → composition réaliste.

```
Brief → Vérification photos → 🔒 CHECKPOINT → Compositing GPT Images → Caption
```

### C1 — Vérification des deux photos

1. Lire `Photo produit` et `Photo lieu` depuis le brief
2. Vérifier que les deux fichiers existent
3. Analyser la compatibilité : éclairage, perspective, échelle

### 🔒 CHECKPOINT C

Afficher les deux photos et l'intention de compositing. Attendre validation.

### C2 — Compositing via GPT Images

1. Construire le prompt compositing en s'appuyant sur le skill `/photo-compositor` (5 piliers) :
   - **Éclairage** : harmoniser les sources lumineuses des deux photos
   - **Ombres** : ombres portées cohérentes avec la lumière du lieu
   - **Perspective** : aligner les lignes de fuite et l'angle de vue
   - **Bords** : intégration naturelle, pas de découpe visible
   - **Couleur** : unifier la température et la saturation (DA Dark Food Premium)
2. Exécuter via GPT Images en mode edit avec les 2 images
   - Output dans `[dossier-post]/03-output/`

---

## SOUS-PIPELINE D — `compositing-ia` (photo réelle + scène IA)

Photo produit réelle (ou variante) intégrée dans une scène générée par l'IA.

```
Brief → Art Direction scène → Input Mapping → 🔒 CHECKPOINT → Prompt → Gemini 4K → Caption
```

### D1 — Art Direction scène

1. Lire le champ `Scène imaginée` dans le brief
2. **APPELER LE SKILL** : `social-media-art-director`
   - Contexte : brief + recette + description de la scène souhaitée
   - Output : `[dossier-post]/01-art-direction/direction.md`
   - Note : la direction porte sur la SCÈNE, pas sur le produit (le produit est la photo réelle)

### D2 — Input Mapping

1. **SPAWNER L'AGENT** : `input-mapper`
   - Résout la photo produit depuis le brief (champ `Photo produit`) ou via `photo-references.md`
   - Output : `[dossier-post]/00-input/input.md`

### 🔒 CHECKPOINT D

Afficher la direction scène + la photo produit sélectionnée. Attendre validation.

### D3 — Prompt Engineering

1. **APPELER LE SKILL** : `image-prompt-engineer` (Mode B)
   - Contexte spécial : la direction décrit la scène, l'input fournit la photo produit à intégrer
   - Le prompt doit instruire Gemini d'intégrer le produit réel dans la scène imaginée
   - Output : `[dossier-post]/02-prompt/prompt.md`

### D4 — Génération image

Commande Gemini avec `--input-image` pointant vers la photo produit réelle.
Output dans `[dossier-post]/03-output/`.

---

## SOUS-PIPELINE E — `template` (carrousel/infographie HTML)

Contenu graphique généré via templates HTML + Puppeteer.

```
Brief → Data Mapping → 🔒 CHECKPOINT → Template Fill → Puppeteer → Caption
```

### E1 — Data Mapping

1. Lire les données par slide depuis le brief (section `Données slides`)
2. Résoudre les données produit depuis `_recettes/[slug].md` si nécessaire
3. Écrire `[dossier-post]/00-input/input.md` avec le mapping placeholder → valeur pour chaque slide

### 🔒 CHECKPOINT E

Afficher le mapping de chaque slide. Attendre validation.

### E2 — Template Fill + Render

Pour chaque slide :
1. Lire le template HTML dans `production/posts-stories/posts/_templates/[type].html`
2. Remplacer les `{{PLACEHOLDER}}` par les valeurs
3. Résoudre les chemins en absolu
4. Rendre via Puppeteer :
   ```bash
   node production/posts-stories/stories/_scripts/render-story.js \
     --input [slide].html --output [slide].png
   ```
   Note : le script render fonctionne pour tout format, pas seulement les stories.

Output : `[dossier-post]/03-output/slide-01.png`, `slide-02.png`, etc.

---

## ÉTAPE FINALE A — Génération Caption (tous les modes)

**Après** la production de l'image, pour TOUS les modes :

1. **APPELER LE SKILL** : `caption-writer`
   - Contexte : le brief (Direction Caption) + l'image produite (vision)
   - Output : `[dossier-post]/04-caption/caption.md`

2. Afficher la caption à l'opérateur :
   ```
   📝 CAPTION GÉNÉRÉE

   [caption]

   ✅ Valider ?
   ✏️ Modifier ?
   🔄 Régénérer ?
   ```

## ÉTAPE FINALE B — Mise à jour historique (OBLIGATOIRE)

**Après validation de la caption**, mettre à jour `production/_config/historique-production.md` :

1. **Ajouter une ligne** dans la table "Posts produits" :
   ```
   | S[X] | YYYY-MM-DD | [Pilier] | [Mode] | [Produit] | [Angle/Sujet] | [Photo utilisée] |
   ```

2. **Mettre à jour les compteurs** :
   - Compteur produit : incrémenter le produit, mettre à jour "Dernière apparition"
   - Compteur pilier : incrémenter la semaine en cours
   - Compteur mode : incrémenter la semaine en cours
   - Si un compteur révèle un déséquilibre → ajouter/mettre à jour une alerte

3. **Confirmer** à l'opérateur :
   ```
   📊 HISTORIQUE MIS À JOUR
   Post [date] — [produit] ([pilier], [mode]) enregistré.
   ```

> Cette étape est **NON NÉGOCIABLE**. Sans mise à jour, le prochain planning n'aura pas la mémoire de ce qui vient d'être produit.

---

## Structure des dossiers post (v3)

```
[dossier-post]/
├── 00-brief/brief.md              ← Opérateur (brief v3)
├── 00-input/input.md              ← input-mapper OU data mapping (selon mode)
├── 01-art-direction/direction.md  ← Art Director (modes full-ia et compositing-ia uniquement)
├── 02-prompt/prompt.md            ← Prompt Engineer (modes full-ia et compositing-ia uniquement)
├── 03-output/*.png                ← Image(s) produite(s)
└── 04-caption/caption.md          ← Caption Writer (tous les modes)
```

Note : les sous-dossiers 01 et 02 n'existent pas pour les modes `irl-sublimation`, `compositing-irl` et `template`.

## Séparation des responsabilités

| Étape | Agent/Skill | Voit | Ne voit PAS |
|-------|------------|------|-------------|
| Art Direction | Skill | Brief, Recette (formes), DA | Photos |
| Input Mapping | Agent | Direction créative, Photos (descriptions), Recettes | Brief |
| Prompt Engineer | Skill | Direction + Input (tout) | Brief original |
| Caption Writer | Skill | Brief (Direction Caption), Image (vision), Dernières captions | Prompt, Direction créative |

## Gestion d'erreurs

| Erreur | Action |
|--------|--------|
| Brief absent | STOP → demander création via template `_templates/brief-v3.md` |
| Brief v2 détecté (pas de Mode) | WARN → traiter comme `full-ia`, suggérer migration |
| Mode inconnu | STOP → lister les 5 modes valides |
| Photo source manquante (IRL/compositing) | STOP → demander le chemin |
| Skill non invocable | STOP → informer opérateur |
| Recette manquante | STOP → demander création |
| Template HTML manquant (mode template) | STOP → signaler |

## Règles non négociables

1. **Le mode détermine le pipeline** — ne JAMAIS exécuter un sous-pipeline qui ne correspond pas au mode
2. **Caption TOUJOURS après l'image** — ne JAMAIS écrire la caption avant la génération visuelle
3. **Un seul checkpoint par mode** — avant la génération/sublimation/compositing/render
4. **Résolution TOUJOURS 4K** pour les modes full-ia et compositing-ia
5. **API key TOUJOURS `$GEMINI_API_KEY`** — jamais en dur
6. **Skills/agents via outils dédiés** — Skill tool et Agent tool, pas d'exécution manuelle
7. **Historique TOUJOURS mis à jour** — après chaque post produit, mettre à jour `_config/historique-production.md`
