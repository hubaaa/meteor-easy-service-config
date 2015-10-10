Package.describe({
  name: 'hubaaa:easy-service-config',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Automatically loads the accounts-whatever service configurations from Meteor.settings.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hubaaa/meteor-easy-service-config',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'meteor',
    'underscore',
    'coffeescript',
    'service-configuration',
    'practicalmeteor:loglevel@1.2.0_2',
    'practicalmeteor:chai@2.1.0_1',
    'hubaaa:easy-meteor-settings@0.1.0'
  ], 'server');

  api.addFiles('EasyServiceConfig.coffee', 'server');
});

Package.onTest(function(api) {
  api.use([
    'underscore',
    'coffeescript',
    'practicalmeteor:mocha@2.1.0_3'
  ], 'server');

  api.use('tinytest');
  api.use('hubaaa:easy-service-config@0.1.0');

  api.addFiles('EasyServiceConfigTest.coffee', 'server');
});
