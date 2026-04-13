# SOUS-PIPELINE TEMPLATE -- `template` (30%)

Data mapping -> Template HTML -> Puppeteer. Pas de generation IA.

```
Brief -> Copywriting -> Data Mapping -> CHECKPOINT -> Template Fill -> Puppeteer -> brouillons/
```

## T1 -- Copywriting (agent obligatoire)

1. **SPAWNER L'AGENT** : `story-copywriter` (Sonnet)
   ```
   Agent: story-copywriter
   subagent_type: (utiliser le fichier production/posts-stories/stories/.claude/agents/story-copywriter.md)
   Prompt: "Reecris les textes de la story [chemin brief].
   Contexte : Pilier=[pilier], Persona=[persona], Objectif=[objectif strategique]."
   model: sonnet
   ```

2. L'agent retourne les champs textuels reecrits. **Integrer les textes reecrits** dans le flux -- c'est la version copywriter qui sera utilisee pour le data mapping, pas le brief brut.

## T2 -- Data Mapping (agent obligatoire)

**Si la story reference un produit (Fiche Produit, certains Educatifs) :**

1. **SPAWNER L'AGENT** : `story-data-mapper` (Haiku)
   ```
   Agent: story-data-mapper
   subagent_type: (utiliser le fichier production/posts-stories/stories/.claude/agents/story-data-mapper.md)
   Prompt: "Resous les donnees pour la story [chemin brief]. Brand props: [valeur du champ Brand props du brief -- 'auto' si absent]."
   model: haiku
   ```
   L'agent lit le brief, consulte `_recettes/[slug].md`, `_config/photo-references.md` et `_config/brand-props.md`, et ecrit `production/data.md`.

2. **Fusionner les textes copywriter** : remplacer les valeurs textuelles dans le data.md par les versions reecrites du copywriter (etape T1).

3. **Assigner le preset photo et la force de gradient** :
   - Analyser le sujet de la photo -> choisir parmi les presets
   - Analyser la luminosite de la photo -> choisir la force de gradient
   - Ecrire les classes dans data.md

4. Apres ecriture, verifier :
   - Tous les placeholders du template sont couverts
   - Aucune donnee manquante
   - **Limites de caracteres respectees** (consulter `_templates/SPECS.md`)

**Si pas de produit reference** (Interactif, Annonce, Lieu) :
-> Construire le data.md directement depuis le brief **avec les textes reecrits par le copywriter**.

## T2b -- Visual Designer (optionnel)

**OPTIONNEL mais RECOMMANDE.** Le visual designer analyse la photo et genere des overrides CSS sur-mesure.

1. **INVOQUER LE SKILL** `/visual-designer`
2. Le skill ecrit `production/design-overrides.css`
3. **Integrer au template fill** : ajouter le CSS en dernier dans le `<head>`

## CHECKPOINT TEMPLATE

**STOP ICI.** Afficher a l'operateur un recap :

```
CHECKPOINT -- Story [chemin]

Template : [template].html
Traitement : [traitement]
Donnees : {{PLACEHOLDER}} -> [valeur] (pour chaque)
Copywriter : [resume des changements textuels]
Images : BG -> [chemin] | Hero -> [chemin ou "--"]
Status : Pret a generer

Valider et generer ?
Modifier (preciser quoi) ?
```

**Attendre la reponse de l'operateur.** Ne PAS continuer sans validation explicite.

## T2c -- Validation pre-render (OBLIGATOIRE)

**Avant de passer au fill**, verifier :

1. **Limites de caracteres** (consulter `_templates/SPECS.md`)
2. **Preset photo** defini
3. **Force gradient** definie pour les templates Dark Premium
4. **Blocs conditionnels** coherents

## T3 -- Template Fill + Render

1. **Lire le template HTML** depuis `_templates/`
2. **Lire data.md** : recuperer la table placeholder -> valeur
3. **Creer le HTML rempli** :
   - Remplacer chaque `{{PLACEHOLDER}}` par sa valeur
   - **`{{TAGLINE}}` est TOUJOURS `Le cheat meal qui n'en est pas un`**
   - Resoudre les chemins en absolu
   - Ecrire dans `production/story.html`

4. **Rendre en PNG (brouillon)** :
   ```bash
   node production/posts-stories/stories/_scripts/render-story.js \
     --input [story].html --output brouillons/story.png
   ```

5. **Controle anti-vide bas** : apres chaque render, ouvrir le PNG et verifier le tiers inferieur.
