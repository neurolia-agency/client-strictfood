# Brief Story Avis — S4 Samedi #2 (2026-04-05)

> **1 brief = 1 story avis.** Affiche 2 avis Google dans le template `story-avis.html`.
> **Type** : Brand / Avis — compte dans le quota Brand (~30%).
> **Mode** : template (rendu Puppeteer via `story-avis.html`).
> **Fréquence** : 2 stories avis par semaine.

---

## Story

| Champ | Valeur |
|-------|--------|
| Mode | template |
| Template | `story-avis.html` |
| Type | Brand / Avis |
| Intention | confiance |
| Nombre d'avis | 2 |

---

## Avis 1

| Champ | Valeur |
|-------|--------|
| Auteur | Sophie Delmas |
| Initiale | S |
| Meta | 15 avis · 6 photos |
| Couleur avatar | amber |
| Étoiles | 5 |
| Texte | J'y vais au moins deux fois par semaine depuis l'ouverture. Le pain noir au sésame est une tuerie, la viande est de qualité (boucherie locale, ça se sent). Le Strict Max Boeuf avec ses 97g de protéines, c'est mon cheat meal préféré — sauf que c'en est pas un ! Accueil toujours au top. |
| Scores | oui |
| Cuisine | 5/5 |
| Service | 5/5 |
| Ambiance | 5/5 |

## Avis 2

| Champ | Valeur |
|-------|--------|
| Auteur | Karim Benali |
| Initiale | K |
| Meta | 3 avis |
| Couleur avatar | feuille |
| Étoiles | 5 |
| Texte | Première visite ce samedi, conquis direct. Cuisson au air fryer, zéro huile, et pourtant c'est super gourmand. Ma femme a pris le végé falafel, excellent aussi. Les prix sont corrects pour la qualité. Foncez ! |
| Scores | non |

---

## Contraintes

- **Accents obligatoires** : tous les avis ont les accents corrects
- **Varier les couleurs avatar** : amber et feuille représentées
- **Texte pertinent** : chaque avis mentionne des produits StrictFood et des valeurs clés (pain noir, cuisson sans huile, qualité)
- **Pas de doublon** : avis inédits, différents de ceux de mercredi #3
- **Longueur texte** : pour 2 avis, textes moyens (3-4 lignes chacun)

## Étape suivante

> Remplir le template `story-avis.html` avec les données ci-dessus, puis rendre via Puppeteer :
> ```
> node _scripts/render-story.js --input [filled-html] --output brouillons/story.png
> ```
