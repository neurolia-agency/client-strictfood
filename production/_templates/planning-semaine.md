# Planning S[X] — [DATE_DEBUT] → [DATE_FIN]

> **Période** : [Période N — Nom]
> **Objectifs semaine** : [1-2 phrases]

---

## Règles de distribution

Le planning assure le **relief visuel** du feed et des stories. Chaque contenu a un pilier, un mode de production et un type. Les règles ci-dessous garantissent la variété.

### Posts — Distribution modes (cible mensuelle)

| Mode | Cible | Rôle dans le mix |
|------|-------|-----------------|
| `full-ia` | ~30% | Food porn pur, scènes élaborées, nouveau produit |
| `irl-sublimation` | ~25% | Authenticité, coulisses, portraits réels |
| `compositing-irl` | ~20% | Produit immergé dans le lieu réel |
| `compositing-ia` | ~15% | Produit réel dans ambiance cinématique IA |
| `template` | ~10% | Infographies, carrousels data, comparaisons |

**Contraintes posts** :
- Jamais 2 posts consécutifs avec le même mode
- Au moins 3 modes différents par semaine (sur 4 posts)
- Au moins 3 piliers différents par semaine

### Stories — Distribution modes (cible hebdomadaire, ~25 stories)

| Mode | Cible | Count/sem | Rôle dans le mix |
|------|-------|-----------|-----------------|
| `template` | ~50% | ~12-13 | Fiches produit, éducatifs, interactifs, annonces |
| `irl` | ~20% | ~5 | Photo brute overlay minimal (rush, coulisses, ambiance) |
| `irl-sublimation` | ~15% | ~3-4 | Photo sublimée DA en 9:16 (beau plat IRL, portrait) |
| `compositing-irl` | ~10% | ~2-3 | Produit dans le lieu (comptoir, salle, devanture) |
| `full-ia` | ~5% | ~1 | Visuel IA impactant en story (teaser spécial, lancement) |

**Contraintes stories** :
- Chaque jour a au moins 2 modes différents parmi ses stories
- Pas plus de 3 stories template consécutives dans une journée
- Au moins 1 story non-template par jour (irl, sublimation, compositing ou full-ia)
- Max 3 interactifs/semaine
- Alterner Vitrine et Dark Premium chaque jour

### Piliers — Distribution posts (cible mensuelle)

| Pilier | Cible | Modes naturels (pas exclusifs) |
|--------|-------|-------------------------------|
| Le Plat | 35% | full-ia, compositing-ia, irl-sublimation |
| La Cuisine | 25% | irl-sublimation, compositing-irl, irl |
| Les Macros | 18% | template, full-ia |
| L'Équipe | 15% | irl-sublimation, compositing-irl |
| Le Quartier | 7% | irl-sublimation, compositing-irl |

> Tout pilier peut utiliser tout mode. Les "modes naturels" sont des affinités, pas des obligations.

---

## Posts (objectif : [3-4] cette semaine)

| # | Jour | Pilier | Mode | Produit / Sujet | Format | Note |
|---|------|--------|------|-----------------|--------|------|
| 1 | Lun | | | | | |
| 2 | Mer | | | | | |
| 3 | Ven | | | | | |
| 4 | Dim | | | | | |

---

## Stories

| Jour | # | Type | Mode | Sujet | Lien post |
|------|---|------|------|-------|-----------|
| Lun | 1 | Teaser | template | Teaser post du jour | Post #1 |
| Lun | 2 | Fiche Produit | template | [Produit] | Post #1 |
| Lun | 3 | IRL | irl | Coulisses préparation | — |
| Mar | 1 | Éducatif | template | [Sujet nutrition] | — |
| Mar | 2 | Focus Ingrédient | irl-sublimation | [Photo ingrédient sublimée] | — |
| Mar | 3 | Annonce | template | [Horaires/Nouveauté] | — |
| Mer | 1 | Teaser | template | Teaser post du jour | Post #2 |
| Mer | 2 | Fiche Produit | template | [Produit] | Post #2 |
| Mer | 3 | IRL | irl | Rush du midi | — |
| Jeu | 1 | Produit DA | irl-sublimation | [Beau plat sublimé en story] | — |
| Jeu | 2 | Interactif | template | [Question] | — |
| Jeu | 3 | Produit en situation | compositing-irl | [Produit sur comptoir] | — |
| Ven | 1 | Teaser | template | Teaser post du jour | Post #3 |
| Ven | 2 | IRL | irl | Ambiance vendredi soir | — |
| Ven | 3 | Focus Ingrédient | template | [Ingrédient] | — |
| Sam | 1 | Interactif | template | [Question fun] | — |
| Sam | 2 | Produit DA | compositing-irl | [Produit + devanture] | — |
| Sam | 3 | Recap | — | Meilleur post semaine | — |
| Dim | 1 | IRL | irl | Ambiance dimanche | — |
| Dim | 2 | Fiche Produit | template | [Produit] | — |
| Dim | 3 | Visuel IA | full-ia | [Teaser ou lancement spécial] | — |

### Modes stories — Ce que chaque mode produit

| Mode story | Pipeline | Output |
|------------|----------|--------|
| `template` | Brief → Copywriter → Data Mapper → HTML fill → Puppeteer | PNG 1080×1920 (template DA) |
| `irl` | Photo brute → `irl-story.html` overlay → Puppeteer | PNG 1080×1920 (photo + overlay minimal) |
| `irl-sublimation` | Photo → Sublimation GPT Images (9:16) | PNG 1080×1920 (photo sublimée DA) |
| `compositing-irl` | 2 photos → Compositing GPT Images (9:16) | PNG 1080×1920 (montage réaliste) |
| `full-ia` | Prompt → Gemini (9:16) | PNG 1080×1920 (visuel IA) |

> Les stories `irl-sublimation`, `compositing-irl` et `full-ia` produisent une image plein cadre sans template HTML. Le logo et un éventuel texte court peuvent être ajoutés en overlay via `irl-story.html`.

---

## Vérification distribution (à remplir après le planning)

### Posts — Modes cette semaine

| Mode | Count | Contrainte | OK ? |
|------|-------|------------|------|
| full-ia | /4 | Pas 2 consécutifs | |
| irl-sublimation | /4 | | |
| compositing-irl | /4 | | |
| compositing-ia | /4 | | |
| template | /4 | | |
| **Total modes différents** | | ≥ 3 | |

### Posts — Piliers cette semaine

| Pilier | Count | Cible mois |
|--------|-------|------------|
| Le Plat | /4 | 35% |
| La Cuisine | /4 | 25% |
| Les Macros | /4 | 18% |
| L'Équipe | /4 | 15% |
| Le Quartier | /4 | 7% |
| **Total piliers différents** | | ≥ 3 |

### Stories — Modes cette semaine

| Mode | Count | Cible |
|------|-------|-------|
| template | /~21 | ~50% |
| irl | /~21 | ~20% |
| irl-sublimation | /~21 | ~15% |
| compositing-irl | /~21 | ~10% |
| full-ia | /~21 | ~5% |

### Stories — Mix quotidien

| Jour | Modes utilisés | ≥2 modes ? | Vitrine + Dark ? |
|------|---------------|------------|-----------------|
| Lun | | | |
| Mar | | | |
| Mer | | | |
| Jeu | | | |
| Ven | | | |
| Sam | | | |
| Dim | | | |

---

## Photos IRL à fournir cette semaine

> Lister ici les photos que Romain/Dorian doivent prendre AVANT la semaine.

| # | Sujet | Pour quel contenu | Cadrage souhaité | Priorité |
|---|-------|-------------------|------------------|----------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

---

## Checklist finale

- [ ] Chaque post et chaque story a un mode assigné
- [ ] Jamais 2 posts consécutifs avec le même mode
- [ ] Au moins 3 modes différents dans les posts de la semaine
- [ ] Au moins 3 piliers différents dans les posts de la semaine
- [ ] Chaque jour de stories a au moins 2 modes différents
- [ ] Au moins 1 story non-template par jour
- [ ] Max 3 interactifs sur la semaine
- [ ] Chaque jour de post a un Teaser associé
- [ ] Les photos IRL nécessaires sont listées et demandées
- [ ] La distribution piliers est cohérente avec la cible mensuelle

## Étape suivante

> Valider ce planning, puis créer les briefs individuels.
> Le mode de chaque brief est **déjà décidé** — le brief le reprend sans le remettre en question.
