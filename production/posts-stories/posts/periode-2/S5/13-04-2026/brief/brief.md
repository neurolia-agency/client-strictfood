# Brief Carrousel Texte — Menu Objectif (13-04-2026)

> Famille A — Slides texte rendues par Puppeteer (1080x1350)

## Strategie

| Champ | Valeur |
|-------|--------|
| Pilier | Les Benefices |
| Format | Carrousel texte 6 slides (1080x1350, 4:5) |
| Famille | A — Texte |
| Type | Menu Objectif |
| Thematique | `menu-objectif-fitness` |
| Periode | S5 — Consolider l'identite |

## Objectif

Premier carrousel Menu Objectif du feed. Chaque viewer fitness a un objectif different — ce carrousel montre que StrictFood a un menu adapte a chacun. Pas de jugement, pas de regime : "Tu veux prendre du muscle ? Voila. Tu veux secher ? Voila aussi." Le viewer se reconnait dans un profil et decouvre SON menu ideal.

## Produit de raccord

Tous les produits de la gamme — chaque slide met en avant un produit different
Slug recettes : `strict-max-boeuf`, `strict-poulet`, `strict-vege-falafel`, `strict-boeuf`

---

## Contenu

### Nombre de slides

6 (cover + 4 profils + CTA/sources)

### Angle editorial

"Ton objectif = Ton STRICT" — 4 profils fitness, chacun avec son menu StrictFood ideal. Ton direct et bienveillant, pas moralisateur. Chaque profil a un emoji/icone, un nom d'objectif, le menu recommande, les macros totales.

### Stats/chiffres attendus

- Prise de masse : STRICT MAX Boeuf + Frites classiques + Boisson Zero → ~1 487 kcal, ~78g proteines
- Seche : STRICT Poulet (sans frites) + Eau → ~652 kcal, ~53g proteines
- Equilibrage : STRICT Vege Falafel + Frites patate douce → ~1 050 kcal, ~38g proteines
- Plaisir sans culpa : STRICT Boeuf + Cookie proteine + Boisson → ~1 198 kcal, ~51g proteines ("946 kcal le burger seul")

> Les macros doivent etre verifiees via les fiches recettes (`_recettes/*.md`). Ajuster si necessaire.

### Structure detaillee

**Slide 1 — Cover**
- Texte : "TON OBJECTIF = TON STRICT"
- Sous-titre : "4 menus selon ton goal"
- Style : texture-fill sesame SVG (couverture standard carrousel)

**Slide 2 — Prise de masse**
- Icone/emoji : haltere
- Objectif : "PRISE DE MASSE"
- Menu : STRICT MAX Boeuf + Frites classiques + Boisson Zero
- Macros : ~1 487 kcal · ~78g prot · ~62g lip · ~158g glu
- Note visuelle : le MAX en hero, le mot "MAX" en accent ambre

**Slide 3 — Seche**
- Icone/emoji : ciseaux / flamme
- Objectif : "SECHE"
- Menu : STRICT Poulet (sans frites) + Eau
- Macros : ~652 kcal · ~53g prot · ~24g lip · ~58g glu
- Note visuelle : minimaliste, fond charbon dominant, chiffres epures

**Slide 4 — Equilibrage**
- Icone/emoji : balance
- Objectif : "EQUILIBRAGE"
- Menu : STRICT Vege Falafel + Frites patate douce
- Macros : ~1 050 kcal · ~38g prot · ~42g lip · ~125g glu
- Note visuelle : vert feuille en accent (falafel = vert), diversite ingredients

**Slide 5 — Plaisir sans culpa**
- Icone/emoji : coeur / etoile
- Objectif : "PLAISIR SANS CULPA"
- Menu : STRICT Boeuf + Cookie proteine + Boisson
- Macros : ~1 198 kcal · ~51g prot · ~48g lip · ~130g glu
- Note visuelle : accent chaleureux, "Le cheat meal qui n'en est pas un" en tagline

**Slide 6 — CTA + Sources**
- CTA : "Commande ton menu" + lien bio
- Sources : fiches nutritionnelles StrictFood
- Note : slide sources integree (pas de slide separee)

### Notes specifiques

- Les macros sont APPROXIMATIVES — le skill `nutrition-researcher` verifiera via les fiches recettes
- Ne PAS mentionner la sauce comme artisanale (la sauce poivron est achetee)
- Varier les couleurs de fond entre les slides (alterner charbon dominant et ambre accent)
- Chaque slide doit fonctionner seule (comprehensible sans les autres)
- Les produits sont NOMMES (pas de generiques "un burger")
- Cuisson : "chaleur pulsee" ou "air fryer" si mentionne, JAMAIS "grille"

---

## Direction Caption

| Champ | Valeur |
|-------|--------|
| Angle | Complementaire — approfondir un profil (le plus surprenant = "plaisir sans culpa" a 1 198 kcal avec un dessert). Deconstruire l'idee que fast-food = ecart de regime. |
| Ton | Direct / Educatif |
| CTA | Enregistre ce post / "Dis-nous ton objectif en commentaire" |
| Mention prix | Oui (menu seche le moins cher, menu masse le plus genereux) |
| Mention macros | Oui (repeter les chiffres cles du profil le plus pertinent) |
| Mention fournisseurs | Oui (Myfitcheese, Boucherie Labourde — qualite des ingredients) |
| Mots/phrases a inclure | "objectif", "menu", "proteines", "chaleur pulsee", "cheat meal qui n'en est pas un" |
| Mots/phrases a eviter | "healthy", "regime", "diet", "sauce maison", "grille" |

---

## Contraintes

- Les macros DOIVENT etre coherentes avec les fiches recettes
- Chaque menu est un VRAI menu commandable (pas une combinaison fictive)
- Pain noir obligatoire sur les visuels burger
- Fond charbon (template DA standard carousel)
- Food Porn Dial : 4/10 (c'est un carrousel data/educatif, pas food porn)
- Brand props : non

---

## Etape suivante

> Executer `/carousel-producer 13-04-2026` pour produire ce carrousel.
