/**
 * Switches site language by directing to /en/, /fr/, or /es/ directory paths
 */
function switchLanguage(lang) {
  const currentPath = window.location.pathname;
  const supportedLangs = ['en', 'fr', 'es'];
  
  // Split path into segments
  let segments = currentPath.split('/').filter(Boolean);
  
  // Update language segment or add if missing
  if (supportedLangs.includes(segments[0])) {
    segments[0] = lang;
  } else {
    segments.unshift(lang);
  }
  
  // Redirect to new path
  window.location.href = '/' + segments.join('/');
}

/**
 * Auto-selects active language in dropdown on load based on URL segment
 */
document.addEventListener('DOMContentLoaded', () => {
  const selectElem = document.getElementById('lang-select');
  if (!selectElem) return;

  const path = window.location.pathname;
  if (path.includes('/fr/')) {
    selectElem.value = 'fr';
  } else if (path.includes('/es/')) {
    selectElem.value = 'es';
  } else {
    selectElem.value = 'en'; // Default
  }
});
