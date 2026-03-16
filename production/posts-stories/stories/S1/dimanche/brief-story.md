# Brief Stories — S1 Dimanche (2026-03-16)

> **Pilier du jour** : L'Équipe (Humain & Storytelling) — Post S1-04 publié aujourd'hui (Fondateurs)
> **Objectif stratégique** : Prolonger l'émotion du post fondateurs par la découverte du lieu, puis ancrer la crédibilité technique (chaleur pulsée). Le prospect a vu les visages → maintenant il visite le restaurant et comprend le savoir-faire. Restaurant fermé le dimanche → contenu 100% pipeline.
> **Persona cible** : Tous (découverte + éducation)
> **Ref stratégie** : Phase 1 §1.4 — "construire une présence crédible et cohérente" + §1.1 "visuels lifestyle"

---

## Story 1 — Lieu : 88 Chemin de la Roseraie

| Champ | Valeur |
|-------|--------|
| Type | Lieu |
| Highlight | NOUS TROUVER |
| Qui produit | Pipeline |
| Template | `annonce.html` |
| Mood | cuivre |
| Image | visible |
| Brand props | aucun |

### Objectif

Donner une dimension physique à la marque. Le post fondateurs (S1-04) montre les visages — cette story montre l'endroit. Le prospect se projette : il sait qui est derrière, maintenant il sait où aller. C'est aussi la seule story "Lieu" de la S1 (type jamais utilisé cette semaine).

### Contenu

Badge : `NOUS TROUVER`
Headline : `88 Chemin de la <em>Roseraie</em>`
Body : `Château Roussillon, Perpignan. <strong>Du lundi au samedi</strong>, on t'attend derrière le comptoir.`
CTA : `aucun`
Image de fond : `public/images/photos-references/contexte/exterieur/devanture.jpeg`
Alignement photo : `enseigne STRICT FOOD'S`
Tagline : `Le cheat meal qui n'en est pas un`

---

## Story 2 — Focus Ingrédient : Pain noir artisanal

| Champ | Valeur |
|-------|--------|
| Type | Focus Ingrédient |
| Highlight | NOS ARTISANS |
| Qui produit | Pipeline |
| Template | `focus-ingredient.html` |
| Mood | feuille |
| Image | hero |
| Brand props | aucun |

### Objectif

Mettre en avant le pain noir au sésame, marqueur visuel signature de StrictFood, et son artisan boulanger Pains du Soleil. 2e artisan de la S1 après Myfitcheese (jeudi). Le prospect a vu les fondateurs (post S1-04) puis le lieu (story 1) — maintenant il découvre un partenaire artisanal. Fil rouge "les humains derrière la marque".

### Contenu

**Ingrédient** : Pain noir au sésame
Artisan : `Pains du Soleil`
Localité : `Perpignan`
Fait clé : `Livré chaque matin. Pain brioché noir, graines de sésame torréfiées.`
Dans le : `Tous nos burgers`
Tagline : `Le cheat meal qui n'en est pas un`

Image hero : `public/images/photos-references/produits-source/burgers-black/strict-boeuf.png`

---

## Story 3 — Fiche Produit : Cookie Protéiné

| Champ | Valeur |
|-------|--------|
| Type | Fiche Produit |
| Highlight | LA CARTE |
| Qui produit | Pipeline |
| Template | `produit-vitrine.html` |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Révéler un produit inattendu de la carte : un cookie à 26g de protéines. Après le lieu (story 1) et l'ingrédient artisanal (story 2), le prospect découvre que StrictFood va au-delà des burgers. Le cookie à 3,99€ est un point d'entrée accessible — il donne envie de venir tester sans engagement. Effet de surprise : "un cookie healthy qui a l'air bon".

### Contenu

**Produit** : Cookie Protéiné
Slug recette : `cookie-proteine`

> Pas de fiche recette dans `_recettes/`. Macros issues de `carte.md` :
> 273 kcal | 26g prot | 27g gluc | 9g lip | 3,99€

Accroche : `26g de protéines. Dans un cookie.`
Macro star : `26g protéines`
Badge : `PROTÉINÉ`
Prix : `3,99€`
Tagline : `Le cheat meal qui n'en est pas un`

Image hero : `public/images/photos-references/produits-source/desserts/cookie-proteine.png`

> **Note** : Photos Instagram complémentaires disponibles (série 2025-10-07) — cookies tenus en main devant mur végétal néon, plateau toppings variés. Utilisables si le story-data-mapper a besoin d'alternatives.

---

## Contraintes

- DA : Story 1 Dark Premium (Lieu = template annonce), Story 2 Vitrine (Focus Ingrédient = template focus-ingredient), Story 3 Vitrine (Fiche Produit = template produit-vitrine)
- Mood : Story 1 cuivre (standard lieu), Story 2 feuille (nutrition/artisan), Story 3 cuivre (dessert signature)
- Variation visuelle : 1 Dark Premium + 2 Vitrine — la story 3 utilise un produit visuellement très différent (dessert rond, texturé) des burgers habituels, ce qui casse la monotonie malgré deux Vitrine consécutives
- Le ton reste sobre et premium — pas d'exclamations
- Story 1 postée en matinée, Story 2 en début d'après-midi, Story 3 en fin d'après-midi/soirée (dessert = moment goûter/snack)

## Étape suivante

> Exécuter `/story-producer S1 dimanche` pour produire ces 3 stories.
