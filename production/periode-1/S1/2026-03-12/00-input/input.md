# Input Mapping — S1-02 Carrousel "Du Boucher a l'Assiette"

> Post : 2026-03-12 | Produit principal : STRICT Boeuf (slug: strict-boeuf)

---

## Produits identifies dans la direction creative

| Produit | Slug | Fiche recette | Statut |
|---------|------|---------------|--------|
| STRICT Boeuf | `strict-boeuf` | `_recettes/strict-boeuf.md` | OK — fiche existante et complete |

Ingredients detailles (ordre empilement bas -> haut) :
1. Pain brioche (base) — bun rond, surface lisse doree, legerement brillante (Pains du Soleil)
2. Steak hache de boeuf — steak epais, croute Maillard uniforme, chaleur pulsee zero huile (Boucherie Labourde)
3. Parmesan — en miettes, fragments irreguliers poudreux (Myfitcheese)
4. Oignons rouges — tranches fines, rondelles anneaux concentriques
5. Mache — feuilles entieres, petites rondes vertes en bouquet
6. Sauce poivron — filet jaune-orange subtil, lisse, pas epaisse
7. Pain brioche (chapeau) — identique a la base

---

## Mapping par slide

### Slide 1 / 5 — Cover typographique

- **Type** : Template pur (texte sur fond)
- **Photo reference** : Aucune (pas de photo sur ce slide)
- **Recette** : N/A

### Slide 2 / 5 — Viande brute, decoupe artisanale

- **Type** : Photo a generer
- **Angle demande par la DA** : 3/4 plongee (45 deg), plan serre, viande crue sur planche a decouper bois
- **Photo reference selectionnee** : `public/images/photos-references/produits-source/strict-boeuf-plongee.png`
- **Justification** : La direction demande un angle 3/4 plongee (45 deg) sur la viande. Cette photo est la seule vue plongee (dessus 3/4) du STRICT Boeuf disponible. Meme si la photo montre le burger fini et non la viande crue, elle fournit au modele de generation la reference essentielle : a quoi ressemble le steak STRICT Boeuf vu d'en haut, son epaisseur et sa texture Maillard. Le modele devra transposer en viande crue (rouge sombre, fibreuse) sur planche bois avec couteau.
- **Photo reference complementaire** : `public/images/photos-references/produits-source/strict-boeuf.png`
- **Justification complementaire** : Vue de face du STRICT Boeuf complet — permet au modele de comprendre les proportions generales du steak et sa couleur/texture pour mieux generer la version crue.
- **Recette** : `_recettes/strict-boeuf.md` (steak hache boeuf, Boucherie Labourde)

### Slide 3 / 5 — Assemblage burger, geste de precision

- **Type** : Photo a generer
- **Angle demande par la DA** : Hauteur d'yeux legerement surelevee (20-30 deg), plan serre a moyen, mains gantees noires assemblant le burger
- **Photo reference selectionnee** : `public/images/photos-references/dark-bg/burger-simple-boeuf-dark-bg.png`
- **Justification** : La direction demande une vue de face legerement surelevee du burger en construction. Cette photo (vue de face, fond sombre DA, eclairage studio dramatique) est le meilleur match : elle donne au modele la reference du STRICT Boeuf vu de face dans un eclairage studio sombre coherent avec l'ambiance demandee. Le modele devra retirer le bun du dessus (burger ouvert, en construction) et ajouter les mains gantees noires en action.
- **Photo reference complementaire** : `public/images/photos-references/dark-bg/burger-simple-boeuf-dark-bg-2.png`
- **Justification complementaire** : Variante 2 de la vue de face — permet une deuxieme reference d'angle et de cadrage pour la generation, toujours en dark-bg.
- **Recette** : `_recettes/strict-boeuf.md` (ingredients visibles : bun base + steak cuit + parmesan miettes + oignons rouges tranches)

### Slide 4 / 5 — Finitions, verdure et sauce

- **Type** : Photo a generer
- **Angle demande par la DA** : 3/4 legerement plongeant (30-40 deg), plan serre, focus sur la mache et le filet de sauce
- **Photo reference selectionnee** : `public/images/photos-references/produits-source/strict-boeuf-plongee.png`
- **Justification** : La direction demande un angle 3/4 plongeant (30-40 deg) sur le burger ouvert montrant les finitions. Cette vue plongee (dessus 3/4, fond neutre) correspond a l'angle requis. Elle permet au modele de voir les couches du STRICT Boeuf vues d'en haut — essentiel pour generer les toppings verdure/sauce visibles depuis cet angle. Le modele devra montrer le burger sans bun du dessus, avec mache et filet de sauce en vedette.
- **Photo reference complementaire** : `public/images/photos-references/produits-source/strict-boeuf-vue-dessus.png`
- **Justification complementaire** : Vue strictement du dessus (top-down) — donne une reference extreme de la vue plongeante pour aider le modele a comprendre la disposition des ingredients vus de haut, meme si l'angle final est moins prononce (30-40 deg vs 90 deg).
- **Recette** : `_recettes/strict-boeuf.md` (ingredients visibles : tous sauf bun chapeau — focus mache + sauce poivron)

### Slide 5 / 5 — Hero shot, burger termine

- **Type** : Photo a generer
- **Angle demande par la DA** : Hauteur d'yeux (0-10 deg), plan moyen-serre, hero shot monumental
- **Photo reference selectionnee** : `public/images/photos-references/dark-bg/burger-simple-boeuf-dark-bg-2.png`
- **Justification** : C'est LE hero shot — la direction demande une vue a hauteur d'yeux (0-10 deg) du burger complet, fond sombre, eclairage studio dramatique. Cette photo est exactement ca : vue de face, fond sombre DA, eclairage studio. C'est aussi la photo reference de la fiche recette elle-meme. Elle donne au modele la reference la plus fidele possible du STRICT Boeuf dans son rendu final premium.
- **Photo reference complementaire** : `public/images/photos-references/dark-bg/strict-boeuf-contre-plongee.png`
- **Justification complementaire** : Contre-plongee (angle bas) — fournit une reference de la "monumentalite" du burger vue d'en bas. Meme si le hero shot est a hauteur d'yeux (pas contre-plongee), cette reference aide le modele a saisir l'impression de hauteur et de volume imposant demandee par la direction.
- **Recette** : `_recettes/strict-boeuf.md` (tous les 7 ingredients, ordre complet bas -> haut)

---

## Resume des photos references utilisees

| Photo | Slides | Categorie |
|-------|--------|-----------|
| `produits-source/strict-boeuf-plongee.png` | 2 (principale), 4 (principale) | Plongee 3/4, fond neutre |
| `produits-source/strict-boeuf.png` | 2 (complementaire) | Face, fond neutre |
| `dark-bg/burger-simple-boeuf-dark-bg.png` | 3 (principale) | Face, fond sombre DA |
| `dark-bg/burger-simple-boeuf-dark-bg-2.png` | 3 (complementaire), 5 (principale) | Face, fond sombre DA, variante 2 |
| `produits-source/strict-boeuf-vue-dessus.png` | 4 (complementaire) | Top-down, fond neutre |
| `dark-bg/strict-boeuf-contre-plongee.png` | 5 (complementaire) | Contre-plongee, fond sombre DA |

## Alertes

- **Aucun PLACEHOLDER** : Toutes les photos de reference existent dans le catalogue.
- **Fiche recette OK** : `_recettes/strict-boeuf.md` presente et complete.
- **Photos contexte cuisine** : Les slides 2-4 montrent un contexte "arriere-cuisine" (planche, mains gantees, plan de travail) qui n'est pas present dans les photos de reference. Les photos de contexte cuisine disponibles (`contexte/cuisine/`) montrent l'equipement general, pas des plans serres de preparation. Le modele de generation devra creer ce contexte artisanal a partir des descriptions de la direction creative.
