<!-- neurolia-sync -->
<!-- project: client-strictfood -->

# To-Do Instagram — Periode 1 "Le Reboot Premium"

> Mars → debut avril 2026
> Objectif : transformer le feed inactif en vitrine Dark Food Premium credible

<!-- workstream: instagram -->
- [ ] Refonte bio Instagram (positionnement + localisation + CTA + lien) <!-- nd:69379bf0 p:urgent -->
- [ ] Photo de profil : logo DA <!-- nd:64d0295d p:urgent -->
- [ ] Creation covers Highlights (6 categories : Menu, Coulisses, Nutrition, L'Equipe, Avis, Localisation) <!-- nd:de9e537a p:normal -->
- [ ] Archivage/suppression des anciens posts incoherents avec la DA <!-- nd:75b80bb1 p:normal -->
- [ ] Reconcilier le CLAUDE.md avec le disque — le statut dans `production/CLAUDE.md` indique S1-03 avec direction + input + prompt + output, mais seul le brief existe sur disque. Corriger le tableau de statut <!-- nd:baff346a p:normal -->
- [ ] Standardiser les noms de slides carrousel — definir une convention pour nommer les outputs d'un carrousel (slide-01.png, slide-02.png, etc.) <!-- nd:572a5bcb p:normal -->
- [ ] Documenter le workflow GPT Images vs Nanobanana — quand utiliser l'un vs l'autre (texte on-image → GPT, photo pure → Nanobanana) dans un guide rapide dans `_config/` <!-- nd:81bb5145 p:low -->
- [ ] Definir le contrat de props par template — documenter la liste exacte des placeholders pour chaque template (`educatif.html` → `TITLE`, `FACT_NUMBER`, `FACT_UNIT`, `EXPLANATION`, `SHOW_VS`, etc.) <!-- nd:f0b0351f p:normal -->
- [ ] Automatiser l'injection des props — soit via le script `render-story.js` (Puppeteer lit le data.md et remplace les placeholders avant rendu), soit via un script intermediaire qui genere le HTML final a partir du template + data <!-- nd:ea26ab78 p:normal -->
- [ ] Resoudre le probleme des chemins absolus — les stories rendues utilisent `file:///Users/dorian.gz/...` ou des chemins relatifs fragiles (`../../_templates/_base/base.css`). Standardiser avec une variable `{{BASE_PATH}}` resolue au rendu par Puppeteer <!-- nd:858e4ecb p:normal -->
- [ ] Valider le contrat props ↔ data-mapper — s'assurer que le data-mapper produit exactement les cles attendues par chaque template (pas de cle manquante, pas de cle en trop) <!-- nd:3b693e3c p:normal -->
- [ ] `educatif.html` : ajouter un slot optionnel pour image produit hero (`.product-hero` + `.zone-blend`) avec `display: {{SHOW_PRODUCT}}`, pour eviter le CSS custom a chaque story <!-- nd:0e3686a3 p:normal -->
- [ ] Creer `lieu.html` : template dedie pour les stories "Nous trouver" avec champs adresse, horaires, sticker localisation — au lieu de detourner `annonce.html` <!-- nd:a246bab0 p:normal -->
- [ ] `interactif.html` : ajouter une variante quiz (4 choix) et slider emoji en plus du sondage 2 choix <!-- nd:c73209c4 p:low -->
- [ ] Valider `teaser-post.html` : produire une story de test et verifier le rendu (image floue en fond, centrage, lisibilite) <!-- nd:86733b0d p:normal -->
- [ ] Valider `fiche-produit.html` : produire une story de test avec un vrai produit et ses macros <!-- nd:e0c0042a p:normal -->
- [ ] Eliminer la duplication CSS : les stories output doivent `<link>` vers `base.css` + le CSS du template, et n'ajouter que les overrides specifiques en `<style>` inline <!-- nd:f43c6ff9 p:low -->
- [ ] Creer le concept Reels d'essai StrictFood — definir les types de contenu a tester en priorite : teaser produit, coulisses cuisine, assemblage burger, cuisson chaleur pulsee, education nutrition <!-- nd:698db2fc p:normal -->
- [ ] Definir le CTA et le lien — chaque Reel d'essai doit diriger vers le site ou la bio. CTA recommande : adresse physique en texte overlay + sticker localisation Chateau Roussillon <!-- nd:1f423fc0 p:normal -->
- [ ] Definir le template de brief Reel — structure type : hook visuel (2 premieres secondes), corps (15-30s), CTA + localisation, musique tendance, sous-titres si voix off <!-- nd:fc346748 p:normal -->
- [ ] Identifier 3-5 idees de premiers Reels d'essai — exemples : assemblage burger en accelere, "du boucher a l'assiette" en 20s, cuisson chaleur pulsee en gros plan, comparaison "notre burger vs fast-food", decouverte du lieu <!-- nd:6278dcaf p:normal -->
- [ ] Definir les seuils de performance — criteres pour decider de publier un Reel d'essai sur le feed : viser 500+ vues en 72h, engagement 3%+, taux de sauvegarde <!-- nd:d92b10e8 p:normal -->
- [ ] Preparer l'automation commentaires → DM — mots-cles declencheurs pour engager les commentateurs non-followers en DM (proposition visite, offre decouverte) <!-- nd:df50836f p:low -->
- [ ] Briefer Romain/Dorian sur les captures terrain — quoi filmer, quand, angles recommandes, duree brute necessaire <!-- nd:ee0b4257 p:normal -->
- [ ] S1-02 : Generer le prompt (`/instagram-producer 2026-03-12`) <!-- nd:79fac6c6 p:urgent -->
- [ ] S1-02 : Generer les 5 visuels carrousel (Nanobanana/GPT Images) <!-- nd:d94606ef p:urgent -->
- [ ] S1-02 : Publier le carrousel + caption <!-- nd:552cc9b5 p:urgent -->
- [ ] S1-03 : Lancer le pipeline complet (`/instagram-producer 2026-03-14`) <!-- nd:ef9086a6 p:normal -->
- [ ] S1-03 : Valider le checkpoint operateur (direction + input) <!-- nd:243ceebb p:normal -->
- [ ] S1-03 : Generer le visuel final + publier <!-- nd:bba77b56 p:normal -->
- [ ] S1-04 : Lancer le pipeline (`/instagram-producer 2026-03-16`) <!-- nd:dfbd6929 p:normal -->
- [ ] S1-04 : Photo terrain (Romain & Dorian devant mur vegetal) — coordonner <!-- nd:3b8f4fec p:normal -->
- [ ] S1-04 : Publier + caption <!-- nd:f9950d32 p:normal -->
- [ ] Produire les stories automatisables restantes : lundi (2), mardi-02, mercredi-01, vendredi-01 <!-- nd:5cb1a3f0 p:normal -->
- [ ] Coordonner avec Romain/Dorian les stories terrain (mardi arrivage, mercredi cuisine, vendredi rush, samedi CTA) <!-- nd:6652d9ac p:normal -->
- [ ] Samedi story-01 (best-of) : selectionner post le plus performant de la semaine <!-- nd:81eb6300 p:low -->
- [ ] S2-05 : Generer le visuel final (`/nano-banana-pro --resolution 4K`) + publier <!-- nd:d0072b8f p:normal -->
- [ ] S2-06 : Lancer le pipeline (/instagram-producer 2026-03-19) + 4 slides infographiques <!-- nd:b81fd026 p:normal -->
- [ ] S2-06 : Publier le carrousel + caption <!-- nd:84a40315 p:normal -->
- [ ] S2-07 : Lancer le pipeline (/instagram-producer 2026-03-21) — photo terrain Myfitcheese <!-- nd:75aa3307 p:normal -->
- [ ] S2-07 : Publier + caption <!-- nd:8568df45 p:normal -->
- [ ] S2-08 : Lancer le pipeline (/instagram-producer 2026-03-23) — photo terrain wrap <!-- nd:747da5da p:normal -->
- [ ] S2-08 : Publier + caption <!-- nd:29bc6fca p:normal -->
- [ ] Rediger les briefs stories S2 (14 stories) <!-- nd:29386d5b p:normal -->
- [ ] Produire les stories automatisables S2 <!-- nd:1a84eca7 p:normal -->
- [ ] Coordonner stories terrain S2 avec Romain/Dorian <!-- nd:72921905 p:normal -->
- [ ] Rediger les 8 briefs posts S3-S4 (template : brief-v2.md) <!-- nd:2c1d41d8 p:normal -->
- [ ] Creer les dossiers posts/periode-1/S3/ et S4/ <!-- nd:7848f854 p:low -->
- [ ] Rediger les briefs stories S3 et S4 <!-- nd:1de70eae p:normal -->
- [ ] Lancer les pipelines posts S3-S4 au fur et a mesure <!-- nd:4c92ecaa p:normal -->
- [ ] Tourner les premiers rushes — Romain/Dorian filment selon le brief (3-5 sequences de 15-30s) <!-- nd:49433dad p:normal -->
- [ ] Publier le premier Reel d'essai — activer l'option "Essai" avant publication, montage minimaliste, CTA + localisation, musique tendance <!-- nd:85c35036 p:normal -->
- [ ] Suivre les commentaires pendant 72h — repondre rapidement, engager en DM les commentateurs interesses <!-- nd:652e702f p:normal -->
- [ ] Analyser les resultats a 72h — vues, engagement, sauvegardes. Si 500+ vues ET 3%+ engagement → publier sur le feed <!-- nd:0fde385c p:normal -->
- [ ] Iterer — tester un deuxieme angle (produit vs coulisses vs lieu) pour comparer les performances <!-- nd:67d02f13 p:normal -->
- [ ] Publier les winners sur le feed — seuls les Reels d'essai performants passent en publication publique, cover coherente avec la grille <!-- nd:a209bc24 p:normal -->
- [ ] Bilan fin de periode — quel type de contenu Reel fonctionne le mieux sur audience froide, reporter les conclusions pour la Periode 2 <!-- nd:401ef828 p:normal -->
- [ ] Repondre a chaque commentaire et DM (des S1) <!-- nd:f80f34e1 p:normal -->
- [ ] Identifier et suivre les comptes food/sport a Perpignan <!-- nd:2ec2459f p:low -->
- [ ] Identifier les salles de sport locales pour follows cibles <!-- nd:2a61139e p:low -->
- [ ] Reposter les stories clients qui taguent @strictfood <!-- nd:06fe3a15 p:normal -->
- [ ] Minimum 2 stories interactives par semaine (sondage, quiz, slider) <!-- nd:a0a48472 p:normal -->
- [ ] Commenter sur d'autres comptes locaux <!-- nd:85e72d5e p:low -->

---

## Phase 0 — Refonte profil
<!-- programme: P1 — Refonte profil -->

> Prerequis avant toute publication. Le profil doit etre pret quand le premier visiteur arrive.


---

## Phase 1 — Outillage pipelines & templates

> Avant de produire du contenu en serie, fiabiliser les outils.
> Les workflows posts et stories sont fonctionnels mais necessitent du travail
> pour passer du "ca marche a la main" au "ca tourne de facon fiable et reproductible".

### 1A. Pipeline Posts — Mise au propre
<!-- programme: P1 — Pipeline Posts -->


### 1B. Pipeline Stories — Parametrage des props
<!-- programme: P1 — Pipeline Stories -->

Le story-data-mapper produit un fichier `story-NN-data.md` avec les valeurs, mais **l'injection des props dans le HTML est manuelle** (copier-coller + search-replace des `{{PLACEHOLDER}}`). Il manque un systeme automatise.


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


### 1D. Reels d'essai (Trial Reels) — Concept et preparation
<!-- programme: P1 — Trial Reels -->

Les Reels d'essai sont une fonctionnalite Instagram (depuis fin 2024) qui permet de **diffuser un Reel uniquement aux non-followers** pendant 24-72h. Le Reel n'apparait pas sur le profil ni dans le feed des followers. Apres le test, on decide de le publier ou non selon les resultats. C'est un outil de prospection : on touche une audience froide sans risque pour l'engagement existant.

**Prerequis :** compte pro + 1 000 followers minimum (StrictFood = 1 368 → OK).


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


### Stories S2
<!-- programme: P1 — Stories S2 -->


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


### Reels d'essai — Lancement et iterations
<!-- programme: P1 — Reels d'essai -->

> Le concept a ete defini en Phase 1D. C'est ici qu'on teste en conditions reelles.
> Cadence cible : 2-3 Reels d'essai par semaine pour tester rapidement sur audience froide.


---

## En continu — Engagement & Communaute
<!-- programme: P1 — Engagement -->

> Demarre des la Phase 2, en parallele de la production.


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


---

## Banque de Contenus Photo
<!-- workstream: banque-contenus-photo -->
- [ ] Détourer photos site web <!-- nd:720925c5 p:normal a:joris -->
- [ ] Variations photos sources Instagram <!-- nd:1367e51e p:normal a:dorian -->

---

## Direction Artistique
<!-- workstream: direction-artistique -->
- [x] Charte DA applicable tous livrables <!-- nd:86cacb0b p:normal -->
- [x] Style photographique Dark Food Premium <!-- nd:8ed058ce p:normal -->
- [x] Typographie et palette de couleurs <!-- nd:18f629aa p:normal -->
- [x] Formulaire de marque (Brand Audit) <!-- nd:63e36f13 p:normal -->

---

## Google Business Profile
<!-- workstream: google-business-profile -->
- [ ] Commander carte NFC <!-- nd:fecd34a0 p:normal a:joris -->
- [ ] Lien vers le site web <!-- nd:d24ac980 p:normal a:dorian -->
- [ ] Menu propre en PDF/Images <!-- nd:a554e1e7 p:normal a:dorian -->
- [ ] Générer photos ultra-réalistes <!-- nd:d882b2f6 p:normal a:dorian -->
- [ ] Micro-landing page collecte contact + avis <!-- nd:f2b6e59e p:normal a:joris -->
- [ ] Paramétrer carte NFC <!-- nd:682466f3 p:normal a:joris -->
- [ ] Optimisation du contenu textuel (description, informations etc) <!-- nd:c72e840e p:normal a:dorian -->

---

## TikTok
<!-- workstream: tiktok -->
- [ ] Premier shooting vidéaste <!-- nd:e173f893 p:urgent -->
- [ ] Stratégie / planning éditorial <!-- nd:53091bef p:normal a:dorian -->
- [ ] Repérer besoins de post-prods <!-- nd:e4af34af p:normal -->

---

## Landing Page
<!-- workstream: landing-page -->

<!-- programme: Phase B02 — Homepage -->
- [x] Section 1 — Hero <!-- nd:fd377ff7 p:normal -->
- [x] Section 2 — Concept / Promesse <!-- nd:a802f9a7 p:normal -->
- [x] Section 3 — Menu Highlights <!-- nd:03d3fbbe p:normal -->
- [x] Section 4 — Engagement qualite <!-- nd:4bfce58e p:normal -->
- [x] Section 5 — Temoignages / Social Proof <!-- nd:1d7e494a p:normal -->
- [ ] Section 6 — Contact & Horaires <!-- nd:a4e2905c p:urgent -->

<!-- programme: Phase B03 — Pages secondaires -->
- [ ] Page /la-carte (menu complet) <!-- nd:4ebad11a p:normal -->
- [ ] Page mentions-legales <!-- nd:6f705951 p:normal -->

<!-- programme: Phase B04-B06 — Polish & Deploy -->
- [ ] B04 — Polish global (animations, responsive, micro-interactions) <!-- nd:1a561f4c p:normal -->
- [ ] B05 — Validation cross-browser et lighthouse <!-- nd:123dedb6 p:normal -->
- [ ] B06 — Deploiement production + DNS <!-- nd:e8876125 p:normal -->
- [ ] Polish : animations + SEO + cohérence <!-- nd:2bb5fee9 p:normal -->
- [ ] Page mentions légales <!-- nd:e6d1ca6d p:normal -->
- [x] Section Carte / Menu <!-- nd:27b4622f p:normal -->
- [ ] Section Contact & Horaires <!-- nd:4c4b3651 p:urgent -->
- [x] Section Avis & Confiance <!-- nd:b152dc3b p:normal -->
- [x] Section Hero <!-- nd:b263ff6c p:normal -->
- [x] Section La Promesse <!-- nd:fad5f54b p:normal -->
- [x] Section Nos Artisans <!-- nd:d286a1ea p:normal -->
- [x] Section Expérience <!-- nd:15cdb3d7 p:normal -->
- [ ] page promesse : sélectionner et détourer photos <!-- nd:986397bd p:normal -->

---

## Refonte Uber Eats
<!-- workstream: refonte-uber-eats -->
- [ ] Création formules + Restructuration catégories menu <!-- nd:1a126c41 p:normal a:joris -->
- [x] Bannière <!-- nd:975125e0 p:normal a:joris -->
- [ ] Optimisation prix vs commissions plateforme <!-- nd:32a3ecd0 p:normal a:joris -->
- [ ] Parcours client + cross-selling <!-- nd:6802085a p:normal a:joris -->
- [ ] Optimisation description produits <!-- nd:45ba9fc5 p:normal a:joris -->
- [ ] Création et formatage photos produits <!-- nd:698e7a24 p:normal -->

---

## Capture Données Clients
<!-- workstream: capture-donnees-clients -->
- [ ] Centralisation données Google Sheet <!-- nd:01a8cfc5 p:low -->
- [ ] Formulaire inscription landing page principale <!-- nd:99bac7e0 p:normal -->
- [ ] Incentive -10% + redirection avis Google <!-- nd:1b301afb p:normal -->
- [ ] Formulaire rapide prénom + email/tel <!-- nd:e9c12284 p:normal -->
- [ ] Micro-landing page collecte (strictfood.fr/avis) <!-- nd:32407f92 p:normal -->

---

## Strategie Marque
<!-- workstream: strategie-marque -->

<!-- programme: Brand Foundation -->
- [x] Plateforme de marque StrictFood <!-- nd:ae06b593 p:normal -->
- [x] Art direction et emotion map <!-- nd:c96cc85b p:normal -->
- [x] Design tokens dans globals.css <!-- nd:64dc9aae p:normal -->
- [x] Wireframes homepage + pages <!-- nd:1e2dc884 p:normal -->

---

## Production Instagram
<!-- workstream: production-instagram -->

<!-- programme: Pipeline contenu -->
- [x] Configurer le pipeline Instagram (production/CLAUDE.md) <!-- nd:375bac09 p:normal -->
- [x] Creer les premiers posts de lancement <!-- nd:1fb1fe5d p:normal -->
- [x] Definir la grille visuelle Instagram <!-- nd:290822df p:normal -->
- [ ] Ajouter guide dans ressources <!-- nd:7f7b55dc p:normal a:joris -->
- [ ] Refonte Profil : Bio, CTA <!-- nd:ba2dfa2a p:normal a:dorian -->
- [ ] Optimiser workflows créatifs pour gagner en productivité : verrouiller la pipeline <!-- nd:f62a260e p:normal a:dorian -->
- [ ] Générer semaine de posts <!-- nd:dea06a1e p:normal a:dorian -->
- [ ] Générer semaine stories <!-- nd:8c80ebf3 p:normal a:dorian -->

---

## Formulaires
<!-- workstream: formulaires -->

<!-- programme: Outils clients -->
- [x] Formulaire devis (devis-strictfood.vercel.app) <!-- nd:6fddac5d p:normal -->
- [x] Formulaire plateforme de marque <!-- nd:454fa78f p:normal -->
- [ ] Formulaire de strategie marketing <!-- nd:d08eabab p:low -->

---

## Phase B : Vibe Coding
<!-- workstream: gh-phase-b-vibe-coding -->
- [ ] B06 — Deploy (`pipeline/output/08-deploy.md`) <!-- nd:697c6e82 p:normal -->
- [x] B01 — Layout (`header.tsx`, `footer.tsx`, `mobile-menu.tsx`) <!-- nd:ab61dcce p:normal -->
- [ ] B03 — Pages (`/la-carte` creee, mentions-legales a faire) <!-- nd:7ddb5b34 p:normal -->
- [ ] B02 — Homepage (Manque : Contact & Horaires (Section 6)) <!-- nd:ebddd26c p:normal -->
- [ ] B05 — Validate (`pipeline/output/07-validation.md`) <!-- nd:df3d6865 p:normal -->
- [ ] B04 — Polish (Animations + SEO + coherence) <!-- nd:0623a468 p:normal -->

---

## Site Design
<!-- workstream: site-design -->

<!-- programme: Phase B — Vibe Coding -->
- [ ] Finaliser le polish global (B05-Validate) <!-- nd:0af35919 p:urgent -->
- [ ] Finaliser le polish global (B05-Validate) <!-- nd:2721ad7c p:urgent -->
- [ ] Verifier la coherence des design tokens avec globals.css <!-- nd:cc2f9391 p:normal -->
- [ ] Verifier la coherence des design tokens avec globals.css <!-- nd:2c9524f2 p:normal -->
- [ ] Responsive mobile — verifier tous les breakpoints <!-- nd:c4590546 p:normal -->
- [ ] Responsive mobile — verifier tous les breakpoints <!-- nd:15802c9f p:normal -->
- [ ] Dark mode — contraste et lisibilite <!-- nd:33631948 p:normal -->
- [ ] Dark mode — contraste et lisibilite <!-- nd:c8c798b2 p:normal -->

---

## Site Contenu
<!-- workstream: site-contenu -->

<!-- programme: Textes et copywriting -->
- [ ] Rediger les meta descriptions SEO pour chaque page <!-- nd:163fa541 p:normal -->
- [ ] Rediger les meta descriptions SEO pour chaque page <!-- nd:e9fc5195 p:normal -->
- [ ] Verifier le vouvoiement sur tous les contenus client <!-- nd:1200bffb p:normal -->
- [ ] Verifier le vouvoiement sur tous les contenus client <!-- nd:0fb91dcb p:normal -->
- [ ] Relire et valider les textes de la homepage <!-- nd:ba99268b p:normal -->
- [ ] Relire et valider les textes de la homepage <!-- nd:3640a605 p:normal -->

---

## Site Animations
<!-- workstream: site-animations -->

<!-- programme: Motion + Lenis -->
- [ ] Scroll animations Lenis — polish et performance <!-- nd:0fb5fa55 p:normal -->
- [ ] Scroll animations Lenis — polish et performance <!-- nd:e551a8e5 p:normal -->
- [ ] Transitions entre pages (Framer Motion) <!-- nd:2646220b p:normal -->
- [ ] Transitions entre pages (Framer Motion) <!-- nd:2558aedb p:normal -->
- [ ] Verifier les animations sur mobile (performance) <!-- nd:4c4a99c1 p:normal -->
- [ ] Verifier les animations sur mobile (performance) <!-- nd:3382bec2 p:normal -->

---

## Site SEO
<!-- workstream: site-seo -->

<!-- programme: Referencement -->
- [ ] Sitemap.xml et robots.txt <!-- nd:6169bc2e p:normal -->
- [ ] Sitemap.xml et robots.txt <!-- nd:9f442d16 p:normal -->
- [ ] Open Graph et meta tags pour chaque page <!-- nd:d5157bf5 p:normal -->
- [ ] Open Graph et meta tags pour chaque page <!-- nd:891183ea p:normal -->
- [ ] Schema.org (Organization + LocalBusiness) <!-- nd:52c0d740 p:normal -->
- [ ] Schema.org (Organization + LocalBusiness) <!-- nd:f7aeb346 p:normal -->
- [ ] Lighthouse audit et optimisation performance <!-- nd:1e42eaf6 p:normal -->
- [ ] Lighthouse audit et optimisation performance <!-- nd:aedd1157 p:normal -->

---

## Social Media
<!-- workstream: social-media -->

<!-- programme: Strategie contenu -->
- [ ] Definir la ligne editoriale Neurolia <!-- nd:b9ed7ee1 p:normal -->
- [ ] Definir la ligne editoriale Neurolia <!-- nd:f610c80f p:normal -->
- [ ] Creer les templates visuels pour posts <!-- nd:d1185594 p:low -->
- [ ] Creer les templates visuels pour posts <!-- nd:46e55556 p:low -->
- [ ] Planning editorial mensuel <!-- nd:b6e396da p:low -->
- [ ] Planning editorial mensuel <!-- nd:9931e703 p:low -->

---

## Site Agence (B05)
<!-- workstream: site-agence -->
- [ ] Validation finale B05 <!-- nd:29203d06 p:normal -->
- [ ] Validation finale B05 <!-- nd:5c7a4d43 p:normal -->
