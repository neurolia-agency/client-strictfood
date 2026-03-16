# Historique Production Instagram — StrictFood

> **Ce fichier est GÉNÉRÉ automatiquement** par scan des dossiers de production.
> Il reflète exactement ce qui existe sur le disque. Rien de plus, rien de moins.
>
> **Source de vérité** : les fichiers dans `posts-stories/posts/` et `posts-stories/stories/`.
> - Un post **existe** = son dossier contient un PNG dans `03-output/`
> - Une story **existe** = son dossier contient un `story-NN.png`
> - Un fichier supprimé = supprimé de l'historique au prochain scan
>
> **Quand régénérer** :
> - Avant chaque planning (obligatoire)
> - Après chaque suppression de fichier
> - Commande : `Régénère l'historique de production`
>
> **NE JAMAIS modifier ce fichier à la main.** Il sera écrasé au prochain scan.

---

## Posts produits

> Scanné depuis `posts-stories/posts/*/S*/YYYY-MM-DD/`
> Un post est comptabilisé si `03-output/` contient au moins un PNG.

| Semaine | Date | Pilier | Mode | Produit | Angle / Sujet |
|---------|------|--------|------|---------|---------------|
<!-- GENERATED — ne pas modifier -->

## Stories produites

> Scanné depuis `posts-stories/stories/S*/[jour]/`
> Une story est comptabilisée si un `story-NN.png` existe.

### S1

| Jour | # | Type | Mode | Produit / Sujet |
|------|---|------|------|-----------------|
<!-- GENERATED — ne pas modifier -->

## Compteurs cumulés

> Calculés automatiquement à partir des tables ci-dessus.

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

### 1. Scanner les posts

```
Pour chaque dossier dans posts-stories/posts/*/S*/YYYY-MM-DD/ :
  1. Vérifier que 03-output/ contient au moins un .png
  2. Si oui → lire 00-brief/brief.md et extraire :
     - Semaine (depuis le chemin : S1, S2...)
     - Date (depuis le nom du dossier)
     - Pilier (champ "Pilier" dans la table Stratégie du brief)
     - Mode (champ "Mode" dans la table Stratégie du brief)
     - Produit (champ "Produit" ou titre du brief)
     - Angle (champ "Objectif" résumé en quelques mots)
  3. Ajouter une ligne dans la table "Posts produits"

Pour chaque dossier dans posts-stories/posts/hors-planning/YYYY-MM-DD/ :
  Même logique, marquer la semaine comme "HP" (hors-planning)
```

### 2. Scanner les stories

```
Pour chaque dossier dans posts-stories/stories/S*/[jour]/ :
  1. Lister tous les story-NN.png
  2. Pour chaque PNG trouvé → lire story-NN-data.md (si existe) et brief-story.md
     - Extraire : numéro, type, mode, produit/sujet
  3. Ajouter une ligne dans la table stories de la semaine

Pour chaque dossier dans posts-stories/stories/hors-planning/YYYY-MM-DD/ :
  Même logique
```

### 3. Calculer les compteurs

```
Compter les occurrences de chaque produit, pilier, mode
Calculer les pourcentages
Identifier les alertes (écarts > 10% vs cible)
```

### 4. Écrire le fichier

Réécrire entièrement `_config/historique-production.md` avec les données scannées.
