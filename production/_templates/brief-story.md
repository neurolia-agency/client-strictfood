# Brief Stories — [Semaine] [Jour] (YYYY-MM-DD)

> **Pilier du jour** : [Le Plat / La Cuisine / L'Équipe / Confiance] — [Post SX-NN publié aujourd'hui / Pas de post]
> **Objectif stratégique** : [1-2 phrases sur le rôle de ce jour dans la semaine]
> **Persona cible** : [Sportifs / Actifs pressés / Locavores / Tous]
> **Ref stratégie** : Phase 1 §X.X — "[citation courte]"

---

## Story 1 — [Titre]

| Champ | Valeur |
|-------|--------|
| Type | [Fiche Produit / Teaser / Interactif / Éducatif / Annonce / Lieu / Recap] |
| Highlight | [LA CARTE / COULISSES / NOS ARTISANS / NOUS TROUVER / L'ÉQUIPE / —] |
| Qui produit | Pipeline |
| Template | `[template].html` |
| Mood | [cuivre / grenat / feuille — optionnel, herite du mood jour] |
| Image | [discret / visible / hero — optionnel, herite de la valeur jour] |

### Objectif

[1-2 phrases : pourquoi cette story existe, quel rôle dans la séquence du jour]

### Contenu

#### Si type = Fiche Produit

**Produit** : [NOM PRODUIT]
Slug recette : `[slug-kebab-case]`

> Le story-data-mapper résout automatiquement les données nutritionnelles depuis `_recettes/[slug].md`.
> Ne PAS copier les macros ici — c'est le rôle de l'agent.

Tagline : `[texte tagline bottom]`
Bénéfices à mettre en avant :
1. [Bénéfice 1 — ex: "Cuisson sans huile"]
2. [Bénéfice 2 — ex: "Artisans locaux"]
3. [Bénéfice 3 — ex: "Protéines premium"]

Image de fond : `[chemin vers photo pertinente OU "aucune" — préférer une image contextuelle]`
Alignement photo : `[element horizontal de reference — ex: "enseigne STRICT FOOD'S" / "comptoir" / "—"]`

#### Si type = Teaser

Post teasé : `production/posts-stories/posts/[periode]/[SX]/YYYY-MM-DD/` (ou description)
Hook : `[Phrase d'accroche — ex: "Ça arrive aujourd'hui..."]`
Date de publication du post : `[JJ/MM ou "Aujourd'hui" ou "Demain"]`
Sous-texte : `[Texte complémentaire]`
Image de fond : `[chemin vers photo pertinente OU "aucune" — préférer une image contextuelle]`
Alignement photo : `[element horizontal de reference — ex: "enseigne STRICT FOOD'S" / "comptoir" / "—"]`

#### Si type = Interactif

Format sticker : [Sondage 2 choix / Quiz / Slider / Question ouverte]
Question : `[Texte de la question]`
Option A : `[texte]`
Option A Emoji : `[emoji]`
Option B : `[texte]`
Option B Emoji : `[emoji]`
Image de fond : `[chemin vers photo pertinente OU "aucune" — préférer une image contextuelle]`
Alignement photo : `[element horizontal de reference — ex: "enseigne STRICT FOOD'S" / "comptoir" / "—"]`
Tagline : `[texte ou "—"]`

#### Si type = Éducatif

Titre : `[Question éducative — ex: "Cuisson sans huile ?"]`
Chiffre clé : `[nombre]` + `[unité — ex: "grammes de lipides en moins"]`
Explication : `[1-2 phrases]`

Comparaison VS (optionnel) :
- Strict Food's : `[valeur]` `[unité]`
- Classique : `[label]` `[valeur]` `[unité]`

Image de fond : `[chemin vers photo contextuelle — cuisine, restaurant, etc.]`
Alignement photo : `[element horizontal de reference — ex: "enseigne STRICT FOOD'S" / "comptoir" / "—"]`
Image produit (optionnel) : `[chemin vers photo produit pour le pattern dual-image, OU "aucune"]`

#### Si type = Annonce / Lieu

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

- DA : Dark Food Premium
- Mood : [cuivre / grenat / feuille] — cuivre = standard, grenat = intense/passion, feuille = nutrition/fraicheur
- Image : [discret / visible / hero] — visible = defaut, hero = photo dominante
- Sublimation : les templates appliquent automatiquement `text-depth` (headlines), `mark-tape` (body/info), `brightness(1.2)` (accents). Aucune action manuelle requise.
- [Contrainte specifique si applicable]

## Étape suivante

> Exécuter `/story-producer S[X] [jour]` pour produire ces stories.
