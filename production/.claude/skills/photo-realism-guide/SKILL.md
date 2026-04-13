---
name: photo-realism-guide
user-invocable: false
description: >
  Référence anti-empreinte IA pour la génération photo-réaliste.
  Ancrage caméra, éclairage, peau réaliste, food photography, packaging,
  imperfections volontaires, mots interdits/obligatoires, post-processing, choix modèle.
  Consulter ce skill lors de toute rédaction ou revue de prompt photo-réaliste —
  lifestyle, food, portrait ou produit. Utilisé automatiquement par image-prompt-engineer
  et les agents strict-irl-*.
---

# Photo Realism Guide

Reference documentaire pour produire des images generees par IA **indiscernables de vrais cliches**. Ce skill encode les meilleures pratiques issues des documentations officielles Gemini, OpenAI, et de sources communautaires specialisees.

**Ce skill est une reference** — il n'execute pas de workflow. Les agents (`strict-irl-prompter`, `strict-irl-compositor`) et le skill `image-prompt-engineer` doivent le consulter pour appliquer ces regles.

---

## 1. Principe fondamental

**Decrire comme un photographe, pas comme un developpeur.**

- Prompt optimal : 100-200 mots en langage **narratif continu**
- PAS de listes de mots-cles separees par des virgules ("keyword salad")
- Raconter la scene comme un brief photo editoriale

> "The model responds best to natural language descriptions of the scene, as if you were briefing a photographer on set." — Google Imagen documentation

---

## 2. Ancrage photographique

L'ancrage photographique force le modele a simuler un rendu optique reel au lieu d'un rendu numerique generique. **5 elements OBLIGATOIRES** dans chaque prompt photo-realiste :

| Element | Role | Valeurs recommandees |
|---------|------|---------------------|
| **Objectif** | Definit la perspective, le bokeh, la distorsion | `50mm f/1.8` (lifestyle plein cadre), `85mm f/2.8` (portrait + food), `35mm f/2` (scene de groupe), `24mm f/2.8` (paysage urbain) |
| **Boitier** | Ancre dans un systeme optique reel | `shot on Canon EOS R5`, `Sony A7R IV`, `Fujifilm X-T5`, `Nikon Z8` |
| **Film stock** | Ajoute grain organique + palette couleur naturelle | `Kodak Portra 400` (polyvalent, chaleur douce), `Fuji Pro 400H` (tons verts), `Kodak Ektar 100` (saturation, paysage), `Ilford HP5` (N&B) |
| **Temperature couleur** | Unifie l'ambiance lumineuse | `daylight white balance 5200-5600K` (exterieur jour), `warm tungsten 3200K` (interieur soir), `shade 7000K` (ombre bleutee) |
| **Profondeur de champ** | Separe sujet du fond, cree du volume | `shallow depth of field, creamy bokeh background`, `f/1.8 selective focus` |

### Pourquoi ca marche

Les modeles IA sont entraines sur des millions de photos etiquetees avec des metadonnees EXIF (objectif, boitier, ISO). Specifier ces parametres active les representations internes de rendu optique reel plutot que le mode "illustration numerique" par defaut.

### Combinaisons optimales par type de scene

| Type de scene | Objectif | Film stock | Temperature |
|---------------|----------|------------|-------------|
| Lifestyle exterieur | 50mm f/1.8 | Kodak Portra 400 | 5200K jour |
| Portrait + food close-up | 85mm f/2.8 | Kodak Portra 400 | Variable |
| Scene de groupe | 35mm f/2 | Kodak Portra 400 | Variable |
| Street / urbain | 35mm f/2 ou 24mm f/2.8 | Kodak Tri-X 400 | Variable |
| Interieur restaurant soir | 50mm f/1.4 | Kodak Portra 800 | 3200K tungsten |
| Food flat-lay | 35mm f/2.8 | Fuji Pro 400H | 5500K neutre |

---

## 3. Eclairage (80% du realisme)

L'eclairage est le facteur le plus determinant. Un eclairage plat et uniforme = signature IA immediate.

### Regles fondamentales

1. **Toujours specifier la DIRECTION** de la lumiere (angle + source)
2. **Toujours specifier la DURETE** (douce/dure → type d'ombres)
3. **Toujours specifier la TEMPERATURE** (chaude/froide/mixte)
4. **Toujours ajouter** : `minor uneven exposure, natural light falloff` — brise la perfection IA

### Tableau eclairage par situation

| Situation | Instruction prompt |
|-----------|-------------------|
| Exterieur jour | `natural sunlight, soft shadows, golden hour side-lighting at [angle]` |
| Exterieur sunset / golden hour | `warm golden backlight creating rim-light on subject, subtle lens flare, long soft shadows` |
| Interieur lumiere naturelle | `natural window side-light at 45 degrees, soft diffused shadows, light gradient across scene` |
| Interieur soir / tungsten | `warm ambient tungsten light, practical light sources visible, slight underexposure in corners` |
| Salle de sport | `harsh overhead fluorescent mixed with natural light from windows, unflattering but authentic` |
| Nuit urbaine | `streetlamp sodium glow, warm-cold contrast, subtle rim light from neon signs` |
| Terrasse jour | `soft overhead daylight with warm bounce from pavement, even illumination, parasol shadows` |
| Bord de mer | `bright high-key natural light, slight overexposure on white surfaces, blue color cast from sky` |

### Pieges eclairage IA

- **Studio ring light** : les modeles IA produisent souvent un eclairage circulaire uniforme visible dans les reflets oculaires → specifier une source directionnelle
- **Ombres absentes** : eclairage trop diffus → forcer `cast shadows visible on [surface]`
- **Double eclairage** : deux sources contradictoires → specifier UNE source principale + UNE source de fill

---

## 4. Anti peau plastique

L'artefact IA le plus detectable sur les humains : peau trop lisse, trop uniforme, sans texture visible.

### Mots INTERDITS (declenchent le lissage IA)

| Interdit | Pourquoi |
|----------|----------|
| ~~smooth skin~~ | Active le mode "beaute retouchee" |
| ~~flawless~~ | Supprime les imperfections |
| ~~perfect skin~~ / ~~perfect complexion~~ | Lisse excessivement |
| ~~beautiful~~ | Terme vague, active l'idealisation |
| ~~stunning~~ | Idem |
| ~~poreless~~ | Supprime les pores visibles |
| ~~airbrushed~~ | Esthetique magazine retouchee |

### Mots OBLIGATOIRES (chaque prompt avec des humains)

```
natural skin texture with visible pores preserved,
uneven skin tone, subtle imperfections,
no airbrushed finish, no plastic appearance
```

### Techniques avancees

| Technique | Instruction | Effet |
|-----------|-------------|-------|
| Subsurface scattering | `subsurface scattering visible on skin, light passing through ear edges and thin skin` | Translucidite naturelle de la peau sous la lumiere |
| Micro-detail | `fine facial hair visible, natural skin creases` | Texture au niveau micro |
| Variations de couleur | `subtle redness on cheeks and nose tip, uneven tan` | Variations de couleur naturelles |
| Age-appropriate | `age-appropriate skin texture, laugh lines, expression marks` | Evite le rendu "mannequin jeune" |

---

## 5. Food Photography (realisme culinaire)

### Proportions

- Taille du burger REALISTE : `~12-14cm diameter, proportional to human hand`
- Les modeles IA surdimensionnent systematiquement la nourriture
- Toujours specifier : `realistic food proportions, not oversized`

### Imperfections appetissantes

La nourriture trop "parfaite" parait artificielle. Specifier :

```
burger slightly tilted as held naturally,
sauce dripping on one side,
cheese melted with natural organic drips,
leaves spilling asymmetrically,
imperfect and appetizing, not perfectly styled
```

### Elements a decrire avec precision

| Element | Pourquoi | Exemple |
|---------|----------|---------|
| Ingredients visibles | Les modeles inventent des ingredients si non specifies | `green mâche leaves, red onion rings, crumbled parmesan fragments` |
| Sauce | Eleve l'appetissance | `subtle drizzle of yellow-orange pepper sauce, visible but not overwhelming` |
| Texture du pain | Distingue le produit | `black sesame bun with golden sesame seeds, slightly glossy surface` |
| Croute de cuisson | Signal de cuisine reelle | `Maillard crust on the beef patty, caramelized edges` |

### Packaging kraft (pour food brands)

```
naturally crumpled kraft paper, used-looking, grease-stained from handling,
not pristine or stiff — natural creases, slight tears at edges,
irregular folds suggesting actual use
```

---

## 6. Posing et regard (humains en scene)

### Regles fondamentales

- Les figurants **NE FIXENT JAMAIS** l'objectif/camera
- Style CANDIDE : photo prise sur le vif, moment naturel capture
- Preferer : regards entre personnes, regard vers la nourriture, regard au loin, profil, 3/4

### Posture dynamique

```
body angled 3/4 to camera, slightly leaning forward,
dynamic interaction — not stiff or posed,
natural body language as if captured mid-moment
```

Le corps doit TOUJOURS avoir un mouvement : pivote, penche, incline. Jamais face camera, bras le long du corps, droit comme un poteau.

### Anti-patterns posing

| Interdit | Alternative |
|----------|-------------|
| Regard camera | `looking at companion`, `looking down at food`, `gazing off-frame` |
| Pose symetrique | `body angled 3/4`, `one shoulder forward` |
| Sourire force | `mid-laugh`, `mid-sentence expression`, `contemplative` |
| Bras raides | `holding food naturally`, `one hand gesturing`, `leaning on elbow` |

---

## 7. Imperfections volontaires (signal de realisme)

Le cerveau humain detecte la perfection comme artificielle. **Minimum 3 imperfections par prompt.**

### Catalogue d'imperfections

| Imperfection | Instruction | Effet |
|-------------|-------------|-------|
| Film grain | `subtle film grain, Kodak Portra 400` | Casse le rendu digital lisse |
| Exposition inegale | `minor uneven exposure` | Brise la perfection d'eclairage |
| Vignettage | `slight lens vignetting` | Bords legerement assombris |
| Motion blur | `natural motion blur on secondary elements` | Mouvement naturel |
| Poussiere | `small dust particles visible in light beam` | Detail atmospherique |
| Highlights clamees | `slightly overblown highlights on reflective surfaces` | Surexposition partielle naturelle |
| Aberration chromatique | `bokeh with slight chromatic aberration` | Defaut optique reel |
| Micro-flou | `slight front-back focus shift` | Imprecision naturelle du focus |

### Combinaisons recommandees

| Type de scene | 3+ imperfections |
|---------------|-----------------|
| Lifestyle exterieur | Film grain + vignettage + highlights clamees |
| Interieur soir | Grain Portra 800 + exposition inegale + motion blur secondaire |
| Sport | Motion blur + grain + aberration chromatique |
| Food close-up | Grain subtil + micro-flou arriere + poussiere lumiere |

---

## 8. Mots-cles de style

### UTILISER (activent le mode editorial/documentaire)

```
documentary-style
photojournalistic authenticity
editorial lifestyle photography
Kodak Portra 400
natural imperfections
candid moment
organic variation
film photography aesthetic
available light
environmental portrait
```

### BANNIR (declenchent le "look IA")

| Mot banni | Pourquoi |
|-----------|----------|
| ~~masterpiece~~ | Active le mode "chef-d'oeuvre digital" |
| ~~incredible detail~~ | Force le sur-detail artificiel |
| ~~8K ultra-detailed~~ | Nettetee et saturation excessives |
| ~~cinematic~~ | Eclairage trop parfait, grade trop fort |
| ~~hyper-realistic~~ | Paradoxalement, rend plus artificiel |
| ~~stunning~~ | Idealisation generique |
| ~~beautiful lighting~~ | Eclairage plat et parfait |
| ~~professional quality~~ | Trop vague, active le lissage |
| ~~ultra HD~~ | Sur-detail, textures plastiques |
| ~~award-winning~~ | Mode "concours photo" artificiel |
| ~~perfect~~ (tout contexte) | Supprime les imperfections naturelles |

---

## 9. Reflets et limitations

Ces elements sont mal geres par les modeles IA actuels. Les **eviter** dans la composition :

| Element | Risque | Strategie |
|---------|--------|-----------|
| Miroirs | Reflets incoherents, personnes deformees | Cadrer hors-champ ou `mirrors blurred in deep background, not reflecting subject` |
| Lunettes de soleil | Reflets incoherents dans les verres | Eviter ou placer sur le front/dans la main |
| Flaques d'eau | Reflets incorrects | Eviter les sols mouilles |
| Vitres de voiture | Reflets multiples incoherents | Cadrer pour minimiser la surface vitree |
| Chrome / metal poli | Sur-reflets, formes incorrectes | Limiter les surfaces metalliques tres polies |
| Doigts / mains | Anatomie incorrecte (extra doigts, angles impossibles) | Specifier `five fingers per hand, natural hand anatomy` et limiter les mains visibles |
| Texte / ecritures | Lettres inventees, mots incoherents | Ne JAMAIS generer de texte dans l'image (2-step workflow pour les logos) |

---

## 10. Post-processing recommande

Apres generation, ces ajustements en post-processing renforcent le realisme :

| Etape | Outil | Action |
|-------|-------|--------|
| Grain analogique | Lightroom / Photoshop | Ajouter grain 10-20% taille 25-35 si insuffisant |
| Vignettage | Lightroom | -15 a -25 amount post-crop |
| Aberration chromatique | Photoshop | Decaler legerement les canaux R/B de 0.5-1px aux bords |
| Micro-contraste | Lightroom Clarity | +5 a +15 (pas plus, sinon HDR) |
| Compression JPEG | Export | Exporter en JPEG 85-92% — le 100% est "trop propre" |
| Metadata EXIF | ExifTool | Optionnel : injecter des metadonnees camera coherentes |

---

## 11. Choix du modele

| Critere | Gemini 3 Pro Image | GPT Images (gpt-image-1.5) |
|---------|-------------------|---------------------------|
| Photo-realisme brut | Excellent (meilleur rendu) | Tres bon |
| Texte dans l'image | Faible (texte deforme) | Excellent (texte lisible) |
| Multi-image / compositing | Jusqu'a 14 refs (6 high-fidelity) | Jusqu'a 16 inputs avec `input_fidelity="high"` |
| Controle style | Bon via film stock + specs | Bon via instructions detaillees |
| Resolution | 4K natif | 4K natif |
| Food photography | Excellent | Bon |
| Peau humaine | Tres bon (avec anti-patterns) | Bon (tendance lissage) |

### Decision rapide

- **Photo sans texte** → Gemini (Nano Banana Pro)
- **Photo avec texte overlay** → GPT Images
- **Compositing produit reel** → Gemini multi-image (cf. skill `photo-compositor`)
- **Logo/branding** → 2-step : Gemini generation + Gemini editing (cf. agents `strict-irl-*`)

---

## 12. Template prompt type (photo-realiste)

Structure narrative optimale en 7-8 blocs :

```
[1. Type de photographie]
Documentary-style lifestyle photograph.

[2. Scene et decor]
Description du lieu, heure, ambiance, details atmospheriques.

[3. Eclairage]
Direction, source, temperature, durete, effets sur les textures.

[4. Sujet(s)]
Description physique, tenue, posture dynamique, expression candide.
"natural skin texture with visible pores preserved, uneven skin tone"

[5. Objet principal]
Description precise avec ingredients/details, proportions realistes.

[6. Accessoires / packaging]
Elements secondaires, branding (vierge si 2-step logo workflow).

[7. Technique photo + imperfections]
Boitier, objectif, film stock, profondeur de champ.
Minimum 3 imperfections (grain, vignettage, aberration).
Format (4:5 portrait, 16:9 paysage, 1:1 carre).

[8. Anti-patterns / exclusions]
"NOT looking at camera. No oversized [X]. No plastic skin.
No studio-perfect lighting. No symmetrical composition."
```

---

## Sources

- Google Imagen / Gemini documentation officielle (image generation best practices)
- OpenAI GPT-Image documentation officielle (prompt engineering guide)
- Communaute prompt engineering (Reddit r/StableDiffusion, r/midjourney — techniques transposables)
- Tests empiriques sur le pipeline STRICT IRL (mars 2026)
