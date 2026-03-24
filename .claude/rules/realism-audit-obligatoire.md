# Realism Audit — Déclenchement automatique

> S'applique dans TOUS les contextes : pipeline orchestré, hors planning, édition manuelle, conversation libre.

## Règle n°1 — LIRE AVANT D'ÉCRIRE

**AVANT de rédiger ou modifier un prompt de génération d'image, tu DOIS lire ces fichiers dans cet ordre :**

```
1. production/.claude/agents/realism-auditor.md    ← Les 10 domaines + contraintes physiques
2. production/_recettes/[slug].md                  ← La recette exacte du produit
3. production/_config/pipeline.md                  ← Termes interdits, compatibilité concept × ingrédients
```

**Ce n'est PAS optionnel.** Tu ne peux PAS écrire un prompt d'image sans avoir lu ces 3 fichiers AVANT. Si tu les lis après, tu fais les mêmes erreurs (cheese pull sur du parmesan, grill marks sur de la chaleur pulsée, morsure impossible sur un MAX) et l'audit post ne fait que corriger des choses qui n'auraient jamais dû être écrites.

**L'ordre est : LIRE → CONTRAINDRE → ÉCRIRE → VÉRIFIER.**
PAS : écrire → vérifier → corriger.

## Quand cette règle s'applique

**TOUTE action qui produit ou modifie un prompt destiné à générer une image IA.** Pas d'exception.

| Situation | S'applique ? |
|-----------|:------------------:|
| `/instagram-producer` ou `/story-producer` (pipeline) | **OUI** — intégré dans le flux |
| Écriture/modification de prompts dans `prompts-variantes-combo-*.md` | **OUI** |
| Demande directe "génère un prompt pour concept-X produit-Y" | **OUI** |
| Demande directe "régénère le prompt de concept-croque pour le Strict Max Boeuf" | **OUI** |
| Demande directe "sublime cette photo" (irl-sublimation) | **OUI** |
| Demande directe "compose ces 2 photos" (compositing) | **OUI** |
| Demande directe "ajoute des sujets dans cette scène" (scene-ia) | **OUI** |
| Utilisation directe de `/nano-banana-pro` ou `generate_image.py` | **OUI** |
| Écriture d'un brief (pas un prompt image) | NON |
| Écriture d'une caption | NON |
| Remplissage de template HTML (mode template, pas d'IA) | NON |

## Le process en 4 étapes

### Étape 1 — LIRE (obligatoire, avant toute rédaction)

```
Lire production/.claude/agents/realism-auditor.md
Lire production/_recettes/[slug].md
Lire production/_config/pipeline.md (sections ⛔)
```

En lisant, extraire les contraintes spécifiques au concept × produit :
- Quels domaines d'audit s'appliquent (mains ? morsure ? fluides ?)
- Quelles interactions physiques sont possibles (taille du produit → grip, morsure, ouverture)
- Quels ingrédients exactement et sous quelle forme (parmesan = miettes, mâche = petites feuilles rondes)
- Quels termes sont INTERDITS et OBLIGATOIRES
- Le concept est-il COMPATIBLE avec les ingrédients (pas de cheese pull avec du parmesan)

### Étape 2 — ÉCRIRE (le prompt, informé par les contraintes)

Rédiger le prompt en intégrant les contraintes DÈS LA RÉDACTION :
- Les interactions physiques sont proportionnées au produit (simple vs MAX)
- Les ingrédients sont décrits avec les termes verrouillés
- Les imperfections artisanales du pain sont décrites
- Aucun terme interdit n'apparaît

### Étape 3 — VÉRIFIER (audit post-prompt)

Re-passer le prompt fini dans les 10 domaines :
- Termes interdits absents ? ✓
- Termes obligatoires présents ? ✓
- Physique cohérente (morsure, gravité, sauce) ? ✓
- Proportions adaptées au produit ? ✓
- Si human-* : principes candid respectés ? ✓

### Étape 4 — VÉRIFIER LE VISUEL (post-génération)

Après que l'image est générée, appliquer la checklist post-génération (domaine 10) :
couleur bun, texte parasite, sésame, affaissement, textures, contact surface, mâche, mains.

## Termes interdits (vérification systématique)

| Catégorie | INTERDIT dans les prompts |
|-----------|--------------------------|
| Pain | `white bun`, `brioche`, `golden bun`, `plain bun` |
| Cuisson | `grill marks`, `grilled`, `charred`, `char lines`, `barbecued`, `pan-fried`, `deep-fried` |
| Fromage | `cheese pull`, `stretchy cheese`, `gooey melting cheese`, `cheese strings`, `mozzarella` |
| Salade | `arugula`, `rocket`, `lettuce`, `spinach` |
| Parmesan | `shavings`, `shaved`, `slices`, `chunks` |
| Sauce | `ketchup`, `mustard`, `mayo`, `thick sauce`, `red sauce` |

## Résumé

**LIRE → CONTRAINDRE → ÉCRIRE → VÉRIFIER.** Pas de raccourci. Si tu rédiges un prompt sans avoir lu le Realism Auditor et la recette d'abord, tu VIOLES cette règle.
