define(['marionette', 'backbone', 'vent'],
  function (Marionette, Backbone, vent) {

  var CloseRouter = Marionette.AppRouter.extend({
    appRoutes: {
      "close": "close",
    }

  });

  return CloseRouter;
});