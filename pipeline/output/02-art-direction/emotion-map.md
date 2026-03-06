# Carte des Emotions

<!-- Derive de : 00-platform.md (promesse Magician, transformation), positioning.md (messages par section), moodboard.md -->

## Homepage

### Hero

- **Emotion primaire** : Desir immediat (faim + curiosite)
- **Emotion secondaire** : Intrigue ("c'est quoi ce fast-food premium ?")
- **Tension visuelle** : Fond Charbon austere vs produit eclaire chaud et appetissant — le burger surgit du noir
- **Element signature** : Burger hero surdimensionne (60%+ viewport) avec eclairage dramatique lateral + tagline "Le cheat meal qui n'en est pas un"
- **Techniques frontend-design2 recommandees** :
  - Split Screen Layout — texte a gauche (promesse), produit a droite (preuve), asymetrie 40/60
  - Parallax Depth leger — le burger a un micro-parallax (2-3%) pour creer de la profondeur
  - **Justification** : Le split cree la tension Magician (promesse vs preuve). Le parallax subtil rend le produit "vivant" sans impacter la performance.

### La Promesse

- **Emotion primaire** : Revelation ("ce fast-food n'est pas ce que tu crois")
- **Emotion secondaire** : Soulagement ("je peux me faire plaisir sans culpabiliser")
- **Tension visuelle** : Narration emotionnelle (storytelling, ton personnel) vs preuves concretes (0% huile anime, macros chiffrees) — le coeur et la tete convaincus en meme temps
- **Element signature** : "0%" en typographie massive animee (counter 100→0) + mini-cards macros + badges pill Feuille Grillee + phrase de fermeture tagline Cuivre Braise
- **Techniques frontend-design2 recommandees** :
  - Counter Animation — "0%" anime au scroll (migre de l'ancienne section Experience)
  - Staggered Appear (150ms) — les 2 blocs (Cuisson + Macros) apparaissent en decale
  - Hover subtil sur mini-cards macros
  - **Justification** : Le counter cree le moment de drama (Magician) sur le differenciateur cle. Le stagger rythme la narration en 2 temps : d'abord la cuisson (emotion), puis les macros (preuve). La tagline en fermeture ancre le positionnement.

### Nos Artisans

- **Emotion primaire** : Confiance (ancrage local, preuves tangibles)
- **Emotion secondaire** : Fierte locale ("je connais ce boulanger")
- **Tension visuelle** : Portraits/noms des artisans (humain, chaleureux) vs background Charbon severe — l'humain surgit du noir
- **Element signature** : Noms des artisans en Cuivre Braise + descriptions courtes + localisation Perpignan
- **Techniques frontend-design2 recommandees** :
  - Sticky Scroll Stack — chaque artisan se revele en empilant les cards au scroll
  - **Justification** : Le sticky stack cree un rituel de decouverte ou chaque artisan a son moment — coherent avec la valeur Ancrage Local (chacun merite sa place).

### L'Experience (Cuisine Ouverte)

- **Emotion primaire** : Admiration ("ils n'ont vraiment rien a cacher")
- **Emotion secondaire** : Immersion ("j'ai envie d'y aller, de voir par moi-meme")
- **Tension visuelle** : Narration intimiste (invitation personnelle) vs visuel immersif du lieu (cuisine ouverte, mur vegetal, comptoir) — on se projette dans l'espace
- **Element signature** : Visuel cuisine ouverte pleine hauteur + narration sur l'experience physique du lieu
- **Techniques frontend-design2 recommandees** :
  - Scroll-triggered Fade In — revelation progressive du lieu au scroll
  - Parallax Depth leger (2-3%) — profondeur subtile sur l'image cuisine ouverte
  - **Justification** : Le fade in cree une decouverte progressive (Magician). Le parallax rend l'image "vivante" et invite a la visite. Le contenu "0% huile" est desormais en section 2 (La Promesse) pour eviter la redondance.

### Avis & Confiance

- **Emotion primaire** : Validation sociale ("d'autres ont essaye et aime")
- **Emotion secondaire** : Envie de rejoindre la communaute
- **Tension visuelle** : Chiffres impactants (74 avis, 0% huile, 100% artisanal) vs temoignages personnels intimes
- **Element signature** : Triptyque de data points en typographie massive + 2-3 avis selectionnes
- **Techniques frontend-design2 recommandees** :
  - Counter Animation — les 3 data points s'incrementent au scroll
  - **Justification** : Les compteurs animés cristallisent les preuves en un instant memorable. Format triptyque evite le "wall of testimonials" generique.

### Contact & Horaires

- **Emotion primaire** : Passage a l'action (commander)
- **Emotion secondaire** : Accueil ("on t'attend")
- **Tension visuelle** : Urgence du CTA (Cuivre Braise dominant) vs ton chaleureux du message ("Passe nous voir")
- **Element signature** : CTA telephonique surdimensionne + carte/localisation + horaires lisibles
- **Techniques frontend-design2 recommandees** :
  - Magnetic Button — le CTA "Appelle pour commander" attire subtilement le curseur
  - **Justification** : Le magnetic button cree un engagement tactile sans etre intrusif — coherent avec la Convivialite (invitation, pas pression).

## Pages Secondaires

### Mentions Legales

- **Emotion globale** : Neutralite professionnelle
- **Parcours emotionnel** :
  1. Arrivee : neutre (page utilitaire)
  2. Lecture : confiance (informations claires, structurees)
  3. Sortie : retour au site principal via navigation
- **Element signature** : Typographie Outfit lisible, fond Charbon, pas d'accent Cuivre Braise (page utilitaire)
- **Techniques frontend-design2 recommandees** :
  - Aucune technique speciale — page statique standard
  - **Justification** : Les mentions legales ne beneficient pas d'animations. Sobriete totale.

---

## Recapitulatif

| Section | Emotion Primaire | Couleur Dominante | Element Cle |
|---------|------------------|-------------------|-------------|
| Hero | Desir immediat | Charbon + Cuivre Braise accent | Burger hero surdimensionne, split layout |
| La Promesse | Revelation | Ebene + Feuille Grillee (badges) + Cuivre Braise (tagline) | "0%" anime + mini-cards macros + narration storytelling |
| Nos Artisans | Confiance | Charbon + Cuivre Braise (noms) | Noms artisans en or, sticky scroll stack |
| L'Experience | Admiration | Ebene + Charbon | Visuel cuisine ouverte, narration lieu |
| Avis & Confiance | Validation sociale | Ebene + Cuivre Braise (data) | Triptyque data points + avis selectionnes |
| Contact & Horaires | Passage a l'action | Charbon + Cuivre Braise (CTA) | CTA tel surdimensionne, magnetic button |
| Mentions Legales | Neutralite | Charbon + Creme | Texte structure, zero animation |

## Courbe Emotionnelle du Parcours

```
Emotion
   ^
   |          Revelation
   |          ●─────●  Admiration
   |         /        \     Validation
   |  Desir ●          ●────●
   |       /                  \  ACTION
   |      /                    ●
   | ●───● Intrigue             \
   | Arrivee                     ●
   └──────────────────────────────────> Scroll
     Hero   Promesse Artisans  Experience  Avis  Contact
```

**Objectif** : Le visiteur arrive avec une curiosite neutre. Le hero declenche le desir (burger appetissant + tagline intrigante). La Promesse revele les differenciateurs (0% huile + macros) via du storytelling emotionnel. Les artisans construisent la confiance par les preuves locales. L'experience invite a decouvrir le lieu (cuisine ouverte). Les avis valident socialement. Le contact convertit en action (appel telephonique). La courbe monte progressivement avec deux pics (hero = desir, promesse = revelation) et culmine sur l'action. Pas de creux — chaque section renforce la precedente.
