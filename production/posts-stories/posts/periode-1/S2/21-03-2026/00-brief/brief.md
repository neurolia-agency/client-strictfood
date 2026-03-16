# Brief — Post S2-07 (Vendredi 2026-03-21)

## Stratégie

| Champ | Valeur |
|-------|--------|
| Pilier | La Cuisine (Process & Artisans) |
| Format | Photo unique |
| Dimensions | 4:5 |
| Mode | `irl-sublimation` |
| Période | S2 — Compléter le mur visuel |

## Objectif

Focus sur Myfitcheese, artisan partenaire fromager. Après le carrousel S1-02 (parcours global) et le post macros S2-06, ce post zoome sur un ingrédient distinctif. La sublimation IRL donne une dimension premium à une vraie photo du fromage artisanal.

## Produit

**Myfitcheese** — Parmesan protéiné et local.

> Pas de slug recette — ce post concerne l'ingrédient, pas un produit fini.

---

## Sources visuelles

### Mode = `irl-sublimation`

| Champ | Valeur |
|-------|--------|
| Photo source | `public/contenu-instagram/2025-10-03_15-57-14_UTC_7.jpg` |
| Direction sublimation | Renforcer l'ambiance DA Dark Food Premium : accentuer les ombres, tons cuivrés sur le geste de la main, fond charbon profond, grain film subtil. Garder l'authenticité du geste artisanal — le parmesan qui tombe en miettes est le sujet. |

> **Photo source** : geste parmesan macro — main gantée noire émiettant du parmesan au-dessus d'un burger, plan très serré, fond sombre flou.

> **Fallback** : si la photo ne sublime pas assez bien, basculer sur `full-ia` avec description du geste fromager.

---

## Direction Caption

| Champ | Valeur |
|-------|--------|
| Angle | Artisan local, qualité vs industriel, fromage protéiné |
| Ton | Direct, storytelling produit |
| CTA | Implicite (cuisine ouverte, viens voir) |
| Mention prix | Non |
| Mention macros | Non (post artisan, pas macros) |
| Mention fournisseurs | Oui (Myfitcheese — sujet principal) |
| Mots/phrases à inclure | "pas de cheddar sous plastique", "cuisine ouverte" |
| Mots/phrases à éviter | "healthy", "protéiné" (trop fitness pour un post artisan) |

> La caption est générée APRÈS l'image par le skill `/caption-writer`.

---

## Contraintes

- Focus sur le geste et la texture du fromage, pas sur le burger entier
- Plans serrés, mains gantées, ambiance backstage
- L'image doit communiquer "artisanat" et "qualité" en même temps
- Éclairage plus contrasté/dramatique que le Plat — ambiance backstage
- DA : Dark Food Premium (fond Charbon, tons Cuivre Braisé)
- Food Porn Dial : 6/10
- Brand props : non

---

## Étape suivante

> Exécuter `/instagram-producer 2026-03-21`
> Le pipeline détecte le mode `irl-sublimation` et route vers GPT Images.
