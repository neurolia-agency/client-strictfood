# Planning S[X] — [DATE_DEBUT] → [DATE_FIN]

> **Période** : [Période N — Nom]
> **Objectifs semaine** : [1-2 phrases — ex: "Compléter le mur visuel. Introduire le pilier Macros."]

---

## Posts (objectif : [3-4] cette semaine)

| # | Jour | Pilier | Mode | Produit / Sujet | Format | Note |
|---|------|--------|------|-----------------|--------|------|
| 1 | Lun | Le Plat | full-ia | [Produit] | Photo unique | [angle, intention] |
| 2 | Mer | Les Macros | template | [Sujet comparaison] | Carrousel 3 slides | [infographie] |
| 3 | Ven | La Cuisine | irl-sublimation | [Process / sujet] | Photo unique | [photo par Romain/Dorian] |
| 4 | Dim | L'Équipe | compositing-irl | [Sujet portrait] | Photo unique | [portrait + devanture] |

### Modes disponibles

| Mode | Description | Pipeline |
|------|-------------|----------|
| `full-ia` | Gemini génère tout (produit + scène) | Art Direction → Input Mapping → Prompt → Gemini 4K |
| `irl-sublimation` | Photo réelle sublimée pour aligner DA | Photo source → Sublimation → GPT Images |
| `compositing-irl` | 2 photos réelles mixées (produit + lieu) | Photo produit + Photo lieu → Compositing → GPT Images |
| `compositing-ia` | Photo produit réelle dans scène IA | Photo produit → Art Direction scène → Prompt → Gemini 4K |
| `template` | Carrousels, infographies (HTML → Puppeteer) | Data mapping → Template HTML → Puppeteer |

---

## Stories (objectif : 3-4/jour)

| Jour | # | Type | Template / Mode | Sujet | Lien post |
|------|---|------|-----------------|-------|-----------|
| Lun | 1 | Teaser | `teaser-post.html` | Teaser post du jour | Post #1 |
| Lun | 2 | Fiche Produit | `produit-vitrine.html` | [Produit] | Post #1 |
| Lun | 3 | Interactif | `interactif.html` | [Question] | — |
| Mar | 1 | Éducatif | `educatif.html` | [Sujet nutrition] | — |
| Mar | 2 | Focus Ingrédient | `focus-ingredient.html` | [Ingrédient] | — |
| Mer | 1 | Teaser | `teaser-post.html` | Teaser carrousel | Post #2 |
| Mer | 2 | Séquence (1/2) | `educatif.html` | [Étape 1 du process] | Post #2 |
| Mer | 3 | Séquence (2/2) | `educatif.html` | [Étape 2 du process] | Post #2 |
| Jeu | 1 | IRL | irl-story | Coulisses cuisine | — |
| Jeu | 2 | Fiche Produit | `produit-vitrine.html` | [Produit] | — |
| Ven | 1 | Teaser | `teaser-post.html` | Teaser post cuisine | Post #3 |
| Ven | 2 | Annonce | `annonce.html` | Horaires week-end | — |
| Sam | 1 | Interactif | `interactif.html` | [Question fun] | — |
| Sam | 2 | Recap | — (repost) | Meilleur post semaine | — |
| Dim | 1 | IRL | irl-story | Ambiance dimanche | — |
| Dim | 2 | Fiche Produit | `produit-vitrine.html` | [Produit] | — |

### Types de stories

| Type | Template | Famille | Note |
|------|----------|---------|------|
| Fiche Produit | `produit-vitrine.html` | Vitrine | Données auto depuis `_recettes/` |
| Focus Ingrédient | `focus-ingredient.html` | Vitrine | Fournisseur + fait clé |
| Interactif | `interactif.html` | Dark Premium | Max 3/semaine |
| Éducatif | `educatif.html` | Dark Premium | Nutrition, comparaisons |
| Annonce | `annonce.html` | Dark Premium | Horaires, nouveautés, lieu |
| Teaser | `teaser-post.html` | Dark Premium | Avant chaque post |
| **IRL** | `irl-story.html` | Dark Premium | **Photo brute + overlay DA minimal** |
| **Séquence** | template existant | Variable | **Multi-stories liées (1/N, 2/N...)** |
| Recap | — | Semi-manuel | Repost meilleur post |

---

## Distribution piliers (vérification)

| Pilier | Cible stratégie | Cette semaine | OK ? |
|--------|-----------------|---------------|------|
| Le Plat | 35% | /4 (%) | |
| La Cuisine | 25% | /4 (%) | |
| Les Macros | 18% | /4 (%) | |
| L'Équipe | 15% | /4 (%) | |
| Le Quartier | 7% | /4 (%) | |

> **Règle** : sur 4 semaines, chaque pilier doit être représenté au moins une fois.
> La distribution exacte par semaine peut varier, c'est la moyenne mensuelle qui compte.

---

## Checklist avant briefs

- [ ] Chaque post a un mode de création assigné
- [ ] Les photos IRL nécessaires sont identifiées (à fournir par l'équipe)
- [ ] Les posts template ont un sujet et un nombre de slides définis
- [ ] Les stories alternent Dark Premium et Vitrine chaque jour
- [ ] Max 3 stories interactives sur la semaine
- [ ] Chaque jour de post a un Teaser story associé

## Étape suivante

> Valider ce planning avec l'opérateur, puis créer les briefs individuels (`brief-v3.md` pour les posts, `brief-story.md` pour les stories).
