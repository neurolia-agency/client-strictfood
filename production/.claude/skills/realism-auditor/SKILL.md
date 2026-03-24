---
name: realism-auditor
description: >
  Audite les prompts de generation d'images pour detecter et corriger toute incoherence
  physique, logique, lumineuse ou de perspective AVANT la generation. Supporte 3 modes :
  full-ia/compositing-ia (8 domaines), irl-sublimation (fidelite, preservation, lumiere,
  intensite), compositing-irl (scale, lumiere croisee, ombres, edges, temperature).
  Triggers : "audit realisme", "check realism", "realism audit", "verifie le prompt",
  "audit le prompt", "coherence du prompt", "realisme du prompt".
argument-hint: "[prompt ou concept a auditer]"
---

# Realism Auditor

Audite les prompts de generation d'images pour garantir un rendu final coherent, realiste et physiquement plausible.

## Detection du mode

**Mode full-ia / compositing-ia** (defaut) si l'input contient un prompt long et detaille en anglais avec description exhaustive de scene (40+ lignes).

**Mode irl-sublimation** si l'input contient : "sublimation", "sublimer", "enhance", "photo source", ou reference a une seule photo a ameliorer.

**Mode compositing-irl** si l'input contient : "compositing", "merge", "integrer", "fusionner", ou reference a 2 photos (produit + lieu).

**Mode pre-prompt** (quel que soit le mode) si l'input contient un concept + produit sans prompt redige.

**Mode scene-ia** si l'input contient : "scene-ia", "scene", "salle + personnes", "ajouter des sujets dans", ou reference a une photo de lieu avec des sujets a generer par IA.


## Domaines d'audit

### Domaines full-ia / compositing-ia (prompt detaille)

| # | Domaine | Verifie | Exemples d'issues 🔴 |
|---|---------|---------|----------------------|
| 1 | **Mains & prehension** | Prise adaptee a la taille du produit | Main unique sur un MAX burger (impossible) |
| 2 | **Fluides / sauce** | Source logique, gravite, pas de doublon | Sauce qui "sort de l'interieur du pain" |
| 3 | **Eclairage** | Une direction coherente, pas de contradiction | Backlight comme key + sujet eclaire devant |
| 4 | **Perspective** | Angle camera unique, coherence de visibilite | Low angle mais "visible from above" |
| 5 | **Construction** | Pas de duplication, ordre stable, scene logique | Ingredient place par la main ET deja sur le stack |
| 6 | **Materiaux** | Proprietes physiques reelles de chaque ingredient | Mache sans imperfections, parmesan en copeaux |
| 7 | **Proportions** | Tailles relatives coherentes | Main trop grande/petite pour le burger |
| 8 | **Variete** | Suffisamment different des autres prompts du meme concept | 5 assemblages avec le bun cap au meme endroit |

### Domaines irl-sublimation

| # | Domaine | Verifie | Exemples d'issues 🔴 |
|---|---------|---------|----------------------|
| S1 | **Fidelite produit** | Produit identique a la source (ingredients, forme, couleurs) | GPT ajoute du fromage inexistant, deforme le pain |
| S2 | **Preservation environnement** | Fond/contexte non reinvente par GPT | Cuisine reelle → GPT transforme en restaurant chic |
| S3 | **Direction lumineuse** | Eclairage sublimé suit la meme direction que la source | Source eclairee de droite → sublimation eclairee de face |
| S4 | **Intensite sublimation** | Enhancement credible, pas "trop IA" | Photo reelle → rendu plastique, couleurs neon |

### Domaines compositing-irl

| # | Domaine | Verifie | Exemples d'issues 🔴 |
|---|---------|---------|----------------------|
| C1 | **Scale matching** | Taille du produit coherente avec l'environnement | Burger geant sur un comptoir, ou minuscule sur une table |
| C2 | **Lumiere croisee** | Meme direction de lumiere entre produit et environnement | Produit eclaire de gauche, salle eclairee de droite |
| C3 | **Ombres & reflets** | Ombre portee coherente, contact shadow, reflets | Produit flottant sans ombre |
| C4 | **Edge blending** | Bords fondus, pas de halo, DOF coherent | Lisere blanc, contours trop nets, produit trop net dans un fond flou |
| C5 | **Temperature couleur** | Meme white balance entre produit et environnement | Produit chaud/cuivre sur fond froid/bleu |

### Domaines scene-ia

| # | Domaine | Verifie | Exemples d'issues 🔴 |
|---|---------|---------|----------------------|
| SC1 | **Preservation scene** | Decor reel non modifie par l'IA | IA change les murs, deplace le mobilier, modifie l'eclairage ambiant |
| SC2 | **Coherence lumiere** | Sujets IA eclaires par les memes sources que la scene | Sujets eclaires de gauche, scene eclairee du plafond |
| SC3 | **Echelle & placement** | Taille et position des sujets coherentes avec le mobilier | Personne trop grande/petite vs le comptoir, placement illogique |
| SC4 | **Interaction decor** | Sujets touchent les surfaces, ombres coherentes | Pieds flottants, pas d'ombre, mains sans contact |
| SC5 | **Fidelite salle** | Si interieur StrictFood : elements conformes aux photos reference | Mobilier invente, style different, mur vegetal modifie |

### Regles universelles (tous modes)

- **Pain noir** : tout burger DOIT avoir un black sesame bun
- **Materiaux StrictFood** : proprietes physiques reelles de chaque ingredient
- **Proportions produit** : tailles relatives coherentes
- **Dark Premium** : fond sombre, produit lumineux et contraste

## Severites

- 🔴 **Bloquant** — Incoherence physique majeure, visuel irrecuperable. Doit etre corrige.
- 🟡 **Important** — Incoherence visible, potentiellement corrigeable en post. Devrait etre corrige.
- 🟢 **Suggestion** — Amelioration optionnelle de realisme.

## Source de verite

Toutes les regles detaillees, checklists et exemples sont dans :
**`production/.claude/agents/realism-auditor.md`**

Lire ce fichier OBLIGATOIREMENT avant chaque audit. Il contient :
- Regles par domaine avec tableaux correct/incorrect
- Checklists de verification par domaine
- Proprietes physiques de chaque materiau/ingredient StrictFood
- Exemples d'audit avec corrections


## Integration pipeline

### full-ia / compositing-ia
```
Brief → [PRE] /realism-audit concept produit
     → Fiche de contraintes realisme
     → /image-prompt-engineer (Mode B, Step 3)
     → Prompt brut
     → [POST] /realism-audit prompt
     → Prompt audite et corrige
     → /nano-banana-pro → Visuel 4K
```

### irl-sublimation
```
Photo source → [PRE] /realism-audit sublimation produit
            → Contraintes : fidelite, preservation, lumiere
            → Prompt sublimation (integrant les contraintes)
            → [POST] /realism-audit prompt-sublimation
            → Prompt corrige
            → GPT Images → Visuel sublimé
```

### compositing-irl
```
Photo produit + Photo lieu → [PRE] /realism-audit compositing produit lieu
                          → Analyse : lumiere croisee, echelle, perspective
                          → Contraintes : scale, shadows, edges, color temp
                          → Prompt compositing (integrant les contraintes)
                          → [POST] /realism-audit prompt-compositing
                          → Prompt corrige
                          → GPT Images → Visuel composite
```

### scene-ia
```
Photo scene → [PRE] /realism-audit scene-ia
           → Analyse scene : sources lumiere, echelle, perspective
           → Contraintes : preservation, placement, ombres
           → Prompt sujets (integrant les contraintes)
           → [POST] /realism-audit prompt-scene
           → Prompt corrige
           → Gemini input-image → Visuel composite
```

L'audit est OBLIGATOIRE pour tous les modes IA. Le template mode ne genere pas d'image IA → pas d'audit.
