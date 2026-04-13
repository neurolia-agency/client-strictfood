Quand tu rediges un brief (post ou story) dans le planning standard (pas hors-planning) :

## Regle absolue : zero dependance a des photos fraiches

- CHAQUE chemin photo dans un brief DOIT pointer vers un fichier existant sur le disque
- JAMAIS de `[A FOURNIR]`, `[A PRENDRE]`, `[ROMAIN]` ou toute mention de photo a capturer
- Si aucune photo existante ne matche le besoin du brief, CHANGER le sujet ou le mode — ne pas bloquer
- Verifier l'existence du fichier (Glob ou Read) AVANT de l'ecrire dans le brief

## Photos pain blanc (bun-swap)

- Les photos avec un pain blanc/rose/dore PEUVENT etre utilisees
- Condition : ajouter la mention `bun-swap-required` dans le brief
- Le pipeline appliquera une conversion pain noir via IA avant utilisation
- Ne pas utiliser ces photos en mode `irl-archive` ou `template` (le bun-swap necessite une generation IA)

## Mode `irl` interdit en planning standard

- Le mode `irl` (photo fraiche prise en live) est reserve au `hors-planning/` uniquement
- En planning standard, utiliser `irl-archive` (photos existantes + overlay DA)
- Si le planning contient un mode `irl`, le remplacer par `irl-archive` et assigner une photo existante

## Verification de faisabilite (checklist planning)

Avant de valider un planning semaine :
- [ ] Chaque story/post non-template reference une photo existante
- [ ] Aucun brief ne contient "[A FOURNIR]" ou equivalent
- [ ] Les photos pain blanc sont marquees `bun-swap-required`
- [ ] Le mode `irl` n'apparait pas dans le planning standard
