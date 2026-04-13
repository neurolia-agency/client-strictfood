# Process Lifestyle — Stories & Posts

> Generation de photos lifestyle avec presence de marque integree (tenue, produit, scene urbaine).
> 30% de la production stories. Process en 3 etapes : recherche modele → generation photo → edition logo (si sac).

---

## Principe

La marque est presente dans l'IMAGE, pas dans un overlay :
- **Tenue** : piece ambre (#FABA43) = couleur signature (veste, bomber, chemise, hoodie...)
- **Produit** : n'importe quel produit StrictFood mis en scene (burger, wrap, frites, tenders, sac kraft, repas complet)
- **Scene** : environnement urbain, lifestyle, jamais en studio

Le personnage ne regarde JAMAIS la camera. Posture naturelle, candid, en mouvement.

## Produits mis en scene

Le lifestyle ne se limite PAS au sac kraft. Tout produit StrictFood peut etre integre :

| Produit | Marqueurs visuels obligatoires | Interaction personnage |
|---------|-------------------------------|----------------------|
| **Sac kraft** | Noir matte, logo blanc (ajoute en etape 2) | Tenu a la main, pose sur table/banc |
| **Burger** | Pain NOIR sesame, ingredients visibles | Tenu en main, en train de croquer, pose devant |
| **Wrap** | Tortilla doree, garniture visible a l'ouverture | Tenu en main, croque, decoupe |
| **Frites** | Dorees, dans un cornet/barquette kraft noir | Picorees a la main, posees sur table |
| **Tenders** | Panure doree croustillante, dans barquette kraft | Tenus en main, trempes dans sauce |
| **Repas complet** | Plateau/table avec burger + frites + boisson | Personnage assis devant, en train de manger |
| **Boisson** | Gobelet/bouteille avec etiquette StrictFood | Tenue en main, posee a cote |

> **Pain noir OBLIGATOIRE** sur tout burger/wrap visible. Pas de pain blanc.
> **Logo sur sac** : ajoute en etape 2 (Gemini edit) UNIQUEMENT si un sac kraft est present.

---

## Etape 0 — Recherche de modele (reference visuelle)

**Objectif** : trouver une photo de reference qui definit le PERSONNAGE (morphologie, style, tenue, posture). Cette photo sert d'inspiration pour le prompt, PAS d'input image pour l'IA.

### Ou chercher

Pinterest, Instagram Explore, Unsplash — en combinant des mots-cles de la banque ci-dessous.

### Banque de mots-cles

Combiner **1 mot-cle par categorie** pour former une requete de recherche.

| Categorie | Mots-cles |
|-----------|-----------|
| **Genre** | `homme`, `femme`, `non-binaire` |
| **Style vestimentaire** | `streetwear`, `casual chic`, `workwear`, `athleisure`, `urban minimal`, `techwear`, `smart casual` |
| **Couleur dominante** | `tenue couleur vive`, `outfit jaune`, `tenue moutarde`, `total look blanc`, `tenue monochrome`, `contraste couleur` |
| **Posture/Action** | `walking street`, `candid street`, `sitting stairs`, `leaning wall`, `mid-stride`, `looking away` |
| **Ambiance** | `street photography`, `editorial street`, `urban lifestyle`, `city portrait`, `fashion candid` |
| **Cadrage** | `full body outfit`, `plein pied look`, `outfit of the day`, `OOTD` |
| **Fond/Lieu** | `mur colore`, `graffiti wall`, `colorful wall`, `terrasse cafe`, `urban background`, `concrete stairs` |
| **Accessoire** | `paper bag`, `shopping bag`, `take-away bag`, `sac papier` |

### Formules de recherche validees

| Requete | Ce qu'on trouve |
|---------|----------------|
| `tenue homme couleur vive street` | Hommes en tenue coloree, cadrage plein pied urbain |
| `streetwear outfit yellow jacket` | Vestes jaunes/moutarde sur fond urbain |
| `candid street photography colorful outfit` | Poses naturelles en tenue voyante |
| `woman athleisure bright colors city` | Femmes en tenue sport chic coloree |
| `urban fashion editorial full body` | Plans pieds edito en contexte ville |
| `sitting stairs casual outfit` | Poses assises sur escaliers, decontracte |
| `walking paper bag street style` | Personnages en marche avec sac papier |

### Ce qu'on extrait de la photo de reference

L'operateur fournit la photo de reference. Claude analyse et retranscrit :

1. **Morphologie** : age apparent, genre, corpulence, taille estimee
2. **Tenue complete** : chaque piece decrite (matiere, coupe, couleur, etat)
3. **Accessoires** : lunettes, bijoux, sac, chaussures — forme et couleur
4. **Posture** : position du corps, des bras, des jambes, direction du regard
5. **Expression** : neutre, souriante, concentree, detendue
6. **Fond** : lieu, materiaux, couleurs, lumiere

Puis Claude **adapte** pour la story StrictFood :
- Remplace la couleur dominante de la tenue par ambre (#FABA43) si necessaire
- Ajoute le produit StrictFood choisi (burger black bun, sac kraft noir, wrap, frites...)
- Ajuste le regard (jamais camera)
- Conserve tout le reste (morphologie, style, fond, posture)

### Template d'analyse

```
## Analyse photo reference

**Personnage** : [age, genre, morphologie]
**Cheveux** : [coupe, couleur, texture]
**Visage** : [expression, accessoires (lunettes, piercings)]
**Tenue** :
  - Haut : [piece, coupe, matiere, couleur]
  - Bas : [piece, coupe, matiere, couleur]
  - Chaussures : [type, couleur, etat]
  - Accessoires : [lunettes, bijoux, sac]
**Posture** : [debout/assis/appuye, position bras/jambes, direction regard]
**Fond** : [lieu, materiaux, couleurs, eclairage]

## Adaptation StrictFood

**Piece ambre** : [quelle piece devient ambre — ex: "la veste passe en ambre #FABA43"]
**Sac kraft** : [ou et comment le personnage le tient]
**Regard** : [direction adaptee — jamais camera]
**Elements conserves** : [tout ce qui reste identique]
```

---

## Etape 1 — Generation photo de base

**Outil** : `/image-prompt-engineer` (Mode A) → `/nano-banana-pro` (generation 2K)

Le prompt est construit a partir de l'analyse de l'etape 0. Il decrit :
1. **Le personnage** : retranscription fidele de la morphologie, tenue (avec piece ambre), posture
2. **Le sac kraft** : "matte black kraft paper take-away bag, slightly crumpled" — PAS de logo dans le prompt
3. **La scene/fond** : retranscription fidele du fond de la photo de reference, ou scene choisie dans concepts-visuels.md
4. **Le cadrage** : plein pied 9:16, contre-plongee legere, 35mm feel
5. **Le style** : street photography editoriale, Kodak Portra 400, grain film subtil

**Contraintes personnage** :
- Ne regarde PAS la camera — regard deporte, profil, 3/4 dos
- Posture naturelle : en marche, appuye, assis — jamais pose "mannequin"
- Peau naturelle : texture visible, pores, pas de retouche
- La piece ambre est le marqueur couleur — elle doit etre visible et dominante

**Contraintes produit** :
- Burger : pain NOIR sesame obligatoire, ingredients visibles, proportions realistes
- Sac kraft : NOIR matte, legerement froisse, PAS de logo dans le prompt (ajoute en etape 2)
- Wrap : tortilla doree, garniture visible a l'ouverture
- Frites : dorees, dans contenant kraft noir
- Repas : plateau realiste, pas de surcharge, proportions naturelles
- Le produit est tenu/manipule naturellement (pas presente a la camera)

**Resolution** : toujours 2K
**Format** : 9:16 pour stories, 4:5 pour posts

---

## Etape 2 — Incrustation logo via Gemini edit

**Outil** : `/nano-banana-pro` avec `--input-image` (photo etape 1) + `--reference-image` (logo)

**Logo reference** : `public/logo/strictfood-logo-white-reference.png`

**Prompt d'edition verrouille** :
```
Edit this full-body street photograph. Print the exact white logo from the reference
image onto the front face of the black kraft paper bag. The logo must appear as white
ink printed directly on the matte black kraft surface, centered on the bag face, about
55 percent of bag width. Reproduce the exact same typography, burger icon in the O,
and spacing as shown in the reference logo. Keep the ENTIRE original image perfectly
intact — full body framing, the background, the lighting. Change NOTHING except adding
the logo on the bag. Maintain the original [RATIO] format.
```

**Variables** :
- `[RATIO]` : "9:16 vertical portrait" (story) ou "4:5 portrait" (post)

**Pourquoi 2 etapes de generation** :
- Gemini ne sait PAS reproduire un logo exact a partir d'une description textuelle
- L'edition avec `--reference-image` permet de fournir le vrai logo en input visuel
- Le resultat : logo imprime dans la matiere du kraft, suit les plis et la texture

---

## Flux complet

```
0. Recherche modele (Pinterest/IG)
   → Operateur fournit la photo de reference
   → Claude analyse et retranscrit (template d'analyse)
   → Claude adapte pour StrictFood (piece ambre, sac kraft, regard)
      ↓
1. /image-prompt-engineer (Mode A)
   → Prompt construit depuis l'analyse adaptee
   → /nano-banana-pro --resolution 2K
   → Photo de base dans brouillons/
   → 🔒 Validation operateur (posture, tenue, fond OK ?)
      ↓
2. /nano-banana-pro --input-image [photo] --reference-image [logo]
   → Logo imprime sur le sac kraft
   → Photo finale dans brouillons/
   → 🔒 Validation operateur (logo lisible, pas de deformation ?)
      ↓
3. Template story (si traitement != photo-pure)
   → Appliquer sillon/sceau/feuillete si besoin
   → Ou garder tel quel (photo-pure)
   → Promotion vers final/
```

---

## Parametres du brief

```markdown
| Champ | Valeur |
|-------|--------|
| Mode | full-ia |
| Type | lifestyle |
| Photo reference | [URL Pinterest ou chemin local de la photo d'inspiration] |
| Concept | [concept depuis `_config/concepts-visuels.md` section Lifestyle IA] |
| Personnage | [description OU "voir photo reference"] |
| Tenue | [description OU "adapter depuis photo reference — piece ambre : veste/bomber/hoodie"] |
| Scene | [description OU "adapter depuis photo reference"] |
| Sac kraft | oui |
| Cadrage | [plein pied / plan americain] |
| Regard | [deporte droite / deporte gauche / profil / 3/4 dos] |
```

---

## Exemples de scenes validees

| Scene | Description prompt | Mood |
|-------|-------------------|------|
| **Street art** | Mur de briques avec graffiti colore (rouge, jaune moutarde, teal) | Urbain, energique |
| **Terrasse cafe** | Assis a une terrasse, sac pose sur la table, cafe a cote | Detendu, quotidien |
| **Rue pietonne** | Marche dans une rue pietonne ensoleillée, foule floue en arriere-plan | Dynamique, social |
| **Escalier beton** | Assis sur un escalier en beton, sac a cote, ecouteurs | Casual, gen-Z |
| **Mur uni colore** | Mur peint en une couleur vive (rouge, teal) + trottoir | Graphique, editorial |
| **Parc urbain** | Banc de parc, verdure en arriere-plan, lumiere golden hour | Chaleureux, nature |

---

## Regles non negociables

1. **Etape 0 obligatoire** — toujours partir d'une photo de reference analysee
2. **Jamais de regard camera** — le personnage est capture en candid
3. **Piece ambre obligatoire** — c'est le marqueur couleur de la marque dans la scene
4. **Pain noir obligatoire** — tout burger/wrap visible a un pain NOIR sesame
5. **Logo sac en etape 2** — si sac kraft present, logo ajoute via Gemini edit (jamais dans le prompt)
6. **Logo reference** : toujours `public/logo/strictfood-logo-white-reference.png`
7. **Pas de texte dans l'image** — sauf le logo sur le sac (ajoute en etape 2)
8. **Resolution 2K** — pas de draft basse resolution
9. **Analyse avant adaptation** — Claude analyse la photo de reference PUIS adapte, dans cet ordre
10. **Varier les produits** — pas 3x le meme produit en lifestyle sur une semaine
