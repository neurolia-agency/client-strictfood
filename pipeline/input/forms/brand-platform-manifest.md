# Manifest — Formulaire Plateforme de Marque (StrictFood / RD FITNESS)

> Type : `brand-platform`
> CSV associe : `brand-platform-responses.csv`
> Date de soumission : 05/03/2026

Ce manifest definit le mapping entre les colonnes du formulaire "Plateforme de marque" et les concepts du pipeline.

## Colonnes du CSV

| # | Colonne CSV | Contenu |
|---|-------------|---------|
| — | Date soumission | 05/03/2026 09:35:14 |
| — | Commercial | Strict Food's |
| — | Entrepreneur | Foy / Lesniak |
| — | Entreprise | RD FITNESS |
| Q1 | Colere fondatrice | Manger rapidement un burger sans culpabiliser |
| Q2 | Origine du nom | Strict = jeu de mots avec Street + hygiene de vie |
| Q3 | Mission | Endroit ou se faire plaisir sans fast-food classique |
| Q4a | Avant (enfer) | Se demande ou manger vite et copieusement sans culpabiliser |
| Q4b | Apres (paradis) | Content, bon moment, qualite, saveurs, pas "detruit" sa diete |
| Q5 | Ennemi commun | Fast-foods classiques, peu de qualite, cher, remplis de gras |
| Q6 | Peur secrete | Cote "proteine" fait peur, reserve aux sportifs |
| Q7 | Preuve d'autorite | Boucherie Labourde, Pains du Soleil, Myfitcheese |
| Q8 | Secret sauce | Cuissons a chaleur pulsee (materiel pro, zero huile) |
| Q9 | Rituel | Cuisine ouverte, convivialite |
| Q10 | 3 adjectifs | (non rempli dans le CSV) |
| Q11 | Anti-portrait | (non rempli dans le CSV) |
| Q12 | Ton verbal | Tutoiement, mettre a l'aise, mots simples, explique si besoin |
| Q13 | Ambiance visuelle | Gymshark (vetements), G63 (voiture) |
| Q14 | Couleurs et matieres | Noir, blanc, bois, tres floral |
| Q15 | Curseur food porn | 7/10 - burger appetissant mais cote sain/healthy visible |
| Q16 | Ambition franchise | 4/5 points de vente dans 5 ans |
| Q17 | Mantra | "Le cheat meal qui n'en est pas un" |

## Mapping A01-Init (extraction partielle)

| Colonne CSV | Target dans 00-brief.md | Section |
|-------------|------------------------|---------|
| Entreprise (RD FITNESS) + Commercial (Strict Food's) | Client > Entreprise | Client |
| Entrepreneur (Foy / Lesniak) | Client > Contact | Client |
| Q3 - Mission | Projet > Contexte | Projet |
| Q14 - Couleurs et matieres | Identite Visuelle > Couleurs | Identite Visuelle Existante |
| Q13 - Ambiance visuelle | Ambition Visuelle > References d'univers | Ambition Visuelle |

> Note : Q10 et Q11 non remplis dans ce CSV. A01 n'extrait que les donnees disponibles.

## Mapping A02-Brand (cible principale)

| Colonne CSV | Target dans 00-platform.md | Composant |
|-------------|---------------------------|-----------|
| Q1 - Colere fondatrice | Key Insight / Tension | Insight |
| Q2 - Origine du nom | Brand Essence (etymologie) | Essence |
| Q3 - Mission | Mission | Mission |
| Q4a - Avant (enfer) | Insight (douleur client) | Insight |
| Q4b - Apres (paradis) | Brand Promise | Promise |
| Q5 - Ennemi commun | Competitive Environment | Environment |
| Q6 - Peur secrete | Insight (barriere a l'entree) | Insight |
| Q7 - Preuve d'autorite | Proof Points (partenaires) | Proof |
| Q8 - Secret sauce | Discriminator | Discriminator |
| Q9 - Rituel | Values & Personality | Values |
| Q12 - Ton verbal | tone.md (registre) | Tone |
| Q15 - Curseur food porn | Positionnement visuel (food porn vs healthy) | Positioning |
| Q16 - Ambition franchise | Vision (scalabilite) | Vision |
| Q17 - Mantra | Brand Essence / Tagline seed | Essence |

> Les reponses sont la VOIX BRUTE du client — preserver en citations, ne pas reformuler.
> Format : `"[reponse exacte]" — Reponse client, Q[X]`

## Mapping A03-Art Direction (enrichissement secondaire)

| Colonne CSV | Target | Fichier |
|-------------|--------|---------|
| Q13 - Ambiance visuelle (Gymshark, G63) | emotion-map, moodboard | emotion-map.md, moodboard.md |
| Q14 - Couleurs et matieres (noir, blanc, bois, floral) | visual-vocabulary, constraints | visual-vocabulary.md, constraints.md |
| Q15 - Curseur food porn (7/10) | Calibrage photographique | constraints.md |

## Notes specifiques StrictFood

- Q10 (3 adjectifs) et Q11 (Anti-portrait) sont vides → a completer lors du diagnostic A02
- Le CSV contient des sauts de ligne dans certaines cellules (Q7, Q9, Q14) — parser avec attention
- L'entreprise legale est "RD FITNESS", la marque commerciale est "Strict Food's" / "StrictFood"
- Deux fondateurs : Foy et Lesniak (le brief mentionne "Romain" comme prenom principal)
