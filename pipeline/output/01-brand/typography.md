# Typographie

<!-- Derive de : 00-platform.md > Archetype Magician/Hero (personnalite visuelle), Values (impression) -->
<!-- Source CSV : .claude/skills/ui-ux-pro-max/data/typography.csv — pairings #3, #7, #39, #49, #33 -->

## Processus de selection (ui-ux-pro-max)

### Pairings CSV consultes

| # | Nom | Heading | Body | Pertinence StrictFood |
|---|-----|---------|------|----------------------|
| 3 | Tech Startup | Space Grotesk | DM Sans | Space Grotesk = anguleux, bold, geometrique. DM Sans = body ideal, geometrique, lisible |
| 7 | Bold Statement | Bebas Neue | Source Sans 3 | Dramatique et impactful — archetype Hero. Mais Bebas = all-caps, conflit convivialite |
| 39 | Startup Bold | Clash Display | Satoshi | Bold, confiant, anguleux — Hero + Magician. Display font sur Fontshare (pas Google) |
| 49 | Sports/Fitness | Barlow Condensed | Barlow | Fitness/athletic. Trop "salle de sport", pas assez "premium food" |
| 33 | Restaurant Menu | Playfair Display SC | Karla | Secteur restaurant. Serif + small caps = classique, pas "anguleux, mineral" |
| 10 | Retro Vintage | Abril Fatface | Merriweather | Breweries, restaurants. Registre vintage, pas coherent avec transformation Magician |

### Evaluation par archetype

**#7 Bebas Neue + Source Sans 3** :
- Hero : Maximum impact, assertif, dominance typographique
- Magician : Dramatique mais trop rigide — l'all-caps ne permet pas la nuance
- Convivialite : L'uppercase sur les gros titres est "agressif pour une marque conviviale" (00-platform.md)
- REJETE : conflit direct avec la valeur Convivialite

**#39 Clash Display + Satoshi** :
- Hero : Bold, confiant, geometrie assertive. Presence visuelle imposante
- Magician : Les proportions larges du Clash Display creent une "tension geometrique"
- Inconvenient : Clash Display est sur Fontshare (pas Google Fonts) — necessite font locale
- Candidat fort mais complexite d'integration plus elevee

**#3 Space Grotesk + DM Sans** :
- Hero : Anguleux, geometrique, precis. Presence affirmee aux grands poids
- Magician : Le contraste arrondi/angulaire dans les lettres incarne la "transformation" (squelette angulaire, terminaisons arrondies)
- Convivialite : Chaleur geometrique, accessible, pas agressif
- DM Sans body : Geometrique, excellente lisibilite, weight range complet, recommande par le CSV comme companion ideal de Space Grotesk
- RETENU : equilibre optimal entre impact (Hero), transformation (Magician), et accessibilite (Convivialite)

**#49 Barlow Condensed + Barlow** :
- Trop "salle de sport" et utilitaire — manque de personnalite premium
- REJETE : le registre "athletic" n'est pas le registre principal (Magician > Hero)

### Choix retenu : Oswald (display) + Space Grotesk (titres) + DM Sans (body)

**Synthese** : Le systeme a 3 polices combine l'impact maximal d'Oswald pour le hero/H1, la geometrie precise de Space Grotesk pour les titres H2-H5, et la lisibilite neutre de DM Sans pour le body. Oswald apporte la verticalite condensee et la puissance brute du hero statement, tandis que Space Grotesk conserve son role de police de titrage avec l'angularite et la chaleur geometrique qui preserve la convivialite.

**Pourquoi Oswald pour le display/H1** :
- Condensed bold qui maximise l'impact sur les gros titres hero (display size)
- Verticalite affirmee qui contraste avec les proportions plus larges de Space Grotesk
- Poids 700 uniquement — usage restreint au H1/hero, pas de dilution sur d'autres niveaux

**Pourquoi DM Sans plutot qu'Outfit** :
- DM Sans est le companion specifiquement recommande par le CSV (#3) pour Space Grotesk
- Ses proportions legerement plus compactes offrent une meilleure lisibilite en block text
- Son caractere plus neutre-geometrique laisse la personnalite aux titres Space Grotesk
- Outfit avait ete choisi avant la consultation du CSV — DM Sans est la recommandation validee par les donnees

## Police Display (H1/Hero)

- **Nom** : Oswald
- **Source** : Google Fonts
- **Variable CSS** : `--font-display`
- **Weights charges** : 700
- **Fallback** : ui-sans-serif, system-ui, sans-serif
- **Usage** : H1 hero uniquement (display size), une seule occurrence par page
- **Feeling** : Condensed, vertical, puissant — l'impact brut du "cheat meal qui n'en est pas un"

## Police Heading (H2-H5)

- **Nom** : Space Grotesk
- **Source** : Google Fonts
- **Variable CSS** : `--font-heading`
- **Weights charges** : 500, 600, 700
- **Fallback** : ui-sans-serif, system-ui, sans-serif
- **Usage** : Titres H2-H5, taglines, CTAs, elements d'emphase
- **Feeling** : Precis, anguleux, confiant, moderne — la rigueur du "Strict" dans le nom, avec une touche d'humanite dans les courbes

## Police Body (Corps)

- **Nom** : DM Sans
- **Source** : Google Fonts
- **Variable CSS** : `--font-body`
- **Weights charges** : 300, 400, 500, 600
- **Fallback** : ui-sans-serif, system-ui, sans-serif
- **Usage** : Body text, descriptions, interface, boutons, navigation
- **Feeling** : Geometrique, lisible, neutre-precis — le confort de lecture sans personnalite envahissante, la precision du calibre

## Echelle de Tailles (Fluid)

| Element | Taille (clamp) | Weight | Line-height | Font |
|---------|---------------|--------|-------------|------|
| Display (H1 hero) | clamp(3.5rem, 8vw + 1rem, 7.5rem) | 700 | 1.05 | Oswald |
| H1 | clamp(2.5rem, 5vw + 1rem, 4.5rem) | 700 | 1.05 | Oswald |
| H2 | clamp(2rem, 3.5vw + 0.5rem, 3rem) | 700 | 1.15 | Space Grotesk |
| H3 | clamp(1.625rem, 2.5vw + 0.5rem, 2.25rem) | 600 | 1.15 | Space Grotesk |
| H4 | clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem) | 600 | 1.2 | Space Grotesk |
| H5 | clamp(1.125rem, 1vw + 0.5rem, 1.25rem) | 500 | 1.25 | Space Grotesk |
| Body | clamp(1rem, 0.5vw + 0.875rem, 1.125rem) | 400 | 1.6 | DM Sans |
| Body Large | clamp(1.125rem, 0.75vw + 0.875rem, 1.25rem) | 400 | 1.6 | DM Sans |
| Small | 0.875rem | 400 | 1.4 | DM Sans |
| Caption | 0.75rem | 400 | 1.4 | DM Sans |

## Variables CSS

```css
:root {
  /* Familles */
  --font-display: 'Oswald', ui-sans-serif, system-ui, sans-serif;
  --font-heading: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
  --font-body: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
  --font-sans: var(--font-body);

  /* Tailles fluides (clamp) */
  --font-size-display: clamp(3.5rem, 8vw + 1rem, 7.5rem);
  --font-size-h1: clamp(2.5rem, 5vw + 1rem, 4.5rem);
  --font-size-h2: clamp(2rem, 3.5vw + 0.5rem, 3rem);
  --font-size-h3: clamp(1.625rem, 2.5vw + 0.5rem, 2.25rem);
  --font-size-h4: clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem);
  --font-size-h5: clamp(1.125rem, 1vw + 0.5rem, 1.25rem);
  --font-size-body: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);
  --font-size-body-lg: clamp(1.125rem, 0.75vw + 0.875rem, 1.25rem);
  --font-size-small: 0.875rem;
  --font-size-caption: 0.75rem;

  /* Poids */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Line heights */
  --line-height-tight: 1.05;
  --line-height-snug: 1.15;
  --line-height-normal: 1.4;
  --line-height-relaxed: 1.6;
  --line-height-loose: 1.7;

  /* Letter spacing */
  --letter-spacing-tight: -0.02em;
  --letter-spacing-display: -0.04em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.04em;
  --letter-spacing-uppercase: 0.08em;
}
```

## Import (Next.js)

```tsx
import { Space_Grotesk, DM_Sans, Oswald } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["700"],
});

// Dans <html> :
// className={`${spaceGrotesk.variable} ${dmSans.variable} ${oswald.variable}`}
```

## Notes d'Usage

- **Oswald est reserve au hero/H1** — une seule occurrence par page, a la taille `--font-size-display`. Les sections suivantes demarrent a H2 en Space Grotesk.
- **3 niveaux typographiques distincts** : Oswald (display/impact) → Space Grotesk (structure/titrage) → DM Sans (lecture/interface). Chaque police a un role precis, pas d'interchangeabilite.
- **Taille minimum mobile : 16px body** — respecte pour eviter le zoom automatique sur iOS.
- **Space Grotesk en uppercase** : utiliser `letter-spacing: 0.08em` pour les labels, badges et micro-copy. Ne PAS utiliser uppercase sur les H1/H2 (trop agressif pour une marque "conviviale").
- **Contraste hierarchique** : Oswald (condensed vertical) vs Space Grotesk (geometrique angulaire) vs DM Sans (geometrique clean) — trois sans-serifs aux personnalites distinctes qui creent une hierarchie visuelle naturelle.

## Compatibilite frontend-design2

- [x] Police heading != Inter (Space Grotesk — frontend-design2 Rule 1)
- [x] Police display != police heading (Oswald vs Space Grotesk — hierarchie distincte)
- [x] Police heading != police par defaut systeme (Space Grotesk est distinctive)
- [x] Pas un Dashboard/Software UI — le choix sans-serif est pertinent pour le food premium
- [x] DM Sans est recommande par le CSV (pairing #3) pour Space Grotesk — valide par les donnees
- [x] Space Grotesk est valide par 2 entrees CSV (#3, #44) — son caractere angulaire incarne l'archetype Hero/Magician
