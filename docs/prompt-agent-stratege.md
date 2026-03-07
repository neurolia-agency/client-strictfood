const client = $('Charger Donnees Client').first().json;
const brand = $('Charger Plateforme Marque').first().json;
const metricsItems = $('Charger Metriques Precedentes').all();
const campaign = $('Webhook').first().json.body.campaign;

const startDate = new Date(campaign.start_date);
const endDate = new Date(campaign.end_date);
const campaignDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
const weeksCount = Math.ceil(campaignDays / 7);
const objectives = campaign.objectives || {};
const postsPerWeek = objectives.posts_per_week || 4;
const storiesPerDay = objectives.stories_per_day || 6;
const postsCount = postsPerWeek * weeksCount;
const storiesCount = storiesPerDay * campaignDays;

let phasesCount;
if (campaignDays <= 10) phasesCount = 2;
else if (campaignDays <= 21) phasesCount = 3;
else if (campaignDays <= 45) phasesCount = 4;
else phasesCount = 5;

const intensityCurve = objectives.intensity_curve || 'flat';

let metricsSummary = 'Premiere campagne — pas de metriques.';
if (metricsItems.length > 0 && !metricsItems[0].json._noData) {
  const rates = metricsItems.map(m => m.json.engagement_rate).filter(Boolean);
  const avgRate = rates.length > 0 ? (rates.reduce((a, b) => a + b, 0) / rates.length * 100).toFixed(1) : 'N/A';
  metricsSummary = `${metricsItems.length} publications, engagement moyen: ${avgRate}%`;
}

const keyDatesFormatted = (objectives.key_dates || []).map(kd => `- ${kd.date} : ${kd.label}`).join('\n') || 'Aucune.';
const kpisFormatted = (objectives.kpis || []).map(k => `${k.metric}: ${k.target}`).join(', ') || 'Non definis';

const curveInstructions = {
  flat: 'Distribue les posts de maniere uniforme entre les phases.',
  ramp_up: 'Commence doucement et augmente progressivement. Derniere phase = plus de posts.',
  peak_middle: 'Faible volume en debut, pic au milieu, retour modere en fin.',
  front_loaded: 'Volume maximal en premiere phase, puis decroissant.'
};

const systemPrompt = `<role>
Tu es un stratege de campagne specialise reseaux sociaux (Instagram + Facebook).
Tu concois l'architecture macro d'une campagne : phases temporelles, objectifs par phase, intensite, directives thematiques.
Tu ne generes PAS de posts ni de stories individuels — uniquement le plan directeur en ${phasesCount} phases.
</role>

<rules>
1. Reponds UNIQUEMENT en JSON valide. Aucun texte, commentaire ou explication avant ou apres le JSON.
2. Genere exactement ${phasesCount} phases coherentes couvrant la totalite de la periode [${campaign.start_date}, ${campaign.end_date}].
3. Les phases doivent etre contigues sans trou ni chevauchement.
4. Courbe d'intensite : "${intensityCurve}". ${curveInstructions[intensityCurve] || curveInstructions.flat}
5. posts_target total des phases = exactement ${postsCount}.
6. stories_per_day adapte a l'intensite de chaque phase (moyenne globale ~${storiesPerDay}/jour).
7. Chaque date cle doit tomber dans une phase avec une directive specifique dans key_date_directives.
8. Transitions fluides : le ton et l'objectif de chaque phase doivent s'enchainer naturellement.
</rules>

<constraints>
VALEURS AUTORISEES — toute autre valeur invalide le JSON :
- intensity : "low", "medium", "high" (strictement ces 3 valeurs)
- categories_focus : "produit", "coulisses", "equipe", "engagement", "saisonnier", "educatif", "temoignage", "ambiance"
- Toutes les dates au format YYYY-MM-DD, dans la plage [${campaign.start_date}, ${campaign.end_date}]
- Ne genere JAMAIS de texte avant ou apres le bloc JSON
</constraints>

<output_format>
{
  "strategy_summary": "Resume strategie 2-3 phrases, specifique au client",
  "campaign_phases": [
    {
      "name": "nom evocateur",
      "start_date": "YYYY-MM-DD",
      "end_date": "YYYY-MM-DD",
      "objective": "objectif clair",
      "tone": "ton dominant",
      "intensity": "low|medium|high",
      "themes_priority": ["theme1", "theme2"],
      "categories_focus": ["categorie1", "categorie2"],
      "posts_target": 0,
      "stories_per_day": 0,
      "key_date_directives": [{ "date": "YYYY-MM-DD", "label": "string", "directive": "string" }]
    }
  ]
}
</output_format>

<quality_checklist>
Avant de finaliser, verifie :
- Nombre de phases = ${phasesCount}
- Dates couvrent [${campaign.start_date}, ${campaign.end_date}] sans trou
- Somme posts_target = ${postsCount}
- Chaque date cle a une directive
- Intensite suit la courbe "${intensityCurve}"
- categories_focus varient entre les phases
- strategy_summary mentionne le client et son secteur
</quality_checklist>`;

const userPrompt = `# BRIEF CAMPAGNE — ${client.name}

Campagne : ${campaign.name}
Periode : ${campaign.start_date} au ${campaign.end_date} (${campaignDays} jours, ${weeksCount} semaines)
Objectif : ${objectives.primary_goal || 'engagement'} — ${objectives.description || ''}
KPIs : ${kpisFormatted}
Courbe : ${intensityCurve}
Volume prevu : ${postsCount} posts (${postsPerWeek}/sem) + ${storiesCount} stories (${storiesPerDay}/jour)

### Dates cles
${keyDatesFormatted}

### Themes imposes
${(objectives.themes_imposed || []).join(', ') || 'Aucun'}

### Brief client
${campaign.brief || 'Pas de brief specifique.'}

## MARQUE
Secteur : ${client.industry || '?'}
Mission : ${brand.mission || ''}
Valeurs : ${(brand.brand_values || []).map(v => typeof v === 'object' ? v.name : v).join(', ')}
Personnalite : ${brand.personality || ''}
Ton : ${brand.tone_of_voice || ''}
Audience : ${brand.target_audience || ''}
Essence : ${brand.brand_essence || ''}
Promesse : ${brand.brand_promise || ''}

## METRIQUES RECENTES
${metricsSummary}

<thinking>
Avant de generer le JSON, raisonne etape par etape :
1. Analyse la duree (${campaignDays} jours) et identifie les temps forts naturels.
2. Place les dates cles et determine quelles phases les encadrent.
3. Definis ${phasesCount} phases avec objectifs distincts et transitions logiques.
4. Distribue les ${postsCount} posts selon la courbe "${intensityCurve}".
5. Ajuste stories_per_day par phase (low=moins, high=plus, moyenne ~${storiesPerDay}).
6. Verifie : posts_target total = ${postsCount} exactement.
Ne montre PAS ce raisonnement — genere uniquement le JSON.
</thinking>

<example>
Entree : Campagne "Lancement Menu Ete", 21 jours, 3 phases, 15 posts, peak_middle, date cle 2026-04-10.
Sortie :
{
  "strategy_summary": "Campagne en 3 phases : teasing produits de saison, lancement fort du menu, consolidation terrasse.",
  "campaign_phases": [
    { "name": "Teasing Saison", "start_date": "2026-04-01", "end_date": "2026-04-09", "objective": "Creer anticipation produits de saison", "tone": "mysterieux", "intensity": "low", "themes_priority": ["produits de saison"], "categories_focus": ["produit", "coulisses", "ambiance"], "posts_target": 4, "stories_per_day": 5, "key_date_directives": [] },
    { "name": "Lancement Menu", "start_date": "2026-04-10", "end_date": "2026-04-16", "objective": "Maximiser visibilite nouveau menu", "tone": "enthousiaste", "intensity": "high", "themes_priority": ["menu ete"], "categories_focus": ["produit", "engagement", "equipe"], "posts_target": 7, "stories_per_day": 8, "key_date_directives": [{ "date": "2026-04-10", "label": "Jour de lancement", "directive": "Post hero reveal complet" }] },
    { "name": "Fidelisation", "start_date": "2026-04-17", "end_date": "2026-04-21", "objective": "Convertir en reservations", "tone": "convivial", "intensity": "medium", "themes_priority": ["terrasse"], "categories_focus": ["temoignage", "ambiance"], "posts_target": 4, "stories_per_day": 6, "key_date_directives": [] }
  ]
}
</example>

Reponds avec le JSON :`;

return [{
  json: {
    systemPrompt,
    userPrompt,
    postsCount,
    storiesCount,
    storiesPerDay,
    campaignDays,
    weeksCount,
    campaignStartDate: campaign.start_date,
    campaignEndDate: campaign.end_date,
    campaignName: campaign.name,
    campaignObjectives: objectives,
    campaignBrief: campaign.brief || '',
    keyDates: objectives.key_dates || [],
    intensityCurve,
    phasesCount
  }
}];