# Layout Library — 15 Composition Patterns

Ces patterns sont des points de départ. Combine-les, déforme-les, invente de nouveaux. L'objectif est la VARIÉTÉ — jamais 2 stories consécutives avec le même pattern.

## 1. SPLIT VERTICAL 40/60
Texte à gauche (40%), photo à droite (60%) qui déborde du canvas.
- Zone gauche : fond charbon, label + nom + stat + data, aligné gauche
- Zone droite : photo qui dépasse de 5-10% à droite (overflow hidden sur body)
- Séparation : barre diagonale ou ligne ambre
- Éléments : tech-frame sur les 2 coins gauche, dot cluster en bas à gauche

## 2. SPLIT VERTICAL 60/40
Inverse du précédent. Photo à gauche dominante, texte compact à droite.
- Photo occupe 60% gauche, légère rotation (-1°)
- Texte empilé à droite : stat hero en haut, data en bas
- Séparation : glow ambre diffus au centre

## 3. SPLIT HORIZONTAL
Photo en haut (55%), zone de contenu en bas (45%).
- Photo avec gradient bas (charbon to transparent) pour transition douce
- Zone basse : fond charbon, stat + data + hook + logo
- Élément de liaison : lignes parallèles horizontales entre les 2 zones

## 4. PHOTO CENTRÉE ENCADRÉE
Photo au centre dans un cadre doré, éléments décoratifs qui orbitent.
- Photo frame 600-720px, centré vertical et horizontal
- Autour : cercles décoratifs, dot clusters aux 4 coins, rectangle incliné
- Au-dessus de la photo : label + nom produit
- En-dessous : stat + data row
- C'est le pattern VITRINE classique

## 5. PHOTO EN CERCLE
Photo découpée en cercle (clip-path), composition circulaire.
- `clip-path: circle(45% at 50% 45%)` sur la photo
- Cercles décoratifs concentriques autour (différentes tailles, opacités)
- Texte en arc ou aligné sous le cercle
- Glow ambre derrière le cercle

## 6. COUPE DIAGONALE
La barre diagonale divise le canvas en 2 zones distinctes.
- Zone haute-gauche : fond ambre, nom produit en charbon
- Zone basse-droite : fond charbon, photo + stat
- La barre elle-même est l'élément structurant
- Embers le long de la diagonale

## 7. STATEMENT PUR
Pas de photo. Typographie massive qui remplit le canvas.
- Fond noir pur ou charbon
- 1-3 mots en Oswald 180-250px, ambre
- Sous-texte en DM Sans, blanc 75%
- Glow ambre subtil derrière le texte
- Tech-frame, embers, grain heavy

## 8. PHOTO FULLBLEED + BANDE TEXTE
Photo remplit tout, une bande de texte traverse en diagonale.
- Photo plein cadre avec gradient sombre
- Bande ambre semi-transparente (30-50% opacity) en diagonale
- Texte dans la bande : nom produit ou stat
- Filet doré sur les bords

## 9. MOSAÏQUE
2-3 photos du même produit en grille asymétrique.
- Grille : 1 grande (65%) + 2 petites (35%), ou 3 de tailles différentes
- Toutes avec cadre doré
- Gap de 12-16px entre les cellules
- Fond visible dans les gaps = charbon
- Stat ou nom produit dans une zone libre

## 10. PRODUCT CARD (VITRINE)
Layout structuré type fiche produit — label + nom + photo + stats + hook.
- Top : label badge + product name (au-dessus de la photo)
- Centre : photo en cadre doré (720px story, 820px post)
- Bas : stat hero + secondary stats + hook + tagline/logo
- Éléments déco : barre diagonale, glow, cercles, embers, wallpaper

## 11. BANDES HORIZONTALES
3 bandes horizontales alternant les ambiances.
- Bande 1 (top, 250px) : fond ambre, label + nom
- Bande 2 (center, 800-1000px) : photo avec filet doré
- Bande 3 (bottom, reste) : fond charbon, data + logo
- Transitions : lignes parallèles horizontales ou gradient doux

## 12. CORNER PUSH
Tout le contenu poussé dans un coin. Le reste respire.
- Coin bas-gauche : stat hero + data + hook (compact)
- Rest du canvas : photo qui occupe 2/3, débordant
- Glow ambre dans le coin opposé (vide)
- Éléments décoratifs dans le vide (cercle, dots, ember)

## 13. L-SHAPE
Photo en forme de L, texte dans le carré restant.
- Photo : bande large en haut (full width, 50% height) + bande droite (40% width, 50% height)
- Carré libre en bas-gauche : stat + data + logo
- Les 2 zones photo sont la même image (clip ou position)

## 14. MARQUEE VERTICAL
Tape-band rotaté à 90°, photo le long.
- Bande ambre verticale (48px) avec tagline rotatée
- À côté : photo produit grande
- De l'autre côté : stat + data empilés
- Éléments déco le long de la bande

## 15. ÉLÉMENTS FLOTTANTS
Photo + stats + éléments dispersés, connectés par des lignes diagonales.
- Photo en cadre doré, position excentrée (pas centrée)
- Stat hero flottante ailleurs, avec glow
- Lignes ambre fines qui connectent visuellement photo → stat → data
- Embers aux intersections des lignes
- Effet "constellation" organique

---

## Inventer de nouveaux patterns

Ces 15 sont des bases. Tu peux et tu dois inventer :
- **Overlap** : 2 éléments qui se chevauchent partiellement
- **Masque typographique** : le texte révèle la photo à travers (background-clip: text)
- **Gradient split** : pas de barre, juste un gradient diagonal qui sépare 2 ambiances
- **Strip tease** : la photo est coupée en 3-4 bandes horizontales espacées
- **Cadre dans cadre** : un rectangle incliné encadre la photo qui encadre le produit
- **Texte + vide** : 90% de vide noir, 10% de texte concentré dans un coin

La seule règle : ne répète pas les 3 derniers patterns.
