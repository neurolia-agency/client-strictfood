# Brief Stories — S2 Jeudi (2026-03-20)

> **Pilier du jour** : La Cuisine (Process & Artisans) — Pas de post
> **Objectif stratégique** : Journée artisan + coulisses. Présenter Boucherie Labourde (3e artisan, après Myfitcheese et Pains du Soleil en S1). Story IRL du rush pour l'authenticité.
> **Persona cible** : Actifs pressés (qualité sourcing) + Locavores (artisan local)
> **Ref stratégie** : Phase 1 §3.2 — "Présenter au moins 2 des 3 artisans partenaires"

---

## Story 1 — Focus Ingrédient : Viande Boucherie Labourde

| Champ | Valeur |
|-------|--------|
| Type | Focus Ingrédient |
| Mode | `template` |
| Highlight | NOS ARTISANS |
| Qui produit | Pipeline |
| Template | `vitrine.html` (variante composant) |
| Mood | grenat |
| Image | hero |
| Brand props | aucun |

### Objectif

Présenter le 3e artisan partenaire : Boucherie Labourde, le boucher local qui fournit la viande de tous les burgers bœuf. Compléter le triptyque artisanal (Myfitcheese S1, Pains du Soleil S1, Labourde S2).

### Contenu

**Ingrédient** : Steak haché artisanal
Artisan : `Boucherie Labourde`
Localité : `Perpignan`
Fait clé : `Viande fraîche, jamais surgelée. Haché sur place.`
Dans le : `STRICT Bœuf`
Tagline : `Le cheat meal qui n'en est pas un`

Image hero : `public/contenu-instagram/2025-10-03_15-57-14_UTC_1.jpg`

---

## Story 2 — IRL : Rush du midi

| Champ | Valeur |
|-------|--------|
| Type | IRL |
| Mode | `irl` |
| Highlight | COULISSES |
| Qui produit | Romain/Dorian (photo) + Pipeline (overlay) |
| Template | `irl-story.html` |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Montrer l'énergie du service. La cuisine en action, les burgers qui s'enchaînent. L'authenticité du rush crédibilise le volume et la maîtrise.

### Contenu

Photo : `[À FOURNIR par Romain — rush midi, cuisine en action, assemblage rapide]`
Texte overlay : `Rush du midi`
Position texte : bas
Filtre : léger

> **Fallback** : si pas de photo fraîche, utiliser `public/contenu-instagram/2025-10-03_15-57-14_UTC_3.jpg` (assemblage burger mains gantées)

---

## Contraintes

- DA : Story 1 Vitrine (Focus Ingrédient) + Story 2 IRL (overlay minimal)
- Mood : grenat pour le Focus Ingrédient (viande = intensité), cuivre pour l'IRL
- Le Focus Ingrédient utilise une photo de viande crue — la photo doit rester appétissante
- L'IRL du rush doit capturer le mouvement et l'énergie

## Étape suivante

> Exécuter `/story-producer S2 jeudi` pour produire ces stories.
