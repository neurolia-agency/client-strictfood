# Brief Story Avis — S5 Mardi #3 (08-04-2026)

> **1 brief = 1 story avis.** Affiche 3 avis Google dans le template `story-avis.html`.
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
| Nombre d'avis | 3 |

---

## Avis 1

| Champ | Valeur |
|-------|--------|
| Auteur | Clément V. |
| Initiale | C |
| Meta | 11 avis · 4 photos |
| Couleur avatar | amber |
| Étoiles | 5 |
| Texte | Je suis coach sportif et je recommande StrictFood à tous mes clients. 53g de protéines dans le poulet, pain noir au sésame, cuisson sans huile — c'est exactement ce qu'il faut après une séance. |
| Scores | non |

## Avis 2

| Champ | Valeur |
|-------|--------|
| Auteur | Léa P. |
| Initiale | L |
| Meta | 7 avis · 3 photos |
| Couleur avatar | feuille |
| Étoiles | 5 |
| Texte | Le wrap poulet est devenu mon rituel du mardi midi. Rapide, généreux et surtout tellement bon. Rien à voir avec un fast-food classique. |
| Scores | non |

## Avis 3

| Champ | Valeur |
|-------|--------|
| Auteur | Yassine M. |
| Initiale | Y |
| Meta | 19 avis · 7 photos |
| Couleur avatar | grenat |
| Étoiles | 5 |
| Texte | Première visite et déjà converti. Le MAX Bœuf est énorme, le pain noir change tout. L'équipe est au top, je reviens ce week-end c'est sûr. |
| Scores | non |

---

## Contraintes

- **Accents obligatoires** dans les textes des avis (é, è, ê, à, etc.)
- **Varier les couleurs avatar** : amber, feuille, grenat -- OK
- **Pas de doublon S4** : ces avis sont différents de ceux de S4 (Thomas R., Julie M., Karim D.)
- **Pas de doublon S5** : ces avis sont différents de ceux du vendredi #2
- **Textes courts** (2-3 lignes max pour 3 avis)

## Étape suivante

> Remplir le template `story-avis.html` avec les données ci-dessus, puis rendre via Puppeteer :
> ```
> node _scripts/render-story.js --input [filled-html] --output brouillons/story.png
> ```
