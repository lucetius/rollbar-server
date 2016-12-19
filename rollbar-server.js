rollbar = Npm.require('rollbar');

rollbarServerAccessToken = null;

Meteor.startup(function () {
    rollbarServerAccessToken = process.env.ROLLBAR_SERVER_ACCESS_TOKEN;
    rollbarEnvironment = process.env.ROLLBAR_ENVIRONMENT || 'development';
    rollbar.init(rollbarServerAccessToken, {
        environment: rollbarEnvironment
    });
    rollbar.handleUncaughtExceptions(rollbarServerAccessToken);
});