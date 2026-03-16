# Historique Production Instagram — StrictFood

> **Ce fichier est GÉNÉRÉ automatiquement** par scan des dossiers de production.
> Il reflète exactement ce qui existe sur le disque. Rien de plus, rien de moins.
>
> **Source de vérité** : les fichiers dans `posts-stories/posts/` et `posts-stories/stories/`.
> - Un post **existe** = son dossier contient un PNG dans `final/`
> - Une story **existe** = son dossier `story-NN/final/` contient un PNG
> - Un fichier supprimé = supprimé de l'historique au prochain scan
>
> **Quand régénérer** :
> - Avant chaque planning (obligatoire)
> - Après chaque suppression de fichier
> - Commande : `Régénère l'historique de production`
>
> **NE JAMAIS modifier ce fichier à la main.** Il sera écrasé au prochain scan.

---

## Posts produits (planning)

> Scanné depuis `posts-stories/posts/*/S*/DD-MM-YYYY/`
> Un post est comptabilisé si `final/` contient au moins un PNG.

| Semaine | Date | Pilier | Mode | Produit | Angle / Sujet |
|---------|------|--------|------|---------|---------------|
<!-- GENERATED — ne pas modifier -->

## Posts produits (hors-planning)

> Scanné depuis `posts-stories/posts/hors-planning/DD-MM-YYYY/`
> Même critère : `final/` contient au moins un PNG.

| Date | Pilier | Mode | Produit | Angle / Sujet |
|------|--------|------|---------|---------------|
<!-- GENERATED — ne pas modifier -->

## Stories produites (planning)

> Scanné depuis `posts-stories/stories/S*/[jour]/`
> Une story est comptabilisée si `story-NN/final/` contient un PNG.

### S1

| Jour | # | Type | Mode | Produit / Sujet |
|------|---|------|------|-----------------|
<!-- GENERATED — ne pas modifier -->

## Stories produites (hors-planning)

> Scanné depuis `posts-stories/stories/hors-planning/DD-MM-YYYY/`
> Même critère : `story-NN/final/` contient un PNG.

| Date | # | Type | Mode | Produit / Sujet |
|------|---|------|------|-----------------|
<!-- GENERATED — ne pas modifier -->

## Compteurs cumulés

> Calculés automatiquement à partir de TOUTES les tables ci-dessus (planning + hors-planning).
> Le hors-planning compte dans les totaux — un post hors-planning sur le STRICT Bœuf est quand même un post sur le STRICT Bœuf.

### Produits — apparitions posts

| Produit | Posts | Dernière apparition |
|---------|-------|---------------------|
<!-- GENERATED -->

### Produits — apparitions stories

| Produit | Stories | Dernière apparition |
|---------|---------|---------------------|
<!-- GENERATED -->

### Piliers — apparitions posts

| Pilier | Total | Cible |
|--------|-------|-------|
| Le Plat | | 35% |
| La Cuisine | | 25% |
| Les Macros | | 18% |
| L'Équipe | | 15% |
| Le Quartier | | 7% |

### Modes — apparitions posts

| Mode | Total | Cible |
|------|-------|-------|
| full-ia | | 30% |
| irl-sublimation | | 25% |
| compositing-irl | | 20% |
| compositing-ia | | 15% |
| template | | 10% |

### Modes — apparitions stories

| Mode | Total | Cible |
|------|-------|-------|
| template | | 50% |
| irl | | 20% |
| irl-sublimation | | 15% |
| compositing-irl | | 10% |
| full-ia | | 5% |

---

## Procédure de scan

Pour régénérer ce fichier, l'agent doit :

### 1. Scanner les posts planning

```
Pour chaque dossier dans posts-stories/posts/*/S*/DD-MM-YYYY/ :
  1. Vérifier que final/ contient au moins un .png
  2. Si oui → lire brief/brief.md et extraire :
     - Semaine (depuis le chemin : S1, S2...)
     - Date (depuis le nom du dossier)
     - Pilier (champ "Pilier" dans la table Stratégie du brief)
     - Mode (champ "Mode" dans la table Stratégie du brief, ou "full-ia" si brief v2)
     - Produit (champ "Produit" ou titre du brief)
     - Angle (champ "Objectif" résumé en quelques mots)
  3. Ajouter une ligne dans la table "Posts produits (planning)"
```

### 2. Scanner les posts hors-planning

```
Pour chaque dossier dans posts-stories/posts/hors-planning/DD-MM-YYYY/ :
  1. Vérifier que final/ contient au moins un .png (ou tout .png à la racine du dossier)
  2. Si oui → lire brief/brief.md si existe, sinon déduire depuis le contenu
     - Date (depuis le nom du dossier)
     - Pilier, Mode, Produit, Angle (depuis le brief ou à défaut depuis le nom des fichiers)
  3. Ajouter une ligne dans la table "Posts produits (hors-planning)"
```

### 3. Scanner les stories planning

```
Pour chaque dossier dans posts-stories/stories/S*/[jour]/ :
  1. Lister tous les story-NN/final/ contenant un PNG
  2. Pour chaque PNG trouvé → lire story-NN/production/data.md (si existe) et brief/brief-story.md
     - Extraire : numéro, type, mode, produit/sujet
  3. Ajouter dans la table stories de la semaine correspondante
```

### 4. Scanner les stories hors-planning

```
Pour chaque dossier dans posts-stories/stories/hors-planning/DD-MM-YYYY/ :
  1. Lister tous les story-NN/final/ contenant un PNG (ou tout .png)
  2. Pour chaque PNG → lire story-NN/production/data.md ou brief si existe
     - Extraire : date, numéro, type, mode, produit/sujet
  3. Ajouter dans la table "Stories produites (hors-planning)"
```

### 5. Calculer les compteurs

```
Agréger TOUTES les tables (planning + hors-planning) :
  - Compter les occurrences de chaque produit, pilier, mode
  - Calculer les pourcentages
  - Identifier les alertes (écarts > 10% vs cible)
  - Le hors-planning compte dans les totaux
```

### 6. Écrire le fichier

Réécrire entièrement `_config/historique-production.md` avec les données scannées.
