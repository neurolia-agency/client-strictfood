# Configuration Pipeline

## Photos Référence

→ Voir `production/_config/photo-references.md` (mapping centralisé produit → photos avec descriptions textuelles)

## Agent Input-Mapper

| Champ | Valeur |
|-------|--------|
| Agent | `production/.claude/agents/input-mapper.md` |
| Modèle | Haiku (tâche déterministe) |
| Déclenchement | Après validation de `01-art-direction/direction.md` |
| Input | Chemin du dossier post (ex: `production/post-stories/posts/periode-1/S1/2026-03-14/`) |
| Output | `[dossier-post]/00-input/input.md` |
| Consulte | `_config/photo-references.md` + `_recettes/[slug].md` |

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
| Stratégie globale | `strategie/strategie-globale.md` |
| Stratégie Instagram | `strategie/instagram-strategie.md` |

## Résolution

**Toujours 4K** — pas de draft, pas d'intermédiaire.

## Brand Props

| Élément | Valeur | Source |
|---------|--------|--------|
| Catalogue props | Descriptions packaging brandé | `production/_config/brand-props.md` |
| Dial BRAND_PRESENCE | 4/10 (~30-40% des posts) | `production/_config/brand-props.md` |

## Modèle par défaut

- Photo sans texte → **Gemini (Nanobanana Pro)**
- Photo avec texte on-image → **GPT Images (gpt-image-1.5)**
- Infographie / template → **GPT Images**
