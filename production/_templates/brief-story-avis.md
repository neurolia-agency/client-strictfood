# Brief Story Avis — [Semaine] [Jour] #[N] (YYYY-MM-DD)

> **1 brief = 1 story avis.** Affiche 1 à 3 avis Google dans le template `story-avis.html`.
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
| Nombre d'avis | [1 / 2 / 3] |

---

## Avis 1

| Champ | Valeur |
|-------|--------|
| Auteur | [Prénom Nom tel qu'affiché sur Google] |
| Initiale | [Première lettre du prénom] |
| Meta | [X avis · Y photos — tel qu'affiché sur Google] |
| Couleur avatar | [amber / grenat / feuille] |
| Étoiles | [5] |
| Texte | [Copier-coller l'avis Google, AVEC accents corrigés si nécessaire] |
| Scores | [oui / non — afficher Cuisine/Service/Ambiance] |
| Cuisine | [X/5 — si scores = oui] |
| Service | [X/5 — si scores = oui] |
| Ambiance | [X/5 — si scores = oui] |

## Avis 2 (si nombre d'avis ≥ 2)

| Champ | Valeur |
|-------|--------|
| Auteur | |
| Initiale | |
| Meta | |
| Couleur avatar | |
| Étoiles | [5] |
| Texte | |
| Scores | |
| Cuisine | |
| Service | |
| Ambiance | |

## Avis 3 (si nombre d'avis = 3)

| Champ | Valeur |
|-------|--------|
| Auteur | |
| Initiale | |
| Meta | |
| Couleur avatar | |
| Étoiles | [5] |
| Texte | |
| Scores | |
| Cuisine | |
| Service | |
| Ambiance | |

---

## Contraintes

- **Accents obligatoires** : corriger les accents manquants dans les avis Google (é, è, ê, à, ù, etc.)
- **Varier les couleurs avatar** : ne pas mettre 3x amber — alterner amber, grenat, feuille
- **Texte pertinent** : sélectionner des avis qui mentionnent des éléments clés (qualité, santé, goût, service)
- **Pas de doublon** : ne pas réutiliser un avis déjà publié dans une story précédente
- **Longueur texte** : pour 3 avis, garder les textes courts (2-3 lignes max chacun). Pour 1 avis, le texte peut être plus long.

## Étape suivante

> Remplir le template `story-avis.html` avec les données ci-dessus, puis rendre via Puppeteer :
> ```
> node _scripts/render-story.js --input [filled-html] --output brouillons/story.png
> ```
