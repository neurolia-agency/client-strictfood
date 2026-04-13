# Mode batch -- Semaine complete

Si l'operateur demande une semaine entiere (`S1`) :

1. Lister tous les jours et stories dans `production/posts-stories/stories/S1/`
2. Pour chaque story contenant un `brief/brief-story.md` :
   - Router vers le bon sous-pipeline (food, lifestyle, template)
   - Executer le pipeline complet jusqu'a `brouillons/`
3. Afficher un recap :
   ```
   RECAP BROUILLONS -- S1

   | Jour | Story | Mode | Type | Status | Brouillon |
   |------|-------|------|------|--------|-----------|
   | lundi | #1 | full-ia | food | Brouillon | story-01/brouillons/story.png |
   | lundi | #2 | template | -- | Brouillon | story-02/brouillons/story.png |
   | mardi | #1 | full-ia | lifestyle | Brouillon | story-01/brouillons/story.png |
   | ... | ... | ... | ... | ... | ... |

   Total : X brouillons generes
   Modes : X food / Y lifestyle / Z template
   ```

4. Validation story par story ou par jour
