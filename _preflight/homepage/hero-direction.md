## Hero — Direction Creative

### Intention Sensorielle

Le visiteur ouvre la page et tombe sur une table dressee dans le noir. Rien d'autre n'existe que ce burger, eclaire comme un plat qu'un chef vient de poser devant lui — la lumiere chaude caresse le pain brioche, les textures du fromage fondu accrochent l'oeil. C'est le moment ou l'on regarde une assiette et ou la conversation s'arrete. Le fond charbon n'est pas du vide, c'est un ecrin de velours sombre, celui d'un comptoir haut de gamme apres le service du soir.

A gauche, la promesse apparait element par element, comme les plats d'un menu degustation poses un a un devant le convive. "Le cheat meal qui n'en est pas un." La phrase est laconique, sure d'elle. En dessous, un seul geste a faire : appeler. Tout l'espace autour respire — l'air entre les elements est un choix delibere, comme l'espace vide sur une ardoise de chef ou seul le plat du jour est inscrit. Ici, la densite est au minimum. Chaque element qui est present merite sa place.

### Palette Active

- Fond : Charbon (oklch(0.14 0.008 60)) — obscurite chaude, jamais froide, jamais pure
- Texte principal : Ivoire (oklch(0.91 0.015 80)) — la tagline brille sans crier
- Texte secondaire : Sable (oklch(0.73 0.025 75)) — la baseline murmure, un cran en retrait
- Accent : Cuivre Braise (oklch(0.67 0.15 68)) — reserve au CTA principal uniquement, comme la flamme du gril dans un restaurant sombre : un seul point de chaleur vive qui attire l'oeil et appelle au geste

### Technique(s) Selectionnees

**Split Screen Asymetrique (40/60)** — le desequilibre cree la tension
- Comportement : Le texte occupe le cote gauche, le produit deborde genereusement sur la droite. Le burger est surdimensionne — il commande l'espace comme un plat signature presente sur une ardoise geante. Le desequilibre est delibere : le produit "gagne" visuellement. Le texte n'a pas besoin de volume, il a besoin de precision. Sur mobile, le produit passe au-dessus, above the fold — c'est la photo qui vend avant que le mot ne soit lu.

**Apparition Decalee (Stagger)** — l'entree en scene est theatrale
- Comportement : Les elements texte apparaissent en cascade depuis le bas — tagline, puis baseline, puis CTAs — chaque element glisse vers le haut et gagne en opacite. L'image produit se revele en parallele, legerement decalee. L'effet est celui d'un rideau qui se leve sur un plat dresse.
- Timing : 600ms par element, cubic-bezier(0.22, 1, 0.36, 1), 100ms de delai entre chaque. L'ensemble ne depasse jamais 800ms apres l'apparition du dernier element.
- Fallback : prefers-reduced-motion — tout est visible immediatement, pas de translation, opacite a 1.

**Parallax Leger sur le Produit** — profondeur sans vertige
- Comportement : Au scroll, l'image burger se deplace tres legerement plus lentement que le texte (translateY de 2-3% maximum). L'effet est celui d'une vitrine : le produit semble flotter sur un plan legerement en retrait, comme sous une cloche en verre.
- Timing : Lie au scroll via IntersectionObserver, fluide, aucun a-coup.
- Fallback : prefers-reduced-motion — parallax desactive, position statique.

### Ce qui est INTERDIT ici

- Pas de texte centre — le hero est asymetrique, ancre a gauche, toujours
- Pas de noir pur (#000000) — le charbon est chaud, organique, vivant
- Pas de uppercase sur la tagline — la force vient du message, pas du volume typographique
- Pas d'animation depassant 800ms — le desir est immediat, l'attente tue la faim
- Pas de parallax lourd ou de deformation — le produit reste net, appetissant, lisible a tout instant

### Resume en 1 phrase

"Un burger qui surgit du noir comme un plat qu'on vient de poser devant toi — tu n'as meme pas encore lu la carte que tu as deja faim."
