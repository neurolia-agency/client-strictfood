# Combinaisons Stories — Generateur de briefs

> Ce fichier est lu par le planificateur AVANT de rediger les briefs stories de la semaine.
> Il propose des combinaisons variees (produit × concept × fond × intention) en evitant la repetition.
> Le planificateur DOIT piocher dans ce fichier — pas inventer des hero shots 3/4 par defaut.

## Principe

Chaque story est une combinaison de 4 axes :

```
STORY = Produit × Concept × Fond × Intention
```

Le planificateur genere la semaine en respectant :
- **Rotation produit** : pas 2 stories consecutives avec le meme produit
- **Rotation concept** : pas 2 stories consecutives avec le meme concept
- **Rotation fond** : alterner charbon-dominant et ambre-dominant dans la journee
- **Rotation intention** : pas 2 stories consecutives avec la meme intention
- **Couverture produit** : sur 21 stories/semaine, chaque produit apparait au moins 1 fois

---

## Axe 1 — Produits (8)

| Slug | Nom | Specificite visuelle |
|------|-----|---------------------|
| `strict-boeuf` | STRICT Boeuf | Steak Maillard intense, sauce dorée |
| `strict-poulet` | STRICT Poulet | Lamelles dorees, aspect plus leger |
| `strict-max-boeuf` | STRICT MAX Boeuf | Double steak imposant, hauteur monumentale |
| `strict-max-poulet` | STRICT MAX Poulet | Double poulet, genereux |
| `strict-vege-falafel` | STRICT Vege Falafel | Croute doree + interieur VERT vif, contraste unique |
| `strict-wrap-boeuf` | STRICT Wrap Boeuf | Tortilla roulee, interieur visible par l'ouverture |
| `strict-wrap-poulet` | STRICT Wrap Poulet | Tortilla + lamelles poulet, format different |
| `frites-tenders` | Frites + Tenders | Accompagnements, croustillant, doré |

---

## Axe 2 — Concepts food (par famille)

### Famille PRODUIT PUR (pas de mains, pas d'humain)

| Concept | Description | Produits ideaux | Deja utilise en post ? |
|---------|-------------|-----------------|----------------------|
| `hero-3/4` | Vue classique 3/4 | Tous | OUI (surrepresente) — LIMITER |
| `levitation` | Flottant dans le vide | Burgers | OUI |
| `eclate` | Vue explosee, couches separees | Burgers | NON |
| `ouvert` | Bun souleve, interieur revele | Burgers | NON |
| `decon` | Ingredients alignes/separes | Tous | NON |
| `minimal-centre` | Produit seul, fond uni, zero distraction | Tous | NON |

### Famille ACTION (mains, geste, mouvement)

| Concept | Description | Produits ideaux |
|---------|-------------|-----------------|
| `action-croque` | Morsure fraiche, interieur visible | Burgers, wraps |
| `action-assemblage` | Mains qui construisent | Burgers |
| `action-main` | Main qui tient fermement | Tous |
| `action-trempe` | Main qui trempe dans la sauce | Tenders, frites |
| `action-ecrase` | Burger presse, sauce qui gicle | Burgers |
| `action-service` | Main gantee qui presente sur plateau | Tous |

### Famille MACRO (gros plan, texture)

| Concept | Description | Produits ideaux |
|---------|-------------|-----------------|
| `macro-sauce` | Gros plan sauce qui coule | Burgers, tenders |
| `macro-texture` | Surface du bun, sesame, croute | Burgers |
| `macro-fromage` | Miettes parmesan sur surface chaude | Burgers, wraps |
| `macro-croustillant` | Croute qui eclate, miettes | Tenders, frites, falafel |

### Famille ATMOSPHERE (lumiere, mood)

| Concept | Description | Produits ideaux |
|---------|-------------|-----------------|
| `atmo-neon` | Eclairage neon cuivre/ambre | Tous |
| `atmo-contre-jour` | Backlit, silhouette doree | Burgers |
| `atmo-clair-obscur` | Moitie eclairee, moitie ombre | Tous |
| `atmo-intime` | Spot unique, obscurite autour | Tous |

### Famille PERSPECTIVE (angle inhabituel)

| Concept | Description | Produits ideaux |
|---------|-------------|-----------------|
| `persp-pov` | Vue subjective, tes mains | Tous |
| `persp-rasante` | Camera au ras du sol | Burgers |
| `persp-tilt` | Cadrage penche, dynamique | Tous |
| `persp-dessous` | Vue par en dessous | Burgers |
| `flat` | Vue zenithale top-down | Tous |

---

## Axe 3 — Fonds

| Fond | Dominant | Accent 15-20% |
|------|----------|---------------|
| `charbon` | Noir mat | Element ambre (kraft, lumiere, accessoire) |
| `ambre` | Or chaud | Element charbon (objet noir, ombre, vetement) |
| `charbon+ambre` | Charbon | Accessoires ambre multiples |
| `ambre+charbon` | Ambre | Accessoires charbon multiples |
| `craft` | Kraft naturel | Bun noir = charbon, lumiere = ambre |

---

## Axe 4 — Intentions

| Intention | Objectif | Concepts naturels |
|-----------|----------|-------------------|
| `envie` | Salivation, "je veux ca" | macro-sauce, action-croque, sensation-overflow |
| `curiosite` | Arrete le scroll, intrigue | eclate, persp-dessous, decon, atmo-neon |
| `confiance` | Qualite, artisanat | action-service, macro-texture, action-assemblage |
| `presence` | Rappel StrictFood | Concepts brand/rappel |

---

## Generateur de semaine (procedure)

Quand le planificateur cree un planning stories, il suit cette procedure :

### Etape 1 — Lire l'historique

Identifier les 21 dernieres stories (semaine precedente) :
- Quels produits ont ete couverts ?
- Quels concepts ont ete utilises ?
- Quels fonds dominent ?
- Quelle intention revient le plus ?

### Etape 2 — Identifier les manques

| Axe | Question | Action |
|-----|----------|--------|
| Produit | Quel produit n'a PAS ete couvert la semaine derniere ? | Le placer en PRIORITE cette semaine |
| Concept | Quelle FAMILLE de concepts est sous-representee ? | Forcer 2+ stories de cette famille |
| Fond | Le ratio charbon/ambre est-il equilibre ? | Ajuster cette semaine |
| Intention | Quelle intention manque ? | L'assigner a 2+ stories |

### Etape 3 — Generer les combinaisons

Pour chaque jour (3 stories), proposer une combinaison AVANT de rediger le brief :

```
LUNDI
  Story #1 : [produit] × [concept] × [fond] × [intention]
  Story #2 : [produit] × [concept] × [fond] × [intention]
  Story #3 : [produit] × [concept] × [fond] × [intention]

  Verification rotation :
  - [ ] 3 produits differents
  - [ ] 3 concepts differents (ou min 2 familles differentes)
  - [ ] Au moins 1 charbon-dominant + 1 ambre-dominant
  - [ ] Au moins 2 intentions differentes
```

### Etape 4 — Valider la semaine

Avant de passer aux briefs, verifier :
- [ ] Chaque produit apparait au moins 1 fois dans la semaine
- [ ] Le hero-3/4 est utilise MAX 3 fois sur 21 stories (~15%)
- [ ] Au moins 5 familles de concepts differentes sur la semaine
- [ ] Ratio intentions : envie ~40%, curiosite ~25%, confiance ~25%, presence ~10%
- [ ] Ratio fonds : ~50% charbon-dominant, ~50% ambre-dominant
- [ ] Pas 2 stories consecutives avec le meme concept/produit/intention

---

## Exemples de combinaisons variees (inspiration)

| # | Produit | Concept | Fond | Intention | Description courte |
|---|---------|---------|------|-----------|-------------------|
| 1 | strict-boeuf | macro-sauce | charbon | envie | Gros plan sauce qui coule sur le steak, fond noir, lumiere ambre |
| 2 | strict-wrap-poulet | persp-pov | ambre | curiosite | Mains nues tiennent le wrap face camera, table bois doree |
| 3 | strict-max-boeuf | action-croque | charbon | envie | Morsure partielle, double steak, kraft dore sous le burger |
| 4 | strict-vege-falafel | action-assemblage | charbon | confiance | Mains gantees construisent, interieur vert visible, kraft |
| 5 | frites-tenders | action-trempe | ambre | envie | Main trempe un tender dans la sauce, fond ambre chaud |
| 6 | strict-poulet | atmo-clair-obscur | charbon | curiosite | Moitie eclairee, moitie ombre, mystere |
| 7 | strict-max-poulet | eclate | ambre+charbon | curiosite | Vue explosee, toutes les couches flottent |
| 8 | strict-boeuf | persp-rasante | charbon | envie | Camera au sol, burger monumental |
| 9 | strict-wrap-boeuf | flat | ambre | confiance | Vue top-down, wrap + frites + sauce, composition graphique |
| 10 | strict-vege-falafel | macro-croustillant | charbon+ambre | envie | Gros plan croute falafel qui eclate, vert visible |
| 11 | strict-poulet | action-service | ambre | confiance | Main gantee presente le burger sur plateau noir |
| 12 | strict-max-boeuf | atmo-neon | charbon | curiosite | Eclairage neon cuivre, ambiance nocturne |
| 13 | frites-tenders | decon | ambre | curiosite | Ingredients alignes sur fond dore, composition graphique |
| 14 | strict-boeuf | ouvert | charbon | envie | Bun souleve, interieur revele, sauce qui coule |
| 15 | strict-wrap-poulet | action-main | ambre+charbon | envie | Main nue tient le wrap, fond ambre, ombre charbon |
