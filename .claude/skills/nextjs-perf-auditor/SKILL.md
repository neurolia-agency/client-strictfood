---
name: nextjs-perf-auditor
description: "Auditeur et optimiseur de performance pour sites Next.js 15+ / React 19. Analyse le code source, identifie les problemes de performance, et produit des corrections concretes. Couvre Core Web Vitals, bundle size, images, fonts, animations, et SSR/RSC patterns."
---

# Next.js Performance Auditor

## 1. OBJECTIFS DE PERFORMANCE

### Core Web Vitals — Seuils cibles
| Metrique | Cible | Critique si > | Mesure |
|----------|-------|---------------|--------|
| LCP (Largest Contentful Paint) | < 2.5s | 4.0s | Temps d'affichage du plus grand element visible |
| INP (Interaction to Next Paint) | < 200ms | 500ms | Latence des interactions utilisateur |
| CLS (Cumulative Layout Shift) | < 0.1 | 0.25 | Stabilite visuelle du layout |
| FCP (First Contentful Paint) | < 1.8s | 3.0s | Premier rendu de contenu |
| TTFB (Time to First Byte) | < 800ms | 1.8s | Reponse serveur |
| TBT (Total Blocking Time) | < 200ms | 600ms | Temps de blocage du thread principal |

### Lighthouse — Score cible : > 90 sur les 4 axes
- Performance : > 90
- Accessibility : > 90 (WCAG AA)
- Best Practices : > 90
- SEO : > 90

## 2. PROTOCOLE D'AUDIT (dans cet ordre)

### Phase 1 : Architecture & Rendering

**1.1 — Server Components vs Client Components**
- VERIFIER : Chaque fichier avec `"use client"` — est-ce justifie ?
- REGLE : Server Components par defaut. `"use client"` UNIQUEMENT pour :
  - `useState`, `useEffect`, `useRef` et autres hooks
  - Event handlers (onClick, onChange, etc.)
  - Browser APIs (window, document, localStorage)
  - Libraries client-only (framer-motion, etc.)
- PATTERN : Extraire la partie interactive dans un petit composant client, garder le parent en RSC
- ANTI-PATTERN : `"use client"` en haut d'un fichier de page ou layout entier

**1.2 — Data Fetching Waterfalls**
- VERIFIER : Les requetes de donnees en cascade (fetch A → fetch B qui depend de A → fetch C)
- REGLE : Paralleliser avec `Promise.all()` quand les requetes sont independantes
- REGLE : Utiliser `loading.tsx` pour le streaming SSR
- ANTI-PATTERN : `useEffect` + `fetch` dans un client component quand un RSC suffirait

**1.3 — Static vs Dynamic Rendering**
- VERIFIER : Les pages qui pourraient etre statiques mais sont rendues dynamiquement
- REGLE : Utiliser `generateStaticParams()` pour les pages parametriques connues
- REGLE : Les pages purement statiques (landing pages, marketing) ne doivent PAS utiliser `cookies()`, `headers()`, ou `searchParams` sans raison

### Phase 2 : Bundle & Code Splitting

**2.1 — Bundle Size Analysis**
- VERIFIER : Taille du bundle JS client avec `@next/bundle-analyzer`
- REGLE : Budget JS initial < 100KB (gzippe)
- COMMANDE : `ANALYZE=true npm run build` (si bundle-analyzer configure)

**2.2 — Dynamic Imports**
- VERIFIER : Les composants lourds charges de maniere statique
- REGLE : `next/dynamic` pour :
  - Modals, drawers, menus complexes (charges au clic)
  - Charts, maps, editeurs riches
  - Composants below-the-fold non critiques
  - Libraries > 20KB (motion, chart.js, etc.)
- PATTERN : `const HeavyComponent = dynamic(() => import('./Heavy'), { ssr: false })`

**2.3 — Tree Shaking**
- VERIFIER : Imports de libraries entieres vs imports specifiques
- ANTI-PATTERN : `import { motion } from "motion/react"` — verifier si seul motion est utilise
- ANTI-PATTERN : `import * as Icons from "lucide-react"` — importer chaque icone individuellement
- REGLE : Verifier que les re-exports dans des fichiers barrel (`index.ts`) ne cassent pas le tree-shaking

### Phase 3 : Images & Media

**3.1 — next/image Optimisation**
- VERIFIER : Toutes les `<img>` sont remplacees par `<Image>` de `next/image`
- REGLE : Chaque `<Image>` doit avoir :
  - `width` + `height` OU `fill` (evite CLS)
  - `sizes` attribut pour le responsive (evite de charger des images trop grandes)
  - `priority` sur l'image LCP (hero, above-the-fold) — max 1-2 images priority par page
  - `loading="lazy"` implicite pour le reste (defaut de next/image)
- FORMAT : Verifier que le serveur sert du WebP/AVIF (automatique avec next/image)
- TAILLE : Les images sources doivent etre optimisees (pas de PNG 5MB pour un thumbnail)

**3.2 — Images above-the-fold**
- VERIFIER : L'image hero a `priority={true}`
- VERIFIER : Pas de `loading="lazy"` sur les images above-the-fold
- REGLE : Preconnect vers le CDN images si externe : `<link rel="preconnect" href="..." />`

### Phase 4 : Fonts

**4.1 — Font Loading Strategy**
- VERIFIER : Utilisation de `next/font` (local ou Google)
- REGLE : `next/font` auto-heberge les fonts et elimine les requetes externes
- REGLE : `display: 'swap'` pour eviter FOIT (Flash of Invisible Text)
- REGLE : Precharger uniquement les variantes utilisees (pas toutes les graisses)
- ANTI-PATTERN : `<link href="fonts.googleapis.com/...">` dans le HTML — utiliser `next/font/google`
- VERIFIER : Nombre de fonts charges — max 3 familles, max 4-5 variantes total

**4.2 — Font Subsetting**
- REGLE : Si font locale, verifier que le subset est limite (latin, latin-ext si necessaire)
- REGLE : Formats modernes : woff2 uniquement (sauf besoin IE11)

### Phase 5 : CSS & Styling

**5.1 — Tailwind CSS Performance**
- VERIFIER : Le purge CSS fonctionne (pas de classes inutilisees en production)
- REGLE : Pas de `@apply` dans les composants (inline les classes Tailwind)
- VERIFIER : Pas de CSS-in-JS runtime (styled-components, emotion) qui ajoute du JS au bundle

**5.2 — Critical CSS**
- VERIFIER : Le CSS critique est inline dans le HTML (automatique avec Next.js)
- ANTI-PATTERN : Gros fichiers CSS importes qui bloquent le rendu

### Phase 6 : Animations & Motion

**6.1 — Animation Performance**
- REGLE : Animer UNIQUEMENT `transform` et `opacity` (proprietes composites GPU-accelerees)
- ANTI-PATTERN : Animer `width`, `height`, `top`, `left`, `margin`, `padding` (declenchent layout/paint)
- REGLE : `will-change: transform` sur les elements animes en continu (pas partout)
- REGLE : Pas de `window.addEventListener('scroll')` — utiliser IntersectionObserver ou Framer Motion

**6.2 — Framer Motion / Motion Specifics**
- VERIFIER : Les composants Motion sont dans des Client Components isoles (pas dans un layout RSC)
- REGLE : `useMotionValue` + `useTransform` pour les animations continues (pas useState)
- REGLE : `AnimatePresence` autour des listes dynamiques
- REGLE : `viewport={{ once: true }}` sur les animations au scroll (ne pas re-declencher)
- ANTI-PATTERN : Animation infinie sur un composant parent qui re-render ses enfants

**6.3 — prefers-reduced-motion**
- VERIFIER : Les animations respectent `prefers-reduced-motion: reduce`
- REGLE : Utiliser `useReducedMotion()` de framer-motion ou `@media (prefers-reduced-motion: reduce)`

### Phase 7 : Third-Party & External

**7.1 — Third-Party Scripts**
- VERIFIER : Scripts externes charges avec `next/script` et strategie appropriee
- REGLE : `strategy="lazyOnload"` pour analytics, chat widgets, etc.
- REGLE : `strategy="afterInteractive"` pour les scripts necessaires rapidement
- ANTI-PATTERN : `<script src="...">` en dur dans le HTML

**7.2 — Preconnect & DNS Prefetch**
- REGLE : `<link rel="preconnect" href="...">` pour les domaines tiers critiques
- REGLE : `<link rel="dns-prefetch" href="...">` pour les domaines tiers secondaires

### Phase 8 : Build & Deploy

**8.1 — Build Analysis**
- COMMANDE : `npm run build` — verifier les routes statiques vs dynamiques dans l'output
- VERIFIER : Pas de pages marquees "dynamic" qui pourraient etre statiques
- VERIFIER : Taille des chunks dans le build output

**8.2 — Headers & Caching**
- REGLE : Assets statiques (images, fonts, JS) avec `Cache-Control: public, max-age=31536000, immutable`
- REGLE : Pages dynamiques avec revalidation appropriee
- VERIFIER : `next.config.js` — headers de cache configures

## 3. FORMAT DE RAPPORT

```markdown
## Rapport d'Audit Performance

### Score estime : [X/100]

### Problemes critiques (Impact Lighthouse > 10 points)
1. [CRIT-001] Description — fichier:ligne — Impact: LCP/CLS/TBT
   **Correction** : [code ou instruction precise]

### Problemes importants (Impact 3-10 points)
1. [IMP-001] Description — fichier:ligne
   **Correction** : [code ou instruction precise]

### Optimisations recommandees (Impact < 3 points)
1. [OPT-001] Description
   **Correction** : [code ou instruction precise]

### Points positifs
- [liste des bonnes pratiques deja en place]
```

## 4. CORRECTIONS AUTOMATIQUES

Quand un probleme est identifie, l'auditeur DOIT :
1. **Diagnostiquer** : Citer le fichier, la ligne, et le probleme exact
2. **Mesurer** : Estimer l'impact sur les Core Web Vitals
3. **Corriger** : Produire le code corrige (pas juste une recommendation)
4. **Verifier** : Si possible, rebuilder et comparer

### Priorite des corrections
| Priorite | Type | Action |
|----------|------|--------|
| P0 | Bloquant Lighthouse (< 50) | Corriger immediatement |
| P1 | Impact CWV mesurable | Corriger dans la session |
| P2 | Best practice non respectee | Signaler + corriger si simple |
| P3 | Optimisation marginale | Signaler uniquement |

## 5. CHECKLIST RAPIDE

Pre-flight avant deploiement :
- [ ] Toutes les images utilisent `next/image` avec `sizes` et dimensions
- [ ] Image hero a `priority={true}`
- [ ] Fonts via `next/font` avec `display: 'swap'`
- [ ] `"use client"` justifie sur chaque fichier qui l'utilise
- [ ] Pas d'import de library entiere (tree-shaking OK)
- [ ] Animations sur `transform`/`opacity` uniquement
- [ ] `prefers-reduced-motion` respecte
- [ ] Build output : routes statiques quand possible
- [ ] Pas de scripts tiers bloquants
- [ ] `npm run build` sans warning de taille de bundle
