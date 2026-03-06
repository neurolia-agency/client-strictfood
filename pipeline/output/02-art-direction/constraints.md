# Contraintes Design

<!-- Derive de : 00-platform.md (archetype Magician/Hero + valeurs), moodboard.md (patterns adoptes/rejetes), 01-brand/colors.md -->

## ON FAIT (obligatoire)

### Couleurs & Identite

1. **Fond Charbon dominant** : oklch(0.14 0.008 60) comme background global, Ebene oklch(0.18) pour sections alternees
   - Justification : DA "Dark Food Premium", archetype Magician (theatre sombre), moodboard ref2 + G63

2. **Cuivre Braise en accent uniquement** : oklch(0.67 0.15 68) reserve aux CTAs, bordures actives, highlights — max 10-15% de surface totale
   - Justification : colors.md ("ne s'utilise jamais en aplat de background large"), G63 (chrome subtil = accent premium sobre)

3. **Neutres chauds exclusivement** : Toute la gamme texte en sous-teintes chaudes (hue 60-85°), jamais de gris pur (hue 0°)
   - Justification : colors.md (harmonie split-complementaire chaud), matieres "bois" citees par le client

### Typographie

4. **Oswald pour les H1, Space Grotesk pour les H2-H5** : Oswald weight 700 sur H1 (via `--font-display`), Space Grotesk weight 600-700 sur H2-H5, letter-spacing -0.02em sur H2
   - Justification : typography.md (angularite + precision = Magician + Hero), moodboard (typo bold commune aux 4 refs), Oswald apporte l'impact condensed sur les titres principaux

5. **DM Sans pour tout le body** : Weight 400, line-height 1.6 minimum
   - Justification : typography.md (confort de lecture, neutre-chaud), WCAG AA (lisibilite)

6. **Taille minimum body 16px mobile** : Jamais en dessous, meme pour les sous-elements
   - Justification : typography.md (eviter zoom iOS), accessibilite WCAG AA

### Formes & Espace

7. **Espacement sections 160px desktop / 96px mobile minimum** : Jamais en dessous de 120px / 80px
   - Justification : VISUAL_DENSITY 3 (aere et premium), Gymshark (whitespace genereux), archetype Magician (laisser respirer les visuels)

8. **Radius 8-12px sur cards et boutons** : Angulaire mais pas coupant — coherent G63 (geometrie affirmee)
   - Justification : G63 (formes angulaires, "cube sur roues"), moodboard pattern "radius angulaire/faible"

9. **Produit hero surdimensionne** : Dans le hero, l'image produit occupe au minimum 50% de la largeur viewport (desktop)
   - Justification : Moodboard ref1 + ref2 (produit dominant), food porn 7/10, archetype Magician (le produit est la revelation)

### Interactions

10. **Easing unique pour tout le projet** : cubic-bezier(0.22, 1, 0.36, 1) — pas de linear, pas de ease default
    - Justification : Registre Magician (transitions fluides, "revelations"), coherence visuelle globale

11. **Apparitions au scroll** : Tous les elements de contenu apparaissent via translateY(24px) + opacity, stagger 100ms entre siblings
    - Justification : Archetype Magician (revelation progressive), MOTION_INTENSITY 6

## ON NE FAIT PAS (interdit)

### Couleurs

1. **Pas de couleurs vives saturees** : Pas de vert pomme, rouge vif, jaune citron, bleu electrique, violet
   - Pourquoi : colors.md exclut explicitement bleu/violet (tech aesthetic), vert vif (health food generique), rouge vif (fast-food classique)

2. **Pas de noir pur #000000** : Toujours utiliser Charbon oklch(0.14 0.008 60) ou plus clair
   - Pourquoi : colors.md (off-black chaud), frontend-design2 Section 7 (AI tell)

3. **Pas de gradient colore** : Pas de degrades arc-en-ciel, pas de gradient de l'accent vers une autre teinte
   - Pourquoi : G63 (surfaces mates unies), economie visuelle, le gradient est un AI tell (Section 7)

### Typographie

4. **Pas de uppercase sur H1/H2** : Reserve aux labels, badges, micro-copy (font-size < 14px)
   - Pourquoi : typography.md ("trop agressif pour une marque conviviale"), tone.md (chaleureux, pas criard)

5. **Pas de polices decoratives additionnelles** : Oswald (H1) + Space Grotesk (H2-H5) + DM Sans (body), pas de script, pas de serif, pas de monospace pour le contenu
   - Pourquoi : Coherence typographique, G63 (sobriete), le mix de polices est un AI tell

6. **Pas de texte gris clair sur fond gris** : Contraste minimum 4.5:1 pour le texte, 3:1 pour les elements decoratifs
   - Pourquoi : WCAG AA obligatoire, valeur Transparence (tout est lisible)

### Formes & Layout

7. **Pas de hero centre** : Le hero utilise un layout split (texte + produit) ou asymetrique, jamais un titre centre avec image en dessous
   - Pourquoi : DESIGN_VARIANCE 5 (> 4 = hero centre BANNI par frontend-design2 Rule 3), moodboard ref1 (split hero valide)

8. **Pas de cards 3 colonnes identiques** : Eviter la grille 3 cards en ligne classique (AI tell majeur)
   - Pourquoi : frontend-design2 Section 7, DESIGN_VARIANCE 5 demande un layout plus inventif

9. **Pas de sections avec moins de 80px d'espacement vertical** : Meme sur mobile
   - Pourquoi : VISUAL_DENSITY 3 (premium = espace), le contenu compresse donne un feeling "template WordPress"

### Interactions

10. **Pas d'animations de plus de 800ms** : Aucune transition ne depasse 800ms
    - Pourquoi : Performance mobile (Lighthouse > 90), registre Direct du tone.md, l'attente tue la convivialite

11. **Pas de parallax lourd** : Pas de parallax background-attachment: fixed ou de scroll hijack complet
    - Pourquoi : Performance mobile, accessibilite (motion sensitivity), MOTION_INTENSITY 6 (pas 9-10)

### Contenu

12. **Pas de lorem ipsum ou placeholder generique** : Tout texte visible utilise les contenus de 01-brand/ ou un placeholder realiste labelle [CONTENU CLIENT REQUIS]
    - Pourquoi : Valeur Transparence (authenticite), le placeholder generique detruit la credibilite de la maquette

## Exceptions Autorisees

| Exception | Contexte | Condition |
|-----------|----------|-----------|
| Rouge erreur oklch(0.52 0.16 25) | Formulaires | Uniquement pour erreurs de validation |
| Texte 14px | Labels formulaire, captions | Minimum absolu 14px, jamais moins |
| Radius 0px | Lignes separatrices | Uniquement lignes 1px horizontales |
| Uppercase | Badges, tags, labels < 14px | Avec letter-spacing 0.08em obligatoire |
| Fond blanc/clair | Section inversee si besoin (ex: partenaires) | Maximum 1 section par page, fond Creme oklch(0.96) |
| Grenat Fume en accent | Cards artisans, separateurs decoratifs, hover states craft | Usage discret, jamais dominant |
| Feuille Grillee en accent | Badges "sain", indicateurs nutritionnels | Usage tres parcimonieux, badges uniquement |

## Compatibilite frontend-design2

### Regles du skill integrees

- [x] Rule 1 (Typo) : Space Grotesk ≠ Inter, distinctive, justifiee (archetype Hero/Magician)
- [x] Rule 2 (Color) : 1 accent principal (Cuivre Braise), saturation C=0.15 < 0.80, LILA BAN respecte (pas de purple/blue)
- [x] Rule 3 (Layout) : DESIGN_VARIANCE 5 > 4 → hero centre BANNI ✅
- [x] Rule 4 (Cards) : VISUAL_DENSITY 3 < 7 → cards autorisees avec style defini dans ui-kit.md
- [x] Rule 5 (States) : Loading, empty, error states documentes dans ui-kit.md
- [x] Section 7 (100 AI Tells) : Anti-patterns critiques listes dans project-dials.md

### Conflits identifies

| Regle skill | Contrainte projet | Resolution |
|-------------|-------------------|------------|
| Defaults skill (VARIANCE 8, MOTION 6, DENSITY 4) | Projet (VARIANCE 5, MOTION 6, DENSITY 3) | project-dials.md overrides : VARIANCE 5 (Hero = structure), DENSITY 3 (premium aere) |

## Test Rapide "Est-ce StrictFood ?"

- [ ] Le fond est sombre (Charbon/Ebene) ?
- [ ] L'accent est Cuivre Braise et represente moins de 15% de la surface ?
- [ ] Le produit food est surdimensionne et eclaire dramatiquement ?
- [ ] La typographie H1 est Oswald bold, H2-H5 Space Grotesk ?
- [ ] L'espacement entre sections est >= 120px desktop ?
- [ ] Le hero n'est PAS centre ?
- [ ] Les animations utilisent cubic-bezier(0.22, 1, 0.36, 1) ?
- [ ] Le texte est en Creme chaud sur fond sombre (pas de blanc pur ni gris froid) ?

> 8/8 = Conforme | 6-7/8 = Revoir | < 6/8 = Refaire
