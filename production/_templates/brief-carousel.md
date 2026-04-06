# Brief Carrousel Texte — [Thématique] ([Date])

> Famille A — Slides texte rendues par Puppeteer (1080x1350)

## Stratégie

| Champ | Valeur |
|-------|--------|
| Pilier | [Les Benefices / La Marque] |
| Format | Carrousel texte [N] slides (1080x1350, 4:5) |
| Famille | A — Texte |
| Type | [Educatif / Ingredient Spotlight / Menu Objectif] |
| Thématique | `[slug-thématique]` (voir `_config/carousel-themes.md`) |
| Periode | [SX — Nom de la période] |

## Objectif

[1-3 phrases : pourquoi ce carrousel, quel effet sur le viewer, quel apprentissage]

## Produit de raccord

**[NOM PRODUIT]** — utilisé en slide finale pour ancrer le message dans l'offre StrictFood
Slug recette : `[slug-kebab-case]`

---

## Contenu (pré-rempli depuis la thématique, ajustable)

### Nombre de slides

[3 à 7] (cover + internes + sources + CTA)

### Angle éditorial

[L'angle précis du carrousel — plus fin que la thématique. Ex: "Comparaison frontale Big Mac vs STRICT Boeuf sur les macros, ton provocateur"]

### Stats/chiffres attendus

- [Chiffre 1 — ex: "60% du cerveau est composé de graisse"]
- [Chiffre 2 — ex: "30% de réduction du risque cardiovasculaire"]
- [...]

> Le skill `nutrition-researcher` recherchera et vérifiera ces chiffres. Ils peuvent être ajustés ou remplacés si les sources ne sont pas fiables.

### Notes spécifiques

- [Note 1 — ex: "Ne pas mentionner la sauce comme artisanale"]
- [Note 2 — ex: "Comparer avec les données Big Mac officielles"]
- [...]

---

## Direction Caption

| Champ | Valeur |
|-------|--------|
| Angle | [Complémentaire au carrousel — ex: "Approfondir l'étude Harvard citée en slide 3"] |
| Ton | [Éducatif / Provocateur / Direct / Storytelling] |
| CTA | [Ex: "Enregistre ce post" / "Tag un pote qui croit encore au régime sans gras" / Aucun] |
| Mention prix | [Oui (préciser) / Non] |
| Mention macros | [Oui / Non] |
| Mention fournisseurs | [Oui (lesquels) / Non] |
| Mots/phrases à inclure | [Optionnel] |
| Mots/phrases à éviter | [Optionnel — ex: "healthy", "régime", "sauce maison"] |

> La caption est générée APRÈS validation visuelle par `/caption-writer`.
> La caption COMPLÈTE le carrousel, elle ne le répète PAS.

---

## Contraintes

- DA : Dark Food Premium (cover ambre #E5A520, slides charbon #1a1714)
- Couverture : Texture Fill SVG sésame (pattern synthétique)
- Accents français obligatoires dans tous les textes
- Pas de numérotation de slides (IG montre déjà la progression)
- Sources regroupées sur une slide dédiée, pas dispersées
- Le mot/phrase clé de la slide finale doit avoir un traitement visuel différencié

---

## Étape suivante

> Exécuter `/carousel-producer [DATE]`
