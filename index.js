const NotificationCenter = require('node-notifier').NotificationCenter;

let notifier = new NotificationCenter({
    withFallBack: true,
    customPath: void 0
})

notifier.notify({
  'title': void 0,
  'subtitle': void 0,
  'message': "Click 'reply' to send a message back",
  'icon': 'Terminal Icon',
  'contentImage': void 0,
  'open': void 0,
  'wait': false,

  timeout: 10,
  closeLabel: void 0, 
  actions: void 0,
  dropdownLabel: void 0,
  reply: false
}, (error, response, metadata) => {
    console.log(error, response, metadata);
});

notifier.on('click', (obj, options) => {
  const spawn = require('child_process').spawn;
  const cmd = spawn('open', ['http://joseph.michael-chambers.com']);
});

notifier.on('close', (obj, options) => {});