// Simple dictionary for dynamic translations
const translations = {
  fr: {
    // Nav / Common
    "select_lang": "Langue",
    // Page Content
    "support_title": "Centre d'assistance",
    "support_welcome": "Bienvenue sur notre page d'assistance. Comment pouvons-nous vous aider aujourd'hui?",
    "faq_title": "Foire aux questions",
    "privacy_title": "Politique de confidentialité",
    "privacy_desc": "Votre vie privée est importante pour nous. Cette page explique comment nous collectons et protégeons vos données.",
    "contact_title": "Contactez-nous",
    "contact_desc": "Vous avez des questions? Remplissez le formulaire ci-dessous pour contacter notre équipe.",
    "label_name": "Nom",
    "label_email": "E-mail",
    "label_message": "Message",
    "btn_submit": "Envoyer le message"
  },
  es: {
    // Nav / Common
    "select_lang": "Idioma",
    // Page Content
    "support_title": "Centro de Soporte",
    "support_welcome": "Bienvenido a nuestra página de soporte. ¿Cómo podemos ayudarte hoy?",
    "faq_title": "Preguntas Frecuentes",
    "privacy_title": "Política de Privacidad",
    "privacy_desc": "Su privacidad es importante para nosotros. Esta política describe cómo recopilamos y protegemos su información.",
    "contact_title": "Contáctenos",
    "contact_desc": "¿Tiene preguntas? Complete el siguiente formulario para ponerse en contacto con nuestro equipo.",
    "label_name": "Nombre",
    "label_email": "Correo Electrónico",
    "label_message": "Mensaje",
    "btn_submit": "Enviar Mensaje"
  }
};

/**
 * Switch language using URL parameters (?lang=fr)
 */
function switchLanguage(lang) {
  const url = new URL(window.location.href);
  if (lang === 'en') {
    url.searchParams.delete('lang'); // Default language cleans URL
  } else {
    url.searchParams.set('lang', lang);
  }
  window.location.href = url.toString();
}

/**
 * Load page translations and sync selector
 */
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang') || 'en';

  // Set selector dropdown value
  const selectElem = document.getElementById('lang-select');
  if (selectElem) {
    selectElem.value = lang;
  }

  // Apply translations if not English
  if (lang !== 'en' && translations[lang]) {
    const dict = translations[lang];
    document.querySelectorAll('[data-data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-data-i18n');
      if (dict[key]) {
        if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
          elem.placeholder = dict[key];
        } else {
          elem.textContent = dict[key];
        }
      }
    });
  }
});
