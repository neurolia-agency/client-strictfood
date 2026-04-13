# Input Produit — Masque 53G STRICT Poulet (S5 10-04-2026)

> Généré automatiquement par l'agent input-mapper.
> Source : `production/art-direction.md`
> À valider par l'opérateur avant passage au prompt engineer.

---

## Produit Principal — STRICT Poulet

| Champ | Valeur |
|-------|--------|
| Produit | STRICT Poulet |
| Fiche recette | `production/_recettes/strict-poulet.md` |
| Description référence | **Macro extrême du STRICT Poulet** — Burger pain noir sésame avec lamelles poulet rôti doré, miettes de parmesan irrégulières, oignons rouges en tranches fines avec anneaux concentriques, mâche en petites feuilles rondes vertes, sauce poivron jaune-orangé en filet subtil. Cadrage 3/4 face (45°), zoom 220%+, remplissant 100% du cadre. Révèle les couches intérieures (lamelles poulet Maillard, parmesan poudreux, mâche luisante) avec bun noir sésame visible en haut et bas. Imperfections artisanales : miettes de parmesan tombées, feuille de mâche légèrement dépassant, graine de sésame isolée, asymétrie naturelle du bun. Fondamental : la zone centrale du cadre (où les lettres "53G" seront positionnées) doit être la plus riche en textures et couleurs — alternance de noirs (bun), dorés chauds (croûte Maillard), blancs granuleux (parmesan miettes), vert vif (mâche), jaune-orange subtil (sauce). |
| Justification description | **Traitement masque v5** : cette description capture la macro extrême demandée par l'art director. Le cadrage 3/4 face permet de voir SIMULTANÉMENT le bun (identité visuelle pain noir), les couches intérieures riches en textures (Maillard, parmesan, mâche), et les imperfections artisanales caractéristiques du STRICT Poulet. La photo sera générée par Gemini 2K (Phase 1), puis utilisée comme remplissage de fond pour le masque typographique CSS "53G" (Phase 2). Le focus sur les textures au cœur du cadre garantit que les zones centrales — où les lettres seront positionnées — affichent des détails visuels maximaux (grains de parmesan, feuilles, lamelles dorées). |
| Mode de capture | Macro générée (Gemini full-ia) — cadrage extrême, pas de photo existante. Photo sourced : aucune (génération IA pure). Fond sombre neutre (charbon mat) pour faciliter le masking CSS et le détourage ultérieur. |
| Concept (burgers-black) | **concept-macro** (#8 dans photo-references.md BURGERS BLACK BUN / STRICT Poulet) — Macro extrême sur la zone Maillard/sauce/parmesan/mâche, fond noir, révélant tous les détails texturaux. |
| Historique utilisation | **Première apparition en post masque**. Historique précédent : S2 17-03-2026 (STRICT Poulet levitation, concept-levitation). Pas de rotation variante applicable puisque ce post utilise un concept (macro) différent de la levitation antérieure. Variante macro #8 (`strict-poulet-macro.png`) ou #9 (`strict-poulet-macro-2.png`) selon la zone focale préférée par l'art director pour le positionnement des lettres. |

## Paramètres Gemini — Phase 1 (génération photo macro)

| Paramètre | Valeur |
|-----------|--------|
| **Résolution** | 2K (1920×1440 / 1440×1920, orientation portrait ou carrée adaptée 4:5) |
| **Fond** | Charbon mat uniforme (dark neutral background, pas de texture, facilite `background-clip` CSS) |
| **Éclairage** | Studio directionnel dramatique, latéral droit (3 heures) — sculpte les couches, révèle textures, ombres nettes et graphiques, température chaud doré |
| **Saturation** | Élevée (+15-20%) — couleurs éclatent à travers les lettres du masque |
| **Filtres post-gen** | `contrast(1.15) saturate(1.2) brightness(1.1)` appliqués en CSS sur la photo dans le texte masque |
| **Termes obligatoires** | black bun, sesame seeds, roasted chicken breast (sliced thin), parmesan (crumbled fine), red onion (thin rings), mâche (small round leaves), piquant pepper sauce (subtle yellow-orange), air-fried, Maillard crust (uniform, no grill marks) |
| **Termes interdits** | white bun, brioche, grilled, grill marks, charred, pan-fried, fried in oil, cheese pull, stretchy cheese, mozarella, arugula, rocket, lettuce, shavings of parmesan, ketchup, mustard, mayo, thick sauce |
| **Contrainte physique** | Aucune morsure, aucune main, aucun objet — burger seul flottant ou posé sur fond neutre, cadrage macro extrême 220%+ |

## Photo contextuelle

| Champ | Valeur |
|-------|--------|
| **Mode** | full-ia (pas d'edit-ia, pas de photo lieu en input) |
| **Lieu** | N/A — Génération IA pure, aucune photo de contexte restaurant ou extérieur |
| **Photo référence** | Aucune — photo générée par Gemini |

## Template de compositing (Phase 2)

| Champ | Valeur |
|-------|--------|
| Base | `production/_tests/brand-visual-system/mock-masque-v3.html` |
| Adaptations | 1. Remplacer texte `STRICT BOEUF` → `53G` (Oswald Bold 700, 280px, letter-spacing 12px, uppercase). 2. Remplacer image de fond par la macro STRICT Poulet générée en Phase 1. 3. Ajuster `background-size` et `background-position` pour centrer les zones les plus appetissantes (Maillard doré, parmesan, mâche) dans les lettres. 4. Conserver fond ambre `#FABA43` (Ambre Incandescente), grain overlay 0.04, tagline `Le cheat meal <em>qui n'en est pas un</em>`. |

---

## Notes pour le prompt engineer

1. **Fidelité recette** : respecter strictement les formes exactes de la fiche recette — lamelles (pas cubes/filet entier), miettes parmesan (pas copeaux), tranches oignons (pas éminces), mâche (pas roquette/laitue), sauce poivron (pas rouge/blanche).

2. **Imperfections artisanales** : c'est la clé du STRICT Poulet. Burger DOIT avoir des micro-détails visibles (miettes parmesan tombées, asymétrie bun, feuille mâche dépassant) qui créent du réalisme et du désir.

3. **Accent or Maillard** : la croûte doée des lamelles poulet est LE marqueur visuel du "cuit à la chaleur pulsée" (air-fried). Doré chaud, brillant, croustillant. PAS de grill marks (StrictFood n'a pas de grill).

4. **Sésame visible** : graines irrégulières sur le bun noir, certaines dorées, certaines partiellement enfoncées. C'est un détail texture clé.

5. **Parmesan granuleux** : miettes individuelles visibles, poudreux, pas lisse. Cela crée du contraste graphique avec le bun noir et la croûte dorée.

6. **Mâche luisante** : petites feuilles rondes, hydratées, vert vif saturé. Pas de roquette (trop longues), pas de laitue (pas le bon type).

7. **Sauce subtile** : filet fin jaune-orangé, presque invisible à première vue. PAS de nappe rouge. C'est l'essence du "subtle poivron" StrictFood.

8. **Fond charbon mat obligatoire** : aucune texture, aucune ombre, aucun reflet. Facilite le `background-clip: text` CSS et le masking ultérieur.

9. **Macro 220%+** : le burger doit REMPLIR le cadre. Zoom agressif. Pas de vide, pas d'espace vide autour.

10. **Combo-B calibrage** : prompt engineer doit rédiger 150-300 mots basés sur cette description. Tonalité : viscéral, textures extrêmes, texture-porn, arrêt visuel.

---

## Checklist realism-auditor

Avant génération Gemini, `/realism-auditor` DOIT vérifier :

- [ ] Pain noir sésame (black bun, sesame), pas brioche/white
- [ ] Lamelles poulet seules (sliced, pas cubes/effiloché)
- [ ] Parmesan miettes (crumbled), pas copeaux/lamelles
- [ ] Oignons rouges tranches fines (rings), pas éminces/dés
- [ ] Mâche petites feuilles rondes (pas roquette/laitue)
- [ ] Sauce poivron jaune-orange subtil (pas rouge/épaisse)
- [ ] Croûte Maillard dorée uniforme (pas grill marks, chaleur pulsée)
- [ ] Aucun terme interdit (grill, fried, mayo, ketchup, arugula, cheese pull, etc.)
- [ ] Fond charbon mat (pas texture, pas ombre)
- [ ] Cadrage macro extrême (220%+), pas de mains/objets/contexte

