## Footer — Direction Creative

### Intention Sensorielle

Le footer est la derniere bouchee du repas. Pas le dessert spectaculaire, mais ce moment ou l'on repose la serviette, satisfait, en sachant exactement ou revenir demain. Le regard glisse sur un plan de travail bien range : le logo a sa place, les informations s'alignent comme les bocaux sur une etagere de cuisine ouverte. Rien ne brille, rien ne reclame d'attention, mais tout est la ou on l'attend.

L'espace respire largement entre chaque groupe d'informations. Le fond Charbon se prolonge sans rupture depuis la derniere section, comme la fin naturelle d'un comptoir qui n'a pas besoin de panneau "sortie". L'Or Braise n'apparait qu'au passage du doigt sur un lien, un eclat fugace comme la braise sous la cendre quand on souffle dessus. Le visiteur repart avec l'adresse en tete et le numero en poche.

### Palette Active

- Fond : Charbon (var(--color-charbon) oklch(0.14 0.008 60)) — continuite directe avec le reste de la page, pas de demarcation
- Texte principal : Creme (var(--color-creme) oklch(0.96 0.012 85)) — logo et liens de navigation, lisible sans effort
- Texte secondaire : Sable (var(--color-sable) oklch(0.73 0.025 75)) — adresse, horaires, informations de contact
- Texte discret : Pierre (var(--color-pierre) oklch(0.58 0.02 70)) — copyright, le murmure en bas de page
- Accent : Or Braise (var(--color-or-braise) oklch(0.68 0.14 75)) — apparait uniquement au survol des liens, comme une invite chaleureuse
- Separateur : Cendre (var(--color-cendre) oklch(0.30 0.01 55) opacity 0.5) — ligne fine qui marque la cloture sans couper

### Technique(s) Selectionnee(s)

Pas de technique speciale. La puissance vient du layout et de la typographie.

Les seuls mouvements sont les transitions de survol sur les liens (couleur neutre vers Or Braise) et les icones reseaux. Ces transitions suivent l'easing du projet (cubic-bezier(0.22, 1, 0.36, 1), 300ms) pour rester coherentes avec le reste du site. C'est un geste de politesse, pas une performance.

### Ce qui est INTERDIT ici

- Pas de gradient, pas d'effet lumineux, pas de glow sur le logo ou les icones
- Pas de noir pur (#000000) : le Charbon chaud est le seul fond autorise
- Pas d'animation d'entree au scroll (pas de fade-in, pas de stagger) : le footer est deja la quand on arrive, stable et fiable
- Pas de texte en dessous de 16px sur mobile, a l'exception du copyright (12px autorise par exception tokens)
- Pas de couleur froide ni de gris pur : les neutres restent chauds (hue 60-85)

### Resume en 1 phrase

"Le footer est un comptoir bien range apres le service : tout est a sa place, rien ne manque, et l'adresse reste en tete."
