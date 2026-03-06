# Homepage - Wireframe

**Route** : /
**Objectif** : Captiver par le produit, differencier par la transparence, convertir par l'appel telephonique

> Derive de : `03-sitemap.md > Accueil`, `01-brand/positioning.md`, `01-brand/services.md`, `02-art-direction/constraints.md`, `02-art-direction/emotion-map.md`, `02-art-direction/project-dials.md`

---

## Section 1 : Hero

**Contenu** :
- H1 : `positioning.md > tagline` — `visual-vocabulary.md > typographie > typo massive`
- Sous-texte : `positioning.md > baseline` — `visual-vocabulary.md > typographie > corps large`
- CTA primaire : `positioning.md > cta_principal` ("Appelle pour commander" → tel:+33611745944) — `ui-kit.md > boutons > primaire`
- CTA secondaire : "Notre promesse" → #promesse — `ui-kit.md > boutons > secondaire`
- Visuel : `public/contenu-instagram/2025-11-22_17-18-46_UTC_1.jpg` (P0 — double burger boeuf, angle 3/4, logo brande, eclairage chaud) — voir `pipeline/input/assets/photo-selection.md > Hero`

**Layout** : Split screen 40/60 — texte aligne a gauche (H1 + baseline + 2 CTAs empiles verticalement), produit surdimensionne a droite (min 50% viewport width desktop). Micro-parallax sur le produit (translateY 2-3% au scroll). Mobile : stack vertical, produit en premier (above the fold), texte en dessous.

**Fond** : `visual-vocabulary.md > couleurs > "fond principal"` (Charbon #141210)

**Interaction** : `visual-vocabulary.md > transitions > "apparition douce"` (texte au load, stagger entre H1 → baseline → CTAs) + `visual-vocabulary.md > transitions > "hover bouton"` (brightness 1.1 sur CTA primaire)

**Emotion** : `emotion-map.md > Homepage > Hero`
- Primaire : Desir immediat (hunger + curiosity)
- Tension : Charbon austere vs burger illumine en eclairage chaud lateral

**Dials (override section)** : `project-dials.md > Hero`
- VARIANCE: 6 | MOTION: 7 | DENSITY: 2

**Technique** : `project-dials.md > Arsenal > Split Screen Layout` (P0) + `project-dials.md > Arsenal > Parallax Depth leger` (P1, 2-3%)
- Split Screen : premiere impression d'impact, asymetrie structurelle
- Parallax : profondeur subtile sur le produit hero, renforce la theatralite

**Contraintes applicables** : `constraints.md > ON FAIT > #1, #2, #3, #9, #10, #11` | `ON NE FAIT PAS > #2, #4, #7, #10, #11, #12`

---

## Section 2 : La Promesse

**Contenu** :
- Accroche H2 : "Et si ton burger respectait ton corps ?" — `visual-vocabulary.md > typographie > titre section`
- Sous-texte narratif : "Tu connais la scene. Le burger qui te fait envie, et la petite voix qui te dit que tu vas le regretter. Chez StrictFood, on a decide que cette voix avait tort." — `visual-vocabulary.md > typographie > corps large`
- **Bloc 1 — Cuisson** :
  - Titre H3 : "Cuit a chaleur pulsee. Pas une goutte d'huile."
  - Texte narratif : courte narration sur le remplacement des bains de friture par des Airfryers professionnels — meme croustillant, zero gras
  - Element visuel : "0%" en typographie massive animee (clamp(4rem, 8vw, 8rem)) — migre depuis l'ancienne section 4
  - Badge pill : "ZERO HUILE DE CUISSON" — `ui-kit.md > badges > variante nutritionnelle` (Sauge Fraiche)
  - Visuel : photo burger (voir photo-selection.md)
- **Bloc 2 — Macros** :
  - Titre H3 : "Un burger que tu peux lire avant de le manger."
  - Texte narratif : narration sur la transparence nutritionnelle — quand tu connais les macros, plus besoin de choisir entre plaisir et discipline
  - 2-3 mini-cards produit avec macros (STRICT Boeuf 596kcal/53g prot, STRICT MAX Poulet 946kcal/112g prot, Cookie proteine 273kcal/26g prot)
  - Badge pill : "MACROS AFFICHEES" — `ui-kit.md > badges > variante nutritionnelle` (Sauge Fraiche)
- Phrase de fermeture : "Le cheat meal qui n'en est pas un." — `positioning.md > tagline` — typographie Or Braise

**Layout** : Accroche H2 + sous-texte centres (max-width 640px). 2 blocs empiles en split asymetrique (55/45) avec alternance gauche-droite (rythme Z). Phrase de fermeture centree. Mobile : stack vertical.

**Fond** : `visual-vocabulary.md > couleurs > "fond alternatif"` (Ebene #1E1B18)

**Interaction** : Counter animation "0%" (scroll-triggered, 100→0, 800ms) + apparition douce (H2) + apparition decalee (stagger 150ms entre blocs) + hover subtil sur mini-cards

**Emotion** : `emotion-map.md > Homepage > La Promesse`
- Primaire : Revelation ("ce fast-food n'est pas ce que tu crois")
- Tension : Narration emotionnelle vs preuves concretes (macros, 0% huile) — storytelling + data

**Dials (override section)** : `project-dials.md > La Promesse`
- VARIANCE: 5 | MOTION: 6 | DENSITY: 3

**Technique** : `project-dials.md > Arsenal > Counter Animation` (P1, "0%" migre de section 4) + `project-dials.md > Arsenal > Staggered Appear` (P0, 150ms) + `project-dials.md > Arsenal > Scroll-triggered Fade In` (P0)
- Counter Animation : "0%" animee au scroll (100→0, 800ms) — moment de drama visuel
- Stagger : revelation progressive des 2 blocs
- Hover subtil sur mini-cards macros

**Contraintes applicables** : `constraints.md > ON FAIT > #1, #4, #5, #7, #10, #11` | `ON NE FAIT PAS > #4, #10, #12`

---

## Section 3 : Nos Artisans

**Contenu** :
- Titre : `positioning.md > messages > Nos Artisans` — `visual-vocabulary.md > typographie > titre section`
- 3 artisans : `about.md > partenaires`
  - Boucherie Labourde : viande artisanale — `about.md > valeurs > Ancrage Local`
  - Pains du Soleil : pain artisanal — `about.md > valeurs > Transparence Totale`
  - Myfitcheese : fromage hyperproteine — `services.md > Burgers Artisanaux > inclus`
- Chaque artisan : nom (H3), specialite, ancrage "Perpignan"
- Visuels : voir `pipeline/input/assets/photo-selection.md > Nos Artisans` (decoupe viande, fromage frais, assemblage burger)

**Layout** : Titre H2 en haut. Sticky Scroll Stack — 3 panels pleine largeur qui se superposent au scroll. Chaque panel : split horizontal (visuel artisan 50% + texte 50%, alternance gauche/droite). Fond de chaque panel legerement different (Charbon → Ebene → Charbon). Mobile : stack vertical simple, 1 artisan par ecran.

**Fond** : `visual-vocabulary.md > couleurs > "fond principal"` (Charbon #141210)

**Interaction** : `visual-vocabulary.md > transitions > "animation macro"` (800ms, scroll-triggered stack) + `visual-vocabulary.md > transitions > "apparition douce"` (contenu texte de chaque panel)

**Emotion** : `emotion-map.md > Homepage > Nos Artisans`
- Primaire : Confiance (ancrage local, preuves tangibles)
- Tension : Portraits artisans chaleureux vs austere du Charbon — humanisation du fond sombre

**Dials (override section)** : `project-dials.md > Nos Artisans`
- VARIANCE: 5 | MOTION: 7 | DENSITY: 3

**Technique** : `project-dials.md > Arsenal > Sticky Scroll Stack` (P1)
- Chaque artisan se revele en stackant au scroll — renforce le storytelling sequentiel, un artisan a la fois

**Contraintes applicables** : `constraints.md > ON FAIT > #1, #3, #4, #5, #7, #10, #11` | `ON NE FAIT PAS > #2, #5, #10, #12`

---

## Section 4 : L'Experience

**Contenu** :
- Titre : "Viens voir par toi-meme." — `visual-vocabulary.md > typographie > titre section`
- Sous-bloc principal : `positioning.md > USPs > Cuisine Ouverte` (transparence, tout se voit — cuisine ouverte, rien a cacher)
- Ambiance lieu : cuisine ouverte, mur vegetal, comptoir visible, eclairage chaleureux
- Texte narratif : narration sur l'experience physique — quand tu passes la porte, tu vois tout : les ingredients, la preparation, les gestes. Pas de mur, pas de rideau.
- Visuel : `public/contenu-instagram/2025-11-07_17-32-18_UTC.jpg` (interieur restaurant, comptoir, mur vegetal) — voir `pipeline/input/assets/photo-selection.md > L'Experience`
- Visuel secondaire : `public/contenu-instagram/2025-10-03_15-57-14_UTC_6.jpg` (fondateur derriere vitrine cuisine ouverte)

**Layout** : Layout asymetrique en 2 blocs. Bloc gauche (55%) : titre H2 + texte narratif sur l'experience du lieu. Bloc droit (45%) : image cuisine ouverte pleine hauteur (radius 16px). Mobile : stack vertical, image puis texte.

**Fond** : `visual-vocabulary.md > couleurs > "fond alternatif"` (Ebene #1E1B18)

**Interaction** : `visual-vocabulary.md > transitions > "apparition douce"` (texte et image au scroll) + parallax leger sur image (translateY 2-3%)

**Emotion** : `emotion-map.md > Homepage > L'Experience`
- Primaire : Admiration ("ils n'ont vraiment rien a cacher")
- Tension : Narration intimiste vs visuel immersif du lieu — invitation a vivre l'experience

**Dials (override section)** : `project-dials.md > L'Experience`
- VARIANCE: 5 | MOTION: 5 | DENSITY: 2

**Technique** : `project-dials.md > Arsenal > Scroll-triggered Fade In` (P0) + Parallax Depth leger (P1, 2-3% sur image)
- Fade In : revelation progressive du lieu au scroll
- Parallax : profondeur subtile sur l'image cuisine ouverte

**Contraintes applicables** : `constraints.md > ON FAIT > #1, #4, #7, #10, #11` | `ON NE FAIT PAS > #4, #10, #12`

---

## Section 5 : Avis & Confiance

**Contenu** :
- Titre : `positioning.md > messages > Avis & Confiance` — `visual-vocabulary.md > typographie > titre section`
- Triptyque data : `about.md > chiffres cles`
  - Data 1 : 74+ avis Google — `visual-vocabulary.md > typographie > typo massive`
  - Data 2 : [NOTE MOYENNE CLIENT REQUISE] — `visual-vocabulary.md > typographie > typo massive`
  - Data 3 : 0% huile cuisson ou 100% artisanal — `visual-vocabulary.md > typographie > typo massive`
- Temoignages : [AVIS GOOGLE CLIENT REQUIS — 2-3 extraits reels]
- Lien : Google Business Profile → lien externe

**Layout** : Triptyque horizontal de 3 data points en typographie massive, espaces genereux (gap 64px). En dessous : 2-3 cards temoignages en layout decale (pas alignes sur la meme baseline — asymetrie legere). Lien Google Business en fin de section. Mobile : data points en stack vertical, temoignages en 1 colonne.

**Fond** : `visual-vocabulary.md > couleurs > "fond principal"` (Charbon #141210)

**Interaction** : `visual-vocabulary.md > transitions > "apparition decalee"` (stagger 100ms entre data points) + Counter animation (3 chiffres incrementent au scroll) + `visual-vocabulary.md > transitions > "apparition douce"` (temoignages)

**Emotion** : `emotion-map.md > Homepage > Avis & Confiance`
- Primaire : Validation sociale ("d'autres ont essaye et adore")
- Tension : Data impactants (chiffres massifs, autorite) vs temoignages intimes (voix humaines, proximite)

**Dials (override section)** : `project-dials.md > Avis & Confiance`
- VARIANCE: 4 | MOTION: 5 | DENSITY: 4

**Technique** : `project-dials.md > Arsenal > Counter Animation` (P1, 3 data points incrementent) + `project-dials.md > Arsenal > Staggered Appear` (P0)
- Counters : chaque chiffre s'incremente quand il entre dans le viewport
- Stagger : revelation progressive data puis temoignages

**Contraintes applicables** : `constraints.md > ON FAIT > #1, #4, #5, #7, #8, #10, #11` | `ON NE FAIT PAS > #8, #10, #12`

---

## Section 6 : Contact & Horaires

**Contenu** :
- Titre : `positioning.md > messages > Contact & Horaires` — `visual-vocabulary.md > typographie > titre section`
- CTA telephone : `positioning.md > cta_principal` ("Appelle pour commander" → tel:+33611745944) — `ui-kit.md > boutons > primaire` (surdimensionne)
- Horaires : `about.md > contact > horaires` [HORAIRES CLIENT REQUIS]
- Adresse : 88 Chemin de la Roseraie, Perpignan (Chateau Roussillon)
- Carte : embed carte Perpignan (localisation restaurant)
- Reseaux sociaux : Instagram + TikTok — `about.md > contact > reseaux sociaux`
- Formulaire email optionnel : `ui-kit.md > inputs > champ texte` + `ui-kit.md > boutons > primaire`

**Layout** : CTA telephone surdimensionne en haut de section (bouton pleine largeur max 480px, typographie H2, magnetic button). En dessous : grid 2 colonnes — colonne gauche (horaires + adresse), colonne droite (carte embed). Liens sociaux en ligne sous la carte. Mobile : stack vertical, CTA telephone sticky en bas d'ecran (FAB).

**Fond** : `visual-vocabulary.md > couleurs > "fond alternatif"` (Ebene #1E1B18)

**Interaction** : `visual-vocabulary.md > transitions > "hover bouton"` (magnetic button — le bouton suit legerement le curseur) + `visual-vocabulary.md > transitions > "apparition douce"` (contenu info)

**Emotion** : `emotion-map.md > Homepage > Contact & Horaires`
- Primaire : Passage a l'action (commander)
- Tension : Urgence du CTA Or Braise vs message chaleureux d'accueil ("on t'attend")

**Dials (override section)** : `project-dials.md > Contact & Horaires`
- VARIANCE: 3 | MOTION: 4 | DENSITY: 3

**Technique** : `project-dials.md > Arsenal > Magnetic Button` (P1)
- Bouton telephone avec effet magnetique — attire l'attention, renforce le passage a l'action

**Contraintes applicables** : `constraints.md > ON FAIT > #1, #2, #4, #10, #11` | `ON NE FAIT PAS > #10, #12`

---

## Navigation

### Header

- Logo StrictFood (gauche)
- Menu horizontal desktop : La Promesse · Nos Artisans · L'Experience · Avis — `visual-vocabulary.md > typographie > corps confortable`
- CTA bouton "Commander" (droite) — `ui-kit.md > boutons > primaire` → tel:+33611745944
- Comportement : `project-dials.md > Arsenal > Backdrop Blur Header` (P0) — sticky, backdrop-filter blur 12px au scroll, scroll spy (item actif highlight Or Braise)
- Mobile : hamburger menu + CTA telephone sticky

### Footer

- Logo + `positioning.md > tagline`
- Navigation : memes liens que header (La Promesse · Nos Artisans · L'Experience · Avis · Contact)
- Contact : telephone + adresse + horaires
- Reseaux sociaux : Instagram + TikTok
- Lien : Mentions legales → /mentions-legales
- Fond : `visual-vocabulary.md > couleurs > "fond principal"` (Charbon #141210)
