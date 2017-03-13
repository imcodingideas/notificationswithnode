const notifier = require('node-notifier');

notifier.notify('Go buy dog food!');

notifier.notify({
  'title': 'Pay The Bills',
  'subtitle': 'Monthly Maintenance',
  'message': 'Go pay your bills',
  'wait': true
});