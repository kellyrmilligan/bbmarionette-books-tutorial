define(['marionette', 'regions/ContentRegion', 'views/CloseItemView', 'vent'],
  function (Marionette, ContentRegion, CloseItemView, vent) {

  var CloseController = Marionette.Controller.extend({

    initialize: function (options) {
    },

    close: function () {
      var closeItemView = new CloseItemView();
      ContentRegion.show(closeItemView);
      Backbone.history.navigate('close', true);
    },

  });

  return CloseController;
});