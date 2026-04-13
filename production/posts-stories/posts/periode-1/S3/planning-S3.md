# Planning S3 — 24-03-2026 → 30-03-2026

> **Periode** : Periode 1 — Remplir le mur visuel
> **Micro-saison** : Semaine A — Macro & Texture
> **Objectifs semaine** : Introduire 2 produits jamais couverts en post (Tenders STRICT, STRICT MAX Poulet). Premier carrousel panoramique (nouveau format). Pousser le pilier Benefices (sous-represente a 25% vs cible 35%).
> **Format** : 2 posts simples + 2 carrousels = 4 publications

---

## Etape 0 — Analyse des semaines precedentes

### Resume des semaines precedentes

| Source | Constat | Action pour S3 |
|--------|---------|----------------|
| Posts | Le Produit a 50% (cible 55%) | 2-3 publications Le Produit |
| Posts | Les Benefices a 25% (cible 35%) | 1 publication Les Benefices — PRIORITAIRE |
| Posts | La Marque a 25% (cible 10%) | 0 publications La Marque cette semaine |
| Posts | STRICT Boeuf = 3 posts (dernier S2 19-03) | NE PAS refaire en post S3 |
| Posts | STRICT Poulet = 1 post (S2 17-03) | Eligible mais pas prioritaire |
| Posts | STRICT MAX Poulet, Tenders STRICT = JAMAIS couverts | Introduire les deux |
| Posts | Traitements : photo-pure + carousel dominent | Forcer knockout-band |
| Carrousels | 0 carrousel photo (nouveau format) | Inaugurer le format panoramique |

---

## Posts simples (2 cette semaine)

| # | Jour | Pilier | Traitement | Source image | Fond | Produit / Sujet | Format | Note |
|---|------|--------|------------|-------------|------|-----------------|--------|------|
| P1 | Mar 25 | Le Produit | photo-pure | ia | charbon | Tenders STRICT — macro texture croute doree, sortie air fryer, vapeur | Post 4:5 | 1ere apparition Tenders en post |
| P2 | Jeu 27 | Le Produit | knockout-band | ia | ambre | STRICT MAX Poulet — hero shot dramatique, double lamelles poulet, bande dome ambre | Post 4:5 | 1ere apparition MAX Poulet en post |

### Notes de production posts

**Post P1 — Tenders STRICT (Le Produit)**
- Mode : `full-ia`
- Concept : Macro extreme sur la croute croustillante des tenders, fond charbon, eclairage lateral chaud
- Micro-saison : Macro & Texture → focus sur la texture de la panure doree air-fried
- Fond : charbon (surfaces sombres, inox, profondeur)

**Post P2 — STRICT MAX Poulet (Le Produit)**
- Mode : `full-ia`
- Concept : Hero shot avec knockout-band ambre. Double portion de lamelles poulet dorees, parmesan en miettes, mache petites feuilles rondes, sauce poivron filet delicat
- Fond ambre-ID suggere : `ambre-beton` ou `ambre-cuir`
- Micro-saison : Texture visible dans le hero — graines sesame, croute Maillard poulet

---

## Carrousels (2 cette semaine)

| # | Jour | Type | Famille | Pilier | Produit / Sujet | Slides | Theme/Scene slug | Note |
|---|------|------|---------|--------|-----------------|--------|-----------------|------|
| C1 | Sam 29 | Panoramique | C | Le Produit | Scene table complete — Tenders + frites patate douce + sauce + burger STRICT MAX Poulet | 4 | `pano-table-complete` | 1er panoramique du feed |
| C2 | Dim 30 | Educatif | A | Les Benefices | "Le cheat meal est un mensonge" — psycho-nutrition, 7 slides | 7 | `cheat-meal-mythe` | DEJA PRODUIT (9 PNG) |

### Notes de production carrousels

**Carrousel C1 — Panoramique table complete (Le Produit)**
- Famille : C (1 image large → decoupe 4 slides)
- Scene : table/surface ardoise sombre, vue legerement plongeante
- Disposition gauche → droite :
  - Slide 1 : Tenders dores dans papier kraft + sauce poivron dans ramequin
  - Slide 2 : Burger STRICT MAX Poulet hero (profil dramatique, pain noir sesame)
  - Slide 3 : Frites patate douce en eventail + serviette kraft froissee
  - Slide 4 : Main qui attrape une frite, bokeh leger
- Eclairage : source chaude directionnelle upper-left, ombres marquees
- Generation : Gemini 4K format 16:9 → `render-panoramic.js --slides 4`
- Brief : `_templates/brief-carousel-panoramique.md`

**Carrousel C2 — Cheat meal mythe (Les Benefices)**
- Famille : A (template Puppeteer)
- DEJA PRODUIT — 9 slides dans `30-03-2026/brouillons/`
- Production complete : research, scenario, content, slides HTML, caption
- Aucune action necessaire

---

## Verification distribution

### Posts simples — Traitements cette semaine

| Traitement | Count | Contrainte | OK ? |
|-----------|-------|------------|------|
| photo-pure | 1/2 | | ✅ |
| knockout-band | 1/2 | | ✅ |
| **Total traitements differents** | 2 | | ✅ |

### Posts simples — Fonds cette semaine

| Fond | Count | Cible |
|------|-------|-------|
| Ambre | 1/2 | ~65% |
| Charbon | 1/2 | ~35% |

### Carrousels cette semaine

| Type | Famille | OK ? |
|------|---------|------|
| Panoramique | C | ✅ (1er du feed) |
| Educatif | A | ✅ (deja produit) |
| Pas 2 memes types d'affilee | | ✅ |
| Pas 2 memes produits que semaine derniere | | ✅ (aucun carrousel en S2) |

### Publications — Piliers cette semaine (posts + carrousels)

| Pilier | Count | Cible mois |
|--------|-------|------------|
| Le Produit | 3/4 | 55% |
| Les Benefices | 1/4 | 35% |
| La Marque | 0/4 | 10% |
| **Total piliers differents** | 2 | ≥ 2 | ✅ |

### Cumul apres S3 (si les 4 publications sont produites)

| Pilier | S1-S2 | S3 | Total | % | Cible |
|--------|-------|-----|-------|---|-------|
| Le Produit | 2 | 3 | 5 | 62.5% | 55% |
| Les Benefices | 1 | 1 | 2 | 25% | 35% |
| La Marque | 1 | 0 | 1 | 12.5% | 10% |

> Le Produit est legerement surrepresente mais justifie : 2 produits jamais couverts (Tenders, MAX Poulet) + inauguration du format panoramique. Les Benefices sera pousse en S4.

### Produits introduits en post

| Produit | S1-S2 | S3 | Total |
|---------|-------|-----|-------|
| STRICT Boeuf | 3 | 0 | 3 |
| STRICT Poulet | 1 | 0 | 1 |
| Tenders STRICT | 0 | 1 | 1 | **NEW** |
| STRICT MAX Poulet | 0 | 2 | 2 | **NEW** (post + panoramique) |

---

## Checklist finale

- [x] Chaque post a un **traitement** assigne
- [x] Chaque post a un **fond** assigne (ambre ou charbon)
- [x] 2 posts simples + 2 carrousels = 4 publications
- [x] Pas 2 posts consecutifs avec le meme traitement (photo-pure → knockout-band)
- [x] Au moins 2 piliers differents (Le Produit, Les Benefices)
- [x] Pas 2 carrousels du meme type (Panoramique + Educatif)
- [x] 1 carrousel famille C + 1 carrousel famille A (variete)
- [x] Pas de mode `irl` ni `edit-ia` dans le planning standard
- [x] Aucun brief ne contiendra "[A FOURNIR]"
- [x] STRICT Boeuf PAS refait cette semaine (dernier post S2 19-03)
- [x] 2 nouveaux produits introduits (Tenders, MAX Poulet)

---

## Etape suivante

> Valider ce planning, puis creer les briefs individuels :
> - P1 : `brief-v3.md` (post Tenders)
> - P2 : `brief-v3.md` (post MAX Poulet)
> - C1 : `brief-carousel-panoramique.md` (panoramique table)
> - C2 : brief existant dans `30-03-2026/brief/brief.md` (regenere, deja produit)
