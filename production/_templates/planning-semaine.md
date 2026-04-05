# Planning S[X] — [DATE_DEBUT] → [DATE_FIN]

> **Période** : [Période N — Nom]
> **Objectifs semaine** : [1-2 phrases]

---

## Étape 0 — Analyse des semaines précédentes (OBLIGATOIRE)

**Avant de planifier**, RÉGÉNÉRER `production/_config/historique-production.md` par scan des dossiers (voir procédure dans le fichier), puis analyser :

### Analyse posts

1. **Produits déjà couverts en post** : ne pas refaire un post sur un produit traité les 2 dernières semaines (sauf angle radicalement différent)
2. **Piliers en retard** : identifier les piliers sous-représentés vs la cible et les prioriser
3. **Traitements en retard** : identifier les traitements jamais ou peu utilisés et les forcer
4. **Angles éditoriaux** : varier (pas 2 hero shots du même style consécutifs)

### Analyse stories

5. **Produits déjà couverts en story** : ne pas refaire une fiche produit sur un produit qui a eu une fiche les 2 dernières semaines
6. **Artisans/ingrédients déjà couverts** : alterner les focus ingrédients (ne pas refaire le même artisan 2 semaines de suite)
7. **Axes interactifs déjà utilisés** : ne pas réutiliser un axe de sondage récent (consulter l'historique des interactifs)
8. **Modes stories en retard** : identifier les modes peu utilisés en story et les forcer

### Analyse symbiose posts ↔ stories

9. **Cohérence thématique** : les stories de la semaine doivent **compléter** les posts, pas les répéter
   - Un post "Le Plat" sur le Poulet → la story du même jour fait une fiche produit Poulet + un éducatif sur ses macros
   - Un post "La Cuisine" sur le process → les stories de la semaine incluent un IRL coulisses + un focus ingrédient
   - Un post "L'Équipe" sur Romain → une story IRL de Romain en cuisine le même jour
10. **Pas de doublon sujet** : si un post traite les macros du STRICT Bœuf, les stories ne font PAS un éducatif macros Bœuf la même semaine — elles traitent un autre produit ou un autre angle nutrition
11. **Photos partagées** : les photos utilisées en post ne doivent PAS être réutilisées en story la même semaine (varier les angles/variantes)

### Résumé des semaines précédentes (à remplir)

| Source | Constat | Action pour cette semaine |
|--------|---------|--------------------------|
| Posts | Pilier [X] à [N]% (cible [Y]%) | Placer [N] posts sur ce pilier |
| Posts | Traitement [X] à [N]% (cible [Y]%) | Forcer [N] posts avec ce traitement |
| Posts | Produit [X] fait S[N-1] | Ne pas le refaire en post |
| Posts | Produit [X] jamais couvert | Le planifier en post |
| Stories | Fiche produit [X] faite S[N-1] | Varier le produit en fiche |
| Stories | Artisan [X] couvert S[N-1] | Focus un autre artisan |
| Symbiose | Post [sujet] prévu → | Stories complémentaires à planifier |

---

## Traitements visuels posts — Distribution (cible mensuelle)

Le **traitement** détermine l'identité visuelle du post dans le feed. C'est la dimension principale du planning.

| Traitement | Cible | Rôle dans le feed |
|-----------|-------|------------------|
| `photo-pure` | ~45% | Produit seul, zéro overlay. Le food porn parle seul. |
| `knockout-band` | ~25% | Produit hero plein cadre + bande dome identitaire (charbon ou ambre) |
| `masque` | ~5% | Typo géante révèle le produit. Couvertures carrousels. |
| `masque-inverse` | ~5% | Texte ambre solide sur photo. Posts spéciaux. |
| `texture-fill` | ~10% | Lettres remplies par texture produit (bun sésame). Couvertures carrousels. |
| `triptych` | ~10% | 3 posts forment un visuel dans la grille (3240x1080 ou 3240x1350) |

### Source image (colonne secondaire)

La source image détermine COMMENT la photo de base est obtenue. Pertinent uniquement pour `photo-pure`, `knockout-band` et `triptych`.

| Source | Description |
|--------|-----------|
| `archive` | Photo existante dans `photos-references/` — utilisée telle quelle |
| `ia` | Générée par Gemini — produit DÉCRIT précisément depuis la fiche recette, PAS de photo référence jointe. Fond créatif varié (surfaces, atmosphères, fonds-ambre). |

> Pour `masque` et `texture-fill`, la source est automatique (archive pour le masque, SVG sésame ou bun-macro pour la texture).
> **INTERDIT** : compositing avec la salle de restaurant ou la devanture. Le produit est toujours décrit, jamais fourni en photo référence pour l'IA.

### Fond (65% ambre / 35% charbon)

| Fond | Hex | Traitements typiques |
|------|-----|---------------------|
| Ambre | `#E5A520` | photo-pure, masque, texture-fill, triptych |
| Charbon | `#1a1714` | photo-pure, knockout-band, masque-inverse |

> Le knockout-band fonctionne sur les DEUX fonds (bande charbon sur fond ambre, bande ambre sur fond charbon).

**Contraintes posts** :
- Jamais 2 posts consécutifs avec le même traitement
- Au moins 3 traitements différents par semaine (sur 4 posts)
- Au moins 3 piliers différents par semaine
- Max 1 triptych par quinzaine
- Les carrousels ont leur propre section (ne comptent plus dans les posts simples)

---

## Piliers — Distribution posts (cible mensuelle)

| Pilier | Cible | Traitements naturels (pas exclusifs) |
|--------|-------|--------------------------------------|
| Le Plat | 35% | photo-pure, knockout-band |
| La Cuisine | 25% | photo-pure, knockout-band |
| Les Macros | 18% | carousel, texture-fill |
| L'Équipe | 15% | photo-pure, masque |
| Le Quartier | 7% | photo-pure |

> Tout pilier peut utiliser tout traitement. Les affinités ci-dessus sont des guides, pas des obligations.

---

## Posts simples (objectif : 2 cette semaine)

| # | Jour | Pilier | Traitement | Source image | Fond | Produit / Sujet | Format | Note |
|---|------|--------|------------|-------------|------|-----------------|--------|------|
| 1 | | | | | | | Post 4:5 | |
| 2 | | | | | | | Post 4:5 | |

---

## Carrousels (objectif : 2 cette semaine)

> 9 types disponibles, 3 familles. Voir `_config/carousel-themes.md` pour la taxonomie complete.
> Distribution mensuelle : Panoramique 2-3 · Zoom Progressif 1-2 · Texture/ASMR 1 · Educatif 1 · Construction 0.5 · Ingredient Spotlight 0.5 · Defile Gamme 0.5 · Process Cuisine 0.5 · Menu Objectif 0.5

| # | Jour | Type | Famille | Pilier | Produit / Sujet | Slides | Theme/Scene slug | Note |
|---|------|------|---------|--------|-----------------|--------|-----------------|------|
| C1 | | | | | | | | |
| C2 | | | | | | | | |

### Familles de carrousels (reference rapide)

| Famille | Types | Pipeline |
|---------|-------|----------|
| **A — Texte** | Educatif, Ingredient Spotlight, Menu Objectif | `/carousel-producer DD-MM-YYYY` |
| **B — Photo** | Zoom Progressif, Texture/ASMR, Construction, Defile Gamme, Process Cuisine | Art Dir → Prompt × N slides → Gemini 4K |
| **C — Panoramique** | Panoramique | Prompt scene large → Gemini 4K 16:9 → `render-panoramic.js` |

### Briefs carrousels

| Famille | Template brief |
|---------|---------------|
| A | `_templates/brief-carousel.md` |
| B | `_templates/brief-carousel-photo.md` |
| C | `_templates/brief-carousel-panoramique.md` |

---

## Stories

| Jour | # | Type | Mode | Fond | Traitement | Concept visuel | Sujet | Lien post |
|------|---|------|------|------|-----------|---------------|-------|-----------|
| Lun | 1 | Food Porn | full-ia | ambre | — | macro / drip | [Produit macro] | Post #1 |
| Lun | 2 | Lifestyle | full-ia | — | — | lifestyle-street-art | Homme + sac kraft, mur graffiti [ref Pinterest] | — |
| Lun | 3 | Brand | full-ia | charbon+ambre | — | [concept brand] | [Educatif / fiche / interactif — visuel IA unique] | — |
| Mar | 1 | Lifestyle | full-ia | — | sillon | lifestyle-terrasse | Femme croquant burger, terrasse [ref Pinterest] | — |
| Mar | 2 | Food Porn | full-ia | ambre | — | sensation-overflow | [Burger genereux] | — |
| Mar | 3 | Brand | full-ia | charbon | — | [concept brand] | [Educatif / fiche / interactif — visuel IA unique] | — |
| Mer | 1 | Food Porn | full-ia | charbon | — | macro-texture | [Gros plan pain noir sesame] | Post #2 |
| Mer | 2 | Lifestyle | full-ia | — | — | lifestyle-escalier | Homme assis escalier + wrap [ref Pinterest] | — |
| Mer | 3 | Food Porn | full-ia | ambre+charbon | sceau | atmo-neon | [Produit eclairage chaud] | — |
| Jeu | 1 | Food Porn | full-ia | ambre | — | persp-pov | [POV burger] | — |
| Jeu | 2 | Lifestyle | full-ia | — | — | lifestyle-rue | Groupe partageant frites, rue [ref Pinterest] | — |
| Jeu | 3 | Brand | full-ia | charbon+ambre | — | [concept brand] | [Educatif / fiche / interactif — visuel IA unique] | — |
| Ven | 1 | Lifestyle | full-ia | — | sillon | lifestyle-parc | Femme + burger, banc parc golden hour [ref Pinterest] | Post #3 |
| Ven | 2 | Food Porn | full-ia | charbon+ambre | — | sensation-eclate | [Burger eclate] | — |
| Ven | 3 | Food Porn | full-ia | ambre | — | atmo-intime | [Produit sur surface texturee] | — |
| Sam | 1 | Lifestyle | full-ia | — | — | lifestyle-mur-uni | Homme + sac kraft, mur teal [ref Pinterest] | — |
| Sam | 2 | Food Porn | full-ia | ambre | sillon | sensation-fondu | [Fromage qui fond] | — |
| Sam | 3 | Brand | full-ia | ambre | — | [concept brand] | [Educatif / fiche / interactif — visuel IA unique] | — |
| Dim | 1 | Food Porn | full-ia | ambre | — | persp-rasante | [Produit angle rasant] | — |
| Dim | 2 | Lifestyle | full-ia | — | feuillete-photo | lifestyle-sortie | Femme sortant du resto + sac [ref Pinterest] | — |
| Dim | 3 | Food Porn | full-ia | charbon | — | mixed-grain-cinema | [Visuel cinematique] | — |

### Modes stories — Ce que chaque mode produit

| Mode story | Pipeline | Output | Cible |
|------------|----------|--------|-------|
| `full-ia` (food) | Prompt → Gemini 4K (9:16) → template | PNG 1080x1920 (produit IA) | **40%** |
| `full-ia` (lifestyle) | Photo ref → Analyse → Gemini 4K → (edit logo si sac) → template | PNG 1080x1920 (lifestyle) | **30%** |
| `full-ia` (brand) | Prompt → Gemini 4K (9:16) → template | PNG 1080x1920 (rappel, fiche, educatif, interactif) | **30%** |

> **100% full-ia** — Le mode `template` n'est plus utilise pour les stories (trop redondant visuellement, limite la creativite). Toutes les stories sont des visuels IA uniques.
> Les modes `edit-ia` et `irl` sont reserves au `hors-planning/`.
> **Templates stories** : `story-universal.html` (defaut) + `story-sillon.html`, `story-sceau.html`, `story-feuillete-photo.html`, `story-feuillete-data.html` (optionnels).

### Fonds stories (modes IA uniquement)

Le **fond** determine la palette de l'IMAGE GENEREE. Gere par `/image-prompt-engineer`, pas par le template.
Pertinent uniquement pour le mode `full-ia` (food et lifestyle).

| Fond | Description |
|------|-----------|
| `ambre` | Surface/fond ambre dore texture (#E5A520) |
| `charbon` | Surface/fond charbon sombre (#1a1714) |
| `ambre+charbon` | Fond ambre + accessoires charbon (papier kraft noir, ardoise, ustensiles sombres) |
| `charbon+ambre` | Fond charbon + accessoires ambre (serviette doree, sauce visible, eclats sesame) |

### Traitements stories (optionnel)

Le **traitement** determine le template HTML utilise pour la story. Si vide ou `—`, c'est `photo-pure` (story-universal.html, comme avant).

| Traitement | Template | Usage |
|-----------|----------|-------|
| *(vide)* / `photo-pure` | `story-universal.html` | Default — photo plein cadre + overlay minimal |
| `sillon` | `story-sillon.html` | Photo haut + arc dome + zone ambre bas (nom produit, macros) |
| `sceau` | `story-sceau.html` | Photo + cercle glassmorphism avec arc dome (nom, info) |
| `feuillete-photo` | `story-feuillete-photo.html` | Photo plein cadre + bandeau dome ambre en haut (sequence) |
| `feuillete-data` | `story-feuillete-data.html` | Fond charbon + donnee geante (chiffre, horaires, CTA) |

### Stories Lifestyle (~30% des stories, max 7/semaine — type `lifestyle` dans la colonne Type)

Le type `lifestyle` est un sous-type de `full-ia` qui met en scene un PERSONNAGE avec un PRODUIT StrictFood dans un contexte urbain/quotidien. C'est 30% de la production stories — un pilier majeur, pas un format special.

Voir `_config/lifestyle-process.md` pour le process complet.

**Ce qu'on peut mettre en scene (pas que le sac kraft)** :
- Personne tenant un sac kraft noir StrictFood (logo ajoute en etape 2)
- Personne croquant dans un burger black bun
- Personne assise a table avec un repas StrictFood (burger + frites + boisson)
- Groupe partageant des tenders/frites
- Personne tenant un wrap ou un burger en marchant
- Gros plan mains + produit dans un contexte lifestyle (terrasse, parc, rue)

**Au planning** : quand on place une story lifestyle, on doit :
1. Choisir un **concept** dans `_config/concepts-visuels.md` section "Lifestyle IA"
2. Choisir le **produit** mis en scene (burger, wrap, frites, sac, repas complet)
3. Preparer une **photo de reference** : chercher sur Pinterest/IG un modele d'inspiration (voir banque de mots-cles dans `_config/lifestyle-process.md`)
4. Noter la **photo reference** + le **produit** dans la colonne Sujet

**Ce qui se passe ensuite (au brief/production)** :
- Claude analyse la photo de reference (morphologie, tenue, posture, fond)
- Claude adapte pour StrictFood (piece ambre, produit StrictFood, regard candid)
- Generation IA (+ edit logo si sac kraft present)

**Dans le tableau** : Type = `Lifestyle`, Mode = `full-ia`, Concept = `lifestyle-*`

**Contraintes** :
- Varier les concepts lifestyle (pas 2x meme scene la meme semaine)
- Varier les personnages (homme/femme, ages, styles, morphologies)
- Varier les produits (pas 3x sac kraft d'affilee — alterner burger, wrap, frites, sac, repas)
- Le personnage ne regarde JAMAIS la camera

### Stories Rappel (story #4 bonus — 1 fois tous les 2 jours)

Le type `Rappel` est une story BONUS ajoutee en #4 tous les 2 jours. Elle ne compte PAS dans la distribution des 3 stories principales. C'est un rappel de presence avec accroche + CTA (telephone, horaires, adresse).

**Mode : full-ia** — le rappel est un visuel IA unique (scene restaurant, devanture stylisee, ambiance soiree, etc.), PAS un template avec photo reelle. L'info (horaires, adresse, tel) est integree soit dans le visuel IA, soit ajoutee en overlay natif Instagram par l'operateur.

Voir `_config/story-rappel.md` pour les accroches et CTA.

**Au planning** : placer une story #4 Rappel les jours **mardi, jeudi, samedi** (ou **mercredi, vendredi, dimanche** — alterner par semaine).

**Dans le tableau** : Type = `Rappel`, Mode = `full-ia`, # = `4`

**Contraintes Rappel** :
- Alterner les accroches (pas la meme en 2 semaines)
- Alterner le CTA (telephone → horaires → adresse → telephone...)
- Pas de rappel le lundi (ferme)
- Chaque rappel a une direction creative unique (pas de copier-coller visuel)

**Contraintes stories** :
- Toutes les stories en `full-ia` (100% IA, mode `template` deprecie)
- **Max 7 lifestyle/semaine**
- Chaque story a un **concept visuel** assigne (depuis `_config/concepts-visuels.md`)
- Chaque story a une **intention** assignee (`envie` / `curiosite` / `confiance` / `presence`)
- Chaque story en mode IA a un **fond** assigne (ambre, charbon, ambre+charbon, charbon+ambre)

**Regles de rotation anti-monotonie (stories)** :
- **Concept** : pas 2 stories consecutives avec le MEME concept visuel
- **Intention** : pas 2 stories consecutives avec la MEME intention emotionnelle
- **Produit** : pas 2 stories consecutives avec le MEME produit
- **Fond** : alterner charbon-dominant et ambre-dominant dans la journee
- **Signature Charbon × Ambre** : chaque story respecte la dualite (accent 15-20% du cadre)
- Si la sequence du jour est story #1 → #2 → #3, varier au minimum 2 des 3 axes (concept, intention, produit) entre chaque paire consecutive

**Symbiose post ↔ story** :
- Les jours de post, les stories **complètent** le post
- Les jours sans post, les stories couvrent d'**autres sujets**
- Un produit couvert en post cette semaine ne refait PAS une fiche produit story la même semaine
- Les photos utilisées en post ne sont PAS réutilisées en story la même semaine

---

## Vérification distribution (à remplir après le planning)

### Posts simples — Traitements cette semaine

| Traitement | Count | Contrainte | OK ? |
|-----------|-------|------------|------|
| photo-pure | /2 | | |
| knockout-band | /2 | | |
| masque / masque-inverse | /2 | | |
| texture-fill | /2 | | |
| triptych | /2 | Max 1/quinzaine | |

### Posts simples — Fonds cette semaine

| Fond | Count | Cible |
|------|-------|-------|
| Ambre | /2 | ~65% |
| Charbon | /2 | ~35% |

### Carrousels cette semaine

| Type | Famille | OK ? |
|------|---------|------|
| [Type C1] | [A/B/C] | |
| [Type C2] | [A/B/C] | |
| Pas 2 memes types d'affilee | | |
| Pas 2 memes produits en carrousel que semaine derniere | | |

### Publications — Piliers cette semaine (posts + carrousels)

| Pilier | Count | Cible mois |
|--------|-------|------------|
| Le Produit | /4 | 55% |
| Les Benefices | /4 | 35% |
| La Marque | /4 | 10% |
| **Total piliers differents** | | ≥ 2 |

### Stories — Modes cette semaine

| Mode | Count | Cible |
|------|-------|-------|
| full-ia (food) | /~21 | ~40% |
| full-ia (lifestyle) | /~21 | ~30% |
| full-ia (brand) | /~21 | ~30% |

### Stories — Fonds cette semaine (modes IA uniquement)

| Fond | Count | Cible |
|------|-------|-------|
| ambre | /~N | ~50% |
| charbon | /~N | ~25% |
| ambre+charbon | /~N | ~15% |
| charbon+ambre | /~N | ~10% |

### Stories — Traitements cette semaine

| Traitement | Count |
|-----------|-------|
| photo-pure (defaut) | /~21 |
| sillon | /~21 |
| sceau | /~21 |
| feuillete-photo | /~21 |
| feuillete-data | /~21 |

### Stories — Lifestyle cette semaine

| Dimension | Detail |
|-----------|--------|
| Count lifestyle | /~21 (cible ~30%) |
| Personnages varies | [H/F/mix] |
| Produits varies | [sac/burger/wrap/frites/repas] |
| Concepts varies | [pas 2x meme concept] |

---

## Photos IRL optionnelles (bonus)

> Si Romain fournit spontanément des photos fraîches, elles alimentent `hors-planning/`. Le planning standard ne dépend JAMAIS de photos à prendre.

---

## Checklist finale

- [ ] Chaque post a un **traitement** assigné
- [ ] Chaque post a un **fond** assigné (ambre ou charbon)
- [ ] Chaque post a une **source image** assignée (si applicable)
- [ ] Jamais 2 posts consécutifs avec le même traitement
- [ ] Au moins 3 traitements différents dans les posts de la semaine
- [ ] Au moins 2 piliers différents dans les posts de la semaine
- [ ] Ratio fonds ~65% ambre / ~35% charbon
- [ ] Max 1 triptych par quinzaine
- [ ] Chaque story a un **concept visuel** assigne (depuis `_config/concepts-visuels.md`)
- [ ] Chaque story a une **intention** assignee (`envie` / `curiosite` / `confiance` / `presence`)
- [ ] Chaque story a un **fond** assigne
- [ ] **Rotation concept** : pas 2 stories consecutives avec le meme concept
- [ ] **Rotation intention** : pas 2 stories consecutives avec la meme intention
- [ ] **Rotation produit** : pas 2 stories consecutives avec le meme produit
- [ ] **Signature Charbon × Ambre** : chaque story a les 2 couleurs (accent 15-20%)
- [ ] Les traitements stories sont varies (pas 3 sillons d'affilee)
- [ ] ~30% des stories sont lifestyle (max 7 sur ~21)
- [ ] Chaque story lifestyle a un concept `lifestyle-*`, un produit et une photo reference
- [ ] Les personnages lifestyle sont varies (H/F, ages, styles)
- [ ] Aucun brief ne contient "[A FOURNIR]"
- [ ] Le mode `template` n'apparait PAS dans le planning stories (100% full-ia)
- [ ] Le mode `irl` n'apparait PAS dans le planning standard

## Étape suivante

> Valider ce planning, puis créer les briefs individuels.
> Le traitement de chaque brief est **déjà décidé** — le brief le reprend sans le remettre en question.
