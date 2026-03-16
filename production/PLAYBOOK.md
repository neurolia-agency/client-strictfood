# Playbook Production Instagram — StrictFood

> Ce document te guide pas à pas en fonction de **ce que tu veux faire**.
> Commence par la question qui correspond à ton besoin, suis les étapes.

---

## Sommaire rapide

| Je veux... | Aller à |
|------------|---------|
| Planifier une semaine de contenu | [1. Planifier une semaine](#1-planifier-une-semaine) |
| Produire un post prévu au planning | [2. Produire un post](#2-produire-un-post) |
| Produire les stories d'un jour/semaine | [3. Produire des stories](#3-produire-des-stories) |
| Créer un post ou une story hors planning (idée spontanée) | [4. Production hors planning](#4-production-hors-planning) |
| Comprendre les modes de création | [5. Les modes de création](#5-les-modes-de-création) |
| Comprendre les types de stories | [6. Les types de stories](#6-les-types-de-stories) |
| Comprendre comment le système fonctionne | [7. Comprendre le système](#7-comprendre-le-système) |

---

## 1. Planifier une semaine

> **Quand** : Chaque semaine, avant de créer les briefs.
> **Durée** : 15-20 min avec Claude.
> **Pourquoi** : Le planning décide de TOUT — piliers, modes, types de stories. Pas de décision à prendre post-planning.

### Comment faire

```
Créons le planning de la semaine S[X] (du [date] au [date]).
```

Claude commence par **scanner les dossiers de production** pour régénérer l'historique (`_config/historique-production.md`). L'historique reflète exactement ce qui existe sur le disque :
- Un post qui a un PNG dans `final/` = il existe
- Un post dont le PNG est supprimé = il disparaît de l'historique
- Même logique pour les stories (`story-NN/final/`)

Claude analyse ensuite **posts ET stories** ensemble (symbiose) : produits, piliers, modes en retard, puis propose un planning qui compense les manques et évite les doublons.

### Ce que le planning décide

| Dimension | Décidé dans le planning | Tu n'as plus à y penser après |
|-----------|------------------------|-------------------------------|
| **Piliers** | Quel pilier pour chaque post | Distribution équilibrée sur le mois |
| **Modes posts** | Quel mode pour chaque post | Variété garantie (jamais 2x le même consécutif) |
| **Modes stories** | Quel mode pour chaque story | Mix template + IRL + sublimation + compositing |
| **Types stories** | Quel type (fiche, éducatif, interactif...) | Alternance des familles visuelles |
| **Symbiose** | Les stories complètent les posts, pas de doublon sujet/photo | Cohérence automatique |
| **Anti-doublons** | Quels produits/piliers/modes sont en retard | Compensation basée sur l'historique |
| **Photos IRL** | Quelles photos prendre cette semaine | Liste claire pour Romain/Dorian |

### Règles de distribution (appliquées automatiquement)

**Posts** :
- Jamais 2 posts consécutifs avec le même mode
- Au moins 3 modes différents par semaine
- Au moins 3 piliers différents par semaine

**Stories** :
- Chaque jour a au moins 2 modes différents
- Au moins 1 story non-template par jour (IRL, sublimation, compositing ou full-ia)
- Max 3 interactifs par semaine

**Symbiose posts ↔ stories** :
- Les jours de post, les stories complètent le post (fiche produit, éducatif lié, IRL coulisses)
- Un produit couvert en post ne refait pas une fiche produit story la même semaine (sauf jour du post)
- Les photos utilisées en post ne sont pas réutilisées en story la même semaine

### Les 5 piliers

| Pilier | Cible mois | Ce que c'est |
|--------|------------|--------------|
| **Le Plat** | 35% | Food porn premium, hero shots produits |
| **La Cuisine** | 25% | Coulisses, process, fournisseurs |
| **Les Macros** | 18% | Nutrition, éducation, comparaisons |
| **L'Équipe** | 15% | Portraits, storytelling, humain |
| **Le Quartier** | 7% | Communauté, local, partenaires |

---

## 2. Produire un post

> **Prérequis** : Le planning de la semaine est validé. Le mode est déjà décidé.

### Étape par étape

**2.1** Dis à Claude :

```
Produis le post du [jour] [date].
```

ou directement :

```
/instagram-producer 24-03-2026
```

**2.2** Claude scanne l'historique (posts + stories), lit le planning, crée le brief v3 avec le mode déjà défini, et lance le pipeline adapté.

**2.3** Ce que tu fournis dépend du mode (décidé au planning) :

| Mode | Ce que tu dois préparer |
|------|------------------------|
| `full-ia` | Rien de plus. Produit et slug suffisent. |
| `irl-sublimation` | Fournir la photo réelle |
| `compositing-irl` | Fournir 2 photos (produit + lieu) |
| `compositing-ia` | Fournir la photo produit |
| `template` | Valider les données des slides |

**2.4** Valide le checkpoint, puis vérifie l'image et la caption générée.

**2.5** Le résultat final atterrit dans `final/` — c'est ce PNG qui sera tracé dans l'historique.

---

## 3. Produire des stories

> **Prérequis** : Le planning de la semaine est validé. Les modes de chaque story sont déjà décidés.

### Un jour ou toute la semaine

```
/story-producer S3 lundi        # Un jour
/story-producer S3              # Toute la semaine
```

### Ce qui se passe selon le mode de la story

| Mode story | Ce que le pipeline fait |
|------------|------------------------|
| `template` | Copywriter → Data Mapper → Template HTML → Puppeteer → PNG |
| `irl` | Photo brute → `irl-story.html` overlay DA minimal → Puppeteer → PNG |
| `irl-sublimation` | Photo → Sublimation GPT Images (format 9:16) → PNG |
| `compositing-irl` | 2 photos → Compositing GPT Images (format 9:16) → PNG |
| `full-ia` | Prompt → Gemini (format 9:16) → PNG |

> Les stories non-template (`irl-sublimation`, `compositing-irl`, `full-ia`) produisent une image plein cadre. Un overlay léger (logo + texte optionnel) est ajouté via `irl-story.html`.

### Templates rigides

Chaque template a un **cadre fixe** avec des positions absolues et des **limites de caractères** par zone (voir `_templates/SPECS.md`). Le pipeline vérifie automatiquement avant le render :
- Texte respecte la limite de caractères
- Preset photo assigné (ex: `photo-centre`, `photo-droite`)
- Force de gradient assignée (ex: `gradient-medium`, `gradient-strong`)

Si une violation est détectée, le pipeline s'arrête et demande une correction.

### Tu valides au checkpoint, puis vérifies les PNG dans `story-NN/final/`.

---

## 4. Production hors planning

> **Quand** : Tu as une idée spontanée, une action ponctuelle, une actualité, un contenu opportuniste.
> **Principe** : Tu invoques directement l'agent ou le skill que tu veux, sans passer par le planning.

### Post hors planning

```
Je veux créer un post hors planning : [décris ce que tu veux]
```

Exemples :

```
J'ai une super photo du burger de ce midi, je veux en faire un post IRL-sublimation maintenant.
```

```
Il fait beau, Romain est devant la devanture, on compose un portrait pour Instagram.
```

Le pipeline crée le dossier dans `posts-stories/posts/hors-planning/DD-MM-YYYY/` avec la structure standard (brief/, production/, brouillons/, final/).

### Story hors planning

```
J'ai une photo de l'arrivage de ce matin, fais-moi une story IRL avec.
```

Le pipeline crée dans `posts-stories/stories/hors-planning/DD-MM-YYYY/`.

### Invoquer un agent directement

| Tu veux... | Commande / Demande |
|------------|-------------------|
| Juste sublimer une photo | `/nano-banana-pro` ou demande une sublimation GPT Images |
| Juste générer une caption | `/caption-writer` sur une image existante |
| Juste créer une art direction | `/social-media-art-director` |
| Juste un prompt image | `/image-prompt-engineer` |
| Juste rendre un template story | `/story-producer` sur un brief ponctuel |
| Générer une variante produit | Invoke l'agent `product-variant-generator` |

> Hors planning = liberté totale. Aucune contrainte de mode ou de pilier. Tu fais ce que tu veux, quand tu veux. Le contenu apparaîtra dans l'historique au prochain scan.

---

## 5. Les modes de création

> Les modes sont décidés **dans le planning**. Ce qui suit est une référence pour comprendre chaque mode.

### Les 5 modes

| Mode | En une phrase | Input | API | Output |
|------|---------------|-------|-----|--------|
| `full-ia` | L'IA imagine tout | Aucune photo | Gemini 4K | Image 100% IA |
| `irl-sublimation` | Photo réelle embellie DA | 1 photo réelle | GPT Images | Photo retouchée |
| `compositing-irl` | 2 photos réelles fusionnées | 2 photos réelles | GPT Images | Montage réaliste |
| `compositing-ia` | Produit réel dans scène imaginée | 1 photo réelle | Gemini 4K | Photo dans scène IA |
| `template` | Infographie / carrousel HTML | Données | Puppeteer | Slides PNG |

### Quand chaque mode brille

| Mode | Le plus efficace pour | Exemples |
|------|----------------------|----------|
| `full-ia` | Visuels food porn élaborés, nouveau produit sans photo, scènes impossibles | Hero shot burger vapeur dramatique, dessert lévitation |
| `irl-sublimation` | Authenticité + qualité DA, contenu humain, coulisses | Romain qui assemble, arrivage ingrédients, portrait équipe |
| `compositing-irl` | Produit immergé dans le lieu réel | Burger sur comptoir, tenders devant la devanture |
| `compositing-ia` | Ambiance cinématique autour d'un vrai produit | Burger dans cuisine industrielle vapeur, extérieur nuit |
| `template` | Données chiffrées, comparaisons, éducation | Carrousel macros, "nous vs classique", tips nutrition |

### Distribution cible

**Posts (mensuelle)** : full-ia 30% · irl-sublimation 25% · compositing-irl 20% · compositing-ia 15% · template 10%

**Stories (hebdo)** : template 50% · irl 20% · irl-sublimation 15% · compositing-irl 10% · full-ia 5%

---

## 6. Les types de stories

> Le type est décidé **dans le planning**, en même temps que le mode.

### Type × Mode — Combinaisons possibles

| Type | Modes possibles | Mode par défaut |
|------|----------------|-----------------|
| Fiche Produit | template, irl-sublimation | template |
| Focus Ingrédient | template, irl-sublimation | template |
| Éducatif | template | template |
| Interactif | template | template |
| Annonce | template, full-ia | template |
| IRL | irl | irl |
| Process | template (process.html) | template |
| Séquence | template, irl-sublimation | template |
| Produit DA | irl-sublimation, compositing-irl, compositing-ia, full-ia | irl-sublimation |
| Produit en situation | compositing-irl, compositing-ia | compositing-irl |
| Visuel IA | full-ia | full-ia |
| Recap | — (semi-manuel) | — |

### Templates HTML

| Template | Types | Cadre |
|----------|-------|-------|
| `vitrine.html` | Fiche Produit (variante produit) + Focus Ingrédient (variante composant) | Photo hero haut 1080px + info zone bas |
| `educatif.html` | Éducatif | Gros chiffre + explication + VS, positions Y fixes |
| `interactif.html` | Interactif | Question + zone sticker, mode Single ou VS |
| `annonce.html` | Annonce, Lieu | Centré, badge + headline + body + CTA |
| `irl-story.html` | IRL + overlay stories visuelles | Photo plein cadre + overlay DA minimal |
| `process.html` | Process | Split avant/après avec bande séparation DA |

> Tous les templates ont des **cadres rigides** avec positions absolues et **limites de caractères** par zone. Voir `_templates/SPECS.md`.

### Familles visuelles

| Famille | Types / Modes | Fond |
|---------|--------------|------|
| **Dark Premium** | template (éducatif, interactif, annonce), irl | Charbon |
| **Vitrine** | template (fiche produit, focus ingrédient) | Gradient coloré |
| **Visuel plein cadre** | irl-sublimation, compositing-irl, compositing-ia, full-ia | Image plein cadre |

### Fréquences

| Type | Par semaine |
|------|------------|
| Fiche Produit | 4-5 |
| IRL | 4-5 |
| Éducatif | 2-3 |
| Focus Ingrédient | 1-2 |
| Interactif | 2-3 (max 3) |
| Annonce | 1-2 |
| Process | 0-1 |
| Produit DA / en situation / Visuel IA | 3-5 |
| Séquence | 0-1 |
| Recap | 1 |

---

## 7. Comprendre le système

### Architecture globale

```
   HISTORIQUE                PLANNING SEMAINE
   (scan disque)    ──→     (piliers + modes + types)
        ↑                         │
        │            ┌────────────┼────────────┐
        │            ▼                         ▼
        │       POSTS                     STORIES
        │     (brief-v3.md)           (brief-story.md)
        │       mode = X                 mode = X
        │            │                         │
        │            ▼                         ▼
        │     /instagram-producer       /story-producer
        │       route par mode            route par mode
        │            │                         │
        │       ┌────┼────┐              ┌─────┼─────┐
        │       ▼    ▼    ▼              ▼     ▼     ▼
        │     full  irl  comp          templ  irl   visual
        │     -ia   sub  osit          ate    brut  (sub/comp/ia)
        │       │    │    │              │     │     │
        │       ▼    ▼    ▼              ▼     ▼     ▼
        │     final/*.png             story-NN/final/story.png
        │       │
        │       ▼
        │   /caption-writer
        │       │
        │       ▼
        └── production/caption.md
```

```
           ┌─────────────────────────────────┐
           │      HORS PLANNING              │
           │  Liberté totale.                 │
           │  Tout agent invocable à la carte.│
           └──────────┬──────────────────────┘
                      │
              N'importe quel skill/agent
              → posts-stories/[type]/hors-planning/DD-MM-YYYY/
```

### Structure des dossiers (unifiée posts + stories)

```
production/posts-stories/
├── posts/
│   ├── periode-1/
│   │   ├── planning-S1.md
│   │   └── S1/
│   │       └── 10-03-2026/           ← Post
│   │           ├── brief/
│   │           │   └── brief.md
│   │           ├── production/
│   │           │   ├── input.md
│   │           │   ├── art-direction.md
│   │           │   ├── prompt.md
│   │           │   └── caption.md
│   │           ├── brouillons/
│   │           │   └── v1.png
│   │           └── final/
│   │               └── post.png       ← Tracé dans l'historique
│   └── hors-planning/
│       └── DD-MM-YYYY/
│           └── (même structure)
└── stories/
    ├── S1/
    │   └── lundi/
    │       ├── brief/
    │       │   └── brief-story.md     ← Brief du jour
    │       ├── story-01/
    │       │   ├── production/
    │       │   │   ├── data.md
    │       │   │   └── story.html
    │       │   ├── brouillons/
    │       │   └── final/
    │       │       └── story.png      ← Tracé dans l'historique
    │       └── story-02/
    │           └── (même structure)
    └── hors-planning/
        └── DD-MM-YYYY/
            └── (même structure)
```

> **Règle historique** : un contenu existe = `final/` contient un PNG. Pas de PNG = pas dans l'historique.

### Fichiers clés

| Fichier | Rôle |
|---------|------|
| `PLAYBOOK.md` | **Ce fichier** — point d'entrée, guide par intention |
| `CLAUDE.md` | Statut pipeline + référence technique |
| `_templates/planning-semaine.md` | Template planning (distribution + symbiose + historique) |
| `_templates/brief-v3.md` | Template brief post |
| `_templates/brief-story.md` | Template brief story |
| `_templates/SPECS.md` | **Spécifications templates** — limites caractères, presets photo, gradients |
| `_config/pipeline.md` | Config modes, DA, modèles |
| `_config/historique-production.md` | **GÉNÉRÉ par scan** — reflet du disque |
| `_config/photo-references.md` | Catalogue photos existantes |
| `_config/brand-props.md` | Accessoires marque |
| `_recettes/[slug].md` | Fiches produit |

### Commandes

| Commande | Ce qu'elle fait |
|----------|----------------|
| `/instagram-producer DD-MM-YYYY` | Produit un post (mode lu depuis le brief) |
| `/story-producer S[X] [jour]` | Produit les stories d'un jour |
| `/story-producer S[X]` | Produit toutes les stories de la semaine |
| `Régénère l'historique de production` | Scanne les dossiers et réécrit l'historique |

---

## Annexes

### A. Checklist post

- [ ] Image fidèle au produit
- [ ] DA respectée
- [ ] Pas d'artefacts IA
- [ ] Caption avec hook fort
- [ ] Hashtags pertinents
- [ ] Pas de doublon avec un post récent
- [ ] PNG dans `final/` (pour le tracking historique)

### B. Checklist story

- [ ] Textes dans la zone safe Instagram
- [ ] Textes respectent les limites de caractères (SPECS.md)
- [ ] Preset photo et force gradient assignés
- [ ] Pas de zone basse vide
- [ ] Pas de doublon logo
- [ ] Bon produit (pain noir)
- [ ] Mix des familles visuelles sur la journée
- [ ] PNG dans `story-NN/final/` (pour le tracking historique)

### C. Glossaire

| Terme | Définition |
|-------|------------|
| **Planning** | Document hebdomadaire qui décide piliers, modes et types pour chaque contenu |
| **Mode** | Méthode de création visuelle (full-ia, irl-sublimation, compositing-irl, compositing-ia, template) |
| **Pilier** | Catégorie éditoriale (Le Plat, La Cuisine, Les Macros, L'Équipe, Le Quartier) |
| **Hors planning** | Contenu spontané créé en dehors du planning, sans contrainte de distribution |
| **Symbiose** | Les posts et stories se complètent mutuellement, pas de doublon sujet/photo |
| **Historique** | Fichier généré par scan des dossiers — reflète ce qui existe sur le disque |
| **DA** | Direction Artistique "Dark Food Premium" |
| **Template** | Modèle HTML paramétré, cadre rigide, rendu en image par Puppeteer |
| **SPECS** | Spécifications des templates — limites caractères, presets photo, forces gradient |
| **Sublimation** | Retouche IA d'une photo réelle pour aligner avec la DA |
| **Compositing** | Fusion de 2 images en un montage réaliste |
| **Vitrine** | Famille visuelle / template unifié : fond gradient coloré, produit lumineux |
| **Dark Premium** | Famille visuelle : fond charbon, contenu informatif |
| **Visuel plein cadre** | Story non-template : image générée/sublimée en 1080×1920 |
| **Preset photo** | Classe CSS qui positionne la photo (photo-centre, photo-droite, etc.) |
| **Force gradient** | Classe CSS qui contrôle l'opacité des overlays (gradient-light/medium/strong) |
