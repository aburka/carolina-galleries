/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'carolina-galleries',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      applicationId: 'PaFAu2kO46oTycsnl24y1PW4eplJYhqLclUewK0X',
      restApiId: 'n1NfFjm1FopNhvNrxEqGk3JZwOwnv3nCCViOSZXC'
    },

    contentSecurityPolicy: {
      'default-src': "'self' www.google.com",
      'script-src': "'self' api.artsy.net",
      'font-src': "'self' *",
      'connect-src': "'self' *",
      'img-src': "'self' *",
      'style-src': "'self' *",
      'media-src': "'self'",
    },

    'simple-auth': {
      authenticationRoute: 'application',
      routeAfterAuthentication: 'index',
      routeIfAlreadyAuthenticated: 'index',
      authorizer: 'authorizer:parse',
      crossOriginWhitelist: ['https://api.parse.com']
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/carolina-galleries/';
  }

  return ENV;
};
