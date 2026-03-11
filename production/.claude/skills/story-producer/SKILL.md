---
name: story-producer
description: >
  Orchestrateur du pipeline de production de stories Instagram StrictFood. Enchaîne automatiquement
  les 3 étapes — brief → data mapping → template fill + render — pour produire des stories 1080×1920
  prêtes à publier. Pipeline léger comparé aux posts (pas d'art direction ni de génération IA).
  Triggers : "produis la story", "lance le pipeline story", "story producer", "génère la story",
  "produis les stories de la semaine".
---

# Story Producer — Orchestrateur Pipeline Stories

Tu es l'orchestrateur du pipeline de production de stories Instagram StrictFood. Tu enchaînes **automatiquement** les 3 étapes pour chaque story, de manière séquentielle.

## Input

L'opérateur fournit :
- **Un chemin de story** : `production/posts-stories/stories/S1/lundi/` (story unique)
- **Un jour** : `S1 lundi` (toutes les stories de ce jour)
- **Une semaine** : `S1` (batch — toutes les stories de la semaine)

## Prérequis

Avant de commencer, vérifier :
1. Le dossier `production/posts-stories/stories/[semaine]/[jour]/` existe
2. Un fichier `brief-story.md` existe dans ce dossier
3. Les templates HTML existent dans `production/posts-stories/stories/_templates/`
4. Le script `render-story.js` existe dans `production/posts-stories/stories/_scripts/`

Si le brief n'existe pas → STOP, demander à l'opérateur de créer le brief (template : `production/_templates/brief-story.md`).

## Étape 0 — Contexte stratégique (avant toute exécution)

Lire `strategie/strategie-globale.md` (chemin depuis la racine du projet) pour :
- Identifier le **pilier éditorial** du jour (Food Porn, Éducation, Confiance, Engagement)
- Vérifier la **cohérence** du brief avec le calendrier thématique de la semaine
- S'assurer que le **ton et les objectifs** du brief alignent avec la stratégie globale

Si incohérence détectée → WARN à l'opérateur avant de continuer (ex: "Le brief mardi est un Teaser mais la stratégie prévoit un pilier Éducation ce jour-là").

## Types de stories

Toutes les stories sont produites par le pipeline. Seul le Recap est semi-manuel (repost par l'opérateur).

| Type | Template HTML | Pipeline |
|------|---------------|----------|
| Fiche Produit | `fiche-produit.html` | Oui |
| Teaser | `teaser-post.html` | Oui |
| Interactif | `interactif.html` | Oui |
| Éducatif | `educatif.html` | Oui |
| Annonce | `annonce.html` | Oui |
| Lieu / Ambiance | `annonce.html` | Oui |
| Récap | — (repost) | Semi-manuel (opérateur) |

> **Pas de capture terrain.** Les stories nécessitant des photos sont alimentées par la bibliothèque (`photo-references.md`). Si une photo manque, le pipeline génère une entrée dans le document **Demande Photos** — mais la story reste dans le pipeline pour être produite dès que la photo est fournie.

## Format des briefs — Multi-story par jour

Chaque `brief-story.md` contient **plusieurs stories numérotées** pour un même jour :

```markdown
## Story 1 — [Titre]
| Champ | Valeur |
| Type | [type] |
| Template | [template].html |
...

## Story 2 — [Titre]
...
```

Le pipeline itère sur chaque `## Story N` et les traite séquentiellement. Les fichiers de sortie sont numérotés :

```
story-01-data.md / story-01.html / story-01.png   (Story 1)
story-02-data.md / story-02.html / story-02.png   (Story 2)
```

Les stories Recap (semi-manuelles) sont listées dans le récap mais ne produisent aucun fichier.

## Exécution séquentielle — RESPECTER CET ORDRE EXACT

### ÉTAPE 1 — Lecture et parsing du brief

1. Lire `production/posts-stories/stories/[semaine]/[jour]/brief-story.md`
2. Parser chaque section `## Story N` et extraire :
   - **Numéro** (N)
   - **Type** : Fiche Produit / Teaser / Interactif / Éducatif / Annonce / Lieu / Ambiance / Récap
   - **Produit** (si applicable) : slug recette
   - **Template HTML** correspondant
   - **Images** : BG_IMAGE_PATH et/ou HERO_IMAGE_PATH
   - **Mood** et **Image** (visibilité) — résolution en cascade :
     1. Champ `Mood` / `Image` de la story (prioritaire)
     2. Section `## Contraintes` du brief (fallback jour)
     3. Defaults par type (fallback ultime) :
        | Type | Mood defaut | Image defaut |
        |------|-------------|--------------|
        | Fiche Produit | cuivre | visible |
        | Teaser | grenat | visible |
        | Éducatif | feuille | visible |
        | Interactif | cuivre | visible |
        | Annonce | cuivre | visible |
        | Lieu | cuivre | hero |
   - **Résolution en classes CSS** :
     - `cuivre` → `""`, `grenat` → `"mood-grenat"`, `feuille` → `"mood-feuille"`
     - `visible` → `""`, `discret` → `"img-discret"`, `hero` → `"img-hero"`
   - **Backward compat** : un brief avec l'ancien format `DA : Dark Food Premium (fond Charbon...)` est interprété comme `mood: cuivre, image: visible`
3. Vérifier que les fichiers image référencés **existent** via Glob. Si image manquante → WARN et collecter pour le document Demande Photos (étape finale).
4. Pour chaque story Recap → noter comme semi-manuelle, passer
5. Pour chaque story automatisable → passer à l'étape 2

### ÉTAPE 2 — Data Mapping (par story automatisable)

Pour chaque story automatisable identifiée à l'étape 1 :

**Si la story référence un produit (Fiche Produit, certains Éducatifs) :**

1. **SPAWNER L'AGENT** via le Agent tool :
   ```
   Agent: story-data-mapper
   subagent_type: (utiliser le fichier production/posts-stories/stories/.claude/agents/story-data-mapper.md)
   Prompt: "Résous les données pour la Story [N] dans production/posts-stories/stories/[semaine]/[jour]/brief-story.md"
   model: haiku
   ```
   L'agent lit le brief, consulte `_recettes/[slug].md` et `_config/photo-references.md`, et écrit `story-[NN]-data.md` dans le même dossier (ex: `story-01-data.md`).

2. Après écriture, vérifier :
   - Tous les placeholders du template sont couverts
   - Aucune `⚠️ DONNÉE MANQUANTE`

**Si pas de produit référencé** (Teaser, Interactif sans données produit, Annonce, Lieu) :
→ Construire le `story-[NN]-data.md` directement depuis le brief. Mapper les champs du brief vers les placeholders du template :

| Type | Champs brief → Placeholders |
|------|------------------------------|
| Teaser | Hook → `{{TEASER_HOOK}}`, Date → `{{TEASER_DATE}}`, Sous-texte → `{{TEASER_SUBTEXT}}`, Image → `{{BG_IMAGE_PATH}}` |
| Interactif | Question → `{{QUESTION}}`, Option A → `{{OPTION_A}}`, Emoji A → `{{OPTION_A_EMOJI}}`, Option B → `{{OPTION_B}}`, Emoji B → `{{OPTION_B_EMOJI}}`, Image → `{{BG_IMAGE_PATH}}`, Tagline → `{{TAGLINE}}` |
| Annonce / Lieu | Badge → `{{BADGE_TEXT}}`, Headline → `{{HEADLINE}}`, Body → `{{BODY_TEXT}}`, CTA → `{{CTA_TEXT}}`, Image → `{{BG_IMAGE_PATH}}`, Tagline → `{{TAGLINE}}` |
| Éducatif | Titre → `{{TITLE}}`, Chiffre → `{{FACT_NUMBER}}`, Unité → `{{FACT_UNIT}}`, Explication → `{{EXPLANATION}}`, VS données → `{{VS_*}}`, Image fond → `{{BG_IMAGE_PATH}}`, Image produit → `{{HERO_IMAGE_PATH}}` |

### 🔒 CHECKPOINT — Validation opérateur

**STOP ICI.** Afficher à l'opérateur un récap de TOUTES les stories du jour :

```
📋 CHECKPOINT — Stories [Semaine] [Jour]

Story 1 — [Titre] ([Type])
  Template : [template].html
  Mood : [cuivre/grenat/feuille] → class "[css-class]"
  Image : [discret/visible/hero] → class "[css-class]"
  Données : {{PLACEHOLDER}} → [valeur] (pour chaque)
  Images : BG → [chemin] | Hero → [chemin ou "—"]
  Status : ✅ Prêt à générer

Story 2 — [Titre] ([Type])
  Template : [template].html
  Mood : [cuivre/grenat/feuille] → class "[css-class]"
  Image : [discret/visible/hero] → class "[css-class]"
  Données : {{PLACEHOLDER}} → [valeur] (pour chaque)
  Status : ✅ Prêt à générer

Story 3 — Recap ([Type])
  Status : 📋 Semi-manuel (opérateur)

⚠️ Photos manquantes : [liste ou "aucune"]

✅ Valider et générer ?
✏️ Modifier (préciser quoi) ?
```

**Attendre la réponse de l'opérateur.** Ne PAS continuer sans validation explicite.

### ÉTAPE 3 — Template Fill + Render (par story automatisable)

Pour chaque story validée :

1. **Lire le template HTML** : `production/posts-stories/stories/_templates/[type].html`
2. **Lire `story-[NN]-data.md`** : récupérer la table placeholder → valeur
3. **Créer le HTML rempli** :
   - Copier le template
   - Remplacer `{{MOOD_CLASS}}` et `{{IMG_CLASS}}` dans le `<body>` par les classes CSS résolues à l'étape 1 (ex: `"mood-grenat"` et `"img-hero"`, ou `""` pour les defaults cuivre/visible)
   - Remplacer chaque `{{PLACEHOLDER}}` par sa valeur depuis data.md
   - Pour les blocs conditionnels (ex: `{{SHOW_VS}}`, `{{SHOW_BG}}`, `{{SHOW_CTA}}`, `{{SHOW_HERO}}`), mettre `flex` ou `block` si actif, `none` si inactif
   - **Résoudre les chemins relatifs** : les `src` vers `_base/base.css`, `_base/logo.svg`, et les images doivent être des **chemins absolus** (préfixe du chemin complet sur le disque) pour que Puppeteer puisse les charger en `file://`
   - Écrire le fichier dans `production/posts-stories/stories/[semaine]/[jour]/story-[NN].html`

4. **Rendre en PNG** :
   ```bash
   node production/posts-stories/stories/_scripts/render-story.js \
     --input production/posts-stories/stories/[semaine]/[jour]/story-[NN].html \
     --output production/posts-stories/stories/[semaine]/[jour]/story-[NN].png \
     --format both \
     --quality 92
   ```

5. Après toutes les stories du jour, afficher le résultat groupé :
   ```
   ✅ Stories générées — [semaine]/[jour]

   Story 01 (Teaser) :
     📄 story-01.html  📸 story-01.png  📸 story-01.jpg
   Story 02 (Fiche Produit) :
     📄 story-02.html  📸 story-02.png  📸 story-02.jpg

   📋 Semi-manuel :
     Story 03 (Recap) — repost meilleur post de la semaine

   → Vérifier les rendus avant publication.
   ```

### ÉTAPE FINALE — Génération document Demande Photos (si photos manquantes)

En fin de traitement d'une période (batch semaine), si des photos manquantes ont été identifiées à l'étape 1 :

1. Collecter toutes les photos manquantes (jour, story, type, cadrage souhaité, photo de référence proche)
2. Remplir le template `_templates/demande-photos.html` avec les données
3. Générer `stories/SX/demande-photos-SX.html`
4. Signaler dans le checkpoint : "Document demande photos généré — X photos à fournir"

Le document est client-facing : zéro jargon pipeline, checklist de cadrage simple, photo de référence en miniature.

> **Quand générer une demande photo ?** Uniquement quand la bibliothèque photo ne contient pas d'image adaptée au brief. Exemples : nouveau produit sans photo, angle spécifique non disponible, photo d'une nouvelle décoration. Ce n'est PAS lié au type de story — tout type peut avoir besoin d'une nouvelle photo.

---

## Mode batch — Semaine complète

Si l'opérateur demande une semaine entière (`S1`) :

1. Lister tous les jours dans `production/posts-stories/stories/S1/`
2. Pour chaque jour contenant un `brief-story.md` :
   - Exécuter les étapes 1→3 (toutes les stories du jour)
   - Collecter les résultats
3. Afficher un récap final groupé :
   ```
   📊 RÉCAP STORIES — S1

   | Jour | Story | Type | Status | Output |
   |------|-------|------|--------|--------|
   | lundi | #1 | Teaser | ✅ Généré | story-01.png |
   | lundi | #2 | Fiche Produit | ✅ Généré | story-02.png |
   | mercredi | #1 | Éducatif | ✅ Généré | story-01.png |
   | ... | ... | ... | ... | ... |

   Total : X stories générées / Y semi-manuelles
   ⚠️ Photos manquantes : [liste ou "aucune"]
   ```

## Résolution des chemins dans le HTML

Les templates utilisent des chemins relatifs (`_base/base.css`, `_base/logo.svg`). Lors du fill :

1. **CSS** : remplacer `href="_base/base.css"` par le chemin absolu vers `production/posts-stories/stories/_templates/_base/base.css`
2. **Logo** : remplacer `src="_base/logo.svg"` par le chemin absolu vers `production/posts-stories/stories/_templates/_base/logo.svg`
3. **Images** : résoudre `{{BG_IMAGE_PATH}}` et `{{HERO_IMAGE_PATH}}` en chemins absolus vers les fichiers dans `public/`
4. **Google Fonts** : laisser les liens CDN tels quels (Puppeteer les charge via réseau)

## Règles visuelles

### Sublimation texte

Les templates HTML intègrent un système de sublimation du texte validé sur la DA Dark Food Premium. Ces classes sont **déjà dans les templates** — le pipeline n'a rien à ajouter manuellement :

| Classe | Rôle | Où dans le template |
|--------|------|---------------------|
| `text-depth` | Ombre multi-couche lisibilité | Headlines (`annonce-headline`, `edu-title`, `question-text`, `teaser-hook`, `calories-number`) |
| `mark-tape` | Bande inclinée +1.5deg avec bordures accent | Body texte (`annonce-body`, `explanation`, `teaser-subtext`) |
| `filter: brightness(1.2)` | Boost couleur accent | Éléments `em` dans headlines, `.fact-number`, `.product-name`, `.calories-unit`, `.teaser-date`, `.vs-value.ours` |
| `filter: brightness(1.15)` | Boost badges | `.annonce-badge` |

**Ne PAS supprimer ces classes** lors du template fill. Elles font partie intégrante de l'identité visuelle.

### Backgrounds visibles

Les images de fond doivent être **lisibles**, pas noyées dans le noir. Les templates utilisent :
- `base.css` `.bg-image` : `opacity: var(--img-opacity)` (0.60 defaut) + `brightness(1.15)` — image contextuelle, zone haute droite
- `annonce.html` `.annonce-bg` : `opacity: 0.35` + `brightness(1.1)` — full-screen dimmed
- `teaser-post.html` `.teaser-bg` : `opacity: 0.4` + `blur(6px)` — ambiance floue

Si lors du fill une image apparaît trop sombre, **ajuster l'opacity dans le CSS inline du HTML rempli** (ex: `style="opacity: 0.6"`).

### Harmonisation couleur des images

Toutes les images (bg-image, hero-image, product-hero) partagent un **filtre warm commun** défini dans `base.css` :
```css
sepia(var(--img-sepia)) saturate(var(--img-saturate))  /* defaults: 0.12 / 0.90 */
```

Ce filtre tire toutes les images vers les tons chauds de la DA (cuivre/charbon), **même si les photos sources ont des teintes différentes**. Quand deux images sont combinées (dual-image), ce filtre commun garantit la cohérence chromatique.

**Si une story override le CSS inline** (ex: brightness ou opacity custom), toujours **conserver le `sepia(0.15) saturate(0.85)`** dans le filter — ne pas le retirer.

### Pattern dual-image (bg + product-hero)

Quand le brief le demande, une story peut combiner un fond contextuel ET un produit :
- **Zone haute** : `.bg-image` — photo contextuelle (cuisine, restaurant, extérieur)
- **Zone basse** : `.product-hero` — photo produit centrée, avec mask dégradé
- **Transition** : `.zone-blend` — gradient charbon + backdrop-blur qui fond la jonction

La transition utilise deux couches :
1. Un gradient opaque (charbon) qui masque le bord inférieur du bg et le bord supérieur du hero
2. Un `backdrop-filter: blur(6px)` (via `::after`) qui adoucit visuellement la jonction

Ce pattern est disponible dans `base.css` (classes `.product-hero` et `.zone-blend`). Le template `educatif.html` le supporte via `{{SHOW_HERO}}` et `{{HERO_IMAGE_PATH}}`.

**Ce pattern n'est PAS systématique.** Il répond à un besoin en fonction du concept de la story. L'utiliser uniquement quand le brief spécifie deux images ou quand le visuel a trop d'espace vide.

La deuxième image (`.product-hero`) peut être **n'importe quel type de photo** : produit, contexte, façade, cuisine, salle — selon ce qui est le plus pertinent pour le concept et l'espace à remplir.

**Exemples d'usage pertinent :**
- Éducatif "57% de gras en moins" avec air fryers (bg) + produit (hero) — le produit illustre le chiffre
- Annonce localisation avec intérieur (bg) + façade (hero) — deux angles complémentaires
- Fiche Produit (intégré nativement : bg-image + hero-image sont la même photo)

**Ne PAS l'utiliser si :**
- Une seule image suffit à remplir le visuel
- Le brief ne spécifie qu'une seule image
- Le focus est sur le texte, pas sur les images (teaser, annonce simple)

## Structure d'un jour

```
production/posts-stories/stories/S1/lundi/
  brief-story.md            ← Brief opérateur (toutes les stories du jour)
  story-01-data.md          ← Données Story 1 (généré par pipeline ou data-mapper)
  story-01.html             ← Template rempli Story 1
  story-01.png              ← Rendu final Story 1 (1080×1920)
  story-01.jpg              ← Rendu final Story 1 (compressé)
  story-02-data.md          ← Données Story 2
  story-02.html             ← Template rempli Story 2
  story-02.png              ← Rendu final Story 2
  story-02.jpg              ← Rendu final Story 2
```

## Correction photo — Alignement horizontal et lisibilité

Lors du template fill (étape 3), après le remplacement des placeholders :

### Rotation — Alignement horizontal

Si `{{PHOTO_ALIGN}}` ≠ `"—"` dans le data mapping :

1. **Vérifier `{{PHOTO_TRANSFORM}}`** dans `story-[NN]-data.md`
2. **Si valeur connue** (ex: `scale(1.30) translateX(40px) rotate(-0.7deg)`) → appliquer directement sur le `style` de l'`<img>` de fond : `transform: [valeur];`
3. **Si `none`** → rendre une première fois, évaluer visuellement, puis itérer par incréments de 0.3-0.5deg (négatif = anti-horaire) jusqu'à horizontalité. Compenser chaque rotation avec +0.05 de scale.
4. **Une fois la correction trouvée** → la reporter dans la table de corrections connues du `story-data-mapper.md` pour les prochaines utilisations.

### Lisibilité — Fond texturé avec texte informatif

Si la photo de fond est trop texturée/structurée (reflets vitrés, surfaces irrégulières) et que du texte informatif doit se superposer :

1. **Option Split (B2)** : scinder en zone photo haute (~50%) + zone sombre basse avec texte. Déplacer le logo en bas pour éviter le doublon si l'enseigne est visible dans la photo.
2. **Option Blur (A2)** : appliquer `filter: blur(8px)` sur l'image + gradient radial renforcé (0.95 bords).
3. **Choix** : proposer les deux options à l'opérateur au checkpoint.

### Centrage horizontal

Toujours vérifier que l'élément principal de la photo (enseigne, produit, plat) est centré horizontalement :
- Utiliser `object-position` en premier (ajuster le %)
- Compléter avec `translateX()` si insuffisant
- Critère : marges latérales gauche/droite visuellement équilibrées autour de l'élément central

## Règles non négociables

1. **Chaque story avec données produit passe par le story-data-mapper** — pas de résolution manuelle des données nutritionnelles.
2. **Un seul checkpoint** : après le data mapping. Le render s'enchaîne automatiquement.
3. **Ne JAMAIS modifier les templates HTML** dans `_templates/`. On copie, on remplace, on écrit dans le dossier de la story.
4. **Les chemins doivent être absolus** dans le HTML rempli pour que Puppeteer fonctionne.
5. **Les backgrounds doivent être visibles** — pas de fond noir uniforme. Si l'image est trop sombre, augmenter l'opacity.
6. **Vérifier que les fichiers image existent** avant de générer le HTML. Si image manquante → warning dans le checkpoint + entrée dans Demande Photos.
7. **Pas de vidéo** — le pipeline ne produit que des images statiques (PNG/JPG 1080×1920).

## Gestion d'erreurs

| Erreur | Action |
|--------|--------|
| Brief absent | STOP → demander création via template `_templates/brief-story.md` |
| Recette manquante | STOP → demander création de la fiche recette dans `_recettes/` |
| Donnée manquante dans data.md | WARN dans le checkpoint → opérateur décide |
| Image référencée introuvable | WARN dans le checkpoint + chercher alternative via Glob + entrée Demande Photos |
| Template HTML manquant | STOP → vérifier `_templates/` |
| Puppeteer fail | Afficher l'erreur → vérifier les chemins absolus et les fonts |
