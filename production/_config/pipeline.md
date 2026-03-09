# Configuration Pipeline

## Photos référence par produit

Les photos référence sont les versions sublimées DA des produits.
Elles servent d'input image pour Nanobanana/GPT au moment de la génération.

| Produit | Photo référence | Chemin |
|---------|----------------|--------|
| STRICT Bœuf | Burger simple bœuf, fond sombre DA | `public/images/dark-bg/burger-simple-boeuf-dark-bg-2.png` |

> Compléter ce tableau au fur et à mesure que les photos sublimées des autres produits sont disponibles.

## DA Référence

| Élément | Valeur | Source |
|---------|--------|--------|
| Palette complète | oklch tokens | `app/globals.css` |
| Contraintes design | Règles visuelles | `pipeline/output/02-art-direction/constraints.md` |
| Vocabulaire visuel | Moodboard textuel | `pipeline/output/02-art-direction/visual-vocabulary.md` |
| Composants UI | Kit composants | `pipeline/output/02-art-direction/ui-kit.md` |
| Emotions par section | Carte émotionnelle | `pipeline/output/02-art-direction/emotion-map.md` |
| Tone of voice | Ton éditorial | `pipeline/output/01-brand/tone.md` |
| Positionnement | Tagline, USPs, messages | `pipeline/output/01-brand/positioning.md` |

## Stratégie Instagram

| Document | Chemin |
|----------|--------|
| Stratégie globale | `strategie/strategie.md` |
| Stratégie Instagram | `strategie/instagram-strategie.md` |
| Calendrier S0+S1 | `strategie/instagram-S0-S1.md` |

## Résolution

**Toujours 4K** — pas de draft, pas d'intermédiaire.

## Modèle par défaut

- Photo sans texte → **Gemini (Nanobanana Pro)**
- Photo avec texte on-image → **GPT Images (gpt-image-1.5)**
- Infographie / template → **GPT Images**
