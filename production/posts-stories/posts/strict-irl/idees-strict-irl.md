# STRICT IRL — Idees de visuels lifestyle

> Visuels generes par IA montrant des personnages realistes qui consomment StrictFood dans des situations du quotidien. Objectif : humaniser la marque, creer de l'identification, casser le rythme produit-centre du feed.

## Inspiration

Style Burger King FR : hyper-texture, sensory-focused, authenticity over perfection. Cadrage lifestyle, lumiere naturelle, personnages en situation reelle.

---

## Regles anti-empreinte IA — Prompt Engineering Photorealiste

> Ces regles sont OBLIGATOIRES pour toute generation STRICT IRL. Elles s'ajoutent aux regles de `feedback_strict_irl_photo_rules.md`. L'objectif est de produire des photos indiscernables de vrais cliches.

### Principe fondamental

**Decrire comme un photographe, pas comme un developpeur.** Les modeles repondent aux descriptions narratives (direction photo) bien mieux qu'aux listes de mots-cles. Prompt optimal : 100-150 mots, langage naturel.

### 1. Ancrage photographique (OBLIGATOIRE dans chaque prompt)

Toujours inclure ces 5 elements techniques :

| Element | Valeurs recommandees STRICT IRL |
|---------|--------------------------------|
| **Objectif** | `50mm f/1.8` (lifestyle plein cadre), `85mm f/2.8` (portrait + food), `35mm f/2` (scene de groupe) |
| **Boitier** | `shot on Canon EOS R5` ou `Sony A7R IV` ou `Fujifilm X-T5` |
| **Film stock** | `Kodak Portra 400` (chaleur + grain organique automatiques) |
| **Temperature couleur** | `daylight white balance 5200-5600K` (exterieur) ou `warm tungsten 3200K` (interieur soir) |
| **Profondeur de champ** | `shallow depth of field, creamy bokeh background` |

### 2. Eclairage — 80% du realisme vient de la

L'eclairage plat et uniforme = signature IA immediate. Toujours specifier :

| Situation | Instruction eclairage |
|-----------|----------------------|
| **Exterieur jour** | `natural sunlight, soft shadows, golden hour side-lighting` |
| **Exterieur sunset** | `warm golden backlight creating rim-light on subject, lens flare` |
| **Interieur naturel** | `natural window side-light at 45 degrees, soft diffused shadows` |
| **Interieur soir** | `warm ambient tungsten light, practical light sources visible, slight underexposure in corners` |
| **Salle de sport** | `harsh overhead fluorescent mixed with natural light from windows, unflattering but authentic` |
| **Nuit urbaine** | `streetlamp sodium glow, warm-cold contrast, subtle rim light from neon signs` |

**Ajouter systematiquement :** `minor uneven exposure, natural light falloff` — brise la perfection IA.

### 3. Anti peau plastique — La regle critique

Les modeles IA surllissent la peau. C'est l'artefact le plus detectable.

**Mots INTERDITS dans les prompts :**
- ~~smooth skin~~, ~~flawless~~, ~~perfect skin~~, ~~beautiful~~, ~~stunning~~, ~~poreless~~

**Mots OBLIGATOIRES :**
```
natural skin texture with visible pores preserved,
uneven skin tone, subtle freckles, realistic complexion,
no airbrushed finish, no plastic appearance
```

**Technique avancee :** Specifier `subsurface scattering on skin` — signal de realisme avance qui force la translucidite naturelle de la peau sous la lumiere.

### 4. Posing et expressions anti uncanny valley

| Artefact | Solution |
|----------|----------|
| Sourire fige/artificiel | `candid mid-laugh`, `genuine unguarded moment`, `caught mid-sentence` |
| Regard camera mort | `subject NOT looking at camera`, `looking at food`, `looking at companion` |
| Pose statique | `dynamic body language, slightly leaning, body in oblique angle, natural slouch` |
| Symetrie faciale | `natural facial asymmetry, slight tilt of head, relaxed expression` |
| Mains deformees | `hands partially hidden by food/wrapper`, `one hand in pocket`, `hands naturally gripping burger` |

### 5. Food realisme — Anti glossy / anti perfection

| Artefact | Solution prompt |
|----------|----------------|
| Burger trop parfait | `burger slightly tilted, sauce dripping naturally, lettuce slightly off-center, imperfect and appetizing` |
| Fromage plastique | `natural cheese melt with organic drips, not artificially glossy, realistic surface tension` |
| Taille irrealiste | `realistic burger size proportional to human hand, not oversized` |
| Surface trop brillante | `matte finish on bread, glossy only where sauce naturally catches light` |
| Ingredients flottants | `ingredients settled naturally, proper contact between layers, realistic stacking` |
| Absence de texture | `visible crumb texture on bun, natural browning variation, uneven caramelization, char marks` |

### 6. Packaging kraft — Authenticite materiau

```
black matte kraft paper wrapper naturally crumpled and used-looking,
not pristine or stiff, visible creases and folds from handling,
slightly grease-stained, plain dark surface
```

### 7. Imperfections volontaires — Signal de realisme

Le cerveau humain detecte la perfection comme artificielle. Ajouter au moins 3 de ces elements :

- `subtle film grain` (le grain analogique casse le rendu digital)
- `minor uneven exposure` (surexposition ou sous-exposition partielle)
- `slight lens vignetting` (bords legerement assombris)
- `natural motion blur on secondary elements` (leger flou de mouvement)
- `small dust particles visible in light beam` (poussiere dans la lumiere)
- `slightly overblown highlights on reflective surfaces` (hautes lumieres clamees)
- `bokeh with slight chromatic aberration` (bokeh avec aberration chromatique)
- `authentic environmental noise` (elements parasites naturels dans le decor)

### 8. Mots-cles par categorie

#### Realisme obligatoire
`documentary-style` · `photojournalistic authenticity` · `editorial lifestyle photography` · `Kodak Portra 400` · `natural imperfections`

#### Anti-IA obligatoire
`no artificial shine` · `no plastic appearance` · `no airbrushed finish` · `no oversaturation` · `no symmetrical composition` · `no studio-perfect lighting`

#### A BANNIR (declenchent le look IA)
~~masterpiece~~ · ~~incredible detail~~ · ~~8K ultra-detailed~~ · ~~cinematic~~ · ~~flawless~~ · ~~perfect~~ · ~~hyper-realistic~~ · ~~stunning~~ · ~~beautiful lighting~~

### 9. Structure de prompt type STRICT IRL

```
Documentary-style lifestyle photography of [SCENE/ACTION DETAILLEE].
[DESCRIPTION PERSONNAGE(S) : age, physique, tenue, expression candide].
[PRODUIT STRICTFOOD visible : taille realiste, details emballage kraft froisse].
[DECOR/LIEU precis avec details atmospheriques].
Natural [TYPE] light [DIRECTION et ANGLE], creating [EFFET sur les textures].
Shot on [BOITIER], [FOCAL]mm f/[OUVERTURE], shallow depth of field
with creamy bokeh. Kodak Portra 400 color grade, subtle film grain,
natural skin texture with visible pores preserved.
Subject not looking at camera, candid unguarded moment, dynamic body language.
Burger slightly tilted with sauce dripping, realistic proportions.
No artificial shine, no plastic skin, no oversaturation, no perfect symmetry.
```

### 10. Reflets et limitations — Ce qu'il faut eviter

Ces elements restent non resolus par les modeles IA en 2025. Les **cadrer hors-champ** :

- Miroirs et surfaces reflechissantes
- Lunettes de soleil (reflets incoherents)
- Flaques d'eau et reflets au sol
- Vitres de voiture (reflets complexes)
- Surfaces metalliques tres polies

Si la scene en necessite (ex: salle de sport avec miroirs), specifier `mirrors blurred in deep background, not reflecting subject`.

### 11. Post-processing recommande

Apres generation, appliquer si necessaire :

1. **Grain film** : ajouter en post (Lightroom/Photoshop) — les modeles de diffusion traitent le grain comme du bruit a supprimer
2. **Color grading** : profil Kodak Portra ou Fujifilm — casse l'uniformite digitale
3. **Vignettage** : subtil, ajoute de la profondeur naturelle
4. **Texture peau** : si trop lisse, reduire opacite du lissage a 30-40% et rajouter du grain

### 12. Choix du modele par type de visuel

| Type de visuel | Modele recommande | Raison |
|----------------|-------------------|--------|
| Lifestyle humain sans texte | **Gemini (Nano Banana Pro)** | Meilleure texture peau, pores realistes, eclairage naturel |
| Food gros plan sans texte | **Gemini (Nano Banana Pro)** | Texture food superieure, 4K natif |
| Visuel avec branding lisible | **GPT-4o (gpt-image-1.5)** | Seul a rendre du texte lisible et precis |
| Iteration / exploration rapide | **GPT-4o** | Raffinement conversationnel multi-turn |
| Scene complexe multi-personnages | **Gemini** | Meilleure coherence anatomique en groupe |

---

## Statut

| # | Statut | Fichier output |
|---|--------|----------------|
| 1 | 🔶 TEST | |
| 4 | 🔶 TEST | |
| 28 | 🔶 TEST | |

---

## SPORT & FITNESS

| # | Concept | Produit | Decor |
|---|---------|---------|-------|
| 1 | Un homme tient un STRICT Boeuf dans une main, un haltere dans l'autre, sourire confiant | STRICT Boeuf | Salle de sport, zone musculation |
| 2 | Une femme assise sur un banc de muscu, prend une bouchee de wrap entre deux series | Wrap Poulet | Salle de sport, entre les machines |
| 3 | Un groupe de 3 sportifs post-entrainement, assis par terre contre un mur, chacun avec son burger | STRICT MAX Poulet | Vestiaire / zone repos salle |
| 4 | Un coach sportif tend un STRICT Poulet a un client apres une seance, comme une recompense | STRICT Poulet | Box de CrossFit |
| 5 | Gros plan sur des mains musclees tenant un burger coupe en deux, biceps visibles en arriere-plan | STRICT MAX Boeuf | Salle de sport, eclairage dramatique |
| 6 | Une femme en tenue fitness boit un milkshake proteine sur un tapis de yoga | Milkshake Proteine | Studio de yoga / Pilates |
| 7 | Un homme en debardeur tient des tenders dans un shaker — format "snack post-training" | Tenders STRICT | Parking salle de sport, voiture en fond |
| 8 | Deux runners s'arretent sur un pont/sentier pour manger un wrap, sac a dos de trail | Wrap Boeuf | Sentier nature / pont en bois |

## PLAGE & EXTERIEUR

| # | Concept | Produit | Decor |
|---|---------|---------|-------|
| 9 | Une femme en maillot de bain tient un STRICT Boeuf, assise sur une serviette | STRICT Boeuf | Plage mediterraneenne, sable |
| 10 | Un couple partage des frites patate douce les pieds dans le sable, coucher de soleil | Frites Patates Douces | Plage au sunset |
| 11 | Un groupe d'amis en cercle au bord de la mer, tous levent leur burger en mode "cheers" | STRICT Poulet | Plage, golden hour |
| 12 | Un surfeur/skateur assis sur sa planche mange un wrap, van en arriere-plan | Wrap Poulet | Parking spot de surf |
| 13 | Une femme sur un rocher face a la mer, vue de dos, burger a la main | STRICT Boeuf | Cote rocheuse mediterraneenne |
| 14 | Pique-nique sur l'herbe — nappe avec burgers et desserts StrictFood, lumiere doree | Mix (burgers + cookie + overnight) | Parc / jardin, golden hour |

## URBAIN & CENTRE-VILLE

| # | Concept | Produit | Decor |
|---|---------|---------|-------|
| 15 | Un groupe d'amis en centre-ville, tous le meme burger, en train de marcher et manger | STRICT Boeuf | Rue pietonne, facades colorees |
| 16 | Un homme en costume assis sur un banc de centre-ville, cravate desserree, burger a la main | STRICT MAX Boeuf | Place urbaine, pause dejeuner |
| 17 | Deux amies assises en terrasse de cafe, rient avec chacune un cookie proteine | Cookie Proteine | Terrasse cafe, ambiance sud |
| 18 | Un skateur fait un trick, un pote lui tend un burger en bas des marches | STRICT Poulet | Skatepark urbain |
| 19 | Un mec appuye contre un mur graffiti, burger a la main, regard camera, style streetwear | STRICT MAX Poulet | Mur graffiti, ruelle urbaine |
| 20 | Une femme sort de sa voiture, sac StrictFood a la main, tenue business casual | Sac StrictFood (branding) | Parking centre-ville |

## TRAVAIL & PAUSE DEJ

| # | Concept | Produit | Decor |
|---|---------|---------|-------|
| 21 | Open space — un employe mange son burger au bureau pendant que les collegues regardent avec envie | STRICT Boeuf | Bureau / open space |
| 22 | Un livreur sur son velo/scooter prend une bouchee de wrap, arrete a un feu rouge | Wrap Boeuf | Carrefour urbain |
| 23 | Un medecin/infirmier en blouse blanche mange un tiramisu proteine dans une salle de pause | Tiramisu Proteine | Salle de pause hopital |
| 24 | Un ouvrier en gilet de chantier, casque en arriere, tient un STRICT MAX sur un muret | STRICT MAX Boeuf | Chantier de construction |
| 25 | Un groupe de collegues fait un "lunch run" avec des sacs StrictFood, on voit les burgers sortir | Mix | Hall d'entreprise |

## MOMENTS DU QUOTIDIEN

| # | Concept | Produit | Decor |
|---|---------|---------|-------|
| 26 | Un etudiant dans un amphi, cahiers ouverts, prend une bouchee discrete de wrap | Wrap Poulet | Amphi / bibliotheque universitaire |
| 27 | Une femme dans son lit le matin, mange un overnight STRICT avec une cuillere, Netflix en fond | Overnight STRICT | Chambre, ambiance cozy |
| 28 | Un pere et sa fille mangent chacun un burger sur un banc de parc, complicite | STRICT Poulet + STRICT Boeuf | Parc public, apres-midi |
| 29 | Un couple en voiture, road trip, le passager tient deux burgers, GPS en fond | STRICT Boeuf x2 | Interieur voiture, route |
| 30 | Gros plan d'une femme croquant dans un cookie proteine, expression de plaisir, yeux fermés | Cookie Proteine | Fond neutre / bokeh urbain |

## SOIREE & SOCIAL

| # | Concept | Produit | Decor |
|---|---------|---------|-------|
| 31 | Soiree entre amis — un gars arrive avec 6 burgers dans un sac craft, reaction enthousiaste du groupe | STRICT Boeuf x6 | Appartement, soiree |
| 32 | Apero rooftop — tenders et frites en sharing sur une table basse, vue sur les toits | Tenders + Frites | Rooftop terrasse, sunset |
| 33 | After party — un mec en chemise ouverte mange un STRICT MAX assis sur le trottoir, 2h du mat' | STRICT MAX Boeuf | Trottoir, nuit, eclairage reverbere |
| 34 | Un DJ derriere ses platines tient un burger d'une main, casque sur l'oreille | STRICT Poulet | Club / soiree, lumieres neon |
| 35 | Barbecue dans un jardin — un invite tient un STRICT vs les burgers du BBQ, air superieur | STRICT Boeuf | Jardin prive, barbecue |

## GROS PLANS & FOOD PORN LIFESTYLE

| # | Concept | Produit | Decor |
|---|---------|---------|-------|
| 36 | Gros plan de deux mains qui ouvrent un burger, fromage qui file, lumiere chaude | STRICT MAX Boeuf | Table restaurant, lumiere naturelle |
| 37 | Main qui plonge un tender dans une sauce, gouttelettes en suspend (slow-mo feeling) | Tenders STRICT | Table en bois rustique |
| 38 | Vue plongee d'une table avec 4 burgers differents, 4 paires de mains | Mix 4 burgers | Table sociale, vue top-down |
| 39 | Gros plan d'une morsure — traces de dents dans le burger, texture visible | STRICT Boeuf | Fond sombre dramatique |
| 40 | Un milkshake tenu a bout de bras contre le ciel bleu, condensation sur le verre | Milkshake Proteine | Exterieur, ciel bleu azur |

## HUMOUR & DECALE

| # | Concept | Produit | Decor |
|---|---------|---------|-------|
| 41 | Un mec a la salle regarde son shaker de whey, puis regarde le STRICT MAX — choix evident | STRICT MAX Poulet | Salle de sport, vestiaire |
| 42 | Un chien regarde fixement un burger tenu par son maitre, regard de convoitise extreme | STRICT Boeuf | Parc / canape |
| 43 | Deux potes — l'un mange une salade triste, l'autre un STRICT. Expressions opposees | STRICT Poulet | Table restaurant / cantine |
| 44 | Un mec enveloppe dans une couverture mode "comfort food" tient son burger comme un tresor | STRICT Boeuf | Canape, ambiance hivernale |
| 45 | "Meal prep du dimanche" — un sportif range 5 boites... puis sort un STRICT en cachette | STRICT Poulet | Cuisine, plan de travail |

## IDENTITE LOCALE / PERPIGNAN

| # | Concept | Produit | Decor |
|---|---------|---------|-------|
| 46 | Vue sur le Castillet (monument Perpignan), personne au premier plan avec burger | STRICT Boeuf | Perpignan centre, Castillet |
| 47 | Marche Saint-Charles — un acheteur s'arrete pour croquer dans son wrap | Wrap Poulet | Marche couvert, etals colores |
| 48 | Un rugbyman (USAP vibes) en maillot tient un STRICT MAX, terrain en fond | STRICT MAX Boeuf | Terrain de rugby |
| 49 | Tramway/bus de Perpignan — une etudiante tient un sac StrictFood, vitres en fond | Sac StrictFood | Transport en commun |
| 50 | Terrasse donnant sur les Pyrenees au loin, coucher de soleil, burger et frites au premier plan | STRICT Boeuf + Frites | Terrasse avec vue montagne |
