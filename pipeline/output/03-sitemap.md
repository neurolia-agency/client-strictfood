# Sitemap — StrictFood

> Produit par l'etape A04-Structure — 05/03/2026 (v1)

## Vue d'ensemble

```
StrictFood
├── Accueil (/)              ← Landing page unique (6 sections)
└── Mentions Legales (/mentions-legales)
```

> Livrable Phase 1 : une landing page unique avec sections ancrees + une page Mentions Legales. Pas de pages multiples.

## Pages Detaillees

### 1. Accueil (/)

**Objectif** : Declencher l'appel telephonique pour commander — en construisant progressivement le desir, la confiance et l'envie d'agir.

**Parcours emotionnel** : La sequence des sections suit la courbe emotionnelle definie dans `emotion-map.md`. Chaque section renforce la precedente — pas de creux.

```
Emotion
   ^
   |          Revelation
   |          ●─────●  Admiration
   |         /        \     Validation
   |  Desir ●          ●────●
   |       /                  \  ACTION
   |      /                    ●
   | ●───● Intrigue             \
   | Arrivee                     ●
   └──────────────────────────────────> Scroll
     Hero   Promesse Artisans  Experience  Avis  Contact
```

**Sections** :

#### 1. Hero (#hero)

- **Contenu principal** :
  - Tagline : "Le cheat meal qui n'en est pas un" (positioning.md)
  - Sous-texte : proposition de valeur (burger premium + sain + artisanal)
  - CTA primaire : "Appelle pour commander" → tel:+33611745944
  - CTA secondaire : "Notre promesse" → scroll vers #promesse
  - Visuel : burger hero surdimensionne (60%+ viewport), eclairage dramatique lateral
- **Emotion cible** : Desir immediat (faim + curiosite)
- **Transition emotionnelle** : L'intrigue de l'arrivee se transforme en desir — le burger surgit du noir
- **Technique envisagee** : Split Screen Layout (texte 40% / produit 60%, asymetrique) + Parallax Depth leger (2-3%) sur le produit
- **Dials** : VARIANCE 6 / MOTION 7 / DENSITY 2

#### 2. La Promesse (#promesse)

- **Contenu principal** :
  - Accroche H2 : "Et si ton burger respectait ton corps ?"
  - Sous-texte narratif storytelling (tension burger/culpabilite resolue par StrictFood)
  - Bloc Cuisson : chaleur pulsee, 0% huile, "0%" en typo massive animee (counter 100→0)
  - Bloc Macros : transparence nutritionnelle, mini-cards produit avec macros (STRICT Boeuf 596kcal/53g prot, STRICT MAX Poulet 946kcal/112g prot, Cookie proteine 273kcal/26g prot)
  - Badges pill : "ZERO HUILE DE CUISSON" + "MACROS AFFICHEES" (Sauge Fraiche)
  - Phrase de fermeture tagline : "Le cheat meal qui n'en est pas un." (Or Braise)
- **Emotion cible** : Revelation ("ce fast-food n'est pas ce que tu crois")
- **Transition emotionnelle** : Le desir du hero se transforme en revelation — les differenciateurs concrets (0% huile, macros) sont presentes via du storytelling emotionnel
- **Technique envisagee** : Counter Animation ("0%" anime au scroll) + Staggered Appear (150ms entre blocs) + Scroll-triggered Fade In
- **Dials** : VARIANCE 5 / MOTION 6 / DENSITY 3

#### 3. Nos Artisans (#artisans)

- **Contenu principal** :
  - Titre section : "Nos Artisans"
  - 3 partenaires : Boucherie Labourde (viande), Pains du Soleil (pain artisanal), Myfitcheese (fromage hyperproteine)
  - Pour chaque artisan : nom, specialite, ancrage Perpignan, lien avec le produit StrictFood
  - Ton : fierte locale, tutoiement
- **Emotion cible** : Confiance (ancrage local, preuves tangibles)
- **Transition emotionnelle** : L'appetence de la carte se convertit en confiance — on decouvre les visages derriere les ingredients
- **Technique envisagee** : Sticky Scroll Stack (chaque artisan se revele en empilant les cards au scroll)
- **Dials** : VARIANCE 5 / MOTION 7 / DENSITY 3

#### 4. L'Experience (#experience)

- **Contenu principal** :
  - Titre section : "Viens voir par toi-meme."
  - Experience physique du lieu : cuisine ouverte, mur vegetal, comptoir visible
  - Narration sur la transparence : quand tu passes la porte, tu vois tout
  - Visuel : cuisine ouverte (transparence, authenticite — "tout le monde peut nous voir")
  - Visuel secondaire : fondateur derriere vitrine cuisine ouverte
- **Emotion cible** : Admiration ("ils n'ont vraiment rien a cacher")
- **Transition emotionnelle** : La confiance des artisans monte en admiration — le lieu lui-meme est une preuve de transparence
- **Technique envisagee** : Scroll-triggered Fade In + Parallax Depth leger (2-3% sur image)
- **Dials** : VARIANCE 5 / MOTION 5 / DENSITY 2

#### 5. Avis & Confiance (#avis)

- **Contenu principal** :
  - Titre section : "Ils en Parlent" ou "Avis"
  - Triptyque data points en typographie massive : nombre d'avis Google (74+), note moyenne, un chiffre cle supplementaire (ex: "100% artisanal")
  - 2-3 avis clients selectionnes (extraits Google)
  - Lien vers la fiche Google Business Profile
- **Emotion cible** : Validation sociale ("d'autres ont essaye et aime")
- **Transition emotionnelle** : L'admiration pour le process est validee par des vrais clients — la preuve sociale scelle la confiance
- **Technique envisagee** : Counter Animation (3 data points s'incrementent au scroll) + Apparition decalee (stagger)
- **Dials** : VARIANCE 4 / MOTION 5 / DENSITY 4

#### 6. Contact & Horaires (#contact)

- **Contenu principal** :
  - Titre section : "Passe Nous Voir" ou "On T'Attend"
  - CTA telephonique surdimensionne : "Appelle pour commander" → tel:+33611745944
  - Horaires d'ouverture (a confirmer aupres du client)
  - Adresse + carte de localisation (Perpignan)
  - Liens reseaux sociaux : Instagram, TikTok
  - Formulaire capture email (P1 — optionnel Phase 1)
- **Emotion cible** : Passage a l'action (commander)
- **Transition emotionnelle** : Toute la confiance accumulee se convertit en action — le CTA telephone cloture le parcours
- **Technique envisagee** : Magnetic Button (CTA attire subtilement le curseur)
- **Dials** : VARIANCE 3 / MOTION 4 / DENSITY 3

---

### 2. Mentions Legales (/mentions-legales)

**Objectif** : Conformite RGPD — page utilitaire sobre

**Sections** :

1. **Editeur du site** — RD FITNESS, coordonnees, responsable publication
2. **Hebergeur** — Vercel Inc., coordonnees
3. **Donnees personnelles** — Politique de collecte et traitement
4. **Cookies** — Types utilises, consentement

**Emotion globale** : Neutralite professionnelle
**Technique** : Aucune animation — page statique standard
**Dials** : VARIANCE 2 / MOTION 2 / DENSITY 5

---

## Navigation

### Header

**Structure Desktop** :
- Logo StrictFood (lien → /)
- Menu : La Promesse (#promesse) · Nos Artisans (#artisans) · L'Experience (#experience) · Avis (#avis)
- CTA : "Commander" → tel:+33611745944

**Structure Mobile** :
- Logo StrictFood
- Hamburger menu (meme liens que desktop)
- CTA telephone persistant (sticky ou FAB)

**Comportement** :
- Backdrop blur au scroll (technique retenue : Backdrop Blur Header)
- Scroll spy : item actif surligne selon la section visible
- Smooth scroll vers les ancres (Lenis)

### Footer

**Colonnes** :
1. **Logo + tagline** : "Le cheat meal qui n'en est pas un"
2. **Navigation** : La Promesse · Nos Artisans · L'Experience · Avis · Contact
3. **Contact** : Telephone, adresse, horaires
4. **Reseaux** : Instagram · TikTok
5. **Legal** : Mentions Legales (/mentions-legales)

**Ligne du bas** :
- © 2026 StrictFood — RD FITNESS
- Lien "Site par Neurolia" (optionnel, a confirmer)

---

## Responsive

| Breakpoint | Navigation | Adaptations cle |
|------------|------------|-----------------|
| Desktop (>1024px) | Menu horizontal + CTA | Split Screen hero (40/60), hover reveal cards |
| Tablet (768-1024px) | Menu hamburger + CTA sticky | Hero empile (texte au-dessus du visuel), cards 2 colonnes |
| Mobile (<768px) | Menu hamburger + CTA FAB | Hero empile, cards 1 colonne, sticky scroll simplifie, CTA telephone FAB persistant |

> Mobile-first : le design est concu pour mobile d'abord (cible Actif Presse = recherche midi sur smartphone).

---

## Recapitulatif Technique

| Section | Ancre | Technique principale | Emotion |
|---------|-------|---------------------|---------|
| Hero | #hero | Split Screen + Parallax Depth | Desir immediat |
| La Promesse | #promesse | Counter Animation + Stagger + Fade In | Revelation |
| Nos Artisans | #artisans | Sticky Scroll Stack | Confiance |
| L'Experience | #experience | Scroll-triggered Fade In + Parallax | Admiration |
| Avis & Confiance | #avis | Counter Animation + Stagger | Validation sociale |
| Contact & Horaires | #contact | Magnetic Button | Passage a l'action |
| Mentions Legales | /mentions-legales | Aucune | Neutralite |

---

## Validation A04-Structure

- [x] Toutes les pages du brief sont couvertes (Landing + Mentions Legales)
- [x] Chaque page a un objectif defini
- [x] Sections listees pour chaque page avec emotion cible
- [x] Sequence des sections coherente avec la courbe emotionnelle (emotion-map.md)
- [x] Navigation header/footer definie (ancres #, pas de pages separees)
- [x] URLs definies (/ et /mentions-legales)
- [x] Techniques retenues (project-dials.md) prises en compte dans les types de sections
- [x] Dials par section documentes
- [x] Responsive defini (mobile-first)
- [x] "Chaleur pulsee" utilise (pas "Airfryer" ni "friture")

## Prochaine Etape

Une fois `output/03-sitemap.md` cree → Passer a `stages/A05-wireframes.md`
