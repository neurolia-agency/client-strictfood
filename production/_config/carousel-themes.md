# Taxonomie Carrousels Instagram — StrictFood

> 9 types de carrousels, 3 familles de production, 2 carrousels/semaine.
> Ce fichier est la **source de verite** pour les types de carrousels et leurs themes.

---

## Vue d'ensemble

### 3 familles de production

| Famille | Pipeline | Slides produites par |
|---------|----------|---------------------|
| **A — Texte** | Recherche → Copywriting → Template HTML → Puppeteer | Templates carousel (1080x1350) |
| **B — Photo** | Art Direction → Prompt par slide → Gemini 2K × N | Generation IA independante par slide |
| **C — Panoramique** | Prompt scene large → Gemini 2K (16:9) → Decoupe N slides | 1 image large decoupee en slides |

### 9 types de carrousels

| # | Type | Famille | Slides | Freq/mois | Pilier |
|---|------|---------|--------|-----------|--------|
| 1 | **Panoramique** | C | 3-4 | 2-3 | Le Produit |
| 2 | **Zoom Progressif** | B | 3-4 | 1-2 | Le Produit |
| 3 | **Texture/ASMR** | B | 3-5 | 1 | Le Produit |
| 4 | **Educatif** | A | 5-10 | 1 | Les Benefices |
| 5 | **Construction** | B | 4-5 | 0.5 | Le Produit |
| 6 | **Ingredient Spotlight** | A | 4-5 | 0.5 | Les Benefices |
| 7 | **Defile Gamme** | B | 4-5 | 0.5 | Le Produit |
| 8 | **Process Cuisine** | B | 4-6 | 0.5 | La Marque |
| 9 | **Menu Objectif** | A | 4-5 | 0.5 | Les Benefices |

**Total : ~8/mois = 2/semaine**

### Repartition par famille

| Famille | Types | Freq/mois | % |
|---------|-------|-----------|---|
| **B — Photo** | Zoom, Texture, Construction, Defile, Process | ~4 | ~50% |
| **C — Panoramique** | Panoramique | ~2.5 | ~30% |
| **A — Texte** | Educatif, Ingredient, Menu | ~2 | ~20% |

---

## Famille C — Panoramique

### Principe

**1 image large, decoupee en 3-4 slides.** L'utilisateur swipe et "decouvre" la scene progressivement. Effet immersif garanti.

### Pipeline

```
Brief (scene decrite en detail) → Prompt scene large → Gemini 2K (16:9 ou 1:1 large)
    ↓
Script render-panoramic.js → Decoupe en N tranches de 1080x1350
    ↓
N slides raccordees → brouillons/ → validation → caption
```

### Dimensions

| Slides | Image source | Ratio |
|--------|-------------|-------|
| 3 slides | 3240 x 1350 | 2.4:1 |
| 4 slides | 4320 x 1350 | 3.2:1 |

> Gemini genere en 16:9 (3840x2160) → crop en hauteur. Ou en 1:1 large (4096x4096) → crop bande horizontale.

### Contrainte cle : composition etalee

Le prompt DOIT decrire une scene **horizontalement etalee** avec des elements distribues de gauche a droite. Le burger/produit principal est au centre, les elements secondaires s'etendent sur les cotes.

### Scenes panoramiques — Bibliotheque

#### Scenes Table / Surface

| Slug | Gauche (slide 1) | Centre-gauche (2) | Centre-droit (3) | Droite (4) |
|------|---|---|---|---|
| `pano-table-complete` | Frites patate douce + sauce poivron | Burger hero (profil dramatique) | Boisson + serviette kraft | Main qui attrape une frite |
| `pano-table-kraft` | Papier kraft froisse + miettes | Burger vu 3/4 | Frites en eventail | Sachet kraft StrictFood |
| `pano-repas-duo` | Premier burger (profil) | Frites partagees au centre | Second burger (profil oppose) | Boissons + sauces |
| `pano-ligne-horizont` | Surface ardoise + miettes sesame | Burger profil dramatique | Frites en cascade | Sauce qui deborde du bord |

#### Scenes Flat Lay (vue du dessus)

| Slug | Zone 1 | Zone 2 | Zone 3 | Zone 4 |
|------|--------|--------|--------|--------|
| `pano-flatlay-menu` | Packaging + sticker | Burger vu du dessus | Sides (frites, tenders) | Boisson + sauce |
| `pano-flatlay-gamme` | Wrap ouvert | Burger classique vu dessus | Burger MAX vu dessus | Falafel coupe |
| `pano-flatlay-ingredients` | Ingredients bruts (mache, oignons) | Pain noir + sesame | Steak croute Maillard | Parmesan miettes + sauce |

#### Scenes Comptoir / Service

| Slug | Zone 1 | Zone 2 | Zone 3 | Zone 4 |
|------|--------|--------|--------|--------|
| `pano-comptoir-service` | Planche bois + ingredients | Burger en cours d'assemblage | Burger fini emballe | Main qui le tend |
| `pano-comptoir-lineup` | Tenders sur papier kraft | Burger profil | Wrap coupe en deux | Frites dans cornet |

#### Scenes Ambiance

| Slug | Zone 1 | Zone 2 | Zone 3 | Zone 4 |
|------|--------|--------|--------|--------|
| `pano-neon-night` | Neon flou "STRICT" hors champ | Burger eclaire par lumiere chaude | Vapeur/fumes | Comptoir sombre + bokeh |
| `pano-window-light` | Lumiere naturelle fenetre | Burger en contre-jour doux | Accessoires (serviette, boisson) | Ombre portee dramatique |

### Regles panoramique

1. **Fond uniforme** : la surface/arriere-plan doit etre continue sur toute la largeur (ardoise, bois, kraft, comptoir inox)
2. **Eclairage coherent** : meme source de lumiere d'un bout a l'autre
3. **Element principal au centre** : le burger/produit hero dans les slides 2-3
4. **Elements secondaires aux extremites** : frites, sauces, mains, packaging
5. **Pas de texte dans l'image** : le panoramique est 100% visuel
6. **Pain noir** : obligatoire sur tous les burgers visibles
7. **Pas de grill marks** : croute Maillard uniforme

---

## Famille B — Photo

### Principe

**Chaque slide = 1 image generee par Gemini (1080x1350, 4:5).** Coherence inter-slides assuree par un bloc descriptif commun dans chaque prompt (fond, eclairage, style).

### Pipeline

```
Brief → Art Direction (coherence inter-slides) → Bloc commun (fond + eclairage + style)
    ↓
Pour chaque slide :
    Prompt = bloc commun + description specifique slide → Gemini 2K (4:5)
    ↓
N slides → brouillons/ → validation → caption
```

### Contrainte coherence

Un **bloc commun** est defini pour tout le carrousel et insere dans chaque prompt :

```
[BLOC COMMUN — identique dans tous les prompts du carrousel]
Documentary food photography. [Surface description]. [Lighting description].
[Color temperature]. [Depth of field]. Shot on [camera]. No text, no logos.
[FINS DU BLOC COMMUN]

[SPECIFIQUE SLIDE N]
...
```

### Type 1 — Zoom Progressif

**3-4 slides : plan d'ambiance → plan serre → macro ingredient → ultra-macro texture**

Chaque slide est un cadrage different, le fond et l'eclairage sont identiques. Le "sujet" change progressivement — l'effet est un zoom cinematique.

| Slide | Cadrage | Exemple (Strict Boeuf) |
|-------|---------|----------------------|
| 1 | Plan large / ambiance | Burger complet sur surface ardoise, frites a cote, ambiance sombre |
| 2 | Plan serre / produit | Burger seul, cadre serre, details du bun noir sesame visibles |
| 3 | Macro ingredient | Gros plan sur la zone sauce + parmesan entre bun et steak |
| 4 | Ultra-macro texture | Extreme macro : grains de sesame dores sur bun noir, profondeur de champ <1cm |

**Regles Zoom Progressif :**
- Meme fond dans chaque slide (seul le cadrage change)
- Meme temperature de couleur et direction de lumiere
- Le produit ne doit PAS etre identique pixel-perfect (c'est OK, le cerveau lit "on s'approche")
- La slide 1 montre le contexte, la slide finale est pure texture

#### Sequences zoom par produit

| Produit | Slide 1 (large) | Slide 2 (serre) | Slide 3 (macro) | Slide 4 (ultra-macro) |
|---------|-----------------|------------------|-----------------|----------------------|
| Strict Boeuf | Burger + frites + sauce | Burger profil serre | Croute Maillard boeuf + parmesan | Sesame dore sur bun noir |
| Strict MAX Boeuf | Burger double steak + sides | Coupe transversale double steak | Zone entre les 2 steaks (sauce + parmesan) | Texture croute boeuf bark-like |
| Strict Poulet | Burger + cornet frites | Burger 3/4, poulet visible | Poulet dechire + mache | Croute doree poulet air-fried |
| Strict Wrap Boeuf | Wrap coupe + sauce | Wrap ouvert, ingredients visibles | Viande de grison + oignons rouges | Galette ble tendre texture |
| Strict Vege Falafel | Falafel burger + sides | Falafel coupe revele interieur vert | Croute falafel craquelante | Interieur vert herbes + pois chiches |
| Tenders | Plateau tenders + frites | Tender coupe en deux | Croute croustillante gros plan | Fibre poulet visible a la cassure |
| Frites Patate Douce | Cornet frites + sauce | Frites en gros plan | Surface caramelisee frite | Texture interieur orange |

### Type 2 — Texture/ASMR

**3-5 slides : ultra-macro pur, zero texte, food porn sensoriel**

Chaque slide est un extreme gros plan sur une zone differente du produit ou de ses ingredients. L'effet est "ASMR visuel" — satisfying, arret du scroll.

| Slide | Zone | Exemple |
|-------|------|---------|
| 1 | Surface bun | Sesame dore sur noir charbon, micro-fissures de la croute |
| 2 | Croute viande | Maillard bark-like, cratered, deep mahogany |
| 3 | Sauce | Filet de sauce poivron jaune-orange en mouvement |
| 4 | Fromage | Miettes de parmesan poudreux, certaines dorees au contact chaud |
| 5 | Coupe transversale | Section du burger : layers visibles, couleurs vives |

**Regles Texture/ASMR :**
- Profondeur de champ EXTREME (<1cm net)
- Fond = la surface du produit lui-meme (pas de fond externe)
- Pas de texte, pas de logo, pas d'overlay
- Chaque slide a un sujet de texture DIFFERENT
- L'eclairage est rasant/lateral pour maximiser les reliefs

#### Banque de zones macro

| Zone | Description prompt |
|------|-------------------|
| `macro-sesame` | Golden sesame seeds on ink-dark bun surface, some partially embedded, irregular distribution |
| `macro-maillard-boeuf` | Deep mahogany Maillard crust, bark-like cratered surface, rough texture, edge blackening |
| `macro-maillard-poulet` | Golden-brown air-fried crust, caramelized surface, crispy edges, shredded pale fibers at torn edges |
| `macro-sauce-drizzle` | Thin yellow-orange pepper sauce thread in mid-air, viscosity visible, droplets |
| `macro-parmesan` | Powdery parmesan granules scattered like sand, some slightly golden from heat contact |
| `macro-mache` | Small round spoon-shaped lamb's lettuce leaves, some curled, fresh green, water micro-droplets |
| `macro-oignon` | Thin-sliced red onion ring, concentric layers visible, translucent edges, purple tones |
| `macro-bun-crumb` | Dark charcoal bread crumb interior, irregular air pockets, dense spongy texture, matte black |
| `macro-frite` | Sweet potato fry cross-section, caramelized surface, orange interior, air-fried texture |
| `macro-falafel-crack` | Falafel crust shattering, green interior visible through crack, granular crispy shell |
| `macro-coupe` | Full burger cross-section showing all layers in vivid color contrast |

### Type 3 — Construction

**4-5 slides : assemblage progressif du burger, couche par couche**

Chaque slide ajoute un element. L'effet est satisfying (on attend le resultat final).

| Slide | Element ajoute | Exemple (Strict Boeuf) |
|-------|---------------|----------------------|
| 1 | Bun inferieur | Pain noir seul sur surface, sesame visible |
| 2 | + Viande | Steak pose sur le bun, croute Maillard visible |
| 3 | + Garniture | Mache, oignons rouges, parmesan, filet de sauce |
| 4 | + Bun superieur | Burger complet, ferme, food porn final |
| 5 (opt) | Hero shot | Burger en contexte avec sides |

**Regles Construction :**
- MEME fond, MEME eclairage, MEME angle dans chaque slide
- Le "bun" est noir avec sesame dans CHAQUE slide
- Chaque slide est une generation independante (le burger "monte")
- L'angle est legerement plongeant (3/4 haut) pour voir l'interieur
- La derniere slide est la plus dramatique (eclairage renforce)

#### Sequences construction par produit

| Produit | S1 | S2 | S3 | S4 | S5 (opt) |
|---------|----|----|----|----|----------|
| Strict Boeuf | Bun noir | + steak Maillard | + mache, oignons, parmesan, sauce | + bun top | Hero avec frites |
| Strict MAX Boeuf | Bun noir | + steak 1 + parmesan | + steak 2 + mache, oignons, sauce | + bun top | Hero shot double |
| Strict Poulet | Bun noir | + filet poulet air-fried | + mache, oignons, parmesan, sauce | + bun top | Hero avec frites |
| Strict Wrap | Galette ble | + viande grison | + mache, oignons, tomates, sauce | Wrap roule | Hero coupe |
| Strict Vege | Bun noir | + galette falafel | + mache, oignons, sauce | + bun top | Hero shot |

### Type 4 — Defile Gamme

**4-5 slides : 1 slide = 1 produit, meme traitement visuel**

Toute la gamme (ou une categorie) defilee en carrousel. Chaque slide montre UN produit different avec le meme fond, meme eclairage, meme angle. L'effet est "catalogue premium".

| Slide | Produit | Note |
|-------|---------|------|
| 1 | Strict Boeuf | Le classique |
| 2 | Strict Poulet | L'alternative |
| 3 | Strict MAX Boeuf | Le genereux |
| 4 | Strict Vege Falafel | Le veggie |
| 5 (opt) | CTA "Lequel tu choisis ?" | Engagement |

**Regles Defile Gamme :**
- MEME fond, MEME eclairage, MEME angle pour tous les produits
- MEME cadrage (centrage, distance au sujet)
- Chaque produit est genere independamment
- Le bloc commun prompt est IDENTIQUE pour chaque slide
- La derniere slide peut etre un CTA texte overlay (optionnel)
- Varier les groupements : burgers, wraps, sides, ou mix

#### Groupements possibles

| Slug | Produits | Angle |
|------|----------|-------|
| `gamme-burgers` | Boeuf, Poulet, MAX Boeuf, MAX Poulet, Vege | Les 5 burgers |
| `gamme-classiques` | Boeuf, Poulet, Vege | Les 3 formats simples |
| `gamme-max` | MAX Boeuf, MAX Poulet | Les doubles steaks |
| `gamme-wraps` | Wrap Boeuf, Wrap Poulet | Les wraps |
| `gamme-sides` | Frites patate douce, Tenders, Boissons | Les accompagnements |
| `gamme-complete` | Boeuf, Poulet, Wrap, Falafel, Tenders | Un peu de tout |

### Type 5 — Process Cuisine

**4-6 slides : de la matiere premiere au produit fini**

Le process de fabrication StrictFood en images. L'effet est transparence + confiance + differenciation (air fryer visible).

| Slide | Etape | Exemple |
|-------|-------|---------|
| 1 | Ingredients bruts | Plan de travail avec viande, pain noir, legumes, parmesan |
| 2 | Preparation | Mains (IA) assemblant le burger, ingredients disperses |
| 3 | Cuisson | Air fryer ouvert avec steak/tenders dedans, vapeur |
| 4 | Assemblage | Burger en construction, garniture en cours |
| 5 | Resultat | Burger fini hero shot |
| 6 (opt) | Service | Burger emballe, pret a etre servi |

**Regles Process Cuisine :**
- L'air fryer est OBLIGATOIREMENT visible en slide cuisson (JAMAIS de grill, de poele, de friteuse)
- Les ingredients doivent etre fideles aux recettes
- L'ambiance est cuisine professionnelle (inox, propre, eclairage neutre/froid)
- Le pain est NOIR dans toutes les slides ou il apparait
- Les mains (si presentes) doivent etre realistes (attention IA — gerer via le prompt)

---

## Famille A — Texte (Educatif, Ingredient, Menu)

### Principe

Slides = texte type sur fond charbon/beton, rendues par Puppeteer. Templates HTML existants (`_templates/carousel/`). Pipeline existant via `/carousel-producer`.

### Principes directeurs (tous les types famille A)

1. **Educatif d'abord, StrictFood en dernier.** Le viewer apprend quelque chose — StrictFood n'apparait qu'en slide finale.
2. **Contre-intuitif > evident.** Prioriser les faits qui contredisent les idees recues.
3. **Source = credible.** Chaque stat doit avoir une etude identifiable (PubMed, Harvard, NEJM, etc.).
4. **Clivant mais honnete.** Pas de clickbait mensonger, mais des angles qui provoquent le debat.
5. **1 thematique = 1 angle precis.** Pas de fourre-tout.

---

### Type 4 — Educatif (31 themes)

> Format classique : cover ambre + slides charbon + stats sourcees + CTA.
> Pipeline : `/carousel-producer DD-MM-YYYY`

#### Air Fryer / Cuisson (5 themes)

##### `cuisson-zero-huile`
| Champ | Valeur |
|-------|--------|
| Titre | Zero huile, zero compromis |
| Sous-titre | Ce que la chaleur pulsee change vraiment |
| Angle | Comparaison chiffree friture vs air fryer — calories, acrylamide, nutriments preserves |
| Slides suggerees | 5 (cover + stat friture + comparatif + benefices + CTA) |
| Produit raccord | STRICT Boeuf |
| Notes | Mentionner la reaction de Maillard uniforme (croute sans grill marks) |

##### `cuisson-maillard`
| Champ | Valeur |
|-------|--------|
| Titre | La reaction de Maillard |
| Sous-titre | La science derriere le gout |
| Angle | Pourquoi la chaleur pulsee cree une croute aussi savoureuse que le grill — chimie accessible |
| Slides suggerees | 5 (cover + qu'est-ce que Maillard + temperatures + resultat + CTA) |
| Produit raccord | STRICT Poulet |
| Notes | 140-165°C = zone Maillard optimale. L'air fryer y excelle. |

##### `cuisson-acrylamide`
| Champ | Valeur |
|-------|--------|
| Titre | Ce que la friture laisse dans ton assiette |
| Sous-titre | L'acrylamide, le poison invisible |
| Angle | Les composes toxiques generes par la friture a haute temperature vs la cuisson seche |
| Slides suggerees | 5 (cover + c'est quoi l'acrylamide + chiffres OMS + comparatif modes cuisson + CTA) |
| Produit raccord | Tenders |
| Notes | Source : OMS, EFSA. L'air fryer reduit l'acrylamide de 70-90% vs friture. |

##### `cuisson-nutriments`
| Champ | Valeur |
|-------|--------|
| Titre | Ton mode de cuisson detruit tes nutriments |
| Sous-titre | Et tu ne le sais meme pas |
| Angle | Retention des vitamines et mineraux selon le mode de cuisson — air fryer preserve mieux |
| Slides suggerees | 5 (cover + perte par mode + tableau comparatif + ce qui est preserve + CTA) |
| Produit raccord | STRICT Vege Falafel |
| Notes | Vitamine C et B detruites par l'eau bouillante, preservees par chaleur seche. |

##### `cuisson-temps`
| Champ | Valeur |
|-------|--------|
| Titre | 12 minutes |
| Sous-titre | C'est tout ce qu'il faut |
| Angle | Rapidite de la cuisson air fryer vs four vs poele — meme resultat, 2x plus rapide |
| Slides suggerees | 4 (cover + comparatif temps + pourquoi c'est plus rapide + CTA) |
| Produit raccord | Frites patate douce |
| Notes | Air fryer = convection concentree. Prechauffage quasi nul. |

#### Nutrition / Macros (6 themes)

##### `nutrition-lipides`
| Champ | Valeur |
|-------|--------|
| Titre | Les bons lipides |
| Sous-titre | Ce qu'on ne te dit pas |
| Angle | 50 ans de diabolisation du gras, les etudes recentes qui prouvent le contraire |
| Slides suggerees | 5 (cover + le gras n'est pas l'ennemi + comparatif bons/mauvais + benefices long terme + CTA) |
| Produit raccord | STRICT Boeuf |
| Notes | 60% du cerveau = graisse. Harvard 2024, NEJM 2023. |

##### `nutrition-proteines-satiete`
| Champ | Valeur |
|-------|--------|
| Titre | Pourquoi tu as encore faim |
| Sous-titre | La proteine change tout |
| Angle | Effet thermique des proteines, satiete, DIT (diet-induced thermogenesis) |
| Slides suggerees | 5 (cover + pourquoi la faim + effet thermique + comparatif macro + CTA macros STRICT) |
| Produit raccord | STRICT MAX Boeuf |
| Notes | 97g de proteines dans un MAX Boeuf. DIT des proteines = 20-30% vs 5-10% glucides. |

##### `nutrition-fast-food-macros`
| Champ | Valeur |
|-------|--------|
| Titre | Ton Big Mac vs ton STRICT |
| Sous-titre | Les chiffres parlent |
| Angle | Comparaison frontale macros fast-food classique vs StrictFood — meme plaisir, autres chiffres |
| Slides suggerees | 6 (cover + Big Mac macros + STRICT macros + ce qui change + pourquoi + CTA) |
| Produit raccord | STRICT Boeuf |
| Notes | Big Mac : 540 kcal, 25g prot, 30g lip. STRICT Boeuf : 596 kcal, 53g prot, 21,5g lip. |

##### `nutrition-indice-glycemique`
| Champ | Valeur |
|-------|--------|
| Titre | L'index glycemique |
| Sous-titre | Le chiffre que personne ne regarde |
| Angle | Pourquoi l'IG compte plus que les calories — pics d'insuline, stockage, energie stable |
| Slides suggerees | 5 (cover + c'est quoi l'IG + haut vs bas + impact concret + CTA) |
| Produit raccord | Frites patate douce |
| Notes | Patate douce IG ~50 vs frites classiques IG ~75. Pain noir au charbon = IG plus bas que brioche. |

##### `nutrition-sel-cache`
| Champ | Valeur |
|-------|--------|
| Titre | 6 grammes |
| Sous-titre | Le sel cache dans ton repas |
| Angle | Un repas fast-food classique contient souvent la dose journaliere max de sel en un seul repas |
| Slides suggerees | 5 (cover + recommandation OMS + ou se cache le sel + comparatif + CTA) |
| Produit raccord | STRICT Boeuf |
| Notes | OMS recommande <5g/jour. Un menu fast-food moyen = 3-5g. |

##### `nutrition-fibre`
| Champ | Valeur |
|-------|--------|
| Titre | La fibre oubliee |
| Sous-titre | Le nutriment que tu ignores |
| Angle | 95% des gens ne mangent pas assez de fibres — impact sur digestion, satiete, microbiote |
| Slides suggerees | 5 (cover + le deficit + role des fibres + sources + CTA) |
| Produit raccord | STRICT Vege Falafel |
| Notes | Recommandation : 25-30g/jour. Moyenne francaise : 17g. |

#### Cheat Meal (4 themes)

##### `cheat-meal-mythe`
| Champ | Valeur |
|-------|--------|
| Titre | Le cheat meal est un mensonge |
| Sous-titre | Et si t'avais pas besoin de tricher ? |
| Angle | Le concept de "cheat" implique une transgression — et si le repas plaisir etait simplement bien foutu ? |
| Slides suggerees | 5 (cover + le probleme du mot "cheat" + le cycle culpabilite + l'alternative + CTA) |
| Produit raccord | STRICT Boeuf |
| Notes | Angle psychologie : la restriction cree le craving. Etudes sur l'alimentation intuitive. |

##### `cheat-meal-cortisol`
| Champ | Valeur |
|-------|--------|
| Titre | Ton cheat meal te stresse |
| Sous-titre | Le cortisol en embuscade |
| Angle | La culpabilite du cheat meal eleve le cortisol → stockage. Le plaisir sans culpabilite = meilleur resultat. |
| Slides suggerees | 5 (cover + cortisol c'est quoi + lien culpabilite-cortisol + cercle vicieux + CTA) |
| Produit raccord | STRICT MAX Poulet |
| Notes | Source : etudes cortisol + restriction alimentaire. Angle psycho-nutrition. |

##### `cheat-meal-frequence`
| Champ | Valeur |
|-------|--------|
| Titre | Combien de cheat meals par semaine |
| Sous-titre | La vraie reponse |
| Angle | La frequence ideale depend du bilan calorique global — pas d'un planning rigide |
| Slides suggerees | 5 (cover + la fausse regle + ce que dit la science + le vrai calcul + CTA) |
| Produit raccord | STRICT Poulet |
| Notes | L'adherence au regime > la perfection. 80/20 valide par la recherche. |

##### `cheat-meal-vs-refeed`
| Champ | Valeur |
|-------|--------|
| Titre | Cheat meal vs Refeed |
| Sous-titre | Ce n'est pas la meme chose |
| Angle | Le refeed est strategique (leptine, performance), le cheat meal est emotionnel — clarifier la difference |
| Slides suggerees | 5 (cover + definitions + quand chacun sert + le piege du "tout est permis" + CTA) |
| Produit raccord | STRICT MAX Boeuf |
| Notes | Refeed = augmentation controlee des glucides. Impact sur leptine et metabolisme. |

#### Ingredients / Sourcing (5 themes)

##### `sourcing-boucherie`
| Champ | Valeur |
|-------|--------|
| Titre | Boucherie Labourde |
| Sous-titre | Le nom derriere la viande |
| Angle | Tracabilite totale, artisan local, viande de grison — pourquoi le fournisseur change tout |
| Slides suggerees | 5 (cover + qui est Labourde + pourquoi artisan vs industriel + ce que ca change + CTA) |
| Produit raccord | STRICT Boeuf |
| Notes | Viande de grison. Boucherie locale a Perpignan. |

##### `sourcing-pain-noir`
| Champ | Valeur |
|-------|--------|
| Titre | Pain noir |
| Sous-titre | Pas juste une couleur |
| Angle | Charbon vegetal actif, IG plus bas, Pains du Soleil artisan local — pourquoi le noir change tout |
| Slides suggerees | 5 (cover + charbon vegetal c'est quoi + benefices + Pains du Soleil + CTA) |
| Produit raccord | STRICT Poulet |
| Notes | Le charbon vegetal a des proprietes detox (nuancer : pas de claims medicaux). |

##### `sourcing-parmesan`
| Champ | Valeur |
|-------|--------|
| Titre | Myfitcheese |
| Sous-titre | Le fromage qui fait la difference |
| Angle | Parmesan en miettes (pas en copeaux), ratio proteines exceptionnel, artisan |
| Slides suggerees | 5 (cover + pourquoi parmesan + profil nutritionnel + Myfitcheese + CTA) |
| Produit raccord | STRICT Boeuf |
| Notes | Parmesan = 35g prot/100g. Un des fromages les plus proteines. Forme miettes = marqueur visuel. |

##### `sourcing-patate-douce`
| Champ | Valeur |
|-------|--------|
| Titre | Patate douce vs frites classiques |
| Sous-titre | Le match nutritionnel |
| Angle | IG, fibres, vitamines, cuisson air fryer — pourquoi la patate douce gagne sur tous les plans |
| Slides suggerees | 5 (cover + IG compare + vitamines + mode de cuisson + CTA) |
| Produit raccord | Frites patate douce |
| Notes | Patate douce riche en beta-carotene (vitamine A). |

##### `sourcing-mache`
| Champ | Valeur |
|-------|--------|
| Titre | Mache |
| Sous-titre | Le choix qu'on ne fait pas par hasard |
| Angle | Pourquoi mache et pas laitue — omega-3, fer, vitamine C, texture qui tient la chaleur |
| Slides suggerees | 4 (cover + pourquoi pas laitue + profil nutritionnel + CTA) |
| Produit raccord | STRICT Boeuf |
| Notes | Mache = 3x plus de fer que la laitue. Contient des omega-3 (rare pour un legume vert). ATTENTION : NE PAS mentionner la sauce poivron comme artisanale (elle est achetee). |

#### Lifestyle / Sante (6 themes)

##### `lifestyle-sommeil-nutrition`
| Champ | Valeur |
|-------|--------|
| Titre | Tu dors mal a cause de ton diner |
| Sous-titre | Le lien que personne ne fait |
| Angle | Impact du dernier repas sur la qualite du sommeil — composition macro, timing, IG |
| Slides suggerees | 5 (cover + le lien repas-sommeil + ce qui aide vs ce qui nuit + recommandations + CTA subtil) |
| Produit raccord | STRICT Poulet |
| Notes | Tryptophane (precurseur serotonine/melatonine) dans le poulet. |

##### `lifestyle-inflammation`
| Champ | Valeur |
|-------|--------|
| Titre | L'inflammation silencieuse |
| Sous-titre | Ton corps te parle, tu n'ecoutes pas |
| Angle | Inflammation chronique de bas grade causee par l'alimentation ultra-transformee |
| Slides suggerees | 5 (cover + c'est quoi l'inflammation + causes alimentaires + aliments anti-inflammatoires + CTA) |
| Produit raccord | STRICT Vege Falafel |
| Notes | Omega-3, fibres, aliments non transformes = anti-inflammatoires. |

##### `lifestyle-microbiote`
| Champ | Valeur |
|-------|--------|
| Titre | 2 kg de bacteries |
| Sous-titre | Ton deuxieme cerveau |
| Angle | Le microbiote intestinal influence humeur, poids, immunite |
| Slides suggerees | 5 (cover + c'est quoi le microbiote + impact concret + aliments amis vs ennemis + CTA) |
| Produit raccord | STRICT Vege Falafel |
| Notes | Fibres = prebiotiques. Ultra-transforme = appauvrissement microbiote. |

##### `lifestyle-hydratation`
| Champ | Valeur |
|-------|--------|
| Titre | Tu n'as pas faim |
| Sous-titre | Tu as soif |
| Angle | 37% des signaux de faim sont en fait de la deshydratation |
| Slides suggerees | 4 (cover + confusion faim/soif + impact performance + recommandations + CTA) |
| Produit raccord | Boissons |
| Notes | Etude sur la confusion des signaux interoceptifs. |

##### `lifestyle-ultra-transforme`
| Champ | Valeur |
|-------|--------|
| Titre | NOVA 4 |
| Sous-titre | La classification que tu devrais connaitre |
| Angle | La classification NOVA — ce qui rend un aliment "ultra-transforme" et pourquoi c'est un probleme |
| Slides suggerees | 5 (cover + la classification NOVA + exemples concrets + risques documentes + CTA) |
| Produit raccord | STRICT Boeuf |
| Notes | Source : Carlos Monteiro (createur NOVA). 60% des calories en France = NOVA 4. |

##### `lifestyle-performance-mentale`
| Champ | Valeur |
|-------|--------|
| Titre | Ton cerveau mange avant toi |
| Sous-titre | Nutrition et performance cognitive |
| Angle | Le cerveau consomme 20% des calories — ce que tu manges affecte concentration, memoire, humeur |
| Slides suggerees | 5 (cover + le cerveau gourmand + aliments qui boostent + aliments qui plombent + CTA) |
| Produit raccord | STRICT Boeuf |
| Notes | Omega-3 (DHA), fer, zinc, vitamines B = performance cognitive. |

#### Coulisses / Equipe (4 themes)

##### `coulisses-journee-type`
| Champ | Valeur |
|-------|--------|
| Titre | 5h → 22h |
| Sous-titre | Une journee chez StrictFood |
| Angle | Le quotidien reel de l'equipe — preparation, service, fermeture |
| Slides suggerees | 6 (cover + matin/prepa + service midi + apres-midi + service soir + CTA) |
| Produit raccord | Aucun (equipe) |
| Notes | Angle authentique, pas de glamorisation. |

##### `coulisses-fournisseurs`
| Champ | Valeur |
|-------|--------|
| Titre | 3 noms |
| Sous-titre | Les artisans derriere chaque burger |
| Angle | Labourde (viande), Pains du Soleil (pain noir), Myfitcheese (parmesan) — 3 fiches artisans |
| Slides suggerees | 5 (cover + Labourde + Pains du Soleil + Myfitcheese + CTA) |
| Produit raccord | STRICT Boeuf |
| Notes | ATTENTION : ne PAS mentionner la sauce poivron comme artisanale (elle est achetee, industrielle). |

##### `coulisses-concept`
| Champ | Valeur |
|-------|--------|
| Titre | Fast-good |
| Sous-titre | Un mot qui change tout |
| Angle | La difference entre fast-food et fast-good — meme rapidite, autre philosophie |
| Slides suggerees | 5 (cover + fast-food = quoi + fast-good = quoi + le comparatif + CTA) |
| Produit raccord | STRICT Boeuf |
| Notes | Angle fondateur, vision, positionnement. |

##### `coulisses-choix`
| Champ | Valeur |
|-------|--------|
| Titre | Pourquoi on a dit non |
| Sous-titre | Les choix qu'on a refuse de faire |
| Angle | Pas de friteuse, pas de fromage fondu industriel, pas de pain blanc — chaque "non" est un "oui" a la qualite |
| Slides suggerees | 5 (cover + non a la friteuse + non au fromage industriel + non au pain blanc + CTA "nos oui") |
| Produit raccord | STRICT Boeuf |
| Notes | Angle conviction, pas marketing. |

#### Compose ton Menu (1 theme)

##### `menu-composition`
| Champ | Valeur |
|-------|--------|
| Titre | Compose ton menu |
| Sous-titre | Le guide macros |
| Angle | Comment composer un menu StrictFood equilibre selon ton objectif — seche, prise de masse, maintien |
| Slides suggerees | 6 (cover + objectif seche + objectif masse + objectif maintien + tips + CTA) |
| Produit raccord | Tous |
| Notes | Utiliser les vrais macros des fiches recettes. 3 profils types. |

---

### Type 6 — Ingredient Spotlight

> Focus approfondi sur UN ingredient (origine, composition, benefices, presence dans les produits).
> Pipeline : `/carousel-producer DD-MM-YYYY` (meme que educatif)

Les themes `sourcing-*` ci-dessus servent de base. L'ingredient spotlight approfondit un seul ingredient avec un angle plus visuel (photos macro en couverture possible).

### Type 9 — Menu Objectif

> Guide pratique : quel menu choisir selon ton objectif fitness.
> Pipeline : `/carousel-producer DD-MM-YYYY`

Le theme `menu-composition` ci-dessus sert de base. Variantes possibles :
- Par objectif : seche, prise de masse, maintien, post-training
- Par profil : femme active, homme sportif, debutant
- Par budget calorique : 500 kcal, 800 kcal, 1200 kcal

---

## Utilisation dans le planning

### Regle des 2 carrousels/semaine

Chaque semaine a **2 posts simples + 2 carrousels**. Le planning doit specifier :

| Champ | Valeur |
|-------|--------|
| **Type** | Un des 9 types |
| **Famille** | A, B ou C (determine le pipeline) |
| **Slug theme** | Si famille A : un slug de la bibliotheque ci-dessus |
| **Produit** | Le produit principal du carrousel |
| **Nombre de slides** | 3-5 (famille B/C) ou 4-10 (famille A) |

### Distribution recommandee (mensuelle)

| Type | Freq/mois | Rotation |
|------|-----------|----------|
| Panoramique | 2-3 | Alterner les scenes (table, flat lay, comptoir, ambiance) |
| Zoom Progressif | 1-2 | Alterner les produits |
| Texture/ASMR | 1 | Varier les zones macro |
| Educatif | 1 | Suivre les categories (cuisson → nutrition → cheat → sourcing → lifestyle → coulisses) |
| Construction | 0.5 | Alterner les produits |
| Ingredient Spotlight | 0.5 | Alterner les ingredients |
| Defile Gamme | 0.5 | Alterner les groupements |
| Process Cuisine | 0.5 | Alterner les etapes mises en avant |
| Menu Objectif | 0.5 | Alterner les angles |

### Regles anti-doublon

- Ne pas repeter le meme type 2 semaines de suite
- Ne pas repeter le meme produit en carrousel 2 semaines de suite
- Alterner famille A et famille B/C dans la semaine (1 carrousel texte max/semaine)
- Si 2 carousels photo dans la semaine, varier les types (pas 2 zoom d'affilee)
