# Story Rappel — Presence & Desir

> Story bonus publiee 1 fois tous les 2 jours (en plus des 3 stories principales).
> Declenche l'ENVIE de commander sans jamais dire "venez manger".
> Subtilite, emotion, humour, triggers psychologiques.

---

## Principe

Le rappel de presence n'est PAS une annonce. C'est une **micro-histoire** qui cree un manque. Le spectateur doit sentir la faim monter, se projeter dans un moment, sourire, ou ressentir un FOMO — et seulement ENSUITE remarquer les horaires en bas.

- **Accroche** : phrase creative, 3-12 mots max, ecrite par l'agent `rappel-copywriter`
- **CTA/Horaires** : TOUJOURS presents mais integres subtilement (petite ligne en bas, overlay natif IG)
- **Visuel** : 100% full-ia — chaque rappel est un visuel IA unique avec sa propre direction creative
- **Logo** en bas + **tagline** en bas

### Ce qu'on ne fait PLUS

- "SAMEDI = STRICT" / "CE SOIR C'EST STRICT" / "ON EST OUVERTS" — supprime
- Banque d'accroches generiques a piocher — supprime
- Photos reelles du restaurant en fond — supprime (tout est IA)
- Mode `template` — supprime pour les stories

---

## Agents responsables

### 1. Copywriting — `rappel-copywriter` (Sonnet)

`production/.claude/agents/rappel-copywriter.md`

Ecrit l'accroche creative (TEXTE uniquement). Invoque automatiquement par le `story-producer`. L'operateur peut aussi l'invoquer directement avec un contexte special :

```
Rappel-copywriter pour samedi, contexte : "c'est le week-end de Paques"
Rappel-copywriter pour mardi, contexte : "canicule 38 degres"
Rappel-copywriter pour jeudi, contexte : "match France-Espagne ce soir"
```

### 2. Direction visuelle — `social-media-art-director`

`production/.claude/skills/social-media-art-director/SKILL.md`

Recoit l'accroche du copywriter et conçoit le visuel (concept, angle, eclairage, composition). Pioche dans `_config/concepts-visuels.md` section **Concepts Brand** (5 categories, ~30 concepts). Le visuel AMPLIFIE l'accroche sans la repeter.

### Meme pour les stories verrouilees dans le planning

Les deux agents sont invoques pour CHAQUE rappel — y compris ceux deja briefs dans le planning. Le planning definit le jour et le CTA, le copywriter ecrit l'accroche, l'art director conçoit le visuel au moment de la production.

---

## 8 techniques creatives (alternance obligatoire)

L'agent alterne entre ces registres. Jamais la meme technique 2 rappels de suite.

| # | Technique | Principe | Exemple |
|---|-----------|----------|---------|
| 1 | **FOMO** | Urgence douce, rarete, fenetre temporelle | "21h47. Il reste 13 minutes." |
| 2 | **Humour/Provoc** | Piquer, dedramatiser, surprendre | "Ton meal prep a pris un jour de conge" |
| 3 | **Sensoriel** | Decrire la SENSATION, pas le produit | "Cette croute qui craque sous les doigts" |
| 4 | **Emotionnel** | Moment de vie reconnaissable | "Le dimanche soir qu'on merite" |
| 5 | **Complice** | Connivence, insider | "Tu sais deja ce que tu veux commander" |
| 6 | **Contextuel** | Ancre dans le moment (meteo, event, saison) | "Le chocolat c'est bien. Mais t'as goute notre pain noir ?" |
| 7 | **Absurde/Decale** | Rupture de pattern, surprise | "On a compte : 47 graines de sesame par bun" |
| 8 | **Social proof** | Suggestion indirecte | "File d'attente a 12h15. Coincidence ?" |

> La technique 6 (Contextuel) est PRIORITAIRE quand l'operateur fournit un contexte evenementiel.

---

## Infos fixes (CTA — toujours presents, toujours subtils)

| Info | Valeur |
|------|--------|
| Telephone | 06 11 74 59 44 |
| Horaires | Mardi-Dimanche 11h-14h / 18h-22h |
| Adresse | 88 Chemin de la Roseraie, Perpignan |
| Quartier | Chateau Roussillon |

Alterner le CTA : telephone → horaires → adresse → telephone...

---

## Integration au planning

### Frequence

1 story rappel tous les 2 jours = **story #4** les jours concernes.

Placement recommande : mardi, jeudi, samedi (ou mercredi, vendredi, dimanche — alterner par semaine).

### Dans le tableau planning

```
| Jour | 4 | Rappel | full-ia | [fond] | — | [concept] | Rappel — CTA [tel/horaires/adresse] | — |
```

Type = `Rappel`, Mode = `full-ia`, # = `4`

> Le concept visuel et l'accroche sont determines par l'agent `rappel-copywriter` au moment de la production, PAS au planning. Le planning ne definit que le jour et le CTA.

### Dans le brief

```markdown
## Story 4 — Rappel presence

| Champ | Valeur |
|-------|--------|
| Mode | full-ia |
| Traitement | — |
| Fond | [ambre / charbon / ambre+charbon / charbon+ambre] |
| Highlight | NOUS TROUVER |
| Mood | cuivre |
| Concept visuel | [determine par rappel-copywriter] |

### Contenu

| Champ | Valeur |
|-------|--------|
| CTA type | [telephone / horaires / adresse] |
| CTA valeur | [06 11 74 59 44 / 11h-14h · 18h-22h / 88 Chemin de la Roseraie] |
| Contexte operateur | [evenement / actualite / "—"] |
```

> L'accroche, le mot accent et la direction visuelle sont ecrits par l'agent `rappel-copywriter` au moment de la production.

---

## Regles

1. **100% full-ia** — chaque rappel est un visuel IA unique. Pas de template, pas de photo reelle
2. **Agent obligatoire** — l'accroche est ecrite par `rappel-copywriter`, jamais copiee d'une banque
3. **Alterner** les techniques creatives (pas la meme 2 rappels de suite)
4. **Alterner** le CTA (telephone un jour, horaires le suivant, adresse le suivant)
5. **Horaires TOUJOURS presents** — meme discrets, meme en overlay natif IG
6. **Pas de rappel le lundi** (ferme)
7. C'est une story BONUS (#4) — ne remplace pas les 3 stories principales
8. **Pain noir** obligatoire si un burger est visible dans le visuel
9. **Contexte operateur prioritaire** — si l'operateur donne un evenement, l'agent l'integre en priorite
