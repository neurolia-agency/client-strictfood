# Guide Opérateur — Pipeline Instagram v2

Comment produire un post Instagram de A à Z. Tes interventions sont marquées `👤 TOI`, le reste est automatique.

---

## Vue d'ensemble

```
👤 TOI     Rédiger le brief
👤 TOI     Lancer le pipeline (1 prompt)
🤖 AUTO    Art Direction → Input Mapping
👤 TOI     Valider le mapping (1 réponse)
🤖 AUTO    Prompt Engineering → Commande NanoBanana
👤 TOI     Lancer la génération (1 copier-coller)
👤 TOI     Vérifier le visuel final
```

**Total interventions : 4** (brief, lancement, validation, génération)

---

## Étape 1 — Préparer le brief

### 👤 TOI — Créer le dossier et le brief

```bash
mkdir -p production/YYYY-MM-DD/00-brief
```

Copier le template `_templates/brief-v2.md` dans `00-brief/brief.md` et remplir :

- **Pilier** : Le Plat / La Cuisine / Le Client / Le Lieu / La Nutrition
- **Format** : Photo unique / Carrousel N slides
- **Objectif** : 1-3 phrases — pourquoi ce post, quel effet sur le viewer
- **Produit** : Nom exact + slug recette (ex: `strict-boeuf`)
- **Caption** : Caption Instagram complète avec hashtags
- **Food Porn Dial** : 1 à 10

**Ne PAS inclure** : chemin photo, recette détaillée, instructions techniques.

### Vérification rapide

Ton brief est prêt si tu peux répondre OUI à tout :
- [ ] Le pilier est clair
- [ ] Le produit a un slug qui correspond à un fichier dans `_recettes/`
- [ ] La caption est rédigée
- [ ] Il n'y a aucun chemin vers `public/images/` dans le brief

---

## Étape 2 — Lancer le pipeline

### 👤 TOI — Un seul prompt

```
/instagram-producer YYYY-MM-DD
```

Remplacer `YYYY-MM-DD` par la date du post (ex: `2026-03-15`).

**C'est tout.** Claude enchaîne automatiquement :
1. Vérifie ton brief
2. Lance le skill Art Director → écrit `direction.md`
3. Lance l'agent Input Mapper → écrit `input.md`
4. S'arrête et t'affiche le checkpoint

---

## Étape 3 — Valider le mapping

### 👤 TOI — Répondre au checkpoint

Claude t'affiche quelque chose comme :

```
📋 CHECKPOINT — Validation Input Mapping

Produit : STRICT Bœuf
Photo sélectionnée : public/images/photos-references/dark-bg/burger-simple-boeuf-dark-bg-2.png
  → Justification : vue de face, correspond à la contre-plongée demandée
Recette : production/_recettes/strict-boeuf.md

✅ Valider et continuer vers le prompt engineering ?
✏️ Modifier (préciser quoi) ?
```

**Tes options :**

| Tu réponds | Ce qui se passe |
|-----------|-----------------|
| `✅` ou `ok` ou `valide` | Claude continue → prompt engineering → commande NanoBanana |
| `Prends la photo 1 plutôt` | Claude corrige `input.md` et relance le checkpoint |
| `Le produit n'est pas bon, c'est le strict-max-boeuf` | Claude corrige et relance depuis l'input mapping |

---

## Étape 4 — Générer le visuel

### 👤 TOI — Lancer la commande

Après ta validation, Claude produit le prompt et t'affiche la commande prête :

```bash
uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Premium dark food photography of a gourmet artisan burger..." \
  --filename "2026-03-15-strict-boeuf-hero-4x5.png" \
  --input-image "public/images/photos-references/dark-bg/burger-simple-boeuf-dark-bg-2.png" \
  --resolution 4K \
  --api-key "$GEMINI_API_KEY"
```

**Tes options :**

| Tu réponds | Ce qui se passe |
|-----------|-----------------|
| `Lance` ou `Go` | Claude exécute la commande NanoBanana |
| `Montre-moi le prompt d'abord` | Claude affiche le prompt complet avant de lancer |
| `Ajuste le prompt : [modification]` | Claude modifie et te re-propose |

Le visuel final atterrit dans `production/YYYY-MM-DD/03-output/`.

---

## Étape 5 — Vérifier le résultat

### 👤 TOI — Contrôle qualité

Ouvrir le visuel généré et vérifier :

- [ ] **Fidélité produit** : les ingrédients correspondent à la recette (mâche pas roquette, parmesan en miettes pas copeaux)
- [ ] **DA respectée** : fond Charbon, highlights Cuivre Braisé, pas de couleur parasite
- [ ] **Composition** : angle et cadrage conformes à la direction créative
- [ ] **Texte** (si applicable) : lisible, bien placé, bonne typo
- [ ] **Qualité** : pas d'artefacts, de mains déformées, de textures aberrantes

**Si le visuel ne convient pas :**

```
Régénère le visuel du post 2026-03-15 — [ce qui ne va pas, ex: "le parmesan ressemble à des copeaux, il faut des miettes"]
```

Claude ajuste le prompt et relance la génération.

---

## Cas particuliers

### Carrousel (plusieurs slides)

Le pipeline produit **un prompt par slide**. La commande NanoBanana est affichée pour chaque slide séquentiellement. Tu valides une fois au checkpoint, puis toutes les slides sont générées.

### Post avec texte on-image (ex: cover carrousel)

Le pipeline détecte automatiquement que le slide nécessite du texte → bascule sur GPT Images au lieu de Gemini. Pas d'action de ta part.

### Photo PLACEHOLDER (pas de photo DA disponible)

Le checkpoint t'affichera un warning :

```
⚠️ PLACEHOLDER — pas de photo DA dark-bg disponible pour [produit]
Alternatives brutes : [liste]
```

Tes options :
- Fournir un chemin vers une photo brute à sublimer
- Demander une génération text-to-image (sans photo référence)
- Reporter le post

### Recette manquante

Le pipeline s'arrête et te demande de créer la fiche dans `_recettes/`. Utiliser les fiches existantes comme modèle.

---

## Résumé : quand est-ce que j'interviens ?

| Moment | Action | Durée estimée |
|--------|--------|---------------|
| Avant le pipeline | Rédiger le brief | 5-10 min |
| Lancement | `/instagram-producer YYYY-MM-DD` | 5 sec |
| Checkpoint | Valider ou ajuster le mapping photo | 30 sec |
| Génération | `Lance` ou ajuster le prompt | 10 sec |
| Post-génération | Contrôle qualité visuel | 1-2 min |

**Tout le reste est automatique.**
