# Brief Stories — S2 Samedi (2026-03-22)

> **Pilier du jour** : Le Quartier (Communauté & Local) — Pas de post, dernier jour d'ouverture
> **Objectif stratégique** : Rappeler les horaires (fermé dimanche) et montrer le restaurant vu de l'extérieur. Le compositing-irl ancre la marque dans son lieu physique.
> **Persona cible** : Actifs pressés (horaires) + Tous (ancrage local)
> **Ref stratégie** : Phase 1 §1.3 — crédibilité locale + ancrage quartier

---

## Story 1 — Annonce : Horaires weekend

| Champ | Valeur |
|-------|--------|
| Type | Annonce |
| Mode | `template` |
| Highlight | NOUS TROUVER |
| Qui produit | Pipeline |
| Template | `annonce.html` |
| Mood | cuivre |
| Image | visible |
| Brand props | aucun |

### Objectif

Rappeler les horaires et la fermeture du dimanche. Simple et utile — les abonnés qui veulent venir demain sont prévenus. Alimente le highlight NOUS TROUVER.

### Contenu

Badge : `HORAIRES`
Headline : `On est ouvert <em>aujourd'hui</em>`
Body : `Du <strong>mardi au samedi</strong>, midi et soir. Dimanche et lundi : repos. Dernière chance cette semaine pour goûter nos burgers.`
CTA : `aucun`
Image de fond : `public/images/photos-references/contexte/salle-restaurant/salle1.jpeg`
Alignement photo : `—`
Tagline : `Le cheat meal qui n'en est pas un`

---

## Story 2 — Produit en situation : Burger devant la devanture

| Champ | Valeur |
|-------|--------|
| Type | Produit en situation |
| Mode | `compositing-irl` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `irl-story.html` (overlay post-compositing) |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Ancrer visuellement le produit dans son lieu. Le burger posé devant la devanture = "ce burger, tu le trouves ici". Fusion produit + lieu pour la dernière story de la journée de service.

### Contenu

**compositing-irl** :
Photo produit : `public/images/photos-references/produits-source/burgers-black/strict-boeuf.png`
Photo lieu : `public/images/photos-references/contexte/exterieur/devanture.jpeg`
Intention compositing : `Le STRICT Bœuf au premier plan, tenu en main gantée noire ou posé sur papier STRICT, devanture du restaurant en arrière-plan avec enseigne visible, lumière naturelle fin d'après-midi`

Texte overlay : `—`

---

## Contraintes

- DA : Story 1 Dark Premium (Annonce) + Story 2 Compositing IRL
- Mood : cuivre — standard weekend
- Le compositing doit intégrer naturellement le burger dans le contexte de la devanture
- La rotation photo lieu S2 utilise salle1.jpeg pour l'intérieur — la devanture est pour le compositing

## Étape suivante

> Exécuter `/story-producer S2 samedi` pour produire ces stories.
