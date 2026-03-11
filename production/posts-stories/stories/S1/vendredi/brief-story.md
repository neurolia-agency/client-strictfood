# Brief Stories — S1 Vendredi (2026-03-14)

> **Pilier du jour** : Le Plat (Food Porn Premium) — Post S1-03 publié aujourd'hui
> **Objectif stratégique** : Le tiramisu casse le pattern "que des burgers". Les stories élargissent la carte mentale des abonnés : StrictFood = burgers + poulet + desserts. On introduit un deuxième produit (STRICT Poulet) et on collecte de l'engagement sur les desserts.
> **Persona cible** : Tous (surprise, engagement) + Sportifs (macros poulet)
> **Ref stratégie** : Phase 1 §1.4 — "preuve sociale complémentaire" + §1.1 — "Formats stories prêts à poster"

---

## Story 1 — Fiche Produit : STRICT Poulet

| Champ | Valeur |
|-------|--------|
| Type | Fiche Produit |
| Highlight | LA CARTE |
| Qui produit | Pipeline |
| Template | `fiche-produit.html` |

### Objectif

Diversifier les produits présentés dans le highlight LA CARTE. Lundi, c'était le STRICT Boeuf. Aujourd'hui, on montre le STRICT Poulet — deuxième pilier de la gamme. Les sportifs découvrent un profil macro différent (plus léger en lipides).

### Contenu

**Produit** : STRICT Poulet
Slug recette : `strict-poulet`

> Le story-data-mapper résout automatiquement les données nutritionnelles depuis `_recettes/strict-poulet.md`.
> Ne PAS copier les macros ici — c'est le rôle de l'agent.

Tagline : `Le cheat meal qui n'en est pas un`
Bénéfices à mettre en avant :
1. Poulet rôti effiloché, cuisson chaleur pulsée
2. Fromage protéiné Myfitcheese
3. Léger en lipides, lourd en protéines

Image de fond : `aucune`

---

## Story 2 — Interactif : après ton burger ?

| Champ | Valeur |
|-------|--------|
| Type | Interactif |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `interactif.html` |

### Objectif

Engager la communauté avec un choix dessert qui rebondit sur le post du jour (tiramisu). Faire réaliser que StrictFood a une gamme dessert, pas juste des burgers. Collecter de la data sur les préférences.

### Contenu

Format sticker : Sondage 2 choix
Question : `Après ton burger, tu prends quoi ?`
Option A : `Cookie`
Option A Emoji : `🍪`
Option B : `Tiramisu`
Option B Emoji : `🍰`
Image de fond : `public/images/photos-references/dark-bg/burger-simple-boeuf-dark-bg.png`
Tagline : `Le cheat meal qui n'en est pas un`

---

## Contraintes

- DA : Dark Food Premium (fond Charbon #141210, accents Cuivre Braisé #BF8522)
- La fiche poulet diversifie la carte mentale — pas "encore un boeuf"
- Le sondage rebondit sur le post tiramisu du jour

## Étape suivante

> Exécuter `/story-producer S1 vendredi` pour produire ces stories.
