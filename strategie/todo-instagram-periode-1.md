<!-- neurolia-sync -->
<!-- project: client-strictfood -->

# To-Do Instagram — Periode 1 "Le Reboot Premium"

> Mars → debut avril 2026
> Objectif : transformer le feed inactif en vitrine Dark Food Premium credible

<!-- workstream: instagram -->

---

## Phase 0 — Refonte profil
<!-- programme: P1 — Refonte profil -->

> Prerequis avant toute publication. Le profil doit etre pret quand le premier visiteur arrive.

- [ ] Refonte bio Instagram (positionnement + localisation + CTA + lien) <!-- nd:9d690656 p:urgent -->
- [ ] Photo de profil : logo DA <!-- nd:7fe3e6a5 p:urgent -->
- [ ] Creation covers Highlights (6 categories : Menu, Coulisses, Nutrition, L'Equipe, Avis, Localisation) <!-- nd:8b569cf7 p:normal -->
- [ ] Archivage/suppression des anciens posts incoherents avec la DA <!-- nd:7e860a3d p:normal -->

---

## Phase 1 — Outillage pipelines & templates

> Avant de produire du contenu en serie, fiabiliser les outils.
> Les workflows posts et stories sont fonctionnels mais necessitent du travail
> pour passer du "ca marche a la main" au "ca tourne de facon fiable et reproductible".

### 1A. Pipeline Posts — Mise au propre
<!-- programme: P1 — Pipeline Posts -->

- [ ] Reconcilier le CLAUDE.md avec le disque — le statut dans `production/CLAUDE.md` indique S1-03 avec direction + input + prompt + output, mais seul le brief existe sur disque. Corriger le tableau de statut <!-- nd:29775e93 p:normal -->
- [ ] Standardiser les noms de slides carrousel — definir une convention pour nommer les outputs d'un carrousel (slide-01.png, slide-02.png, etc.) <!-- nd:53794985 p:normal -->
- [ ] Documenter le workflow GPT Images vs Nanobanana — quand utiliser l'un vs l'autre (texte on-image → GPT, photo pure → Nanobanana) dans un guide rapide dans `_config/` <!-- nd:86837d7c p:low -->

### 1B. Pipeline Stories — Parametrage des props
<!-- programme: P1 — Pipeline Stories -->

Le story-data-mapper produit un fichier `story-NN-data.md` avec les valeurs, mais **l'injection des props dans le HTML est manuelle** (copier-coller + search-replace des `{{PLACEHOLDER}}`). Il manque un systeme automatise.

- [ ] Definir le contrat de props par template — documenter la liste exacte des placeholders pour chaque template (`educatif.html` → `TITLE`, `FACT_NUMBER`, `FACT_UNIT`, `EXPLANATION`, `SHOW_VS`, etc.) <!-- nd:87e9cd61 p:normal -->
- [ ] Automatiser l'injection des props — soit via le script `render-story.js` (Puppeteer lit le data.md et remplace les placeholders avant rendu), soit via un script intermediaire qui genere le HTML final a partir du template + data <!-- nd:da94c5c5 p:normal -->
- [ ] Resoudre le probleme des chemins absolus — les stories rendues utilisent `file:///Users/dorian.gz/...` ou des chemins relatifs fragiles (`../../_templates/_base/base.css`). Standardiser avec une variable `{{BASE_PATH}}` resolue au rendu par Puppeteer <!-- nd:3a17ad3e p:normal -->
- [ ] Valider le contrat props ↔ data-mapper — s'assurer que le data-mapper produit exactement les cles attendues par chaque template (pas de cle manquante, pas de cle en trop) <!-- nd:0f829f91 p:normal -->

### 1C. Templates Stories — Optimisation
<!-- programme: P1 — Templates Stories -->

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

- [ ] `educatif.html` : ajouter un slot optionnel pour image produit hero (`.product-hero` + `.zone-blend`) avec `display: {{SHOW_PRODUCT}}`, pour eviter le CSS custom a chaque story <!-- nd:ce6eb261 p:normal -->
- [ ] Creer `lieu.html` : template dedie pour les stories "Nous trouver" avec champs adresse, horaires, sticker localisation — au lieu de detourner `annonce.html` <!-- nd:97142b2d p:normal -->
- [ ] `interactif.html` : ajouter une variante quiz (4 choix) et slider emoji en plus du sondage 2 choix <!-- nd:f866f127 p:low -->
- [ ] Valider `teaser-post.html` : produire une story de test et verifier le rendu (image floue en fond, centrage, lisibilite) <!-- nd:c4d36fdd p:normal -->
- [ ] Valider `fiche-produit.html` : produire une story de test avec un vrai produit et ses macros <!-- nd:513b7b8c p:normal -->
- [ ] Eliminer la duplication CSS : les stories output doivent `<link>` vers `base.css` + le CSS du template, et n'ajouter que les overrides specifiques en `<style>` inline <!-- nd:d1738fcf p:low -->

### 1D. Reels d'essai (Trial Reels) — Concept et preparation
<!-- programme: P1 — Trial Reels -->

Les Reels d'essai sont une fonctionnalite Instagram (depuis fin 2024) qui permet de **diffuser un Reel uniquement aux non-followers** pendant 24-72h. Le Reel n'apparait pas sur le profil ni dans le feed des followers. Apres le test, on decide de le publier ou non selon les resultats. C'est un outil de prospection : on touche une audience froide sans risque pour l'engagement existant.

**Prerequis :** compte pro + 1 000 followers minimum (StrictFood = 1 368 → OK).

- [ ] Creer le concept Reels d'essai StrictFood — definir les types de contenu a tester en priorite : teaser produit, coulisses cuisine, assemblage burger, cuisson chaleur pulsee, education nutrition <!-- nd:746203cb p:normal -->
- [ ] Definir le CTA et le lien — chaque Reel d'essai doit diriger vers le site ou la bio. CTA recommande : adresse physique en texte overlay + sticker localisation Chateau Roussillon <!-- nd:aa5f8040 p:normal -->
- [ ] Definir le template de brief Reel — structure type : hook visuel (2 premieres secondes), corps (15-30s), CTA + localisation, musique tendance, sous-titres si voix off <!-- nd:abffcd15 p:normal -->
- [ ] Identifier 3-5 idees de premiers Reels d'essai — exemples : assemblage burger en accelere, "du boucher a l'assiette" en 20s, cuisson chaleur pulsee en gros plan, comparaison "notre burger vs fast-food", decouverte du lieu <!-- nd:5ab91c96 p:normal -->
- [ ] Definir les seuils de performance — criteres pour decider de publier un Reel d'essai sur le feed : viser 500+ vues en 72h, engagement 3%+, taux de sauvegarde <!-- nd:ddb75231 p:normal -->
- [ ] Preparer l'automation commentaires → DM — mots-cles declencheurs pour engager les commentateurs non-followers en DM (proposition visite, offre decouverte) <!-- nd:6f67b002 p:low -->
- [ ] Briefer Romain/Dorian sur les captures terrain — quoi filmer, quand, angles recommandes, duree brute necessaire <!-- nd:f7f780e2 p:normal -->

---

## Phase 2 — Production S1 (posts 1-4 + stories semaine 1)
<!-- programme: P1 — Production S1 -->

> Outillage fiabilise → on produit S1 avec les pipelines corriges.

### Posts S1

| # | Date | Pilier | Produit | Brief | Direction | Input | Prompt | Output | Status |
|---|------|--------|---------|-------|-----------|-------|--------|--------|--------|
| S1-01 | Lun 10/03 | Le Plat | STRICT Boeuf (hero shot) | ✅ | ✅ | ✅ | ✅ | ✅ | **PUBLIE** |
| S1-02 | Mer 12/03 | La Cuisine | STRICT Boeuf (carrousel 5 slides) | ✅ | ✅ | ✅ | ⬜ | ⬜ | Pipeline en cours |
| S1-03 | Ven 14/03 | Le Plat | Tiramisu proteine (hero shot) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | Brief seulement |
| S1-04 | Dim 16/03 | L'Equipe | Romain & Dorian (portrait) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | Brief seulement |

**Actions :**

- [ ] S1-02 : Generer le prompt (`/instagram-producer 2026-03-12`) <!-- nd:7aff0d18 p:urgent -->
- [ ] S1-02 : Generer les 5 visuels carrousel (Nanobanana/GPT Images) <!-- nd:dc59d4de p:urgent -->
- [ ] S1-02 : Publier le carrousel + caption <!-- nd:c8ad3538 p:urgent -->
- [ ] S1-03 : Lancer le pipeline complet (`/instagram-producer 2026-03-14`) <!-- nd:df18dfca p:normal -->
- [ ] S1-03 : Valider le checkpoint operateur (direction + input) <!-- nd:858b15c6 p:normal -->
- [ ] S1-03 : Generer le visuel final + publier <!-- nd:bca2fc46 p:normal -->
- [ ] S1-04 : Lancer le pipeline (`/instagram-producer 2026-03-16`) <!-- nd:b810b8bc p:normal -->
- [ ] S1-04 : Photo terrain (Romain & Dorian devant mur vegetal) — coordonner <!-- nd:5038f628 p:normal -->
- [ ] S1-04 : Publier + caption <!-- nd:c01a7f3d p:normal -->

### Stories S1
<!-- programme: P1 — Stories S1 -->

| Jour | Story 1 | Story 2 | Status |
|------|---------|---------|--------|
| Lun 10/03 | Teaser S1-01 (Pipeline) | Annonce post-pub (Pipeline) | ⬜ A produire |
| Mar 11/03 | Arrivage produits (Terrain) | Sondage boeuf vs poulet (Pipeline) | ⬜ A produire |
| Mer 12/03 | Teaser carrousel S1-02 (Pipeline) | En cuisine service (Terrain) | ⬜ A produire |
| Jeu 13/03 | Educatif cuisson sans huile (Pipeline) | Nous trouver (Pipeline) | ✅ Rendues |
| Ven 14/03 | Teaser S1-03 (Pipeline) | Rush vendredi (Terrain) | ⬜ A produire |
| Sam 15/03 | Best-of semaine (Manuel) | Dernier service CTA (Terrain) | ⬜ A produire |

**Actions :**

- [ ] Produire les stories automatisables restantes : lundi (2), mardi-02, mercredi-01, vendredi-01 <!-- nd:976b8e5e p:normal -->
- [ ] Coordonner avec Romain/Dorian les stories terrain (mardi arrivage, mercredi cuisine, vendredi rush, samedi CTA) <!-- nd:5c877ff9 p:normal -->
- [ ] Samedi story-01 (best-of) : selectionner post le plus performant de la semaine <!-- nd:4c36c653 p:low -->

---

## Phase 3 — Production S2 (posts 5-8 + stories semaine 2)
<!-- programme: P1 — Production S2 -->

### Posts S2

| # | Date | Pilier | Produit | Brief | Direction | Input | Prompt | Output | Status |
|---|------|--------|---------|-------|-----------|-------|--------|--------|--------|
| S2-05 | Lun 17/03 | Le Plat | STRICT Poulet (hero shot) | ✅ | ✅ | ✅ | ✅ | ⬜ | Prompt pret, generer output |
| S2-06 | Mer 19/03 | Les Macros | Comparaison macros (carrousel 4 slides) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | Brief seulement |
| S2-07 | Ven 21/03 | La Cuisine | Myfitcheese (artisan focus) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | Brief seulement |
| S2-08 | Dim 23/03 | Le Plat | STRICT Wrap Poulet (hero shot) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ | Brief seulement |

**Actions :**

- [ ] S2-05 : Generer le visuel final (`/nano-banana-pro --resolution 4K`) + publier <!-- nd:e48778f9 p:normal -->
- [ ] S2-06 : Lancer le pipeline (/instagram-producer 2026-03-19) + 4 slides infographiques <!-- nd:b02389f0 p:normal -->
- [ ] S2-06 : Publier le carrousel + caption <!-- nd:9973df76 p:normal -->
- [ ] S2-07 : Lancer le pipeline (/instagram-producer 2026-03-21) — photo terrain Myfitcheese <!-- nd:53bd938e p:normal -->
- [ ] S2-07 : Publier + caption <!-- nd:98fa5157 p:normal -->
- [ ] S2-08 : Lancer le pipeline (/instagram-producer 2026-03-23) — photo terrain wrap <!-- nd:b6706b85 p:normal -->
- [ ] S2-08 : Publier + caption <!-- nd:24e20621 p:normal -->

### Stories S2
<!-- programme: P1 — Stories S2 -->

- [ ] Rediger les briefs stories S2 (14 stories) <!-- nd:48b4fc81 p:normal -->
- [ ] Produire les stories automatisables S2 <!-- nd:438eedaa p:normal -->
- [ ] Coordonner stories terrain S2 avec Romain/Dorian <!-- nd:6b4bee3e p:normal -->

---

## Phase 4 — Planification & production S3-S4 (posts 9-16 + stories semaines 3-4)
<!-- programme: P1 — Planification S3-S4 -->

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

- [ ] Rediger les 8 briefs posts S3-S4 (template : brief-v2.md) <!-- nd:c16cc3ad p:normal -->
- [ ] Creer les dossiers posts/periode-1/S3/ et S4/ <!-- nd:b567f0b5 p:low -->
- [ ] Rediger les briefs stories S3 et S4 <!-- nd:1d40c889 p:normal -->
- [ ] Lancer les pipelines posts S3-S4 au fur et a mesure <!-- nd:a638d1bb p:normal -->

### Reels d'essai — Lancement et iterations
<!-- programme: P1 — Reels d'essai -->

> Le concept a ete defini en Phase 1D. C'est ici qu'on teste en conditions reelles.
> Cadence cible : 2-3 Reels d'essai par semaine pour tester rapidement sur audience froide.

- [ ] Tourner les premiers rushes — Romain/Dorian filment selon le brief (3-5 sequences de 15-30s) <!-- nd:734509ee p:normal -->
- [ ] Publier le premier Reel d'essai — activer l'option "Essai" avant publication, montage minimaliste, CTA + localisation, musique tendance <!-- nd:438dbb80 p:normal -->
- [ ] Suivre les commentaires pendant 72h — repondre rapidement, engager en DM les commentateurs interesses <!-- nd:11a0b8de p:normal -->
- [ ] Analyser les resultats a 72h — vues, engagement, sauvegardes. Si 500+ vues ET 3%+ engagement → publier sur le feed <!-- nd:78dfa52d p:normal -->
- [ ] Iterer — tester un deuxieme angle (produit vs coulisses vs lieu) pour comparer les performances <!-- nd:b809d3c5 p:normal -->
- [ ] Publier les winners sur le feed — seuls les Reels d'essai performants passent en publication publique, cover coherente avec la grille <!-- nd:ec1b6074 p:normal -->
- [ ] Bilan fin de periode — quel type de contenu Reel fonctionne le mieux sur audience froide, reporter les conclusions pour la Periode 2 <!-- nd:cd0d13da p:normal -->

---

## En continu — Engagement & Communaute
<!-- programme: P1 — Engagement -->

> Demarre des la Phase 2, en parallele de la production.

- [ ] Repondre a chaque commentaire et DM (des S1) <!-- nd:2166409e p:normal -->
- [ ] Identifier et suivre les comptes food/sport a Perpignan <!-- nd:44b63fca p:low -->
- [ ] Identifier les salles de sport locales pour follows cibles <!-- nd:d8ffc1e9 p:low -->
- [ ] Reposter les stories clients qui taguent @strictfood <!-- nd:f1454a89 p:normal -->
- [ ] Minimum 2 stories interactives par semaine (sondage, quiz, slider) <!-- nd:46095eba p:normal -->
- [ ] Commenter sur d'autres comptes locaux <!-- nd:63caf89c p:low -->

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
