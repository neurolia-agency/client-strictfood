# Regles visuelles, correction photo et Instagram Safe Zones

## Trois familles visuelles

| Famille | Templates / Modes | Fond | Usage |
|---------|------------------|------|-------|
| **Dark Premium** | educatif, interactif, annonce | Charbon #141210 | Information, engagement |
| **Vitrine** | vitrine.html (produit + composant) | Gradient colore chaud | Appetit, showcase |
| **Visuel plein cadre** | full-ia food, full-ia lifestyle | Image plein cadre | Impact visuel |

## Sublimation texte (Dark Premium)

Les templates Dark Premium integrent un systeme de sublimation du texte. Ces classes sont **deja dans les templates** -- le pipeline n'a rien a ajouter :

| Classe | Role |
|--------|------|
| `text-depth` | Ombre multi-couche lisibilite |
| `mark-tape` | Bande inclinee +1.5deg avec bordures accent |
| `filter: brightness(1.2)` | Boost couleur accent |

## Systeme overlay adaptatif + lisibilite texte

Le `gradient-left` (600px) couvre UNIQUEMENT la zone texte. Le produit conserve ses couleurs pleines. Texte blanc pur `#fff` + accent `var(--accent)`. PAS d'opacite reduite.

## Correction photo -- Alignement horizontal et lisibilite

Lors du template fill, apres le remplacement des placeholders :

### Rotation -- Alignement horizontal

Si `{{PHOTO_ALIGN}}` != `"--"` dans le data mapping :
1. Verifier `{{PHOTO_TRANSFORM}}` dans data.md
2. Si valeur connue -> appliquer directement
3. Si `none` -> rendre, evaluer, iterer par increments de 0.3-0.5deg

### Centrage horizontal

Toujours verifier que l'element principal est centre horizontalement. Utiliser `object-position` puis `translateX()` si insuffisant.

## Instagram Safe Zones (1080x1920)

| Zone | Pixels | Variable CSS |
|------|--------|-------------|
| Haut | 250px (y:0->250) | `--safe-top` |
| Bas | 80px (y:1840->1920) | `--safe-bottom` |
| Cotes | 65px | `--safe-side` |

**Zone safe pour le contenu** : 950px x 1580px. Logo EN BAS sous la tagline.
