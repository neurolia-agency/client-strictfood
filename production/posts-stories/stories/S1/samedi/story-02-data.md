# Story 02 Data — STRICT Wrap Boeuf (Fiche Produit Vitrine)

**Date:** samedi S1 (2026-03-15)
**Type:** Fiche Produit
**Template:** `produit-vitrine.html`
**Highlight:** LA CARTE

---

## Résolution des Placeholders

### Identité Produit

| Placeholder | Valeur | Source |
|---|---|---|
| `{{PRODUCT_NAME}}` | STRICT WRAP BOEUF | Recette `strict-wrap-boeuf.md` |
| `{{HERO_IMAGE_PATH}}` | `/Users/dorian.gz/dev/Neurolia Agency/client-strictfood/public/images/photos-references/produits-source/wraps/strict-wrap-boeuf.png` | Photo-references.md — Wraps section |

### Nutritionnelles (Macros)

| Placeholder | Valeur | Source | Notes |
|---|---|---|---|
| `{{PROTEIN}}` | 51g | Recette ligne "Protéines" | Macro star — valeur la plus impressionnante |
| `{{FAT}}` | 20,5g | Recette ligne "Lipides" | Arrondi à 20,5 (format exact recette) |
| `{{CARBS}}` | 39g | Recette ligne "Glucides" | Valeur exacte |
| `{{KCAL}}` | 566 | Recette ligne "Kcal" | Complet protéiné |

### Textes Copywriter (Fusion Ultérieure)

| Placeholder | Valeur Provisoire | Notes |
|---|---|---|
| `{{PRODUCT_SUBTITLE}}` | `Tortilla grillée · viande de boucherie · macros au carré` | Copywriter — sensoriel + traçabilité + résultat |
| `{{BADGE_TEXT}}` | `À EMPORTER` | Copywriter — badge usage (format/mobilité) pour persona actif pressé |
| `{{TAGLINE}}` | `Le cheat meal qui n'en est pas un` | Brief — conservé tel quel (copywriter valide) |

### Brand & Style

| Placeholder | Valeur | Notes |
|---|---|---|
| `{{MOOD_CLASS}}` | `` (vide) | Brief DA : cuivre → pas de classe mood secondaire |

---

## Validations

- **Photo existante** ✅ : `/Users/dorian.gz/dev/Neurolia Agency/client-strictfood/public/images/photos-references/produits-source/wraps/strict-wrap-boeuf.png`
- **Macro star** ✅ : Protéines 51g (impression maximale)
- **Chemin absolu** ✅ : Obligatoire pour Puppeteer
- **Pain noir** : N/A (format wrap, pas burger)
- **Donnée manquante** : Aucune

---

## Contexte Création

**Objectif story (du brief) :**
Révéler un format que les abonnés ne connaissent peut-être pas : le wrap. Jusqu'ici, le feed et les stories n'ont montré que des burgers et du dessert. Le wrap est parfait pour le persona "actif pressé" — rapide, complet, transportable. Troisième entrée dans le highlight LA CARTE.

**Persona cible :** Actifs pressés (wrap = rapide à manger) + Tous
**Stratégie :** Phase 1 — "page vivante et cohérente" + crédibilité locale

**Bénéfices mis en avant :**
1. Format wrap, pratique à emporter
2. Même viande Boucherie Labourde que les burgers
3. Profil macro complet en un seul wrap

---

## Template Fill Instructions

**Pour le designer/templater :**

1. Ouvrir `produit-vitrine.html`
2. Remplacer tous les `{{PLACEHOLDER}}` par les valeurs du tableau "Résolution des Placeholders" ci-dessus
3. Vérifier chemins absolus dans `{{HERO_IMAGE_PATH}}`
4. Valider que `{{MOOD_CLASS}}` est vide (pas de classe mood cuivre secondaire)
5. Sauvegarder en `story-02.html` dans le dossier samedi
6. Lancer Puppeteer render → `story-02.png` (1080×1920)

---

## Notes Post-Production

- Les textes `{{PRODUCT_SUBTITLE}}`, `{{BADGE_TEXT}}` sont des placeholders copie — **fusionner avec copywriter après validation**
- Pas de filtre sepia (template Vitrine n'en utilise pas)
- Gradient radial coloré autour du wrap (template par défaut)
- Zone safe Instagram respectée : textes entre y:250 et y:1670
- Logo footer opacity 0.6 (template)

