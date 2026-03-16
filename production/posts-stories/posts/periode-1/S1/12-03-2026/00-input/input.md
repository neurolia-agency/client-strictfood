# Input Mapping — S1-02 Carrousel "Du Boucher a l'Assiette"

> Post : 2026-03-12 | Produit principal : STRICT Boeuf (slug: strict-boeuf)
>
> **RÈGLE DE PRIORITÉ APPLIQUÉE** : Burgers BLACK BUN obligatoirement en priorité. Slides 1-2 = PHOTOS RÉELLES fournies par l'opérateur.

---

## Produits identifies dans la direction creative

| Produit | Slug | Fiche recette | Statut |
|---------|------|---------------|--------|
| STRICT Boeuf | `strict-boeuf` | `_recettes/strict-boeuf.md` | OK — fiche existante et complete (BLACK BUN) |

Ingredients detailles (ordre empilement bas -> haut) :
1. Pain noir au sésame (base) — bun rond noir, surface texturée avec graines de sésame dorées (Pains du Soleil)
2. Steak hache de boeuf — steak epais, croute Maillard uniforme, chaleur pulsee zero huile (Boucherie Labourde)
3. Parmesan — en miettes, fragments irreguliers poudreux (Myfitcheese)
4. Oignons rouges — tranches fines, rondelles anneaux concentriques
5. Mache — feuilles entieres, petites rondes vertes en bouquet
6. Sauce poivron — filet jaune-orange subtil, lisse, pas epaisse
7. Pain noir au sésame (chapeau) — identique a la base

---

## Mapping par slide

### Slide 1 / 5 — Cover typographique

- **Type** : PHOTO RÉELLE (fournie par l'opérateur)
- **Photo utilisée** : `public/contenu-instagram/labourde/texte-labourde.png`
- **Description** : Cover graphique texte "De la Boucherie Labourde à ton assiette." — photo réelle sublimée, fond Charbon, texte Crème + Cuivre Braisé
- **Statut** : Photo existante, ne pas générer
- **Recette** : N/A

### Slide 2 / 5 — Viande brute, decoupe artisanale

- **Type** : PHOTO RÉELLE (fournie par l'opérateur)
- **Photo utilisée** : `public/contenu-instagram/labourde/2026-03-11-17-45-00-labourde-boucher-enhanced.png`
- **Description** : Boucher Labourde ficelant la viande crue, mains gantées noires, planche bois, plan 3/4 plongée, eclairage chaud artisanal. Photo réelle sublime (NOT AI-generated)
- **Statut** : Photo existante, ne pas générer
- **Recette** : `_recettes/strict-boeuf.md` (steak hache boeuf cru, Boucherie Labourde, context viande source)

### Slide 3 / 5 — Assemblage burger, geste de precision

- **Type** : Photo a generer
- **Angle demande par la DA** : Hauteur d'yeux legerement surelevee (20-30 deg), plan serre a moyen, mains gantees noires assemblant le burger
- **Photo reference selectionnee (PRIMARY — BURGERS BLACK BUN)** : `public/images/photos-references/produits-source/burgers-black/strict-poulet-black-1.png`
- **Justification** : Rotation : les photos bœuf black bun déjà trop utilisées. Le STRICT Poulet black bun offre une référence visuelle fraîche (composition, éclairage, black bun sésame, fond noir) que le modèle adaptera au STRICT Bœuf (steak haché au lieu de lamelles poulet). Le modele devra retirer le bun du dessus (burger ouvert, en construction) et ajouter les mains gantees noires en action d'assemblage.
- **Photo reference complementaire** : `public/images/photos-references/produits-source/burgers-black/strict-poulet-black-2.png`
- **Justification complementaire** : Variante 2 du poulet black bun — angle légèrement différent, enrichit la référence visuelle.
- **Recette** : `_recettes/strict-boeuf.md` (ingredients visibles : bun base black + steak cuit + parmesan miettes + oignons rouges tranches)

### Slide 4 / 5 — Finitions, verdure et sauce

- **Type** : Photo a generer
- **Angle demande par la DA** : 3/4 legerement plongeant (30-40 deg), plan serre, focus sur la mache et le filet de sauce
- **Photo reference selectionnee (PRIMARY — BURGERS BLACK BUN)** : `public/images/photos-references/produits-source/burgers-black/strict-poulet-black-2.png`
- **Justification** : Rotation : variante 2 poulet black bun pour varier l'angle par rapport au slide 3. La direction demande un angle 3/4 plongeant sur le burger ouvert — le modele adaptera au STRICT Bœuf (steak haché) et montrera les finitions (mache, sauce).
- **Photo reference complementaire** : `public/images/photos-references/produits-source/burgers-black/strict-poulet-black-1.png`
- **Justification complementaire** : Variante 1 poulet black bun en complément.
- **Recette** : `_recettes/strict-boeuf.md` (ingredients visibles : tous sauf bun chapeau — focus mache + sauce poivron)

### Slide 5 / 5 — Hero shot, burger termine

- **Type** : Photo a generer
- **Angle demande par la DA** : Hauteur d'yeux (0-10 deg), plan moyen-serre, hero shot monumental
- **Photo reference selectionnee (PRIMARY — BURGERS BLACK BUN)** : `public/images/photos-references/produits-source/burgers-black/strict-poulet-black-1.png`
- **Justification** : Rotation : poulet black bun comme base visuelle (composition, éclairage, fond noir, black bun sésame). Le hero shot — le modèle adaptera au STRICT Bœuf (steak haché épais, croûte Maillard). La direction demande une vue à hauteur d'yeux (0-10 deg), fond sombre, eclairage studio dramatique.
- **Photo reference complementaire** : `public/images/photos-references/produits-source/burgers-black/strict-poulet-black-2.png`
- **Justification complementaire** : Variante 2 poulet black bun pour enrichir la compréhension visuelle du burger complet.
- **Recette** : `_recettes/strict-boeuf.md` (tous les 7 ingredients, ordre complet bas -> haut, avec black bun sésame)

---

## Resume des photos references utilisees

| Photo | Slides | Categorie | Priorite |
|-------|--------|-----------|----------|
| `contenu-instagram/labourde/texte-labourde.png` | 1 | PHOTO RÉELLE texte cover | Utilisée directement |
| `contenu-instagram/labourde/2026-03-11-17-45-00-labourde-boucher-enhanced.png` | 2 | PHOTO RÉELLE boucher viande | Utilisée directement |
| `produits-source/burgers-black/strict-poulet-black-1.png` | 3 (principale), 5 (principale) | BLACK BUN poulet — variante 1, fond noir | PRIMARY (rotation) |
| `produits-source/burgers-black/strict-poulet-black-2.png` | 4 (principale), 3 (compl.), 5 (compl.) | BLACK BUN poulet — variante 2, fond noir | PRIMARY / COMPL. |

## Alertes & Conformite

- **RÈGLE NOIRE APPLIQUÉE** : Les photos BLACK BUN (section "BURGERS BLACK BUN" de photo-references.md) sont utilisées EN PRIORITÉ pour les slides 3-5. Le STRICT Boeuf new black bun est le produit vedette.
- **PHOTOS RÉELLES SLIDES 1-2** : Pas de génération AI — les photos Labourde réelles fournies par l'opérateur sont utilisées directement.
- **Aucun PLACEHOLDER** : Toutes les photos existent dans le catalogue.
- **Fiche recette OK** : `_recettes/strict-boeuf.md` est à jour avec BLACK BUN (pain noir sésame base & chapeau).
- **Rotation produits** : STRICT Boeuf black bun variant 1 utilisée (stricte-boeuf.png) — prochains posts burgers utiliseront les autres variantes ou autre produit pour rotation.
