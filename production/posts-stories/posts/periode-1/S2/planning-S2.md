# Planning S2 — 2026-03-17 → 2026-03-23

> **Période** : Période 1 — Compléter le mur visuel
> **Objectifs semaine** : Rattraper la diversité de modes (S1 = 100% full-ia). Introduire STRICT Poulet en post. Ouvrir le pilier Macros avec une infographie. Lancer le storytelling artisan (Boucherie Labourde). Montrer la diversité de la carte (wrap).

---

## Étape 0 — Analyse S1 (scan 2026-03-16)

### Résumé des semaines précédentes

| Source | Constat | Action pour S2 |
|--------|---------|----------------|
| Posts | Seulement 2 posts produits (10-03, 12-03), tous full-ia | Forcer 4 modes différents — bannir full-ia en post cette semaine |
| Posts | Produit : 100% STRICT Bœuf (2/2 posts) | Ne PAS refaire un post STRICT Bœuf — introduire Poulet et Wrap |
| Posts | Pilier Le Plat = 50%, La Cuisine = 50% | Ouvrir Les Macros (0% → cible 18%) |
| Posts | Les Macros, L'Équipe, Le Quartier = 0% chacun | Les Macros prioritaire en S2, L'Équipe et Le Quartier en S3-S4 |
| Posts | compositing-irl = 0% (cible 20%) | Forcer 1 post en compositing-irl |
| Posts | irl-sublimation = 0% (cible 25%) | Forcer 1 post en irl-sublimation |
| Stories | 100% template (11 stories) | Diversifier : irl, irl-sublimation, compositing-irl |
| Stories | Fiche produit : Bœuf, Poulet, Wrap Bœuf, Cookie | Fiche Falafel, MAX Bœuf, Tenders, Wrap Poulet en S2 |
| Stories | Artisans : Myfitcheese (jeudi), Pains du Soleil (dimanche) | Focus Boucherie Labourde (jamais couvert) |
| Stories | Interactifs : Bœuf/Poulet, Wrap/Burger, Cookie/Tiramisu | Nouveaux axes : Simple/MAX, Viande/Végé |
| Symbiose | S1 posts = Bœuf × 2, stories = Bœuf + Poulet + Wrap | S2 : varier les produits, stories complètent les posts sans répéter |

---

## Règles de distribution

→ Voir `production/_templates/planning-semaine.md` pour les règles complètes.

**Rappel posts** :
- Jamais 2 posts consécutifs avec le même mode
- Au moins 3 modes différents par semaine (sur 4 posts)
- Au moins 3 piliers différents par semaine

---

## Posts (4 cette semaine)

| # | Jour | Pilier | Mode | Produit / Sujet | Format | Note |
|---|------|--------|------|-----------------|--------|------|
| 5 | Lun 17 | Le Plat | `compositing-ia` | STRICT Poulet | Photo unique 4:5 | Hero floating lévitation — photo réelle + scène IA studio (changement: photos salle non exploitables) |
| 6 | Mer 19 | Les Macros | `template` | Comparaison STRICT Bœuf vs burger classique | Carrousel 4 slides 4:5 | 1er post nutrition — infographie premium |
| 7 | Ven 21 | La Cuisine | `irl-sublimation` | Boucherie Labourde — viande artisanale locale | Photo unique 4:5 | 1er post irl-sublimation — photo process sublimée DA |
| 8 | Dim 23 | Le Plat | `compositing-ia` | STRICT Wrap Poulet | Photo unique 4:5 | Photo wrap réelle + scène IA cuisine |

### Sources visuelles par post

**Post #5 — STRICT Poulet (compositing-ia — hero floating)** :
- Photo produit : `produits-source/burgers-black/strict-poulet/strict-poulet-black-1.png`
- Scène IA : Lévitation dynamique ~10°, fond noir mat, éclairage studio dramatique top-left, sauce en coulures figées, ingrédients en suspension
- Référence : `prompts-variantes-combo-b.md` #16 (concept-levitation) adapté 4:5

**Post #6 — Macros comparaison (template)** :
- Template : carrousel 4 slides HTML → Puppeteer
- Slide 1 (cover) : "Ton burger vs notre burger. Les chiffres parlent."
- Slide 2 : Chiffres face à face (596 kcal / 53g prot / 21.5g lip vs 800-1000 kcal / 25-30g prot / 45-55g lip)
- Slide 3 : 3 différences clés (viande artisanale, zéro huile, pain boulanger)
- Slide 4 : Conclusion + CTA adresse
- Fond Charbon, typo Oswald/Space Grotesk, accents Cuivre + Feuille

**Post #7 — Boucherie Labourde (irl-sublimation)** :
- Photo source : `public/contenu-instagram/2025-10-03_15-57-14_UTC_2.jpg` (découpe viande crue, mains gantées noires, vue plongée 3/4, plan de travail inox)
- Direction sublimation : Renforcer l'ambiance Dark Food Premium, accentuer contrastes ombre/lumière, tons cuivrés sur les mains et la lame, charbon profond en fond, grain film subtil, préserver l'authenticité artisanale

**Post #8 — STRICT Wrap Poulet (compositing-ia)** :
- Photo produit : `produits-source/strict-wrap-poulet.png`
- Scène IA : Comptoir cuisine sombre en inox brossé, éclairage latéral cuivré chaud, légère vapeur d'ambiance en arrière-plan, emballage STRICT froissé naturellement, ambiance service du soir

---

## Vérification distribution

### Posts — Modes S2

| Mode | Count | Contrainte | OK ? |
|------|-------|------------|------|
| full-ia | 0/4 | Pas 2 consécutifs | ✅ (exclus volontairement après S1 100% full-ia) |
| irl-sublimation | 1/4 | | ✅ |
| compositing-irl | 0/4 | | ⚠️ reporté S3 (photos salle insuffisantes) |
| compositing-ia | 2/4 | Pas 2 consécutifs | ✅ (#5 Lun + #8 Dim, séparés par template + irl-sub) |
| template | 1/4 | | ✅ |
| **Total modes différents** | **3** | ≥ 3 | ✅ |

### Posts — Piliers S2

| Pilier | Count | Cible mois |
|--------|-------|------------|
| Le Plat | 2/4 | 35% |
| La Cuisine | 1/4 | 25% |
| Les Macros | 1/4 | 18% |
| L'Équipe | 0/4 | 15% |
| Le Quartier | 0/4 | 7% |
| **Total piliers différents** | **3** | ≥ 3 | ✅ |

### Distribution cumulative S1+S2 (4 posts — seuls les PRODUITS comptent)

| Mode | S1 | S2 | Total | Cible |
|------|----|----|-------|-------|
| full-ia | 2 | 0 | 2/6 (33%) | ~30% |
| irl-sublimation | 0 | 1 | 1/6 (17%) | ~25% |
| compositing-irl | 0 | 0 | 0/6 (0%) | ~20% |
| compositing-ia | 0 | 2 | 2/6 (33%) | ~15% |
| template | 0 | 1 | 1/6 (17%) | ~10% |

> S2 introduit 3 modes jamais utilisés (irl-sublimation, compositing-ia, template).
> compositing-irl reporté en S3 — nécessite des photos IRL du lieu de meilleure qualité.
> Le rattrapage irl-sublimation (17% vs 25% cible) et compositing-irl (0% vs 20%) est prévu en S3.

### Distribution cumulative piliers S1+S2

| Pilier | S1 | S2 | Total | Cible |
|--------|----|----|-------|-------|
| Le Plat | 1 | 2 | 3/6 (50%) | 35% |
| La Cuisine | 1 | 1 | 2/6 (33%) | 25% |
| Les Macros | 0 | 1 | 1/6 (17%) | 18% |
| L'Équipe | 0 | 0 | 0/6 (0%) | 15% |
| Le Quartier | 0 | 0 | 0/6 (0%) | 7% |

> Le Plat est surreprésenté (normal en phase lancement — food porn first).
> L'Équipe et Le Quartier dépendent de photos IRL à venir → S3-S4.

---

## Photos IRL à fournir cette semaine

| # | Sujet | Pour quel contenu | Cadrage souhaité | Priorité |
|---|-------|-------------------|------------------|----------|
| 1 | Découpe viande fraîche en cuisine | Post #7 (irl-sublimation) — photo de meilleure qualité si possible | Plans serrés, mains gantées noires, couteau sur planche, éclairage dramatique | Haute |
| 2 | Wrap Poulet coupé en diagonale | Post #8 (compositing-ia, photo source) | Wrap tenu ou posé, intérieur visible, fond neutre ou papier STRICT | Moyenne |

> **Fallback si pas de photos IRL fraîches** :
> - Post #7 : `contenu-instagram/2025-10-03_15-57-14_UTC_2.jpg` (découpe viande plongée — très bonne qualité)
> - Post #8 : `produits-source/strict-wrap-poulet.png` (photo existante, fond transparent)

---

## Checklist finale

- [x] Chaque post a un mode assigné
- [x] Jamais 2 posts consécutifs avec le même mode (compositing-ia → template → irl-sublimation → compositing-ia, séparés par 2 modes différents)
- [x] Au moins 3 modes différents (3 ✓ — compositing-ia, template, irl-sublimation)
- [x] Au moins 3 piliers différents (3 ✓ — Le Plat, Les Macros, La Cuisine)
- [x] 0 full-ia cette semaine (rattrapage volontaire après S1 100% full-ia)
- [ ] ~~compositing-irl introduit~~ → reporté S3 (photos salle restaurant insuffisantes)
- [x] irl-sublimation introduit (jamais utilisé avant)
- [x] Les photos IRL nécessaires sont listées avec fallback
- [x] Aucun produit ne répète S1 (Poulet et Wrap Poulet sont nouveaux en post)
- [ ] Distribution piliers à rééquilibrer en S3 (L'Équipe + Le Quartier absents)
- [ ] Rattraper irl-sublimation (17% vs 25% cible) en S3
- [ ] Rattraper compositing-irl (0% vs 20% cible) en S3 — prévoir de meilleures photos IRL

## Étape suivante

> Valider ce planning, puis créer les briefs individuels v3 pour chaque post.
> Les briefs S2 existants sont **obsolètes** (basés sur l'ancien planning) et doivent être réécrits.
>
> Ordre de production :
> 1. **Post #5** (Lun) : rédiger brief v3 → `/instagram-producer 17-03-2026`
> 2. **Post #6** (Mer) : rédiger brief v3 → production template carrousel
> 3. **Post #7** (Ven) : rédiger brief v3 → `/instagram-producer 21-03-2026`
> 4. **Post #8** (Dim) : rédiger brief v3 → `/instagram-producer 23-03-2026`
