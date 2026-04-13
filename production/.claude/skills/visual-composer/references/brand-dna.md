# Brand DNA — StrictFood Graphic Vocabulary

Ce fichier contient les 23 éléments graphiques disponibles avec leur CSS exact. C'est ta palette de briques. Pioche 3-7 éléments par composition.

## Palette (4 couleurs UNIQUEMENT)

```css
--noir:    #000000;
--charbon: #1a1714;    /* Warm dark — fond principal */
--ambre:   #FABA43;    /* Golden copper — accent signature */
--blanc:   #ffffff;
```

Règle d'inversion : fond charbon → éléments ambre. Fond ambre → éléments charbon.

## Typographie

| Usage | Font | Poids | Style |
|-------|------|-------|-------|
| Display, stats, noms produit | `'Oswald', sans-serif` | 700 | uppercase, letter-spacing 3-6px |
| Labels, sous-titres, tagline | `'Space Grotesk', sans-serif` | 600-700 | uppercase, letter-spacing 2-4px |
| Body, descriptions, data | `'DM Sans', sans-serif` | 400-500 | Normal, line-height 1.4-1.5 |

Import Google Fonts :
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Oswald:wght@500;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

---

## Les 23 éléments graphiques

### 1. BARRE DIAGONALE
Bande épaisse ambre traversant le canvas en diagonale.
```css
.barre-diag {
  position: absolute;
  top: 200px; left: -100px;
  width: 1400px; height: 65px;
  background: linear-gradient(90deg,
    rgba(250,186,67,0.50) 0%, rgba(237,190,68,0.35) 40%,
    rgba(250,186,67,0.08) 80%, transparent 100%);
  transform: rotate(-25deg);
  z-index: 2; pointer-events: none;
}
```
Variante : changer le top/left pour repositionner, le rotate pour l'angle.

### 2. LIGNES PARALLÈLES
1-3 lignes fines accompagnant la barre diagonale.
```css
.ligne-para {
  position: absolute;
  width: 1300px; height: 2px;
  background: linear-gradient(90deg, transparent,
    rgba(237,190,68,0.20) 20%, rgba(237,190,68,0.12) 60%, transparent);
  transform: rotate(-25deg);
  z-index: 2; pointer-events: none;
}
```
Espacer de 30px verticalement. Varier l'opacité (0.08-0.20).

### 3. TECH-FRAME
Coins en L de filets ambre fins.
```css
/* Coin haut-gauche */
.tech-tl {
  position: absolute;
  top: 50px; left: 35px;
  width: 120px; height: 80px;
  border-top: 1.5px solid rgba(250,186,67,0.25);
  border-left: 1.5px solid rgba(250,186,67,0.25);
  z-index: 5;
}
/* Coin bas-droite */
.tech-br {
  position: absolute;
  bottom: 50px; right: 35px;
  width: 120px; height: 80px;
  border-bottom: 1.5px solid rgba(250,186,67,0.15);
  border-right: 1.5px solid rgba(250,186,67,0.15);
  z-index: 5;
}
```
Utiliser 2 coins (diagonaux) ou 4 coins. Ajuster position/taille.

### 4. RECTANGLE INCLINÉ
Cadre rectangulaire décoratif rotaté.
```css
.rect-deco {
  position: absolute;
  width: 180px; height: 260px;
  border: 2px solid rgba(237,190,68,0.15);
  border-radius: 8px;
  transform: rotate(8deg);
  z-index: 2; pointer-events: none;
}
```

### 5. CARRÉ INCLINÉ
Petit carré décoratif.
```css
.carre-deco {
  position: absolute;
  width: 60px; height: 60px;
  border: 2px solid rgba(237,190,68,0.12);
  transform: rotate(15deg);
  z-index: 2; pointer-events: none;
}
```

### 6. CERCLES
Cercles décoratifs en bordure ambre fine.
```css
.cercle-deco {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid rgba(237,190,68,0.10);
  z-index: 2; pointer-events: none;
}
```
Tailles : 80-120px. Variante : cercle grand (200px+) comme zone atmosphérique.

### 7. DOT CLUSTERS
Grilles de petits points ambre.
```css
.dots { display: flex; flex-direction: column; gap: 10px; position: absolute; z-index: 2; }
.dots .row { display: flex; gap: 10px; }
.dots .dot { width: 4px; height: 4px; border-radius: 50%; background: rgba(237,190,68,0.18); }
```
Configurations : 2×2, 3×3, 2×3. Placer dans les zones de respiration.

### 8. FILET DORÉ
Bordure ambre fine sur les bords du canvas.
```css
.filet {
  position: absolute;
  inset: 8px;
  border: 2.5px solid rgba(250,186,67,0.40);
  border-radius: 4px;
  z-index: 10; pointer-events: none;
}
```

### 9. TAPE-BAND
Bande horizontale avec tagline en boucle. Signature feed.
```css
.tape-band {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 48px;
  background: #FABA43;
  display: flex; align-items: center;
  overflow: hidden; z-index: 20;
}
.tape-band-track {
  white-space: nowrap;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700; font-size: 16px;
  letter-spacing: 3px; text-transform: uppercase;
  color: #141210;
}
.tape-band-track em { font-style: italic; color: #000; }
```
Contenu : `LE CHEAT MEAL <em>QUI N'EN EST PAS UN</em> · ` répété 5-6 fois.

### 10. GOLDEN BOKEH
Cercles flous ambre simulant un éclairage chaud.
```css
.bokeh-dot {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle,
    rgba(250,186,67,0.35) 0%,
    rgba(250,186,67,0.08) 50%,
    transparent 70%);
  filter: blur(8px);
}
```
Tailles : 25-120px. Opacité : 10-35%. Disperser 4-8 instances. Plus gros = plus flou.

### 11. EMBER PARTICLES
Points lumineux avec glow.
```css
.ember {
  position: absolute;
  border-radius: 50%;
  width: 5px; height: 5px;
  background: #EDBE44;
  box-shadow: 0 0 10px 4px rgba(237,190,68,0.45);
  z-index: 4;
}
```
Variante blanche : `background: rgba(255,255,255,0.40); box-shadow: 0 0 8px 3px rgba(255,255,255,0.15);`

### 12. GRAIN FILM
Texture obligatoire anti-IA.
```css
.grain {
  position: absolute; inset: 0; z-index: 50;
  pointer-events: none; opacity: 0.06;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E");
  background-size: 256px;
}
```
TOUJOURS présent. Opacité : 0.04 (léger) à 0.08 (heavy).

### 13. GLOW AMBRE (⚠️ OBLIGATOIRE sur fond charbon)
Zones de lumière ambre qui donnent vie au fond. C'est la différence entre "noir plat" et "Dark Premium". TOUTE composition sur fond charbon DOIT avoir au minimum le glow principal. Les 3 couches :

**Glow principal** (~30% du canvas, brillance forte) :
```css
.glow-main {
  position: absolute;
  top: -120px; left: -150px;
  width: 1300px; height: 950px;
  background: radial-gradient(ellipse 100% 90% at 35% 35%,
    rgba(250,186,67,0.88) 0%,
    rgba(250,186,67,0.55) 30%,
    rgba(250,186,67,0.18) 55%,
    transparent 72%);
  z-index: 1; pointer-events: none;
}
```
Position variable selon le layout. C'est la zone de chaleur qui crée le dégradé charbon→ambre.

**Glow accent** (zone secondaire, côté opposé) :
```css
.glow-accent {
  position: absolute;
  top: 400px; right: -100px;
  width: 700px; height: 600px;
  background: radial-gradient(ellipse at 60% 40%,
    rgba(237,190,68,0.25) 0%, transparent 60%);
  z-index: 1; pointer-events: none;
}
```

**Glow bas** (chaleur subtile en bas) :
```css
.glow-bottom {
  position: absolute;
  bottom: 100px; left: 100px;
  width: 500px; height: 400px;
  background: radial-gradient(circle,
    rgba(250,186,67,0.12) 0%, transparent 60%);
  z-index: 1; pointer-events: none;
}
```

Sur fond noir pur (statements) : glow plus subtil (opacity ×0.15) mais TOUJOURS présent.

### 14. LOGO
```html
<img src="file://[CHEMIN_ABSOLU]/production/posts-stories/stories/_templates/_base/logo.svg"
     style="width: 350px; opacity: 0.80;" />
```
**MINIMUM 350px de large. MINIMUM opacity 70%.** Placer typiquement en bas, centré ou aligné.

### 15. TAGLINE
```html
<div style="font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:34px; color:#fff;">
  Le cheat meal <em style="color:#FABA43; font-style:italic;">qui n'en est pas un</em>
</div>
```
Sur fond ambre : em en charbon (#141210).

### 16. BURGER ICON SVG
Icône burger stylisée pour texture décorative.
```html
<svg viewBox="295 -2 62 57" fill="#EDBE44" style="position:absolute; width:80px; opacity:0.06; transform:rotate(15deg);">
  <path d="M301.14,27.2s23.15-7.06,48.17-6.88c9.57.07-2.47-22.65-27.13-20.12-.26.03-.53.07-.79.12-22.86,4.79-23.62,19.86-23.62,19.86,0,0-2.25,8.21,3.37,7.02Z"/>
  <path d="M328.32,35.59c-17.57,3.75-2-2.84,15.01-3.21,8.42-.18,6.69-3.05-2.32-2.69-47.3,1.94.58-3.37,9.16-4.11,1.12-.1,2.05-2.69-1.21-2.84,0,0-29.98-.18-45.5,8-17.38,9.16,19.68.42,21.33,1.58,0,0-13.48,2.74-20.26,6.71-5.93,3.47,30.72-3.81,49.17-2.81,9,.49-3.71-5.25-25.38-.63Z"/>
  <path d="M301.55,49.28c5.53,3.9,42.86,7.27,51.08-6.11,4.37-10.48-60.87-1.63-51.08,6.11Z"/>
</svg>
```
Opacité : 4-12%. Tailles : 40-500px. Disperser 2-5 instances. Sur fond ambre : fill="#141210".

### 17. WALLPAPER KEYWORDS
Mots-clés brand dispersés en arrière-plan.
```html
<div style="position:absolute; font-family:'Oswald',sans-serif; font-weight:700;
     font-size:48px; color:rgba(250,186,67,0.10); transform:rotate(-18deg);
     top:300px; left:50px;">PROTÉINES</div>
```
Mots disponibles : PROTÉINES, SAIN, ZÉRO HUILE, AIR FRYER, PAIN NOIR, FRESH, CLEAN, STRICT, STRICT FOOD'S, HEALTHY, ARTISANAL, LOCAL, CHALEUR PULSÉE, SAVEURS, PLAISIR, GOURMAND, VRAI.
Opacité : 5-15%. Angles : -45° à +45°. Mélanger 3 tailles (32/48/72px).

### 18. PHOTO FRAME
Cadre doré autour d'une photo produit.
```css
.photo-frame {
  border: 3px solid rgba(250,186,67,0.55);
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(250,186,67,0.20),
    0 25px 80px rgba(0,0,0,0.55),
    0 8px 30px rgba(0,0,0,0.35);
}
.photo-frame img { width: 100%; height: 100%; object-fit: cover; }
```

### 19. PRODUCT NAME
```css
.product-name {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 110px; /* 85-120px selon contexte */
  color: #fff;
  text-transform: uppercase;
  line-height: 0.92;
  letter-spacing: -2px;
  transform: rotate(-0.4deg);
  text-shadow: 0 0 40px rgba(0,0,0,0.40), 0 4px 20px rgba(0,0,0,0.50);
}
.product-name .accent { color: #EDBE44; }
```

### 20. LABEL BADGE
```css
.label-badge {
  display: inline-block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 22px; font-weight: 700;
  color: #EDBE44;
  text-transform: uppercase;
  letter-spacing: 6px;
  padding: 5px 18px;
  border: 2px solid rgba(237,190,68,0.45);
  border-radius: 6px;
}
```

### 21. STAT HERO
```css
.stat-value {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 160px; /* 100-220px */
  color: #FABA43;
  line-height: 0.85;
  letter-spacing: -3px;
  transform: rotate(-0.5deg);
  text-shadow: 0 0 40px rgba(250,186,67,0.25);
}
.stat-label {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: rgba(255,255,255,0.55);
  text-transform: uppercase;
  letter-spacing: 8px;
}
```

### 22. DATA ROW
```html
<div style="font-family:'DM Sans',sans-serif; font-size:22px; color:rgba(255,255,255,0.65);">
  <strong style="color:#FABA43;">596</strong> kcal · 
  <strong style="color:#FABA43;">0%</strong> huile · 
  Pain noir sésame
</div>
```

### 23. BODY TEXT
```css
.body-text {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 30px;
  color: rgba(255,255,255,0.85);
  line-height: 1.4;
}
.body-text strong { color: #FABA43; font-weight: 700; }
```
