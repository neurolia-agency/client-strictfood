# StrictFood - Site Web

Site vitrine "Dark Food Premium" pour StrictFood (RD FITNESS), fast-good healthy a Perpignan.

## Statut Pipeline

### Phase A : Architecture (Markdown uniquement)

| Etape | Stage | Status | Output |
|-------|-------|--------|--------|
| A01 | Init | ✅ | `pipeline/output/00-brief.md` |
| A02 | Brand | ✅ | `pipeline/output/01-brand/` (8 fichiers) |
| A03 | Art Direction | ✅ | `pipeline/output/02-art-direction/` (7 fichiers) |
| A04 | Structure | ✅ | `pipeline/output/03-sitemap.md` |
| A05 | Wireframes | ✅ | `pipeline/output/03.5-wireframes/` (3 fichiers) |
| A06 | Design Tokens | ✅ | `app/globals.css` |

### Phase B : Design / Vibe Coding (Circuit d'Agents)

| Etape | Stage | Status | Output |
|-------|-------|--------|--------|
| B01 | Layout | ✅ | `components/layout/` |
| B02 | Homepage | ⬜ | `components/sections/` + `app/page.tsx` |
| B03 | Pages | ⬜ | `app/[pages]/` |
| B04 | Polish | ⬜ | Animations + SEO + coherence |
| B05 | Validate | ⬜ | `pipeline/output/07-validation.md` |
| B06 | Deploy | ⬜ | `pipeline/output/08-deploy.md` |

## Commandes

```bash
# Phase A — /apex -a -s executer [AXX]-[nom] depuis pipeline/stages/[AXX]-[nom].md
# Phase B — "Code le Hero de la homepage" → section-builder orchestre le circuit d'agents
npm run dev
```

## Sources de Verite

| Domaine | Source unique |
|---------|---------------|
| Statut pipeline | Ce fichier (CLAUDE.md) |
| Donnees client | `pipeline/input/` (brief + forms + assets) |
| Brief strategique | `docs/brief-client.md` (original) |
| Analyse interne | `docs/analyse-interne.md` |
| Strategie globale | `strategie/strategie.md` |
| Liens et acces | `docs/liens-et-acces.md` |
| Contraintes design | `pipeline/output/02-art-direction/constraints.md` |
| Vocabulaire visuel | `pipeline/output/02-art-direction/visual-vocabulary.md` |
| Calibration dials | `pipeline/output/02-art-direction/project-dials.md` |
| Composants UI | `pipeline/output/02-art-direction/ui-kit.md` |
| Emotions par section | `pipeline/output/02-art-direction/emotion-map.md` |
| Contenu brand | `pipeline/output/01-brand/` |
| Donnees design (palettes, typo) | `.claude/skills/ui-ux-pro-max/data/` (CSVs — lookup systematique A02) |
| Wireframes | `pipeline/output/03.5-wireframes/` |
| Tokens CSS | `app/globals.css` |
| Stack & dependances | `pipeline/workflow/` |
| Custom subagents | `.claude/agents/` (5 agents) |
| Selection photos | `pipeline/input/assets/photo-selection.md` |
| Logo SVG | `public/logo/2025-09-14_15-27-20_UTC.svg` |

## Contexte Projet

| Cle | Valeur |
|-----|--------|
| Client | StrictFood (RD FITNESS) |
| Fondateurs | Romain Foy / Dorian Lesniak |
| Contact | +33 6 11 74 59 44 |
| Type | Landing page vitrine Premium |
| Secteur | Restauration rapide saine (Fast-Good) |
| Localisation | 88 Chemin de la Roseraie, Perpignan (Chateau Roussillon) |
| Tagline seed | "Le cheat meal qui n'en est pas un" |
| Stack | Next.js 15+ / Tailwind CSS 4 / Motion / Lenis |
| Couleurs | OKLCH |
| DA | "Dark Food Premium" |

## Input disponible

| Source | Fichier | Type |
|--------|---------|------|
| Brief strategique | `pipeline/input/brief-client.md` | Obligatoire |
| Formulaire plateforme de marque | `pipeline/input/forms/brand-platform-responses.csv` | Optionnel (CSV) |
| Manifest formulaire | `pipeline/input/forms/brand-platform-manifest.md` | Manifest |
| Analyse interne | `pipeline/input/content/analyse-interne.md` | Complementaire |
| Strategie 3 phases | `strategie/strategie.md` | Contexte strategique |
| Selection photos Instagram | `pipeline/input/assets/photo-selection.md` | Photos pour B02 |
| Logo SVG | `public/logo/2025-09-14_15-27-20_UTC.svg` | Integre header/footer |
| Carte produit | `pipeline/input/content/carte.md` | Disponible (16 produits, 5 categories) |

## ADN Visuel & Dials

| Aspect | Valeur |
|--------|--------|
| Couleur signature | Cuivre Braise — oklch(0.67 0.15 68) / #BF8522 |
| Couleur secondaire | Grenat Fume — oklch(0.42 0.10 22) / #7C3530 |
| Accent nutrition | Feuille Grillee — oklch(0.52 0.06 145) / #5C7858 |
| Background | Charbon — oklch(0.14 0.008 60) / #141210 |
| Forme / Radius | Standard 12px / Large 16px / Pill 999px / Input 8px |
| Mouvement | cubic-bezier(0.22, 1, 0.36, 1), 300-800ms, revelations progressives |
| Typographies | Space Grotesk (titres) + DM Sans (body) |
| DESIGN_VARIANCE | 5/10 |
| MOTION_INTENSITY | 6/10 |
| VISUAL_DENSITY | 3/10 |
| Curseur Food Porn | 7/10 (formulaire) |

<!-- Details flux Phase A/B dans .claude/rules/phase-b-circuit.md -->
<!-- Arborescence complete dans .claude/rules/pipeline-structure.md -->

## Contraintes

- **Performance** : Lighthouse > 90
- **Responsive** : Mobile-first
- **Accessibilite** : WCAG AA
- **Ton** : Tutoiement (valide par le client)
- **Tokens** : Pas de valeurs hardcodees (couleurs, spacing, durees → globals.css)
- **Composants** : Conformes a ui-kit.md
- **Livrable Phase 1** : Landing page uniquement (pas de Click & Collect — prevu Phase 2)

## Contexte Business

- CA actuel : 200-300EUR/jour (objectif 500EUR/jour)
- Budget mensuel : 780EUR (290EUR Web + 490EUR Social)
- Partenaires locaux : Boucherie Labourde, Pains du Soleil, Myfitcheese
- Ambition : 4-5 points de vente dans 5 ans (franchise)
- Concurrent : Fast-foods classiques (pas de concurrent direct "fast-good" identifie)

---

*Derniere mise a jour : 05/03/2026*
