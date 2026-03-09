PIPELINE DE PRODUCTION INSTAGRAM — STRICTFOOD (v2)
Objectif : Produire des visuels Instagram premium "Dark Food Premium" pour chaque post, du brief stratégique jusqu'au prompt final prêt pour Nanobanana/GPT Images.
Dossier racine : client-strictfood/production/
Structure par post : production/YYYY-MM-DD/ (nommé par date de publication)

FICHIERS CENTRALISÉS (créés une fois, réutilisés)
_recettes/ — Une fiche par produit de la carte (16 produits). Chaque fiche contient le nom du produit, la liste exacte des ingrédients avec leurs formes précises (ex: "parmesan en miettes — PAS en copeaux"), les anti-patterns visuels à éviter, et les notes de texture/couleur.
_config/photo-references.md — Fichier centralisé qui mappe chaque produit à ses 1-3 photos références. Chaque entrée contient : nom du produit, chemin exact de chaque photo, et description textuelle de ce qui distingue chaque photo (ex: "burger simple bœuf — photo 1 : vue de face, photo 2 : vue contre-plongée, photo 3 : vue plongée"). Ces descriptions permettent à un agent de choisir la photo la plus adaptée en fonction de la direction créative.
_config/pipeline.md — Configuration générale : règles de sélection du modèle (pas de texte → Gemini/Nanobanana, texte on-image → GPT Images), résolution (toujours 4K), liens vers les documents DA.

ÉTAPES DE LA PIPELINE (par post)
Étape 0 — Brief stratégique (00-brief/brief.md)
Rédigé par l'opérateur (ou un agent). Contenu purement macro : pilier éditorial, objectif du post, message clé, contexte calendaire, format (1:1 par défaut sur Instagram, sauf exception justifiée), caption complète, hashtags. Le brief indique le sujet principal du post (ex: "STRICT Bœuf") mais sans détail produit. Aucune photo référence. C'est la couche stratégie.
Étape 1 — Direction créative (01-art-direction/direction.md)
Produite par le skill social-media-art-director. Il lit le brief (00-brief/brief.md) + les documents DA du projet (constraints.md, visual-vocabulary.md, emotion-map.md, ui-kit.md, project-dials.md). Il ne voit PAS la photo référence, il ne voit PAS les fiches recettes. Il décide du COMMENT : composition (cadrage, angle, POV, sujet principal, éléments secondaires, zone de respiration), éclairage (type, direction, qualité, ombres, température), couleurs et mood, texte on-image éventuel, texture et détails sensoriels, intention et fonction. Pour un carrousel, une fiche par slide.
Point clé : l'art director verrouille quels produits apparaissent à l'image. Le brief dit le sujet principal, mais l'art director peut décider de faire apparaître des produits secondaires (ex: brief = "STRICT Bœuf", art director décide d'ajouter des frites ou une boisson en arrière-plan). La fiche créative est la source de vérité sur ce qui sera visible à l'écran.
Étape 1bis — Mapping input produit automatique (00-input/input.md)
Produit par un agent (modèle léger type Haiku). Cet agent lit la fiche créative (01-art-direction/direction.md) pour identifier tous les produits que l'art director a verrouillés. Il consulte ensuite _config/photo-references.md pour sélectionner la photo référence la plus adaptée à chaque produit, en croisant la description textuelle des photos disponibles avec les choix créatifs (angle, cadrage, POV demandés par l'art director). Il consulte _recettes/ pour lier la fiche recette correspondante. Il génère automatiquement 00-input/input.md avec pour chaque produit : le nom, le lien vers la fiche recette, et le lien vers la photo référence choisie avec la justification du choix. Pour un carrousel, une entrée par slide. L'opérateur valide ou ajuste avant de passer à l'étape suivante.
Étape 2 — Prompt optimisé (02-prompt/prompt.md)
Produit par le skill image-prompt-engineer. Il lit la fiche créative (01-art-direction/direction.md) + la fiche input (00-input/input.md) qui le renvoie vers la recette complète et la photo référence. Il fusionne le tout en un prompt structuré pour Nanobanana ou GPT Images selon les règles de sélection du modèle.
Trois contraintes non négociables appliquées systématiquement : fidélité produit absolue (ingrédients exacts dans leurs formes exactes depuis la fiche recette), résolution toujours 4K, instruction photo référence obligatoire dans chaque prompt (demander explicitement au modèle de matcher l'apparence du produit sur la photo fournie).
Étape 3 — Output (03-output/)
L'opérateur génère le visuel dans Nanobanana/GPT Images avec le prompt, stocke le résultat ici. Itérations si nécessaire, retouches Photoshop le cas échéant.

SÉPARATION DES RESPONSABILITÉS
Le brief ne parle que de stratégie. L'art director décide du style visuel ET verrouille quels produits sont à l'image, mais ne voit jamais les photos ni les recettes. L'agent de mapping fait le lien automatique entre les produits verrouillés par l'art director et les photos références disponibles, en s'appuyant sur les descriptions textuelles de _config/photo-references.md. Le prompt engineer est le seul à tout recevoir (direction créative + recette + photo). L'opérateur garde un droit de validation/ajustement sur le fichier input avant passage au prompt.

FLUX SÉQUENTIEL
Brief → Art Director → Agent mapping (auto) → Opérateur valide input → Prompt Engineer → Génération
