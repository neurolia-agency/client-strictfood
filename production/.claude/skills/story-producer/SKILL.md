---
name: story-producer
description: >
  Orchestrateur du pipeline de production de stories Instagram StrictFood. Enchaîne automatiquement
  les 4 étapes — brief → copywriting → data mapping → template fill + render — pour produire des stories 1080×1920
  prêtes à publier. Pipeline léger comparé aux posts (pas d'art direction ni de génération IA).
  Triggers : "produis la story", "lance le pipeline story", "story producer", "génère la story",
  "produis les stories de la semaine".
---

# Story Producer — Orchestrateur Pipeline Stories

Tu es l'orchestrateur du pipeline de production de stories Instagram StrictFood. Tu enchaînes **automatiquement** les 4 étapes pour chaque story, de manière séquentielle.

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
5. Le catalogue `production/_config/brand-props.md` existe (utilisé par le data mapper pour l'identité physique de marque)

Si le brief n'existe pas → STOP, demander à l'opérateur de créer le brief (template : `production/_templates/brief-story.md`).

## Étape 0 — Contexte stratégique (avant toute exécution)

Lire `strategie/strategie-globale.md` (chemin depuis la racine du projet) pour :
- Identifier le **pilier éditorial** du jour (Food Porn, Éducation, Confiance, Engagement)
- Vérifier la **cohérence** du brief avec le calendrier thématique de la semaine
- S'assurer que le **ton et les objectifs** du brief alignent avec la stratégie globale

Si incohérence détectée → WARN à l'opérateur avant de continuer (ex: "Le brief mardi est un Teaser mais la stratégie prévoit un pilier Éducation ce jour-là").

## Types de stories et templates

Deux familles visuelles coexistent pour varier la dynamique du feed stories :

### Templates Dark Premium (fond charbon, tons sombres)

| Type | Template HTML | Pipeline |
|------|---------------|----------|
| Teaser | `teaser-post.html` | Oui |
| Interactif | `interactif.html` | Oui |
| Éducatif | `educatif.html` | Oui |
| Annonce | `annonce.html` | Oui |
| Lieu / Ambiance | `annonce.html` | Oui |

### Templates Vitrine (fond gradient coloré, produit/ingrédient lumineux en hero)

| Type | Template HTML | Pipeline |
|------|---------------|----------|
| Fiche Produit | `produit-vitrine.html` | Oui |
| Focus Ingrédient | `focus-ingredient.html` | Oui |

### Semi-manuel

| Type | Template HTML | Pipeline |
|------|---------------|----------|
| Récap | — (repost) | Semi-manuel (opérateur) |

> **Objectif de variation** : chaque jour devrait contenir au moins 1 story Vitrine et 1 story Dark Premium pour casser la monotonie visuelle. Le brief doit le planifier.

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
   - **Type** : Fiche Produit / Teaser / Interactif / Éducatif / Annonce / Lieu / Ambiance / Focus Ingrédient / Récap
   - **Produit** (si applicable) : slug recette
   - **Ingrédient** (si Focus Ingrédient) : nom + artisan
   - **Template HTML** correspondant (voir table ci-dessus)
   - **Images** : BG_IMAGE_PATH et/ou HERO_IMAGE_PATH
   - **Brand props** (optionnel) : ID du prop depuis `_config/brand-props.md` ou `"auto"` (défaut) ou `"aucun"`. Résolu à l'étape 2 par le data mapper.
   - **Mood** et **Image** (visibilité) — résolution en cascade :
     1. Champ `Mood` / `Image` de la story (prioritaire)
     2. Section `## Contraintes` du brief (fallback jour)
     3. Defaults par type (fallback ultime) :
        | Type | Mood defaut | Image defaut |
        |------|-------------|--------------|
        | Fiche Produit | cuivre | hero |
        | Focus Ingrédient | feuille | hero |
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
5. Pour chaque story automatisable → passer à l'étape 1b

### ÉTAPE 1b — Copywriting (par story automatisable)

**OBLIGATOIRE.** Chaque story passe par l'agent copywriter avant le data mapping.

Pour chaque story automatisable :

1. **SPAWNER L'AGENT** via le Agent tool :
   ```
   Agent: story-copywriter
   subagent_type: (utiliser le fichier production/posts-stories/stories/.claude/agents/story-copywriter.md)
   Prompt: "Réécris les textes de la Story [N] dans production/posts-stories/stories/[semaine]/[jour]/brief-story.md.
   Contexte jour : Pilier=[pilier], Persona=[persona], Objectif=[objectif stratégique]."
   model: sonnet
   ```

2. L'agent retourne les champs textuels réécrits. **Intégrer les textes réécrits** dans le flux — c'est la version copywriter qui sera utilisée pour le data mapping, pas le brief brut.

3. En cas de doute sur une réécriture, conserver le texte original et signaler au checkpoint.

> **Pourquoi cette étape ?** Le brief opérateur contient le fond (bon) mais pas la forme (souvent redondant, banal). Le copywriter transforme "Demain, on casse les codes" + label "Bientot" + date "Demain" en textes sans redondance et plus impactants.

### ÉTAPE 2 — Data Mapping (par story automatisable)

Pour chaque story automatisable identifiée à l'étape 1 :

**Si la story référence un produit (Fiche Produit, certains Éducatifs) :**

1. **SPAWNER L'AGENT** via le Agent tool :
   ```
   Agent: story-data-mapper
   subagent_type: (utiliser le fichier production/posts-stories/stories/.claude/agents/story-data-mapper.md)
   Prompt: "Résous les données pour la Story [N] dans production/posts-stories/stories/[semaine]/[jour]/brief-story.md. Brand props: [valeur du champ Brand props du brief — 'auto' si absent]."
   model: haiku
   ```
   L'agent lit le brief, consulte `_recettes/[slug].md`, `_config/photo-references.md` et `_config/brand-props.md`, et écrit `story-[NN]-data.md` dans le même dossier (ex: `story-01-data.md`).

2. **Fusionner les textes copywriter** : remplacer les valeurs textuelles dans le data.md par les versions réécrites du copywriter (étape 1b).

3. Après écriture, vérifier :
   - Tous les placeholders du template sont couverts
   - Aucune `⚠️ DONNÉE MANQUANTE`

**Si pas de produit référencé** (Teaser, Interactif sans données produit, Annonce, Lieu) :
→ Construire le `story-[NN]-data.md` directement depuis le brief **avec les textes réécrits par le copywriter**. Mapper les champs vers les placeholders du template :

| Type | Champs brief → Placeholders |
|------|------------------------------|
| Teaser | Label → `{{TEASER_LABEL}}`, Hook → `{{TEASER_HOOK}}`, Date → `{{TEASER_DATE}}`, Sous-texte → `{{TEASER_SUBTEXT}}`, Image → `{{BG_IMAGE_PATH}}` |
| Interactif | Question → `{{QUESTION}}`, Option A → `{{OPTION_A}}`, Emoji A → `{{OPTION_A_EMOJI}}`, Option B → `{{OPTION_B}}`, Emoji B → `{{OPTION_B_EMOJI}}`, Image → `{{BG_IMAGE_PATH}}`, Tagline → `{{TAGLINE}}` |
| Annonce / Lieu | Badge → `{{BADGE_TEXT}}`, Headline → `{{HEADLINE}}`, Body → `{{BODY_TEXT}}`, CTA → `{{CTA_TEXT}}`, Image → `{{BG_IMAGE_PATH}}`, Tagline → `{{TAGLINE}}` |
| Éducatif | Titre → `{{TITLE}}`, Chiffre → `{{FACT_NUMBER}}`, Unité → `{{FACT_UNIT}}`, Explication → `{{EXPLANATION}}`, VS données → `{{VS_*}}`, Image fond → `{{BG_IMAGE_PATH}}`, Image produit → `{{HERO_IMAGE_PATH}}` |
| Fiche Produit (Vitrine) | Produit → `{{PRODUCT_NAME}}`, Accroche → `{{PRODUCT_SUBTITLE}}`, Macro star → `{{MACRO_STAR_VALUE}}` + `{{MACRO_STAR_UNIT}}`, Badge → `{{BADGE_TEXT}}`, Prix → `{{PRICE}}`, Image hero → `{{HERO_IMAGE_PATH}}`, Tagline → `{{TAGLINE}}` |
| Focus Ingrédient | Ingrédient → `{{INGREDIENT_NAME}}`, Artisan → `{{ARTISAN_NAME}}`, Localité → `{{ARTISAN_LOCALITY}}`, Fait clé → `{{KEY_FACT}}`, Dans le → `{{IN_PRODUCT}}`, Image → `{{HERO_IMAGE_PATH}}`, Tagline → `{{TAGLINE}}` |

### 🔒 CHECKPOINT — Validation opérateur

**STOP ICI.** Afficher à l'opérateur un récap de TOUTES les stories du jour :

```
📋 CHECKPOINT — Stories [Semaine] [Jour]

Story 1 — [Titre] ([Type]) [DARK PREMIUM / VITRINE]
  Template : [template].html
  Mood : [cuivre/grenat/feuille] → class "[css-class]"
  Image : [discret/visible/hero] → class "[css-class]"
  Brand prop : [ID prop — ex: "wrapper-burger (variante A)" / "aucun"]
  Données : {{PLACEHOLDER}} → [valeur] (pour chaque)
  Copywriter : [résumé des changements textuels — ex: "Hook raccourci, label changé en EXCLU"]
  Images : BG → [chemin] | Hero → [chemin ou "—"]
  Status : ✅ Prêt à générer

Story 2 — [Titre] ([Type]) [DARK PREMIUM / VITRINE]
  Template : [template].html
  ...

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

5. **Contrôle anti-vide bas** : après chaque render, **ouvrir le PNG** et vérifier visuellement le tiers inférieur (zone en dessous de ~1280px). Si cette zone est majoritairement noire/charbon sans texte, image, ou élément visuel (hors tagline bottom) :
   - **Dark Premium** : vérifier que `.bg-image` couvre assez bas, que l'`ambient-bottom` (glow accent) est visible, et que le `margin-top: auto` dans le template a bien redistribué le contenu. Si le bas reste vide → ajuster `object-position` de l'image pour descendre le sujet, ou activer le pattern dual-image (`SHOW_HERO = block`) avec une photo complémentaire.
   - **Vitrine** : normalement pas d'issue (info-zone couvre le bas). Si quand même vide → descendre la hero-zone ou augmenter le padding de l'info-zone.
   - **Signaler au checkpoint** : `⚠️ Zone basse vide détectée sur Story [N] — [action corrective prise]`

6. Après toutes les stories du jour, afficher le résultat groupé :
   ```
   ✅ Stories générées — [semaine]/[jour]

   Story 01 (Teaser) [DARK PREMIUM] :
     📄 story-01.html  📸 story-01.png  📸 story-01.jpg
   Story 02 (Fiche Produit) [VITRINE] :
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

   | Jour | Story | Type | Style | Status | Output |
   |------|-------|------|-------|--------|--------|
   | lundi | #1 | Teaser | Dark | ✅ Généré | story-01.png |
   | lundi | #2 | Fiche Produit | Vitrine | ✅ Généré | story-02.png |
   | mardi | #1 | Focus Ingrédient | Vitrine | ✅ Généré | story-01.png |
   | mardi | #2 | Éducatif | Dark | ✅ Généré | story-02.png |
   | ... | ... | ... | ... | ... | ... |

   Total : X stories générées / Y semi-manuelles
   Variation : X Vitrine / Y Dark Premium
   ⚠️ Photos manquantes : [liste ou "aucune"]
   ```

## Résolution des chemins dans le HTML

Les templates utilisent des chemins relatifs (`_base/base.css`, `_base/logo.svg`). Lors du fill :

1. **CSS** : remplacer `href="_base/base.css"` par le chemin absolu vers `production/posts-stories/stories/_templates/_base/base.css`
2. **Logo** : remplacer `src="_base/logo.svg"` par le chemin absolu vers `production/posts-stories/stories/_templates/_base/logo.svg`
3. **Images** : résoudre `{{BG_IMAGE_PATH}}` et `{{HERO_IMAGE_PATH}}` en chemins absolus vers les fichiers dans `public/`
4. **Google Fonts** : laisser les liens CDN tels quels (Puppeteer les charge via réseau)

## Règles visuelles

### Deux familles de templates

| Famille | Templates | Fond | Produit/Image | Usage |
|---------|-----------|------|---------------|-------|
| **Dark Premium** | teaser, éducatif, interactif, annonce | Charbon #141210 | Background dimmed, flou | Information, éducation, suspense |
| **Vitrine** | produit-vitrine, focus-ingredient | Gradient coloré chaud | Hero lumineux, sans filtre sepia | Appétit, désir, showcase |

### Sublimation texte (Dark Premium)

Les templates Dark Premium intègrent un système de sublimation du texte validé sur la DA. Ces classes sont **déjà dans les templates** — le pipeline n'a rien à ajouter manuellement :

| Classe | Rôle | Où dans le template |
|--------|------|---------------------|
| `text-depth` | Ombre multi-couche lisibilité | Headlines (`annonce-headline`, `edu-title`, `question-text`, `teaser-hook`, `calories-number`) |
| `mark-tape` | Bande inclinée +1.5deg avec bordures accent | Body texte (`annonce-body`, `explanation`, `teaser-subtext`) |
| `filter: brightness(1.2)` | Boost couleur accent | Éléments `em` dans headlines, `.fact-number`, `.product-name`, `.calories-unit`, `.teaser-date`, `.vs-value.ours` |
| `filter: brightness(1.15)` | Boost badges | `.annonce-badge` |

**Ne PAS supprimer ces classes** lors du template fill. Elles font partie intégrante de l'identité visuelle.

### Vitrine — règles spécifiques

Les templates Vitrine ont leur propre système visuel :
- **Pas de sepia/desaturation** sur l'image hero — le produit doit être vibrant et appétissant
- **Fond gradient** coloré selon le mood (cuivre chaud / grenat / feuille)
- **Drop-shadow** prononcé sur l'image hero pour la profondeur
- **Panel bottom** avec backdrop-blur pour le texte, assurant la lisibilité sur le gradient
- **Macro star** mise en avant (le chiffre qui vend le produit)

### Backgrounds visibles (Dark Premium)

Les images de fond doivent être **lisibles**, pas noyées dans le noir. Les templates utilisent :
- `base.css` `.bg-image` : `opacity: var(--img-opacity)` (0.60 defaut) + `brightness(1.15)` — image contextuelle, zone haute droite
- `annonce.html` `.annonce-bg` : `opacity: 0.35` + `brightness(1.1)` — full-screen dimmed
- `teaser-post.html` `.teaser-bg` : `opacity: 0.4` + `blur(6px)` — ambiance floue

Si lors du fill une image apparaît trop sombre, **ajuster l'opacity dans le CSS inline du HTML rempli** (ex: `style="opacity: 0.6"`).

### Harmonisation couleur des images (Dark Premium uniquement)

Les templates Dark Premium partagent un **filtre warm commun** défini dans `base.css` :
```css
sepia(var(--img-sepia)) saturate(var(--img-saturate))  /* defaults: 0.12 / 0.90 */
```

Ce filtre tire toutes les images vers les tons chauds de la DA (cuivre/charbon). **Les templates Vitrine n'utilisent PAS ce filtre** — les images y sont naturelles et vibrantes.

### Pattern dual-image (bg + product-hero) — Dark Premium

Quand le brief le demande, une story Dark Premium peut combiner un fond contextuel ET un produit :
- **Zone haute** : `.bg-image` — photo contextuelle (cuisine, restaurant, extérieur)
- **Zone basse** : `.product-hero` — photo produit centrée, avec mask dégradé
- **Transition** : `.zone-blend` — gradient charbon + backdrop-blur qui fond la jonction

Ce pattern est disponible dans `base.css` (classes `.product-hero` et `.zone-blend`). Le template `educatif.html` le supporte via `{{SHOW_HERO}}` et `{{HERO_IMAGE_PATH}}`.

**Ce pattern n'est PAS systématique.** L'utiliser uniquement quand le brief spécifie deux images.

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

### Lisibilité — Fond texturé avec texte informatif (Dark Premium uniquement)

Si la photo de fond est trop texturée/structurée (reflets vitrés, surfaces irrégulières) et que du texte informatif doit se superposer :

1. **Option Split (B2)** : scinder en zone photo haute (~50%) + zone sombre basse avec texte. Déplacer le logo en bas pour éviter le doublon si l'enseigne est visible dans la photo.
2. **Option Blur (A2)** : appliquer `filter: blur(8px)` sur l'image + gradient radial renforcé (0.95 bords).
3. **Choix** : proposer les deux options à l'opérateur au checkpoint.

### Centrage horizontal

Toujours vérifier que l'élément principal de la photo (enseigne, produit, plat) est centré horizontalement :
- Utiliser `object-position` en premier (ajuster le %)
- Compléter avec `translateX()` si insuffisant
- Critère : marges latérales gauche/droite visuellement équilibrées autour de l'élément central

## Instagram Safe Zones (1080x1920)

Les templates intègrent ces valeurs via les variables CSS `--safe-top` et `--safe-bottom`. Lors du template fill, **ne jamais réduire ces marges**.

| Zone | Pixels | Variable CSS | Contenu Instagram superposé |
|------|--------|-------------|----------------------------|
| Haut | 250px (y:0→250) | `--safe-top` | Username, photo profil, timestamp, bouton X |
| Bas | 250px (y:1670→1920) | `--safe-bottom` | Barre "Envoyer un message", réactions, partage |
| Côtés | 65px | `--safe-side` | Marge device cropping |

**Zone safe pour le contenu** : 950px × 1420px (de y:250 à y:1670, avec 65px de marge latérale).

- Les **images de fond** PEUVENT déborder dans les zones IG (elles sont décoratives)
- Les **textes, logos, CTA, chiffres** doivent rester DANS la zone safe
- Si un élément est trop proche d'une limite au checkpoint → signaler `⚠️ SAFE ZONE — [élément] à [N]px du bord [haut/bas]`

## Règles non négociables

0. **Pain noir obligatoire** — tous les burgers StrictFood sont au pain noir (black bun). Aucune photo de burger au pain blanc ne doit apparaître dans une story. Si détecté au checkpoint → bloquer et demander remplacement.
1. **Chaque story passe par le story-copywriter** — pas de texte brut du brief dans le rendu final.
2. **Chaque story avec données produit passe par le story-data-mapper** — pas de résolution manuelle des données nutritionnelles.
3. **Un seul checkpoint** : après le data mapping + copywriting. Le render s'enchaîne automatiquement.
4. **Ne JAMAIS modifier les templates HTML** dans `_templates/`. On copie, on remplace, on écrit dans le dossier de la story.
5. **Les chemins doivent être absolus** dans le HTML rempli pour que Puppeteer fonctionne.
6. **Les backgrounds doivent être visibles** — pas de fond noir uniforme (Dark Premium) ou gradient trop sombre (Vitrine).
7. **Vérifier que les fichiers image existent** avant de générer le HTML. Si image manquante → warning dans le checkpoint + entrée dans Demande Photos.
8. **Pas de vidéo** — le pipeline ne produit que des images statiques (PNG/JPG 1080×1920).
9. **Variation quotidienne** — signaler à l'opérateur si un jour n'a que des stories Dark Premium sans aucune Vitrine.

## Gestion d'erreurs

| Erreur | Action |
|--------|--------|
| Brief absent | STOP → demander création via template `_templates/brief-story.md` |
| Recette manquante | STOP → demander création de la fiche recette dans `_recettes/` |
| Donnée manquante dans data.md | WARN dans le checkpoint → opérateur décide |
| Image référencée introuvable | WARN dans le checkpoint + chercher alternative via Glob + entrée Demande Photos |
| Template HTML manquant | STOP → vérifier `_templates/` |
| Puppeteer fail | Afficher l'erreur → vérifier les chemins absolus et les fonts |
| Jour sans story Vitrine | WARN → suggérer remplacement d'une Fiche Produit ou ajout Focus Ingrédient |
