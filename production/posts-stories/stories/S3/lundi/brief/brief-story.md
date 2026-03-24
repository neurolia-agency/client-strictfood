# Brief Stories — S3 Lundi (2026-03-24)

> **Pilier du jour** : Le Plat — Pas de post
> **Objectif strategique** : Lancement de la micro-saison "Macro & Texture". Restaurant ferme = 3 stories visuelles pures. Macro sauce, texture pain noir, goutte suspendue. Impact visuel maximal pour ouvrir la semaine.
> **Persona cible** : Sportifs + Tous
> **Ref strategie** : Phase 1 §1.4 — "installer le Dark Food Premium comme signature"

---

## Story 1 — Visuel IA : Sauce sur STRICT Boeuf

| Champ | Valeur |
|-------|--------|
| Type | Visuel IA |
| Mode | `full-ia` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `irl-story.html` (overlay post-generation) |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Ouvrir la semaine "Macro & Texture" avec un gros plan extreme de sauce. La sauce est le hero — brillance, viscosite, reflets cuivres. Ce type de visuel est impossible a photographier avec cette precision : la full-ia permet le "temps arrete" sur le filet de sauce.

### Contenu

Sujet : `Gros plan extreme sur la sauce maison StrictFood qui coule lentement sur le pain noir sesame d'un STRICT Boeuf. La sauce est le sujet principal — chaque goutte, chaque reflet, chaque fil de viscosite. Le bun noir en arriere-plan sert de toile de fond sombre.`
Direction artistique : `Fond charbon ultra-sombre. Eclairage lateral dramatique a 45 degres revelant chaque goutte et reflet. Nettete chirurgicale sur la sauce, leger bokeh sur le bun. Tons cuivres/ambre sur les reflets. Format portrait 9:16. Pas de mains, pas de contexte — juste sauce + bun. Style "objet precieux dans le noir".`
Texte overlay : `—`

---

## Story 2 — Produit DA : STRICT Poulet macro texture

| Champ | Valeur |
|-------|--------|
| Type | Produit DA |
| Mode | `irl-sublimation` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `irl-story.html` (overlay post-sublimation) |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Gros plan macro sur les textures du STRICT Poulet : graines de sesame sur le pain noir, croute de Maillard sur le poulet grille. La sublimation pousse la photo source vers l'abstraction texturale — on sent presque la surface sous les doigts.

### Contenu

Photo source : `public/images/photos-references/produits-source/burgers-black/strict-poulet/strict-poulet-coupe.png`
Direction sublimation : `Pousser les textures de la coupe transversale vers l'abstraction. Chaque couche interne visible : croute Maillard du poulet, miettes de parmesan irregulieres, feuilles de mache, filet de sauce poivron, tranche du pain noir sesame. Accentuer les micro-textures de chaque strate. Tons cuivres chauds, ombres profondes, grain film prononce. Full-frame 9:16.`
Texte overlay : `—`

---

## Story 3 — Visuel IA : Tenders goutte suspendue

| Champ | Valeur |
|-------|--------|
| Type | Visuel IA |
| Mode | `full-ia` |
| Highlight | — |
| Qui produit | Pipeline |
| Template | `irl-story.html` (overlay post-generation) |
| Mood | cuivre |
| Image | hero |
| Brand props | aucun |

### Objectif

Fermer la journee avec un visuel "temps arrete" — une goutte de sauce suspendue a l'extremite d'un tender. Le concept `sensation-goutte` est un classique food porn mais rarement execute en 9:16 vertical. La full-ia permet la precision irrealiste de la goutte parfaite.

### Contenu

Sujet : `Un tender STRICT tenu par une main gantee noire, croute doree croustillante hyper-detaillee. A l'extremite du tender, UNE SEULE goutte de sauce parfaite suspendue dans le vide — temps arrete. La goutte est ronde, transparente, avec des reflets ambre.`
Direction artistique : `Fond charbon total. Eclairage spot unique venant du haut-droit, tout le reste dans l'ombre. Macro shot. La goutte est le hero — reflets, transparence, tension de surface visible. La croute du tender est hyper-texturee (miettes, reliefs). La main gantee noire disparait dans le fond sombre — seuls le tender et la goutte sont visibles. Format portrait 9:16.`
Texte overlay : `—`

---

## Contraintes

- DA : 3 stories visuelles pures — pas de template, pas d'IRL (restaurant ferme)
- Mood : cuivre sur les 3 stories (coherence "Macro & Texture")
- Micro-saison A : les 3 concepts sont macro/sensation (sauce, texture, goutte)
- Full-ia : ALWAYS specifier "black sesame bun" / "pain noir sesame" dans les prompts
- Sublimation : rester dans le registre macro — pas de recadrage large, pas de contexte ajoute

## Etape suivante

> Executer `/story-producer S3 lundi` pour produire ces stories.
