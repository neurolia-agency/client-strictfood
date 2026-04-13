# Quality Gates — Criteres premium et anti-patterns

Ce qui separe un brand element impactant d'une decoration generique.
Appliquer ces criteres aux etapes 3 (exploration) et 5 (test).

---

## Le test des 3 secondes

Ouvrir le feed sur un ecran de telephone (375px de large). Chaque post fait ~161px.

**Question 1** : Est-ce que je reconnais la marque en 0.3 seconde ?
→ Si oui : le systeme fonctionne.
→ Si non : les elements sont trop subtils ou trop generiques.

**Question 2** : Est-ce que je pourrais confondre ce feed avec un autre ?
→ Si oui : les elements ne sont pas assez distinctifs.
→ Si non : le territoire est bien defend.

**Question 3** : Est-ce que chaque post se ressemble ?
→ Si oui : pas assez de variation. Monotone.
→ Si non mais coherent : equilibre parfait.
→ Si non et incoherent : trop de variation, pas de systeme.

---

## Anti-patterns (ce qui rend un element "cheap")

### 1. Le sparkle generique

**Symptome** : etoile 4 branches posee dans un coin sans raison.
**Pourquoi c'est faible** : aucun lien avec la marque. N'importe qui peut le faire. Associe aux
templates Canva et aux feeds low-effort.
**Solution** : si on veut un eclat, il doit etre specifique — forme unique, lien au produit,
integration dans la composition (pas juste "pose dessus").

### 2. La surcharge decorative

**Symptome** : 5+ elements differents (drip + sparkle + frame + badge + underline) sur un post.
**Pourquoi c'est faible** : aucune hierarchie, l'oeil ne sait pas ou regarder. L'image de fond
disparait sous les couches. Ca crie "j'ai decouvert les stickers".
**Solution** : max 2-3 types d'elements dans tout le systeme. 1-2 par post.

### 3. L'element sans lien conceptuel

**Symptome** : un drip sur un feed tech, un geometric cut sur un feed bio/zen.
**Pourquoi c'est faible** : l'element contredit le positionnement. Le spectateur sent
inconsciemment que "ca ne va pas".
**Solution** : chaque element doit pouvoir repondre a "pourquoi cette forme pour cette marque ?"

### 4. Le SVG qui disparait dans le feed

**Symptome** : un element tres elegant a 200px qui devient invisible dans la grille du feed.
**Pourquoi c'est faible** : le feed est vu a ~161px par post sur mobile. Un trait fin de 1px
ou un element de 20px est invisible a cette echelle.
**Solution** : tester TOUJOURS a l'echelle feed. L'element doit etre perceptible a 161px.

### 5. Le placement aleatoire

**Symptome** : l'element est parfois en haut a gauche, parfois au centre, parfois en bas,
sans logique.
**Pourquoi c'est faible** : l'oeil ne cree pas de pattern de reconnaissance.
**Solution** : definir 2-3 positions autorisees et s'y tenir. La repetition du placement
CREE la reconnaissance.

### 6. La copie d'un concurrent

**Symptome** : on reprend les sparkles d'Enjoy Tacos, le drip de Shake Shack.
**Pourquoi c'est faible** : au mieux on est un suiveur. Au pire le public confond.
**Solution** : le territoire visuel exclusif. Si un concurrent le fait, on ne le fait pas.

### 7. L'element date

**Symptome** : drip/coulure (peak 2020), gradient violet-bleu (peak 2018), neon glow (peak 2021).
**Pourquoi c'est faible** : signale "pas a jour". L'element etait impactant il y a 3 ans,
maintenant il est sature.
**Solution** : preferer les formes intemporelles (lignes, textures, typographie)
ou les formes tellement specifiques a la marque qu'elles ne sont liees a aucune tendance.

---

## Criteres positifs (ce qui rend un element "premium")

### 1. Restraint radical

Moins d'elements, plus d'impact. Les marques les plus fortes ont 1-3 brand elements, pas 8.
Chaque element doit MERITER sa place.

### 2. Lien au produit ou au process

Le meilleur brand element raconte une histoire sans mots :
- La forme evoque le produit (courbe d'un bun, section d'un burger, grain d'un ingredient)
- La forme evoque le process (onde de chaleur, mouvement de coupe, pression)
- La forme evoque une valeur (precision, energie, authenticite)

### 3. Systeme, pas decoration

L'element n'est pas "pose sur" le visuel — il fait partie de la composition.
Il structure, il dirige l'oeil, il cree de la hierarchie. Un element bien integre
ne peut pas etre retire sans que le visuel perde quelque chose.

### 4. Reconnaissable a toute echelle

- A 32px : on identifie la forme (icone, favicon)
- A 161px : on reconnait la marque dans le feed
- A 1080px : on apprecie les details de la forme

### 5. Declinable sans monotonie

L'element peut varier (taille, rotation, couleur, position) tout en restant identifiable.
Si chaque variation ressemble a un element different, la forme n'est pas assez forte.
Si chaque variation est identique, le feed est monotone.

Le bon equilibre : on reconnait l'element mais on ne se lasse pas.

---

## Checklist d'evaluation

Appliquer a chaque brand element propose (etape 3) et a chaque mock (etape 5) :

| Critere | Pass | Fail |
|---------|------|------|
| Lien conceptuel articule | Explication claire de "pourquoi cette forme" | "C'est joli" ou "ca decore" |
| Visible a 161px (feed mobile) | L'element est perceptible en grille | Disparait ou se confond avec le fond |
| Distinct des concurrents | Aucun concurrent direct n'utilise cette forme | Vu sur 2+ feeds concurrents |
| Pas date | La forme n'est pas associee a une tendance passee | Peak popularity > 2 ans |
| Max 2-3 par post | Le post reste lisible avec les elements | Surcharge, l'image disparait |
| Integre dans la composition | L'element structure le visuel | Pose au-dessus sans interaction |
| Declinable en 3+ variantes | Variations possibles sans perte d'identite | Trop rigide ou trop vague |
| Teste sur 9 posts (grille) | Le feed a une signature distincte | Generique ou monotone |
