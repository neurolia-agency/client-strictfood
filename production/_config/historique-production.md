# Historique Production Instagram — StrictFood

> **Ce fichier EXISTE TOUJOURS** a `production/_config/historique-production.md`.
> Ne JAMAIS supposer qu'il n'existe pas. Il est REECRIT (pas cree) par scan des dossiers.
>
> **Ce fichier est REECRIT automatiquement** par scan des dossiers de production.
> Il reflete exactement ce qui existe sur le disque. Rien de plus, rien de moins.
>
> **Source de verite** : les fichiers dans `posts-stories/posts/` et `posts-stories/stories/`.
> - Un post **existe** = son dossier contient un PNG dans `final/` ou `03-output/`
> - Une story **existe** = son dossier contient un PNG dans `story-NN/final/`
> - Les PNG dans `brouillons/` ne sont PAS comptabilises (brouillon ≠ contenu termine)
> - Un fichier supprime = supprime de l'historique au prochain scan
>
> **Quand reecrire** :
> - Avant chaque planning (obligatoire)
> - Apres chaque suppression de fichier
> - Commande : `Regenere l'historique de production`
> - **Comment** : LIRE ce fichier d'abord, puis scanner les dossiers, puis REECRIRE
>
> **NE JAMAIS modifier ce fichier a la main.** Il sera ecrase au prochain scan.

---

> **Dernier scan** : 2026-03-20

## Posts produits (planning)

> Scanne depuis `posts-stories/posts/*/S*/DD-MM-YYYY/`
> Un post est comptabilise si `03-output/` ou `final/` contient au moins un PNG.

| Semaine | Date | Pilier | Mode | Produit | Angle / Sujet |
|---------|------|--------|------|---------|---------------|
| S1 | 10-03-2026 | Le Plat | full-ia | STRICT Boeuf | Hero shot Dark Food Premium — premier post reboot (2 PNG) |
| S1 | 12-03-2026 | La Cuisine | full-ia | STRICT Boeuf | Carrousel "Du boucher a l'assiette" — process artisanal (5 PNG, slides 3-5) |
| S2 | 17-03-2026 | Le Plat | compositing-ia | STRICT Poulet | Levitation cinematique sur fond charbon (1 PNG) |
| S2 | 19-03-2026 | Les Macros | template | STRICT Boeuf | Carrousel comparaison nutritionnelle vs fast-food (9 PNG, 6 slides) |

> Posts planifies mais NON produits (pas de PNG en final/) :
> - S1 : 14-03-2026 (Tiramisu), 16-03-2026 (Fondateurs)
> - S2 : 21-03-2026 (Boucherie Labourde, irl-sublimation — brief pret), 23-03-2026 (Wrap Poulet, compositing-ia — brief pret)

## Posts produits (hors-planning)

> Scanne depuis `posts-stories/posts/hors-planning/DD-MM-YYYY/`
> Meme critere : contient au moins un PNG.

| Date | Pilier | Mode | Produit | Angle / Sujet |
|------|--------|------|---------|---------------|
| 16-03-2026 | — | — | — | Gym vs Burger split (1 PNG, sans brief structure) |

> Hors-planning 18-03-2026 (Romain devanture, compositing-irl) : 2 PNG en brouillons/ uniquement — NON comptabilise.

## Stories produites (planning)

> Scanne depuis `posts-stories/stories/S*/[jour]/`
> S1 utilise une structure legacy (PNGs directement dans le dossier jour, pas dans story-NN/final/).

### S1

| Jour | # | Type | Mode | Produit / Sujet |
|------|---|------|------|-----------------|
| mercredi | 02 | Interactif | template | "Boeuf ou Poulet?" |
| mercredi | 03 | — | template | (2 variantes option A2/B2) |
| mercredi | 04 | — | template | — |
| jeudi | 01 | Focus Ingredient | template | Myfitcheese — parmesan proteine |
| jeudi | 03 | — | template | — |
| jeudi | 04 | Annonce | template | — |
| vendredi | 01 | Fiche Produit | template | STRICT Poulet |
| vendredi | 01-v2 | Fiche Produit | template | STRICT Poulet (variante) |
| vendredi | 02 | Interactif | template | "Cookie ou Tiramisu?" |
| samedi | 02 | Fiche Produit | template | STRICT Wrap Boeuf |
| dimanche | 02 | Focus Ingredient | template | Pain noir — Pains du Soleil |

> **Note** : lundi S1 — brief existant mais aucun PNG produit.

### S2

| Jour | # | Type | Mode | Produit / Sujet |
|------|---|------|------|-----------------|
| lundi | 01 | Educatif | template | "53g de proteines" — STRICT Poulet vs shaker whey |
| mardi | 01 | Fiche Produit | template | STRICT Vege Falafel |
| mardi | 02 | Focus Ingredient | template | Viande Boucherie Labourde |
| mardi | 03 | Produit en situation | compositing-irl | Falafel sur comptoir salle |
| mercredi | 03 | IRL | irl | Rush du midi |

> Stories S2 en brouillons/ (NON comptabilisees) :
> - lundi story-02 (IRL coulisses), jeudi story-01 (Fiche MAX Boeuf), jeudi story-02 (MAX Boeuf sublimation)
> Stories S2 non demarrees : lundi story-03, mercredi story-01/02, vendredi-dimanche (aucun dossier cree)

## Stories produites (hors-planning)

> Scanne depuis `posts-stories/stories/hors-planning/`

| Date | # | Type | Mode | Produit / Sujet |
|------|---|------|------|-----------------|
<!-- Aucun PNG trouve dans hors-planning/ au format story-NN/final/ -->

> Fichiers isoles trouves (non comptabilises — pas de structure story-NN/final/) :
> - macro-tagline.png, tenders-irl-v4.png, test-human-tight/

## Compteurs cumules

> Calcules automatiquement a partir de TOUTES les tables ci-dessus (planning + hors-planning).

### Produits — apparitions posts

| Produit | Posts | Derniere apparition |
|---------|-------|---------------------|
| STRICT Boeuf | 3 | 19-03-2026 (S2 — comparaison macros) |
| STRICT Poulet | 1 | 17-03-2026 (S2) |

### Produits — apparitions stories

| Produit | Stories | Derniere apparition |
|---------|---------|---------------------|
| STRICT Boeuf | 1 (interactif) | mercredi S1 |
| STRICT Poulet | 3 (fiche + v2 + educatif) | lundi S2 |
| STRICT Wrap Boeuf | 1 (fiche) | samedi S1 |
| STRICT Vege Falafel | 2 (fiche + compositing) | mardi S2 |
| Myfitcheese | 1 (focus ingredient) | jeudi S1 |
| Pains du Soleil | 1 (focus ingredient) | dimanche S1 |
| Cookie Proteine | 1 (interactif) | vendredi S1 |
| Tiramisu Proteine | 1 (interactif) | vendredi S1 |
| Boucherie Labourde | 1 (focus ingredient) | mardi S2 |

### Produits JAMAIS couverts

| Produit | Type | Note |
|---------|------|------|
| STRICT MAX Poulet | Burger | Aucune apparition (post ou story) |
| Frites Classiques | Snack | Aucune apparition |
| Frites Patates Douces | Snack | Aucune apparition |
| Overnight STRICT | Dessert | Aucune apparition |
| Milkshake Proteine | Dessert | Aucune apparition |
| Boissons Zero / Energisante | Boisson | Aucune apparition |

### Piliers — apparitions posts

| Pilier | Total | % | Cible |
|--------|-------|---|-------|
| Le Plat | 2 | 50% | 35% |
| La Cuisine | 1 | 25% | 25% |
| Les Macros | 1 | 25% | 18% |
| L'Equipe | 0 | 0% | 15% |
| Le Quartier | 0 | 0% | 7% |

> 4 posts produits — echantillon petit mais Les Macros est desormais represente.
> Priorites S3 : introduire L'Equipe et Le Quartier.

### Modes — apparitions posts

| Mode | Total | % | Cible |
|------|-------|---|-------|
| full-ia | 2 | 50% | 30% |
| compositing-ia | 1 | 25% | 15% |
| template | 1 | 25% | 10% |
| irl-sublimation | 0 | 0% | 25% |
| compositing-irl | 0 | 0% | 20% |

> Priorites S3 : introduire irl-sublimation et compositing-irl (jamais utilises en post).

### Modes — apparitions stories

| Mode | Total | % | Cible |
|------|-------|---|-------|
| template | 14 | 87.5% | ~10% |
| irl | 1 | 6.25% | ~30% |
| compositing-irl | 1 | 6.25% | ~15% |
| irl-sublimation | 0 | 0% | ~25% |
| full-ia | 0 | 0% | ~20% |

> S1 etait 100% template, S2 commence a diversifier (3 modes differents).
> Priorites S3 : push massif IRL + irl-sublimation + full-ia. Templates a ~10%.

### Axes interactifs utilises

| Semaine | Question | Produits |
|---------|----------|----------|
| S1 | "Boeuf ou Poulet?" | STRICT Boeuf / STRICT Poulet |
| S1 | "Cookie ou Tiramisu?" | Cookie / Tiramisu |
| S2 (planifie) | "Simple ou MAX?" | STRICT Boeuf / STRICT MAX Boeuf |
| S2 (planifie) | "Team Viande ou Team Vege?" | STRICT Boeuf / STRICT Vege Falafel |

> Axes disponibles pour S3 : Frites (Classiques vs Patates Douces), Wraps (Boeuf vs Poulet), Desserts (Overnight vs Milkshake), Format (Burger vs Wrap)

### Educatifs utilises

| Semaine | Sujet | Chiffre cle |
|---------|-------|-------------|
| S2 (planifie) | Proteines burger vs shaker | 53g |
| S2 (planifie) | Calories burger vs fast-food | 596 kcal |
| S2 (planifie) | Cuisson sans huile | 0g |

> Sujets disponibles pour S3 : pain noir (composition), ratio prot/euro, ingredients clean, fibres, sodium, supply chain fraicheur

---

## Procedure de scan

Pour regenerer ce fichier, l'agent doit :

### 1. Scanner les posts planning

```
Pour chaque dossier dans posts-stories/posts/*/S*/DD-MM-YYYY/ :
  1. Verifier que final/ ou 03-output/ contient au moins un .png
  2. Si oui → lire brief/brief.md ou 00-brief/brief.md et extraire :
     - Semaine (depuis le chemin : S1, S2...)
     - Date (depuis le nom du dossier)
     - Pilier (champ "Pilier" dans la table Strategie du brief)
     - Mode (champ "Mode" dans la table Strategie du brief, ou "full-ia" si brief v2)
     - Produit (champ "Produit" ou titre du brief)
     - Angle (champ "Objectif" resume en quelques mots)
  3. Ajouter une ligne dans la table "Posts produits (planning)"
```

### 2. Scanner les posts hors-planning

```
Pour chaque dossier dans posts-stories/posts/hors-planning/DD-MM-YYYY/ :
  1. Verifier que final/ contient au moins un .png (ou tout .png a la racine du dossier)
  2. Si oui → lire brief/brief.md si existe, sinon deduire depuis le contenu
     - Date (depuis le nom du dossier)
     - Pilier, Mode, Produit, Angle (depuis le brief ou a defaut depuis le nom des fichiers)
  3. Ajouter une ligne dans la table "Posts produits (hors-planning)"
```

### 3. Scanner les stories planning

```
Pour chaque dossier dans posts-stories/stories/S*/[jour]/ :
  1. Lister tous les story-NN/final/ contenant un PNG
     (legacy S1 : PNGs directement dans le dossier jour)
  2. Pour chaque PNG trouve → lire story-NN/production/data.md (si existe) et brief/brief-story.md
     - Extraire : numero, type, mode, produit/sujet
  3. Ajouter dans la table stories de la semaine correspondante
```

### 4. Scanner les stories hors-planning

```
Pour chaque dossier dans posts-stories/stories/hors-planning/DD-MM-YYYY/ :
  1. Lister tous les story-NN/final/ contenant un PNG (ou tout .png)
  2. Pour chaque PNG → lire story-NN/production/data.md ou brief si existe
     - Extraire : date, numero, type, mode, produit/sujet
  3. Ajouter dans la table "Stories produites (hors-planning)"
```

### 5. Calculer les compteurs

```
Agreger TOUTES les tables (planning + hors-planning) :
  - Compter les occurrences de chaque produit, pilier, mode
  - Calculer les pourcentages
  - Identifier les alertes (ecarts > 10% vs cible)
  - Le hors-planning compte dans les totaux
```

### 6. Ecrire le fichier

Reecrire entierement `_config/historique-production.md` avec les donnees scannees.
