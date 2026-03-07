## L'Experience — Direction Creative

### Intention Sensorielle

Le visiteur a vu le burger, lu la promesse, rencontre les artisans. Maintenant on lui ouvre la porte. Pas en photo de brochure, pas en visite virtuelle — on lui tend une invitation personnelle. "Viens voir par toi-meme." C'est le ton du cuisinier qui essuie ses mains sur son tablier et te fait signe de passer derriere le comptoir. L'image du lieu apparait d'abord, avant le texte, comme quand on entre dans un restaurant et que le regard precede toujours les mots. Le comptoir, le mur vegetal, la cuisine ouverte — tout est la, expose, sans mise en scene. C'est la vitrine d'un artisan qui n'a pas besoin de rideau parce que le travail parle de lui-meme.

A cote de l'image, le texte prend le relais avec la simplicite d'une conversation a voix basse. Pas de chiffres ici, pas de preuves. Juste un constat : "Quand tu passes la porte, tu vois tout." L'espace autour du texte est genereux, presque excessif. Le vide a la meme fonction que le silence dans une cuisine ouverte — il laisse entendre les gestes, il laisse voir les ingredients. La densite est au minimum absolu : deux blocs, un texte et une image, et entre eux, rien que de l'air. L'admiration nait de cette transparence affichee ; l'immersion nait du cadrage qui te place deja dans le lieu.

### Palette Active

- Fond : Ebene (oklch(0.18 0.008 60)) — un demi-ton plus clair que le Charbon des sections precedentes, comme quand les yeux s'habituent a la penombre d'un restaurant et que les details du lieu commencent a apparaitre
- Texte titre : Ivoire (oklch(0.91 0.015 80)) — l'invitation est franche, lumineuse, posee comme la voix du fondateur qui parle sans detour
- Texte narratif : Sable (oklch(0.73 0.025 75)) — le recit accompagne sans appuyer, comme l'explication calme d'un chef qui decrit son process pendant que tu regardes

### Technique(s) Selectionnees

**Scroll-triggered Fade In** — le lieu se revele comme quand on pousse la porte
- Comportement : L'image cuisine ouverte et le bloc texte apparaissent en glissant depuis le bas, passant de l'invisible au visible. L'image se revele en premier, le texte une fraction de seconde apres — le regard entre dans le lieu avant que le mot ne soit prononce. L'effet est celui de la decouverte : on ne montre pas tout d'un coup, on laisse le visiteur franchir le seuil.
- Timing : translateY(24px) vers translateY(0) + opacity 0 vers 1, 600ms, cubic-bezier(0.22, 1, 0.36, 1). 150ms de decalage entre l'image et le texte. Declenchement quand la section entre dans le viewport.
- Fallback : prefers-reduced-motion — tout est visible immediatement, pas de translation, opacite a 1.

**Parallax Leger sur l'Image** — la profondeur d'une piece dans laquelle on entre
- Comportement : Au scroll, l'image cuisine ouverte se deplace 2-3% plus lentement que le texte. L'effet est subtil, presque inconscient — c'est la sensation qu'on s'approche du comptoir, que l'espace a de la profondeur, que le lieu est reel et non une surface plate. Comme la difference entre regarder une photo et regarder a travers une baie vitree.
- Timing : Lie au scroll, fluide, aucun a-coup. Le decalage maximal ne depasse jamais 3% de la hauteur de l'image.
- Fallback : prefers-reduced-motion — parallax desactive, image en position statique.

### Ce qui est INTERDIT ici

- Pas de galerie ou de carrousel — une seule image suffit, choisie pour sa capacite a montrer la transparence du lieu ; la multiplier diluerait le message
- Pas d'uppercase sur le titre — "Viens voir par toi-meme" est une invitation murmure, pas un panneau publicitaire
- Pas d'animations depassant 800ms — la revelation est prompte, comme le rideau de la cuisine ouverte qui n'existe pas
- Pas de valeurs hardcodees — les couleurs, espacements et durees viennent des tokens CSS
- Pas d'accent Cuivre Braise — cette section est silencieuse dans sa palette, le contraste vient de l'image elle-meme ; le cuivre appartient aux sections qui prouvent, celle-ci se contente de montrer

### Resume en 1 phrase

"La porte de la cuisine est ouverte, il n'y a qu'a entrer — le lieu se revele au scroll comme quand tu pousses la porte et que tu vois tout d'un coup."
