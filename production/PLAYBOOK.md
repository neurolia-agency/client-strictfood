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

Claude crée le fichier, applique les règles de distribution automatiquement, et te propose un planning équilibré. Tu ajustes et valides.

### Ce que le planning décide

| Dimension | Décidé dans le planning | Tu n'as plus à y penser après |
|-----------|------------------------|-------------------------------|
| **Piliers** | Quel pilier pour chaque post | Distribution équilibrée sur le mois |
| **Modes posts** | Quel mode pour chaque post | Variété garantie (jamais 2x le même consécutif) |
| **Modes stories** | Quel mode pour chaque story | Mix template + IRL + sublimation + compositing |
| **Types stories** | Quel type (teaser, fiche, éducatif...) | Alternance Dark Premium / Vitrine |
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
- Alternance Vitrine / Dark Premium quotidienne

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
/instagram-producer 2026-03-24
```

**2.2** Claude lit le planning, crée le brief v3 avec le mode déjà défini, et lance le pipeline adapté. Tu n'as rien à décider sur le mode — c'est fait.

**2.3** Ce que tu fournis dépend du mode (décidé au planning) :

| Mode | Ce que tu dois préparer |
|------|------------------------|
| `full-ia` | Rien de plus. Produit et slug suffisent. |
| `irl-sublimation` | Fournir la photo réelle |
| `compositing-irl` | Fournir 2 photos (produit + lieu) |
| `compositing-ia` | Fournir la photo produit |
| `template` | Valider les données des slides |

**2.4** Valide le checkpoint, puis vérifie l'image et la caption générée.

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

> Les stories non-template (`irl-sublimation`, `compositing-irl`, `full-ia`) produisent une image plein cadre. Un overlay léger (logo + texte optionnel) est ajouté via le template `irl-story.html`.

### Tu valides au checkpoint, puis vérifies les PNG.

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
Un client a posté un avis incroyable, je veux faire un post "Le Quartier" avec un visuel full-ia.
```

```
Il fait beau, Romain est devant la devanture, on compose un portrait pour Instagram.
```

Le pipeline crée le dossier dans `posts-stories/posts/hors-planning/YYYY-MM-DD/` et exécute normalement. Le post est tagué hors-planning et n'affecte pas les compteurs de distribution du planning.

### Story hors planning

```
J'ai une photo de l'arrivage de ce matin, fais-moi une story IRL avec.
```

```
On a un événement ce soir, crée une story annonce vite.
```

Le pipeline crée dans `posts-stories/stories/hors-planning/YYYY-MM-DD/`.

### Invoquer un agent directement

Tu peux aussi appeler n'importe quel skill ou agent de la chaîne indépendamment :

| Tu veux... | Commande / Demande |
|------------|-------------------|
| Juste sublimer une photo | `/nano-banana-pro` ou demande une sublimation GPT Images |
| Juste générer une caption | `/caption-writer` sur une image existante |
| Juste créer une art direction | `/social-media-art-director` |
| Juste un prompt image | `/image-prompt-engineer` |
| Juste rendre un template story | `/story-producer` sur un brief ponctuel |
| Générer une variante produit | Invoke l'agent `product-variant-generator` |

> Hors planning = liberté totale. Aucune contrainte de mode ou de pilier. Tu fais ce que tu veux, quand tu veux.

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
| `full-ia` | Visuels food porn élaborés, nouveau produit sans photo, scènes impossible à shooter | Hero shot burger vapeur dramatique, dessert lévitation |
| `irl-sublimation` | Authenticité + qualité DA, contenu humain, coulisses | Romain qui assemble, arrivage ingrédients, portrait équipe |
| `compositing-irl` | Produit in situ sans shooting studio | Burger sur comptoir, tenders devant la devanture |
| `compositing-ia` | Ambiance cinématique autour d'un vrai produit | Burger dans cuisine industrielle vapeur, produit extérieur nuit |
| `template` | Données chiffrées, comparaisons, éducation | Carrousel macros, "nous vs classique", tips nutrition |

### Distribution cible

**Posts (mensuelle)** : full-ia 30% · irl-sublimation 25% · compositing-irl 20% · compositing-ia 15% · template 10%

**Stories (hebdo)** : template 50% · irl 20% · irl-sublimation 15% · compositing-irl 10% · full-ia 5%

---

## 6. Les types de stories

> Le type est décidé **dans le planning**, en même temps que le mode.

### Type × Mode — Combinaisons possibles

Chaque type de story peut utiliser différents modes. Le planning choisit la combinaison.

| Type | Modes possibles | Mode par défaut |
|------|----------------|-----------------|
| Teaser | template, full-ia | template |
| Fiche Produit | template, irl-sublimation | template |
| Focus Ingrédient | template, irl-sublimation | template |
| Éducatif | template | template |
| Interactif | template | template |
| Annonce | template, full-ia | template |
| IRL | irl | irl |
| Séquence | template, irl-sublimation | template |
| Produit DA | irl-sublimation, compositing-irl, compositing-ia, full-ia | irl-sublimation |
| Produit en situation | compositing-irl, compositing-ia | compositing-irl |
| Visuel IA | full-ia | full-ia |
| Recap | — (semi-manuel) | — |

> **Produit DA**, **Produit en situation** et **Visuel IA** sont de nouveaux types de stories visuelles (pas template). Ils produisent une image plein cadre avec overlay logo optionnel.

### Familles visuelles

| Famille | Templates / Modes | Fond | Contenu |
|---------|------------------|------|---------|
| **Dark Premium** | template (éducatif, interactif, annonce, teaser), irl | Charbon | Information, engagement |
| **Vitrine** | template (fiche produit, focus ingrédient) | Gradient coloré | Appétit, showcase |
| **Visuel plein cadre** | irl-sublimation, compositing-irl, compositing-ia, full-ia | Image plein cadre | Impact visuel |

### Fréquences

| Type | Par semaine |
|------|------------|
| Teaser | 3-4 (1 par jour de post) |
| Fiche Produit | 4-5 |
| IRL | 4-5 |
| Éducatif | 2-3 |
| Focus Ingrédient | 1-2 |
| Interactif | 2-3 (max 3) |
| Annonce | 1-2 |
| Produit DA / en situation / Visuel IA | 3-5 (mix des stories visuelles) |
| Séquence | 0-1 |
| Recap | 1 |

---

## 7. Comprendre le système

### Architecture globale

```
           ┌─────────────────────────────────┐
           │      PLANNING SEMAINE           │
           │  (piliers + modes + types)       │
           │  Toutes les décisions ici.       │
           └──────────┬──────────────────────┘
                      │
         ┌────────────┼────────────┐
         ▼                         ▼
    POSTS                     STORIES
  (brief-v3.md)           (brief-story.md)
    mode = X                 mode = X
         │                         │
         ▼                         ▼
  /instagram-producer       /story-producer
    route par mode            route par mode
         │                         │
    ┌────┼────┐              ┌─────┼─────┐
    ▼    ▼    ▼              ▼     ▼     ▼
  full  irl  comp          templ  irl   visual
  -ia   sub  osit          ate    brut  (sub/comp/ia)
    │    │    │              │     │     │
    ▼    ▼    ▼              ▼     ▼     ▼
  IMAGE PRODUITE          STORY PNG (1080×1920)
         │
         ▼
  /caption-writer
         │
         ▼
    CAPTION
```

```
           ┌─────────────────────────────────┐
           │      HORS PLANNING              │
           │  Liberté totale.                 │
           │  Tout agent invocable à la carte.│
           └──────────┬──────────────────────┘
                      │
              N'importe quel skill/agent
              → posts-stories/[type]/hors-planning/
```

### Fichiers clés

| Fichier | Rôle |
|---------|------|
| `PLAYBOOK.md` | **Ce fichier** — point d'entrée, guide par intention |
| `CLAUDE.md` | Statut pipeline + référence technique |
| `_templates/planning-semaine.md` | Template planning (règles de distribution intégrées) |
| `_templates/brief-v3.md` | Template brief post |
| `_templates/brief-story.md` | Template brief story |
| `_config/pipeline.md` | Config modes, DA, modèles |
| `_config/photo-references.md` | Catalogue photos existantes |
| `_config/brand-props.md` | Accessoires marque |
| `_recettes/[slug].md` | Fiches produit |

### Commandes

| Commande | Ce qu'elle fait |
|----------|----------------|
| `/instagram-producer YYYY-MM-DD` | Produit un post (mode lu depuis le brief) |
| `/story-producer S[X] [jour]` | Produit les stories d'un jour |
| `/story-producer S[X]` | Produit toutes les stories de la semaine |

### Dossiers

```
production/posts-stories/
├── posts/
│   ├── periode-1/
│   │   ├── planning-S1.md
│   │   ├── S1/2026-03-10/...
│   │   └── S2/2026-03-17/...
│   └── hors-planning/             ← Posts spontanés
│       └── YYYY-MM-DD/...
└── stories/
    ├── S1/lundi/...
    ├── S2/mardi/...
    └── hors-planning/             ← Stories spontanées
        └── YYYY-MM-DD/...
```

---

## Annexes

### A. Checklist post

- [ ] Image fidèle au produit
- [ ] DA respectée
- [ ] Pas d'artefacts IA
- [ ] Caption avec hook fort
- [ ] Hashtags pertinents
- [ ] Pas de doublon avec un post récent

### B. Checklist story

- [ ] Textes dans la zone safe Instagram
- [ ] Pas de zone basse vide
- [ ] Pas de doublon logo
- [ ] Bon produit (pain noir)
- [ ] Mix Vitrine / Dark Premium / Visuel sur la journée

### C. Glossaire

| Terme | Définition |
|-------|------------|
| **Planning** | Document hebdomadaire qui décide piliers, modes et types pour chaque contenu |
| **Mode** | Méthode de création visuelle (full-ia, irl-sublimation, compositing-irl, compositing-ia, template) |
| **Pilier** | Catégorie éditoriale (Le Plat, La Cuisine, Les Macros, L'Équipe, Le Quartier) |
| **Hors planning** | Contenu spontané créé en dehors du planning, sans contrainte de distribution |
| **DA** | Direction Artistique "Dark Food Premium" |
| **Template** | Modèle HTML paramétré rendu en image par Puppeteer |
| **Sublimation** | Retouche IA d'une photo réelle pour aligner avec la DA |
| **Compositing** | Fusion de 2 images en un montage réaliste |
| **Vitrine** | Famille visuelle : fond gradient coloré, produit lumineux |
| **Dark Premium** | Famille visuelle : fond charbon, contenu informatif |
| **Visuel plein cadre** | Story non-template : image générée/sublimée en 1080×1920 |
