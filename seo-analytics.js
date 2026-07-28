(function (window, document) {
  'use strict';
  var consentKey = 'bts_marketing_consent_v1';
  var measurementId = 'G-ENLSDKGPEM';
  var pixelId = '27659132467077469';
  var accepted = false;
  try { accepted = window.localStorage.getItem(consentKey) === 'accepted'; } catch (error) {}
  if (!accepted) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip: true, allow_google_signals: false, allow_ad_personalization_signals: false });
  var googleScript = document.createElement('script'); googleScript.async = true; googleScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId); document.head.appendChild(googleScript);
  if (!window.__btsMetaLoaded) {
    window.__btsMetaLoaded = true;
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = true; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = true; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', pixelId); window.fbq('track', 'PageView');
  }
  window.gtag('event', 'page_view', { page_title: document.title, page_location: window.location.href, page_path: window.location.pathname });
  document.addEventListener('click', function (event) {
    var link = event.target && event.target.closest ? event.target.closest('a') : null; if (!link) return;
    var href = String(link.getAttribute('href') || '');
    var method = href.indexOf('tel:') === 0 ? 'phone' : href.indexOf('https://wa.me/') === 0 ? 'whatsapp' : href.indexOf('mailto:') === 0 ? 'email' : '';
    if (!method) return;
    window.gtag('event', 'contact', { contact_method: method, page_path: window.location.pathname });
    if (window.fbq) window.fbq('track', 'Contact', { contact_method: method });
  });
})(window, document);
