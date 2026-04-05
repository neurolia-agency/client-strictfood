---
name: realism-auditor
description: >
  Audite les prompts de generation d'images pour detecter et corriger toute incoherence
  physique, logique, lumineuse ou de perspective AVANT la generation. Supporte 2 modes :
  full-ia (8 domaines), edit-ia (8 domaines + checks integration).
  Triggers : "audit realisme", "check realism", "realism audit", "verifie le prompt",
  "audit le prompt", "coherence du prompt", "realisme du prompt".
argument-hint: "[prompt ou concept a auditer]"
---

# Realism Auditor

Audite les prompts de generation d'images pour garantir un rendu final coherent, realiste et physiquement plausible.

## Detection du mode

**Mode full-ia** (defaut) si l'input contient un prompt long et detaille en anglais avec description exhaustive de scene (40+ lignes), ou si le brief/pipeline indique `full-ia`.

**Mode edit-ia** si l'input contient : "edit-ia", "photo lieu", "integrer dans", ou reference a une photo de lieu avec un produit a decrire dans le prompt. L'edit-ia utilise les memes 8 domaines que full-ia PLUS des checks d'integration specifiques.

**Mode pre-prompt** (quel que soit le mode) si l'input contient un concept + produit sans prompt redige.

## Domaines d'audit

### Domaines full-ia (10 domaines — aussi utilises par edit-ia)

| # | Domaine | Verifie | Exemples d'issues |
|---|---------|---------|-------------------|
| 1 | **Mains & prehension** | Prise adaptee a la taille du produit | Main unique sur un MAX burger (impossible) |
| 2 | **Fluides / sauce** | Source logique, gravite, pas de doublon | Sauce qui "sort de l'interieur du pain" |
| 3 | **Eclairage** | Une direction coherente, pas de contradiction | Backlight comme key + sujet eclaire devant |
| 4 | **Perspective** | Angle camera unique, coherence de visibilite | Low angle mais "visible from above" |
| 5 | **Construction** | Pas de duplication, ordre stable, scene logique | Ingredient place par la main ET deja sur le stack |
| 6 | **Materiaux** | Proprietes physiques reelles de chaque ingredient | Mache sans imperfections, parmesan en copeaux |
| 7 | **Proportions** | Tailles relatives coherentes | Main trop grande/petite pour le burger |
| 8 | **Variete** | Suffisamment different des autres prompts du meme concept | 5 assemblages avec le bun cap au meme endroit |
| 9 | **Principes candid** | Concepts human-* : regard pas camera, fragment humain, produit heros | Regard camera, visage entier, produit tenu vers le viewer |
| 10 | **Signature Charbon × Ambre** | Les DEUX couleurs presentes dans le prompt (fond + accent oppose) | Fond charbon sans element ambre, ou fond ambre sans element charbon |

### Domaines supplementaires edit-ia (en plus des 8 domaines ci-dessus)

| # | Domaine | Verifie | Exemples d'issues |
|---|---------|---------|-------------------|
| E1 | **Scale matching** | Taille du produit coherente avec l'environnement de la photo lieu | Burger geant sur un comptoir, ou minuscule sur une table |
| E2 | **Lumiere croisee** | Direction de lumiere du produit decrit = direction de lumiere de la photo lieu | Produit eclaire de gauche, scene eclairee de droite |
| E3 | **Edge blending** | Bords fondus, pas de halo, DOF coherent entre produit genere et photo lieu | Lisere blanc, contours trop nets, produit trop net dans un fond flou |

> En edit-ia, l'audit verifie d'abord les 8 domaines standard (le produit est decrit, pas une photo), puis les 3 domaines d'integration avec la photo lieu.

### Regles universelles (tous modes)

- **Pain noir** : tout burger DOIT avoir un black sesame bun
- **Chaleur pulsee** : INTERDIT "grill marks", "grilled", "charred", "barbecued", "pan-fried", "deep-fried". OBLIGATOIRE "uniform Maillard crust", "oven-seared", "air-fried"
- **Materiaux StrictFood** : proprietes physiques reelles de chaque ingredient
- **Proportions produit** : tailles relatives coherentes
- **Dark Premium** : fond sombre, produit lumineux et contraste

## Severites

- **Bloquant** — Incoherence physique majeure, visuel irrecuperable. Doit etre corrige.
- **Important** — Incoherence visible, potentiellement corrigeable en post. Devrait etre corrige.
- **Suggestion** — Amelioration optionnelle de realisme.

## Source de verite

Toutes les regles detaillees, checklists et exemples sont dans :
**`production/.claude/agents/realism-auditor.md`**

Lire ce fichier OBLIGATOIREMENT avant chaque audit. Il contient :
- Regles par domaine avec tableaux correct/incorrect
- Checklists de verification par domaine
- Proprietes physiques de chaque materiau/ingredient StrictFood
- Exemples d'audit avec corrections


## Integration pipeline

### full-ia
```
Brief → [PRE] /realism-audit concept produit
     → Fiche de contraintes realisme
     → /image-prompt-engineer (Mode B, Step 3)
     → Prompt brut
     → [POST] /realism-audit prompt
     → Prompt audite et corrige
     → /nano-banana-pro → Visuel 4K
```

### edit-ia
```
Photo lieu → [PRE] /realism-audit edit-ia concept produit photo-lieu
          → Analyse photo lieu : lumiere, echelle, perspective
          → Fiche de contraintes realisme (8 domaines + 3 integration)
          → /image-prompt-engineer (Mode B)
          → Prompt brut (produit decrit + photo lieu en input)
          → [POST] /realism-audit prompt-edit-ia
          → Prompt audite et corrige (inclut verification scale, lumiere, edges)
          → /nano-banana-pro --input-image [photo lieu] → Visuel 4K
```

L'audit est OBLIGATOIRE pour les modes `full-ia` et `edit-ia`. Le mode `template` et le mode `irl` ne generent pas d'image IA → pas d'audit.
