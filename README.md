# StrictFood - Site Web

Site vitrine "Dark Food Premium" pour StrictFood, fast-good healthy a Perpignan. Pipeline website-workflow v2.

## Quick Start

```bash
cd client-strictfood/

# 1. Verifier les inputs
# - pipeline/input/brief-client.md (brief strategique)
# - pipeline/input/forms/brand-platform-responses.csv (formulaire plateforme de marque)
# - pipeline/input/forms/brand-platform-manifest.md (mapping CSV)

# 2. Executer le pipeline (Phase A)
/apex -a -s executer A01-init depuis pipeline/stages/A01-init.md

# 3. Initialiser Next.js (avant Phase B)
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false
npm install motion lenis react-hook-form @hookform/resolvers zod sonner lucide-react
```

## Structure

```
client-strictfood/
├── CLAUDE.md                      # Statut pipeline + contexte projet
├── README.md                      # Ce fichier
│
├── docs/                          # Documents originaux (reference)
│   ├── brief-client.md
│   ├── analyse-interne.md
│   └── liens-et-acces.md
│
├── strategie/                     # Strategie 3 phases Neurolia
│   └── strategie.md
│
├── formulaires/                   # Formulaires deployes (Vercel)
│   ├── formulaire-plateforme/
│   └── devis-v2.html
│
├── pipeline/                      # WORKFLOW v2
│   ├── input/                     # Donnees client (source de verite)
│   │   ├── brief-client.md        # Brief strategique (OBLIGATOIRE)
│   │   ├── forms/                 # Formulaires externes (CSV + manifests)
│   │   │   ├── brand-platform-responses.csv
│   │   │   └── brand-platform-manifest.md
│   │   ├── assets/                # Logo, images fournies
│   │   ├── references/
│   │   │   ├── sites.md
│   │   │   └── screenshots/
│   │   ├── content/               # Textes et analyses
│   │   │   └── analyse-interne.md
│   │   └── typographies/
│   │
│   ├── output/                    # Artifacts generes (immutables)
│   │   ├── 00-brief.md            # A01
│   │   ├── 01-brand/              # A02 (8 fichiers)
│   │   ├── 02-art-direction/      # A03 (7 fichiers)
│   │   ├── 03-sitemap.md          # A04
│   │   ├── 03.5-wireframes/       # A05
│   │   ├── 07-validation.md       # B05
│   │   └── 08-deploy.md           # B06
│   │
│   ├── stages/                    # Instructions par etape (A01-A06, B01-B06)
│   │
│   └── workflow/                  # Documentation process
│       ├── DEPENDENCIES.md
│       ├── DESIGN_STACK.md
│       └── README.md
│
├── _preflight/                    # Contexte pre-coding (genere par agents)
│
├── app/                           # CODE NEXT.JS (Phase B)
│
├── components/                    # Composants React (Phase B)
│
└── .claude/
    ├── agents/                    # Custom subagents (5 agents)
    ├── rules/                     # Regles contextuelles
    ├── settings.json
    └── skills/                    # Skills (section-builder, frontend-design2)
```

## Stack

- **Framework** : Next.js 15+
- **Styling** : Tailwind CSS 4
- **Animations** : Motion + Lenis
- **Couleurs** : OKLCH
- **Deployment** : Vercel

---

**Version** : 2.0
**Date** : 2026-03-05
