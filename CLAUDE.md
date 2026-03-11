# StrictFood - Site Web

Landing page "Dark Food Premium" pour StrictFood (RD FITNESS), fast-good healthy a Perpignan.

## Statut Pipeline

### Phase A : Architecture ✅

Tous les stages A01-A06 sont termines. Artifacts dans `pipeline/output/`.

### Phase B : Vibe Coding

| Etape | Stage | Status | Detail |
|-------|-------|--------|--------|
| B01 | Layout | ✅ | `header.tsx`, `footer.tsx`, `mobile-menu.tsx` |
| B02 | Homepage | 🔶 5/6 | Manque : Contact & Horaires (Section 6) |
| B03 | Pages | 🔶 | `/la-carte` creee, mentions-legales a faire |
| B04 | Polish | ⬜ | Animations + SEO + coherence |
| B05 | Validate | ⬜ | `pipeline/output/07-validation.md` |
| B06 | Deploy | ⬜ | `pipeline/output/08-deploy.md` |

**Sections homepage codees :**
`hero` · `la-promesse` · `nos-artisans` · `experience` · `avis-confiance` · `carte-menu`

## Commandes

```bash
npm run dev          # Dev (Turbopack)
npm run build        # Build production
npm run lint         # ESLint
```

**Phase B** : "Code la section Contact & Horaires" → `/section-builder` orchestre le circuit d'agents.

## Sources de Verite

| Domaine | Source |
|---------|--------|
| Statut pipeline | Ce fichier |
| Brief client | `pipeline/input/brief-client.md` |
| Analyse interne | `pipeline/input/content/analyse-interne.md` |
| Strategie globale | `strategie/strategie-globale.md` |
| Liens et acces | `docs/liens-et-acces.md` |
| Carte produit | `pipeline/input/content/carte.md` (16 produits, 5 categories) |
| Wireframes | `pipeline/output/03.5-wireframes/` |
| Tokens CSS | `app/globals.css` (source unique) |
| Contraintes design | `pipeline/output/02-art-direction/constraints.md` |
| Vocabulaire visuel | `pipeline/output/02-art-direction/visual-vocabulary.md` |
| Calibration dials | `pipeline/output/02-art-direction/project-dials.md` |
| Composants UI | `pipeline/output/02-art-direction/ui-kit.md` |
| Emotions par section | `pipeline/output/02-art-direction/emotion-map.md` |
| Contenu brand | `pipeline/output/01-brand/` |
| Logo SVG | `public/logo/2025-09-14_15-27-20_UTC.svg` |
| Photos references | `public/images/photos-references/` |
| Production Instagram | `production/CLAUDE.md` |

## Contexte Projet

| Cle | Valeur |
|-----|--------|
| Client | StrictFood (RD FITNESS) |
| Fondateurs | Romain Foy / Dorian Lesniak |
| Contact | +33 6 11 74 59 44 |
| Type | Landing page vitrine Premium |
| Secteur | Restauration rapide saine (Fast-Good) |
| Localisation | 88 Chemin de la Roseraie, Perpignan (Chateau Roussillon) |
| Tagline | "Le cheat meal qui n'en est pas un" |

## Stack

- **Framework** : Next.js 15.3 / React 19.1 / TypeScript 5.8
- **Styling** : Tailwind CSS 4.1 (OKLCH tokens dans globals.css)
- **Animations** : Motion 12.6 + Lenis 1.2
- **Forms** : React Hook Form + Zod
- **Icons** : Lucide React
- **Deploy** : Vercel

## ADN Visuel

| Aspect | Valeur |
|--------|--------|
| Couleur signature | Cuivre Braise — `oklch(0.67 0.15 68)` |
| Secondaire | Grenat Fume — `oklch(0.42 0.10 22)` |
| Accent nutrition | Feuille Grillee — `oklch(0.52 0.06 145)` |
| Background | Charbon — `oklch(0.14 0.008 60)` |
| Typographies | Oswald (H1) + Space Grotesk (H2-H5) + DM Sans (body) |
| DESIGN_VARIANCE | 5/10 |
| MOTION_INTENSITY | 6/10 |
| VISUAL_DENSITY | 3/10 |
| Food Porn | 7/10 |

## Contraintes

- **Performance** : Lighthouse > 90
- **Responsive** : Mobile-first
- **Accessibilite** : WCAG AA
- **Ton** : Tutoiement (valide par le client)
- **Tokens** : Pas de valeurs hardcodees — tout dans `globals.css`
- **Composants** : Conformes a `ui-kit.md`
- **Scope Phase 1** : Landing page uniquement (Click & Collect prevu Phase 2)
- **NEVER** : Ecrire un composant UI sans passer par le circuit d'agents (cf. `.claude/rules/phase-b-circuit.md`)

## Architecture

```
app/                          # Pages Next.js
  globals.css                 # Tokens CSS (source unique)
  layout.tsx                  # Root layout (3 fonts, Lenis, Header/Footer)
  page.tsx                    # Homepage
  la-carte/page.tsx           # Page carte
components/
  layout/                     # Header, Footer, MobileMenu
  sections/                   # Sections homepage (6 fichiers)
  ui/                         # Primitives (LiquidGlassLink, MagneticButton)
  providers/                  # SmoothScrollProvider
pipeline/                     # Workflow design (input/, output/, stages/)
_preflight/                   # Contexte pre-coding (genere par agents)
production/                   # Pipeline Instagram (voir production/CLAUDE.md)
strategie/                    # Strategie social + planning
formulaires/                  # Formulaires deployes separement
public/images/                # Photos references (dark-bg, produits-source, contexte)
```

## Agents & Skills

| Outil | Type | Scope | Usage |
|-------|------|-------|-------|
| `/section-builder` | Skill | Phase B | Orchestre le circuit pour chaque section |
| `/frontend-design2` | Skill | Phase B | Comportement UI du codeur |
| `/instagram-producer` | Skill | Production | Orchestre le pipeline Instagram |
| `context-assembler` | Agent (Haiku) | Phase B | Resout le contexte wireframe → context block |
| `aesthetic-director` | Agent (Opus) | Phase B | Direction creative sensorielle |
| `constraint-validator` | Agent (Haiku) | Phase B | Valide code vs regles |
| `wireframe-validator` | Agent (Haiku) | Phase A | Valide wireframes |
| `token-auditor` | Agent (Haiku) | Phase A | Audite tokens CSS |

## Deploiements Vercel

| URL | Root dir |
|-----|----------|
| strictfood-strategie.vercel.app | `/` (site principal) |
| devis-strictfood.vercel.app | `formulaires/` |
| plateforme-marque-strictfood.vercel.app | `formulaires/formulaire-plateforme/` |

## Contexte Business

- CA actuel : 200-300EUR/jour (objectif 500EUR/jour)
- Budget mensuel : 780EUR (290EUR Web + 490EUR Social)
- Partenaires : Boucherie Labourde, Pains du Soleil, Myfitcheese
- Ambition : 4-5 points de vente dans 5 ans (franchise)

<!-- Detail circuit Phase B : .claude/rules/phase-b-circuit.md -->
<!-- Arborescence pipeline : .claude/rules/pipeline-structure.md -->
<!-- Pipeline Instagram : .claude/rules/production-pipeline.md + production/CLAUDE.md -->
