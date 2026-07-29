(function (window, document) {
  'use strict';

  var consentKey = 'bts_marketing_consent_v1';
  var measurementId = 'G-ENLSDKGPEM';
  var pixelId = '27659132467077469';

  function getConsent() {
    try { return window.localStorage.getItem(consentKey); } catch (error) { return null; }
  }

  function setConsent(choice) {
    try { window.localStorage.setItem(consentKey, choice); } catch (error) {}
    var banner = document.querySelector('[data-bts-seo-consent]');
    if (banner) banner.hidden = true;
    if (choice === 'accepted') loadMeasurement();
  }

  function ensureConsentBanner() {
    if (!document.body || document.querySelector('[data-bts-seo-consent]')) return;
    var style = document.createElement('style');
    style.textContent = '.bts-seo-consent{position:fixed;z-index:1000;left:max(14px,env(safe-area-inset-left));right:max(14px,env(safe-area-inset-right));bottom:max(14px,env(safe-area-inset-bottom));width:min(760px,calc(100% - 28px));margin:0 auto;padding:13px 15px;display:flex;align-items:center;justify-content:space-between;gap:16px;color:#202124;background:rgba(255,255,255,.97);border:1px solid #DADCE0;border-radius:16px;box-shadow:0 16px 46px rgba(23,32,51,.2);font:14px/1.45 Roboto,Arial,sans-serif}.bts-seo-consent__copy{display:grid;gap:2px;min-width:0}.bts-seo-consent__copy strong{font-size:13px}.bts-seo-consent__copy span{color:#5F6368;font-size:12px}.bts-seo-consent__copy a{color:#0B57D0;font-weight:600}.bts-seo-consent__actions{display:flex;gap:8px;flex:0 0 auto}.bts-seo-consent button{min-height:38px;padding:0 13px;border:1px solid #DADCE0;border-radius:999px;color:#3C4043;background:#fff;font:600 12px/1 Roboto,Arial,sans-serif;cursor:pointer}.bts-seo-consent button[data-bts-consent-choice="accepted"]{color:#fff;background:#1A73E8;border-color:#1A73E8}@media(max-width:620px){.bts-seo-consent{align-items:stretch;flex-direction:column;gap:10px;padding:14px}.bts-seo-consent__actions{display:grid;grid-template-columns:1fr 1fr}.bts-seo-consent button{width:100%}}';
    document.head.appendChild(style);
    var banner = document.createElement('aside');
    banner.className = 'bts-seo-consent';
    banner.setAttribute('data-bts-seo-consent', '');
    banner.setAttribute('aria-label', 'Privacy choices');
    banner.innerHTML = '<div class="bts-seo-consent__copy"><strong>Privacy choices</strong><span>Google Analytics and the Meta Pixel run only if you allow measurement. <a href="/privacy.html">Privacy and cookies</a></span></div><div class="bts-seo-consent__actions"><button type="button" data-bts-consent-choice="declined">Not now</button><button type="button" data-bts-consent-choice="accepted">Allow measurement</button></div>';
    banner.addEventListener('click', function (event) {
      var control = event.target && event.target.closest ? event.target.closest('[data-bts-consent-choice]') : null;
      if (control) setConsent(control.getAttribute('data-bts-consent-choice'));
    });
    document.body.appendChild(banner);
  }

  function loadMetaPixel() {
    if (window.__btsMetaLoaded) return;
    window.__btsMetaLoaded = true;
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = true; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = true; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
  }

  function loadGoogleAnalytics() {
    if (window.__btsGoogleLoaded) return;
    window.__btsGoogleLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { send_page_view: false, anonymize_ip: true, allow_google_signals: false, allow_ad_personalization_signals: false });
    var googleScript = document.createElement('script');
    googleScript.async = true;
    googleScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(googleScript);
    window.gtag('event', 'page_view', { page_title: document.title, page_location: window.location.href, page_path: window.location.pathname });
  }

  function attachContactEvents() {
    if (window.__btsSeoEventsAttached) return;
    window.__btsSeoEventsAttached = true;
    document.addEventListener('click', function (event) {
      var link = event.target && event.target.closest ? event.target.closest('a') : null;
      if (!link) return;
      var href = String(link.getAttribute('href') || '');
      var method = href.indexOf('tel:') === 0 ? 'phone' : href.indexOf('https://wa.me/') === 0 ? 'whatsapp' : href.indexOf('mailto:') === 0 ? 'email' : '';
      if (!method) return;
      var eventName = method === 'whatsapp' ? 'whatsapp_click' : method === 'phone' ? 'phone_click' : 'email_click';
      window.gtag('event', eventName, { link_url: href.split('?')[0], page_path: window.location.pathname });
      if (window.fbq) window.fbq('track', 'Contact', { contact_method: method });
    });
  }

  function loadMeasurement() {
    loadGoogleAnalytics();
    loadMetaPixel();
    attachContactEvents();
  }

  window.btsOpenCookieSettings = function () {
    var banner = document.querySelector('[data-bts-seo-consent]');
    if (banner) banner.hidden = false;
  };

  document.addEventListener('DOMContentLoaded', function () {
    ensureConsentBanner();
    var banner = document.querySelector('[data-bts-seo-consent]');
    if (banner) banner.hidden = !!getConsent();
  });

  if (getConsent() === 'accepted') loadMeasurement();
})(window, document);
