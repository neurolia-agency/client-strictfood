# PROMPT — Générateur Stratégie + Planning Instagram

> **Usage :** Copier-coller ce prompt dans Claude Code en remplaçant les variables entre `{{...}}`.
> **Output :** 2 fichiers dans `strategie/` : `instagram-{{BLOC}}-strategie.md` + `instagram-{{BLOC}}-planning.md`

---

## Le prompt

```
Tu es le stratège Instagram de StrictFood. Tu dois produire 2 fichiers pour le bloc {{BLOC}} de la Période {{PERIODE}} :

1. `strategie/instagram-{{BLOC}}-strategie.md` — Stratégie pure (pas de planning post par post)
2. `strategie/instagram-{{BLOC}}-planning.md` — Planning opérationnel détaillé (post par post, stories jour par jour)

---

## PARAMÈTRES DU BLOC

- **Bloc :** {{BLOC}} (ex: S0-S1, S3-S4, S5-S6, S7-S8)
- **Période :** {{PERIODE}} (ex: 1, 2, 3)
- **Semaines couvertes :** {{SEMAINE_DEBUT}} à {{SEMAINE_FIN}}
- **Dates réelles :** {{DATE_DEBUT}} au {{DATE_FIN}}
- **Nombre de posts prévus :** 4 posts/semaine × {{NB_SEMAINES}} semaines = {{NB_POSTS}} posts
- **Contexte spécifique du bloc :** {{CONTEXTE_BLOC}}

> Exemple de CONTEXTE_BLOC :
> - S3-S4 : "Introduction des Reels. Le pilier Quartier s'active si UGC disponible. Les données d'engagement de S1-S2 sont disponibles pour ajuster les horaires."
> - S5-S6 : "Début Période 2. Rythme de croisière installé. Diversification formats. Piloter par la data de Période 1."

---

## SOURCES DE VÉRITÉ — LECTURE OBLIGATOIRE AVANT RÉDACTION

Lis ces fichiers dans l'ordre avant de rédiger quoi que ce soit :

1. `strategie/instagram-strategie.md` — Document maître (piliers, périodes, KPIs, guidelines)
2. `strategie/instagram-S0-S1-strategie.md` — Modèle de référence pour le format stratégie
3. `strategie/instagram-S0-S1-planning.md` — Modèle de référence pour le format planning
4. `pipeline/input/content/carte.md` — Carte produit (macros, prix — source unique des données chiffrées)
5. `strategie/strategie.md` — Stratégie globale Neurolia × StrictFood (contexte business)
6. `pipeline/input/content/analyse-interne.md` — Analyse interne (personas, contraintes)

> **Note :** Ne PAS assigner de photo source aux posts. Le choix des photos (depuis `photo-selection.md` ou à produire) est fait dans une étape ultérieure dédiée.

Si des fichiers stratégie/planning de blocs PRÉCÉDENTS existent, lis-les aussi pour assurer la continuité :
- Vérifie quels produits ont déjà été couverts
- Vérifie quels artisans ont déjà eu un post dédié
- Vérifie la progression des KPIs
- Vérifie les stories récurrentes déjà installées

---

## STRUCTURE DU FICHIER STRATÉGIE

Le fichier `instagram-{{BLOC}}-strategie.md` DOIT contenir ces 12 sections, dans cet ordre :

### 1. CADRAGE DE LA PHASE
- Périmètre temporel (ce que couvre chaque semaine du bloc)
- Mission stratégique du bloc (qu'est-ce qu'on cherche à accomplir ?)
- Ce que cette phase n'est PAS (clarifier les limites)
- Conditions de succès (critères binaires de réussite en fin de bloc)
- **IMPORTANT :** Contextualiser par rapport au bloc précédent. Qu'est-ce qui a changé ? Qu'est-ce qu'on construit sur les acquis ?

### 2. RÔLE D'INSTAGRAM DANS L'ÉCOSYSTÈME
- Rappel contextualisé au bloc (le rôle évolue entre Période 1 et Période 3)
- Position dans le tunnel d'acquisition à cette étape

### 3. PILIERS ÉDITORIAUX — DÉVELOPPEMENT POUR CE BLOC
- Tableau de répartition des piliers (% stratégie mère vs % ce bloc + justification)
- Pour CHAQUE pilier actif dans ce bloc :
  - Fonction spécifique au bloc
  - Objectifs tactiques
  - Direction photographique / créative
  - Produits ou sujets à couvrir (en évitant les doublons avec les blocs précédents)
  - Ce qu'il faut éviter
- Pour les piliers inactifs : expliquer pourquoi et quand ils s'activent

**Règle d'évolution des piliers :**
| Période | Le Plat | La Cuisine | Les Macros | L'Équipe | Le Quartier |
|---------|---------|-----------|------------|----------|-------------|
| P1 S0-S2 | 50% | 30% | 10% | 10% | 0% |
| P1 S3-S4 | 40% | 25% | 18% | 12% | 5% |
| P2 S5-S6 | 35% | 25% | 18% | 15% | 7% |
| P2 S7-S8 | 35% | 20% | 20% | 12% | 13% |
| P3 S9-S10 | 30% | 20% | 18% | 15% | 17% |
| P3 S11-S12 | 30% | 18% | 18% | 14% | 20% |

Ces pourcentages sont indicatifs. Ajuste selon le contexte du bloc (ex : si un événement local justifie plus de "Quartier", ou si un nouveau produit justifie plus de "Plat").

### 4. STRATÉGIE DE GRILLE VISUELLE
- Philosophie de la grille pour ce bloc
- Règles de composition (comment les nouveaux posts s'intègrent aux posts existants)
- Architecture visuelle cible en fin de bloc (schéma ASCII de la grille)

### 5. STRATÉGIE STORIES
- Rôle des stories pour ce bloc (ça évolue : en P1 c'est "montrer qu'on est vivant", en P2 c'est "engager", en P3 c'est "fidéliser")
- Objectifs stories
- Typologie des stories avec fréquences
- Guidelines créatives stories
- Stratégie Highlights (quels Highlights alimenter en priorité)

### 6. STRATÉGIE D'ENGAGEMENT
- Philosophie d'engagement pour ce bloc
- Engagement sortant (proactif) : follows, commentaires, DMs
- Engagement entrant (réactif) : réponses, reposts
- Métriques d'engagement

### 7. STRATÉGIE HASHTAGS
- Sets de hashtags par pilier (2-3 sets rotatifs chacun)
- Ajustements par rapport au bloc précédent si pertinent
- Placement (caption vs commentaire)

### 8. STRATÉGIE REELS (à partir de P1 S3-S4)
- Objectifs Reels pour le bloc
- Formats privilégiés
- Direction créative
- Hooks visuels
- Si le bloc est en P1 S0-S2 : cette section indique "Pas de Reels — priorité aux photos et carrousels"

### 9. WORKFLOW CRÉATIF
- Équipe et rôles
- Pipeline de création
- Stack créative
- Timing de publication (horaires, à ajuster selon les données des blocs précédents)

### 10. PROFIL — AJUSTEMENTS (si pertinent)
- Modifications bio, lien, highlights à faire pour ce bloc
- Si aucun ajustement : "Profil inchangé par rapport au bloc précédent"

### 11. KPIS & MESURE
- KPIs de fin de bloc (avec objectifs chiffrés)
- Métriques à tracker sans objectif
- Revue de bloc (quand, format, décisions à prendre)

### 12. RISQUES & MITIGATIONS
- 3-5 risques spécifiques au bloc avec probabilité, impact, mitigation

---

## STRUCTURE DU FICHIER PLANNING

Le fichier `instagram-{{BLOC}}-planning.md` DOIT contenir :

### En-tête
- Références vers le fichier stratégie et le document maître

### Pour CHAQUE SEMAINE du bloc :

#### Calendrier éditorial (POSTS)
Pour CHAQUE POST (4 par semaine) :
- Tableau résumé : Pilier | Format | Produit/Sujet | Heure
- **Brief visuel** détaillé (angle, éclairage, composition, ambiance)
- **Caption rédigée** complète avec :
  - Hook (première ligne)
  - Corps du texte
  - CTA si pertinent
  - Localisation
  - Hashtags (set complet)
- **Logique de caption** (explication du choix rédactionnel)
- **Intégration grille** (comment ce post s'insère visuellement)

**Règles pour les captions :**
- Tutoiement systématique
- Jamais le mot "healthy" (trop galvaudé)
- Chiffres macros depuis carte.md uniquement
- Artisans toujours nommés (Boucherie Labourde, Pains du Soleil, Myfitcheese)
- Tagline "Le cheat meal qui n'en est pas un" utilisable en signature (pas systématique)
- Emoji : max 1-2 par caption (📍 et un sobre)
- Hashtags : 10-15 par post, organisés en couches (locaux + niche + spécifiques + génériques)

#### Plan stories (jour par jour)
Pour CHAQUE JOUR de la semaine :
- Tableau : # | Contenu | Type | Qui produit | Highlight cible
- 2-4 stories par jour
- Au moins 1 story interactive par semaine
- Sticker localisation sur 1+ story/jour

### Récapitulatif en fin de fichier
- Vue d'ensemble des posts (tableau : # | Jour | Pilier | Produit | Format)
- Couverture piliers (tableau avec % réel vs % cible)
- Couverture produits (quels produits ont été couverts, lesquels restent)
- Comptage stories prévisionnel
- Checklist de lancement (ce qui doit être prêt avant publication)

---

## RÈGLES DE COHÉRENCE

1. **Macros et prix** : TOUJOURS depuis `carte.md`. Jamais de chiffres inventés.
2. **Photos** : Ne PAS assigner de photo source dans le planning. Le choix des photos est fait dans une étape ultérieure.
3. **Produits déjà couverts** : Vérifier les plannings précédents. Un même produit peut revenir mais avec un angle/format différent. Pas de doublon identique.
4. **Progression narrative** : Les posts d'un bloc construisent sur les précédents. Si S1-S2 a présenté les fondateurs, S3-S4 peut montrer l'équipe au travail (pas re-présenter les fondateurs).
5. **Artisans** : Les 3 artisans (Labourde, Pains du Soleil, Myfitcheese) doivent être couverts au moins 1x chacun par période. Vérifier la couverture cumulée.
6. **Grille visuelle** : Chaque post est pensé pour sa place dans la grille 3×3 Instagram. Alterner plans serrés/moyens, tons chauds/froids, photos/carrousels.
7. **Ton** : Tutoiement. Direct. Chaleureux. Premium sans prétention. Pas de "healthy", pas de jargon fitness.

---

## ÉVOLUTION PAR PÉRIODE (GUIDE)

### Période 1 (S0-S4) — "Le Reboot Premium"
- Priorité : grille visuelle, food porn, crédibilité
- Pas de Reels (sauf S3-S4 si pertinent)
- Engagement modéré
- Stories : prouver que le compte est vivant
- UGC : inexistant ou quasi

### Période 2 (S5-S8) — "Le Rythme & l'Engagement"
- Priorité : diversification formats, engagement actif, pilotage data
- Reels obligatoires (min 2/semaine bloc)
- Introduction séries récurrentes si les données le justifient
- Stories : engagement actif (interactives 2x/semaine min)
- UGC : premiers reposts si disponibles
- Ajustement horaires selon Instagram Insights

### Période 3 (S9-S12) — "L'Amplification"
- Priorité : séries installées, UGC intégré, workflow autonome
- Reels réguliers (2-3/semaine bloc)
- Séries récurrentes identifiables par l'audience
- Stories : rendez-vous + UGC
- Le Quartier prend de l'ampleur
- Optimisation continue basée sur data cumulée

---

## OUTPUT

Produis les 2 fichiers complets. Ne demande pas de confirmation intermédiaire.
Commence par lire TOUS les fichiers sources listés ci-dessus.
Si un fichier de bloc précédent existe, lis-le pour assurer la continuité.
```

---

## Exemples d'invocation

### Bloc S3-S4 (Période 1)

```
[Coller le prompt ci-dessus avec :]

- Bloc : S3-S4
- Période : 1
- Semaines couvertes : Semaine 3 à Semaine 4
- Dates réelles : 24 mars au 6 avril 2026
- Nombre de posts : 8
- Contexte spécifique : "Troisième et quatrième semaines de publication. Le mur visuel de S1-S2 est posé (8 posts). Introduction progressive des Reels courts (15-30s en cuisine). Le pilier Les Macros monte en puissance. Le pilier L'Équipe se diversifie (pas que les fondateurs — montrer le quotidien, le rush, les anecdotes). Premières données d'engagement disponibles via Instagram Insights. Les données de S1-S2 permettent d'ajuster les horaires de publication."
```

### Bloc S5-S6 (Période 2) ✅ GÉNÉRÉ

```
[Coller le prompt ci-dessus avec :]

- Bloc : S5-S6
- Période : 2
- Semaines couvertes : Semaine 5 à Semaine 6
- Dates réelles : 2026-04-07 au 2026-04-20
- Nombre de posts : 8
- Contexte spécifique : "Début de Période 2 — Le Rythme & l'Engagement. Le feed a 16 posts cohérents DA après Période 1. La grille visuelle est installée, le profil est crédible, et le rythme de 4 posts/semaine est confirmé soutenable. Les Reels sont désormais obligatoires (minimum 2 Reels sur le bloc — un premier Reel a été publié en S3-S4, les données de performance sont disponibles). L'engagement proactif s'intensifie : réponses systématiques, DMs stratégiques, interaction avec l'écosystème local. Les données Instagram Insights de Période 1 (4 semaines) sont disponibles et exploitables : identifier les top formats (photo vs carrousel vs Reel), top horaires, top piliers par reach et engagement. Le pilier Le Quartier s'active en post pour la première fois (7% du mix — premier post dédié si UGC ou matière locale disponible). Le pilier Les Macros maintient sa montée en puissance avec des formats éducatifs récurrents. Le ton peut devenir légèrement plus complice : la communauté commence à exister, les premiers commentateurs réguliers apparaissent. Introduction possible de séries récurrentes si les données de P1 le justifient (ex : 'Lundi Plat de la Semaine', 'Mercredi Macros'). Ajustement fin des horaires de publication basé sur 4 semaines de data. Les produits non encore couverts en P1 (Wrap Bœuf, Tenders STRICT, Frites Patates Douces) sont prioritaires. Les artisans sont déjà bien couverts (3/3 posts dédiés en P1) — en P2, ils reviennent dans des angles nouveaux (process, storytelling approfondi, Reel)."
```

**Fichiers générés :**
- `strategie/periode-2/S5-S6/instagram-S5-S6-strategie.md`
- `strategie/periode-2/S5-S6/instagram-S5-S6-planning.md`

### Bloc S7-S8 (Période 2)

```
[Coller le prompt ci-dessus avec :]

- Bloc : S7-S8
- Période : 2
- Semaines couvertes : Semaine 7 à Semaine 8
- Dates réelles : 21 avril au 4 mai 2026
- Nombre de posts : 8
- Contexte spécifique : "Fin de Période 2. Le rythme est installé. Identifier les 2-3 séries récurrentes à lancer en Période 3 (basé sur les contenus les plus performants). Consolider l'engagement. Préparer la transition vers l'amplification. Le pilier Quartier grossit (UGC + interactions locales). Introduction possible de collaborations locales (salles de sport, coachs)."
```

---

## Notes importantes

1. **Toujours lire les blocs précédents** — La continuité est critique. Un produit déjà mis en hero shot ne doit pas être re-hero-shotté identiquement. Un artisan déjà présenté peut être approfondi, pas re-présenté.

2. **Les pourcentages de piliers sont des guides** — Le contexte du bloc prime. Si un événement local, un nouveau produit, ou une donnée d'engagement justifie un ajustement, l'ajustement est préférable à l'application mécanique du tableau.

3. **La qualité prime sur la quantité** — Si le rythme de 4 posts/semaine n'est pas soutenable, la stratégie doit le noter et proposer 3 posts/semaine sans perte de qualité.

4. **Les captions doivent être prêtes à publier** — Pas de "[insérer macro ici]" ou "[à compléter]". Toutes les données viennent de carte.md.

5. **Chaque bloc construit sur le précédent** — Le fichier stratégie doit explicitement référencer les acquis du bloc précédent et les évolutions.
