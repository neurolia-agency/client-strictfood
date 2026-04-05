---
name: carousel-producer
description: >
  Orchestrateur OBLIGATOIRE du pipeline de production de carrousels éducatifs Instagram StrictFood.
  Enchaîne recherche scientifique → scénario narratif → copywriting → template fill → rendu
  Puppeteer → caption. Produit des carrousels 1080x1350 multi-slides prêts à poster.
  Utiliser ce skill DÈS que l'utilisateur veut produire, générer, lancer, créer ou relancer
  un carrousel — même s'il ne dit pas "carousel producer". Couvre les carrousels éducatifs,
  comparatifs, nutritionnels, et tout post multi-slides avec brief carrousel.
  Ne PAS utiliser pour : les posts photo (→ instagram-producer), les stories (→ story-producer),
  la recherche scientifique seule (→ nutrition-researcher), le copywriting seul.
---

# Carousel Producer — Orchestrateur Pipeline v1

Tu es l'orchestrateur du pipeline de production de carrousels éducatifs Instagram StrictFood. Tu coordonnes la recherche, la rédaction, le rendu et la caption.

## Commande

```
/carousel-producer DD-MM-YYYY
```

## Input

L'opérateur fournit :
- Un **chemin complet** (ex: `production/posts-stories/posts/periode-1/S3/28-03-2026/`)
- OU une **date seule** (ex: `28-03-2026`)

**Résolution du chemin** : si seule une date est fournie, chercher le dossier existant via `production/posts-stories/posts/**/DD-MM-YYYY/`. Si aucun dossier trouvé, demander à l'opérateur.

## Exécution — RESPECTER CET ORDRE EXACT

### ÉTAPE 0 — Vérification et routage

1. **Résoudre le chemin** → déterminer `[dossier-post]`
2. Lire `[dossier-post]/brief/brief.md`
3. Vérifier que le brief contient :
   - `Mode: carousel`
   - `Format: Carrousel N slides`
   - `Thématique: [slug]`
   - `Produit de raccord` (slug recette)
   - `Direction Caption`
4. Extraire le slug thématique et le produit de raccord
5. Lire la thématique dans `production/_config/carousel-themes.md`
6. Lire la fiche recette `production/_recettes/[slug].md`

Si le brief est manquant ou incomplet → demander à l'opérateur.

---

### ÉTAPE 1 — Recherche scientifique

1. **APPELER LE SKILL** : `nutrition-researcher`
   - Contexte : thématique + questions clés + chiffres à vérifier
   - Le skill effectue des recherches web et vérifie les sources
   - Output : `[dossier-post]/production/carousel-research.md`

2. Afficher un résumé des faits trouvés à l'opérateur

---

### ÉTAPE 2 — Scénario narratif

1. **SPAWNER L'AGENT** : `carousel-narrator` (Opus)
   - Input : brief + recherche sourcée + fiche recette
   - L'agent digère les faits, trouve l'angle émotionnel, construit l'arc narratif
   - Output : `[dossier-post]/production/carousel-scenario.md`

2. Afficher le scénario à l'opérateur

### 🔒 CHECKPOINT A — Validation scénario

```
🎬 SCÉNARIO CARROUSEL — [Thématique]

Angle émotionnel : [résumé]
Phrase pivot : "[la phrase]"
Arc : [hook] → [identification] → [mécanisme] → [preuve] → [pivot] → [alternative] → [réflexion] → [CTA]

✅ Le scénario est captivant ? Passer au copywriting.
✏️ L'angle ne convient pas ? Préciser la direction.
🔄 Régénérer le scénario ?
```

Attendre validation explicite avant de continuer.

---

### ÉTAPE 3 — Copywriting

1. **SPAWNER L'AGENT** : `carousel-copywriter` (Sonnet)
   - Input : scénario validé + brief + fiche recette
   - **Le copywriter ne reçoit PAS la recherche brute** — il travaille uniquement à partir du scénario (les faits sont déjà digérés et reformulés par le narrator)
   - Output : `[dossier-post]/production/carousel-content.md`

2. Afficher le contenu structuré à l'opérateur

### 🔒 CHECKPOINT B — Validation contenu

```
📝 CONTENU CARROUSEL — [Thématique]

Slides : [N] (cover + [X] internes + CTA — PAS de slide sources)
Produit raccord : [Nom]

[Résumé du contenu de chaque slide — titre + layout]

✅ Valider le contenu et passer au rendu ?
✏️ Modifier (préciser quoi) ?
🔄 Régénérer le contenu ?
```

Attendre validation explicite avant de continuer.

---

### ÉTAPE 4 — Template fill

Pour chaque slide, prendre le template correspondant et remplacer les placeholders :

1. **Slide 1 (cover)** : copier `_templates/carousel/carousel-cover.html`
   - Remplacer `{{LINE_1}}`, `{{LINE_2}}`, `{{LINE_3}}`, `{{FONT_SIZE_*}}`, `{{LETTER_SPACING_*}}`
   - **Résoudre le chemin CSS** : remplacer `href="_base/carousel-base.css"` par le chemin absolu

2. **Slides internes** : copier `_templates/carousel/carousel-slide.html`
   - Remplacer `{{LAYOUT}}` par le layout choisi
   - Remplacer `{{SLIDE_CONTENT}}` par le HTML correspondant au layout
   - Construire le HTML à partir des données du `carousel-content.md`

3. **PAS DE SLIDE SOURCES** — les sources vont dans la caption, pas dans le carrousel.

4. **Slide CTA** : copier `_templates/carousel/carousel-cta.html`
   - Remplacer `{{CTA_HEADLINE}}`, `{{CTA_BODY}}`, `{{MACRO_ITEMS}}`, `{{KEYWORD_FONT_SIZE}}`

Écrire chaque slide remplie dans `[dossier-post]/production/slides/` :
```
slide-01-cover.html
slide-02-[layout].html
slide-03-[layout].html
...
slide-[N]-cta.html
```

**IMPORTANT** : tous les chemins dans les HTML doivent être ABSOLUS (pas relatifs).

---

### ÉTAPE 5 — Rendu Puppeteer

```bash
node production/_templates/carousel/render-carousel.js \
  "[dossier-post]/production/slides" \
  "[dossier-post]/brouillons"
```

Vérifier que les PNGs sont bien générés (1 par slide, 1080x1350).

### 🔒 CHECKPOINT C — Validation visuelle

```
🖼️ CARROUSEL RENDU — [N] slides

[Afficher ou lister les PNGs dans brouillons/]

Vérifier :
- [ ] Textes lisibles et bien alignés
- [ ] Accents français corrects
- [ ] Pas de débordement de texte
- [ ] Couverture : texture sésame visible dans les lettres
- [ ] Slides internes : hiérarchie claire, grain cinéma
- [ ] PAS de slide sources (vérifier qu'elle n'a pas été générée)
- [ ] CTA : macros exactes, tagline correcte
- [ ] Pain noir mentionné (pas "pain" seul)

✅ Valider ? (les slides seront deplacees vers a-publier/posts/ apres la caption)
✏️ Modifier une slide (préciser laquelle) ?
🔄 Re-rendre après correction ?
```

Attendre validation explicite.

---

### ÉTAPE 6 — Caption

1. **APPELER LE SKILL** : `caption-writer`
   - Input : dossier post + image (slide cover ou slide CTA)
   - Le skill lit le brief (Direction Caption), analyse les visuels, genere la caption
   - Output : `[dossier-post]/production/caption.md`

2. Afficher la caption a l'operateur pour validation

---

### ÉTAPE 7 — Deplacement vers a-publier/ (OBLIGATOIRE apres validation caption)

Quand la caption est validee :

1. **Creer le sous-dossier carrousel** :
   ```bash
   mkdir -p "production/a-publier/posts/DD-MM-YYYY-[slug]/"
   ```
   - DD-MM-YYYY = date de publication prevue
   - slug = thematique courte (kebab-case, ex: `zoom-proteines`, `comparatif-macros`)

2. **DEPLACER toutes les slides** :
   ```bash
   mv "[dossier-post]/brouillons/slide-*.png" "production/a-publier/posts/DD-MM-YYYY-[slug]/"
   ```

3. **Copier la caption** en texte brut :
   - Extraire le texte de la caption depuis `caption.md` (sans les metadonnees/headers)
   - Ecrire dans `production/a-publier/posts/DD-MM-YYYY-[slug]/caption.txt`

4. Confirmer a l'operateur :
   ```
   ✅ PRET A PUBLIER

   Dossier : production/a-publier/posts/DD-MM-YYYY-[slug]/
   Slides  : [N] PNGs
   Caption : caption.txt

   Les metadonnees (brief, research, content) restent dans [dossier-post]/
   ```

---

### AFFICHAGE FINAL

```
✅ CARROUSEL TERMINE — [Thematique] ([Date])

📁 [dossier-post]/
├── brief/brief.md
├── production/
│   ├── carousel-research.md    ✅ [N] faits sources
│   ├── carousel-content.md     ✅ [N] slides redigees
│   ├── caption.md              ✅ Caption generee
│   └── slides/                 ✅ [N] HTMLs remplis
└── brouillons/                 (vide apres deplacement)

📁 production/a-publier/posts/DD-MM-YYYY-[slug]/
├── slide-01.png ... slide-NN.png
└── caption.txt

Pret a publier.
```

---

## Gestion des erreurs

| Erreur | Action |
|--------|--------|
| Brief manquant | Demander à l'opérateur de créer le brief |
| Thématique introuvable | Lister les thématiques disponibles |
| Recette introuvable | Lister les slugs valides |
| Recherche pauvre | Proposer d'élargir les mots-clés de recherche |
| Puppeteer échoue | Vérifier les chemins absolus dans les HTML |
| Texte qui déborde | Signaler la slide + proposer une version raccourcie |

## Règles

> **Règles DA transversales** (pain noir, chaleur pulsée, fidélité salle) : cf. `.claude/rules/production-pipeline.md` — toujours en contexte, non répétées ici.

- **Brouillon d'abord** : les PNGs vont TOUJOURS dans `brouillons/` d'abord
- **a-publier/ apres validation** : quand caption validee, DEPLACER les slides vers `a-publier/posts/DD-MM-YYYY-[slug]/` + caption.txt
- **Caption apres validation visuelle** : le caption-writer n'est appele qu'apres validation des visuels par l'operateur
- **Chemins absolus** : tous les chemins dans les HTML remplis doivent être absolus
- **Accents français** : vérifier AVANT le rendu que tous les textes ont les accents
- **Sauce poivron** : jamais "maison" ou "artisanale" — elle est achetée (industrielle)
- **Dimensions** : 1080 x 1350 (portrait 4:5) — pas 1080x1080
