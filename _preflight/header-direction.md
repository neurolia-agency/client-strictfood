## Header — Direction Creative

### Intention Sensorielle

Le header est le comptoir d'accueil du restaurant. Avant meme de voir le menu, le visiteur sent qu'il est au bon endroit : un espace sobre, chaleureux, ou tout est a portee de main sans encombrement. Comme le premier regard qu'on jette en entrant dans un bon restaurant — on repere instinctivement le serveur, la carte, et on sait ou s'asseoir. Rien ne crie, mais tout est la.

Au scroll, le fond s'assombrit legerement et se voile — comme une vitre fumee de cuisine professionnelle. On voit le contenu defiler derriere, mais le header reste au-dessus, ancre, rassurant. Le CTA "Commander" pulse discretement dans le champ de vision, present comme un serveur attentif qui n'interrompt jamais mais reste toujours disponible.

### Palette Active

- Fond : Charbon Voile (oklch(0.14 0.008 60) avec backdrop semi-transparent) — le comptoir en pierre sombre
- Texte : Creme (oklch(0.96 0.012 85)) — lisible, apaisant, jamais agressif
- Accent : Or Braise (oklch(0.68 0.14 75)) — apparait au hover des liens menu et sur le CTA "Commander". L'or ne touche que ce qui invite a l'action.

### Technique(s) Selectionnee(s)

**Backdrop Blur Header** — cree une separation elegante entre la navigation et le contenu, comme une vitre de cuisine ouverte qui laisse entrevoir sans melanger les plans.

- Comportement : Au repos (haut de page), le header est transparent sur le hero. Au scroll, le fond acquiert une opacite partielle et un flou de 12px s'applique sur le contenu en arriere-plan. La transition entre les deux etats est continue, pas binaire.
- Timing : 300ms, cubic-bezier(0.22, 1, 0.36, 1), declenche au premier pixel de scroll.
- Fallback : prefers-reduced-motion — le header passe directement a l'etat opaque sans transition. Le flou reste (il n'est pas un mouvement).

### Ce qui est INTERDIT ici

- Pas de fond noir pur (#000000) — le Charbon a une temperature, il vit.
- Pas de gradient colore sur le header — le fond est uni ou semi-transparent, jamais degrade.
- Pas de transition linear — l'easing cubic-bezier(0.22, 1, 0.36, 1) est le seul autorise.
- Pas d'animation superieure a 800ms — le header reagit vite, comme un reflexe.
- Or Braise en accent uniquement — jamais plus de 15% de la surface du header.

### Resume en 1 phrase

"Un comptoir d'accueil discret et stable ou l'oeil trouve tout sans chercher — l'or ne brille que la ou il faut agir."
