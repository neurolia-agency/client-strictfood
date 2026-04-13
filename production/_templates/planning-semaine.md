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

5. **Lire `_config/story-combinations.md`** (OBLIGATOIRE) — ce fichier contient le generateur de combinaisons. Suivre la procedure en 4 etapes :
   - **Etape 1** : lire l'historique stories (produits, concepts, fonds, intentions des 21 dernieres stories)
   - **Etape 2** : identifier les manques (produit jamais couvert, famille de concepts absente, fond desequilibre, intention manquante)
   - **Etape 3** : generer les combinaisons pour chaque jour (produit × concept × fond × intention) AVANT de rediger les briefs
   - **Etape 4** : valider la semaine (couverture produit, variete concepts, ratio fonds, rotation)
6. **Produits sous-representes** : forcer les produits absents de la semaine precedente (wraps, falafel, frites/tenders)
7. **Concepts sous-representes** : si la semaine precedente etait dominee par hero-3/4, forcer des concepts action/macro/perspective cette semaine
8. **Hero-3/4 LIMITE** : max 3 stories hero-3/4 sur 21 (~15%). Privilegier les concepts action, macro, perspective, atmosphere

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
| Ambre | `#FABA43` | photo-pure, masque, texture-fill, triptych |
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
| **B — Photo** | Zoom Progressif, Texture/ASMR, Construction, Defile Gamme, Process Cuisine | Art Dir → Prompt × N slides → Gemini 2K |
| **C — Panoramique** | Panoramique | Prompt scene large → Gemini 2K 16:9 → `render-panoramic.js` |

### Briefs carrousels

| Famille | Template brief |
|---------|---------------|
| A | `_templates/brief-carousel.md` |
| B | `_templates/brief-carousel-photo.md` |
| C | `_templates/brief-carousel-panoramique.md` |

---

## Stories

> **Procedure** : AVANT de remplir ce tableau, suivre la procedure de `_config/story-combinations.md` :
> 1. Lire l'historique (produits, concepts, fonds, intentions de la semaine precedente)
> 2. Identifier les manques (produit absent, concept sous-represente, fond desequilibre)
> 3. Generer les combinaisons jour par jour
> 4. Valider la semaine (couverture, rotation, ratio)

| Jour | # | Type | Produit | Concept | Fond | Intention | Traitement | Description courte |
|------|---|------|---------|---------|------|-----------|------------|-------------------|
| Lun | 1 | Food | [slug] | [concept] | [charbon/ambre/...] | [envie/curiosite/confiance/presence] | [— / sillon / sceau / ...] | [1 phrase : mise en scene] |
| Lun | 2 | Lifestyle | [slug ou —] | [lifestyle-*] | [—] | [intention] | [—] | [personnage + scene + ref Pinterest] |
| Lun | 3 | Brand | [slug ou —] | [concept brand] | [charbon/ambre] | [presence] | [—] | [accroche / rappel / educatif] |
| Mar | 1 | | | | | | | |
| Mar | 2 | | | | | | | |
| Mar | 3 | | | | | | | |
| Mer | 1 | | | | | | | |
| Mer | 2 | | | | | | | |
| Mer | 3 | | | | | | | |
| Jeu | 1 | | | | | | | |
| Jeu | 2 | | | | | | | |
| Jeu | 3 | | | | | | | |
| Ven | 1 | | | | | | | |
| Ven | 2 | | | | | | | |
| Ven | 3 | | | | | | | |
| Sam | 1 | | | | | | | |
| Sam | 2 | | | | | | | |
| Sam | 3 | | | | | | | |
| Dim | 1 | | | | | | | |
| Dim | 2 | | | | | | | |
| Dim | 3 | | | | | | | |

**Regles de remplissage :**
- **Produit** : slug recette (`strict-boeuf`, `strict-wrap-poulet`, etc.) — chaque produit au moins 1x/semaine
- **Concept** : depuis `_config/concepts-visuels.md` ou `_config/story-combinations.md` — PAS 2 consecutifs identiques
- **Fond** : alterner charbon-dominant et ambre-dominant dans la journee
- **Intention** : PAS 2 consecutives identiques. Ratio cible : envie ~40%, curiosite ~25%, confiance ~25%, presence ~10%
- **hero-3/4 LIMITE** : max 3 sur 21 stories (~15%)
- **Type** : food ~40% (8-9), lifestyle ~30% (6-7), brand ~30% (6-7) dont **2 avis Google/semaine**
- **Signature Charbon × Ambre** : les 2 couleurs presentes sur chaque story (accent 15-20%)

### Modes stories — Ce que chaque mode produit

| Mode story | Pipeline | Output | Cible |
|------------|----------|--------|-------|
| `full-ia` (food) | Prompt → Gemini 2K (9:16) → template | PNG 1080x1920 (produit IA) | **40%** |
| `full-ia` (lifestyle) | Photo ref → Analyse → Gemini 2K → (edit logo si sac) → template | PNG 1080x1920 (lifestyle) | **30%** |
| `full-ia` (brand) | Prompt → Gemini 2K (9:16) → template | PNG 1080x1920 (rappel, fiche, educatif, interactif) | **30%** |

> **100% full-ia** — Le mode `template` n'est plus utilise pour les stories (trop redondant visuellement, limite la creativite). Toutes les stories sont des visuels IA uniques.
> Les modes `edit-ia` et `irl` sont reserves au `hors-planning/`.
> **Templates stories** : `story-universal.html` (defaut) + `story-sillon.html`, `story-sceau.html`, `story-feuillete-photo.html`, `story-feuillete-data.html` (optionnels).

### Fonds stories (modes IA uniquement)

Le **fond** determine la palette de l'IMAGE GENEREE. Gere par `/image-prompt-engineer`, pas par le template.
Pertinent uniquement pour le mode `full-ia` (food et lifestyle).

| Fond | Description |
|------|-----------|
| `ambre` | Surface/fond ambre dore texture (#FABA43) |
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
| `avis` | `story-avis.html` | Avis Google (1-3 avis, fond ambre, speech bubbles) |

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

### Stories Avis Google (2/semaine — type `Brand/Avis` dans la colonne Type)

Le type `Avis` affiche 1 à 3 avis Google réels dans le template `story-avis.html`. C'est une preuve sociale forte qui renforce la confiance. Les stories avis comptent dans le quota Brand (~30%).

**Mode : template** — le template `story-avis.html` est rempli avec les données des avis et rendu via Puppeteer (1080x1920). Ce n'est PAS le template `story-universal.html` déprécié — c'est un template graphique dédié avec fond ambre, speech bubbles, étoiles dorées et rappels de marque.

**Au planning** : placer 2 stories avis/semaine, de préférence sur des jours différents (ex: mercredi + samedi). Elles remplacent un slot Brand (#3) du jour.

**Dans le tableau** : Type = `Brand/Avis`, Intention = `confiance`, Concept = `—`, Fond = `—`, Traitement = `avis`

**Brief** : utiliser `_templates/brief-story-avis.md` — sélectionner 1 à 3 avis Google récents, corriger les accents, varier les couleurs d'avatar.

**Contraintes Avis** :
- 2 avis/semaine exactement — pas plus, pas moins
- Les avis remplacent des slots Brand (#3) — le total reste 3 stories/jour
- Ne pas réutiliser un avis déjà publié
- Accents obligatoires dans les textes des avis
- Varier le nombre d'avis par story (alterner 2 avis et 3 avis)
- Sélectionner des avis qui mentionnent des points clés (qualité, santé, goût, service, ambiance)

### Stories Rappel (story #4 bonus — 1 fois tous les 2 jours)

Le type `Rappel` est une story BONUS ajoutee en #4 tous les 2 jours. Elle ne compte PAS dans la distribution des 3 stories principales. C'est un rappel de presence avec accroche + CTA (telephone, horaires, adresse).

**Mode : full-ia** — le rappel est un visuel IA unique (scene restaurant, devanture stylisee, ambiance soiree, etc.), PAS un template avec photo reelle. L'info (horaires, adresse, tel) est integree soit dans le visuel IA, soit ajoutee en overlay natif Instagram par l'operateur.

Voir `_config/story-rappel.md` pour les accroches et CTA.

**Au planning** : le rappel REMPLACE l'une des 3 stories du jour (slot #3 = Brand par defaut). Publier 1 rappel tous les 2 jours : **mardi, jeudi, samedi** (ou **mercredi, vendredi, dimanche** — alterner par semaine). Le rythme reste 3 stories/jour, pas 4.

**Dans le tableau** : Type = `Brand/Rappel`, Intention = `presence`, # = `3` (remplace le slot Brand du jour)

**Contraintes Rappel** :
- 1 rappel tous les 2 jours = 3-4 rappels/semaine dans les 21 stories
- Le rappel REMPLACE le slot Brand du jour — pas de story supplementaire
- Alterner les accroches (pas la meme en 2 semaines)
- Alterner le CTA (telephone → horaires → adresse → telephone...)
- Pas de rappel le lundi (ferme)
- Chaque rappel a une direction creative unique (pas de copier-coller visuel)
- Le rappel compte dans le quota Brand (~30%) et dans l'intention `presence`

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
| avis | /~21 | cible : 2/semaine |

### Stories — Intentions cette semaine

| Intention | Count | Cible |
|-----------|-------|-------|
| envie | /~21 | ~40% (8-9) |
| curiosite | /~21 | ~25% (5-6) |
| confiance | /~21 | ~25% (5-6) |
| presence | /~21 | ~10% (2-3) |

### Stories — Couverture produits cette semaine

| Produit | Count | Min 1 ? |
|---------|-------|:-------:|
| strict-boeuf | /~21 | [ ] |
| strict-poulet | /~21 | [ ] |
| strict-max-boeuf | /~21 | [ ] |
| strict-max-poulet | /~21 | [ ] |
| strict-vege-falafel | /~21 | [ ] |
| strict-wrap-boeuf | /~21 | [ ] |
| strict-wrap-poulet | /~21 | [ ] |
| frites-tenders | /~21 | [ ] |

### Stories — Familles de concepts cette semaine

| Famille | Count | Min |
|---------|-------|-----|
| Produit pur (hero, levitation, eclate, ouvert, decon, minimal) | /~21 | |
| Action (croque, assemblage, main, trempe, ecrase, service) | /~21 | 3+ |
| Macro (sauce, texture, fromage, croustillant) | /~21 | 2+ |
| Atmosphere (neon, contre-jour, clair-obscur, intime) | /~21 | 1+ |
| Perspective (pov, rasante, tilt, dessous, flat) | /~21 | 2+ |
| hero-3/4 specifiquement | /~21 | MAX 3 |

### Stories — Lifestyle cette semaine

| Dimension | Detail |
|-----------|--------|
| Count lifestyle | /~21 (cible ~30%) |
| Personnages varies | [H/F/mix, ages varies] |
| Produits varies | [sac/burger/wrap/frites/repas] |
| Concepts varies | [pas 2x meme concept lifestyle] |

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
- [ ] **2 stories avis Google** sont planifiées cette semaine (type `Brand/Avis`, traitement `avis`)
- [ ] Les avis Google ne sont pas des doublons de stories avis précédentes

## Étape suivante

> Valider ce planning, puis créer les briefs individuels.
> Le traitement de chaque brief est **déjà décidé** — le brief le reprend sans le remettre en question.
