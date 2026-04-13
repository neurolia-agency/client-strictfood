---
name: freestyle
description: >
  Production hors planning cadrée par le visual system StrictFood.
  Produit un visuel spontané à partir d'une description libre,
  en respectant toutes les contraintes DA (pain noir, chaleur pulsée, fidélité produit).
  Triggers : "freestyle", "hors planning", "idée spontanée", "quick produce",
  "produis ça", "je veux un visuel de".
---

# Freestyle — Production hors planning

Produit un visuel StrictFood à partir d'une description libre. Le visual system et les contraintes DA s'appliquent, mais pas de planning, pas de brief formel, pas d'art direction séparée.

## Input

Une description libre en français :
```
/freestyle "Strict Boeuf qui flotte au-dessus d'un skateboard dans un skatepark sunset"
/freestyle "Photo de la salle avec le burger posé sur le comptoir"
/freestyle "Romain en train de couper la viande, photo prise ce midi"
/freestyle "Un couple qui mange des wraps sur un banc au parc, golden hour"
```

## Process

### Étape 1 — Analyser l'intention

Déterminer automatiquement :
- **Mode** : full-ia (pas de photo input), edit-ia (photo fournie), template (texte + photo existante), irl (photo fraîche)
- **Format** : post (4:5, 1:1) ou story (9:16)
- **Produit** : identifier le produit StrictFood mentionné → charger la recette
- **Type** : food, lifestyle, scene, macro, concept
- **Traitement** : détecter si un traitement post-production est mentionné (voir ci-dessous)

#### Détection des traitements (CRITIQUE)

Les mots suivants sont des **traitements post-production** (template HTML + Puppeteer overlay), PAS des concepts photographiques :

| Mot détecté | Traitement | Action |
|-------------|-----------|--------|
| `colonne` | Bandeau vertical texte + texture sésame | Générer la PHOTO seule → appliquer le template `story-colonne` par dessus |
| `sillon` | Arc dome + zone ambre en bas | Générer la PHOTO seule → appliquer `story-sillon.html` |
| `sceau` | Cercle glassmorphism | Générer la PHOTO seule → appliquer `story-sceau.html` |
| `feuilleté-photo` | Split photo dominante + texte | Générer la PHOTO seule → appliquer `story-feuillete-photo.html` |
| `feuilleté-data` | Split data dominante + photo | Générer la PHOTO seule → appliquer `story-feuillete-data.html` |
| `knockout-band` | Bande dome identitaire (post) | Générer la PHOTO seule → appliquer l'overlay knockout |
| `masque` | Typo géante révèle le produit (post) | Générer la PHOTO seule → appliquer le masque typographique |
| `masque-inverse` | Texte ambre solide sur photo (post) | Générer la PHOTO seule → appliquer |
| `texture-fill` | Lettres remplies texture (post) | Générer la PHOTO seule → appliquer |

**Si un traitement est détecté** : le prompt IA décrit UNIQUEMENT la photo de base (produit + fond). Le traitement est appliqué APRÈS la génération par Puppeteer ou overlay. Ne JAMAIS intégrer le traitement dans le prompt IA.

### Étape 2 — Vérifier la conformité DA

**OBLIGATOIRE avant toute génération :**

- [ ] Pain noir : si burger mentionné, le prompt spécifiera "charcoal black sesame bun"
- [ ] Chaleur pulsée : pas de "grill", "grillé", "barbecue" dans le prompt
- [ ] Ingrédients fidèles : vérifier vs la recette (`_recettes/[slug].md`)
- [ ] Si salle restaurant visible : fidélité au vrai décor
- [ ] Si lifestyle : logo obligatoire (emballage ou kraft bag)

Si la description viole une contrainte → AVERTIR l'opérateur et proposer une alternative.

### Étape 3 — Realism Audit PRE-PROMPT (OBLIGATOIRE pour full-ia et edit-ia)

> **Ne PAS sauter cette étape.** Ne PAS appliquer les contraintes "de tête" sans invoquer le skill.

1. **APPELER LE SKILL** : `realism-auditor` en mode PRE-PROMPT
   - Contexte : description libre + produit identifié + recette
   - Si edit-ia : ajouter la photo lieu au contexte
   - Output : fiche de contraintes réalisme (domaines applicables, termes interdits, proportions, matériaux)

2. La fiche de contraintes est transmise à l'étape 4 comme input obligatoire du prompt engineer.

> Pour les modes `template` et `irl` : passer directement à l'étape 4 (pas d'audit — pas d'IA).

### Étape 4 — Construire le prompt

**Si full-ia :**
- **APPELER LE SKILL** : `image-prompt-engineer` (Mode B, style Combo-B)
  - Contexte : description adaptée + contraintes réalisme (étape 3) + fond (ambre ou charbon)
  - Output : prompt.md (150-300 mots, narratif, CAPS, négatifs inline)

- **APPELER LE SKILL** : `realism-auditor` en mode POST-PROMPT
  - Contexte : prompt rédigé
  - Output : prompt audité et corrigé (8 domaines vérifiés)

**Si edit-ia :**
- **APPELER LE SKILL** : `image-prompt-engineer` (Mode B, style Combo-B)
  - Photo lieu en input + produit décrit dans le prompt
  - Contexte : description + contraintes réalisme (étape 3) + analyse photo lieu
  - Output : prompt.md

- **APPELER LE SKILL** : `realism-auditor` en mode POST-PROMPT (edit-ia)
  - Contexte : prompt rédigé + photo lieu
  - Output : prompt audité (8 domaines + 3 domaines intégration)

**Si template :**
- Data mapping vers template HTML
- Puppeteer render

**Si irl :**
- Photo fraîche → story-universal.html → Puppeteer

### Étape 5 — Générer

```
/nano-banana-pro --prompt "[prompt]" --filename "[date]-[description].png" --resolution 2K
```

Ou Puppeteer pour template/irl.

### Étape 6 — Validation

Le visuel va dans :
```
posts-stories/[posts|stories]/hors-planning/DD-MM-YYYY/brouillons/
```

L'operateur verifie → iterations si besoin → validation.

### Étape 7 — Caption

1. **APPELER LE SKILL** : `caption-writer`
   - Contexte : description libre (en lieu de brief) + image produite (vision)
   - Output : `production/caption.md` dans le dossier hors-planning

2. Afficher la caption a l'operateur pour validation.

### Étape 8 — Deplacement vers a-publier/ (OBLIGATOIRE apres validation caption)

Quand la caption est validee :

1. **Determiner la destination** :
   - Post (4:5, 1:1) → `production/a-publier/posts/`
   - Story (9:16) → `production/a-publier/stories/`

2. **Determiner le nom** : `DD-MM-YYYY-[slug]-[format].png`
   - DD-MM-YYYY = date du jour ou date choisie
   - slug = description courte (kebab-case)
   - format = `4x5`, `1x1`, ou `9x16`

3. **DEPLACER le visuel** :
   ```bash
   mv "[dossier]/brouillons/[fichier].png" "production/a-publier/[posts|stories]/DD-MM-YYYY-[slug]-[format].png"
   ```

4. **Copier la caption** en texte brut a cote (meme nom, extension `.txt`)

5. Confirmer :
   ```
   ✅ PRET A PUBLIER

   Visuel : production/a-publier/[posts|stories]/DD-MM-YYYY-[slug]-[format].png
   Caption : production/a-publier/[posts|stories]/DD-MM-YYYY-[slug]-[format].txt
   ```

## Règles

> **Règles DA transversales** (pain noir, chaleur pulsée, fidélité salle) : cf. `.claude/rules/production-pipeline.md` — toujours en contexte, non répétées ici.

1. **Pas de brief formel** : la description libre remplace le brief
2. **Pas d'art direction séparée** : le prompt est construit directement
3. **Dossier hors-planning** : n'affecte pas les compteurs de distribution
4. **Tous les modes disponibles** : full-ia, edit-ia, template, irl
5. **Le produit est TOUJOURS décrit** dans le prompt (jamais de photo référence produit)
6. **Realism audit obligatoire** pour les modes IA (full-ia, edit-ia) — **APPELER LE SKILL `realism-auditor`** en PRE-PROMPT (étape 3) ET POST-PROMPT (étape 4). Ne JAMAIS appliquer les contraintes manuellement sans invoquer le skill.
