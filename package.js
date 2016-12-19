Package.describe({
  name: 'lucetius:rollbar-server',
  version: '0.0.2',
  summary: 'Rollbar error reporting for Meteor server side',
  git: 'https://github.com/lucetius/rollbar-server.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  Npm.depends({ rollbar: '0.6.3' });
  api.addFiles('rollbar-server.js', 'server');
  api.export(['rollbar'], 'server');
});
