# Brief Stories — [Semaine] [Jour] (YYYY-MM-DD)

> **Pilier du jour** : [Le Plat / La Cuisine / L'Équipe / Confiance] — [Post SX-NN publié aujourd'hui / Pas de post]
> **Objectif stratégique** : [1-2 phrases sur le rôle de ce jour dans la semaine]
> **Persona cible** : [Sportifs / Actifs pressés / Locavores / Tous]
> **Ref stratégie** : Phase 1 §X.X — "[citation courte]"

---

## Story 1 — [Titre]

| Champ | Valeur |
|-------|--------|
| Type | [Fiche Produit / Interactif / Éducatif / Annonce / Lieu / Focus Ingrédient / Recap] |
| Highlight | [LA CARTE / COULISSES / NOS ARTISANS / NOUS TROUVER / L'ÉQUIPE / —] |
| Qui produit | Pipeline |
| Template | `[template].html` |
| Mood | [cuivre / grenat / feuille — optionnel, herite du mood jour] |
| Image | [discret / visible / hero — optionnel, herite de la valeur jour] |
| Brand props | [ID prop depuis `_config/brand-props.md` — ex: "wrapper-burger" / "cup-branded" / "auto" / "aucun" — optionnel, defaut: "auto"] |

### Objectif

[1-2 phrases : pourquoi cette story existe, quel rôle dans la séquence du jour]

### Contenu

#### Si type = Fiche Produit (template: `produit-vitrine.html`)

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

#### Si type = Focus Ingrédient (template: `focus-ingredient.html`)

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
| Fiche Produit | `produit-vitrine.html` | **Vitrine** (coloré, produit hero) |
| Focus Ingrédient | `focus-ingredient.html` | **Vitrine** (coloré, ingrédient hero) |
| Éducatif | `educatif.html` | Dark Premium |
| Interactif | `interactif.html` | Dark Premium |
| Annonce / Lieu | `annonce.html` | Dark Premium |

> **Objectif** : alterner systématiquement Dark Premium et Vitrine dans la séquence du jour pour casser la monotonie visuelle. Chaque jour devrait avoir au moins 1 story Vitrine.
> **Interactifs** : 2-3 par semaine (max 3). Quand un slot Dark Premium est disponible, prioriser Interactif — c'est le type qui génère le plus de rétention (action mesurable : tap, vote, réponse).

## Étape suivante

> Exécuter `/story-producer S[X] [jour]` pour produire ces stories.
