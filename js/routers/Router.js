define(['marionette', 'backbone', 'vent'],
  function (Marionette, Backbone, vent) {

  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      '': 'default',
      'search/:searchTerm': 'search'
    }

  });

  vent.on('search:term', function (searchTerm) {
    Backbone.history.navigate('search/' + searchTerm);
  });

  return Router;
});