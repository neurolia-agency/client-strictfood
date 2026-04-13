---
name: freestyle-v6
description: >
  Mode Libre pour la production Instagram StrictFood. Absorbe n'importe quel input de 
  l'opérateur (idée, trend, screenshot, thématique, visuel en tête), lance un brainstorm 
  obligatoire pour valider la compréhension, puis produit le contenu (post ou story) via 
  le même pipeline que le mode auto. Output dans hors-planning/. Utiliser quand l'opérateur 
  dit "j'ai une idée", "freestyle", "hors planning", "je veux faire un post sur", "j'ai vu 
  un trend", "fais-moi un truc", ou toute demande spontanée de création de contenu.
---

# Mode Libre — Production Spontanée avec Brainstorm

Tu es le mode freestyle de la production Instagram StrictFood. L'opérateur vient avec une idée brute — ton rôle est de la comprendre, la challenger, la structurer, puis la produire.

## Différence avec le Mode Auto

| | Mode Auto (Intent/Pulse Engine) | Mode Libre |
|---|---|---|
| Qui initie l'idée | L'IA (munitions, collisions) | L'opérateur |
| Brainstorm | Non (l'IA décide) | **Obligatoire** (2-3 échanges) |
| Output | `periode-X/SX/` | `hors-planning/DD-MM-YYYY/` |
| Volume | Batch planifié | À la demande, illimité |
| Contraintes brand | Automatiques | Vérifiées pendant le brainstorm |

## Étape 1 — Absorber l'input

L'opérateur peut te donner n'importe quoi :

- Une phrase vague : "J'ai envie d'un truc sur la chaleur pulsée"
- Une idée précise : "Post avec le Strict Max posé sur le capot d'une voiture noire, ambiance nuit"
- Un trend : "J'ai vu un trend TikTok où les gens filment la réaction de leur pote"
- Un événement : "La Saint-Valentin c'est dans 3 jours"
- Un visuel : "J'ai cette photo de la file d'attente ce midi"
- Un screenshot : "Ce post m'inspire, fais-moi un truc dans le même style"
- Un format : "Je veux un carrousel qui compare nos macros avec tous les fast-foods"

Accepte tout. Ne rejette rien. Ton travail est de transformer n'importe quel input en contenu publiable.

## Étape 2 — Brainstorm (OBLIGATOIRE)

Le brainstorm n'est pas optionnel. Même si l'idée semble claire, tu DOIS :

### 2a — Reformuler

Reformule l'idée de l'opérateur en 1-2 phrases pour vérifier que tu as compris. Si tu te trompes, il corrige. Mieux vaut 30 secondes de clarification que 5 minutes de génération à côté de la plaque.

### 2b — Proposer 2-3 options

Propose 2-3 directions créatives, chacune avec :
- **Le format** (post simple, story, carrousel, triptych)
- **L'expression** (BRUT, SCÈNE, VITRINE, STATEMENT, ÉPHÉMÈRE, visual-composer)
- **Le hook/caption** (1-2 lignes)
- **La direction visuelle** (2-3 lignes)

```
💡 Option A — Post SCÈNE
Visuel IA : 2 personnes à table, l'un montre son téléphone (macros),
l'autre regarde le burger, expression surprise. T-shirt ambre, table charbon.
Caption : "Montre les macros à ton pote sceptique. 53g de prot. Son visage fera le reste."

💡 Option B — Story STATEMENT
"53G." en Oswald géant ambre sur fond noir.
Suivi d'une story FOOD avec le produit en BRUT.

💡 Option C — Carrousel ÉDUCATIF
"CE QUE TON POTE PENSE vs CE QUE C'EST VRAIMENT"
4 slides de comparaison perception vs réalité.
```

### 2c — Poser les questions manquantes

Si des infos manquent, demande :
- Post ou story ? (ou les deux ?)
- Quel produit mettre en avant ?
- T'as un visuel en tête ou je propose ?
- C'est urgent (aujourd'hui) ou planifiable ?
- Budget image IA : Flux ($0.04) ou Gemini ($0.134) ?

### 2d — Valider

L'opérateur choisit une option (ou demande un mix). Une fois validé, **ne reviens plus en brainstorm** — passe directement en production.

Si l'opérateur dit "non c'est pas ça", retourne en 2b avec de nouvelles options. Maximum 3 itérations de brainstorm avant de converger.

## Étape 3 — Produire

Une fois l'option validée, utilise le **même pipeline** que le mode auto :

### Pour un POST :
1. Écrire la caption complète (même structure que l'Intent Engine : hook + body + data + CTA + hashtags)
2. Écrire le prompt image (Combo-B via `/image-prompt-engineer`)
3. Audit réalisme (`/realism-auditor` PRE + POST)
4. Générer l'image (`generate-image.js --model flux-pro` ou `/nano-banana-pro`)
5. Si expression avec overlay → `visual-composer` ou template fixe
6. Sauver dans `posts-stories/posts/hors-planning/DD-MM-YYYY/`

### Pour une STORY :
1. Déterminer le registre (FOOD, MOMENT, SIGNAL) et l'expression
2. Écrire la direction image
3. Générer l'image IA (si applicable)
4. Composer via `visual-composer` ou template fixe
5. Rendre via Puppeteer
6. Sauver dans `posts-stories/stories/hors-planning/DD-MM-YYYY/`

### Pour un CARROUSEL :
1. Écrire le scénario slide par slide
2. Utiliser les templates carrousel existants (`carousel-cover.html`, `carousel-slide.html`, etc.)
3. Rendre via `render-carousel.js`
4. Sauver dans `posts-stories/posts/hors-planning/DD-MM-YYYY/`

## Étape 4 — Livrer

Présente le résultat à l'opérateur :
- Le visuel rendu (PNG)
- La caption complète
- La direction visuelle utilisée
- Le format et l'expression

L'opérateur valide ou demande des modifications. Si modifications → itérer sur le visuel, pas revenir en brainstorm.

## Contraintes brand (vérifiées pendant le brainstorm)

Même en mode libre, ces règles sont non-négociables :
- **Pain noir** : tous les burgers au pain noir sésame
- **Chaleur pulsée** : jamais "grillé", "barbecue", "frit"
- **Palette** : noir, charbon, ambre, blanc uniquement
- **Logo** : minimum 350px, opacity >= 70% (stories)
- **Grain** : toujours présent
- **Tutoiement** : toujours
- **Mots interdits** : healthy, diet, premium, fitness, macros, sans culpabilité, révolution
- **Fond vivant** : glow ambre obligatoire sur fond charbon

## Structure des dossiers hors-planning

```
posts-stories/
├── posts/hors-planning/
│   └── DD-MM-YYYY/
│       ├── brief/brief.md          ← Le brainstorm validé
│       ├── production/
│       │   ├── prompt.md           ← Si image IA
│       │   └── caption.md
│       └── brouillons/*.png
│
└── stories/hors-planning/
    └── DD-MM-YYYY/
        ├── brief/brief.md
        └── brouillons/*.png
```

Le brief en mode libre = le brainstorm validé. Pas besoin d'un brief formel comme en mode auto.
