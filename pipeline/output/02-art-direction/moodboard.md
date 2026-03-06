# Moodboard

<!-- Derive de : Carte de Derivation (Phase 1.2), 01-brand/00-platform.md, 01-brand/colors.md -->

## Carte de Derivation Brand > Visuel

| Composant Brand | Source | Expression Visuelle Attendue |
|-----------------|--------|------------------------------|
| Archetype Magician | 00-platform.md | Contraste dramatique noir/or, revelations progressives au scroll, eclairage qui sublime les produits comme des objets precieux, transitions fluides qui "transforment" la perception |
| Archetype Hero | 00-platform.md | Structure solide et maitrisee, lignes angulaires, symetrie dominante, typographie bold assertive, presence visuelle imposante |
| Valeur Transparence | 00-platform.md | Espaces ouverts et lisibles, grilles claires, contenu accessible sans friction, pas de modal intrusif ni de layout cryptique |
| Valeur Plaisir Deculpabilise | 00-platform.md | Food porn 7/10 (images gourmandes mais pas grasses), couleurs chaudes (or, ambre), sensation d'abondance maitrisee, textures appetissantes |
| Valeur Ancrage Local | 00-platform.md | Textures naturelles evoquees (bois, grain), noms des artisans visibles et mis en valeur, authenticite dans les visuels |
| Valeur Convivialite Brute | 00-platform.md | Spacing aere et accueillant, radius doux sur les cards, typographie body accessible, hierarchie claire sans elitisme |
| Palette Cuivre Braise + Grenat Fume | colors.md | Cuivre en accent (CTAs, highlights, bordures actives — max 10-15% de surface), Grenat Fume discret (accents craft/artisans), Feuille Grillee (badges nutrition), Charbon dominant (fond sombre premium 80%+) |
| Space Grotesk + DM Sans | typography.md | Space Grotesk = titres angulaires bold (precision, impact), DM Sans = body geometrique et lisible (confort de lecture sans personnalite envahissante) |
| Registre Direct/Complice | tone.md | Animations directes sans flourish inutile, micro-interactions engageantes, rythme de lecture rapide, pas d'attente artificielle |
| Promesse Transformation | 00-platform.md | Storytelling visuel progressif : reveler au scroll que ce burger est different, culminer sur les preuves (artisans, chaleur pulsee, cuisine ouverte) |

---

## Reference 1 : Maquette Hero Burger

- **Source** : `input/references/screenshots/ref1-hero.png` (maquette)
- **Secteur** : Fast-food / Design UI
- **Ce qu'on retient** :
  - Composition split hero : produit geant a droite (~55% largeur), texte a gauche — impact visuel immediat, le burger EST le hero
  - Badges nutritionnels circulaires (calories, graisses, proteines) — element cle a adapter pour StrictFood
  - Navigation clean, horizontale, structuree (~60px hauteur)
  - Hierarchie typographique nette : H1 massif > sous-titre > prix > CTA
- **Mesures concretes** :
  - Taille H1 : ~72-80px, weight 700+
  - Image produit : ~50-55% de la largeur viewport
  - Espacement sections : ~80px
  - Badges : ~60px diametre, circulaires
  - CTA : padding ~16px 32px, radius ~8px
  - Navigation : ~60px hauteur, items espaces ~32px
- **Coherence avec notre archetype Magician** : Le produit est revele comme un objet precieux — la taille dominante du burger cree un effet de "transformation" (ce n'est plus un simple burger, c'est LE burger). Le split layout permet la revelation progressive : texte (promesse) puis visuel (preuve).
- **A adapter pour StrictFood** :
  - Transposer en dark mode (fond Charbon oklch(0.14 0.008 60)), remplacer jaune/vert par Cuivre Braise
  - Conserver le split hero mais avec produit encore plus impose (60%+ de largeur)
  - Adapter les badges nutritionnels au style dark premium (fond Fumee, texte Creme, accent Cuivre Braise)

## Reference 2 : Maquette Homepage Pizza & Burger

- **Source** : `input/references/screenshots/ref2-homepage.png` (maquette)
- **Secteur** : Fast-food Premium / Design UI
- **Ce qu'on retient** :
  - Fond sombre dominant (~#1A1A1A) avec eclairage dramatique sur les produits — parfaitement aligne avec la DA "Dark Food Premium"
  - Typographie extremement bold et expressive (weight 800-900, condensed) — impact visuel fort
  - Trainee de peinture/splash organique (orange) en overlay — texture dynamique qui casse la rigidite de la grille
  - Produits eclaires comme en studio photo : fond noir, lumiere chaude laterale, ombres prononcees
  - Sections empilees avec rythme clair et decoupe nette
- **Mesures concretes** :
  - Taille H1 : ~96px+, extra bold, condensed
  - Fond dominant : dark (#1A1A1A range)
  - Cards produit : ~280-320px largeur, produit eclaire sur fond sombre
  - Espacement sections : ~100-120px
  - Texture overlay : brush stroke organique, opacite ~60-70%
- **Coherence avec notre archetype Magician** : L'eclairage dramatique transforme des ingredients ordinaires en objets desirables. Le fond sombre cree un "theatre" ou le produit est la star — exactement le registre "mineral, contraste, eclairage dramatique" defini dans la plateforme.
- **A adapter pour StrictFood** :
  - Conserver le fond sombre et l'eclairage dramatique produit
  - Remplacer l'orange/rouge par des nuances Cuivre Braise pour les accents et textures
  - Reduire la densite visuelle (VISUAL_DENSITY 3 vs la ref qui est plus chargee) — plus d'espace negatif
  - Garder le rythme sectionnel clair mais avec des transitions plus fluides (MOTION_INTENSITY 6)

## Reference 3 : Gymshark (univers de marque)

- **Source** : Univers de marque cite par le client (Q13)
- **Secteur** : Sportswear premium
- **Ce qu'on retient** :
  - Identite sportive premium : noir dominant, contraste fort noir/blanc, accents couleur chirurgicaux
  - Typographie bold, sans-serif geometrique, titres en uppercase avec letter-spacing large
  - Photos lifestyle aspirationnelles : eclairage studio, arriere-plans neutres/sombres, sujets mis en valeur
  - Layout clean et structure : grilles rigoureuses, whitespace genereux, hierarchie claire
  - Navigation minimaliste, pas de surplus decoratif
- **Mesures concretes** (estimees sur base de connaissance de la marque) :
  - Fond : noir pur a noir profond, accents blancs
  - Typographie titres : 48-72px, bold 700, sans-serif geometrique
  - Espacement sections : 120-160px
  - Grille : 12 colonnes, gap 24-32px
  - CTA : rectangulaire, minimal, fond plein noir ou blanc
- **Coherence avec notre archetype Hero** : Gymshark incarne la discipline, la determination, le depassement — valeurs du Hero secondaire de StrictFood. L'approche "less is more" avec un contraste maximal traduit la maitrise et la rigueur ("Strict").
- **A adapter pour StrictFood** :
  - Reprendre le contraste fort et le whitespace genereux
  - Remplacer le noir pur par Charbon chaud (oklch 0.14) et le blanc par Creme (oklch 0.96)
  - Apporter la chaleur absente chez Gymshark via l'accent Cuivre Braise et les textures food

## Reference 4 : Mercedes G63 (univers de marque)

- **Source** : Univers de marque cite par le client (Q13)
- **Secteur** : Automobile de luxe
- **Ce qu'on retient** :
  - Luxe brut et robustesse : lignes angulaires, surfaces mates, absence de decoration superflue
  - Noir mat dominant — le G63 est iconique en noir mat, "stealth wealth"
  - Statut sans ostentation : pas de bling, la qualite se voit dans les materiaux et la construction, pas dans les ornements
  - Forme carree/angulaire : le G63 est un cube sur roues — geometrie affirmee, pas de rondeurs inutiles
  - Eclairage : les visuels officiels utilisent un eclairage bas, lateral, qui sculpte les volumes
- **Mesures concretes** (estimees sur base des visuels de la marque) :
  - Radius : quasi nul sur les formes principales (0-4px) — geometrie carree assumee
  - Palette : noir mat + chrome subtil (equivalent de notre Cuivre Braise comme accent metallique)
  - Typographie : condensed, uppercase, mechaniste
  - Espace negatif : genereux, le vehicule "respire" dans le cadre
  - Textures : metal brosse, surfaces mates, pas de brillance excessive
- **Coherence avec notre archetype Magician** : Le G63 transforme un utilitaire militaire en objet de luxe — meme logique que StrictFood qui transforme le fast-food en acte de soin. Le "stealth wealth" (qualite invisible au premier regard) correspond a la promesse de StrictFood : ce qui semble etre un simple burger est en realite un produit d'exception.
- **A adapter pour StrictFood** :
  - Reprendre le radius angulaire/faible (8-12px max sur les cards, 0px sur certains elements structurels)
  - L'accent metallique (chrome) inspire l'usage de l'Cuivre Braise comme accent premium sobre
  - Adapter les surfaces mates en backgrounds Charbon/Ebene avec texture grain subtile
  - Garder l'eclairage bas/lateral pour les visuels food (coherent avec ref2)

---

## Patterns Communs

| Pattern | Frequence | Decision | Justification (lien brand) |
|---------|-----------|----------|---------------------------|
| Fond sombre dominant | 3/4 (ref2, Gymshark, G63) | Adopter | DA "Dark Food Premium", archetype Magician (theatre sombre) |
| Produit hero surdimensionne | 2/4 (ref1, ref2) | Adopter | Value Plaisir Deculpabilise (food porn 7/10 — le produit est la star) |
| Typographie bold/massive | 4/4 | Adopter | Archetype Hero (assertivite), registre "anguleux, confiant" |
| Eclairage dramatique lateral | 3/4 (ref2, Gymshark, G63) | Adopter | Archetype Magician (revelation, transformation) |
| Split hero (texte + produit) | 1/4 (ref1) | Adopter | Ref1 + coherent avec DESIGN_VARIANCE 5 (hero non-centre) |
| Whitespace genereux | 3/4 (Gymshark, G63, ref1) | Adopter | VISUAL_DENSITY 3, valeur Convivialite (aere = accueillant) |
| Badges/indicateurs nutritionnels | 1/4 (ref1) | Adopter | Positionnement healthy, persona Lea (sportive), transparence |
| Grille rigoureuse | 4/4 | Adopter | Archetype Hero (structure, maitrise), DESIGN_VARIANCE 5 |
| Texture organique overlay | 1/4 (ref2) | Adapter avec parcimonie | Matieres "bois, floral" citees par le client — subtil, pas dominant |
| Radius angulaire/faible | 2/4 (G63, Gymshark) | Adopter | G63 (geometrie carree), "Strict" = rigueur, archetype Hero |
| Video hero autoplay | 0/4 | Rejeter | Performance mobile (Lighthouse > 90), pas de contenu video disponible |
| Couleurs vives/neon | 1/4 (ref1 en jaune/vert) | Rejeter | colors.md exclut explicitement les couleurs vives, palette chaude sourdine |
| Decorations excessives | 0/4 | Rejeter | G63 "stealth wealth", valeur Transparence (simplicite), economie visuelle |
| Uppercase generalise | 1/4 (Gymshark) | Limiter | typography.md : uppercase reserve aux labels/badges, interdit sur H1/H2 |

---

## Synthese Visuelle

### L'equation StrictFood

```
StrictFood = Dark Theater + Craft Premium + Athletic Precision

Dark Theater   = Fond Charbon oklch(0.14) + eclairage dramatique lateral sur produits + espace negatif genereux
Craft Premium  = Accent Cuivre Braise oklch(0.67 0.15 68) + Grenat Fume oklch(0.42 0.10 22) + textures brutes (grain, bois) + noms d'artisans visibles
Athletic Precision = Space Grotesk bold + grille rigoureuse + radius angulaire 8-12px + animations directes
```

### Mots-cles visuels

- **Mineral** (Surfaces mates Charbon/Ebene, absence de brillance, textures brutes grain subtil)
- **Theatral** (Eclairage dramatique lateral sur les produits, fond sombre = scene, burger = acteur principal)
- **Anguleux** (Radius 8-12px, Space Grotesk, lignes nettes, grille carree, inspiration G63)
- **Chaleureux** (Cuivre Braise comme accent dore/ambre, sous-teintes chaudes dans les neutres, textures bois)
- **Maitrise** (Whitespace genereux controle, hierarchie typographique stricte, pas de decoration superflue)
- **Appetissant** (Food porn 7/10, produits surdimensionnes, couleurs chaudes caramelisation)
