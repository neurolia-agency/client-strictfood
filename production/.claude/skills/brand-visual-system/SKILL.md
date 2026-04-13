---
name: brand-visual-system
user-invocable: false
description: >
  Cree un systeme d'identite visuelle complet pour un feed Instagram a partir d'une brand platform.
  Produit les brand shapes, le systeme typographique, les overlays, les gabarits de composition
  et les regles de coherence feed — le tout en SVG/CSS reutilisable.
  Skill one-shot de création — rarement ré-invoqué après la mise en place du système.
---

# Brand Visual System

Cree un systeme d'identite visuelle pour un feed Instagram — des elements graphiques finis,
verouilles, testables en contexte. PAS des decorations generiques. Un systeme qui rend
un post reconnaissable en 0.3 seconde dans un scroll.

## Philosophie

**Un bon brand element raconte quelque chose.** Il est lie au produit, au process, au territoire
de la marque. Un spark generique ne raconte rien. Une forme qui evoque la chaleur, la pression,
le mouvement d'un ingredient — ca raconte.

**Moins d'elements, plus d'impact.** 2-3 shapes signature avec des variantes > 8 shapes
generiques qui se battent pour l'attention.

**Le test final est le feed.** Un element qui fonctionne isole sur un SVG mais qui disparait
dans un post a 1080px = echec. Toujours tester en conditions reelles.

## Process en 6 etapes

```
1. INGESTION    — Collecter la brand platform (couleurs, typos, positionnement, references)
2. TERRITOIRE   — Analyser le territoire visuel du secteur (ce qui marche, ce qui est sature)
3. EXPLORATION  — Generer 3-5 pistes de brand shapes avec un lien conceptuel au produit
4. PRODUCTION   — Produire les SVG/CSS des elements retenus en variantes
5. TEST         — Composer des mock posts et evaluer en grille 3x3
6. VERROUILLAGE — Figer le systeme : elements + regles de combinaison + alternance
```

Chaque etape produit un livrable. Ne pas sauter d'etape.

---

### Etape 1 — Ingestion de la brand platform

Collecter (demander ce qui manque) :

| Bloc | Informations |
|------|-------------|
| **Couleurs** | Primaire, accent, neutres — hex ou description |
| **Typographie** | Display (headline), corps, effets speciaux (stroke, outline, script) |
| **Positionnement** | Premium, street, craft, luxe, accessible, disruptif... |
| **Secteur** | Food, beaute, mode, tech, sport... |
| **References** | Feeds/marques admirees (screenshots idealement) |
| **Mots-cles DA** | 3-5 adjectifs qui definissent l'ambiance visuelle |
| **Produit hero** | Le produit/service le plus photographe — decrire sa forme, texture, couleurs |
| **Process signature** | Ce qui differencie la marque (mode de cuisson, fabrication, sourcing...) |
| **Logotype** | Fichier existant ou description |

> Le **process signature** et le **produit hero** sont les 2 sources principales d'inspiration
> pour les brand shapes. Un element graphique qui evoque le process ou le produit aura toujours
> plus d'impact qu'une decoration abstraite.

---

### Etape 2 — Territoire visuel

Avant de creer, analyser. Voir `references/visual-territory.md`.

**Objectif** : identifier ce qui est sature (a eviter) et ce qui est disponible (opportunite) dans le secteur.

1. Lister les codes visuels dominants du secteur
2. Identifier les elements sur-utilises (= generiques, zero impact)
3. Reperer les opportunites de differenciation
4. Definir le **territoire exclusif** de la marque (la ou personne ne va)

---

### Etape 3 — Exploration des brand shapes

Generer **3-5 pistes** de brand elements. Chaque piste doit avoir :

1. **Un lien conceptuel** — pourquoi cette forme ? Quel rapport avec la marque ?
2. **Un nom** — pas "shape 1" mais un nom qui raconte (ex: "pulse", "eclat", "grain")
3. **Un rendu brut** — SVG simple, une seule couleur, pour juger la forme pure
4. **Une projection** — comment cet element vivrait sur un post ? (description ou mock)

> Voir `references/brand-shapes-catalog.md` pour le catalogue de types (drip, sparkle, frame,
> halftone, blob, geometric cut, etc.) — mais ne pas copier betement. Adapter, hybrider, inventer.

**Anti-patterns a eviter** : voir `references/quality-gates.md`

**Presentation a l'operateur** : presenter les 3-5 pistes cote a cote avec le lien conceptuel
pour chaque. L'operateur choisit 1-2 pistes a developper.

---

### Etape 4 — Production

Pour chaque element retenu, produire :

1. **SVG propre** — `viewBox` cale, responsive, couleurs parametriques
2. **3 variantes couleur** — primaire, accent, blanc (pour fond sombre)
3. **3 tailles** — icone (32px), medium (80px), hero (200px+)
4. **Variantes de forme** — 2-3 declinaisons de la meme idee (pas identiques)
5. **Regles de placement** — ou l'element se pose, avec quelles marges, quelle rotation

> Voir `references/type-treatments.md` pour les techniques typographiques (stroke, outline,
> mix styles, prix impactant).

> Voir `references/composition-system.md` pour les gabarits de composition, overlays,
> et sublimation de fond.

---

### Etape 5 — Test en contexte

**JAMAIS livrer des SVG isoles.** Toujours tester en conditions reelles.

1. **Mock post** — composer un vrai post 1080x1080 ou 1080x1350 avec une photo du produit
   + les brand elements + la typo. Render en PNG via Puppeteer ou HTML.
2. **Mock grille 3x3** — composer 9 miniatures representant un feed credible.
   Varier les combinaisons, les fonds, les cadrages.
3. **Evaluation** — appliquer la checklist de `references/quality-gates.md` :
   - L'element est-il visible a taille feed (161px de large sur mobile) ?
   - L'element est-il reconnaissable en 0.3 seconde ?
   - Le feed a-t-il une signature distincte ou pourrait-il etre n'importe quelle marque ?
   - Les elements se repetent-ils sans monotonie ?

Presenter les mocks a l'operateur. Iterer si necessaire.

---

### Etape 6 — Verrouillage

Quand les elements sont valides visuellement, figer le systeme :

1. **Catalogue** — les X elements retenus avec noms, SVG, variantes
2. **Matrice de combinaison** — quelles combinaisons possibles, quelles interdites
3. **Regles d'alternance** — comment eviter la repetition dans le feed
4. **Regles de placement** — positions autorisees par format (post carre, portrait, story)
5. **Safe zones** — rappel des zones IG ou ne pas placer d'elements informatifs

> Ce systeme verrouille remplace le jugement subjectif par des regles deterministes.
> L'art director ne choisit plus "quel element mettre" — le systeme le determine
> en fonction du type de contenu et de l'historique recent.

---

## References

| Fichier | Contenu | Etape |
|---------|---------|-------|
| `references/visual-territory.md` | Analyse sectorielle, codes satures, opportunites | 2 |
| `references/brand-shapes-catalog.md` | Catalogue de types de shapes avec SVG exemples | 3 |
| `references/type-treatments.md` | Techniques typo SVG/CSS (stroke, outline, mix, prix) | 4 |
| `references/composition-system.md` | Gabarits, overlays, sublimation, feed coherence | 4-5 |
| `references/quality-gates.md` | Criteres premium, anti-patterns, checklist evaluation | 3-5 |
