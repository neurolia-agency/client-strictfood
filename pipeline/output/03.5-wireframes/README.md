# Wireframes - StrictFood

Source unique de contenu pour les etapes B1-B3.

## Fichiers

| Fichier | Route | Sections |
|---------|-------|----------|
| homepage.md | / | 6 sections (Hero, La Promesse, Nos Artisans, L'Experience, Avis & Confiance, Contact & Horaires) |
| mentions-legales.md | /mentions-legales | 4 sections (Editeur, Hebergeur, Donnees personnelles, Cookies) |

## Principe

Les wireframes referencent les fichiers brand et art-direction sans dupliquer :

```
positioning.md > tagline
services.md > Burgers Artisanaux > tagline
emotion-map.md > Homepage > Hero
project-dials.md > Hero > VARIANCE: 6
constraints.md > ON FAIT > #1, #2
visual-vocabulary.md > couleurs > "fond principal"
ui-kit.md > boutons > primaire
```

## 7 Champs Obligatoires par Section

| # | Champ | Source de reference |
|---|-------|--------------------|
| 1 | Contenu | `01-brand/*.md > cle` |
| 2 | Layout | Description structurelle precise |
| 3 | Fond | `visual-vocabulary.md > couleurs > [terme]` |
| 4 | Interaction | `visual-vocabulary.md > transitions > [terme]` |
| 5 | Emotion | `emotion-map.md > [Page] > [Section]` |
| 6 | Dials | `project-dials.md > [Section]` (VARIANCE / MOTION / DENSITY) |
| 7 | Technique + Contraintes | `project-dials.md > Arsenal` + `constraints.md > ON FAIT/ON NE FAIT PAS > #numeros` |

## Usage

| Etape | Lire | Contexte supplementaire |
|-------|------|------------------------|
| B1-Layout | 03-sitemap.md | project-dials.md (dials globaux) |
| B2-Homepage | homepage.md | **Tout le contexte est dans le wireframe** (emotions, dials, contraintes) |
| B3-Pages | Le wireframe de chaque page | **Tout le contexte est dans le wireframe** |

**Principe cle** : Chaque wireframe est **auto-suffisant** — il contient toutes les references necessaires pour que les agents Context Assembler et Aesthetic Director puissent produire un brief complet sans aller chercher ailleurs.
