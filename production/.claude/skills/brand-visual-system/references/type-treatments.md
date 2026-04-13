# Type Treatments — Techniques typographiques pour Instagram

Techniques SVG/CSS pour transformer la typographie en element graphique de marque.
Toujours utiliser les fonts de la marque — JAMAIS de font systeme generique (Arial, Impact).

---

## Principes

1. **La typo EST un brand element.** Sur Instagram, le texte in-image est vu avant d'etre lu.
   Sa forme, son poids, sa couleur font partie de l'identite.
2. **Une seule technique par post.** Ne pas mixer stroke + outline + shadow sur le meme visuel.
3. **Hierarchie par contraste, JAMAIS par opacite.** Differencier par taille, poids et couleur.
   Pas de texte a 0.6 d'opacite — c'est un marqueur de template generique.
4. **Tester a 375px** (iPhone). Si le texte est illisible a cette taille, c'est trop fin ou trop petit.

---

## 1. Filled — Le standard (usage principal)

Texte plein, couleur vive sur fond contraste. Simple, lisible, impactant.

```svg
<text x="50%" y="50%" text-anchor="middle" dominant-baseline="central"
      font-family="[BRAND FONT], sans-serif" font-weight="700" font-size="64"
      fill="[ACCENT COLOR]" letter-spacing="2" text-transform="uppercase">
  NOM PRODUIT
</text>
```

**Quand l'utiliser** : 60% des cas. Noms de produits, titres, mots-cles.

---

## 2. Stroke (contour)

Texte avec contour epais — expressif, food, promo.

```svg
<text font-family="[BRAND FONT], sans-serif" font-weight="700" font-size="80"
      fill="[ACCENT]" stroke="[CONTRAST]" stroke-width="4"
      paint-order="stroke fill" letter-spacing="2">
  -30%
</text>
```

**IMPORTANT** : toujours `paint-order="stroke fill"` sinon le stroke couvre le fill.

**Variantes :**
- `fill="white" stroke="[COLOR]"` — texte blanc cerne de couleur (sur fond photo)
- `fill="[ACCENT]" stroke="[DARK]"` — accent cerne sombre (lisibilite maximale)
- `stroke-width` : 3-6 selon la taille du texte

**Quand l'utiliser** : promos, prix, annonces. ~15% des cas.

---

## 3. Outline seul (ghost type)

Texte vide, contour fin. Editorial, luxe, minimaliste.

```svg
<text font-family="[BRAND FONT], sans-serif" font-weight="700" font-size="72"
      fill="none" stroke="[COLOR]" stroke-width="1.5" letter-spacing="3">
  PREMIUM
</text>
```

**Quand l'utiliser** : mots secondaires, fond de composition, style editorial. ~10%.

---

## 4. Mix filled + outline

Deux mots, deux traitements. Le mot principal = filled, le secondaire = outline.
Cree du dynamisme et de la hierarchie.

```svg
<!-- Mot 1 : filled -->
<text x="50%" y="40%" text-anchor="middle"
      font-family="[BRAND FONT]" font-weight="700" font-size="64"
      fill="[ACCENT]" letter-spacing="2">STRICT</text>
<!-- Mot 2 : outline -->
<text x="50%" y="60%" text-anchor="middle"
      font-family="[BRAND FONT]" font-weight="700" font-size="64"
      fill="none" stroke="[ACCENT]" stroke-width="1.5" letter-spacing="3">MAX BOEUF</text>
```

**Quand l'utiliser** : noms de produits en 2 lignes, titres longs. ~15%.

---

## 5. Condensed ultra-bold

Typo condensee enorme qui remplit le cadre. Impact maximal.

```svg
<text x="50%" y="50%" text-anchor="middle"
      font-family="[CONDENSED FONT], sans-serif" font-weight="900"
      font-size="96" letter-spacing="-3" fill="[COLOR]">
  MENU DU JOUR
</text>
```

**Quand l'utiliser** : annonces, titres courts (2-4 mots), texte qui doit frapper. ~10%.

---

## 6. Prix / chiffre impactant

Chiffre geant, symbole petit, contexte petit. Hierarchie extreme.

```svg
<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
  <!-- Chiffre geant -->
  <text x="120" y="130" text-anchor="middle"
        font-family="[BRAND FONT]" font-weight="700"
        font-size="110" fill="[ACCENT]">9</text>
  <!-- Decimale (plus petit, aligne) -->
  <text x="185" y="130"
        font-family="[BRAND FONT]" font-weight="700"
        font-size="50" fill="[ACCENT]">,90</text>
  <!-- Devise (petit, en haut a droite) -->
  <text x="240" y="70"
        font-family="[SECONDARY FONT]" font-weight="600"
        font-size="24" fill="[ACCENT]">EUR</text>
  <!-- Label (petit, en bas) -->
  <text x="150" y="165" text-anchor="middle"
        font-family="[BODY FONT]" font-size="16" fill="[NEUTRAL]">
    le strict boeuf
  </text>
</svg>
```

---

## 7. Texte sur photo — Support de lisibilite

Quand le texte est place sur une photo, TOUJOURS ajouter un support.

### Text shadow multi-couches

```css
.text-on-photo {
  text-shadow:
    0 1px 2px rgba(0,0,0, 0.8),
    0 2px 4px rgba(0,0,0, 0.6),
    0 4px 8px rgba(0,0,0, 0.4),
    0 8px 16px rgba(0,0,0, 0.3),
    0 16px 32px rgba(0,0,0, 0.2),
    0 32px 64px rgba(0,0,0, 0.1);
}
```

### Gradient derriere le texte

```css
.text-gradient {
  background: linear-gradient(
    to top,
    rgba(0,0,0, 0.85) 0%,
    rgba(0,0,0, 0.4) 50%,
    transparent 100%
  );
}
```

### Bandeau accent (mark-tape)

```css
.mark-tape {
  background-color: rgba([ACCENT_RGB], 0.5);
  padding: 4px 12px;
  display: inline;
  box-decoration-break: clone;
}
```

---

## 8. Repetition typographique (type pattern)

Un mot repete en fond pour creer une texture. Le texte principal se pose par-dessus.

```svg
<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <text x="-10" y="50" font-family="[BRAND FONT]" font-weight="900"
        font-size="40" fill="[ACCENT]" opacity="0.12"
        letter-spacing="8">BURGER BURGER BURGER</text>
  <text x="40" y="95" font-family="[BRAND FONT]" font-weight="900"
        font-size="40" fill="[ACCENT]" opacity="0.09"
        letter-spacing="8">BURGER BURGER BURGER</text>
  <text x="-10" y="140" font-family="[BRAND FONT]" font-weight="900"
        font-size="40" fill="[ACCENT]" opacity="0.12"
        letter-spacing="8">BURGER BURGER BURGER</text>
  <!-- Texte principal par-dessus -->
  <text x="200" y="120" text-anchor="middle" font-family="[BRAND FONT]"
        font-weight="900" font-size="52" fill="white">NEW</text>
</svg>
```

**Quand l'utiliser** : posts typographiques sans photo, annonces, teasers.

---

## Regles generales

- **`paint-order="stroke fill"`** obligatoire quand stroke + fill combines
- **`dominant-baseline="central"` + `text-anchor="middle"`** pour centrage SVG
- **`letter-spacing`** : condensed = negatif (-2 a -4), display = positif (2-6), labels = large (4-8)
- **Tailles minimum** : headline ≥ 48px, label ≥ 16px, body ≥ 14px (a 1080px)
- **JAMAIS d'opacite** pour creer de la hierarchie — utiliser taille, poids, couleur
