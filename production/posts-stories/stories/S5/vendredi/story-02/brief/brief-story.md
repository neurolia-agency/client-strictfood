# Brief Story Avis — S5 Vendredi #2 (11-04-2026)

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
| Auteur | Marine D. |
| Initiale | M |
| Meta | 14 avis · 6 photos |
| Couleur avatar | amber |
| Étoiles | 5 |
| Texte | On a testé en famille ce dimanche. Mon fils de 8 ans a adoré les tenders, mon mari le MAX Bœuf. Et moi je culpabilise pas avec le wrap poulet à 598 kcal. On revient la semaine prochaine ! |
| Scores | oui |
| Cuisine | 5/5 |
| Service | 5/5 |
| Ambiance | 4/5 |

## Avis 2

| Champ | Valeur |
|-------|--------|
| Auteur | Nicolas G. |
| Initiale | N |
| Meta | 9 avis · 4 photos |
| Couleur avatar | grenat |
| Étoiles | 5 |
| Texte | Je fais de la compétition en powerlifting et trouver un restaurant qui respecte mes macros c'est quasi impossible. StrictFood résout le problème. Le pain noir au sésame en plus c'est un régal. |
| Scores | oui |
| Cuisine | 5/5 |
| Service | 5/5 |
| Ambiance | 5/5 |

---

## Contraintes

- **Accents obligatoires** dans les textes des avis (é, è, ê, à, etc.)
- **Varier les couleurs avatar** : amber, grenat -- OK
- **Pas de doublon S4** : ces avis sont différents de ceux de S4 (Thomas R., Julie M., Karim D.)
- **Pas de doublon S5 mardi** : ces avis sont différents de ceux du mardi #3 (Clément V., Léa P., Yassine M.)
- **Textes un peu plus longs** (2 avis = plus d'espace par avis)
- **Scores affichés** pour cette story (variété par rapport au mardi sans scores)

## Étape suivante

> Remplir le template `story-avis.html` avec les données ci-dessus, puis rendre via Puppeteer :
> ```
> node _scripts/render-story.js --input [filled-html] --output brouillons/story.png
> ```
