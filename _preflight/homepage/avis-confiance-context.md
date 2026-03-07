## Avis & Confiance — Context Block

### Dials Section
DESIGN_VARIANCE: 4 | MOTION_INTENSITY: 5 | VISUAL_DENSITY: 4
Source : project-dials.md > Avis & Confiance (override spécifique section)

### Contenu Résolu
- Titre : "Avis & Confiance" (de positioning.md > messages, terme déduit du contexte) — typographie "titre section" ← visual-vocabulary.md > typographie > titre section
- Data Point 1 : "74+ avis Google" — typographie "typo massive" ← homepage.md > Section 5 + about.md > chiffres cles
- Data Point 2 : ⚠️ NON RÉSOLU : [NOTE MOYENNE CLIENT REQUISE] — typographie "typo massive" ← homepage.md indique placeholder
- Data Point 3 : "0% huile cuisson ou 100% artisanal" — typographie "typo massive" ← homepage.md > Section 5
- Temoignages : ⚠️ NON RÉSOLU : [AVIS GOOGLE CLIENT REQUIS — 2-3 extraits reels] ← homepage.md indique données manquantes
- Lien : "Google Business Profile" → URL lien externe (Google Business) ← homepage.md > Section 5

### Émotion
- Primaire : Validation sociale ("d'autres ont essayé et aimé") ← emotion-map.md > Homepage > Avis & Confiance
- Secondaire : Envie de rejoindre la communauté ← emotion-map.md > Homepage > Avis & Confiance
- Tension : Data impactants (chiffres massifs, autorité Cuivre Braise) vs temoignages personnels intimes (voix humaines, proximité) ← emotion-map.md

### Layout
Triptyque horizontal de 3 data points en typographie massive, espacés généreusement (gap 64px = clamp). En dessous : 2-3 cards temoignages en layout décalé (pas alignés sur la même baseline — asymétrie légère). Lien Google Business en fin de section.
- Desktop : Triptyque horizontal 3 colonnes équilibrées (1fr 1fr 1fr) avec gap 64px (gap composant = 2rem × 2). Temoignages en grille asymétrique (2 + 1 ou 3 en decalage). Lien centré ou aligné bas.
- Mobile (< 640px) : Data points en stack vertical, temoignages en 1 colonne, lien centré.
← homepage.md > Section 5 > Layout (lignes 153)

### Tokens Actifs
- Fond : var(--color-charbon) = oklch(0.14 0.008 60) ← visual-vocabulary.md > couleurs > fond principal
- Texte principal (chiffres) : var(--color-creme) = oklch(0.96 0.012 85) — "typo massive" sur fond sombre ← visual-vocabulary.md > couleurs > texte principal
- Texte temoignages : var(--color-sable) = oklch(0.73 0.025 75) — corps confortable ← visual-vocabulary.md > couleurs > texte secondaire
- Accent (si applicable) : var(--color-cuivre) = oklch(0.67 0.15 68) ← visual-vocabulary.md > couleurs > accent signature
- Typographie massive (data) : clamp(2.5rem, 5vw + 1rem, 4.5rem) / weight 700 / Oswald ← visual-vocabulary.md > typographie > typo massive
- Typographie titre section : clamp(2rem, 3.5vw + 0.5rem, 3rem) / weight 700 / Space Grotesk ← visual-vocabulary.md > typographie > titre section
- Transition apparition : 600ms cubic-bezier(0.22, 1, 0.36, 1) (easing standard) ← visual-vocabulary.md > transitions > apparition douce
- Stagger entre data points : 100ms ← visual-vocabulary.md > transitions > apparition decalee + project-dials.md > Arsenal Créatif

### Composants UI Kit
- Cards Temoignages : style autorisé (background Fumee oklch(0.22), border 1px Cendre, radius 16px, padding 24px) ← ui-kit.md > Cards > Style autorisé
- Lien Google Business : variante Ghost ou style texte personnalisé (pas de bouton primaire ici, mais lien secondaire) ← ui-kit.md > Boutons > Ghost (si applicable) ou composant personnalisé
- Separator optionnel avant data points : 1px solid var(--color-border) oklch(0.30 0.01 55), opacity 0.5 ← ui-kit.md > Separateurs

### Contraintes Applicables
- ON FAIT #1 (Fond Charbon dominant) : Fond de la section = var(--color-charbon) oklch(0.14 0.008 60) ← constraints.md #1
- ON FAIT #4 (Typographie Oswald H1, Space Grotesk H2-H5) : Titre section H2 en Space Grotesk, data points H1 en Oswald ← constraints.md #4
- ON FAIT #5 (DM Sans pour body) : Temoignages et descriptions en DM Sans weight 400, line-height 1.6 ← constraints.md #5
- ON FAIT #7 (Espacement sections 160px desktop / 96px mobile minimum) : Espacement entre sections >= 120px desktop ← constraints.md #7
- ON FAIT #8 (Radius 8-12px sur cards) : Cards temoignages radius 16px (du ui-kit.md override) ← constraints.md #8 + ui-kit.md
- ON FAIT #10 (Easing unique cubic-bezier) : Toutes transitions utilisent cubic-bezier(0.22, 1, 0.36, 1) ← constraints.md #10
- ON FAIT #11 (Apparitions au scroll) : Data points et temoignages apparaissent via translateY(24px) + opacity 0→1, stagger 100ms ← constraints.md #11
- ON NE FAIT PAS #8 (Pas de cards 3 colonnes identiques) : Temoignages en layout asymétrique (2+1 ou 3 décalées), pas grille parfaite ← constraints.md #8
- ON NE FAIT PAS #10 (Pas animations > 800ms) : Counter animations 800ms max ← constraints.md #10
- ON NE FAIT PAS #12 (Pas de lorem ipsum) : Data et temoignages utilisent contenu réel ou labels [CONTENU CLIENT REQUIS] ← constraints.md #12

### Technique Recommandée
**Counter Animation** — project-dials.md > Arsenal Créatif > ligne 46
- Les 3 data points (74, [moyenne], 0/100%) s'incrémentent au scroll
- Durée : 800ms cubic-bezier(0.22, 1, 0.36, 1)
- Condition déclenchement : IntersectionObserver (quand la section entre dans viewport)
- Justification : Cristallise les preuves en un instant mémorable. Format triptyque évite le "wall of testimonials" générique ← emotion-map.md > Avis & Confiance

**Staggered Appear (150ms)** — project-dials.md > Arsenal Créatif > ligne 44
- Les 3 data points apparaissent en cascade (stagger 100ms entre chaque)
- Suivi des 2-3 cards temoignages (stagger 100ms)
- Justification : Révélation progressive validant socialement (Magician archetype) ← emotion-map.md

---

## Notes d'implémentation

1. **Data Point 2 manquante** : Attendre la note moyenne Google client ou utiliser placeholder provisoire `[X.X★]`
2. **Temoignages manquants** : Extraits d'avis Google réels — attendre liste client
3. **Densité visuelle élevée** : VISUAL_DENSITY: 4 (la plus haute) — bien que standard pour une section "proof", veiller au spacing vertical (min 24px entre data et temoignages)
4. **Accent Cuivre Braise** : Peut être appliqué au "74+" ou au dernier chiffre pour souligner l'impact, dans limite 10-15% ← constraints.md #2
5. **Asymétrie temoignages** : Peut utiliser Bento layout (2 grand + 1 petit) ou simple décalage vertical (CSS transform translateY ou padding-top variable)

---

**Validation** : 11/11 champs traçables | 2 blocages contenu client
