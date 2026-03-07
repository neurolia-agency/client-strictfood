## Nos Artisans — Direction Creative

### Intention Sensorielle

Le visiteur descend la page et entre dans les coulisses. Le noir se resserre, comme quand on pousse la porte d'une arriere-boutique ou l'on entend le bruit du couteau sur le billot. Ici, ce ne sont pas des logos de fournisseurs alignes dans un footer — ce sont des visages, des mains, des noms que l'on croise au marche de Perpignan. Chaque artisan a son moment. On ne les decouvre pas d'un coup d'oeil : ils apparaissent un par un, comme les plats d'un repas ou chaque service a son temps. Labourde. Pains du Soleil. Myfitcheese. Trois noms graves dans le cuivre, trois preuves que ce burger vient de quelque part.

L'espace est presque vide autour de chaque portrait. Pas de decoration, pas de fioritures. Le vide est la meme attention que le boucher porte a son etal quand il n'expose que ses meilleures pieces. Le fond charbon se fait ecrin sombre, legerement module d'un panel a l'autre — comme les nuances d'une cave voutee ou chaque alcove revele un produit different. L'emotion est la confiance : celle qu'on accorde a quelqu'un qu'on connait par son prenom.

### Palette Active

- Fond : Charbon (oklch(0.14 0.008 60)) — le noir chaud des cuisines professionnelles, module en Ebene sur le panel central pour creer un relief discret entre les artisans
- Texte principal : Sable (oklch(0.73 0.025 75)) — la specialite et la description, posees sans emphase, comme une etiquette manuscrite sur un bocal
- Accent : Cuivre Braise (oklch(0.67 0.15 68)) — reserve exclusivement aux noms des artisans ; c'est la signature du fournisseur sur son produit, le tampon chaud sur la caisse de livraison
- Badge : Grenat Fume a 12% opacity — "PERPIGNAN" en discret, comme le lieu d'origine imprime au dos d'une etiquette artisanale

### Technique(s) Selectionnees

**Sticky Scroll Stack** — chaque artisan merite son moment de revelation
- Comportement : Au scroll, trois panels pleine largeur s'empilent progressivement, couche par couche. L'artisan precedent reste visible un instant sous le suivant, comme les pages d'un carnet de recettes qu'on feuillette lentement. Chaque panel est un split asymetrique — image d'un cote, nom et metier de l'autre, en alternance gauche/droite. L'effet est celui d'une visite guidee ou le chef presente ses fournisseurs un par un, chacun sortant de l'ombre a son tour.
- Timing : 800ms cubic-bezier(0.22, 1, 0.36, 1) pour la transition de chaque panel. Le contenu texte de chaque panel apparait en apparition douce (translateY 24px + opacity, 600ms), avec 100ms de stagger entre le nom, la specialite et le badge localisation.
- Fallback : prefers-reduced-motion — les trois artisans affiches en stack vertical statique, tous visibles sans animation, opacite a 1, aucune translation.

### Ce qui est INTERDIT ici

- Pas de carrousel ou de slider automatique — le visiteur controle le rythme, c'est le scroll qui revele, pas un timer
- Pas de noir pur (#000000) — le Charbon reste chaud et organique, meme dans les variations Ebene entre panels
- Pas d'animations depassant 800ms — la revelation est prompte, comme le geste sur du boucher qui pose la piece sur le papier
- Pas de polices supplementaires — Space Grotesk pour les titres, DM Sans pour le corps, rien d'autre
- Pas de contenu placeholder — les noms sont reels, les photos doivent etre reelles ou clairement marquees [PHOTOS CLIENT REQUISES]

### Resume en 1 phrase

"Trois noms graves dans le cuivre, trois artisans qui sortent de l'ombre un par un — ici, on sait d'ou vient chaque bouchee."
