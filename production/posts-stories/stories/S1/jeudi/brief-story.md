# Brief Stories — S1 Jeudi (2026-03-13)

> **Pilier du jour** : La Cuisine / Confiance — Pas de post aujourd'hui
> **Objectif stratégique** : Journée artisans. Présenter Myfitcheese (partenaire fromager) en Focus Ingrédient et engager l'audience sur la diversité de la carte (wrap vs burger).
> **Persona cible** : Sportifs
> **Ref stratégie** : Phase 1 §3.2 — "Présenter au moins 2 des 3 artisans partenaires de manière nominative"

---

## Story 1 — Parmesan protéiné Myfitcheese

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

Présenter le partenaire Myfitcheese et son fromage protéiné. Ce n'est pas du cheddar industriel — c'est un parmesan artisanal local qui remplace le fromage standard dans tous les burgers. Alimenter le Highlight NOS ARTISANS.

### Contenu

**Ingrédient** : Parmesan protéiné
Artisan : `Myfitcheese`
Localité : `Perpignan`
Fait clé : `Remplace le cheddar industriel dans tous nos burgers`
Dans le : `STRICT Boeuf`
Tagline : `Le cheat meal qui n'en est pas un.`

Image hero : `public/contenu-instagram/2025-10-03_15-57-14_UTC_7.jpg`

---

## Story 2 — Wrap ou Burger ?

| Champ | Valeur |
|-------|--------|
| Type | Interactif |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `interactif.html` |
| Mood | cuivre |
| Image | visible |
| Brand props | aucun |

### Objectif

Engager l'audience sur la préférence de format — wrap ou burger. Montre la diversité de la carte au-delà des burgers, pousse au tap. Complète la journée artisans avec un angle engagement léger.

### Contenu

Format sticker : Sondage 2 choix
Question : `Wrap ou Burger ?`
Option A : `Wrap`
Option A Emoji : `🌯`
Option B : `Burger`
Option B Emoji : `🍔`
Image de fond : `public/images/photos-references/contexte/cuisine/cuisine-full-2.jpeg`
Alignement photo : `—`
Tagline : `Le cheat meal qui n'en est pas un.`

---

## Contraintes

- DA : Vitrine (Story 1) + Dark Food Premium (Story 2)
- Mood : feuille pour le Focus Ingrédient (accent vert artisan), cuivre pour l'Interactif (standard engagement)
- Image : hero pour le Focus Ingrédient (ingrédient plein cadre), visible pour l'Interactif
- Sublimation : les templates appliquent automatiquement `text-depth` (headlines), `mark-tape` (body/info), `brightness(1.2)` (accents). Aucune action manuelle requise.

## Logique de variation de template

| Type | Template | Style |
|------|----------|-------|
| Focus Ingrédient | `focus-ingredient.html` | **Vitrine** (coloré, ingrédient hero) |
| Interactif | `interactif.html` | Dark Premium |

## Étape suivante

> Exécuter `/story-producer S1 jeudi` pour produire ces stories.
