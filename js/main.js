/* Transport request form: builds a mailto with all fields, no backend required. */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('request-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var get = function (name) {
        var el = form.elements[name];
        return el ? el.value.trim() : '';
      };

      var lines = [
        'Name: ' + get('name'),
        'Company / Funeral parlour: ' + get('company'),
        'Phone: ' + get('phone'),
        'WhatsApp number: ' + get('whatsapp'),
        'Email: ' + get('email'),
        'Collection point: ' + get('collection'),
        'Destination: ' + get('destination'),
        'Date and time required: ' + get('datetime'),
        'Is this urgent?: ' + get('urgency'),
        'Deceased name (optional): ' + get('deceased'),
        'Documentation available?: ' + get('documentation'),
        'Special handling required?: ' + get('handling'),
        'Message: ' + get('message')
      ];

      var subject = encodeURIComponent('Transport request — ' + (get('company') || get('name') || 'New enquiry'));
      var body = encodeURIComponent(lines.join('\n'));
      window.location.href = window.BTS.mailLink + '?subject=' + subject + '&body=' + body;

      form.hidden = true;
      var success = document.getElementById('request-success');
      if (success) success.hidden = false;
    });
  });
})();
