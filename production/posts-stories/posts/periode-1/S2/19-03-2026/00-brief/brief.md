# Brief — Post S2-06 (Mercredi 2026-03-19)

## Stratégie

| Champ | Valeur |
|-------|--------|
| Pilier | Les Macros (Nutrition & Éducation) |
| Format | Carrousel 4 slides |
| Dimensions | 4:5 |
| Mode | `template` |
| Période | S2 — Compléter le mur visuel |

## Objectif

Premier post nutrition. Matérialiser le "cheat meal qui n'en est pas un" avec des chiffres concrets. La comparaison STRICT Bœuf vs burger fast-food classique parle d'elle-même. Ce post introduit le pilier Macros et établit le style des infographies nutrition.

## Produit

**STRICT Bœuf** — Comparaison nutritionnelle vs burger fast-food classique.
Slug recette : `strict-boeuf`

> Ne PAS inclure de lien vers la photo référence ni la recette complète.

---

## Sources visuelles

### Mode = `template`

| Champ | Valeur |
|-------|--------|
| Type template | comparaison-macros |
| Nombre de slides | 4 |

#### Données slides

**Slide 1 — Cover (Image de grille)**
- Headline : `Ton burger vs notre burger.`
- Sous-titre : `Les chiffres parlent.`
- Style : Fond Charbon #141210, typo Oswald blanc, accroche cuivre. Graphique, épuré, pas de photo.

**Slide 2 — Comparaison chiffrée**
- Colonne gauche (Classique) : `Burger classique` — 800-1000 kcal, 25-30g prot, 45-55g lip
- Colonne droite (StrictFood) : `STRICT Bœuf` — 596 kcal, 53g prot, 21,5g lip
- Style : Barres visuelles. Cuivre Braisé pour StrictFood, gris pour classique. Feuille Grillée pour indicateurs positifs.

**Slide 3 — 3 différences clés**
- Point 1 : `Viande d'artisan, pas industrielle` (Boucherie Labourde)
- Point 2 : `Cuit sans huile` (chaleur pulsée)
- Point 3 : `Pain boulanger, pas bun industriel` (Pains du Soleil)
- Style : Icônes simples, texte Space Grotesk, fond sombre

**Slide 4 — Conclusion + CTA**
- Chiffre hero : `596 kcal. 53g de protéines.`
- Tagline : `Le cheat meal qui n'en est pas un.`
- Localisation : `📍 Château Roussillon, Perpignan`

---

## Direction Caption

| Champ | Valeur |
|-------|--------|
| Angle | Comparaison factuelle, les chiffres parlent d'eux-mêmes |
| Ton | Direct, légèrement provocateur |
| CTA | "Swipe pour voir le détail →" |
| Mention prix | Non |
| Mention macros | Oui (headline — kcal, protéines, lipides) |
| Mention fournisseurs | Oui (Boucherie Labourde, Pains du Soleil, Myfitcheese) |
| Mots/phrases à inclure | "Même plaisir. Pas les mêmes chiffres." |
| Mots/phrases à éviter | "healthy", "régime", "diet" |

> La caption est générée APRÈS l'image par le skill `/caption-writer`.

---

## Contraintes

- Infographie sobre et premium — pas de style "fitness bro" criard
- Fond Charbon, typo Oswald pour chiffres forts, Space Grotesk pour labels
- Accents Cuivre Braisé et Feuille Grillée
- Pas de "versus" agressif — la comparaison parle d'elle-même
- Données macros vérifiées (source : `_recettes/strict-boeuf.md`)
- DA : Dark Food Premium (fond Charbon, tons Cuivre Braisé)
- Food Porn Dial : N/A (post infographique)
- Brand props : non

---

## Étape suivante

> Exécuter `/instagram-producer 2026-03-19`
> Le pipeline détecte le mode `template` et route vers le sous-pipeline HTML → Puppeteer.
