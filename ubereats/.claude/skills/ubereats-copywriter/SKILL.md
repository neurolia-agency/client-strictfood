---
name: ubereats-copywriter
description: "Genere des descriptions produit optimisees pour Uber Eats. Utiliser quand l'utilisateur demande de rediger, ecrire, generer ou modifier des descriptions pour Uber Eats, ou mentionne 'ubereats', 'uber eats', 'description menu'."
argument-hint: "[slug-produit | all]"
---

# Uber Eats Copywriter — StrictFood

Genere des descriptions produit pour la plateforme Uber Eats. Vouvoiement, 600 caracteres max, ton appetissant, taquin et sublimant.

## Invocation

```
/ubereats-copywriter strict-boeuf       → 1 produit
/ubereats-copywriter all                → toute la carte
```

Argument recu : `$ARGUMENTS`

## Calibration — Ce qu'on vise (et ce qu'on evite)

### ANTI-PATTERN : la liste d'ingredients (style McDo)

> "Pain spécial, steaks hachés, salade, oignon, cornichon, fromage fondu, sauce."

C'est une liste de courses, pas une description. Aucune emotion, aucune envie. **INTERDIT.**

### BON : process valorise + adjectifs sensoriels (style Five Guys / Burger King)

> "Deux steaks de bœuf de qualité et fraîchement préparés, avec deux tranches de bacon fumé croustillant au bois de pommier, dans un pain moelleux et toasté."
> — Five Guys, Uber Eats France

> "Viande origine France, deux tranches de Raclette fumée, sauce crémeuse à l'échalotte, oignons fondants, cornichons, bacon, pain brioché moelleux."
> — Burger King (Master Montagnard), Uber Eats France

### TRES BON : storytelling + affectif + process (style Popeyes)

> "Filets de poulet chouchoutés pendant 12 heures dans leur petite marinade à base d'épices cajun, soigneusement panés à la main et frits comme à la maison."
> — Popeyes, Uber Eats France

Ce qui fait la difference : le mot "chouchoutés", "leur petite marinade", "soigneusement", "comme à la maison". C'est affectif, narratif, ca raconte un soin.

### CIBLE StrictFood : sensoriel + taquin + benefices en clin d'oeil

Comme Popeyes mais avec la touche StrictFood : un ton legerement taquin sur les benefices (zero huile, proteines, peu de gras) qui arrive comme une bonne surprise APRES avoir donne envie.

**Progression de chaque description :**
1. **Envie** — ouvrir sur ce qui donne faim (texture, sensation, contraste)
2. **Decouverte** — reveler les ingredients, le process, le soin
3. **Clin d'oeil** — glisser les benefices avec un ton malin, presque joueur

## Workflow

### 1. Identifier les produits cibles

Si `$ARGUMENTS` = `all` → traiter tous les produits ci-dessous.
Si `$ARGUMENTS` = un slug → traiter ce produit uniquement.
Si `$ARGUMENTS` vide → demander quel produit.

**Inventaire complet (16 produits + 7 menus) :**

| Slug | Nom | Categorie | Recette dispo |
|------|-----|-----------|---------------|
| `strict-boeuf` | STRICT Boeuf | Burger | Oui |
| `strict-poulet` | STRICT Poulet | Burger | Oui |
| `strict-vege-falafel` | STRICT Vege Falafel | Burger | Oui |
| `strict-max-boeuf` | STRICT MAX Boeuf | Burger | Oui |
| `strict-max-poulet` | STRICT MAX Poulet | Burger | Oui |
| `strict-wrap-boeuf` | STRICT Wrap Boeuf | Wrap | Oui |
| `strict-wrap-poulet` | STRICT Wrap Poulet | Wrap | Oui |
| `tenders-strict` | Tenders STRICT | Snack | Oui |
| `frites-classiques` | Frites classiques | Snack | Non |
| `frites-patates-douces` | Frites Patates Douces | Snack | Non |
| `cookie-proteine` | Cookie proteine | Dessert | Non |
| `overnight-strict` | Overnight STRICT | Dessert | Non |
| `tiramisu-proteine` | Tiramisu proteine | Dessert | Non |
| `milkshake-proteine` | Milkshake proteine | Dessert | Non |
| `boisson-zero` | Boisson Zero | Boisson | Non |
| `boisson-energisante` | Boisson energisante | Boisson | Non |

**Menus** (burger/wrap + frites + boisson au choix) :
`menu-strict-boeuf`, `menu-strict-poulet`, `menu-strict-vege-falafel`, `menu-strict-max-boeuf`, `menu-strict-max-poulet`, `menu-strict-wrap-boeuf`, `menu-strict-wrap-poulet`

### 2. Lire les sources

Pour chaque produit, lire dans cet ordre :

1. **Recette** (si existe) : `production/_recettes/{slug}.md` — ingredients exacts, formes, empilement
2. **Carte** : `pipeline/input/content/carte.md` — macros (proteines, lipides uniquement)
3. **Contraintes et benefices** : lire `references/constraints.md` (dans ce skill) — ton, mots interdits, regles macros, benefices a integrer

> Tous les chemins relatifs a la racine projet : `/Users/dorian.gz/dev/Neurolia Agency/client-strictfood/`

Si un produit n'a PAS de recette (desserts, boissons, frites) : utiliser uniquement les infos de `carte.md` et le nom. Si les ingredients manquent, signaler a l'operateur et attendre ses indications avant de rediger.

### 3. Rediger la description

**Regle n°1 : SUBLIMER, pas lister.** Chaque ingredient doit etre qualifie (texture, sensation, provenance). Chaque phrase doit donner envie ou surprendre.

**Progression obligatoire :**

1. **Envie d'abord** (1-2 phrases) — ouvrir sur une sensation, une image, un contraste. Que voit-on, que sent-on, qu'imagine-t-on en croquant ? Utiliser des adjectifs sensoriels : fondant, croustillant, moelleux, frais, dore, juteux.

2. **Les ingredients, sublimes** (1-2 phrases) — pas une liste seche. Chaque ingredient est decrit avec sa texture ou son role dans l'experience. "Parmesan en miettes" → "Des eclats de parmesan qui fondent sur la viande encore chaude". Raconter l'empilement comme une decouverte, couche apres couche.

3. **Le clin d'oeil benefice** (1 phrase) — glisser les atouts StrictFood avec un ton taquin, joueur, presque provocateur. Jamais moralisateur. C'est une punchline, pas un cours de nutrition.

**Format :**
- Vouvoiement (vous/votre)
- 600 caracteres maximum
- Phrases courtes a moyennes, rythme varie

**Interdit :**
- Lister les ingredients comme une recette ou une fiche technique
- Prix (jamais)
- Calories (kcal) ou glucides
- Noms fournisseurs (Boucherie Labourde, Pains du Soleil, Myfitcheese)
- Mots bannis : healthy, diet, premium, bio, fitness, macro, grill, grille, barbecue, frit, revolution, unique
- Cheese pull, grill marks, fromage fondu etire

**Obligatoire :**
- Pain noir sesame mentionne pour les burgers (comme element distinctif, pas juste informatif)
- Cuisson sans huile valorisee (c'est le "grille a la flamme" de StrictFood)
- Double steak mentionne pour les MAX (pas de pain intermediaire)
- Au moins 1 benefice integre subtilement (proteines, lipides, zero huile, local, fait maison)
- Menu = produit + frites + boisson au choix

### 4. Valider

Avant d'ecrire le fichier, verifier :
- [ ] ≤ 600 caracteres (compter le champ Description uniquement)
- [ ] Vouvoiement partout (aucun "tu", "ton", "ta", "tes")
- [ ] Pas une liste d'ingredients — c'est narratif et sensoriel
- [ ] Au moins 1 benefice integre (proteines/lipides/zero huile/local/fait maison)
- [ ] Le benefice arrive APRES l'envie, jamais en ouverture
- [ ] Zero prix, zero kcal, zero glucides, zero nom de fournisseur, zero mot interdit
- [ ] Pain noir mentionne (burgers)
- [ ] Cuisson sans huile mentionnee (produits cuits)

### 5. Ecrire le fichier

Output dans `ubereats/descriptions/{slug}.md` :

```markdown
# {Nom du produit}

## Titre Uber Eats
{Nom} — {Qualificatif court}

## Description
{Texte, 600 caracteres max}
```

Pour les menus, le slug est `menu-{slug-produit}`.

Creer le dossier `ubereats/descriptions/` s'il n'existe pas.

### 6. Rapport

Apres redaction, afficher un tableau recapitulatif :

| Produit | Caracteres | Sensoriel | Benefice integre | Pain noir | Sans huile | Mots interdits |
|---------|-----------|-----------|-----------------|-----------|------------|----------------|
| ... | ... | OK | [lequel] | OK/NA | OK/NA | 0 |
