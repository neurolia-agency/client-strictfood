/**
 * extract-google-reviews.js
 *
 * Colle ce script dans la console de ton navigateur (F12 → Console)
 * sur la page des avis Google Maps de StrictFood :
 *
 * 1. Va sur Google Maps → cherche "Strict Food's Perpignan"
 * 2. Clique sur les avis pour ouvrir le panneau
 * 3. Scroll tout en bas pour charger tous les avis
 * 4. Colle ce script dans la console → Enter
 * 5. Copie le JSON affiché et colle-le dans le chat Claude
 */

(function extractReviews() {
  // Selectors for Google Maps reviews (may need updating if Google changes their DOM)
  const reviewEls = document.querySelectorAll('[data-review-id]');

  if (reviewEls.length === 0) {
    // Try alternative selectors
    const altReviews = document.querySelectorAll('.jftiEf');
    if (altReviews.length === 0) {
      console.log('Aucun avis trouvé. Assure-toi d\'être sur la page des avis Google Maps.');
      return;
    }
  }

  const reviews = [];
  const containers = reviewEls.length > 0
    ? reviewEls
    : document.querySelectorAll('.jftiEf');

  containers.forEach(el => {
    try {
      // Author name
      const authorEl = el.querySelector('.d4r55') || el.querySelector('[class*="author"]');
      const author = authorEl ? authorEl.textContent.trim() : 'Anonyme';

      // Star rating
      const starsEl = el.querySelector('[role="img"]') || el.querySelector('.kvMYJc');
      let rating = 5;
      if (starsEl) {
        const ariaLabel = starsEl.getAttribute('aria-label') || '';
        const match = ariaLabel.match(/(\d)/);
        if (match) rating = parseInt(match[1]);
      }

      // Review text
      const textEl = el.querySelector('.wiI7pd') || el.querySelector('[class*="review-text"]');
      const text = textEl ? textEl.textContent.trim() : '';

      // Date
      const dateEl = el.querySelector('.rsqaWe') || el.querySelector('[class*="date"]');
      const date = dateEl ? dateEl.textContent.trim() : '';

      if (text.length > 10) {
        reviews.push({ author, rating, text, date });
      }
    } catch (e) {
      console.warn('Erreur sur un avis:', e);
    }
  });

  // Also extract overall metrics
  const ratingEl = document.querySelector('[class*="fontDisplayLarge"]') || document.querySelector('.fontDisplayLarge');
  const countEl = document.querySelector('[class*="fontBodySmall"]');

  const metrics = {
    overall_rating: ratingEl ? ratingEl.textContent.trim() : 'non trouvé',
    review_count: 'voir ci-dessous',
  };

  // Try to find review count from various places
  const allText = document.body.innerText;
  const countMatch = allText.match(/(\d+)\s*avis/);
  if (countMatch) metrics.review_count = countMatch[1];

  const result = { metrics, reviews, extracted_at: new Date().toISOString() };

  console.log('=== AVIS GOOGLE STRICTFOOD ===');
  console.log(JSON.stringify(result, null, 2));
  console.log('=== Copie le JSON ci-dessus et colle-le dans le chat Claude ===');

  // Also copy to clipboard
  navigator.clipboard.writeText(JSON.stringify(result, null, 2))
    .then(() => console.log('✅ Copié dans le presse-papier !'))
    .catch(() => console.log('⚠ Copie manuelle nécessaire — sélectionne le JSON ci-dessus'));

  return result;
})();
