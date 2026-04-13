# TODO — Pipeline v6 StrictFood

> Mis à jour : 11 avril 2026

## Contexte

Session précédente : brainstorm + construction du pipeline v6 complet (Visual Concept Engine, Visual System, Visual Composer, Freestyle, multi-model router). Pivot en fin de session vers un style e-commerce minimal. Nouvelle couleur ambre #FABA43.

## p:urgent — Prochaine session

### 1. ~~Propager la nouvelle couleur ambre #FABA43~~ FAIT
- [x] `visual-system/tokens.css` — #FABA43 + RGB 250,186,67
- [x] `visual-system/components/` — tous les CSS via rgba() 
- [x] `visual-system/expressions/` — vitrine.html, vitrine-fill.js, tous les templates
- [x] `.claude/skills/visual-composer/references/brand-dna.md` — palette + 23 éléments
- [x] `.claude/skills/visual-composer/SKILL.md` — bloc fond vivant, glow CSS
- [x] Tous les templates stories, tests, playbook, ubereats, stratégie (80+ fichiers)
- [x] `_config/brand-props.md` — oklch mis à jour (0.83 0.17 80)
- [ ] `visual-system/assets/fond-ambre-9x16.png` — regénérer avec #FABA43 (nécessite génération image)

### 2. ~~Retravailler l'Intent Engine~~ FAIT — Devenu Visual Concept Engine
- [x] Pivot de Caption First → Visual First (le visuel EST le hook)
- [x] Analyse des patterns food Instagram qui performent (9 exemples comptes réels)
- [x] 16 concepts de référence validés par Dorian
- [x] 12 mécanismes visuels (bibliothèque ouverte, pas fermée)
- [x] 6 critères de validation intégrés (hook 1 phrase, faisabilité, différenciation, non-redondance, produit identifiable, pas cliché)
- [x] 3 niveaux de contenu (APPÉTIT, CONCEPT, UNIVERS)
- [x] Format triptych ponctuel (1-2/mois)
- [x] Munitions = input secondaire pour captions (plus le moteur créatif principal)
- [x] Contrainte lifestyle = sport / vie active
- [ ] Tester le moteur avec un batch réel de 4 posts

### 3. ~~Intégrer les fonds e-commerce dans le prompt engineer~~ FAIT
- [x] BLOC 1c ajouté dans le skill : variante `ecom-charbon` et `ecom-ambre`
- [x] Prompt-type documenté (halo lumineux, vignette, surface minimale, termes clés)
- [x] Table des fonds mise à jour avec `ecom-charbon` et `ecom-ambre`
- [ ] Tester avec Flux Max : produit sur fond charbon gradient + produit sur fond ambre gradient

### 4. Process simplifié posts
- [ ] Définir le workflow final : Visual Concept Engine → prompt → Flux Max → image e-commerce → (optionnel: overlay texte) → post
- [ ] Créer un template HTML léger pour les posts AVEC texte (style 112G DE PROT)
- [ ] Tester le workflow end-to-end : de l'idée au PNG publiable

### 5. Process stories : templates variables
- [ ] Le visual-composer doit générer des layouts variés avec éléments graphiques SOBRES (ref: story-1achete1offert-alt.html)
- [ ] Minimum 1-2 éléments graphiques par story, positions variables
- [ ] Mettre à jour le Brand DNA avec les nouvelles règles de parcimonie
- [ ] Tester 3 stories différentes pour valider la variété

### 6. LTX Studio — Exploration Reels
- [ ] Tester l'animation image-to-video avec un visuel produit
- [ ] Tester le multi-image reference (menu + wrap)
- [ ] Évaluer la qualité pour les Reels Instagram

## p:normal — À faire ensuite

### 7. Enrichir la banque de munitions
- [ ] Dorian : ajouter les phrases "overheard" au comptoir
- [ ] Dorian : ajouter les comparaisons réelles avec les concurrents locaux
- [ ] Dorian : ajouter les moments clients observés
- [ ] Scraper les avis Google récents → enrichir les catégories OVERHEARD et QUESTIONS

### 8. Clé API BFL
- [ ] Ajouter BFL_API_KEY dans ~/.zshrc pour persistence entre sessions
- [ ] Idem pour OPENROUTER_API_KEY (si besoin Seedream futur)

### 9. Nettoyage
- [ ] Supprimer les fichiers de test dans visual-system/test-renders/ une fois les templates finalisés
- [ ] Archiver les templates v5 obsolètes (story-sillon, story-sceau, story-feuillete, etc.)
- [ ] Mettre à jour le CLAUDE.md principal avec le nouveau pipeline v6

## Fichiers clés

| Fichier | Rôle |
|---------|------|
| `visual-system/tokens.css` | Palette, typo, spacing |
| `visual-system/assets/fond-ambre-9x16.png` | Fond ambre fixe (fallback) |
| `visual-system/generate-image.js` | Multi-model router (Flux Max/Pro/Klein + Gemini) |
| `.claude/skills/intent-engine/SKILL.md` | Visual Concept Engine (cerveau créatif posts + stories) |
| `.claude/skills/visual-composer/` | Agent designer layouts |
| `.claude/skills/freestyle/SKILL.md` | Mode libre + brainstorm |
| `_config/munitions.md` | Banque de munitions (62 entrées) |
| `_config/calendrier.md` | Événements 3 tiers |
| `ubereats/story-1achete1offert-alt.html` | Template de référence (style cible) |
