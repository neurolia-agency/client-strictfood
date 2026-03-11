# To-Do Instagram — Periode 1 "Le Reboot Premium"

> Mars → debut avril 2026
> Objectif : transformer le feed inactif en vitrine Dark Food Premium credible

---

## Phase 0 — Refonte profil

> Prerequis avant toute publication. Le profil doit etre pret quand le premier visiteur arrive.

- [ ] Refonte bio Instagram (positionnement + localisation + CTA + lien)
- [ ] Photo de profil : logo DA
- [ ] Creation covers Highlights (6 categories : Menu, Coulisses, Nutrition, L'Equipe, Avis, Localisation)
- [ ] Archivage/suppression des anciens posts incoherents avec la DA

---

## Phase 1 — Outillage pipelines & templates

> Avant de produire du contenu en serie, fiabiliser les outils.
> Les workflows posts et stories sont fonctionnels mais necessitent du travail
> pour passer du "ca marche a la main" au "ca tourne de facon fiable et reproductible".

### 1A. Pipeline Posts — Mise au propre

- [ ] **Reconcilier le CLAUDE.md avec le disque** — le statut dans `production/CLAUDE.md` indique S1-03 avec direction + input + prompt + output, mais seul le brief existe sur disque. Corriger le tableau de statut
- [ ] **Standardiser les noms de slides carrousel** — definir une convention pour nommer les outputs d'un carrousel (slide-01.png, slide-02.png, etc.)
- [ ] **Documenter le workflow GPT Images vs Nanobanana** — quand utiliser l'un vs l'autre (texte on-image → GPT, photo pure → Nanobanana) dans un guide rapide dans `_config/`

### 1B. Pipeline Stories — Parametrage des props

Le story-data-mapper produit un fichier `story-NN-data.md` avec les valeurs, mais **l'injection des props dans le HTML est manuelle** (copier-coller + search-replace des `{{PLACEHOLDER}}`). Il manque un systeme automatise.

- [ ] **Definir le contrat de props par template** — documenter la liste exacte des placeholders pour chaque template (`educatif.html` → `TITLE`, `FACT_NUMBER`, `FACT_UNIT`, `EXPLANATION`, `SHOW_VS`, etc.)
- [ ] **Automatiser l'injection des props** — soit via le script `render-story.js` (Puppeteer lit le data.md et remplace les placeholders avant rendu), soit via un script intermediaire qui genere le HTML final a partir du template + data
- [ ] **Resoudre le probleme des chemins absolus** — les stories rendues utilisent `file:///Users/dorian.gz/...` ou des chemins relatifs fragiles (`../../_templates/_base/base.css`). Standardiser avec une variable `{{BASE_PATH}}` resolue au rendu par Puppeteer
- [ ] **Valider le contrat props ↔ data-mapper** — s'assurer que le data-mapper produit exactement les cles attendues par chaque template (pas de cle manquante, pas de cle en trop)

### 1C. Templates Stories — Optimisation

Les 5 templates actuels fonctionnent mais presentent des lacunes revelees par la production S1.

**Problemes identifies :**

| Template | Probleme | Impact |
|----------|----------|--------|
| `educatif.html` | Pas de slot pour image produit hero — S1/mercredi a du ajouter `.product-hero`, `.burger-blur`, `.zone-blend` en CSS custom | Chaque story educative avec produit necessite du code a la main |
| `annonce.html` | Detourne pour le type "Lieu" (jeudi story-02) — pas de champs localisation dedies | Confusion des responsabilites |
| `interactif.html` | Options limitees a 2 choix (A/B) — pas de variante quiz, slider ou question ouverte | Repond a un seul format interactif |
| `teaser-post.html` | Pas encore teste en production — placeholder `{{BG_IMAGE_PATH}}` pour image floue non utilise | A valider |
| `fiche-produit.html` | Pas encore teste en production | A valider |
| Tous | CSS duplique dans chaque output au lieu de referencer les templates | Stories lourdes, maintenance difficile |

**Actions :**

- [ ] **`educatif.html`** : ajouter un slot optionnel pour image produit hero (`.product-hero` + `.zone-blend`) avec `display: {{SHOW_PRODUCT}}`, pour eviter le CSS custom a chaque story
- [ ] **Creer `lieu.html`** : template dedie pour les stories "Nous trouver" avec champs adresse, horaires, sticker localisation — au lieu de detourner `annonce.html`
- [ ] **`interactif.html`** : ajouter une variante quiz (4 choix) et slider emoji en plus du sondage 2 choix
- [ ] **Valider `teaser-post.html`** : produire une story de test et verifier le rendu (image floue en fond, centrage, lisibilite)
- [ ] **Valider `fiche-produit.html`** : produire une story de test avec un vrai produit et ses macros
- [ ] **Eliminer la duplication CSS** : les stories output doivent `<link>` vers `base.css` + le CSS du template, et n'ajouter que les overrides specifiques en `<style>` inline

### 1D. Reels d'essai (Trial Reels) — Concept et preparation

Les Reels d'essai sont une fonctionnalite Instagram (depuis fin 2024) qui permet de **diffuser un Reel uniquement aux non-followers** pendant 24-72h. Le Reel n'apparait pas sur le profil ni dans le feed des followers. Apres le test, on decide de le publier ou non selon les resultats. C'est un outil de prospection : on touche une audience froide sans risque pour l'engagement existant.

**Prerequis :** compte pro + 1 000 followers minimum (StrictFood = 1 368 → OK).

- [ ] **Creer le concept Reels d'essai StrictFood** — definir les types de contenu a tester en priorite : teaser produit, coulisses cuisine, assemblage burger, cuisson chaleur pulsee, education nutrition
- [ ] **Definir le CTA et le lien** — chaque Reel d'essai doit diriger vers le site ou la bio. CTA recommande : adresse physique en texte overlay + sticker localisation Chateau Roussillon
- [ ] **Definir le template de brief Reel** — structure type : hook visuel (2 premieres secondes), corps (15-30s), CTA + localisation, musique tendance, sous-titres si voix off
- [ ] **Identifier 3-5 idees de premiers Reels d'essai** — exemples : assemblage burger en accelere, "du boucher a l'assiette" en 20s, cuisson chaleur pulsee en gros plan, comparaison "notre burger vs fast-food", decouverte du lieu
- [ ] **Definir les seuils de performance** — criteres pour decider de publier un Reel d'essai sur le feed : viser 500+ vues en 72h, engagement 3%+, taux de sauvegarde
- [ ] **Preparer l'automation commentaires → DM** — mots-cles declencheurs pour engager les commentateurs non-followers en DM (proposition visite, offre decouverte)
- [ ] **Briefer Romain/Dorian sur les captures terrain** — quoi filmer, quand, angles recommandes, duree brute necessaire

---

## Phase 2 — Production S1 (posts 1-4 + stories semaine 1)

> Outillage fiabilise → on produit S1 avec les pipelines corriges.

### Posts S1

| # | Date | Pilier | Produit | Brief | Direction | Input | Prompt | Output | Status |
|---|------|--------|---------|-------|-----------|-------|--------|--------|--------|
| S1-01 | Lun 10/03 | Le Plat | STRICT Boeuf (hero shot) | ✅ | ✅ | ✅ | ✅ | ✅ | **PUBLIE** |
| S1-02 | Mer 12/03 | La Cuisine | STRICT Boeuf (carrousel 5 slides) | ✅ | ✅ | ✅ | ⬜ | ⬜ | Pipeline en cours |
| S1-03 | Ven 14/03 | Le Plat | Tiramisu proteine (hero shot) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | Brief seulement |
| S1-04 | Dim 16/03 | L'Equipe | Romain & Dorian (portrait) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | Brief seulement |

**Actions :**

- [ ] **S1-02** : Generer le prompt (`/instagram-producer 2026-03-12`)
- [ ] **S1-02** : Generer les 5 visuels carrousel (Nanobanana/GPT Images)
- [ ] **S1-02** : Publier le carrousel + caption
- [ ] **S1-03** : Lancer le pipeline complet (`/instagram-producer 2026-03-14`)
- [ ] **S1-03** : Valider le checkpoint operateur (direction + input)
- [ ] **S1-03** : Generer le visuel final
- [ ] **S1-03** : Publier + caption
- [ ] **S1-04** : Lancer le pipeline (`/instagram-producer 2026-03-16`)
- [ ] **S1-04** : Photo terrain necessaire (Romain & Dorian devant mur vegetal) — coordonner avec eux
- [ ] **S1-04** : Publier + caption

### Stories S1

| Jour | Story 1 | Story 2 | Status |
|------|---------|---------|--------|
| Lun 10/03 | Teaser S1-01 (Pipeline) | Annonce post-pub (Pipeline) | ⬜ A produire |
| Mar 11/03 | Arrivage produits (Terrain) | Sondage boeuf vs poulet (Pipeline) | ⬜ A produire |
| Mer 12/03 | Teaser carrousel S1-02 (Pipeline) | En cuisine service (Terrain) | ⬜ A produire |
| Jeu 13/03 | Educatif cuisson sans huile (Pipeline) | Nous trouver (Pipeline) | ✅ Rendues |
| Ven 14/03 | Teaser S1-03 (Pipeline) | Rush vendredi (Terrain) | ⬜ A produire |
| Sam 15/03 | Best-of semaine (Manuel) | Dernier service CTA (Terrain) | ⬜ A produire |

**Actions :**

- [ ] Produire les stories automatisables restantes : lundi (2), mardi-story-02, mercredi-story-01, vendredi-story-01
  - Commande : `/story-producer S1 lundi`, etc.
- [ ] Coordonner avec Romain/Dorian les stories terrain :
  - [ ] Mardi : video arrivage produits (matin)
  - [ ] Mercredi : video assemblage en cuisine (service midi)
  - [ ] Vendredi : video rush vendredi midi
  - [ ] Samedi : photo dernier service CTA
- [ ] Samedi story-01 (best-of) : selectionner le post le plus performant de la semaine

---

## Phase 3 — Production S2 (posts 5-8 + stories semaine 2)

### Posts S2

| # | Date | Pilier | Produit | Brief | Direction | Input | Prompt | Output | Status |
|---|------|--------|---------|-------|-----------|-------|--------|--------|--------|
| S2-05 | Lun 17/03 | Le Plat | STRICT Poulet (hero shot) | ✅ | ✅ | ✅ | ✅ | ⬜ | Prompt pret, generer output |
| S2-06 | Mer 19/03 | Les Macros | Comparaison macros (carrousel 4 slides) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | Brief seulement |
| S2-07 | Ven 21/03 | La Cuisine | Myfitcheese (artisan focus) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | Brief seulement |
| S2-08 | Dim 23/03 | Le Plat | STRICT Wrap Poulet (hero shot) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | Brief seulement |

**Actions :**

- [ ] **S2-05** : Generer le visuel final (`/nano-banana-pro --resolution 4K`)
- [ ] **S2-05** : Publier + caption
- [ ] **S2-06** : Lancer le pipeline complet (`/instagram-producer 2026-03-19`)
- [ ] **S2-06** : Creer les 4 slides infographiques (GPT Images recommande pour le texte on-image)
- [ ] **S2-06** : Publier le carrousel + caption
- [ ] **S2-07** : Lancer le pipeline complet (`/instagram-producer 2026-03-21`)
- [ ] **S2-07** : Photo terrain Myfitcheese si necessaire — sinon Plan B (Pains du Soleil)
- [ ] **S2-07** : Publier + caption
- [ ] **S2-08** : Lancer le pipeline complet (`/instagram-producer 2026-03-23`)
- [ ] **S2-08** : Photo terrain wrap si necessaire — sinon Plan B (carrousel carte complete)
- [ ] **S2-08** : Publier + caption

### Stories S2

- [ ] Rediger les briefs stories S2 (7 jours × 2 stories = 14 stories)
  - Template : `_templates/brief-story.md`
  - Dossiers : `posts-stories/stories/S2/{lundi..dimanche}/`
- [ ] Produire les stories automatisables S2
- [ ] Coordonner stories terrain S2 avec Romain/Dorian

---

## Phase 4 — Planification & production S3-S4 (posts 9-16 + stories semaines 3-4)

> Les briefs S3-S4 ne sont pas encore rediges. A planifier selon le calendrier type.

### Posts a planifier

| # | Date | Jour | Pilier suggere | Contenu suggere |
|---|------|------|----------------|-----------------|
| S3-09 | ~24/03 | Lun | Le Plat | STRICT MAX Boeuf ou Bowl (nouveau format) |
| S3-10 | ~26/03 | Mer | Les Macros / La Cuisine | Infographie macros poulet OU carrousel ingredients |
| S3-11 | ~28/03 | Ven | Le Plat | Nouveau produit ou angle different (vue dessus, close-up texture) |
| S3-12 | ~30/03 | Dim | L'Equipe / Le Quartier | Storytelling fondateurs OU premier partenaire local |
| S4-13 | ~31/03 | Lun | Le Plat | Hero shot — 13e post du feed |
| S4-14 | ~02/04 | Mer | Les Macros | Macro breakdown d'un bowl ou wrap |
| S4-15 | ~04/04 | Ven | La Cuisine | Process artisan : Pains du Soleil ou Boucherie Labourde |
| S4-16 | ~06/04 | Dim | L'Equipe / Le Quartier | Avis client mis en forme OU repost UGC |

**Actions :**

- [ ] Rediger les 8 briefs posts S3-S4 (template : `_templates/brief-v2.md`)
- [ ] Creer les dossiers `posts/periode-1/S3/` et `S4/`
- [ ] Rediger les briefs stories S3 et S4
- [ ] Lancer les pipelines au fur et a mesure

### Reels d'essai — Lancement et iterations

> Le concept a ete defini en Phase 1D. C'est ici qu'on teste en conditions reelles.
> Cadence cible : 2-3 Reels d'essai par semaine pour tester rapidement sur audience froide.

- [ ] **Tourner les premiers rushes** — Romain/Dorian filment selon le brief (3-5 sequences de 15-30s)
- [ ] **Publier le premier Reel d'essai** — activer l'option "Essai" avant publication, montage minimaliste, CTA + localisation, musique tendance
- [ ] **Suivre les commentaires pendant 72h** — repondre rapidement, engager en DM les commentateurs interesses ("Viens gouter, on est a Chateau Roussillon")
- [ ] **Analyser les resultats a 72h** — vues, engagement, sauvegardes. Si 500+ vues ET 3%+ engagement → publier sur le feed
- [ ] **Iterer** — tester un deuxieme angle (produit vs coulisses vs lieu) pour comparer les performances
- [ ] **Publier les winners sur le feed** — seuls les Reels d'essai performants passent en publication publique, cover coherente avec la grille
- [ ] **Bilan fin de periode** — quel type de contenu Reel fonctionne le mieux sur audience froide, reporter les conclusions pour la Periode 2 (objectif : 4+ Reels publies/mois)

---

## En continu — Engagement & Communaute

> Demarre des la Phase 2, en parallele de la production.

- [ ] Repondre a chaque commentaire et DM (des S1)
- [ ] Identifier et suivre les comptes food/sport a Perpignan
- [ ] Identifier les salles de sport locales pour follows cibles
- [ ] Reposter les stories clients qui taguent @strictfood
- [ ] Minimum 2 stories interactives par semaine (sondage, quiz, slider)
- [ ] Commenter sur d'autres comptes locaux

---

## KPIs a tracker — Fin de Periode 1

| KPI | Objectif | Actuel |
|-----|----------|--------|
| Posts publies | 16+ | 1 |
| Grille visuelle | 12+ posts coherents DA | 1 |
| Profil | Bio + highlights + photo profil refaits | ⬜ |
| Stories | 25+ sur le mois | ~5 rendues |
| Followers | 1 450+ (base 1 368) | — |
| Engagement | Etablir la baseline | — |

---

*Derniere mise a jour : 2026-03-11*
