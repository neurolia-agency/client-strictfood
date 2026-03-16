# Brief Stories — [Semaine] [Jour] (YYYY-MM-DD)

> **Pilier du jour** : [Le Plat / La Cuisine / L'Équipe / Confiance] — [Post SX-NN publié aujourd'hui / Pas de post]
> **Objectif stratégique** : [1-2 phrases sur le rôle de ce jour dans la semaine]
> **Persona cible** : [Sportifs / Actifs pressés / Locavores / Tous]
> **Ref stratégie** : Phase 1 §X.X — "[citation courte]"

---

## Story 1 — [Titre]

| Champ | Valeur |
|-------|--------|
| Type | [Fiche Produit / Interactif / Éducatif / Annonce / Lieu / Focus Ingrédient / IRL / Produit DA / Produit en situation / Visuel IA / Séquence / Recap] |

| Mode | [template / irl / irl-sublimation / compositing-irl / compositing-ia / full-ia] |
| Highlight | [LA CARTE / COULISSES / NOS ARTISANS / NOUS TROUVER / L'ÉQUIPE / —] |
| Qui produit | Pipeline |
| Template | `[template].html` (si mode=template ou irl) |
| Mood | [cuivre / grenat / feuille — optionnel, herite du mood jour] |
| Image | [discret / visible / hero — optionnel, herite de la valeur jour] |
| Brand props | [ID prop depuis `_config/brand-props.md` — ex: "wrapper-burger" / "cup-branded" / "auto" / "aucun" — optionnel, defaut: "auto"] |

> Le **Mode** est défini dans le planning semaine. Ne pas le changer dans le brief sauf hors-planning.

### Objectif

[1-2 phrases : pourquoi cette story existe, quel rôle dans la séquence du jour]

### Contenu

#### Si type = Fiche Produit (template: `vitrine.html — variante produit`)

**Produit** : [NOM PRODUIT]
Slug recette : `[slug-kebab-case]`

> Le story-data-mapper résout automatiquement les données nutritionnelles depuis `_recettes/[slug].md`.
> Ne PAS copier les macros ici — c'est le rôle de l'agent.

Accroche : `[1 phrase punchy — ex: "Le burger qui bat tes macros"]`
Macro star : `[la macro la plus impressionnante — ex: "53g protéines"]`
Badge : `[argument différenciateur court — ex: "SANS HUILE" / "ARTISANAL" / "LOCAL"]`
Prix : `[prix — ex: "8,90€"]`
Tagline : `[texte tagline bottom]`

Image hero : `[chemin vers photo produit détourée sur fond sombre — OBLIGATOIRE]`

> **Note** : Ce template utilise le style Vitrine (fond gradient coloré, produit lumineux en hero). Pas de photo de fond contextuelle — le produit EST le visuel.

#### Si type = Focus Ingrédient (template: `vitrine.html — variante composant`)

**Ingrédient** : [NOM INGRÉDIENT — ex: "Parmesan protéiné"]
Artisan : `[nom fournisseur — ex: "Myfitcheese"]`
Localité : `[ville — ex: "Perpignan"]`
Fait clé : `[1 phrase ou chiffre impactant — ex: "28g de protéines pour 100g" / "Pétri chaque matin à 4h"]`
Dans le : `[produit qui utilise cet ingrédient — ex: "STRICT Boeuf"]`
Tagline : `[texte tagline bottom]`

Image hero : `[chemin vers photo ingrédient en gros plan — OBLIGATOIRE]`

> **Note** : Ce template utilise le style Vitrine. L'ingrédient est en hero plein cadre, lumineux, sans filtre.
> **Highlight recommandé** : NOS ARTISANS

#### Si type = Interactif (template: `interactif.html`)

Format sticker : [Sondage 2 choix / Quiz / Slider / Question ouverte]
Question : `[Texte de la question]`
Option A : `[texte]`
Option B : `[texte]`
Tagline : `[texte ou "—"]`

**Mode visuel** : [Single / VS]

**Si Single** (question générale, pas de comparaison produit) :
Image de fond : `[chemin vers photo pertinente OU "aucune"]`

**Si VS** (choix entre deux produits identifiables) :
Produit A : `[nom court — ex: "Wrap"]` — image : `[chemin vers photo produit A]`
Produit B : `[nom court — ex: "Burger"]` — image : `[chemin vers photo produit B]`

> **Quand utiliser VS** : dès que les deux options sont des produits de la carte avec photos disponibles (burger vs wrap, boeuf vs poulet, etc.). Le template affiche les deux images en split + un bloc typographique "A VS B".
> **Quand rester en Single** : question d'opinion générale, options abstraites, ou un seul produit en fond.

#### Si type = Éducatif (template: `educatif.html`)

Titre : `[Question éducative — ex: "Cuisson sans huile ?"]`
Chiffre clé : `[nombre]` + `[unité — ex: "grammes de lipides en moins"]`
Explication : `[1-2 phrases]`

Comparaison VS (optionnel) :
- Strict Food's : `[valeur]` `[unité]`
- Classique : `[label]` `[valeur]` `[unité]`

Image de fond : `[chemin vers photo contextuelle — cuisine, restaurant, etc.]`
Alignement photo : `[element horizontal de reference — ex: "enseigne STRICT FOOD'S" / "comptoir" / "—"]`
Image produit (optionnel) : `[chemin vers photo produit pour le pattern dual-image, OU "aucune"]`

#### Si type = Annonce / Lieu (template: `annonce.html`)

Badge : `[texte badge — ex: "NOUVEAU" / "NOUS TROUVER"]`
Headline : `[Titre principal — accepte <em> pour l'accent couleur]`
Body : `[Texte corps — accepte <strong> pour les mots clés]`
CTA : `[texte bouton ou "aucun"]`
Image de fond : `[chemin vers photo pertinente OU "aucune" — préférer une image contextuelle]`
Alignement photo : `[element horizontal de reference — ex: "enseigne STRICT FOOD'S" / "comptoir" / "—"]`
Tagline : `[texte tagline]`

#### Si type = IRL (template: `irl-story.html`)

> **Nouveau.** Photo brute prise par l'équipe (coulisses, rush, ambiance) avec overlay DA minimal.

Photo : `[chemin vers la photo brute]`
Texte overlay : `[1 phrase courte — ex: "Derrière le comptoir" / "Rush du midi" / "—"]`
Position texte : [bas / centre / haut — défaut: bas]
Filtre : [léger / moyen / fort — défaut: léger]

> **Quand utiliser** : contenu authentique du quotidien (coulisses cuisine, ambiance, arrivages, équipe en action). Le pipeline applique un overlay DA minimal (logo + texte optionnel + filtre warm léger) sans dénaturer l'authenticité de la photo.

#### Si type = Produit DA (mode: `irl-sublimation`)

> **Story visuelle.** Photo produit sublimée en plein cadre 1080×1920.

Photo source : `[chemin vers la photo du produit]`
Direction sublimation : `[ce qu'on veut améliorer — ex: "renforcer ambiance DA, ombres plus dramatiques"]`
Texte overlay : `[optionnel — 1 phrase ou "—"]`

> Le pipeline sublime la photo via GPT Images en format 9:16, puis ajoute un overlay logo + texte optionnel via `irl-story.html`.

#### Si type = Produit en situation (mode: `compositing-irl` ou `compositing-ia`)

> **Story visuelle.** Produit intégré dans un lieu réel ou une scène IA, plein cadre 1080×1920.

**Si compositing-irl** :
Photo produit : `[chemin vers la photo du produit]`
Photo lieu : `[chemin vers la photo du lieu]`
Intention compositing : `[ex: "burger posé sur le comptoir, lumière naturelle fenêtre"]`

**Si compositing-ia** :
Photo produit : `[chemin vers la photo du produit]`
Scène imaginée : `[ex: "comptoir cuisine industrielle, vapeur, éclairage dramatique"]`

Texte overlay : `[optionnel — 1 phrase ou "—"]`

#### Si type = Visuel IA (mode: `full-ia`)

> **Story visuelle.** Image entièrement générée par l'IA en plein cadre 1080×1920.

Sujet : `[description du visuel — ex: "STRICT Bœuf en close-up macro, vapeur, fond charbon"]`
Direction artistique : `[ambiance, éclairage, style — ex: "cinématique, contre-jour, grain film"]`
Texte overlay : `[optionnel — 1 phrase ou "—"]`

> Utiliser pour les stories d'impact visuel : lancements, visuels impossibles à photographier.

#### Si type = Séquence (N/M)

> **Multi-stories liées visuellement.** Pour les process en étapes, avant/après, séries éducatives.

Position dans la séquence : `[N/M — ex: 1/3]`
Titre séquence : `[Nom commun — ex: "Du brut à l'assiette"]`
Template : `[template existant — educatif.html, annonce.html, etc.]`

> Chaque story de la séquence est un `## Story N` séparé dans le brief, avec le champ `Position dans la séquence` rempli. Le pipeline ajoute un indicateur visuel (ex: "1/3") sur chaque story. Toutes les stories d'une séquence utilisent le même mood et la même famille visuelle pour la cohérence.

[Remplir les champs du template choisi ci-dessus — Éducatif, Annonce, etc.]

#### Si type = Recap

> **Semi-manuel.** L'opérateur sélectionne le post le plus performant et le reposte en story.

Action : repost en story du post avec le meilleur engagement.
Texte overlay recommandé : `[texte]`

---

## Contraintes

- DA : Dark Food Premium (templates dark) / Vitrine (Fiche Produit + Focus Ingrédient)
- Mood : [cuivre / grenat / feuille] — cuivre = standard, grenat = intense/passion, feuille = nutrition/fraicheur
- Image : [discret / visible / hero] — visible = defaut, hero = photo dominante
- Sublimation : les templates appliquent automatiquement `text-depth` (headlines), `mark-tape` (body/info), `brightness(1.2)` (accents). Aucune action manuelle requise.
- [Contrainte specifique si applicable]

## Logique de variation de template

| Type | Template | Style |
|------|----------|-------|
### Stories template (mode `template`)

| Type | Template | Famille |
|------|----------|---------|
| Fiche Produit | `vitrine.html — variante produit` | **Vitrine** |
| Focus Ingrédient | `vitrine.html — variante composant` | **Vitrine** |
| Éducatif | `educatif.html` | Dark Premium |
| Interactif | `interactif.html` | Dark Premium |
| Annonce / Lieu | `annonce.html` | Dark Premium |

### Stories IRL (mode `irl`)

| Type | Template | Famille |
|------|----------|---------|
| IRL | `irl-story.html` | Dark Premium (overlay minimal) |

### Stories visuelles (modes `irl-sublimation`, `compositing-irl`, `compositing-ia`, `full-ia`)

| Type | Mode | Famille |
|------|------|---------|
| Produit DA | `irl-sublimation` | Visuel plein cadre |
| Produit en situation | `compositing-irl` / `compositing-ia` | Visuel plein cadre |
| Visuel IA | `full-ia` | Visuel plein cadre |

> Les stories visuelles produisent une image plein cadre 1080×1920. Un overlay logo + texte optionnel est ajouté via `irl-story.html`.

### Séquence

| Type | Mode | Famille |
|------|------|---------|
| Séquence (N/M) | Selon la story | Variable (même famille sur toute la séquence) |

> **Mix quotidien** : alterner template, IRL et visuelles dans la journée. Chaque jour doit avoir au moins 2 modes différents et au moins 1 story non-template.
> **Interactifs** : max 3/semaine.

## Étape suivante

> Exécuter `/story-producer S[X] [jour]` pour produire ces stories.
