# Direction Creative — Post S2-08 (23-03-2026)

> Mode : `compositing-ia` — la direction porte sur la SCENE. Le produit (wrap) est la photo reelle.

## Visuel 1 / 1 — Hero wrap service du soir

**Type** : Photo (compositing-ia — photo produit reelle + scene IA)
**Dimensions** : 4:5

### Recette / Produit (transmis au prompt engineer)

STRICT Wrap Poulet — coupe en diagonale, interieur visible :
- Tortilla de ble souple, enroulee serree, surface legerement toastee (chaleur pulsee)
- Poulet roti en lamelles — tranches fines irregulieres, croute Maillard uniforme (oven-seared, zero huile). PAS en cubes, PAS en des.
- Parmesan en miettes — petits fragments irreguliers, poudreux. PAS en copeaux, PAS en lamelles.
- Oignons rouges en tranches fines — rondelles avec anneaux concentriques visibles.
- Mache — petites feuilles rondes vertes entieres. PAS de roquette, PAS de laitue.
- Sauce poivron jaune-orange subtil — sauce lisse, pas epaisse. PAS rouge, PAS blanche.

> Note : le wrap est coupe en diagonale — les deux moities sont visibles avec l'interieur expose. C'est le differentiel visuel vs les burgers.

### Composition

- **Cadrage** : plan moyen serre — le wrap occupe ~55% du cadre, les deux moities visibles
- **Angle de prise de vue** : 3/4 legerement surplombant (~35°) — permet de voir l'interieur expose du wrap coupe en diagonale ET la surface du comptoir
- **Point de vue** : celui du cuisinier qui vient de poser le wrap sur le comptoir apres la decoupe
- **Sujet principal** : les deux moities du wrap coupees en diagonale, empilees/decalees, interieur expose vers le haut-droit
- **Elements secondaires** : comptoir cuisine en inox brosse sombre, papier kraft noir sous le wrap (paper-liner), legere vapeur en arriere-plan, reflets cuivres sur l'inox
- **Brand props** : `paper-liner` — pose sous le wrap, bords visibles et legerement froisse, logo STRICT FOOD'S discret en coin
- **Elements absents** : pas de main, pas de couverts, pas d'assiette, pas de salle de restaurant visible, pas d'elements de decoration. La scene est un plan de travail cuisine brut.
- **Zone de respiration** : tiers superieur degage (vapeur et bokeh sombre), le wrap est place dans le tiers central-bas

### Eclairage

- **Type** : studio lateral chaud — simule l'eclairage de cuisine pro en service du soir
- **Direction** : laterale gauche (~45° avant-gauche), source unique dominante
- **Qualite** : dur et contraste avec fill doux a droite — sculpt dramatique des ingredients exposes dans la coupe du wrap
- **Ombres** : marquees a droite du wrap, ombre de contact douce directement sous le wrap sur le paper-liner, ombre portee sur l'inox
- **Temperature** : chaud dore-cuivre — ambiance service du soir, pas de lumiere froide

### Couleurs & Mood

- **Palette dominante** : Charbon profond (fond/comptoir), Cuivre Braise (reflets lumiere, highlights sur l'inox), tortilla doree
- **Accent** : le vert vif de la mache et le jaune-orange de la sauce poivron qui eclatent a la coupe — contraste maximal sur le fond sombre
- **Ambiance** : culinaire et brut — le wrap vient d'etre coupe, l'interieur fume encore
- **Reference DA** : fond Charbon, touches Cuivre Braise dans l'eclairage et les reflets inox, couleurs ingredients riches et saturees

### Texte on-image

- **Presence** : Non

### Texture & Details sensoriels

- **Textures a mettre en valeur** :
  - Surface legerement toastee de la tortilla (texture doree croustillante)
  - Miettes de parmesan poudreuses brillant sous l'eclairage lateral
  - Lamelles de poulet avec croute Maillard visible, fibres de chair
  - Inox brosse du comptoir avec reflets directionnels de la key light
  - Kraft noir mat du paper-liner, texture grainee naturelle
- **Indices de temperature** : legere vapeur s'elevant de la coupe fraiche du wrap — le poulet est encore chaud. Vapeur visible mais subtile, pas de nuage.
- **Mouvement** : statique mais vivant — un filet de sauce poivron qui a coule legerement sur le papier au moment de la coupe. 1-2 miettes de parmesan tombees sur le paper-liner pres de la coupe.

### Imperfections naturelles (obligatoires)

1. Un filet de sauce poivron echappee sur le paper-liner au moment de la coupe
2. 2-3 miettes de parmesan tombees a cote du wrap sur le papier
3. Un bord de tortilla legerement souleve/ondule, pas parfaitement roule
4. Le paper-liner froisse naturellement, pas pose a plat comme en catalogue

### Intention & Fonction dans le post

- **Ce que le viewer doit ressentir** : "Il n'y a pas que des burgers — ce wrap a l'air incroyable et il est a 8,99EUR". Envie immediate + decouverte d'un format different.
- **Role** : post unique hero — doit fonctionner seul dans le feed et dans la grille
- **Action souhaitee** : s'arreter de scroller, remarquer que c'est un wrap (pas un burger), lire la caption pour decouvrir le produit

---

## Notes pour le prompt engineer (mode compositing-ia)

**La scene est generee par l'IA, le produit est la photo reelle.**

Le prompt doit :
1. Decrire la scene (comptoir inox brosse sombre, eclairage lateral chaud, vapeur, paper-liner) avec precision
2. Instruire Gemini d'integrer le wrap reel dans cette scene
3. Matcher l'eclairage de la scene avec celui de la photo produit (laterale gauche)
4. Creer des ombres et reflets coherents sur l'inox
5. Respecter le style v2 : realisme documentaire, imperfections, Dark Premium avec produit lumineux

**Ce qui ne doit PAS etre genere par l'IA** : le wrap lui-meme (c'est la photo reelle en input).
**Ce qui DOIT etre genere par l'IA** : le comptoir, le paper-liner, les reflets, la vapeur, l'ambiance lumineuse, les miettes tombees.
