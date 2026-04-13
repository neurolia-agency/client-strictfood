# Guide Opérateur — Pipeline Instagram v6

Comment produire un post Instagram de A à Z. Tes interventions sont marquées `👤 TOI`, le reste est automatique.

---

## Vue d'ensemble

```
👤 TOI     Rédiger le planning semaine
👤 TOI     Rédiger les briefs (1 par post)
👤 TOI     Lancer le pipeline (1 prompt par post)
🤖 AUTO    [Pipeline adapté au mode]
👤 TOI     Valider le checkpoint (1 réponse)
🤖 AUTO    Génération brouillon (dans brouillons/)
👤 TOI     Vérifier le brouillon, itérer si besoin
👤 TOI     Valider → déplacement vers a-publier/
🤖 AUTO    Génération caption (après validation)
👤 TOI     Vérifier la caption
```

**Interventions : 5** (planning, brief, validation checkpoint, validation brouillon, vérification caption)

---

## Modes de création v6

| Mode | Description | Planifiable | API |
|------|-------------|-------------|-----|
| `full-ia` | Gemini génère tout (produit décrit + scène) | **Oui** (planning standard) | Gemini 2K |
| `edit-ia` | Photo lieu en input + produit décrit dans le prompt | **Non** (hors-planning uniquement) | Gemini 2K |
| `irl` | Photo fraîche en live + overlay minimal | **Non** (hors-planning uniquement) | Aucune |

> **Modes supprimés** : `irl-sublimation`, `compositing-irl`, `compositing-ia`, `scene-ia`, `irl-archive`, `template` (stories). Ces modes n'existent plus.
> **Planning standard** : utilise uniquement `full-ia`.
> **Hors-planning** (`/freestyle`) : peut utiliser `edit-ia` et `irl` en plus.

---

## Étape 0 — Planifier la semaine

### 🤖 AUTO — Scan des dossiers + historique

Claude **scanne les dossiers de production** et régénère `_config/historique-production.md`. L'historique reflète exactement ce qui est sur le disque — un fichier supprimé disparaît. Il identifie :
- Les produits déjà traités (pour éviter les doublons)
- Les piliers et modes sous-représentés (pour les prioriser)
- Les photos déjà utilisées (pour varier)

### 👤 TOI — Créer le planning

Copier le template `_templates/planning-semaine.md` dans `posts-stories/posts/periode-[N]/planning-S[X].md` et remplir :

1. **Distribuer les posts** sur la semaine (2 posts + 2 carrousels) :
   - Varier les **piliers** (Le Produit 55%, Les Bénéfices 35%, La Marque 10%)
   - Tous les posts en mode `full-ia`
   - Choisir un **concept visuel** pour chaque post (voir `_config/concepts-visuels.md`)

2. **Planifier les stories** par jour (3/jour) :
   - Distribution : food 40% · lifestyle 30% · brand 30%
   - Max 7 lifestyle/semaine
   - 1 rappel tous les 2 jours (remplace le slot Brand du jour)

3. **Vérifier la distribution piliers** (table en bas du planning)

### Vérification rapide

- [ ] Tous les posts sont en mode `full-ia`
- [ ] Les 3 piliers sont représentés sur le mois
- [ ] Les stories alternent food / lifestyle / brand
- [ ] Aucun mode `irl` ou `edit-ia` dans le planning standard

---

## Étape 1 — Préparer le brief

### 👤 TOI — Créer le dossier et le brief

```bash
mkdir -p production/posts-stories/posts/periode-[N]/S[X]/DD-MM-YYYY/brief
```

Copier le template `_templates/brief-v3.md` dans `brief/brief.md` et remplir :

- **Pilier** : Le Produit / Les Bénéfices / La Marque
- **Mode** : `full-ia` (planning standard)
- **Format** : Photo unique / Carrousel N slides
- **Objectif** : 1-3 phrases
- **Produit** : Nom + slug recette
- **Concept visuel** : choisi depuis `_config/concepts-visuels.md`
- **Direction Caption** : angle, ton, CTA, mentions (la caption sera générée automatiquement)

### Ce qui change par mode

| Mode | Ce que tu fournis dans le brief |
|------|--------------------------------|
| `full-ia` | Produit + slug + concept visuel. C'est tout. Le pipeline fait le reste. |
| `edit-ia` (hors-planning) | Chemin vers la photo lieu + produit + concept visuel |
| `irl` (hors-planning) | Chemin vers la photo fraîche. Overlay minimal uniquement. |

### Vérification rapide

- [ ] Le mode est spécifié
- [ ] La Direction Caption est remplie (angle + ton + CTA au minimum)
- [ ] Il n'y a PAS de caption complète dans le brief
- [ ] Aucune dépendance à des photos à prendre (`[À FOURNIR]` interdit)

---

## Étape 2 — Lancer le pipeline

### 👤 TOI — Un seul prompt

```
/instagram-producer DD-MM-YYYY
```

Le pipeline détecte le mode et route automatiquement. Tu n'as rien à choisir.

Pour le hors-planning :

```
/freestyle
```

---

## Étape 3 — Valider le checkpoint

### 👤 TOI — Répondre au checkpoint

**Mode `full-ia`** :
```
📋 CHECKPOINT — Input Mapping
Produit : [nom]
Concept visuel : [concept]
Direction scène : [résumé]

✅ Valider ?  ✏️ Modifier ?
```

**Mode `edit-ia`** (hors-planning) :
```
📋 CHECKPOINT — Edit IA
Photo lieu : [chemin]
Produit décrit : [résumé]

✅ Valider ?  ✏️ Modifier ?
```

---

## Étape 4 — Vérifier le brouillon

### 👤 TOI — Contrôle qualité du brouillon

Après le checkpoint, le pipeline génère le visuel dans `brouillons/` (pas dans `final/`).

**Tu vérifies le brouillon** :
- [ ] **⛔ Pain noir** : le burger a bien un bun noir (pas blanc/doré). Si blanc → bloquer.
- [ ] **⛔ Pas de grill marks** : croûte Maillard uniforme (air fryer, pas de grill).
- [ ] Fidélité produit (ingrédients corrects)
- [ ] DA respectée (fond, couleurs, ambiance)
- [ ] Qualité (pas d'artefacts IA)
- [ ] Composition cohérente

**Si des modifications sont nécessaires** :
```
Modifie le brouillon — [ce qui ne va pas]
Régénère le brouillon — [ce qui ne va pas]
```

Tu peux itérer autant de fois que nécessaire. Chaque nouvelle version reste dans `brouillons/`.

---

## Étape 5 — Valider et déplacer vers a-publier

### 👤 TOI — Validation

Quand le brouillon te convient :
```
C'est bon, valide
```

Le pipeline :
1. Déplace le brouillon validé vers `a-publier/[posts|stories]/` avec le nommage `DD-MM-YYYY-[slug]-[format].png`
2. Génère la caption automatiquement (via `/caption-writer`)
3. Copie la caption en `.txt` à côté du visuel

### 👤 TOI — Vérifier la caption

**Caption** :
- [ ] Hook accrocheur (première ligne)
- [ ] Ton aligné avec le brief
- [ ] Données correctes (prix, macros) si mentionnées
- [ ] Hashtags pertinents
- [ ] Pas de répétition avec les derniers posts
- [ ] "Pain noir" (jamais "pain" seul), "chaleur pulsée" (jamais "grillé")

**Si la caption ne va pas** :
```
Réécris la caption — [ce qui ne va pas]
```

---

## Résumé par mode

| Mode | Planifiable | Interventions opérateur |
|------|-------------|------------------------|
| `full-ia` | Oui | Brief + validation mapping + vérif brouillon + validation + vérif caption |
| `edit-ia` | Non (hors-planning) | Brief (+ photo lieu) + validation + vérif brouillon + validation + vérif caption |
| `irl` | Non (hors-planning) | Photo fraîche + vérif brouillon + validation + vérif caption |

---

## Stories — Pipeline séparé

```
/story-producer S[X] [jour]     # Un jour
/story-producer S[X]            # Toute la semaine
```

Le brief story est dans `posts-stories/stories/S[X]/[jour]/brief/brief-story.md`.

**Distribution stories** : food 40% · lifestyle 30% · brand 30%. Toutes en `full-ia`. 3 stories/jour.

**Même flux brouillon → a-publier/** : le premier render atterrit dans `brouillons/`. Tu vérifies, tu itères si besoin, puis tu valides le déplacement vers `a-publier/stories/`.
