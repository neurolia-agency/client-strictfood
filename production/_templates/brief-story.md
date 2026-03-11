# Brief Story — [Semaine] [Jour] — Story [N]

## Stratégie

| Champ | Valeur |
|-------|--------|
| Semaine | [S1 / S2] |
| Jour | [lundi / mardi / ...] |
| Type | [Fiche Produit / Teaser / Interactif / Éducatif / Annonce / Coulisse / Lieu / Ambiance / CTA / Récap] |
| Highlight | [LA CARTE / COULISSES / NOS ARTISANS / NOUS TROUVER / L'ÉQUIPE / —] |
| Qui produit | [Pipeline / Romain-Dorian / Joris] |
| Dimensions | 9:16 (1080×1920) |

## Objectif

[1-2 phrases : pourquoi cette story existe, quel rôle dans la séquence du jour]

## Contenu

### Si type = Fiche Produit

**Produit** : [NOM PRODUIT]
Slug recette : `[slug-kebab-case]`

> Le story-data-mapper résout automatiquement les données nutritionnelles depuis `_recettes/[slug].md`.
> Ne PAS copier les macros ici — c'est le rôle de l'agent.

Tagline : `[texte tagline bottom]`
Bénéfices à mettre en avant :
1. [Bénéfice 1 — ex: "Cuisson sans huile"]
2. [Bénéfice 2 — ex: "Artisans locaux"]
3. [Bénéfice 3 — ex: "Protéines premium"]

Image de fond : `[chemin vers photo pertinente OU "aucune" — préférer une image contextuelle plutôt que "aucune"]`

### Si type = Teaser

Post teasé : `production/posts-stories/posts/[periode]/[SX]/YYYY-MM-DD/` (ou description)
Hook : `[Phrase d'accroche — ex: "Ça arrive aujourd'hui..."]`
Date de publication du post : `[JJ/MM ou "Aujourd'hui"]`
Sous-texte : `[Texte complémentaire]`
Image de fond : `[chemin vers photo pertinente OU "aucune" — préférer une image contextuelle plutôt que "aucune"]`

### Si type = Interactif

Format sticker : [Sondage 2 choix / Quiz / Slider / Question ouverte]
Question : `[Texte de la question]`
Option A : `[emoji] [texte]`
Option B : `[emoji] [texte]`
Image de fond : `[chemin vers photo pertinente OU "aucune" — préférer une image contextuelle plutôt que "aucune"]`
Tagline : `[texte ou "—"]`

### Si type = Éducatif

Titre : `[Question éducative — ex: "Cuisson sans huile ?"]`
Chiffre clé : `[nombre]` + `[unité — ex: "grammes de lipides en moins"]`
Explication : `[1-2 phrases]`

Comparaison VS (optionnel) :
- Strict Food's : `[valeur]` `[unité]`
- Classique : `[label]` `[valeur]` `[unité]`

Image de fond : `[chemin vers photo pertinente OU "aucune" — préférer une image contextuelle plutôt que "aucune"]`

### Si type = Annonce

Badge : `[texte badge — ex: "NOUVEAU"]`
Headline : `[Titre principal — accepte <em> pour l'accent couleur]`
Body : `[Texte corps — accepte <strong> pour les mots clés]`
CTA : `[texte bouton ou "aucun"]`
Image de fond : `[chemin vers photo pertinente OU "aucune" — préférer une image contextuelle plutôt que "aucune"]`
Tagline : `[texte tagline]`

### Si type = Coulisse / Lieu / Ambiance / CTA / Récap

**Étape préalable — Vérification bibliothèque :**

| Résultat | Action |
|----------|--------|
| Photo trouvée ET pertinente | Reclasser en Pipeline → template `annonce.html` |
| Aucune photo OU non pertinente | Garder en capture terrain → générer Demande Photo |

**Si reclassé en Pipeline :**

| Champ | Valeur |
|-------|--------|
| Template | `annonce.html` |
| Image de fond | `[chemin depuis photo-references.md]` |

Badge : `[NOUS TROUVER / COULISSES / ...]`
Headline : `[Titre]`
Body : `[Description]`
CTA : `[texte ou "aucun"]`
Tagline : `[texte tagline]`

**Si capture terrain :**

Description du contenu attendu : `[ce qu'ils doivent capter]`
Moment : `[matin / service midi / après-service]`
Durée estimée : `[photo / vidéo 10-15s / vidéo 30s]`
Stickers Instagram recommandés : `[localisation / musique / mention / —]`

→ Demande Photo générée automatiquement par le pipeline.

## Contraintes

- [Contrainte spécifique si applicable]
- DA : Dark Food Premium (fond Charbon #141210, accents Cuivre Braisé #BF8522)

## Étape suivante

> Exécuter `/story-producer S[X] [jour]` pour produire cette story.
