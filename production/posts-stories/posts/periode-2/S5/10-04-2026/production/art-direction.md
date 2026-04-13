# Art Direction — Post S5-P2 (10-04-2026)

## Traitement : MASQUE (feed identity system)

> Premier post masque du feed. Le texte "53G" en Oswald Bold geant revele une macro photo du STRICT Poulet a travers les lettres. Le fond ambre encadre les lettres.

---

## Production en 2 phases

| Phase | Outil | Output |
|-------|-------|--------|
| **Phase 1** — Macro photo produit | Gemini 2K (full-ia) | Photo macro STRICT Poulet (4:5, fond neutre sombre) |
| **Phase 2** — Compositing masque | HTML/CSS + Puppeteer | Visuel final 1080x1350 (texte mask + fond ambre) |

---

## Visuel 1/1 — Masque "53G" STRICT Poulet

**Type** : Compositing (photo IA + masque typographique CSS)
**Dimensions** : 4:5 (1080x1350)

### Recette / Produit

STRICT Poulet — Burger pain noir sesame :
- Pain noir au sesame (base + chapeau) : bun rond noir, surface encre texturee, graines de sesame dorees irregulieres, micro-fissures, imperfections artisanales
- Poulet roti : en lamelles — tranches fines irregulieres, croute Maillard doree uniforme (chaleur pulsee, zero huile). PAS de grill marks
- Parmesan : en miettes — petits fragments irreguliers, poudreux. PAS copeaux, PAS lamelles
- Oignons rouges : en tranches fines — rondelles avec anneaux concentriques visibles
- Mache : petites feuilles rondes vertes en bouquet (3-5 feuilles). PAS roquette, PAS laitue
- Sauce poivron : filet jaune-orange subtil, fin et irregulier. PAS rouge, PAS epaisse

### Phase 1 — Direction photo macro (pour Gemini)

#### Composition
- **Cadrage** : Macro extreme — le burger remplit 100% du cadre, zoome a ~220%+ de sa taille reelle
- **Angle de prise de vue** : 3/4 face (45°) — pour voir a la fois le bun du dessus, les couches interieures (lamelles poulet, parmesan, mache) et une partie du bun de base
- **Sujet principal** : Le STRICT Poulet entier, UN SEUL burger continu qui sera visible a travers les 3 caracteres "5", "3", "G"
- **Elements secondaires** : Aucun — le burger seul, pas de props, pas de surface visible, pas d'accessoires
- **Elements absents** : Pas de mains, pas de surface/table, pas de fond contextuel, pas de props. Fond sombre neutre (charbon mat) pour faciliter le masking CSS
- **Imperfections** : Miettes de parmesan tombees sur le bun, feuille de mache legerement depassant, une graine de sesame isolee, asymetrie naturelle du bun

#### Eclairage
- **Type** : Studio directionnel dramatique
- **Direction** : Laterale droite (3 heures) — pour sculpter les couches et reveler les textures
- **Qualite** : Dur et contraste — chaque lamelle de poulet, chaque miette de parmesan, chaque graine de sesame doit avoir des ombres nettes
- **Ombres** : Marquees et graphiques — les creux entre les ingredients sont sombres, les aretes sont lumineuses
- **Temperature** : Chaud dore — lumiere qui fait briller la croute Maillard et les graines de sesame

#### Couleurs & Mood
- **Palette dominante** : Noir charbon (bun) + dore chaud (croute poulet, sesame, parmesan) + vert vif (mache)
- **Accent** : L'or des lamelles poulet croustillantes et la brillance du parmesan — ces tons dores seront magnifies par le fond ambre du masque
- **Ambiance** : Visceral et appetissant — la texture donne faim, on veut toucher
- **Saturation** : Elevee (+15-20%) — les couleurs doivent "eclater" a travers les lettres du masque. La photo sera filtree avec `contrast(1.15) saturate(1.2) brightness(1.1)` dans le CSS

#### Texture & Details sensoriels
- **Textures a mettre en valeur** : Croute Maillard doree et craquante des lamelles poulet (zones de caramelisation), graines de sesame irregulieres sur bun noir encre, miettes de parmesan granuleuses et poudreux, feuilles de mache luisantes, sauce poivron jaune-orange en filet fin
- **Indices de temperature** : Leger halo de vapeur au niveau des lamelles poulet, brillance humide de la sauce
- **Mouvement** : Statique — la macro fige l'instant, revele les micro-details

#### Contraintes generatives (Gemini)
- Fond : charbon mat uniforme (facilitera le background-clip CSS)
- PAS de texte, PAS de logo, PAS d'overlay
- Resolution : 2K
- Le burger DOIT etre cadre pour que sa matiere remplisse les lettres "53G" de maniere appetissante — ce qui veut dire qu'on doit voir principalement les couches centrales (poulet, parmesan, sauce, mache) avec le bun noir sesame en haut et en bas
- La zone centrale du cadre (ou les lettres seront) doit etre la plus riche en textures et couleurs

---

### Phase 2 — Direction masque (compositing CSS)

#### Texte masque
- **Contenu** : `53G`
- **Typographie** : Oswald Bold (700), 280px, letter-spacing 12px, uppercase
- **Technique** : `background-clip: text` — la photo macro remplit les lettres
- **Position** : Centre du cadre (flex center)

#### Fond
- **Couleur** : Ambre Incandescente `#FABA43` (warm yellow-gold)
- **Texture** : Gradient radial subtil (ombre charbon 6% a 40/60%, highlight creme 8% a 70/30%) — le meme que le mock `mock-masque-v3.html`

#### Filtres sur la photo (dans le texte)
- `contrast(1.15)` — renforcer les details
- `saturate(1.2)` — couleurs plus vives
- `brightness(1.1)` — compenser la taille reduite (les lettres sont plus petites que le full-frame)

#### Tagline
- **Position** : Bottom center, 80px du bas
- **Texte** : `Le cheat meal <em>qui n'en est pas un</em>`
- **Typo** : Space Grotesk 700, 22px
- **Couleurs** : Blanc `#fff` / emphasis en charbon `#1a1714`

#### Grain
- Overlay grain SVG turbulence, opacity 0.04, mix-blend-mode overlay

---

### Intention & Fonction

- **Ce que le viewer doit ressentir** : Intrigue d'abord ("53G de quoi ?"), puis surprise ("c'est un burger, pas un supplement !"), puis envie (la texture appetissante visible a travers les lettres)
- **Rythme dans le feed** : Ce post casse le rythme visuel — les posts precedents sont des photos pures ou des knockout-bands. Le masque est un traitement rare (~10% du feed) qui cree un moment d'arret
- **Action souhaitee** : S'arreter, lire "53G", comprendre que c'est un burger, lire la caption pour decouvrir les details nutritionnels

---

## Template HTML de reference

Le mock existant `production/_tests/brand-visual-system/mock-masque-v3.html` sert de base. Adapter :
1. Remplacer le texte `STRICT BOEUF` par `53G`
2. Remplacer l'image de fond par la macro generee du STRICT Poulet
3. Ajuster le `background-size` et `background-position` pour centrer les couches les plus appetissantes dans les lettres
4. Conserver le fond ambre, le grain, et la tagline
