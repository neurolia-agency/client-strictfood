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

### Choix retenu : Space Grotesk + DM Sans

**Synthese CSV** : Le pairing #3 (Tech Startup) est le plus equilibre pour StrictFood. Space Grotesk apporte l'angularite et la precision citees dans la plateforme ("anguleux, mineral, contraste") avec une chaleur geometrique qui preserve la convivialite. DM Sans remplace Outfit comme body : ses proportions plus geometriques et ses terminaisons plus nettes creent un meilleur contraste hierarchique avec Space Grotesk.

**Pourquoi DM Sans plutot qu'Outfit** :
- DM Sans est le companion specifiquement recommande par le CSV (#3) pour Space Grotesk
- Ses proportions legerement plus compactes offrent une meilleure lisibilite en block text
- Son caractere plus neutre-geometrique laisse la personnalite aux titres Space Grotesk
- Outfit avait ete choisi avant la consultation du CSV — DM Sans est la recommandation validee par les donnees

## Police Principale (Titres)

- **Nom** : Space Grotesk
- **Source** : Google Fonts (variable font)
- **Weights** : 300, 400, 500, 600, 700
- **Fallback** : 'Arial', sans-serif
- **Usage** : Titres (H1-H4), taglines, CTAs, elements d'emphase
- **Feeling** : Precis, anguleux, confiant, moderne — la rigueur du "Strict" dans le nom, avec une touche d'humanite dans les courbes

## Police Secondaire (Corps)

- **Nom** : DM Sans
- **Source** : Google Fonts (variable font)
- **Weights** : 300, 400, 500, 600, 700
- **Fallback** : 'Helvetica Neue', 'Helvetica', sans-serif
- **Usage** : Body text, descriptions, interface, boutons, navigation
- **Feeling** : Geometrique, lisible, neutre-precis — le confort de lecture sans personnalite envahissante, la precision du calibre

## Echelle de Tailles

| Element | Desktop | Mobile | Weight | Line-height | Font |
|---------|---------|--------|--------|-------------|------|
| H1 | 72px | 40px | 700 | 1.05 | Space Grotesk |
| H2 | 48px | 32px | 700 | 1.1 | Space Grotesk |
| H3 | 36px | 26px | 600 | 1.15 | Space Grotesk |
| H4 | 24px | 20px | 600 | 1.2 | Space Grotesk |
| H5 | 20px | 18px | 500 | 1.25 | Space Grotesk |
| Body | 18px | 16px | 400 | 1.6 | DM Sans |
| Body Large | 20px | 18px | 400 | 1.5 | DM Sans |
| Small | 14px | 14px | 400 | 1.4 | DM Sans |
| Caption | 12px | 12px | 400 | 1.3 | DM Sans |

## Variables CSS

```css
:root {
  /* Familles */
  --font-heading: 'Space Grotesk', 'Arial', sans-serif;
  --font-body: 'DM Sans', 'Helvetica Neue', 'Helvetica', sans-serif;

  /* Tailles fluides (clamp) */
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
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.04em;
  --letter-spacing-uppercase: 0.08em;
}
```

## Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300..700&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
```

## Notes d'Usage

- **H1 est reserve au hero** — une seule occurrence par page. Les sections suivantes demarrent a H2.
- **Taille minimum mobile : 16px body** — respecte pour eviter le zoom automatique sur iOS.
- **Space Grotesk en uppercase** : utiliser `letter-spacing: 0.08em` pour les labels, badges et micro-copy. Ne PAS utiliser uppercase sur les H1/H2 (trop agressif pour une marque "conviviale").
- **Contraste hierarchique** : Space Grotesk (geometrique angulaire) vs DM Sans (geometrique clean) — meme famille typographique (sans-serif geometrique) mais personnalites distinctes. Space Grotesk a du caractere (terminaisons arrondies sur squelette angulaire), DM Sans est plus neutre et efface pour laisser la place au contenu.

## Compatibilite frontend-design2

- [x] Police heading != Inter (Space Grotesk — frontend-design2 Rule 1)
- [x] Police heading != police par defaut systeme (Space Grotesk est distinctive)
- [x] Pas un Dashboard/Software UI — le choix sans-serif est pertinent pour le food premium
- [x] DM Sans est recommande par le CSV (pairing #3) pour Space Grotesk — valide par les donnees
- [x] Space Grotesk est valide par 2 entrees CSV (#3, #44) — son caractere angulaire incarne l'archetype Hero/Magician
