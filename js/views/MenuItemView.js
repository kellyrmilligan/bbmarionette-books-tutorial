define(['marionette', 'backbone','hbs!templates/menu', 'controllers/BookController', 'vent'],
  function (Marionette, Backbone, MenuTemplate, vent) {

  var MenuItemView = Marionette.ItemView.extend({
    template: MenuTemplate,

    events: {
      'click .js-menu-books': 'showLibraryApp',
      'click .js-menu-close': 'closeApp'
    },

    showLibraryApp: function (e) {
      e.preventDefault();
      Backbone.history.navigate('/', true)
    },

    closeApp: function (e) {
      e.preventDefault();
      Backbone.history.navigate('close', true);
    }

  });

  return MenuItemView;
});