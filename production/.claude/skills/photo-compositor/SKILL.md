---
name: photo-compositor
description: >
  Reference skill for photo compositing — integrating real product photos into
  AI-generated or real lifestyle scenes. Covers the 5 compositing pillars (lighting,
  shadows, perspective, edge integration, color unification), multi-image API parameters
  (Gemini, OpenAI), BGSWAP workflow, dual-photo compositing, and quality checklists.
  Consult this skill when compositing product photos into scenes.
  Triggers on: "compositing", "photo compositing", "integrate product", "product in scene",
  "multi-image", "background swap", "BGSWAP", "composite photo".
---

# Photo Compositor

Reference documentaire pour le **compositing photo-realiste** : integrer une photo de produit reelle dans une scene lifestyle generee par IA ou dans une autre photo reelle. Ce skill encode les 5 piliers fondamentaux du compositing professionnel, les parametres API multi-image, et les workflows de verification.

**Ce skill est une reference** — il n'execute pas de workflow. Les agents (`strict-irl-compositor`) et les skills de generation (`image-prompt-engineer`, `nano-banana-pro`) doivent le consulter pour appliquer ces regles.

---

## Quand utiliser le compositing

| Situation | Methode |
|-----------|---------|
| Photo produit reelle disponible + scene lifestyle a generer | Compositing multi-image (ce skill) |
| Pas de photo produit → scene entierement generee | Generation complete (cf. skill `photo-realism-guide`) |
| Produit reel + contexte reel (2 photos) | Compositing dual-photo (section 8 de ce skill) |

**Avantage du compositing** : le produit est 100% fidele (texture, couleurs, ingredients exacts) — zero risque de deviation par le modele IA.

---

## 1. Les 5 piliers du compositing realiste

Un composite echoue des qu'un seul pilier est viole. Le cerveau humain detecte les incoherences en millisecondes.

### Pilier 1 — Eclairage (le plus critique)

L'eclairage incoherent entre le produit et la scene est le **signe le plus visible** d'un composite.

**4 parametres a matcher :**

| Parametre | Description | Si incoherent |
|-----------|-------------|---------------|
| **Direction** | D'ou vient la lumiere principale | Ombre d'un cote, highlight de l'autre = faux |
| **Durete** | Ombres nettes (soleil) vs douces (nuageux) | Ombres dures sur produit + ombres douces dans scene = faux |
| **Temperature** | Chaude (tungsten) vs froide (fluo) vs neutre (jour) | Produit chaud dans scene froide = faux |
| **Intensite** | Niveau d'exposition global | Produit surexpose dans scene sombre = faux |

**Instruction prompt obligatoire :**
```
Match the lighting direction, color temperature, shadow softness,
and intensity between the product from the reference image and
the generated scene. The product must appear naturally lit by
the same light source as the environment.
```

**Tableau eclairage par scene :**

| Scene | Direction | Temperature | Durete | Instruction compositing |
|-------|-----------|-------------|--------|------------------------|
| Parc golden hour | Laterale gauche 30deg | Chaude 4500K | Douce | `Warm side-light from the left, soft diffused shadows, golden color cast on product surface matching the scene` |
| Salle de sport | Overhead + fenetre | Mixte fluo+jour | Dure | `Harsh overhead fluorescent highlights on top of product, natural fill from window side, mixed color temperature` |
| Restaurant soir | Laterale chaude | Chaude 3200K | Douce | `Warm tungsten ambient glow on product, soft wrap-around lighting, candlelight warmth on surfaces` |
| Plage sunset | Backlight | Tres chaude 3500K | Douce+rim | `Strong warm backlight creating golden rim-light on product edges, subtle lens flare, silhouette fill` |
| Urbain nuit | Multi-directionnelle | Mixte sodium+neon | Contrastee | `Streetlamp sodium glow from above, colored neon rim-light from signs, high contrast on product` |
| Terrasse jour | Overhead + reflechie | Neutre 5500K | Douce | `Soft overhead daylight with subtle warm bounce from pavement, even illumination on product` |

---

### Pilier 2 — Ombres (3 types distincts)

Sans ombres correctes, le produit **flotte** dans la scene. Toujours specifier les 3 types :

| Type | Description | Criticite | Instruction prompt |
|------|-------------|-----------|-------------------|
| **Contact shadow** | Ou le produit touche la surface (main, table, wrapper) | CRITIQUE — sans elle, le produit flotte | `Realistic contact shadow directly beneath the product where it meets [surface], darkest at point of contact, fading outward` |
| **Cast shadow** | Ombre projetee par le produit | IMPORTANT — ancre dans l'espace | `Cast shadow falling [direction matching light], soft gradient, shadow color sampled from surrounding shadows (not pure black)` |
| **Modeling shadow** | Zones sombres sur le produit lui-meme | IMPORTANT — definit le volume 3D | `Natural modeling shadows on the product defining its 3D form, matching the scene's key light direction` |

**Regle critique :** La couleur des ombres n'est **JAMAIS** du noir pur.

```
Shadow color matching the ambient environment tones —
warm brown in golden hour, cool blue in shade,
never pure black shadows.
```

---

### Pilier 3 — Perspective

Toutes les lignes convergentes doivent se rejoindre au meme point de fuite. Le cerveau detecte instantanement les erreurs de perspective.

**Regles :**
- L'angle de prise de vue du produit DOIT matcher celui de la scene
- Si le produit est photographie a 45°, la scene doit etre a 45°
- Le point de fuite du produit et de la scene doivent etre identiques

**Angles par type de produit :**

| Angle | Degres | Effet | Cas d'usage |
|-------|--------|-------|-------------|
| Contre-plongee | 15-25° | Accentue la hauteur, l'empilement | Hero shot, mise en valeur burger |
| Eye-level | 0° | Realiste, naturel, "comme si tu etais la" | Lifestyle candide, quotidien |
| 3/4 | 45° | Montre le dessus + les couches laterales | Vue classique food, social |
| Plongee / top-down | 80-90° | Composition graphique | Flat-lay, multi-produits |

**Instruction prompt :**
```
Camera angle matches the product photo's original perspective — [angle].
All vanishing points converge consistently between the product
and the generated scene.
```

---

### Pilier 4 — Bords et integration

Les artefacts de bords trahissent immediatement un composite.

| Artefact | Cause | Prevention prompt | Post-processing |
|----------|-------|-------------------|-----------------|
| **Halo lumineux** | Masque trop large / transition brutale | `No visible edge artifacts, seamless integration` | Contracter le masque de 0.5-1px |
| **Frange coloree** | Contamination couleur du fond original | `No color fringing at product edges` | Correction Lab Color Space : ajuster canaux a/b |
| **Bords durs** | Transition trop nette produit/scene | `Soft natural transition between product edges and surrounding scene` | Feathering 4-8px |
| **Produit decoupe** | Masque trop serre | `Product edges blend naturally into the scene` | Dilater le masque de 0.5-1px |
| **Double contour** | Detourage inexact + fond residuel | `Clean edge extraction, no residual background` | Masque refine (Select > Refine Edge) |

**Instruction prompt obligatoire :**
```
Seamless edge integration between the product and the scene.
No visible compositing artifacts, halos, or color fringing.
Product edges blend naturally with the environment.
```

---

### Pilier 5 — Unification couleur

Le produit et la scene doivent partager la meme balance couleur globale.

**Instruction prompt :**
```
Unified color grading between the product and the scene.
Same white balance, same color temperature, same tonal range.
The product appears as if it was photographed in this exact scene.
```

**Post-processing si necessaire (technique Lab) :**

1. Ouvrir le composite dans Photoshop
2. Convertir en mode **Lab** (Image > Mode > Lab Color)
3. Ouvrir les **Courbes** sur le calque produit :
   - Canal **a** (rouge-vert) : matcher la dominante de la scene
   - Canal **b** (bleu-jaune) : matcher la temperature de la scene
4. Ajuster la **luminance (L)** pour matcher l'exposition
5. Appliquer un **color grade unifie** (Kodak Portra 400 LUT) sur l'ensemble

**Technique alternative (plus simple) :**
- Prendre un echantillon couleur (Color Sampler) dans les ombres et les highlights de la scene
- Appliquer Color Balance / Curves sur le produit pour matcher ces echantillons

---

## 2. Structure du prompt de compositing

**9 blocs** dans cet ordre (vs 8 pour une generation simple — les blocs supplementaires adressent l'integration) :

```
1. INSTRUCTION PRINCIPALE
   "Documentary-style lifestyle photograph integrating the product
   from the reference image into a new scene."

2. REFERENCE PRODUIT
   Description explicite du contenu de l'image reference
   et comment elle doit etre integree.
   "The reference image shows a real [product]. Integrate this exact
   [product] — preserving its texture, colors, and proportions."

3. SCENE ET DECOR
   Description du lieu, heure, ambiance, details atmospheriques.

4. ECLAIRAGE + MATCHING
   Direction + source + MATCHING explicite avec le produit.
   "Match the lighting direction, color temperature, and shadow
   softness on the product to integrate it seamlessly."

5. OMBRES (3 types)
   Contact + cast + modeling, coherentes avec l'eclairage.

6. PERSONNAGE(S)
   Physique, tenue, posture dynamique, interaction avec le produit.

7. PERSPECTIVE + INTEGRATION
   Matching angle + bords + unification couleur.
   "Seamless edge integration — no halos, no color fringing."

8. PACKAGING / ACCESSOIRES
   Elements secondaires (kraft vierge si 2-step logo workflow).

9. TECHNIQUE PHOTO + IMPERFECTIONS + ANTI-PATTERNS
   Boitier, objectif, film stock, min 3 imperfections, exclusions.
   (cf. skill photo-realism-guide pour les details)
```

---

## 3. Parametres API — Compositing multi-image

### Gemini 3 Pro Image (Nano Banana Pro)

| Parametre | Valeur | Note |
|-----------|--------|------|
| Resolution | 4K | Toujours 4K pour la production |
| Input images | Jusqu'a 14 (6 en high-fidelity) | Image 1 = produit (fidelite max) |
| Object Fidelity | Active | Preserve les details du produit reel |
| Aspect ratio | 4:5 (feed) / 9:16 (story) | Adapter au format final |

**Commande type :**
```
/nano-banana-pro --resolution 4K \
  --input-image [photo-produit-reelle] \
  --input-image [photo-contexte-optionnelle]
```

### OpenAI GPT-Image-1.5

| Parametre | Valeur | Note |
|-----------|--------|------|
| Input images | Jusqu'a 16 | `input_fidelity="high"` pour preservation produit |
| Resolution | 4K | |
| Mode | Edit / Inpaint | Pour insertion dans scene existante |

### Google Imagen 3 — BGSWAP

Pour les cas simples (produit pose, pas tenu en main) :

| Parametre | Valeur |
|-----------|--------|
| Edit mode | `EDIT_MODE_BGSWAP` |
| Mask mode | `MASK_MODE_BACKGROUND` (auto-detection sujet) |
| Dilation | `0.00` (preserver les bords produit exactement) |
| Base steps | `75` (qualite maximale) |
| Guidance scale | `60-75` |

---

## 4. Decision : quelle methode utiliser

| Situation | Methode recommandee | Pourquoi |
|-----------|---------------------|----------|
| Produit tenu en main par un personnage | Multi-image Gemini | Interaction main/produit complexe |
| Produit pose sur une surface (table, banc) | BGSWAP ou Multi-image | BGSWAP plus simple et rapide |
| Scene complexe multi-personnages | Multi-image Gemini | Plus flexible pour placer les elements |
| Gros plan food porn isole | BGSWAP Imagen | Rapide, fond simple a remplacer |
| Batch (meme produit, N scenes) | BGSWAP Imagen | Consistant et rapide |
| 2 produits differents dans une scene | Multi-image Gemini (2 input-images) | BGSWAP ne supporte qu'un sujet |
| Produit + photo contexte reelle | Multi-image Gemini (cf. section 8) | Dual-photo compositing |

---

## 5. Workflow d'insertion logo (etape 2)

Apres le compositing, le logo STRICT FOOD'S doit etre insere via un workflow 2-step. Ce workflow est documente en detail dans les agents `strict-irl-prompter` et `strict-irl-compositor`.

**Points cles :**
- Le packaging est genere **VIERGE** (sans logo) a l'etape 1
- Le logo est insere via editing API Gemini avec **image de reference** a l'etape 2
- Toujours utiliser `public/logo/strictfood-logo-reference.png` comme input
- Seul le 2e O de FOOD est un burger icon — specifier explicitement

---

## 6. Checklist de qualite compositing

### 5 piliers (verification dans l'image finale)

| Pilier | Check | Action si echec |
|--------|-------|-----------------|
| Eclairage | Direction lumiere sur produit = direction dans scene | Re-generer avec eclairage ajuste |
| Ombres | Contact shadow visible sous le produit | Ajouter `realistic contact shadow` dans le prompt |
| Perspective | Angle de vue produit = angle scene | Re-photographier le produit ou ajuster le prompt |
| Bords | Pas de halo, frange, decoupe visible | Post-processing (feathering, Lab correction) |
| Couleur | Temperature et balance identiques | Post-processing (Lab Curves, LUT unifiee) |

### Integration (verification supplementaire)

- [ ] Produit identique a la photo source (texture, couleurs, details)
- [ ] Profondeur de champ coherente (bords produit proches du fond = legerement flous)
- [ ] Taille produit realiste et proportionnee aux elements de la scene
- [ ] Interaction naturelle avec le personnage (prise en main, posture)
- [ ] Pas d'artefact de decoupe visible a zoom 100%

---

## 7. Erreurs frequentes et corrections

| Erreur | Detection | Correction prompt | Post-processing |
|--------|-----------|-------------------|-----------------|
| Produit flottant | Pas de contact shadow | Ajouter `contact shadow directly beneath product where it meets [surface]` | Peindre une ombre contact douce dans Photoshop |
| Eclairage inverse | Highlight produit vs ombre scene au meme endroit | Flipper l'image produit OU ajuster la direction dans le prompt | Curves locales sur le produit |
| Halos blancs aux bords | Contour lumineux autour du produit | `No edge artifacts, no halos, seamless integration` | Contract selection 1px + feather |
| Produit trop net dans scene floue | Depth of field incoherent | `Product at same focal distance as surrounding elements, matching bokeh` | Gaussian blur leger sur les bords |
| Couleur produit trop saturee | Temperature couleur differente | `Unified color grading, product matches scene temperature` | Desaturer 10-15% + ajuster temperature |
| Ombre noir pur | Ombres non naturelles | `Shadow color sampled from ambient environment, not pure black` | Eclaircir les ombres + teinter |

---

## 8. Compositing dual-photo (2 photos reelles)

Quand on dispose de **deux photos reelles** (produit + contexte/scene), le compositing est different car le modele IA doit fusionner deux images existantes plutot que generer une scene.

### ⛔ RÈGLE — Fidélité salle de restaurant

Quand le compositing utilise une photo de la salle du restaurant StrictFood (`public/images/photos-references/contexte/salle-restaurant/`), le résultat DOIT être fidèle à cette photo. Autorisé : changer l'angle, reconstituer un élément manquant (même modèle), compléter un mur (même texture). INTERDIT : altérer les matériaux (murs boisés au lieu de carrelage blanc), inventer du mobilier absent, changer l'ambiance (rustique/pub au lieu de moderne/minimaliste). Si le modèle IA réinvente le décor → BLOQUER `⚠️ DÉCOR RESTAURANT NON CONFORME`. Caractéristiques réelles : carrelage blanc/gris clair, bois blond chêne, chaises noires métal, mur végétal néon "STRICT FOOD'S", comptoir vitrine noire, éclairage blanc neutre.

### REGLE FONDAMENTALE — Photo lieu = fond SACRE

Dans le mode `compositing-irl`, la photo du lieu est un **fond sacre** qui ne doit JAMAIS etre reinvente, redesigne ou reinterprete par le modele IA. Le but est que le resultat final ressemble a une vraie photo prise sur place — pas une creation IA.

**Principes non negociables :**

1. **PRESERVER la photo lieu integralement** — chaque element identifiable (murs, comptoirs, eclairage, plantes, vitrines, textures) doit survivre intact dans le resultat final
2. **PLACER le produit DANS la photo** — le prompt dit "place cet objet dans cette photo", PAS "cree une scene avec ce produit sur un comptoir"
3. **ADAPTER l'eclairage du produit a l'eclairage existant** — jamais l'inverse. On ne modifie pas l'eclairage de la scene pour mettre en valeur le produit. Le produit doit sembler eclaire par les sources de lumiere deja presentes dans la photo.
4. **Le prompt commence TOUJOURS par** : `"PRESERVE the background photo exactly as-is."`
5. **Lister explicitement les elements du lieu** dans le prompt — comptoir, murs, eclairage, mobilier, plantes — pour que le modele sache quoi preserver
6. **Inclure une section "DO NOT"** qui interdit explicitement la reinvention du decor

**Pourquoi c'est critique :**
Les modeles IA (GPT Images, Gemini) ont tendance a "comprendre l'intention" et a generer un lieu generique qui correspond a la description. Si le prompt dit "place the burger on a restaurant counter with wood walls and plants", le modele generera un comptoir generique — pas CELUI du restaurant. Il faut forcer le modele a traiter la photo comme un fond immutable.

**Suggestion operationnelle :** Si la photo du lieu montre l'espace de loin (beaucoup de contexte, peu de detail sur la surface de pose), pre-cropper la photo sur la zone d'interet (comptoir, table, etc.) avant de l'envoyer au modele. Plus la surface de pose occupe de pixels dans l'image, moins le modele aura tendance a reinventer le lieu.

### Workflow

```
Photo produit (detouree ou non)
    +
Photo contexte/scene (lifestyle, lieu, table)
    ↓
[OPTIONNEL] Pre-crop de la photo lieu sur la zone de pose
    ↓
Multi-image GPT Images / Gemini (2 inputs)
    ↓
Prompt PRESERVE-first decrivant l'integration
    ↓
Image composite finale
```

### Instruction prompt pour dual-photo (compositing-irl)

```
PRESERVE the background photo exactly as-is. This is a photo compositing task, NOT a scene generation task.

BACKGROUND PHOTO (Image 1) — DO NOT MODIFY:
The [lieu] photo must remain IDENTICAL. Every element must survive untouched:
- [Element 1 du lieu]
- [Element 2 du lieu]
- [Element 3 du lieu]
- [etc. — lister chaque element identifiable]
- Every texture, color, reflection, and shadow in the original photo

TASK: Take the [produit] from Image 2 and PLACE it [position dans la scene].
The result should look like someone placed the product there and took a photo.

PRODUCT PLACEMENT:
- [Position specifique]
- [Echelle realiste]

LIGHTING INTEGRATION:
- The lighting on the product MUST match the existing ambient lighting in the background photo
- Do NOT add any light source that is not already present in the background photo
- Shadows and highlights on the product must be consistent with the scene's existing lighting

SHADOWS:
- Contact shadow beneath the product where it meets [surface]
- Cast shadow consistent with existing shadows in the scene

CRITICAL — DO NOT:
- Reimagine or redesign the [lieu] interior/exterior
- Change colors, textures, or materials of any background element
- Add elements not present in the original photo
- Generate a new environment "inspired by" the photo — USE the actual photo
```

### Avantages vs limites

| Avantage | Limite |
|----------|--------|
| Les deux elements sont 100% reels | Le modele doit matcher 2 eclairages differents |
| Pas de generation de personnages IA | Les mains/interactions sont difficiles si non presentes |
| Resultat plus naturel si les photos matchent | Necessite des photos avec eclairage/angle compatibles |
| Plus rapide (pas de generation de scene) | Moins flexible que la generation complete |

### Conseils pour la prise de vue (anticipation compositing)

Pour faciliter le compositing, les photos source devraient :

| Element | Recommandation |
|---------|----------------|
| Eclairage | Meme direction et temperature dans les 2 photos |
| Angle de vue | Meme perspective (eye-level, 45°, etc.) |
| Fond | Fond neutre pour le produit (facilite le detourage) |
| Resolution | Les 2 photos en haute resolution (min 2000px cote long) |
| Format | RAW si possible (plus de latitude de correction couleur) |

---

## Sources

- Google Imagen 3 documentation officielle (BGSWAP, editing modes)
- Google Gemini 3 Pro Image documentation officielle (multi-image input, fidelity modes)
- OpenAI GPT-Image-1.5 documentation officielle (multi-input, edit mode)
- Principes de compositing VFX (ILM, Weta Digital — adaptes a la photographie)
- Tests empiriques pipeline STRICT IRL (mars 2026)
