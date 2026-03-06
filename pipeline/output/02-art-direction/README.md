# Direction Artistique — StrictFood

<!-- Derive de : 01-brand/ (8 fichiers), 00-brief.md, moodboard.md -->

## ADN Visuel

| Aspect | Valeur |
|--------|--------|
| Couleur signature | Cuivre Braise — oklch(0.67 0.15 68) / #BF8522 |
| Couleur action | Cuivre Braise (meme que signature — CTA = accent principal) |
| Couleur secondaire | Grenat Fume — oklch(0.42 0.10 22) / #7C3530 (accents craft/artisans) |
| Accent nutrition | Feuille Grillee — oklch(0.52 0.06 145) / #5C7858 (badges sante uniquement) |
| Background | Charbon — oklch(0.14 0.008 60) / #141210 |
| Background alt | Ebene — oklch(0.18 0.008 60) / #1E1B18 |
| Surface (cards) | Fumee — oklch(0.22 0.01 60) / #2A2622 |
| Forme signature | Angles affirmes, radius 8-12px, pas de rondeurs excessives (inspiration G63) |
| Mouvement | Revelations progressives, 300-800ms, cubic-bezier(0.22, 1, 0.36, 1) |
| Structure | Hero > La Promesse > Nos Artisans > L'Experience > Avis & Confiance > Contact |
| Espace sections | 160px desktop / 96px mobile |
| Radius | Standard 12px / Large 16px / Pill 999px / Input 8px |
| Typographies | Space Grotesk (titres) + DM Sans (body) |
| Texture | Grain subtil sur certaines surfaces, matieres brutes evoquees (bois, metal) |

## Equation Visuelle

```
StrictFood = Dark Theater + Craft Premium + Athletic Precision

Dark Theater       = Fond Charbon oklch(0.14) + eclairage dramatique lateral + whitespace 160px
Craft Premium      = Cuivre Braise oklch(0.67 0.15 68) + Grenat Fume oklch(0.42 0.10 22) + artisans nommes + textures brutes
Athletic Precision = Space Grotesk bold + grille 12col + radius 12px + easing (0.22, 1, 0.36, 1)
```

## Test Rapide "Est-ce StrictFood ?"

- [ ] Le fond est sombre (Charbon/Ebene) ?
- [ ] L'accent est Cuivre Braise et represente moins de 15% de la surface ?
- [ ] Le produit food est surdimensionne et eclaire dramatiquement ?
- [ ] La typographie des titres est Space Grotesk bold ?
- [ ] L'espacement entre sections est >= 120px desktop ?
- [ ] Le hero n'est PAS centre ?
- [ ] Les animations utilisent cubic-bezier(0.22, 1, 0.36, 1) ?
- [ ] Le texte est en Creme chaud sur fond sombre (pas de blanc pur ni gris froid) ?

> 8/8 = Conforme | 6-7/8 = Revoir | < 6/8 = Refaire

## Palette Resumee

```
Backgrounds                  Accents                      Textes
───────────────              ───────────────              ───────────────
#141210 Charbon              #BF8522 Cuivre Braise        #F5F0E8 Creme
#1E1B18 Ebene                #D4A44E Cuivre Braise clair  #E8E0D4 Ivoire
#2A2622 Fumee                #8E6215 Cuivre Braise fonce  #B5AA98 Sable
#3D3832 Cendre               #7C3530 Grenat Fume          #8A8070 Pierre
                              #5C7858 Feuille Grillee      #605848 Gres
```

## Liens avec les Valeurs de Marque

| Valeur Marque | Traduction Visuelle |
|---------------|---------------------|
| Transparence Totale | Layout ouvert et lisible, pas de modal intrusif, grille claire, contenu accessible au premier scroll, badges nutritionnels visibles |
| Plaisir Deculpabilise | Food porn 7/10 (produits surdimensionnes, eclairage appetissant), Cuivre Braise chaud (caramelisation, chaleur), abondance visuelle maitrisee |
| Ancrage Local | Noms d'artisans en Cuivre Braise mis en valeur, accents Grenat Fume (craft artisanal), textures naturelles (grain, bois), pas de stock photo generique |
| Convivialite Brute | Whitespace genereux (accueillant, pas intimidant), radius 12px (angulaire mais pas coupant), typographie body accessible (DM Sans), tutoiement dans tous les textes |

## Fichiers

| Fichier | Usage | Consommateur |
|---------|-------|--------------|
| moodboard.md | References analysees avec mesures + carte de derivation | Inspiration, validation |
| visual-vocabulary.md | Termes > valeurs CSS precises (8 categories) | A06 (Design Tokens) |
| constraints.md | Regles ON FAIT / ON NE FAIT PAS + Test Rapide | B01-B04 (Frontend), Constraint Validator |
| emotion-map.md | Emotion cible par section + techniques + courbe | A05 (Wireframes), B02-B03, Aesthetic Director |
| **project-dials.md** | **Calibrage frontend-design2 par projet + arsenal creatif** | **Context Assembler, B01-B04 (Frontend)** |
| **ui-kit.md** | **Inventaire composants reutilisables** | **Context Assembler, Constraint Validator, B01-B04** |

## Usage par Etape

- **A04 (Structure)** : Consulter emotion-map.md pour la sequence des sections
- **A05 (Wireframes)** : Integrer les emotions par section, les elements signature, et les techniques recommandees
- **A06 (Design Tokens)** : Implementer visual-vocabulary.md en CSS custom properties dans globals.css
- **B01-B03 (Frontend)** : Agents Context Assembler + Aesthetic Director lisent project-dials.md + emotion-map.md + constraints.md avant chaque composant
- **B04 (Polish)** : Executer le Test Rapide sur chaque page
- **B05 (Validate)** : Agent Constraint Validator verifie constraints.md + project-dials.md
