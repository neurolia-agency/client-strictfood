# Guide Opérateur — Pipeline Instagram v3

Comment produire un post Instagram de A à Z. Tes interventions sont marquées `👤 TOI`, le reste est automatique.

---

## Vue d'ensemble

```
👤 TOI     Rédiger le planning semaine
👤 TOI     Rédiger les briefs (1 par post)
👤 TOI     Lancer le pipeline (1 prompt par post)
🤖 AUTO    [Pipeline adapté au mode]
👤 TOI     Valider le checkpoint (1 réponse)
🤖 AUTO    Génération image
🤖 AUTO    Génération caption
👤 TOI     Vérifier le résultat final (image + caption)
```

**Interventions : 4** (planning, brief, validation checkpoint, vérification finale)

---

## Étape 0 — Planifier la semaine

### 🤖 AUTO — Analyse des semaines précédentes

Claude lit automatiquement `_config/historique-production.md` et identifie :
- Les produits déjà traités (pour éviter les doublons)
- Les piliers et modes sous-représentés (pour les prioriser)
- Les photos déjà utilisées (pour varier)

### 👤 TOI — Créer le planning

Copier le template `_templates/planning-semaine.md` dans `posts-stories/posts/periode-[N]/planning-S[X].md` et remplir :

1. **Distribuer les posts** sur la semaine (3-4 posts) :
   - Varier les **piliers** (Le Plat, La Cuisine, Les Macros, L'Équipe, Le Quartier)
   - Assigner un **mode** à chaque post
   - Identifier les **photos IRL** à fournir AVANT la semaine

2. **Planifier les stories** par jour (3-4/jour) :
   - Alterner Dark Premium et Vitrine chaque jour
   - Max 3 interactifs par semaine
   - Placer une Fiche Produit les jours de post

3. **Vérifier la distribution piliers** (table en bas du planning)

### Vérification rapide

- [ ] Chaque post a un mode de création assigné
- [ ] Les 5 piliers sont représentés sur le mois
- [ ] Les photos IRL sont identifiées et demandées
- [ ] Les stories alternent les familles visuelles

---

## Étape 1 — Préparer le brief

### 👤 TOI — Créer le dossier et le brief

```bash
mkdir -p production/posts-stories/posts/periode-[N]/S[X]/YYYY-MM-DD/00-brief
```

Copier le template `_templates/brief-v3.md` dans `00-brief/brief.md` et remplir :

- **Pilier** : Le Plat / La Cuisine / Les Macros / L'Équipe / Le Quartier
- **Mode** : full-ia / irl-sublimation / compositing-irl / compositing-ia / template
- **Format** : Photo unique / Carrousel N slides
- **Objectif** : 1-3 phrases
- **Produit** : Nom + slug recette
- **Sources visuelles** : selon le mode (voir brief-v3.md)
- **Direction Caption** : angle, ton, CTA, mentions (la caption sera générée automatiquement)

### Ce qui change par mode

| Mode | Ce que tu fournis dans le brief |
|------|--------------------------------|
| `full-ia` | Produit + slug. C'est tout. Le pipeline fait le reste. |
| `irl-sublimation` | Chemin vers la photo réelle + direction sublimation |
| `compositing-irl` | Chemin photo produit + chemin photo lieu + intention |
| `compositing-ia` | Chemin photo produit + description de la scène imaginée |
| `template` | Type de template + données par slide |

### Vérification rapide

- [ ] Le mode est spécifié
- [ ] La Direction Caption est remplie (angle + ton + CTA au minimum)
- [ ] Il n'y a PAS de caption complète dans le brief
- [ ] Les photos sources existent (modes IRL/compositing)

---

## Étape 2 — Lancer le pipeline

### 👤 TOI — Un seul prompt

```
/instagram-producer YYYY-MM-DD
```

Le pipeline détecte le mode et route automatiquement. Tu n'as rien à choisir.

---

## Étape 3 — Valider le checkpoint

### 👤 TOI — Répondre au checkpoint

Le contenu du checkpoint varie selon le mode :

**Mode `full-ia` / `compositing-ia`** :
```
📋 CHECKPOINT — Input Mapping
Produit : [nom]
Photo sélectionnée : [chemin] — [justification]
Direction scène : [résumé] (compositing-ia uniquement)

✅ Valider ?  ✏️ Modifier ?
```

**Mode `irl-sublimation`** :
```
📋 CHECKPOINT — Sublimation IRL
Photo source : [chemin]
Direction : [ce qui sera ajusté]

✅ Valider ?  ✏️ Modifier ?
```

**Mode `compositing-irl`** :
```
📋 CHECKPOINT — Compositing
Photo produit : [chemin]
Photo lieu : [chemin]
Intention : [résumé]

✅ Valider ?  ✏️ Modifier ?
```

**Mode `template`** :
```
📋 CHECKPOINT — Data Mapping
Slide 1 : [données]
Slide 2 : [données]

✅ Valider ?  ✏️ Modifier ?
```

---

## Étape 4 — Vérifier le résultat

### 👤 TOI — Contrôle qualité image + caption

Après le checkpoint, le pipeline :
1. Génère l'image (automatique)
2. Génère la caption (automatique, via `/caption-writer`)

Tu vérifies les deux :

**Image** :
- [ ] Fidélité produit (ingrédients corrects)
- [ ] DA respectée (fond, couleurs, ambiance)
- [ ] Qualité (pas d'artefacts IA)
- [ ] Composition cohérente

**Caption** :
- [ ] Hook accrocheur (première ligne)
- [ ] Ton aligné avec le brief
- [ ] Données correctes (prix, macros) si mentionnées
- [ ] Hashtags pertinents
- [ ] Pas de répétition avec les derniers posts

**Si quelque chose ne va pas** :
```
Régénère l'image — [ce qui ne va pas]
Réécris la caption — [ce qui ne va pas]
```

---

## Résumé par mode

| Mode | Interventions opérateur | Durée estimée |
|------|------------------------|---------------|
| `full-ia` | Brief + validation mapping + vérif | ~10 min |
| `irl-sublimation` | Brief (+ photo) + validation + vérif | ~8 min |
| `compositing-irl` | Brief (+ 2 photos) + validation + vérif | ~8 min |
| `compositing-ia` | Brief (+ photo) + validation mapping + vérif | ~10 min |
| `template` | Brief (+ données slides) + validation + vérif | ~12 min |

---

## Stories — Pipeline séparé

```
/story-producer S[X] [jour]     # Un jour
/story-producer S[X]            # Toute la semaine
```

Le brief story est dans `posts-stories/stories/S[X]/[jour]/brief-story.md`.
Le pipeline gère automatiquement : copywriting → data mapping → template fill → render PNG.

**Nouveaux types v3** :
- **IRL** : photo brute + overlay DA minimal (coulisses, rush, ambiance)
- **Séquence** : multi-stories liées (1/3, 2/3, 3/3 pour process ou éducatif)
