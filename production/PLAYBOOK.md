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
| Comprendre les concepts visuels et le système de briques | [5.5 Concepts visuels et système de briques](#55-concepts-visuels-et-système-de-briques) |
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
| **Modes stories** | Quel mode pour chaque story | Mix IRL + sublimation + compositing + full-ia (plus de templates) |
| **Types stories** | Quel type (fiche, éducatif, interactif...) | Alternance des familles visuelles |
| **Symbiose** | Les stories complètent les posts, pas de doublon sujet/photo | Cohérence automatique |
| **Anti-doublons** | Quels produits/piliers/modes sont en retard | Compensation basée sur l'historique |
| **Photos IRL** | Quelles photos prendre cette semaine | Liste claire pour Romain/Dorian |
| **Concepts visuels IRL** | Quels concepts assignés aux IRL et moments | Cohérence visuelle, inspiration, liberté créative |

### Règles de distribution (appliquées automatiquement)

**Posts** :
- Jamais 2 posts consécutifs avec le même mode
- Au moins 3 modes différents par semaine
- Au moins 3 piliers différents par semaine

**Stories** :
- Chaque jour a au moins 2 modes différents
- **Au moins 2 stories non-template par jour** (IRL, sublimation, compositing ou full-ia)
- **Au moins 2 IRL moments par jour** (photos réelles brutes ou sublimées)
- **Max 1 produit hero par semaine**
- **Max 1 éducatif par semaine**
- Max 3 interactifs par semaine

**Symbiose posts ↔ stories** :
- Les jours de post, les stories complètent le post (produit hero, éducatif lié, IRL coulisses)
- Un produit couvert en post ne refait pas une produit hero story la même semaine (sauf jour du post)
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

**2.4** Valide le checkpoint, puis vérifie le **brouillon** généré dans `brouillons/`.

**2.5** Le premier visuel atterrit dans `brouillons/` — tu peux demander des modifications et itérer. Quand tu es satisfait, demande la promotion vers `final/`. C'est le PNG dans `final/` qui sera tracé dans l'historique et prêt à poster.

**2.6** La caption est générée automatiquement **après** la promotion en `final/`.

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

### Audit realisme obligatoire

**AVANT toute génération IA** (modes `full-ia`, `compositing-ia`, `irl-sublimation`, `compositing-irl`) :

```
/realism-audit
```

Le Realism Auditor vérifie les contraintes physiques du prompt (éclairage, proportions, physique des matériaux, matière de la nourriture). Il propose des ajustements AVANT la génération, puis audit à NOUVEAU le visuel généré APRÈS.

**Le mode `template` n'est PAS soumis à cet audit** (pas de génération IA).

### Templates rigides

Chaque template a un **cadre fixe** avec des positions absolues et des **limites de caractères** par zone (voir `_templates/SPECS.md`). Le pipeline vérifie automatiquement avant le render :
- Texte respecte la limite de caractères
- Preset photo assigné (ex: `photo-centre`, `photo-droite`)
- Force de gradient assignée (ex: `gradient-medium`, `gradient-strong`)

Si une violation est détectée, le pipeline s'arrête et demande une correction.

### Tu valides au checkpoint, puis vérifies les **brouillons** dans `story-NN/brouillons/`. Quand tu es satisfait, demande la promotion vers `story-NN/final/`.

---

## 4. Production hors planning

> **Quand** : Tu as une idée spontanée, une action ponctuelle, une actualité, un contenu opportuniste.
> **Principe** : Liberté totale. Aucune contrainte de mode ou de pilier. Tu décris ce que tu veux, Claude route vers le bon process.
> **Dossier** : `posts-stories/posts/hors-planning/DD-MM-YYYY/` ou `stories/hors-planning/DD-MM-YYYY/`

### Process par mode — ce que tu dis, ce qui se passe

#### Mode `irl` (photo brute → story avec overlay)

```
"J'ai une photo du rush de ce midi, fais-moi une story."
```

| Étape | Ce qui se passe | Toi |
|-------|----------------|-----|
| 1 | Tu fournis la photo | Envoie le fichier ou le chemin |
| 2 | Claude insère la photo dans `irl-story.html` (plein cadre) | — |
| 3 | Overlay automatique : gradient bas + tagline + logo | — |
| 4 | Puppeteer rend le PNG → `brouillons/story.png` | Tu vérifies |
| 5 | Promotion → `final/story.png` | Tu valides |

> **Pas de Realism Auditor** — c'est une photo réelle, pas d'IA.
> **Le réel prime** : si la photo est bonne, on l'utilise telle quelle. Pas besoin qu'elle corresponde à un concept.

---

#### Mode `irl-sublimation` (photo réelle sublimée par IA)

```
"J'ai cette photo du Strict Bœuf, sublime-la pour Instagram."
```

| Étape | Ce qui se passe | Toi |
|-------|----------------|-----|
| 1 | Tu fournis la photo source | Envoie le fichier |
| 2 | **[PRE]** `/realism-audit` mode sublimation → contraintes fidélité, préservation, lumière | Automatique |
| 3 | Claude rédige le prompt de sublimation (enhance éclairage, contraste, saturation — PAS de transformation) | — |
| 4 | **[POST]** `/realism-audit` → audit du prompt → corrections | Automatique |
| 5 | GPT Images génère la version sublimée → `brouillons/` | Tu vérifies |
| 6 | Si story : overlay via `irl-story.html` (tagline + logo) → render Puppeteer | Automatique |
| 7 | Promotion → `final/` | Tu valides |
| 8 | `/caption-writer` analyse l'image finale → `caption.md` | Automatique |

> **Risques audités** : GPT qui réinvente l'environnement, déforme le produit, change les couleurs.

---

#### Mode `compositing-irl` (2 photos réelles fusionnées)

```
"J'ai une photo du burger et une photo du comptoir, fusionne-les."
```

| Étape | Ce qui se passe | Toi |
|-------|----------------|-----|
| 1 | Tu fournis 2 photos : produit + lieu | Envoie les 2 fichiers |
| 2 | **[PRE]** `/realism-audit` mode compositing → analyse lumière croisée, échelle, perspective | Automatique |
| 3 | Claude rédige le prompt de compositing (scale, ombres, edges, température couleur) | — |
| 4 | **[POST]** `/realism-audit` → audit du prompt → corrections | Automatique |
| 5 | GPT Images génère le compositing → `brouillons/` | Tu vérifies |
| 6 | Si story : overlay via `irl-story.html` → render Puppeteer | Automatique |
| 7 | Promotion → `final/` | Tu valides |
| 8 | `/caption-writer` → `caption.md` | Automatique |

> **Risques audités** : produit collé/flottant, échelle incohérente, lumière qui ne matche pas, absence d'ombres.

---

#### Mode `compositing-ia` (photo produit réelle + scène IA)

```
"Mets le Strict MAX Poulet dans une ambiance cuisine industrielle avec de la vapeur."
```

| Étape | Ce qui se passe | Toi |
|-------|----------------|-----|
| 1 | Tu fournis la photo produit + tu décris l'ambiance voulue | Photo + description |
| 2 | **[PRE]** `/realism-audit` → contraintes réalisme (8 domaines) | Automatique |
| 3 | `/social-media-art-director` → direction créative de la scène | Automatique |
| 4 | `input-mapper` → résolution photos + recette | Automatique |
| 5 | `/image-prompt-engineer` → prompt détaillé | Automatique |
| 6 | **[POST]** `/realism-audit` → audit + corrections | Automatique |
| 7 | Gemini 4K génère le visuel → `brouillons/` | Tu vérifies |
| 8 | Si story : overlay via `irl-story.html` → render Puppeteer | Automatique |
| 9 | Promotion → `final/` | Tu valides |
| 10 | `/caption-writer` → `caption.md` | Automatique |

---

#### Mode `scene-ia` (photo scène réelle + sujets IA)

```
"Prends la photo du comptoir et ajoute un client qui reçoit son sac StrictFood."
```

| Étape | Ce qui se passe | Toi |
|-------|----------------|-----|
| 1 | Tu fournis : photo de la scène + description des sujets + slug produit si burger visible | Photo scène + description + produit |
| 2 | **[PRE]** `/realism-audit` mode scene-ia → analyse lumière/échelle/perspective de la scène + Bloc 1 "état servi" du produit | Automatique |
| 3 | Claude rédige le prompt (sujets + placement + interactions + description du produit en **état servi**) | — |
| 4 | Peut utiliser les briques human+food pour les personnes à générer | — |
| 5 | **[POST]** `/realism-audit` → préservation scène, lumière, échelle, interaction, fidélité produit | Automatique |
| 6 | Gemini **une seule image** (la photo scène) + prompt texte détaillé → `brouillons/` | Tu vérifies |
| 7 | Si story : overlay via `irl-story.html` (tagline + logo) → render Puppeteer | Automatique |
| 8 | Promotion → `final/` | Tu valides |
| 9 | `/caption-writer` → `caption.md` | Automatique |

> **La scène réelle est sacrée** : l'IA ajoute des sujets DANS le décor, elle ne modifie PAS le décor.
> **PAS de photo référence studio** : les photos produit existantes (food porn, fond noir, éclairage dramatique) ne sont PAS fournies en input — elles produiraient un burger irréaliste sur une table. Le produit est décrit uniquement en texte via le Bloc 1 "état servi".
> **Bloc 1 "état servi"** : mêmes ingrédients fidèles à la recette, mais décrits tels qu'ils apparaissent QUAND ON LES MANGE — légèrement compressé, dans le papier kraft, éclairé par les spots du restaurant, pas en mode photoshoot.
> **Combinable avec human+food** : les personnes insérées suivent les briques (cadrage, moment, caméra).
> **Fidélité salle StrictFood** : si la scène est l'intérieur du restaurant, les règles de fidélité salle s'appliquent.

---

#### Mode `full-ia` (l'IA génère tout — produit + scène + humain optionnel)

```
"Génère un visuel food porn du Strict Bœuf, concept macro-sauce, fond sombre."
```

ou avec un humain :

```
"Génère un human-tight × Strict MAX Poulet : cadrage-bouche, moment-croque, env-ciel-bleu, cam-portrait."
```

| Étape | Ce qui se passe | Toi |
|-------|----------------|-----|
| 1 | Tu décris ce que tu veux : produit, concept (ou briques humain+food), mood | Description libre ou briques |
| 2 | **[PRE]** `/realism-audit` → contraintes réalisme (8 domaines + principes candid si humain) | Automatique |
| 3 | `/social-media-art-director` → direction créative | Automatique |
| 4 | `input-mapper` → résolution photos + recette (description ultra-fidèle du produit) | Automatique |
| 5 | `/image-prompt-engineer` → prompt détaillé (+ composition briques si humain+food) | Automatique |
| 6 | **[POST]** `/realism-audit` → audit complet + corrections (mains, sauce, éclairage, proportions, candid) | Automatique |
| 7 | Gemini 4K (ou GPT Images si texte on-image) → `brouillons/` | Tu vérifies |
| 8 | Si story : overlay via `irl-story.html` → render Puppeteer | Automatique |
| 9 | Promotion → `final/` | Tu valides |
| 10 | `/caption-writer` → `caption.md` | Automatique |

> **Pour les concepts human+food** : le système de briques compose le prompt (cadrage × moment × environnement × caméra). Tu peux spécifier les briques ou laisser Claude choisir.
> **Specs caméra obligatoires** : le prompt commence toujours par "Shot on Canon EOS R5, [focale] [ouverture], ISO [valeur]".

---

#### Mode `template` (HTML → Puppeteer)

```
"Fais-moi une story produit hero du Strict Végé Falafel."
```

| Étape | Ce qui se passe | Toi |
|-------|----------------|-----|
| 1 | Tu décris le contenu voulu (type de template, produit, angle) | Description |
| 2 | `story-copywriter` → textes adaptés au format | Automatique |
| 3 | `story-data-mapper` → données produit + presets photo/gradient | Automatique |
| 4 | Template HTML rempli avec les données | Automatique |
| 5 | Vérification limites caractères + presets | Automatique |
| 6 | Puppeteer rend le PNG → `brouillons/story.png` | Tu vérifies |
| 7 | Promotion → `final/story.png` | Tu valides |
| 8 | `/caption-writer` → `caption.md` | Automatique |

> **Pas de Realism Auditor** — pas d'IA impliquée.
> **Rappel** : max 1 éducatif/semaine, max 1 produit hero/semaine (même hors planning, ça compte).

---

### Invoquer un agent directement

| Tu veux... | Commande / Demande |
|------------|-------------------|
| Sublimer une photo | Demande une sublimation + fournis la photo |
| Générer une caption | `/caption-writer` sur une image existante |
| Créer une art direction | `/social-media-art-director` |
| Écrire un prompt image | `/image-prompt-engineer` |
| Rendre un template story | `/story-producer` sur un brief ponctuel |
| Générer des variantes produit | Invoke l'agent `product-variant-generator` |
| Auditer le réalisme d'un prompt | `/realism-audit` |
| Générer une image directement | `/nano-banana-pro` avec le prompt |

> **Liberté totale.** Le contenu apparaîtra dans l'historique au prochain scan. Aucune contrainte de distribution ne s'applique (sauf les caps éducatif/fiche qui restent à 1/sem même hors planning).

---

## 5. Les modes de création

> Les modes sont décidés **dans le planning**. Ce qui suit est une référence pour comprendre chaque mode.

### Les 6 modes

| Mode | En une phrase | Input | API | Output |
|------|---------------|-------|-----|--------|
| `full-ia` | L'IA imagine tout | Aucune photo | Gemini 4K | Image 100% IA |
| `irl-sublimation` | Photo réelle embellie DA | 1 photo réelle | GPT Images | Photo retouchée |
| `compositing-irl` | 2 photos réelles fusionnées | 2 photos réelles | GPT Images | Montage réaliste |
| `compositing-ia` | Produit réel dans scène imaginée | 1 photo réelle | Gemini 4K | Photo dans scène IA |
| `scene-ia` | Scène réelle + sujets IA | 1 photo scène | Gemini 4K | Sujets IA dans scène réelle |
| `template` | Infographie / carrousel HTML | Données | Puppeteer | Slides PNG |

### Quand chaque mode brille

| Mode | Le plus efficace pour | Exemples |
|------|----------------------|----------|
| `full-ia` | Visuels food porn élaborés, nouveau produit sans photo, scènes impossibles | Hero shot burger vapeur dramatique, dessert lévitation |
| `irl-sublimation` | Authenticité + qualité DA, contenu humain, coulisses, moments du quotidien | Romain qui assemble, arrivage ingrédients, portrait équipe, mains préparant la sauce |
| `compositing-irl` | Produit immergé dans le lieu réel | Burger sur comptoir, tenders devant la devanture |
| `compositing-ia` | Ambiance cinématique autour d'un vrai produit | Burger dans cuisine industrielle vapeur, extérieur nuit |
| `scene-ia` | Scènes de vie dans le VRAI restaurant, animer des photos vides | Comptoir + remise sac, salle + clients qui mangent, devanture + client qui sort |
| `template` | Données chiffrées, comparaisons, éducation | Carrousel macros, "nous vs classique", tips nutrition |

### Distribution cible

**Posts (mensuelle)** : full-ia 30% · irl-sublimation 25% · compositing-irl 20% · compositing-ia 15% · template 10%

**Stories (hebdo)** : template 10% · irl 25% · sublimation 20% · compositing 15% · full-ia 15% · scene-ia 15%

---

## 5.5 Concepts visuels et système de briques

> Reference : `_config/concepts-visuels.md`

### Bibliothèque de concepts visuels

La file `_config/concepts-visuels.md` contient une **bibliothèque inspirante** de concepts food porn et moments humains pour StrictFood. Les concepts sont organisés par famille (macro & texture, action & énergie, atmosphère & lumière, moments & storytelling).

### Le système combinatoire de briques — Human + Food

Pour les modes IA (`full-ia`, `compositing-ia`) et les moments IRL, StrictFood utilise un **système de briques visuelles** qui combine 4 dimensions :

1. **Cadrage** (12 options) : plan serré, portrait produit, full shot, overhead, plongée, contreplongée...
2. **Moment** (10 options) : composition, consommation, préparation, partage, découverte...
3. **Environnement** (12 options) : studio noir, comptoir, salle restaurant, parc, rue...
4. **Caméra** (26 options) : style, lentille, profondeur, mouvement, éclairage...

**= 12 × 10 × 12 × 26 = ~37,000 combinaisons uniques** pour garantir une diversité visuelle infinie.

### Concepts = inspiration, NOT rigidité

**Pour les modes IRL** : Les concepts visuels sont un **pool d'inspiration** pour la planification. Ils aident à identifier les opportunités (moments à capturer, ambiances à chercher). **Mais si un moment réel est capturé et qu'il est bon, on l'utilise même s'il ne correspond à aucun concept**. Le réel prime toujours sur le planifié.

**Pour les modes IA** : Les briques sont des **leviers de variation** pour éviter la monotonie. Elles structurent les prompts et assurent que chaque image IA est visuellement unique.

### Micro-saisons visuelles — Rotation hebdomadaire

Chaque semaine, le planning assigne une **micro-saison visuelle** qui guide la teinte globale :

| Semaine | Micro-saison | Caractère | Couleurs dominantes |
|---------|--------------|-----------|-------------------|
| A | Macro & Texture | Détail, intimité, minimalisme | Grains, fibres, contraste |
| B | Action & Énergie | Mouvement, dynamisme, fluidité | Éclats, reflets, chaleur |
| C | Atmosphère & Lumière | Ambiance, contemplation, cinéma | Shadows, halos, dorures |
| D | Moments & Storytelling | Humanité, partage, émotions | Peau, expressions, connexion |

La rotation ABCD se répète chaque mois. Elle n'est **pas rigide** — elle oriente, elle n'impose pas.

### Application concrète

- **Planning** : chaque story non-template reçoit un concept visuel optionnel (ex: "Macro Sesame Bun", "Action Bite Moment", "Atmosphere Warm Kitchen")
- **Prompts IA** : les briques du concept nourrissent le prompt (cadrage, moment, environnement, caméra)
- **Briefs IRL** : les concepts conseillent les moments à chercher, mais une bonne capture impromptue non-prévue prime toujours
- **Cohérence feed** : sur une semaine, le mélange des 4 briques crée un feed dynamique et varié, jamais répétitif

> **Important** : Les concepts visuels sont des **guides de intention**, pas des **contraintes inflexibles**. Ils existent pour inspirer et structurer, pas pour restreindre la créativité ou le réel.

---

## 6. Les types de stories

> Le type est décidé **dans le planning**, en même temps que le mode.

### Type × Mode — Combinaisons possibles

| Type | Modes possibles | Mode par défaut |
|------|----------------|-----------------|
| Produit Hero | template, irl-sublimation | template |
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
| `produit-hero.html` | Produit Hero | Plein cadre + info minimale |
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
| **Visuel plein cadre** | irl-sublimation, compositing-irl, compositing-ia, full-ia | Image plein cadre |

### Fréquences

| Type | Par semaine |
|------|------------|
| Produit Hero | **max 1** |
| IRL | 4-5 |
| Éducatif | **max 1** |
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
        │     brouillons/*.png        story-NN/brouillons/story.png
        │       │                         │
        │    🔍 itérations             🔍 itérations
        │       │                         │
        │       ▼                         ▼
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
│   │           │   └── caption.md     ← Générée APRÈS promotion en final
│   │           ├── brouillons/
│   │           │   └── post.png       ← Premier rendu + itérations
│   │           └── final/
│   │               └── post.png       ← Visuel VALIDÉ, promu depuis brouillons/ — tracé dans l'historique
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
    │       │   │   └── story.png      ← Premier render + itérations
    │       │   └── final/
    │       │       └── story.png      ← Visuel VALIDÉ, promu depuis brouillons/ — tracé dans l'historique
    │       └── story-02/
    │           └── (même structure)
    └── hors-planning/
        └── DD-MM-YYYY/
            └── (même structure)
```

> **Flux brouillon → final** : le premier visuel va dans `brouillons/`. L'opérateur vérifie, demande des modifications si besoin (itérations dans `brouillons/`), puis valide la promotion vers `final/`. Seul un PNG dans `final/` est tracé dans l'historique.

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
| `_config/concepts-visuels.md` | **NOUVEAU** — Bibliothèque concepts visuels + système briques |
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
| `/realism-audit` | Audit le realisme physique des prompts image (PRÉ et POST génération) |
| `Régénère l'historique de production` | Scanne les dossiers et réécrit l'historique |

---

## Annexes

### A. Checklist post

- [ ] **⛔ Pain noir** : le burger a bien un bun NOIR (jamais blanc/doré)
- [ ] Brouillon vérifié dans `brouillons/`
- [ ] Image fidèle au produit
- [ ] DA respectée
- [ ] Pas d'artefacts IA
- [ ] **/realism-audit** exécuté avant et après génération (PRE + POST)
- [ ] Promu vers `final/` après validation
- [ ] Caption générée (après promotion)
- [ ] Caption mentionne "pain noir" (pas juste "pain" ou "bun")
- [ ] Caption avec hook fort
- [ ] Hashtags pertinents
- [ ] Pas de doublon avec un post récent
- [ ] PNG dans `final/` (pour le tracking historique)

### B. Checklist story

- [ ] **⛔ Pain noir** : le burger a bien un bun NOIR (jamais blanc/doré)
- [ ] Brouillon vérifié dans `brouillons/`
- [ ] Textes dans la zone safe Instagram
- [ ] Textes respectent les limites de caractères (SPECS.md)
- [ ] Preset photo et force gradient assignés
- [ ] Pas de zone basse vide
- [ ] Pas de doublon logo
- [ ] Mix des familles visuelles sur la journée
- [ ] **/realism-audit** exécuté (si mode IA)
- [ ] Promu vers `story-NN/final/` après validation
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
| **Dark Premium** | Famille visuelle : fond charbon, contenu informatif |
| **Visuel plein cadre** | Story non-template : image générée/sublimée en 1080×1920 |
| **Preset photo** | Classe CSS qui positionne la photo (photo-centre, photo-droite, etc.) |
| **Force gradient** | Classe CSS qui contrôle l'opacité des overlays (gradient-light/medium/strong) |
| **Concept visuel** | Guide inspirant d'une ambiance, moment ou style (ex: "Macro Sesame Texture", "Action Bite Moment") — vit dans `_config/concepts-visuels.md` |
| **Brique** | Unité du système combinatoire : cadrage, moment, environnement ou caméra. Les briques se combinent pour créer des visuels uniques |
| **Système combinatoire** | 4 dimensions de briques (12 × 10 × 12 × 26) qui génèrent ~37,000 combinaisons visuelles pour human+food |
| **Micro-saison** | Rotation hebdomadaire (A/B/C/D) qui teinte la direction visuelle d'une semaine sans la figer |
| **Realism Auditor** | Agent/Skill qui valide la physique et le realisme d'un prompt IA PRÉ et POST génération |
| **Human+food** | Concept inclusif : la nourriture n'existe que consommée, préparée ou partagée par des humains. Photos et prompts mettent en avant la connexion humain-produit |
| **Candid** | Photographie temoin invisible : capture spontanée, authentique, sans pose — humain naturel, produit héros, composition fragmentée |
| **Moment IRL** | Capture authentique (pas posée, pas simulée) d'une instant réel : arrivage, préparation, consommation, partage |
| **Témoin invisible** | Principe candid : photographe/caméra invisible, moment pas conscient de la capture — humanité vraie, vivante |
| **Tagline** | `Le cheat meal <em>qui n'en est pas un</em>` — TOUJOURS HTML avec `<em>`, jamais texte brut, zéro point final |

---

## Vision — Le pivot vers la food porn authentique

### Le changement fondamental

L'approche Instagram StrictFood a **pivoté** : de "fabrique de templates" vers **"feed vivant, viscéral, humain"**.

```
AVANT (ratio templates) :      APRÈS (ratio IRL + IA viscérale)
50% templates              →    10% templates
20% IRL                    →    30% IRL
15% sublimation            →    25% sublimation
10% compositing            →    15% compositing
5% full-ia                 →    20% full-ia
```

### Philosophie nouvelle

Le feed ne montre **pas des infographies ni des leçons de nutrition**. Il montre :

1. **IRL moments** — Romain en action, arrivages, cuisine en direct, mains, textures réelles. Authentique. Imperfait.
2. **Food porn viscérale** — Macro close-ups du pain noir sésame, frites dorées, sauce qui coule, bite marks, condensation, chaleur. Pas clinique. Pas aseptisé.
3. **Human+food** — Les burgers existent pour être mangés. Les photos montrent des gens qui les mangent, les partagent, les découvrent. Pas juste "produit isolé".
4. **Moments storytelling** — Une semaine n'est pas une suite de messages. C'est une histoire : lundi l'arrivage, mercredi la préparation, vendredi le partage.
5. **Variété visuelle infinie** — Grâce aux briques combinatoires. Aucune deux images identiques. Le feed pulse d'énergie.

### Quand les concepts visuels aident, quand ils ne doivent JAMAIS freiner

Les concepts et briques existent pour :
- **Inspirer** : "Et si on capturait un moment de préparation dans l'action, avec du flou cinématique ?"
- **Structurer** : "Cette semaine, on joue sur l'atmosphère et la lumière"
- **Garantir la variété** : "Pas 2 semaines d'affilée d'overhead shots"

Mais **si** un moment IRL spontané est capturé et qu'il est bon — un Romain avec des mains pleines de jus qui regarde sa création avec fierté — **on l'utilise**. Le réel prime toujours sur le plan de production.

### Contraintes sanitaires pour la variété

Pour éviter la monotonie, le planning impose des **maxima stricts** :
- **Max 1 produit hero/sem** (au lieu de 4-5) — sauf si tu veux vraiment montrer une variante
- **Max 1 éducatif/sem** (au lieu de 2-3) — chiffres et macros, ça fatigue
- **Min 2 stories non-template/jour** — force la créativité
- **Min 2 IRL moments/jour** — enracine le feed dans la vraie vie

Ces règles tuent la facilité du template. Elles garantissent que le feed **respire**, qu'il **vit**.

---

Ce playbook est le reflet d'une **vision** : StrictFood sur Instagram n'est pas une marque qui parle à la caméra, c'est un **restaurant vivant** qu'on regarde travailler, créer, partager. Les concepts visuels et les briques sont des **outils de liberté**, pas des **cages de conformité**.

**Bonne prod.**
