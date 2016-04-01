Package.describe({
  name: 'mys:mys11',
  summary: 'Reproduction',
  version: '1.3.1_1',
  documentation: null
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.0.1');
  api.add_files([
    'index.js'
  ], 'client', {
    transpile: false
  });
});
