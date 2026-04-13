---
name: freestyle
description: >
  Mode libre pour la production Instagram StrictFood. Absorbe n'importe quel input
  (idée, photo, trend, screenshot, visuel en tête), brainstorm obligatoire, puis produit
  via le pipeline Visual Concept Engine. Output dans hors-planning/.
  Triggers : "freestyle", "j'ai une idée", "hors planning", "fais-moi", "je veux un post",
  "je veux une story", "produis ça", toute demande spontanée de création.
---

# Freestyle — Mode Libre

L'opérateur arrive avec une idée. Tu la comprends, tu brainstormes, tu produis.

## Étape 1 — Absorber

L'opérateur donne n'importe quoi :
- Une idée vague : "un truc sur les protéines"
- Une idée précise : "story promo 1 acheté 1 offert avec cette photo"
- Un visuel/photo à utiliser
- Un trend vu sur Instagram/TikTok
- Un événement ou une actu
- Un screenshot d'un concurrent comme inspiration

Accepte tout. Ne rejette rien.

## Étape 2 — Brainstorm (OBLIGATOIRE)

Même si l'idée semble claire, tu DOIS :

**2a — Reformuler** l'idée en 1-2 phrases pour vérifier la compréhension.

**2b — Proposer 2-3 concepts visuels** (Visual First — le visuel EST le hook) :

Pour chaque option, donner :
- **Format** : post (4:5), story visuelle (9:16 IA plein écran), story template (9:16 layout typo), triptych
- **Ce qu'on VOIT** : description vivide de l'image (composition, angle, lumière, mise en scène)
- **Fond** (si story template) : description du fond (couleur + technique + paramètres)
- **Texte** (si story template) : headline, body, CTA
- **Caption direction** : ce que la caption apportera en complément du visuel

L'opérateur choisit ou demande un mix. On itère si besoin.

## Étape 3 — Structurer (IDENTIQUE au pipeline classique)

Le concept validé au brainstorm est formalisé dans le MÊME format que le Visual Concept Engine. Pas de raccourci.

**Pour un post ou une story visuelle :**
```yaml
concept_visuel:
  nom: "..."
  produit: strict-boeuf
  niveau: APPÉTIT | CONCEPT | UNIVERS
  hook_visuel: "1 phrase — ce qui arrête le scroll"
  description_image: "description vivide complète"
  palette: "..."
  eclairage: "..."
  angle: "..."
  format: post-simple | story-visuelle
  caption_direction: "..."
```

**Pour une story template :**
```yaml
story_template:
  type: promotion | annonce | data-produit | rappel
  fond: "Description complète : couleur + technique + paramètres"
  contenu:
    headline: "..."
    body: "..."
    cta: "..." # si pertinent
  elements_graphiques:
    - element 1 (position, opacité)
    - element 2 (position, opacité)
    - element 3 (position, opacité)
    # minimum 3, maximum 6
  layout_direction: "..."
```

## Étape 4 — Produire (MÊME pipeline que la production classique)

| Format | Pipeline exact |
|--------|----------------|
| **Post** | Concept structuré → Realism audit PRE → Prompt Combo-B (checklist obligatoire) → Realism audit POST → Génération image → brouillons/ |
| **Story visuelle** | Concept structuré → Realism audit PRE → Prompt Combo-B 9:16 (checklist obligatoire) → Realism audit POST → Génération image → Overlay tagline + logo → brouillons/ |
| **Story template** | Concept structuré → HTML (fond + contenu + éléments graphiques + tagline/logo) → Puppeteer render 1080×1920 → brouillons/ |
| **Triptych** | 3 concepts structurés → 3× pipeline post → brouillons/ |

**Aucune étape n'est sautée.** Le freestyle ne court-circuite pas le pipeline — il remplace uniquement l'étape "le moteur génère l'idée" par "l'opérateur donne l'idée".

**Output** : toujours dans `posts-stories/[posts|stories]/hors-planning/DD-MM-YYYY/brouillons/`

## Stories template — Éléments graphiques OBLIGATOIRES

Chaque story template DOIT inclure des éléments graphiques du visual system. C'est ce qui marque l'identité StrictFood et empêche les stories de ressembler à un slide Canva générique.

**Règles :**

| Règle | Détail |
|-------|--------|
| **Minimum 3 éléments** | Chaque story template utilise au minimum 3 éléments graphiques différents |
| **Maximum 6 éléments** | Au-delà, ça devient chargé |
| **Équilibre vertical** | Les éléments couvrent les 3 tiers (haut, milieu, bas). JAMAIS de tiers vide |
| **Zones vides = éléments structurants** | Si une grande zone est vide, utiliser des éléments MARQUÉS (barre diagonale, tape-band) — PAS des éléments subtils (cercles fins, dots) qui ne remplissent pas l'espace |
| **Grain TOUJOURS présent** | Le grain film est obligatoire sur chaque story (opacity 0.04-0.06) |
| **Positions variables** | Les éléments changent de position d'une story à l'autre |

**Éléments disponibles** (piocher dans cette liste, voir `visual-composer/references/brand-dna.md` pour le CSS exact) :

| Élément | Usage typique | Impact visuel |
|---------|--------------|---------------|
| **Barre diagonale** | Traverser une zone vide | Fort — structurant |
| **Tape-band** | Bandeau tagline en boucle | Fort — structurant |
| **Tech-frame** | Coins en L (2 ou 4 coins) | Moyen — cadrage |
| **Filet doré** | Bordure fine autour du canvas | Moyen — cadrage |
| **Lignes parallèles** | 1-2 lignes fines accompagnant une barre | Subtil — rythme |
| **Dots clusters** | Grilles 2×2 ou 3×3 de points | Subtil — texture |
| **Embers** | Points lumineux avec glow | Subtil — vie |
| **Cercles** | Cercles décoratifs en bordure fine | Subtil — respiration |
| **Burger icon** | SVG burger décoratif en très basse opacité | Subtil — identité |
| **Golden bokeh** | Cercles flous ambre | Subtil — chaleur |

**Règle d'inversion :**
- Fond charbon → éléments en ambre/doré (rgba 250,186,67)
- Fond ambre → éléments en charbon (rgba 26,23,20)

## Contraintes (toujours actives)

- Pain noir sésame obligatoire (JAMAIS pain blanc)
- Chaleur pulsée (JAMAIS grill/barbecue/poêle)
- Lifestyle = sport / vie active
- Fidélité produit (lire `_recettes/[slug].md`)
- Checklist Combo-B obligatoire pour tout prompt IA
- Realism audit PRE et POST obligatoire pour tout prompt IA
- Pas de salle restaurant dans les visuels
- Stories template : fond unique (pas de répétition)
