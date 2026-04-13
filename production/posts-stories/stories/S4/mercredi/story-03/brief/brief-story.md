# Brief Story Avis — S4 Mercredi #3 (2026-04-02)

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
| Auteur | Lucas Martineau |
| Initiale | L |
| Meta | 12 avis · 3 photos |
| Couleur avatar | amber |
| Étoiles | 5 |
| Texte | Incroyable découverte ! Le pain noir au sésame change tout, c'est croustillant et léger à la fois. Le Strict Poulet est devenu mon repas post-salle. 53g de protéines sans se sentir lourd, franchement chapeau. |
| Scores | oui |
| Cuisine | 5/5 |
| Service | 5/5 |
| Ambiance | 4/5 |

## Avis 2

| Champ | Valeur |
|-------|--------|
| Auteur | Émilie Rousseau |
| Initiale | É |
| Meta | 8 avis · 1 photo |
| Couleur avatar | grenat |
| Étoiles | 5 |
| Texte | Enfin un fast-food où on peut manger sans culpabiliser. Cuisson sans huile, ingrédients frais, et le goût est là. Le wrap poulet est mon préféré. Je recommande à 100%. |
| Scores | non |

## Avis 3

| Champ | Valeur |
|-------|--------|
| Auteur | Thomas Lefèvre |
| Initiale | T |
| Meta | 5 avis |
| Couleur avatar | feuille |
| Étoiles | 5 |
| Texte | Service ultra rapide, équipe souriante. Le burger au pain noir c'est vraiment original et délicieux. Ma copine a adoré le falafel végé. On reviendra ! |
| Scores | non |

---

## Contraintes

- **Accents obligatoires** : tous les avis ont les accents corrects
- **Varier les couleurs avatar** : amber, grenat, feuille (les 3 sont représentées)
- **Texte pertinent** : chaque avis mentionne un produit ou une valeur clé StrictFood
- **Pas de doublon** : avis inédits, jamais publiés dans une story précédente
- **Longueur texte** : courts (2-3 lignes chacun) pour 3 avis

## Étape suivante

> Remplir le template `story-avis.html` avec les données ci-dessus, puis rendre via Puppeteer :
> ```
> node _scripts/render-story.js --input [filled-html] --output brouillons/story.png
> ```
