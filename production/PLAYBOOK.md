# Playbook Production Instagram — StrictFood

> Ce document te guide pas à pas en fonction de **ce que tu veux faire**.
> Commence par la question qui correspond à ton besoin, suis les étapes.

---

## Sommaire rapide

| Je veux... | Aller à |
|------------|---------|
| Planifier une semaine de contenu | [1. Planifier une semaine](#1-planifier-une-semaine) |
| Créer un post Instagram | [2. Créer un post](#2-créer-un-post) |
| Créer des stories Instagram | [3. Créer des stories](#3-créer-des-stories) |
| Savoir quel mode choisir pour un post | [4. Choisir le bon mode](#4-choisir-le-bon-mode-de-création) |
| Savoir quel type de story utiliser | [5. Choisir le type de story](#5-choisir-le-type-de-story) |
| Comprendre comment fonctionne le pipeline | [6. Comprendre le système](#6-comprendre-le-système) |

---

## 1. Planifier une semaine

> **Quand** : Chaque semaine, avant de créer les briefs.
> **Durée** : 15-20 min.
> **Pourquoi** : Sans planning, on fait 100% de food porn. Le planning force la variété des piliers, des modes et des stories.

### Étapes

**1.1** Demande à Claude :

```
Créons le planning de la semaine S[X] (du [date] au [date]).
```

Claude va créer le fichier à partir du template `_templates/planning-semaine.md`. Tu remplis ensemble :

**1.2** Distribuer les **posts** (3-4/semaine) :

Pour chaque post, décider :
- **Quel jour** publier
- **Quel pilier** (voir [grille piliers](#les-5-piliers))
- **Quel mode** de création (voir [arbre de décision mode](#4-choisir-le-bon-mode-de-création))
- **Quel produit ou sujet**

**1.3** Distribuer les **stories** (3-4/jour) :

Pour chaque jour, prévoir :
- Au moins **1 Vitrine** (fiche produit ou focus ingrédient) + **1 Dark Premium**
- Un **Teaser** avant chaque jour de publication post
- Max **3 Interactifs** sur la semaine
- Les **photos IRL** nécessaires (à prendre AVANT la semaine)

**1.4** Vérifier la distribution piliers en bas du planning.

**1.5** Valider le planning. Tu es prêt à rédiger les briefs.

### Les 5 piliers

| Pilier | Part | Ce que c'est | Exemples |
|--------|------|--------------|----------|
| **Le Plat** | 35% | Food porn premium, hero shots produits | Burger DA, close-up texture, carrousel carte |
| **La Cuisine** | 25% | Coulisses, process, fournisseurs | Romain qui assemble, arrivage ingrédients, grill en action |
| **Les Macros** | 18% | Nutrition, éducation, comparaisons | Infographie macros, "notre burger vs Big Mac", tips |
| **L'Équipe** | 15% | Portraits, storytelling, humain | Romain/Dorian en situation, anecdote du jour |
| **Le Quartier** | 7% | Communauté, local, partenaires | Client qui tagge, partenaire mis en avant, Perpignan |

> La distribution exacte par semaine peut varier. C'est la **moyenne mensuelle** qui compte. Sur 4 semaines, chaque pilier doit apparaître au moins une fois.

---

## 2. Créer un post

> **Prérequis** : Le planning de la semaine est validé.

### Étape par étape

**2.1** Dis à Claude ce que tu veux faire. Exemples :

```
Créons le brief du post de lundi (2026-03-24), STRICT Max Bœuf en full-ia.
```

```
J'ai une photo de Romain en cuisine, je veux en faire un post "La Cuisine" en irl-sublimation.
```

```
Je veux faire un carrousel comparaison macros notre burger vs Big Mac.
```

Claude va créer le dossier et le brief v3. Tu remplis ensemble les champs.

**2.2** Ce que tu fournis dépend du mode :

| Mode | Ce que tu dois préparer | Ce que le pipeline fait |
|------|------------------------|------------------------|
| `full-ia` | Juste le produit + slug | Tout : art direction, photo, prompt, image IA, caption |
| `irl-sublimation` | La photo réelle + ce que tu veux améliorer | Sublime la photo pour aligner DA + caption |
| `compositing-irl` | 2 photos (produit + lieu) + comment les mixer | Compose les 2 photos + caption |
| `compositing-ia` | Photo produit + description de la scène imaginée | Crée la scène IA autour du produit + caption |
| `template` | Les données de chaque slide | Génère les slides HTML + caption |

**2.3** Pour la **Direction Caption**, tu donnes :
- L'**angle** (l'idée principale — ex: "générosité double steak")
- Le **ton** (direct, chaleureux, provocateur, éducatif, storytelling)
- Le **CTA** (tag un pote, viens goûter, lien en bio, aucun)
- Si tu veux mentionner le **prix**, les **macros**, les **fournisseurs**

> Tu ne rédiges PAS la caption. Le skill `/caption-writer` la génère après l'image en analysant visuellement ce qu'il voit.

**2.4** Lance le pipeline :

```
/instagram-producer 2026-03-24
```

**2.5** Valide le checkpoint quand il s'affiche, puis vérifie l'image et la caption.

---

## 3. Créer des stories

> **Prérequis** : Le planning de la semaine indique les stories par jour.

### Story par story ou batch semaine

**Option A — Un jour à la fois** :

```
Créons les stories de lundi S3, puis /story-producer S3 lundi
```

**Option B — Toute la semaine d'un coup** :

```
/story-producer S3
```

### Étape par étape

**3.1** Rédiger le brief story du jour (ou demander à Claude de le rédiger à partir du planning).

**3.2** Le pipeline enchaîne automatiquement :
1. Le **copywriter** (Sonnet) réécrit les textes pour plus de punch
2. Le **data mapper** (Haiku) résout les données (macros, prix, photos)
3. **Template fill** : remplace les placeholders dans le HTML
4. **Puppeteer** : rend le HTML en PNG 1080x1920

**3.3** Tu valides au checkpoint (toutes les stories du jour affichées d'un coup).

**3.4** Tu vérifies les PNG générés.

---

## 4. Choisir le bon mode de création

> **Utilise cet arbre de décision** quand tu rédiges le planning ou le brief d'un post.

```
Tu as des photos réelles du sujet ?
│
├── NON → Le sujet est un produit de la carte ?
│         │
│         ├── OUI → MODE: full-ia
│         │         (Gemini génère le produit + la scène)
│         │
│         └── NON → C'est un contenu data/macros/infographie ?
│                   │
│                   ├── OUI → MODE: template
│                   │         (Carrousel HTML, infographie, comparaison)
│                   │
│                   └── NON → MODE: full-ia
│                             (Scène imaginée par l'IA)
│
└── OUI → Tu veux mixer la photo avec un lieu réel ?
          │
          ├── OUI → MODE: compositing-irl
          │         (Photo produit + photo salle/devanture → GPT Images mixe les deux)
          │
          └── NON → Tu veux placer le produit dans une scène imaginée ?
                    │
                    ├── OUI → MODE: compositing-ia
                    │         (Photo produit réelle + scène IA Gemini)
                    │
                    └── NON → MODE: irl-sublimation
                              (Photo réelle sublimée pour aligner avec la DA)
```

### Exemples concrets

| Je veux publier... | Mode | Pourquoi |
|---------------------|------|----------|
| Un hero shot du STRICT Bœuf, food porn | `full-ia` | Pas besoin de photo réelle, Gemini gère |
| Une photo de Romain qui assemble un burger | `irl-sublimation` | Photo réelle + retouche DA |
| Le burger posé sur le comptoir du restaurant | `compositing-irl` | Photo burger + photo comptoir → mix |
| Le burger dans une cuisine industrielle dramatique | `compositing-ia` | Photo burger réelle + scène IA |
| Un carrousel "notre burger vs Big Mac" en chiffres | `template` | Infographie HTML, pas de photo IA |
| Un portrait de Dorian devant la devanture | `compositing-irl` | Photo portrait + photo devanture → mix |
| L'arrivage du pain artisanal du matin | `irl-sublimation` | Photo brute sublimée |
| Un nouveau produit pas encore photographié | `full-ia` | Gemini imagine le produit |

### Résumé des modes

| Mode | Input photos | API | Résultat |
|------|-------------|-----|----------|
| `full-ia` | Aucune (résolu auto) | Gemini 4K | Image 100% IA |
| `irl-sublimation` | 1 photo réelle | GPT Images | Photo retouchée DA |
| `compositing-irl` | 2 photos réelles | GPT Images | Montage réaliste |
| `compositing-ia` | 1 photo réelle | Gemini 4K | Photo dans scène IA |
| `template` | Optionnelles | Aucune (Puppeteer) | Infographie/carrousel |

---

## 5. Choisir le type de story

> **Utilise ce guide** quand tu planifies les stories dans le planning semaine.

### Arbre de décision

```
C'est un jour de publication post ?
│
├── OUI → Story 1 : TEASER (teaser-post.html)
│         "Créer l'anticipation pour le post à venir"
│         │
│         └── + Story 2 : FICHE PRODUIT du produit du post (produit-vitrine.html)
│             "Donner les macros et le prix"
│
└── NON → (continuer ci-dessous)

Tu veux montrer un contenu authentique/coulisses ?
│
├── OUI → IRL (irl-story.html)
│         "Photo brute avec overlay DA minimal"
│
└── NON → (continuer)

Tu veux éduquer ou comparer ?
│
├── OUI → ÉDUCATIF (educatif.html)
│         "Chiffre clé + explication + comparaison VS"
│         │
│         └── Besoin de plusieurs stories pour expliquer ? → SÉQUENCE (1/N, 2/N...)
│
└── NON → (continuer)

Tu veux engager l'audience (vote, quiz) ?
│
├── OUI → INTERACTIF (interactif.html) ⚠️ Max 3/semaine
│         "Sondage, quiz, slider, question ouverte"
│
└── NON → (continuer)

Tu veux mettre en avant un ingrédient/fournisseur ?
│
├── OUI → FOCUS INGRÉDIENT (focus-ingredient.html)
│         "Artisan + fait clé + dans quel produit"
│
└── NON → (continuer)

Tu veux annoncer quelque chose (horaires, nouveau produit, lieu) ?
│
├── OUI → ANNONCE (annonce.html)
│         "Badge + headline + body + CTA"
│
└── NON → FICHE PRODUIT d'un produit pas encore couvert (produit-vitrine.html)
```

### Récap des types

| Type | Famille | Quand | Fréquence |
|------|---------|-------|-----------|
| **Teaser** | Dark Premium | Avant chaque post | 3-4/semaine |
| **Fiche Produit** | Vitrine | Après un post produit, ou standalone | 4-5/semaine |
| **Interactif** | Dark Premium | Engagement, fun | Max 3/semaine |
| **Éducatif** | Dark Premium | Nutrition, process, tips | 2-3/semaine |
| **Focus Ingrédient** | Vitrine | Fournisseurs, qualité | 1-2/semaine |
| **Annonce** | Dark Premium | Nouveautés, horaires, lieu | 1-2/semaine |
| **IRL** | Dark Premium | Coulisses, rush, ambiance | 2-3/semaine |
| **Séquence** | Variable | Process en étapes, avant/après | 1/semaine max |
| **Recap** | Semi-manuel | Meilleur post de la semaine | 1/semaine |

### Règles de mix quotidien

- **Minimum** : 1 Vitrine + 1 Dark Premium par jour
- **Idéal** : 3-4 stories/jour
- **Maximum** : 5-7 stories/jour (ne pas noyer le viewer)
- Les Teasers sont toujours **avant** le post
- Les Fiches Produit sont **après** le post (ou standalone les jours sans post)

---

## 6. Comprendre le système

### Architecture globale

```
                    PLANNING SEMAINE
                    (planning-SX.md)
                          │
              ┌───────────┼───────────┐
              ▼                       ▼
         POSTS (brief-v3.md)    STORIES (brief-story.md)
              │                       │
              ▼                       ▼
    /instagram-producer         /story-producer
              │                       │
     ┌────┬───┼───┬────┐        ┌─────┼─────┐
     ▼    ▼   ▼   ▼    ▼        ▼     ▼     ▼
   full  irl  c-  c-  templ   copy   data  template
   -ia   sub  irl  ia  ate    write  map    fill
     │    │    │   │    │        │     │     │
     ▼    ▼    ▼   ▼    ▼        └─────┼─────┘
     IMAGE PRODUITE (03-output/)       ▼
              │                   STORY PNG (1080×1920)
              ▼
      /caption-writer
              │
              ▼
     CAPTION (04-caption/)
```

### Fichiers clés

| Fichier | Rôle | Quand le consulter |
|---------|------|-------------------|
| `PLAYBOOK.md` | **Ce fichier** — guide pas à pas | Toujours, c'est le point d'entrée |
| `CLAUDE.md` | Statut pipeline + référence technique | Pour voir l'avancement des posts |
| `_templates/planning-semaine.md` | Template planning | Pour créer un planning |
| `_templates/brief-v3.md` | Template brief post | Pour créer un brief post |
| `_templates/brief-story.md` | Template brief story | Pour créer un brief story |
| `_config/pipeline.md` | Config modes, DA, modèles | Pour comprendre un mode |
| `_config/photo-references.md` | Catalogue photos existantes | Pour choisir une photo |
| `_config/brand-props.md` | Accessoires marque | Pour savoir quels props inclure |
| `_recettes/[slug].md` | Fiches produit | Pour les données d'un produit |
| `strategie/instagram-strategie.md` | Stratégie Instagram | Pour la vision d'ensemble |

### Commandes

| Commande | Ce qu'elle fait |
|----------|----------------|
| `/instagram-producer YYYY-MM-DD` | Lance le pipeline post (détecte le mode automatiquement) |
| `/story-producer S[X] [jour]` | Lance le pipeline story pour un jour |
| `/story-producer S[X]` | Lance le pipeline story pour toute la semaine |

### Dossiers de travail

```
production/posts-stories/
├── posts/periode-1/
│   ├── planning-S1.md          ← Planning semaine
│   ├── S1/
│   │   └── 2026-03-10/
│   │       ├── 00-brief/       ← Ton brief
│   │       ├── 00-input/       ← Mapping auto
│   │       ├── 01-art-direction/ ← Direction créative (full-ia, compositing-ia)
│   │       ├── 02-prompt/      ← Prompt image (full-ia, compositing-ia)
│   │       ├── 03-output/      ← Image(s) finale(s)
│   │       └── 04-caption/     ← Caption générée
│   └── S2/
│       └── ...
└── stories/
    ├── S1/
    │   ├── lundi/
    │   │   ├── brief-story.md  ← Ton brief stories du jour
    │   │   ├── story-01.html   ← HTML rempli
    │   │   ├── story-01.png    ← PNG final
    │   │   └── ...
    │   ├── mardi/
    │   └── ...
    └── S2/
```

---

## Annexes

### A. Checklist avant publication d'un post

- [ ] L'image est fidèle au produit (ingrédients corrects, proportions réalistes)
- [ ] La DA est respectée (fond charbon, tons cuivre braisé, pas de couleur parasite)
- [ ] Pas d'artefacts IA visibles (mains, textures, logos déformés)
- [ ] La caption a un hook fort en première ligne
- [ ] Le ton est cohérent avec le pilier
- [ ] Les données (prix, macros) sont correctes si mentionnées
- [ ] Les hashtags sont pertinents (mix local + niche + marque)
- [ ] Le post ne fait pas doublon avec un récent (angle, produit, hook)

### B. Checklist avant publication d'une story

- [ ] Les textes sont dans la zone safe (pas sous le username ni la barre de réponse)
- [ ] Le fond n'est pas un bloc noir vide (surtout le tiers inférieur)
- [ ] Le logo n'est pas en doublon avec l'enseigne visible dans la photo
- [ ] Les photos utilisent le bon produit (pain noir, pas pain blanc)
- [ ] Les données nutritionnelles correspondent à la fiche recette
- [ ] Le jour alterne bien Vitrine et Dark Premium

### C. Glossaire

| Terme | Définition |
|-------|------------|
| **Brief** | Document qui décrit ce que tu veux produire (post ou story) |
| **Mode** | La méthode de création visuelle (full-ia, irl-sublimation, compositing-irl, compositing-ia, template) |
| **Pilier** | La catégorie éditoriale du post (Le Plat, La Cuisine, Les Macros, L'Équipe, Le Quartier) |
| **DA** | Direction Artistique — le style visuel "Dark Food Premium" |
| **Checkpoint** | Le moment où le pipeline s'arrête pour que tu valides avant de continuer |
| **Direction Caption** | Les instructions pour la génération automatique de la caption (angle, ton, CTA) |
| **Sublimation** | Retouche IA d'une photo réelle pour l'aligner avec la DA |
| **Compositing** | Fusion de 2 images (produit + lieu ou produit + scène IA) |
| **Template** | Modèle HTML paramétré, rempli avec des données et rendu en image par Puppeteer |
| **Dark Premium** | Famille visuelle stories : fond charbon, tons sombres, contenu informatif |
| **Vitrine** | Famille visuelle stories : fond gradient coloré, produit lumineux en hero |
| **Séquence** | Multi-stories liées (1/3, 2/3, 3/3) pour raconter un process ou comparer |
| **IRL** | Story à partir d'une photo brute avec overlay DA minimal |
| **Food Porn Dial** | Curseur 0-10 qui contrôle le niveau de "food porn" dans le visuel |
