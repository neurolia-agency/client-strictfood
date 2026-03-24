# Brief — Post #6 (Mercredi 19-03-2026)

## Stratégie

| Champ | Valeur |
|-------|--------|
| Pilier | Les Macros |
| Format | Carrousel 4 slides |
| Dimensions | 4:5 |
| Mode | `template` |
| Période | S2 — Compléter le mur visuel |

## Objectif

Premier post nutrition du feed. Matérialiser le claim tagline "le cheat meal qui n'en est pas un" avec des chiffres concrets. Infographie premium sobre — pas un post "fitness bro".

## Produit

**STRICT Boeuf** — Comparaison nutritionnelle vs burger fast-food classique.
Slug recette : `strict-boeuf`

> Ne PAS inclure de lien vers la photo référence ni la recette complète.

---

## Sources visuelles (selon le mode)

### Mode = `template`

| Champ | Valeur |
|-------|--------|
| Type template | comparaison nutritionnelle |
| Nombre de slides | 4 |

#### Données slides

**Slide 1 — Cover**
- Headline : `Ton burger vs notre burger.`
- Sous-titre : `Les chiffres parlent.`
- Style : Fond Charbon, typo Oswald blanc, sous-titre Space Grotesk en Cuivre

**Slide 2 — Comparaison chiffrée**
- Colonne gauche (Classique) : Burger fast-food — 800-1000 kcal, 25-30g prot, 45-55g lip
- Colonne droite (StrictFood) : STRICT Boeuf — 596 kcal, 53g prot, 21.5g lip
- Style : Deux colonnes, accents Cuivre (STRICT) et gris (classique)

**Slide 3 — 3 différences clés**
- Point 1 : Viande artisanale Boucherie Labourde
- Point 2 : Cuisson chaleur pulsée 0g huile
- Point 3 : Pain boulanger Pains du Soleil
- Style : Icônes minimalistes, texte Space Grotesk, fond sombre

**Slide 4 — Conclusion + CTA**
- Tagline : `Même plaisir. Pas les mêmes chiffres.`
- CTA : Adresse 88 Chemin de la Roseraie + horaires mardi-samedi

---

## Direction Caption

| Champ | Valeur |
|-------|--------|
| Angle | Comparaison factuelle, pas moralisateur, les chiffres parlent d'eux-mêmes |
| Ton | Direct |
| CTA | Swipe pour voir le détail |
| Mention prix | Non |
| Mention macros | Oui (dans le corps — kcal, protéines, lipides) |
| Mention fournisseurs | Oui (Boucherie Labourde, Pains du Soleil, Myfitcheese) |
| Mots/phrases à inclure | "Même plaisir. Pas les mêmes chiffres." |
| Mots/phrases à éviter | "healthy", "diet", "régime" |

> La caption est générée APRÈS l'image par le skill `/caption-writer`.
> Ne PAS écrire la caption complète dans le brief.

---

## Contraintes

- Infographie sobre premium — pas de couleurs flashy fitness
- Fond Charbon, typo Oswald pour chiffres forts, Space Grotesk pour labels
- Accents Cuivre Braisé et Feuille Grillée
- Pas de "versus" agressif — la comparaison parle d'elle-même
- DA : Dark Food Premium (fond Charbon, tons Cuivre Braisé)
- Food Porn Dial : N/A (post infographique)
- Brand props : non

---

## Étape suivante

> Exécuter `/instagram-producer 19-03-2026`
> Le pipeline détecte automatiquement le mode `template` et route vers le sous-pipeline HTML → Puppeteer.
