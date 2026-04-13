# Brand Shapes Catalog

Catalogue de types de brand shapes avec SVG exemples. Chaque type est un **archetype** —
a adapter, hybrider ou reinventer selon le territoire visuel de la marque.

**REGLE** : ne jamais copier un SVG tel quel. Toujours adapter la geometrie, les proportions,
et l'epaisseur pour qu'ils soient propres a la marque.

---

## Comment choisir

Le bon brand shape a **3 qualites** :

1. **Lien conceptuel** — il evoque quelque chose de la marque (produit, process, valeur)
2. **Impact a petite echelle** — il reste lisible a 30px dans un feed
3. **Declinabilite** — il peut varier (taille, rotation, couleur) sans perdre son identite

### Matrice de selection par positionnement

| Positionnement | Types recommandes | Types a eviter |
|---------------|-------------------|----------------|
| Premium / Dark | Geometric cut, texture grain, lignes architecturales | Sparkles, blobs, stickers |
| Street / Urban | Sticker border, halftone, underlines agressifs | Blobs, cercles fins, serif |
| Craft / Artisanal | Rough border, texture papier, underline organique | Geometric cut, neon, halftone |
| Luxe / Minimal | Lignes fines, espace negatif, monogramme | Drip, sticker, sparkle |
| Fun / Accessible | Sparkle, arrow, blob, couleurs vives | Lignes fines, monochrome, brutalisme |

---

## Archetypes

### 1. Geometric Cut — Forme angulaire qui decoupe

Impact fort, sens directionnel, energie. Adapte au premium et au tech.

```svg
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Coin diagonal — cree une tension visuelle -->
  <polygon points="0,0 200,0 200,140 140,200 0,200" fill="#1a1a1a"/>
</svg>
```

**Lien conceptuel possible** : decoupe, precision, tranchant du produit.
**Variations** : angle du cut (30°, 45°, 60°), position (coin, bord, diagonale entiere).

### 2. Ligne architecturale — Trait fin avec intention

Minimaliste, premium. Un seul trait qui structure le visuel.

```svg
<svg viewBox="0 0 200 4" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="2" x2="200" y2="2" stroke="#C9A96E" stroke-width="1.5"/>
</svg>
```

**Lien conceptuel possible** : precision, separation, structure.
**Variations** : epaisseur, longueur partielle (ne traverse pas tout le visuel), angle leger.

### 3. Frame coins ouverts — Cadre incomplet

Editorial, contemporain. Les coins marques mais le cadre non ferme.

```svg
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M30,10 L10,10 L10,30" fill="none" stroke="#C9A96E" stroke-width="2.5" stroke-linecap="square"/>
  <path d="M170,10 L190,10 L190,30" fill="none" stroke="#C9A96E" stroke-width="2.5" stroke-linecap="square"/>
  <path d="M10,170 L10,190 L30,190" fill="none" stroke="#C9A96E" stroke-width="2.5" stroke-linecap="square"/>
  <path d="M190,170 L190,190 L170,190" fill="none" stroke="#C9A96E" stroke-width="2.5" stroke-linecap="square"/>
</svg>
```

**Lien conceptuel possible** : cadrage, focalisation, mise en valeur du sujet.
**Variations** : epaisseur, rayon d'arrondi, longueur des branches.

### 4. Texture halftone — Trame de points

Retro-moderne, editorial, craft. Cree de la profondeur sans bruit.

```svg
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="ht" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="2.5" fill="#1A1A1A"/>
    </pattern>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="white" stop-opacity="0"/>
      <stop offset="100%" stop-color="white" stop-opacity="1"/>
    </linearGradient>
    <mask id="m"><rect width="100" height="100" fill="url(#fade)"/></mask>
  </defs>
  <rect width="100" height="100" fill="url(#ht)" mask="url(#m)"/>
</svg>
```

**Lien conceptuel possible** : impression, grain, texture d'ingredient.
**Variations** : densite, direction du fondu, forme des points (ronds, carres, losanges).

### 5. Underline expressif — Trait sous texte

Signature, personnalite. Le trait sous le mot-cle qui dit "c'est important".

```svg
<!-- Ondule -->
<svg viewBox="0 0 200 16" xmlns="http://www.w3.org/2000/svg">
  <path d="M0,8 Q25,2 50,8 Q75,14 100,8 Q125,2 150,8 Q175,14 200,8"
        fill="none" stroke="#D4A96A" stroke-width="2.5" stroke-linecap="round"/>
</svg>

<!-- Brush stroke -->
<svg viewBox="0 0 200 12" xmlns="http://www.w3.org/2000/svg">
  <path d="M5,6 Q30,3 60,7 Q100,11 140,5 Q170,2 195,6"
        fill="none" stroke="#D4A96A" stroke-width="3.5" stroke-linecap="round"
        opacity="0.85"/>
</svg>
```

**Lien conceptuel possible** : accentuation, passion, geste humain.
**Variations** : amplitude, epaisseur, regulier vs irregulier.

### 6. Badge / Monogramme — Forme contenante avec texte

Marque d'autorite, certification, signature. Cercle, losange ou carre arrondi.

```svg
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="56" fill="none" stroke="#C9A96E" stroke-width="1.5"/>
  <text x="60" y="68" text-anchor="middle" fill="#C9A96E"
        font-family="serif" font-weight="700" font-size="32">SF</text>
</svg>
```

**Lien conceptuel possible** : sceau de qualite, initiales, certification.
**Variations** : forme contenante (cercle, losange, hexagone), typo, remplissage.

### 7. Sticker border — Contour epais effet autocollant

Street, expressif, jeune. Texte dans un cadre visible.

```svg
<svg viewBox="0 0 200 70" xmlns="http://www.w3.org/2000/svg">
  <rect x="3" y="3" width="194" height="64" rx="10" fill="white"/>
  <rect x="8" y="8" width="184" height="54" rx="7" fill="#1A1A1A"/>
  <text x="100" y="44" text-anchor="middle" fill="#F5C518"
        font-family="sans-serif" font-weight="900" font-size="28">POV :</text>
</svg>
```

### 8. Drip / Coulure — Forme organique qui coule

**ATTENTION** : archetype tres sature dans le food depuis 2020. A utiliser SEULEMENT si :
- Lien conceptuel fort (la marque est litteralement sur la sauce/le chocolat/la glace)
- Execution radicalement differente des versions vues partout

```svg
<svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
  <path d="M0,0 H100 V20 Q85,20 80,35 Q75,48 80,55 Q85,60 80,60 Q75,60 70,55
           Q65,48 70,35 Q75,20 60,20 Q45,20 50,35 Q55,48 50,55 Q45,60 40,60
           Q35,60 40,55 Q45,48 40,35 Q35,20 20,20 Q5,20 0,20 Z"
        fill="#5B2D8C"/>
</svg>
```

### 9. Sparkle / Etoile — Eclat decoratif

**ATTENTION** : archetype tres sature. Associe aux feeds "fun/accessible" generiques.
A utiliser SEULEMENT si :
- Le positionnement est explicitement fun/jeune/accessible
- La forme est suffisamment distincte (pas l'etoile 4 branches standard)

```svg
<!-- Etoile 4 branches (GENERIQUE — modifier la geometrie) -->
<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <path d="M20,1 L22,17 L39,20 L22,23 L20,39 L18,23 L1,20 L18,17 Z" fill="#F5C518"/>
</svg>
```

### 10. Blob organique — Forme libre sans angles

Doux, accessible, lifestyle. Adapte beaute, wellness, lifestyle.

```svg
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M100,20 C140,15 175,40 185,80 C195,120 170,160 130,175
           C90,190 45,175 25,140 C5,105 15,55 50,35 C65,25 80,22 100,20 Z"
        fill="#E8D5C4"/>
</svg>
```

---

## Hybridation

Les meilleurs brand shapes sont souvent des **hybrides** de 2 archetypes :

| Hybride | Resultat | Positionnement |
|---------|----------|---------------|
| Geometric cut + halftone | Diagonale remplie de texture tramee | Premium-editorial |
| Frame coins + ligne architecturale | Cadre partiel avec separateur | Luxe-minimal |
| Underline + texture brush | Trait sous texte avec grain organique | Craft-premium |
| Badge + geometric cut | Monogramme dans une forme angulaire | Premium-autoritaire |
| Sticker + halftone | Autocollant avec texture imprimee | Street-retro |

L'hybridation evite les archetypes purs (satures) tout en restant lisible.
