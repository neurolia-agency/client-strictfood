# Brief — Post 2 (Mercredi 12 mars 2026)

## Stratégie

| Champ | Valeur |
|-------|--------|
| Pilier | La Cuisine (Process & Coulisses) |
| Format | Carrousel 5 slides |
| Dimensions | 4:5 |
| Période | S1 — Le Reboot Premium |
| Position dans la grille | Post 2/12 du mur visuel |

## Objectif

Deuxième post du reboot. Montrer le craft derrière le produit — la traçabilité, le geste artisanal, la cuisine ouverte. Passer du "c'est beau" (Post 1) au "c'est vrai" (Post 2). Le carrousel raconte une histoire linéaire : viande crue → découpe → assemblage → finitions → burger fini. Le viewer doit swiper par curiosité et finir par la faim.

## Produit

**STRICT Boeuf** — Burger signature.
Recette détaillée : `production/_recettes/strict-boeuf.md`
Photos source : 4 photos cuisine ouverte dans `public/contenu-instagram/`

## Structure du carrousel

| Slide | Rôle | Photo source | Modèle cible | Food Porn Dial |
|-------|------|-------------|--------------|----------------|
| 1 | Cover — "De la Boucherie Labourde à ton assiette." | Aucune (template texte pur) | GPT Images (texte on-image) | — |
| 2 | La Découpe — viande crue, mains gantées, planche bois | `public/contenu-instagram/2025-10-03_15-57-14_UTC_2.jpg` | Gemini (Nanobanana Pro) | 5/10 |
| 3 | L'Assemblage — construction du burger, mâche, protéine | `public/contenu-instagram/2025-10-03_15-57-14_UTC_1.jpg` | Gemini (Nanobanana Pro) | 5/10 |
| 4 | Les Finitions — ajout verdure sur double steak | `public/contenu-instagram/2025-11-24_17-18-14_UTC.jpg` | Gemini (Nanobanana Pro) | 5/10 |
| 5 | Le Burger Fini — climax food porn, burger assemblé | `public/contenu-instagram/2025-11-22_17-18-46_UTC_2.jpg` | Gemini (Nanobanana Pro) | 7/10 |

## Caption

```
3 artisans du coin dans chaque burger.

La viande ? Boucherie Labourde, à Perpignan.
Le pain ? Pains du Soleil, cuit du jour.
Le fromage ? Myfitcheese, protéiné et local.

On assemble tout ici, devant toi.
Cuisine ouverte, zéro huile, chaleur pulsée.

Swipe pour voir le parcours →

#strictfood #perpignan #cuisineouverte #artisanslocaux #burgermaison #faitmaison #produitlocaux #boucherielabourde #painsdusoleil #myfitcheese #zerouile #chaleurpulsee #fastgood #perpignanfood
```

## Contraintes

- Slide 1 : texte en ALL CAPS, fond Charbon, typo Oswald-like bold. GPT Images en 1024×1536 (2:3), crop symétrique en 4:5
- Slides 2-4 : sublimation documentaire — plus brut et authentique que le food porn du Post 1. Mains gantées noires = fil conducteur visuel
- Slide 5 : food porn complet, fidèle à la recette `strict-boeuf.md` (mâche, oignons rouges, parmesan miettes, sauce poivron)
- Palette unifiée : fond tiré vers Charbon (#141210), highlights Cuivre Braisé (#BF8522) sur les éléments food
- Progression narrative claire : brut → assemblage → fini
- Slide 3 montre du poulet (pas du boeuf) — acceptable car le pilier est "La Cuisine" (le craft), pas le produit spécifique

## Étape suivante

→ Exécuter le skill `social-media-art-director` avec ce brief + la recette `strict-boeuf.md` + les 4 photos source
→ Output attendu dans `01-art-direction/direction.md`
