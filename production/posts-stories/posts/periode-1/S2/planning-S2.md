# Planning S2 — 2026-03-17 → 2026-03-23

> **Période** : Période 1 — Compléter le mur visuel
> **Objectifs semaine** : Introduire STRICT Poulet et Wrap Poulet (diversité carte), ouvrir le pilier Macros avec une infographie nutritionnelle, approfondir le storytelling artisan (Myfitcheese). Diversifier les modes après une S1 100% full-ia.

---

## Règles de distribution

→ Voir `production/_templates/planning-semaine.md` pour les règles complètes.

**Rappel posts** :
- Jamais 2 posts consécutifs avec le même mode
- Au moins 3 modes différents par semaine (sur 4 posts)
- Au moins 3 piliers différents par semaine

---

## Posts (4 cette semaine)

| # | Jour | Pilier | Mode | Produit / Sujet | Format | Note |
|---|------|--------|------|-----------------|--------|------|
| 5 | Lun 17 | Le Plat | `full-ia` | STRICT Poulet | Photo unique 4:5 | Pipeline avancé (DA + input + prompt existants) |
| 6 | Mer 19 | Les Macros | `template` | Comparaison STRICT Bœuf vs burger classique | Carrousel 4 slides 4:5 | 1er post nutrition — infographie premium |
| 7 | Ven 21 | La Cuisine | `irl-sublimation` | Myfitcheese — fromage protéiné artisanal | Photo unique 4:5 | Focus artisan, photo réelle sublimée DA |
| 8 | Dim 23 | Le Plat | `compositing-ia` | STRICT Wrap Poulet | Photo unique 4:5 | Wrap = diversité carte, photo réelle + scène IA |

---

## Vérification distribution

### Posts — Modes cette semaine

| Mode | Count | Contrainte | OK ? |
|------|-------|------------|------|
| full-ia | 1/4 | Pas 2 consécutifs | ✅ |
| irl-sublimation | 1/4 | | ✅ |
| compositing-irl | 0/4 | | — |
| compositing-ia | 1/4 | | ✅ |
| template | 1/4 | | ✅ |
| **Total modes différents** | **4** | ≥ 3 | ✅ |

### Posts — Piliers cette semaine

| Pilier | Count | Cible mois |
|--------|-------|------------|
| Le Plat | 2/4 | 35% |
| La Cuisine | 1/4 | 25% |
| Les Macros | 1/4 | 18% |
| L'Équipe | 0/4 | 15% |
| Le Quartier | 0/4 | 7% |
| **Total piliers différents** | **3** | ≥ 3 | ✅ |

### Distribution cumulative S1+S2 (8 posts)

| Mode | S1 | S2 | Total | Cible |
|------|----|----|-------|-------|
| full-ia | 4 | 1 | 5/8 (62%) | ~30% |
| template | 0 | 1 | 1/8 (12%) | ~10% |
| irl-sublimation | 0 | 1 | 1/8 (12%) | ~25% |
| compositing-ia | 0 | 1 | 1/8 (12%) | ~15% |
| compositing-irl | 0 | 0 | 0/8 (0%) | ~20% |

> S1 était 100% full-ia (legacy v2, pré-pipeline v3). S2 diversifie avec 4 modes différents. Le rattrapage `compositing-irl` est à prévoir en S3.

### Distribution cumulative piliers S1+S2

| Pilier | S1 | S2 | Total | Cible |
|--------|----|----|-------|-------|
| Le Plat | 2 | 2 | 4/8 (50%) | 35% |
| La Cuisine | 1 | 1 | 2/8 (25%) | 25% |
| Les Macros | 0 | 1 | 1/8 (12%) | 18% |
| L'Équipe | 1 | 0 | 1/8 (12%) | 15% |
| Le Quartier | 0 | 0 | 0/8 (0%) | 7% |

> Le Plat est surreprésenté (normal en phase de lancement — installer le food porn d'abord). Le Quartier et L'Équipe seront renforcés en S3-S4 quand les photos IRL arriveront.

---

## Photos IRL à fournir cette semaine

| # | Sujet | Pour quel contenu | Cadrage souhaité | Priorité |
|---|-------|-------------------|------------------|----------|
| 1 | Fromage Myfitcheese en cuisine | Post #7 (irl-sublimation) | Plans serrés, mains gantées, texture du fromage visible, éclairage dramatique backstage | Haute |
| 2 | Wrap Poulet coupé ou tenu | Post #8 (compositing-ia, photo source produit) | Wrap coupé en diagonale, intérieur visible, fond neutre ou papier STRICT | Haute |

> Si les photos IRL ne sont pas disponibles à temps :
> - Post #7 : basculer sur `full-ia` avec la recette Myfitcheese
> - Post #8 : utiliser la photo existante `produits-source/strict-wrap-poulet.png`

---

## Notes de transition v2 → v3

Les 4 briefs S2 existent en format v2 (caption incluse, mode non spécifié → défaut `full-ia`). Ce planning assigne rétroactivement les modes optimaux :

| Post | Brief v2 (implicite) | Mode v3 assigné | Impact sur le brief |
|------|----------------------|-----------------|---------------------|
| S2-05 | full-ia | `full-ia` | Aucun — DA + input + prompt déjà produits |
| S2-06 | full-ia | `template` | Carrousel 4 slides infographique = template naturel |
| S2-07 | full-ia | `irl-sublimation` | Photo réelle sublimée — plus authentique pour pilier Cuisine |
| S2-08 | full-ia | `compositing-ia` | Photo wrap réelle + scène IA — montre le vrai produit |

> Les captions v2 dans les briefs restent utilisables comme Direction Caption pour `/caption-writer`.

---

## Checklist finale

- [x] Chaque post a un mode assigné
- [x] Jamais 2 posts consécutifs avec le même mode (full-ia → template → irl-sublimation → compositing-ia)
- [x] Au moins 3 modes différents (4 ✓)
- [x] Au moins 3 piliers différents (3 ✓)
- [x] Les photos IRL nécessaires sont listées et demandées
- [ ] Distribution piliers à rééquilibrer en S3 (L'Équipe + Le Quartier absents)
- [ ] Rattraper compositing-irl en S3

## Étape suivante

> Valider ce planning, puis lancer la production par post :
> 1. **Post #5** (Lun) : reprendre le pipeline — prompt déjà écrit, lancer la génération Gemini 4K
> 2. **Post #6** (Mer) : créer le template carrousel infographique (4 slides HTML → Puppeteer)
> 3. **Post #7** (Ven) : fournir la photo IRL Myfitcheese, puis `/instagram-producer 2026-03-21`
> 4. **Post #8** (Dim) : `/instagram-producer 2026-03-23`
