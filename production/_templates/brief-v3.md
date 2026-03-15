# Brief — Post [ID] ([Jour] [Date])

## Stratégie

| Champ | Valeur |
|-------|--------|
| Pilier | [Le Plat / La Cuisine / Les Macros / L'Équipe / Le Quartier] |
| Format | [Photo unique / Carrousel N slides] |
| Dimensions | 4:5 |
| Mode | [full-ia / irl-sublimation / compositing-irl / compositing-ia / template] |
| Période | [SX — Nom de la période] |

## Objectif

[1-3 phrases : pourquoi ce post existe, quel rôle dans le feed, quel effet sur le viewer]

## Produit

**[NOM PRODUIT]** — [Description courte]
Slug recette : `[slug-kebab-case]`

> Ne PAS inclure de lien vers la photo référence ni la recette complète.
> L'input mapper résout automatiquement produit → photo + recette.

---

## Sources visuelles (selon le mode)

### Si mode = `full-ia`

> Aucune source à fournir. Le pipeline résout via `photo-references.md` et génère avec Gemini.

### Si mode = `irl-sublimation`

| Champ | Valeur |
|-------|--------|
| Photo source | `[chemin vers la photo réelle à sublimer]` |
| Direction sublimation | [Ce qu'on veut améliorer — ex: "aligner couleurs DA, renforcer contraste, fond plus sombre"] |

### Si mode = `compositing-irl`

| Champ | Valeur |
|-------|--------|
| Photo produit | `[chemin vers la photo du produit]` |
| Photo lieu | `[chemin vers la photo du lieu — salle, devanture, comptoir]` |
| Intention compositing | [Comment intégrer le produit dans le lieu — ex: "burger posé sur le comptoir, éclairage naturel fenêtre"] |

### Si mode = `compositing-ia`

| Champ | Valeur |
|-------|--------|
| Photo produit | `[chemin vers la photo du produit réel]` |
| Scène imaginée | [Description de la scène IA — ex: "cuisine industrielle avec inox, vapeur, éclairage dramatique latéral"] |

### Si mode = `template`

| Champ | Valeur |
|-------|--------|
| Type template | [carrousel-macros / comparaison / astuce-nutrition / custom] |
| Nombre de slides | [N] |
| Données par slide | [voir section données ci-dessous] |

#### Données slides (si mode template)

**Slide 1 — [Titre/Rôle]**
- [Champ] : [Valeur]
- [Champ] : [Valeur]

**Slide 2 — [Titre/Rôle]**
- [Champ] : [Valeur]
- [Champ] : [Valeur]

[Répéter pour chaque slide]

---

## Direction Caption

| Champ | Valeur |
|-------|--------|
| Angle | [L'angle éditorial — ex: "Générosité, double steak, le burger qui ne fait pas semblant"] |
| Ton | [Direct / Chaleureux / Provocateur / Éducatif / Storytelling] |
| CTA | [Call to action — ex: "Viens goûter" / "Tag un pote" / "Lien en bio" / "Aucun"] |
| Mention prix | [Oui (préciser) / Non] |
| Mention macros | [Oui (headline / dans le corps) / Non] |
| Mention fournisseurs | [Oui (lesquels) / Non] |
| Mots/phrases à inclure | [Optionnel — ex: "cheat meal qui n'en est pas un"] |
| Mots/phrases à éviter | [Optionnel — ex: "healthy", "régime"] |

> La caption est générée APRÈS l'image par le skill `/caption-writer`.
> Ne PAS écrire la caption complète dans le brief.

---

## Contraintes

- [Contrainte visuelle 1 — ex: "Hero shot dessert, textures couches visibles"]
- [Contrainte visuelle 2 — ex: "Angle différent du post précédent"]
- DA : Dark Food Premium (fond Charbon, tons Cuivre Braisé)
- Food Porn Dial : [X]/10
- Brand props : [oui (l'art director choisit) / non (pas de branding) / forcé: wrapper-burger]

---

## Étape suivante

> Exécuter `/instagram-producer [DATE]`
> Le pipeline détecte automatiquement le mode et route vers le bon sous-pipeline.
