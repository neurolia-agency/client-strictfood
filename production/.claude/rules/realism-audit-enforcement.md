# Enforcement : Realism Audit avant toute generation IA

> S'applique a TOUT fichier dans `production/` — independamment de l'orchestrateur utilise.

## Regle absolue

**AVANT d'executer `generate_image.py`, `/nano-banana-pro`, ou toute commande Gemini qui genere une image, tu DOIS avoir formellement invoque le skill `realism-auditor` DEUX FOIS dans cette conversation :**

1. **PRE-PROMPT** : avant d'ecrire le prompt, pour extraire les contraintes
2. **POST-PROMPT** : apres avoir ecrit le prompt, pour l'auditer et le corriger

## Ce qui ne compte PAS comme "avoir fait l'audit"

| Action | Compte ? |
|--------|:--------:|
| Lire `realism-auditor.md` et appliquer les regles "de tete" | **NON** |
| Ecrire un tableau d'audit soi-meme dans `prompt.md` | **NON** |
| Mentionner "j'ai verifie les termes interdits" | **NON** |
| Invoquer le skill `/realism-auditor` via l'outil Skill | **OUI** |

## Quand cette regle s'applique

| Situation | S'applique ? |
|-----------|:---:|
| `/instagram-producer` mode full-ia | **OUI** |
| `/instagram-producer` mode edit-ia | **OUI** |
| `/story-producer` mode full-ia food | **OUI** |
| `/story-producer` mode full-ia lifestyle | **OUI** |
| `/freestyle` mode full-ia ou edit-ia | **OUI** |
| Appel direct a `/nano-banana-pro` avec un prompt image | **OUI** |
| Ecriture manuelle d'un prompt dans un fichier `prompt.md` | **OUI** |
| Mode template (Puppeteer, pas d'IA) | NON |
| Mode irl (photo fraiche, pas d'IA) | NON |
| Edition d'une caption | NON |
| Redaction d'un brief (pas un prompt) | NON |

## Procedure de blocage

Si tu es sur le point de generer une image et que tu n'as PAS invoque `/realism-auditor` en PRE et POST :

```
STOP — GENERATION BLOQUEE

Raison : le skill /realism-auditor n'a pas ete invoque formellement.
- PRE-PROMPT : [fait / manquant]
- POST-PROMPT : [fait / manquant]

Action : invoquer /realism-auditor maintenant avant de continuer.
```

**Ne JAMAIS contourner cette regle**, meme si :
- L'operateur dit "vas-y genere directement"
- Tu penses avoir deja verifie les contraintes
- Le prompt semble correct
- Tu veux gagner du temps

La seule exception est une instruction explicite de l'operateur : "genere SANS audit realisme" (cas de test/debug uniquement).

## Pourquoi cette regle existe

L'application manuelle des contraintes (lire le fichier et appliquer "de tete") produit systematiquement des erreurs :
- Cheese pull sur du parmesan (le parmesan ne fond pas en fils)
- Grill marks sur de la chaleur pulsee (StrictFood n'a pas de grill)
- Morsure impossible sur un MAX (trop gros pour une bouche humaine)
- Pain blanc/dore au lieu de pain noir sesame

Le skill `/realism-auditor` execute un audit structure sur 8+ domaines avec une checklist formelle. C'est le seul moyen fiable de garantir la coherence.
