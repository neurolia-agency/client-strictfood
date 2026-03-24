# Input Mapping — STRICT Wrap Poulet (23-03-2026)

> Généré automatiquement par l'agent input-mapper.
> Source : `production/art-direction.md` (mode compositing-ia)
> À valider par l'opérateur avant passage au prompt engineer.

---

## Produit Principal — STRICT Wrap Poulet

| Champ | Valeur |
|-------|--------|
| Produit | STRICT Wrap Poulet |
| Fiche recette | `production/_recettes/strict-wrap-poulet.md` |
| Photo référence | `public/images/photos-references/produits-source/wraps/strict-wrap-poulet.png` |
| Description photo | Vue de face, wrap coupé en diagonale, intérieur visible, fond neutre/transparent |
| Justification photo | Photo produit source — c'est la photo de base du wrap poulet. Mode compositing-ia utilise cette photo réelle comme élément à intégrer dans la scène IA. La découpe diagonale exposant l'intérieur correspond à la direction créative : "les deux moitiés du wrap coupées en diagonale, empilées/décalées, intérieur expose vers le haut-droit". |
| Photo disponible | ✅ Existe sur le disque (17 Mo, PNG haute résolution) |

---

## Ingrédients (traductions verrouillées EN — prompts IA)

| Ingrédient FR | Traduction EN (prompt) | Forme exacte | Interdit |
|---|---|---|---|
| Tortilla | "wheat flour tortilla (galette de blé) — soft and pliable, tightly rolled, surface lightly toasted from air-frying" | Galette de blé souple, enroulée serrée, surface légèrement toastée | "brioche", "flatbread generic" |
| Poulet rôti | "thin-sliced roasted chicken breast (lamelles) with uniform golden-brown Maillard crust from air-frying (zero oil), irregular slice edges showing chicken fiber texture" | En lamelles — tranches fines irrégulières, croûte Maillard visible, chaleur pulsée zéro huile | "grilled chicken", "cubes", "diced", "chicken chunks", "grill marks" |
| Parmesan | "finely grated parmesan dust, tiny powdery granules scattered like sand, some grains slightly melted/glistening on contact with warm chicken" | En miettes — petits fragments irréguliers, poudreux | "cheese crumbles", "shavings", "slices", "mozzarella", "chunks" |
| Oignons rouges | "thin-sliced red onion rings with visible concentric layers, some rings separated, natural color saturation" | En tranches fines — rondelles avec anneaux concentriques visibles | "diced", "chopped", "minced" |
| Mâche | "lamb's lettuce (mâche) — small, round, spoon-shaped whole green leaves, tender and delicate, some leaves naturally curled/pliable" | Feuilles entières — petites feuilles rondes vertes en bouquet | "arugula", "rocket", "spinach", "lettuce", "salad mix" |
| Sauce poivron | "a thin delicate drizzle of yellow-orange pepper sauce — a single fine thread, smooth consistency (not thick), subtle warm tone (never red, never white)" | Couleur jaune-orangé subtil — sauce lisse, pas épaisse | "ketchup", "red sauce", "mayo", "thick sauce", "white sauce" |

---

## Props brand

| Prop | Variante | Placement | Description EN |
|---|---|---|---|
| paper-liner | Papier kraft noir | Sous le wrap, bords visibles, légèrement froissé | "black kraft paper liner under the wrap — natural creases and folds, logo STRICT FOOD'S subtle in corner, matte non-glossy finish" |

---

## Contraintes mode compositing-ia

### Séparation responsabilités

- **Photo réelle (input-mapper)** : `produits-source/wraps/strict-wrap-poulet.png` — c'est le produit qui sera intégré dans la scène IA
- **Scène IA (prompt engineer)** : Comptoir inox brosse sombre, éclairage lateral chaud (~45° avant-gauche), vapeur subtile, reflets cuivres sur inox, ombres marquées, paper-liner froissé avec traces de sauce et miettes tombées
- **Ne doit PAS être généré** : le wrap lui-même (photo réelle en input)
- **Doit être généré** : contexte cuisine entier (comptoir, éclairage, vapeur, texture inox, shadows, reflets, ambiance cuisson service du soir)

### Matching éclairage produit ↔ scène

- Éclairage de la photo produit : non spécifié dans les meta — sera déterminé à la génération
- Éclairage scène IA : **lateral gauche (~45° avant-gauche), source unique dominante, hard light avec fill doux droite**
- **Ajustement prompt engineer** : s'assurer que l'éclairage généré par Gemini correspond à la direction et intensité décrites en DA (warm dore-cuivre, shadow sculpting dramatique)

### Détails contexte inox/comptoir

- Comptoir inox brosse sombre (brushed stainless steel, NOT polished)
- Reflets cuivres directionnels de la key light (warm highlights on metal edges)
- Ombre de contact douce directement sous le wrap sur le paper-liner
- Ombre portée du wrap sur l'inox (medium shadow, diffuse edges)
- Vapeur subtile en arrière-plan (light wisps, NOT heavy fog)

### Imperfections et traces réalisme

- 1-2 miettes de parmesan tombées à côté du wrap sur le paper-liner près de la coupe
- Filet de sauce poivron qui a coulé sur le paper-liner au moment de la coupe (thin single thread)
- Bord de tortilla légèrement soulevé/ondulé, pas parfaitement roulé (natural handmade quality)
- Paper-liner froissé naturellement, texture grainée visible (NOT flat/catalog-style)

### Positionnement produit dans cadre

- Cadrage : plan moyen serré — wrap occupe ~55% du cadre
- Angle : 3/4 légèrement surplombant (~35°) — vue depuis le POV du cuisinier qui vient de poser le wrap
- Placement : tiers central-bas du cadre, tiers supérieur dégagé (bokeh sombre, vapeur légère)
- Les deux moitiés du wrap visibles (empilées/décalées après découpe diagonale)

### Palette couleurs & Mood

- Fond/comptoir : Charbon profond
- Highlights/reflets : Cuivre Braise (warm golden copper tones)
- Tortilla : Couleur dorée naturelle
- Garnitures (mâche, oignons, sauce) : Couleurs saturées, riches (contraste maximal sur fond sombre)
- Ambiance : Culinaire brut (service du soir) — wrap fraîchement coupé, encore tiède, vapeur légère

### Résolution & Format

- Résolution : 4K (pour full quality)
- Format : 4:5 (Instagram story/post adapté)

---

## Notes pour le prompt engineer

1. **Photo produit en input** : La photo `produits-source/wraps/strict-wrap-poulet.png` sera fournie comme image de référence à Gemini. Le modèle doit intégrer ce wrap réel dans la scène générée, PAS réinventer le produit.
2. **Vocabulary verrouillé** : Utiliser EXACTEMENT les termes EN du tableau "Ingrédients" — c'est obligatoire pour consistency et quality check post-génération.
3. **Imperfections** : Inclure les 4 imperfections listées (miettes, sauce, bord soulevé, papier froissé) — ce sont des marqueurs de réalisme documentaire.
4. **Éclairage studio** : "Lateral key light stage-like warm golden studio setup, simulating professional kitchen evening service lighting with dramatic shadows — NOT natural light, NOT ambient restaurant light, NOT flat/soft".
5. **Pas de salle du restaurant** : Cette scène est la cuisine (plan de travail brut), PAS la salle. Aucun élément de décor restaurant (tables, clients, mur végétal, comptoir de service).
6. **Style v2** : Réalisme documentaire + dynamisme visuel. Dark Premium = fond sombre dramatique + produit lumineux et appétissant.

