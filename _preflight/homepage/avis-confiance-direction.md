## Avis & Confiance — Direction Creative

### Intention Sensorielle

Le visiteur arrive ici apres avoir decouvert les artisans, le lieu, la promesse. Il a envie d'y croire, mais il cherche encore la confirmation. Cette section est le moment ou la salle bondee parle a sa place — comme quand tu passes devant un restaurant et que tu vois la terrasse pleine : tu n'as plus besoin du menu pour savoir que c'est bon. Les trois chiffres frappent d'abord, nets et massifs, comme des ardoises posees sur un comptoir. Pas de decoration autour. Juste les faits. Puis les voix arrivent — des temoignages qui ne sont pas alignes au cordeau, parce que les vrais avis ne sortent pas d'un moule. Ils sont decales, comme des post-its laisses par des habitues sur le mur d'un restaurant qui n'a pas besoin de publicite.

L'espace entre les chiffres et les temoignages cree deux temps de lecture distincts : d'abord l'autorite froide des donnees, puis la chaleur des mots. Le vide entre ces deux zones n'est pas un oubli — c'est la respiration qui laisse les chiffres imprimer avant que les voix prennent le relais. La section ne cherche pas a impressionner. Elle pose les preuves sur la table et laisse le visiteur se convaincre lui-meme.

### Palette Active

- Fond : Charbon profond (oklch(0.14 0.008 60)) — le mur sombre d'une cuisine serieuse
- Texte chiffres : Creme brut (oklch(0.96 0.012 85)) — lisibilite totale, pas de compromis
- Texte temoignages : Sable use (oklch(0.73 0.025 75)) — voix humaines, un ton en retrait des chiffres
- Accent : Cuivre Braise (oklch(0.67 0.15 68)) — apparait uniquement sur les chiffres-cles et l'etoile de notation, comme une marque au fer sur du bois noble
- Cards temoignages : Fumee (oklch(0.22)) avec bordure Cendre — en retrait du fond, juste assez pour exister sans voler la vedette aux donnees

### Technique(s) Selectionnee(s)

**Counter Animation** — les chiffres ne sont pas la quand on arrive. Ils montent de zero comme un compteur de commandes en fin de service. C'est le moment ou la preuve se construit sous les yeux du visiteur.
- Comportement : Chaque data point s'incremente de 0 a sa valeur finale (74+, 4.8, 100%)
- Timing : 800ms, cubic-bezier(0.22, 1, 0.36, 1), declenchement a l'entree dans le viewport
- Fallback : prefers-reduced-motion — valeurs affichees directement, sans compteur

**Staggered Appear** — les trois colonnes de chiffres n'apparaissent pas en meme temps. La premiere pose le ton, les deux suivantes confirment en cascade, comme trois plats qui arrivent l'un apres l'autre a une table.
- Comportement : translateY(24px) + opacity, de gauche a droite, puis les cards temoignages en second temps
- Timing : 600ms par element, stagger 100ms entre data points, 200ms de pause avant les temoignages
- Fallback : prefers-reduced-motion — tous les elements visibles immediatement

### Ce qui est INTERDIT ici

- Pas de cards temoignages en grille 3 colonnes identiques — l'asymetrie est le signe de l'authentique, pas du template
- Pas d'animations depassant 800ms — le counter atteint son maximum, les apparitions restent sous cette limite
- Pas de placeholder generique ni de lorem ipsum — les temoignages portent un label [CONTENU CLIENT REQUIS] avec la structure prete
- Pas de gradient ou d'effets decoratifs sur les chiffres — la typographie massive suffit, le cuivre fait le reste
- Pas de Cuivre Braise en aplat large — il touche les chiffres et l'etoile, c'est tout (max 10-15% de surface)

### Resume en 1 phrase

"La salle pleine qui parle a ta place : trois chiffres massifs posent l'autorite, puis les voix des habitues finissent de convaincre."
