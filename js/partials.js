/*
 * Site-wide header, footer and sticky call bar.
 * Update PHONE / WHATSAPP / EMAIL below once — every page picks it up.
 */
(function () {
  var PHONE = '+27 00 000 0000';
  var WHATSAPP = '+27 00 000 0000';
  var EMAIL = 'info@bodytransportsolutions.co.za';

  var waDigits = WHATSAPP.replace(/[^0-9]/g, '');
  var telLink = 'tel:' + PHONE.replace(/[^+0-9]/g, '');
  var waLink = waDigits ? 'https://wa.me/' + waDigits : 'contact.html';
  var mailLink = 'mailto:' + EMAIL;

  var PAGES = [
    { key: 'home', label: 'Home', href: '/' },
    { key: 'about', label: 'About', href: '/about' },
    { key: 'services', label: 'Services', href: '/services' },
    { key: 'compliance', label: 'Compliance', href: '/compliance' },
    { key: 'process', label: 'Job Process', href: '/process' },
    { key: 'areas', label: 'Areas', href: '/areas' },
    { key: 'partners', label: 'Partners', href: '/partners' },
    { key: 'contact', label: 'Contact', href: '/contact' }
  ];

  function navPills(activeKey) {
    return PAGES.map(function (p) {
      var cls = 'nav-pill' + (p.key === activeKey ? ' active' : '');
      return '<a href="' + p.href + '" class="' + cls + '">' + p.label + '</a>';
    }).join('');
  }

  function headerHTML(activeKey) {
    return (
      '<header class="site-header">' +
        '<div class="header-top">' +
          '<a href="/" class="brand">' +
            '<div class="brand-badge">BT</div>' +
            '<div class="brand-text">' +
              '<span class="brand-name">Body Transport Solutions</span>' +
              '<span class="brand-tag">Transport-only &middot; 24/7 &middot; South Africa</span>' +
            '</div>' +
          '</a>' +
          '<a href="/request" class="btn btn-primary btn-sm header-cta">Request transport</a>' +
        '</div>' +
        '<nav class="primary-nav">' + navPills(activeKey) + '</nav>' +
        '<div class="flag-bar"></div>' +
      '</header>'
    );
  }

  function footerHTML() {
    var footerLinks = PAGES.concat([{ key: 'request', label: 'Request Transport', href: '/request' }])
      .map(function (p) { return '<a href="' + p.href + '">' + p.label + '</a>'; })
      .join('');

    return (
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="footer-top">' +
            '<div class="footer-brand">' +
              '<div class="footer-brand-row">' +
                '<div class="brand-badge sm">BT</div>' +
                '<span class="brand-name">Body Transport Solutions</span>' +
              '</div>' +
              '<p style="font-size:13px;line-height:1.65">National human remains transport &amp; repatriation support. Based in the Cato Ridge / Camperdown / Durban corridor, KwaZulu-Natal.</p>' +
              '<p style="font-size:12px;color:var(--text-tertiary)">Reg No. 2026/464849/07 &middot; Tax No. 9001928366</p>' +
              '<div style="height:4px;width:120px;border-radius:2px;background:var(--flag-gradient)"></div>' +
            '</div>' +
            '<div class="footer-cols">' +
              '<nav class="footer-col">' +
                '<span class="footer-col-title">Pages</span>' + footerLinks +
              '</nav>' +
              '<div class="footer-col">' +
                '<span class="footer-col-title">Contact</span>' +
                '<a href="' + telLink + '">' + PHONE + '</a>' +
                '<a href="' + waLink + '">WhatsApp 24/7</a>' +
                '<a href="' + mailLink + '">' + EMAIL + '</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="footer-bottom">' +
            '<p class="footer-legal">BODY TRANSPORT SOLUTIONS (PTY) LTD is a transport-only service provider. We do not operate as a funeral parlour, mortuary, embalming facility, crematorium, burial service or funeral policy provider. All services are subject to applicable documentation, legal, municipal, health and transport requirements.</p>' +
          '</div>' +
        '</div>' +
      '</footer>'
    );
  }

  function stickyBarHTML() {
    return (
      '<div class="sticky-bar">' +
        '<a href="' + telLink + '" class="sticky-btn sticky-call">' +
          '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 2.5C3 2.5 5 2 5.5 3.5L6.5 5.5C6.8 6.2 5.5 7 5.5 7.5C5.5 8.5 7.5 10.5 8.5 10.5C9 10.5 9.8 9.2 10.5 9.5L12.5 10.5C14 11 13.5 13 13.5 13C13 14 11.5 14.2 10.5 14C6.5 13 3 9.5 2 5.5C1.8 4.5 2 3 3 2.5Z" stroke="#FFFFFF" stroke-width="1.3" stroke-linejoin="round"></path></svg>' +
          'Call now' +
        '</a>' +
        '<a href="' + waLink + '" class="sticky-btn sticky-wa">' +
          '<svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M9 1.5C13.1 1.5 16.5 4.9 16.5 9C16.5 13.1 13.1 16.5 9 16.5C7.7 16.5 6.5 16.2 5.4 15.6L1.5 16.5L2.5 12.8C1.9 11.7 1.5 10.4 1.5 9C1.5 4.9 4.9 1.5 9 1.5Z" stroke="#FFFFFF" stroke-width="1.4" stroke-linejoin="round"></path><path d="M6.2 6.8C6.2 6.8 6.6 6 7 6C7.4 6 8 7.2 8 7.5C8 7.8 7.4 8.2 7.4 8.5C7.4 9 8.9 10.6 9.5 10.6C9.8 10.6 10.2 10 10.5 10C10.8 10 12 10.7 12 11C12 11.5 11.2 11.9 11.2 11.9" stroke="#FFFFFF" stroke-width="1.3" stroke-linecap="round"></path></svg>' +
          'WhatsApp' +
        '</a>' +
      '</div>'
    );
  }

  window.BTS = {
    PHONE: PHONE,
    WHATSAPP: WHATSAPP,
    EMAIL: EMAIL,
    telLink: telLink,
    waLink: waLink,
    mailLink: mailLink,
    headerHTML: headerHTML,
    footerHTML: footerHTML,
    stickyBarHTML: stickyBarHTML
  };
})();
