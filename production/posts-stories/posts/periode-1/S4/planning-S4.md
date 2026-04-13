# Planning S4 — 31-03-2026 → 06-04-2026

> **Periode** : Periode 1 — Remplir le mur visuel
> **Objectifs semaine** : Introduire 3 produits jamais couverts en post (STRICT Vege Falafel, STRICT MAX Boeuf, STRICT Wrap Poulet). Inaugurer les traitements masque-inverse et texture-fill. Pousser Les Benefices (sous-represente a 25% vs cible 35%).
> **Format** : 2 posts simples + 2 carrousels = 4 publications
> **Process** : Concepts et fonds generes depuis `_config/story-combinations.md` (meme logique que stories)

---

## Etape 0 — Analyse des semaines precedentes

| Source | Constat | Action pour S4 |
|--------|---------|----------------|
| Posts | Le Produit a 62.5% (cible 55%) | Accepter — justifie par les lancements produits |
| Posts | Les Benefices a 25% (cible 35%) | Placer 1 carrousel Les Benefices — PRIORITAIRE |
| Posts | La Marque a 12.5% (cible 10%) | 0 publications La Marque cette semaine |
| Posts | Falafel, MAX Boeuf, Wraps = JAMAIS couverts | Introduire les trois |
| Posts | S3 traitements : photo-pure + knockout-band | Forcer masque-inverse + texture-fill (nouveaux) |
| Posts | S3 concepts : hero 3/4 surrepresente | Forcer des concepts differents (face, decon, flat) |
| Carrousels | S3 types : Panoramique (C) + Educatif (A) | Forcer Zoom Progressif (B) + Ingredient Spotlight (A) |

---

## Posts simples (2 cette semaine)

| # | Jour | Pilier | Traitement | Concept | Fond | Produit | Intention | Format |
|---|------|--------|------------|---------|------|---------|-----------|--------|
| P1 | Mar 01-04 | Le Produit | masque-inverse | hero face (vue frontale) | charbon | STRICT Vege Falafel | curiosite | Post 4:5 |
| P2 | Jeu 03-04 | Le Produit | texture-fill | decon (ingredients alignes) | ambre | STRICT MAX Boeuf | envie | Post 4:5 |

### Notes de production posts

**Post P1 — STRICT Vege Falafel (masque-inverse)**
- Mode : `full-ia` (generation photo de base) + overlay masque-inverse (post-production)
- Concept photo de base : hero face — burger falafel VU DE FACE, straight-on, interieur vert visible par les cotes, pain noir sesame imposant
- Le traitement masque-inverse superpose le texte "FALAFEL" en ambre solide par-dessus la photo
- Fond : charbon — accent ambre via eclairage lateral chaud qui fait briller la croute falafel doree et la sauce (PAS de kraft)
- Signature : charbon (fond + bun noir) + ambre (lumiere doree + croute falafel + sauce)
- Intention : curiosite — "c'est quoi ce burger vert ?"

**Post P2 — STRICT MAX Boeuf (texture-fill)**
- Mode : `full-ia` (generation de la texture photo) + overlay texture-fill (post-production)
- Concept : lettres "MAX" geantes remplies par une photo macro de la surface du double steak Maillard — texture brute, croute crateree
- La photo macro est generee sur fond charbon avec eclairage ambre lateral
- Fond overlay : ambre (le texte en texture se detache sur le fond dore)
- Signature : charbon (la texture Maillard est sombre) + ambre (le fond dore)
- Intention : envie — les lettres "MAX" remplies de texture viande = impact visceral

---

## Carrousels (2 cette semaine)

| # | Jour | Type | Famille | Pilier | Produit | Intention | Slides | Note |
|---|------|------|---------|--------|---------|-----------|--------|------|
| C1 | Sam 05-04 | Zoom Progressif | B | Le Produit | STRICT Wrap Poulet | envie | 4 | 1er wrap en carrousel |
| C2 | Dim 06-04 | Ingredient Spotlight | A | Les Benefices | Myfitcheese | confiance | 5 | 1er Ingredient Spotlight |

### Notes de production carrousels

**Carrousel C1 — Zoom Progressif Wrap Poulet (Le Produit)**
- Famille : B (4 images independantes Gemini 2K, meme style)
- Sequence : plan large (wrap pose sur ardoise noire, lumiere ambre laterale) → plan serre (wrap entier, ouverture visible) → macro (interieur poulet + sauce + parmesan) → ultra-macro (grain parmesan + fibres poulet, sauce glossy)
- Fond : charbon (ardoise noire) — accent ambre via lumiere chaude directionnelle sur chaque slide
- Signature coherente sur les 4 slides : meme direction de lumiere ambre, meme fond charbon
- Intention : envie — le zoom progressif cree l'appetit crescendo

**Carrousel C2 — Ingredient Spotlight Myfitcheese (Les Benefices)**
- Famille : A (template Puppeteer)
- Angle : "Ce fromage a +30% de proteines et -40% de gras vs un parmesan classique"
- Structure : cover + 3 slides data + slide sources + CTA
- Fond : charbon (template DA standard)
- Intention : confiance — chiffres sources, credibilite artisan

---

## Verification distribution

### Posts simples — Traitements cette semaine

| Traitement | Count | Note |
|-----------|-------|------|
| masque-inverse | 1/2 | Nouveau dans le feed ✅ |
| texture-fill | 1/2 | Nouveau dans le feed ✅ |
| **Traitements differents** | 2 | ≥ 2 ✅ |

### Posts simples — Concepts cette semaine

| Concept | Count | Note |
|---------|-------|------|
| hero face (vue frontale) | 1/2 | Jamais fait ✅ |
| decon (macro texture) | 1/2 | Jamais fait ✅ |
| hero 3/4 | 0 | LIMITE ✅ |

### Posts simples — Fonds cette semaine

| Fond | Count |
|------|-------|
| Charbon | 1/2 |
| Ambre | 1/2 |

### Carrousels cette semaine

| Type | Famille | Note |
|------|---------|------|
| Zoom Progressif | B | 1er du feed ✅ |
| Ingredient Spotlight | A | 1er du feed ✅ |

### Publications — Piliers cette semaine (posts + carrousels)

| Pilier | Count | Cible mois |
|--------|-------|------------|
| Le Produit | 3/4 | 55% |
| Les Benefices | 1/4 | 35% |
| La Marque | 0/4 | 10% |
| **Piliers differents** | 2 | ≥ 2 ✅ |

### Produits introduits en post (cumul apres S4)

| Produit | S1-S3 | S4 | Total |
|---------|-------|-----|-------|
| STRICT Boeuf | 3 | 0 | 3 |
| STRICT Poulet | 1 | 0 | 1 |
| Tenders STRICT | 1 | 0 | 1 |
| STRICT MAX Poulet | 2 | 0 | 2 |
| **STRICT Vege Falafel** | 0 | 1 | **1** (1ere apparition) |
| **STRICT MAX Boeuf** | 0 | 1 | **1** (1ere apparition) |
| **STRICT Wrap Poulet** | 0 | 1 | **1** (1ere apparition carrousel) |
| Myfitcheese | 0 | 1 | **1** (spotlight artisan) |

---

## Prochaine etape

Rediger les briefs individuels (`brief/brief.md`) pour chaque post et carrousel.
