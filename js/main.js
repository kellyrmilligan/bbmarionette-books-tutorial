require.config({
  paths : {
    backbone : 'lib/backbone-min',
    underscore : 'lib/lodash.underscore.min',
    jquery : 'lib/jquery.min',
    marionette : 'lib/backbone.marionette',
    'backbone.wreqr' : 'lib/backbone.wreqr',
    'backbone.babysitter' : 'lib/backbone.babysitter',
    hbs : 'lib/hbs',
    Handlebars : 'lib/Handlebars',
    bootstrap: 'lib/bootstrap.min'
  },
  shim : {
    jquery : {
      exports : 'jQuery'
    },
    underscore : {
      exports : '_'
    },
    backbone : {
      deps : ['jquery', 'underscore'],
      exports : 'Backbone'
    },
    'backbone.wreqr': {
      deps : ['backbone']
    },
    'backbone.babysitter': {
      deps : ['backbone']
    },
    bootstrap : {
      deps: ['jquery']
    }
  },

  hbs: {
    disableI18n: true,

    disableHelpers: true

  }
});



require(['app', 'vent', 'bootstrap'], function (app, vent) {

  $(function() {

    var options = {};

    app.start(options);

  });

});